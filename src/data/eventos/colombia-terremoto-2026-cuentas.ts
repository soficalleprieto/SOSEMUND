import type { Cuenta } from "../tipos";
import logoWck from "../../assets/cuentas/wckitchen.jpg";
import logoMadrina from "../../assets/cuentas/fundacionmadrina.jpg";

/**
 * Cuentas que están contando lo que pasa y moviendo ayuda.
 *
 * Curadas por Sofía a mano, viendo sus feeds e historias. NO es un sello de
 * fiabilidad ni una certificación: es una lista de a quién estamos mirando
 * nosotros, y se dice así en la página. Si alguna comparte algo falso, sale.
 *
 * Deliberadamente no describimos qué publica cada una: no las hemos auditado
 * una por una y escribir «informa con rigor» de veinticuatro cuentas sería
 * inventarnos algo que no hemos comprobado. El enlace y el nombre bastan.
 *
 * `destacados` queda listo para las publicaciones concretas que Sofía vaya
 * mandando por Telegram cuando vea algo que merezca reposteo.
 */
/*
 * CÓMO AÑADIR UN VÍDEO INCRUSTADO
 *
 * Instagram no permite incrustar un perfil entero, solo publicaciones sueltas,
 * y su web bloquea la lectura sin sesión iniciada: hay que copiar el enlace a
 * mano desde la app (··· → Copiar enlace) o desde el navegador.
 *
 * Se añade `destacados` a la cuenta que corresponda:
 *
 *   {
 *     handle: "laprofemonica",
 *     red: "instagram",
 *     destacados: [
 *       {
 *         url: "https://www.instagram.com/p/CODIGO/",
 *         descripcion: "Qué se ve en el vídeo, en una línea",
 *       },
 *     ],
 *   },
 *
 * Vale igual /p/ (publicación) y /reel/ (reel). La descripción no es opcional:
 * el reproductor solo se carga si alguien pulsa, así que hasta entonces esa
 * línea es lo único que se lee.
 *
 * Revisado el 19/08/2026: de las 24 cuentas, 16 tenían una publicación propia
 * y verificable sobre este terremoto en sus últimas publicaciones. Las otras
 * ocho (julianpinilla, elfisicocuenta, holmanbecerra, rubigol,
 * danielagarciat11, tefaalvarados, lagarotanea, soymarvasquez) se quedan sin
 * `destacados`: o no publicaron nada específico del terremoto, o el perfil ya
 * no estaba disponible. No se rellena a ojo lo que no se pudo comprobar.
 */
export const cuentasColombia2026: Cuenta[] = [
  {
    handle: "wckitchen",
    red: "instagram",
    logo: logoWck,
    destacados: [
      {
        url: "https://www.instagram.com/wckitchen/p/DcPBuwTgXtO/",
        descripcion:
          "WCK cuenta su trabajo repartiendo comida caliente en Buenaventura tras el terremoto.",
      },
    ],
  },
  {
    handle: "fundacionmadrina",
    red: "instagram",
    logo: logoMadrina,
    destacados: [
      {
        url: "https://www.instagram.com/fundacionmadrina/p/DcOQQGsoFev/",
        descripcion: "Comunicado con los centros de acopio habilitados para Colombia.",
      },
    ],
  },
  {
    handle: "isabelariverav",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/isabelariverav/reel/Db6SfmXNgFM/",
        descripcion: "Qué hacer en las primeras 72 horas tras el terremoto en Colombia.",
      },
    ],
  },
  { handle: "julianpinilla", red: "instagram" },
  {
    handle: "katodrums",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/katodrums/reel/DcJlZPVx4tR/",
        descripcion: "Agradece a la Policía de Colombia por ayudar a organizar la ayuda tras el sismo.",
      },
    ],
  },
  { handle: "elfisicocuenta", red: "instagram" },
  {
    handle: "marianainfanteb",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/marianainfanteb/reel/Db8y2voK80s/",
        descripcion: "Qué donar (alimentos, insumos médicos, herramientas) y punto de recaudo en Bogotá.",
      },
    ],
  },
  {
    handle: "rolaenmadrid",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/rolaenmadrid/reel/DcOy-QDtH3U/",
        descripcion: "Convoca a donar en el punto de acopio de Madrid, del 14 al 21 de agosto.",
      },
    ],
  },
  { handle: "holmanbecerra", red: "instagram" },
  {
    handle: "triannacamilo",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/triannacamilo/p/DcKO1PUGsOR/",
        descripcion: "Pide sostener la solidaridad con Colombia aunque baje la atención mediática.",
      },
    ],
  },
  { handle: "rubigol", red: "instagram" },
  {
    handle: "con.calmita",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/con.calmita/reel/DcNkbFWsN6W/",
        descripcion: "Consejos para que los voluntarios en los acopios cuiden su energía en el tiempo.",
      },
    ],
  },
  { handle: "danielagarciat11", red: "instagram" },
  { handle: "tefaalvarados", red: "instagram" },
  {
    handle: "aprendeconveroo",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/aprendeconveroo/reel/DcHz03EJX9J/",
        descripcion: "Pide no olvidar la ayuda a Colombia cuando el terremoto deje de ser noticia.",
      },
    ],
  },
  {
    handle: "laprofemonica",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/laprofemonica/reel/DcMfSp6Py4n/",
        descripcion: "Convoca a la gente de Santander a donar o ser voluntarios tras el terremoto.",
      },
    ],
  },
  {
    handle: "mramirezt",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/mramirezt/p/DcMplmoAR6z/",
        descripcion: "Masterclass benéfica: lo recaudado va a apadrinar familias afectadas por el terremoto.",
      },
    ],
  },
  { handle: "lagarotanea", red: "instagram" },
  { handle: "soymarvasquez", red: "instagram" },
  {
    handle: "yesid.lopez",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/yesid.lopez/reel/DcOfAMGN4Tl/",
        descripcion: "Presenta encontrados.co, para buscar por foto mascotas perdidas tras el terremoto.",
      },
    ],
  },
  {
    handle: "breiner.diaz.art",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/breiner.diaz.art/reel/DcM17wWOB5g/",
        descripcion: "Ilustración «Todos por Colombia» en apoyo a los afectados por el terremoto.",
      },
    ],
  },
  {
    handle: "brendagumo",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/brendagumo/p/DcPEspJmdSp/",
        descripcion: "Presenta RedSismo, red ciudadana para coordinar ayuda y reconstrucción en Colombia.",
      },
    ],
  },
  {
    handle: "organico.studio",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/organico.studio/reel/DcKGvEOgGzF/",
        descripcion: "Promueve AlludaOnline, plataforma para conectar ayuda con quien la necesita, y busca voluntarios.",
      },
    ],
  },
  {
    handle: "sanamente_lau",
    red: "instagram",
    destacados: [
      {
        url: "https://www.instagram.com/sanamente_lau/reel/Db5_tvnoNO5/",
        descripcion: "Psicóloga ofrece acompañamiento gratuito a colombianos en el exterior con familia afectada.",
      },
    ],
  },
];
