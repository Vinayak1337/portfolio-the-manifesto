import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-26");

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/archive`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/Vinayak_Kumar_Resume.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
