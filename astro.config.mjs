// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://sosemund.org",
  // Sitio completamente estático por defecto: sin JavaScript de cliente.
  // El adaptador de Vercel solo se usa para las rutas que exportan
  // `prerender = false` (los webhooks de los bots, en src/pages/api/).
  // Todo lo demás sigue prerenderizándose como HTML plano.
  // Si alguna página llega a necesitar JS de cliente, se añade solo en esa página.
  build: { inlineStylesheets: "always" },
  adapter: vercel(),
});
