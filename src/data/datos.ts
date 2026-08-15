/**
 * Datos del sitio.
 *
 * REGLA DE ORO: nada se afirma sin fuente y fecha. Si un dato no está
 * verificado, se marca como `porConfirmar` y se dice explícitamente en la
 * página. Nunca afirmamos derechos ("tienes derecho a X"), solo reportamos
 * lo que una fuente dijo y cuándo lo dijo.
 */

export type Fuente = {
  medio: string;
  titulo: string;
  url: string;
  fecha: string; // ISO
};

export type Ciudad = {
  slug: string;
  nombre: string;
  departamento: string;
  alertaRoja: boolean;
  /** Cómo se censa a los NEGOCIOS en esta ciudad. */
  censoNegocios: {
    verificado: boolean;
    canal: string;
    detalle: string;
    telefonos?: string[];
    fuentes: Fuente[];
  };
  /** Notas específicas de la ciudad (daños, zonas críticas). */
  contexto?: string;
};

export const ACTUALIZADO = "2026-08-13";

export const SISMO = {
  magnitud: "7,4",
  fecha: "2026-08-10",
  epicentro: "San José del Palmar, Chocó",
  profundidad: "103 km",
};

/** Cifras oficiales. Cambian a diario: siempre con fecha y fuente. */
export const CIFRAS = {
  fecha: "2026-08-12",
  fuente: "Declaración presidencial con datos de la UNGRD",
  fallecidos: 265,
  heridos: 3494,
  desaparecidos: 496,
  familiasAfectadas: 25872,
};

/** Impacto sobre el tejido empresarial. Fuente: Red de Cámaras de Comercio (RUES + PILA). */
export const IMPACTO_EMPRESARIAL = {
  empresas: 269786,
  microempresas: 250628,
  empleos: 1396020,
  municipios: 127,
  departamentos: ["Chocó", "Quindío", "Valle del Cauca", "Risaralda", "Caldas"],
  fuente: {
    medio: "La FM",
    titulo: "Terremoto afectaría a 269.786 empresas: Cámara de Comercio",
    url: "https://www.lafm.com.co/economia/terremoto-colombia-empresas-empleos-afectados-terremoto-camara-comercio-advierten-407819",
    fecha: "2026-08-13",
  } as Fuente,
};

const FUENTE_CENSO_CALI: Fuente = {
  medio: "Semana",
  titulo:
    "Alcalde de Cali anunció cómo se hará el censo a las familias afectadas por el terremoto",
  url: "https://www.semana.com/nacion/cali/articulo/alcalde-de-cali-anuncio-como-se-hara-el-censo-a-las-familias-afectadas-por-el-terremoto-del-10-de-agosto/202627/",
  fecha: "2026-08-12",
};

const FUENTE_CCC: Fuente = {
  medio: "El País (Cali)",
  titulo:
    "Cámara de Comercio de Cali activa plataforma para identificar impacto del terremoto en las empresas",
  url: "https://www.elpais.com.co/economia/camara-de-comercio-de-cali-activa-plataforma-para-identificar-impacto-del-terremoto-en-las-empresas-1317.html",
  fecha: "2026-08-12",
};

const FUENTE_GUIA_GOB: Fuente = {
  medio: "Infobae",
  titulo:
    "Guía para damnificados: dónde y cómo solicitar las ayudas del Gobierno tras el terremoto",
  url: "https://www.infobae.com/colombia/2026/08/13/guia-para-damnificados-donde-y-como-solicitar-las-ayudas-del-gobierno-tras-el-terremoto/",
  fecha: "2026-08-13",
};

const PENDIENTE = {
  verificado: false,
  canal: "Por confirmar",
  detalle:
    "Todavía no hemos podido verificar un canal específico para el censo de negocios en esta ciudad. Mientras tanto, el mecanismo nacional es el Registro Único de Damnificados (RUD) en los módulos habilitados en la alcaldía y el coliseo municipal. Consulta con tu cámara de comercio local.",
  fuentes: [FUENTE_GUIA_GOB],
};

export const CIUDADES: Ciudad[] = [
  {
    slug: "cali",
    nombre: "Cali",
    departamento: "Valle del Cauca",
    alertaRoja: true,
    contexto:
      "La Secretaría de Desarrollo Económico lleva censadas 1.219 unidades productivas con algún nivel de daño.",
    censoNegocios: {
      verificado: true,
      canal: "Plataforma digital de la Cámara de Comercio de Cali + líneas telefónicas",
      detalle:
        "La Cámara de Comercio de Cali activó una herramienta digital para recoger datos de daños en establecimientos, infraestructura, inventarios, equipos y operación. Según su presidenta, María del Mar Palau, el censo empresarial incluye a todos los negocios, estén o no registrados en la cámara.",
      telefonos: ["602 886 1300", "300 913 1811"],
      fuentes: [FUENTE_CCC],
    },
  },
  {
    slug: "pereira",
    nombre: "Pereira",
    departamento: "Risaralda",
    alertaRoja: true,
    contexto:
      "La Cámara de Comercio censó 1.552 unidades comerciales solo en la zona del Parque de la Libertad.",
    censoNegocios: {
      ...PENDIENTE,
      detalle:
        "Hay módulos de registro habilitados en la alcaldía y el coliseo municipal. La Cámara de Comercio de Pereira ya realizó un censo en la zona del Parque de la Libertad. Estamos verificando el canal abierto para el resto de la ciudad.",
    },
  },
  {
    slug: "manizales",
    nombre: "Manizales",
    departamento: "Caldas",
    alertaRoja: true,
    censoNegocios: { ...PENDIENTE },
  },
  {
    slug: "armenia",
    nombre: "Armenia",
    departamento: "Quindío",
    alertaRoja: true,
    censoNegocios: {
      ...PENDIENTE,
      detalle:
        "Armenia cuenta con un Puesto de Mando Unificado (PMU) regional, además de los módulos de registro en la alcaldía y el coliseo municipal. Estamos verificando el canal específico para negocios.",
    },
  },
  {
    slug: "quibdo",
    nombre: "Quibdó",
    departamento: "Chocó",
    alertaRoja: true,
    contexto: "Es la capital más cercana al epicentro del sismo.",
    censoNegocios: {
      ...PENDIENTE,
      detalle:
        "Quibdó cuenta con un Puesto de Mando Unificado (PMU) regional, además de los módulos de registro en la alcaldía y el coliseo municipal. Estamos verificando el canal específico para negocios.",
    },
  },
];

export function getCiudad(slug: string) {
  return CIUDADES.find((c) => c.slug === slug);
}

/** Pasos del Registro Único de Damnificados (RUD), mecanismo nacional. */
export const PASOS_RUD = [
  {
    titulo: "Pide la evaluación técnica",
    texto:
      "Solicita que Bomberos o la Cruz Roja evalúen técnicamente el inmueble. Sin esa evaluación el registro queda incompleto.",
  },
  {
    titulo: "Reúne tus documentos",
    texto:
      "Documento de identidad de quien hace el registro y, si los tienes, papeles del negocio: RUT, matrícula mercantil, contrato de arriendo, facturas de inventario.",
  },
  {
    titulo: "Ve al punto de atención",
    texto:
      "Acércate a los módulos de registro habilitados en la alcaldía o el coliseo municipal, o al Puesto de Mando Unificado (PMU) de tu zona.",
  },
  {
    titulo: "Detalla tus pérdidas materiales",
    texto:
      "Enumera todo: local, inventario, equipos, mobiliario, vehículos. Lo que no quede escrito en el registro es muy difícil de reclamar después.",
  },
  {
    titulo: "Guarda el comprobante y espera respuesta",
    texto:
      "Las autoridades deben responder en un máximo de 15 días hábiles, según la normativa vigente. Conserva el comprobante del registro.",
  },
];

export const FUENTES_RUD: Fuente[] = [FUENTE_GUIA_GOB, FUENTE_CENSO_CALI];

export { FUENTE_CENSO_CALI, FUENTE_CCC, FUENTE_GUIA_GOB };
