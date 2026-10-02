"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { IconeWhatsapp } from "@/components/icones";
import { site } from "@/contenu/site";

type Coin = "bas-droite" | "bas-gauche" | "haut-droite" | "haut-gauche";
const CLE = "mpt-coin-whatsapp";
const MARGE = 20;

// Bouton WhatsApp flottant. On peut le faire glisser : il se range dans le coin le plus proche
// (bas droite, bas gauche, haut droite, haut gauche) et s'en souvient.
export function BoutonWhatsapp() {
  const [coin, setCoin] = useState<Coin>("bas-droite");
  const [glisse, setGlisse] = useState<{ x: number; y: number } | null>(null);
  const depart = useRef<{ x: number; y: number; dx: number; dy: number; bouge: boolean } | null>(null);
  const boutonRef = useRef<HTMLAnchorElement>(null);
  const aGlisse = useRef(false);

  useEffect(() => {
    try {
      const enregistre = localStorage.getItem(CLE) as Coin | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture du choix enregistré au chargement
      if (enregistre) setCoin(enregistre);
    } catch {}
  }, []);

  const lien = `${site.coordonnees.whatsapp}?text=${encodeURIComponent(site.whatsapp.message)}`;
  const enHaut = coin.startsWith("haut");
  const aGauche = coin.endsWith("gauche");

  const appui = (e: PointerEvent<HTMLAnchorElement>) => {
    const rect = boutonRef.current!.getBoundingClientRect();
    depart.current = { x: e.clientX, y: e.clientY, dx: e.clientX - rect.left, dy: e.clientY - rect.top, bouge: false };
    boutonRef.current!.setPointerCapture(e.pointerId);
  };

  const deplacement = (e: PointerEvent<HTMLAnchorElement>) => {
    const d = depart.current;
    if (!d) return;
    if (!d.bouge && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 8) return;
    d.bouge = true;
    setGlisse({ x: e.clientX - d.dx, y: e.clientY - d.dy });
  };

  const relache = (e: PointerEvent<HTMLAnchorElement>) => {
    const d = depart.current;
    depart.current = null;
    if (!d?.bouge) return;
    aGlisse.current = true;
    const nouveau: Coin = `${e.clientY < window.innerHeight / 2 ? "haut" : "bas"}-${
      e.clientX < window.innerWidth / 2 ? "gauche" : "droite"
    }`;
    setCoin(nouveau);
    setGlisse(null);
    try {
      localStorage.setItem(CLE, nouveau);
    } catch {}
  };

  const position = glisse
    ? { left: glisse.x, top: glisse.y, transition: "none" }
    : {
        [aGauche ? "left" : "right"]: MARGE,
        [enHaut ? "top" : "bottom"]: enHaut ? 96 : MARGE,
      };

  return (
    <a
      ref={boutonRef}
      href={lien}
      target="_blank"
      rel="noreferrer"
      aria-label={site.whatsapp.libelle}
      onPointerDown={appui}
      onPointerMove={deplacement}
      onPointerUp={relache}
      onClick={(e) => {
        // Après un glisser, on ne veut pas ouvrir WhatsApp.
        if (aGlisse.current) {
          e.preventDefault();
          aGlisse.current = false;
        }
      }}
      onDragStart={(e) => e.preventDefault()}
      className="group fixed z-40 flex touch-none items-center gap-3 select-none"
      style={{ ...position, flexDirection: aGauche ? "row-reverse" : "row" }}
    >
      {/* Étiquette « Disponible 24/7 » */}
      <span className="pointer-events-none hidden rounded-full bg-white px-4 py-2 text-xs font-medium whitespace-nowrap text-nuit shadow-lg transition-all duration-500 group-hover:opacity-100 sm:block sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0">
        <span className="me-2 inline-block size-2 rounded-full bg-[#25D366]" />
        {site.whatsapp.disponible}
      </span>
      <span className="relative flex size-14 cursor-grab items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,.6)] transition-transform duration-300 active:cursor-grabbing group-hover:scale-110 sm:size-16">
        <span className="anim-halo absolute inset-0 rounded-full bg-[#25D366]" />
        <IconeWhatsapp className="relative size-7 sm:size-8" />
      </span>
    </a>
  );
}
