// Tous les textes du site sont ici (pas de texte en dur dans les composants).
// Provisoire : textes écrits d'après la charte graphique, en attendant ceux de l'ancien site.

export const site = {
  titre: "My Private Trip — Voyages & Conciergerie sur mesure",
  description:
    "Des voyages uniques, une expérience privée, sur mesure : villas d'exception, conciergerie et chef privé.",
  nom: "My Private Trip",

  // À COMPLÉTER : coordonnées réelles (en attendant celles de l'ancien site).
  coordonnees: {
    email: "contact@exemple.fr" as string,
    telephone: "" as string,
    instagram: "" as string,
    zone: "France & Méditerranée",
  },

  entete: {
    contact: "Nous contacter",
    menu: "Menu",
    fermer: "Fermer",
    liens: [
      { texte: "Nos services", lien: "#offres" },
      { texte: "Notre approche", lien: "#approche" },
      { texte: "Contact", lien: "#contact" },
    ],
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

  manifeste: {
    surtitre: "My Private Trip",
    titre: "Plus qu'un voyage,",
    signature: "une expérience",
    texte:
      "Nous imaginons des séjours privés, pensés dans les moindres détails : une villa d'exception, une conciergerie attentive, un chef à votre table. Vous n'avez plus qu'à profiter.",
    valeurs: ["Évasion", "Confort", "Excellence"],
  },

  services: {
    surtitre: "Nos services",
    titre: "Tout est",
    signature: "pensé pour vous",
    decouvrir: "Nous en parler",
    liste: [
      {
        icone: "avion",
        titre: "Voyages sur mesure",
        texte:
          "Destination, rythme, envies : nous composons un voyage qui vous ressemble, de l'arrivée au départ.",
        image: "/images/villa-exterieur.webp",
      },
      {
        icone: "palmier",
        titre: "Villas d'exception",
        texte:
          "Des maisons rares, choisies pour leur architecture, leur calme et leur vue, prêtes à vous accueillir.",
        image: "/images/facade.webp",
      },
      {
        icone: "cle",
        titre: "Conciergerie privée",
        texte:
          "Transferts, réservations, activités, petites attentions : une équipe disponible pour chaque demande.",
        image: "/images/sejour.webp",
      },
      {
        icone: "toque",
        titre: "Chef privé",
        texte:
          "Un chef s'installe dans votre villa et cuisine pour vous, du petit-déjeuner au dîner de fête.",
        image: "/images/table.webp",
      },
    ],
  },

  approche: {
    surtitre: "Notre approche",
    titre: "Votre voyage",
    signature: "en quatre temps",
    etapes: [
      {
        titre: "Vous nous parlez de vos envies",
        texte: "Un échange simple pour comprendre vos attentes, vos dates et votre style.",
      },
      {
        titre: "Nous composons votre séjour",
        texte: "Villa, services, expériences : nous vous proposons un programme sur mesure.",
      },
      {
        titre: "Nous préparons tout",
        texte: "Réservations, logistique, chef, conciergerie : chaque détail est réglé avant votre arrivée.",
      },
      {
        titre: "Vous profitez, l'esprit léger",
        texte: "Sur place, nous restons joignables à tout moment pour que tout soit parfait.",
      },
    ],
  },

  citation: {
    texte: "Parce que chaque voyage est unique",
    auteur: "Luxe · Discrétion · Sur mesure",
    image: "/images/salon.webp",
  },

  contact: {
    surtitre: "Contact",
    titre: "Parlons de",
    signature: "votre prochain voyage",
    texte: "Racontez-nous vos envies : nous revenons vers vous rapidement avec une proposition sur mesure.",
    champs: {
      nom: "Prénom et nom",
      email: "E-mail",
      telephone: "Téléphone",
      destination: "Destination ou projet",
      dates: "Dates souhaitées",
      message: "Votre message",
    },
    envoyer: "Envoyer ma demande",
    merci: "Merci ! Votre messagerie s'ouvre pour envoyer la demande.",
    sujet: "Demande de voyage sur mesure",
  },

  pied: {
    phrase: "Plus qu'un voyage, une expérience",
    navigation: "Navigation",
    nousJoindre: "Nous joindre",
    droits: "Tous droits réservés.",
  },
} as const;
