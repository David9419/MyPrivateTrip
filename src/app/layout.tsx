import type { Metadata, Viewport } from "next";
import { Allura, Montserrat, Playfair_Display } from "next/font/google";
import { BoutonWhatsapp } from "@/components/bouton-whatsapp";
import { DefilementDoux } from "@/components/defilement-doux";
import { DonneesStructurees, schemaAgence } from "@/components/donnees-structurees";
import { EnTete } from "@/components/en-tete";
import { FlouDefilement } from "@/components/flou-defilement";
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
  metadataBase: new URL(site.url),
  title: { default: site.titre, template: `%s | ${site.titreCourt}` },
  description: site.description,
  keywords: [...site.motsCles],
  applicationName: site.nom,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.nom,
    title: site.titre,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.titre, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102D42",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} ${allura.variable} antialiased`}
    >
      <body suppressHydrationWarning>
        <DonneesStructurees donnees={schemaAgence()} />
        <DefilementDoux />
        <FlouDefilement />
        <div className="site">
          <EnTete />
          {children}
          <PiedDePage />
        </div>
        <BoutonWhatsapp />
      </body>
    </html>
  );
}
