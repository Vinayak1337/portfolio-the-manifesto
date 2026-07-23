"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ArchiveProject } from "@/constants/archive";
import type { NavLink } from "@/constants/portfolio";
import { FluxClientEffects } from "@/components/flux/FluxClientEffects";
import { FluxArchiveHeroIllustration } from "@/components/flux/FluxIllustrations";
import { imageBlurDataURLs } from "@/constants/image-blurs";
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
  const hoverPosRef = useRef({ x: 0, y: 0 });
  const previewRef = useRef<HTMLImageElement>(null);

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
  const positionPreview = (x: number, y: number) => {
    const next = getPreviewPosition(x, y);
    hoverPosRef.current = next;

    if (previewRef.current) {
      previewRef.current.style.left = `${next.x}px`;
      previewRef.current.style.top = `${next.y}px`;
    }
  };
  const isFlux = variant === "flux";

  useLayoutEffect(() => {
    if (!hoverProject || !previewRef.current) return;

    const { x, y } = hoverPosRef.current;
    previewRef.current.style.left = `${x}px`;
    previewRef.current.style.top = `${y}px`;
  }, [hoverProject]);

  return (
    <main
      className={`archive-page ${isFlux ? "archive-projects-page has-custom-cursor variant-flux" : ""}`}
      data-about-active="web"
      data-flux-root={isFlux ? "" : undefined}
    >
      {isFlux ? <FluxClientEffects /> : null}
      <Navbar
        mark={isFlux ? "VK / PROJECTS / IDX.2026" : "VK / THE ARCHIVE / IDX.2026"}
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
          onMove={positionPreview}
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
            onMove={positionPreview}
            projects={longTailRows}
            title="Additional projects"
            totalProjects={projects}
          />
        ) : null}
      </section>

      {hoverProject ? (
        <Image
          className="thumb-preview is-on"
          ref={previewRef}
          src={hoverProject.image}
          alt=""
          width={300}
          height={210}
          sizes="(max-width: 980px) 45vw, 300px"
          placeholder={imageBlurDataURLs[hoverProject.image] ? "blur" : "empty"}
          blurDataURL={imageBlurDataURLs[hoverProject.image]}
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
    </main>
  );
}
