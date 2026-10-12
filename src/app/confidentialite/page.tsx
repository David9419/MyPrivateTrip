import type { Metadata } from "next";
import { BandeauPage } from "@/components/bandeau-page";
import { site } from "@/contenu/site";

const c = site.legal.confidentialite;
const email = site.coordonnees.email;

export const metadata: Metadata = {
  title: c.metaTitre,
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  return (
    <main>
      <BandeauPage
        image={site.reservation.image}
        alt={site.reservation.imageAlt}
        surtitre={c.surtitre}
        titre={c.titre}
        signature={c.signature}
        petit
      />
      <section className="bg-ivoire px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-12 leading-relaxed text-nuit/75">
          {c.sections.map((s) => (
            <div key={s.titre}>
              <h2 className="font-titre text-2xl text-ocean">{s.titre}</h2>
              <p className="mt-5">{s.texte}</p>
            </div>
          ))}
          <p>
            {c.contact}
            <a href={`mailto:${email}`} className="text-ocean underline decoration-sable underline-offset-4">
              {email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
