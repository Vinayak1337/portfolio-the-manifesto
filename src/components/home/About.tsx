import type { ReactNode } from "react";
import type { AboutWedge } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";

type AboutParagraph = Readonly<{
  number: string;
  label: string;
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
              { text: "Full-Stack Engineer.", emphasis: true },
              { text: "React-first product systems." },
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
          <div className="about-reading">
            <div className="about-reading-lead" data-reveal>
              <span className="about-reading-kicker">01 / PRODUCT LAYER</span>
              <h3>I build the product layer around real workflows.</h3>
            </div>
            <div className="about-paragraphs">
              {paragraphs.map((paragraph) => (
                <article
                  className="about-entry"
                  data-reveal
                  data-wedge={paragraph.wedge}
                  key={paragraph.text}
                >
                  <div className="about-entry-index">{paragraph.number}</div>
                  <div className="about-entry-body">
                    <div className="about-entry-label">{paragraph.label}</div>
                    <p>{paragraph.text}</p>
                  </div>
                </article>
              ))}
            </div>
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
