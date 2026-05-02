import type { Metadata } from "next";
import Archive from "@/components/Archive";
import "./archive.css";

export const metadata: Metadata = {
  title: "The Archive — Vinayak Kumar",
  description:
    "Index of every shipped project — five years of AI tools, ed-tech platforms, commerce apps, Discord automation, and an institutional CMS.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "The Archive — Vinayak Kumar",
    description:
      "Index of every shipped project — ranked by job-market fit and grouped into Strong picks and the long tail.",
    url: "/archive",
    type: "website",
  },
};

export default function ArchivePage() {
  return <Archive />;
}
