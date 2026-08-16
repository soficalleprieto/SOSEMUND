import type { Evento, Fuente } from "../tipos";
import {
  iniciativasColombia2026,
  verificadoresColombia2026,
} from "./colombia-terremoto-2026-iniciativas";
import { negociosColombia2026 } from "./colombia-terremoto-2026-negocios";

const CENSO_CALI: Fuente = {
  medio: "Semana",
  titulo:
    "Alcalde de Cali anunció cómo se hará el censo a las familias afectadas por el terremoto",
  url: "https://www.semana.com/nacion/cali/articulo/alcalde-de-cali-anuncio-como-se-hara-el-censo-a-las-familias-afectadas-por-el-terremoto-del-10-de-agosto/202627/",
  fecha: "2026-08-12",
};

const CCC: Fuente = {
  medio: "El País (Cali)",
  titulo:
    "Cámara de Comercio de Cali activa plataforma para identificar impacto del terremoto en las empresas",
  url: "https://www.elpais.com.co/economia/camara-de-comercio-de-cali-activa-plataforma-para-identificar-impacto-del-terremoto-en-las-empresas-1317.html",
  fecha: "2026-08-12",
};

const GUIA_GOB: Fuente = {
  medio: "Infobae",
  titulo:
    "Guía para damnificados: dónde y cómo solicitar las ayudas del Gobierno tras el terremoto",
  url: "https://www.infobae.com/colombia/2026/08/13/guia-para-damnificados-donde-y-como-solicitar-las-ayudas-del-gobierno-tras-el-terremoto/",
  fecha: "2026-08-13",
};

/** Texto compartido por las ciudades cuyo canal para negocios aún no verificamos. */
const PENDIENTE =
  "Hay módulos de registro habilitados en la alcaldía y el coliseo municipal. Estamos verificando el canal específico para negocios.";

export const colombiaTerremoto2026: Evento = {
  slug: "terremoto-2026",
  nombre: "el terremoto del 10 de agosto de 2026",
  nombreCorto: "Terremoto de agosto de 2026",
  resumen:
    "Un sismo de magnitud 7,4 con epicentro en el Chocó golpeó cinco capitales del occidente colombiano y dejó a cientos de miles de negocios al borde del cierre.",
  fecha: "2026-08-10",
  detalles: [
    { etiqueta: "Magnitud", valor: "7,4" },
    { etiqueta: "Epicentro", valor: "San José del Palmar, Chocó" },
    { etiqueta: "Profundidad", valor: "103 km" },
  ],
  cifras: {
    fecha: "2026-08-12",
    fuente: "Declaración presidencial con datos de la UNGRD",
    lineas: [
      { etiqueta: "fallecidos", valor: 265 },
      { etiqueta: "heridos", valor: 3494 },
      { etiqueta: "desaparecidos", valor: 496 },
      { etiqueta: "familias afectadas", valor: 25872 },
    ],
    aviso:
      "Las cifras cambian a diario; verifica siempre el parte vigente de la UNGRD.",
  },
  impacto: {
    empresas: 269786,
    microempresas: 250628,
    empleos: 1396020,
    ambito:
      "127 municipios de Chocó, Quindío, Valle del Cauca, Risaralda y Caldas",
    fuente: {
      medio: "La FM",
      titulo: "Terremoto afectaría a 269.786 empresas: Cámara de Comercio",
      url: "https://www.lafm.com.co/economia/terremoto-colombia-empresas-empleos-afectados-terremoto-camara-comercio-advierten-407819",
      fecha: "2026-08-13",
    },
  },
  registro: {
    nombre: "Registro Único de Damnificados",
    siglas: "RUD",
    fuentes: [GUIA_GOB, CENSO_CALI],
    pasos: [
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
    ],
  },
  alertas: [
    {
      titulo:
        "Cuidado con las estafas: no existe un enlace para censarte como damnificado en Cali",
      cuerpo:
        "El alcalde de Cali, Alejandro Eder, anunció que el censo a las familias afectadas se hace en persona, casa por casa y en formatos físicos, con personal debidamente identificado de la Alcaldía y en jornadas anunciadas previamente. No hay códigos QR, ni líneas telefónicas, ni plataformas digitales para ese censo. Si te llega un enlace, un QR o una llamada pidiéndote datos para «registrarte como damnificado», desconfía.",
      matiz:
        "Ojo al matiz: eso aplica al censo de familias. Para los negocios, la Cámara de Comercio de Cali sí habilitó una herramienta digital y unas líneas telefónicas, que verás más abajo.",
      fuentes: [CENSO_CALI, CCC],
    },
  ],
  puntosRegistro:
    "Hay Puestos de Mando Unificado (PMU) regionales en Quibdó, Cali, Armenia y Bogotá, y módulos de registro habilitados en alcaldías y coliseos municipales, incluyendo Buenaventura, Pereira y Manizales.",
  localidades: [
    {
      slug: "cali",
      tipo: "capital",
      nombre: "Cali",
      division: "Valle del Cauca",
      alertaMaxima: true,
      contexto:
        "La Secretaría de Desarrollo Económico lleva censadas 1.219 unidades productivas con algún nivel de daño.",
      censo: {
        verificado: true,
        detalle:
          "La Cámara de Comercio de Cali activó una herramienta digital para recoger datos de daños en establecimientos, infraestructura, inventarios, equipos y operación. Según su presidenta, María del Mar Palau, el censo empresarial incluye a todos los negocios, estén o no registrados en la cámara.",
        telefonos: ["602 886 1300", "300 913 1811"],
      },
    },
    {
      slug: "pereira",
      tipo: "capital",
      nombre: "Pereira",
      division: "Risaralda",
      alertaMaxima: true,
      contexto:
        "La Cámara de Comercio censó 1.552 unidades comerciales solo en la zona del Parque de la Libertad.",
      censo: {
        verificado: false,
        detalle:
          "Hay módulos de registro habilitados en la alcaldía y el coliseo municipal. La Cámara de Comercio de Pereira ya realizó un censo en la zona del Parque de la Libertad. Estamos verificando el canal abierto para el resto de la ciudad.",
      },
    },
    {
      slug: "manizales",
      tipo: "capital",
      nombre: "Manizales",
      division: "Caldas",
      alertaMaxima: true,
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "armenia",
      tipo: "capital",
      nombre: "Armenia",
      division: "Quindío",
      alertaMaxima: true,
      censo: {
        verificado: false,
        detalle:
          "Armenia cuenta con un Puesto de Mando Unificado (PMU) regional, además de los módulos de registro en la alcaldía y el coliseo municipal. Estamos verificando el canal específico para negocios.",
      },
    },
    {
      slug: "quibdo",
      tipo: "capital",
      nombre: "Quibdó",
      division: "Chocó",
      alertaMaxima: true,
      contexto: "Es la capital más cercana al epicentro del sismo.",
      censo: {
        verificado: false,
        detalle:
          "Quibdó cuenta con un Puesto de Mando Unificado (PMU) regional, además de los módulos de registro en la alcaldía y el coliseo municipal. Estamos verificando el canal específico para negocios.",
      },
    },

    /* Municipios pequeños. Las capitales salen en la prensa; estos no, y aquí
       está buena parte del tejido de microempresas. */

    {
      slug: "san-jose-del-palmar",
      tipo: "municipio",
      nombre: "San José del Palmar",
      division: "Chocó",
      alertaMaxima: true,
      contexto:
        "Es el epicentro del sismo. Un municipio de unos 5.800 habitantes que quedó aislado por completo: derrumbes en las vías, cortes prolongados de luz, el acueducto colapsado y más de 400 viviendas dañadas, con al menos 20 edificaciones destruidas.",
      fuente: {
        medio: "Infobae",
        titulo:
          "Este es San José del Palmar, el aislado pueblo del Chocó que fue el epicentro del terremoto de 7,4 en Colombia",
        url: "https://www.infobae.com/colombia/2026/08/13/este-es-san-jose-del-palmar-el-aislado-pueblo-del-choco-que-fue-el-epicentro-del-terremoto-de-74-en-colombia/",
        fecha: "2026-08-13",
      },
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "sipi",
      tipo: "municipio",
      nombre: "Sipí",
      division: "Chocó",
      contexto:
        "Reportado como uno de los dos municipios más afectados del Chocó, junto con San José del Palmar.",
      fuente: {
        medio: "Wikipedia",
        titulo: "Terremoto de Colombia de 2026",
        url: "https://es.wikipedia.org/wiki/Terremoto_de_Colombia_de_2026",
        fecha: "2026-08-13",
      },
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "dosquebradas",
      tipo: "municipio",
      nombre: "Dosquebradas",
      division: "Risaralda",
      contexto:
        "El municipio está evaluando daños en sus centros educativos: una institución sufrió el colapso de muros y cubierta.",
      fuente: {
        medio: "El Diario",
        titulo: "Dosquebradas evalúa daños en colegios por sismo",
        url: "https://www.eldiario.com.co/actualidad/755331/",
        fecha: "2026-08-13",
      },
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "santa-rosa-de-cabal",
      tipo: "municipio",
      nombre: "Santa Rosa de Cabal",
      division: "Risaralda",
      contexto:
        "Cerca de 1.900 personas resultaron desplazadas y al menos 20 edificaciones están en riesgo de demolición por posibles colapsos.",
      fuente: {
        medio: "Wikipedia",
        titulo: "Terremoto de Colombia de 2026",
        url: "https://es.wikipedia.org/wiki/Terremoto_de_Colombia_de_2026",
        fecha: "2026-08-13",
      },
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "quimbaya",
      tipo: "municipio",
      nombre: "Quimbaya",
      division: "Quindío",
      contexto:
        "Registró la mayor proporción de daño en vivienda de todo el departamento del Quindío.",
      fuente: {
        medio: "Wikipedia",
        titulo: "Terremoto de Colombia de 2026",
        url: "https://es.wikipedia.org/wiki/Terremoto_de_Colombia_de_2026",
        fecha: "2026-08-13",
      },
      censo: { verificado: false, detalle: PENDIENTE },
    },
    {
      slug: "buenaventura",
      tipo: "municipio",
      nombre: "Buenaventura",
      division: "Valle del Cauca",
      contexto:
        "Tiene módulos de registro de damnificados habilitados, según la guía oficial para afectados.",
      fuente: GUIA_GOB,
      censo: { verificado: false, detalle: PENDIENTE },
    },
  ],
  iniciativas: iniciativasColombia2026,
  verificadores: verificadoresColombia2026,
  negocios: negociosColombia2026,
  ayudas: [
    {
      slug: "alivios-bancarios",
      titulo: "Alivios bancarios: hasta 12 meses de gracia",
      resumen:
        "Los bancos anunciaron períodos de gracia, cambios en las condiciones de los créditos y suspensión temporal de los cobros.",
      detalle:
        "El sector bancario anunció un paquete de alivios para personas y empresas de las zonas afectadas que podría beneficiar a cerca de 2,8 millones de usuarios. Las medidas incluyen períodos de gracia de hasta un año, modificación de las condiciones de los créditos y suspensión temporal de los procesos de cobro. No es automático: en general hay que solicitarlo al banco y acreditar que estás en la zona afectada.",
      pendiente:
        "Cada banco tiene requisitos y plazos propios. Estamos verificando banco por banco para publicar el detalle y el canal de solicitud de cada uno.",
      fuentes: [
        {
          medio: "Semana",
          titulo:
            "Bancos anuncian alivios de hasta 12 meses para damnificados por el terremoto",
          url: "https://www.semana.com/economia/macroeconomia/articulo/bancos-anuncian-alivios-de-hasta-12-meses-para-damnificados-por-el-terremoto/202615/",
          fecha: "2026-08-12",
        },
        {
          medio: "El País",
          titulo:
            "Bancos en Colombia ofrecen alivios a los damnificados: ¿cómo solicitarlos?",
          url: "https://www.elpais.com.co/economia/bancos-en-colombia-ofrecen-alivios-a-los-damnificados-por-el-terremoto-como-solicitarlos-1344.html",
          fecha: "2026-08-12",
        },
      ],
    },
    {
      slug: "alivios-tributarios",
      titulo: "Alivios tributarios",
      resumen:
        "El Gobierno activó medidas tributarias para los afectados por el terremoto.",
      detalle:
        "Tras declarar el desastre de carácter nacional, el Gobierno activó medidas tributarias junto con recursos del Fondo Nacional de Gestión del Riesgo de Desastres y subsidios de arrendamiento. Conserva toda la documentación de tus pérdidas: es lo que te van a pedir para acreditar la condición de afectado.",
      pendiente:
        "Estamos verificando qué impuestos concretos se aplazan o condonan, con qué plazos, y qué corresponde a la DIAN frente a los impuestos municipales (ICA y predial) de cada ciudad.",
      fuentes: [
        {
          medio: "El Colombiano",
          titulo:
            "¿Fue afectado por el terremoto? Conozca los alivios tributarios y bancarios y cómo acceder a ellos",
          url: "https://www.elcolombiano.com/negocios/terremoto-colombia-alivios-bancarios-tributarios-MD39904697",
          fecha: "2026-08-13",
        },
      ],
    },
    {
      slug: "credito-y-reactivacion",
      titulo: "Crédito y reactivación económica",
      resumen:
        "Fenalco, MinComercio y Bancóldex trabajan en un paquete para evitar el cierre definitivo de establecimientos.",
      detalle:
        "Fenalco presentó al Gobierno una propuesta integral con medidas de atención inmediata, alivio financiero y reactivación económica, con el objetivo declarado de evitar el cierre definitivo de establecimientos, proteger los empleos y recuperar la actividad productiva. En la reunión participó el presidente de Bancóldex, Manuel Fernández Ariza. El Gobierno además solicitó un crédito de 450 millones de dólares al Banco Mundial.",
      pendiente:
        "Todavía no hay líneas de crédito con condiciones publicadas. En cuanto Bancóldex abra una línea específica para afectados, publicamos requisitos y cómo solicitarla.",
      fuentes: [
        {
          medio: "El Heraldo",
          titulo:
            "Fenalco articula acciones con Mincomercio para comerciantes afectados por terremoto",
          url: "https://www.elheraldo.co/economia/2026/08/13/fenalco-articula-acciones-con-mincomercio-para-comerciantes-afectados-por-terremoto/",
          fecha: "2026-08-13",
        },
      ],
    },
  ],
};
