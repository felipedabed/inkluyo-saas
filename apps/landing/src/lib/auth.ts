import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { resend } from "@/lib/resend";

// In-memory adapter for NextAuth
const users = new Map<string, any>();
const sessions = new Map<string, any>();
const verificationTokens = new Map<string, any>();

const memoryAdapter: any = {
  async createUser(user: any) {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    const id = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    const newUser = { ...user, id };
    users.set(id, newUser);
    return newUser;
  },
  async getUser(id: any) {
    return users.get(id) || null;
  },
  async getUserByEmail(email: any) {
    return Array.from(users.values()).find((u) => u.email === email) || null;
  },
  async getUserByAccount() {
    return null; // Not needed for email provider
  },
  async updateUser(user: any) {
    if (!user.id) return user;
    users.set(user.id, user);
    return user;
  },
  async deleteUser(userId: any) {
    users.delete(userId);
  },
  async linkAccount(account: any) {
    return account;
  },
  async unlinkAccount() {
    // Not needed
  },
  async createSession({ sessionToken, userId, expires }: any) {
    const session = { sessionToken, userId, expires };
    sessions.set(sessionToken, session);
    return session;
  },
  async getSessionAndUser(sessionToken: any) {
    const session = sessions.get(sessionToken);
    if (!session) return null;
    const user = users.get(session.userId);
    if (!user) return null;
    return { session, user };
  },
  async updateSession({ sessionToken, expires }: any) {
    const session = sessions.get(sessionToken);
    if (!session) return null;
    const updated = { ...session, expires };
    sessions.set(sessionToken, updated);
    return updated;
  },
  async deleteSession(sessionToken: any) {
    sessions.delete(sessionToken);
  },
  async createVerificationToken({ identifier, token, expires }: any) {
    verificationTokens.set(token, { identifier, token, expires });
    return { identifier, token, expires };
  },
  async useVerificationToken({ identifier, token }: any) {
    const verificationToken = verificationTokens.get(token);
    if (!verificationToken || verificationToken.identifier !== identifier) return null;
    verificationTokens.delete(token);
    return verificationToken;
  },
};

export const authOptions: NextAuthOptions = {
  adapter: memoryAdapter,
  session: {
    strategy: "database",
  },
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
            console.log(`[NextAuth] Email sent to ${email}`);
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
  callbacks: {
    async signIn({ user, email }) {
      console.log("[NextAuth] signIn callback:", { user: user?.email, email });
      return true;
    },
    async session({ session, user }) {
      if (session.user && user) {
        (session.user as any).id = (user as any).id;
      }
      console.log("[NextAuth] session callback:", session.user?.email);
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("[NextAuth] redirect callback:", { url, baseUrl });
      // Allow redirects to the same origin
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allow redirects to the app domain
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl + "/dashboard";
    },
  },
  debug: process.env.NODE_ENV === "development",
};
