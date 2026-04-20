import type { MetadataRoute } from "next";
import { curriculum } from "@/lib/curriculum";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const stage of curriculum) {
    entries.push({
      url: `${SITE_URL}/stage/${stage.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const chapter of stage.chapters) {
      if (!chapter.hasContent) continue;
      entries.push({
        url: `${SITE_URL}/stage/${stage.slug}/${chapter.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
