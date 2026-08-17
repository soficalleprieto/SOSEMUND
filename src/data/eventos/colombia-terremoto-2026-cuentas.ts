import type { Cuenta } from "../tipos";

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
 */
export const cuentasColombia2026: Cuenta[] = [
  { handle: "wckitchen", red: "instagram", nota: "World Central Kitchen. Las fotos libres que ilustran este sitio son suyas." },
  { handle: "fundacionmadrina", red: "instagram" },
  { handle: "isabelariverav", red: "instagram" },
  { handle: "julianpinilla", red: "instagram" },
  { handle: "katodrums", red: "instagram" },
  { handle: "elfisicocuenta", red: "instagram" },
  { handle: "marianainfanteb", red: "instagram" },
  { handle: "rolaenmadrid", red: "instagram" },
  { handle: "holmanbecerra", red: "instagram" },
  { handle: "triannacamilo", red: "instagram" },
  { handle: "rubigol", red: "instagram" },
  { handle: "con.calmita", red: "instagram" },
  { handle: "danielagarciat11", red: "instagram" },
  { handle: "tefaalvarados", red: "instagram" },
  { handle: "aprendeconveroo", red: "instagram" },
  { handle: "laprofemonica", red: "instagram" },
  { handle: "mramirezt", red: "instagram" },
  { handle: "lagarotanea", red: "instagram" },
  { handle: "soymarvasquez", red: "instagram" },
  { handle: "yesid.lopez", red: "instagram" },
  { handle: "breiner.diaz.art", red: "instagram" },
  { handle: "brendagumo", red: "instagram" },
  { handle: "organico.studio", red: "instagram" },
  { handle: "sanamente_lau", red: "instagram" },
];
