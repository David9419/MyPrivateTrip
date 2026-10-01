"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/contenu/site";
import {
  DIMENSIONS,
  NOMBRE_IMAGES,
  cheminImage,
  ordreDeChargement,
  type FormatVideo,
} from "@/lib/video";

const textes = site.video;

// Passage en douceur de 0 à 1 entre a et b.
function transition(a: number, b: number, x: number) {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
}

// Écran plus haut que large (téléphone) → images au format téléphone.
function formatEcran(): FormatVideo {
  return window.innerWidth / window.innerHeight < 0.9 ? "mobile" : "ordi";
}

export function VideoDefilement() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const voileClairRef = useRef<HTMLDivElement>(null);
  const voileSombreRef = useRef<HTMLDivElement>(null);
  const barreRef = useRef<HTMLDivElement>(null);
  const descendreRef = useRef<HTMLDivElement>(null);
  const etapesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [format, setFormat] = useState<FormatVideo | null>(null);
  const [charge, setCharge] = useState(0);

  // Choix du format selon l'écran (et si on tourne le téléphone).
  useEffect(() => {
    const choisir = () => setFormat(formatEcran());
    choisir();
    window.addEventListener("resize", choisir);
    return () => window.removeEventListener("resize", choisir);
  }, []);

  useEffect(() => {
    if (!format) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const images: (HTMLImageElement | null)[] = new Array(NOMBRE_IMAGES).fill(null);
    let annule = false;
    let nbChargees = 0;

    // Chargement progressif des images, 6 à la fois.
    const file = ordreDeChargement(NOMBRE_IMAGES);
    const suivante = () => {
      const index = file.shift();
      if (index === undefined || annule) return;
      const img = new window.Image();
      img.decoding = "async";
      img.src = cheminImage(format, index);
      img.onload = () => {
        if (annule) return;
        images[index] = img;
        nbChargees++;
        if (nbChargees % 6 === 0 || nbChargees === NOMBRE_IMAGES) {
          setCharge(nbChargees / NOMBRE_IMAGES);
        }
        derniereDessinee = -1; // redessiner avec une image peut-être plus précise
        suivante();
      };
      img.onerror = suivante;
    };
    for (let i = 0; i < 6; i++) suivante();

    // Image disponible la plus proche de celle demandée.
    const plusProche = (index: number) => {
      for (let d = 0; d < NOMBRE_IMAGES; d++) {
        if (images[index - d]) return images[index - d];
        if (images[index + d]) return images[index + d];
      }
      return null;
    };

    let largeur = 0;
    let hauteur = 0;
    const redimensionner = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      largeur = canvas.clientWidth * ratio;
      hauteur = canvas.clientHeight * ratio;
      canvas.width = largeur;
      canvas.height = hauteur;
      derniereDessinee = -1;
    };

    // Dessine l'image en « plein écran » (comme object-fit: cover).
    const dessiner = (img: HTMLImageElement) => {
      const { largeur: il, hauteur: ih } = DIMENSIONS[format];
      const echelle = Math.max(largeur / il, hauteur / ih);
      const l = il * echelle;
      const h = ih * echelle;
      ctx.drawImage(img, (largeur - l) / 2, (hauteur - h) / 2, l, h);
    };

    const reduireMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cible = 0;
    let affiche = 0;
    let derniereDessinee = -1;
    let derniereImage: HTMLImageElement | null = null;
    let id = 0;

    const boucle = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const parcours = rect.height - window.innerHeight;
        cible = Math.min(Math.max(-rect.top / parcours, 0), 1);

        // Mouvement amorti : la vidéo « glisse » vers la bonne image.
        affiche = reduireMouvement ? cible : affiche + (cible - affiche) * 0.14;
        if (Math.abs(cible - affiche) < 0.0005) affiche = cible;
        const p = affiche;

        const index = Math.round(p * (NOMBRE_IMAGES - 1));
        const img = plusProche(index);
        if (img && (index !== derniereDessinee || img !== derniereImage)) {
          dessiner(img);
          derniereDessinee = index;
          derniereImage = img;
        }

        // Au début, la vidéo montre des plans blancs : voile clair + logo en couleur.
        // Ensuite, voile sombre pour que le texte blanc se lise bien.
        const sombre = transition(0.14, 0.24, p);
        voileClairRef.current!.style.opacity = String(0.55 * (1 - sombre));
        voileSombreRef.current!.style.opacity = String(sombre);
        const horsVideo = rect.bottom < 90;
        document.documentElement.style.setProperty("--sombre", horsVideo ? "0" : String(sombre));

        // Léger zoom arrière pendant la descente : effet de profondeur.
        canvas.style.transform = `scale(${1.08 - 0.08 * p})`;

        barreRef.current!.style.transform = `scaleY(${p})`;
        descendreRef.current!.style.opacity = String(1 - transition(0.01, 0.06, p));

        textes.etapes.forEach((etape, i) => {
          const el = etapesRef.current[i];
          if (!el) return;
          const fondu = 0.05;
          const entree = etape.debut <= 0 ? 1 : transition(etape.debut, etape.debut + fondu, p);
          const sortie = etape.fin > 1 ? 0 : transition(etape.fin - fondu, etape.fin, p);
          const v = entree * (1 - sortie);
          const decalage = (1 - entree) * 50 - sortie * 50;
          el.style.opacity = String(v);
          el.style.transform = `translate3d(0, ${decalage}px, 0) scale(${0.96 + 0.04 * v})`;
          el.style.filter = v > 0.99 ? "none" : `blur(${(1 - v) * 10}px)`;
          el.style.visibility = v < 0.01 ? "hidden" : "visible";
          el.style.pointerEvents = v > 0.6 ? "auto" : "none";
        });
      }
      id = requestAnimationFrame(boucle);
    };

    redimensionner();
    window.addEventListener("resize", redimensionner);
    id = requestAnimationFrame(boucle);

    return () => {
      annule = true;
      cancelAnimationFrame(id);
      window.removeEventListener("resize", redimensionner);
    };
  }, [format]);

  return (
    <section ref={sectionRef} className="relative h-[650svh]" aria-label={site.nom}>
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-ivoire">
        {/* Première image affichée tout de suite, avant que le reste charge */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cheminImage(format ?? "ordi", 0)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full origin-center will-change-transform" />

        <div ref={voileClairRef} className="absolute inset-0 bg-ivoire" style={{ opacity: 0.55 }} />
        <div
          ref={voileSombreRef}
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,45,66,.55) 0%, rgba(16,45,66,.15) 35%, rgba(16,45,66,.25) 60%, rgba(16,45,66,.9) 100%), radial-gradient(ellipse 60% 45% at center, rgba(16,45,66,.45) 0%, transparent 100%), radial-gradient(ellipse at center, transparent 40%, rgba(16,45,66,.45) 100%)",
          }}
        />

        {/* Textes qui apparaissent pendant la descente */}
        {textes.etapes.map((etape, i) => (
          <div
            key={i}
            ref={(el) => {
              etapesRef.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center px-6 will-change-transform"
            style={i === 0 ? undefined : { opacity: 0, visibility: "hidden" }}
          >
            {etape.type === "logo" && (
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/logo.png"
                  alt={site.nom}
                  width={1400}
                  height={618}
                  priority
                  className="h-auto w-[min(82vw,640px)] drop-shadow-[0_2px_30px_rgba(250,249,245,.9)]"
                />
                <div className="mt-10 flex flex-col items-center gap-2 text-[11px] font-medium tracking-[0.42em] text-nuit uppercase sm:text-sm">
                  {etape.lignes.map((ligne) => (
                    <span key={ligne}>{ligne}</span>
                  ))}
                </div>
                <span className="mt-5 h-px w-16 bg-sable" />
              </div>
            )}

            {etape.type === "titre" && (
              <div className="max-w-3xl text-center text-ivoire [text-shadow:0_2px_24px_rgba(16,45,66,.55)]">
                <p className="mb-6 text-[11px] font-semibold tracking-[0.45em] text-sable uppercase [text-shadow:0_1px_12px_rgba(16,45,66,.9)] sm:text-xs">
                  {etape.surtitre}
                </p>
                <h2 className="font-titre text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
                  {etape.titre}
                </h2>
                <p className="-mt-1 font-signature text-5xl text-ciel sm:text-7xl lg:text-8xl">
                  {etape.signature}
                </p>
                <span className="mx-auto mt-6 block h-px w-20 bg-sable" />
                <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ivoire/85 sm:text-base">
                  {etape.texte}
                </p>
              </div>
            )}

            {etape.type === "final" && (
              <div className="flex max-w-3xl flex-col items-center text-center text-ivoire [text-shadow:0_2px_24px_rgba(16,45,66,.55)]">
                <p className="font-signature text-4xl text-ciel sm:text-6xl">{etape.signature}</p>
                <h2 className="mt-4 font-titre text-4xl leading-tight sm:text-6xl lg:text-7xl">
                  {etape.titre}
                </h2>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {etape.boutons.map((bouton) => (
                    <a
                      key={bouton.texte}
                      href={bouton.lien}
                      className={
                        bouton.style === "plein"
                          ? "group inline-flex items-center justify-center gap-3 rounded-full bg-ivoire px-8 py-4 text-sm font-medium tracking-wide text-nuit transition hover:bg-sable hover:text-ivoire"
                          : "group inline-flex items-center justify-center gap-3 rounded-full border border-ivoire/70 px-8 py-4 text-sm font-medium tracking-wide text-ivoire backdrop-blur-sm transition hover:border-sable hover:bg-ivoire/10"
                      }
                    >
                      {bouton.texte}
                      <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Barre de progression dorée sur le côté */}
        <div className="absolute end-5 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-ivoire/25 sm:block">
          <div ref={barreRef} className="h-full w-full origin-top scale-y-0 bg-sable" />
        </div>

        {/* « Descendez » */}
        <div
          ref={descendreRef}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 text-nuit"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase">{textes.descendre}</span>
          <span className="anim-respire block h-10 w-px bg-gradient-to-b from-nuit to-transparent" />
        </div>

        {/* Chargement de la vidéo */}
        <div
          className="absolute inset-x-0 top-0 h-0.5 origin-left bg-sable transition-opacity duration-700"
          style={{ transform: `scaleX(${charge})`, opacity: charge >= 1 ? 0 : 1 }}
          aria-label={textes.chargement}
        />
      </div>
    </section>
  );
}
