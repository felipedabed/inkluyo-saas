"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  lang: "en" | "es" | "pt";
  initial: string;
  shouting: string;
  understood: string;
  finalText: string;
}

/**
 * The CTA evolves based on how many widget features the visitor has activated:
 *   0 active   → initial
 *   1-3 active → shouting
 *   4-5 active → understood
 *   all 6      → finalText
 */
export function EvolvingCTA({
  lang,
  initial,
  shouting,
  understood,
  finalText,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function tick() {
      const active = window.Inkluyo?.getActiveFeatures();
      if (active) setCount(active.size);
    }
    tick();
    const id = window.setInterval(tick, 600);
    return () => window.clearInterval(id);
  }, []);

  let label = initial;
  if (count >= 6) label = finalText;
  else if (count >= 4) label = understood;
  else if (count >= 1) label = shouting;

  return (
    <Link
      href={`/${lang}/pricing`}
      className="cta-shouting inline-flex items-center"
    >
      {label}
    </Link>
  );
}
