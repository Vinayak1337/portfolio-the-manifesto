"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  archiveCategories,
  archiveLongTail,
  archiveProjects,
  archiveStrong,
  type ArchiveCategory,
  type ArchiveProject,
} from "@/data/archive";
import { marqueeTech, person } from "@/data/portfolio";

type CatFilter = ArchiveCategory | "ALL";

const MARQUEE_ITEMS = marqueeTech.length > 0 ? marqueeTech : ["Next.js", "TypeScript"];

function renderName(name: string) {
  const dashIdx = name.indexOf(" — ");
  if (dashIdx === -1) return name;
  return (
    <>
      {name.slice(0, dashIdx)}
      <em>{name.slice(dashIdx)}</em>
    </>
  );
}

type RowProps = {
  project: ArchiveProject;
  onHover: (project: ArchiveProject | null) => void;
  onMove: (x: number, y: number) => void;
};

function Row({ project, onHover, onMove }: RowProps) {
  const href = project.link ?? project.repo ?? "#";
  return (
    <a
      className="tbl-row"
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
    >
      <span className="idx">{project.idx}</span>
      <span className="nm">{renderName(project.name)}</span>
      <span className="co">{project.company}</span>
      <span className="tg">
        {project.tags.slice(0, 5).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </span>
      <span className="vd">{project.verdict}</span>
      <span className="yr">{project.year}</span>
      <span className="ar" aria-hidden>
        ↗
      </span>
    </a>
  );
}

export default function Archive() {
  const [filter, setFilter] = useState<CatFilter>("ALL");
  const [longTailOpen, setLongTailOpen] = useState(false);
  const [hoverProject, setHoverProject] = useState<ArchiveProject | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const strongRows = useMemo(
    () => (filter === "ALL" ? archiveStrong : archiveStrong.filter((p) => p.category === filter)),
    [filter],
  );
  const longTailRows = useMemo(
    () => (filter === "ALL" ? archiveLongTail : archiveLongTail.filter((p) => p.category === filter)),
    [filter],
  );

  const totalCount = archiveProjects.length;
  const filteredCount = strongRows.length + longTailRows.length;

  const onHover = (p: ArchiveProject | null) => setHoverProject(p);
  const onMove = (x: number, y: number) => setHoverPos({ x: x + 160, y });

  return (
    <div className="archive-page">
      <nav className="nav">
        <div>VK — THE ARCHIVE / IDX.2026</div>
        <ul>
          <li>
            <Link href="/">↩ manifesto</Link>
          </li>
          <li>
            <a href="#strong">§ strong</a>
          </li>
          <li>
            <a href="#archive-long">§ archive</a>
          </li>
          <li>
            <a href="#contact">§ contact</a>
          </li>
          <li>
            <a href={person.resume} target="_blank" rel="noreferrer">
              ↗ résumé
            </a>
          </li>
          <li className="live">available Q2 ’26</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <h1>
            Vinayak
            <br />
            Kumar
            <br />
            <em>/ the archive</em>
          </h1>
          <div className="side">
            <p className="hero-blurb">
              An index of {person.yearsShipping}+ years of shipped software.{" "}
              <em>{totalCount} entries</em>. AI tooling, ed-tech, commerce, dating apps,
              tourism platforms, Discord automation, and one ambitious institutional CMS.
            </p>
            <div className="hero-meta">
              <div>
                <div className="k">Role</div>
                <div className="v">{person.roleShort}</div>
              </div>
              <div>
                <div className="k">Based</div>
                <div className="v">{person.location}</div>
              </div>
              <div>
                <div className="k">Stack</div>
                <div className="v">Next.js · RN · Node · Python</div>
              </div>
              <div>
                <div className="k">Est.</div>
                <div className="v">2021</div>
              </div>
            </div>
          </div>
        </div>
        <div className="index-line">
          <span>↓ index</span>
          <span style={{ textAlign: "center" }}>scroll to browse / click a row to open</span>
          <span style={{ textAlign: "right" }}>{totalCount} live</span>
        </div>
      </section>

      <div className="marquee-band" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <span className="marquee-item" key={dup}>
              {MARQUEE_ITEMS.map((t, i) => (
                <span key={`${dup}-${i}`}>
                  § {t}
                  {i < MARQUEE_ITEMS.length - 1 && <span className="sep"> ◇ </span>}
                </span>
              ))}
              <span className="sep"> ◇ </span>
            </span>
          ))}
        </div>
      </div>

      <section className="archive-sec" id="strong">
        <div className="sec-head">
          <h2>§ Strong / Selected Work</h2>
          <span className="count">{String(strongRows.length).padStart(2, "0")}</span>
        </div>
        <div className="filter-bar" role="tablist">
          {archiveCategories.map((cat) => {
            const count =
              cat.id === "ALL"
                ? totalCount
                : archiveProjects.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${filter === cat.id ? "active" : ""}`}
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
              >
                {cat.label} · {count}
              </button>
            );
          })}
        </div>
        <div className="tbl-head">
          <div>No.</div>
          <div>Title</div>
          <div>Context</div>
          <div>Stack</div>
          <div>Verdict</div>
          <div style={{ textAlign: "right" }}>Year</div>
          <div />
        </div>
        <div>
          {strongRows.map((p) => (
            <Row key={p.id} project={p} onHover={onHover} onMove={onMove} />
          ))}
          {strongRows.length === 0 && (
            <div style={{ padding: "40px 8px", fontFamily: "var(--mono)", fontSize: 12, opacity: 0.6 }}>
              No strong-tier projects in this category.
            </div>
          )}
        </div>
      </section>

      <section
        className={`archive-sec collapsed-sec ${longTailOpen ? "is-open" : ""}`}
        id="archive-long"
      >
        <div
          className="sec-head"
          role="button"
          tabIndex={0}
          aria-expanded={longTailOpen}
          onClick={() => setLongTailOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLongTailOpen((v) => !v);
            }
          }}
        >
          <h2>
            § Archive / Long Tail <span className="chev">›</span>
          </h2>
          <span className="count">{String(longTailRows.length).padStart(2, "0")}</span>
        </div>
        {longTailOpen && (
          <>
            <div className="tbl-head">
              <div>No.</div>
              <div>Title</div>
              <div>Context</div>
              <div>Stack</div>
              <div>Verdict</div>
              <div style={{ textAlign: "right" }}>Year</div>
              <div />
            </div>
            <div>
              {longTailRows.map((p) => (
                <Row key={p.id} project={p} onHover={onHover} onMove={onMove} />
              ))}
              {longTailRows.length === 0 && (
                <div style={{ padding: "40px 8px", fontFamily: "var(--mono)", fontSize: 12, opacity: 0.6 }}>
                  No long-tail projects in this category.
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {hoverProject && (
        <Image
          className="thumb-preview is-on"
          src={hoverProject.image}
          alt=""
          width={300}
          height={210}
          unoptimized
          style={{ left: `${hoverPos.x}px`, top: `${hoverPos.y}px` }}
        />
      )}

      <section className="contact-sec" id="contact">
        <div className="big">
          Open the <em>ticket.</em>
        </div>
        <div className="cta-row">
          <a className="cta" href={`mailto:${person.email}`}>
            {person.email} <span className="ar">↗</span>
          </a>
          <a className="cta" href={person.githubUrl} target="_blank" rel="noreferrer">
            github.com/{person.github} <span className="ar">↗</span>
          </a>
          <a className="cta" href={person.linkedinUrl} target="_blank" rel="noreferrer">
            linkedin.com/in/{person.linkedin} <span className="ar">↗</span>
          </a>
        </div>
        <div className="footer-meta">
          <span>© 2026 / New Delhi / IST</span>
          <span>
            Archive closed at Idx. {String(totalCount).padStart(3, "0")}
            {filter !== "ALL" && ` · filtered ${filteredCount}`}
          </span>
          <span>v2026.1</span>
        </div>
      </section>
    </div>
  );
}
