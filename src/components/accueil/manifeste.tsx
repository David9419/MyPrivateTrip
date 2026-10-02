import { Apparition } from "@/components/apparition";
import { site } from "@/contenu/site";

const m = site.manifeste;

// Juste après la vidéo : la promesse de la marque.
export function Manifeste() {
  return (
    <section className="relative overflow-hidden bg-ivoire px-6 py-32 text-center sm:py-44">
      <Apparition>
        <p className="text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">
          {m.surtitre}
        </p>
        <h2 className="mt-6 font-titre text-4xl text-ocean sm:text-6xl lg:text-7xl">{m.titre}</h2>
        <p className="-mt-1 font-signature text-5xl text-azur sm:text-7xl lg:text-8xl">{m.signature}</p>
      </Apparition>
      <Apparition delai={150}>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-nuit/75 sm:text-lg">
          {m.texte}
        </p>
      </Apparition>
      <Apparition delai={300} className="mt-14 flex items-center justify-center gap-5 sm:gap-8">
        {m.valeurs.map((valeur, i) => (
          <span key={valeur} className="flex items-center gap-5 sm:gap-8">
            {i > 0 && <span className="size-1 rounded-full bg-sable" />}
            <span className="text-[11px] font-medium tracking-[0.4em] text-ocean uppercase sm:text-sm">
              {valeur}
            </span>
          </span>
        ))}
      </Apparition>
    </section>
  );
}
