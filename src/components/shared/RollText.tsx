import type { CSSProperties } from "react";

/**
 * Text whose letters roll up to a duplicate on hover. Letters are grouped and
 * clipped per word so names wrap between words only and the duplicate never
 * shows through on a wrapped line. The plain string is kept for screen readers.
 */
export function RollText({ text, className }: Readonly<{ text: string; className?: string }>) {
  let charIndex = 0;
  const words = text.split(" ");

  return (
    <span className={`roll ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      <span className="roll-letters" aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`}>
            <span className="roll-word">
              {Array.from(word).map((char, index) => (
                <span
                  className="roll-char"
                  key={`${char}-${index}`}
                  style={{ "--ci": charIndex++ } as CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </span>
  );
}
