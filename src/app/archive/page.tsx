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
  title: "Project archive",
  description:
    "A scan-friendly project archive from Vinayak Kumar: React, Next.js, TypeScript, full-stack dashboards, CMS workflows, ed-tech, commerce, and applied AI builds.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Vinayak Kumar project archive",
    description:
      "A scan-friendly archive of Vinayak Kumar's work across React, Next.js, TypeScript, product dashboards, CMS workflows, and applied AI systems.",
    url: "/archive",
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vinayak Kumar, React and Next.js software engineer building frontend-heavy full-stack product systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Kumar project archive",
    description:
      "A scan-friendly archive of Vinayak Kumar's work across React, Next.js, TypeScript, product dashboards, CMS workflows, and applied AI systems.",
    images: ["/twitter-image"],
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
