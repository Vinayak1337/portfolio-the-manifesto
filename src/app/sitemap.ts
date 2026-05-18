import type { MetadataRoute } from "next";
import { site } from "@/constants/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-19");

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
