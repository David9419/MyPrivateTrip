"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Apparition } from "@/components/apparition";
import { Etoile } from "@/components/avis/etoiles";
import { Icone, IconeWhatsapp } from "@/components/icones";
import { site } from "@/contenu/site";

const a = site.avis;
const c = a.champs;
const coord = site.coordonnees;

// Formulaire d'avis : prépare un message envoyé à l'agence par e-mail ou WhatsApp.
// L'agence vérifie l'avis avant de le publier (rien n'est publié automatiquement).
export function FormulaireAvis() {
  const [note, setNote] = useState(0);
  const [survol, setSurvol] = useState(0);
  const [erreur, setErreur] = useState("");
  const [envoye, setEnvoye] = useState(false);
  const hautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (envoye) hautRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [envoye]);

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note) return setErreur(a.erreurNote);
    setErreur("");
    const bouton = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const d = new FormData(e.currentTarget);
    const texte = [
      `${a.sujet} — ${site.nom}`,
      "",
      `${c.nom} : ${d.get("nom")}`,
      `${c.voyage} : ${d.get("voyage")}`,
      `${c.note} : ${"★".repeat(note)}${"☆".repeat(5 - note)} (${note}/5)`,
      "",
      `${c.texte} :`,
      String(d.get("texte")),
      "",
      `✓ ${c.accord}`,
    ].join("\n");
    if (bouton?.value === "whatsapp") {
      window.open(`${coord.whatsapp}?text=${encodeURIComponent(texte)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${coord.email}?subject=${encodeURIComponent(`${a.sujet} — ${d.get("nom")}`)}&body=${encodeURIComponent(texte)}`;
    }
    setEnvoye(true);
  };

  if (envoye) {
    return (
      <div ref={hautRef} className="scroll-mt-28">
        <Apparition effet="flou" className="py-16 text-center">
          <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-ocean text-sable">
            <Etoile pleine className="size-9" />
          </span>
          <h2 className="mt-8 font-titre text-5xl text-ocean">{a.merciTitre}</h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-nuit/70">{a.merciTexte}</p>
          <Link
            href="/"
            className="mt-10 inline-block rounded-full border border-ocean px-8 py-3.5 text-sm text-ocean transition-colors hover:bg-ocean hover:text-ivoire"
          >
            {a.retour}
          </Link>
        </Apparition>
      </div>
    );
  }

  const affichee = survol || note;
  return (
    <form onSubmit={envoyer} className="space-y-10">
      <Apparition effet="flou">
        <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">{c.note} *</span>
        <div role="radiogroup" aria-label={c.note} className="mt-3 flex gap-2" onMouseLeave={() => setSurvol(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={note === n}
              aria-label={`${n} ${n > 1 ? c.etoiles : c.etoile}`}
              onClick={() => setNote(n)}
              onMouseEnter={() => setSurvol(n)}
              className="text-sable transition-transform hover:scale-110"
            >
              <Etoile pleine={n <= affichee} className="size-10" />
            </button>
          ))}
        </div>
      </Apparition>

      <Apparition effet="gauche" className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">{c.nom} *</span>
          <input name="nom" required autoComplete="name" className="champ" />
        </label>
        <label className="block">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">{c.voyage} *</span>
          <input name="voyage" required placeholder={c.voyageAide} className="champ" />
        </label>
      </Apparition>

      <Apparition effet="droite">
        <label className="block">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">{c.texte} *</span>
          <textarea name="texte" required rows={6} placeholder={c.texteAide} className="champ resize-none" />
        </label>
      </Apparition>

      <Apparition effet="fondu">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-nuit/70">
          <input type="checkbox" required className="mt-1 size-4 shrink-0 accent-[var(--color-ocean)]" />
          {c.accord}
        </label>
      </Apparition>

      {erreur && (
        <p role="alert" className="rounded-[2px] border border-sable/50 bg-sable/10 px-5 py-4 text-sm text-nuit">
          {erreur}
        </p>
      )}

      <Apparition effet="flou" className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          value="email"
          className="bouton-reflet inline-flex items-center justify-center gap-3 rounded-full bg-ocean px-9 py-4.5 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
        >
          <Icone nom="mail" className="size-5" />
          {a.envoyerEmail}
        </button>
        <button
          type="submit"
          value="whatsapp"
          className="bouton-reflet inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4.5 text-sm font-medium tracking-wide text-white transition-colors duration-500 hover:bg-[#1da851]"
        >
          <IconeWhatsapp className="size-5" />
          {a.envoyerWhatsapp}
        </button>
      </Apparition>
    </form>
  );
}
