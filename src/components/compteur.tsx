"use client";

import { useLayoutEffect, useRef } from "react";

// Nombre qui défile de 0 jusqu'à sa valeur quand il arrive à l'écran (1, 2, 3… 150).
// Le vrai chiffre est écrit dans la page envoyée par le serveur (lu par Google et les IA) ;
// dans le navigateur, on le remet à 0 avant l'affichage, puis on l'anime.
export function Compteur({
  valeur,
  prefixe = "",
  suffixe = "",
  duree = 2200,
}: {
  valeur: number;
  prefixe?: string;
  suffixe?: string;
  duree?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const afficher = (n: number) => {
      el.textContent = `${prefixe}${n}${suffixe}`;
    };
    afficher(0);
    let id = 0;
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (!entree.isIntersecting) return;
        observateur.disconnect();
        const debut = performance.now();
        const avancer = (maintenant: number) => {
          const t = Math.min((maintenant - debut) / duree, 1);
          const doux = 1 - Math.pow(1 - t, 4); // rapide au début, ralentit à la fin
          afficher(Math.round(doux * valeur));
          if (t < 1) id = requestAnimationFrame(avancer);
        };
        id = requestAnimationFrame(avancer);
      },
      { threshold: 0.6 },
    );
    observateur.observe(el);
    return () => {
      observateur.disconnect();
      cancelAnimationFrame(id);
      afficher(valeur);
    };
  }, [valeur, prefixe, suffixe, duree]);

  return (
    <span ref={ref} className="tabular-nums">
      {`${prefixe}${valeur}${suffixe}`}
    </span>
  );
}
