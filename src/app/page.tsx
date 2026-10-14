import { APropos } from "@/components/accueil/a-propos";
import { Approche } from "@/components/accueil/approche";
import { Avis } from "@/components/accueil/avis";
import { Citation } from "@/components/accueil/citation";
import { Contact } from "@/components/accueil/contact";
import { Destinations } from "@/components/accueil/destinations";
import { Faq } from "@/components/accueil/faq";
import { Services } from "@/components/accueil/services";
import { VideoDefilement } from "@/components/accueil/video-defilement";

export default function Accueil() {
  return (
    <main>
      <VideoDefilement />
      <APropos />
      <Services />
      <Destinations />
      <Approche />
      <Avis />
      <Citation />
      <Faq />
      <Contact />
    </main>
  );
}
