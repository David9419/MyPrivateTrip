import Image from "next/image";
import Link from "next/link";
import { Icone, IconeWhatsapp } from "@/components/icones";
import { site } from "@/contenu/site";

const p = site.pied;
const coord = site.coordonnees;

export function PiedDePage() {
  return (
    <footer className="bg-nuit px-5 pt-24 pb-10 text-ivoire sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Image src="/images/logo-blanc.png" alt={site.nom} width={1400} height={618} className="h-auto w-56" />
          <p className="mt-6 font-signature text-3xl text-ciel">{p.phrase}</p>
          <div className="mt-8 flex gap-3">
            {[
              { lien: coord.instagram, icone: <Icone nom="instagram" className="size-5" />, nom: "Instagram" },
              { lien: coord.whatsapp, icone: <IconeWhatsapp className="size-5" />, nom: "WhatsApp" },
              { lien: `mailto:${coord.email}`, icone: <Icone nom="mail" className="size-5" />, nom: "E-mail" },
            ].map((r) => (
              <a
                key={r.nom}
                href={r.lien}
                target={r.lien.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={r.nom}
                className="flex size-11 items-center justify-center rounded-full border border-ivoire/20 transition-all duration-500 hover:-translate-y-1 hover:border-sable hover:bg-sable"
              >
                {r.icone}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-sable uppercase">{p.navigation}</p>
          <ul className="mt-6 space-y-3 text-sm text-ivoire/75">
            {site.entete.liens.map((l) => (
              <li key={l.lien}>
                <a href={`/${l.lien}`} className="transition-colors hover:text-sable">
                  {l.texte}
                </a>
              </li>
            ))}
            <li>
              <Link href="/reserver" className="text-sable transition-colors hover:text-ivoire">
                {p.reservation}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-sable uppercase">{p.nousJoindre}</p>
          <ul className="mt-6 space-y-3 text-sm text-ivoire/75">
            <li>
              <a href={`mailto:${coord.email}`} className="transition-colors hover:text-sable">
                {coord.email}
              </a>
            </li>
            <li>
              <a href={coord.telephoneLien} className="transition-colors hover:text-sable">
                {coord.telephone}
              </a>
            </li>
            <li>
              <a href={coord.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-sable">
                {coord.instagramNom}
              </a>
            </li>
            <li className="text-ivoire/50">{coord.disponibilite}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-ivoire/10 pt-8 text-[11px] tracking-wider text-ivoire/45 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.nom}. {p.droits}
        </span>
        <span className="tracking-[0.3em] uppercase">{site.valeurs.join(" · ")}</span>
      </div>
    </footer>
  );
}
