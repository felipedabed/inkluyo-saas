"use client";

import { useState } from "react";
import type { Lang, Translations } from "@/lib/i18n";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ContactModal } from "@/components/common/ContactModal";

interface Props {
  lang: Lang;
  t: Translations["pricing"];
}

export function PricingPageClient({ lang, t }: Props) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        lang={lang}
      />

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

          <PricingCards
            lang={lang}
            t={t}
            onContactClick={() => setShowContactModal(true)}
          />

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
                        d="M8 3.33V12.67M3.33 8H12.67"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </summary>
                  <div className="mt-4 text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
