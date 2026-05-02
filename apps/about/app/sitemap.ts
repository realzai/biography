// to setup sitemap
import type { MetadataRoute } from "next";
import { siteConfig } from "@repo/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.aboutUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: siteConfig.galleryUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
