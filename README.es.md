<p align="center" dir="ltr">
  <a href="README.md#readme-zh" lang="zh-Hans" title="阅读简体中文版">
    <img src="docs/media/readme-language-zh.svg" alt="简体中文" width="112" height="38" />
  </a>
  &nbsp;
  <a href="README.md#readme-en" lang="en" title="Read the full README in English">
    <img src="docs/media/readme-language-en.svg" alt="English" width="112" height="38" />
  </a>
  <br />
  <a href="README.fr.md" lang="fr">Français</a> &nbsp;·&nbsp; <a href="README.de.md" lang="de">Deutsch</a> &nbsp;·&nbsp; <a href="README.es.md" lang="es">Español</a>
  <br />
  <a href="README.ru.md" lang="ru">Русский</a> &nbsp;·&nbsp; <a href="README.ar.md" lang="ar">العربية</a> &nbsp;·&nbsp; <a href="README.pt.md" lang="pt">Português</a>
  <br />
  <a href="README.ja.md" lang="ja">日本語</a> &nbsp;·&nbsp; <a href="README.ko.md" lang="ko">한국어</a>
  <br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.md#readme-en">English documentation →</a></sub>
</p>

> Guía de lectura en español. La documentación técnica completa está disponible en inglés y en chino.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  Investigación de una vacuna de ARN circular contra el cáncer de mama triple negativo<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Explorar el Wiki oficial ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>Lumi, la pequeña oveja que te acompaña por CirCure.</sub>
</p>

## Presentación del proyecto

Este repositorio contiene el Wiki oficial de **JLU-FBH** para la competición internacional de biología sintética **iGEM 2026**: sitio web, artículos, ilustraciones, juegos educativos y código fuente del laboratorio virtual.

**CirCure** investiga una plataforma de ARN circular (**circRNA**) modificado para una vacuna dirigida a múltiples dianas del cáncer de mama triple negativo (**TNBC**). El Wiki presenta el diseño, los experimentos y los resultados mediante artículos, ilustraciones originales, narración vinculada al desplazamiento y visualizaciones interactivas.

El relato parte de las preguntas y preocupaciones de las pacientes y avanza hacia los mecanismos moleculares y las decisiones experimentales. Cada persona puede detenerse, comparar y explorar el contenido a su ritmo.

## Referencias de diseño para equipos iGEM

[Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) explica la identidad visual, las ilustraciones, las animaciones, la estructura de las páginas y las experiencias educativas.

- [Sección 8: perspectiva humana y narrativa](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) — conectar las preguntas de las pacientes con las explicaciones científicas.
- [Sección 9: nuestra contribución mediante el Wiki](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) — ilustraciones por capas, ritmo de lectura, navegación e interacciones reversibles.
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) — propuestas iniciales, comparaciones y demostraciones interactivas.
- [Guía de diseño y código fuente (inglés)](docs/visual-design-guide.en.md) — métodos, rutas de archivos, referencias y atribución.

## Explorar el proyecto

El sitio se organiza en cinco grupos: **Team**, **Project**, **Wet Lab**, **Dry Lab** y **Engagement**. Incluyen miembros, diseño del proyecto, experimentos, modelos, software, actividades educativas y sostenibilidad.

El [portal Games](https://2026.igem.wiki/jlu-fbh/games) reúne el laboratorio virtual, **Breast Guardian RPG**, **Bomb Cat** y **Bio Memory Match**. El [laboratorio virtual](https://virtual-lab-208fd4.igem.wiki/) ofrece nueve experimentos de biología molecular, desde el cultivo bacteriano hasta la PCR y el análisis de la expresión de proteínas.

| Recurso | Acceso |
| --- | --- |
| Wiki oficial | [Proyecto y resultados](https://2026.igem.wiki/jlu-fbh/) |
| Vista de desarrollo | [Versión en evolución](https://wiki.dayquay.com/jlu-fbh/) |
| Vídeo del proyecto | [Plataforma oficial de vídeo iGEM](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| Código en GitHub | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| GitLab oficial | [Código e historial de publicación](https://gitlab.igem.org/2026/jlu-fbh) |

El sitio oficial y la vista de desarrollo se despliegan por separado y pueden mostrar contenidos distintos. Consulta la [guía de despliegue (inglés)](docs/deployment.en.md). El selector de idioma superior cambia la guía README; las páginas del Wiki y los documentos enlazados conservan su idioma.

## Código y arquitectura

El Wiki utiliza **React, TypeScript y Vite**. **GSAP** gestiona las animaciones, **Mol\*** muestra estructuras moleculares y **ECharts** representa datos de los modelos.

| Ubicación | Contenido |
| --- | --- |
| `src/data/` | Artículos, secciones y correspondencias de recursos |
| `src/contents/` | Composición de las páginas |
| `src/components/wiki/` | Lector compartido e interacciones |
| `src/components/home/` | Escenas de la página de inicio |
| `src/styles/` | Maquetación, colores y animaciones |
| `virtual-lab/` y `games/` | Aplicaciones con dependencias y compilaciones propias |

Consulta el [mapa del repositorio (inglés)](docs/repository-layout.en.md) y la [guía de recursos (inglés)](docs/assets.en.md).

## Inicio rápido

Utiliza **Node.js 22.12 o posterior dentro de la serie 22.x** y **Yarn Classic 1.22.22**. Desde la raíz del repositorio:

```sh
yarn install --frozen-lockfile
yarn dev
```

Abre la dirección indicada en la terminal, normalmente `http://localhost:5173/jlu-fbh/`.

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

La compilación escribe en `dist/`. El laboratorio y los juegos se compilan por separado; sigue sus README. El servidor de desarrollo principal sirve únicamente el Wiki. Instrucciones detalladas: [desarrollo (inglés)](docs/development.en.md), [laboratorio (inglés)](virtual-lab/README.md#readme-en) y [juegos (inglés)](games/README.md#readme-en).

## Equipo, contribuciones y licencia

[Roster](https://2026.igem.wiki/jlu-fbh/roster) y [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) recogen los miembros, sus aportaciones y el apoyo institucional. La [versión inglesa completa](README.md#team-and-acknowledgements) incluye los agradecimientos detallados.

Antes de proponer cambios, consulta la [guía de contribución (inglés)](CONTRIBUTING.en.md). El repositorio raíz usa [CC BY 4.0](LICENSE). Conserva las atribuciones y respeta las licencias propias de recursos de terceros y aplicaciones independientes.

Esta guía es una síntesis traducida del README. Los detalles técnicos completos y las responsabilidades figuran en el [README inglés](README.md#readme-en) y el [README chino](README.md).
