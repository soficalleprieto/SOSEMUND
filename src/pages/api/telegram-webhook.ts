// Webhook del bot de Telegram admin. Recibe los mensajes que Sofía le manda
// al bot y, más adelante, es el mismo canal por el que se avisa cuando llega
// una ficha de negocio nueva desde el bot de WhatsApp. También recibe los
// toques al botón "Fusionar/Descartar" que github-webhook.ts añade a cada
// aviso de PR nuevo, para aprobar sin salir de Telegram.
export const prerender = false;

import type { APIRoute } from "astro";

const TELEGRAM_API = "https://api.telegram.org";
const GITHUB_API = "https://api.github.com";
const SITIO = "https://sosemund.org";

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

    const [accion, repo, numero] = (callback.data as string).split(":") as [
      "merge" | "close",
      string,
      string,
    ];

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

  if (mensaje?.text && mensaje?.chat?.id) {
    const chatId = mensaje.chat.id as number;
    const texto = (mensaje.text as string).trim();

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
