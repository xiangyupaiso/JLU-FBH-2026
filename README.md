<p align="center">
  <a href="README.md" title="阅读中文版 · Read in Chinese">
    <img src="docs/media/readme-language-zh.svg" alt="简体中文 · Read in Chinese" width="128" height="44" />
  </a>
  &nbsp;
  <a href="README.en.md" title="Read the full README in English">
    <img src="docs/media/readme-language-en.svg" alt="English · Read in English" width="128" height="44" />
  </a>
  <br />
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

我们在 CirCure 的设计过程中保留了草图、交互原型、修改理由和对应源码。希望这些记录能给正在制作 Wiki 的团队一些帮助：既能看到最终页面，也能知道我们尝试过什么、为什么修改，以及具体如何实现。

从 [Visual Design 交互页面 ↗](https://2026.igem.wiki/jlu-fbh/visual-design)开始：[第 8 节：人文关怀与叙事设计](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)介绍患者视角如何融入科学叙事，[第 9 节：Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)讲解绘稿、动效、排版与导航的实现。操作演示后，展开 **Technical details** 即可查看设计理由和技术细节。

[方法指南](docs/visual-design-guide.md)整理了案例摘要和源码路径，便于在 GitHub 中对照阅读。

页尾的 [Design Folios：六组设计研究与迭代 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)保留了早期方案与修改记录，包括图像导航、粉色丝带与标志展开、三种 Human Practices 时间线，以及构图和 RNA 环转场的比较。五个 HTML 交互演示可直接操作，也可点击 **Open in full window** 单独打开。[作品集源码索引](docs/visual-design-guide.md#design-folios设计作品集与历史方案)列出了各案例的文件位置。

### 第 9 节：从绘稿到页面实现

这一节按制作过程整理设计做法：拆分绘稿图层、安排动画停留、组织正文版面，再处理导航、收尾和交互检查。

| 小节 | 可借鉴的做法 |
| --- | --- |
| [9.1 绘稿与开场](https://2026.igem.wiki/jlu-fbh/visual-design#artwork-and-opening) | 按运动方式拆分图层，使用统一坐标；资源加载后，衔接标题动画与首个场景。 |
| [9.2 动效与阅读节奏](https://2026.igem.wiki/jlu-fbh/visual-design#keyframes-and-reading-holds) | 先安排可完整阅读的静止状态，再连接转场；保留 RNA 环轮廓，并提供暂停、选章与反向浏览。 |
| [9.3 持续阅读的版面](https://2026.igem.wiki/jlu-fbh/visual-design#reading-surfaces) | 降低正文背景的色彩强度，用字体层级、图片边缘和留白组织长文。 |
| [9.4 清楚的阅读路径](https://2026.igem.wiki/jlu-fbh/visual-design#navigation-with-a-landmark) | 用队徽标识导航入口，区分当前页与悬停状态；提供目录、搜索、引用回链和下一页链接。 |
| [9.5 团队照片与来信](https://2026.igem.wiki/jlu-fbh/visual-design#photo-reveal-craft) | 在结尾逐步展示团队照片，提供可打开的信件；支持动画回退，并在关闭信件后恢复键盘焦点与阅读位置。 |
| [9.6 迭代与记录](https://2026.igem.wiki/jlu-fbh/visual-design#design-record) | 保存草图、前后对比、修改理由与源码；检查反向滚动、快速反转、窗口尺寸变化，以及减少动态效果设置下的表现。 |

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

- **Visual Design**：11 张初始草稿、四种图片圆角对比、Next page 与页脚之间的留白说明及完整截图，以及补充的丝带与历史设计展示。
- **Bomb Cat**：创建与加入在线房间、大厅、连接状态及 PeerJS 联机源码；源码与重建产物均保留在 GitHub。
- **Sustainability**：恢复 10 月 21 日晚紧急回退覆盖的 Tracker 汇总，分别呈现 66 位参与者、38 份来源档案和 78 条反馈，并按 SET / DEVELOP / GROW 展示 10 项框架 SDG。
- **素材与工程资料**：保留可构建的游戏与虚拟实验室源码、本地素材、来源记录及双语开发文档。

具体文件、回退时间线和部署情况见[版本差异说明](docs/deployment.md#预览版与官方-gitlab-的内容差异)。

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
