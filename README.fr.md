<p align="center" dir="ltr">
  <a href="README.md#readme-zh" lang="zh-Hans" title="阅读简体中文版">
    <img src="docs/media/readme-language-zh.svg" alt="简体中文" width="112" height="38" />
  </a>
  &nbsp;
  <a href="README.md#readme-en" lang="en" title="Read the full README in English">
    <img src="docs/media/readme-language-en.svg" alt="English" width="112" height="38" />
  </a>
  <br />
  <sub><a href="README.fr.md" lang="fr">Français</a> &nbsp; <a href="README.de.md" lang="de">Deutsch</a> &nbsp; <a href="README.es.md" lang="es">Español</a> &nbsp; <a href="README.ru.md" lang="ru">Русский</a> &nbsp; <a href="README.ar.md" lang="ar">العربية</a> &nbsp; <a href="README.pt.md" lang="pt">Português</a> &nbsp; <a href="README.ja.md" lang="ja">日本語</a> &nbsp; <a href="README.ko.md" lang="ko">한국어</a></sub>
  <br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.en.md">English documentation →</a></sub>
</p>

> Guide de lecture en français. La documentation technique complète reste disponible en anglais et en chinois.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  Recherche sur un vaccin à ARN circulaire contre le cancer du sein triple négatif<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Découvrir le Wiki officiel ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>Lumi, le petit mouton qui vous accompagne dans CirCure.</sub>
</p>

## Présentation du projet

Ce dépôt contient le Wiki officiel de **JLU-FBH** pour le concours international de biologie synthétique **iGEM 2026** : interface du site, articles, illustrations, jeux pédagogiques et laboratoire virtuel.

**CirCure** étudie une plateforme d’ARN circulaire (**circRNA**) modifié pour un vaccin à cibles multiples contre le cancer du sein triple négatif (**TNBC**). Le Wiki présente la conception, les expériences et les résultats du projet à travers des articles, des illustrations originales, une narration liée au défilement et des visualisations interactives.

Le récit part des questions et des préoccupations des patientes, puis aborde les mécanismes moléculaires et les choix expérimentaux. Les lecteurs peuvent s’arrêter, comparer et explorer les contenus à leur rythme.

## Références de conception pour les équipes iGEM

La page [Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) présente l’identité visuelle, les illustrations, les animations, la structure des pages et les expériences pédagogiques.

- [Section 8 : approche humaine et narration](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) — relier les questions des patientes à l’explication scientifique.
- [Section 9 : contribution du Wiki](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) — préparation des illustrations par calques, rythme de lecture, navigation et interactions réversibles.
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) — premières propositions, comparaisons et démonstrations interactives.
- [Guide de conception et sources (anglais)](docs/visual-design-guide.en.md) — méthodes, chemins de fichiers, références et attribution.

## Explorer le projet

Le site comprend cinq groupes : **Team**, **Project**, **Wet Lab**, **Dry Lab** et **Engagement**. Ils rassemblent les membres, la conception du projet, les expériences, les modèles, les logiciels, les actions éducatives et la durabilité.

Le [portail Games](https://2026.igem.wiki/jlu-fbh/games) réunit le laboratoire virtuel, **Breast Guardian RPG**, **Bomb Cat** et **Bio Memory Match**. Le [laboratoire virtuel](https://virtual-lab-208fd4.igem.wiki/) propose neuf expériences de biologie moléculaire, de la culture bactérienne à la PCR et à l’analyse de l’expression des protéines.

| Ressource | Accès |
| --- | --- |
| Wiki officiel | [Projet et résultats](https://2026.igem.wiki/jlu-fbh/) |
| Aperçu de développement | [Version en cours d’évolution](https://wiki.dayquay.com/jlu-fbh/) |
| Vidéo du projet | [Plateforme vidéo officielle iGEM](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| Code GitHub | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| GitLab officiel | [Source et historique de publication](https://gitlab.igem.org/2026/jlu-fbh) |

Les sites officiel et de développement sont déployés séparément et peuvent présenter des contenus différents. Voir le [guide de déploiement (anglais)](docs/deployment.en.md). Le choix de langue en haut de cette page change le guide README ; les pages du Wiki et les documents liés conservent leur langue.

## Code et architecture

Le Wiki utilise **React, TypeScript et Vite**. **GSAP** anime les scènes, **Mol\*** affiche les structures moléculaires et **ECharts** présente les données des modèles.

| Emplacement | Contenu |
| --- | --- |
| `src/data/` | Articles, sections et correspondances des ressources |
| `src/contents/` | Assemblage des pages |
| `src/components/wiki/` | Lecteur commun et interactions |
| `src/components/home/` | Scènes de la page d’accueil |
| `src/styles/` | Mise en page, couleurs et animations |
| `virtual-lab/` et `games/` | Applications avec leurs propres dépendances et compilations |

Voir le [plan du dépôt (anglais)](docs/repository-layout.en.md) et le [guide des ressources (anglais)](docs/assets.en.md).

## Démarrage rapide

Utilisez **Node.js 22.12+ dans la branche 22.x** et **Yarn Classic 1.22.22**. À la racine du dépôt :

```sh
yarn install --frozen-lockfile
yarn dev
```

Ouvrez l’adresse indiquée dans le terminal, généralement `http://localhost:5173/jlu-fbh/`.

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

La compilation écrit dans `dist/`. Le laboratoire et les jeux se compilent séparément ; consultez leurs README. Le serveur de développement principal sert uniquement le Wiki. Instructions détaillées : [développement (anglais)](docs/development.en.md), [laboratoire (anglais)](virtual-lab/README.md#readme-en) et [jeux (anglais)](games/README.md#readme-en).

## Équipe, contributions et licence

Consultez [Roster](https://2026.igem.wiki/jlu-fbh/roster) et [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) pour les membres, leurs contributions et les soutiens institutionnels. La [version anglaise complète](README.md#team-and-acknowledgements) conserve les remerciements détaillés.

Pour proposer une modification, lisez le [guide de contribution (anglais)](CONTRIBUTING.en.md). Le dépôt racine est sous licence [CC BY 4.0](LICENSE). Conservez les attributions et respectez les licences propres aux ressources tierces et aux applications autonomes.

Ce guide est une synthèse traduite du README. Pour l’ensemble des détails techniques et des responsabilités, consultez le [README anglais](README.md#readme-en) ou le [README chinois](README.md).
