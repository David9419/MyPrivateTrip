# My Private Trip — Guide du projet pour Claude

Site vitrine d'une agence de voyages & conciergerie de luxe (villas, chef privé, sur mesure).
Refonte de l'ancien site Lovable : https://my-private-trip.lovable.app

L'équipe ne sait pas coder : tout expliquer simplement, en français, une fonctionnalité à la
fois, avec des instructions de test pas à pas.

## Charte graphique (sources/charte-graphique.jpg)
- Couleurs (dans `src/app/globals.css`) : `ocean` #07527A, `azur` #39B8D6, `ciel` #8DD8E8,
  `sable` #C9A15B, `nuit` #102D42, `ivoire` #FAF9F5.
- Polices : Playfair Display (`font-titre`), Montserrat (`font-texte`), Allura (`font-signature`).
- Logo : ne jamais le déformer ni changer ses couleurs.

## Conventions
- Aucun texte en dur dans les composants : tout est dans `src/contenu/site.ts`.
- Noms de fichiers, fonctions et variables en français.
- Avant chaque envoi : `npx eslint src`, `npx tsc --noEmit`, `npm run build`.

## Vidéo d'accueil
**Demande de l'équipe : ne rien changer à la vidéo** (couleurs, rendu, pas d'IA, pas de voile ni de zoom).
Source : `sources/video-villa-coucher-soleil.mp4` (848×400, 10 s). Découpée en 246 images WebP (24 images/s) :
- ordi : `ffmpeg -i sources/video-villa-coucher-soleil.mp4 -vf "fps=24,deblock=filter=weak:block=8,hqdn3d=1:1:2:2,scale=1920:906:flags=lanczos,unsharp=5:5:0.6:5:5:0,cas=0.35" -c:v libwebp -quality 82 public/video/ordi/%03d.webp`
- téléphone : même chose avec `crop=240:400:(iw-240)/2:0` et `scale=720:1200` → `public/video/mobile/`.
Après un changement de vidéo : mettre à jour `NOMBRE_IMAGES` et `DIMENSIONS` dans `src/lib/video.ts`.
Les animations restent actives même si l'ordinateur a « Réduire les animations » (demande de l'équipe).

## Pages
- `/` (accueil, liens par ancres) : Vidéo → À propos + chiffres animés (`#a-propos`) → Services
  (`#offres`) → Destinations (`#destinations`, bandeau qui défile) → Approche → Citation → Contact
  (`#contact`). Composants dans `src/components/accueil/`.
- `/reserver` : bandeau photo + formulaire (`src/components/reservation/`). `?prestation=chef`
  pré-coche une prestation. Envoi sans serveur : e-mail (mailto) ou WhatsApp (wa.me) pré-remplis.
- Sur toutes les pages (`layout.tsx`) : `EnTete`, `PiedDePage`, `BoutonWhatsapp` (déplaçable dans
  les 4 coins, coin mémorisé dans le navigateur).
- Effets : `Apparition` avec `effet` = fondu | gauche | droite | flou ; `Compteur` (0 → valeur) ;
  la vidéo devient floue à la fin. Coordonnées réelles dans `site.coordonnees`.

@AGENTS.md
