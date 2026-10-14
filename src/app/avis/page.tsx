import type { Metadata } from "next";
import { FormulaireAvis } from "@/components/avis/formulaire-avis";
import { BandeauPage } from "@/components/bandeau-page";
import { site } from "@/contenu/site";

const p = site.avis.page;

export const metadata: Metadata = {
  title: p.metaTitre,
  description: p.metaDescription,
  alternates: { canonical: "/avis" },
};

// Page « Laisser un avis ».
export default function PageAvis() {
  return (
    <main>
      <BandeauPage
        image={p.image}
        alt={p.imageAlt}
        surtitre={p.surtitre}
        titre={p.titre}
        signature={p.signature}
        texte={p.texte}
        petit
      />
      <section className="bg-ivoire px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <FormulaireAvis />
        </div>
      </section>
    </main>
  );
}
