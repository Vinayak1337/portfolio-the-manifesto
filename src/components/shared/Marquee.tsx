import type { ReactNode } from "react";

function MarqueeGlyph({ name }: Readonly<{ name: string }>) {
  const glyphs: Record<string, ReactNode> = {
    "Next.js": (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="14" />
        <path d="M14 12 L26 28 M14 12 L14 28 M26 12 L26 22" />
      </svg>
    ),
    "React Native": (
      <svg viewBox="0 0 40 40">
        <ellipse cx="20" cy="20" rx="14" ry="6" />
        <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(-60 20 20)" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
    LangChain: (
      <svg viewBox="0 0 40 40">
        <rect x="6" y="14" width="12" height="12" rx="2" />
        <rect x="22" y="14" width="12" height="12" rx="2" />
        <path d="M18 20 L22 20" />
        <path d="M14 14 L14 8 L26 8 L26 14" />
      </svg>
    ),
    RAG: (
      <svg viewBox="0 0 40 40">
        <circle cx="12" cy="20" r="6" />
        <circle cx="28" cy="14" r="4" />
        <circle cx="28" cy="26" r="4" />
        <path d="M17 18 L25 14 M17 22 L25 26" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 40 40">
        <ellipse cx="20" cy="14" rx="8" ry="3" />
        <path d="M12 14 L12 26 a8 3 0 0 0 16 0 L28 14" />
        <path d="M12 20 a8 3 0 0 0 16 0" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 40 40">
        <rect x="6" y="6" width="28" height="28" />
        <path d="M12 18 L22 18 M17 18 L17 28" />
        <path d="M24 26 q 4 4 8 0" />
      </svg>
    ),
    Agents: (
      <svg viewBox="0 0 40 40">
        <circle cx="14" cy="14" r="4" />
        <circle cx="26" cy="14" r="4" />
        <circle cx="20" cy="28" r="4" />
        <path d="M14 18 L20 24 M26 18 L20 24" />
      </svg>
    )
  };

  return (
    <span className="a-marquee-glyph" aria-hidden="true">
      {glyphs[name] ?? (
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="10" />
          <path d="M14 20 L26 20" />
        </svg>
      )}
    </span>
  );
}

export function Marquee({
  items,
  variant = "default",
}: Readonly<{
  items: readonly string[];
  variant?: "default" | "reverse";
}>) {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className={`marquee-track ${variant === "reverse" ? "reverse" : ""}`}>
        {[0, 1].map((set) => (
          <span className="marquee-item" key={set}>
            {items.map((item) => (
              <span className="marquee-chip" key={`${set}-${item}`}>
                <MarqueeGlyph name={item} />
                <em>{item}</em>
                <span className="dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
