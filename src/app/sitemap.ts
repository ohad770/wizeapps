import type { MetadataRoute } from "next";
import { publicPaths, resources, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultLastModified = new Date("2026-07-06");

  return publicPaths
    .filter((path) => !path.endsWith(".txt"))
    .map((path) => {
      const resource = resources.find(
        (item) => path === `/resources/${item.slug}`,
      );

      return {
        url: `${siteUrl}${path}`,
        lastModified: resource
          ? new Date(resource.dateModified)
          : defaultLastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : path.startsWith("/resources") ? 0.7 : 0.8,
      } as const;
    });
}
