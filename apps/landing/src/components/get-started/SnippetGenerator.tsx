"use client";

import { useEffect, useMemo, useState } from "react";
import { buildSnippet, resolveWidgetUrl } from "@/lib/widget-snippet";
import type { Lang, Translations } from "@/lib/i18n";
import { SnippetBlock } from "@/components/horrible/SnippetBlock";

interface Props {
  t: Translations["getStarted"];
  initialLang: Lang;
}

const COLOR_PALETTE = [
  "#6c47ff",
  "#0891b2",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#0f172a",
];

export function SnippetGenerator({ t, initialLang }: Props) {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("#6c47ff");
  const [position, setPosition] = useState<"bottom-right" | "bottom-left">(
    "bottom-right",
  );
  const [lang, setLang] = useState<Lang>(initialLang);
  const [hideBadge, setHideBadge] = useState(false);
  const [origin, setOrigin] = useState<string | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const snippet = useMemo(() => {
    const siteId = domain
      ? domain.replace(/^https?:\/\//, "").replace(/\W/g, "-")
      : undefined;
    return buildSnippet({
      scriptUrl: resolveWidgetUrl(origin),
      lang,
      position,
      primaryColor: color,
      hideBadge,
      siteId,
    });
  }, [domain, color, position, lang, hideBadge, origin]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* ---------- form ---------- */}
      <div className="space-y-5">
        <Field label={t.field.domain}>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder={t.field.domainPlaceholder}
            className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand-tint)]"
          />
        </Field>

        <Field label={t.field.email}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.field.emailPlaceholder}
            className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand-tint)]"
          />
        </Field>

        <Field label={t.field.color}>
          <div className="flex items-center gap-2 flex-wrap">
            {COLOR_PALETTE.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                aria-label={c}
                className="h-8 w-8 rounded-full transition hover:scale-110"
                style={{
                  background: c,
                  boxShadow:
                    color === c
                      ? "0 0 0 3px white, 0 0 0 5px " + c
                      : "0 1px 2px rgba(0,0,0,0.1)",
                }}
              />
            ))}
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-8 w-8 rounded cursor-pointer"
            />
          </div>
        </Field>

        <Field label={t.field.position}>
          <div className="inline-flex bg-[var(--color-surface)] rounded-lg p-1">
            {[
              { v: "bottom-right" as const, label: t.field.positionRight },
              { v: "bottom-left" as const, label: t.field.positionLeft },
            ].map((p) => (
              <button
                key={p.v}
                type="button"
                onClick={() => setPosition(p.v)}
                aria-pressed={position === p.v}
                className={
                  "px-3 py-1.5 rounded-md text-sm font-medium transition " +
                  (position === p.v
                    ? "bg-white shadow text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)]")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </Field>

        <Field label={t.field.lang}>
          <div className="inline-flex bg-[var(--color-surface)] rounded-lg p-1">
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={
                  "px-3 py-1.5 rounded-md text-sm font-bold transition " +
                  (lang === l
                    ? "bg-white shadow text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)]")
                }
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </Field>

        <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hideBadge}
            onChange={(e) => setHideBadge(e.target.checked)}
            className="h-4 w-4 rounded accent-[var(--color-brand)]"
          />
          <span>{t.field.hideBadge}</span>
          <span className="text-xs text-[var(--color-text-muted)]">
            ({t.field.hideBadgeHint})
          </span>
        </label>
      </div>

      {/* ---------- snippet output ---------- */}
      <div className="space-y-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
            {t.snippetTitle}
          </h3>
          <SnippetBlock
            snippet={snippet}
            copyLabel={t.snippetCopy}
            copiedLabel={t.snippetCopied}
          />
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">{t.snippetHelp}</p>
        </div>

        <div className="space-y-4 mt-6">
          <button
            onClick={async () => {
              if (!email) {
                alert("Por favor ingresa tu email primero.");
                return;
              }
              setIsSending(true);
              try {
                const res = await fetch("/api/send-snippet", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, snippet })
                });
                if (res.ok) {
                  setSendSuccess(true);
                  setTimeout(() => setSendSuccess(false), 5000);
                }
              } catch (e) {
                console.error(e);
              } finally {
                setIsSending(false);
              }
            }}
            disabled={!email || isSending || sendSuccess}
            className="w-full rounded-lg bg-[var(--color-brand)] px-4 py-3 font-bold text-white transition hover:bg-[var(--color-brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Enviando..." : sendSuccess ? "¡Enviado a tu correo! ✓" : "Enviar instrucciones a mi correo"}
          </button>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-tint)]/40 p-5">
            <h4 className="font-bold mb-1">{t.successTitle}</h4>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {t.successBody}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-1.5">{label}</span>
      {children}
    </label>
  );
}
