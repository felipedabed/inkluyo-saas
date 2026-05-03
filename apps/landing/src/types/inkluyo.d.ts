/**
 * Type declarations for the global window.Inkluyo API exposed by the widget.
 * The actual implementation lives in @inkluyo/widget.
 */
type Lang = "en" | "es" | "pt";

type FeatureId =
  | "dyslexia"
  | "largeText"
  | "highContrast"
  | "stopAnimations"
  | "largeCursor"
  | "highlightLinks"
  | "readingMask"
  | "monochrome";

interface InkluyoApi {
  open: () => void;
  close: () => void;
  setLang: (lang: Lang) => void;
  getLang: () => Lang;
  setFeature: (id: FeatureId, enabled: boolean) => void;
  getActiveFeatures: () => ReadonlySet<FeatureId>;
}

interface Window {
  Inkluyo?: InkluyoApi;
}
