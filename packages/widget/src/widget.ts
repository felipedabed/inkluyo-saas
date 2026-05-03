import { buildWidgetCss } from "./ui/styles";
import { renderWidgetTemplate } from "./ui/template";
import { WidgetStore } from "./state";
import type { FeatureId } from "./features/catalog";
import { FeatureApplier } from "./features/applier";
import {
  detectLang,
  getDictionary,
  persistLang,
  type Dictionary,
  type Lang,
} from "./i18n";
import {
  DEFAULT_CONFIG,
  readConfigFromScriptTag,
  type WidgetConfig,
} from "./config";

const HOST_TAG = "inkluyo-widget";
const HOST_ID = "inkluyo-widget-host";

export class InkluyoWidget {
  private host: HTMLElement;
  private shadow: ShadowRoot;
  private store: WidgetStore;
  private applier: FeatureApplier;
  private config: WidgetConfig;
  private currentLang: Lang;
  private dict: Dictionary;
  private isOpen = false;
  private cleanupFns: Array<() => void> = [];

  constructor(userConfig: Partial<WidgetConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...userConfig };
    this.currentLang = detectLang(this.config.lang);
    this.dict = getDictionary(this.currentLang);

    this.store = new WidgetStore();
    this.applier = new FeatureApplier(this.store);

    this.host = this.createHost();
    this.shadow = this.host.attachShadow({ mode: "open" });

    this.renderShell();
    this.renderContent();
    this.bindEvents();
    this.syncFromState();
  }

  /**
   * Mounts an isolated host element as a direct child of <html>, OUTSIDE
   * of <body>. This is critical because some features (notably high contrast)
   * apply CSS `filter` to <body>, which would otherwise turn <body> into the
   * containing block for the widget's `position: fixed` panel — making the
   * panel jump out of the viewport.
   */
  private createHost(): HTMLElement {
    const existing = document.getElementById(HOST_ID);
    if (existing) existing.remove();

    const el = document.createElement(HOST_TAG);
    el.id = HOST_ID;
    el.setAttribute("data-inkluyo", "");

    try {
      document.documentElement.appendChild(el);
    } catch {
      document.body.appendChild(el);
    }
    return el;
  }

  /** Render the <style> tag once. CSS depends on config but not on lang. */
  private renderShell(): void {
    const style = document.createElement("style");
    style.textContent = buildWidgetCss({
      primaryColor: this.config.primaryColor,
      position: this.config.position,
    });
    this.shadow.appendChild(style);

    const root = document.createElement("div");
    root.setAttribute("data-root", "");
    this.shadow.appendChild(root);
  }

  /** Render the i18n-dependent UI. Re-runs when language changes. */
  private renderContent(): void {
    const root = this.shadow.querySelector("[data-root]") as HTMLElement;
    root.innerHTML = renderWidgetTemplate({
      dict: this.dict,
      currentLang: this.currentLang,
      features: this.config.features,
      hideBadge: this.config.hideBadge,
    });
    this.syncFromState();
    if (this.isOpen) this.setOpenAttrs(true);
  }

  private $<T extends HTMLElement = HTMLElement>(selector: string): T | null {
    return this.shadow.querySelector(selector) as T | null;
  }

  private $$(selector: string): NodeListOf<HTMLElement> {
    return this.shadow.querySelectorAll(selector);
  }

  private bindEvents(): void {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const actionEl = target.closest<HTMLElement>("[data-action]");
      const featureEl = target.closest<HTMLElement>("[data-feature]");

      if (actionEl) {
        const action = actionEl.dataset.action;
        if (action === "open") this.open();
        else if (action === "close") this.close();
        else if (action === "reset") this.store.reset();
        else if (action === "lang") {
          const next = actionEl.dataset.lang as Lang | undefined;
          if (next) this.setLang(next);
        }
        return;
      }

      if (featureEl) {
        const id = featureEl.dataset.feature as FeatureId | undefined;
        if (id) {
          const isNowActive = this.store.toggle(id);
          if (isNowActive && this.config.siteId) {
            this.pingAnalytics(id);
          }
        }
      }
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    };

    this.shadow.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeydown);

    const unsubscribe = this.store.subscribe(() => this.syncFromState());

    this.cleanupFns.push(
      () => this.shadow.removeEventListener("click", onClick),
      () => document.removeEventListener("keydown", onKeydown),
      unsubscribe,
    );
  }

  private syncFromState(): void {
    const active = this.store.getActive();
    const trigger = this.$(".trigger");
    if (trigger) {
      trigger.setAttribute(
        "data-has-active",
        active.size > 0 ? "true" : "false",
      );
    }

    this.$$(".feature").forEach((btn) => {
      const id = btn.dataset.feature as FeatureId | undefined;
      if (!id) return;
      btn.setAttribute("aria-pressed", active.has(id) ? "true" : "false");
    });

    const reset = this.$<HTMLButtonElement>(".reset");
    if (reset) reset.disabled = active.size === 0;
  }

  // ---------- Public API ----------

  open(): void {
    if (this.isOpen) return;
    this.isOpen = true;
    this.setOpenAttrs(true);
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.setOpenAttrs(false);
  }

  setLang(lang: Lang): void {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    this.dict = getDictionary(lang);
    persistLang(lang);
    this.renderContent();
    document.dispatchEvent(
      new CustomEvent("inkluyo:langchange", { detail: { lang } }),
    );
  }

  getLang(): Lang {
    return this.currentLang;
  }

  /** Programmatically set a feature on/off (e.g. from a host page button) */
  setFeature(id: FeatureId, enabled: boolean): void {
    const isOn = this.store.isActive(id);
    if (isOn !== enabled) {
      const isNowActive = this.store.toggle(id);
      if (isNowActive && this.config.siteId) {
        this.pingAnalytics(id);
      }
    }
  }

  private pingAnalytics(featureId: FeatureId): void {
    const apiBase = window.location.hostname === "localhost" 
      ? "http://localhost:3000" 
      : "https://inkluyo.com";
      
    fetch(`${apiBase}/api/analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteId: this.config.siteId,
        feature: featureId,
        url: window.location.href,
      })
    }).catch(() => {});
  }

  getActiveFeatures(): ReadonlySet<FeatureId> {
    return this.store.getActive();
  }

  private setOpenAttrs(open: boolean): void {
    const panel = this.$(".panel");
    const backdrop = this.$(".backdrop");
    const trigger = this.$(".trigger");
    const value = open ? "true" : "false";

    panel?.setAttribute("data-open", value);
    panel?.setAttribute("aria-hidden", open ? "false" : "true");
    backdrop?.setAttribute("data-open", value);
    backdrop?.setAttribute("aria-hidden", open ? "false" : "true");
    trigger?.setAttribute("aria-expanded", value);
  }

  destroy(): void {
    this.cleanupFns.forEach((fn) => fn());
    this.cleanupFns = [];
    this.applier.destroy();
    this.host.remove();
  }

  getStore(): WidgetStore {
    return this.store;
  }
}

// Backwards-compat alias for older imports
export const InclusiveWidget = InkluyoWidget;

/** Convenience: read config from <script data-inkluyo-widget> on the page. */
export function createFromScriptTag(): InkluyoWidget {
  return new InkluyoWidget(readConfigFromScriptTag());
}
