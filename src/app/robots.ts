import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ahtshamadil.me/sitemap.xml",
    host: "https://ahtshamadil.me",
  };
}
