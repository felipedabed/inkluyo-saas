import { NextAuthOptions } from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import EmailProvider from "next-auth/providers/email";
import { resend } from "@/lib/resend";

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }) as any,
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier: email, url }) {
        if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_...") {
          await resend.emails.send({
            from: "Inkluyo <login@resend.dev>",
            to: email,
            subject: "Inicia sesión en Inkluyo 🔐",
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #6c47ff;">Inicia sesión</h1>
                <p>Haz clic en el botón de abajo para entrar a tu cuenta.</p>
                <a href="${url}" style="background: #6c47ff; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin-top: 20px;">Entrar a Inkluyo</a>
                <p style="margin-top: 30px; font-size: 12px; color: #888;">Si no solicitaste este correo, puedes ignorarlo.</p>
              </div>
            `,
          });
        } else {
          console.log(`[AUTH MAGIC LINK]: ${url}`);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        (session.user as any).id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
  },
};
