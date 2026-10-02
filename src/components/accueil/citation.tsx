"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Apparition } from "@/components/apparition";
import { TexteAnime } from "@/components/texte-anime";
import { site } from "@/contenu/site";

const c = site.citation;

// Grande photo qui défile plus lentement que la page (effet de profondeur), avec une phrase.
export function Citation() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let id = 0;
    const boucle = () => {
      const rect = sectionRef.current!.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const p = (window.innerHeight - rect.top) / (window.innerHeight + rect.height); // 0 → 1
        imageRef.current!.style.transform = `translate3d(0, ${(p - 0.5) * -18}%, 0)`;
      }
      id = requestAnimationFrame(boucle);
    };
    id = requestAnimationFrame(boucle);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[80svh] min-h-[480px] overflow-hidden bg-nuit">
      <div ref={imageRef} className="absolute -inset-y-[15%] inset-x-0 will-change-transform">
        <Image src={c.image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-nuit/45" />
      <div data-flou className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <TexteAnime texte={c.texte} balise="p" className="font-signature text-5xl text-ivoire sm:text-7xl lg:text-8xl" />
        <Apparition effet="flou" delai={600}>
          <span className="mx-auto mt-8 block h-px w-20 bg-sable" />
          <p className="mt-6 text-[11px] font-semibold tracking-[0.45em] text-ivoire/85 uppercase sm:text-xs">
            {c.auteur}
          </p>
        </Apparition>
      </div>
    </section>
  );
}
