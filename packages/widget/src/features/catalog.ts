export type FeatureId =
  | "dyslexia"
  | "largeText"
  | "highContrast"
  | "stopAnimations"
  | "largeCursor"
  | "highlightLinks"
  | "readingMask"
  | "monochrome";

/**
 * Static feature metadata — only the icon, since labels/descriptions are
 * fetched per-language from the i18n dictionary at render time.
 */
export interface FeatureMeta {
  id: FeatureId;
  /** Inline SVG path data (24x24 viewbox) */
  iconSvg: string;
}

export const FEATURES: ReadonlyArray<FeatureMeta> = [
  {
    id: "dyslexia",
    iconSvg: `<path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  },
  {
    id: "largeText",
    iconSvg: `<path d="M4 6h16M9 6v14M15 10h6M18 10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  },
  {
    id: "highContrast",
    iconSvg: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v18" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>`,
  },
  {
    id: "stopAnimations",
    iconSvg: `<rect x="6" y="5" width="4" height="14" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="5" width="4" height="14" rx="1" stroke="currentColor" stroke-width="2"/>`,
  },
  {
    id: "largeCursor",
    iconSvg: `<path d="M5 3l6 17 2.5-7L20 11 5 3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>`,
  },
  {
    id: "highlightLinks",
    iconSvg: `<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    id: "readingMask",
    iconSvg: `<rect x="3" y="4" width="18" height="5" rx="1" fill="currentColor" opacity="0.35"/><rect x="3" y="15" width="18" height="5" rx="1" fill="currentColor" opacity="0.35"/><rect x="3" y="10" width="18" height="4" rx="0.5" stroke="currentColor" stroke-width="1.5" fill="none"/>`,
  },
  {
    id: "monochrome",
    iconSvg: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v18" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" opacity="0.5"/>`,
  },
];
