"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/contenu/site";

const e = site.entete;

// Couleur du texte : ivoire sur la vidéo / la photo, bleu nuit ailleurs
// (variable --sombre réglée par la vidéo et par le bandeau de la page réservation).
const couleur = {
  color: "color-mix(in srgb, var(--color-ivoire) calc(var(--sombre, 0) * 100%), var(--color-nuit))",
};

// En-tête fixe : logo, liens, bouton Réserver, et menu plein écran sur téléphone.
export function EnTete() {
  const [ouvert, setOuvert] = useState(false);
  const chemin = usePathname();
  // Sur les autres pages, les liens ramènent à la bonne section de l'accueil.
  const lien = (ancre: string) => (chemin === "/" ? ancre : `/${ancre}`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Fond ivoire, seulement quand on n'est plus sur la vidéo */}
        <div
          className="absolute inset-0 border-b border-nuit/5 bg-ivoire/95 backdrop-blur-md transition-opacity duration-500"
          style={{ opacity: "calc(1 - var(--sombre, 0))" }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-5 py-3 sm:px-8 sm:py-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="relative block h-14 w-[128px] sm:h-16 sm:w-[146px]" aria-label={site.nom}>
            <Image
              src="/images/logo.png"
              alt={site.nom}
              fill
              sizes="146px"
              className="object-contain transition-opacity duration-500"
              style={{ opacity: "calc(1 - var(--sombre, 0))" }}
              priority
            />
            <Image
              src="/images/logo-blanc.png"
              alt=""
              fill
              sizes="146px"
              className="object-contain transition-opacity duration-500"
              style={{ opacity: "var(--sombre, 0)" }}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" style={couleur}>
            {e.liens.map((l) => (
              <a
                key={l.lien}
                href={lien(l.lien)}
                className="group relative text-xs font-medium tracking-[0.2em] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,calc(var(--sombre,0)*.45))]"
              >
                {l.texte}
                <span className="absolute -bottom-1.5 start-0 h-px w-0 bg-sable transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <Link
            href="/reserver"
            className="bouton-reflet hidden justify-self-end rounded-full bg-sable px-7 py-3 text-xs font-semibold tracking-[0.15em] text-ivoire uppercase transition-colors duration-500 hover:bg-ocean lg:block"
          >
            {e.reserver}
          </Link>

          <div className="flex items-center gap-3 justify-self-end lg:hidden">
            <Link
              href="/reserver"
              className="rounded-full bg-sable px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-ivoire uppercase"
            >
              {e.reserver}
            </Link>
            <button
              type="button"
              onClick={() => setOuvert(true)}
              className="flex flex-col items-end gap-1.5 p-2"
              style={couleur}
              aria-label={e.menu}
            >
              <span className="h-px w-7 bg-current" />
              <span className="h-px w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran (téléphone, tablette) */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-nuit px-6 py-5 text-ivoire transition-all duration-700 lg:hidden ${
          ouvert ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo-blanc.png"
            alt={site.nom}
            width={1400}
            height={618}
            className="h-auto w-32"
          />
          <button
            type="button"
            onClick={() => setOuvert(false)}
            className="p-2 text-3xl leading-none"
            aria-label={e.fermer}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {[
            ...e.liens.map((l) => ({ texte: l.texte, lien: lien(l.lien) })),
            { texte: e.reserver, lien: "/reserver" },
          ].map((l, i) => (
            <a
              key={l.lien}
              href={l.lien}
              onClick={() => setOuvert(false)}
              className={`font-titre text-4xl transition-all duration-700 ${
                ouvert ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
              } ${l.lien === "/reserver" ? "text-sable" : ""}`}
              style={{ transitionDelay: ouvert ? `${150 + i * 90}ms` : "0ms" }}
            >
              {l.texte}
            </a>
          ))}
        </nav>
        <p className="text-center font-signature text-3xl text-ciel">{site.pied.phrase}</p>
      </div>
    </>
  );
}
