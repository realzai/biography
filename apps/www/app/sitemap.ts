import type { MetadataRoute } from "next";
import { siteConfig } from "@repo/data/site";
import { routes } from "~/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteConfig.productionUrl}${routes.home}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.productionUrl}${routes.about}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.productionUrl}${routes.projects}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.productionUrl}${routes.contact}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
