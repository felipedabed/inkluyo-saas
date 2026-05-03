import { notFound } from "next/navigation";
import { getTranslations, isLang, type Lang } from "@/lib/i18n";
import { SnippetGenerator } from "@/components/get-started/SnippetGenerator";

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang).getStarted;

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {t.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-text-muted)]">
            {t.subtitle}
          </p>
        </header>
        <SnippetGenerator t={t} initialLang={lang} />
      </div>
    </main>
  );
}
