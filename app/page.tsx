import Link from "next/link";
import CompartirWhatsApp from "@/components/CompartirWhatsApp";
import { CIUDADES, CIFRAS, IMPACTO_EMPRESARIAL, SISMO } from "@/lib/datos";
import { formatearFecha } from "@/components/Fuentes";

export default function Home() {
  return (
    <div className="prosa">
      <h1 className="text-3xl font-bold leading-tight">
        Tu negocio no tiene que cerrar
      </h1>
      <p className="mt-3 text-lg text-neutral-800">
        Guía clara para comerciantes afectados por el terremoto del{" "}
        {formatearFecha(SISMO.fecha)}. Qué tienes que hacer primero, qué alivios
        existen y cómo pedirlos, sin letra pequeña.
      </p>
      <p className="mt-3 border-l-4 border-acento pl-3 text-neutral-700 italic">
        Cuando un negocio vuelve a latir, también vuelve a latir su comunidad.
      </p>

      <Link
        href="/censo"
        className="mt-6 block rounded-lg bg-acento p-5 text-white active:opacity-90"
      >
        <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
          Empieza por aquí
        </span>
        <span className="mt-1 block text-xl font-bold">
          Censa tu negocio →
        </span>
        <span className="mt-1 block text-sm opacity-95">
          Si no apareces en el censo, quedas fuera de todas las ayudas que
          vengan después. Es lo más urgente.
        </span>
      </Link>

      <h2 className="mt-8 text-2xl font-bold">Busca por tu ciudad</h2>
      <ul className="mt-3 grid grid-cols-2 gap-3">
        {CIUDADES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/ayudas/${c.slug}`}
              className="block rounded-lg border-2 border-neutral-300 px-4 py-3 font-semibold active:bg-neutral-100"
            >
              {c.nombre}
              <span className="block text-xs font-normal text-neutral-600">
                {c.departamento}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-2xl font-bold">Por qué existe este sitio</h2>
      <p className="mt-2">
        El terremoto de magnitud {SISMO.magnitud} del {formatearFecha(SISMO.fecha)},
        con epicentro en {SISMO.epicentro}, golpeó a{" "}
        <strong>{IMPACTO_EMPRESARIAL.empresas.toLocaleString("es-CO")} empresas</strong>{" "}
        en {IMPACTO_EMPRESARIAL.municipios} municipios. De ellas,{" "}
        {IMPACTO_EMPRESARIAL.microempresas.toLocaleString("es-CO")} son
        microempresas: el 93 %. Son{" "}
        {IMPACTO_EMPRESARIAL.empleos.toLocaleString("es-CO")} empleos formales en
        riesgo.
      </p>
      <p className="mt-3">
        Las ayudas existen y son muchas: alivios bancarios, alivios tributarios,
        líneas de crédito, subsidios. El problema es que están repartidas en
        comunicados de prensa, PDFs y noticias que caducan en dos días. Una
        panadería, un taller o un local de ropa no tienen abogado ni contador que
        les rastree a qué pueden acceder. Eso es lo que hacemos aquí.
      </p>

      <div className="mt-6 rounded-lg border border-neutral-300 bg-neutral-50 p-4 text-sm">
        <p className="font-semibold">Cifras oficiales</p>
        <p className="mt-1 text-neutral-800">
          A {formatearFecha(CIFRAS.fecha)}:{" "}
          {CIFRAS.fallecidos.toLocaleString("es-CO")} fallecidos,{" "}
          {CIFRAS.heridos.toLocaleString("es-CO")} heridos,{" "}
          {CIFRAS.desaparecidos.toLocaleString("es-CO")} desaparecidos y{" "}
          {CIFRAS.familiasAfectadas.toLocaleString("es-CO")} familias afectadas.
          Fuente: {CIFRAS.fuente}. Las cifras cambian a diario; verifica siempre
          el parte vigente de la UNGRD.
        </p>
      </div>

      <div className="mt-6">
        <CompartirWhatsApp texto="Si tu negocio resultó afectado por el terremoto, aquí está la guía de qué hacer y qué ayudas puedes pedir:" />
      </div>
    </div>
  );
}
