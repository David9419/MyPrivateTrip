import { Approche } from "@/components/accueil/approche";
import { Citation } from "@/components/accueil/citation";
import { Contact } from "@/components/accueil/contact";
import { Manifeste } from "@/components/accueil/manifeste";
import { Services } from "@/components/accueil/services";
import { VideoDefilement } from "@/components/accueil/video-defilement";
import { EnTete } from "@/components/en-tete";
import { PiedDePage } from "@/components/pied-de-page";

export default function Accueil() {
  return (
    <>
      <EnTete />
      <main>
        <VideoDefilement />
        <Manifeste />
        <Services />
        <Approche />
        <Citation />
        <Contact />
      </main>
      <PiedDePage />
    </>
  );
}
