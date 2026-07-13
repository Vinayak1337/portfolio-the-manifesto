import type { ReactNode } from "react";

type Chapter = Readonly<{
  number: string;
  label: string;
  headline: string;
  emphasis: string;
  copy: readonly string[];
}>;

export function Chapters({
  chapters,
  renderIllustration,
}: Readonly<{
  chapters: readonly Chapter[];
  renderIllustration: (index: number) => ReactNode;
}>) {
  return (
    <section className="chapter-stack" aria-label="Manifesto chapters">
      <div className="chapter-track">
        {chapters.map((chapter, index) => {
          const [before, after = ""] = chapter.headline.split(chapter.emphasis);

          return (
            <article className="chapter-card" data-reveal key={chapter.number}>
              {renderIllustration(index)}
              <div>
                <div className="chapter-number">{chapter.number}</div>
                <div className="chapter-label">{chapter.label}</div>
              </div>
              <h2>
                {before}
                <em>{chapter.emphasis}</em>
                {after}
              </h2>
              <div className="chapter-copy">
                {chapter.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
