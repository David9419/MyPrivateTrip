import Link from "next/link";
import { Apparition, type Effet } from "@/components/apparition";
import { Icone, IconeWhatsapp, type NomIcone } from "@/components/icones";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const c = site.contact;
const coord = site.coordonnees;

const cartes: { libelle: string; valeur: string; lien: string; icone: NomIcone | "whatsapp"; effet: Effet }[] = [
  { libelle: c.email, valeur: coord.email, lien: `mailto:${coord.email}`, icone: "mail", effet: "gauche" },
  { libelle: c.telephone, valeur: coord.telephone, lien: coord.telephoneLien, icone: "telephone", effet: "flou" },
  { libelle: c.whatsapp, valeur: coord.disponibilite, lien: coord.whatsapp, icone: "whatsapp", effet: "flou" },
  { libelle: c.instagram, valeur: coord.instagramNom, lien: coord.instagram, icone: "instagram", effet: "droite" },
];

// Section contact : 4 façons de nous joindre + bouton vers la réservation.
export function Contact() {
  return (
    <section id="contact" className="bg-ivoire px-5 py-32 sm:px-8 sm:py-44">
      <TitreSection surtitre={c.surtitre} titre={c.titre} signature={c.signature} />
      <Apparition effet="fondu" delai={150}>
        <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-nuit/70">{c.texte}</p>
      </Apparition>

      <div data-flou className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cartes.map((carte, i) => (
          <Apparition key={carte.libelle} effet={carte.effet} delai={i * 120}>
            <a
              href={carte.lien}
              target={carte.lien.startsWith("http") ? "_blank" : undefined}
              rel={carte.lien.startsWith("http") ? "noreferrer" : undefined}
              className="group flex h-full flex-col items-center rounded-[2px] border border-nuit/10 bg-white px-6 py-10 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sable/50 hover:shadow-[0_24px_50px_-20px_rgba(16,45,66,.25)]"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-ivoire text-ocean transition-colors duration-500 group-hover:bg-ocean group-hover:text-ivoire">
                {carte.icone === "whatsapp" ? (
                  <IconeWhatsapp className="size-6" />
                ) : (
                  <Icone nom={carte.icone} className="size-6" />
                )}
              </span>
              <span className="mt-6 text-[10px] font-semibold tracking-[0.35em] text-sable uppercase">
                {carte.libelle}
              </span>
              <span className="mt-3 text-sm [overflow-wrap:anywhere] text-nuit">{carte.valeur}</span>
            </a>
          </Apparition>
        ))}
      </div>

      <Apparition effet="flou" delai={300} className="mt-16 text-center">
        <Link
          href="/reserver"
          className="bouton-reflet group inline-flex items-center gap-3 rounded-full bg-ocean px-10 py-5 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
        >
          {c.reserver}
          <Icone nom="fleche" className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </Apparition>
    </section>
  );
}
