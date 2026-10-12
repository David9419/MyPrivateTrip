import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ne pas annoncer la technologie utilisée.
  poweredByHeader: false,
  // Photos servies au format le plus léger possible (AVIF, sinon WebP).
  images: { formats: ["image/avif", "image/webp"] },
  // En-têtes de sécurité, sur toutes les pages.
  async headers() {
    return [
      {
        source: "/:chemin*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
