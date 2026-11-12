import type { NextConfig } from "next";

/**
 * Corrige los CSS Modules del álbum y de la cortinilla.
 *
 * IMPORTANTE: no configurar una regla Turbopack `"*.css"` que renombre
 * los archivos como `"*.css"`; también coincide con `*.module.css`
 * y rompe el mapeo de clases (styles.titulo, styles.pantalla, etc.).
 *
 * Next.js ya admite CSS y CSS Modules de forma nativa en Turbopack.
 */
const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
