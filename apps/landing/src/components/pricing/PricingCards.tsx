"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lang, Translations } from "@/lib/i18n";

interface Props {
  lang: Lang;
  t: Translations["pricing"];
}

export function PricingCards({ lang, t }: Props) {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[var(--color-surface)] rounded-full p-1 gap-1 border border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setYearly(false)}
            aria-pressed={!yearly}
            className={
              "px-4 py-1.5 rounded-full text-sm font-semibold transition " +
              (!yearly
                ? "bg-white shadow text-[var(--color-text)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]")
            }
          >
            {t.monthly}
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
            className={
              "px-4 py-1.5 rounded-full text-sm font-semibold transition " +
              (yearly
                ? "bg-white shadow text-[var(--color-text)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]")
            }
          >
            {t.yearly}{" "}
            <span className="ml-1 text-[10px] font-bold text-[var(--color-brand)]">
              {t.yearlyHint}
            </span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
        {t.tiers.map((tier) => {
          const popular = tier.id === "pro";
          const isEnterprise = tier.id === "enterprise";
          return (
            <div
              key={tier.id}
              className={
                "relative rounded-2xl border bg-white p-6 flex flex-col transition " +
                (popular
                  ? "border-[var(--color-brand)] shadow-[0_8px_28px_rgba(108,71,255,0.18)]"
                  : "border-[var(--color-border)]")
              }
            >
              {popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
                  }}
                >
                  {t.badgePopular}
                </span>
              )}
              <h3 className="text-lg font-extrabold tracking-tight">
                {tier.name}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] min-h-[40px]">
                {tier.tagline}
              </p>
              <div className="my-5">
                {tier.priceMonthly === null ? (
                  <>
                    <span className="text-4xl font-extrabold tracking-tight">
                      {t.priceCustom}
                    </span>
                    <div className="text-xs text-[var(--color-text-muted)] mt-1">
                      {t.priceCustomHint}
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold tracking-tight">
                      $
                      {yearly
                        ? Math.floor(tier.priceMonthly * 0.8)
                        : tier.priceMonthly}
                      <span className="text-base font-medium text-[var(--color-text-muted)]">
                        {t.perMonth}
                      </span>
                    </span>
                    {yearly && tier.priceMonthly > 0 && (
                      <div className="text-xs text-[var(--color-text-muted)] mt-1">
                        ${Math.floor(tier.priceMonthly * 0.8) * 12} /year
                      </div>
                    )}
                  </>
                )}
              </div>
              <ul className="space-y-2 text-sm flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="8" fill="var(--color-brand-tint)" />
                      <path
                        d="M5 8.5l2 2 4-4.5"
                        stroke="var(--color-brand-dark)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={isEnterprise ? "#contact" : `/${lang}/get-started`}
                className={
                  "mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition " +
                  (popular
                    ? "text-white shadow hover:opacity-95"
                    : "border border-[var(--color-border)] hover:bg-[var(--color-surface)] text-[var(--color-text)]")
                }
                style={
                  popular
                    ? {
                        background:
                          "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
                      }
                    : undefined
                }
              >
                {isEnterprise ? t.ctaContact : t.cta}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
