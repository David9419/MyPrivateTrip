import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Apparition } from "@/components/apparition";
import { BandeauPage } from "@/components/bandeau-page";
import {
  DonneesStructurees,
  schemaFaq,
  schemaFilAriane,
  schemaService,
} from "@/components/donnees-structurees";
import { Icone } from "@/components/icones";
import { Questions } from "@/components/questions";
import { site } from "@/contenu/site";

type Page = keyof typeof site.pagesServices;
const t = site.pageService;

function trouver(slug: string) {
  if (!(slug in site.pagesServices)) return null;
  const page = site.pagesServices[slug as Page];
  const service = site.services.liste.find((s) => s.page === slug)!;
  return { page, service };
}

// Une page par service, créée à l'avance pour chacune des 4 prestations.
export function generateStaticParams() {
  return Object.keys(site.pagesServices).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const trouve = trouver(slug);
  if (!trouve) return {};
  const { page } = trouve;
  const chemin = `/services/${slug}`;
  return {
    title: page.metaTitre,
    description: page.metaDescription,
    alternates: { canonical: chemin },
    openGraph: {
      url: chemin,
      title: page.metaTitre,
      description: page.metaDescription,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
  };
}

export default async function PageService({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const trouve = trouver(slug);
  if (!trouve) notFound();
  const { page, service } = trouve;
  const chemin = `/services/${slug}`;
  const autres = site.services.liste.filter((s) => s.page !== slug);

  return (
    <main>
      <DonneesStructurees donnees={schemaService(service.titre, page.intro, chemin, page.image)} />
      <DonneesStructurees donnees={schemaFaq(page.faq)} />
      <DonneesStructurees
        donnees={schemaFilAriane([
          { nom: t.accueil, chemin: "/" },
          { nom: t.services, chemin: "/#offres" },
          { nom: service.titre, chemin },
        ])}
      />

      <BandeauPage
        image={page.image}
        alt={page.imageAlt}
        surtitre={page.surtitre}
        titre={page.titre}
        signature={page.signature}
        texte={service.texte}
      />

      {/* Présentation + ce qui est compris */}
      <section className="overflow-hidden bg-ivoire px-5 py-24 sm:px-8 sm:py-32">
        <div data-flou className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-[11px] tracking-[0.25em] text-nuit/50 uppercase">
              <Link href="/" className="hover:text-sable">
                {t.accueil}
              </Link>
              {" / "}
              <Link href="/#offres" className="hover:text-sable">
                {t.services}
              </Link>
              {" / "}
              <span className="text-sable">{service.titre}</span>
            </nav>
            <Apparition effet="gauche">
              <h2 className="mt-8 font-titre text-3xl leading-tight text-ocean sm:text-5xl">{service.titre}</h2>
              <span className="mt-6 block h-px w-20 bg-sable" />
            </Apparition>
            <Apparition effet="fondu" delai={150}>
              <p className="mt-8 text-lg leading-relaxed text-nuit/75">{page.intro}</p>
            </Apparition>
            <Apparition effet="fondu" delai={250}>
              <Link
                href={`/reserver?prestation=${service.prestation}`}
                className="bouton-reflet group mt-10 inline-flex items-center gap-3 rounded-full bg-ocean px-8 py-4 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
              >
                {t.reserver}
                <Icone nom="fleche" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Apparition>
          </div>

          <Apparition effet="droite" className="self-start rounded-[2px] bg-nuit p-8 text-ivoire sm:p-10">
            <Icone nom={service.icone} className="size-10 text-sable" />
            <h2 className="mt-6 font-titre text-2xl font-normal">{page.inclusTitre}</h2>
            <ul className="mt-8 space-y-4">
              {page.inclus.map((ligne) => (
                <li key={ligne} className="flex gap-3 text-sm leading-relaxed text-ivoire/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sable" />
                  {ligne}
                </li>
              ))}
            </ul>
          </Apparition>
        </div>
      </section>

      {/* Questions sur ce service */}
      <section className="bg-ivoire px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-4xl">
          <Apparition effet="flou">
            <h2 className="text-center text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">
              {t.questions}
            </h2>
          </Apparition>
          <div className="mt-10">
            <Questions questions={page.faq} />
          </div>
        </div>
      </section>

      {/* Les autres services */}
      <section className="bg-nuit px-5 py-24 sm:px-8 sm:py-32">
        <Apparition effet="flou">
          <h2 className="text-center font-titre text-3xl text-ivoire sm:text-5xl">{t.autres}</h2>
        </Apparition>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-3">
          {autres.map((s, i) => (
            <Apparition key={s.page} effet={["gauche", "flou", "droite"][i] as "gauche"} delai={i * 120}>
              <Link
                href={`/services/${s.page}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[2px]"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/30 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6 font-titre text-2xl text-ivoire">{s.titre}</span>
              </Link>
            </Apparition>
          ))}
        </div>
      </section>
    </main>
  );
}
