# Negocios que Laten

> Cuando un negocio vuelve a latir, también vuelve a latir su comunidad.

Guía para comerciantes afectados por el terremoto de magnitud 7,4 del **10 de agosto de 2026** en
Colombia, con epicentro en San José del Palmar (Chocó).

El sismo golpeó a unas **270.000 empresas** en 127 municipios de Chocó, Quindío, Valle del Cauca,
Risaralda y Caldas. El 93 % son microempresas: una panadería, un taller, un local de ropa. No tienen
abogado ni contador que les rastree a qué ayudas pueden acceder. Tienen un teléfono y Google.

Las ayudas existen —alivios bancarios, alivios tributarios, líneas de crédito, subsidios— pero viven
dispersas en comunicados de prensa, PDFs y noticias que caducan en dos días. Este sitio las reúne, las
traduce a lenguaje llano y las hace encontrables.

## Reglas del proyecto

No son preferencias de estilo: son las que hacen que el sitio no haga daño.

1. **Nada se afirma sin fuente y fecha.** Nunca decimos «tienes derecho a X», sino «según [fuente], con
   fecha [x]». Un comerciante puede tomar una decisión financiera con lo que lea aquí.
2. **Lo no verificado se marca como pendiente**, no se rellena a ojo. Es preferible publicar cinco cosas
   ciertas que veinte inventadas.
3. **Cero datos personales.** No hay formularios de registro, ni cédulas, ni datos bancarios. Nos evita
   ser objetivo de suplantación y nos saca del ámbito de la Ley 1581 de 2012 (habeas data).
4. **No tocamos dinero.** Ni recaudamos, ni intermediamos, ni gestionamos ayudas. Organizamos
   información y derivamos al canal oficial.
5. **No publicamos locales vacíos.** Hubo saqueos tras los derrumbes. Se publica dónde está un negocio
   *ahora*, nunca qué quedó abandonado y dónde.
6. **Móvil primero y muy ligero.** Parte del público está en Chocó con mala conectividad y datos
   contados. Estático, sin JavaScript innecesario.
7. **WhatsApp en todas las páginas.** Es por donde circula de verdad la información entre comerciantes
   en Colombia.

## Estado

| Pieza | Estado |
|---|---|
| Página del censo (`/censo`) | Publicada, con paso a paso del RUD y detalle por ciudad |
| Hubs por ciudad (`/ayudas/[ciudad]`) | Cali, Pereira, Manizales, Armenia y Quibdó |
| Alivios bancarios banco por banco | Pendiente de investigar |
| Alivios tributarios municipales (ICA, predial) | Pendiente de investigar |
| Canales de censo fuera de Cali | Pendiente de verificar |
| Guías de intención larga | Pendiente |
| Fichas de negocio y apadrinamiento | Pendiente |

## Desarrollo

```bash
npm install
npm run dev
```

Producción: `npm run build`. Todo el sitio se genera estático.

## Documentación

- [`docs/proyectos-ayuda.md`](docs/proyectos-ayuda.md) — análisis de las 11 iniciativas ciudadanas que
  surgieron tras el terremoto, y por qué ninguna atiende a los negocios.

Para regenerar ese documento en Word:

```bash
python scripts/md-a-docx.py docs/proyectos-ayuda.md salida.docx
```

## Esto no es un canal oficial

Iniciativa ciudadana independiente. En una emergencia, llama al **123**.
