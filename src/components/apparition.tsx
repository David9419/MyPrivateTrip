"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

// Effets d'apparition au défilement :
// « fondu » (monte en douceur), « gauche » / « droite » (arrive par le côté), « flou » (sort du flou).
export type Effet = "fondu" | "gauche" | "droite" | "flou";

export function Apparition({
  children,
  delai = 0,
  effet = "fondu",
  className = "",
  balise: Balise = "div",
}: {
  children: ReactNode;
  delai?: number; // en millisecondes
  effet?: Effet;
  className?: string;
  balise?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          el.classList.add("visible");
          observateur.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observateur.observe(el);
    return () => observateur.disconnect();
  }, []);

  return (
    <Balise
      ref={ref}
      data-effet={effet}
      className={`apparition ${className}`}
      style={{ transitionDelay: `${delai}ms` }}
    >
      {children}
    </Balise>
  );
}
