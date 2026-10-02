// La vidéo 3D (12 s) découpée en images, à 24 images par seconde.
// Ordi : vidéo horizontale 1920×1080 d'origine. Téléphone : vidéo verticale (720×1248).
// Les images sont dans public/video/ordi (format large) et public/video/mobile (format téléphone).

export const NOMBRE_IMAGES = 288;

export type FormatVideo = "ordi" | "mobile";

export const DIMENSIONS: Record<FormatVideo, { largeur: number; hauteur: number }> = {
  ordi: { largeur: 1920, hauteur: 1080 },
  mobile: { largeur: 720, hauteur: 1248 },
};

export function cheminImage(format: FormatVideo, index: number) {
  return `/video/${format}/${String(index + 1).padStart(3, "0")}.webp`;
}

// Ordre de chargement : d'abord une image sur 16, puis 1 sur 8, 1 sur 4…
// Ainsi la vidéo est utilisable très vite, et devient de plus en plus fluide.
export function ordreDeChargement(total: number) {
  const ordre: number[] = [];
  const vus = new Set<number>();
  for (let pas = 16; pas >= 1; pas /= 2) {
    for (let i = 0; i < total; i += pas) {
      if (!vus.has(i)) {
        vus.add(i);
        ordre.push(i);
      }
    }
  }
  if (!vus.has(total - 1)) ordre.push(total - 1);
  return ordre;
}
