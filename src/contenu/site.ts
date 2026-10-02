// Tous les textes du site sont ici (pas de texte en dur dans les composants).

const telephone = "+33 6 59 87 12 01";

export const site = {
  titre: "My Private Trip — Conciergerie de voyage sur mesure",
  description:
    "My Private Trip, agence de conciergerie de voyage indépendante : séjours sur mesure, villas d'exception, chef privé et séjours de fête, partout dans le monde.",
  nom: "My Private Trip",

  coordonnees: {
    email: "privatekoshertrip@gmail.com",
    telephone,
    telephoneLien: "tel:+33659871201",
    whatsapp: "https://wa.me/33659871201",
    instagram: "https://www.instagram.com/my_private_trip",
    instagramNom: "@my_private_trip",
    disponibilite: "Disponible 24h/24, 7j/7",
  },

  entete: {
    reserver: "Réserver",
    menu: "Menu",
    fermer: "Fermer",
    liens: [
      { texte: "À propos", lien: "#a-propos" },
      { texte: "Services", lien: "#offres" },
      { texte: "Destinations", lien: "#destinations" },
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
          { texte: "Réserver mon voyage", lien: "/reserver", style: "plein" },
          { texte: "Découvrir nos services", lien: "#offres", style: "contour" },
        ],
      },
    ],
  },

  aPropos: {
    surtitre: "À propos",
    titre: "Votre conciergerie",
    signature: "de voyage privée",
    intro:
      "My Private Trip est une agence de conciergerie de voyage indépendante, spécialisée dans l'organisation de séjours sur mesure pour une clientèle exigeante.",
    paragraphes: [
      "Indépendants, nous choisissons librement nos partenaires à travers le monde : villas privées, hôtels d'exception, chefs, chauffeurs et guides. Notre seul objectif : votre séjour idéal.",
      "Des vols à la villa, du chef à votre table jusqu'aux moindres réservations, nous orchestrons chaque détail. Avant, pendant et après le voyage, nous restons joignables jour et nuit.",
    ],
    bouton: "Organiser mon séjour",
    image: "/images/a-propos.webp",
    signatureImage: "Évasion sur mesure",
  },

  statistiques: [
    { valeur: 24, prefixe: "", suffixe: "/7", libelle: "Disponibles jour et nuit" },
    { valeur: 150, prefixe: "+", suffixe: "", libelle: "Voyages organisés" },
    { valeur: 100, prefixe: "+", suffixe: "", libelle: "Destinations" },
    { valeur: 100, prefixe: "", suffixe: " %", libelle: "Sur mesure" },
  ],

  services: {
    surtitre: "Nos services",
    titre: "Tout est",
    signature: "pensé pour vous",
    decouvrir: "Réserver",
    liste: [
      {
        icone: "avion",
        titre: "Voyages sur mesure",
        texte:
          "Destination, rythme, envies : nous composons un voyage qui vous ressemble, de l'arrivée au départ.",
        image: "/images/voyage-sur-mesure.webp",
        prestation: "voyage",
      },
      {
        icone: "toque",
        titre: "Chef privé",
        texte:
          "Un chef s'installe dans votre villa et cuisine pour vous, du petit-déjeuner au dîner de fête.",
        image: "/images/chef-prive.webp",
        prestation: "chef",
      },
      {
        icone: "palmier",
        titre: "Voyage + chef privé",
        texte:
          "L'expérience complète : le voyage organisé de A à Z, et un chef à votre service sur place.",
        image: "/images/facade.webp",
        prestation: "voyage-chef",
      },
      {
        icone: "etoile",
        titre: "Séjours de fête",
        texte:
          "Anniversaire, fête de famille, événement entre amis : nous créons un séjour inoubliable autour de votre célébration.",
        image: "/images/sejour.webp",
        prestation: "fete",
      },
    ],
  },

  destinations: {
    surtitre: "Destinations",
    titre: "Partout",
    signature: "dans le monde",
    texte:
      "Si la destination existe, nous l'organisons : îles, capitales, montagnes ou déserts, partout dans le monde.",
    // Deux lignes qui défilent à l'infini (la 2e en sens inverse).
    lignes: [
      [
        "Mykonos",
        "Santorin",
        "Maldives",
        "New York",
        "Jérusalem",
        "Eilat",
        "Cannes",
        "Italie",
        "Dubaï",
        "Marbella",
        "Panama",
        "Croatie",
        "Monténégro",
        "Seychelles",
        "Bora-Bora",
        "Saint-Barthélemy",
        "Ibiza",
        "Capri",
        "Côte amalfitaine",
        "Saint-Tropez",
        "Monaco",
        "Courchevel",
        "Tel-Aviv",
        "Mexique",
        "Tulum",
        "Miami",
        "Los Angeles",
        "Las Vegas",
        "Bali",
        "Thaïlande",
        "Japon",
      ],
      [
        "Île Maurice",
        "Zanzibar",
        "Polynésie",
        "Hawaï",
        "Punta Cana",
        "Cancún",
        "Costa Rica",
        "Rio de Janeiro",
        "Le Cap",
        "Marrakech",
        "Abu Dhabi",
        "Qatar",
        "Oman",
        "Pétra",
        "Égypte",
        "Istanbul",
        "Grèce",
        "Crète",
        "Sardaigne",
        "Sicile",
        "Lac de Côme",
        "Venise",
        "Florence",
        "Rome",
        "Barcelone",
        "Lisbonne",
        "Londres",
        "Paris",
        "Zermatt",
        "Laponie",
        "Islande",
        "Norvège",
        "Singapour",
        "Vietnam",
        "Sri Lanka",
      ],
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
    texte:
      "Une idée, une date, une envie ? Écrivez-nous ou appelez-nous : nous vous répondons rapidement, 7 jours sur 7.",
    reserver: "Réserver mon voyage",
    email: "E-mail",
    telephone: "Téléphone",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },

  whatsapp: {
    libelle: "Écrivez-nous sur WhatsApp",
    disponible: "Disponible 24/7",
    message: "Bonjour My Private Trip, je souhaite organiser un voyage.",
  },

  reservation: {
    titrePage: "Réservation — My Private Trip",
    surtitre: "Réservation",
    titre: "Votre voyage",
    signature: "commence ici",
    texte:
      "Remplissez ce formulaire : nous revenons vers vous rapidement avec une proposition sur mesure.",
    image: "/images/reservation.webp",
    sections: {
      vous: "Vos coordonnées",
      voyage: "Votre voyage",
      prestations: "Prestations souhaitées",
      projet: "Votre projet",
    },
    champs: {
      nom: "Prénom et nom",
      email: "E-mail",
      telephone: "Téléphone",
      destination: "Destination souhaitée",
      arrivee: "Arrivée",
      depart: "Départ",
      voyageurs: "Nombre de voyageurs",
      message: "Décrivez votre projet",
      messageAide: "Occasion, style de logement, envies particulières, budget…",
    },
    moins: "Retirer un voyageur",
    plus: "Ajouter un voyageur",
    prestations: [
      { id: "voyage", titre: "Voyage sur mesure", icone: "avion" },
      { id: "chef", titre: "Chef privé", icone: "toque" },
      { id: "voyage-chef", titre: "Voyage + chef privé", icone: "palmier" },
      { id: "fete", titre: "Séjour de fête", icone: "etoile" },
    ],
    erreurs: {
      prestation: "Choisissez au moins une prestation.",
      dates: "La date de départ doit être après la date d'arrivée.",
    },
    envoyerEmail: "Envoyer par e-mail",
    envoyerWhatsapp: "Envoyer sur WhatsApp",
    merciTitre: "Merci !",
    merciTexte:
      "Votre demande est prête : envoyez-la depuis votre messagerie ou WhatsApp. Nous vous répondons très vite.",
    nouvelle: "Faire une autre demande",
    sujet: "Demande de réservation",
  },

  pied: {
    phrase: "Plus qu'un voyage, une expérience",
    navigation: "Navigation",
    nousJoindre: "Nous joindre",
    reservation: "Réservation",
    droits: "Tous droits réservés.",
  },

  valeurs: ["Évasion", "Confort", "Excellence"],
} as const;
