#!/usr/bin/env node
/**
 * Comprime y redimensiona fotos de negocios antes de meterlas al repo.
 *
 * Las fotos que mandan los negocios por WhatsApp (o las que genera una IA)
 * suelen pesar varios MB. Astro las vuelve a optimizar en el build (ver
 * `astro:assets` en las páginas), pero eso no evita que un original de 3-8 MB
 * infle el repositorio. Este script achica el original ANTES de que entre a
 * `src/assets/`: 1800 px de ancho máximo (de sobra para el `width={700}
 * densities={[1,2]}` que usan las fichas) y JPEG con mozjpeg a calidad 82,
 * que en fotos no se distingue a simple vista del original.
 *
 * Uso:
 *   node scripts/comprimir-fotos.mjs <foto...> --salida src/assets/negocios/<slug>/
 *   node scripts/comprimir-fotos.mjs --ancho 1200 --calidad 78 foto1.png foto2.jpg --salida carpeta/
 */

import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const entradas = [];
  let salida = null;
  let ancho = 1800;
  let calidad = 82;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--salida") salida = argv[++i];
    else if (arg === "--ancho") ancho = Number(argv[++i]);
    else if (arg === "--calidad") calidad = Number(argv[++i]);
    else entradas.push(arg);
  }

  if (entradas.length === 0 || !salida) {
    console.error(
      "Uso: node scripts/comprimir-fotos.mjs <foto...> --salida <carpeta> [--ancho 1800] [--calidad 82]",
    );
    process.exit(1);
  }

  return { entradas, salida, ancho, calidad };
}

function formatoKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function comprimirUna(rutaEntrada, carpetaSalida, ancho, calidad) {
  const pesoAntes = (await stat(rutaEntrada)).size;

  const nombreSalida = `${path.parse(rutaEntrada).name}.jpg`;
  const rutaSalida = path.join(carpetaSalida, nombreSalida);

  await sharp(rutaEntrada)
    .rotate() // respeta la orientación EXIF de fotos de celular
    .resize({ width: ancho, withoutEnlargement: true })
    .jpeg({ quality: calidad, mozjpeg: true })
    .toFile(rutaSalida);

  const pesoDespues = (await stat(rutaSalida)).size;
  const ahorro = 100 - (pesoDespues / pesoAntes) * 100;

  console.log(
    `${path.basename(rutaEntrada)} → ${rutaSalida}  ` +
      `(${formatoKB(pesoAntes)} → ${formatoKB(pesoDespues)}, -${ahorro.toFixed(0)}%)`,
  );
}

async function main() {
  const { entradas, salida, ancho, calidad } = parseArgs(process.argv.slice(2));
  await mkdir(salida, { recursive: true });

  for (const entrada of entradas) {
    await comprimirUna(entrada, salida, ancho, calidad);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
