import { Apparition } from "@/components/apparition";
import { TexteAnime } from "@/components/texte-anime";

// Titre de section : petit surtitre doré (arrive par le côté), grand titre et signature
// manuscrite (mot par mot, en sortant du flou), puis le trait doré.
export function TitreSection({
  surtitre,
  titre,
  signature,
  clair = false,
  centre = true,
}: {
  surtitre: string;
  titre: string;
  signature: string;
  clair?: boolean;
  centre?: boolean;
}) {
  return (
    <div className={centre ? "text-center" : "text-start"}>
      <Apparition effet={centre ? "flou" : "gauche"}>
        <p className="text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">{surtitre}</p>
      </Apparition>
      <TexteAnime
        balise="h2"
        texte={titre}
        delai={150}
        className={`mt-5 font-titre text-4xl leading-tight sm:text-6xl ${clair ? "text-ivoire" : "text-ocean"}`}
      />
      <TexteAnime
        texte={signature}
        delai={400}
        className={`-mt-1 font-signature text-4xl sm:text-6xl ${clair ? "text-ciel" : "text-azur"}`}
      />
      <Apparition effet={centre ? "fondu" : "gauche"} delai={600}>
        <span className={`mt-6 block h-px w-20 bg-sable ${centre ? "mx-auto" : ""}`} />
      </Apparition>
    </div>
  );
}
