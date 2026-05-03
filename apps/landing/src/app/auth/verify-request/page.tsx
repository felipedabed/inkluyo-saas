export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">✅</div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Check your email
          </h1>

          <p className="text-gray-600 mb-6">
            A sign-in link has been sent to your email address.
            Click the link to log in to your account.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>💡 Tip:</strong> The link expires in 24 hours.
              If you don't see the email, check your spam folder.
            </p>
          </div>

          <a
            href="/"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
