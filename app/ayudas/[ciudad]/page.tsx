import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CompartirWhatsApp from "@/components/CompartirWhatsApp";
import Fuentes from "@/components/Fuentes";
import { CIUDADES, getCiudad } from "@/lib/datos";
import { AYUDAS_NACIONALES } from "@/lib/ayudas";

type Props = { params: Promise<{ ciudad: string }> };

export function generateStaticParams() {
  return CIUDADES.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) return {};
  return {
    title: `Ayudas para negocios afectados por el terremoto en ${c.nombre}`,
    description: `Qué puede pedir un comerciante de ${c.nombre} tras el terremoto: cómo censarse, alivios bancarios, alivios tributarios y líneas de crédito. Con fuente y fecha.`,
    alternates: { canonical: `/ayudas/${c.slug}` },
  };
}

export default async function CiudadPage({ params }: Props) {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) notFound();

  return (
    <article className="prosa">
      <h1 className="text-3xl font-bold leading-tight">
        Ayudas para negocios en {c.nombre}
      </h1>
      <p className="mt-2 text-neutral-700">
        {c.departamento}
        {c.alertaRoja && " · Estuvo en alerta roja tras el sismo"}
      </p>
      {c.contexto && <p className="mt-3">{c.contexto}</p>}

      {/* El censo va primero en todas las páginas: es lo que desbloquea el resto. */}
      <section className="mt-6 rounded-lg border-2 border-acento bg-emerald-50 p-4">
        <h2 className="text-xl font-bold">Primero: cénsate</h2>
        <p className="mt-1">{c.censoNegocios.detalle}</p>
        {c.censoNegocios.telefonos && (
          <p className="mt-3">
            <span className="font-semibold">Líneas de atención: </span>
            {c.censoNegocios.telefonos.map((t, i) => (
              <span key={t}>
                {i > 0 && " · "}
                <a
                  href={`tel:${t.replace(/\s/g, "")}`}
                  className="font-semibold text-acento"
                >
                  {t}
                </a>
              </span>
            ))}
          </p>
        )}
        <p className="mt-3">
          <Link href="/censo" className="font-semibold text-acento">
            Ver el paso a paso completo del censo →
          </Link>
        </p>
      </section>

      <h2 className="mt-8 text-2xl font-bold">Qué puedes pedir</h2>
      <div className="mt-4 space-y-6">
        {AYUDAS_NACIONALES.map((a) => (
          <section key={a.slug} className="rounded-lg border border-neutral-300 p-4">
            <h3 className="text-xl font-bold">{a.titulo}</h3>
            <p className="mt-1 font-medium text-neutral-800">{a.resumen}</p>
            <p className="mt-2">{a.detalle}</p>
            {a.pendiente && (
              <p className="mt-3 rounded border border-amber-400 bg-amber-50 p-2 text-sm">
                <strong>En verificación.</strong> {a.pendiente}
              </p>
            )}
            <Fuentes fuentes={a.fuentes} />
          </section>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold">Otras ciudades</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {CIUDADES.filter((o) => o.slug !== c.slug).map((o) => (
          <li key={o.slug}>
            <Link
              href={`/ayudas/${o.slug}`}
              className="inline-block rounded-lg border-2 border-neutral-300 px-4 py-2 font-semibold active:bg-neutral-100"
            >
              {o.nombre}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <CompartirWhatsApp
          texto={`Ayudas para negocios afectados por el terremoto en ${c.nombre}: cómo censarte y qué puedes pedir.`}
        />
      </div>
    </article>
  );
}
