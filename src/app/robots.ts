import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPublicSite
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
