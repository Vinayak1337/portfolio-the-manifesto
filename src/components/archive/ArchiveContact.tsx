export function ArchiveContact({
  email,
  filteredCount,
  filterLabel,
  github,
  githubUrl,
  linkedin,
  linkedinUrl,
  totalCount,
}: Readonly<{
  email: string;
  filteredCount: number;
  filterLabel: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  totalCount: number;
}>) {
  return (
    <section className="contact-sec" id="contact">
      <div className="big">
        Open the <em>ticket.</em>
      </div>
      <div className="cta-row">
        <a className="cta" href={`mailto:${email}`}>
          {email} <span className="ar">↗</span>
        </a>
        <a className="cta" href={githubUrl} target="_blank" rel="noreferrer">
          github.com/{github} <span className="ar">↗</span>
        </a>
        <a className="cta" href={linkedinUrl} target="_blank" rel="noreferrer">
          linkedin.com/in/{linkedin} <span className="ar">↗</span>
        </a>
      </div>
      <div className="footer-meta">
        <span>© 2026 / New Delhi / IST</span>
        <span>
          Project index at Idx. {String(totalCount).padStart(3, "0")}
          {filterLabel !== "ALL" && ` · filtered ${filteredCount}`}
        </span>
        <span>v2026.1</span>
      </div>
    </section>
  );
}
