import type { MetadataRoute } from "next";
import { siteConfig } from "@repo/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.productionUrl}/sitemap.xml`,
  };
}
