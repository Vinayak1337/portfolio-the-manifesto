import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";

export function Statement({
  caption,
  headline,
  illustration,
}: Readonly<{
  caption: string;
  headline: string;
  illustration: ReactNode;
}>) {
  const lines = headline.split("\n");
  const words = lines.flatMap((line) => line.split(" "));
  const finalWords = ["prototype", "production."];
  const total = words.length + finalWords.length;
  let wordIndex = 0;
  const word = (text: string) => (
    <span
      className="fill-word"
      key={`${text}-${wordIndex}`}
      style={{ "--wi": wordIndex++, "--wn": total } as CSSProperties}
    >
      {text}
    </span>
  );

  return (
    <section className="pin-type" data-pin-section aria-label="Manifesto statement">
      <div className="pin">
        {illustration}
        <div className="statement-marker" aria-hidden="true">
          01 / OPERATING PRINCIPLE
        </div>
        <div className="giant" data-pin-giant>
          {lines.map((line) => (
            <span key={line}>
              {line.split(" ").map((text, index, all) => (
                <Fragment key={text}>
                  {word(text)}
                  {index < all.length - 1 ? " " : null}
                </Fragment>
              ))}
              <br />
            </span>
          ))}
          <span>
            {word(finalWords[0])}{" "}
            <em>
              <span className="statement-arrow" aria-hidden="true">
                <svg viewBox="0 0 100 40" focusable="false">
                  <path d="M4 22H90" pathLength="1" />
                  <path d="M72 8L92 22L72 36" pathLength="1" />
                </svg>
              </span>
              <span className="sr-only">to</span> {word(finalWords[1])}
            </em>
          </span>
        </div>
        <div className="sub-caption" aria-hidden="true">
          {caption}
        </div>
      </div>
    </section>
  );
}
