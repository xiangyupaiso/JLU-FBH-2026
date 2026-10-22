<a name="readme-zh"></a><br />

<p align="center">
  <a href="#readme-zh"><img src="docs/media/readme-language-zh.svg" alt="简体中文 · 当前语言" width="112" /></a>
  &nbsp;
  <a href="#readme-en"><img src="docs/media/readme-language-en.svg" alt="English · Read in English on this page" width="112" /></a><br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.en.md">English documentation →</a></sub>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <a href="https://teams.igem.org/6056">
    <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH 队徽与 iGEM 标识" width="180" />
  </a>
</p>

<p align="center">
  <strong>CirCure 官方 Wiki</strong><br />
  面向三阴性乳腺癌的环状 RNA 疫苗研究
</p>

<p align="center">
<a href="https://teams.igem.org/6056"><img src="docs/media/readme-badge-igem.svg" alt="iGEM 2026" height="24" /></a>
  <a href="#技术栈与核心依赖"><img src="docs/media/readme-badge-react.svg" alt="React 19.2" height="24" /></a>
  <a href="#技术栈与核心依赖"><img src="docs/media/readme-badge-typescript.svg" alt="TypeScript 5.9" height="24" /></a>
  <a href="#技术栈与核心依赖"><img src="docs/media/readme-badge-vite.svg" alt="Vite 7.3" height="24" /></a>
  <a href="LICENSE"><img src="docs/media/readme-badge-license.svg" alt="License · CC BY 4.0" height="24" /></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/" title="浏览 CirCure 官方 Wiki">
    <img src="docs/media/readme-visit-wiki-zh.svg" alt="浏览完整 Wiki ↗" width="300" height="76" />
  </a>
  <br />
  <sub><a href="https://2026.igem.wiki/jlu-fbh/">进入官方 Wiki，浏览完整项目与交互展示 ↗</a></sub>
</p>

<p align="center">
  <a href="#给未来-igem-团队的设计参考">设计经验</a>
  &nbsp;·&nbsp;
  <a href="#全站模块与页面体系">页面导航</a>
  &nbsp;·&nbsp;
  <a href="#快速启动">快速启动</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md">参与贡献</a>
</p>

## 项目概览

这是 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki 仓库，包含网站前端、页面内容、设计素材，以及游戏和虚拟实验室源码。

**CirCure** 研究基于工程化环状 RNA（circRNA）的多靶向三阴性乳腺癌（TNBC）疫苗平台。Wiki 通过研究文章、手绘插画、滚动叙事、模型可视化和科普游戏，介绍项目的设计思路、实验过程与研究结果。

我们希望读者在了解分子机制与实验设计的同时，也能看到研究背后患者对复发的担忧，以及她们对生活的期待。因此，我们从患者的疑问讲起，在科学解释中加入可以停下来阅读、比较和探索的交互，让读者按自己的节奏了解 CirCure。

<p align="center">
  <strong>项目宣传视频 · Promotion Video</strong><br />
  <a href="https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16">
    <img src="https://video.igem.org/lazy-static/thumbnails/a5170f77-bfc2-4ce8-a304-5b86a23cccc2.jpg" alt="CirCure 项目宣传视频官方封面，点击前往 iGEM 视频平台观看。" width="800" />
  </a>
  <br />
  <a href="https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16"><strong>▶ 观看宣传视频 · 2 分 03 秒 ↗</strong></a><br />
  <sub>iGEM 官方视频平台 · 点击封面或链接播放</sub>
</p>

<details>
<summary><strong>展开官网预览</strong> · circRNA 手绘场景</summary>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/wiki-circrna.jpg" alt="CirCure 官方 Wiki 首页的 circRNA 手绘场景：环状结构、稳定性和持续表达的概念图解。" width="960" />
  </a>
  <br />
  <sub>官网首页实景 · 概念图解 · 点击图片进入完整 Wiki</sub>
</p>

</details>

## 给未来 iGEM 团队的设计参考

**JLU-FBH / JLUFBH · CirCure · iGEM 2026 · 吉林大学白求恩第一医院（First Bethune Hospital of Jilin University）**。本仓库也保存团队在科学传播（science communication）、Wiki 视觉设计（visual design）和交互叙事（interactive storytelling）中的尝试、修改原因与实现，供后续 iGEM 团队调研、引用和复用。

**建议打开 [Visual Design 完整交互页面 ↗](https://2026.igem.wiki/jlu-fbh/visual-design)，重点阅读[第 8 节：人文关怀与叙事设计](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)和[第 9 节：Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)。**

第 8 节从患者视角组织科学叙事；第 9 节分享分层绘稿、阅读停留、清晰导航与可逆交互的设计经验。建议边体验演示，边展开 **Technical details** 查看设计理由与实现说明。

[中英文方法指南](docs/visual-design-guide.md)提供案例摘要与源码入口，便于在 GitHub 内查阅，以及供搜索和 AI 调研工具读取；完整的交互与展开说明请结合原网页学习。

**也请展开页尾的 [Design Folios：六组设计研究与迭代 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)。** 这里保留了未在最终 Wiki 中采用的探索、历史方案与修改理由，包括图像导航、粉色丝带与标志展开、三种 Human Practices 时间线，以及构图和 RNA 环转场的比较。其中五个交互演示保留为 HTML 页面，可在作品集中操作，也可通过 **Open in full window** 单独体验。它们为后续团队提供设计思路与实现参考；[方法指南中的作品集入口](docs/visual-design-guide.md#design-folios设计作品集与历史方案)列出了具体案例和源码。

[Jianyuan Li](https://2026.igem.wiki/jlu-fbh/roster)（GitHub：[@jianyuanliljy-hub](https://github.com/jianyuanliljy-hub)）主要负责 CirCure 首页的设计与开发、Visual Design 第 8、9 节的调研、撰写与设计，以及 Design Folios 中相关的设计研究与交互实现。

### Visual Design 九个部分

| 部分 | 内容与调研入口 |
| --- | --- |
| [1 · Brand Identity](https://2026.igem.wiki/jlu-fbh/visual-design#brand-identity) | 项目标识、队徽、队旗与 Lumi 吉祥物如何呼应研究主题。 |
| [2 · Cross-Module Palette Architecture](https://2026.igem.wiki/jlu-fbh/visual-design#color-system) | 五个内容模块的配色、标题层级与阅读底色。 |
| [3 · Interactive Aesthetics & Motion](https://2026.igem.wiki/jlu-fbh/visual-design#interactive-experience) | 吉祥物光标、水彩界面、分子可视化与动画。 |
| [4 · Decoupled Web Engineering Architecture](https://2026.igem.wiki/jlu-fbh/visual-design#engineering-rigor) | 正文、资产、交互和装配分层，以及文献与媒体交付。 |
| [5 · Core Interfaces & Narrative Experience](https://2026.igem.wiki/jlu-fbh/visual-design#core-interfaces) | 加载界面与首页叙事入口。 |
| [6 · Wiki Subpage Illustration System](https://2026.igem.wiki/jlu-fbh/visual-design#subpage-illustrations) | 跨模块的手绘题图与统一视觉语言。 |
| [7 · Educational Games & Hands-On Experience](https://2026.igem.wiki/jlu-fbh/visual-design#educational-games) | 科普游戏与虚拟实验室的体验设计。 |
| [8 · Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) | 从患者的问题出发连接科学解释，给读者参与和调节节奏的空间。 |
| [9 · Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) | 从分层绘稿、阅读节奏到导航、收尾与迭代记录的可复用方法。 |

调研与引用：[方法指南与源码地图](docs/visual-design-guide.md) · [English guide](docs/visual-design-guide.en.md) · [设计参考文献](https://2026.igem.wiki/jlu-fbh/visual-design#design-references) · [署名、许可与引用建议](docs/visual-design-guide.md#复用与引用)。

## 项目链接

**GitHub 仓库** · 开发协作、设计方法与可复用源码<br />[JLU-FBH / CirCure — xiangyupaiso/Official-wiki](https://github.com/xiangyupaiso/Official-wiki)

**在线 Wiki** · 正式网站与项目展示<br />[https://2026.igem.wiki/jlu-fbh/](https://2026.igem.wiki/jlu-fbh/)

**开发预览版** · 持续更新的页面、交互与设计展示<br />[https://wiki.dayquay.com/jlu-fbh/](https://wiki.dayquay.com/jlu-fbh/)

**项目宣传视频 · Promotion Video** · iGEM 官方视频平台<br />[https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16)

**官方 GitLab** · 官方源码与发布记录<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**团队后台 · Team 6056** · 团队管理、素材上传与参赛交付<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

日常开发与 Pull Request 在本 GitHub 仓库进行；官方 GitLab 同步与网站发布的关系见[部署说明](docs/deployment.md)。

### 预览版与正式版的区别

根据 [iGEM 2026 官方日历](https://competition.igem.org/about/calendar)，官方 Wiki 于 **2026 年 10 月 21 日 15:00 UTC（北京时间 23:00，UTC+8）**进入冻结期（Wiki Freeze）。冻结期间无法继续编辑，需等待赛事结束后的 Wiki Thaw 重新开放修改。

[`2026.igem.wiki/jlu-fbh/`](https://2026.igem.wiki/jlu-fbh/)保留正式参赛的冻结版本。后续补充、资料恢复和页面改进保存在本 GitHub 仓库，部署后可在[开发预览版 `wiki.dayquay.com`](https://wiki.dayquay.com/jlu-fbh/)查看。两个站点独立发布。

截至 2026-10-22，GitHub 开发版相较官方 GitLab 保留了以下补充：

- **Visual Design**：11 张初始草稿、四种图片圆角对比、Next page 与页脚之间的留白说明和完整截图，以及更完整的丝带与历史设计展示。已在 dayquay 预览页核对草稿、圆角对比和留白展示。
- **Bomb Cat**：创建与加入在线房间、大厅、连接状态及 PeerJS 联机源码；源码与重建产物均保留在 GitHub。
- **Sustainability**：恢复 10 月 21 日晚紧急回退覆盖的 Tracker 汇总，区分 66 位参与者、38 份来源档案和 78 条反馈，展示 10 项框架 SDG 的 SET / DEVELOP / GROW 分层；长期路径保留待验证说明。
- **素材与工程资料**：保留可构建的游戏与虚拟实验室源码、本地素材、来源记录及双语开发文档。

具体文件、回退时间线和发布边界见[版本差异说明](docs/deployment.md#预览版与官方-gitlab-的内容差异)。

## 从这里开始

- 调研 iGEM Wiki 设计：[Visual Design 方法指南](docs/visual-design-guide.md)，重点阅读第 9 节的方法与案例
- 直接运行项目：[快速启动](#快速启动)
- 开发、检查与构建：[开发指南](docs/development.md)
- 改页面时去哪里找文件：[仓库地图](docs/repository-layout.md)
- GitHub、官方 GitLab 与预览环境：[部署说明](docs/deployment.md)
- 图片、原稿、CDN 映射与上传包：[素材维护](docs/assets.md)
- 所有文档：[文档索引](docs/README.md)
- 提交改动前：[协作约定](CONTRIBUTING.md)

本页内容：[技术栈](#技术栈与核心依赖) · [架构原则](#架构设计与开发原则) · [页面体系](#全站模块与页面体系) · [交互特色](#核心交互与工程特色) · [仓库目录](#仓库目录与构建边界) · [修改入口](#常见修改位置) · [部署适配](#持续集成与多环境适配) · [许可](#授权与知识产权)

## 技术栈与核心依赖

主站使用以下技术。[package.json](package.json)列出依赖及版本范围，锁文件记录实际安装版本；独立子项目各自维护依赖。

| 领域             | 选型                                       | 版本系列                            | 工程用途                                      |
| ---------------- | ------------------------------------------ | ----------------------------------- | --------------------------------------------- |
| 构建工具         | Vite                                       | 7.3.x                               | 本地开发、热更新（HMR）与多 HTML 入口生产构建 |
| 前端框架         | React + TypeScript                         | 19.2.x / 5.9.x                      | 组件、类型检查与页面数据接口                  |
| 路由             | React Router                               | 7.x                                 | 页面路由、导航、重定向与阅读入口              |
| 动画编排         | GSAP + @gsap/react                         | 3.15.x / 2.1.x                      | 开场笔画、滚动场景、时间轴与组件动画生命周期  |
| 分子结构可视化   | Mol\*（Molstar）                           | 5.13.x                              | WebGL 分子查看器，运行时单独编译并按需加载    |
| 数据可视化       | Apache ECharts                             | 6.1.x                               | 图表、图例、区间高亮与提示信息                |
| 主站样式         | CSS 自定义属性（Design Tokens）+ Bootstrap | Bootstrap 5.3.x                     | 主题、栅格、共享阅读器与页面排版              |
| 实验室样式与图标 | Tailwind CSS + Lucide                      | Tailwind 3.4.x；主站 Lucide 0.562.x | 实验台界面、图标与独立样式系统                |
| 交互原语         | Radix UI                                   | 主站 Dialog / Tabs 1.x              | 对话框、标签页等基础交互                      |
| 工程检查         | ESLint + Prettier + Node 测试脚本          | 以配置与锁文件为准                  | 静态检查、格式化与专项回归验证                |

主站、两个独立游戏和虚拟实验室有不同的构建入口；根目录构建不会自动重建所有子项目，详见[构建边界](#三类应用的构建边界)。

## 架构设计与开发原则

### 页面分层：数据、资产、交互与装配

页面开发遵循[架构规范](WIKI_ARCHITECTURE_SPEC.md)中的关注点分离（Separation of Concerns），主要分成四层：

| 层次     | 常见路径                                 | 职责                                                                |
| -------- | ---------------------------------------- | ------------------------------------------------------------------- |
| 正文数据 | `src/data/[module]/[page]Page.ts`        | 以 `WikiPageContent` 等类型描述正文、章节、图表与链接，避免混入 JSX |
| 资产映射 | `src/data/[module]/[page]Assets.ts`      | 维护本地来源、图片和附件的调用关系与 CDN 映射                       |
| 页面交互 | `src/components/wiki/features/[module]/` | 封装图表、构建体查看器和专用交互，通过 feature 插槽接入             |
| 路由装配 | `src/contents/[page].tsx`                | 组合 `WikiRoutePage`、页面数据、Hero 和 feature，保持装配层简洁     |

新增页面按这四层组织。现有 `src/data/` 中，部分页面数据位于根目录，部分位于模块子目录，维护时可沿 `import` 找到对应文件。

### 共享阅读器与单一维护入口

正文页面复用 `WikiRoutePage`，统一处理内容块、图片、文献、目录与章节衔接。共享尺寸和阅读版式优先维护 `src/styles/wiki-route-skin.css`；模块主题由 `route-palette-*.css` 管理，页面专用交互与样式留在对应 feature 中。

正文与资产映射分别维护，避免同一内容在组件和数据文件中重复保存。具体修改位置见[常见修改位置](#常见修改位置)。

### 独立应用与样式隔离

主站以共享阅读器、CSS 主题和 Bootstrap 为基础；虚拟实验室有自己的 Tailwind 样式、依赖和构建。主站通过 `loading="lazy"` 的 iframe 嵌入官方实验室部署，隔离两个文档的样式与视口。

实验室使用 `window.postMessage` 通知主站关闭，主站同时检查消息来源域名与 iframe 窗口。实验室的九个实验页面使用 `React.lazy` 和动态 `import()` 分包，在实验室项目内独立构建。

### 共享图片准备契约

页面切换使用共享加载器；`WikiRoutePage` 自动收集 Hero 和正文图片。弹窗或未激活标签中的普通图片通过 `preloadImages` 或 `PageImagePreloads` 声明，避免读者进入交互后才出现空白图。

新页面继承同一套规则，详见[共享模板的图片准备契约](WIKI_ARCHITECTURE_SPEC.md#471-新页面接入)。修改后运行 `yarn test:page-loading`，再检查实际页面切换与交互。

## 全站模块与页面体系

当前导航由 Home 和五个内容板块组成，包含首页以外的 22 个内容入口。下图与 [src/pages.ts](src/pages.ts) 中的分组一致；路径均相对于网站基址 `/jlu-fbh/`。

```text
CirCure Wiki
├── Home (/)                                      # 开场序章与滚动叙事
├── Team                                          # 团队
│   ├── Roster (/roster)                           # 队员、指导老师与顾问
│   ├── Attributions (/attributions)               # 工作归属与支持
│   └── Activities (/activities)                   # 团队活动与赛季记录
├── Project                                       # 项目
│   ├── Description (/description)                 # 背景、问题与设计思路
│   ├── Engineering (/engineering)                 # 设计—构建—测试—学习（DBTL）
│   ├── Results (/results)                         # 实验结果与讨论
│   ├── Contribution (/contribution)               # 可复用资源与经验
│   ├── Visual Design (/visual-design)             # 视觉体系、插画与交互设计
│   ├── Notebook (/notebook)                       # 过程与实验记录
│   └── Safety and Security (/safety-and-security)  # 安全与风险管理
├── Wet Lab                                       # 湿实验
│   ├── Design (/design)                           # 分子构建与实验设计
│   ├── Experiments (/experiments)                 # 实验方法与操作流程
│   ├── Measurement (/measurement)                 # 测量与表征
│   └── Alternative Platform (/alternative-platform)
├── Dry Lab                                       # 干实验
│   ├── Model (/model)                             # 模型、假设与计算分析
│   ├── Software (/software)                       # CircuForge 与 TorusFold
│   ├── Hardware (/hardware)                       # 装置与硬件设计
│   └── Games (/games)                             # 交互科普与虚拟实验门户
│       ├── Virtual Laboratory                    # 九个分子生物学实验
│       ├── Breast Guardian RPG                   # 乳腺健康叙事游戏
│       ├── Bomb Cat                              # circRNA 策略卡牌
│       └── Bio Memory Match                      # 生物概念翻牌记忆
└── Engagement                                    # 社会实践与公众参与
    ├── Entrepreneurship (/entrepreneurship)       # 商业化构想与转化路径
    ├── Human Practices (/human-practices)         # 相关方访谈与项目反馈
    ├── Education (/education)                    # 科普、教育与交流
    └── Sustainability (/sustainability)          # 可持续发展目标与影响评估
```

`/team` 重定向到 `/roster`，`/attribution` 作为别名重定向到 `/attributions`。

## 核心交互与工程特色

### 开场序章与滚动叙事（Home Intro & Scroll Story）

首页使用 SVG 笔画、Canvas 粒子和 GSAP 时间轴呈现 CirCure 签名开场，并衔接后续的滚动叙事。TNBC 探索地图、抗原切换器、circRNA 图解与场景过渡共同组织从问题背景到设计思路的阅读顺序。

相关实现集中在 `src/components/home/`、`src/data/` 的首页数据以及 `src/styles/home-*.css` 等样式中。首页有独立的叙事布局，进入正文页后使用对应阅读器与模块主题。

### 手绘题图与长文阅读（Hero & Manuscript Reader）

页面使用手绘题图与水墨淡彩视觉规则。题图自身包含标题时，通过 `hideHeroCopy` 控制可见标题，仍保留供辅助技术读取的语义化 `h1`。

共享阅读器包括马克笔风格的 `WikiLineSidebar` 目录、章节定位、正文内图表与文献，以及结尾的 `WikiNextRecord` 下一章入口。目录默认根据当前阅读位置展开更深层标题，部分页面可选择完整大纲。

Team、Project、Wet Lab、Dry Lab 和 Engagement 分别维护模块色板；主色、柔和色和底色与标题、标记等 Token 配合使用。具体颜色及排版约束见[设计与排版规范](文案集/Wiki-设计与排版规范.md)。

### 虚拟分子生物学实验室（Virtual Laboratory）

[在线实验室](https://virtual-lab-208fd4.igem.wiki/)包含九个引导式实验，目录以 Beginner、Intermediate、Advanced 三档组织。主站保留[完整实验室源码](virtual-lab/README.md)，通过 iframe 接入其官方独立部署；[官方软件仓库](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab)负责该应用的部署。

| 难度         | 实验                                 | 主要学习内容                        |
| ------------ | ------------------------------------ | ----------------------------------- |
| Beginner     | 1 · 大肠杆菌 DH5α 复苏与活化培养     | 冻存菌复苏、无菌操作、划线与培养    |
| Beginner     | 2 · 菌落形态观察与革兰氏染色         | 涂片、固定、染色、脱色与显微观察    |
| Beginner     | 3 · pET-28a 质粒提取与琼脂糖凝胶电泳 | 质粒提取、离心柱纯化与电泳检测      |
| Beginner     | 4 · GFP 目的片段胶回收               | 切胶、溶胶、吸附、漂洗与片段纯化    |
| Intermediate | 5 · GFP PCR 扩增与产物验证           | 反应体系、热循环与琼脂糖凝胶验证    |
| Intermediate | 6 · pET-28a 与 GFP 双酶切            | 载体和插入片段的酶切处理            |
| Intermediate | 7 · 重组质粒连接                     | 载体与插入片段配比、T4 DNA 连接反应 |
| Advanced     | 8 · 感受态制备与质粒转化             | 感受态细胞、热激转化与平板培养      |
| Advanced     | 9 · 菌落 PCR、GFP 荧光与蛋白表达     | 阳性克隆筛选、荧光观察和蛋白检测    |

实验界面包括移液器、离心机、PCR 仪、电泳与成像等器材，配合步骤指示（StepIndicator）、操作提示和原理、器材、试剂信息面板（InfoPanel）。实验页面提供重启入口，并对小屏竖屏使用横屏提示。课程内容与视口交互的实现保留在子项目中。

### 交互科普小游戏（Sci-Comm Games）

`/games` 将实验室和三款游戏汇集在同一门户，进入对应体验后加载游戏内容：

- **Breast Guardian RPG**：通过不同生命阶段的角色与情境介绍乳腺健康知识。
- **Bomb Cat**：围绕 circRNA 主题的策略卡牌，包含本地机器人、在线房间和规则说明。
- **Bio Memory Match**：通过标本卡片的观察、记忆与配对接触生物学概念。

Breast Guardian 和 Bomb Cat 的独立可构建源码位于 `games/`；Bio Memory 的运行入口位于 `public/game-assets/bio-memory/`。源码来源、版本比较和构建方式见 [games/README.md](games/README.md)。

### 分子与数据可视化（Molecular & Data Visualization）

Model 页面通过 Mol\* 展示 Trop2 复合体结构，提供旋转、缩放、片段聚焦、表面与极性接触显示等控制。分子运行时与 PDB 在读者接近图示时按需加载，避免首页提前加载完整查看器。

ECharts 等组件展示模型数据，提供图例、区间高亮和交互提示，便于对照图表阅读模型分析。

### 共享导航、光标与页面辅助

站点包含响应式导航、页面内搜索、返回顶部、共享页脚，以及绵羊光标等交互。光标根据精细指针、悬停和 reduced motion 条件启用，在适用的输入区域保留原生光标行为。

这些共享组件跨页面使用，修改时需同时检查首页与正文页的状态切换、窄屏、键盘操作和减少动态效果（reduced motion）设置。

### 素材来源与官方托管

正式页面使用 `static.igem.wiki` 上的官方图片、字体和附件；仓库也保留本地素材、原稿与来源映射。素材调用应沿用对应资产字典和登记规则，视频与独立应用按官方托管入口接入。

上传副本和历史核验记录位于 `delivery/uploads/`。素材更新时，按[素材维护](docs/assets.md)核对源文件、CDN 地址和页面引用。

## 仓库目录与构建边界

### 目录入口

```text
.
├── src/                              # 主站源码
│   ├── assets/                       # 首页、导航、插画与图表素材
│   ├── components/
│   │   ├── home/                     # 开场与首页叙事
│   │   ├── wiki/                     # 共享阅读器与 features/ 页面交互
│   │   ├── VirtualLaboratory/         # 实验室 iframe 接入
│   │   ├── BreastGuardianGame/        # RPG 接入
│   │   ├── BombCatGame/               # 卡牌游戏接入
│   │   └── BioMemoryGame/             # 翻牌游戏接入
│   ├── containers/App/               # 顶层宿主、路由与共享组件
│   ├── contents/                     # 页面装配
│   ├── data/                         # 正文、引用、章节与资产映射
│   ├── hooks/                        # 共享 Hook
│   ├── styles/                       # 主题、阅读器与页面样式
│   ├── utils/                        # 加载、路径和其他工具
│   ├── main.tsx                      # 应用挂载
│   └── pages.ts                      # 页面与导航分组
├── public/                           # 按原路径发布的静态文件
│   ├── assets/                       # 图片、文档等静态资源
│   ├── game-assets/                  # 主站使用的游戏运行文件
│   └── vendor/                       # 保留的第三方运行库
├── games/                            # 两个可独立构建的游戏源码项目
├── virtual-lab/                      # 独立实验室项目
│   ├── src/                          # 实验组件、步骤数据、目录与实验页面
│   ├── public/                       # 课程播放器代码与相关静态文件
│   └── package.json / package-lock.json
├── 文案集/                            # 原稿、原始附件和设计资料
├── scripts/                          # 构建、验证、导入和素材处理
│   └── manual/                       # 限定环境的手动检查
├── docs/                             # 开发说明、内容参考与历史评审
├── delivery/                         # 交付归档
│   └── uploads/                      # 按批次保存的上传副本与清单
├── WIKI_ARCHITECTURE_SPEC.md          # 页面规范与共享加载契约
├── IGEM_ASSET_REGISTRY.md             # 素材登记表
├── .gitlab-ci.yml                    # 官方 GitLab Pages 流水线
├── wrangler.json                     # Cloudflare 静态资源配置
├── eslint.config.js                  # ESLint 配置
├── package.json / yarn.lock          # 主站脚本、依赖与 Yarn 锁文件
├── package-lock.json                 # 保留的 npm 锁文件
├── tsconfig.json / tsconfig.node.json
└── vite.config.ts                    # 多入口构建、分子运行时与 base 路径
```

根目录的 `index.html`、`visual-design-study.html`、`archive-navigation-study.html` 和 `archive-recognition-study.html` 是四个 HTML 构建入口，分别用于主站和设计研究演示。

`.env` 保存现有队伍元数据等构建输入，不应写入密钥；`.dockerignore` 用于排除本机构建上下文中的无关文件。其余根目录文件职责与迁移记录见[仓库地图](docs/repository-layout.md)。

### 三类应用的构建边界

| 应用                       | 开发入口                                       | 根目录构建的行为                                                |
| -------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| Wiki 主站                  | `src/`，`yarn dev`                             | 类型检查、四个 HTML 入口打包、生成路径映射                      |
| Breast Guardian / Bomb Cat | [games/README.md](games/README.md)             | 发布 `public/game-assets/` 中已提交的运行文件；不会自动重建游戏 |
| Virtual Laboratory         | [virtual-lab/README.md](virtual-lab/README.md) | 主站嵌入官方实验室部署；不会自动构建或发布实验室                |

子项目有各自的依赖、锁文件和许可证，开发与构建方式见对应 README。实验室独立部署；游戏重新构建后，将运行文件更新到主站的 `public/game-assets/`。

## 常见修改位置

| 要修改的内容             | 入口                                                       |
| ------------------------ | ---------------------------------------------------------- |
| 页面路由、导航目标       | `src/pages.ts`、`src/contents/`                            |
| 正文、章节、图表说明     | `src/data/` 中对应模块                                     |
| 页面图片与附件映射       | 对应的 `*Assets.ts`、`src/data/assets/`                    |
| 页面专用交互、图表       | `src/components/wiki/features/`                            |
| 首页叙事、动画           | `src/components/home/`、首页数据与相关 `home-*.css` 样式   |
| 共享阅读器与正文版式     | `src/components/wiki/`、`src/styles/wiki-route-skin.css`   |
| 模块色板与标题颜色       | `src/styles/route-palette-*.css`                           |
| 共享加载与图片准备       | `src/utils/`；遵循[页面规范](WIKI_ARCHITECTURE_SPEC.md)    |
| 素材来源、上传记录       | [素材维护](docs/assets.md)、[交付索引](delivery/README.md) |
| 工具用途、输入与写入范围 | [scripts/README.md](scripts/README.md)                     |

运行导入器或素材生成器前，先查看脚本说明中的写入范围；这些工具会更新内容或索引。修改科研原稿、实验参数、公式与评价指标前，需与内容负责人确认。

## 快速启动

### 环境与依赖

主站建议使用 Node.js 22.12+ 的 22.x 环境和 Yarn Classic 1.22.22，保持与官方 CI 的 Node 22 主版本一致。包管理器以 `package.json` 的 `packageManager` 为准。

从仓库根目录运行：

```sh
yarn install --frozen-lockfile
yarn dev
```

打开终端输出的地址，默认路径为 `http://localhost:5173/jlu-fbh/`。

根目录同时保留 npm 锁文件；使用 npm 时执行 `npm ci`，通过 `npm run <名称>` 运行脚本。同一依赖目录固定使用一种包管理器，升级依赖时同步更新对应锁文件。

### 检查、构建与预览

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

`build` 依次执行主站 TypeScript 检查、Vite 构建和 `scripts/postbuild-slug.mjs`。产物写入 `dist/`，包含 Wiki 与设计研究 HTML 入口；Mol\* 运行时单独编译。

`yarn format` 会批量改写匹配文件，日常只格式化本次涉及的文件。专项内容核对与浏览器检查见[开发指南](docs/development.md)和[脚本索引](scripts/README.md)。

### 开发独立子项目

```sh
# 虚拟实验室：在独立终端启动
cd virtual-lab
npm ci
npm run dev
```

实验室运行 `npm run build` 时产物写入自身忽略的 `virtual-lab/dist/`，主站开发服务器仍只负责 Wiki。两个小游戏在 `games/breast-guardian/` 和 `games/bomb-cat/` 内分别安装与构建，详见各自 README。

## 持续集成与多环境适配

### GitHub 协作与官方 GitLab 发布

协作者在各自的工作分支或功能分支上开发，通过 Pull Request 交流和评审改动，再合入共享的 `main` 分支。分支命名由协作者或负责模块的小组约定。

GitHub 用于日常协作与代码评审，官方 GitLab 用于 iGEM 源码交付和 Wiki 发布。发布负责人按发布计划将审核通过的版本同步到官方 GitLab，由其流水线构建并发布网站。

当前 [.gitlab-ci.yml](.gitlab-ci.yml) 在 GitLab 默认分支执行：

```text
Node 22
  → yarn install --frozen-lockfile
  → yarn lint
  → yarn test:page-loading
  → yarn build
  → 将 dist/. 复制到 CI 的 public/，生成 SPA 回退并发布
```

流水线在 CI 工作目录中将构建产物复制到发布目录。发布流程和源码检查见[部署说明](docs/deployment.md)。

### Yarn Classic 与安装一致性

`package.json` 声明 `yarn@1.22.22`，官方流水线通过 `--frozen-lockfile` 按锁文件安装。主站与子项目分别在各自目录中安装依赖。

### 单份产物与路径映射

`scripts/postbuild-slug.mjs` 读取 Vite 实际解析的 base，在单份 `dist/` 中生成 Cloudflare 的 `_redirects`。默认队伍路径的核心规则为：

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

此外还生成 HTML 与目录入口的规范地址规则。Vite preview 与官方 GitLab Pages 按 base 挂载产物；[wrangler.json](wrangler.json) 让 Cloudflare 从 `./dist` 读取静态文件并使用 SPA 回退。无需再复制出 `dist/jlu-fbh/`。

脚本按需生成 `.assetsignore`，让 Cloudflare 上传时跳过超过 25 MiB 的文件。页面引用这些资源时，使用对应 CDN 地址。

GitHub Pages 不读取 Cloudflare 的 `_redirects`，另行托管时需独立配置挂载路径与深层路由回退。

### TypeScript 资产索引与配置维护

`contributionAssets.ts`、`resultsAssets.ts`、`designAssets.ts` 等资产字典维护页面素材的引用关系。修改后运行 TypeScript 检查与构建，检查索引键和资源路径。

`wrangler.json` 配置 Cloudflare 托管，`.gitlab-ci.yml` 配置官方 Wiki 的构建与发布，`.dockerignore` 控制 Docker 构建上下文包含的文件。

## 团队与致谢

感谢学校、临床机构、科研平台及各支持方对团队工作的帮助。具体工作归属与支持方式见官网的 [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) 页面。

<p align="center">
  <img src="docs/media/readme-institutions.svg" alt="吉林大学；吉林大学白求恩第一医院；吉林大学白求恩第一临床医学院。" width="640" />
</p>

<p align="center">
  <strong>吉林大学</strong><br />
  吉林大学白求恩第一医院 · 吉林大学白求恩第一临床医学院
</p>

### 科研平台、工具与其他支持

<p align="center">
  <img src="docs/media/readme-acknowledgements.svg" alt="官网页脚致谢标识：公共技术平台、转化医学研究院、实验动物中心、Charles River、BioRender、MathWorks、Lark、Grammarly 和 Schrödinger。" width="640" />
</p>

- **临床与教学单位**：吉林大学白求恩第一临床医学院教学部、吉林大学白求恩第一医院肿瘤中心。
- **科研平台**：吉林大学第一医院公共技术平台、转化医学研究院、实验动物中心。
- **工具及其他支持方**：Charles River、BioRender、MathWorks、Lark、Grammarly、Schrödinger。
- **赛事与社区**：iGEM。

## 授权与知识产权

主仓库采用 [CC BY 4.0](LICENSE)（知识共享署名 4.0 国际许可协议）。使用、分发和修改时遵守署名与许可要求；第三方素材、依赖及独立子项目保留各自的许可要求。

维护时保留共享页脚中的许可证说明与官方 GitLab 仓库链接。AI 辅助编写与修改还需遵循[协作约定](CONTRIBUTING.md)及[负责任使用说明](.claude/RESPONSIBLE_AI_USE.md)。

<p align="center"><a href="#readme-zh">↑ 返回中文首页</a> · <a href="#readme-en">Read in English →</a></p>

---

<a name="readme-en"></a><br />

<p align="center">
  <a href="#readme-zh"><img src="docs/media/readme-language-zh.svg" alt="简体中文 · 在本页阅读中文版" width="112" /></a>
  &nbsp;
  <a href="#readme-en"><img src="docs/media/readme-language-en.svg" alt="English · Current language" width="112" /></a><br />
  <sub><a href="docs/README.md">中文文档</a> · <a href="docs/README.en.md">English documentation →</a></sub>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/circure-wordmark.svg" alt="CirCure" width="340" />
  </a>
</p>

<h1 align="center">JLU-FBH · iGEM 2026</h1>

<p align="center">
  <a href="https://teams.igem.org/6056">
    <img src="docs/media/readme-team-marks.svg" alt="JLU-FBH team crest and iGEM mark" width="180" />
  </a>
</p>

<p align="center">
  <strong>CirCure Official Wiki</strong><br />
  A circRNA vaccine research project for triple-negative breast cancer
</p>

<p align="center">
<a href="https://teams.igem.org/6056"><img src="docs/media/readme-badge-igem.svg" alt="iGEM 2026" height="24" /></a>
  <a href="#technology-and-core-dependencies"><img src="docs/media/readme-badge-react.svg" alt="React 19.2" height="24" /></a>
  <a href="#technology-and-core-dependencies"><img src="docs/media/readme-badge-typescript.svg" alt="TypeScript 5.9" height="24" /></a>
  <a href="#technology-and-core-dependencies"><img src="docs/media/readme-badge-vite.svg" alt="Vite 7.3" height="24" /></a>
  <a href="LICENSE"><img src="docs/media/readme-badge-license.svg" alt="License · CC BY 4.0" height="24" /></a>
</p>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/" title="Visit the official CirCure Wiki">
    <img src="docs/media/readme-visit-wiki-en.svg" alt="Explore the Wiki ↗" width="300" height="76" />
  </a>
  <br />
  <sub><a href="https://2026.igem.wiki/jlu-fbh/">Open the official Wiki for the full project and interactive features ↗</a></sub>
</p>

<p align="center">
  <a href="#design-reference-for-future-igem-teams">Design lessons</a>
  &nbsp;·&nbsp;
  <a href="#site-modules-and-pages">Pages</a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.en.md">Contribute</a>
</p>

## Project overview

This is the official Wiki repository for **JLU-FBH** in the 2026 International Genetically Engineered Machine Competition (**iGEM**). It contains the website frontend, page content, design assets, and source code for the games and virtual laboratory.

**CirCure** explores an engineered circular RNA (**circRNA**) platform for a multi-target triple-negative breast cancer (**TNBC**) vaccine. The Wiki presents the project's design, experiments, and research findings through research articles, hand-drawn illustrations, scroll-driven storytelling, model visualizations, and science communication games.

Alongside the molecular mechanisms and experimental design, we want readers to see the patients behind the research: their worries about recurrence and their hopes for everyday life. We begin with a patient's question and give readers room to pause, compare, and explore the science at their own pace.

<p align="center">
  <strong>Project Promotion Video</strong><br />
  <a href="https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16">
    <img src="https://video.igem.org/lazy-static/thumbnails/a5170f77-bfc2-4ce8-a304-5b86a23cccc2.jpg" alt="Official cover of the CirCure project promotion video. Open the video on iGEM Video Universe." width="800" />
  </a>
  <br />
  <a href="https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16"><strong>▶ Watch the promotion video · 2 min 03 sec ↗</strong></a><br />
  <sub>iGEM Video Universe · Click the cover or link to watch</sub>
</p>

<details>
<summary><strong>Preview the Wiki</strong> · Hand-painted circRNA scene</summary>

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/">
    <img src="docs/media/wiki-circrna.jpg" alt="The official CirCure Wiki homepage showing its hand-painted conceptual illustration of circular RNA structure, stability, and sustained expression." width="960" />
  </a>
  <br />
  <sub>Official homepage · Conceptual illustration · Open the complete Wiki</sub>
</p>

</details>

## Design reference for future iGEM teams

**JLU-FBH / JLUFBH · CirCure · iGEM 2026 · First Bethune Hospital of Jilin University, China**. This repository also preserves the team's work on **iGEM Wiki visual design, science communication, and interactive storytelling**, including the reasons for revisions and the code behind them, for future teams to study, cite, and adapt.

**Open the [complete interactive Visual Design page ↗](https://2026.igem.wiki/jlu-fbh/visual-design), especially [Section 8: Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) and [Section 9: Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft).**

Section 8 connects the patient's perspective to the scientific story; Section 9 shares lessons in layered artwork, reading pauses, clear navigation, and reversible interactions. Try the demonstrations and expand **Technical details** for design rationale and implementation notes.

The [English methods guide](docs/visual-design-guide.en.md) and its [Chinese edition](docs/visual-design-guide.md) provide case summaries and source links for GitHub readers, search tools, and AI-assisted research. Use the original page to explore the complete interactions and expandable explanations.

**Also expand the [Design Folios: six studies and revisions ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) near the end of the page.** They preserve explorations left out of the final Wiki, earlier directions, and reasons for revision: image-led navigation, a pink thread and expanding emblem, three Human Practices timelines, and composition and RNA-ring transition comparisons. Five interactive demonstrations are preserved as HTML pages; try them within the folios or choose **Open in full window**. They offer design ideas and implementation references for future teams; the [guide's Design Folios section](docs/visual-design-guide.en.md#design-folios-earlier-directions-and-interactive-studies) lists the examples and source files.

[Jianyuan Li](https://2026.igem.wiki/jlu-fbh/roster) (GitHub: [@jianyuanliljy-hub](https://github.com/jianyuanliljy-hub)) was primarily responsible for the design and development of the CirCure homepage; the research, writing, and design of Visual Design Sections 8 and 9; and the related design studies and interactive implementations in Design Folios.

### All nine Visual Design sections

| Section | What to study |
| --- | --- |
| [1 · Brand Identity](https://2026.igem.wiki/jlu-fbh/visual-design#brand-identity) | Project logo, team crest, flag, and Lumi mascot connected to the research theme. |
| [2 · Cross-Module Palette Architecture](https://2026.igem.wiki/jlu-fbh/visual-design#color-system) | Five module palettes, heading hierarchy, and reading surfaces. |
| [3 · Interactive Aesthetics & Motion](https://2026.igem.wiki/jlu-fbh/visual-design#interactive-experience) | Mascot cursor, watercolor interfaces, molecular visualization, and animation. |
| [4 · Decoupled Web Engineering Architecture](https://2026.igem.wiki/jlu-fbh/visual-design#engineering-rigor) | Content, assets, interaction, and assembly layers; citations and media delivery. |
| [5 · Core Interfaces & Narrative Experience](https://2026.igem.wiki/jlu-fbh/visual-design#core-interfaces) | Loading screen and homepage narrative entry. |
| [6 · Wiki Subpage Illustration System](https://2026.igem.wiki/jlu-fbh/visual-design#subpage-illustrations) | Hand-painted page covers and a shared visual language across modules. |
| [7 · Educational Games & Hands-On Experience](https://2026.igem.wiki/jlu-fbh/visual-design#educational-games) | Science-communication games and virtual laboratory experiences. |
| [8 · Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) | Connect a patient's question to scientific explanation, participation, and reader control. |
| [9 · Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft) | Adaptable methods for layered artwork, reading rhythm, navigation, endings, and revision records. |

Research and reuse: [Methods and source map](docs/visual-design-guide.en.md) · [Design references](https://2026.igem.wiki/jlu-fbh/visual-design#design-references) · [Attribution, licensing, and suggested citation](docs/visual-design-guide.en.md#reuse-and-citation).

## Project links

**GitHub repository** · Development, design methods, and reusable source<br />[JLU-FBH / CirCure — xiangyupaiso/Official-wiki](https://github.com/xiangyupaiso/Official-wiki)

**Live Wiki** · Published site and project showcase<br />[https://2026.igem.wiki/jlu-fbh/](https://2026.igem.wiki/jlu-fbh/)

**Development preview** · Ongoing page, interaction, and design updates<br />[https://wiki.dayquay.com/jlu-fbh/](https://wiki.dayquay.com/jlu-fbh/)

**Project Promotion Video** · Hosted on the official iGEM video platform<br />[https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16)

**Official GitLab** · Official source and release history<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**Team dashboard · Team 6056** · Team administration, uploads, and deliverables<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

Development and Pull Requests take place in this GitHub repository. See the [deployment guide](docs/deployment.en.md) for the roles of GitHub, official GitLab, and website releases.

### Preview and published versions

According to the [official iGEM 2026 calendar](https://competition.igem.org/about/calendar), the official Wiki entered the **Wiki Freeze on October 21, 2026, at 15:00 UTC (23:00 Beijing time, UTC+8)**. Editing is closed during the freeze and will reopen at the Wiki Thaw after the Grand Jamboree.

[`2026.igem.wiki/jlu-fbh/`](https://2026.igem.wiki/jlu-fbh/) preserves the frozen competition version. Later additions, restored materials, and page improvements are kept in this GitHub repository and appear on the [development preview at `wiki.dayquay.com`](https://wiki.dayquay.com/jlu-fbh/) after deployment. The two sites deploy independently.

As of 2026-10-22, the GitHub development version retains these additions relative to official GitLab:

- **Visual Design**: eleven initial sketches, four image-corner comparisons, complete screenshots explaining the gap between Next page and the footer, and additional ribbon and historical design studies. The sketches, corner comparison, and spacing study were also checked on the live dayquay preview.
- **Bomb Cat**: online room creation and joining, the lobby, connection state, and PeerJS networking source, together with rebuilt runtime assets.
- **Sustainability**: restored Tracker summaries overwritten by the October 21 emergency rollback, distinguishing 66 participants, 38 source profiles, and 78 feedback records, with ten framework SDGs grouped into SET / DEVELOP / GROW. Long-term pathways retain their evidence limitations.
- **Assets and engineering resources**: buildable game and virtual laboratory source, local assets, provenance, and bilingual development documentation.

See the [version comparison](docs/deployment.en.md#preview-and-official-gitlab-content-differences) for source paths, the rollback timeline, and deployment boundaries.

## Start here

- Research iGEM Wiki design: [Visual Design methods guide](docs/visual-design-guide.en.md), with particular attention to Section 9
- Run the project: [Quick start](#quick-start)
- Develop, check, and build: [Development guide](docs/development.en.md)
- Find the right files: [Repository map](docs/repository-layout.en.md)
- Understand hosting environments: [Deployment guide](docs/deployment.en.md)
- Maintain images, manuscripts, CDN mappings, and upload batches: [Asset guide](docs/assets.en.md)
- Browse documentation: [Documentation index](docs/README.en.md)
- Prepare a contribution: [Contributing](CONTRIBUTING.en.md)

On this page: [Technology](#technology-and-core-dependencies) · [Architecture](#architecture-and-development-principles) · [Site map](#site-modules-and-pages) · [Features](#interaction-and-engineering-features) · [Repository structure](#repository-structure-and-build-boundaries) · [Editing guide](#common-editing-locations) · [Deployment](#continuous-integration-and-hosting) · [License](#license-and-attribution)

## Technology and core dependencies

The Wiki uses the technologies below. [package.json](package.json) declares dependencies and version ranges; lockfiles record installed versions. Standalone applications maintain their own dependencies.

| Area                         | Technology                                        | Version family                      | Purpose                                                                     |
| ---------------------------- | ------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| Build tooling                | Vite                                              | 7.3.x                               | Local development, hot module replacement, and multiple HTML build entries  |
| Frontend                     | React + TypeScript                                | 19.2.x / 5.9.x                      | Components, type checking, and page data interfaces                         |
| Routing                      | React Router                                      | 7.x                                 | Routes, navigation, redirects, and reading entry points                     |
| Animation                    | GSAP + @gsap/react                                | 3.15.x / 2.1.x                      | Intro strokes, scroll scenes, timelines, and component animation lifecycles |
| Molecular visualization      | Mol\* (Molstar)                                   | 5.13.x                              | WebGL molecular viewers with a separately compiled, on-demand runtime       |
| Data visualization           | Apache ECharts                                    | 6.1.x                               | Charts, legends, range highlighting, and tooltips                           |
| Wiki styling                 | CSS custom properties (design tokens) + Bootstrap | Bootstrap 5.3.x                     | Themes, grids, the shared reader, and page layout                           |
| Laboratory styling and icons | Tailwind CSS + Lucide                             | Tailwind 3.4.x; root Lucide 0.562.x | Laboratory interfaces, icons, and separate styling                          |
| Interaction primitives       | Radix UI                                          | Root Dialog / Tabs 1.x              | Dialogs, tabs, and other basic interactions                                 |
| Engineering checks           | ESLint + Prettier + Node test scripts             | See configuration and lockfiles     | Static analysis, formatting, and focused regression checks                  |

The Wiki, two standalone games, and virtual laboratory have separate build entries. See [build boundaries](#build-boundaries).

## Architecture and development principles

### Page layers: data, assets, interaction, and assembly

The [page architecture specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) separates four responsibilities:

| Layer            | Typical location                         | Responsibility                                                                                                 |
| ---------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Page content     | `src/data/[module]/[page]Page.ts`        | Describe text, sections, figures, and links with types such as `WikiPageContent`; keep JSX out of content data |
| Asset mapping    | `src/data/[module]/[page]Assets.ts`      | Connect local sources, images, attachments, and CDN URLs                                                       |
| Page interaction | `src/components/wiki/features/[module]/` | Implement charts, construct viewers, and specialized interactions through feature slots                        |
| Route assembly   | `src/contents/[page].tsx`                | Combine `WikiRoutePage`, page data, Hero artwork, and features in a small assembly layer                       |

New pages follow these four layers. Existing page data lives both at the root of `src/data/` and in module directories; follow imports to find the files for a page.

### Shared reader and maintenance entry points

Content pages reuse `WikiRoutePage` for blocks, images, citations, the outline, and chapter transitions. Shared reader dimensions and layout belong primarily in `src/styles/wiki-route-skin.css`. Module themes live in `route-palette-*.css`; specialized interactions and styles stay with their features.

Maintain page content and asset mappings separately to avoid duplicate sources of the same content. See [common editing locations](#common-editing-locations).

### Standalone applications and style isolation

The Wiki uses the shared reader, CSS themes, and Bootstrap. The virtual laboratory has its own Tailwind styles, dependencies, and build. A lazily loaded iframe embeds the official laboratory deployment, separating the two documents' styles and viewports.

The laboratory uses `window.postMessage` to request closing. The Wiki verifies both the message origin and the iframe window. The nine laboratory pages are split using `React.lazy` and dynamic `import()`; their code is built in the laboratory project.

### Shared image-readiness contract

Route changes use the shared loader. `WikiRoutePage` collects Hero and article images automatically. Declare images in dialogs or inactive tabs through `preloadImages` or `PageImagePreloads` so they are ready when the interaction opens.

New pages inherit the same behavior. See the [image-readiness contract](WIKI_ARCHITECTURE_SPEC.md#471-新页面接入) (Chinese). Run `yarn test:page-loading` after changes and inspect route transitions and interactions in the browser.

## Site modules and pages

Navigation consists of Home and five content groups, with 22 entries besides the homepage. This tree follows [src/pages.ts](src/pages.ts). Paths are relative to the website base `/jlu-fbh/`.

```text
CirCure Wiki
├── Home (/)                                      # Intro and scroll story
├── Team
│   ├── Roster (/roster)                           # Members, instructors, and advisors
│   ├── Attributions (/attributions)               # Contributions and support
│   └── Activities (/activities)                   # Activities and season records
├── Project
│   ├── Description (/description)                 # Background and design rationale
│   ├── Engineering (/engineering)                 # Design–Build–Test–Learn
│   ├── Results (/results)                         # Results and discussion
│   ├── Contribution (/contribution)               # Reusable resources and experience
│   ├── Visual Design (/visual-design)             # Identity, illustration, and interaction
│   ├── Notebook (/notebook)                       # Development and experiment records
│   └── Safety and Security (/safety-and-security)  # Safety and risk management
├── Wet Lab
│   ├── Design (/design)                           # Molecular constructs and experiments
│   ├── Experiments (/experiments)                 # Methods and protocols
│   ├── Measurement (/measurement)                 # Measurement and characterization
│   └── Alternative Platform (/alternative-platform)
├── Dry Lab
│   ├── Model (/model)                             # Models, assumptions, and computation
│   ├── Software (/software)                       # CircuForge and TorusFold
│   ├── Hardware (/hardware)                       # Instruments and hardware
│   └── Games (/games)                             # Interactive learning portal
│       ├── Virtual Laboratory                    # Nine molecular biology experiments
│       ├── Breast Guardian RPG                   # Breast-health narrative game
│       ├── Bomb Cat                              # circRNA strategy cards
│       └── Bio Memory Match                      # Biology memory matching
└── Engagement
    ├── Entrepreneurship (/entrepreneurship)       # Business case and adoption pathway
    ├── Human Practices (/human-practices)         # Stakeholder interviews and feedback
    ├── Education (/education)                    # Outreach, teaching, and exchange
    └── Sustainability (/sustainability)          # SDGs and impact assessment
```

`/team` redirects to `/roster`; `/attribution` is an alias for `/attributions`.

## Interaction and engineering features

### Opening sequence and scroll story

The homepage combines SVG strokes, Canvas particles, and GSAP timelines in the CirCure signature intro. The TNBC exploration map, antigen switcher, circRNA illustrations, and scene transitions guide readers from the problem to the design.

The implementation lives mainly in `src/components/home/`, homepage data in `src/data/`, and styles such as `src/styles/home-*.css`. Home has its own narrative layout; article routes use the shared reader and module themes.

### Hand-drawn Hero artwork and long-form reading

Pages use hand-drawn Hero artwork and an ink-wash watercolor visual style. When an illustration already includes its title, `hideHeroCopy` controls the visible text while retaining a semantic `h1` for assistive technologies.

The shared reader includes the marker-style `WikiLineSidebar`, section navigation, inline charts and citations, and the closing `WikiNextRecord` link. Deeper outline entries normally expand around the current reading position; some pages show the full outline.

Team, Project, Wet Lab, Dry Lab, and Engagement maintain their own palettes. Primary, soft, and base colors work alongside heading and marker tokens. See the [design and typography specification](文案集/Wiki-设计与排版规范.md) (Chinese).

### Virtual molecular biology laboratory

The [live laboratory](https://virtual-lab-208fd4.igem.wiki/) contains nine guided experiments, organized into Beginner, Intermediate, and Advanced levels. The Wiki retains the [complete laboratory source](virtual-lab/README.en.md) and embeds its official deployment. The [official software repository](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab) manages that application's deployment.

| Level        | Experiment                                               | Learning topics                                              |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| Beginner     | 1 · Revival and activation of E. coli DH5α               | Frozen stock, aseptic technique, streaking, and culture      |
| Beginner     | 2 · Colony morphology and Gram staining                  | Smears, fixation, staining, decolorization, and microscopy   |
| Beginner     | 3 · pET-28a miniprep and agarose gel electrophoresis     | Plasmid extraction, column purification, and electrophoresis |
| Beginner     | 4 · GFP fragment gel extraction                          | Gel cutting, dissolution, binding, washing, and purification |
| Intermediate | 5 · GFP PCR and product verification                     | Reaction setup, thermal cycling, and gel verification        |
| Intermediate | 6 · Double digestion of pET-28a and GFP                  | Restriction digestion of vector and insert                   |
| Intermediate | 7 · Recombinant plasmid ligation                         | Vector-to-insert ratios and T4 DNA ligase                    |
| Advanced     | 8 · Competent cells and transformation                   | Competent cells, heat shock, and plate culture               |
| Advanced     | 9 · Colony PCR, GFP fluorescence, and protein expression | Clone screening, fluorescence, and protein detection         |

Equipment includes pipettes, centrifuges, thermal cyclers, electrophoresis, and imaging tools. StepIndicator, hints, and InfoPanel provide procedural, equipment, and reagent information. Experiment pages offer restart controls and landscape prompts on small portrait screens. Course content and viewport interactions remain in the standalone project.

### Science communication games

The `/games` portal groups the laboratory and three games, loading each experience when selected:

- **Breast Guardian RPG** introduces breast-health concepts through characters and situations across life stages.
- **Bomb Cat** is a circRNA-themed strategy card game with local bots, online rooms, and a rulebook.
- **Bio Memory Match** introduces biological concepts through specimen-card observation, recall, and matching.

Buildable source for Breast Guardian and Bomb Cat lives in `games/`. Bio Memory runs from `public/game-assets/bio-memory/`. See [games/README.en.md](games/README.en.md) for source provenance, version comparisons, and build instructions.

### Molecular and data visualization

The Model page uses Mol\* to display the Trop2 complex, with rotation, zoom, segment focus, surface visibility, and polar-contact controls. The molecular runtime and PDB load when the reader approaches the figure.

ECharts and related components display model data with legends, range highlighting, and interactive tooltips, so readers can explore the figures alongside the model analysis.

### Navigation, cursor, and reading tools

Shared features include responsive navigation, in-page search, back-to-top controls, the footer, and a sheep cursor. The cursor is enabled according to fine-pointer, hover, and reduced-motion settings, while applicable input areas retain native cursor behavior.

Changes to shared components should cover transitions between Home and article pages, narrow viewports, keyboard use, and reduced-motion preferences.

### Asset sources and official hosting

Published pages use official images, fonts, and attachments on `static.igem.wiki`. The repository also retains local assets, manuscripts, and source mappings. Use the relevant asset dictionary and registry, and retain official hosting entries for videos and standalone applications.

Upload copies and historical check records live in `delivery/uploads/`. When updating assets, follow the [asset guide](docs/assets.en.md) to check source files, CDN URLs, and page references.

## Repository structure and build boundaries

### Directory entry points

```text
.
├── src/                              # Wiki source
│   ├── assets/                       # Home, navigation, illustrations, and figures
│   ├── components/
│   │   ├── home/                     # Intro and homepage story
│   │   ├── wiki/                     # Shared reader and feature components
│   │   ├── VirtualLaboratory/         # Laboratory iframe integration
│   │   ├── BreastGuardianGame/        # RPG integration
│   │   ├── BombCatGame/               # Card game integration
│   │   └── BioMemoryGame/             # Memory game integration
│   ├── containers/App/               # App host, routes, and shared components
│   ├── contents/                     # Route assembly
│   ├── data/                         # Content, citations, sections, and asset mappings
│   ├── hooks/                        # Shared hooks
│   ├── styles/                       # Themes, reader, and page styles
│   ├── utils/                        # Loading, paths, and other utilities
│   ├── main.tsx                      # Application entry
│   └── pages.ts                      # Page and navigation groups
├── public/                           # Static files published at their existing paths
│   ├── assets/                       # Images, documents, and other static resources
│   ├── game-assets/                  # Game runtime files used by the Wiki
│   └── vendor/                       # Retained third-party runtimes
├── games/                            # Two independently buildable game projects
├── virtual-lab/                      # Standalone laboratory
│   ├── src/                          # Equipment, steps, catalog, and experiment pages
│   ├── public/                       # Course players and related static files
│   └── package.json / package-lock.json
├── 文案集/                            # Manuscripts, original attachments, and design sources
├── scripts/                          # Build, checks, imports, and asset processing
│   └── manual/                       # Environment-specific manual checks
├── docs/                             # Guides, content references, and historical reviews
├── delivery/                         # Delivery archives
│   └── uploads/                      # Upload batches and manifests
├── WIKI_ARCHITECTURE_SPEC.md          # Page specification and image-readiness contract
├── IGEM_ASSET_REGISTRY.md             # Asset registry
├── .gitlab-ci.yml                    # Official GitLab Pages pipeline
├── wrangler.json                     # Cloudflare static asset configuration
├── eslint.config.js                  # ESLint configuration
├── package.json / yarn.lock          # Root scripts, dependencies, and Yarn lockfile
├── package-lock.json                 # Retained npm lockfile
├── tsconfig.json / tsconfig.node.json
└── vite.config.ts                    # HTML entries, molecular runtime, and base path
```

The root files `index.html`, `visual-design-study.html`, `archive-navigation-study.html`, and `archive-recognition-study.html` are the four HTML build entries for the Wiki and design demonstrations.

`.env` contains existing team metadata and build inputs; keep secrets out of it. `.dockerignore` filters local build contexts. See the [repository map](docs/repository-layout.en.md) for other root files and migration records.

### Build boundaries

| Application                | Development entry                                    | Root build behavior                                                                   |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Wiki                       | `src/`, `yarn dev`                                   | Type-check, build four HTML entries, and generate path mappings                       |
| Breast Guardian / Bomb Cat | [games/README.en.md](games/README.en.md)             | Publish checked-in files in `public/game-assets/`; game source is built separately    |
| Virtual Laboratory         | [virtual-lab/README.en.md](virtual-lab/README.en.md) | Embed the official laboratory deployment; build and release the laboratory separately |

Subprojects maintain their own dependencies, lockfiles, and licenses; their README files explain development and build steps. The laboratory deploys independently. After rebuilding a game, update its runtime files in the Wiki's `public/game-assets/`.

## Common editing locations

| Change                                  | Entry point                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| Routes and navigation targets           | `src/pages.ts`, `src/contents/`                                                    |
| Text, sections, and figure descriptions | The relevant module in `src/data/`                                                 |
| Image and attachment mappings           | The relevant `*Assets.ts`, `src/data/assets/`                                      |
| Page-specific interactions and charts   | `src/components/wiki/features/`                                                    |
| Home story and animation                | `src/components/home/`, homepage data, and related `home-*.css`                    |
| Shared reader and article layout        | `src/components/wiki/`, `src/styles/wiki-route-skin.css`                           |
| Module palettes and heading colors      | `src/styles/route-palette-*.css`                                                   |
| Shared loading and image readiness      | `src/utils/`; follow the [page specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) |
| Asset sources and upload records        | [Asset guide](docs/assets.en.md), [delivery index](delivery/README.en.md)          |
| Tool purpose, inputs, and write effects | [scripts/README.en.md](scripts/README.en.md)                                       |

Before running importers or asset generators, read their documented write scope; these tools update content or indexes. Consult the content owner before changing scientific manuscripts, experimental parameters, formulas, or evaluation metrics.

## Quick start

### Environment and dependencies

For the Wiki, use Node.js 22.12+ within the 22.x release family and Yarn Classic 1.22.22, matching the official CI's Node 22 major version. `package.json` declares the package manager.

From the repository root:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open the URL printed by the terminal, normally `http://localhost:5173/jlu-fbh/`.

The root npm lockfile is also retained. For npm, use `npm ci` and `npm run <script>`. Use one package manager per dependency directory and update its lockfile when upgrading dependencies.

### Check, build, and preview

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

The build runs TypeScript checking, Vite, and `scripts/postbuild-slug.mjs`. Output in `dist/` includes Wiki and design-study HTML entries. The Mol\* runtime is compiled separately.

`yarn format` rewrites all matching files; format only relevant files during routine work. See the [development guide](docs/development.en.md) and [script index](scripts/README.en.md) for focused content and browser checks.

### Standalone projects

```sh
# Start the laboratory in a separate terminal.
cd virtual-lab
npm ci
npm run dev
```

The laboratory's production output goes into its ignored `virtual-lab/dist/`. The root development server serves the Wiki. Install and build the two games inside `games/breast-guardian/` and `games/bomb-cat/`, following their README files.

## Continuous integration and hosting

### GitHub collaboration and official GitLab releases

Contributors develop on their own working or feature branches, discuss and review changes through Pull Requests, and integrate them into the shared `main` branch. Branch naming follows contributor or module-team conventions.

GitHub supports everyday collaboration and code review. Official GitLab supports iGEM source delivery and Wiki releases. The release maintainer synchronizes reviewed versions to official GitLab according to the team's release plan, where the pipeline builds and publishes the site.

The current [.gitlab-ci.yml](.gitlab-ci.yml) runs on GitLab's default branch:

```text
Node 22
  → yarn install --frozen-lockfile
  → yarn lint
  → yarn test:page-loading
  → yarn build
  → copy dist/. into the CI public/ directory, generate SPA fallback, and publish
```

The pipeline copies build output into the deployment directory within the CI workspace. See the [deployment guide](docs/deployment.en.md) for the release process and source checks.

### Yarn Classic and installation consistency

`package.json` declares `yarn@1.22.22`; the official pipeline installs from the lockfile with `--frozen-lockfile`. Install dependencies separately in the Wiki and each subproject directory.

### One output tree and path mapping

`scripts/postbuild-slug.mjs` reads Vite's resolved base and generates Cloudflare `_redirects` inside a single `dist/` output tree. Core rules for the default team path are:

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

Additional rules canonicalize HTML and directory entries. Vite preview and official GitLab Pages mount output at the base path. [wrangler.json](wrangler.json) points Cloudflare at `./dist` with SPA fallback. An extra `dist/jlu-fbh/` copy is unnecessary.

When needed, the script generates `.assetsignore` so Cloudflare uploads skip files above 25 MiB. Use the corresponding CDN URLs when pages reference those resources.

GitHub Pages does not read Cloudflare's `_redirects`. Configure its mount path and deep-route fallback separately if using that host.

### TypeScript asset indexes and configuration

Asset dictionaries such as `contributionAssets.ts`, `resultsAssets.ts`, and `designAssets.ts` maintain page-to-resource references. Run TypeScript and build checks after changes to check index keys and resource paths.

`wrangler.json` configures Cloudflare; `.gitlab-ci.yml` controls official Wiki builds; `.dockerignore` filters Docker contexts. Maintain each configuration for its environment.

## Team and acknowledgements

We thank the university, clinical institutions, research platforms, and supporters who helped the team. See the Wiki's [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) page for individual contributions and forms of support.

<p align="center">
  <img src="docs/media/readme-institutions.svg" alt="Jilin University; The First Bethune Hospital of Jilin University; The First Bethune Clinical Medical College of Jilin University." width="640" />
</p>

<p align="center">
  <strong>Jilin University</strong><br />
  The First Bethune Hospital of Jilin University<br />
  The First Bethune Clinical Medical College of Jilin University
</p>

### Research platforms, tools, and other support

<p align="center">
  <img src="docs/media/readme-acknowledgements.svg" alt="Acknowledgements from the Wiki footer: Core Facility, Institute of Translational Medicine, Laboratory Animal Center, Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger." width="640" />
</p>

- **Clinical and teaching units**: Department of Teaching, The First Bethune Clinical Medical College of Jilin University; Cancer Center, The First Bethune Hospital of Jilin University.
- **Research platforms**: Core Facility, Institute of Translational Medicine, and Laboratory Animal Center at the First Hospital of Jilin University.
- **Tools and other supporters**: Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger.
- **Competition and community**: iGEM.

## License and attribution

The root repository uses [CC BY 4.0](LICENSE). Retain the required attribution and license terms when using, sharing, or modifying the work. Third-party assets, dependencies, and standalone applications retain their own licensing requirements.

Preserve the shared footer's license notice and official GitLab repository link. AI-assisted work also follows [Contributing](CONTRIBUTING.en.md) and the [responsible-use guidance](.claude/RESPONSIBLE_AI_USE.en.md).

<p align="center"><a href="#readme-en">↑ Back to English</a> · <a href="#readme-zh">阅读中文版</a></p>
