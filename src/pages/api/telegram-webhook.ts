// Webhook del bot de Telegram admin. Recibe los mensajes que Sofía le manda
// al bot y, más adelante, es el mismo canal por el que se avisa cuando llega
// una ficha de negocio nueva desde el bot de WhatsApp.
export const prerender = false;

import type { APIRoute } from "astro";

const TELEGRAM_API = "https://api.telegram.org";

async function enviarMensaje(token: string, chatId: number, texto: string) {
  await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: texto }),
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
