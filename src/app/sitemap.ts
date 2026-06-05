import type { MetadataRoute } from "next";

const BASE = "https://ahtshamadil.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/projects/farmkonnect`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/projects/nexstock`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
