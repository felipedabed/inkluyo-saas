import { NextAuthOptions } from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import EmailProvider from "next-auth/providers/email";
import { resend } from "@/lib/resend";

// Initialize Supabase client with service role for adapter
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase configuration:", {
    url: !!supabaseUrl,
    serviceKey: !!supabaseServiceKey,
  });
}

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: supabaseUrl!,
    secret: supabaseServiceKey!,
  }) as any,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "",
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
        auth: {
          user: process.env.EMAIL_SERVER_USER || "",
          pass: process.env.EMAIL_SERVER_PASSWORD || "",
        },
      },
      from: process.env.EMAIL_FROM || "noreply@inkluyo.com",
      async sendVerificationRequest({ identifier: email, url }) {
        const hasValidResendKey =
          process.env.RESEND_API_KEY &&
          process.env.RESEND_API_KEY.startsWith("re_") &&
          process.env.RESEND_API_KEY.length > 10;

        try {
          if (hasValidResendKey) {
            console.log("[NextAuth] Sending email via Resend to:", email);
            const result = await resend.emails.send({
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
            console.log("[NextAuth] Resend response:", result);
          } else {
            // Fallback: log the link for development/testing
            console.log(
              "[NextAuth] MAGIC LINK (Resend not configured):",
              url
            );
          }
        } catch (error) {
          console.error("[NextAuth] Error sending verification email:", error);
          throw error;
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
    async signIn({ user, email }) {
      console.log("[NextAuth] Sign in attempt for:", user?.email || email);
      return true;
    },
  },
  events: {
    async signIn({ user, isNewUser }) {
      console.log("[NextAuth] User signed in:", {
        email: user?.email,
        isNew: isNewUser,
      });
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
};
