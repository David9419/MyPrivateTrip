import Image from "next/image";
import { site } from "@/contenu/site";

// En-tête fixe. Le logo passe de la version couleur à la version claire
// selon la variable --sombre (réglée par la vidéo).
export function EnTete() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#" className="pointer-events-auto relative block h-14 w-[128px] sm:h-[72px] sm:w-[164px]" aria-label={site.nom}>
          <Image
            src="/images/logo.png"
            alt={site.nom}
            fill
            sizes="164px"
            className="object-contain transition-opacity duration-500"
            style={{ opacity: "calc(1 - var(--sombre, 0))" }}
            priority
          />
          <Image
            src="/images/logo-blanc.png"
            alt=""
            fill
            sizes="164px"
            className="object-contain transition-opacity duration-500"
            style={{ opacity: "var(--sombre, 0)" }}
            priority
          />
        </a>
        <a
          href="#contact"
          className="pointer-events-auto rounded-full border border-current px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase backdrop-blur-sm transition-colors duration-500 hover:bg-sable hover:border-sable hover:text-ivoire"
          style={{ color: "color-mix(in srgb, var(--color-ivoire) calc(var(--sombre, 0) * 100%), var(--color-nuit))" }}
        >
          {site.entete.contact}
        </a>
      </div>
    </header>
  );
}
