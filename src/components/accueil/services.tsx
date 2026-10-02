import Image from "next/image";
import { Apparition } from "@/components/apparition";
import { Icone } from "@/components/icones";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const s = site.services;

// Les 4 services, en grandes cartes photo.
export function Services() {
  return (
    <section id="offres" className="bg-ivoire px-5 pb-32 sm:px-8 sm:pb-44">
      <TitreSection surtitre={s.surtitre} titre={s.titre} signature={s.signature} />

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {s.liste.map((service, i) => (
          <Apparition key={service.titre} delai={i * 120}>
            <a
              href="#contact"
              className="group relative block aspect-[3/4] overflow-hidden rounded-[2px] bg-nuit"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/40 to-nuit/5 transition-colors duration-700 group-hover:via-nuit/55" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-ivoire">
                <Icone nom={service.icone} className="size-9 text-sable" />
                <h3 className="mt-5 font-titre text-2xl sm:text-[1.7rem]">{service.titre}</h3>
                <span className="mt-4 block h-px w-10 bg-sable transition-all duration-700 group-hover:w-20" />
                <p className="mt-4 text-sm leading-relaxed text-ivoire/80">{service.texte}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-sable uppercase opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  {s.decouvrir}
                  <span className="rtl:rotate-180">→</span>
                </span>
              </div>
            </a>
          </Apparition>
        ))}
      </div>
    </section>
  );
}
