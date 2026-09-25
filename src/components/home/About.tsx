import type { AboutWedge } from "@/constants/portfolio";
import { person } from "@/constants/portfolio";
import styles from "./About.module.css";

type AboutParagraph = Readonly<{
  number: string;
  label: string;
  text: string;
  wedge: AboutWedge;
}>;

export function About({ paragraphs }: Readonly<{
  paragraphs: readonly AboutParagraph[];
}>) {
  return (
    <section className={styles.section} data-about-spotlight id="about" aria-labelledby="about-title">
      <div className={styles.heading}>
        <span className={styles.eyebrow}>03 / About</span>
        <span className={styles.eyebrow}>New Delhi, India · IST</span>
      </div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 id="about-title">Web, mobile,<br /><em>and the backend.</em></h2>
          <p>I build React and React Native apps, the APIs behind them, and the AI workflows that tie it all together.</p>
          <div className={styles.links}>
            <a href={person.resume} target="_blank" rel="noopener noreferrer">Read my resume <span aria-hidden="true">↗</span></a>
            <a href={person.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <dl className={styles.meta}>
            <div><dt>Core stack</dt><dd>React · Next.js · TypeScript · React Native</dd></div>
            <div><dt>Education</dt><dd>B.Tech CSE · GGSIPU · 2024 to 2027 (expected)<br />Diploma in Computer Engineering · Ambedkar Institute of Technology · 2018 to 2021</dd></div>
          </dl>
        </div>
        <div className={styles.entries} data-about-entries>
          {paragraphs.map((paragraph) => (
            <article className={styles.entry} data-about-entry key={paragraph.number}>
              <span className={styles.index} aria-hidden="true">{paragraph.number}</span>
              <div><h3>{paragraph.label}</h3><p>{paragraph.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
