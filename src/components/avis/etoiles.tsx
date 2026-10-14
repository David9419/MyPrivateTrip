import { site } from "@/contenu/site";

// Note sur 5, en étoiles dorées.
export function Etoiles({ note, className = "size-5" }: { note: number; className?: string }) {
  const c = site.avis.champs;
  return (
    <span className="flex gap-1 text-sable" role="img" aria-label={`${note}/5 ${note > 1 ? c.etoiles : c.etoile}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Etoile key={n} pleine={n <= note} className={className} />
      ))}
    </span>
  );
}

export function Etoile({ pleine, className = "size-5" }: { pleine: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"
        fill={pleine ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
