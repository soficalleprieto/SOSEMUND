# Páginas para ayudar durante el terremoto de Colombia

> Inventario y análisis de las iniciativas ciudadanas existentes.
> Terremoto de magnitud 7,4 del 10 de agosto de 2026 · Epicentro: San José del Palmar, Chocó.
> **Actualizado: 13 de agosto de 2026.**

## Resumen ejecutivo

Se revisaron los **11 sitios** del listado inicial. Estado actual: **los 11 están activos** y **1 tenía
errata en el dominio**, ya corregida (unidosporpereira.com, no «unidorporpereira»).

> **Corrección del 13/08/2026, tarde:** ayudaspereira.com figuraba como caído en la primera revisión —no
> respondía ni en HTTP ni en HTTPS— pero se trataba de una caída temporal. Ya funciona y resulta ser
> **la iniciativa más desarrollada de todo el listado**. Ficha actualizada más abajo.

Las iniciativas se reparten en cuatro categorías:

- **Búsqueda de personas desaparecidas** — encontrados.co, colombiatebusca.com
- **Coordinación de ayuda humanitaria inmediata** — redsismo.com, ayudaspereira.com, acopio-ayuda, unidosporpereira.com, redayudamanizales.com, nexbio.pro, sos.terremoto.loscreativos.co
- **Mapas de daños estructurales** — terremotocolombia.com
- **Mascotas** — qrartepets.com

> **Hallazgo principal: ninguno de los once sitios atiende a los negocios afectados.**
> Todo el ecosistema ciudadano está operando en **fase de emergencia** —las primeras 72 horas: rescate,
> desaparecidos, acopio de donaciones—. Nadie ha pasado todavía a la **fase de recuperación económica**:
> cómo evitar que un comerciante que perdió su local cierre definitivamente. Ese hueco está vacío.

---

## Fichas de cada sitio

### 1. redsismo.com — «Auxilio Sísmico Colombia»
**Estado:** ✅ Activo · **Público:** personas afectadas y voluntarios

Herramienta comunitaria no oficial que conecta a quien necesita ayuda con voluntarios dispuestos a darla.
Los afectados publican necesidades urgentes (agua, comida, medicinas, refugio) y los voluntarios responden
directamente por WhatsApp. Los avisos se archivan automáticamente a las 72 horas. Se declara explícitamente
complemento —no sustituto— de los organismos oficiales.

### 2. terremotocolombia.com — mapa de daños
**Estado:** ⚠️ Activo con redirección · **Público:** rescatistas y organizaciones · Vinculado a la ONG mallanet.org

Mapa colaborativo de daños estructurales alimentado por reportes ciudadanos. Rotula «Contingencia especial
Colombia · reporta edificios afectados por el terremoto» y ofrece búsqueda por ubicación, valoración de daños
y herramientas de coordinación para equipos de rescate.

**Atención:** redirige con un 302 a *terremotovenezuela.com*, es decir, es un dominio reciclado de una
emergencia anterior y ahora agrega datos de ambos países. El contenido es útil, pero conviene tenerlo en
cuenta antes de citarlo como fuente de confianza.

### 3. ayudaspereira.com — «Acopio Pereira»
**Estado:** ✅ Activo · **Público:** donantes, voluntarios, transportistas y centros de acopio
**Contacto anotado:** gestionorganico@gmail.com
**La iniciativa más desarrollada del listado en términos operativos.**

Pese al nombre, **ya no es solo de Pereira**: coordina centros de acopio en 17 ciudades de Risaralda,
Caldas, Quindío, Valle del Cauca, Tolima y Bogotá, con 57 centros registrados y 21 ciudades más en lista de
espera. Su promesa es un emparejamiento de oferta y demanda: «elige tu ciudad para ver qué falta y dónde
sobra».

**Estado de Pereira en el momento de la consulta:** 38 centros activos, 33 urgencias abiertas, 31
donaciones ofrecidas, 1 transporte en ruta y un inventario agregado de la ciudad con 9 categorías.

Entra por cuatro roles bien definidos, que es un acierto de diseño:

- **Tengo algo para donar** — «mira qué falta y ofrécelo; si no tienes cómo llevarlo, alguien lo recoge».
- **Quiero ser voluntario** — clasificar, cargar, cocinar, atender.
- **Tengo carro y puedo transportar** — encargos esperando quien los recoja.
- **Trabajo en un centro de acopio** — registrarlo o pedir unirse a uno existente.

Gestiona **logística real, no solo listados**: las rutas de transporte muestran origen, destino, contenido
de la carga («3 cajas de agua, 3 cajas de cobijas y colchonetas, 2 cajas de pañales y bebés»), hora y
responsable.

**Buenas prácticas que conviene copiar:** los teléfonos están protegidos tras inicio de sesión («entrar
para llamar»), lo que evita el spam y la suplantación; y tiene política de tratamiento de datos y aviso de
cookies visibles.

**Debilidad crítica —y es nuestra oportunidad:** es una SPA que **no tiene ni un solo enlace `<a>`**. Toda
la navegación ocurre por JavaScript y la URL nunca cambia: no hay páginas por ciudad, así que Google no
puede rastrear ni indexar nada más allá de la portada. Los botones tampoco tienen nombre accesible.
Operativamente es excelente y en buscadores es **invisible**.

### 4. unidosporpereira.com — coordinación ciudadana en Pereira
**Estado:** ✅ Activo · **Público:** residentes, voluntarios y organizaciones
**Corregido:** en el listado original figuraba como «unidorporpereira.com»

Plataforma ciudadana de coordinación de la respuesta humanitaria en Pereira. Agrega en tiempo real la
ubicación de albergues, los centros de distribución de suministros y las necesidades urgentes de la ciudad.
Incluye mapa interactivo, coordinación de donaciones, emparejamiento de voluntarios y recuperación de
mascotas.

### 5. encontrados.co — búsqueda de desaparecidos con IA
**Estado:** ✅ Activo · **Público:** familias, voluntarios y rescatistas

Búsqueda colaborativa de personas desaparecidas. Además del reporte clásico, permite subir fotos de personas
ya rescatadas para compararlas por inteligencia artificial contra la base de desaparecidos. Integrada con el
registro público de Colombia Te Busca; documentaba 18 reencuentros en el momento de la consulta.

### 6. colombiatebusca.com — registro ciudadano de desaparecidos
**Estado:** ✅ Activo · **Público:** familias y allegados · Impulsada por Ascopitales

Plataforma para registrar, buscar y difundir información sobre personas desaparecidas o localizadas. El
reporte se hace mediante formulario con fotografía, nombre y datos identificativos; se difunde por WhatsApp,
Facebook y X.

**Cifras a 13 de agosto de 2026:** 5.351 reportes totales — 4.238 personas aún desaparecidas y 1.109 ya
localizadas. En sus primeras 48 horas pasó de unos cientos de registros a más de 4.700. Declara expresamente
que no reemplaza a la Policía, la Fiscalía, Medicina Legal ni a los equipos de rescate.

### 7. qrartepets.com — identificación de mascotas por QR
**Estado:** ✅ Activo · **Público:** dueños de mascotas · ⚠️ Empresa privada, no iniciativa de emergencia

Empresa colombiana que vende placas QR inteligentes para identificación de mascotas, con operación en
Colombia, Puerto Rico y Estados Unidos. Ofrece más de 15 servicios asociados al QR: carné digital de
vacunación, identificación por voz, red de búsqueda de mascotas, herramientas de IA y consulta legal.

**Matiz:** su página principal no menciona el terremoto. Su relación con la emergencia viene por su red de
búsqueda de mascotas perdidas y por su actividad en Instagram (@qrartepets). Es el único elemento del listado
con ánimo de lucro.

### 8. sos.terremoto.loscreativos.co — informativo de ayudas
**Estado:** ✅ Activo · **Público:** personas afectadas · Subdominio de la agencia «Los Creativos»

Página informativa titulada «Ayudas Terremoto Colombia» que orienta sobre ayudas y servicios disponibles.
Es el sitio con menos contenido detectable de todo el listado: **la propuesta es la más cercana a la nuestra,
pero está sin desarrollar** y alojada en un subdominio de agencia.

### 9. acopio-ayuda.up.railway.app — directorio de centros de acopio
**Estado:** ✅ Activo · **Público:** personas que quieren donar

Directorio colaborativo y geolocalizado de puntos de recolección de donaciones. Permite buscar centros de
acopio cercanos y ver qué necesita cada uno en ese momento (alimentos, medicinas, ropa, sangre), con horarios
y datos de contacto. La información se coteja con fuentes oficiales como gobernaciones y alcaldías.

**Nota técnica:** alojado en un subdominio gratuito de Railway, lo que penaliza tanto la confianza como
cualquier posibilidad de posicionamiento.

**Solapamiento:** hace lo mismo que ayudaspereira.com («Acopio Pereira»), que está bastante más
desarrollado —57 centros en 17 ciudades, con logística de transporte— y también cubre Pereira. Dos
proyectos compitiendo en el mismo nicho y ninguno de los dos indexable.

### 10. redayudamanizales.com — «Red de Ayuda»
**Estado:** ✅ Activo · **Público:** mixto · **Enfoque:** Manizales

Plataforma con el lema «Conectamos capacidades con necesidades». Actúa como intermediario que pone en
contacto a quienes tienen recursos, habilidades o servicios con quienes los necesitan. Planteamiento genérico
y con poco contenido concreto publicado.

### 11. nexbio.pro/comunidad/cali — «NexBio Ayuda»
**Estado:** ✅ Activo · **Público:** afectados, donantes y familias · **El más maduro del listado**

Plataforma multiciudad (con selector de ciudad) estructurada en cuatro accesos: «Necesito ayuda», «Quiero
ayudar», «Buscar a alguien» y un mapa de puntos de ayuda. Permite que juntas de acción comunal, iglesias,
alcaldías, defensa civil, ONG y centros de acopio se registren como puntos de entrega o recepción.

Es el único que aplica prácticas serias de fiabilidad, y **merece estudiarse como referencia**:

- **Moderación humana previa:** «la comunidad envía información, NexBio la organiza, nada se publica solo».
- **Cita fuentes oficiales y distingue entre registros** — advierte, por ejemplo, que el registro forense de
  Medicina Legal no equivale al parte de la UNGRD — y remite al portal oficial para verificar cifras vigentes.
- **No toca el dinero:** en las campañas verificadas el aporte va directo al beneficiario (Nequi / Bre-B);
  la plataforma organiza, verifica y da trazabilidad, pero no recauda ni administra fondos.
- **Deriva a canales oficiales:** Cruz Roja Colombiana (Restablecimiento de Contactos Familiares), Policía,
  ICBF y línea 123.

---

## Qué significa esto para nuestro proyecto

### El hueco está confirmado
Once iniciativas ciudadanas y ni una sola dirigida a los negocios. Mientras tanto, en las zonas afectadas hay
unas 270.000 empresas, de las cuales 250.628 son microempresas (el 93 %), y 1,4 millones de empleos formales
en riesgo. El censo de la Cámara de Comercio registró 1.552 unidades comerciales solo en la zona del Parque
de la Libertad de Pereira, y en Cali van 1.219 unidades productivas censadas. Nadie les está hablando a ellos.

### Son fuertes operando y ciegos en buscadores
La primera lectura fue que estos proyectos eran frágiles y desaparecerían solos. **Hay que matizarla**: el
único que parecía caído resultó ser una caída temporal, y al volver se reveló como el más avanzado de
todos. No conviene contar con que se apaguen.

La debilidad real es otra, y es más estable: **son productos operativos, no productos indexables.**
ayudaspereira.com no tiene un solo enlace rastreable; acopio-ayuda vive en un subdominio gratuito de
Railway; varios usan dominios recién registrados sin autoridad; y ninguno tiene páginas por ciudad ni por
tema que un buscador pueda entender. Resuelven muy bien la logística de quien ya está dentro, pero no
existen para quien busca en Google.

Ese es exactamente el reverso de lo que nosotras sabemos hacer, y por eso la complementariedad es real y no
un eufemismo: ellos coordinan, nosotras hacemos encontrable.

### No son competencia, son aliados y enlaces
Sirven a públicos distintos al nuestro, así que enlazarse mutuamente beneficia a todos. Además, varias ya
tienen cobertura de prensa nacional —Colombia Te Busca en LaFM, Pulzo, City TV, El Tiempo y Cambio;
Encontrados.co en Pulzo—, lo que demuestra que los medios colombianos están cubriendo activamente este tipo
de proyectos ciudadanos. Es una vía de difusión y de enlaces perfectamente realista.

### Lecciones de diseño que conviene copiar
De **NexBio**: moderación humana antes de publicar, citar siempre fuente y fecha, y no tocar el dinero de
nadie. De **redsismo**: caducidad automática del contenido para que no envejezca mal. De **acopio-ayuda**:
contrastar con fuentes oficiales. De **todos**: WhatsApp como canal de difusión principal.

---

## Anexo: cifras oficiales

Según la declaración presidencial del 12 de agosto de 2026, con datos de la UNGRD: **265 fallecidos, 3.494
heridos, 496 personas desaparecidas y 25.872 familias afectadas.** Las cifras han subido de forma sostenida
(el 11 de agosto se hablaba de 181 fallecidos) y siguen cambiando, por lo que cualquier dato publicado debe
llevar fecha y enlace a la fuente. Medicina Legal lleva un registro forense separado que no equivale al parte
de la UNGRD.

Cinco capitales estuvieron en alerta roja: **Quibdó, Cali, Manizales, Pereira y Armenia.** El Gobierno declaró
el desastre de carácter nacional y activó recursos del Fondo Nacional de Gestión del Riesgo de Desastres,
subsidios de arrendamiento y medidas tributarias, además de solicitar un crédito de 450 millones de dólares
al Banco Mundial.

---

## Anexo: tabla resumen

| Sitio | Categoría | Público | Estado |
|---|---|---|---|
| redsismo.com | Ayuda humanitaria | Personas | Activo |
| terremotocolombia.com | Mapa de daños | Rescatistas | Activo (redirige) |
| ayudaspereira.com | Centros de acopio (17 ciudades) | Donantes y voluntarios | Activo (**el más avanzado**) |
| unidosporpereira.com | Ayuda humanitaria | Personas | Activo |
| encontrados.co | Desaparecidos | Familias | Activo |
| colombiatebusca.com | Desaparecidos | Familias | Activo |
| qrartepets.com | Mascotas | Dueños de mascotas | Activo (empresa) |
| sos.terremoto.loscreativos.co | Informativo | Personas | Activo (escaso) |
| acopio-ayuda.up.railway.app | Centros de acopio | Donantes | Activo |
| redayudamanizales.com | Ayuda humanitaria | Mixto | Activo (genérico) |
| nexbio.pro/comunidad/cali | Ayuda humanitaria | Mixto | Activo (el más maduro) |
| **Negocios y comercios afectados** | — | — | **NINGUNO** |

---

## Referencia: precedentes de la DANA de Valencia (octubre 2024)

Dos mecanismos que funcionaron y que son directamente aplicables:

**«Adopta un Comercio» (adoptauncomercio.com)** — plataforma que emparejó negocios afectados con influencers
y creadores de contenido que les daban visibilidad gratis. En menos de una semana reunió **880 negocios y 823
influencers**, incluidos nombres muy conocidos. Cada negocio tenía ficha con fotos y vídeos de cómo había
quedado, sus necesidades concretas (estanterías, vitrinas, mesas) y sus datos de cobro directo (IBAN, Bizum)
o dirección de envío. **La plataforma no procesaba pagos.**

**«Bono Comercio DANA»** — bonos prepago de 100 € que el comprador pagaba a 50 €, poniendo la Diputació de
València la otra mitad. Canjeables en más de 250 comercios de 26 municipios. Con 5 millones de euros de
financiación pública se esperaba generar hasta 10 millones en ventas. *Requiere una institución que ponga el
dinero: no es replicable por nosotros, pero sí lo es la versión sin subvención —el propio negocio vende un
vale que se canjea cuando reabre.*
