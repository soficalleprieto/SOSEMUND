import type { Fuente } from "@/lib/datos";

function formatearFecha(iso: string) {
  const [a, m, d] = iso.split("-");
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${a}`;
}

/**
 * Toda afirmación del sitio lleva fuente y fecha. Es contenido sensible: un
 * comerciante puede tomar una decisión financiera con lo que lea aquí.
 */
export default function Fuentes({ fuentes }: { fuentes: Fuente[] }) {
  if (!fuentes.length) return null;
  return (
    <div className="prosa mt-6 rounded-lg border border-neutral-300 bg-neutral-50 p-4 text-sm">
      <p className="mb-2 font-semibold">Fuentes de esta información</p>
      <ul className="space-y-1.5">
        {fuentes.map((f) => (
          <li key={f.url}>
            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-acento"
            >
              {f.medio}: {f.titulo}
            </a>{" "}
            <span className="text-neutral-600">
              — publicado el {formatearFecha(f.fecha)}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-neutral-600">
        Verifica siempre en el canal oficial antes de tomar una decisión. Las
        condiciones y los plazos cambian a diario.
      </p>
    </div>
  );
}

export { formatearFecha };
