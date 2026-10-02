// Icônes fines au trait, dans l'esprit de la charte graphique.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export type NomIcone = "avion" | "palmier" | "cle" | "toque";

export function Icone({ nom, className = "size-8" }: { nom: NomIcone; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...base}>
      {nom === "avion" && (
        <path d="M29 6.5 3.5 15.2l8 2.6 2.6 8L29 6.5Zm0 0L11.5 17.8M14.1 25.8l2.6-6.4" />
      )}
      {nom === "palmier" && (
        <>
          <path d="M16 13c.6 5 .4 10-1.5 16" />
          <path d="M16 13c-2.5-3-6.5-3.8-10-2.2 3.2.2 5.4 1.2 6.8 3" />
          <path d="M16 13c2.5-3 6.5-3.8 10-2.2-3.2.2-5.4 1.2-6.8 3" />
          <path d="M16 13c-1-3.6-3.8-6.2-7.6-6.6 2.4 1.4 3.8 3.2 4.4 5.2" />
          <path d="M16 13c1-3.6 3.8-6.2 7.6-6.6-2.4 1.4-3.8 3.2-4.4 5.2" />
          <path d="M9 29h14" />
        </>
      )}
      {nom === "cle" && (
        <>
          <circle cx="10.5" cy="12" r="5.5" />
          <circle cx="10.5" cy="12" r="1.6" />
          <path d="M14.5 15.8 26 27.3m-4.2-4.2 2.6-2.6m-5.4-.2 2.4-2.4" />
        </>
      )}
      {nom === "toque" && (
        <>
          <path d="M9.5 19.5c-3-.6-5-3-4.6-5.8.4-3 3.4-5 6.4-4.2C12.2 6.6 14 5 16 5s3.8 1.6 4.7 4.5c3-.8 6 1.2 6.4 4.2.4 2.8-1.6 5.2-4.6 5.8" />
          <path d="M9.5 19.5V26h13v-6.5M9.5 22.5h13" />
        </>
      )}
    </svg>
  );
}
