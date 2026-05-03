/**
 * @inkluyo/widget – entry point
 * Bootstraps the widget once the DOM is ready and exposes a global handle.
 */
import { InkluyoWidget, createFromScriptTag } from "./widget";
import type { Lang } from "./i18n";
import type { FeatureId } from "./features/catalog";

export type InkluyoApi = {
  widget: InkluyoWidget;
  open: () => void;
  close: () => void;
  setLang: (lang: Lang) => void;
  setFeature: (id: FeatureId, enabled: boolean) => void;
  getLang: () => Lang;
  getActiveFeatures: () => ReadonlySet<FeatureId>;
};

declare global {
  interface Window {
    Inkluyo?: InkluyoApi;
  }
}

function bootstrap(): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
    return;
  }

  if (window.Inkluyo) return;

  const widget = createFromScriptTag();
  window.Inkluyo = {
    widget,
    open: () => widget.open(),
    close: () => widget.close(),
    setLang: (l) => widget.setLang(l),
    setFeature: (id, enabled) => widget.setFeature(id, enabled),
    getLang: () => widget.getLang(),
    getActiveFeatures: () => widget.getActiveFeatures(),
  };
}

bootstrap();

export { InkluyoWidget };
