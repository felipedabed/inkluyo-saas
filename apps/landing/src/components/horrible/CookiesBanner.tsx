"use client";

import { useState } from "react";

interface Props {
  body: string;
  accept: string;
  configure: string;
}

/**
 * Bottom-of-screen cookie banner that covers way too much UI, with a tiny
 * "configure" button hidden in microscopic gray text.
 */
export function CookiesBanner({ body, accept, configure }: Props) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-30 p-4 border-t-4"
      style={{
        background: "#f5f5dc",
        borderTopColor: "#daa520",
        fontFamily: "Times New Roman, serif",
        color: "#5a5a5a",
        fontSize: 11,
        lineHeight: 1.3,
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="flex-1">{body}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="px-4 py-2 text-sm font-extrabold text-white"
            style={{
              background: "lime",
              color: "#1a1a1a",
              border: "2px solid green",
            }}
          >
            {accept}
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="hover:underline"
            style={{ color: "#cccccc", fontSize: 9, fontStyle: "italic" }}
          >
            {configure}
          </button>
        </div>
      </div>
    </div>
  );
}
