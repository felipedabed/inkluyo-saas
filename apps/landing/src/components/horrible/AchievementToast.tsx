"use client";

import { useEffect, useState } from "react";
import type { Translations } from "@/lib/i18n";

interface Props {
  t: Translations["landing"]["achievement"];
}

interface Toast {
  id: number;
  text: string;
}

const FEATURE_TO_ACHIEVEMENT: Record<string, keyof Translations["landing"]["achievement"]> = {
  dyslexia: "readable",
  largeText: "readable",
  highContrast: "readable",
  stopAnimations: "stopChaos",
  largeCursor: "first",
  highlightLinks: "first",
};

/**
 * Subscribes to widget state and pops a small toast when a new feature becomes
 * active. After 6 active features, plays the "master" line.
 */
export function AchievementToast({ t }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    let prev: Set<string> = new Set();
    let masterShown = false;

    function tick() {
      const cur = window.Inkluyo?.getActiveFeatures();
      if (!cur) return;
      const newOnes: string[] = [];
      for (const f of cur) if (!prev.has(f)) newOnes.push(f);

      newOnes.forEach((f, i) => {
        const key = FEATURE_TO_ACHIEVEMENT[f] ?? "first";
        const text = t[key];
        const id = Date.now() + i;
        setToasts((arr) => [...arr, { id, text }]);
        window.setTimeout(
          () => setToasts((arr) => arr.filter((x) => x.id !== id)),
          4200,
        );
      });

      if (cur.size >= 6 && !masterShown) {
        masterShown = true;
        const id = Date.now() + 999;
        setToasts((arr) => [...arr, { id, text: t.master }]);
        window.setTimeout(
          () => setToasts((arr) => arr.filter((x) => x.id !== id)),
          5500,
        );
      }
      if (cur.size < 6) masterShown = false;

      prev = new Set(cur);
    }

    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, [t]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="achievement-toast pointer-events-auto"
          style={{
            background: "linear-gradient(135deg, #6c47ff 0%, #4f2fe0 100%)",
            color: "white",
            padding: "10px 18px",
            borderRadius: 14,
            fontWeight: 600,
            fontSize: 13,
            boxShadow: "0 8px 24px rgba(76, 47, 224, 0.35)",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span aria-hidden="true">🏆</span>
          <span style={{ opacity: 0.7, fontSize: 11 }}>{t.title}</span>
          <span>·</span>
          <span>{toast.text}</span>
        </div>
      ))}
    </div>
  );
}
