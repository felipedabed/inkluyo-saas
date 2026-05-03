import type { FeatureId } from "./catalog";

/** Map from feature id → class applied to <html> when the feature is on */
export const FEATURE_CLASS_MAP: Record<FeatureId, string> = {
  dyslexia: "inkluyo-dyslexia",
  largeText: "inkluyo-large-text",
  highContrast: "inkluyo-high-contrast",
  stopAnimations: "inkluyo-stop-animations",
  largeCursor: "inkluyo-large-cursor",
  highlightLinks: "inkluyo-highlight-links",
  readingMask: "inkluyo-reading-mask",
  monochrome: "inkluyo-monochrome",
};

/** DOM ids used by stateful features (mounted outside the widget shadow). */
export const READING_MASK_TOP_ID = "inkluyo-reading-mask-top";
export const READING_MASK_BOTTOM_ID = "inkluyo-reading-mask-bottom";

/**
 * Inline cursor SVG (48×48). Hotspot at (4,4) — the tip of the arrow.
 * Encoded inline so it works even on offline / strict-CSP sites.
 */
const LARGE_CURSOR_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">` +
    `<path d="M6 4 L6 38 L14 30 L20 44 L26 42 L20 28 L32 28 Z" ` +
    `fill="#000" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>` +
    `</svg>`,
);

/**
 * One stylesheet injected once into <head>. Each feature is gated on a
 * class on <html>, so toggling is just classList.add/remove.
 *
 * Important isolation notes:
 *  - Selectors only match the LIGHT DOM — they cannot reach into the widget's
 *    Shadow DOM. ✓
 *  - The widget shadow root has `:host { all: initial }`, which breaks
 *    inheritance of `font-family`, `font-size`, `cursor`, etc. ✓
 *  - The widget host element is appended OUTSIDE <body>, so filters applied
 *    to body never reach it. ✓
 */
export const FEATURE_STYLES = /* css */ `
  /* ============== DYSLEXIA-FRIENDLY FONT ============== */
  html.inkluyo-dyslexia,
  html.inkluyo-dyslexia body,
  html.inkluyo-dyslexia body * {
    font-family: "Comic Sans MS", "Comic Sans", "OpenDyslexic", Arial, sans-serif !important;
    letter-spacing: 0.04em !important;
    word-spacing: 0.08em !important;
    line-height: 1.6 !important;
  }

  /* ============== LARGE TEXT ============== */
  html.inkluyo-large-text {
    font-size: 120% !important;
  }
  html.inkluyo-large-text body {
    font-size: 1.15rem !important;
  }

  /* ============== HIGH CONTRAST (invert filter) ============== */
  html.inkluyo-high-contrast body {
    filter: invert(100%) hue-rotate(180deg) !important;
  }
  html.inkluyo-high-contrast body img,
  html.inkluyo-high-contrast body video,
  html.inkluyo-high-contrast body picture,
  html.inkluyo-high-contrast body iframe,
  html.inkluyo-high-contrast body svg {
    filter: invert(100%) hue-rotate(180deg) !important;
  }

  /* ============== STOP ANIMATIONS ============== */
  html.inkluyo-stop-animations,
  html.inkluyo-stop-animations *,
  html.inkluyo-stop-animations *::before,
  html.inkluyo-stop-animations *::after {
    animation-duration: 0s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0s !important;
    scroll-behavior: auto !important;
  }

  /* ============== LARGE CURSOR ============== */
  html.inkluyo-large-cursor,
  html.inkluyo-large-cursor body,
  html.inkluyo-large-cursor body *:not(input):not(textarea):not([contenteditable]) {
    cursor: url("data:image/svg+xml;utf8,${LARGE_CURSOR_SVG}") 4 4, auto !important;
  }
  html.inkluyo-large-cursor a,
  html.inkluyo-large-cursor button,
  html.inkluyo-large-cursor [role="button"] {
    cursor: url("data:image/svg+xml;utf8,${LARGE_CURSOR_SVG}") 4 4, pointer !important;
  }

  /* ============== HIGHLIGHT LINKS ============== */
  html.inkluyo-highlight-links a {
    outline: 2px solid #fbbf24 !important;
    outline-offset: 2px !important;
    background-color: rgba(251, 191, 36, 0.18) !important;
    text-decoration: underline !important;
    text-underline-offset: 3px !important;
    border-radius: 2px;
  }
  html.inkluyo-highlight-links a:hover,
  html.inkluyo-highlight-links a:focus-visible {
    outline-color: #f59e0b !important;
    background-color: rgba(251, 191, 36, 0.32) !important;
  }

  /* ============== MONOCHROME (color-blindness / sensory relief) ============== */
  html.inkluyo-monochrome body {
    filter: grayscale(100%) !important;
  }
  /* Re-apply to media so high-contrast + monochrome stack predictably. */
  html.inkluyo-monochrome.inkluyo-high-contrast body img,
  html.inkluyo-monochrome.inkluyo-high-contrast body video,
  html.inkluyo-monochrome.inkluyo-high-contrast body picture,
  html.inkluyo-monochrome.inkluyo-high-contrast body iframe,
  html.inkluyo-monochrome.inkluyo-high-contrast body svg {
    filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  }

  /* ============== READING MASK (ADHD / focus aid) ==============
     The two bands are mounted as direct children of <html> by the applier.
     They are pointer-events: none so the user can keep clicking through them.
     The widget panel sits at z-index 2147483647, above the bands. */
  #${READING_MASK_TOP_ID},
  #${READING_MASK_BOTTOM_ID} {
    position: fixed;
    left: 0;
    right: 0;
    background: rgba(8, 8, 16, 0.72);
    pointer-events: none;
    z-index: 2147483645;
    transition: top 80ms linear, bottom 80ms linear, height 80ms linear;
    will-change: top, bottom, height;
  }
  #${READING_MASK_TOP_ID} { top: 0; }
  #${READING_MASK_BOTTOM_ID} { bottom: 0; }
`;
