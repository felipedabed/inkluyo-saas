"use client";

import { useState } from "react";

interface Props {
  snippet: string;
  copyLabel: string;
  copiedLabel: string;
  /**
   * If true the block is rendered with our deliberately ugly horrible-page
   * frame. If false it's the clean, professional version.
   */
  horrible?: boolean;
}

export function SnippetBlock({
  snippet,
  copyLabel,
  copiedLabel,
  horrible,
}: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    });
  }

  if (horrible) {
    return (
      <div className="relative rounded-lg overflow-hidden border-2 border-purple-500 bg-[#0e0e1a] text-white">
        <div className="flex items-center justify-between px-4 py-2 border-b border-purple-700 text-[11px] uppercase tracking-widest">
          <span>install.html</span>
          <button
            type="button"
            onClick={handleCopy}
            className="px-2 py-1 rounded text-[11px] font-bold bg-purple-500 hover:bg-purple-400"
            style={{ fontFamily: "system-ui" }}
          >
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
        <pre className="px-4 py-4 text-[13px] leading-relaxed font-mono overflow-x-auto whitespace-pre">
          <code>{snippet}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-text)] text-[#e8e8ff] shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/10 text-[11px] uppercase tracking-wider text-white/50">
        <span>install.html</span>
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-1 rounded-md text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-white transition"
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <pre className="px-5 py-5 text-[13px] leading-relaxed font-mono overflow-x-auto whitespace-pre">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}
