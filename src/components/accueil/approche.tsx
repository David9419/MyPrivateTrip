import { Apparition } from "@/components/apparition";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const a = site.approche;

// Les 4 étapes, sur fond bleu nuit.
export function Approche() {
  return (
    <section id="approche" className="relative overflow-hidden bg-nuit px-5 py-32 sm:px-8 sm:py-44">
      {/* Halo bleu azur très doux */}
      <div className="pointer-events-none absolute -top-40 start-1/2 size-[640px] -translate-x-1/2 rounded-full bg-azur/10 blur-3xl" />

      <TitreSection surtitre={a.surtitre} titre={a.titre} signature={a.signature} clair />

      <ol className="relative mx-auto mt-20 grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Ligne dorée qui relie les étapes (ordinateur) */}
        <span className="absolute inset-x-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-sable/60 to-transparent lg:block" />
        {a.etapes.map((etape, i) => (
          <Apparition key={etape.titre} balise="li" delai={i * 150} className="relative text-center">
            <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-sable/60 bg-nuit font-titre text-xl text-sable">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-7 font-titre text-xl text-ivoire sm:text-2xl">{etape.titre}</h3>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-ivoire/65">{etape.texte}</p>
          </Apparition>
        ))}
      </ol>
    </section>
  );
}
