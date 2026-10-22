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

> Обзор на русском языке. Полная техническая документация доступна на английском и китайском языках.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  Исследование вакцины на основе кольцевой РНК против трижды негативного рака молочной железы<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Открыть официальную Wiki ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>Луми — маленькая овечка, которая сопровождает вас в CirCure.</sub>
</p>

## О проекте

Этот репозиторий содержит официальную Wiki команды **JLU-FBH** для международного конкурса по синтетической биологии **iGEM 2026**: сайт, статьи, иллюстрации, обучающие игры и исходный код виртуальной лаборатории.

**CirCure** исследует платформу на основе сконструированной кольцевой РНК (**circRNA**) для вакцины, направленной на несколько мишеней трижды негативного рака молочной железы (**TNBC**). Wiki представляет замысел, эксперименты и результаты с помощью статей, авторских рисунков, повествования, связанного с прокруткой, и интерактивных визуализаций.

Рассказ начинается с вопросов и переживаний пациенток, затем переходит к молекулярным механизмам и выбору экспериментальных подходов. Читатели могут останавливаться, сравнивать материалы и изучать их в удобном темпе.

## Дизайн: материалы для команд iGEM

Раздел [Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) посвящён визуальному стилю, иллюстрациям, анимации, структуре страниц и обучающим сценариям.

- [Раздел 8: внимание к человеку и построение повествования](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) — связь вопросов пациенток с научными объяснениями.
- [Раздел 9: наш вклад через Wiki](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) — подготовка иллюстраций по слоям, темп чтения, навигация и обратимые взаимодействия.
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) — ранние варианты, сравнения и интерактивные демонстрации.
- [Руководство по дизайну и исходному коду (английский)](docs/visual-design-guide.en.md) — методы, пути к файлам, источники и указание авторства.

## Знакомство с проектом

Сайт состоит из пяти групп: **Team**, **Project**, **Wet Lab**, **Dry Lab** и **Engagement**. В них представлены участники, разработка проекта, эксперименты, модели, программное обеспечение, образовательная деятельность и устойчивое развитие.

Портал [Games](https://2026.igem.wiki/jlu-fbh/games) объединяет виртуальную лабораторию, **Breast Guardian RPG**, **Bomb Cat** и **Bio Memory Match**. [Виртуальная лаборатория](https://virtual-lab-208fd4.igem.wiki/) предлагает девять опытов по молекулярной биологии: от культивирования бактерий до ПЦР и анализа экспрессии белка.

| Ресурс | Ссылка |
| --- | --- |
| Официальная Wiki | [Проект и результаты](https://2026.igem.wiki/jlu-fbh/) |
| Предварительная версия | [Текущая разработка](https://wiki.dayquay.com/jlu-fbh/) |
| Видео проекта | [Официальная видеоплатформа iGEM](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| Код на GitHub | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| Официальный GitLab | [Код и история публикаций](https://gitlab.igem.org/2026/jlu-fbh) |

Официальный сайт и предварительная версия развёртываются отдельно и могут различаться по содержанию. См. [руководство по развёртыванию (английский)](docs/deployment.en.md). Выбор языка вверху переключает руководство README; страницы Wiki и связанные документы сохраняют свой язык.

## Код и архитектура

Wiki использует **React, TypeScript и Vite**. **GSAP** управляет анимацией, **Mol\*** отображает молекулярные структуры, а **ECharts** визуализирует данные моделей.

| Расположение | Содержание |
| --- | --- |
| `src/data/` | Статьи, разделы и соответствия ресурсов |
| `src/contents/` | Сборка страниц из компонентов |
| `src/components/wiki/` | Общий интерфейс чтения и интерактивные компоненты |
| `src/components/home/` | Сцены главной страницы |
| `src/styles/` | Компоновка, цвета и анимация |
| `virtual-lab/` и `games/` | Приложения с отдельными зависимостями и сборками |

См. [карту репозитория (английский)](docs/repository-layout.en.md) и [руководство по ресурсам (английский)](docs/assets.en.md).

## Быстрый запуск

Используйте **Node.js 22.12 или новее в рамках ветки 22.x** и **Yarn Classic 1.22.22**. Из корневого каталога репозитория:

```sh
yarn install --frozen-lockfile
yarn dev
```

Откройте адрес из терминала, обычно `http://localhost:5173/jlu-fbh/`.

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

Результат сборки записывается в `dist/`. Лаборатория и игры собираются отдельно; следуйте их README. Основной сервер разработки обслуживает только Wiki. Подробности: [разработка (английский)](docs/development.en.md), [лаборатория (английский)](virtual-lab/README.md#readme-en) и [игры (английский)](games/README.md#readme-en).

## Команда, участие и лицензия

На страницах [Roster](https://2026.igem.wiki/jlu-fbh/roster) и [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) указаны участники, их вклад и поддержавшие проект организации. Подробные благодарности сохранены в [полной английской версии](README.md#team-and-acknowledgements).

Перед предложением изменений прочитайте [руководство для участников (английский)](CONTRIBUTING.en.md). Корневой репозиторий распространяется по лицензии [CC BY 4.0](LICENSE). Сохраняйте необходимые указания авторства и соблюдайте отдельные лицензии сторонних материалов и самостоятельных приложений.

Это руководство — сокращённый перевод README. Полные технические сведения и распределение обязанностей приведены в [английском README](README.md#readme-en) и [китайском README](README.md).
