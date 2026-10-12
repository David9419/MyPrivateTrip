import { site } from "@/contenu/site";

// Données structurées (Schema.org) : une fiche « lisible par les machines » qui dit à Google
// et aux IA qui nous sommes, ce que nous proposons et comment nous joindre.
export function DonneesStructurees({ donnees }: { donnees: object }) {
  return (
    <script
      type="application/ld+json"
      // Le « < » est échappé pour qu'aucun texte ne puisse fermer la balise <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees).replace(/</g, "\\u003c") }}
    />
  );
}

const idAgence = `${site.url}/#agence`;

export function schemaAgence() {
  const c = site.coordonnees;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": idAgence,
        name: site.nom,
        url: site.url,
        logo: `${site.url}/images/logo.png`,
        image: `${site.url}/opengraph-image.jpg`,
        description: site.description,
        slogan: site.citation.texte,
        email: c.email,
        telephone: c.telephone.replace(/\s/g, ""),
        sameAs: [c.instagram],
        areaServed: "Monde entier",
        knowsLanguage: ["fr"],
        knowsAbout: site.motsCles,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: c.telephone.replace(/\s/g, ""),
          email: c.email,
          availableLanguage: ["French"],
          hoursAvailable: "Mo-Su 00:00-23:59",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: site.services.surtitre,
          itemListElement: site.services.liste.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.titre,
              description: s.texte,
              url: `${site.url}/services/${s.page}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.nom,
        inLanguage: "fr-FR",
        publisher: { "@id": idAgence },
      },
    ],
  };
}

export function schemaFaq(questions: readonly { question: string; reponse: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.reponse },
    })),
  };
}

export function schemaService(nom: string, description: string, chemin: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nom,
    description,
    url: `${site.url}${chemin}`,
    image: `${site.url}${image}`,
    provider: { "@id": idAgence },
    areaServed: "Monde entier",
  };
}

export function schemaFilAriane(etapes: { nom: string; chemin: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: etapes.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.nom,
      item: `${site.url}${e.chemin}`,
    })),
  };
}
