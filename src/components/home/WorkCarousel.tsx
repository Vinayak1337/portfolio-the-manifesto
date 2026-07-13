import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "@/constants/portfolio";
import { SplitText } from "@/components/shared/SplitText";
import { externalLinkProps } from "@/components/shared/links";
import { ProjectLinkMenu } from "@/components/shared/ProjectLinkMenu";

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
            const hasDirectLink = Boolean(project.link);
            const link = externalLinkProps(project.link);
            const content = (
              <>
                <div className="rail-cover">
                  <span className="project-tag">{project.category}</span>
                  {renderProjectGlyph(project, index)}
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 82vw, 540px"
                    loading="eager"
                  />
                </div>
                <div className="rail-foot">
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.name}</h3>
                <span className="rail-tech-tags" aria-label={`${project.name} technologies`}>
                  {project.tags.slice(0, 4).join(" / ")}
                </span>
                <p>{project.outcome ?? project.tags.slice(0, 4).join(" / ")}</p>
              </>
            );

            if (project.links?.length) {
              return (
                <article className="rail-card" key={project.id}>
                  {content}
                  <ProjectLinkMenu className="rail-link-menu" links={project.links} />
                </article>
              );
            }

            if (!hasDirectLink) {
              return (
                <article className="rail-card rail-card-static" key={project.id}>
                  {content}
                </article>
              );
            }

            return (
              <a className="rail-card" key={project.id} {...link}>
                {content}
              </a>
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
