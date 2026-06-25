import type { MetadataRoute } from "next";
import { publicPaths, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-25");

  return publicPaths
    .filter((path) => !path.endsWith(".txt"))
    .map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/resources") ? 0.7 : 0.8,
    }));
}
