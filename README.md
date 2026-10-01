# My Private Trip — Voyages & Conciergerie sur mesure

Site vitrine en Next.js, avec une vidéo 3D plein écran qui avance quand on descend dans la page.

## Lancer le site sur son ordinateur

```bash
npm install      # la première fois seulement
npm run dev      # puis ouvrir http://localhost:3000
```

## Où se trouve quoi

- `src/contenu/site.ts` : tous les textes du site.
- `src/components/accueil/video-defilement.tsx` : la vidéo au défilement.
- `public/video/ordi` et `public/video/mobile` : la vidéo découpée en images (12 s, 24 images/s).
- `public/images/logo.png` (couleur) et `logo-blanc.png` (pour fond sombre).
- `sources/` : fichiers d'origine (logo, charte graphique, vidéo).
