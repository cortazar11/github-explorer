import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://github-explorer-mu-eight.vercel.app",
      lastModified: new Date(),
    },
  ];
}