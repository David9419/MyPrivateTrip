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
12 premières secondes de `sources/video-3d-originale.mp4`, découpées en 288 images WebP :
- ordi : recadrage horizontal du centre, 1280×800 (`public/video/ordi`) ;
- téléphone : format vertical 720×1260 (`public/video/mobile`).
Commandes ffmpeg pour les refaire :
`ffmpeg -t 12 -i sources/video-3d-originale.mp4 -vf "fps=24,crop=720:450:0:(ih-450)/2,scale=1280:800:flags=lanczos,unsharp=5:5:0.6" -c:v libwebp -quality 74 public/video/ordi/%03d.webp`
`ffmpeg -t 12 -i sources/video-3d-originale.mp4 -vf "fps=24,scale=720:1260:flags=lanczos" -c:v libwebp -quality 72 public/video/mobile/%03d.webp`

@AGENTS.md
