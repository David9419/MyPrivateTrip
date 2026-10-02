import { Apparition } from "@/components/apparition";

// Titre de section : petit surtitre doré, grand titre, signature manuscrite.
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
    <Apparition className={centre ? "text-center" : "text-start"}>
      <p className="text-[11px] font-semibold tracking-[0.45em] text-sable uppercase sm:text-xs">
        {surtitre}
      </p>
      <h2
        className={`mt-5 font-titre text-4xl leading-tight sm:text-6xl ${clair ? "text-ivoire" : "text-ocean"}`}
      >
        {titre}
      </h2>
      <p className={`-mt-1 font-signature text-4xl sm:text-6xl ${clair ? "text-ciel" : "text-azur"}`}>
        {signature}
      </p>
      <span className={`mt-6 block h-px w-20 bg-sable ${centre ? "mx-auto" : ""}`} />
    </Apparition>
  );
}
