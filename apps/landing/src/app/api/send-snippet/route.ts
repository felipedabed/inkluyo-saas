import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, snippet } = await request.json();

    if (!email || !snippet) {
      return NextResponse.json(
        { error: "Email and snippet are required." },
        { status: 400 }
      );
    }

    // SIMULACIÓN: Aquí iría la integración con Resend o SendGrid
    // await resend.emails.send({
    //   from: 'Inkluyo <onboarding@inkluyo.com>',
    //   to: email,
    //   subject: 'Tus instrucciones de instalación de Inkluyo',
    //   html: `<p>Hola,</p><p>Aquí tienes tu código de instalación:</p><pre>${snippet}</pre>`
    // });

    console.log(`[SIMULATED EMAIL] Enviado a: ${email}`);
    console.log(`[SIMULATED EMAIL] Contenido: ${snippet}`);

    // Simulamos un retraso de red
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Email enviado con éxito (simulado)." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
