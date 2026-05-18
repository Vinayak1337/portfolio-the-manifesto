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
    "Project index of shipped Vinayak Kumar work across React, Next.js, full-stack systems, applied AI, ed-tech, commerce, Discord automation, and institutional CMS builds.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Projects — Vinayak Kumar",
    description:
      "Project index for Vinayak1337 work, React and Next.js products, applied AI systems, and full-stack engineering builds.",
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
