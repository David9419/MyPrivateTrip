import { Apparition } from "@/components/apparition";
import { Icone } from "@/components/icones";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const d = site.destinations;

// Une ligne de destinations qui défile en continu (doublée pour boucler sans saut).
function Bandeau({ noms, inverse = false }: { noms: readonly string[]; inverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 ${inverse ? "bandeau-inverse" : "bandeau"}`}>
        {[...noms, ...noms].map((nom, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 pe-8 sm:gap-12 sm:pe-12">
            <span
              className={
                inverse
                  ? "font-signature text-5xl text-azur sm:text-7xl"
                  : "font-titre text-4xl text-ocean sm:text-6xl"
              }
            >
              {nom}
            </span>
            <Icone nom="avion" className="size-5 text-sable" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Destinations() {
  const moitie = Math.ceil(d.liste.length / 2);
  return (
    <section id="destinations" className="overflow-hidden bg-ivoire pb-32 sm:pb-44">
      <div className="px-5 sm:px-8">
        <TitreSection surtitre={d.surtitre} titre={d.titre} signature={d.signature} />
        <Apparition effet="fondu" delai={150}>
          <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-nuit/70">{d.texte}</p>
        </Apparition>
      </div>
      <Apparition effet="flou" delai={250} className="mt-16 space-y-6 sm:mt-20">
        <Bandeau noms={d.liste.slice(0, moitie)} />
        <Bandeau noms={d.liste.slice(moitie)} inverse />
      </Apparition>
    </section>
  );
}
