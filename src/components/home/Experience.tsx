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
      <SplitText
        as="h2"
        id="experience-title"
        className="experience-title"
        tokens={[
          { text: "Where I've" },
          { text: "worked.", emphasis: true },
        ]}
      />
      <div className="exp-list">
        {experience.map((item) => (
          <article className="exp-item" key={`${item.company}-${item.date}`}>
            <div className="exp-date">{item.date}</div>
            <div className="exp-body">
              <h3>
                <CompanyGlyph company={item.company} />
                {item.title}
              </h3>
              <div className="exp-company">@ {item.company}</div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
