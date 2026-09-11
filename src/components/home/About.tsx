import type { AboutWedge } from "@/constants/portfolio";
import { person } from "@/constants/portfolio";
import styles from "./About.module.css";

type AboutParagraph = Readonly<{
  number: string;
  label: string;
  text: string;
  wedge: AboutWedge;
}>;

type Highlight = Readonly<{ stat: string; label: string }>;

export function About({ highlights, paragraphs }: Readonly<{
  highlights: readonly Highlight[];
  paragraphs: readonly AboutParagraph[];
}>) {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.heading}>
        <span className={styles.eyebrow}>03 / About</span>
        <span className={styles.eyebrow}>New Delhi, India · IST</span>
      </div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 id="about-title">An engineer.<br /><em>A product mindset.</em></h2>
          <p>I work across the interface and the systems behind it — from the first interaction to the production details.</p>
          <div className={styles.links}>
            <a href={person.resume} target="_blank" rel="noopener noreferrer">Read my resume <span aria-hidden="true">↗</span></a>
            <a href={person.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <dl className={styles.meta}>
            <div><dt>Core stack</dt><dd>React · Next.js · TypeScript · React Native</dd></div>
            <div><dt>Education</dt><dd>B.Tech CSE · GGSIPU · Expected 2027</dd></div>
          </dl>
        </div>
        <div className={styles.entries}>
          {paragraphs.map((paragraph) => (
            <article className={styles.entry} key={paragraph.number}>
              <span className={styles.index} aria-hidden="true">{paragraph.number}</span>
              <div><h3>{paragraph.label}</h3><p>{paragraph.text}</p></div>
            </article>
          ))}
        </div>
      </div>
      <dl className={styles.highlights}>
        {highlights.map((highlight) => (
          <div key={highlight.label}><dt>{highlight.label}</dt><dd>{highlight.stat}</dd></div>
        ))}
      </dl>
    </section>
  );
}
