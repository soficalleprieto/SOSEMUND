// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // OJO: de aquí salen las canonical y las og:url de todo el sitio.
  // Apunta al dominio de Vercel a propósito, porque negociosquelaten.org
  // todavía no está comprado y una canonical hacia un dominio que no resuelve
  // impide que Google indexe nada.
  // EN CUANTO EL DOMINIO ESTÉ APUNTANDO A VERCEL, cambiar esta línea a
  // "https://negociosquelaten.org" y desplegar.
  site: "https://negocios-que-laten.vercel.app",
  // Sitio completamente estático: sin JavaScript de cliente por defecto.
  // Si alguna página llega a necesitarlo, se añade solo en esa página.
  build: { inlineStylesheets: "always" },
});
