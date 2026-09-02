import type { ArchiveCategory, ArchiveProject } from "@/constants/archive";
import type { ProjectLink } from "@/constants/portfolio";
import { ArrowIcon } from "@/components/shared/Glyphs";
import { externalLinkProps } from "@/components/shared/links";
import { ProjectLinkMenu } from "@/components/shared/ProjectLinkMenu";

export type CatFilter = ArchiveCategory | "ALL";

export type ArchiveCategoryOption = Readonly<{
  id: CatFilter;
  label: string;
}>;

function renderName(name: string) {
  const delimiterIdx = name.indexOf(" / ");

  if (delimiterIdx === -1) {
    return name;
  }

  return (
    <>
      {name.slice(0, delimiterIdx)}
      <em>{name.slice(delimiterIdx)}</em>
    </>
  );
}

function BundleLinks({ links }: Readonly<{ links: readonly ProjectLink[] }>) {
  return (
    <div className="archive-bundle-panel">
      <span className="archive-bundle-kicker">bundle surfaces</span>
      <div className="archive-bundle-links">
        {links.map((link) => (
          <a key={link.href} {...externalLinkProps(link.href)}>
            {link.label}
            <ArrowIcon />
          </a>
        ))}
      </div>
    </div>
  );
}

export function ArchiveRow({
  displayIndex,
  onHover,
  onMove,
  project,
}: Readonly<{
  displayIndex: string;
  onHover: (project: ArchiveProject | null) => void;
  onMove: (x: number, y: number) => void;
  project: ArchiveProject;
}>) {
  const href = project.link ?? project.repo ?? null;
  const hasDirectLink = Boolean(href);
  const actionLabel = project.links?.length && !hasDirectLink
    ? "Open surfaces"
    : hasDirectLink
      ? "Open project"
      : "No public link";
  const actionIcon = project.links?.length && !hasDirectLink
    ? <ArrowIcon direction="down-right" />
    : hasDirectLink
      ? <ArrowIcon />
      : "—";
  const content = (
    <>
      <span className="idx">{displayIndex}</span>
      <span className="archive-project-glyph" aria-hidden="true">
        {project.category.slice(0, 2)}
      </span>
      <span className="nm">
        <span className="archive-name-main">{renderName(project.name)}</span>
        {project.description ? (
          <span className="archive-desc">{project.description}</span>
        ) : null}
      </span>
      <span className="co">{project.company}</span>
      <span className="tg">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </span>
      <span className="yr">{project.year}</span>
      {hasDirectLink || project.links?.length ? (
        <span className="ar archive-action">
          <span className="archive-action-label">{actionLabel}</span>
          <span className="archive-expand-indicator" aria-hidden>
            {actionIcon}
          </span>
        </span>
      ) : (
        <span className="ar ar-muted archive-action">
          <span className="archive-action-label">No public link</span>
          <span aria-hidden>—</span>
        </span>
      )}
    </>
  );

  if (project.links?.length && hasDirectLink) {
    return (
      <div
        className="archive-bundle-row archive-bundle-linked"
        data-tier={project.tier.toLowerCase()}
        onMouseEnter={(event) => {
          onMove(event.clientX, event.clientY);
          onHover(project);
        }}
        onMouseLeave={() => onHover(null)}
        onMouseMove={(event) => onMove(event.clientX, event.clientY)}
      >
        <a
          className="tbl-row"
          data-tier={project.tier.toLowerCase()}
          aria-label={`Open ${project.name} project`}
          {...externalLinkProps(href)}
        >
          {content}
        </a>
        <ProjectLinkMenu
          className="archive-link-menu"
          label="Open surfaces"
          links={project.links}
        />
      </div>
    );
  }

  if (project.links?.length) {
    return (
      <details
        className="archive-bundle-row"
        data-tier={project.tier.toLowerCase()}
        onMouseEnter={(event) => {
          onMove(event.clientX, event.clientY);
          onHover(project);
        }}
        onMouseLeave={() => onHover(null)}
        onMouseMove={(event) => onMove(event.clientX, event.clientY)}
      >
        <summary
          className="tbl-row tbl-row-bundle"
          data-tier={project.tier.toLowerCase()}
          aria-label={`Open ${project.name} project surfaces`}
        >
          {content}
        </summary>
        <BundleLinks links={project.links} />
      </details>
    );
  }

  if (!href) {
    return (
      <div
        className="tbl-row tbl-row-static"
        data-tier={project.tier.toLowerCase()}
        onMouseEnter={(event) => {
          onMove(event.clientX, event.clientY);
          onHover(project);
        }}
        onMouseLeave={() => onHover(null)}
        onMouseMove={(event) => onMove(event.clientX, event.clientY)}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      className="tbl-row"
      data-tier={project.tier.toLowerCase()}
      aria-label={`Open ${project.name} project`}
      {...externalLinkProps(href)}
      onMouseEnter={(event) => {
        onMove(event.clientX, event.clientY);
        onHover(project);
      }}
      onMouseLeave={() => onHover(null)}
      onMouseMove={(event) => onMove(event.clientX, event.clientY)}
    >
      {content}
    </a>
  );
}

export function ArchiveTable({
  categories,
  currentFilter,
  emptyLabel,
  onFilter,
  onHover,
  onMove,
  projects,
  title,
  totalProjects,
}: Readonly<{
  categories?: readonly ArchiveCategoryOption[];
  currentFilter: CatFilter;
  emptyLabel: string;
  onFilter?: (filter: CatFilter) => void;
  onHover: (project: ArchiveProject | null) => void;
  onMove: (x: number, y: number) => void;
  projects: readonly ArchiveProject[];
  title: string;
  totalProjects: readonly ArchiveProject[];
}>) {
  return (
    <>
      {categories && onFilter ? (
        <div className="filter-bar" role="group" aria-label={`${title} filters`}>
          {categories.map((category) => {
            const count =
              category.id === "ALL"
                ? totalProjects.length
                : totalProjects.filter((project) => project.category === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                className={`filter-pill ${currentFilter === category.id ? "active" : ""}`}
                onClick={() => onFilter(category.id)}
                aria-pressed={currentFilter === category.id}
              >
                {category.label} · {count}
              </button>
            );
          })}
        </div>
      ) : null}
      <div className="tbl-head">
        <div>No.</div>
        <div className="glyph-head" />
        <div>Title</div>
        <div>Context</div>
        <div>Stack</div>
        <div className="right">Year</div>
        <div />
      </div>
      <div>
        {projects.map((project) => (
          <ArchiveRow
            key={project.id}
            project={project}
            displayIndex={project.idx}
            onHover={onHover}
            onMove={onMove}
          />
        ))}
        {projects.length === 0 && <div className="empty-row">{emptyLabel}</div>}
      </div>
    </>
  );
}
