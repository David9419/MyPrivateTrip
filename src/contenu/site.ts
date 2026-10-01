// Tous les textes du site sont ici (pas de texte en dur dans les composants).
// Provisoire : textes repris de la charte graphique, en attendant ceux de l'ancien site.

export const site = {
  titre: "My Private Trip — Voyages & Conciergerie sur mesure",
  description:
    "Des voyages uniques, une expérience privée, sur mesure : villas d'exception, conciergerie et chef privé.",
  nom: "My Private Trip",

  entete: {
    contact: "Nous contacter",
  },

  // Textes qui apparaissent par-dessus la vidéo, pendant qu'on descend.
  // debut / fin = moment de la vidéo (0 = début, 1 = fin) où le texte est visible.
  video: {
    chargement: "Chargement",
    descendre: "Descendez",
    etapes: [
      {
        debut: 0,
        fin: 0.2,
        type: "logo",
        lignes: ["Des voyages uniques", "Une expérience privée", "Sur mesure"],
      },
      {
        debut: 0.24,
        fin: 0.46,
        type: "titre",
        surtitre: "Imaginé pour vous",
        titre: "Chaque détail",
        signature: "pensé sur mesure",
        texte:
          "De la première esquisse à la dernière attention, votre séjour se dessine selon vos envies.",
      },
      {
        debut: 0.5,
        fin: 0.72,
        type: "titre",
        surtitre: "Luxe · Discrétion · Sur mesure",
        titre: "Des villas",
        signature: "d'exception",
        texte: "Des lieux rares, choisis pour leur caractère, leur calme et leur vue.",
      },
      {
        debut: 0.78,
        fin: 1.01,
        type: "final",
        signature: "Parce que chaque voyage est unique",
        titre: "Plus qu'un voyage, une expérience",
        boutons: [
          { texte: "Réserver mon voyage", lien: "#contact", style: "plein" },
          { texte: "Découvrir nos offres", lien: "#offres", style: "contour" },
        ],
      },
    ],
  },

  apresVideo: {
    surtitre: "Voyages & Conciergerie",
    titre: "Évasion",
    signature: "sur mesure",
    texte:
      "La suite du site (offres, destinations, conciergerie, chef privé, contact) arrive avec les textes et les images de l'ancien site.",
  },
} as const;
