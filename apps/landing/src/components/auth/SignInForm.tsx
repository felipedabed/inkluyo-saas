"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("[SignInForm] Attempting sign in for:", email);
      const result = await signIn("email", {
        email,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      console.log("[SignInForm] Sign in result:", {
        ok: result?.ok,
        error: result?.error,
        status: result?.status,
      });

      if (result?.error) {
        console.error("[SignInForm] Sign in error:", result.error);
        const errorMessage = getErrorMessage(result.error);
        setError(errorMessage);
      } else if (result?.ok === false) {
        console.error("[SignInForm] Sign in failed with status:", result.status);
        setError(
          "Failed to send sign-in link. Please check your email and try again."
        );
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("[SignInForm] Unexpected error:", err);
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong";
      setError(
        `Error: ${errorMsg}. Please try again or contact support.`
      );
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (error: string): string => {
    const errorMap: Record<string, string> = {
      "Could not send email": "Failed to send email. Please try again.",
      "Provider error": "Email provider is not configured correctly.",
      "Callback error": "Authentication service error. Please try again.",
      default: error,
    };

    for (const [key, value] of Object.entries(errorMap)) {
      if (key !== "default" && error.includes(key)) {
        return value;
      }
    }
    return errorMap.default;
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✉️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
        <p className="text-gray-600 mb-4">
          We sent a sign-in link to <strong>{email}</strong>
        </p>
        <p className="text-sm text-gray-500">
          The link expires in 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setEmail("");
          }}
          className="mt-6 text-blue-600 hover:text-blue-700 font-medium"
        >
          Try another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded-lg transition duration-200"
      >
        {loading ? "Sending link..." : "Send sign-in link"}
      </button>
    </form>
  );
}
