import type { FeatureId } from "./features/catalog";

const STORAGE_KEY = "inkluyo:state:v1";

export interface PersistedState {
  active: FeatureId[];
}

export type StateListener = (active: ReadonlySet<FeatureId>) => void;

/**
 * Tiny pub/sub store for which features are currently active.
 * Persists to localStorage so user preferences survive reloads.
 */
export class WidgetStore {
  private active: Set<FeatureId>;
  private listeners = new Set<StateListener>();

  constructor() {
    this.active = this.load();
  }

  private load(): Set<FeatureId> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw) as PersistedState;
      return new Set(parsed.active ?? []);
    } catch {
      return new Set();
    }
  }

  private persist(): void {
    try {
      const payload: PersistedState = { active: Array.from(this.active) };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* storage may be blocked — fail silently */
    }
  }

  getActive(): ReadonlySet<FeatureId> {
    return this.active;
  }

  isActive(id: FeatureId): boolean {
    return this.active.has(id);
  }

  toggle(id: FeatureId): boolean {
    if (this.active.has(id)) {
      this.active.delete(id);
    } else {
      this.active.add(id);
    }
    this.persist();
    this.emit();
    return this.active.has(id);
  }

  reset(): void {
    if (this.active.size === 0) return;
    this.active.clear();
    this.persist();
    this.emit();
  }

  subscribe(fn: StateListener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit(): void {
    for (const fn of this.listeners) fn(this.active);
  }
}
