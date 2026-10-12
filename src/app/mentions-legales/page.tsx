import type { Metadata } from "next";
import Link from "next/link";
import { BandeauPage } from "@/components/bandeau-page";
import { site } from "@/contenu/site";

const l = site.legal;
const m = l.mentions;
const coord = site.coordonnees;

export const metadata: Metadata = {
  title: m.metaTitre,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  // Seules les informations remplies dans site.ts sont affichées.
  const editeur = [
    { libelle: m.libelles.nom, valeur: site.nom },
    ...(Object.keys(l.entreprise) as (keyof typeof l.entreprise)[]).map((cle) => ({
      libelle: m.libelles[cle],
      valeur: l.entreprise[cle] as string,
    })),
    { libelle: m.libelles.email, valeur: coord.email },
    { libelle: m.libelles.telephone, valeur: coord.telephone },
  ].filter((ligne) => ligne.valeur);

  return (
    <main>
      <BandeauPage
        image={site.citation.image}
        alt={site.citation.imageAlt}
        surtitre={m.surtitre}
        titre={m.titre}
        signature={m.signature}
        petit
      />
      <section className="bg-ivoire px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-12 leading-relaxed text-nuit/75">
          <div>
            <h2 className="font-titre text-2xl text-ocean">{m.editeurTitre}</h2>
            <dl className="mt-5 space-y-2">
              {editeur.map((ligne) => (
                <div key={ligne.libelle} className="flex flex-wrap gap-x-2">
                  <dt className="font-semibold text-nuit">{ligne.libelle} :</dt>
                  <dd>{ligne.valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-titre text-2xl text-ocean">{m.hebergeurTitre}</h2>
            <p className="mt-5">{l.hebergeur}</p>
          </div>
          <div>
            <h2 className="font-titre text-2xl text-ocean">{m.proprieteTitre}</h2>
            <p className="mt-5">{m.propriete}</p>
          </div>
          <div>
            <h2 className="font-titre text-2xl text-ocean">{m.donneesTitre}</h2>
            <p className="mt-5">
              <Link href="/confidentialite" className="text-ocean underline decoration-sable underline-offset-4">
                {m.donnees}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
