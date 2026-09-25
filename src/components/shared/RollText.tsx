import type { CSSProperties } from "react";

/**
 * Text whose letters roll up to a duplicate on hover. The letters are hidden
 * from assistive tech; the plain string is kept for screen readers.
 */
export function RollText({ text, className }: Readonly<{ text: string; className?: string }>) {
  return (
    <span className={`roll ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      <span className="roll-letters" aria-hidden="true">
        {Array.from(text).map((char, index) => (
          <span
            className="roll-char"
            data-char={char}
            key={`${char}-${index}`}
            style={{ "--ci": index } as CSSProperties}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </span>
  );
}
