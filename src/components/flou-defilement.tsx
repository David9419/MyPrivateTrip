"use client";

import { useEffect } from "react";

// Effet flou lié au défilement, sur tous les éléments marqués data-flou :
// flous quand ils arrivent par le bas de l'écran, nets au milieu, à nouveau flous en sortant par le haut.
export function FlouDefilement() {
  useEffect(() => {
    let id = 0;
    const boucle = () => {
      const h = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-flou]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -50 || r.top > h + 50) return;
        const entree = Math.min(Math.max((h - r.top) / (h * 0.4), 0), 1);
        const sortie = Math.min(Math.max(r.bottom / (h * 0.35), 0), 1);
        const v = Math.min(entree, sortie);
        const flou = Math.round((1 - v) * 14 * 10) / 10;
        el.style.filter = flou > 0.2 ? `blur(${flou}px)` : "";
        el.style.opacity = String(0.25 + 0.75 * v);
      });
      id = requestAnimationFrame(boucle);
    };
    id = requestAnimationFrame(boucle);
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}
