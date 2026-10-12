"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Apparition } from "@/components/apparition";

// Grande photo en haut des pages (réservation, services, pages légales), avec le titre de la page.
// Tant qu'elle est sous l'en-tête, l'en-tête passe en version claire.
export function BandeauPage({
  image,
  alt,
  surtitre,
  titre,
  signature,
  texte,
  petit = false,
}: {
  image: string;
  alt: string;
  surtitre: string;
  titre: string;
  signature: string;
  texte?: string;
  petit?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let id = 0;
    const boucle = () => {
      const rect = ref.current!.getBoundingClientRect();
      document.documentElement.style.setProperty("--sombre", rect.bottom > 90 ? "1" : "0");
      if (rect.bottom > 0) {
        const p = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        imageRef.current!.style.transform = `translate3d(0, ${p * 25}%, 0) scale(${1 + p * 0.08})`;
        imageRef.current!.style.filter = p > 0.01 ? `blur(${p * 10}px)` : "none";
      }
      id = requestAnimationFrame(boucle);
    };
    id = requestAnimationFrame(boucle);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-nuit ${petit ? "h-[52svh] min-h-[380px]" : "h-[70svh] min-h-[460px]"}`}
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-nuit/50 via-nuit/20 to-nuit/70" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 pt-16 text-center text-ivoire [text-shadow:0_2px_20px_rgba(0,0,0,.35)]">
        <Apparition effet="flou">
          <p className="text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">{surtitre}</p>
          <h1 className="mt-5 font-titre text-5xl font-normal sm:text-7xl lg:text-8xl">
            {titre}{" "}
            <span className="-mt-1 block font-signature text-5xl text-ivoire sm:text-7xl">{signature}</span>
          </h1>
        </Apparition>
        <Apparition effet="fondu" delai={200}>
          <span className="mx-auto mt-6 block h-px w-20 bg-sable" />
          {texte && (
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ivoire/90 sm:text-base">{texte}</p>
          )}
        </Apparition>
      </div>
    </section>
  );
}
