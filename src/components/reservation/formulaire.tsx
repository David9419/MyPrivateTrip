"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Apparition } from "@/components/apparition";
import { Icone, IconeWhatsapp } from "@/components/icones";
import { site } from "@/contenu/site";

const r = site.reservation;
const coord = site.coordonnees;
type Envoi = "email" | "whatsapp";

function Bloc({
  numero,
  titre,
  children,
  delai = 0,
}: {
  numero: number;
  titre: string;
  children: ReactNode;
  delai?: number;
}) {
  return (
    <Apparition
      effet={numero % 2 ? "gauche" : "droite"}
      delai={delai}
      className="border-t border-nuit/10 pt-10"
    >
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-titre text-2xl text-sable">{String(numero).padStart(2, "0")}</span>
        <h2 className="text-[11px] font-semibold tracking-[0.4em] text-ocean uppercase sm:text-xs">
          {titre}
        </h2>
      </div>
      {children}
    </Apparition>
  );
}

function Champ({ libelle, children }: { libelle: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">{libelle}</span>
      {children}
    </label>
  );
}

// Formulaire de réservation. Il prépare un message complet, envoyé par e-mail ou par WhatsApp.
export function FormulaireReservation({ prestationInitiale }: { prestationInitiale?: string }) {
  const [prestations, setPrestations] = useState<string[]>(
    r.prestations.some((p) => p.id === prestationInitiale) ? [prestationInitiale!] : [],
  );
  const [voyageurs, setVoyageurs] = useState(2);
  const [arrivee, setArrivee] = useState("");
  const [erreur, setErreur] = useState("");
  const [envoye, setEnvoye] = useState(false);
  const aujourdhui = new Date().toISOString().slice(0, 10);
  const hautRef = useRef<HTMLDivElement>(null);

  // Après l'envoi, on remonte en douceur jusqu'au message de remerciement.
  useEffect(() => {
    if (envoye) hautRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [envoye]);

  // Une seule prestation possible : en choisir une remplace la précédente.
  const choisir = (id: string) => setPrestations([id]);

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bouton = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const mode = (bouton?.value ?? "email") as Envoi;
    const d = new FormData(e.currentTarget);

    if (prestations.length === 0) return setErreur(r.erreurs.prestation);
    if (String(d.get("depart")) <= String(d.get("arrivee"))) return setErreur(r.erreurs.dates);
    setErreur("");

    const noms = r.prestations.filter((p) => prestations.includes(p.id)).map((p) => p.titre);
    const ch = r.champs;
    const texte = [
      `${r.sujet} — ${site.nom}`,
      "",
      `${ch.nom} : ${d.get("nom")}`,
      `${ch.email} : ${d.get("email")}`,
      `${ch.telephone} : ${d.get("telephone")}`,
      `${ch.destination} : ${d.get("destination")}`,
      `${ch.arrivee} : ${d.get("arrivee")}`,
      `${ch.depart} : ${d.get("depart")}`,
      `${ch.voyageurs} : ${voyageurs}`,
      `${r.sections.prestations} : ${noms.join(", ")}`,
      "",
      `${ch.message} :`,
      String(d.get("message") || "—"),
    ].join("\n");

    const lien =
      mode === "whatsapp"
        ? `${coord.whatsapp}?text=${encodeURIComponent(texte)}`
        : `mailto:${coord.email}?subject=${encodeURIComponent(`${r.sujet} — ${d.get("nom")}`)}&body=${encodeURIComponent(texte)}`;
    if (mode === "whatsapp") window.open(lien, "_blank", "noopener");
    else window.location.href = lien;
    setEnvoye(true);
  };

  if (envoye) {
    return (
      <div ref={hautRef} className="scroll-mt-28">
        <Apparition effet="flou" className="py-20 text-center">
          <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-ocean text-ivoire">
            <Icone nom="avion" className="size-9" />
          </span>
          <h2 className="mt-8 font-titre text-5xl text-ocean">{r.merciTitre}</h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-nuit/70">{r.merciTexte}</p>
          <button
            type="button"
            onClick={() => setEnvoye(false)}
            className="mt-10 rounded-full border border-ocean px-8 py-3.5 text-sm text-ocean transition-colors hover:bg-ocean hover:text-ivoire"
          >
            {r.nouvelle}
          </button>
        </Apparition>
      </div>
    );
  }

  return (
    <form onSubmit={envoyer} className="space-y-14">
      <Bloc numero={1} titre={r.sections.vous}>
        <div className="grid gap-8 sm:grid-cols-3">
          <Champ libelle={`${r.champs.nom} *`}>
            <input name="nom" required autoComplete="name" className="champ" />
          </Champ>
          <Champ libelle={`${r.champs.email} *`}>
            <input name="email" type="email" required autoComplete="email" className="champ" />
          </Champ>
          <Champ libelle={`${r.champs.telephone} *`}>
            <input name="telephone" type="tel" required autoComplete="tel" className="champ" />
          </Champ>
        </div>
      </Bloc>

      <Bloc numero={2} titre={r.sections.voyage} delai={100}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Champ libelle={`${r.champs.destination} *`}>
              <input name="destination" required className="champ" />
            </Champ>
          </div>
          <Champ libelle={`${r.champs.arrivee} *`}>
            <input
              name="arrivee"
              type="date"
              required
              min={aujourdhui}
              value={arrivee}
              onChange={(e) => setArrivee(e.target.value)}
              className="champ"
            />
          </Champ>
          <Champ libelle={`${r.champs.depart} *`}>
            <input name="depart" type="date" required min={arrivee || aujourdhui} className="champ" />
          </Champ>
          <div>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">
              {r.champs.voyageurs} *
            </span>
            <div className="mt-2 flex items-center justify-between border-b border-nuit/25 pb-1.5">
              <button
                type="button"
                onClick={() => setVoyageurs((n) => Math.max(1, n - 1))}
                className="flex size-9 items-center justify-center rounded-full border border-nuit/15 text-lg text-ocean transition-colors hover:bg-ocean hover:text-ivoire"
                aria-label={r.moins}
              >
                −
              </button>
              <span className="font-titre text-2xl text-ocean tabular-nums">{voyageurs}</span>
              <button
                type="button"
                onClick={() => setVoyageurs((n) => Math.min(99, n + 1))}
                className="flex size-9 items-center justify-center rounded-full border border-nuit/15 text-lg text-ocean transition-colors hover:bg-ocean hover:text-ivoire"
                aria-label={r.plus}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Bloc>

      <Bloc numero={3} titre={r.sections.prestations} delai={150}>
        <div
          role="radiogroup"
          aria-label={r.sections.prestations}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {r.prestations.map((p) => {
            const choisi = prestations.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => choisir(p.id)}
                role="radio"
                aria-checked={choisi}
                className={`group relative flex flex-col items-center gap-4 rounded-[2px] border px-4 py-8 text-center transition-all duration-500 ${
                  choisi
                    ? "border-ocean bg-ocean text-ivoire shadow-[0_20px_40px_-18px_rgba(7,82,122,.6)]"
                    : "border-nuit/12 bg-white text-ocean hover:-translate-y-1 hover:border-sable"
                }`}
              >
                <span
                  className={`absolute end-3 top-3 flex size-5 items-center justify-center rounded-full border text-[10px] transition-all ${
                    choisi ? "border-sable bg-sable text-ivoire" : "border-nuit/20 text-transparent"
                  }`}
                >
                  ✓
                </span>
                <Icone nom={p.icone} className={`size-9 ${choisi ? "text-sable" : "text-sable"}`} />
                <span className="font-titre text-lg leading-snug sm:text-xl">{p.titre}</span>
              </button>
            );
          })}
        </div>
      </Bloc>

      <Bloc numero={4} titre={r.sections.projet} delai={200}>
        <Champ libelle={r.champs.message}>
          <textarea
            name="message"
            rows={5}
            placeholder={r.champs.messageAide}
            className="champ resize-none"
          />
        </Champ>
      </Bloc>

      {erreur && (
        <p
          role="alert"
          className="rounded-[2px] border border-sable/50 bg-sable/10 px-5 py-4 text-sm text-nuit"
        >
          {erreur}
        </p>
      )}

      <Apparition effet="flou" className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          value="email"
          className="bouton-reflet group inline-flex items-center justify-center gap-3 rounded-full bg-ocean px-9 py-4.5 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
        >
          <Icone nom="mail" className="size-5" />
          {r.envoyerEmail}
        </button>
        <button
          type="submit"
          value="whatsapp"
          className="bouton-reflet group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4.5 text-sm font-medium tracking-wide text-white transition-colors duration-500 hover:bg-[#1da851]"
        >
          <IconeWhatsapp className="size-5" />
          {r.envoyerWhatsapp}
        </button>
      </Apparition>
    </form>
  );
}
