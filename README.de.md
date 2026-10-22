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

> Deutschsprachiger Überblick. Die vollständige technische Dokumentation ist auf Englisch und Chinesisch verfügbar.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  Forschung an einem Impfstoff mit zirkulärer RNA gegen dreifach negativen Brustkrebs<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Offizielles Wiki öffnen ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>Lumi, das kleine Schaf, begleitet Sie durch CirCure.</sub>
</p>

## Projektüberblick

Dieses Repository enthält das offizielle Wiki von **JLU-FBH** für den internationalen Wettbewerb für synthetische Biologie **iGEM 2026**: Website, Artikel, Illustrationen, Lernspiele und den Quellcode des virtuellen Labors.

**CirCure** untersucht eine Plattform mit gezielt veränderter zirkulärer RNA (**circRNA**) für einen Impfstoff gegen mehrere Zielstrukturen bei dreifach negativem Brustkrebs (**TNBC**). Das Wiki stellt Entwurf, Experimente und Forschungsergebnisse mit Artikeln, handgezeichneten Bildern, einer durch Scrollen gesteuerten Erzählung und interaktiven Visualisierungen vor.

Die Erzählung beginnt bei den Fragen und Sorgen von Patientinnen und führt zu molekularen Mechanismen und Versuchsentscheidungen. Leserinnen und Leser können Inhalte in ihrem eigenen Tempo lesen, vergleichen und erkunden.

## Gestaltung als Referenz für iGEM-Teams

[Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) erläutert visuelle Identität, Illustrationen, Animationen, Seitenaufbau und interaktive Lernangebote.

- [Abschnitt 8: Menschliche Perspektive und Erzählung](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) verbindet Fragen von Patientinnen mit wissenschaftlichen Erklärungen.
- [Abschnitt 9: Unser Wiki-Beitrag](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) behandelt Illustrationsebenen, Lesetempo, Navigation und umkehrbare Interaktionen.
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) enthält frühe Entwürfe, Vergleiche und bedienbare Demonstrationen.
- Der [Gestaltungsleitfaden mit Quellcodeverweisen (Englisch)](docs/visual-design-guide.en.md) erklärt Methoden, Dateipfade, Quellen und Namensnennung.

## Das Projekt erkunden

Die Website umfasst fünf Bereiche: **Team**, **Project**, **Wet Lab**, **Dry Lab** und **Engagement**. Sie behandeln Mitglieder, Projektentwicklung, Experimente, Modelle, Software, Bildungsangebote und Nachhaltigkeit.

Das [Spieleportal](https://2026.igem.wiki/jlu-fbh/games) bündelt das virtuelle Labor, **Breast Guardian RPG**, **Bomb Cat** und **Bio Memory Match**. Das [virtuelle Labor](https://virtual-lab-208fd4.igem.wiki/) bietet neun molekularbiologische Experimente von Bakterienkultur über PCR bis zur Untersuchung der Proteinexpression.

| Ressource | Zugang |
| --- | --- |
| Offizielles Wiki | [Projekt und Ergebnisse](https://2026.igem.wiki/jlu-fbh/) |
| Entwicklungsvorschau | [Laufende Weiterentwicklung](https://wiki.dayquay.com/jlu-fbh/) |
| Projektvideo | [Offizielle iGEM-Videoplattform](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| GitHub-Quellcode | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| Offizielles GitLab | [Quellcode und Veröffentlichungsverlauf](https://gitlab.igem.org/2026/jlu-fbh) |

Offizielle Website und Entwicklungsvorschau werden getrennt bereitgestellt und können unterschiedliche Inhalte zeigen. Einzelheiten stehen im [Bereitstellungsleitfaden (Englisch)](docs/deployment.en.md). Die Sprachauswahl oben wechselt den README-Leitfaden; Wiki-Seiten und verlinkte Dokumente behalten ihre jeweilige Sprache.

## Quellcode und Architektur

Das Wiki verwendet **React, TypeScript und Vite**. **GSAP** steuert Animationen, **Mol\*** zeigt Molekülstrukturen und **ECharts** visualisiert Modelldaten.

| Pfad | Inhalt |
| --- | --- |
| `src/data/` | Artikel, Abschnitte und Ressourcenzuordnungen |
| `src/contents/` | Zusammenstellung der Seiten |
| `src/components/wiki/` | Gemeinsame Leseansicht und Interaktionen |
| `src/components/home/` | Szenen der Startseite |
| `src/styles/` | Layout, Farben und Animationen |
| `virtual-lab/` und `games/` | Anwendungen mit eigenen Abhängigkeiten und Builds |

Siehe [Repository-Übersicht (Englisch)](docs/repository-layout.en.md) und [Ressourcenleitfaden (Englisch)](docs/assets.en.md).

## Schnellstart

Verwenden Sie **Node.js 22.12+ innerhalb der Reihe 22.x** und **Yarn Classic 1.22.22**. Im Stammverzeichnis des Repositorys:

```sh
yarn install --frozen-lockfile
yarn dev
```

Öffnen Sie die im Terminal angezeigte Adresse, üblicherweise `http://localhost:5173/jlu-fbh/`.

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

Der Build schreibt nach `dist/`. Labor und Spiele werden separat gebaut; beachten Sie deren README-Dateien. Der zentrale Entwicklungsserver stellt nur das Wiki bereit. Weitere Anleitungen: [Entwicklung (Englisch)](docs/development.en.md), [Labor (Englisch)](virtual-lab/README.md#readme-en) und [Spiele (Englisch)](games/README.md#readme-en).

## Team, Mitarbeit und Lizenz

[Roster](https://2026.igem.wiki/jlu-fbh/roster) und [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) dokumentieren Mitglieder, Beiträge und institutionelle Unterstützung. Die ausführlichen Danksagungen stehen in der [vollständigen englischen Version](README.md#team-and-acknowledgements).

Lesen Sie vor Änderungsvorschlägen die [Hinweise zur Mitarbeit (Englisch)](CONTRIBUTING.en.md). Für das Hauptrepository gilt [CC BY 4.0](LICENSE). Erhalten Sie die erforderlichen Namensnennungen und beachten Sie die eigenen Lizenzen von Drittmaterialien und eigenständigen Anwendungen.

Dieser Leitfaden ist eine übersetzte Zusammenfassung des README. Vollständige technische Einzelheiten und Zuständigkeiten finden Sie im [englischen README](README.md#readme-en) oder [chinesischen README](README.md).
