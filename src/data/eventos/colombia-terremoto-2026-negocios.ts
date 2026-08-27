import type { Negocio } from "../tipos";
import panaderiaAntes from "../../assets/negocios/ejemplo/antes.jpg";
import panaderiaAhora from "../../assets/negocios/ejemplo/ahora.jpg";
import restauranteAntes from "../../assets/negocios/ejemplo-restaurante/antes.jpg";
import restauranteAhora from "../../assets/negocios/ejemplo-restaurante/ahora.jpg";
import ropaAntes from "../../assets/negocios/ejemplo-ropa/antes.jpg";
import ropaAhora from "../../assets/negocios/ejemplo-ropa/ahora.jpg";
import calzadoLaGranEconomiaDeBucaramangaOtra1 from "../../assets/negocios/calzado-la-gran-economia-de-bucaramanga/otra-1.jpg";

/**
 * Fichas de negocio publicadas.
 *
 * De momento solo hay tres, y las tres son de ejemplo, rotuladas como tal. No
 * inventamos negocios afectados: presentar un comercio ficticio como real, en
 * una web sobre una catástrofe con cientos de muertos, sería fabricar un
 * registro. En cuanto lleguen negocios reales y revisados, estas fichas de
 * ejemplo se quedan al final de la lista o desaparecen.
 *
 * Son tres justamente para que no parezca que hay uno solo repetido: tres
 * actividades distintas (panadería, restaurante, tienda de ropa), tres
 * localidades distintas, y nombres arquetípicos —genéricos a propósito— en
 * vez de plausibles, para que no puedan confundirse con ningún comercio real.
 * Todas llevan contacto y cobro, para que se vea cómo queda esa parte de la
 * ficha, pero con números y cuentas evidentemente falsos (todo ceros,
 * dominios "ejemplo") para que no resuelvan en la cuenta de nadie, y con el
 * aviso de que están inventados junto a ellos en la plantilla.
 */
export const negociosColombia2026: Negocio[] = [
  {
    slug: "calzado-la-gran-economia-de-bucaramanga",
    nombre: "Calzado la gran economía de Bucaramanga",
    actividad: "Zapatería",
    localidad: "pereira",
    // Sin `historia`: el alta por WhatsApp no la pidió, no la inventamos.
    estado: {
      local: "sin-datos",
      mercancia: "sin-datos",
      equipos: "sin-datos",
      detalle: "Nuestro local estaba ubicado en la Carrera 8 #21-63, en la ciudad de Pereira, durante los últimos 9 años, este lugar fue nuestro punto físico y parte importante de nuestra historia.\nLamentablemente, debido a la situación presentada, el edificio se encuentra actualmente en riesgo de colapso, por lo que el inmueble no es habitable y, por el momento, no podemos atender de manera presencial.\nGracias a Dios, pudimos rescatar nuestra mercancía y continuar con nuestro trabajo. Actualmente estamos buscando un nuevo punto físico. \nMientras encontramos nuestro nuevo espacio, seguimos activos únicamente a través de nuestras redes sociales.",
    },
    operando: true,
    dondeEstaAhora: "Actualmente estamos vendiendo desde nuestro hogar y a través de internet, realizando envíos a domicilio y también atendiendo a los clientes que desean acercarse hasta nuestra casa para realizar sus compras.",
    necesita: [
      "En este momento, la ayuda que más necesitamos es apoyo para crecer en nuestras redes sociales. Queremos aprender, recibir herramientas y orientación que nos permitan fortalecer nuestra presencia digital y, sobre todo, poder vender a través de este medio mientras conseguimos nuevamente un punto físico.",
      "Después de tantos años atendiendo desde nuestro local, este es un nuevo reto para nosotros. Por eso, cualquier conocimiento, estrategia, consejo o herramienta que nos ayude a crecer en redes sociales y llegar a más personas significaría muchísimo para nosotros y para nuestro negocio.",
    ],
    contacto: {
      whatsapp: "https://wa.me/573205231254",
      instagram: "https://instagram.com/calzadolagraneconomia",
      facebook: "https://www.facebook.com/p/Calzado-la-Gran-Econom%C3%ADa-100071344058149/",
      tiktok: "https://tiktok.com/@calzado.lagran.economia",
    },
    revisadaEl: "2026-08-26",
    consentimiento: true,
    fotos: {
      otras: [
        {
          src: calzadoLaGranEconomiaDeBucaramangaOtra1,
          alt: "Otra foto de Calzado la gran economía de Bucaramanga.",
        },
      ],
    },
  },
  {
    slug: "ejemplo",
    esEjemplo: true,
    nombre: "La panadería de la esquina",
    actividad: "Panadería y repostería",
    localidad: "pereira",
    historia:
      "Llevaba dieciocho años abriendo a las cuatro y media de la mañana. Vendía pan, buñuelos y tortas por encargo, y daba trabajo a cuatro personas del barrio. Los sábados la fila llegaba hasta la esquina.",
    estado: {
      local: "grave",
      mercancia: "destruido",
      equipos: "grave",
      detalle:
        "Se cayó parte de la cubierta y la pared del fondo quedó agrietada. La producción del día se perdió entera. El horno grande está en pie pero sin revisar, y las dos vitrinas refrigeradas quedaron aplastadas.",
    },
    operando: true,
    dondeEstaAhora:
      "Sigue vendiendo por encargo desde la casa de su hermana y reparte a domicilio en el barrio por las mañanas.",
    necesita: [
      "Una vitrina refrigerada de dos puertas",
      "Revisión técnica del horno para saber si se puede usar",
      "Pedidos por encargo mientras el local no reabre",
      "Bandejas y moldes de panadería",
    ],
    contacto: {
      whatsapp: "https://wa.me/573000000000",
      instagram: "https://instagram.com/panaderiadelaesquina.ejemplo",
      correo: "mailto:panaderia@ejemplo.co",
    },
    cobro: [
      { metodo: "Nequi", detalle: "300 000 0000" },
      { metodo: "Daviplata", detalle: "300 000 0000" },
    ],
    fotos: {
      antes: {
        src: panaderiaAntes,
        alt: "La panadería de la esquina antes del terremoto, con el local abierto y los estantes llenos de pan.",
      },
      despues: {
        src: panaderiaAhora,
        alt: "La panadería de la esquina tras el terremoto, con el techo caído y escombros cubriendo el local.",
      },
    },
    revisadaEl: "2026-08-20",
    consentimiento: true,
  },
  {
    slug: "ejemplo-restaurante",
    esEjemplo: true,
    nombre: "El restaurante del barrio",
    actividad: "Restaurante de comida corriente",
    localidad: "manizales",
    historia:
      "Servía almuerzo ejecutivo de lunes a sábado, con mesas siempre llenas al mediodía de trabajadores y familias del sector. Once años dando de comer al barrio, con la misma sazón de siempre.",
    estado: {
      local: "grave",
      mercancia: "grave",
      equipos: "grave",
      detalle:
        "El techo se vino abajo sobre el comedor y las mesas quedaron volcadas entre los escombros. La cocina no se ha podido revisar todavía: no se sabe si la nevera y la estufa industrial sirven.",
    },
    operando: true,
    dondeEstaAhora:
      "Está cocinando desde la casa de un vecino y reparte almuerzos a domicilio en el barrio al mediodía.",
    necesita: [
      "Una estufa industrial",
      "Mesas y sillas para volver a montar el comedor",
      "Revisión técnica de la nevera y los equipos de cocina",
      "Pedidos de almuerzo a domicilio mientras no reabre",
    ],
    contacto: {
      whatsapp: "https://wa.me/573000000000",
      instagram: "https://instagram.com/restaurantedelbarrio.ejemplo",
      correo: "mailto:restaurante@ejemplo.co",
    },
    cobro: [
      { metodo: "Nequi", detalle: "300 000 0000" },
      { metodo: "Daviplata", detalle: "300 000 0000" },
    ],
    fotos: {
      antes: {
        src: restauranteAntes,
        alt: "El restaurante del barrio antes del terremoto, con las mesas puestas y el menú del día en la pizarra.",
      },
      despues: {
        src: restauranteAhora,
        alt: "El restaurante del barrio tras el terremoto, con el techo derrumbado y las mesas y sillas entre los escombros.",
      },
    },
    revisadaEl: "2026-08-20",
    consentimiento: true,
  },
  {
    slug: "ejemplo-tienda-de-ropa",
    esEjemplo: true,
    nombre: "La tienda de ropa del centro",
    actividad: "Tienda de ropa",
    localidad: "armenia",
    historia:
      "Un local pequeño de ropa de diario —jeans, camisetas, chaquetas— que llevaba trece años en el mismo local del centro. Lo llevaban entre dos hermanas, con clientes de toda la vida.",
    estado: {
      local: "grave",
      mercancia: "grave",
      equipos: "grave",
      detalle:
        "Parte del techo cayó sobre las estanterías y la fachada quedó agrietada. Buena parte de la ropa sigue colgada, pero cubierta de escombros y polvo: no está claro cuánta se puede seguir vendiendo.",
    },
    operando: true,
    dondeEstaAhora:
      "Sigue vendiendo por catálogo de fotos que manda por WhatsApp, con entrega a domicilio en la ciudad.",
    necesita: [
      "Estanterías y perchas nuevas",
      "Revisión técnica de la estructura antes de poder reabrir",
      "Pedidos por catálogo mientras el local no abre",
      "Bolsas y empaques para los envíos",
    ],
    contacto: {
      whatsapp: "https://wa.me/573000000000",
      instagram: "https://instagram.com/tiendaderopadelcentro.ejemplo",
      correo: "mailto:tiendaderopa@ejemplo.co",
    },
    cobro: [
      { metodo: "Nequi", detalle: "300 000 0000" },
      { metodo: "Daviplata", detalle: "300 000 0000" },
    ],
    fotos: {
      antes: {
        src: ropaAntes,
        alt: "La tienda de ropa del centro antes del terremoto, con la ropa colgada y ordenada en el local.",
      },
      despues: {
        src: ropaAhora,
        alt: "La tienda de ropa del centro tras el terremoto, con el techo caído sobre la ropa y la fachada agrietada.",
      },
    },
    revisadaEl: "2026-08-20",
    consentimiento: true,
  },
];
