"use client";

import { useEffect } from "react";

const MESSAGES = {
  en: [
    "%c👀 Dev mode detected.",
    "Yes, this page looks bad on purpose. The widget makes it human.",
    "Curious? → /pricing",
  ],
  es: [
    "%c👀 Detectamos que abriste DevTools.",
    "Sí, la página se ve mal a propósito. El widget la vuelve humana.",
    "¿Te interesa? → /pricing",
  ],
  pt: [
    "%c👀 Modo dev detectado.",
    "Sim, esta página parece ruim de propósito. O widget a torna humana.",
    "Ficou curioso? → /pricing",
  ],
};

interface Props {
  lang: "en" | "es" | "pt";
}

/** Logs a friendly message when the user opens DevTools. Pure delight. */
export function ConsoleEasterEgg({ lang }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as unknown as { __inkluyoEgg?: boolean }).__inkluyoEgg) return;
    (window as unknown as { __inkluyoEgg?: boolean }).__inkluyoEgg = true;

    const msgs = MESSAGES[lang];
    console.log(
      msgs[0],
      "background: linear-gradient(135deg, #6c47ff, #4f2fe0); color: white; padding: 6px 12px; border-radius: 6px; font-weight: 700;",
    );
    console.log(`%c${msgs[1]}`, "color: #6c47ff; font-weight: 600;");
    console.log(`%c${msgs[2]}`, "color: #888;");
  }, [lang]);

  return null;
}
