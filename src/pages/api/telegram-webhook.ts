// Webhook del bot de Telegram admin. Recibe los mensajes que Sofía le manda
// al bot y, más adelante, es el mismo canal por el que se avisa cuando llega
// una ficha de negocio nueva desde el bot de WhatsApp. También recibe los
// toques al botón "Fusionar/Descartar" que github-webhook.ts añade a cada
// aviso de PR nuevo, para aprobar sin salir de Telegram.
export const prerender = false;

import type { APIRoute } from "astro";
import sharp from "sharp";
import { colombiaTerremoto2026 } from "../../data/eventos/colombia-terremoto-2026";

const TELEGRAM_API = "https://api.telegram.org";
const GITHUB_API = "https://api.github.com";
const SITIO = "https://sosemund.org";
const REPO = "soficalleprieto/SOSEMUND";
const RAMA_BASE = "main";
const ARCHIVO_NEGOCIOS = "src/data/eventos/colombia-terremoto-2026-negocios.ts";

/**
 * Clave de verificación de IndexNow: el archivo público
 * `/${INDEXNOW_KEY}.txt` (con la misma clave dentro) es lo que prueba que
 * quien avisa de una URL nueva es el dueño del sitio. Bing, Yandex y Naver
 * la usan para indexar rápido sin esperar a rastrear por su cuenta; Google
 * no participa en este protocolo, así que esto es un extra sobre el
 * sitemap, no un sustituto.
 */
const INDEXNOW_KEY = "b2470eec49f7710d1136df2c51acfca1";

/** No bloquea el aviso de Telegram si falla: es un extra, no algo crítico. */
async function avisarIndexNow(urls: string[]) {
  if (urls.length === 0) return;
  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "sosemund.org",
        key: INDEXNOW_KEY,
        keyLocation: `${SITIO}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });
  } catch {
    // Silencioso a propósito: no es razón para que falle la fusión del PR.
  }
}

/** El único archivo con datos de las 11 localidades y de las ayudas generales. */
const ARCHIVO_PRINCIPAL = "src/data/eventos/colombia-terremoto-2026.ts";

/** A qué página pública corresponde cada uno de los otros archivos de datos. */
const PAGINA_POR_ARCHIVO: { prefijo: string; ruta: string }[] = [
  { prefijo: "src/data/eventos/colombia-terremoto-2026-iniciativas.ts", ruta: "/colombia/terremoto-2026/iniciativas" },
  { prefijo: "src/data/eventos/colombia-terremoto-2026-negocios.ts", ruta: "/colombia/terremoto-2026/negocios" },
  { prefijo: "src/data/eventos/colombia-terremoto-2026-cuentas.ts", ruta: "/colombia/terremoto-2026/cuentas" },
];

async function archivosDelPR(githubToken: string, repo: string, numero: string) {
  const resp = await fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}/files?per_page=100`, {
    headers: cabecerasGitHub(githubToken),
  });
  if (!resp.ok) return [];
  return (await resp.json()) as { filename: string; patch?: string }[];
}

/** Línea de inicio (en el archivo ya modificado) de cada bloque `@@` de un diff. */
function lineasNuevasDelPatch(patch: string): number[] {
  return [...patch.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/gm)].map((m) => Number(m[1]));
}

async function contenidoArchivo(githubToken: string, repo: string, ruta: string, ref: string) {
  const resp = await fetch(`${GITHUB_API}/repos/${repo}/contents/${encodeURIComponent(ruta)}?ref=${ref}`, {
    headers: { ...cabecerasGitHub(githubToken), Accept: "application/vnd.github.raw" },
  });
  if (!resp.ok) return null;
  return resp.text();
}

/**
 * `colombia-terremoto-2026.ts` mezcla dos cosas muy distintas: `localidades`
 * (11 ciudades, cada una con su propia página) y `ayudas` (bancarios,
 * tributarios…, un solo texto que sale igual en las 11 páginas de ciudad).
 * Enlazar siempre a la misma ciudad (p. ej. Cali) es engañoso cuando el
 * cambio real fue el censo de otra ciudad — o cuando el cambio es general y
 * no pertenece a ninguna ciudad en particular. Esto ubica cada línea tocada
 * comparando su número contra dónde empieza cada sección del archivo, y si
 * cae dentro de `localidades`, busca el `slug` de esa ciudad hacia atrás.
 */
function ubicarCambios(contenido: string, lineasNuevas: number[]) {
  const lineas = contenido.split("\n");
  const idxLocalidades = lineas.findIndex((l) => /^\s*localidades:\s*\[/.test(l));
  const idxAyudas = lineas.findIndex((l) => /^\s*ayudas:\s*\[/.test(l));

  const localidades = new Set<string>();
  let ayudasGenerales = false;

  for (const lineaUno of lineasNuevas) {
    const i = lineaUno - 1;
    if (idxLocalidades >= 0 && i > idxLocalidades && (idxAyudas < 0 || i < idxAyudas)) {
      for (let j = i; j > idxLocalidades; j--) {
        const m = lineas[j].match(/^\s*slug:\s*"([^"]+)"/);
        if (m) {
          localidades.add(m[1]);
          break;
        }
      }
    } else if (idxAyudas >= 0 && i > idxAyudas) {
      ayudasGenerales = true;
    }
  }

  return { localidades: [...localidades], ayudasGenerales };
}

/** Arma el bloque "verlo publicado" a partir de los archivos que tocó el PR. */
async function resumenPublicacion(
  githubToken: string,
  repo: string,
  numero: string,
  mergeSha: string,
) {
  const archivos = await archivosDelPR(githubToken, repo, numero);
  const lineas: string[] = [];

  for (const p of PAGINA_POR_ARCHIVO) {
    if (archivos.some((a) => a.filename === p.prefijo)) lineas.push(`${SITIO}${p.ruta}`);
  }

  const principal = archivos.find((a) => a.filename === ARCHIVO_PRINCIPAL && a.patch);
  if (principal?.patch) {
    const contenido = await contenidoArchivo(githubToken, repo, ARCHIVO_PRINCIPAL, mergeSha);
    if (contenido) {
      const { localidades, ayudasGenerales } = ubicarCambios(contenido, lineasNuevasDelPatch(principal.patch));
      for (const slug of localidades) lineas.push(`${SITIO}/colombia/terremoto-2026/${slug}`);
      if (ayudasGenerales) {
        lineas.push(`${SITIO}/colombia/terremoto-2026`);
      }
    }
  }

  return [...new Set(lineas)];
}

async function enviarMensaje(token: string, chatId: number, texto: string) {
  await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: texto }),
  });
}

async function editarMensaje(
  token: string,
  chatId: number,
  messageId: number,
  texto: string,
) {
  await fetch(`${TELEGRAM_API}/bot${token}/editMessageText`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, message_id: messageId, text: texto }),
  });
}

async function responderCallback(token: string, callbackId: string, texto: string) {
  await fetch(`${TELEGRAM_API}/bot${token}/answerCallbackQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callback_query_id: callbackId, text: texto, show_alert: false }),
  });
}

function cabecerasGitHub(githubToken: string) {
  return {
    Authorization: `Bearer ${githubToken}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };
}

/**
 * El agente que abre los PR automáticos los deja en borrador ("draft"), y
 * GitHub no deja fusionar un borrador aunque el token tenga permiso. Antes de
 * fusionar, si el PR sigue en borrador, lo pasa a "listo para revisar" (solo
 * la API GraphQL de GitHub soporta esto, no hay endpoint REST).
 */
async function marcarListoParaRevisar(githubToken: string, nodeId: string) {
  await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      query:
        "mutation($id: ID!) { markPullRequestReadyForReview(input: { pullRequestId: $id }) { pullRequest { id } } }",
      variables: { id: nodeId },
    }),
  });
}

/**
 * Fusiona o descarta el PR en GitHub. Necesita GITHUB_TOKEN: un token de
 * acceso limitado solo a este repo (permisos Contents + Pull requests, en
 * lectura y escritura), nunca un token con alcance a toda la cuenta.
 */
async function resolverPR(
  githubToken: string,
  repo: string,
  numero: string,
  accion: "merge" | "close",
): Promise<{ ok: boolean; mergeSha?: string; detalle?: string }> {
  if (accion === "merge") {
    const pr = await fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}`, {
      headers: cabecerasGitHub(githubToken),
    }).then((r) => r.json());

    if (pr.draft) {
      await marcarListoParaRevisar(githubToken, pr.node_id);
    }

    const resp = await fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}/merge`, {
      method: "PUT",
      headers: cabecerasGitHub(githubToken),
      body: JSON.stringify({ merge_method: "squash" }),
    });
    if (!resp.ok) return { ok: false, detalle: await resp.text() };
    const resultado = (await resp.json()) as { sha: string };
    return { ok: true, mergeSha: resultado.sha };
  }

  const resp = await fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}`, {
    method: "PATCH",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({ state: "closed" }),
  });
  if (!resp.ok) return { ok: false, detalle: await resp.text() };
  return { ok: true };
}

/*
 * Detección y parseo del mensaje que arma `construirMensaje()` en
 * /negocios/alta.astro. Es un formato fijo generado por nosotros mismos, así
 * que en vez de una única regex frágil, se busca cada etiqueta conocida por
 * posición y se recorta el texto entre una etiqueta y la siguiente que
 * aparezca: así da igual qué bloques opcionales falten (donde, contactos,
 * cómo ayudar), no hay que enumerar las combinaciones a mano.
 */
const PREFIJO_MENSAJE_NEGOCIO = "Hola. Mi negocio resultó afectado";
const MARCADOR_FINAL = "\n(Voy a mandar";

const ETIQUETAS_NEGOCIO = [
  { clave: "nombre", etiqueta: "Nombre:" },
  { clave: "localidad", etiqueta: "Localidad:" },
  { clave: "tipo", etiqueta: "Tipo de negocio:" },
  { clave: "quedo", etiqueta: "Cómo quedó:" },
  { clave: "necesita", etiqueta: "Qué necesita:" },
  { clave: "donde", etiqueta: "Dónde lo encuentran hoy:" },
  { clave: "contactos", etiqueta: "Por dónde me pueden escribir:" },
  { clave: "comoAyudar", etiqueta: "Cómo me pueden ayudar:" },
] as const;

function esMensajeNegocioNuevo(texto: string) {
  return texto.trim().startsWith(PREFIJO_MENSAJE_NEGOCIO);
}

function extraerCamposNegocio(texto: string): Record<string, string> | null {
  const finIdx = texto.indexOf(MARCADOR_FINAL);
  const cuerpo = finIdx >= 0 ? texto.slice(0, finIdx) : texto;

  const posiciones = ETIQUETAS_NEGOCIO.map((m) => ({ ...m, idx: cuerpo.indexOf(m.etiqueta) }))
    .filter((m) => m.idx >= 0)
    .sort((a, b) => a.idx - b.idx);

  const valores: Record<string, string> = {};
  for (let i = 0; i < posiciones.length; i++) {
    const desde = posiciones[i].idx + posiciones[i].etiqueta.length;
    const hasta = i + 1 < posiciones.length ? posiciones[i + 1].idx : cuerpo.length;
    valores[posiciones[i].clave] = cuerpo.slice(desde, hasta).trim();
  }

  if (!valores.nombre || !valores.localidad || !valores.tipo || !valores.quedo || !valores.necesita) {
    return null;
  }
  return valores;
}

const ETIQUETA_A_CLAVE_CONTACTO: Record<string, string> = {
  WhatsApp: "whatsapp",
  Instagram: "instagram",
  Facebook: "facebook",
  TikTok: "tiktok",
  Web: "web",
  Teléfono: "telefono",
};

/**
 * La ficha pinta cada contacto como `<a href={n.contacto[clave]}>`: espera
 * una URL ya hecha (o mailto:/tel:), no lo que alguien escribe a mano en
 * WhatsApp ("3205231254", "@mitienda", "mitienda.oficial"...). Sin esto, el
 * enlace queda roto (apunta a una ruta relativa del propio sitio).
 */
function normalizarWhatsApp(valor: string) {
  const digitos = valor.replace(/\D/g, "");
  if (!digitos) return null;
  // Colombia: los móviles se escriben con 10 dígitos, sin indicativo. Si ya
  // trae uno (empieza por 57 y es más largo) se deja tal cual.
  const numero = digitos.length === 10 ? `57${digitos}` : digitos;
  return `https://wa.me/${numero}`;
}

/** `prefijoRuta` es lo que va delante del usuario en la URL del perfil: TikTok lo pide con "@", Instagram y Facebook sin él. */
function normalizarRed(valor: string, dominio: string, prefijoRuta = "") {
  const limpio = valor.trim();
  if (/^https?:\/\//i.test(limpio)) return limpio;
  const handle = limpio.replace(/^@/, "");
  if (!handle) return null;
  // "calzado la gran economia" es el NOMBRE de una página, no un usuario: no
  // hay URL directa fiable para eso. El buscador propio de Facebook exige
  // sesión iniciada y da "Not Found" a quien no la tiene, así que en vez de
  // eso se manda a Google restringido a ese dominio, que sí resuelve sin
  // necesitar cuenta.
  if (/\s/.test(handle)) {
    return `https://www.google.com/search?q=${encodeURIComponent(`${handle} site:${dominio}`)}`;
  }
  return `https://${dominio}/${prefijoRuta}${handle}`;
}

function normalizarWeb(valor: string) {
  const limpio = valor.trim();
  return /^https?:\/\//i.test(limpio) ? limpio : `https://${limpio}`;
}

function normalizarTelefono(valor: string) {
  const digitos = valor.replace(/[^\d+]/g, "");
  return digitos ? `tel:${digitos}` : null;
}

function parsearContactos(bloque?: string): Record<string, string> {
  const contacto: Record<string, string> = {};
  if (!bloque) return contacto;
  for (const linea of bloque.split("\n")) {
    const m = linea.match(/^(WhatsApp|Instagram|Facebook|TikTok|Web|Teléfono):\s*(.+)$/);
    if (!m) continue;
    const clave = ETIQUETA_A_CLAVE_CONTACTO[m[1]];
    const valor = m[2].trim();
    if (!clave || !valor) continue;

    const normalizado =
      clave === "whatsapp"
        ? normalizarWhatsApp(valor)
        : clave === "instagram"
          ? normalizarRed(valor, "instagram.com")
          : clave === "facebook"
            ? normalizarRed(valor, "facebook.com")
            : clave === "tiktok"
              ? normalizarRed(valor, "tiktok.com", "@")
              : clave === "web"
                ? normalizarWeb(valor)
                : clave === "telefono"
                  ? normalizarTelefono(valor)
                  : valor;

    if (normalizado) contacto[clave] = normalizado;
  }
  return contacto;
}

/** "Panadería López" → "panaderia-lopez". Sin depender de librerías externas. */
function eslugar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function slugDisponible(slug: string, contenidoActual: string) {
  return !contenidoActual.includes(`slug: "${slug}"`);
}

function generarSlug(nombre: string, contenidoActual: string) {
  const base = eslugar(nombre) || "negocio";
  if (slugDisponible(base, contenidoActual)) return base;
  for (let i = 2; i < 50; i++) {
    const candidato = `${base}-${i}`;
    if (slugDisponible(candidato, contenidoActual)) return candidato;
  }
  return `${base}-${Date.now()}`;
}

/** Busca la localidad por nombre visible (así llega en el mensaje) y devuelve su slug. */
function localidadPorNombre(nombreLocalidad: string) {
  const normalizado = eslugar(nombreLocalidad);
  return colombiaTerremoto2026.localidades.find((l) => eslugar(l.nombre) === normalizado);
}

function ts(valor: string) {
  return JSON.stringify(valor);
}

function generarObjetoNegocio(datos: {
  slug: string;
  nombre: string;
  actividad: string;
  localidadSlug: string;
  quedo: string;
  necesita: string[];
  donde?: string;
  operando: boolean;
  contacto: Record<string, string>;
  fecha: string;
}) {
  const lineasNecesita = datos.necesita.map((n) => `      ${ts(n)},`).join("\n");
  const lineasContacto = Object.entries(datos.contacto)
    .map(([clave, valor]) => `      ${clave}: ${ts(valor)},`)
    .join("\n");

  return `  {
    slug: ${ts(datos.slug)},
    nombre: ${ts(datos.nombre)},
    actividad: ${ts(datos.actividad)},
    localidad: ${ts(datos.localidadSlug)},
    // TODO: falta la historia (qué era este negocio antes) — el alta por
    // WhatsApp no la pide todavía. Pregúntasela y añade el campo \`historia\`
    // antes de fusionar si consigues la respuesta; si no, se publica sin ella.
    estado: {
      local: "sin-datos",
      mercancia: "sin-datos",
      equipos: "sin-datos",
      detalle: ${ts(datos.quedo)},
    },
    operando: ${datos.operando},
${datos.donde ? `    dondeEstaAhora: ${ts(datos.donde)},\n` : ""}    necesita: [
${lineasNecesita}
    ],
    contacto: {
${lineasContacto}
    },
    revisadaEl: ${ts(datos.fecha)},
    consentimiento: true,
  },
`;
}

async function refSha(githubToken: string, rama: string) {
  const resp = await fetch(`${GITHUB_API}/repos/${REPO}/git/ref/heads/${rama}`, {
    headers: cabecerasGitHub(githubToken),
  });
  if (!resp.ok) return null;
  const data = (await resp.json()) as { object: { sha: string } };
  return data.object.sha;
}

/**
 * Si una rama de negocio sigue teniendo trabajo pendiente de fusionar: NO
 * basta con que la rama exista (`refSha`), porque este repo no borra las
 * ramas al fusionar un PR y una rama fusionada hace tiempo puede seguir ahí.
 * Confiar solo en "existe" hizo que una foto se subiera una vez a una rama ya
 * fusionada, sin PR que la mostrara: quedó invisible. Esto comprueba que de
 * verdad hay un PR abierto.
 */
async function prAbiertoParaRama(githubToken: string, rama: string): Promise<{ html_url: string; number: number } | null> {
  const resp = await fetch(
    `${GITHUB_API}/repos/${REPO}/pulls?head=${REPO.split("/")[0]}:${rama}&state=open`,
    { headers: cabecerasGitHub(githubToken) },
  );
  if (!resp.ok) return null;
  const prs = (await resp.json()) as { html_url: string; number: number }[];
  return Array.isArray(prs) && prs[0] ? prs[0] : null;
}

async function contenidoYSha(githubToken: string, ruta: string, ref: string) {
  const resp = await fetch(
    `${GITHUB_API}/repos/${REPO}/contents/${encodeURIComponent(ruta)}?ref=${ref}`,
    { headers: cabecerasGitHub(githubToken) },
  );
  if (!resp.ok) return null;
  const data = (await resp.json()) as { content: string; sha: string };
  return { contenido: Buffer.from(data.content, "base64").toString("utf-8"), sha: data.sha };
}

/**
 * Crea una ficha de negocio nueva a partir del texto de WhatsApp: rama propia
 * desde main, inserta el objeto justo tras el `[` de apertura del array (el
 * único punto de inserción que no depende de cuántas fichas haya ya), y abre
 * un PR — mismo circuito de aprobación por Telegram que ya existe para todo
 * lo demás, nada se publica sin que Sofía lo revise y fusione.
 */
async function crearPRNegocio(
  githubToken: string,
  datos: Omit<Parameters<typeof generarObjetoNegocio>[0], "slug"> & { nombre: string },
): Promise<{ ok: true; prUrl: string; prNumero: number; slug: string } | { ok: false; detalle: string }> {
  const shaMain = await refSha(githubToken, RAMA_BASE);
  if (!shaMain) return { ok: false, detalle: "No pude leer la rama main." };

  const archivo = await contenidoYSha(githubToken, ARCHIVO_NEGOCIOS, shaMain);
  if (!archivo) return { ok: false, detalle: "No pude leer el archivo de negocios." };

  const slug = generarSlug(datos.nombre, archivo.contenido);

  const marcaInsercion = /export const negociosColombia2026: Negocio\[\] = \[\n/;
  if (!marcaInsercion.test(archivo.contenido)) {
    return { ok: false, detalle: "No encontré dónde insertar la ficha nueva en el archivo." };
  }
  const contenidoNuevo = archivo.contenido.replace(
    marcaInsercion,
    (m) => m + generarObjetoNegocio({ ...datos, slug }),
  );

  const rama = `negocio-${slug}`;
  const refExistente = await refSha(githubToken, rama);
  if (!refExistente) {
    const creaRama = await fetch(`${GITHUB_API}/repos/${REPO}/git/refs`, {
      method: "POST",
      headers: cabecerasGitHub(githubToken),
      body: JSON.stringify({ ref: `refs/heads/${rama}`, sha: shaMain }),
    });
    if (!creaRama.ok) return { ok: false, detalle: `No pude crear la rama: ${await creaRama.text()}` };
  }

  const subeArchivo = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${ARCHIVO_NEGOCIOS}`, {
    method: "PUT",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      message: `Añade ficha de negocio: ${datos.nombre}`,
      content: Buffer.from(contenidoNuevo, "utf-8").toString("base64"),
      sha: archivo.sha,
      branch: rama,
    }),
  });
  if (!subeArchivo.ok) return { ok: false, detalle: `No pude subir el archivo: ${await subeArchivo.text()}` };

  if (refExistente) {
    // Ya había un PR abierto para esta ficha (p. ej. llegó dos veces el
    // mismo mensaje): no se abre un segundo, el push ya actualizó el que
    // existía.
    const prs = await fetch(
      `${GITHUB_API}/repos/${REPO}/pulls?head=${REPO.split("/")[0]}:${rama}&state=open`,
      { headers: cabecerasGitHub(githubToken) },
    ).then((r) => r.json());
    if (Array.isArray(prs) && prs[0]) {
      return { ok: true, prUrl: prs[0].html_url, prNumero: prs[0].number, slug };
    }
  }

  const creaPR = await fetch(`${GITHUB_API}/repos/${REPO}/pulls`, {
    method: "POST",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      title: `Ficha de negocio: ${datos.nombre}`,
      head: rama,
      base: RAMA_BASE,
      draft: true,
      body: "Ficha creada automáticamente desde un mensaje de WhatsApp reenviado a Telegram. Revisa todos los campos —sobre todo la localidad y la historia— antes de fusionar.",
    }),
  });
  if (!creaPR.ok) return { ok: false, detalle: `No pude abrir el PR: ${await creaPR.text()}` };
  const pr = (await creaPR.json()) as { html_url: string; number: number };
  return { ok: true, prUrl: pr.html_url, prNumero: pr.number, slug };
}

/*
 * Fotos por Telegram: en vez de adivinar a qué negocio pertenece una foto
 * (arriesgado si hay más de una ficha "en vuelo" a la vez), el bot siempre
 * pregunta con botones — primero el negocio, luego si es antes/después/otra
 * — usando `reply_to_message` para volver a la foto original en cada paso,
 * así no hace falta guardar el file_id de Telegram en ningún sitio.
 */

async function enviarConBotones(
  token: string,
  chatId: number,
  texto: string,
  botones: { texto: string; datos: string }[][],
  replyToMessageId?: number,
) {
  await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: texto,
      ...(replyToMessageId ? { reply_to_message_id: replyToMessageId } : {}),
      reply_markup: {
        inline_keyboard: botones.map((fila) => fila.map((b) => ({ text: b.texto, callback_data: b.datos }))),
      },
    }),
  });
}

async function editarConBotones(
  token: string,
  chatId: number,
  messageId: number,
  texto: string,
  botones: { texto: string; datos: string }[][],
) {
  await fetch(`${TELEGRAM_API}/bot${token}/editMessageText`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
      text: texto,
      reply_markup: {
        inline_keyboard: botones.map((fila) => fila.map((b) => ({ text: b.texto, callback_data: b.datos }))),
      },
    }),
  });
}

/** Negocios recientes a los que se le puede asignar una foto: los que tienen PR abierto y los ya publicados. */
async function negociosCandidatos(githubToken: string): Promise<{ slug: string; nombre: string }[]> {
  const abiertosResp = await fetch(`${GITHUB_API}/repos/${REPO}/pulls?state=open&per_page=20`, {
    headers: cabecerasGitHub(githubToken),
  });
  const abiertos = abiertosResp.ok ? await abiertosResp.json() : [];
  const candidatosAbiertos = (Array.isArray(abiertos) ? abiertos : [])
    .filter((pr: { head?: { ref?: string } }) => typeof pr.head?.ref === "string" && pr.head.ref.startsWith("negocio-"))
    .map((pr: { head: { ref: string }; title: string }) => ({
      slug: pr.head.ref.replace(/^negocio-/, ""),
      nombre: pr.title.replace(/^Ficha de negocio: /, ""),
    }));

  const publicados = [...colombiaTerremoto2026.negocios]
    .filter((n) => !n.esEjemplo)
    .sort((a, b) => b.revisadaEl.localeCompare(a.revisadaEl))
    .slice(0, 6)
    .map((n) => ({ slug: n.slug, nombre: n.nombre }));

  const vistos = new Set<string>();
  return [...candidatosAbiertos, ...publicados]
    .filter((c) => {
      if (vistos.has(c.slug)) return false;
      vistos.add(c.slug);
      return true;
    })
    .slice(0, 8);
}

/** El nombre puede venir de una ficha ya publicada o solo existir en el título de un PR todavía abierto. */
async function nombreNegocioPorSlug(githubToken: string, slug: string): Promise<string> {
  const publicado = colombiaTerremoto2026.negocios.find((n) => n.slug === slug);
  if (publicado) return publicado.nombre;
  const prs = await fetch(
    `${GITHUB_API}/repos/${REPO}/pulls?head=${REPO.split("/")[0]}:negocio-${slug}&state=all&per_page=1`,
    { headers: cabecerasGitHub(githubToken) },
  ).then((r) => (r.ok ? r.json() : []));
  const titulo = Array.isArray(prs) ? (prs[0]?.title as string | undefined) : undefined;
  return titulo?.replace(/^Ficha de negocio: /, "") ?? slug;
}

async function obtenerArchivoTelegram(token: string, fileId: string): Promise<Buffer | null> {
  const infoResp = await fetch(`${TELEGRAM_API}/bot${token}/getFile?file_id=${fileId}`);
  if (!infoResp.ok) return null;
  const info = (await infoResp.json()) as { ok: boolean; result?: { file_path: string } };
  if (!info.ok || !info.result) return null;
  const fileResp = await fetch(`${TELEGRAM_API}/file/bot${token}/${info.result.file_path}`);
  if (!fileResp.ok) return null;
  return Buffer.from(await fileResp.arrayBuffer());
}

/** Mismo tratamiento que scripts/comprimir-fotos.mjs (1800px, calidad 82, mozjpeg, respeta la rotación EXIF), aquí en vez de en la CLI porque esto corre en la función del bot, no en el build. */
async function comprimirFoto(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

async function subirArchivoBinario(
  githubToken: string,
  ruta: string,
  buffer: Buffer,
  rama: string,
  mensaje: string,
): Promise<boolean> {
  const existente = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${encodeURIComponent(ruta)}?ref=${rama}`, {
    headers: cabecerasGitHub(githubToken),
  });
  const shaActual = existente.ok ? ((await existente.json()) as { sha: string }).sha : undefined;
  const resp = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${encodeURIComponent(ruta)}`, {
    method: "PUT",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      message: mensaje,
      content: buffer.toString("base64"),
      branch: rama,
      ...(shaActual ? { sha: shaActual } : {}),
    }),
  });
  return resp.ok;
}

function nombreVariableImport(slug: string, sufijo: string) {
  const camel = slug
    .split("-")
    .filter(Boolean)
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");
  return `${camel}${sufijo}`;
}

/** Añade líneas de import justo después del último import que ya hay en el archivo, sin importar qué venga después (JSDoc, comentarios...). */
function insertarImportsFotos(contenido: string, lineas: string[]): string {
  const regexImport = /^import .+;\r?\n/gm;
  let ultimoFin = 0;
  let m: RegExpExecArray | null;
  while ((m = regexImport.exec(contenido))) {
    ultimoFin = m.index + m[0].length;
  }
  if (ultimoFin === 0) return lineas.join("") + contenido;
  return contenido.slice(0, ultimoFin) + lineas.join("") + contenido.slice(ultimoFin);
}

/** Texto exacto de UN objeto de negocio (de su "  {" a su "  },"), localizado por slug. */
function extraerBloqueObjeto(contenido: string, slug: string): { texto: string; inicio: number; fin: number } | null {
  const marcaSlug = `slug: ${JSON.stringify(slug)},`;
  const idxSlug = contenido.indexOf(marcaSlug);
  if (idxSlug < 0) return null;
  const idxApertura = contenido.lastIndexOf("\n  {\n", idxSlug);
  if (idxApertura < 0) return null;
  const inicio = idxApertura + 1;
  const cierre = contenido.slice(inicio).match(/\n {2}\},\n/);
  if (!cierre || cierre.index === undefined) return null;
  const fin = inicio + cierre.index + cierre[0].length;
  return { texto: contenido.slice(inicio, fin), inicio, fin };
}

type FotoRef = { varName: string; alt: string };
type EstadoFotos = { antes?: FotoRef; despues?: FotoRef; otras: FotoRef[] };

/** El bloque `fotos: {...}` dentro de un bloqueObjeto, si ya existe (cierra a 4 espacios, distinto de los cierres internos de antes/despues/otras a 6). */
function extraerBloqueFotos(bloqueObjeto: string): { texto: string; inicio: number; fin: number } | null {
  const idxInicio = bloqueObjeto.indexOf("\n    fotos: {\n");
  if (idxInicio < 0) return null;
  const cierre = bloqueObjeto.slice(idxInicio).match(/\n {4}\},\n/);
  if (!cierre || cierre.index === undefined) return null;
  const fin = idxInicio + cierre.index + cierre[0].length;
  return { texto: bloqueObjeto.slice(idxInicio, fin), inicio: idxInicio, fin };
}

function parsearFotoRef(bloque: string, clave: "antes" | "despues"): FotoRef | undefined {
  const re = new RegExp(`${clave}: \\{\\s*\\n\\s*src: (\\w+),\\s*\\n\\s*alt: "((?:[^"\\\\]|\\\\.)*)",?\\s*\\n\\s*\\},`);
  const m = bloque.match(re);
  if (!m) return undefined;
  return { varName: m[1], alt: m[2].replace(/\\"/g, '"') };
}

function parsearOtras(bloque: string): FotoRef[] {
  const resultado: FotoRef[] = [];
  const seccionOtras = bloque.match(/otras: \[([\s\S]*?)\n {6}\],/);
  if (!seccionOtras) return resultado;
  const re = /\{\s*\n\s*src: (\w+),\s*\n\s*alt: "((?:[^"\\]|\\.)*)",?\s*\n\s*\},/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(seccionOtras[1]))) {
    resultado.push({ varName: m[1], alt: m[2].replace(/\\"/g, '"') });
  }
  return resultado;
}

function generarBloqueFotos(estado: EstadoFotos): string {
  const partes: string[] = [];
  if (estado.antes) {
    partes.push(
      `      antes: {\n        src: ${estado.antes.varName},\n        alt: ${JSON.stringify(estado.antes.alt)},\n      },`,
    );
  }
  if (estado.despues) {
    partes.push(
      `      despues: {\n        src: ${estado.despues.varName},\n        alt: ${JSON.stringify(estado.despues.alt)},\n      },`,
    );
  }
  if (estado.otras.length > 0) {
    const items = estado.otras
      .map((o) => `        {\n          src: ${o.varName},\n          alt: ${JSON.stringify(o.alt)},\n        },`)
      .join("\n");
    partes.push(`      otras: [\n${items}\n      ],`);
  }
  return `    fotos: {\n${partes.join("\n")}\n    },\n`;
}

function extraerEstadoFotos(bloqueObjeto: string): EstadoFotos {
  const actual = extraerBloqueFotos(bloqueObjeto);
  if (!actual) return { otras: [] };
  return {
    antes: parsearFotoRef(actual.texto, "antes"),
    despues: parsearFotoRef(actual.texto, "despues"),
    otras: parsearOtras(actual.texto),
  };
}

/** Inserta o sustituye una foto en el bloque de un negocio, fusionando con las que ya tuviera. */
function actualizarBloqueObjetoConFoto(
  bloqueObjeto: string,
  nuevaFoto: FotoRef,
  tipo: "antes" | "despues" | "otra",
): string {
  const actual = extraerBloqueFotos(bloqueObjeto);
  const estado = actual
    ? { antes: parsearFotoRef(actual.texto, "antes"), despues: parsearFotoRef(actual.texto, "despues"), otras: parsearOtras(actual.texto) }
    : ({ otras: [] } as EstadoFotos);

  if (tipo === "antes") estado.antes = nuevaFoto;
  else if (tipo === "despues") estado.despues = nuevaFoto;
  else estado.otras = [...estado.otras, nuevaFoto];

  const bloqueNuevo = generarBloqueFotos(estado);

  if (actual) {
    return bloqueObjeto.slice(0, actual.inicio) + "\n" + bloqueNuevo + bloqueObjeto.slice(actual.fin);
  }
  const CIERRE_OBJETO = "  },\n";
  if (!bloqueObjeto.endsWith("\n" + CIERRE_OBJETO)) {
    throw new Error("El bloque del negocio no termina como se esperaba.");
  }
  return bloqueObjeto.slice(0, -CIERRE_OBJETO.length) + bloqueNuevo + CIERRE_OBJETO;
}

/**
 * Elige la rama de trabajo: la del PR de texto si sigue abierto, la de una
 * foto anterior si esa sigue abierta, o una nueva si no hay ninguna. Nunca
 * reutiliza una rama por el simple hecho de que exista (ver `prAbiertoParaRama`).
 */
async function ramaParaFoto(
  githubToken: string,
  slug: string,
): Promise<{ rama: string; abierta: boolean; prExistente: { html_url: string; number: number } | null }> {
  const prNegocio = await prAbiertoParaRama(githubToken, `negocio-${slug}`);
  if (prNegocio) return { rama: `negocio-${slug}`, abierta: true, prExistente: prNegocio };

  const prFoto = await prAbiertoParaRama(githubToken, `foto-${slug}`);
  if (prFoto) return { rama: `foto-${slug}`, abierta: false, prExistente: prFoto };

  // Ni "negocio-{slug}" ni "foto-{slug}" tienen PR abierto: hace falta una
  // rama nueva. Si "foto-{slug}" ya existe pero está fusionada o cerrada, no
  // se reutiliza (se repetiría el mismo fallo que dejó una foto subida sin
  // ningún PR que la mostrara): se usa un nombre distinto.
  const ramaBase = `foto-${slug}`;
  const existeRamaBase = await refSha(githubToken, ramaBase);
  const rama = existeRamaBase ? `${ramaBase}-${Date.now()}` : ramaBase;
  return { rama, abierta: false, prExistente: null };
}

/** Descarga la foto de Telegram, la comprime, la sube y actualiza el dato — abriendo PR si hacía falta uno. */
async function procesarFoto(
  telegramToken: string,
  githubToken: string,
  slug: string,
  nombreNegocio: string,
  tipo: "antes" | "despues" | "otra",
  fileId: string,
): Promise<{ ok: true; mensaje: string } | { ok: false; detalle: string }> {
  const { rama, abierta, prExistente } = await ramaParaFoto(githubToken, slug);

  if (!prExistente) {
    const shaMain = await refSha(githubToken, RAMA_BASE);
    if (!shaMain) return { ok: false, detalle: "No pude leer la rama main." };
    const creaRama = await fetch(`${GITHUB_API}/repos/${REPO}/git/refs`, {
      method: "POST",
      headers: cabecerasGitHub(githubToken),
      body: JSON.stringify({ ref: `refs/heads/${rama}`, sha: shaMain }),
    });
    if (!creaRama.ok) return { ok: false, detalle: `No pude crear la rama: ${await creaRama.text()}` };
  }

  const archivo = await contenidoYSha(githubToken, ARCHIVO_NEGOCIOS, rama);
  if (!archivo) return { ok: false, detalle: "No pude leer el archivo de negocios." };

  const bloque = extraerBloqueObjeto(archivo.contenido, slug);
  if (!bloque) return { ok: false, detalle: `No encontré la ficha de "${slug}" en el archivo.` };

  const otrasActuales = extraerEstadoFotos(bloque.texto).otras;

  const original = await obtenerArchivoTelegram(telegramToken, fileId);
  if (!original) return { ok: false, detalle: "No pude descargar la foto desde Telegram." };
  const comprimida = await comprimirFoto(original);

  const sufijo = tipo === "antes" ? "Antes" : tipo === "despues" ? "Despues" : `Otra${otrasActuales.length + 1}`;
  const archivoNombre = tipo === "antes" ? "antes.jpg" : tipo === "despues" ? "despues.jpg" : `otra-${otrasActuales.length + 1}.jpg`;
  const varName = nombreVariableImport(slug, sufijo);
  const rutaImagen = `src/assets/negocios/${slug}/${archivoNombre}`;
  const altPorDefecto =
    tipo === "antes"
      ? `${nombreNegocio} antes del terremoto.`
      : tipo === "despues"
        ? `${nombreNegocio} tras el terremoto.`
        : `Otra foto de ${nombreNegocio}.`;

  const mensajeCommit = `Añade foto (${tipo}) a: ${nombreNegocio}`;
  const subioImagen = await subirArchivoBinario(githubToken, rutaImagen, comprimida, rama, mensajeCommit);
  if (!subioImagen) return { ok: false, detalle: "No pude subir la imagen a GitHub." };

  const bloqueActualizado = actualizarBloqueObjetoConFoto(bloque.texto, { varName, alt: altPorDefecto }, tipo);
  let contenidoNuevo = archivo.contenido.slice(0, bloque.inicio) + bloqueActualizado + archivo.contenido.slice(bloque.fin);
  contenidoNuevo = insertarImportsFotos(contenidoNuevo, [
    `import ${varName} from "../../assets/negocios/${slug}/${archivoNombre}";\n`,
  ]);

  const subeDatos = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${ARCHIVO_NEGOCIOS}`, {
    method: "PUT",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      message: mensajeCommit,
      content: Buffer.from(contenidoNuevo, "utf-8").toString("base64"),
      sha: archivo.sha,
      branch: rama,
    }),
  });
  if (!subeDatos.ok) return { ok: false, detalle: `No pude actualizar el archivo de datos: ${await subeDatos.text()}` };

  if (abierta) {
    return { ok: true, mensaje: "Foto añadida a la ficha que todavía tienes en revisión." };
  }

  if (prExistente) {
    return { ok: true, mensaje: `Foto añadida a la ficha ya publicada. PR: ${prExistente.html_url}` };
  }

  const creaPR = await fetch(`${GITHUB_API}/repos/${REPO}/pulls`, {
    method: "POST",
    headers: cabecerasGitHub(githubToken),
    body: JSON.stringify({
      title: `Añade foto a: ${nombreNegocio}`,
      head: rama,
      base: RAMA_BASE,
      draft: true,
      body: "Foto añadida desde Telegram a una ficha ya publicada.",
    }),
  });
  if (!creaPR.ok) return { ok: false, detalle: `No pude abrir el PR de la foto: ${await creaPR.text()}` };
  const pr = (await creaPR.json()) as { html_url: string };
  return { ok: true, mensaje: `Foto añadida a la ficha ya publicada. PR: ${pr.html_url}` };
}

export const POST: APIRoute = async ({ request }) => {
  const token = import.meta.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return new Response("Falta configurar TELEGRAM_BOT_TOKEN", { status: 500 });
  }

  // Si hay un secreto configurado, Telegram debe mandarlo en esta cabecera
  // (se fija con el parámetro secret_token de setWebhook). Evita que
  // cualquiera que adivine la URL pueda mandar mensajes falsos al bot.
  const secreto = import.meta.env.TELEGRAM_WEBHOOK_SECRET;
  if (secreto) {
    const cabecera = request.headers.get("x-telegram-bot-api-secret-token");
    if (cabecera !== secreto) {
      return new Response("No autorizado", { status: 401 });
    }
  }

  const actualizacion = await request.json();
  const callback = actualizacion.callback_query;

  if (callback?.data && callback?.message) {
    const chatId = callback.message.chat.id as number;
    const chatAutorizado = import.meta.env.TELEGRAM_CHAT_ID;

    // Solo el chat autorizado puede fusionar o cerrar PRs. Si alguien más
    // llega a hablarle al bot (nombre de usuario filtrado, etc.) el botón no
    // hace nada, solo se le avisa que no tiene permiso.
    if (!chatAutorizado || String(chatId) !== String(chatAutorizado)) {
      await responderCallback(token, callback.id, "No tienes permiso para esto.");
      return new Response("ok", { status: 200 });
    }

    const githubToken = import.meta.env.GITHUB_TOKEN;
    if (!githubToken) {
      await responderCallback(token, callback.id, "Falta configurar GITHUB_TOKEN en el servidor.");
      return new Response("ok", { status: 200 });
    }

    const datosCallback = callback.data as string;

    if (datosCallback.startsWith("elegirneg:")) {
      const slug = datosCallback.slice("elegirneg:".length);
      await responderCallback(token, callback.id, "Negocio elegido.");
      await editarConBotones(token, chatId, callback.message.message_id, "¿Antes, después u otra?", [
        [
          { texto: "Antes", datos: `tipofoto:${slug}:antes` },
          { texto: "Después", datos: `tipofoto:${slug}:despues` },
          { texto: "Otra", datos: `tipofoto:${slug}:otra` },
        ],
      ]);
      return new Response("ok", { status: 200 });
    }

    if (datosCallback.startsWith("tipofoto:")) {
      const [, slug, tipo] = datosCallback.split(":") as [string, string, "antes" | "despues" | "otra"];
      const fotoOriginal = callback.message.reply_to_message?.photo as
        | { file_id: string }[]
        | undefined;

      if (!fotoOriginal || fotoOriginal.length === 0) {
        await responderCallback(token, callback.id, "No encontré la foto original.");
        return new Response("ok", { status: 200 });
      }

      await responderCallback(token, callback.id, "Procesando...");
      const fileId = fotoOriginal[fotoOriginal.length - 1].file_id;
      const nombreNegocio = await nombreNegocioPorSlug(githubToken, slug);
      const resultado = await procesarFoto(token, githubToken, slug, nombreNegocio, tipo, fileId);

      await editarMensaje(
        token,
        chatId,
        callback.message.message_id,
        resultado.ok
          ? `✅ ${resultado.mensaje}`
          : `❌ No pude añadir la foto: ${resultado.detalle.slice(0, 300)}`,
      );
      return new Response("ok", { status: 200 });
    }

    const [accion, repo, numero] = datosCallback.split(":") as ["merge" | "close", string, string];

    if (accion === "merge" || accion === "close") {
      const resultado = await resolverPR(githubToken, repo, numero, accion);
      const textoOriginal = callback.message.text as string;

      if (resultado.ok) {
        const etiqueta = accion === "merge" ? "✅ Fusionado" : "❌ Descartado";
        await responderCallback(token, callback.id, etiqueta);

        let extra = "";
        if (accion === "merge" && resultado.mergeSha) {
          const enlaces = await resumenPublicacion(githubToken, repo, numero, resultado.mergeSha);
          if (enlaces.length > 0) {
            extra =
              `\n\nVerlo publicado (puede tardar 1-2 min en desplegarse):\n` +
              enlaces.map((e) => `→ ${e}`).join("\n");
            await avisarIndexNow(enlaces);
          }
        }

        await editarMensaje(
          token,
          chatId,
          callback.message.message_id,
          `${textoOriginal}\n\n${etiqueta}.${extra}`,
        );
      } else {
        await responderCallback(token, callback.id, "No se pudo. Revísalo en GitHub.");
        await enviarMensaje(
          token,
          chatId,
          `No pude ${accion === "merge" ? "fusionar" : "cerrar"} el PR #${numero}: ${(resultado.detalle ?? "").slice(0, 300)}`,
        );
      }
    }

    return new Response("ok", { status: 200 });
  }

  const mensaje = actualizacion.message;

  if (mensaje?.photo && mensaje?.chat?.id) {
    const chatId = mensaje.chat.id as number;
    const chatAutorizado = import.meta.env.TELEGRAM_CHAT_ID;
    if (!chatAutorizado || String(chatId) !== String(chatAutorizado)) {
      // Silencioso a propósito: no darle pistas a quien no tiene permiso.
      return new Response("ok", { status: 200 });
    }

    const githubToken = import.meta.env.GITHUB_TOKEN;
    if (!githubToken) {
      await enviarMensaje(token, chatId, "Falta configurar GITHUB_TOKEN en el servidor.");
      return new Response("ok", { status: 200 });
    }

    const candidatos = await negociosCandidatos(githubToken);
    if (candidatos.length === 0) {
      await enviarMensaje(
        token,
        chatId,
        "No tengo ningún negocio reciente al que asignarle esta foto. Da de alta el negocio primero.",
      );
      return new Response("ok", { status: 200 });
    }

    await enviarConBotones(
      token,
      chatId,
      "¿Para qué negocio es esta foto?",
      candidatos.map((c) => [{ texto: c.nombre.slice(0, 60), datos: `elegirneg:${c.slug}` }]),
      mensaje.message_id as number,
    );
    return new Response("ok", { status: 200 });
  }

  if (mensaje?.text && mensaje?.chat?.id) {
    const chatId = mensaje.chat.id as number;
    const texto = (mensaje.text as string).trim();
    const chatAutorizado = import.meta.env.TELEGRAM_CHAT_ID;
    const esChatAutorizado = chatAutorizado && String(chatId) === String(chatAutorizado);

    if (esMensajeNegocioNuevo(texto)) {
      if (!esChatAutorizado) {
        await enviarMensaje(token, chatId, "No tienes permiso para dar de alta negocios.");
        return new Response("ok", { status: 200 });
      }

      const githubToken = import.meta.env.GITHUB_TOKEN;
      if (!githubToken) {
        await enviarMensaje(token, chatId, "Falta configurar GITHUB_TOKEN en el servidor.");
        return new Response("ok", { status: 200 });
      }

      const campos = extraerCamposNegocio(texto);
      if (!campos) {
        await enviarMensaje(
          token,
          chatId,
          "Este mensaje parece de un negocio nuevo pero no pude leer todos los campos obligatorios (nombre, localidad, tipo, cómo quedó, qué necesita). Añádelo a mano por ahora.",
        );
        return new Response("ok", { status: 200 });
      }

      const localidad = localidadPorNombre(campos.localidad);
      const avisoLocalidad = localidad
        ? ""
        : `\n\n⚠️ No reconocí la localidad "${campos.localidad}": revisa y corrige el campo \`localidad\` en el PR antes de fusionar.`;

      const necesita = campos.necesita
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

      const fecha = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota" }).format(
        new Date(),
      );

      const resultado = await crearPRNegocio(githubToken, {
        nombre: campos.nombre,
        actividad: campos.tipo,
        localidadSlug: localidad?.slug ?? eslugar(campos.localidad),
        quedo: campos.quedo,
        necesita: necesita.length > 0 ? necesita : [campos.necesita],
        donde: campos.donde,
        operando: Boolean(campos.donde),
        contacto: parsearContactos(campos.contactos),
        fecha,
      });

      if (resultado.ok) {
        await enviarMensaje(
          token,
          chatId,
          `📝 Ficha creada para «${campos.nombre}» — PR #${resultado.prNumero}${avisoLocalidad}\n\n` +
            `Le falta la historia del negocio (no la pide el formulario todavía) y las fotos: añádelas antes de fusionar.\n\n` +
            `${resultado.prUrl}`,
        );
      } else {
        await enviarMensaje(
          token,
          chatId,
          `No pude crear la ficha de «${campos.nombre}»: ${resultado.detalle.slice(0, 300)}`,
        );
      }

      return new Response("ok", { status: 200 });
    }

    if (texto === "/start") {
      await enviarMensaje(
        token,
        chatId,
        "Hola, soy el bot admin de S.O.S.EMUND. Te voy a avisar aquí cuando llegue una ficha de negocio nueva por WhatsApp."
      );
    } else if (texto === "/miid") {
      await enviarMensaje(token, chatId, `Tu chat_id es: ${chatId}`);
    } else {
      await enviarMensaje(
        token,
        chatId,
        "Por ahora solo entiendo /start y /miid. Los avisos automáticos de fichas nuevas llegan pronto."
      );
    }
  }

  // Telegram reintenta si no responde 200, así que siempre se contesta ok
  // aunque el mensaje no encajara en ningún caso conocido.
  return new Response("ok", { status: 200 });
};
