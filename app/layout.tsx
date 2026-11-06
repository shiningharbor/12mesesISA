import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuestro pequeño infinito ♡ | Patito & Leoncita",
  description: "Un álbum interactivo de doce meses, hecho con amor de Patito y Papatín para Leoncita y Bronquitas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
