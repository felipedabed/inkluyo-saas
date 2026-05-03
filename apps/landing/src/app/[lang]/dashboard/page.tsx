import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTranslations, isLang, type Lang } from "@/lib/i18n";
import { DashboardMockup } from "@/components/dashboard/DashboardMockup";

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

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {t.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--color-text-muted)]">
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[var(--color-surface)] p-2 rounded-xl border border-[var(--color-border)]">
            <div className="text-right">
              <div className="text-xs font-bold">{session.user?.email}</div>
              <a href={`/${lang}/api/auth/signout`} className="text-[10px] text-red-500 hover:underline">Cerrar sesión</a>
            </div>
            {session.user?.image && <img src={session.user.image} alt="" className="w-10 h-10 rounded-full border border-white shadow-sm" />}
          </div>
        </header>
        <DashboardMockup t={t} />
      </div>
    </main>
  );
}
