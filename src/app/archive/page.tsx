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
    "Full-stack engineering project archive by Vinayak Kumar: frontend web and React Native mobile apps built with React, Next.js, TypeScript, and applied AI.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Full-Stack Engineering Project Archive | Vinayak Kumar",
    description:
      "Full-stack and frontend engineering work across React, Next.js, TypeScript, React Native mobile apps, product dashboards, and applied AI systems.",
    url: "/archive",
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio cover for Vinayak Kumar, a Full-Stack Engineer building React, React Native, and applied AI products.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Engineering Project Archive | Vinayak Kumar",
    description:
      "Full-stack and frontend engineering work across React, Next.js, TypeScript, React Native mobile apps, product dashboards, and applied AI systems.",
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
