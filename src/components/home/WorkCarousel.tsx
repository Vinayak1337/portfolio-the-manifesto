import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";
import { externalLinkProps } from "@/components/shared/links";
import { ProjectLinkMenu } from "@/components/shared/ProjectLinkMenu";
import { imageBlurDataURLs } from "@/constants/image-blurs";

function RailSeam({ index }: Readonly<{ index: number }>) {
  return (
    <span className="rail-seam" data-rail-index={index + 1} aria-hidden="true">
      <span className="rail-seam-line" />
      <span className="rail-seam-tick rail-seam-tick-top" />
      <span className="rail-seam-mid" />
      <span className="rail-seam-tick rail-seam-tick-bottom" />
      <span className="rail-seam-index">{String(index + 1).padStart(2, "0")}</span>
    </span>
  );
}

export function WorkCarousel({
  illustration,
  projects,
  renderProjectGlyph,
}: Readonly<{
  illustration: ReactNode;
  projects: readonly Project[];
  renderProjectGlyph: (project: Project, index: number) => ReactNode;
}>) {
  return (
    <section
      className="rail-sec"
      id="work"
      data-rail-section
      data-rail-count={projects.length}
      aria-labelledby="work-rail-title"
    >
      <div className="pin">
        {illustration}
        <div className="rail-head">
          <SplitText
            as="h2"
            id="work-rail-title"
            className="rail-title"
            tokens={[{ text: "Selected" }, { text: "systems.", emphasis: true }]}
          />
          <div className="rail-counter" aria-live="polite">
            <span className="big" data-rail-number>
              01
            </span>
            <span className="rail-counter-total">
              / {projects.length.toString().padStart(2, "0")}
            </span>
            <span className="rail-counter-scroll"> - SCROLL</span>
          </div>
        </div>

        <div className="rail-track" data-rail-track>
          {projects.map((project, index) => {
            const primaryLink = project.link ?? project.links?.[0]?.href ?? null;
            const hasPrimaryLink = Boolean(primaryLink);
            const link = externalLinkProps(primaryLink);
            const content = (
              <>
                <div className="rail-cover">
                  <span className="project-tag">{project.category}</span>
                  {renderProjectGlyph(project, index)}
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 980px) 50vw, min(540px, 60vw)"
                    preload={index < 2}
                    loading={index < 2 ? undefined : "lazy"}
                    placeholder={imageBlurDataURLs[project.image] ? "blur" : "empty"}
                    blurDataURL={imageBlurDataURLs[project.image]}
                  />
                </div>
                <div className="rail-foot">
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.name}</h3>
                <span className="rail-role">{project.role}</span>
                <span className="rail-tech-tags" aria-label={`${project.name} technologies`}>
                  {project.tags.slice(0, 4).join(" / ")}
                </span>
                <p>{project.outcome ?? project.tags.slice(0, 4).join(" / ")}</p>
                <span className="rail-action">
                  <span>{hasPrimaryLink ? "View project" : "No public surface"}</span>
                  <span aria-hidden="true">{hasPrimaryLink ? "↗" : "—"}</span>
                </span>
              </>
            );

            if (project.links?.length) {
              return (
                <div className="rail-item" key={project.id}>
                  <article className="rail-card">
                    <a
                      className="rail-card-main"
                      aria-label={`Open ${project.name} project`}
                      {...link}
                    >
                      {content}
                    </a>
                    <ProjectLinkMenu
                      className="rail-link-menu"
                      label="Open surfaces"
                      links={project.links}
                    />
                  </article>
                  {index < projects.length - 1 ? <RailSeam index={index} /> : null}
                </div>
              );
            }

            if (!hasPrimaryLink) {
              return (
                <div className="rail-item" key={project.id}>
                  <article className="rail-card rail-card-direct rail-card-static">
                    {content}
                  </article>
                  {index < projects.length - 1 ? <RailSeam index={index} /> : null}
                </div>
              );
            }

            return (
              <div className="rail-item" key={project.id}>
                <a
                  className="rail-card rail-card-direct"
                  aria-label={`Open ${project.name} project`}
                  {...link}
                >
                  {content}
                </a>
                {index < projects.length - 1 ? <RailSeam index={index} /> : null}
              </div>
            );
          })}
        </div>

        <div className="rail-progress" aria-hidden="true">
          <div data-rail-bar />
        </div>
      </div>
    </section>
  );
}
