"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/contenu/site";

const e = site.entete;

// Couleur du texte : ivoire sur la vidéo, bleu nuit ailleurs (variable --sombre réglée par la vidéo).
const couleur = {
  color: "color-mix(in srgb, var(--color-ivoire) calc(var(--sombre, 0) * 100%), var(--color-nuit))",
};

// En-tête fixe : logo, liens, bouton contact, et menu plein écran sur téléphone.
export function EnTete() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Fond ivoire flouté, seulement quand on n'est plus sur la vidéo */}
        <div
          className="absolute inset-0 border-b border-nuit/5 bg-ivoire/95 backdrop-blur-md transition-opacity duration-500"
          style={{ opacity: "calc(1 - var(--sombre, 0))" }}
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
          <a href="#" className="relative block h-14 w-[128px] sm:h-16 sm:w-[146px]" aria-label={site.nom}>
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
          </a>

          <nav className="hidden items-center gap-10 md:flex" style={couleur}>
            {e.liens.slice(0, -1).map((l) => (
              <a
                key={l.lien}
                href={l.lien}
                className="group relative text-xs font-medium tracking-[0.2em] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,calc(var(--sombre,0)*.45))]"
              >
                {l.texte}
                <span className="absolute -bottom-1.5 start-0 h-px w-0 bg-sable transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-current px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 hover:border-sable hover:bg-sable hover:!text-ivoire"
            >
              {e.contact}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOuvert(true)}
            className="flex flex-col items-end gap-1.5 p-2 md:hidden"
            style={couleur}
            aria-label={e.menu}
          >
            <span className="h-px w-7 bg-current" />
            <span className="h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      {/* Menu plein écran (téléphone) */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-nuit px-6 py-5 text-ivoire transition-all duration-700 md:hidden ${
          ouvert ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image src="/images/logo-blanc.png" alt={site.nom} width={1400} height={618} className="h-auto w-32" />
          <button type="button" onClick={() => setOuvert(false)} className="p-2 text-2xl leading-none" aria-label={e.fermer}>
            ×
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-9">
          {e.liens.map((l, i) => (
            <a
              key={l.lien}
              href={l.lien}
              onClick={() => setOuvert(false)}
              className={`font-titre text-4xl transition-all duration-700 ${
                ouvert ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
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
