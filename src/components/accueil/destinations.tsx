import { Apparition } from "@/components/apparition";
import { Icone } from "@/components/icones";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const d = site.destinations;

// Une ligne de destinations qui défile à l'infini (la liste est doublée pour boucler sans saut).
// La vitesse dépend de la longueur de la liste ; elle se met en pause au survol.
function Bandeau({ noms, inverse = false }: { noms: readonly string[]; inverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div
        className={`flex shrink-0 group-hover:[animation-play-state:paused] ${inverse ? "bandeau-inverse" : "bandeau"}`}
        style={{ animationDuration: `${noms.length * 4.5}s` }}
      >
        {[...noms, ...noms].map((nom, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 pe-8 sm:gap-12 sm:pe-12">
            <span
              className={
                inverse
                  ? "font-signature text-5xl whitespace-nowrap text-azur transition-colors duration-300 hover:text-sable sm:text-7xl"
                  : "font-titre text-4xl whitespace-nowrap text-ocean transition-colors duration-300 hover:text-sable sm:text-6xl"
              }
            >
              {nom}
            </span>
            <Icone nom="avion" className="size-5 shrink-0 text-sable" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="overflow-hidden bg-ivoire pb-32 sm:pb-44">
      <div className="px-5 sm:px-8">
        <TitreSection surtitre={d.surtitre} titre={d.titre} signature={d.signature} />
        <Apparition effet="fondu" delai={150}>
          <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-nuit/70">{d.texte}</p>
        </Apparition>
      </div>
      <div data-flou className="mt-16 space-y-4 sm:mt-20 sm:space-y-6">
        <Apparition effet="gauche">
          <Bandeau noms={d.lignes[0]} />
        </Apparition>
        <Apparition effet="droite" delai={150}>
          <Bandeau noms={d.lignes[1]} inverse />
        </Apparition>
      </div>
    </section>
  );
}
