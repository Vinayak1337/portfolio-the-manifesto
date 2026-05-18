import type { Metadata } from "next";
import { ArchiveClientView } from "@/components/archive/ArchiveClientView";
import {
  archiveCategories,
  archiveLongTail,
  archiveProjects,
  archiveStrong,
} from "@/constants/archive";
import { archiveNavigationLinks, marqueeTech, person, site } from "@/constants/portfolio";
import "./archive.css";

export const metadata: Metadata = {
  title: "Projects — Vinayak Kumar",
  description:
    "Project index of shipped Vinayak Kumar work across applied AI, full-stack systems, ed-tech, commerce, Discord automation, and institutional CMS builds.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Projects — Vinayak Kumar",
    description:
      "Project index for Vinayak1337 work, Relics systems, applied AI products, and full-stack engineering builds.",
    url: "/archive",
    type: "website",
    siteName: site.name,
  },
};

export default function ArchivePage() {
  return (
    <ArchiveClientView
      categories={archiveCategories}
      longTail={archiveLongTail}
      marqueeItems={marqueeTech}
      navLinks={archiveNavigationLinks}
      person={person}
      projects={archiveProjects}
      strong={archiveStrong}
      variant="flux"
    />
  );
}
