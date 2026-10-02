"use client";

import { useEffect, useRef } from "react";

// Texte qui apparaît mot par mot : chaque mot sort du flou et monte, l'un après l'autre.
export function TexteAnime({
  texte,
  className = "",
  delai = 0,
  balise: Balise = "span",
}: {
  texte: string;
  className?: string;
  delai?: number;
  balise?: "span" | "h1" | "h2" | "h3" | "p";
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
      { rootMargin: "0px 0px -8% 0px" },
    );
    observateur.observe(el);
    return () => observateur.disconnect();
  }, []);

  return (
    <Balise ref={ref as never} className={`texte-anime block ${className}`} aria-label={texte}>
      {texte.split(" ").map((mot, i) => (
        <span key={i} aria-hidden="true" className="mot" style={{ transitionDelay: `${delai + i * 90}ms` }}>
          {mot}
          {" "}
        </span>
      ))}
    </Balise>
  );
}
