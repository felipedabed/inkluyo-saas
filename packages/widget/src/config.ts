import type { FeatureId } from "./features/catalog";
import type { Lang } from "./i18n";

export type Position = "bottom-right" | "bottom-left";

export interface WidgetConfig {
  /** Initial language hint (overridable by user toggle) */
  lang?: Lang;
  /** Trigger button position */
  position: Position;
  /** Primary brand color (hex). Used in trigger gradient and accents. */
  primaryColor: string;
  /** Subset of features to show. `null` = all features. */
  features: FeatureId[] | null;
  /** Hide the "Powered by Inkluyo" badge (Pro tier+) */
  hideBadge: boolean;
  /** Site identifier for analytics (forwarded only — not used yet) */
  siteId: string | null;
}

export const DEFAULT_CONFIG: WidgetConfig = {
  lang: undefined,
  position: "bottom-right",
  primaryColor: "#6c47ff",
  features: null,
  hideBadge: false,
  siteId: null,
};

const ALL_FEATURE_IDS: ReadonlyArray<FeatureId> = [
  "dyslexia",
  "largeText",
  "highContrast",
  "stopAnimations",
  "largeCursor",
  "highlightLinks",
  "readingMask",
  "monochrome",
];

/**
 * Read the <script> tag that loaded this widget and extract data-* config.
 * Falls back to defaults for anything missing or invalid.
 */
export function readConfigFromScriptTag(): WidgetConfig {
  const script = findOwnScriptTag();
  if (!script) return { ...DEFAULT_CONFIG };

  return {
    lang: parseLang(script.dataset.lang),
    position: parsePosition(script.dataset.position),
    primaryColor: parseColor(script.dataset.primaryColor),
    features: parseFeatures(script.dataset.features),
    hideBadge: parseBool(script.dataset.hideBadge),
    siteId: script.dataset.siteId ?? null,
  };
}

function findOwnScriptTag(): HTMLScriptElement | null {
  // Prefer the script with data-inkluyo-widget attribute
  const tagged = document.querySelector<HTMLScriptElement>(
    "script[data-inkluyo-widget]",
  );
  if (tagged) return tagged;

  // Fallback: any script whose src includes /widget — best effort
  const scripts = Array.from(document.getElementsByTagName("script"));
  for (let i = scripts.length - 1; i >= 0; i--) {
    const s = scripts[i];
    if (s.src && /widget(\.iife)?\.js/i.test(s.src)) return s;
  }
  return null;
}

function parseLang(v: string | undefined): Lang | undefined {
  if (v === "en" || v === "es") return v;
  return undefined;
}

function parsePosition(v: string | undefined): Position {
  return v === "bottom-left" ? "bottom-left" : "bottom-right";
}

function parseColor(v: string | undefined): string {
  if (!v) return DEFAULT_CONFIG.primaryColor;
  const trimmed = v.trim();
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)
    ? trimmed
    : DEFAULT_CONFIG.primaryColor;
}

function parseFeatures(v: string | undefined): FeatureId[] | null {
  if (!v) return null;
  const valid = new Set(ALL_FEATURE_IDS);
  const list = v
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is FeatureId => valid.has(s as FeatureId));
  return list.length > 0 ? list : null;
}

function parseBool(v: string | undefined): boolean {
  return v === "true" || v === "1";
}

/**
 * Compute a darker shade of a hex color for gradient endpoints.
 * Pure helper so both gradient and ring colors come from one input.
 */
export function darkenHex(hex: string, percent = 22): string {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const num = parseInt(m[1], 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const k = (100 - percent) / 100;
  r = Math.max(0, Math.round(r * k));
  g = Math.max(0, Math.round(g * k));
  b = Math.max(0, Math.round(b * k));
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
