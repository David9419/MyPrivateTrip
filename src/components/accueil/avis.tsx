import Link from "next/link";
import { Apparition } from "@/components/apparition";
import { Icone } from "@/components/icones";
import { Etoiles } from "@/components/avis/etoiles";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const a = site.avis;

// Avis clients : les avis publiés (ajoutés dans site.ts) + le bouton pour en laisser un.
export function Avis() {
  return (
    <section id="avis" className="overflow-hidden bg-ivoire px-5 py-32 sm:px-8 sm:py-44">
      <TitreSection surtitre={a.surtitre} titre={a.titre} signature={a.signature} />

      {a.liste.length > 0 ? (
        <div data-flou className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-6 sm:mt-20">
          {a.liste.map((avis, i) => (
            <Apparition key={avis.nom + i} effet={["gauche", "flou", "droite"][i % 3] as "gauche"} delai={i * 100} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <figure className="flex h-full flex-col rounded-[2px] border border-nuit/10 bg-white p-8">
                <Etoiles note={avis.note} />
                <blockquote className="mt-6 flex-1 font-titre text-lg leading-relaxed text-nuit/80">
                  « {avis.texte} »
                </blockquote>
                <figcaption className="mt-6 border-t border-nuit/10 pt-5">
                  <span className="block font-semibold text-ocean">{avis.nom}</span>
                  <span className="text-sm text-nuit/55">{avis.voyage}</span>
                </figcaption>
              </figure>
            </Apparition>
          ))}
        </div>
      ) : (
        <Apparition effet="fondu" delai={150}>
          <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-nuit/70">{a.vide}</p>
        </Apparition>
      )}

      <Apparition effet="flou" delai={200} className="mt-12 text-center">
        <Link
          href="/avis"
          className="group inline-flex items-center gap-3 rounded-full border border-ocean px-8 py-4 text-sm font-medium tracking-wide text-ocean transition-colors duration-500 hover:bg-ocean hover:text-ivoire"
        >
          {a.bouton}
          <Icone nom="fleche" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Apparition>
    </section>
  );
}
