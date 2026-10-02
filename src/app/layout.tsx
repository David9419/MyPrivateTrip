import type { Metadata, Viewport } from "next";
import { Allura, Montserrat, Playfair_Display } from "next/font/google";
import { BoutonWhatsapp } from "@/components/bouton-whatsapp";
import { DefilementDoux } from "@/components/defilement-doux";
import { EnTete } from "@/components/en-tete";
import { PiedDePage } from "@/components/pied-de-page";
import { site } from "@/contenu/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: site.titre,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#102D42",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${montserrat.variable} ${allura.variable} antialiased`}
    >
      <body>
        <DefilementDoux />
        <EnTete />
        {children}
        <PiedDePage />
        <BoutonWhatsapp />
      </body>
    </html>
  );
}
