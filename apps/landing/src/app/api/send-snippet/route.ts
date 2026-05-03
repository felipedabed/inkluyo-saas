import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { email, snippet } = await request.json();

    if (!email || !snippet) {
      return NextResponse.json(
        { error: "Email and snippet are required." },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_...") {
      // Envío real con Resend
      const { data, error } = await resend.emails.send({
        from: 'Inkluyo <onboarding@resend.dev>', // Usar dominio verificado en producción
        to: email,
        subject: 'Tus instrucciones de instalación de Inkluyo 🚀',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #6c47ff;">¡Bienvenido a Inkluyo!</h1>
            <p>Gracias por elegirnos para hacer tu sitio más accesible.</p>
            <p>Aquí tienes tu código de instalación para pegar antes de la etiqueta <code>&lt;/head&gt;</code>:</p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; font-family: monospace; overflow-x: auto;">
              ${snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
            <p style="margin-top: 20px;">Si tienes alguna duda, responde a este correo.</p>
            <p>— El equipo de Inkluyo</p>
          </div>
        `
      });

      if (error) {
        console.error("[Resend Error]:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data });
    } else {
      // Simulación (Fallback)
      console.log(`[SIMULATED EMAIL] Enviado a: ${email}`);
      console.log(`[SIMULATED EMAIL] Contenido: ${snippet}`);
      
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json(
        { message: "Email enviado con éxito (simulado)." },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("[Send Snippet API Error]:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
