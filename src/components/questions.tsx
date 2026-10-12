import { Apparition } from "@/components/apparition";

// Liste de questions / réponses qui s'ouvrent au clic.
// Les réponses sont toujours présentes dans la page (lisibles par Google et les IA), même fermées.
export function Questions({
  questions,
  clair = false,
}: {
  questions: readonly { question: string; reponse: string }[];
  clair?: boolean;
}) {
  return (
    <div className={`divide-y border-y ${clair ? "divide-ivoire/15 border-ivoire/15" : "divide-nuit/10 border-nuit/10"}`}>
      {questions.map((q, i) => (
        <Apparition key={q.question} effet={i % 2 ? "droite" : "gauche"} delai={i * 80}>
          <details className="group">
            <summary
              className={`flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-titre text-lg sm:text-2xl [&::-webkit-details-marker]:hidden ${
                clair ? "text-ivoire" : "text-ocean"
              }`}
            >
              <h3 className="font-normal">{q.question}</h3>
              <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-sable/60 text-sable transition-transform duration-500 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className={`max-w-3xl pb-8 leading-relaxed ${clair ? "text-ivoire/70" : "text-nuit/70"}`}>{q.reponse}</p>
          </details>
        </Apparition>
      ))}
    </div>
  );
}
