/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TELEGRAM_BOT_TOKEN: string;
  readonly TELEGRAM_WEBHOOK_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
