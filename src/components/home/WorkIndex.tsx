import Image from "next/image";
import type { ReactNode } from "react";
import type { Project, ProjectLink } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";
import { externalLinkProps } from "@/components/shared/links";
import { ProjectLinkMenu } from "@/components/shared/ProjectLinkMenu";
import { imageBlurDataURLs } from "@/constants/image-blurs";

function BundleLinks({ links }: Readonly<{ links: readonly ProjectLink[] }>) {
  return (
    <div className="work-bundle-panel">
      <span className="work-bundle-kicker">bundle surfaces</span>
      <div className="work-bundle-links">
        {links.map((link) => (
          <a key={link.href} {...externalLinkProps(link.href)}>
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function WorkIndex({
  illustration,
  projects,
  startIndex = 1,
}: Readonly<{
  illustration: ReactNode;
  projects: readonly Project[];
  startIndex?: number;
}>) {
  return (
    <section className="work-section" aria-labelledby="work-index-title">
      {illustration}
      <div className="work-header">
        <SplitText
          as="h2"
          id="work-index-title"
          className="work-title"
          tokens={[{ text: "More" }, { text: "work.", emphasis: true }]}
        />
        <div className="work-header-copy">
          <p>
            additional shipped systems {startIndex.toString().padStart(2, "0")}-
            {(startIndex + projects.length - 1).toString().padStart(2, "0")}
          </p>
          <a href="/archive">All work ↗</a>
        </div>
      </div>
      <div className="work-list">
        {projects.map((project, index) => {
          const primaryLink = project.link ?? project.links?.[0]?.href ?? null;
          const hasPrimaryLink = Boolean(primaryLink);
          const link = externalLinkProps(primaryLink);
          const displayIndex = (index + startIndex).toString().padStart(2, "0");
          const description = project.outcome ?? project.blurb;
          const actionLabel = project.links?.length && !hasPrimaryLink
            ? "Open surfaces"
            : hasPrimaryLink
              ? "View project"
              : "No public link";
          const content = (
            <>
              <span className="work-num">{displayIndex}</span>
              <span className="work-title-block">
                <span className="work-name">{project.name}</span>
                <span className="work-role">{project.role}</span>
                <span className="work-desc">{description}</span>
              </span>
              <span className="work-tags">{project.tags.slice(0, 4).join(" / ")}</span>
              <span className="work-year">{`'${project.year.slice(2)}`}</span>
              <span className={`work-action ${!hasPrimaryLink && !project.links?.length ? "work-action-muted" : ""}`}>
                <span>{actionLabel}</span>
                <span className="work-arrow" aria-hidden="true">
                  {project.links?.length && !hasPrimaryLink ? "↘" : hasPrimaryLink ? "↗" : "—"}
                </span>
              </span>
              <Image
                className="work-preview"
                data-work-preview={project.id}
                src={project.image}
                alt=""
                width={380}
                height={270}
                sizes="(max-width: 980px) 33vw, 380px"
                placeholder={imageBlurDataURLs[project.image] ? "blur" : "empty"}
                blurDataURL={imageBlurDataURLs[project.image]}
                aria-hidden="true"
              />
            </>
          );

          if (project.links?.length && hasPrimaryLink) {
            return (
              <div className="work-bundle work-bundle-linked" key={project.id}>
                <a
                  className="work-row"
                  data-work-row
                  data-project-id={project.id}
                  aria-label={`Open ${project.name} project`}
                  {...link}
                >
                  {content}
                </a>
                <ProjectLinkMenu
                  className="work-link-menu"
                  label="Open surfaces"
                  links={project.links}
                />
              </div>
            );
          }

          if (project.links?.length) {
            return (
              <details className="work-bundle" key={project.id}>
                <summary
                  className="work-row work-row-bundle"
                  data-work-row
                  data-project-id={project.id}
                  aria-label={`Open ${project.name} project surfaces`}
                >
                  {content}
                </summary>
                <BundleLinks links={project.links} />
              </details>
            );
          }

          if (!hasPrimaryLink) {
            return (
              <div
                className="work-row work-row-static"
                data-work-row
                data-project-id={project.id}
                key={project.id}
              >
                {content}
              </div>
            );
          }

          return (
            <a
              className="work-row"
              data-work-row
              data-project-id={project.id}
              key={project.id}
              aria-label={`Open ${project.name} project`}
              {...link}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
