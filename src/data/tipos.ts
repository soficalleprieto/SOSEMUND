/**
 * Modelo de datos del sitio.
 *
 * Negocios que Laten no es un sitio sobre el terremoto de Colombia: es un sitio
 * sobre negocios afectados por catástrofes, que ahora mismo cubre el terremoto
 * de Colombia. Por eso todo cuelga de País → Evento → Localidad, y NADA
 * específico de una emergencia se escribe en las plantillas: solo aquí.
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

/**
 * Localidad, no «ciudad»: las capitales salen en la prensa, pero el 93 % del
 * tejido son microempresas y muchas están en municipios y corregimientos que
 * no nombra nadie. Si solo listamos capitales, repetimos el problema que
 * venimos a resolver.
 */
export type TipoLocalidad = "capital" | "municipio" | "corregimiento";

export type Localidad = {
  slug: string;
  nombre: string;
  tipo: TipoLocalidad;
  /** Departamento, provincia, región… lo que aplique en ese país. */
  division: string;
  alertaMaxima?: boolean;
  /** Cómo se censa a los NEGOCIOS aquí. */
  censo: {
    verificado: boolean;
    detalle: string;
    telefonos?: string[];
  };
  contexto?: string;
  /** Fuente de lo que afirmamos en `contexto`. Sin fuente no se afirma nada. */
  fuente?: Fuente;
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

export type CategoriaIniciativa =
  | "acopio"
  | "desaparecidos"
  | "urgente"
  | "danos"
  | "mascotas";

/**
 * Otra iniciativa ciudadana a la que derivamos. No copiamos sus datos: los
 * centros de acopio cambian cada hora y ellos los mantienen. Lo que les falta
 * es que se les encuentre.
 */
export type Iniciativa = {
  nombre: string;
  url: string;
  categoria: CategoriaIniciativa;
  /** Qué hace, en concreto. */
  que: string;
  /** A quién sirve. */
  para: string;
  /** Cobertura o cifras, si las tenemos verificadas. */
  alcance?: string;
  /** Observación honesta nuestra, incluidas las pegas. */
  nota?: string;
};

/** Medio de verificación que ha desmentido bulos de esta emergencia. */
export type Verificador = { nombre: string; url: string };

/* ------------------------------------------------------------------ *
 * Fichas de negocio
 * ------------------------------------------------------------------ */

export type Dano = "destruido" | "grave" | "leve" | "intacto" | "sin-datos";

export const ETIQUETA_DANO: Record<Dano, string> = {
  destruido: "Destruido",
  grave: "Daños graves",
  leve: "Daños leves",
  intacto: "Sin daños",
  "sin-datos": "Sin datos",
};

/**
 * Una ficha de negocio. Se publica SIEMPRE con consentimiento de quien lo
 * regenta y después de que una persona la revise: nada se publica solo.
 *
 * Dos cosas que no son negociables por seguridad:
 *
 * - `dondeEstaAhora` es dónde se le puede encontrar HOY, no la dirección del
 *   local vacío. Tras los derrumbes hubo saqueos; publicar «local destruido y
 *   sin vigilancia en tal calle» es señalar un objetivo.
 * - Los datos de cobro son del propio negocio y el dinero va directo. Nosotros
 *   no intermediamos, no recaudamos y no tocamos un peso.
 */
export type Negocio = {
  slug: string;
  /**
   * Ficha de muestra, no un negocio real. Se rotula como ejemplo en la propia
   * página, se excluye de los buscadores y no lleva datos de contacto que
   * puedan resolver en una cuenta de alguien. Inventar un negocio afectado y
   * presentarlo como real seria fabricar un registro sobre una catastrofe.
   */
  esEjemplo?: true;
  nombre: string;
  /** "Panadería", "Taller de motos", "Local de ropa"… */
  actividad: string;
  /** Slug de la localidad donde está. */
  localidad: string;
  /** Qué era este negocio, en sus palabras. Es lo que hace que alguien empatice. */
  historia: string;

  estado: {
    local: Dano;
    mercancia: Dano;
    equipos: Dano;
    /** Detalle en palabras de quien lo regenta. */
    detalle?: string;
  };

  /** Sigue operando de alguna forma (aunque sea a domicilio o en otro sitio). */
  operando: boolean;
  /** Dónde encontrarlo HOY. Nunca la dirección del local abandonado. */
  dondeEstaAhora?: string;

  /** Qué necesita exactamente. Concreto: «una vitrina», no «ayuda». */
  necesita: string[];

  contacto: {
    whatsapp?: string;
    telefono?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    web?: string;
    correo?: string;
  };

  /** Datos de cobro propios del negocio. El dinero va directo, sin pasar por aquí. */
  cobro?: { metodo: string; detalle: string }[];

  fotos?: { src: string; alt: string }[];
  /** Enlace al vídeo, no alojado por nosotros: pesa demasiado para 3G. */
  video?: { url: string; descripcion: string };

  /** Fecha en que una persona revisó y publicó la ficha. */
  revisadaEl: string;
  /** Registro de que quien regenta el negocio dio permiso para publicarla. */
  consentimiento: true;
};

export type Evento = {
  slug: string;
  /** Nombre completo, para titulares: "el terremoto del 10 de agosto de 2026". */
  nombre: string;
  /** Nombre corto, para migas y enlaces: "Terremoto de agosto de 2026". */
  nombreCorto: string;
  /** Una línea que sitúa la catástrofe. */
  resumen: string;
  fecha: string;
  detalles: { etiqueta: string; valor: string }[];
  cifras?: {
    fecha: string;
    fuente: string;
    lineas: { etiqueta: string; valor: number }[];
    aviso: string;
  };
  impacto: {
    empresas: number;
    microempresas: number;
    empleos: number;
    ambito: string;
    fuente: Fuente;
  };
  registro: { nombre: string; siglas: string; pasos: Paso[]; fuentes: Fuente[] };
  alertas: { titulo: string; cuerpo: string; matiz?: string; fuentes: Fuente[] }[];
  puntosRegistro?: string;
  localidades: Localidad[];
  ayudas: Ayuda[];
  /** Otras iniciativas ciudadanas a las que derivamos. */
  iniciativas: Iniciativa[];
  /** Verificadores que han desmentido bulos de esta emergencia. */
  verificadores: Verificador[];
  /** Fichas publicadas. Vacío hasta que lleguen negocios reales y revisados. */
  negocios: Negocio[];
};

export type Pais = {
  slug: string;
  nombre: string;
  eventos: Evento[];
};
