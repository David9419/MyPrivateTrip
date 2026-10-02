import Image from "next/image";
import { site } from "@/contenu/site";

const p = site.pied;
const coord = site.coordonnees;

export function PiedDePage() {
  return (
    <footer className="bg-nuit px-5 pt-24 pb-10 text-ivoire sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/images/logo-blanc.png" alt={site.nom} width={1400} height={618} className="h-auto w-56" />
          <p className="mt-6 font-signature text-3xl text-ciel">{p.phrase}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-sable uppercase">{p.navigation}</p>
          <ul className="mt-6 space-y-3 text-sm text-ivoire/75">
            {site.entete.liens.map((l) => (
              <li key={l.lien}>
                <a href={l.lien} className="transition-colors hover:text-sable">
                  {l.texte}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-sable uppercase">{p.nousJoindre}</p>
          <ul className="mt-6 space-y-3 text-sm text-ivoire/75">
            {coord.email && (
              <li>
                <a href={`mailto:${coord.email}`} className="transition-colors hover:text-sable">
                  {coord.email}
                </a>
              </li>
            )}
            {coord.telephone && <li>{coord.telephone}</li>}
            {coord.instagram && (
              <li>
                <a href={coord.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-sable">
                  Instagram
                </a>
              </li>
            )}
            <li>{coord.zone}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-ivoire/10 pt-8 text-[11px] tracking-wider text-ivoire/45 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.nom}. {p.droits}
        </span>
        <span className="tracking-[0.3em] uppercase">{site.manifeste.valeurs.join(" · ")}</span>
      </div>
    </footer>
  );
}
