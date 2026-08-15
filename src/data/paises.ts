import type { Pais } from "./tipos";
import { colombiaTerremoto2026 } from "./eventos/colombia-terremoto-2026";

export const ACTUALIZADO = "2026-08-13";

export const PAISES: Pais[] = [
  {
    slug: "colombia",
    nombre: "Colombia",
    eventos: [colombiaTerremoto2026],
  },
];

export function getPais(slug: string) {
  return PAISES.find((p) => p.slug === slug);
}

export function getEvento(paisSlug: string, eventoSlug: string) {
  return getPais(paisSlug)?.eventos.find((e) => e.slug === eventoSlug);
}

/** Todos los pares país+evento, para generar rutas. */
export function todosLosEventos() {
  return PAISES.flatMap((pais) => pais.eventos.map((evento) => ({ pais, evento })));
}

/** Todas las combinaciones país+evento+localidad, para generar rutas. */
export function todasLasLocalidades() {
  return todosLosEventos().flatMap(({ pais, evento }) =>
    evento.localidades.map((localidad) => ({ pais, evento, localidad })),
  );
}

export const rutaEvento = (paisSlug: string, eventoSlug: string) =>
  `/${paisSlug}/${eventoSlug}`;
