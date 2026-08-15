@AGENTS.md

# Negocios que Laten

Sitio para comerciantes afectados por el terremoto de magnitud 7,4 del **10 de agosto de 2026**
en Colombia (epicentro: San José del Palmar, Chocó). Contexto completo y reglas del proyecto en
[`README.md`](README.md). Análisis del ecosistema existente en
[`docs/proyectos-ayuda.md`](docs/proyectos-ayuda.md).

Equipo: Sofía (consultora SEO, lleva estrategia y contenido) + Claude (construcción).

## Las siete reglas, en corto

Están desarrolladas en el README y **no son negociables**: fuente y fecha en toda afirmación; lo no
verificado se marca como pendiente en vez de rellenarse; cero datos personales; no tocamos dinero;
no publicamos locales vacíos (hubo saqueos); móvil primero y muy ligero; WhatsApp en todas las
páginas.

## El proyecto es internacional, no colombiano

**Decidido el 13/08/2026 y es una restricción de diseño, no una aspiración.** Arrancamos con el
terremoto de Colombia porque es la emergencia viva, pero el destino del proyecto es **cualquier
negocio afectado por una catástrofe, en cualquier país**. En cuanto la versión de Colombia esté
estable, se abre a más emergencias.

Consecuencias prácticas que hay que respetar siempre:

- **La portada no habla del terremoto de Colombia.** Cuenta la historia universal: una catástrofe
  golpea, los negocios mueren en silencio, y con ellos muere el barrio. Colombia aparece como la
  emergencia activa, no como el tema del sitio.
- **Nada específico de una emergencia se escribe en las plantillas**, solo en los datos. Si un
  texto dice «terremoto» dentro de un `.astro`, está mal puesto.
- El nombre y el lema ya son agnósticos a propósito: *Negocios que Laten*, «cuando un negocio
  vuelve a latir, también vuelve a latir su comunidad». Otras frases del mismo registro: «ayúdales
  a seguir latiendo», «cada compra mantiene un negocio latiendo».
- **Idiomas:** por ahora todo en español en la raíz. Cuando toque, el inglés va en `/en/` sin
  mover lo existente, así que no hace falta prefijo de idioma todavía.

## Por qué existe (no perder esto de vista)

Revisamos las 11 iniciativas ciudadanas que surgieron tras el terremoto. Todas operan en **fase de
emergencia** —desaparecidos, acopio, mapas de daños— y **ninguna atiende a los negocios**. Son
además fuertes operando y ciegas en buscadores: ayudaspereira.com, la más avanzada, no tiene un
solo enlace `<a>` rastreable. Nuestro hueco es la **fase de recuperación económica**, y nuestra
ventaja es que sabemos hacer encontrable lo que ellos no.

## Los tres pilares

1. **Ficha de negocio y apadrinamiento** — una página por comercio y emparejamiento con
   microinfluencers que le den visibilidad gratis. Es el corazón. Modelo: «Adopta un Comercio»
   de la DANA de Valencia, que juntó 880 negocios con 823 creadores en una semana.
2. **Buscador de ayudas** — hubs por ciudad y por tipo de ayuda, más guías de intención larga.
   Es el motor de tráfico y alimenta al pilar 1.
3. **Apoyo económico directo, sin pasarela de pago** — se publican los datos de cobro del propio
   negocio (Nequi, Daviplata, Bre-B) y el dinero va directo. Nosotros no intermediamos nunca.

## Estructura de URLs: país → evento → ciudad

**Decidido el 13/08/2026 por Sofía.** Todo cuelga de país y evento, para que una segunda
emergencia no canibalice a la primera y para que el inglés pueda ir luego en `/en/`.

```
/                                   portada: la historia, agnóstica de emergencia
/colombia                           hub del país
/colombia/terremoto-2026            hub del evento
/colombia/terremoto-2026/censo      el censo
/colombia/terremoto-2026/cali       una ciudad
```

Añadir una emergencia nueva es crear un archivo en `src/data/eventos/` y referenciarlo en
`src/data/paises.ts`. **Ninguna plantilla debe tocarse para eso**: si hay que editar un `.astro`
para añadir un evento, es que algo específico se coló donde no debía.

## Estado

Hecho: página del censo (`/censo`) y los cinco hubs de ciudad (`/ayudas/[ciudad]`) para Cali,
Pereira, Manizales, Armenia y Quibdó.

Pendiente: alivios banco por banco; alivios tributarios municipales (ICA y predial); **canales de
censo de Pereira, Manizales, Armenia y Quibdó** (solo Cali está verificado); guías de intención
larga; pilar 1 entero; dominio sin comprar (`negociosquelaten.org/.com/.co` estaban libres el
13/08/2026, con el `.org` como preferido).

## Stack: Astro y CSS plano, cero JavaScript

**Decidido el 13/08/2026.** El sitio empezó en Next.js y se migró a Astro. Motivo: la página del
censo pesaba 7,5 KB de HTML y **173 KB de JavaScript**, veintitrés veces más código que contenido,
en un sitio que es texto con un botón y para un público con mala conectividad. Tras migrar, esa
misma página pesa **5,1 KB** y el sitio entero 29 KB, con **cero archivos JavaScript**.

Reglas que se derivan de eso y hay que mantener:

- **No añadir JavaScript de cliente** salvo que una página lo necesite de verdad, y entonces solo
  en esa página. El botón de WhatsApp, por ejemplo, es un `<a>` con la URL ya montada en tiempo de
  compilación, no un `onclick`.
- **Sin framework de CSS.** Todo en `src/styles/global.css`, con clases semánticas en español.
- Antes de dar por buena una optimización, **medir**: `npm run build` y mirar el peso de `dist/`.

## Al trabajar aquí

El contenido sensible (arriendo, nómina, seguros, impuestos) es jurídico: nunca lo respondas de
memoria, cita fuente oficial con fecha y no afirmes derechos. Antes de dar por bueno un dato de un
sitio externo, verifícalo: ayudaspereira.com figuró como caído y era una caída temporal.

Escribe en español de Colombia, en segunda persona y sin jerga. Quien lee acaba de perder su
negocio.
