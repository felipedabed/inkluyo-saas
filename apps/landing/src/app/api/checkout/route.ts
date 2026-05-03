import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const { priceId, planName, lang } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    // Origin para los redirects de success/cancel
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/${lang}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${lang}/pricing`,
      metadata: {
        planName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("[Stripe Checkout Error]:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
