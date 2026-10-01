import { VideoDefilement } from "@/components/accueil/video-defilement";
import { EnTete } from "@/components/en-tete";
import { site } from "@/contenu/site";

export default function Accueil() {
  const suite = site.apresVideo;
  return (
    <>
      <EnTete />
      <main>
        <VideoDefilement />

        <section id="offres" className="relative bg-ivoire px-6 py-32 text-center sm:py-44">
          <p className="text-[11px] font-medium tracking-[0.45em] text-sable uppercase sm:text-xs">
            {suite.surtitre}
          </p>
          <h2 className="mt-6 font-titre text-5xl text-ocean sm:text-7xl">{suite.titre}</h2>
          <p className="-mt-1 font-signature text-5xl text-azur sm:text-7xl">{suite.signature}</p>
          <span className="mx-auto mt-8 block h-px w-20 bg-sable" />
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-nuit/70 sm:text-base">
            {suite.texte}
          </p>
        </section>
      </main>
    </>
  );
}
