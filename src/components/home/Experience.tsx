import type { ReactNode } from "react";
import type { Experience as ExperienceItem } from "@/constants/portfolio";
import { CompanyGlyph } from "@/components/shared/Glyphs";
import { SplitText } from "@/components/shared/SplitText";

export function Experience({
  experience,
  illustration,
}: Readonly<{
  experience: readonly ExperienceItem[];
  illustration: ReactNode;
}>) {
  return (
    <section className="exp-sec" id="experience" aria-labelledby="experience-title">
      {illustration}
      <span className="section-tag exp-section-tag">Experience</span>
      <SplitText
        as="h2"
        id="experience-title"
        className="experience-title"
        tokens={[
          { text: "Where I've" },
          { text: "worked.", emphasis: true },
        ]}
      />
      <div className="exp-list" data-exp-list>
        <span className="exp-spine" aria-hidden="true" />
        {experience.map((item) => (
          <article
            className="exp-item"
            data-exp-item
            data-reveal
            key={`${item.company}-${item.date}`}
            tabIndex={0}
            aria-label={`${item.title} at ${item.company}, ${item.date}`}
          >
            <div className="exp-date">{item.date}</div>
            <div className="exp-body">
              <h3>
                <CompanyGlyph company={item.company} />
                {item.title}
              </h3>
              <div className="exp-company">
                @ {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                    {item.company}
                  </a>
                ) : item.company}
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={index}>{part.slice(2, -2)}</strong>
                      ) : part,
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
