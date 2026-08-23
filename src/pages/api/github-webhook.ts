// Webhook de GitHub. Cuando el agente programado (cron de 2x/día) abre un
// Pull Request con una actualización propuesta, GitHub llama aquí y esto
// avisa por Telegram. El token de Telegram y el chat_id nunca salen de las
// variables de entorno de Vercel: el agente en la nube que abre el PR no los
// conoce ni los necesita, solo sabe abrir el PR.
export const prerender = false;

import type { APIRoute } from "astro";
import crypto from "node:crypto";

const TELEGRAM_API = "https://api.telegram.org";

/**
 * GitHub firma el cuerpo con HMAC-SHA256 usando el secreto del webhook, en
 * la cabecera `x-hub-signature-256`. Sin esto, cualquiera que adivine la URL
 * podría mandar avisos falsos. timingSafeEqual evita filtrar la firma
 * correcta comparando byte a byte con temporización variable.
 */
function firmaValida(cuerpoBruto: string, firmaCabecera: string | null, secreto: string) {
  if (!firmaCabecera) return false;
  const esperada =
    "sha256=" + crypto.createHmac("sha256", secreto).update(cuerpoBruto).digest("hex");
  const a = Buffer.from(firmaCabecera);
  const b = Buffer.from(esperada);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function avisarTelegram(
  token: string,
  chatId: string,
  texto: string,
  botones?: { texto: string; datos?: string; url?: string }[][],
) {
  await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: Number(chatId),
      text: texto,
      ...(botones && {
        reply_markup: {
          inline_keyboard: botones.map((fila) =>
            fila.map((b) => ({
              text: b.texto,
              ...(b.datos ? { callback_data: b.datos } : { url: b.url }),
            })),
          ),
        },
      }),
    }),
  });
}

export const POST: APIRoute = async ({ request }) => {
  const secreto = import.meta.env.GITHUB_WEBHOOK_SECRET;
  const token = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;

  if (!secreto || !token || !chatId) {
    return new Response(
      "Falta configurar GITHUB_WEBHOOK_SECRET, TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID",
      { status: 500 },
    );
  }

  // Hay que leer el cuerpo como texto crudo para verificar la firma: si se
  // parsea a JSON primero y se vuelve a serializar, el HMAC ya no coincide.
  const cuerpoBruto = await request.text();
  const firma = request.headers.get("x-hub-signature-256");
  if (!firmaValida(cuerpoBruto, firma, secreto)) {
    return new Response("No autorizado", { status: 401 });
  }

  const tipoEvento = request.headers.get("x-github-event");

  // GitHub manda un ping al guardar el webhook, para confirmar que la URL
  // responde. No es un evento de verdad, solo se contesta ok.
  if (tipoEvento === "ping") {
    return new Response("pong", { status: 200 });
  }

  if (tipoEvento === "pull_request") {
    const payload = JSON.parse(cuerpoBruto);
    if (payload.action === "opened" || payload.action === "reopened") {
      const pr = payload.pull_request;
      const repo = payload.repository.full_name; // "owner/repo"
      const texto =
        `📋 PR nuevo en S.O.S.EMUND\n\n${pr.title}\n\n${pr.html_url}\n\n` +
        `Revísalo antes de fusionarlo: nada se publica solo.`;
      await avisarTelegram(token, chatId, texto, [
        [
          { texto: "✅ Fusionar", datos: `merge:${repo}:${pr.number}` },
          { texto: "❌ Descartar", datos: `close:${repo}:${pr.number}` },
        ],
        [{ texto: "Ver PR en GitHub →", url: pr.html_url }],
      ]);
    }
  }

  // GitHub reintenta si no responde 2xx, así que siempre se contesta ok
  // aunque el evento no encajara en ningún caso conocido.
  return new Response("ok", { status: 200 });
};
