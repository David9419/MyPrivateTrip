"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Rend le défilement plus fluide et « glissant », comme sur les sites de luxe.
export function DefilementDoux() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let id = requestAnimationFrame(function boucle(temps) {
      lenis.raf(temps);
      id = requestAnimationFrame(boucle);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return null;
}
