// Webhook del bot de Telegram admin. Recibe los mensajes que Sofía le manda
// al bot y, más adelante, es el mismo canal por el que se avisa cuando llega
// una ficha de negocio nueva desde el bot de WhatsApp. También recibe los
// toques al botón "Fusionar/Descartar" que github-webhook.ts añade a cada
// aviso de PR nuevo, para aprobar sin salir de Telegram.
export const prerender = false;

import type { APIRoute } from "astro";

const TELEGRAM_API = "https://api.telegram.org";
const GITHUB_API = "https://api.github.com";

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
) {
  if (accion === "merge") {
    const resp = await fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}/merge`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ merge_method: "squash" }),
    });
    return resp;
  }
  return fetch(`${GITHUB_API}/repos/${repo}/pulls/${numero}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state: "closed" }),
  });
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
      const resp = await resolverPR(githubToken, repo, numero, accion);
      const textoOriginal = callback.message.text as string;

      if (resp.ok) {
        const etiqueta = accion === "merge" ? "✅ Fusionado" : "❌ Descartado";
        await responderCallback(token, callback.id, etiqueta);
        await editarMensaje(token, chatId, callback.message.message_id, `${textoOriginal}\n\n${etiqueta}.`);
      } else {
        const detalle = await resp.text();
        await responderCallback(token, callback.id, "No se pudo. Revísalo en GitHub.");
        await enviarMensaje(
          token,
          chatId,
          `No pude ${accion === "merge" ? "fusionar" : "cerrar"} el PR #${numero}: ${detalle.slice(0, 300)}`,
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
