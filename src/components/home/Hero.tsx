import type { ReactNode } from "react";
import { SplitText } from "@/components/shared/SplitText";
import type { WordToken } from "@/components/shared/types";

export function Hero({
  eyebrow,
  illustration,
  summary,
  titleTokens,
}: Readonly<{
  eyebrow: string;
  illustration: ReactNode;
  summary: string;
  titleTokens: readonly WordToken[];
}>) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {illustration}
      <div className="hero-meta">
        <span>{eyebrow}</span>
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
      </div>
    </section>
  );
}
