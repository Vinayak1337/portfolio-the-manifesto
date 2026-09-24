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
  title: "Full-Stack Engineering Project Archive",
  description:
    "Full-stack engineering project archive by Vinayak Kumar: web and React Native apps, AI agents, and workflows built with React, Next.js, and TypeScript.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Full-Stack Engineering Project Archive | Vinayak Kumar",
    description:
      "Full-stack work across React, Next.js, TypeScript, React Native apps, product dashboards, AI agents, and workflows.",
    url: "/archive",
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio cover for Vinayak Kumar, a Full-Stack Engineer building web and mobile products, AI agents, and workflows.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Engineering Project Archive | Vinayak Kumar",
    description:
      "Full-stack work across React, Next.js, TypeScript, React Native apps, product dashboards, AI agents, and workflows.",
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
