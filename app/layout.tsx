import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ACTUALIZADO } from "@/lib/datos";
import { formatearFecha } from "@/components/Fuentes";

export const metadata: Metadata = {
  metadataBase: new URL("https://minegociosigue.co"),
  title: {
    default: "Mi Negocio Sigue — ayudas para negocios afectados por el terremoto",
    template: "%s | Mi Negocio Sigue",
  },
  description:
    "Guía clara para comerciantes afectados por el terremoto del 10 de agosto en Colombia: cómo censarte, qué alivios existen y cómo pedirlos. Cali, Pereira, Manizales, Armenia y Quibdó.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Mi Negocio Sigue",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body>
        <header className="border-b border-neutral-300">
          <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-acento">
              Mi Negocio Sigue
            </Link>
            <Link href="/censo" className="text-sm font-semibold underline">
              Censarme
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-2xl px-4 py-6">{children}</main>

        <footer className="mt-12 border-t border-neutral-300 bg-neutral-50">
          <div className="prosa mx-auto max-w-2xl px-4 py-6 text-sm text-neutral-700">
            <p className="font-semibold text-foreground">
              Esto no es un canal oficial.
            </p>
            <p className="mt-1">
              Somos una iniciativa ciudadana independiente. No recogemos datos
              personales, no gestionamos ayudas y no recaudamos dinero.
              Organizamos información pública y te enviamos al canal oficial que
              corresponde. En una emergencia, llama al{" "}
              <strong>123</strong>.
            </p>
            <p className="mt-3 text-neutral-600">
              Última actualización: {formatearFecha(ACTUALIZADO)}.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
