<p align="center" dir="ltr">
  <a href="README.md#readme-zh" lang="zh-Hans" title="阅读简体中文版">
    <img src="docs/media/readme-language-zh.svg" alt="简体中文" width="112" height="38" />
  </a>
  &nbsp;
  <a href="README.md#readme-en" lang="en" title="Read the full README in English">
    <img src="docs/media/readme-language-en.svg" alt="English" width="112" height="38" />
  </a>
  <br />
  <sub><a href="README.fr.md" lang="fr">Français</a> &nbsp; <a href="README.de.md" lang="de">Deutsch</a> &nbsp; <a href="README.es.md" lang="es">Español</a> &nbsp; <a href="README.ru.md" lang="ru">Русский</a> &nbsp; <a href="README.ar.md" lang="ar">العربية</a> &nbsp; <a href="README.pt.md" lang="pt">Português</a> &nbsp; <a href="README.ja.md" lang="ja">日&#8288;本&#8288;語</a> &nbsp; <a href="README.ko.md" lang="ko">한&#8288;국&#8288;어</a></sub>
  <br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.en.md">English documentation →</a></sub>
</p>

> Guia de leitura em português. A documentação técnica completa está disponível em inglês e chinês.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  Pesquisa de uma vacina de RNA circular contra o câncer de mama triplo-negativo<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Explorar o Wiki oficial ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>Lumi, a pequena ovelha que acompanha você pelo CirCure.</sub>
</p>

## Visão geral do projeto

Este repositório contém o Wiki oficial da equipe **JLU-FBH** para a competição internacional de biologia sintética **iGEM 2026**: site, artigos, ilustrações, jogos educativos e código-fonte do laboratório virtual.

O **CirCure** investiga uma plataforma de RNA circular (**circRNA**) modificado para uma vacina com múltiplos alvos contra o câncer de mama triplo-negativo (**TNBC**). O Wiki apresenta a concepção, os experimentos e os resultados por meio de artigos, ilustrações originais, narrativa vinculada à rolagem e visualizações interativas.

A narrativa parte das perguntas e preocupações das pacientes e avança para os mecanismos moleculares e as decisões experimentais. Cada pessoa pode parar, comparar e explorar o conteúdo no próprio ritmo.

## Referências de design para equipes iGEM

A página [Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) explica a identidade visual, as ilustrações, as animações, a estrutura das páginas e as experiências educativas.

- [Seção 8: perspectiva humana e narrativa](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) — conectar as perguntas das pacientes às explicações científicas.
- [Seção 9: nossa contribuição por meio do Wiki](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) — ilustrações em camadas, ritmo de leitura, navegação e interações reversíveis.
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) — propostas iniciais, comparações e demonstrações interativas.
- [Guia de design e código-fonte (inglês)](docs/visual-design-guide.en.md) — métodos, caminhos de arquivos, referências e atribuição.

## Explorar o projeto

O site está organizado em cinco grupos: **Team**, **Project**, **Wet Lab**, **Dry Lab** e **Engagement**. Eles abrangem integrantes, concepção do projeto, experimentos, modelos, software, ações educativas e sustentabilidade.

O [portal Games](https://2026.igem.wiki/jlu-fbh/games) reúne o laboratório virtual, **Breast Guardian RPG**, **Bomb Cat** e **Bio Memory Match**. O [laboratório virtual](https://virtual-lab-208fd4.igem.wiki/) oferece nove experimentos de biologia molecular, da cultura bacteriana à PCR e à análise da expressão de proteínas.

| Recurso | Acesso |
| --- | --- |
| Wiki oficial | [Projeto e resultados](https://2026.igem.wiki/jlu-fbh/) |
| Prévia de desenvolvimento | [Versão em evolução](https://wiki.dayquay.com/jlu-fbh/) |
| Vídeo do projeto | [Plataforma oficial de vídeos do iGEM](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| Código no GitHub | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| GitLab oficial | [Código e histórico de publicação](https://gitlab.igem.org/2026/jlu-fbh) |

O site oficial e a prévia de desenvolvimento são publicados separadamente e podem apresentar conteúdos diferentes. Consulte o [guia de implantação (inglês)](docs/deployment.en.md). A seleção de idioma no topo muda o guia README; as páginas do Wiki e os documentos vinculados mantêm seus próprios idiomas.

## Código e arquitetura

O Wiki usa **React, TypeScript e Vite**. O **GSAP** controla as animações, o **Mol\*** exibe estruturas moleculares e o **ECharts** apresenta dados dos modelos.

| Local | Conteúdo |
| --- | --- |
| `src/data/` | Artigos, seções e mapeamentos de recursos |
| `src/contents/` | Composição das páginas |
| `src/components/wiki/` | Leitor compartilhado e interações |
| `src/components/home/` | Cenas da página inicial |
| `src/styles/` | Layout, cores e animações |
| `virtual-lab/` e `games/` | Aplicações com dependências e compilações próprias |

Veja o [mapa do repositório (inglês)](docs/repository-layout.en.md) e o [guia de recursos (inglês)](docs/assets.en.md).

## Início rápido

Use **Node.js 22.12 ou superior dentro da série 22.x** e **Yarn Classic 1.22.22**. Na raiz do repositório:

```sh
yarn install --frozen-lockfile
yarn dev
```

Abra o endereço indicado no terminal, normalmente `http://localhost:5173/jlu-fbh/`.

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

A compilação gera os arquivos em `dist/`. O laboratório e os jogos são compilados separadamente; siga os respectivos README. O servidor de desenvolvimento principal serve apenas o Wiki. Instruções detalhadas: [desenvolvimento (inglês)](docs/development.en.md), [laboratório (inglês)](virtual-lab/README.md#readme-en) e [jogos (inglês)](games/README.md#readme-en).

## Equipe, contribuições e licença

As páginas [Roster](https://2026.igem.wiki/jlu-fbh/roster) e [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) registram integrantes, contribuições e apoio institucional. A [versão completa em inglês](README.md#team-and-acknowledgements) contém os agradecimentos detalhados.

Antes de propor mudanças, leia o [guia de contribuição (inglês)](CONTRIBUTING.en.md). O repositório raiz usa [CC BY 4.0](LICENSE). Preserve as atribuições e respeite as licenças próprias de recursos de terceiros e aplicações independentes.

Este guia é um resumo traduzido do README. Os detalhes técnicos completos e as responsabilidades estão no [README em inglês](README.md#readme-en) e no [README em chinês](README.md).
