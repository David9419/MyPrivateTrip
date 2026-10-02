"use client";

import { useState, type FormEvent } from "react";
import { Apparition } from "@/components/apparition";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const c = site.contact;
const coord = site.coordonnees;

// Formulaire de contact. Pour l'instant, il ouvre la messagerie du visiteur avec la demande
// déjà remplie (pas besoin de serveur d'e-mails).
export function Contact() {
  const [envoye, setEnvoye] = useState(false);

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const donnees = new FormData(e.currentTarget);
    const lignes = (Object.keys(c.champs) as (keyof typeof c.champs)[])
      .map((cle) => `${c.champs[cle]} : ${donnees.get(cle) ?? ""}`)
      .join("\n");
    window.location.href = `mailto:${coord.email}?subject=${encodeURIComponent(c.sujet)}&body=${encodeURIComponent(lignes)}`;
    setEnvoye(true);
  };

  const champ = (nom: keyof typeof c.champs, type = "text", requis = false) => (
    <label className="block">
      <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">
        {c.champs[nom]}
        {requis && " *"}
      </span>
      <input name={nom} type={type} required={requis} className="champ" />
    </label>
  );

  return (
    <section id="contact" className="bg-ivoire px-5 py-32 sm:px-8 sm:py-44">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <TitreSection surtitre={c.surtitre} titre={c.titre} signature={c.signature} centre={false} />
          <Apparition delai={150}>
            <p className="mt-8 max-w-md leading-relaxed text-nuit/70">{c.texte}</p>
            <ul className="mt-10 space-y-3 text-sm text-ocean">
              {coord.email && (
                <li>
                  <a href={`mailto:${coord.email}`} className="transition-colors hover:text-sable">
                    {coord.email}
                  </a>
                </li>
              )}
              {coord.telephone && (
                <li>
                  <a href={`tel:${coord.telephone.replace(/\s/g, "")}`} className="transition-colors hover:text-sable">
                    {coord.telephone}
                  </a>
                </li>
              )}
              <li className="text-nuit/55">{coord.zone}</li>
            </ul>
          </Apparition>
        </div>

        <Apparition delai={200}>
          <form onSubmit={envoyer} className="grid gap-8 sm:grid-cols-2">
            {champ("nom", "text", true)}
            {champ("email", "email", true)}
            {champ("telephone", "tel")}
            {champ("destination")}
            <div className="sm:col-span-2">{champ("dates")}</div>
            <label className="block sm:col-span-2">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-nuit/55 uppercase">
                {c.champs.message}
              </span>
              <textarea name="message" rows={4} className="champ resize-none" />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-ocean px-9 py-4 text-sm font-medium tracking-wide text-ivoire transition-colors duration-500 hover:bg-nuit"
              >
                {c.envoyer}
                <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
              </button>
              {envoye && <p className="mt-5 text-sm text-ocean">{c.merci}</p>}
            </div>
          </form>
        </Apparition>
      </div>
    </section>
  );
}
