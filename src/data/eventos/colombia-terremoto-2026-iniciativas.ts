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
    nombre: "Desaparecidos.co",
    url: "https://desaparecidos.co",
    categoria: "desaparecidos",
    que: "Subes foto, datos y última ubicación conocida de la persona que buscas. Creada por el joven bogotano Santiago Clavijo en los primeros días tras el sismo.",
    para: "Familias y allegados",
    alcance: "Más de 4.800 reportes de personas por localizar, según cobertura de France 24 del 14 de agosto de 2026",
    nota: "Cubre el mismo problema que Colombia Te Busca pero es una plataforma distinta, sin que hayamos confirmado que compartan datos entre ellas: cuantos más registros separados circulen, más difícil es para una familia saber en cuál buscar.",
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
    nota: "El dominio redirige a terremotovenezuela.com: es un dominio reciclado de una emergencia anterior y agrega datos de los dos países. El contenido sirve, pero tenlo en cuenta. No confundir con Terremoto Colombia (terremotocolombia.co, con .co), una iniciativa distinta que sí está hecha para este sismo.",
  },
  {
    nombre: "Terremoto Colombia",
    url: "https://terremotocolombia.co",
    categoria: "acopio",
    que: "Plataforma ciudadana, gratuita y de código abierto, que conecta reportes, recursos y equipos de respuesta durante la emergencia. Para ofrecerte como voluntario dejas tu nombre, teléfono, qué puedes aportar y en qué zona, y el equipo de coordinación se compromete a contactarte en las horas siguientes.",
    para: "Voluntarios, donantes y equipos de respuesta",
    nota: "Es una iniciativa de Mallanet.org, independiente y no gubernamental.",
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
    nombre: "Gravitas",
    url: "https://mapa.gravitasworld.com",
    categoria: "danos",
    que: "Mapeo ciudadano de emergencia que cruza reportes ciudadanos, redes sociales y observación satelital con inteligencia artificial para mostrar en tiempo real qué falta en cada zona: edificaciones colapsadas o dañadas, centros de acopio, logística (vehículos y rutas) y voluntarios disponibles.",
    para: "Ciudadanos, voluntarios, municipios, gobernaciones y equipos de rescate",
    nota: "La adaptó en 42 horas tras el sismo un equipo de cuatro personas liderado por Juan Camilo Garzón.",
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
  {
    nombre: "Cuidar a Colombia",
    url: "https://cuidarcolombia.vercel.app",
    categoria: "acopio",
    que: "Agrega y verifica información oficial dispersa sobre la emergencia: canales de donación, puntos de acopio, bancos de sangre, búsqueda de personas y mapa de zonas afectadas. Cada tarjeta cita la fuente y la fecha que la respalda.",
    para: "Donantes y cualquiera que necesite orientarse en la emergencia",
    nota: "Corre en un subdominio gratuito de Vercel, sin que hayamos podido confirmar quién está detrás. El criterio de citar fuente y fecha en cada dato es el mismo que seguimos nosotros.",
  },
  {
    nombre: "Buscando Huellas",
    url: "https://buscandohuellascol.app",
    categoria: "mascotas",
    que: "Plataforma gratuita para reportar mascotas perdidas o encontradas durante la emergencia, con un directorio aparte de fundaciones que reciben donaciones en las zonas afectadas.",
    para: "Dueños de mascotas del Eje Cafetero",
    nota: "Creada por Daniela Oviedo, periodista de Armenia (Quindío). Nació enfocada en Quindío y Risaralda, aunque es de acceso abierto.",
  },
  {
    nombre: "Mascotas Perdidas Cali",
    url: "https://emergencia-cali.web.app",
    categoria: "mascotas",
    que: "Mapa interactivo para reportar y buscar mascotas perdidas en Cali tras el terremoto, con reportes comunitarios y contacto directo entre quien la encuentra y quien la busca.",
    para: "Dueños de mascotas en Cali",
  },
  {
    nombre: "HOTOSM: respuesta al terremoto de Colombia",
    url: "https://www.hotosm.org/en/projects/2026-colombia-earthquake-response/",
    categoria: "danos",
    que: "Mapeo colaborativo internacional de edificios y vías dañadas: la comunidad de OpenStreetMap Colombia recoge fotos y ubicaciones por WhatsApp a través de su ChatMap, y voluntarios de todo el mundo las usan para actualizar el mapa base de edificaciones en las zonas afectadas.",
    para: "Voluntarios mapeadores y equipos de respuesta",
    alcance: "Más de 800 voluntarios registrados y más de 450 reportes solo en el ChatMap, según la coordinación del propio proyecto.",
    nota: "Es un proyecto internacional del Humanitarian OpenStreetMap Team, no una iniciativa colombiana, pero cubre el mismo hueco de daños en edificaciones que Mapa de daños y Mapa del Terremoto de Colombia.",
  },
  {
    nombre: "Asocapitales: mapa de necesidades y desaparecidos",
    url: "https://www.asocapitales.co/terremoto-colombia.html",
    categoria: "desaparecidos",
    que: "Herramienta digital de la Asociación Colombiana de Ciudades Capitales con un formulario para reportar desaparecidos ante el Puesto de Mando Unificado, que agrega también los reportes de Colombia Te Busca filtrables por ciudad, y un mapa de necesidades y centros de acopio oficiales por ciudad capital. Tiene una línea de urgencia: 300 761 6647.",
    para: "Familias que buscan a alguien y ciudadanos que quieren donar en una ciudad capital",
    nota: "A diferencia de la mayoría de esta lista, la impulsa una entidad gremial de municipios, no una persona ni una empresa.",
  },
  {
    nombre: "SismoAyuda Colombia",
    url: "https://sismoayudaco.com",
    categoria: "danos",
    que: "Evaluación estructural remota y voluntaria de edificaciones dañadas: subes fotos y la dirección del inmueble, y un ingeniero civil voluntario las revisa según las normas ATC-20 y EMS-98 y devuelve por correo una clasificación de habitabilidad (verde, amarillo o rojo) con recomendaciones.",
    para: "Propietarios y comerciantes que necesitan una primera valoración mientras esperan la evaluación oficial",
    nota: "Es la versión colombiana de un proyecto homónimo nacido en Venezuela. No sustituye la evaluación oficial de la UNGRD: es un complemento informal, no un dictamen legal sobre si un local es habitable.",
  },
  {
    nombre: "Ayúdame Colombia",
    url: "https://ayúdamecolombia.space",
    categoria: "acopio",
    que: "Mapa interactivo en tiempo real que cruza qué zonas necesitan ayuda, qué recursos ya están cubiertos y dónde hay excedentes para redistribuir, para evitar que las donaciones se acumulen en un solo punto mientras otros quedan desatendidos. Funciona desde el navegador del móvil, sin instalar nada.",
    para: "Voluntarios y donantes",
    alcance: "Nació centrada en Bogotá; no confirmamos cobertura nacional completa.",
    nota: "Iniciativa personal de una joven bogotana, Sofía Garcés, no de una organización.",
  },
  {
    nombre: "Webapp humanitaria offline (El Errante Coding Labs)",
    url: "https://ayuda-humanitaria-89e72.web.app",
    categoria: "acopio",
    que: "Coordina la entrega de ayuda humanitaria y sigue funcionando parcialmente sin conexión a internet: guarda en el dispositivo la última información recibida y cualquier reporte que hagas sin señal, y lo sincroniza en cuanto recuperas cobertura.",
    para: "Voluntarios y entidades que coordinan ayuda en zonas rurales con conectividad dañada",
    nota: "Desarrollada de forma altruista y sin ánimo de lucro por Mateo CM (El Errante Coding Labs), con apoyo de Publicis Colombia en su gestión y difusión. No tiene un nombre de marca propio más allá del de su creador.",
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
  {
    nombre: "ColombiaCheck",
    url: "https://colombiacheck.com/chequeos/este-video-del-interior-de-un-edificio-que-se-tambalea-no-corresponde-al-terremoto-de",
  },
  {
    nombre: "La Silla Vacía — Detector de Mentiras",
    url: "https://www.lasillavacia.com/detector-de-mentiras/falso/detector-haarp-no-provoco-el-terremoto-del-10-de-agosto/",
  },
  {
    nombre: "Chequeado (Argentina)",
    url: "https://chequeado.com/ultimas-noticias/es-falso-que-haarp-haya-provocado-el-terremoto-de-magnitud-7-4-en-colombia/",
  },
  {
    nombre: "Lupa Media (Ecuador)",
    url: "https://lupa.com.ec/verificaciones/sismo-colombia/",
  },
  {
    nombre: "la diaria Verifica (Uruguay)",
    url: "https://ladiaria.com.uy/verifica/articulo/2026/8/las-desinformaciones-que-circularon-tras-el-terremoto-en-colombia-videos-de-otros-paises-imagenes-de-ia-y-teorias-conspirativas/",
  },
  {
    nombre: "Grupo Animal (México)",
    url: "https://grupoanimal.mx/verificacion-de-hechos/desinformacion-sismo-colombia",
  },
  {
    nombre: "Cotejo.info (Venezuela)",
    url: "https://cotejo.info/2026/08/falso-que-exista-un-patron-entre-los-terremotos-de-venezuela-y-colombia/",
  },
];
