#!/usr/bin/env python3
"""Convierte un Markdown de docs/ en un .docx usando LibreOffice.

El Markdown es la única fuente de verdad; el Word se regenera cuando hace
falta pasarle el documento a alguien que no usa el repo.

Uso:
    python scripts/md-a-docx.py docs/proyectos-ayuda.md "../Analisis.docx"
"""

import html
import re
import subprocess
import sys
from pathlib import Path

SOFFICE = r"C:\Program Files\LibreOffice\program\soffice.exe"

ESTILOS = """
body { font-family: "Liberation Serif", Georgia, serif; font-size: 11pt; line-height: 1.35; }
h1 { font-family: "Liberation Sans", Arial, sans-serif; font-size: 20pt; }
h2 { font-family: "Liberation Sans", Arial, sans-serif; font-size: 14pt; margin-top: 20pt;
     border-bottom: 1px solid #999; padding-bottom: 3pt; }
h3 { font-family: "Liberation Sans", Arial, sans-serif; font-size: 11.5pt; margin-top: 14pt; }
table { border-collapse: collapse; width: 100%; font-size: 9.5pt; }
th, td { border: 1px solid #bbb; padding: 4pt 6pt; text-align: left; vertical-align: top; }
th { background: #eee; }
blockquote { border-left: 3px solid #999; background: #f5f5f5; margin: 10pt 0;
             padding: 6pt 10pt; }
"""


def en_linea(t: str) -> str:
    """Marcado dentro de una línea. Se escapa primero para no inyectar HTML."""
    t = html.escape(t, quote=False)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"(?<!\w)\*(.+?)\*(?!\w)", r"<i>\1</i>", t)
    t = re.sub(r"`(.+?)`", r"<code>\1</code>", t)
    return t


def convertir(md: str) -> str:
    salida, lineas, i = [], md.split("\n"), 0
    lista_abierta = False

    def cerrar_lista():
        nonlocal lista_abierta
        if lista_abierta:
            salida.append("</ul>")
            lista_abierta = False

    while i < len(lineas):
        ln = lineas[i]
        despojada = ln.strip()

        # Tabla: cabecera + separador + filas
        if despojada.startswith("|") and i + 1 < len(lineas) and re.match(
            r"^\|[\s:|-]+\|$", lineas[i + 1].strip()
        ):
            cerrar_lista()
            celdas = [c.strip() for c in despojada.strip("|").split("|")]
            salida.append("<table><tr>")
            salida.extend(f"<th>{en_linea(c)}</th>" for c in celdas)
            salida.append("</tr>")
            i += 2
            while i < len(lineas) and lineas[i].strip().startswith("|"):
                fila = [c.strip() for c in lineas[i].strip().strip("|").split("|")]
                salida.append("<tr>")
                salida.extend(f"<td>{en_linea(c)}</td>" for c in fila)
                salida.append("</tr>")
                i += 1
            salida.append("</table>")
            continue

        if not despojada:
            cerrar_lista()
        elif despojada.startswith("### "):
            cerrar_lista()
            salida.append(f"<h3>{en_linea(despojada[4:])}</h3>")
        elif despojada.startswith("## "):
            cerrar_lista()
            salida.append(f"<h2>{en_linea(despojada[3:])}</h2>")
        elif despojada.startswith("# "):
            cerrar_lista()
            salida.append(f"<h1>{en_linea(despojada[2:])}</h1>")
        elif despojada.startswith("> "):
            cerrar_lista()
            salida.append(f"<blockquote>{en_linea(despojada[2:])}</blockquote>")
        elif re.match(r"^[-*] ", despojada):
            if not lista_abierta:
                salida.append("<ul>")
                lista_abierta = True
            salida.append(f"<li>{en_linea(despojada[2:])}</li>")
        elif re.match(r"^-{3,}$", despojada):
            cerrar_lista()
            salida.append("<hr>")
        else:
            cerrar_lista()
            salida.append(f"<p>{en_linea(despojada)}</p>")
        i += 1

    cerrar_lista()
    return f'<meta charset="utf-8"><style>{ESTILOS}</style>\n' + "\n".join(salida)


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 1

    origen = Path(sys.argv[1]).resolve()
    destino = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else origen.with_suffix(".docx")

    tmp = origen.with_suffix(".tmp.html")
    tmp.write_text(convertir(origen.read_text(encoding="utf-8")), encoding="utf-8")

    subprocess.run(
        [SOFFICE, "-env:UserInstallation=file:///C:/Users/USR/AppData/Local/Temp/claude/lo_profile",
         "--headless", "--convert-to", "docx:MS Word 2007 XML",
         "--outdir", str(tmp.parent), str(tmp)],
        check=True, capture_output=True,
    )

    generado = tmp.with_suffix(".docx")
    destino.parent.mkdir(parents=True, exist_ok=True)
    generado.replace(destino)
    tmp.unlink(missing_ok=True)
    print(f"OK -> {destino}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
