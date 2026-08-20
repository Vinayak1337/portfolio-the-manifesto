import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/shared/Glyphs";

export function ArchiveHero({
  illustration,
  location,
  role,
  shippingSince,
  totalCount,
}: Readonly<{
  illustration?: ReactNode;
  location: string;
  role: string;
  shippingSince: number;
  totalCount: number;
}>) {
  return (
    <section className="hero">
      {illustration}
      <div className="hero-grid">
        <h1>
          Vinayak
          <br />
          Kumar
          <br />
          <em>/ projects</em>
        </h1>
        <div className="side">
          <p className="hero-blurb">
            A project index of software shipped since {shippingSince}.{" "}
            <em>{totalCount} entries</em>. AI tooling, ed-tech, commerce, dating apps,
            tourism platforms, Discord automation, and one ambitious institutional CMS.
          </p>
          <div className="hero-meta">
            <div>
              <div className="k">Role</div>
              <div className="v">{role}</div>
            </div>
            <div>
              <div className="k">Based</div>
              <div className="v">{location}</div>
            </div>
            <div>
              <div className="k">Stack</div>
              <div className="v">React · Next.js · TS · Node</div>
            </div>
            <div>
              <div className="k">Est.</div>
              <div className="v">{shippingSince}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="index-line">
        <span><ArrowIcon direction="down" /> projects</span>
        <span className="right">{totalCount} indexed</span>
      </div>
    </section>
  );
}
