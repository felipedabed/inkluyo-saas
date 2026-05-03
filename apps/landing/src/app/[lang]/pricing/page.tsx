import { notFound } from "next/navigation";
import { getTranslations, isLang, type Lang } from "@/lib/i18n";
import { PricingCards } from "@/components/pricing/PricingCards";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang).pricing;

  return (
    <main className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)]">
            {t.eyebrow}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
            {t.title}
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)] text-lg">
            {t.subtitle}
          </p>
        </div>

        <PricingCards lang={lang} t={t} />

        {/* FAQ */}
        <section className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight text-center mb-8">
            {t.faqHeadline}
          </h2>
          <div className="space-y-3">
            {t.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[var(--color-border)] bg-white p-5 cursor-pointer"
              >
                <summary className="font-semibold text-[var(--color-text)] flex items-center justify-between gap-3 list-none">
                  <span>{f.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-open:rotate-45 text-[var(--color-text-muted)] flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
