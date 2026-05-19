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
        <div className="about-lede">
          <span className="section-tag" data-reveal>
            About
          </span>
          <SplitText
            as="h2"
            id="about-title"
            className="about-title"
            tokens={[
              { text: "Product systems." },
              { text: "React-first", emphasis: true },
              { text: "full-stack." },
            ]}
          />
          <div className="about-meta" data-reveal>
            <div className="about-meta-row">
              <span className="about-meta-key">Based</span>
              <span className="about-meta-val">New Delhi · IST</span>
            </div>
            <div className="about-meta-row">
              <span className="about-meta-key">Stack</span>
              <span className="about-meta-val">React · Next.js · TS · RN</span>
            </div>
            <div className="about-meta-row">
              <span className="about-meta-key">Focus</span>
              <span className="about-meta-val">Applied AI · Product</span>
            </div>
          </div>
        </div>
        <div className="about-body">
          <div className="about-paragraphs">
            {paragraphs.map((paragraph) => (
              <p data-reveal data-wedge={paragraph.wedge} key={paragraph.text}>
                {paragraph.text}
              </p>
            ))}
          </div>
          <div className="stats" data-reveal>
            {highlights.map((highlight) => (
              <div className="stat" key={highlight.label}>
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
