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

## Estado

Hecho: página del censo (`/censo`) y los cinco hubs de ciudad (`/ayudas/[ciudad]`) para Cali,
Pereira, Manizales, Armenia y Quibdó.

Pendiente: alivios banco por banco; alivios tributarios municipales (ICA y predial); **canales de
censo de Pereira, Manizales, Armenia y Quibdó** (solo Cali está verificado); guías de intención
larga; pilar 1 entero; dominio sin comprar (`negociosquelaten.org/.com/.co` estaban libres el
13/08/2026, con el `.org` como preferido).

## Decisión abierta: migrar a Astro

**Sin resolver a 13/08/2026.** El sitio está en Next.js, pero medimos la página del censo: 7,5 KB
de HTML frente a **173 KB de JavaScript**. Veintitrés veces más código que contenido, en un sitio
que es texto con un botón, para un público con mala conectividad. Contradice la regla de ligereza.
Astro daría el mismo resultado con 0 KB de JS. Migrar cuesta menos de una hora ahora y mucho más
cuando existan las fichas de negocio. **Preguntar a Sofía antes de escribir contenido nuevo en
volumen.**

## Al trabajar aquí

El contenido sensible (arriendo, nómina, seguros, impuestos) es jurídico: nunca lo respondas de
memoria, cita fuente oficial con fecha y no afirmes derechos. Antes de dar por bueno un dato de un
sitio externo, verifícalo: ayudaspereira.com figuró como caído y era una caída temporal.

Escribe en español de Colombia, en segunda persona y sin jerga. Quien lee acaba de perder su
negocio.
