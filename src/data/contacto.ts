/**
 * Canal por el que los negocios mandan su ficha.
 *
 * WhatsApp y no un formulario web a propósito: quien acaba de perder su local
 * no rellena un formulario con subida de archivos en una conexión mala, pero sí
 * manda cinco fotos por WhatsApp. Es además por donde circula de verdad la
 * información entre comerciantes en Colombia.
 *
 * Para cambiarlo, solo esta constante.
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

/** Lo que le pedimos a un negocio que nos mande. */
export const QUE_MANDAR = [
  {
    titulo: "Cómo se llama y qué vendías",
    texto:
      "El nombre del negocio, a qué se dedica y en qué localidad está. Nada más de momento.",
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
