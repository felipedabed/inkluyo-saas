import type { Lang } from "./i18n";

/**
 * Single source of truth for the widget bundle version. Bump this whenever
 * you ship a widget change so the customer's browser busts its cache.
 * Layout.tsx imports this for the <Script src> too.
 */
export const WIDGET_VERSION = "0.4.0";

/** Path component appended to whatever origin the widget is served from. */
export const WIDGET_BUNDLE_PATH = `/widget/widget.iife.js?v=${WIDGET_VERSION}`;

/**
 * Resolve the public URL where customers' browsers will fetch the widget bundle.
 *
 * Priority:
 *   1. NEXT_PUBLIC_WIDGET_URL (explicit override — useful for a separate CDN)
 *   2. VERCEL_PROJECT_PRODUCTION_URL (set automatically by Vercel for the
 *      production deployment, including custom domains)
 *   3. clientOrigin (window.location.origin from the caller, when in browser)
 *   4. A grep-able placeholder that signals "you forgot to set the env var"
 */
export function resolveWidgetUrl(clientOrigin?: string): string {
  const override = process.env.NEXT_PUBLIC_WIDGET_URL;
  if (override) return override;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}${WIDGET_BUNDLE_PATH}`;

  if (clientOrigin) return `${clientOrigin}${WIDGET_BUNDLE_PATH}`;

  return `https://YOUR-DOMAIN.com${WIDGET_BUNDLE_PATH}`;
}

export interface SnippetConfig {
  scriptUrl: string;
  lang?: Lang;
  position?: "bottom-right" | "bottom-left";
  primaryColor?: string;
  hideBadge?: boolean;
  siteId?: string;
  features?: string[];
}

/** Build the <script> tag string a customer should paste in their <head>. */
export function buildSnippet(cfg: SnippetConfig): string {
  const attrs: string[] = [
    `data-inkluyo-widget`,
    `src="${cfg.scriptUrl}"`,
    `defer`,
  ];

  if (cfg.lang) attrs.push(`data-lang="${cfg.lang}"`);
  if (cfg.position) attrs.push(`data-position="${cfg.position}"`);
  if (cfg.primaryColor) attrs.push(`data-primary-color="${cfg.primaryColor}"`);
  if (cfg.hideBadge) attrs.push(`data-hide-badge="true"`);
  if (cfg.siteId) attrs.push(`data-site-id="${cfg.siteId}"`);
  if (cfg.features && cfg.features.length > 0) {
    attrs.push(`data-features="${cfg.features.join(",")}"`);
  }

  return `<script ${attrs.join(" ")}></script>`;
}
