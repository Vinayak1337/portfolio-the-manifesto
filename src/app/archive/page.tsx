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
    "Project index for Vinayak Kumar: React, Next.js, TypeScript, full-stack dashboards, CMS workflows, ed-tech, commerce, and applied AI builds.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Projects — Vinayak Kumar",
    description:
      "Project index for Vinayak1337 work across React, Next.js, TypeScript, product dashboards, CMS workflows, and applied AI systems.",
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
