/**
 * All accessibility features the widget can toggle.
 * Shared between the widget runtime and any dashboard/analytics later.
 */
export type AccessibilityFeature =
  | "dyslexia"
  | "largeText"
  | "highContrast"
  | "stopAnimations"
  | "largeCursor"
  | "highlightLinks";

export interface WidgetState {
  enabled: boolean;
  activeFeatures: Set<AccessibilityFeature>;
}

export interface WidgetConfig {
  /** Position of the trigger button */
  position?: "bottom-right" | "bottom-left";
  /** Primary brand color (hex) */
  primaryColor?: string;
  /** Language for labels */
  lang?: "en" | "es";
}
