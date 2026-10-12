import { DonneesStructurees, schemaFaq } from "@/components/donnees-structurees";
import { Questions } from "@/components/questions";
import { TitreSection } from "@/components/titre-section";
import { site } from "@/contenu/site";

const f = site.faq;

// Questions fréquentes de l'accueil.
export function Faq() {
  return (
    <section id="questions" className="bg-ivoire px-5 pt-32 sm:px-8 sm:pt-44">
      <DonneesStructurees donnees={schemaFaq(f.questions)} />
      <TitreSection surtitre={f.surtitre} titre={f.titre} signature={f.signature} />
      <div data-flou className="mx-auto mt-16 max-w-4xl sm:mt-20">
        <Questions questions={f.questions} />
      </div>
    </section>
  );
}
