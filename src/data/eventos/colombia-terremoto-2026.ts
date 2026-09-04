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

const ASOBANCARIA_2026: Fuente = {
  medio: "El Heraldo",
  titulo:
    "De la Espriella agradece a Asobancaria el programa de alivios para damnificadas por el terremoto",
  url: "https://www.elheraldo.co/colombia/2026/08/19/de-la-espriella-agradece-a-asobancaria-el-programa-de-alivios-para-damnificadas-por-el-terremoto/",
  fecha: "2026-08-19",
};

const MANIZALES_TRIBUTARIO_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Manizales amplió el calendario tributario por el terremoto: pagos de impuestos se extienden, pero embargos y cobros coactivos siguen",
  url: "https://www.infobae.com/colombia/2026/08/17/manizales-amplio-el-calendario-tributario-por-el-terremoto-pagos-de-impuestos-se-extienden-pero-embargos-y-cobros-coactivos-siguen/",
  fecha: "2026-08-17",
};

const DECRETO_EMERGENCIA_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Abelardo de la Espriella decretó la emergencia económica: qué efectos tendrá en los 15 departamentos afectados por el terremoto",
  url: "https://www.infobae.com/colombia/2026/08/20/abelardo-de-la-espriella-decreto-la-emergencia-economica-que-efectos-tendra-en-los-15-departamentos-afectados-por-el-terremoto/",
  fecha: "2026-08-20",
};

const PRESIDENCIA_EMERGENCIA_2026: Fuente = {
  medio: "Presidencia de la República",
  titulo:
    "Gobierno Nacional declaró oficialmente la emergencia económica, social y ecológica tras el terremoto del 10 de agosto",
  url: "https://www.presidencia.gov.co/prensa/Paginas/Gobierno-Nacional-declaro-oficialmente-la-emergencia-economica-social-260820.aspx",
  fecha: "2026-08-20",
};

const CALI_FONDO_REACTIVACION_2026: Fuente = {
  medio: "Occidente.co",
  titulo:
    "Cali prepara ayudas para negocios afectados por el sismo: fondo de $5.000 millones, microcréditos y alivios tributarios",
  url: "https://occidente.co/cali/cali-prepara-ayudas-para-negocios-afectados-por-el-sismo-fondo-de-5-000-millones-microcreditos-y-alivios-tributarios/",
  fecha: "2026-08-21",
};

const CENSO_UNICO_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "48 % de las empresas afectadas por el terremoto no puede operar, según primer censo de emergencia",
  url: "https://www.eltiempo.com/economia/empresas/48-de-las-empresas-afectadas-por-el-terremoto-no-puede-operar-segun-primer-censo-de-emergencia-3579678",
  fecha: "2026-08-19",
};

const TASAS_VIVIENDA_BANCOS_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Los bancos en Colombia le hacen caso a De la Espriella y empezaron a bajar la tasa para compra de vivienda ante el terremoto: así están",
  url: "https://www.infobae.com/colombia/2026/08/20/los-bancos-en-colombia-le-hacen-caso-a-de-la-espriella-y-empezaron-a-bajar-la-tasa-para-compra-de-vivienda-ante-el-terremoto-asi-estan/",
  fecha: "2026-08-20",
};

const DE_LA_ESPRIELLA_TASAS_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Abelardo de la Espriella celebró reducción de tasas de interés para vivienda en zonas afectadas y pidió extender la medida a todo el sector",
  url: "https://www.infobae.com/colombia/2026/08/22/abelardo-de-la-espriella-celebro-reduccion-de-tasas-de-interes-para-vivienda-en-zonas-afectadas-y-pidio-extender-la-medida-a-todo-el-sector/",
  fecha: "2026-08-22",
};

const GRUPO_AVAL_TASA_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Presidente Abelardo De La Espriella concretó con banqueros reducción de tasas de vivienda para damnificados por el terremoto",
  url: "https://www.eltiempo.com/politica/gobierno/presidente-abelardo-de-la-espriella-concreto-con-banqueros-reduccion-de-tasas-de-vivienda-para-damnificados-por-el-terremoto-3580341",
  fecha: "2026-08-23",
};

const CAMACOL_TASA_2026: Fuente = {
  medio: "El Heraldo",
  titulo:
    "Camacol celebra reducción de tasa de interés en créditos de vivienda para damnificados del terremoto",
  url: "https://www.elheraldo.co/economia/2026/08/23/camacol-celebra-reduccion-de-tasa-de-interes-en-creditos-de-vivienda-para-damnificados-del-terremoto/",
  fecha: "2026-08-23",
};

const GRUPO_AVAL_NEGOCIOS_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Grupo Aval anuncia periodos de gracia y descuentos en intereses a los afectados por el terremoto",
  url: "https://www.eltiempo.com/economia/sector-financiero/grupo-aval-anuncia-periodos-de-gracia-y-descuentos-en-intereses-a-los-afectados-por-el-terremoto-3580678",
  fecha: "2026-08-24",
};

const BANCO_OCCIDENTE_DESCUENTO_2026: Fuente = {
  medio: "El Colombiano",
  titulo:
    "Banco de Occidente reduce 50% los intereses en compras con tarjetas de créditos para afectados por terremoto",
  url: "https://www.elcolombiano.com/negocios/banco-de-occidente-baja-tasa-interes-terremoto-AH40219786",
  fecha: "2026-08-24",
};

const CALI_PLAZOS_TRIBUTARIOS_90MIN_2026: Fuente = {
  medio: "90 Minutos",
  titulo:
    "Cali amplía plazos para pagar impuestos tras el sismo del 10 de agosto: ojo a las fechas",
  url: "https://90minutos.co/cali/cali-amplia-plazos-para-pagar-impuestos-27-08-2026/",
  fecha: "2026-08-27",
};

const CALI_ALCALDIA_PLAZOS_2026: Fuente = {
  medio: "Alcaldía de Santiago de Cali",
  titulo:
    "¡Buenas noticias para la ciudad! Ampliamos el plazo para el pago del Predial 2026, ICA y estampillas",
  url: "https://intranet.cali.gov.co/2026/08/28/buenas-noticias-para-la-ciudad-ampliamos-el-plazo-para-el-pago-del-predial-2026-ica-y-estampillas/",
  fecha: "2026-08-28",
};

const ARMENIA_TRIBUTARIO_2026: Fuente = {
  medio: "Quindío 24 Horas",
  titulo:
    "Alcalde radicará en el Concejo paquete de alivios tributarios con reducción del 90 % en mora por impuestos",
  url: "https://www.quindio24horas.com/2026/08/21/alcalde-radicara-en-el-concejo-paquete-de-alivios-tributarios-con-reduccion-del-90-en-mora-por-impuestos/",
  fecha: "2026-08-21",
};

const FASECOLDA_DIRECTORIO_2026: Fuente = {
  medio: "Fasecolda",
  titulo: "Estamos con Colombia: líneas de atención del sector asegurador",
  url: "https://www.fasecolda.com/nosotros/estamos-con-colombia-lineas-de-atencion-del-sector-asegurador/",
  fecha: "2026-08-12",
};

const BAVARIA_2026: Fuente = {
  medio: "El Heraldo",
  titulo:
    "Bavaria anuncia inversión de $12.000 millones para apoyar recuperación de 3.500 negocios afectados por el terremoto",
  url: "https://www.elheraldo.co/colombia/2026/08/19/bavaria-anuncia-inversion-de-12000-millones-para-apoyar-recuperacion-de-3500-negocios-afectados-por-el-terremoto/",
  fecha: "2026-08-19",
};

const BAVARIA_ELTIEMPO_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Bavaria destina $12.000 millones para recuperar 3.500 pequeños negocios afectados por el terremoto",
  url: "https://www.eltiempo.com/economia/empresas/bavaria-destina-12-000-millones-para-recuperar-3-500-pequenos-negocios-afectados-por-el-terremoto-3579241",
  fecha: "2026-08-19",
};

const SUPERFINANCIERA_CIRCULAR_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "La Superfinanciera activó las 'Quejas exprés' para priorizar reclamos tras el sismo y anunció alivios temporales de crédito para los afectados",
  url: "https://www.infobae.com/colombia/2026/08/13/la-superfinanciera-activo-las-quejas-expres-para-priorizar-reclamos-tras-el-sismo-y-anuncio-alivios-temporales-de-credito-para-los-afectados/",
  fecha: "2026-08-13",
};

const FASECOLDA_PLAZOS_2026: Fuente = {
  medio: "Portafolio",
  titulo:
    "¿Su casa tiene seguro contra terremoto? Fasecolda aclara quién está protegido",
  url: "https://www.portafolio.co/economia/regiones/su-casa-tiene-seguro-contra-terremoto-fasecolda-aclara-quien-esta-protegido-500266",
  fecha: "2026-08-19",
};

const RECLAMACIONES_SEGUROS_2026: Fuente = {
  medio: "El País",
  titulo: "Empresas de seguros han recibido 36.415 reclamaciones tras el terremoto",
  url: "https://www.elpais.com.co/economia/empresas-de-seguros-han-recibido-36415-reclamaciones-tras-el-terremoto-cerca-de-la-mitad-son-del-valle-del-cauca-2401.html",
  fecha: "2026-08-21",
};

const CALI_PROYECTO_ACUERDO_100_2026: Fuente = {
  medio: "El País (Cali)",
  titulo:
    "Concejo de Cali instala sesiones extraordinarias y radica proyectos tras el terremoto: estas son las medidas para atender la emergencia",
  url: "https://www.elpais.com.co/cali/concejo-de-cali-instala-sesiones-extraordinarias-y-radica-proyectos-tras-el-terremoto-estas-son-las-medidas-para-atender-la-emergencia-2452.html",
  fecha: "2026-08-24",
};

const CALI_ALCALDIA_PROYECTOS_2026: Fuente = {
  medio: "Alcaldía de Santiago de Cali",
  titulo:
    "Alcaldía de Cali radicó ante el Concejo dos proyectos de acuerdo para avanzar en la reconstrucción de la ciudad tras el terremoto",
  url: "https://www.cali.gov.co/boletines/publicaciones/193927/alcaldia-de-cali-radico-ante-el-concejo-dos-proyectos-de-acuerdo-para-avanzar-en-la-reconstruccion-de-la-ciudad-tras-el-terremoto/",
  fecha: "2026-08-24",
};

const SUPERFINANCIERA_CIRCULAR_007_ELTIEMPO_2026: Fuente = {
  medio: "El Tiempo",
  titulo:
    "Superfinanciera ordena alivios para afectados por el terremoto: así podrán refinanciar sus créditos",
  url: "https://www.eltiempo.com/economia/sector-financiero/superfinanciera-ordena-alivios-para-afectados-por-el-terremoto-asi-podran-refinanciar-sus-creditos-3581364",
  fecha: "2026-08-26",
};

const SUPERFINANCIERA_CIRCULAR_007_INFOBAE_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Superfinanciera anuncia alivios para deudores afectados por el terremoto: estas son las medidas para créditos y seguros",
  url: "https://www.infobae.com/colombia/2026/08/27/superfinanciera-anuncia-alivios-para-deudores-afectados-por-el-terremoto-estas-son-las-medidas-para-creditos-y-seguros/",
  fecha: "2026-08-27",
};

const BBVA_PYME_AGRO_2026: Fuente = {
  medio: "Pulzo",
  titulo:
    "BBVA Colombia lanza alivios financieros para afectados por terremoto en Chocó, Caldas y Eje Cafetero",
  url: "https://www.pulzo.com/economia/bbva-colombia-lanza-alivios-financieros-para-afectados-por-terremoto-en-choco-caldas-y-eje-cafetero-PP5286200A",
  fecha: "2026-08-27",
};

const SUBSIDIO_NOMINA_2026: Fuente = {
  medio: "Infobae",
  titulo:
    "Gobierno subsidiará salarios para frenar despidos tras el terremoto: así funcionará la medida de emergencia",
  url: "https://www.infobae.com/colombia/2026/08/21/gobierno-subsidiara-salarios-para-frenar-despidos-tras-el-terremoto-asi-funcionara-la-medida-de-emergencia/",
  fecha: "2026-08-21",
};

const PEREIRA_VENDEDORES_PULZO_2026: Fuente = {
  medio: "Pulzo",
  titulo:
    "Alcaldía de Pereira habilita registro y anuncia ayudas económicas para afectados por el terremoto del 10 de agosto",
  url: "https://www.pulzo.com/nacion/ayudas-economicas-y-subsidios-en-pereira-como-registrarse-tras-el-terremoto-de-agosto-PP5276307A",
  fecha: "2026-08-16",
};

const PEREIRA_VENDEDORES_ELDIARIO_2026: Fuente = {
  medio: "El Diario",
  titulo:
    "Alcaldía dará subsidios de arriendo y $1 millón a vendedores afectados por terremoto en Pereira",
  url: "https://www.eldiario.com.co/actualidad/alcaldia-dara-subsidios-de-arriendo-y-1-millon-a-vendedores-afectados-por-terremoto-en-pereira/",
  fecha: "2026-08-16",
};

const PEREIRA_RESTAURANTES_PULZO_2026: Fuente = {
  medio: "Pulzo",
  titulo:
    "Pereira anuncia fondo de apoyo y plan de reactivación económica para restaurantes y bares afectados por el terremoto",
  url: "https://www.pulzo.com/economia/apoyo-economico-para-restaurantes-y-bares-de-pereira-tras-el-terremoto-requisitos-y-plan-de-reactivacion-PP5281538A",
  fecha: "2026-08-22",
};

const PEREIRA_RESTAURANTES_ELDIARIO_2026: Fuente = {
  medio: "El Diario",
  titulo:
    "Pereira destinará $500 millones para reactivar restaurantes, bares y entretenimiento tras el terremoto",
  url: "https://www.eldiario.com.co/noticias/risaralda/pereira/pereira-destinara-500-millones-para-reactivar-restaurantes-bares-y-entretenimiento-tras-el-terremoto/",
  fecha: "2026-08-22",
};

const MANIZALES_ARRIENDO_COMERCIANTES_2026: Fuente = {
  medio: "Alcaldía de Manizales",
  titulo: "Comerciantes afectados por el sismo podrán acceder a auxilio de arrendamiento",
  url: "https://centrodeinformacion.manizales.gov.co/comerciantes-afectados-por-el-sismo-podran-acceder-a-auxilio-de-arrendamiento/",
  fecha: "2026-08-17",
};

const MANIZALES_ARRIENDO_COMERCIANTES_BC_2026: Fuente = {
  medio: "BC Noticias",
  titulo: "Comerciantes afectados por el sismo en Manizales podrán recibir auxilio de arrendamiento",
  url: "https://www.bcnoticias.com.co/comerciantes-afectados-por-el-sismo-en-manizales-podran-recibir-auxilio-de-arrendamiento/",
  fecha: "2026-08-17",
};

const ARMENIA_FONDO_EMPRESARIAL_CCC_2026: Fuente = {
  medio: "Cámara de Comercio de Armenia y del Quindío",
  titulo:
    "Cámara de Comercio de Armenia y del Quindío, Comfenalco Quindío y Alcaldía de Armenia suman recursos y operación para empresas afectadas por el sismo",
  url: "https://camaraarmenia.org.co/camara-de-comercio-de-armenia-y-del-quindio-comfenalco-quindio-y-alcaldia-de-armenia-suman-recursos-y-operacion-para-empresas-afectadas-por-el-sismo/",
  fecha: "2026-09-01",
};

const ARMENIA_FONDO_EMPRESARIAL_Q24H_2026: Fuente = {
  medio: "Quindío 24 Horas",
  titulo: "Lanzan fondo de apoyo empresarial para reactivar negocios afectados por el sismo en el Quindío",
  url: "https://www.quindio24horas.com/2026/09/01/lanzan-fondo-de-apoyo-empresarial-para-reactivar-negocios-afectados-por-el-sismo-en-el-quindio/",
  fecha: "2026-09-01",
};

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
    fecha: "2026-08-20",
    fuente: "Balance oficial de la UNGRD, corte 6:30 a.m. del 20 de agosto",
    fuenteUrl:
      "https://www.larepublica.co/especiales/catastrofe-nacional/terremoto-ha-dejado-319-muertos-4-506-heridos-y-31-416-viviendas-danadas-4462815",
    lineas: [
      { etiqueta: "fallecidos", valor: 319 },
      { etiqueta: "heridos", valor: 4506 },
      { etiqueta: "desaparecidos", valor: 260 },
      { etiqueta: "familias afectadas", valor: 153336 },
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
    municipiosAfectados: 127,
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
  // Sin alertas de estafa activas: la única que hubo era sobre el censo de
  // FAMILIAS en Cali, fuera del alcance de este sitio (que es de negocios).
  alertas: [],
  puntosRegistro: {
    detalle:
      "Hay Puestos de Mando Unificado (PMU) regionales en Quibdó, Cali, Armenia y Bogotá, y módulos de registro habilitados en alcaldías y coliseos municipales, incluyendo Buenaventura, Pereira y Manizales.",
    fuente: GUIA_GOB,
  },
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
      ayudasPropias: [
        {
          slug: "cali-fondo-reactivacion",
          titulo: "Fondo municipal de reactivación y alivio tributario (radicados, sin aprobar)",
          resumen:
            "La Alcaldía prepara un fondo de $5.000 millones en aportes no reembolsables, más microcrédito, y ya radicó ante el Concejo un proyecto de acuerdo con exención de ICA y predial, todavía sin aprobar.",
          detalle:
            "La Alcaldía de Cali prepara su propio paquete municipal: un fondo proyectado en $5.000 millones para unidades productivas afectadas, pensado como aportes no reembolsables en especie (herramientas, maquinaria, equipos, insumos), más líneas de microcrédito con tasas diferenciales. La Alcaldía, junto con la Cámara de Comercio de Cali, ya caracterizó 1.493 unidades productivas en las zonas afectadas: el 89,2 % son microempresas.\n\nEl alivio tributario dio un paso concreto: el alcalde Alejandro Eder radicó el 24 de agosto de 2026 ante el Concejo, en sesiones extraordinarias, el Proyecto de Acuerdo 100, que plantea exención temporal de ICA y del impuesto de Avisos y Tableros para establecimientos comerciales afectados, con el beneficio proporcional al daño: hasta el 100 % para pérdida total o cierre obligatorio, y reducciones para daño parcial. También contempla alivio de predial —hasta el 100 % de exención por una vigencia fiscal— para los inmuebles con colapso total o demolición. Junto a este, radicó el Proyecto de Acuerdo 099, que pide facultades temporales para que el alcalde pueda ajustar el presupuesto distrital y atender la emergencia. El estudio en la Comisión de Presupuesto del Concejo arrancó el 25 de agosto.",
          pendiente:
            "Ni el fondo de reactivación ni el Proyecto de Acuerdo 100 están aprobados todavía: el segundo está en trámite de comisión en el Concejo. En cuanto el Concejo vote alguno de los dos, con monto, requisitos y forma de pedirlo, lo actualizamos.",
          fuentes: [
            CALI_FONDO_REACTIVACION_2026,
            CALI_PROYECTO_ACUERDO_100_2026,
            CALI_ALCALDIA_PROYECTOS_2026,
          ],
        },
        {
          slug: "cali-ampliacion-plazos-predial-ica",
          titulo: "Ampliación de plazos para pagar predial e ICA sin intereses de mora",
          resumen:
            "La Alcaldía amplió del 30 de septiembre al 31 de diciembre de 2026 el plazo para pagar el predial de este año sin que te cobren intereses de mora, y también movió los plazos del ICA. Es una prórroga, no una exoneración.",
          detalle:
            "El 27 y 28 de agosto de 2026 la Alcaldía de Cali anunció una ampliación del calendario tributario de este año como alivio para los contribuyentes tras el terremoto del 10 de agosto: el plazo para pagar el predial de la vigencia 2026 sin intereses de mora, que vencía el 30 de septiembre, se corrió hasta el 31 de diciembre de 2026. El mismo anuncio incluye cambios en los plazos del Impuesto de Industria y Comercio (ICA) y de las estampillas municipales.\n\nEsta es una medida distinta y ya vigente del Proyecto de Acuerdo 100 (que busca una exención de ICA y predial, todavía sin aprobar por el Concejo): aquí no se perdona el impuesto, solo se corre la fecha límite para pagarlo sin que te cobren mora.",
          pendiente:
            "No hemos podido confirmar con una fuente primaria (decreto o resolución de la Alcaldía) las fechas exactas y escalonadas por NIT que circularon en prensa para el nuevo calendario del ICA y las estampillas, solo la del predial. En cuanto lo verifiquemos, lo completamos.",
          fuentes: [CALI_PLAZOS_TRIBUTARIOS_90MIN_2026, CALI_ALCALDIA_PLAZOS_2026],
        },
      ],
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
        verificado: true,
        detalle:
          "Además del censo propio que la Cámara de Comercio de Pereira ya hizo en la zona del Parque de la Libertad, tu negocio puede reportarse al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
      ayudasPropias: [
        {
          slug: "pereira-fondo-restaurantes-bares",
          titulo: "Fondo para restaurantes, bares y entretenimiento",
          resumen:
            "La Alcaldía destinó $500 millones, coordinados con Asobares, para el sector gastronómico y de entretenimiento golpeado por el terremoto; todavía no se han publicado los requisitos para acceder.",
          detalle:
            "El alcalde Mauricio Salazar Peláez anunció una inyección de $500 millones destinada a restaurantes, bares y empresas de entretenimiento afectados por daños estructurales y por las restricciones que redujeron su actividad comercial tras el terremoto. La ejecución de estos recursos se coordinará con Asobares, el gremio que agrupa a los empresarios del sector gastronómico y de entretenimiento.",
          pendiente:
            "Todavía no se han publicado los requisitos para que un bar, restaurante o negocio de entretenimiento acceda a este fondo, ni cómo se van a distribuir los recursos, los criterios de selección o cuántos establecimientos se van a beneficiar.",
          fuentes: [PEREIRA_RESTAURANTES_PULZO_2026, PEREIRA_RESTAURANTES_ELDIARIO_2026],
        },
        {
          slug: "pereira-capital-semilla-vendedores",
          titulo: "Capital semilla para vendedores informales",
          resumen:
            "Más de 3.000 vendedores informales ya censados por la Alcaldía recibirán $1 millón cada uno para reactivar su actividad, con recursos reasignados de las Fiestas de la Cosecha.",
          detalle:
            "Como parte de un primer paquete de ayudas económicas —financiado en parte con recursos que estaban destinados a las Fiestas de la Cosecha 2026, canceladas tras el sismo— la Alcaldía anunció que más de 3.000 vendedores informales ya censados recibirán un capital semilla de $1 millón cada uno para reactivar su actividad económica. El paso previo para acceder a esta y a las demás ayudas de la Alcaldía es registrarte en la plataforma SOS Pereira (sospereira.com), donde reportas tu situación para quedar en el censo oficial de afectados.",
          fuentes: [PEREIRA_VENDEDORES_PULZO_2026, PEREIRA_VENDEDORES_ELDIARIO_2026],
        },
      ],
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
      ayudasPropias: [
        {
          slug: "manizales-calendario-tributario",
          titulo: "Calendario tributario ampliado",
          resumen:
            "La Alcaldía amplió un mes el calendario tributario y suspendió el envío de cobros persuasivos del predial, aunque no es una exoneración.",
          detalle:
            "Manizales tiene una medida propia, aunque no es una exoneración: la Alcaldía amplió un mes el calendario tributario y suspendió temporalmente el envío de cobros persuasivos del predial y de otras obligaciones pendientes con el Municipio. Ojo al matiz: eso no frena los embargos ni las medidas cautelares que ya estuvieran en curso antes del sismo.",
          fuentes: [MANIZALES_TRIBUTARIO_2026],
        },
        {
          slug: "manizales-auxilio-arrendamiento-comerciantes",
          titulo: "Auxilio temporal de arrendamiento para comerciantes",
          resumen:
            "Si tuviste que abandonar tu local por el sismo, puedes pedir $357.000 mensuales para pagar arriendo: un mes si eres arrendatario, tres si eres propietario. Lo gestiona la Cruz Roja de Manizales.",
          detalle:
            "El Decreto 0276 del 14 de agosto de 2026 de la Alcaldía de Manizales creó un auxilio temporal de arrendamiento de $357.000 mensuales tanto para familias como para comerciantes que tuvieron que dejar su vivienda o su local por los daños del sismo, siempre que cuenten con una revisión técnica del predio que certifique la situación. Los comerciantes arrendatarios lo reciben durante un mes y los propietarios durante tres, con posibilidad de prórroga según el protocolo de entrega. Para pedirlo hay que presentar el Formato de revisión a predio (formulario azul, original y copia); la Cruz Roja en Manizales recibe las solicitudes y hace la verificación, caracterización y priorización de cada caso.\n\nEl auxilio no cubre los daños estructurales del local —esa es responsabilidad legal del propietario del inmueble—, no es acumulable ni retroactivo y no genera derecho a pagos futuros.",
          fuentes: [
            MANIZALES_ARRIENDO_COMERCIANTES_2026,
            MANIZALES_ARRIENDO_COMERCIANTES_BC_2026,
          ],
        },
      ],
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
      ayudasPropias: [
        {
          slug: "armenia-proyecto-tributario",
          titulo: "Proyecto de alivio tributario (radicado, sin aprobar)",
          resumen:
            "El alcalde radicó un proyecto para reducir 90% los intereses de mora de predial, alumbrado, teléfonos y otros impuestos si pagas antes del 28 de diciembre.",
          detalle:
            "El alcalde James Padilla García radicó el 21 de agosto un proyecto en el Concejo para reducir un 90% los intereses de mora del impuesto predial unificado (vigencias 2025 y anteriores), del alumbrado público, del impuesto de teléfonos, de la sobretasa a la gasolina y de la contribución de valorización, si pagas antes del 28 de diciembre de 2026.",
          pendiente:
            "Mientras el Concejo no lo apruebe, es un proyecto, no un alivio vigente.",
          fuentes: [ARMENIA_TRIBUTARIO_2026],
        },
        {
          slug: "armenia-fondo-apoyo-empresarial",
          titulo: "Fondo de apoyo empresarial para la reactivación económica del Quindío",
          resumen:
            "La Cámara de Comercio de Armenia y del Quindío, la Alcaldía de Armenia y Comfenalco Quindío juntaron cerca de $3.000 millones para comerciantes afectados. No entregan efectivo: dan una carta para comprar directamente lo que necesites a proveedores autorizados.",
          detalle:
            "La Cámara de Comercio de Armenia y del Quindío, la Alcaldía de Armenia y Comfenalco Quindío lanzaron el Fondo de apoyo empresarial para la reactivación económica del Quindío, con cerca de $3.000 millones: $1.000 millones los pone la Alcaldía de Armenia, $1.300 millones Comfenalco Quindío y $700 millones la propia Cámara de Comercio.\n\nParte del Censo Empresarial que la Cámara de Comercio viene haciendo desde el día del sismo, con más de 4.200 comerciantes ya encuestados (45 % puede operar con normalidad, 31,7 % tiene algún tipo de daño y 23,3 % no puede operar; los daños más comunes son en maquinaria o equipos y en infraestructura, con 20,7 % cada uno). El fondo no entrega dinero en efectivo: identifica tu necesidad concreta —materiales de construcción, tejas, elementos de reparación de instalaciones, maquinaria, equipos, computadores, utensilios, cristalería, inventario o materia prima— y, una vez validada, te dan una carta de autorización para adquirirlo con proveedores locales vinculados al proceso.\n\nPara acceder, acércate a la sede principal de la Cámara de Comercio en el centro de Armenia o a sus sedes en otros municipios del Quindío, o escribe por WhatsApp al 323 349 3710 para registrarte en el censo y reportar tu necesidad.",
          pendiente:
            "No hemos encontrado un tope de ayuda por negocio ni una fecha límite para inscribirse: seguimos sin esa información y la completamos en cuanto la encontremos con fuente.",
          fuentes: [ARMENIA_FONDO_EMPRESARIAL_CCC_2026, ARMENIA_FONDO_EMPRESARIAL_Q24H_2026],
        },
      ],
    },
    {
      slug: "quibdo",
      tipo: "capital",
      nombre: "Quibdó",
      division: "Chocó",
      alertaMaxima: true,
      contexto: "Es la capital más cercana al epicentro del sismo.",
      censo: {
        verificado: true,
        detalle:
          "Quibdó cuenta con un Puesto de Mando Unificado (PMU) regional y con módulos de registro en la alcaldía y el coliseo municipal, aunque seguimos sin encontrar un canal propio de la Cámara de Comercio del Chocó para negocios. Mientras tanto, tu negocio puede reportarse al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos —el mismo censo ya reporta cifras propias de empresas afectadas en Chocó—. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
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
      censo: {
        verificado: true,
        detalle:
          "No hemos encontrado un canal de negocios propio para este municipio, tan aislado que es la mayor incógnita del censo. Mientras tanto, puedes reportar tu negocio al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura —como es el caso aquí—, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
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
      censo: {
        verificado: true,
        detalle:
          "No hemos encontrado un canal de negocios propio para este municipio. Mientras tanto, puedes reportar tu negocio al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
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
      censo: {
        verificado: true,
        detalle:
          "Dosquebradas tiene su propia Cámara de Comercio, distinta de la de Pereira, pero no hemos encontrado que haya abierto un canal propio para el terremoto. Mientras tanto, puedes reportar tu negocio al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
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
      censo: {
        verificado: true,
        detalle:
          "Santa Rosa de Cabal tiene su propia Cámara de Comercio, distinta de la de Pereira, pero no hemos encontrado que haya abierto un canal propio para el terremoto. Mientras tanto, puedes reportar tu negocio al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
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
        "Tiene módulos de registro de damnificados habilitados, según la guía oficial para afectados. El censo empresarial la ubica como el segundo municipio con más negocios afectados del Valle del Cauca, después de Cali.",
      fuente: GUIA_GOB,
      censo: {
        verificado: true,
        detalle:
          "Buenaventura tiene su propia Cámara de Comercio, distinta de la de Cali, pero no hemos encontrado que haya abierto un canal propio para el terremoto. La Gobernación del Valle del Cauca remite explícitamente a los emprendedores afectados de todo el departamento —Buenaventura incluida— al Censo Único de Emergencia que coordina Confecámaras junto con el Ministerio de Comercio, 16 cámaras de comercio de las zonas afectadas, Acopi, Fenalco, Asocapitales y la Federación Nacional de Departamentos. Llama o escribe por WhatsApp para pedir el cuestionario, diligenciarlo o dejar un mensaje de voz; si no tienes señal ni cobertura, hay formularios impresos en los puntos de atención.",
        telefonos: ["300 913 1811"],
        fuente: CENSO_UNICO_2026,
      },
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
        "Hay un piso obligatorio para todos los bancos, no solo un gesto voluntario: mediante la Carta Circular 54 de 2026, la Superintendencia Financiera instruyó a las entidades vigiladas a reprogramar, para quien lo pida, las obligaciones de crédito contraídas antes del 10 de agosto de 2026 y cuyo pago venza desde esa fecha. El nuevo plazo no puede superar el doble del que quedaba pendiente ni los 20 años, y las condiciones no pueden ser más gravosas que las originales. Entre la declaratoria de desastre (Decreto 1171) y la formalización de esa reprogramación —máximo 90 días— no se cobran intereses ni moras. La misma circular activó las «Quejas exprés»: los bancos no pueden imponerte trámites extra ni requisitos adicionales para atender un reclamo ligado al terremoto si vives en Chocó, Risaralda, Valle del Cauca, Caldas o Quindío, sea cual sea el motivo de la queja.\n\nSobre ese piso obligatorio, el sector bancario anunció además un paquete voluntario para personas y empresas de las zonas afectadas que podría beneficiar a cerca de 2,8 millones de usuarios: períodos de gracia de hasta un año, cambios en las condiciones de los créditos y suspensión temporal de los cobros. No suele ser automático: hay que pedirlo al banco.\n\nEl 19 de agosto de 2026, el Gobierno y Asobancaria (el gremio de los bancos) formalizaron ese paquete en cerca de $1,1 billones para los mismos afectados de Caldas, Chocó, Quindío, Risaralda y Valle del Cauca. Incluye periodos de gracia de hasta 12 meses sin cobro de intereses durante ese lapso, suspensión de los cobros jurídicos, protección del historial crediticio (no te reportan negativamente por esta causa) y aplicación de los seguros asociados al crédito, para quien los tenga contratados.\n\nLo que ya está concretado banco por banco:\n\nBancolombia pasó de la promesa genérica de mediados de agosto a cifras concretas: dispuso más de $5 billones en financiación para personas, empresas y entidades territoriales de Chocó, Risaralda, Caldas, Quindío, Valle del Cauca, suroeste antioqueño, Cauca y Tolima. Créditos de vivienda al 8% efectivo anual (unas 7.000 familias) y de consumo o microcrédito al 10%, para desembolsos desde el 25 de agosto; una línea aparte para hasta 13.500 empresas y entidades territoriales.\n\nNu Colombia anunció retiros ilimitados sin comisión en cajeros y avances de tarjeta de crédito sin comisión para clientes en zonas afectadas, más una refinanciación (hasta 48 meses, tasas reducidas) que a fecha 20/08/2026 seguía en desarrollo.\n\nBanco Agrario devuelve las comisiones cobradas por retiros, depósitos y pago de cheques a los clientes cuya oficina habitual sigue cerrada por la emergencia, con efecto retroactivo desde el 10 de agosto; la devolución empezó el 18 de agosto.\n\nBanco de Bogotá y Davivienda cerraron oficinas presenciales en las zonas más golpeadas y mantienen atención por teléfono, WhatsApp y banca virtual. El 20 de agosto sí confirmaron una medida propia, aunque acotada a crédito de vivienda nueva en las zonas afectadas y no al resto de alivios del gremio: BBVA bajó su tasa desde 11,9% efectivo anual, Davivienda desde 14,4% y Banco de Bogotá hasta 16,55%. El presidente De la Espriella celebró la medida el 22 de agosto y pidió extenderla al resto del sector financiero y a otro tipo de créditos, no solo vivienda.\n\nEl 22 de agosto lo consiguió: Grupo Aval (que agrupa a Banco de Bogotá, Banco Popular, Banco de Occidente y AV Villas), Davivienda y Banco GNB Sudameris se sumaron a Bancolombia con una tasa unificada del 8% efectivo anual para crédito de vivienda VIS y no VIS en las zonas afectadas, fija durante todo el plazo del crédito, para desembolsos hechos desde el 25 de agosto de 2026.\n\nGrupo Aval fue más allá de la vivienda: Banco de Bogotá, Banco de Occidente, Banco Popular y AV Villas abrieron líneas de crédito propias para negocios —tarjetas de crédito, libranzas y créditos de libre destino— dirigidas a personas naturales con negocio y a empresas con ingresos anuales de hasta $1.000 millones en las zonas afectadas, con plazos de hasta 36 meses, 6 meses de gracia a capital y 50% de descuento en la tasa de interés durante esos primeros 6 meses. Banco de Occidente sumó, además, un beneficio propio de consumo: 50% de descuento en los intereses de las compras con tarjeta de crédito en droguerías, clínicas, hospitales, supermercados, ferreterías, electrodomésticos y tiendas de mascotas de los municipios afectados, del 21 de agosto al 30 de septiembre de 2026, con financiación hasta a 12 meses; aplica tanto a clientes actuales como a quien saque tarjeta nueva durante la emergencia.\n\nEl 26 de agosto de 2026 la Superfinanciera reforzó el piso obligatorio con la Circular Externa 007: mantiene la misma reprogramación (hasta el doble del plazo pendiente, tope de 20 años, sin intereses ni mora entre la declaratoria y el cierre de la renegociación, máximo 90 días), pero aclara que el beneficio no es automático ni igual para todos, sino que cada entidad debe evaluarlo según tu grado de afectación y tu capacidad real de pago. La misma circular obliga a las aseguradoras vigiladas a facilitar el pago de primas, agilizar los siniestros, informar con claridad el trámite de indemnización, acelerar la valoración de daños y habilitar puntos de atención prioritaria —preferiblemente presenciales— para quien reclama por el terremoto, y ordena a los administradores de cesantías tramitar con la mayor celeridad posible los retiros por vivienda dañada que pidan los afiliados de las zonas afectadas.\n\nBBVA, que hasta entonces solo había confirmado su tasa de vivienda al 8%, se sumó el 27 de agosto de 2026 con un paquete propio para negocios: para pequeñas y medianas empresas y para el sector agropecuario ofrece financiación desde IBR + 0%, a plazos de hasta 36 meses y con periodos de gracia de hasta seis meses, pensada para capital de trabajo, reposición de inventario y reemplazo de maquinaria o infraestructura dañada. Para que evalúen tu caso, sea un crédito nuevo o uno vigente, puedes llamar al 601 743 4371 o al 333 602 9911.",
      pendiente:
        "La reprogramación obligatoria de la Superfinanciera es un derecho, pero no automático: tienes que pedirla tú al banco, y seguimos sin encontrar un formulario único para hacerlo (cada entidad gestiona la solicitud por sus canales propios). Más allá de eso, seguimos sin el canal exacto de solicitud (línea, formulario, requisitos) del paquete voluntario adicional —períodos de gracia, suspensión de cobros— en ninguno de estos bancos, más allá de la baja de tasa hipotecaria al 8% ya confirmada en Bancolombia, Banco de Bogotá, Banco Popular, Banco de Occidente, AV Villas, Davivienda y Banco GNB Sudameris, de la nueva línea de crédito para negocios que abrió Grupo Aval y de la línea para pymes y agro que sumó BBVA. Scotiabank Colpatria sigue sin ninguna medida propia confirmada. La instrucción que dan, por ahora, es «contacta a tu banco por los canales habituales y pide que evalúen tu caso».",
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
        SUPERFINANCIERA_CIRCULAR_2026,
        BANCOLOMBIA_2026,
        BANCOLOMBIA_5B_2026,
        NU_2026,
        BANCO_AGRARIO_2026,
        ASOBANCARIA_2026,
        TASAS_VIVIENDA_BANCOS_2026,
        DE_LA_ESPRIELLA_TASAS_2026,
        GRUPO_AVAL_TASA_2026,
        CAMACOL_TASA_2026,
        GRUPO_AVAL_NEGOCIOS_2026,
        BANCO_OCCIDENTE_DESCUENTO_2026,
        SUPERFINANCIERA_CIRCULAR_007_ELTIEMPO_2026,
        SUPERFINANCIERA_CIRCULAR_007_INFOBAE_2026,
        BBVA_PYME_AGRO_2026,
      ],
    },
    {
      slug: "alivios-tributarios",
      titulo: "Alivios tributarios",
      resumen:
        "El Gobierno activó medidas tributarias para los afectados por el terremoto.",
      detalle:
        "La DIAN confirmó aplazamientos de plazos —no condonación del impuesto— para personas y agentes con domicilio fiscal en las seccionales de Cali, Palmira, Tuluá, Buenaventura, Pereira, Armenia, Manizales, Quibdó y Popayán: la declaración de renta 2025 de personas naturales se corre a la ventana del 27 de octubre al 13 de noviembre de 2026 (según los dos últimos dígitos del NIT); la retención en la fuente de julio se puede presentar y pagar con los plazos de agosto, sin sanción ni interés moratorio; y los trámites aduaneros quedan suspendidos entre el 10 de agosto y el 10 de septiembre de 2026 en esas seccionales. Excluye a los grandes contribuyentes. Conserva toda la documentación de tus pérdidas: es lo que te van a pedir para acreditar la condición de afectado.\n\nA nivel municipal, algunas alcaldías ya tienen medidas tributarias propias: revisa la página de tu localidad para ver si la tuya es una de ellas.",
      pendiente:
        "En Pereira y Quibdó seguimos sin encontrar ningún decreto de alcaldía que exonere o aplace el ICA o el predial por este terremoto. Cali sí amplió el plazo para pagar el predial de este año sin intereses de mora hasta el 31 de diciembre —revisa la página de Cali—, pero es una prórroga, no una exoneración: el Proyecto de Acuerdo 100, que sí busca exonerar, sigue sin aprobarse. A nivel nacional sigue sin aprobarse la petición de Fedemunicipios de extender ese alivio hasta por dos períodos fiscales con compensación del Gobierno. Lo seguimos verificando.",
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
        "Fenalco presentó al Gobierno una propuesta integral con medidas de atención inmediata, alivio financiero y reactivación económica, con el objetivo declarado de evitar el cierre definitivo de establecimientos, proteger los empleos y recuperar la actividad productiva. En la reunión participaron el presidente de Bancóldex, Manuel Fernández Ariza, el Fondo Nacional de Garantías e INNpulsa. El Banco Mundial ya desembolsó US$200 millones de una línea de crédito escalable que podría ampliarse hasta US$450 millones, destinada a la respuesta de emergencia y a sentar las bases de la reconstrucción.\n\nEl 19 de agosto el Gobierno declaró el Estado de Emergencia Económica, Social y Ecológica (Decreto 1261 de 2026) en 15 departamentos, incluidos los cinco de esta zona. La declaratoria en sí misma no es una ayuda: es un mecanismo del artículo 215 de la Constitución que habilita al Gobierno a expedir, durante 30 días calendario, decretos con fuerza de ley sin pasar primero por el Congreso. Entre lo que el propio decreto anuncia que vendrá por esa vía: líneas de crédito de emergencia para micro y pequeñas empresas con tasas subsidiadas y períodos de gracia extraordinarios, y apoyo para cubrir parte de la nómina y los aportes a seguridad social de sus trabajadores. Son objetivos declarados, no créditos ya abiertos: cada beneficio concreto depende de los decretos legislativos que el Gobierno vaya expidiendo dentro de esos 30 días.\n\nEl 21 de agosto de 2026 el Gobierno precisó cómo funcionará uno de esos mecanismos: un subsidio temporal para que el Estado asuma parte del costo laboral —salarios y algunos aportes a salud y pensión— de los empleadores en las zonas afectadas, con el objetivo declarado de frenar despidos. No se limita a micro y pequeñas empresas: busca proteger el empleo formal de forma más amplia en la zona golpeada.\n\nEn paralelo, algunas alcaldías ya preparan su propio paquete municipal: revisa la página de tu localidad para ver si la tuya tiene uno.",
      pendiente:
        "Todavía no hay líneas de crédito específicas con tasa, monto y requisitos publicados por Bancóldex, Finagro o el Fondo Nacional de Garantías, ni el «Plan de Reconstrucción y Reactivación Económica» que anunció el Ministerio de Comercio. Tampoco el subsidio de nómina tiene todavía monto, duración ni requisitos de acceso publicados. Los decretos legislativos que desarrollen la Emergencia Económica todavía no se publican uno por uno con montos y requisitos: en cuanto salga alguno con crédito, monto o plazo concretos para negocios, lo añadimos aquí.",
      fuentes: [
        {
          medio: "El Heraldo",
          titulo:
            "Fenalco articula acciones con Mincomercio para comerciantes afectados por terremoto",
          url: "https://www.elheraldo.co/economia/2026/08/13/fenalco-articula-acciones-con-mincomercio-para-comerciantes-afectados-por-terremoto/",
          fecha: "2026-08-13",
        },
        BANCO_MUNDIAL_2026,
        DECRETO_EMERGENCIA_2026,
        PRESIDENCIA_EMERGENCIA_2026,
        SUBSIDIO_NOMINA_2026,
      ],
    },
    {
      slug: "beneficios-privados",
      titulo:
        "Internet, datos móviles, seguros y ayuda a comerciantes: lo que ofrecen las empresas privadas",
      resumen:
        "Starlink, Claro, Tigo, las aseguradoras y Bavaria activaron beneficios propios para los afectados: unos automáticos, otros que hay que pedir y uno que todavía no tiene canal público para solicitarlo.",
      detalle:
        "Starlink ofrece el servicio gratis hasta el 12 de septiembre de 2026 en Chocó, Valle del Cauca, Risaralda, Caldas y Quindío. Si ya tenías el servicio activo el día del sismo, el crédito se aplica solo, sin trámite. Si lo habías cancelado, contacta al soporte de Starlink para reactivarlo. Si eres nuevo, compra el kit (antena y router) en la web oficial o en un distribuidor autorizado, contrata un plan y luego contacta al soporte para pedir la activación gratuita antes de esa fecha. Si el sismo te dañó el equipo, también puedes pedir el reemplazo gratis por soporte técnico.\n\nClaro dio 2 GB de datos y minutos y SMS ilimitados durante 7 días a sus clientes prepago en Chocó, Valle del Cauca, Risaralda, Quindío y Caldas, activado automáticamente desde el 11 de agosto. Tigo dio 2 GB gratis durante 3 días a sus clientes prepago en las mismas cinco zonas, también automático, sin trámite. WOM, en esas mismas zonas, dio a sus clientes prepago 2 GB de datos y minutos ilimitados entre el 10 y el 12 de agosto, y otros 2 GB con minutos ilimitados entre el 12 y el 17 de agosto; a sus clientes pospago les dio datos y voz ilimitados durante 15 días, hasta el 24 de agosto, más una extensión del plazo de pago de la factura. Igual que Claro y Tigo, se activó solo, sin trámite.\n\nSi tienes seguro y tu negocio o vivienda sufrió daños, puedes reportarlo directamente: Seguros Bolívar por WhatsApp 322 332 2322 o la línea #322 (opción 0); Sura por WhatsApp 315 275 7888, la línea #888 o la emergencia 01 8000 415 215. Sura aclaró que los damnificados tienen dos años para reclamar, no 72 horas como se ha dicho por ahí, y Fasecolda lo confirmó para todo el gremio: el plazo real para presentar el reclamo va de 2 a 5 años desde la fecha del sismo, según la póliza. No pierdes el derecho a reclamar por no haber avisado en los primeros días. A corte del 21 de agosto de 2026, las aseguradoras habían recibido 36.415 reclamaciones por cerca de $1,2 billones, de las cuales 29.736 corresponden solo a pólizas de incendio y terremoto.\n\nFasecolda, el gremio de las aseguradoras, publicó un directorio con las líneas de las demás compañías activas en la zona: Allianz por el código #265, el teléfono (601) 594 1133 o la emergencia 01 8000 513 500; Axa Colpatria por WhatsApp 1357 2433, la línea #247 o la emergencia 01 8000 512 620; Mapfre por el código #624 o la emergencia 601 794 8494; Chubb por el teléfono 601 319 0402 o la emergencia 01 8000 917 500; HDI por WhatsApp 316 482 1802, la línea 601 307 7050 (opción 8) o la emergencia 01 8000 113 390 (opción 8); Colmena Seguros por WhatsApp 315 700 3033, la línea #833, el teléfono (601) 401 0447 o la emergencia 01 8000 9 19667; La Previsora por WhatsApp 324 201 5491, la línea #345 (opciones 3 y 6), el teléfono 601 348 5757 o la emergencia 01 8000 910 554; Aseguradora Solidaria por WhatsApp 314 203 4106 o la línea 323 264 1770; Zurich por WhatsApp 315 768 6083, la línea #723, el teléfono 601 319 0730 o la emergencia 01 8000 112 723; La Equidad por WhatsApp 318 588 4515, la línea #324 o la emergencia 01 8000 919 538; BBVA Seguros por la línea exclusiva de siniestros 601 307 7121 o la línea nacional gratuita 01 8000 934 020; y Seguros del Estado por el código #388, el teléfono 601 742 1075 o la emergencia 01 8000 123 010.\n\nBavaria anunció una inversión de $12.000 millones para apoyar la reconstrucción y reapertura de 3.500 negocios afectados por el terremoto —tiendas de barrio, pequeños comercios y emprendimientos de Chocó, Quindío, Valle del Cauca, Risaralda y Caldas—, en articulación con el Plan de Reconstrucción para Comerciantes y Microempresarios que lidera el Gobierno Nacional. El objetivo declarado es que quienes reciban el apoyo puedan reabrir su establecimiento y retomar su actividad económica lo antes posible.",
      pendiente:
        "Todavía no hemos encontrado el canal para que un comerciante se postule al fondo de Bavaria: ni la empresa ni el Gobierno han publicado un formulario, línea o requisitos para acceder a él.",
      fuentes: [
        STARLINK_2026,
        CLARO_TIGO_2026,
        ASEGURADORAS_2026,
        FASECOLDA_DIRECTORIO_2026,
        FASECOLDA_PLAZOS_2026,
        RECLAMACIONES_SEGUROS_2026,
        BAVARIA_2026,
        BAVARIA_ELTIEMPO_2026,
      ],
    },
  ],
};
