import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/shared/Glyphs";
import { CopyEmail } from "@/components/shared/CopyEmail";
import { SplitText } from "@/components/shared/SplitText";

type Person = Readonly<{
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resume: string;
}>;

export function Contact({
  illustration,
  person,
}: Readonly<{
  illustration: ReactNode;
  person: Person;
}>) {
  return (
    <section className="contact-sec" data-contact-section id="contact" aria-labelledby="contact-title">
      {illustration}
      <span className="section-tag">Contact</span>
      <SplitText
        as="h2"
        id="contact-title"
        className="contact-title"
        letters
        tokens={[
          { text: "Have something" },
          { text: "worth building?", emphasis: true },
        ]}
      />
      <div className="contact-row">
        <div className="email-group">
          <a className="email magnetic" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <CopyEmail email={person.email} />
        </div>
        <div className="contact-links">
          <a href={person.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={person.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="/archive">Archive <ArrowIcon /></a>
        </div>
      </div>
      <div className="footer-meta">
        <span>© 2026 Vinayak Kumar</span>
        <span>New Delhi · IST (UTC+5:30)</span>
      </div>
    </section>
  );
}
