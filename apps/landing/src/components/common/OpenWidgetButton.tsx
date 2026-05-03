"use client";

import { useCallback } from "react";

interface Props {
  label: string;
  className?: string;
}

/**
 * Triggers the floating Inkluyo widget that's already mounted on the page
 * via [lang]/layout.tsx. Falls back gracefully if the widget hasn't booted yet.
 */
export function OpenWidgetButton({ label, className }: Props) {
  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.Inkluyo?.open) {
      window.Inkluyo.open();
      return;
    }
    let attempts = 0;
    const id = window.setInterval(() => {
      attempts += 1;
      if (window.Inkluyo?.open) {
        window.clearInterval(id);
        window.Inkluyo.open();
      } else if (attempts > 20) {
        window.clearInterval(id);
      }
    }, 100);
  }, []);

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
