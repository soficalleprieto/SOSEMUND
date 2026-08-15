import type { Fuente } from "./datos";

export type Ayuda = {
  slug: string;
  titulo: string;
  resumen: string;
  /** Qué se sabe con certeza, siempre atribuido. */
  detalle: string;
  /** Qué NO sabemos todavía. La honestidad es parte del producto. */
  pendiente?: string;
  fuentes: Fuente[];
};

/**
 * Ayudas de alcance nacional. Se muestran en todos los hubs de ciudad.
 * Lo municipal (ICA, predial, programas de alcaldía) se añade por ciudad
 * a medida que lo verificamos.
 */
export const AYUDAS_NACIONALES: Ayuda[] = [
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
        titulo: "Bancos anuncian alivios de hasta 12 meses para damnificados por el terremoto",
        url: "https://www.semana.com/economia/macroeconomia/articulo/bancos-anuncian-alivios-de-hasta-12-meses-para-damnificados-por-el-terremoto/202615/",
        fecha: "2026-08-12",
      },
      {
        medio: "El País",
        titulo: "Bancos en Colombia ofrecen alivios a los damnificados: ¿cómo solicitarlos?",
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
        titulo: "¿Fue afectado por el terremoto? Conozca los alivios tributarios y bancarios y cómo acceder a ellos",
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
        titulo: "Fenalco articula acciones con Mincomercio para comerciantes afectados por terremoto",
        url: "https://www.elheraldo.co/economia/2026/08/13/fenalco-articula-acciones-con-mincomercio-para-comerciantes-afectados-por-terremoto/",
        fecha: "2026-08-13",
      },
    ],
  },
];
