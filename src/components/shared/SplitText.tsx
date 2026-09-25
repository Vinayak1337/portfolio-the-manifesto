import type { CSSProperties, ElementType } from "react";
import type { WordToken } from "./types";

function splitTokens(tokens: readonly WordToken[]) {
  return tokens.flatMap((token) =>
    token.text.split(" ").map((word) => ({
      text: word,
      emphasis: token.emphasis,
    })),
  );
}

export function SplitText({
  as: Tag = "h2",
  className,
  id,
  letters = false,
  tokens,
  reveal = true,
}: Readonly<{
  as?: ElementType;
  className: string;
  id?: string;
  /** Also wrap each character so it can be animated on its own. */
  letters?: boolean;
  tokens: readonly WordToken[];
  reveal?: boolean;
}>) {
  const words = splitTokens(tokens);
  let charIndex = 0;

  const renderWord = (text: string) => {
    if (!letters) return text;
    return Array.from(text).map((char, index) => (
      <span
        aria-hidden="true"
        className="char"
        data-char
        key={`${char}-${index}`}
        style={{ "--ci": charIndex++ } as CSSProperties}
      >
        {char}
      </span>
    ));
  };

  return (
    <Tag
      aria-label={letters ? words.map((word) => word.text).join(" ") : undefined}
      className={`split ${className}`}
      data-reveal={reveal ? "" : undefined}
      id={id}
    >
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`}>
          <span
            className="word"
            style={{ "--i": index } as CSSProperties}
          >
            <span>{word.emphasis ? <em>{renderWord(word.text)}</em> : renderWord(word.text)}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
