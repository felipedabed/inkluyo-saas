import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { resend } from "@/lib/resend";

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier: email, url }) {
        console.log(`[NextAuth] Magic link for ${email}:`);
        console.log(`[NextAuth] ${url}`);

        const hasValidResendKey =
          process.env.RESEND_API_KEY &&
          process.env.RESEND_API_KEY.startsWith("re_") &&
          process.env.RESEND_API_KEY.length > 10;

        if (hasValidResendKey) {
          try {
            await resend.emails.send({
              from: "Inkluyo <login@resend.dev>",
              to: email,
              subject: "Sign in to Inkluyo 🔐",
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h1 style="color: #6c47ff;">Sign in to Inkluyo</h1>
                  <p>Click the button below to log in to your account.</p>
                  <a href="${url}" style="background: #6c47ff; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin-top: 20px;">Sign in to Inkluyo</a>
                  <p style="margin-top: 30px; font-size: 12px; color: #888;">If you didn't request this email, you can safely ignore it.</p>
                </div>
              `,
            });
          } catch (error) {
            console.error("[NextAuth] Resend error:", error);
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
  },
  debug: process.env.NODE_ENV === "development",
};
