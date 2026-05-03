import { darkenHex } from "../config";

export interface StyleOptions {
  primaryColor: string;
  position: "bottom-right" | "bottom-left";
}

/**
 * All widget styles live here as a string, injected into the Shadow DOM.
 * Because they live in shadow scope, they CANNOT leak to or from the host page.
 */
export function buildWidgetCss(opts: StyleOptions): string {
  const primary = opts.primaryColor;
  const primaryDark = darkenHex(primary, 22);
  const primaryTint = primary + "1f"; // ~12% alpha hex
  const triggerSide =
    opts.position === "bottom-left" ? "left: 24px;" : "right: 24px;";

  return /* css */ `
  :host {
    all: initial;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    line-height: 1.4 !important;
    font-size: 16px !important;
    text-align: left !important;
    color-scheme: light !important;
  }

  *, *::before, *::after {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  button:focus-visible {
    outline: 3px solid ${primary};
    outline-offset: 2px;
  }

  /* ---------- Floating trigger button ---------- */
  .trigger {
    position: fixed;
    bottom: 24px;
    ${triggerSide}
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${primary} 0%, ${primaryDark} 100%);
    color: #ffffff;
    box-shadow:
      0 4px 12px ${primary}59,
      0 2px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2147483646;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .trigger:hover {
    transform: scale(1.06);
    box-shadow:
      0 6px 18px ${primary}73,
      0 3px 6px rgba(0, 0, 0, 0.2);
  }

  .trigger:active {
    transform: scale(0.96);
  }

  .trigger svg {
    width: 28px;
    height: 28px;
  }

  .trigger[data-has-active="true"]::after {
    content: "";
    position: absolute;
    top: 6px;
    right: 6px;
    width: 12px;
    height: 12px;
    background: #22c55e;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }

  /* ---------- Backdrop ---------- */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(8, 8, 16, 0.4);
    backdrop-filter: blur(2px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease;
    z-index: 2147483646;
  }

  .backdrop[data-open="true"] {
    opacity: 1;
    pointer-events: auto;
  }

  /* ---------- Side panel ---------- */
  .panel {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 380px;
    max-width: 92vw;
    background: #ffffff;
    color: #1a1a26;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.18);
    transform: translateX(100%);
    transition: transform 260ms cubic-bezier(0.32, 0.72, 0, 1);
    z-index: 2147483647;
    display: flex;
    flex-direction: column;
  }

  .panel[data-open="true"] {
    transform: translateX(0);
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    background: linear-gradient(135deg, ${primary} 0%, ${primaryDark} 100%);
    color: #ffffff;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.01em;
  }

  .brand-icon {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 160ms ease;
  }

  .close:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  /* ---------- Title ---------- */
  .title {
    padding: 20px 24px 8px;
  }

  .title h2 {
    margin: 0 0 4px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #0f0f1f;
  }

  .title p {
    margin: 0;
    font-size: 13px;
    color: #6b6b85;
  }

  /* ---------- Feature grid ---------- */
  .features {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 8px 24px 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-content: start;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 14px 12px;
    background: #f5f5fb;
    border: 2px solid transparent;
    border-radius: 12px;
    text-align: left;
    transition: background 160ms ease, border-color 160ms ease,
      transform 100ms ease;
    min-height: 96px;
    color: #1a1a26;
  }

  .feature:hover {
    background: #ececf6;
  }

  .feature:active {
    transform: scale(0.98);
  }

  .feature[aria-pressed="true"] {
    background: ${primaryTint};
    border-color: ${primary};
    color: ${primaryDark};
  }

  .feature-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${primaryDark};
  }

  .feature[aria-pressed="true"] .feature-icon {
    background: ${primary};
    color: #ffffff;
  }

  .feature-icon svg {
    width: 18px;
    height: 18px;
  }

  .feature-label {
    font-weight: 600;
    font-size: 13px;
    line-height: 1.25;
  }

  .feature-desc {
    font-size: 11px;
    color: #6b6b85;
    line-height: 1.3;
  }

  .feature[aria-pressed="true"] .feature-desc {
    color: ${primary};
  }

  /* ---------- Footer ---------- */
  .footer {
    border-top: 1px solid #ececf6;
    padding: 12px 24px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background: #ffffff;
  }

  .footer-left, .footer-right { display: flex; align-items: center; }

  .reset {
    font-size: 13px;
    font-weight: 500;
    color: ${primaryDark};
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 160ms ease;
  }

  .reset:hover {
    background: ${primaryTint};
  }

  .reset:disabled {
    color: #aaa;
    cursor: not-allowed;
  }

  .reset:disabled:hover {
    background: transparent;
  }

  .lang-switch {
    display: inline-flex;
    background: #f5f5fb;
    border-radius: 999px;
    padding: 3px;
    gap: 2px;
  }

  .lang-btn {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 4px 10px;
    border-radius: 999px;
    color: #6b6b85;
    transition: background 160ms ease, color 160ms ease;
  }

  .lang-btn[aria-pressed="true"] {
    background: ${primary};
    color: #ffffff;
  }

  .lang-btn:not([aria-pressed="true"]):hover {
    color: #1a1a26;
  }

  /* ---------- Badge ---------- */
  .badge {
    padding: 8px 24px 14px;
    font-size: 11px;
    color: #8a8aa0;
    text-align: center;
    background: #ffffff;
    font-weight: 500;
  }

  .badge strong {
    color: ${primaryDark};
    font-weight: 700;
  }

  /* ---------- Reduce-motion fallback ---------- */
  @media (prefers-reduced-motion: reduce) {
    .panel, .backdrop, .trigger, .feature, .reset, .close, .lang-btn {
      transition: none;
    }
  }

  /* ---------- Mobile tweaks ---------- */
  @media (max-width: 480px) {
    .panel {
      width: 100vw;
      max-width: 100vw;
    }
  }
`;
}
