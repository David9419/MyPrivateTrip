"use client";

import { useEffect, useRef, useState } from "react";

// Nombre qui défile de 0 jusqu'à sa valeur quand il arrive à l'écran (1, 2, 3… 150).
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
  const [nombre, setNombre] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id = 0;
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (!entree.isIntersecting) return;
        observateur.disconnect();
        const debut = performance.now();
        const avancer = (maintenant: number) => {
          const t = Math.min((maintenant - debut) / duree, 1);
          const doux = 1 - Math.pow(1 - t, 4); // rapide au début, ralentit à la fin
          setNombre(Math.round(doux * valeur));
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
    };
  }, [valeur, duree]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefixe}
      {nombre}
      {suffixe}
    </span>
  );
}
