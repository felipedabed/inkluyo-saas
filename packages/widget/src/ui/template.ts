import { FEATURES } from "../features/catalog";
import type { FeatureId } from "../features/catalog";
import type { Dictionary } from "../i18n";

const ACCESSIBILITY_ICON = /* html */ `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="none"/>
    <circle cx="12" cy="6.5" r="1.6" fill="currentColor"/>
    <path d="M7 9.5h10M12 9.5v4M9 18l3-4.5L15 18M10.5 13.5h3"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const CLOSE_ICON = /* html */ `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="18" height="18">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

export interface TemplateOptions {
  dict: Dictionary;
  currentLang: "en" | "es" | "pt";
  /** When set, only render these features (in this order). Null = all. */
  features: FeatureId[] | null;
  hideBadge: boolean;
}

function renderFeatureCards(opts: TemplateOptions): string {
  const ids = opts.features ?? FEATURES.map((f) => f.id);
  const byId = new Map(FEATURES.map((f) => [f.id, f]));

  return ids
    .map((id) => byId.get(id))
    .filter((f): f is (typeof FEATURES)[number] => Boolean(f))
    .map((f) => {
      const t = opts.dict.features[f.id];
      return /* html */ `
        <button
          type="button"
          class="feature"
          data-feature="${f.id}"
          aria-pressed="false"
          aria-label="${escapeAttr(t.label)}: ${escapeAttr(t.description)}"
        >
          <span class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">${f.iconSvg}</svg>
          </span>
          <span class="feature-label">${escape(t.label)}</span>
          <span class="feature-desc">${escape(t.description)}</span>
        </button>
      `;
    })
    .join("");
}

function renderLangSwitch(opts: TemplateOptions): string {
  const langs: Array<"en" | "es" | "pt"> = ["en", "es", "pt"];
  return /* html */ `
    <div class="lang-switch" role="group" aria-label="${escapeAttr(opts.dict.langSwitchAria)}">
      ${langs
        .map(
          (l) => /* html */ `
        <button
          type="button"
          data-action="lang"
          data-lang="${l}"
          class="lang-btn"
          aria-pressed="${l === opts.currentLang ? "true" : "false"}"
        >${l.toUpperCase()}</button>
      `,
        )
        .join("")}
    </div>
  `;
}

export function renderWidgetTemplate(opts: TemplateOptions): string {
  return /* html */ `
    <button
      type="button"
      class="trigger"
      data-action="open"
      data-has-active="false"
      aria-label="${escapeAttr(opts.dict.triggerAria)}"
      aria-expanded="false"
      aria-controls="inkluyo-panel"
    >
      ${ACCESSIBILITY_ICON}
    </button>

    <div class="backdrop" data-action="close" data-open="false" aria-hidden="true"></div>

    <aside
      id="inkluyo-panel"
      class="panel"
      data-open="false"
      role="dialog"
      aria-modal="false"
      aria-labelledby="inkluyo-title"
      aria-hidden="true"
    >
      <header class="header">
        <div class="brand">
          <span class="brand-icon">${ACCESSIBILITY_ICON}</span>
          <span class="brand-name">${escape(opts.dict.brand)}</span>
        </div>
        <button type="button" class="close" data-action="close" aria-label="${escapeAttr(opts.dict.closeAria)}">
          ${CLOSE_ICON}
        </button>
      </header>

      <div class="title">
        <h2 id="inkluyo-title">${escape(opts.dict.panelTitle)}</h2>
        <p>${escape(opts.dict.panelSubtitle)}</p>
      </div>

      <div class="features" role="group" aria-label="${escapeAttr(opts.dict.panelTitle)}">
        ${renderFeatureCards(opts)}
      </div>

      <footer class="footer">
        <div class="footer-left">
          <button type="button" class="reset" data-action="reset" disabled>
            ${escape(opts.dict.resetAll)}
          </button>
        </div>
        <div class="footer-right">
          ${renderLangSwitch(opts)}
        </div>
      </footer>
      ${
        opts.hideBadge
          ? ""
          : /* html */ `
        <div class="badge">
          ${escape(opts.dict.poweredBy)} <strong>${escape(opts.dict.brand)}</strong>
        </div>
      `
      }
    </aside>
  `;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return escape(s).replace(/"/g, "&quot;");
}
