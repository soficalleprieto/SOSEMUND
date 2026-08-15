// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://negociosquelaten.org",
  // Sitio completamente estático: sin JavaScript de cliente por defecto.
  // Si alguna página llega a necesitarlo, se añade solo en esa página.
  build: { inlineStylesheets: "always" },
});
