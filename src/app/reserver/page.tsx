import type { Metadata } from "next";
import { BandeauReservation } from "@/components/reservation/bandeau";
import { FormulaireReservation } from "@/components/reservation/formulaire";
import { site } from "@/contenu/site";

export const metadata: Metadata = {
  title: site.reservation.titrePage,
  description: site.reservation.texte,
};

// Page « Réserver » : grande photo + formulaire complet.
// ?prestation=chef (par exemple) pré-coche la prestation choisie depuis l'accueil.
export default async function PageReservation({ searchParams }: PageProps<"/reserver">) {
  const { prestation } = await searchParams;
  return (
    <main>
      <BandeauReservation />
      <section className="bg-ivoire px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <FormulaireReservation prestationInitiale={typeof prestation === "string" ? prestation : undefined} />
        </div>
      </section>
    </main>
  );
}
