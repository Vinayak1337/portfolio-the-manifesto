import type { OpenSourceContribution } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";

export function OpenSource({
  contributions,
}: Readonly<{
  contributions: readonly OpenSourceContribution[];
}>) {
  return (
    <section className="oss-sec" aria-labelledby="open-source-title">
      <div className="oss-head">
        <span className="section-tag" data-reveal>
          Open Source
        </span>
        <SplitText
          as="h2"
          id="open-source-title"
          className="oss-title"
          tokens={[
            { text: "Merged work in" },
            { text: "tools teams ship with.", emphasis: true },
          ]}
        />
      </div>
      <div className="oss-list">
        {contributions.map((contribution) => (
          <article className="oss-item" key={contribution.project} data-reveal>
            <div className="oss-meta">
              <span>{contribution.proof}</span>
            </div>
            <div className="oss-body">
              <h3>{contribution.project}</h3>
              <p className="oss-org">{contribution.org}</p>
              <p>{contribution.summary}</p>
              <div className="oss-links" aria-label={`${contribution.project} pull requests`}>
                {contribution.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
