import type { MetadataRoute } from "next";
import { site } from "@/constants/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/archive`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/work/immibot`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${site.url}/Vinayak_Kumar_Resume.pdf`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
