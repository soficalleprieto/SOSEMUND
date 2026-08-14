import type { Metadata } from "next";
import Link from "next/link";
import CompartirWhatsApp from "@/components/CompartirWhatsApp";
import Fuentes from "@/components/Fuentes";
import {
  CIUDADES,
  PASOS_RUD,
  FUENTES_RUD,
  FUENTE_CENSO_CALI,
  FUENTE_CCC,
} from "@/lib/datos";

export const metadata: Metadata = {
  title: "Cómo censar tu negocio afectado por el terremoto",
  description:
    "Si tu negocio resultó afectado por el terremoto y no te censas, quedas fuera de las ayudas que vengan después. Te explicamos cómo hacerlo, paso a paso y por ciudad.",
  alternates: { canonical: "/censo" },
};

export default function CensoPage() {
  return (
    <article className="prosa">
      <h1 className="text-3xl font-bold leading-tight">
        Cómo censar tu negocio afectado por el terremoto
      </h1>

      <div className="mt-5 rounded-lg border-2 border-acento bg-emerald-50 p-4">
        <p className="font-bold">Si no te censas, quedas fuera.</p>
        <p className="mt-1">
          Los alivios, créditos y subsidios que se anuncien en las próximas
          semanas se van a repartir a partir de los censos que se están
          levantando <strong>ahora mismo</strong>. Un negocio que no aparezca en
          el registro tendrá muy difícil acceder después, por mucho que haya
          perdido. Es el trámite más urgente que tienes.
        </p>
      </div>

      <div className="mt-5 rounded-lg border-2 border-alerta bg-red-50 p-4">
        <p className="font-bold text-alerta">
          Cuidado con las estafas: no existe un enlace para censarte como
          damnificado en Cali
        </p>
        <p className="mt-1">
          El alcalde de Cali, Alejandro Eder, anunció que el censo a las familias
          afectadas se hace <strong>en persona, casa por casa y en formatos
          físicos</strong>, con personal debidamente identificado de la Alcaldía
          y en jornadas anunciadas previamente.{" "}
          <strong>
            No hay códigos QR, ni líneas telefónicas, ni plataformas digitales
            para ese censo.
          </strong>{" "}
          Si te llega un enlace, un QR o una llamada pidiéndote datos para
          &laquo;registrarte como damnificado&raquo;, desconfía.
        </p>
        <p className="mt-2 text-sm">
          Ojo al matiz: eso aplica al censo de <em>familias</em>. Para los{" "}
          <em>negocios</em>, la Cámara de Comercio de Cali sí habilitó una
          herramienta digital y unas líneas telefónicas, que verás más abajo.
        </p>
      </div>

      <h2 className="mt-8 text-2xl font-bold">
        Paso a paso: el Registro Único de Damnificados (RUD)
      </h2>
      <p className="mt-2">
        Es el mecanismo nacional. Estos son los pasos según la guía publicada
        para damnificados:
      </p>
      <ol className="mt-4 space-y-4">
        {PASOS_RUD.map((paso, i) => (
          <li key={paso.titulo} className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-acento font-bold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold">{paso.titulo}</p>
              <p className="text-neutral-800">{paso.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 rounded-lg border border-neutral-300 bg-neutral-50 p-4">
        <p className="font-semibold">Dónde están los puntos de registro</p>
        <p className="mt-1">
          Hay Puestos de Mando Unificado (PMU) regionales en{" "}
          <strong>Quibdó, Cali, Armenia y Bogotá</strong>, y módulos de registro
          habilitados en alcaldías y coliseos municipales, incluyendo{" "}
          <strong>Buenaventura, Pereira y Manizales</strong>.
        </p>
      </div>

      <h2 className="mt-8 text-2xl font-bold">Cómo censar tu negocio, ciudad por ciudad</h2>
      <div className="mt-4 space-y-4">
        {CIUDADES.map((c) => (
          <section
            key={c.slug}
            className="rounded-lg border border-neutral-300 p-4"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold">{c.nombre}</h3>
              <span className="text-sm text-neutral-600">{c.departamento}</span>
            </div>

            {c.contexto && (
              <p className="mt-1 text-sm text-neutral-700">{c.contexto}</p>
            )}

            <p className="mt-2">{c.censoNegocios.detalle}</p>

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

            {!c.censoNegocios.verificado && (
              <p className="mt-3 rounded border border-amber-400 bg-amber-50 p-2 text-sm">
                <strong>Dato por confirmar.</strong> Estamos verificando el canal
                oficial para negocios en {c.nombre}. Si lo conoces,{" "}
                escríbenos y lo publicamos citando la fuente.
              </p>
            )}

            <p className="mt-3 text-sm">
              <Link href={`/ayudas/${c.slug}`} className="font-semibold text-acento">
                Ver todas las ayudas en {c.nombre} →
              </Link>
            </p>
          </section>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold">Consejo: documenta todo hoy</h2>
      <p className="mt-2">
        Antes de limpiar, reparar o mover nada, toma fotos y videos de cómo
        quedó el local, el inventario y los equipos, con fecha visible si puedes.
        Guarda facturas de compra, contratos de arriendo y extractos. Ese
        material es lo que después sostiene tanto el censo como cualquier
        reclamación al seguro. Lo que no documentes ahora, no lo vas a poder
        demostrar en dos meses.
      </p>

      <Fuentes fuentes={[...FUENTES_RUD, FUENTE_CENSO_CALI, FUENTE_CCC]} />

      <div className="mt-6">
        <CompartirWhatsApp texto="Si tu negocio resultó afectado por el terremoto, CÉNSATE. Si no apareces en el censo, quedas fuera de las ayudas. Aquí está el paso a paso por ciudad:" />
      </div>
    </article>
  );
}
