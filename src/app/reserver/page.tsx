import type { Metadata } from "next";
import { BandeauPage } from "@/components/bandeau-page";
import { FormulaireReservation } from "@/components/reservation/formulaire";
import { site } from "@/contenu/site";

const r = site.reservation;

export const metadata: Metadata = {
  title: r.metaTitre,
  description: r.metaDescription,
  // Les adresses avec ?prestation=… renvoient toutes à la même page officielle.
  alternates: { canonical: "/reserver" },
  openGraph: { url: "/reserver", title: r.metaTitre, description: r.metaDescription },
};

// Page « Réserver » : grande photo + formulaire complet.
// ?prestation=chef (par exemple) pré-coche la prestation choisie depuis l'accueil.
export default async function PageReservation({ searchParams }: PageProps<"/reserver">) {
  const { prestation } = await searchParams;
  return (
    <main>
      <BandeauPage
        image={r.image}
        alt={r.imageAlt}
        surtitre={r.surtitre}
        titre={r.titre}
        signature={r.signature}
        texte={r.texte}
      />
      <section className="bg-ivoire px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <FormulaireReservation prestationInitiale={typeof prestation === "string" ? prestation : undefined} />
        </div>
      </section>
    </main>
  );
}
