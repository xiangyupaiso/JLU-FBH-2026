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

> 日本語の概要ガイドです。詳しい技術文書は英語版と中国語版をご覧ください。

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH · iGEM" width="180" /><br />
  トリプルネガティブ乳がんを対象とする環状 RNA ワクチンの研究<br />
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>公式 Wiki を開く ↗</strong></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi" width="120" height="120" />
  </a><br />
  <sub>小さな羊の Lumi が CirCure を案内します。</sub>
</p>

## プロジェクト概要

このリポジトリは、合成生物学の国際大会 **iGEM 2026** に参加する **JLU-FBH** チームの公式 Wiki ソースです。Web サイト、記事、イラスト、学習ゲーム、仮想実験室のソースコードを収録しています。

**CirCure** は、トリプルネガティブ乳がん（**TNBC**）の複数の標的に対応するワクチンに向けて、改変した環状 RNA（**circRNA**）のプラットフォームを研究しています。Wiki では、記事、手描きのイラスト、スクロールに連動する物語、対話型の可視化を通じて、設計、実験、研究結果を紹介します。

患者さんの疑問や不安を出発点に、分子機構や実験設計へと説明を進めます。読者は自分のペースで立ち止まり、比較し、内容を探索できます。

## iGEM チームに向けたデザイン資料

[Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design) では、ビジュアルアイデンティティ、イラスト、アニメーション、ページ構成、学習体験を紹介しています。

- [第 8 節：人への配慮と物語の設計](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) — 患者さんの問いと科学的な説明をつなぎます。
- [第 9 節：Wiki を通じた貢献](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) — イラストのレイヤー分け、読むための時間、ナビゲーション、元に戻せる操作を説明します。
- [Design Folios](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) — 初期案、比較、操作できるデモをまとめています。
- [デザイン手法とソースのガイド（英語）](docs/visual-design-guide.en.md) — 手法、ファイルの場所、参考文献、クレジットを確認できます。

## コンテンツを探す

サイトには **Team、Project、Wet Lab、Dry Lab、Engagement** の 5 つのグループがあります。メンバー、プロジェクト設計、実験、モデル、ソフトウェア、教育活動、持続可能性を扱います。

[Games](https://2026.igem.wiki/jlu-fbh/games) には、仮想実験室、**Breast Guardian RPG**、**Bomb Cat**、**Bio Memory Match** が集まっています。[仮想実験室](https://virtual-lab-208fd4.igem.wiki/) では、細菌培養から PCR、タンパク質発現の解析まで、9 つの分子生物学実験を学べます。

| 資料 | リンク |
| --- | --- |
| 公式 Wiki | [プロジェクトと研究結果](https://2026.igem.wiki/jlu-fbh/) |
| 開発プレビュー | [継続して更新される開発版](https://wiki.dayquay.com/jlu-fbh/) |
| 紹介動画 | [iGEM 公式動画プラットフォーム](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16) |
| GitHub ソース | [Official-wiki](https://github.com/xiangyupaiso/Official-wiki) |
| 公式 GitLab | [ソースと公開履歴](https://gitlab.igem.org/2026/jlu-fbh) |

公式サイトと開発プレビューは別々にデプロイされるため、内容が異なる場合があります。詳細は[デプロイガイド（英語）](docs/deployment.en.md)をご覧ください。ページ上部の言語選択は README ガイドを切り替えます。Wiki 本体やリンク先の文書は、それぞれの言語のままです。

## ソース構成

Wiki は **React、TypeScript、Vite** で構築しています。**GSAP** はアニメーション、**Mol\*** は分子構造の表示、**ECharts** はモデルのデータ可視化を担当します。

| 場所 | 内容 |
| --- | --- |
| `src/data/` | 記事、節、リソースの対応関係 |
| `src/contents/` | ページの組み立て |
| `src/components/wiki/` | 共通の閲覧表示と対話機能 |
| `src/components/home/` | ホームページのシーン |
| `src/styles/` | レイアウト、配色、アニメーション |
| `virtual-lab/` と `games/` | 依存関係とビルドを個別に管理するアプリ |

[リポジトリ構成（英語）](docs/repository-layout.en.md)と[リソース管理ガイド（英語）](docs/assets.en.md)も参照してください。

## クイックスタート

**Node.js 22.x の 22.12 以降**と **Yarn Classic 1.22.22** を使用します。リポジトリのルートで実行してください。

```sh
yarn install --frozen-lockfile
yarn dev
```

ターミナルに表示された URL を開きます。通常は `http://localhost:5173/jlu-fbh/` です。

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

ビルドの出力先は `dist/` です。仮想実験室とゲームは個別にビルドします。それぞれの README を確認してください。ルートの開発サーバーは Wiki のみを配信します。詳しい手順：[開発ガイド（英語）](docs/development.en.md)、[仮想実験室（英語）](virtual-lab/README.md#readme-en)、[ゲーム（英語）](games/README.md#readme-en)。

## チーム・貢献・ライセンス

メンバー、役割、協力機関については [Roster](https://2026.igem.wiki/jlu-fbh/roster) と [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) をご覧ください。詳しい謝辞は[英語完全版](README.md#team-and-acknowledgements)に掲載しています。

変更を提案する際は、[貢献ガイド（英語）](CONTRIBUTING.en.md)を確認してください。ルートリポジトリは [CC BY 4.0](LICENSE) で公開しています。必要なクレジットを保持し、第三者の素材や独立したアプリのライセンスにも従ってください。

このページは README の要約翻訳です。技術情報と担当範囲の全体は、[英語版](README.md#readme-en)または[中国語版](README.md)を参照してください。
