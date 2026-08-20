import type { ReactNode } from "react";
import { SplitText } from "@/components/shared/SplitText";
import type { WordToken } from "@/components/shared/types";

export function Hero({
  eyebrow,
  illustration,
  signals,
  summary,
  titleTokens,
}: Readonly<{
  eyebrow: string;
  illustration: ReactNode;
  signals?: readonly string[];
  summary: string;
  titleTokens: readonly WordToken[];
}>) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {illustration}
      <div className="hero-meta">
        <div className="hero-location">
          <span className="hero-eyebrow">{eyebrow}</span>
        </div>
      </div>
      <SplitText
        as="h1"
        className="hero-title"
        id="hero-title"
        reveal={false}
        tokens={titleTokens}
      />
      <div className="hero-sub" data-reveal>
        <p>{summary}</p>
        {signals?.length ? (
          <ul className="hero-signals" aria-label="Core focus areas">
            {signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
