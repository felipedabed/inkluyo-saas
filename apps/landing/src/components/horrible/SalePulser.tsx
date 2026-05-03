"use client";

interface Props {
  text: string;
  sub: string;
}

/** Rotating, pulsing, gradient-vomiting 50% OFF blob. Rite of passage. */
export function SalePulser({ text, sub }: Props) {
  return (
    <div
      className="fixed bottom-32 left-4 z-20 pointer-events-auto select-none"
      style={{
        animation: "horrible-bounce 1.4s ease-in-out infinite",
      }}
      aria-hidden="true"
    >
      <button
        type="button"
        className="block px-3 py-2 text-white text-sm font-black text-center"
        style={{
          background:
            "conic-gradient(from 0deg, #ff1493, #ffd700, #00ced1, #ff1493)",
          borderRadius: "50%",
          width: 96,
          height: 96,
          fontFamily: "Comic Sans MS, cursive",
          textShadow: "1px 1px 0 black",
          boxShadow: "0 4px 0 #00008b",
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize: 13, display: "block" }}>{text}</span>
        <span
          style={{
            fontSize: 9,
            display: "block",
            marginTop: 4,
            fontStyle: "italic",
          }}
        >
          {sub}
        </span>
      </button>
    </div>
  );
}
