import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { resend } from "@/lib/resend";
import crypto from "crypto";
import fs from "fs";
import path from "path";

// In-memory user store for session persistence
const usersFile = path.join(process.cwd(), ".users.json");

interface StoredUser {
  id: string;
  email: string;
  createdAt: number;
  lastLogin: number;
}

function loadUsers(): Map<string, StoredUser> {
  const map = new Map<string, StoredUser>();
  try {
    if (fs.existsSync(usersFile)) {
      const data = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
      for (const [key, value] of Object.entries(data)) {
        map.set(key, value as StoredUser);
      }
    }
  } catch (error) {
    console.error("[Auth] Error loading users:", error);
  }
  return map;
}

function saveUsers(users: Map<string, StoredUser>) {
  try {
    const data: Record<string, StoredUser> = {};
    for (const [key, value] of users) {
      data[key] = value;
    }
    fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("[Auth] Error saving users:", error);
  }
}

export const authOptions: NextAuthOptions = {
  // No adapter - using custom callbacks instead
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
          console.log("[NextAuth] Sending verification link to:", email);
          console.log("[NextAuth] MAGIC LINK:", url);

          if (hasValidResendKey) {
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
            console.log("[NextAuth] Email sent successfully to:", email);
          }
        } catch (error) {
          console.error("[NextAuth] Error sending email:", error);
          // Don't throw - let NextAuth handle it
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, email }) {
      const emailToUse = (user?.email || email) as string;
      console.log("[NextAuth] signIn callback for:", emailToUse);

      // Get or create user
      const users = loadUsers();
      let storedUser = Array.from(users.values()).find(u => u.email === emailToUse);

      if (!storedUser) {
        storedUser = {
          id: crypto.randomBytes(16).toString("hex"),
          email: emailToUse,
          createdAt: Date.now(),
          lastLogin: Date.now(),
        };
        users.set(storedUser.id, storedUser);
        saveUsers(users);
        console.log("[NextAuth] New user created:", emailToUse);
      } else {
        storedUser.lastLogin = Date.now();
        users.set(storedUser.id, storedUser);
        saveUsers(users);
        console.log("[NextAuth] Existing user logged in:", emailToUse);
      }

      return true;
    },
    async session({ session }) {
      console.log("[NextAuth] session callback");
      if (session.user) {
        const users = loadUsers();
        const storedUser = Array.from(users.values()).find(
          u => u.email === session.user?.email
        );
        if (storedUser) {
          (session.user as any).id = storedUser.id;
        }
      }
      return session;
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
