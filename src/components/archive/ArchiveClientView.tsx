"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ArchiveProject } from "@/constants/archive";
import type { NavLink } from "@/constants/portfolio";
import { FluxClientEffects } from "@/components/flux/FluxClientEffects";
import { FluxArchiveHeroIllustration } from "@/components/flux/FluxIllustrations";
import { Navbar } from "@/components/navigation/Navbar";
import { Marquee } from "@/components/shared/Marquee";
import { ArchiveContact } from "./ArchiveContact";
import { ArchiveHero } from "./ArchiveHero";
import { ArchiveMarquee } from "./ArchiveMarquee";
import { ArchiveTable, type ArchiveCategoryOption, type CatFilter } from "./ArchiveRows";

const previewWidth = 300;
const previewHeight = 210;
const previewOffset = 24;
const previewMargin = 16;

type ArchivePerson = Readonly<{
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  resume: string;
  roleShort: string;
  shippingSince: number;
}>;

export function ArchiveClientView({
  categories,
  longTail,
  marqueeItems,
  navLinks,
  person,
  projects,
  strong,
  variant = "classic",
}: Readonly<{
  categories: readonly ArchiveCategoryOption[];
  longTail: readonly ArchiveProject[];
  marqueeItems: readonly string[];
  navLinks: readonly NavLink[];
  person: ArchivePerson;
  projects: readonly ArchiveProject[];
  strong: readonly ArchiveProject[];
  variant?: "classic" | "flux";
}>) {
  const [filter, setFilter] = useState<CatFilter>("ALL");
  const [longTailOpen, setLongTailOpen] = useState(variant === "flux");
  const [hoverProject, setHoverProject] = useState<ArchiveProject | null>(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const strongRows = useMemo(
    () => (filter === "ALL" ? strong : strong.filter((project) => project.category === filter)),
    [filter, strong],
  );
  const longTailRows = useMemo(
    () =>
      filter === "ALL"
        ? longTail
        : longTail.filter((project) => project.category === filter),
    [filter, longTail],
  );

  const filteredCount = strongRows.length + longTailRows.length;
  const totalCount = projects.length;
  const getPreviewPosition = (x: number, y: number) => {
    if (typeof globalThis === "undefined") {
      return { x: x + previewOffset, y };
    }

    let nextX = x + previewOffset;

    if (nextX + previewWidth + previewMargin > globalThis.innerWidth) {
      nextX = x - previewWidth - previewOffset;
    }

    nextX = Math.min(
      Math.max(nextX, previewMargin),
      globalThis.innerWidth - previewWidth - previewMargin,
    );

    const minY = previewHeight / 2 + previewMargin;
    const maxY = globalThis.innerHeight - previewHeight / 2 - previewMargin;
    const nextY = Math.min(Math.max(y, minY), Math.max(minY, maxY));

    return { x: nextX, y: nextY };
  };
  const onMove = (x: number, y: number) => setHoverPos(getPreviewPosition(x, y));
  const isFlux = variant === "flux";

  return (
    <div
      className={`archive-page ${isFlux ? "archive-projects-page has-custom-cursor variant-flux" : ""}`}
      data-about-active="web"
      data-flux-root={isFlux ? "" : undefined}
    >
      {isFlux ? <FluxClientEffects /> : null}
      <Navbar
        mark={isFlux ? "VK — PROJECTS / IDX.2026" : "VK — THE ARCHIVE / IDX.2026"}
        links={navLinks}
        status="available Jun 16, 2026"
      />
      <ArchiveHero
        illustration={isFlux ? <FluxArchiveHeroIllustration /> : undefined}
        location={person.location}
        role={person.roleShort}
        shippingSince={person.shippingSince}
        totalCount={totalCount}
      />
      {isFlux ? <Marquee items={marqueeItems} /> : <ArchiveMarquee items={marqueeItems} />}

      <section className="archive-sec" id="strong">
        <div className="sec-head">
          <h2>§ Selected Projects</h2>
          <span className="count">{String(strongRows.length).padStart(2, "0")}</span>
        </div>
        <ArchiveTable
          categories={categories}
          currentFilter={filter}
          emptyLabel="No selected projects in this category."
          onFilter={setFilter}
          onHover={setHoverProject}
          onMove={onMove}
          projects={strongRows}
          title="Strong work"
          totalProjects={projects}
        />
      </section>

      <section
        className={`archive-sec collapsed-sec ${longTailOpen ? "is-open" : ""}`}
        id="archive-long"
      >
        <button
          type="button"
          className="sec-head"
          aria-expanded={longTailOpen}
          onClick={() => setLongTailOpen((value) => !value)}
        >
          <h2>
            § Additional Projects <span className="chevron">›</span>
          </h2>
          <span className="count">{String(longTailRows.length).padStart(2, "0")}</span>
        </button>
        {longTailOpen ? (
          <ArchiveTable
            currentFilter={filter}
            emptyLabel="No additional projects in this category."
            onHover={setHoverProject}
            onMove={onMove}
            projects={longTailRows}
            title="Additional projects"
            totalProjects={projects}
          />
        ) : null}
      </section>

      {hoverProject ? (
        <Image
          className="thumb-preview is-on"
          src={hoverProject.image}
          alt=""
          width={300}
          height={210}
          unoptimized
          style={{ left: `${hoverPos.x}px`, top: `${hoverPos.y}px` }}
        />
      ) : null}

      <ArchiveContact
        email={person.email}
        filteredCount={filteredCount}
        filterLabel={filter}
        github={person.github}
        githubUrl={person.githubUrl}
        linkedin={person.linkedin}
        linkedinUrl={person.linkedinUrl}
        totalCount={totalCount}
      />
    </div>
  );
}
