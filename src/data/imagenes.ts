/**
 * Imágenes del sitio, todas con licencia libre verificada.
 *
 * NO se usan fotos de prensa. Las de El Tiempo, Infobae, Semana o Colprensa son
 * de agencia y están licenciadas: citar al autor no es una licencia. Aquí solo
 * entra material cuya licencia permite la reutilización, y siempre con autor,
 * licencia y enlace al original, como exige la propia licencia.
 *
 * Y una regla nuestra, aparte de la legal: una foto solo se usa donde
 * corresponde. Una imagen genérica de escombros junto al nombre de una ciudad
 * se lee como documentación de esa ciudad. Si no hay foto libre de un sitio,
 * no se pone foto.
 */

import pereiraWck from "../assets/pereira-wck.jpg";
import colombiaWck from "../assets/colombia-wck.jpg";
import mapaDepartamentos from "../assets/mapa-departamentos.png";

export type Credito = {
  src: ImageMetadata;
  alt: string;
  pie: string;
  autor: string;
  licencia: string;
  licenciaUrl: string;
  origenUrl: string;
};

export const IMG_PEREIRA: Credito = {
  src: pereiraWck,
  alt: "Escombros de un edificio derrumbado en Pereira tras el terremoto del 10 de agosto de 2026.",
  pie: "Escombros de un edificio en Pereira tras el terremoto del 10 de agosto de 2026.",
  autor: "World Central Kitchen",
  licencia: "CC BY 4.0",
  licenciaUrl: "https://creativecommons.org/licenses/by/4.0/deed.es",
  origenUrl:
    "https://commons.wikimedia.org/wiki/File:Pereira_after_the_earthquake_-_WCK_(cropped).jpg",
};

export const IMG_COLOMBIA: Credito = {
  src: colombiaWck,
  alt: "Escombros de varios edificios en Colombia tras el terremoto del 10 de agosto de 2026.",
  pie: "Escombros en Colombia tras el terremoto del 10 de agosto de 2026. La imagen es del conjunto del país, no de una localidad concreta.",
  autor: "World Central Kitchen",
  licencia: "CC BY 4.0",
  licenciaUrl: "https://creativecommons.org/licenses/by/4.0/deed.es",
  origenUrl:
    "https://commons.wikimedia.org/wiki/File:Colombia_after_the_earthquake_-_WCK.jpg",
};

export const IMG_MAPA: Credito = {
  src: mapaDepartamentos,
  alt: "Mapa de Colombia con los departamentos afectados por el terremoto del 10 de agosto de 2026 resaltados.",
  pie: "Departamentos afectados por el terremoto del 10 de agosto de 2026.",
  autor: "Tarisito",
  licencia: "CC BY-SA 4.0",
  licenciaUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
  origenUrl:
    "https://commons.wikimedia.org/wiki/File:Colombian_departments_affected_by_the_2026_Colombia_earthquake.png",
};

/** Imagen libre disponible para cada localidad. Si no está aquí, no hay foto. */
export const IMAGEN_POR_LOCALIDAD: Record<string, Credito> = {
  pereira: IMG_PEREIRA,
};
