const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/** "2026-08-10" -> "10 de agosto de 2026" */
export function formatearFecha(iso: string) {
  const [a, m, d] = iso.split("-");
  return `${Number(d)} de ${MESES[Number(m) - 1]} de ${a}`;
}
