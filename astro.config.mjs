// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sosemund.org",
  // Sin barra final: así ya estaban construidas todas las `ruta` canónicas
  // en Base.astro (ej. `ruta={base}`, nunca `ruta={`${base}/`}`). Antes,
  // con barra y sin barra devolvían 200 los dos, contenido duplicado sin
  // que uno redirigiera al otro.
  trailingSlash: "never",
  // Sitio completamente estático por defecto: sin JavaScript de cliente.
  // El adaptador de Vercel solo se usa para las rutas que exportan
  // `prerender = false` (los webhooks de los bots, en src/pages/api/).
  // Todo lo demás sigue prerenderizándose como HTML plano.
  // Si alguna página llega a necesitar JS de cliente, se añade solo en esa página.
  build: { inlineStylesheets: "always" },
  adapter: vercel(),
  // Excluye la ficha de negocio de ejemplo (noindex) y las rutas de API/webhooks:
  // el sitemap debe listar solo lo que de verdad queremos que Google indexe.
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/negocios/ejemplo") && !page.includes("/api/"),
    }),
  ],
});
