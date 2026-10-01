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
Source : `sources/video-3d.mp4` (12 s, 480×832, vertical). **Demande de l'équipe : ne rien changer
à la vidéo** (couleurs, rendu, pas d'IA, pas de voile ni de zoom) : seulement la mettre en large sur
ordinateur et la rendre plus nette. Découpée en 288 images WebP (24 images/s) :
- ordi : bande horizontale du centre, 1600×1000 (`public/video/ordi`) ;
- téléphone : image entière, 720×1248 (`public/video/mobile`).
Commandes :
`ffmpeg -t 12 -i sources/video-3d.mp4 -vf "fps=24,crop=480:300:0:(ih-300)/2,deblock=filter=strong:block=8,hqdn3d=1:1:2:2,scale=1600:1000:flags=lanczos,unsharp=5:5:0.7:5:5:0,cas=0.4" -c:v libwebp -quality 82 public/video/ordi/%03d.webp`
`ffmpeg -t 12 -i sources/video-3d.mp4 -vf "fps=24,deblock=filter=strong:block=8,hqdn3d=1:1:2:2,scale=720:1248:flags=lanczos,unsharp=5:5:0.5:5:5:0,cas=0.3" -c:v libwebp -quality 82 public/video/mobile/%03d.webp`

@AGENTS.md
