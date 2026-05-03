"use client";

import { useEffect, useState } from "react";
import type { Translations } from "@/lib/i18n";

interface Props {
  t: Translations["dashboard"];
}

export function DashboardMockup({ t }: Props) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Primera carga
    fetch("/api/analytics?siteId=demo-site")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);

    // Polling para mostrar "Live Updates" cuando activan features
    const id = setInterval(() => {
      fetch("/api/analytics?siteId=demo-site")
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  if (!data) {
    return <div className="py-20 text-center animate-pulse text-[var(--color-text-muted)]">Cargando analíticas...</div>;
  }

  return (
    <>
      <div
        className="rounded-xl px-4 py-3 mb-6 text-sm font-medium border"
        style={{
          background: "linear-gradient(135deg, #efeaff, #fff)",
          borderColor: "#d6c9ff",
          color: "#4f2fe0",
        }}
      >
        {t.mockBanner}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Metric
          label={t.metrics.activations}
          value={data.activations.toLocaleString()}
          accent
        />
        <Metric
          label={t.metrics.uniqueUsers}
          value={data.uniqueUsers.toLocaleString()}
        />
        <Metric label={t.metrics.mostUsed} value={data.top} />
        <Metric
          label={t.metrics.complianceScore}
          value={`${data.compliance}%`}
        />
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* Bar chart of features */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
            Feature usage (7d)
          </h3>
          <ul className="space-y-3">
            {data.featureCounts.map((f: any) => {
              const max = data.featureCounts[0].n;
              const pct = Math.round((f.n / max) * 100);
              return (
                <li key={f.f}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium">{f.f}</span>
                    <span className="text-[var(--color-text-muted)]">
                      {f.n}
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-[width] duration-700"
                      style={{
                        width: `${pct}%`,
                        background:
                          "linear-gradient(90deg, var(--color-brand), var(--color-brand-dark))",
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Recent table */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
            {t.recent.headline}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
                {t.recent.columns.map((c) => (
                  <th key={c} className="py-2 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.recent.map((r: any, i: number) => (
                <tr
                  key={i}
                  className="border-b border-[var(--color-border)] last:border-b-0"
                >
                  <td className="py-2 font-mono text-xs text-[var(--color-text-muted)]">
                    {r.time}
                  </td>
                  <td className="py-2 font-mono text-xs">{r.page}</td>
                  <td className="py-2">{r.feature}</td>
                  <td className="py-2">{r.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="../pricing"
          className="inline-flex items-center text-sm font-semibold px-4 py-2.5 rounded-lg text-white shadow-sm hover:opacity-95 transition"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
          }}
        >
          {t.cta}
        </a>
      </div>
    </>
  );
}

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border bg-white p-5"
      style={{
        borderColor: accent ? "var(--color-brand-tint)" : "var(--color-border)",
        boxShadow: accent
          ? "0 8px 24px rgba(108,71,255,0.12)"
          : "0 1px 2px rgba(0,0,0,0.02)",
      }}
    >
      <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
        {label}
      </div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight">{value}</div>
    </div>
  );
}
