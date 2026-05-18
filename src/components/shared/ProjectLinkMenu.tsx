import type { ProjectLink } from "@/constants/portfolio";
import { externalLinkProps } from "@/components/shared/links";

export function ProjectLinkMenu({
  className,
  label = "Open",
  links,
}: Readonly<{
  className?: string;
  label?: string;
  links: readonly ProjectLink[];
}>) {
  return (
    <details className={`project-link-menu ${className ?? ""}`}>
      <summary>{label}</summary>
      <div className="project-link-menu-panel">
        {links.map((link) => (
          <a key={link.href} {...externalLinkProps(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </details>
  );
}
