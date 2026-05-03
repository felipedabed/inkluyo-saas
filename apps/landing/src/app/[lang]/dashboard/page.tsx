import { notFound } from "next/navigation";
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
  const t = getTranslations(lang).dashboard;

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {t.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-text-muted)]">
            {t.subtitle}
          </p>
        </header>
        <DashboardMockup t={t} />
      </div>
    </main>
  );
}
