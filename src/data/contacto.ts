/**
 * Canal por el que los negocios mandan su ficha.
 *
 * El envío final sigue siendo WhatsApp, no un servidor propio: no hay forma de
 * adjuntar fotos desde un enlace, así que quien rellena el formulario de
 * /negocios/anadir igual termina en su WhatsApp para mandarlas. Lo que cambió
 * (decisión de Sofía, 20/08/2026) es que ya no escribe el mensaje a mano desde
 * cero: un formulario estructurado (nombre, localidad, tipo de negocio con
 * listas desplegables) arma el texto por él.
 *
 * Para cambiar el número, solo esta constante.
 */
export const WHATSAPP = {
  /** En formato internacional, sin signos: es lo que espera wa.me. */
  numero: "34650184376",
  /** Como se muestra al lector. */
  visible: "+34 650 18 43 76",
};

export const enlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensaje)}`;

/**
 * Por qué un número español en un sitio sobre Colombia.
 *
 * Va siempre junto al número, y no es un detalle menor: en esta misma web
 * avisamos de estafas, así que un prefijo extranjero sin explicar sería
 * exactamente la señal que le decimos a la gente que desconfíe. Explicado, deja
 * de ser sospechoso y pasa a ser el motivo por el que existe el proyecto.
 */
export const POR_QUE_ESPANA =
  "Verás que el número es español, con prefijo +34. Soy colombiana y vivo en España, pero mis papás y mi hermano están en Colombia: por eso este proyecto empezó por el terremoto y no por otra cosa. El teléfono es de trabajo, no personal.";

/**
 * Tipos de negocio de partida para el desplegable del formulario. No es una
 * taxonomía cerrada: el propio formulario deja escribir el suyo a quien no
 * encaje aquí, y esa parte no se pierde, va igual en el mensaje de WhatsApp.
 */
export const TIPOS_NEGOCIO_BASE = [
  "Panadería y repostería",
  "Restaurante o comida rápida",
  "Tienda de ropa",
  "Miscelánea o tienda de barrio",
  "Peluquería o barbería",
  "Ferretería",
  "Farmacia o droguería",
  "Papelería",
  "Taller de motos o carros",
  "Zapatería",
  "Cafetería",
  "Salón de belleza",
];

/** Lo que le pedimos a un negocio que nos mande. */
export const QUE_MANDAR = [
  {
    titulo: "Cómo se llama tu negocio",
    texto: "El nombre. Nada más por ahora, la actividad y la localidad van aparte.",
  },
  {
    titulo: "Localidad",
    texto: "Elige la tuya de la lista. Si no está, escríbenos cuál es y la añadimos.",
  },
  {
    titulo: "Tipo de negocio",
    texto:
      "Elige el que más se parezca (panadería, tienda de ropa, restaurante…). Si no encaja en ninguno, escribe el tuyo.",
  },
  {
    titulo: "Cómo quedó",
    texto:
      "El local, la mercancía y los equipos. Si tienes una foto de antes (aunque sea del celular, de una publicación vieja o de Google Maps) y una de ahora, mándanos las dos: se ve mucho mejor el contraste. Si eras un puesto callejero o algo que ya no existe para fotografiar, cuéntanoslo y ponemos esa descripción como el «ahora». Vale con fotos o vídeos mal hechos: valen más que una descripción.",
  },
  {
    titulo: "Qué necesitas exactamente",
    texto:
      "Concreto: «una vitrina refrigerada», «un horno de 40 litros», «clientes para pedidos a domicilio». «Ayuda» a secas no le sirve a nadie para ayudarte.",
  },
  {
    titulo: "Dónde te encuentran hoy",
    texto:
      "Si sigues vendiendo en otro sitio, a domicilio o por encargo, dónde. No publicamos la dirección de un local vacío: tras los derrumbes hubo saqueos.",
  },
  {
    titulo: "Por dónde te pueden escribir",
    texto:
      "WhatsApp, Instagram, Facebook, TikTok, web, teléfono, correo… lo que tengas. Y si quieres recibir pagos directos, tu Nequi, Daviplata o Bre-B.",
  },
];
