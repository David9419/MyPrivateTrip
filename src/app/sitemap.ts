import type { MetadataRoute } from "next";
import { site } from "@/contenu/site";

// /sitemap.xml : la liste de toutes les pages du site, pour Google.
export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date();
  return [
    { url: site.url, lastModified: maj, changeFrequency: "monthly", priority: 1 },
    ...Object.keys(site.pagesServices).map((page) => ({
      url: `${site.url}/services/${page}`,
      lastModified: maj,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${site.url}/reserver`, lastModified: maj, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/mentions-legales`, lastModified: maj, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/confidentialite`, lastModified: maj, changeFrequency: "yearly", priority: 0.2 },
  ];
}
