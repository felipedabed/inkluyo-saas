import Link from "next/link";
import { LangSwitcher } from "./LangSwitcher";
import type { Lang, Translations } from "@/lib/i18n";

interface Props {
  lang: Lang;
  t: Translations["nav"];
  onAnalyzeClick?: () => void;
}

export function NavBar({ lang, t, onAnalyzeClick }: Props) {
  const links: { href: string; label: string }[] = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/pricing`, label: t.pricing },
    { href: `/${lang}/blog`, label: t.blog },
  ];

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 font-extrabold tracking-tight text-[15px] text-[var(--color-text)]"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="6.5" r="1.6" fill="currentColor" />
              <path
                d="M7 9.5h10M12 9.5v4M9 18l3-4.5L15 18M10.5 13.5h3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Inkluyo
        </Link>

        <ul className="hidden md:flex items-center gap-5 text-sm text-[var(--color-text-muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[var(--color-text)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} ariaLabel={t.languageSwitchAria} />
          <button
            onClick={onAnalyzeClick}
            className="hidden sm:inline-flex items-center text-sm font-semibold px-3 py-1.5 rounded-lg text-white shadow-sm hover:opacity-95 transition"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)",
            }}
          >
            {lang === "es" ? "Analizar mi sitio" : lang === "pt" ? "Analisar meu site" : "Analyze my site"}
          </button>
        </div>
      </div>
    </nav>
  );
}
