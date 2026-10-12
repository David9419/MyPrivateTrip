import type { MetadataRoute } from "next";
import { site } from "@/contenu/site";

// /robots.txt : Google et les moteurs de réponse IA (ChatGPT, Perplexity, Claude…) sont les bienvenus ;
// les robots qui aspirent le contenu sans jamais citer la source sont bloqués.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["CCBot", "Bytespider"], disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
