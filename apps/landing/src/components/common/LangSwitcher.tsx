"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  ariaLabel: string;
}

export function LangSwitcher({ lang, ariaLabel }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function switchTo(next: Lang) {
    if (next === lang || pending) return;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = next;
    const target = "/" + segments.join("/");

    startTransition(() => router.push(target));

    // Also update the widget's language at runtime, so the floating panel
    // matches the page right away (without waiting for a hard reload).
    if (typeof window !== "undefined" && window.Inkluyo?.setLang) {
      try {
        window.Inkluyo.setLang(next);
      } catch {
        /* no-op */
      }
    }
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex bg-[var(--color-surface)] rounded-full p-[3px] gap-[2px]"
    >
      {SUPPORTED_LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={active}
            disabled={pending}
            className={
              "text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full transition " +
              (active
                ? "bg-[var(--color-brand)] text-white"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]")
            }
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
