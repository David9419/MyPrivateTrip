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
Source : `sources/video-3d.mp4` (12 s, 480×832, vertical). Découpée en 288 images WebP (24 images/s),
agrandies x4 par IA (Real-ESRGAN « realesr-general-x4v3 », exécuté en ONNX sans PyTorch) :
- ordi : bande horizontale du centre (16:10), 1600×1000 (`public/video/ordi`) ;
- téléphone : image entière verticale, 900×1560 (`public/video/mobile`).
Pour refaire :
1. `ffmpeg -t 12 -i sources/video-3d.mp4 -vf fps=24 brut/%03d.png`
2. télécharger `https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth`
   sous le nom `general-x4v3.pth`, puis `python3 outils/construire-modele.py` (→ `x4.onnx`)
3. `python3 outils/traiter-video.py` (pip : onnx, onnxruntime, pillow, numpy), puis copier
   `ordi/` et `mobile/` dans `public/video/`.

@AGENTS.md
