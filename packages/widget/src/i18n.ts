/**
 * Tiny i18n layer for the widget UI.
 * Strings are organized by key and localized to each supported language.
 * The active language is detected on bootstrap and can be switched at runtime.
 */
export type Lang = "en" | "es" | "pt";

export const SUPPORTED_LANGS: ReadonlyArray<Lang> = ["en", "es", "pt"];

const STORAGE_KEY = "inkluyo:lang:v1";

export interface Dictionary {
  brand: string;
  triggerAria: string;
  closeAria: string;
  panelTitle: string;
  panelSubtitle: string;
  langSwitchAria: string;
  resetAll: string;
  poweredBy: string;
  features: Record<
    | "dyslexia"
    | "largeText"
    | "highContrast"
    | "stopAnimations"
    | "largeCursor"
    | "highlightLinks"
    | "readingMask"
    | "monochrome",
    { label: string; description: string }
  >;
}

const en: Dictionary = {
  brand: "Inkluyo",
  triggerAria: "Open accessibility menu",
  closeAria: "Close accessibility menu",
  panelTitle: "Accessibility tools",
  panelSubtitle:
    "Pick what you need — your settings save automatically.",
  langSwitchAria: "Switch language",
  resetAll: "Reset all",
  poweredBy: "Powered by",
  features: {
    dyslexia: {
      label: "Dyslexia mode",
      description: "Switch to a more readable typeface",
    },
    largeText: {
      label: "Larger text",
      description: "Increase the base font size",
    },
    highContrast: {
      label: "High contrast",
      description: "Invert colors for legibility",
    },
    stopAnimations: {
      label: "Stop animations",
      description: "Pause transitions and motion",
    },
    largeCursor: {
      label: "Large cursor",
      description: "Make the cursor easier to spot",
    },
    highlightLinks: {
      label: "Highlight links",
      description: "Outline every link on the page",
    },
    readingMask: {
      label: "Reading mask",
      description: "Dim everything except a strip near your cursor",
    },
    monochrome: {
      label: "Monochrome",
      description: "Remove color — for color blindness or visual fatigue",
    },
  },
};

const es: Dictionary = {
  brand: "Inkluyo",
  triggerAria: "Abrir menú de accesibilidad",
  closeAria: "Cerrar menú de accesibilidad",
  panelTitle: "Herramientas de accesibilidad",
  panelSubtitle:
    "Activa lo que necesites — tus preferencias se guardan solas.",
  langSwitchAria: "Cambiar idioma",
  resetAll: "Restablecer todo",
  poweredBy: "Hecho con",
  features: {
    dyslexia: {
      label: "Modo dislexia",
      description: "Cambia a una tipografía más legible",
    },
    largeText: {
      label: "Texto grande",
      description: "Aumenta el tamaño de la fuente",
    },
    highContrast: {
      label: "Alto contraste",
      description: "Invierte colores para mejor legibilidad",
    },
    stopAnimations: {
      label: "Detener animaciones",
      description: "Pausa transiciones y movimiento",
    },
    largeCursor: {
      label: "Cursor grande",
      description: "Hace el cursor más fácil de ubicar",
    },
    highlightLinks: {
      label: "Resaltar enlaces",
      description: "Marca todos los enlaces de la página",
    },
    readingMask: {
      label: "Máscara de lectura",
      description: "Atenúa todo excepto una franja cerca de tu cursor",
    },
    monochrome: {
      label: "Monocromo",
      description: "Sin color — para daltonismo o fatiga visual",
    },
  },
};

const pt: Dictionary = {
  brand: "Inkluyo",
  triggerAria: "Abrir menu de acessibilidade",
  closeAria: "Fechar menu de acessibilidade",
  panelTitle: "Ferramentas de acessibilidade",
  panelSubtitle:
    "Escolha o que precisa — suas configurações são salvas automaticamente.",
  langSwitchAria: "Mudar idioma",
  resetAll: "Redefinir tudo",
  poweredBy: "Feito com",
  features: {
    dyslexia: {
      label: "Modo dislexia",
      description: "Muda para uma tipografia mais legível",
    },
    largeText: {
      label: "Texto grande",
      description: "Aumenta o tamanho da fonte",
    },
    highContrast: {
      label: "Alto contraste",
      description: "Inverte as cores para melhor legibilidade",
    },
    stopAnimations: {
      label: "Parar animações",
      description: "Pausa as transições e o movimento",
    },
    largeCursor: {
      label: "Cursor grande",
      description: "Torna o cursor mais fácil de localizar",
    },
    highlightLinks: {
      label: "Destacar links",
      description: "Marca todos os links na página",
    },
    readingMask: {
      label: "Máscara de leitura",
      description: "Atenua tudo, exceto uma faixa perto do seu cursor",
    },
    monochrome: {
      label: "Monocromático",
      description: "Sem cor — para daltonismo ou fadiga visual",
    },
  },
};

const DICTIONARIES: Record<Lang, Dictionary> = { en, es, pt };

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang] ?? en;
}

/**
 * Detect the language to use, in priority order:
 *   1. explicit hint (e.g. data-lang on script tag)
 *   2. localStorage saved preference
 *   3. <html lang="..."> on the host page
 *   4. navigator.language
 *   5. fallback "en"
 */
export function detectLang(hint?: string | null): Lang {
  const candidates = [
    hint,
    safeRead(STORAGE_KEY),
    document.documentElement.getAttribute("lang"),
    typeof navigator !== "undefined" ? navigator.language : null,
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    const norm = raw.toLowerCase().split(/[-_]/)[0];
    if (SUPPORTED_LANGS.includes(norm as Lang)) return norm as Lang;
  }
  return "en";
}

export function persistLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore — storage might be blocked */
  }
}

function safeRead(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
