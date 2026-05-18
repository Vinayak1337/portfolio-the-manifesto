import type { ArchiveProject } from "./archive";
import { mainProjectIds, portfolioGridProjects } from "./project-grid";

type ArchiveProjectInput = Omit<ArchiveProject, "idx">;

// Source: ../../../projects_grid.md. Keep this file as the single runtime grid
// for the selected rail, homepage ranked work, and /archive ordering.
const rankScores = [
  9.6, 9.5, 9.4, 9.2, 9, 8.8, 8.6, 8.4,
  8, 7.9, 7.8, 7.2, 7, 6.8, 6.7, 6.6,
  6.4, 6.2, 6, 5.8, 5.7, 5.6, 5.5, 5.4,
  5.3, 5.2, 5.1, 5, 4.8, 4.7, 4.6, 4, 3.8,
] as const;

function repoFor(project: (typeof portfolioGridProjects)[number]) {
  if (project.link?.includes("github.com")) {
    return project.link;
  }

  return project.links?.find((link) => link.href.includes("github.com"))?.href ?? null;
}

const mainProjectIdSet = new Set<string>(mainProjectIds);
const hiddenProjectIdSet = new Set<string>([
  "portfolio",
  "portfolio-3d",
  "brawl-auditor",
  "brawlex-bot",
  "brawlex-bot-org",
  "brawlex-bot-personal",
]);
const projectById = new Map(portfolioGridProjects.map((project) => [project.id, project]));
const promotedGridProjectIds = [
  ...mainProjectIds,
  "company-data-scraper",
  "postman-clone",
  "levtours",
  "cadillacs-server",
  "relics-general-bot",
  "tourney-ticketeer",
  "face-recognition",
  "mteane",
  "e-commerce-pwa",
  "chaintusker-nft-server",
];
const promotedGridProjectIdSet = new Set<string>(promotedGridProjectIds);
const orderedGridProjects = [
  ...promotedGridProjectIds
    .map((id) => projectById.get(id))
    .filter((project): project is (typeof portfolioGridProjects)[number] =>
      Boolean(project),
    ),
  ...portfolioGridProjects.filter(
    (project) =>
      !promotedGridProjectIdSet.has(project.id) && !hiddenProjectIdSet.has(project.id),
  ),
];

const gridRows: ArchiveProjectInput[] = orderedGridProjects.map((project, index) => ({
  id: project.id,
  name: project.name,
  company: project.company,
  description: project.outcome ?? project.blurb,
  year: project.year,
  category: project.category === "AI" ? "PERSONAL" : project.category,
  tier: mainProjectIdSet.has(project.id) ? "STRONG" : "ARCHIVE",
  verdict: mainProjectIdSet.has(project.id)
    ? "Strong portfolio"
    : index < 20
      ? "Portfolio candidate"
      : "Secondary / archive",
  tags: project.tags,
  link: project.link,
  links: project.links,
  repo: repoFor(project),
  image: project.image,
  rankScore: rankScores[index],
}));

export const homeGridProjectIds = gridRows
  .slice(mainProjectIds.length, mainProjectIds.length + 10)
  .map((project) => project.id);

export const archiveGridRaw: ArchiveProjectInput[] = [...gridRows];
