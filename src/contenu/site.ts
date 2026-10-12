// Tous les textes du site sont ici (pas de texte en dur dans les composants).

const telephone = "+33 6 59 87 12 01";

export const site = {
  // Adresse officielle du site (celle que Google doit retenir).
  url: "https://www.my-private-trip.com",
  titre: "My Private Trip — Conciergerie de voyage de luxe sur mesure & chef privé cacher",
  titreCourt: "My Private Trip",
  description:
    "Conciergerie de voyage de luxe indépendante : séjours sur mesure, villas d'exception, chef privé (cuisine cacher sur demande) et séjours de fête, partout dans le monde. Disponible 24h/24, 7j/7.",
  // Titre principal de la page d'accueil (lu par Google et les IA, caché à l'écran derrière le logo).
  h1: "My Private Trip — Conciergerie de voyage de luxe sur mesure et chef privé cacher",
  motsCles: [
    "conciergerie de voyage",
    "conciergerie de voyage de luxe",
    "voyage sur mesure",
    "voyage de luxe",
    "villa de luxe",
    "chef privé",
    "chef privé cacher",
    "voyage cacher",
    "séjour cacher",
    "séjour de fête",
    "location de villa avec chef",
  ],
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
    imageAlt: "Villas de luxe face à la mer",
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
      "Pour les voyageurs qui respectent la cacheroute, nous organisons aussi des séjours cacher : chef privé cacher dans votre villa, repas de Chabbat et de fêtes préparés à l'avance, et un séjour pensé pour que vous profitiez sans rien sacrifier de vos habitudes.",
    ],
    bouton: "Organiser mon séjour",
    image: "/images/a-propos.webp",
    imageAlt: "Villa de luxe avec piscine, sélectionnée par My Private Trip",
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
    decouvrir: "Découvrir",
    liste: [
      {
        icone: "avion",
        titre: "Voyages sur mesure",
        texte:
          "Destination, rythme, envies : nous composons un voyage qui vous ressemble, de l'arrivée au départ.",
        image: "/images/voyage-sur-mesure.webp",
        alt: "Voyage de luxe sur mesure organisé par My Private Trip",
        prestation: "voyage",
        page: "voyage-sur-mesure",
      },
      {
        icone: "toque",
        titre: "Chef privé",
        texte:
          "Un chef s'installe dans votre villa et cuisine pour vous, du petit-déjeuner au dîner de fête. Cuisine cacher sur demande.",
        image: "/images/chef-prive.webp",
        alt: "Chef privé préparant un dîner dans une villa",
        prestation: "chef",
        page: "chef-prive",
      },
      {
        icone: "palmier",
        titre: "Voyage + chef privé",
        texte:
          "L'expérience complète : le voyage organisé de A à Z, et un chef à votre service sur place.",
        image: "/images/voyage-chef.webp",
        alt: "Table dressée face à la mer pour un séjour avec chef privé",
        prestation: "voyage-chef",
        page: "voyage-et-chef-prive",
      },
      {
        icone: "etoile",
        titre: "Séjours de fête",
        texte:
          "Anniversaire, fête de famille, événement entre amis : nous créons un séjour inoubliable autour de votre célébration.",
        image: "/images/sejour-fete.webp",
        alt: "Séjour de fête dans une villa de luxe",
        prestation: "fete",
        page: "sejours-de-fete",
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
    image: "/images/citation-seychelles.webp",
    imageAlt: "Plage paradisiaque aux Seychelles",
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
    metaTitre: "Réserver votre voyage sur mesure",
    metaDescription:
      "Demandez votre voyage de luxe sur mesure : destination, dates, voyageurs, villa, chef privé (cuisine cacher sur demande) ou séjour de fête. Réponse rapide, 7j/7.",
    surtitre: "Réservation",
    titre: "Votre voyage",
    signature: "commence ici",
    texte:
      "Remplissez ce formulaire : nous revenons vers vous rapidement avec une proposition sur mesure.",
    image: "/images/reservation-plage.webp",
    imageAlt: "Plage de sable blanc et mer turquoise",
    sections: {
      vous: "Vos coordonnées",
      voyage: "Votre voyage",
      prestations: "Prestation souhaitée",
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
      prestation: "Choisissez une prestation.",
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

  // Questions fréquentes (accueil) : réponses complètes, faciles à citer par Google et les IA.
  faq: {
    surtitre: "Questions fréquentes",
    titre: "Tout savoir",
    signature: "avant de partir",
    questions: [
      {
        question: "Qu'est-ce que My Private Trip ?",
        reponse:
          "My Private Trip est une agence de conciergerie de voyage indépendante, spécialisée dans les séjours de luxe sur mesure pour une clientèle exigeante. Nous organisons le voyage de A à Z : recherche et réservation de villas d'exception ou d'hôtels haut de gamme, vols, transferts, chef privé, activités, restaurants et services sur place. Indépendants, nous choisissons librement nos partenaires dans le monde entier, avec un seul objectif : un séjour qui vous ressemble. Chaque voyage est unique et construit à partir de vos envies, de vos dates, de votre budget et du nombre de voyageurs. Avant, pendant et après le séjour, une personne dédiée reste joignable 24h/24 et 7j/7, par téléphone ou sur WhatsApp, pour régler le moindre détail. Notre promesse tient en trois mots : luxe, discrétion et sur mesure.",
      },
      {
        question: "Organisez-vous des séjours et des repas cacher ?",
        reponse:
          "Oui. My Private Trip organise des voyages pour les familles et les groupes qui respectent la cacheroute. Nous pouvons installer un chef privé cacher dans votre villa : il prépare les repas du quotidien comme les dîners de fête, s'occupe des courses et adapte les menus à vos habitudes. Les repas de Chabbat et des fêtes juives sont prévus à l'avance, pour que vous n'ayez rien à gérer sur place. Le niveau de cacheroute souhaité est défini avec vous dès le premier échange, et nous en tenons compte dans le choix de la destination, du logement et des prestataires. Que ce soit pour un séjour en famille, une fête ou des vacances entre amis, vous profitez d'un voyage de luxe sans renoncer à vos exigences.",
      },
      {
        question: "Dans quelles destinations organisez-vous des voyages ?",
        reponse:
          "Partout dans le monde. Nous organisons régulièrement des séjours en Méditerranée (Mykonos, Santorin, Capri, la côte amalfitaine, Saint-Tropez, Marbella, Ibiza, la Croatie, le Monténégro), en Israël (Jérusalem, Tel-Aviv, Eilat), dans les îles (Maldives, Seychelles, île Maurice, Bora-Bora, Saint-Barthélemy), aux États-Unis (New York, Miami, Los Angeles), à Dubaï et à la montagne (Courchevel, Zermatt). Si la destination existe, nous l'organisons : il suffit de nous dire où vous rêvez d'aller, ou de nous laisser vous proposer le lieu idéal selon la saison, la durée du séjour et vos envies.",
      },
      {
        question: "Comment se déroule l'organisation d'un séjour ?",
        reponse:
          "Tout commence par un échange simple, par téléphone, sur WhatsApp ou via le formulaire de réservation, pour comprendre vos envies, vos dates, le nombre de voyageurs et votre style. Nous vous proposons ensuite un programme sur mesure : logement, services, chef privé, activités et transferts. Une fois le programme validé, nous nous chargeons de toutes les réservations et de la logistique, pour que tout soit prêt avant votre arrivée. Pendant le séjour, nous restons joignables à tout moment pour ajuster ce qui doit l'être.",
      },
      {
        question: "Combien coûte un séjour avec My Private Trip ?",
        reponse:
          "Chaque séjour étant construit sur mesure, il n'y a pas de prix catalogue : le budget dépend de la destination, de la saison, de la durée, du nombre de voyageurs, du type de logement et des services choisis (chef privé, transferts, activités, événement). Après un premier échange, nous vous envoyons une proposition détaillée et transparente, adaptée au budget que vous nous indiquez.",
      },
      {
        question: "Êtes-vous joignables pendant le voyage ?",
        reponse:
          "Oui, 24h/24 et 7j/7. Avant le départ comme pendant le séjour, vous pouvez nous joindre par téléphone au +33 6 59 87 12 01 ou sur WhatsApp. Un imprévu, une réservation de dernière minute, un changement de programme : nous nous en occupons immédiatement.",
      },
    ],
  },

  // Une page détaillée par service (adresse : /services/<page>).
  pagesServices: {
    "voyage-sur-mesure": {
      metaTitre: "Voyage de luxe sur mesure — conciergerie privée",
      metaDescription:
        "Voyage de luxe sur mesure : villas d'exception, vols, transferts, activités et conciergerie 24h/24. Séjours cacher sur demande. Devis personnalisé.",
      surtitre: "Voyages sur mesure",
      titre: "Un voyage",
      signature: "qui vous ressemble",
      intro:
        "My Private Trip conçoit des voyages de luxe entièrement sur mesure, pour les couples, les familles et les groupes d'amis qui veulent un séjour d'exception sans s'occuper de l'organisation. Nous partons de vos envies, de vos dates, de votre budget et du nombre de voyageurs pour composer un programme unique : choix de la destination selon la saison, sélection d'une villa privée ou d'un hôtel haut de gamme, vols, transferts, location de voiture, activités, restaurants et réservations sur place. Agence indépendante, nous choisissons librement nos partenaires pour leur qualité et leur fiabilité. Pour les voyageurs qui respectent la cacheroute, nous intégrons un chef privé cacher et l'organisation des repas de Chabbat. Avant, pendant et après le voyage, une personne dédiée reste joignable 24h/24 et 7j/7, pour que vous n'ayez plus qu'à profiter.",
      inclusTitre: "Ce que nous organisons pour vous",
      inclus: [
        "Conseil sur la destination et la meilleure période",
        "Sélection et réservation de villas privées ou d'hôtels d'exception",
        "Vols, transferts, chauffeurs et location de véhicules",
        "Activités, excursions, restaurants et sorties",
        "Chef privé à la villa, cuisine cacher sur demande",
        "Assistance 24h/24 et 7j/7 pendant tout le séjour",
      ],
      image: "/images/voyage-sur-mesure.webp",
      imageAlt: "Voyage de luxe sur mesure organisé par My Private Trip",
      faq: [
        {
          question: "Combien de temps à l'avance faut-il réserver ?",
          reponse:
            "Le plus tôt est le mieux, surtout en haute saison où les plus belles villas partent vite. Nous organisons aussi des séjours de dernière minute, selon les disponibilités.",
        },
        {
          question: "Pouvez-vous seulement réserver une partie du voyage ?",
          reponse:
            "Oui. Nous pouvons organiser le voyage complet ou seulement une partie : la villa, le chef, les transferts ou les activités, selon ce dont vous avez besoin.",
        },
      ],
    },
    "chef-prive": {
      metaTitre: "Chef privé à domicile et en villa — cuisine cacher sur demande",
      metaDescription:
        "Un chef privé dans votre villa de vacances : petits-déjeuners, dîners de fête, menus sur mesure, cuisine cacher et repas de Chabbat sur demande.",
      surtitre: "Chef privé",
      titre: "Un chef",
      signature: "rien que pour vous",
      intro:
        "Avec le service de chef privé de My Private Trip, un chef s'installe dans votre villa et cuisine pour vous pendant le séjour : petit-déjeuner, déjeuner au bord de la piscine, dîner en famille ou grande soirée de fête. Les menus sont composés avec vous, selon vos goûts, vos habitudes, les allergies et les envies de chacun, enfants compris. Le chef s'occupe des courses avec des produits de qualité, prépare, sert et laisse la cuisine propre : vous n'avez qu'à passer à table. Pour les familles qui respectent la cacheroute, nous proposons un chef privé cacher : le niveau de cacheroute est défini ensemble dès le départ, et les repas de Chabbat et des fêtes sont préparés à l'avance. Le service peut être réservé seul, pour une villa que vous avez déjà, ou avec un voyage complet organisé par nos soins.",
      inclusTitre: "Le service comprend",
      inclus: [
        "Menus personnalisés, construits avec vous",
        "Courses et approvisionnement en produits de qualité",
        "Cuisine cacher sur demande, repas de Chabbat et de fêtes",
        "Petits-déjeuners, déjeuners, dîners et soirées de fête",
        "Service à table et rangement de la cuisine",
        "Adaptation aux allergies, régimes et enfants",
      ],
      image: "/images/chef-prive.webp",
      imageAlt: "Chef privé préparant un dîner dans une villa",
      faq: [
        {
          question: "Peut-on réserver un chef sans réserver le voyage ?",
          reponse:
            "Oui. Le chef privé peut venir dans la villa ou le logement que vous avez réservé vous-même, en France comme à l'étranger, selon les disponibilités.",
        },
        {
          question: "Le chef peut-il cuisiner cacher ?",
          reponse:
            "Oui, sur demande. Nous définissons avec vous le niveau de cacheroute souhaité et organisons l'approvisionnement, la préparation des repas et ceux de Chabbat en conséquence.",
        },
      ],
    },
    "voyage-et-chef-prive": {
      metaTitre: "Voyage de luxe avec chef privé — séjour clé en main",
      metaDescription:
        "Le voyage organisé de A à Z et un chef privé à votre service dans la villa. Séjour de luxe clé en main, cuisine cacher sur demande.",
      surtitre: "Voyage + chef privé",
      titre: "L'expérience",
      signature: "complète",
      intro:
        "La formule Voyage + chef privé réunit nos deux savoir-faire : nous organisons tout le voyage, de la destination à la villa en passant par les vols, les transferts et les activités, et un chef privé vous attend sur place pour cuisiner pendant tout le séjour. C'est la formule idéale pour les familles nombreuses, les groupes d'amis et les voyageurs qui veulent profiter pleinement, sans courses, sans cuisine et sans contrainte. Les menus sont préparés avec vous avant le départ ; pour les voyageurs qui respectent la cacheroute, le chef cuisine cacher et les repas de Chabbat et des fêtes sont prévus à l'avance. Une seule équipe s'occupe de tout, et reste joignable 24h/24 et 7j/7 pendant le séjour.",
      inclusTitre: "Tout est compris",
      inclus: [
        "Choix de la destination et de la villa",
        "Vols, transferts et logistique complète",
        "Chef privé sur place pendant le séjour",
        "Menus sur mesure, cuisine cacher sur demande",
        "Activités, sorties et réservations",
        "Un interlocuteur unique, joignable 24h/24",
      ],
      image: "/images/voyage-chef.webp",
      imageAlt: "Table dressée face à la mer pour un séjour avec chef privé",
      faq: [
        {
          question: "Pour combien de personnes ?",
          reponse:
            "Du couple au grand groupe familial : nous choisissons la villa et organisons le service du chef en fonction du nombre de voyageurs.",
        },
        {
          question: "Le chef est-il présent tous les jours ?",
          reponse:
            "C'est vous qui décidez : tous les repas, seulement les dîners, ou quelques soirées choisies. Nous adaptons la formule à votre rythme.",
        },
      ],
    },
    "sejours-de-fete": {
      metaTitre: "Séjour de fête, anniversaire et événement en villa de luxe",
      metaDescription:
        "Anniversaire, fête de famille, bar-mitsva, événement entre amis : un séjour de fête sur mesure en villa de luxe, chef privé et organisation complète.",
      surtitre: "Séjours de fête",
      titre: "Votre fête,",
      signature: "un souvenir inoubliable",
      intro:
        "My Private Trip organise des séjours autour de vos célébrations : anniversaire, fête de famille, bar-mitsva ou bat-mitsva, demande en mariage, enterrement de vie de jeune fille ou de garçon, ou simplement des retrouvailles entre amis. Nous trouvons le lieu idéal, souvent une grande villa privée, et nous préparons tout : hébergement de tous les invités, transferts, chef privé et dîner de fête, décoration, animations et activités. Pour les familles qui respectent la cacheroute, la cuisine peut être entièrement cacher et les repas de Chabbat sont prévus à l'avance. Vous profitez de chaque moment avec vos proches, pendant que nous nous occupons de la logistique, et nous restons joignables 24h/24 et 7j/7 avant et pendant l'événement.",
      inclusTitre: "Nous préparons",
      inclus: [
        "Recherche du lieu : villa privée ou hôtel d'exception",
        "Hébergement et transferts de tous les invités",
        "Chef privé et dîner de fête, cuisine cacher sur demande",
        "Décoration, animations et activités",
        "Coordination complète avant et pendant l'événement",
        "Assistance 24h/24 et 7j/7",
      ],
      image: "/images/sejour-fete.webp",
      imageAlt: "Séjour de fête dans une villa de luxe",
      faq: [
        {
          question: "Organisez-vous des bar-mitsva à l'étranger ?",
          reponse:
            "Oui. Nous organisons le séjour et la fête autour de la bar-mitsva ou de la bat-mitsva : lieu, hébergement des invités, repas cacher et Chabbat.",
        },
        {
          question: "Pour combien d'invités ?",
          reponse:
            "Des petits groupes aux grandes familles : nous adaptons le lieu, l'hébergement et le service au nombre d'invités.",
        },
      ],
    },
  },
  pageService: {
    reserver: "Réserver ce service",
    autres: "Nos autres services",
    questions: "Questions fréquentes",
    accueil: "Accueil",
    services: "Services",
  },

  // Pages légales.
  legal: {
    // À compléter avec les informations officielles de l'entreprise (laisser vide = non affiché).
    entreprise: {
      raisonSociale: "",
      formeJuridique: "",
      siret: "",
      adresse: "",
      directeurPublication: "",
      immatriculationAtoutFrance: "",
    },
    hebergeur: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com",
    mentions: {
      metaTitre: "Mentions légales",
      surtitre: "Informations",
      titre: "Mentions",
      signature: "légales",
      editeurTitre: "Éditeur du site",
      libelles: {
        nom: "Nom commercial",
        raisonSociale: "Raison sociale",
        formeJuridique: "Forme juridique",
        siret: "SIRET",
        adresse: "Adresse",
        directeurPublication: "Directeur de la publication",
        immatriculationAtoutFrance: "Immatriculation Atout France",
        email: "E-mail",
        telephone: "Téléphone",
      },
      hebergeurTitre: "Hébergement",
      proprieteTitre: "Propriété intellectuelle",
      propriete:
        "L'ensemble des contenus de ce site (textes, logo, photos, vidéos, mise en page) est la propriété de My Private Trip ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.",
      donneesTitre: "Données personnelles",
      donnees: "Pour savoir comment nous utilisons vos informations, consultez notre politique de confidentialité.",
    },
    confidentialite: {
      metaTitre: "Politique de confidentialité",
      surtitre: "Vos données",
      titre: "Politique de",
      signature: "confidentialité",
      sections: [
        {
          titre: "Quelles informations nous recevons",
          texte:
            "Lorsque vous remplissez le formulaire de réservation, vos informations (nom, e-mail, téléphone, destination, dates, nombre de voyageurs, prestation et message) ne sont pas enregistrées sur ce site : elles servent uniquement à préparer un message que vous envoyez vous-même, depuis votre messagerie e-mail ou WhatsApp. Nous recevons aussi les informations que vous nous transmettez directement par e-mail, téléphone, WhatsApp ou Instagram.",
        },
        {
          titre: "Pourquoi nous les utilisons",
          texte:
            "Ces informations servent uniquement à répondre à votre demande, à préparer une proposition de voyage et à organiser votre séjour avec nos partenaires (logements, transports, chefs, prestataires). Elles ne sont jamais vendues ni utilisées à des fins publicitaires.",
        },
        {
          titre: "Combien de temps nous les gardons",
          texte:
            "Nous conservons vos échanges le temps nécessaire au traitement de votre demande et à l'organisation du voyage, puis pendant la durée imposée par nos obligations légales et comptables.",
        },
        {
          titre: "Cookies et mesure d'audience",
          texte:
            "Ce site n'utilise pas de cookies publicitaires ni de suivi. Seule la position que vous choisissez pour le bouton WhatsApp est mémorisée dans votre navigateur, pour votre confort.",
        },
        {
          titre: "Vos droits",
          texte:
            "Conformément au Règlement général sur la protection des données (RGPD), vous pouvez demander à consulter, corriger ou supprimer vos informations, ou vous opposer à leur utilisation, en nous écrivant à l'adresse e-mail indiquée ci-dessous. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).",
        },
      ],
      contact: "Pour toute question : ",
    },
  },

  pied: {
    phrase: "Plus qu'un voyage, une expérience",
    navigation: "Navigation",
    nousJoindre: "Nous joindre",
    reservation: "Réservation",
    droits: "Tous droits réservés.",
    services: "Services",
    mentions: "Mentions légales",
    confidentialite: "Confidentialité",
  },

  valeurs: ["Évasion", "Confort", "Excellence"],
} as const;
