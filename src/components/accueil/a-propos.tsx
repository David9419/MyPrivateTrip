import Image from "next/image";
import Link from "next/link";
import { Apparition } from "@/components/apparition";
import { Compteur } from "@/components/compteur";
import { Icone } from "@/components/icones";
import { site } from "@/contenu/site";

const a = site.aPropos;

// Juste après la vidéo : qui nous sommes + chiffres animés.
export function APropos() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-ivoire px-5 pt-32 pb-28 sm:px-8 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Photo, arrive floue puis devient nette */}
        <Apparition effet="flou" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
            <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 start-1/2 w-max -translate-x-1/2 rounded-full bg-nuit px-8 py-4 font-signature text-3xl text-ciel shadow-xl rtl:translate-x-1/2">
            {a.signatureImage}
          </div>
        </Apparition>

        <div>
          <Apparition effet="droite">
            <p className="text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">
              {a.surtitre}
            </p>
            <h2 className="mt-5 font-titre text-4xl leading-tight text-ocean sm:text-6xl">{a.titre}</h2>
            <p className="-mt-1 font-signature text-4xl text-azur sm:text-6xl">{a.signature}</p>
            <span className="mt-6 block h-px w-20 bg-sable" />
          </Apparition>
          <Apparition effet="droite" delai={150}>
            <p className="mt-8 font-titre text-xl leading-relaxed text-nuit sm:text-2xl">{a.intro}</p>
          </Apparition>
          {a.paragraphes.map((texte, i) => (
            <Apparition key={i} effet="fondu" delai={250 + i * 120}>
              <p className="mt-5 leading-relaxed text-nuit/70">{texte}</p>
            </Apparition>
          ))}
          <Apparition effet="fondu" delai={500}>
            <Link
              href="/reserver"
              className="bouton-reflet group mt-10 inline-flex items-center gap-3 rounded-full bg-ocean px-8 py-4 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
            >
              {a.bouton}
              <Icone nom="fleche" className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </Apparition>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="mx-auto mt-32 grid max-w-6xl grid-cols-2 gap-y-14 border-y border-sable/30 py-14 lg:grid-cols-4">
        {site.statistiques.map((stat, i) => (
          <Apparition key={stat.libelle} effet="flou" delai={i * 140} className="text-center">
            <p className="font-titre text-5xl text-ocean sm:text-6xl">
              <Compteur valeur={stat.valeur} prefixe={stat.prefixe} suffixe={stat.suffixe} />
            </p>
            <p className="mt-3 text-[10px] font-semibold tracking-[0.35em] text-nuit/60 uppercase sm:text-[11px]">
              {stat.libelle}
            </p>
          </Apparition>
        ))}
      </div>
    </section>
  );
}
