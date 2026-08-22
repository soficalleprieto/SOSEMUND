import type { Evento, Fuente } from "../tipos";
import {
  iniciativasColombia2026,
  verificadoresColombia2026,
} from "./colombia-terremoto-2026-iniciativas";
import { negociosColombia2026 } from "./colombia-terremoto-2026-negocios";
import { cuentasColombia2026 } from "./colombia-terremoto-2026-cuentas";

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

const BANCOLOMBIA_2026: Fuente = {
  medio: "La República",
  titulo:
    "Bancolombia anunció alivios, periodos de gracia y créditos a afectados por el terremoto",
  url: "https://www.larepublica.co/especiales/congreso-empresarial-colombiano-2026/bancolombia-anuncio-alivios-periodos-de-gracia-y-creditos-a-afectados-por-el-terremoto-4458407",
  fecha: "2026-08-13",
};

const BANCOLOMBIA_5B_2026: Fuente = {
  medio: "La República",
  titulo:
    "Bancolombia anunció opciones de financiación por $5 billones para afectados por el sismo",
  url: "https://www.larepublica.co/finanzas/bancolombia-anuncio-opciones-de-financiacion-por-5-billones-para-afectados-por-el-sismo-4463115",
  fecha: "2026-08-20",
};

const MANIZALES_CENSO_2026: Fuente = {
  medio: "BC Noticias",
  titulo: "Cámara de Comercio activa ruta de apoyo para empresarios afectados por el sismo en Caldas",
  url: "https://www.bcnoticias.com.co/camara-de-comercio-activa-ruta-de-apoyo-para-empresarios-afectados-por-el-sismo-en-caldas/",
  fecha: "2026-08-14",
};

const ARMENIA_CENSO_2026: Fuente = {
  medio: "Cámara de Comercio de Armenia y del Quindío",
  titulo: "Reactivar para resistir: una hoja de ruta para el Quindío",
  url: "https://camaraarmenia.org.co/reactivar-para-resistir-una-hoja-de-ruta-para-el-quindio/",
  fecha: "2026-08-20",
};

const FEDEMUNICIPIOS_2026: Fuente = {
  medio: "Pulzo",
  titulo: "Emergencia por terremoto en Colombia: Fedemunicipios pide flexibilizar recursos y alivios tributarios",
  url: "https://www.pulzo.com/nacion/emergencia-por-terremoto-en-colombia-fedemunicipios-pide-flexibilizar-recursos-y-alivios-tributarios-PP5274333A",
  fecha: "2026-08-13",
};

const NU_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Nu Colombia anunció alivios y nuevas medidas para sus clientes en las zonas afectadas por el terremoto",
  url: "https://www.infobae.com/colombia/2026/08/20/nu-colombia-anuncio-alivios-y-nuevas-medidas-para-sus-clientes-en-las-zonas-afectadas-por-el-terremoto-de-que-trata/",
  fecha: "2026-08-20",
};

const BANCO_AGRARIO_2026: Fuente = {
  medio: "Tintiando",
  titulo:
    "Banco Agrario reintegrará comisiones cobradas a clientes de oficinas afectadas por el sismo",
  url: "https://www.tintiando.com/2026/08/14/banco-agrario-reintegrara-comisiones-cobradas-a-clientes-de-oficinas-afectadas-por-el-sismo/",
  fecha: "2026-08-14",
};

const DIAN_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Gobierno aplaza la declaración de renta a personas naturales y otros plazos tributarios en zonas afectadas por el terremoto de 7,4",
  url: "https://www.eltiempo.com/economia/finanzas-personales/gobierno-aplaza-la-declaracion-de-renta-a-personas-naturales-y-otros-plazos-tributarios-en-zonas-afectadas-por-el-terremoto-de-7-4-esto-debe-saber-3577799",
  fecha: "2026-08-12",
};

const BANCO_MUNDIAL_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "El Banco Mundial ya desembolsó los US$200 millones del crédito al que Colombia accedió para atender el terremoto",
  url: "https://www.eltiempo.com/economia/sectores/el-banco-mundial-ya-desembolso-los-us-200-millones-del-credito-al-que-colombia-accedio-para-atender-el-terremoto-3578269",
  fecha: "2026-08-13",
};

const STARLINK_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Starlink gratis en Colombia tras el terremoto: hasta qué fecha aplica y cómo solicitarlo",
  url: "https://www.infobae.com/tecno/2026/08/13/starlink-gratis-en-colombia-tras-el-terremoto-hasta-que-fecha-aplica-y-como-solicitarlo/",
  fecha: "2026-08-13",
};

const CLARO_TIGO_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Operadores móviles anunciaron minutos ilimitados y plan de datos gratis para usuarios en zonas afectadas por el terremoto en Colombia",
  url: "https://www.infobae.com/colombia/2026/08/11/operadores-moviles-anunciaron-minutos-ilimitados-y-plan-de-datos-gratis-para-usuarios-en-zonas-afectadas-por-el-terremoto-en-colombia/",
  fecha: "2026-08-11",
};

const ASEGURADORAS_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Aseguradoras activan sus líneas de atención tras el terremoto: consulte aquí cómo reportar un siniestro",
  url: "https://www.eltiempo.com/economia/finanzas-personales/aseguradoras-activan-sus-lineas-de-atencion-tras-el-terremoto-consulte-aqui-como-reportar-un-siniestro-3577951",
  fecha: "2026-08-12",
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
    fuenteUrl:
      "https://www.diariolibre.com/mundo/america-latina/2026/08/12/aumenta-la-cantidad-de-muertos-en-colombia-tras-terremoto/3627378",
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
        fuente: CCC,
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
      censo: {
        verificado: true,
        detalle:
          "La Cámara de Comercio de Manizales por Caldas activó una ruta de apoyo para empresarios afectados por el sismo, que cubre Manizales y el resto de municipios de su jurisdicción (18 en total). Escríbeles por WhatsApp para resolver dudas y reportar tu situación.",
        telefonos: ["323 942 1880"],
        fuente: MANIZALES_CENSO_2026,
      },
    },
    {
      slug: "armenia",
      tipo: "capital",
      nombre: "Armenia",
      division: "Quindío",
      alertaMaxima: true,
      censo: {
        verificado: true,
        detalle:
          "La Cámara de Comercio de Armenia y del Quindío hizo visitas negocio por negocio (cerca de 2.000 encuestadas) y atiende dudas y reportes de comerciantes afectados por WhatsApp y correo.",
        telefonos: ["318 349 9804"],
        fuente: ARMENIA_CENSO_2026,
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
      censo: {
        verificado: true,
        detalle:
          "Lo cubre la Cámara de Comercio de Armenia y del Quindío, que por su propio nombre atiende a todo el departamento, no solo a la capital. Mismo WhatsApp que Armenia.",
        telefonos: ["318 349 9804"],
        fuente: ARMENIA_CENSO_2026,
      },
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
  cuentas: cuentasColombia2026,
  negocios: negociosColombia2026,
  ayudas: [
    {
      slug: "alivios-bancarios",
      titulo: "Alivios bancarios: hasta 12 meses de gracia",
      resumen:
        "Los bancos anunciaron períodos de gracia, cambios en las condiciones de los créditos y suspensión temporal de los cobros.",
      detalle:
        "El sector bancario anunció un paquete de alivios para personas y empresas de las zonas afectadas que podría beneficiar a cerca de 2,8 millones de usuarios: períodos de gracia de hasta un año, cambios en las condiciones de los créditos y suspensión temporal de los cobros. No suele ser automático: hay que pedirlo al banco.\n\nLo que ya está concretado banco por banco:\n\nBancolombia pasó de la promesa genérica de mediados de agosto a cifras concretas: dispuso más de $5 billones en financiación para personas, empresas y entidades territoriales de Chocó, Risaralda, Caldas, Quindío, Valle del Cauca, suroeste antioqueño, Cauca y Tolima. Créditos de vivienda al 8% efectivo anual (unas 7.000 familias) y de consumo o microcrédito al 10%, para desembolsos desde el 25 de agosto; una línea aparte para hasta 13.500 empresas y entidades territoriales.\n\nNu Colombia anunció retiros ilimitados sin comisión en cajeros y avances de tarjeta de crédito sin comisión para clientes en zonas afectadas, más una refinanciación (hasta 48 meses, tasas reducidas) que a fecha 20/08/2026 seguía en desarrollo.\n\nBanco Agrario devuelve las comisiones cobradas por retiros, depósitos y pago de cheques a los clientes cuya oficina habitual sigue cerrada por la emergencia, con efecto retroactivo desde el 10 de agosto; la devolución empezó el 18 de agosto.\n\nBanco de Bogotá y Davivienda cerraron oficinas presenciales en las zonas más golpeadas y mantienen atención por teléfono, WhatsApp y banca virtual, pero no hemos encontrado un anuncio propio de alivios de crédito más allá del marco general del gremio. BBVA, a fecha 20/08/2026, seguía «analizando» bajar tasas para damnificados, sin nada confirmado todavía.",
      pendiente:
        "No hemos encontrado el canal exacto de solicitud (línea, formulario, requisitos) en Banco de Bogotá, BBVA, Davivienda, Banco Popular, Banco de Occidente, AV Villas ni Scotiabank Colpatria. La instrucción que dan, por ahora, es «contacta a tu banco por los canales habituales y pide que evalúen tu caso».",
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
        BANCOLOMBIA_2026,
        BANCOLOMBIA_5B_2026,
        NU_2026,
        BANCO_AGRARIO_2026,
      ],
    },
    {
      slug: "alivios-tributarios",
      titulo: "Alivios tributarios",
      resumen:
        "El Gobierno activó medidas tributarias para los afectados por el terremoto.",
      detalle:
        "La DIAN confirmó aplazamientos de plazos —no condonación del impuesto— para personas y agentes con domicilio fiscal en las seccionales de Cali, Palmira, Tuluá, Buenaventura, Pereira, Armenia, Manizales, Quibdó y Popayán: la declaración de renta 2025 de personas naturales se corre a la ventana del 27 de octubre al 13 de noviembre de 2026 (según los dos últimos dígitos del NIT); la retención en la fuente de julio se puede presentar y pagar con los plazos de agosto, sin sanción ni interés moratorio; y los trámites aduaneros quedan suspendidos entre el 10 de agosto y el 10 de septiembre de 2026 en esas seccionales. Excluye a los grandes contribuyentes. Conserva toda la documentación de tus pérdidas: es lo que te van a pedir para acreditar la condición de afectado.",
      pendiente:
        "No hemos encontrado ningún decreto de alcaldía que exonere o aplace el ICA o el predial en Cali, Pereira, Manizales, Armenia o Quibdó por este terremoto. Lo que hay, a fecha 20/08/2026, es una petición de Fedemunicipios (la federación de municipios) para que las alcaldías puedan dar ese alivio de ICA y predial hasta por dos períodos fiscales, con el Gobierno nacional compensando a los municipios el dinero que dejarían de recibir. Es una propuesta, no una medida aprobada. Lo seguimos verificando.",
      fuentes: [
        {
          medio: "El Colombiano",
          titulo:
            "¿Fue afectado por el terremoto? Conozca los alivios tributarios y bancarios y cómo acceder a ellos",
          url: "https://www.elcolombiano.com/negocios/terremoto-colombia-alivios-bancarios-tributarios-MD39904697",
          fecha: "2026-08-13",
        },
        DIAN_2026,
        FEDEMUNICIPIOS_2026,
      ],
    },
    {
      slug: "credito-y-reactivacion",
      titulo: "Crédito y reactivación económica",
      resumen:
        "Fenalco, MinComercio y Bancóldex trabajan en un paquete para evitar el cierre definitivo de establecimientos.",
      detalle:
        "Fenalco presentó al Gobierno una propuesta integral con medidas de atención inmediata, alivio financiero y reactivación económica, con el objetivo declarado de evitar el cierre definitivo de establecimientos, proteger los empleos y recuperar la actividad productiva. En la reunión participaron el presidente de Bancóldex, Manuel Fernández Ariza, el Fondo Nacional de Garantías e INNpulsa. El Banco Mundial ya desembolsó US$200 millones de una línea de crédito escalable que podría ampliarse hasta US$450 millones, destinada a la respuesta de emergencia y a sentar las bases de la reconstrucción.",
      pendiente:
        "Todavía no hay una línea de crédito específica para negocios afectados con tasa, monto y requisitos publicados por Bancóldex, Finagro o el Fondo Nacional de Garantías. El Ministerio de Comercio anunció un «Plan de Reconstrucción y Reactivación Económica» que no se había publicado formalmente al cierre de esta verificación (17/08/2026). En cuanto haya algo concreto, lo publicamos.",
      fuentes: [
        {
          medio: "El Heraldo",
          titulo:
            "Fenalco articula acciones con Mincomercio para comerciantes afectados por terremoto",
          url: "https://www.elheraldo.co/economia/2026/08/13/fenalco-articula-acciones-con-mincomercio-para-comerciantes-afectados-por-terremoto/",
          fecha: "2026-08-13",
        },
        BANCO_MUNDIAL_2026,
      ],
    },
    {
      slug: "beneficios-privados",
      titulo: "Internet, datos móviles y seguros: lo que ofrecen las empresas privadas",
      resumen:
        "Starlink, Claro, Tigo y las aseguradoras activaron beneficios propios para los afectados, algunos automáticos y otros que hay que pedir.",
      detalle:
        "Starlink ofrece el servicio gratis hasta el 12 de septiembre de 2026 en Chocó, Valle del Cauca, Risaralda, Caldas y Quindío. Si ya tenías el servicio activo el día del sismo, el crédito se aplica solo, sin trámite. Si lo habías cancelado, contacta al soporte de Starlink para reactivarlo. Si eres nuevo, compra el kit (antena y router) en la web oficial o en un distribuidor autorizado, contrata un plan y luego contacta al soporte para pedir la activación gratuita antes de esa fecha. Si el sismo te dañó el equipo, también puedes pedir el reemplazo gratis por soporte técnico.\n\nClaro dio 2 GB de datos y minutos y SMS ilimitados durante 7 días a sus clientes prepago en Chocó, Valle del Cauca, Risaralda, Quindío y Caldas, activado automáticamente desde el 11 de agosto. Tigo dio 2 GB gratis durante 3 días a sus clientes prepago en las mismas cinco zonas, también automático, sin trámite.\n\nSi tienes seguro y tu negocio o vivienda sufrió daños, puedes reportarlo directamente: Seguros Bolívar por WhatsApp 322 332 2322 o la línea #322 (opción 0); Sura por WhatsApp 315 275 7888, la línea #888 o la emergencia 01 8000 415 215. Sura aclaró que los damnificados tienen dos años para reclamar, no 72 horas como se ha dicho por ahí.",
      pendiente:
        "No hemos confirmado el canal exacto de contacto de las demás aseguradoras desplegadas (Allianz, Axa Colpatria, Aseguradora Solidaria, BBVA Seguros, Colmena, Chubb, HDI, La Equidad, La Previsora, Mapfre, Seguros del Estado y Zurich), ni la cantidad y duración exacta del beneficio de datos gratis de WOM.",
      fuentes: [STARLINK_2026, CLARO_TIGO_2026, ASEGURADORAS_2026],
    },
  ],
};
