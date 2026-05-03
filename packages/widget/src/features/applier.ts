import type { WidgetStore } from "../state";
import type { FeatureId } from "./catalog";
import {
  FEATURE_CLASS_MAP,
  FEATURE_STYLES,
  READING_MASK_BOTTOM_ID,
  READING_MASK_TOP_ID,
} from "./styles";

const STYLE_ID = "inkluyo-feature-styles";

/**
 * Stateful side-effects for features that need more than CSS class toggles.
 * Each handler is idempotent: enable/disable can be called repeatedly.
 */
interface StatefulHandler {
  enable(): void;
  disable(): void;
}

/**
 * Subscribes to the store and reflects the active feature set onto the host
 * page by toggling classes on <html>, injecting a single stylesheet, and
 * running per-feature stateful handlers when needed.
 *
 * Idempotent: re-applying the same state is a no-op.
 * Reversible: calling destroy() removes everything we mounted.
 */
export class FeatureApplier {
  private styleEl: HTMLStyleElement | null = null;
  private unsubscribe: (() => void) | null = null;
  private handlers: Partial<Record<FeatureId, StatefulHandler>> = {};
  private currentActive: ReadonlySet<FeatureId> = new Set();

  constructor(private store: WidgetStore) {
    this.injectStylesheet();
    this.registerHandlers();
    this.applyAll(this.store.getActive());
    this.unsubscribe = this.store.subscribe((active) => this.applyAll(active));
  }

  private injectStylesheet(): void {
    const existing = document.getElementById(STYLE_ID);
    if (existing) {
      this.styleEl = existing as HTMLStyleElement;
      return;
    }
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.setAttribute("data-inkluyo", "");
    style.textContent = FEATURE_STYLES;
    document.head.appendChild(style);
    this.styleEl = style;
  }

  private registerHandlers(): void {
    this.handlers.readingMask = createReadingMaskHandler();
  }

  private applyAll(active: ReadonlySet<FeatureId>): void {
    const root = document.documentElement;
    for (const [id, className] of Object.entries(FEATURE_CLASS_MAP) as [
      FeatureId,
      string,
    ][]) {
      if (active.has(id)) {
        root.classList.add(className);
      } else {
        root.classList.remove(className);
      }
    }

    for (const [id, handler] of Object.entries(this.handlers) as [
      FeatureId,
      StatefulHandler,
    ][]) {
      const wasOn = this.currentActive.has(id);
      const isOn = active.has(id);
      if (isOn && !wasOn) handler.enable();
      else if (!isOn && wasOn) handler.disable();
    }

    this.currentActive = new Set(active);
  }

  destroy(): void {
    this.unsubscribe?.();
    this.unsubscribe = null;

    for (const handler of Object.values(this.handlers)) {
      handler?.disable();
    }
    this.handlers = {};
    this.currentActive = new Set();

    const root = document.documentElement;
    for (const className of Object.values(FEATURE_CLASS_MAP)) {
      root.classList.remove(className);
    }

    this.styleEl?.remove();
    this.styleEl = null;
  }
}

/**
 * Reading mask: two fixed bands (top + bottom) leave a clear horizontal strip
 * that follows the user's pointer/touch. Forces visual focus to one section
 * of the page at a time — accessiBe markets this as their "ADHD profile".
 */
function createReadingMaskHandler(): StatefulHandler {
  const STRIP_HEIGHT = 140;
  const HALF = STRIP_HEIGHT / 2;

  let topEl: HTMLDivElement | null = null;
  let bottomEl: HTMLDivElement | null = null;
  let lastY = -1;
  let rafId = 0;
  let pointerY: number | null = null;

  function ensureBands(): void {
    if (topEl && bottomEl) return;
    topEl = document.createElement("div");
    topEl.id = READING_MASK_TOP_ID;
    topEl.setAttribute("data-inkluyo", "");
    topEl.setAttribute("aria-hidden", "true");

    bottomEl = document.createElement("div");
    bottomEl.id = READING_MASK_BOTTOM_ID;
    bottomEl.setAttribute("data-inkluyo", "");
    bottomEl.setAttribute("aria-hidden", "true");

    document.documentElement.appendChild(topEl);
    document.documentElement.appendChild(bottomEl);
  }

  function update(): void {
    rafId = 0;
    if (!topEl || !bottomEl) return;
    const vh = window.innerHeight;
    const y = pointerY ?? vh / 2;
    if (y === lastY) return;
    lastY = y;

    const topHeight = Math.max(0, Math.min(vh, y - HALF));
    const bottomHeight = Math.max(0, Math.min(vh, vh - y - HALF));
    topEl.style.height = `${topHeight}px`;
    bottomEl.style.height = `${bottomHeight}px`;
  }

  function schedule(): void {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  }

  function onMouseMove(e: MouseEvent): void {
    pointerY = e.clientY;
    schedule();
  }

  function onTouchMove(e: TouchEvent): void {
    const t = e.touches[0];
    if (!t) return;
    pointerY = t.clientY;
    schedule();
  }

  function onResize(): void {
    lastY = -1;
    schedule();
  }

  return {
    enable(): void {
      ensureBands();
      pointerY = window.innerHeight / 2;
      lastY = -1;
      update();
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
    },
    disable(): void {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      topEl?.remove();
      bottomEl?.remove();
      topEl = null;
      bottomEl = null;
      pointerY = null;
      lastY = -1;
    },
  };
}
