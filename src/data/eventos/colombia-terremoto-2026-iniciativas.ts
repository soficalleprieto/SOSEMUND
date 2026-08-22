import type { Iniciativa, Verificador } from "../tipos";

/**
 * Iniciativas ciudadanas surgidas tras el terremoto, revisadas una por una el
 * 13 de agosto de 2026. El análisis completo está en docs/proyectos-ayuda.md.
 *
 * NO copiamos sus datos. Los centros de acopio cambian cada hora y ellos los
 * mantienen bien; duplicarlos aquí solo produciría información caducada. Lo que
 * les falta es que se les encuentre: la más avanzada, Acopio Pereira, no tiene
 * un solo enlace rastreable y es invisible en Google. Ellos coordinan, nosotros
 * hacemos encontrable.
 */
export const iniciativasColombia2026: Iniciativa[] = [
  {
    nombre: "Acopio Pereira",
    url: "https://ayudaspereira.com",
    categoria: "acopio",
    que: "Coordina centros de acopio emparejando lo que sobra con lo que falta. Entras por cuatro caminos: tengo algo para donar, quiero ser voluntario, tengo carro y puedo transportar, o trabajo en un centro de acopio. Gestiona logística real, con rutas de transporte y su carga.",
    para: "Donantes, voluntarios, transportistas y centros de acopio",
    alcance: "57 centros en 17 municipios de Risaralda, Caldas, Quindío, Valle del Cauca, Tolima y Bogotá",
    nota: "Es la más desarrollada de todas. Protege los teléfonos tras inicio de sesión para evitar suplantaciones, que nos parece un acierto.",
  },
  {
    nombre: "Red de Acopio",
    url: "https://acopio-ayuda.up.railway.app",
    categoria: "acopio",
    que: "Directorio geolocalizado de puntos de recolección: qué necesita cada uno en ese momento, horarios y contacto. Coteja la información con gobernaciones y alcaldías.",
    para: "Personas que quieren donar",
    nota: "Cubre el mismo terreno que Acopio Pereira. Si buscas un punto concreto, conviene mirar los dos.",
  },
  {
    nombre: "Unidos por Pereira",
    url: "https://unidosporpereira.com",
    categoria: "acopio",
    que: "Agrega en tiempo real albergues, centros de distribución y necesidades urgentes de la ciudad, con mapa interactivo, coordinación de donaciones, voluntarios y recuperación de mascotas.",
    para: "Residentes, voluntarios y organizaciones de Pereira",
  },
  {
    nombre: "NexBio Ayuda",
    url: "https://nexbio.pro/comunidad/cali",
    categoria: "acopio",
    que: "Plataforma por ciudades con cuatro accesos: necesito ayuda, quiero ayudar, buscar a alguien y mapa de puntos. Juntas de acción comunal, iglesias, alcaldías, defensa civil y ONG pueden registrarse como puntos de entrega.",
    para: "Afectados, donantes y familias",
    nota: "Modera todo antes de publicar, cita fuentes oficiales y no toca el dinero: en las campañas verificadas el aporte va directo al beneficiario. Es el que mejor trabaja la fiabilidad.",
  },
  {
    nombre: "Red de Ayuda Manizales",
    url: "https://redayudamanizales.com",
    categoria: "acopio",
    que: "Pone en contacto a quien tiene recursos, habilidades o servicios con quien los necesita.",
    para: "Mixto, con foco en Manizales",
  },
  {
    nombre: "Colombia Te Busca",
    url: "https://colombiatebusca.com",
    categoria: "desaparecidos",
    que: "Registro ciudadano de personas desaparecidas o localizadas, impulsado por Ascopitales. Se reporta con fotografía y datos identificativos, y se difunde por WhatsApp y redes.",
    para: "Familias y allegados",
    alcance: "5.351 reportes el 13 de agosto: 4.238 personas aún desaparecidas y 1.109 localizadas",
    nota: "No reemplaza a la Policía, la Fiscalía, Medicina Legal ni a los equipos de rescate; lo dice la propia plataforma.",
  },
  {
    nombre: "Encontrados.co",
    url: "https://encontrados.co",
    categoria: "desaparecidos",
    que: "Búsqueda de desaparecidos que además permite subir fotos de personas ya rescatadas y compararlas por inteligencia artificial contra la base de reportes. Integrado con Colombia Te Busca.",
    para: "Familias, voluntarios y rescatistas",
  },
  {
    nombre: "Auxilio Sísmico Colombia",
    url: "https://redsismo.com",
    categoria: "urgente",
    que: "Conecta a quien necesita algo urgente —agua, comida, medicinas, refugio— con voluntarios que responden por WhatsApp. Los avisos se archivan solos a las 72 horas para que no envejezcan.",
    para: "Personas afectadas y voluntarios",
  },
  {
    nombre: "Mapa de daños",
    url: "https://terremotocolombia.com",
    categoria: "danos",
    que: "Mapa colaborativo de daños estructurales alimentado por reportes ciudadanos, con búsqueda por ubicación y herramientas de coordinación para equipos de rescate.",
    para: "Rescatistas y organizaciones",
    nota: "El dominio redirige a terremotovenezuela.com: es un dominio reciclado de una emergencia anterior y agrega datos de los dos países. El contenido sirve, pero tenlo en cuenta.",
  },
  {
    nombre: "Mapa del Terremoto de Colombia",
    url: "https://www.mapadelterremoto.com",
    categoria: "danos",
    que: "Registro abierto de más de 3.400 puntos de daños, albergues y centros de acopio, construido a partir de fuentes públicas y con cada punto citando su fuente y nivel de verificación. Se puede consultar por municipio: Cali, Pereira, Manizales, Armenia, Quibdó, Buenaventura y decenas más.",
    para: "Afectados, voluntarios y rescatistas",
    nota: "El propio sitio aclara que no es fuente oficial y que ningún dato de aquí sustituye el parte de la autoridad competente.",
  },
  {
    nombre: "Asistente de WhatsApp @colombiapalante",
    url: "https://wa.me/573332385264",
    categoria: "urgente",
    que: "Asistente conversacional gratuito por WhatsApp, hecho por la empresa JumpCube con apoyo de Amazon Web Services, que orienta según tu ubicación y necesidad: centros de acopio y qué donar, alojamiento temporal, seguros, subsidios estatales, asesoría legal, voluntariado y canales oficiales de búsqueda de personas.",
    para: "Afectados y voluntarios",
    nota: "Es el desarrollo de una empresa privada, no una plataforma oficial. Según describe, contrasta con al menos dos fuentes la información de mayor riesgo (líneas de emergencia, cuentas para donar) antes de entregarla.",
  },
  {
    nombre: "Qrarte Pets",
    url: "https://qrartepets.com",
    categoria: "mascotas",
    que: "Red de búsqueda de mascotas perdidas, asociada a un servicio de placas QR de identificación.",
    para: "Dueños de mascotas",
    nota: "Es una empresa privada, no una iniciativa de emergencia, y su portada no menciona el terremoto.",
  },
];

/**
 * Verificadores que han desmentido noticias falsas de este terremoto. No
 * opinamos sobre quién informa bien: remitimos a quien verifica con método
 * publicado.
 */
export const verificadoresColombia2026: Verificador[] = [
  {
    nombre: "Maldita.es",
    url: "https://maldita.es/desinfo/20260814/bulos-desinformaciones-terremoto-10-de-agosto-de-2026-colombia/",
  },
  {
    nombre: "Newtral",
    url: "https://www.newtral.es/bulos-terremoto-colombia/20260811/",
  },
  {
    nombre: "Factchequeado",
    url: "https://factchequeado.com/verificaciones/20260811/desdesinformaciones-terremoto-colombia-10agosto/",
  },
  {
    nombre: "Ecuador Chequea",
    url: "https://ecuadorchequea.com/virales-terremoto-10-de-agosto-colombia-verificados/",
  },
  {
    nombre: "Verificado (México)",
    url: "https://verificado.com.mx/desinformaciones-terremoto-10-agosto-colombia",
  },
];
