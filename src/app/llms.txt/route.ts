import { site } from "@/contenu/site";

// /llms.txt : un résumé du site en texte simple, pour les assistants IA (ChatGPT, Claude, Perplexity…).
// Il est construit à partir des textes du site : rien à mettre à jour à la main.
export const dynamic = "force-static";

export function GET() {
  const c = site.coordonnees;
  const lignes = [
    `# ${site.nom}`,
    "",
    `> ${site.description}`,
    "",
    site.aPropos.intro,
    "",
    ...site.aPropos.paragraphes,
    "",
    "## Services",
    "",
    ...site.services.liste.map(
      (s) => `- [${s.titre}](${site.url}/services/${s.page}) : ${site.pagesServices[s.page].metaDescription}`,
    ),
    "",
    "## Questions fréquentes",
    "",
    ...site.faq.questions.flatMap((q) => [`### ${q.question}`, "", q.reponse, ""]),
    "## Destinations",
    "",
    [...site.destinations.lignes[0], ...site.destinations.lignes[1]].join(", "),
    "",
    "## Contact",
    "",
    `- E-mail : ${c.email}`,
    `- Téléphone et WhatsApp : ${c.telephone} (${c.disponibilite})`,
    `- Instagram : ${c.instagram}`,
    `- Réservation : ${site.url}/reserver`,
    "",
  ];
  return new Response(lignes.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
