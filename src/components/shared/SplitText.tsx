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
  tokens,
  reveal = true,
}: Readonly<{
  as?: ElementType;
  className: string;
  id?: string;
  tokens: readonly WordToken[];
  reveal?: boolean;
}>) {
  const words = splitTokens(tokens);

  return (
    <Tag
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
            <span>{word.emphasis ? <em>{word.text}</em> : word.text}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
