"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

// Fait apparaître son contenu en douceur (fondu + montée) quand il arrive à l'écran.
export function Apparition({
  children,
  delai = 0,
  className = "",
  balise: Balise = "div",
}: {
  children: ReactNode;
  delai?: number; // en millisecondes
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
    <Balise ref={ref} className={`apparition ${className}`} style={{ transitionDelay: `${delai}ms` }}>
      {children}
    </Balise>
  );
}
