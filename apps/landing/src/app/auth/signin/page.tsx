import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import SignInForm from "@/components/auth/SignInForm";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Inkluyo</h1>
            <p className="text-gray-600">Sign in with Magic Link</p>
          </div>

          <SignInForm />

          <p className="text-center text-sm text-gray-600 mt-8">
            We&apos;ll send you a sign-in link via email.
            <br />
            No password needed!
          </p>
        </div>
      </div>
    </div>
  );
}
