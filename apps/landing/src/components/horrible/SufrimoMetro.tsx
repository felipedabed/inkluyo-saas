"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

interface Props {
  label: string;
  lang: Lang;
}

/**
 * "Sufrimómetro" — a sticky bar at the top of the horrible landing that
 * counts how long the visitor has tolerated the page. Pure cosmetic, but
 * sets the comedic tone immediately.
 */
export function SufrimoMetro({ label, lang }: Props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(() => {
      setSeconds(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      role="status"
      aria-live="off"
      className="w-full text-center py-1.5 px-3 text-[12px] font-semibold tracking-tight"
      style={{
        background: "linear-gradient(90deg, #ff1493, #ffd700, #00ced1)",
        color: "#1a1a1a",
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
        borderBottom: "2px dashed #ff00ff",
      }}
    >
      😬 {label} <strong>{formatDuration(seconds, lang)}</strong>
    </div>
  );
}

function formatDuration(s: number, lang: Lang): string {
  const mm = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  if (mm === 0) return lang === "es" ? `${ss} segundos` : `${ss} seconds`;
  return `${mm}:${pad(ss)}`;
}
