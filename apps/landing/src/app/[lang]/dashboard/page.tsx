import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTranslations, isLang, type Lang } from "@/lib/i18n";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";

// Mock analytics data - in production, fetch from database
const getMockAnalyticsData = () => ({
  activeUsers: 1_234,
  totalActivations: 45_678,
  weeklyGrowth: 12,
  complianceScore: 95,
  featureUsage: [
    { name: "High Contrast", percentage: 32, count: 14_617 },
    { name: "Text Size", percentage: 28, count: 12_790 },
    { name: "Dyslexia Font", percentage: 22, count: 10_049 },
    { name: "Dark Mode", percentage: 12, count: 5_482 },
    { name: "Focus Indicators", percentage: 6, count: 2_740 },
  ],
  topPages: [
    { url: "/products/best-sellers", activations: 8_432, users: 3_120 },
    { url: "/checkout/cart", activations: 6_215, users: 2_840 },
    { url: "/contact", activations: 4_931, users: 1_950 },
    { url: "/about-us", activations: 3_847, users: 1_623 },
    { url: "/pricing", activations: 2_564, users: 1_089 },
  ],
  hourlyTrend: [
    { hour: "12am", users: 45 },
    { hour: "3am", users: 32 },
    { hour: "6am", users: 78 },
    { hour: "9am", users: 156 },
    { hour: "12pm", users: 234 },
    { hour: "3pm", users: 312 },
    { hour: "6pm", users: 289 },
    { hour: "9pm", users: 167 },
  ],
});

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/${lang}/auth/signin`);
  }

  const t = getTranslations(lang).dashboard;
  const analyticsData = getMockAnalyticsData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
              {t.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--color-text-muted)]">
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[var(--color-surface)] p-3 rounded-xl border border-[var(--color-border)]">
            <div className="text-right">
              <div className="text-xs font-bold text-[var(--color-text)]">
                {session.user?.email}
              </div>
              <a
                href={`/${lang}/api/auth/signout`}
                className="text-[10px] text-red-500 hover:underline font-medium"
              >
                {lang === "es" ? "Cerrar sesión" : lang === "pt" ? "Sair" : "Sign out"}
              </a>
            </div>
            {session.user?.image && (
              <img
                src={session.user.image}
                alt={session.user?.email || "User"}
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
            )}
          </div>
        </header>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard data={analyticsData} />

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-900">
            📊 <strong>Real-time data:</strong> Analytics update every minute.
            <br />
            💾 <strong>Data retention:</strong> 90 days of historical data available.
            <br />
            📈 <strong>Premium features:</strong> Upgrade for 2+ years of data and advanced reporting.
          </p>
        </div>
      </div>
    </main>
  );
}
