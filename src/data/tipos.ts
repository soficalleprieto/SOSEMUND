/**
 * Modelo de datos del sitio.
 *
 * Negocios que Laten no es un sitio sobre el terremoto de Colombia: es un sitio
 * sobre negocios afectados por catástrofes, que ahora mismo cubre el terremoto
 * de Colombia. Por eso todo cuelga de País → Evento → Ciudad, y NADA específico
 * de una emergencia se escribe en las plantillas: solo aquí.
 *
 * Regla de oro: nada se afirma sin fuente y fecha. Lo que no esté verificado se
 * marca como pendiente en vez de rellenarse a ojo.
 */

export type Fuente = {
  medio: string;
  titulo: string;
  url: string;
  /** ISO: "2026-08-12" */
  fecha: string;
};

export type Ciudad = {
  slug: string;
  nombre: string;
  /** Departamento, provincia, región… lo que aplique en ese país. */
  division: string;
  alertaMaxima: boolean;
  /** Cómo se censa a los NEGOCIOS en esta ciudad. */
  censo: {
    verificado: boolean;
    detalle: string;
    telefonos?: string[];
  };
  contexto?: string;
};

export type Ayuda = {
  slug: string;
  titulo: string;
  resumen: string;
  /** Lo que se sabe con certeza, siempre atribuido. */
  detalle: string;
  /** Lo que aún no sabemos. La honestidad es parte del producto. */
  pendiente?: string;
  fuentes: Fuente[];
};

export type Paso = { titulo: string; texto: string };

export type Evento = {
  slug: string;
  /** Nombre completo, para titulares: "el terremoto del 10 de agosto de 2026". */
  nombre: string;
  /** Nombre corto, para migas y enlaces: "Terremoto de agosto de 2026". */
  nombreCorto: string;
  /** Una línea que sitúa la catástrofe. */
  resumen: string;
  fecha: string;
  /** Datos del suceso: magnitud, epicentro, lo que aplique. */
  detalles: { etiqueta: string; valor: string }[];
  /** Cifras oficiales de víctimas. Cambian a diario: siempre con fecha. */
  cifras?: {
    fecha: string;
    fuente: string;
    lineas: { etiqueta: string; valor: number }[];
    aviso: string;
  };
  /** Impacto sobre el tejido empresarial: es nuestro asunto. */
  impacto: {
    empresas: number;
    microempresas: number;
    empleos: number;
    ambito: string;
    fuente: Fuente;
  };
  /** Nombre del registro oficial de damnificados en ese país. */
  registro: { nombre: string; siglas: string; pasos: Paso[]; fuentes: Fuente[] };
  /** Avisos antifraude u otros que deban destacarse en la página del censo. */
  alertas: { titulo: string; cuerpo: string; matiz?: string; fuentes: Fuente[] }[];
  puntosRegistro?: string;
  ciudades: Ciudad[];
  ayudas: Ayuda[];
};

export type Pais = {
  slug: string;
  nombre: string;
  eventos: Evento[];
};
