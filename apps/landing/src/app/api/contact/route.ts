import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, country, phone, website } = await req.json();

    if (!name || !email || !phone || !website) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: "Inkluyo <noreply@resend.dev>",
      to: "hola@inkluyo.com",
      subject: `New contact request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            This is an automated message from Inkluyo contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API Contact]", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
