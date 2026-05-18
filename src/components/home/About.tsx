import type { ReactNode } from "react";
import type { AboutWedge } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";

type AboutParagraph = Readonly<{
  text: string;
  wedge: AboutWedge;
}>;

type Highlight = Readonly<{
  stat: string;
  label: string;
}>;

export function About({
  art,
  highlights,
  paragraphs,
}: Readonly<{
  art: ReactNode;
  highlights: readonly Highlight[];
  paragraphs: readonly AboutParagraph[];
}>) {
  return (
    <section
      className="about-sec"
      id="about"
      data-about-section
      aria-labelledby="about-title"
    >
      {art}
      <div className="about-grid">
        <div>
          <span className="section-tag" data-reveal>
            About
          </span>
          <SplitText
            as="h2"
            id="about-title"
            className="about-title"
            tokens={[
              { text: "Product systems." },
              { text: "AI-focused", emphasis: true },
              { text: "full-stack." },
            ]}
          />
        </div>
        <div>
          {paragraphs.map((paragraph) => (
            <p data-reveal data-wedge={paragraph.wedge} key={paragraph.text}>
              {paragraph.text}
            </p>
          ))}
          <div className="stats" data-reveal>
            {highlights.map((highlight) => (
              <div key={highlight.label}>
                <div className="stat-number">{highlight.stat}</div>
                <div className="stat-label">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
