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
    <img src="docs/media/readme-visit-wiki-zh.svg" alt="浏览完整 Wiki ↗" width="248" height="52" />
  </a>
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

这是 **JLU-FBH** 团队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki 仓库，包含网站前端、页面内容、设计素材，以及游戏和虚拟实验室源码。

**CirCure** 研究基于工程化环状 RNA（circRNA）的多靶向三阴性乳腺癌（TNBC）疫苗平台。Wiki 通过研究文章、手绘插画、滚动叙事、模型可视化和科普游戏，介绍项目的[设计思路](https://2026.igem.wiki/jlu-fbh/description)、[实验过程](https://2026.igem.wiki/jlu-fbh/experiments)与[研究结果](https://2026.igem.wiki/jlu-fbh/results)。

我们希望读者在了解分子机制与实验设计的同时，也能看到研究背后患者对复发的担忧，以及她们对生活的期待。因此，我们从患者的疑问讲起，在科学解释中加入可以停下来阅读、比较和探索的交互，让读者按自己的节奏了解 CirCure。

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot" title="认识 Lumi，CirCure 的小羊吉祥物">
    <img src="docs/media/readme-lumi.png" alt="小羊 Lumi 戴着粉色花朵，胸前系着粉红丝带，在环状 RNA 图案中微笑比耶。" width="140" height="140" />
  </a>
  <br />
  <strong>你好，我是 Lumi！</strong><br />
  <sub>陪你读懂 CirCure 的小羊伙伴 · <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">认识我们的吉祥物 ↗</a></sub>
</p>

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

我们为 CirCure 设计了首页与整站页面框架，将项目的临床动机、科学原理和视觉形象串联起来。原创水彩插画经过分层准备，与分子解释动画、场景转场、章节导航和交互组件共同构成阅读体验。我们也保留了草图、交互原型与历次修改，记录画稿和界面如何随着项目逐步成形。

在实现与迭代中，我们反复检查每个场景要讲清什么、读者如何跟随故事：让 RNA 环在转场中保持可辨认的轮廓，为完整句子留出阅读时间，调整不同屏幕上的插画取景，并让导航名称更容易浏览。这里整理了尝试过的方案、修改理由和对应源码，分享这些设计中的选择与取舍，希望后续 iGEM 团队能把具体做法与背后的思考对照起来，结合自己的项目复用、调整并继续改进。

**建议打开 [Visual Design 完整交互页面 ↗](https://2026.igem.wiki/jlu-fbh/visual-design)，重点阅读[第 8 节：人文关怀与叙事设计](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)和[第 9 节：Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)。**

第 8 节从患者视角组织科学叙事；第 9 节分享分层绘稿、阅读停留、清晰导航与可逆交互的设计经验。建议边体验演示，边展开 **Technical details** 查看设计理由与实现说明。

[中英文方法指南](docs/visual-design-guide.md)提供案例摘要与源码入口，便于在 GitHub 内查阅，以及供搜索和 AI 调研工具读取；完整的交互与展开说明请结合原网页学习。

**也请展开页尾的 [Design Folios：六组设计研究与迭代 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)。** 这里保留了未在最终 Wiki 中采用的探索、历史方案与修改理由，包括图像导航、粉色丝带与标志展开、三种 Human Practices 时间线，以及构图和 RNA 环转场的比较。其中五个交互演示保留为 HTML 页面，可在作品集中操作，也可通过 **Open in full window** 单独体验。它们为后续团队提供设计思路与实现参考；[方法指南中的作品集入口](docs/visual-design-guide.md#design-folios设计作品集与历史方案)列出了具体案例和源码。

成员介绍：[Roster · Visual Design 分组 ↗](https://wiki.dayquay.com/jlu-fbh/roster#visual-design)。点击下方姓名可直接展开对应成员的详细介绍。

以下职责说明结合[官方 Attributions 贡献表](https://teams.igem.org/wiki/6056/attributions#team-member-contributions)与项目分工整理。

- [Yupeng Xu](https://wiki.dayquay.com/jlu-fbh/roster#yupeng-xu)（GitHub：[@xiangyupaiso](https://github.com/xiangyupaiso)）担任 Wiki Lead（Wiki 负责人），统筹 CirCure Wiki 的开发与数字设计，安排阶段目标、开发进度及跨组协作，搭建模块化前端框架并协调网站架构与阅读体验。参与科普游戏、虚拟实验和交互式数据展示的开发，将项目内容整理为便于探索的页面与工具；编写技术文档，核对内容质量、代码及数字素材的规范与开源许可要求，并为队友整理多智能体协作流程、技能与工具。
- [Jianyuan Li](https://wiki.dayquay.com/jlu-fbh/roster#jianyuan-li)（GitHub：[@jianyuanliljy-hub](https://github.com/jianyuanliljy-hub)）主要负责 CirCure 首页的设计与开发、Visual Design 第 8、9 节的调研、撰写与设计，以及 Design Folios 中相关的设计研究与交互实现。结合 iGEM 官方指南、历届 Wiki 和 2026 发布流程，参与信息架构、页面层级与叙事组织，完善页面实现、素材整合和图文排版；审阅草稿中的事实表述、术语、逻辑、格式与英文表达，并整理草图、交互原型及修改记录，供后续团队对照源码理解设计过程。
- [Jingchen He](https://wiki.dayquay.com/jlu-fbh/roster#jingchen-he)（GitHub：[@HE-JINGCHEN](https://github.com/HE-JINGCHEN)）主要负责虚拟实验室的构建，将九个分子生物学实验整理为可交互的学习页面，完善实验侧栏、操作入口与媒体展示；参与中文切换、图片迁移和源码压缩，在保留原有交互的基础上维护资源引用与页面呈现。同时参与 Wiki 页面的创建与结构组织，整合队友提供的文字、图片和项目结果，根据内容与设计反馈调整布局、排查显示和技术问题，使实验学习流程与项目资料的呈现更加连贯清楚。

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

根据 [iGEM 2026 官方日历](https://competition.igem.org/about/calendar)，官方 Wiki 于 <strong>2026 年 10 月 21 日 15:00 UTC（北京时间 23:00，UTC+8）</strong>进入冻结期（Wiki Freeze）。冻结期间无法继续编辑，需等待赛事结束后的 Wiki Thaw 重新开放修改。

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

本页：[技术栈](#技术栈) · [代码组织](#页面代码怎么组织) · [页面导航](#页面与导航) · [交互体验](#交互与阅读体验) · [目录与构建](#仓库目录与构建) · [修改位置](#常见修改位置) · [快速启动](#快速启动) · [部署](#协作与部署) · [致谢](#团队与致谢) · [许可](#许可与署名)

<a id="技术栈与核心依赖"></a>

## 技术栈

主站用 React 和 TypeScript 开发，通过 Vite 构建。动画、分子结构和图表分别使用 GSAP、Mol\* 和 ECharts。

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| React / TypeScript | 19.2.x / 5.9.x | 页面组件与类型检查 |
| Vite | 7.3.x | 开发服务器与多 HTML 入口构建 |
| React Router | 7.x | 路由、导航与重定向 |
| GSAP / @gsap/react | 3.15.x / 2.1.x | 开场动画、滚动场景与时间轴 |
| Mol\*（Molstar） | 5.13.x | 按需加载的 WebGL 分子查看器 |
| Apache ECharts | 6.1.x | 模型图表与交互提示 |
| CSS 自定义属性 / Bootstrap | Bootstrap 5.3.x | 主站配色、栅格与阅读版式 |
| Tailwind CSS / Lucide | 3.4.x / 主站 Lucide 0.562.x | 实验室样式与界面图标 |
| Radix UI | Dialog / Tabs 1.x | 对话框与标签页 |
| ESLint / Prettier / Node 测试脚本 | 见配置与锁文件 | 代码检查、格式化与回归测试 |

具体依赖见 [package.json](package.json)，安装版本由锁文件确定。游戏和虚拟实验室各自管理依赖与构建，见[构建说明](#三类应用的构建边界)。

<a id="架构设计与开发原则"></a>

## 页面代码怎么组织

<a id="页面分层数据资产交互与装配"></a>

### 正文、图片和交互分别维护

一篇正文页通常涉及以下四个位置：

| 内容 | 常见位置 | 放什么 |
| --- | --- | --- |
| 正文数据 | `src/data/[module]/[page]Page.ts` | 文字、章节、图表说明和链接，使用 `WikiPageContent` 等类型描述 |
| 素材映射 | `src/data/[module]/[page]Assets.ts` | 本地源文件、图片、附件与 CDN 地址的对应关系 |
| 页面交互 | `src/components/wiki/features/[module]/` | 图表、构建体查看器等交互组件，通过 feature 插槽接入 |
| 页面装配 | `src/contents/[page].tsx` | 将正文数据、题图和交互组件交给 `WikiRoutePage` |

新增页面按[页面规范](WIKI_ARCHITECTURE_SPEC.md)组织，正文数据中避免混入 JSX。现有数据文件有的位于 `src/data/` 根目录，有的位于模块子目录；从页面装配文件的 `import` 往下找即可。

<a id="共享阅读器与单一维护入口"></a>

### 正文页共用阅读器

`WikiRoutePage` 负责正文、图片、文献、目录和章节衔接。调整共享版式时改 `src/styles/wiki-route-skin.css`，调整模块配色时改 `route-palette-*.css`。仅用于某一页的交互和样式放在对应 feature 中。

正文和素材映射各保留一处维护来源，避免在组件中再存一份相同内容。

<a id="共享图片准备契约"></a>

### 页面切换时准备图片

共享加载器会自动收集 `WikiRoutePage` 的题图和正文图片。弹窗、未激活标签页中的图片需要通过 `preloadImages` 或 `PageImagePreloads` 声明，减少打开后等待图片的情况。

接入方式见[图片准备规则](WIKI_ARCHITECTURE_SPEC.md#471-新页面接入)。修改后运行 `yarn test:page-loading`，并在浏览器里检查页面切换和相关交互。

<a id="独立应用与样式隔离"></a>

### 实验室独立运行

虚拟实验室有自己的 Tailwind 样式、依赖和构建，主站通过延迟加载的 iframe 嵌入其官方部署。两个文档的样式与视口相互隔离。

实验室通过 `window.postMessage` 请求关闭，主站检查消息来源域名和 iframe 窗口。九个实验页面在子项目中用 `React.lazy` 和动态 `import()` 分包。

<a id="全站模块与页面体系"></a>

## 页面与导航

[首页 ↗](https://2026.igem.wiki/jlu-fbh/)之外，五个内容板块共有 22 个页面入口。点击下表中的页面名称即可前往官网。导航配置在 [src/pages.ts](src/pages.ts)。

| 板块 | 页面 |
| --- | --- |
| Team | [Roster](https://2026.igem.wiki/jlu-fbh/roster)、[Attributions](https://2026.igem.wiki/jlu-fbh/attributions)、[Activities](https://2026.igem.wiki/jlu-fbh/activities) |
| Project | [Description](https://2026.igem.wiki/jlu-fbh/description)、[Engineering](https://2026.igem.wiki/jlu-fbh/engineering)、[Results](https://2026.igem.wiki/jlu-fbh/results)、[Contribution](https://2026.igem.wiki/jlu-fbh/contribution)、[Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design)、[Notebook](https://2026.igem.wiki/jlu-fbh/notebook)、[Safety and Security](https://2026.igem.wiki/jlu-fbh/safety-and-security) |
| Wet Lab | [Design](https://2026.igem.wiki/jlu-fbh/design)、[Experiments](https://2026.igem.wiki/jlu-fbh/experiments)、[Measurement](https://2026.igem.wiki/jlu-fbh/measurement)、[Alternative Platform](https://2026.igem.wiki/jlu-fbh/alternative-platform) |
| Dry Lab | [Model](https://2026.igem.wiki/jlu-fbh/model)、[Software](https://2026.igem.wiki/jlu-fbh/software)、[Hardware](https://2026.igem.wiki/jlu-fbh/hardware)、[Games](https://2026.igem.wiki/jlu-fbh/games) |
| Engagement | [Entrepreneurship](https://2026.igem.wiki/jlu-fbh/entrepreneurship)、[Human Practices](https://2026.igem.wiki/jlu-fbh/human-practices)、[Education](https://2026.igem.wiki/jlu-fbh/education)、[Sustainability](https://2026.igem.wiki/jlu-fbh/sustainability) |

[Games 页面](https://2026.igem.wiki/jlu-fbh/games)汇集[虚拟实验室](https://2026.igem.wiki/jlu-fbh/games#game-virtual-lab)、[Breast Guardian RPG](https://2026.igem.wiki/jlu-fbh/games#game-breast-guardian)、[Bomb Cat](https://2026.igem.wiki/jlu-fbh/games#game-bomb-cat) 和 [Bio Memory Match](https://2026.igem.wiki/jlu-fbh/games#game-bio-memory)。

<details>
<summary>查看完整页面路径与内容说明</summary>

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

</details>

路径均相对于 `/jlu-fbh/`。`/team` 重定向到 `/roster`，`/attribution` 重定向到 `/attributions`。

<a id="核心交互与工程特色"></a>

## 交互与阅读体验

<a id="开场序章与滚动叙事home-intro--scroll-story"></a>

### 首页：从问题背景读到设计思路

[首页](https://2026.igem.wiki/jlu-fbh/)以 CirCure 签名动画开场，再通过 TNBC 探索地图、抗原切换器和 circRNA 图解展开故事。SVG 笔画、Canvas 粒子和 GSAP 时间轴负责开场与场景过渡。

相关代码在 `src/components/home/`，数据在 `src/data/`，样式主要在 `src/styles/home-*.css`。首页使用独立布局，正文页使用共享阅读器。

<a id="手绘题图与长文阅读hero--manuscript-reader"></a>

### 正文：手绘题图、目录与下一章

手绘题图延续水墨淡彩风格，五个内容板块分别使用自己的配色。题图已经包含标题时，可用 `hideHeroCopy` 隐藏重复文字，同时保留供辅助技术读取的语义化 `h1`。

正文配有马克笔风格的 `WikiLineSidebar` 目录、章节定位、图表和文献，结尾由 `WikiNextRecord` 连接下一章。目录通常随阅读位置展开深层标题，部分页面展示完整大纲。可在[项目介绍页](https://2026.igem.wiki/jlu-fbh/description)体验，配色与排版细节见[设计与排版规范](文案集/Wiki-设计与排版规范.md)。

<a id="虚拟分子生物学实验室virtual-laboratory"></a>

### 虚拟实验室：九个引导式实验

[在线实验室](https://virtual-lab-208fd4.igem.wiki/)按 Beginner、Intermediate、Advanced 三档组织课程，从菌株复苏、染色和质粒提取，逐步进入 PCR、酶切、连接、转化与表达检测。

<details>
<summary>查看九个实验及学习内容</summary>

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

</details>

界面提供移液器、离心机、PCR 仪和电泳成像等器材，配有步骤指示、操作提示、原理及试剂说明。实验可以重启，小屏竖屏时会提示横屏使用。

完整源码和开发方式见 [virtual-lab/README.md](virtual-lab/README.md)，独立部署由[官方软件仓库](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab)管理。

<a id="交互科普小游戏sci-comm-games"></a>

### 科普游戏

在 [Games 页面](https://2026.igem.wiki/jlu-fbh/games)中选择游戏后加载对应内容：

- **[Breast Guardian RPG](https://2026.igem.wiki/jlu-fbh/games#game-breast-guardian)**：通过不同生命阶段的角色与情境介绍乳腺健康知识。
- **[Bomb Cat](https://2026.igem.wiki/jlu-fbh/games#game-bomb-cat)**：以 circRNA 为主题的策略卡牌，支持本地机器人、在线房间，并提供规则说明。
- **[Bio Memory Match](https://2026.igem.wiki/jlu-fbh/games#game-bio-memory)**：观察、记忆并配对标本卡片，认识生物学概念。

前两款游戏的可构建源码在 `games/`；Bio Memory 的运行文件在 `public/game-assets/bio-memory/`。来源记录和构建方式见 [games/README.md](games/README.md)。

<a id="分子与数据可视化molecular--data-visualization"></a>

### 分子结构与模型图表

[Model 页面](https://2026.igem.wiki/jlu-fbh/model)用 Mol\* 展示 [Trop2 复合体](https://2026.igem.wiki/jlu-fbh/model#model-structural-confirmation)，可旋转、缩放、聚焦片段，也可切换表面和极性接触显示。分子运行时和 PDB 文件在读者接近图示时加载。

模型数据通过 ECharts 等组件展示，读者可操作图例、查看区间高亮和提示信息，对照正文阅读分析。

<a id="共享导航光标与页面辅助"></a>

### 导航与阅读辅助

响应式导航、页面内搜索、返回顶部和页脚供全站使用。绵羊光标会根据精细指针、悬停能力和减少动态效果（reduced motion）设置启用，并在适用的输入区域保留原生光标。

修改共享组件时，要检查首页与正文页之间的切换，以及窄屏、键盘操作和减少动态效果设置下的表现。

<a id="素材来源与官方托管"></a>

### 图片、字体与附件

正式页面的图片、字体和附件使用 `static.igem.wiki` 地址，视频和独立应用接入各自的官方托管平台。仓库保留本地素材、原稿与 CDN 映射，上传副本和历史核验记录保存在 `delivery/uploads/`。

替换素材时，按[素材维护](docs/assets.md)核对源文件、CDN 地址和页面引用。

<a id="仓库目录与构建边界"></a>

## 仓库目录与构建

主站代码在 `src/`，独立应用在 `games/` 和 `virtual-lab/`；`文案集/` 保存原稿，`delivery/` 保存交付记录。查找具体文件可直接看[常见修改位置](#常见修改位置)或[仓库地图](docs/repository-layout.md)。

<a id="目录入口"></a>

<details>
<summary>展开仓库目录</summary>

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

</details>

根目录有四个 HTML 构建入口：`index.html` 用于主站，`visual-design-study.html`、`archive-navigation-study.html` 和 `archive-recognition-study.html` 用于设计研究演示。

现有 `.env` 保存队伍元数据等构建输入，不应写入密钥。`.dockerignore` 排除 Docker 构建上下文中的无关文件。

### 三类应用的构建边界

| 应用 | 开发说明 | 根目录 `yarn build` 会做什么 |
| --- | --- | --- |
| Wiki 主站 | [开发指南](docs/development.md) | 检查类型、构建四个 HTML 入口并生成路径映射 |
| Breast Guardian / Bomb Cat | [游戏说明](games/README.md) | 复制 `public/game-assets/` 中已提交的运行文件；游戏源码需另行构建 |
| Virtual Laboratory | [实验室说明](virtual-lab/README.md) | 构建主站中的 iframe 接入；实验室需独立构建、发布 |

各子项目有自己的依赖、锁文件和许可证。游戏重建后，需将运行文件更新到主站的 `public/game-assets/`；实验室通过独立站点发布。

## 常见修改位置

| 想改什么 | 去哪里找 |
| --- | --- |
| 路由、导航目标 | `src/pages.ts`、`src/contents/` |
| 正文、章节、图表说明 | `src/data/` 中对应页面的数据文件 |
| 图片与附件地址 | 对应的 `*Assets.ts`、`src/data/assets/` |
| 页面交互、图表 | `src/components/wiki/features/` |
| 首页叙事、动画 | `src/components/home/`、首页数据与 `home-*.css` |
| 正文阅读版式 | `src/components/wiki/`、`src/styles/wiki-route-skin.css` |
| 模块配色 | `src/styles/route-palette-*.css` |
| 页面加载与图片准备 | `src/utils/`，同时查阅[页面规范](WIKI_ARCHITECTURE_SPEC.md) |
| 素材来源、上传记录 | [素材维护](docs/assets.md)、[交付索引](delivery/README.md) |
| 脚本用途与写入范围 | [脚本索引](scripts/README.md) |

导入器和素材生成器可能覆写正文或索引，运行前先看脚本说明。科研原稿、实验参数、公式与评价指标的改动需由内容负责人确认。

## 快速启动

<a id="环境与依赖"></a>

### 启动主站

建议使用 Node.js 22.12+（22.x）和 Yarn Classic 1.22.22，与官方 CI 的 Node 主版本保持一致。在仓库根目录运行：

```sh
yarn install --frozen-lockfile
yarn dev
```

打开终端给出的地址，默认是 `http://localhost:5173/jlu-fbh/`。

根目录也保留 npm 锁文件：使用 npm 时执行 `npm ci`，再用 `npm run <名称>` 运行脚本。同一依赖目录固定使用一种包管理器，依赖变更时同步维护对应锁文件。

<a id="检查构建与预览"></a>

### 检查与构建

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

`build` 依次运行 TypeScript 检查、Vite 构建和 `scripts/postbuild-slug.mjs`，输出到 `dist/`。产物包含主站与设计研究页面，Mol\* 运行时单独编译。`preview` 查看这份构建产物，修改源码后需要重新构建。

日常只格式化本次修改的文件；`yarn format` 会批量改写匹配文件。专项检查见[开发指南](docs/development.md)和[脚本索引](scripts/README.md)。

<a id="开发独立子项目"></a>

### 启动实验室或游戏

在独立终端中启动实验室：

```sh
cd virtual-lab
npm ci
npm run dev
```

实验室的 `npm run build` 输出到自身的 `virtual-lab/dist/`，该目录已被 Git 忽略。主站开发服务器只负责 Wiki。

游戏分别在 `games/breast-guardian/` 和 `games/bomb-cat/` 中安装与构建，按各自 README 操作。

<a id="持续集成与多环境适配"></a>

## 协作与部署

<a id="github-协作与官方-gitlab-发布"></a>

### 从 GitHub 协作到 GitLab 发布

日常开发在 GitHub 进行：协作者使用各自的工作分支，通过 Pull Request 评审后合入 `main`。分支命名沿用团队约定。发布负责人再按计划将审核通过的版本同步到官方 GitLab，由流水线构建和发布 Wiki。

[.gitlab-ci.yml](.gitlab-ci.yml) 只在 GitLab 默认分支运行：

```text
Node 22
  → yarn install --frozen-lockfile
  → yarn lint
  → yarn test:page-loading
  → yarn build
  → 在 CI 工作目录中将 dist/. 复制到 public/，生成 SPA 回退并发布
```

<a id="yarn-classic-与安装一致性"></a>

主站通过 `package.json` 固定 Yarn 1.22.22，CI 按锁文件安装依赖。子项目在各自目录中安装。发布步骤和各环境的区别见[部署说明](docs/deployment.md)。

<a id="单份产物与路径映射"></a>

### 部署路径与静态文件

`scripts/postbuild-slug.mjs` 根据 Vite 的 base 配置，在 `dist/` 中生成 Cloudflare 的 `_redirects`。默认队伍路径使用以下规则，并补充 HTML 和目录入口的规范地址：

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

Vite preview 和官方 GitLab Pages 按 base 挂载产物；Cloudflare 由 [wrangler.json](wrangler.json) 指向 `./dist` 并使用单页应用（SPA）回退。无需额外复制 `dist/jlu-fbh/`。

脚本会按需生成 `.assetsignore`，让 Cloudflare 上传时跳过超过 25 MiB 的文件，这些资源应使用对应 CDN 地址。GitHub Pages 需要单独配置挂载路径和深层路由回退，它不读取 Cloudflare 的 `_redirects`。

<a id="typescript-资产索引与配置维护"></a>

修改 `contributionAssets.ts`、`resultsAssets.ts`、`designAssets.ts` 等素材字典后，运行类型检查与构建，核对索引键和资源路径。

## 团队与致谢

感谢学校、临床机构、科研平台及各支持方对团队工作的帮助。具体工作归属与支持方式见官网的 [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) 页面。

### Visual Design 团队

感谢六位成员为 CirCure 的视觉设计与 Wiki 建设付出的工作。以下结合[官方 Attributions 团队贡献表](https://teams.igem.org/wiki/6056/attributions#team-member-contributions)、[Roster](https://2026.igem.wiki/jlu-fbh/roster)及本仓库已有的页面分工整理：

- **[Shuyi Wang](https://wiki.dayquay.com/jlu-fbh/roster#shuyi-wang) · Art Lead（美术负责人）**：设计吉祥物、周边与队服，制定 Wiki 配色、版式和动效，并完善科学示意图与流程图。协调美术组分工，与湿实验成员沟通修改图稿，保持网站与宣传材料的视觉风格一致。
- **[Yupeng Xu](https://wiki.dayquay.com/jlu-fbh/roster#yupeng-xu) · Wiki Lead（Wiki 负责人）**：统筹 Wiki 开发进度与跨组协作，搭建模块化前端框架，负责网站架构与阅读体验。参与教育游戏、虚拟实验和交互式数据展示的开发，编写技术文档，并检查内容质量、代码与数字素材的合规要求。
- **[Jianyuan Li](https://wiki.dayquay.com/jlu-fbh/roster#jianyuan-li) · 团队成员**：主要负责首页设计与开发，以及 Visual Design 第 8、9 节的调研、撰写与设计。参与信息架构、页面实现、素材整合与版式调整，检查术语、逻辑和英文表达，并整理草图、迭代记录与设计经验。
- **[Muzi Li](https://wiki.dayquay.com/jlu-fbh/roster#muzi-li) · 团队成员**：参与项目视觉概念与角色设计，绘制队徽、吉祥物、Wiki 插画、科学示意图、首页元素和图标。制作面向公众的医学与科学传播材料，并调整各板块的构图与风格，帮助读者理解项目及相关生物学概念。
- **[Zhixia Ye](https://wiki.dayquay.com/jlu-fbh/roster#zhixia-ye) · 团队成员**：绘制 Wiki 加载页与首页的原创画稿，并为网站界面制作定制图形素材。参与项目封面及其他插画创作，将图像融入页面设计，形成首页与加载界面相互呼应的视觉效果，支持网站整体风格的统一。
- **[Jingchen He](https://wiki.dayquay.com/jlu-fbh/roster#jingchen-he) · 团队成员**：主要负责虚拟实验室构建，并参与 Wiki 页面开发，组织页面结构、调整布局，并整合队友提供的文字、图片和项目结果。根据内容与设计反馈修改页面，排查显示及技术问题，让不同部分的项目资料得到清楚呈现。

### 团队负责人与其他工作组

感谢团队负责人、各组负责人及新媒体小组负责人在研究、组织与传播中的投入。以下同样依据官方贡献表与 Roster 整理：

- **Ding Ma · Team Leader（团队负责人）**：参与项目构思、背景调研、数据分析与记录整理，并协助规划和审阅软硬件工作。承担秘书职责，协调日程、内部沟通与行政材料，同时参与安全准备、公众交流、筹资及项目文稿的撰写修改。
- **Jinqi Xu · Team Leader（团队负责人）**：参与组建团队、安排赛季时间表，并协调湿实验、计算与公众交流工作的进度。与其他负责人共同推进筹资、赞助和创业交流，撰写 Engineering 页面内容，并负责宣传视频与展示视频的拍摄剪辑。
- **Xuanhe Chang · Team Leader（团队负责人）**：参与文献调研与项目实验框架设计，协调湿实验、Wiki 和美术组工作，监督疫苗构建及功能验证。规范实验记录与数据管理，负责 Description、Contribution 和首页等模块内容，并协助科学图表绘制与公众科普。
- **Ke Wang · Wet Lab 负责人**：统筹湿实验进度，参与疫苗与靶点调研、实验执行、数据分析和记录整理。牵头湿实验及 Hardware 页面写作，提交 Parts 登记与安全、Check-In、动物实验表单，并参与教育活动、商业材料及实用新型专利申请。
- **Ouyang Li · Dry Lab 负责人**：牵头多尺度机制建模、敏感性分析、贝叶斯校准与给药窗口预测，并开展多组学靶点筛选及表位结构分析。开发首版 circForge 软件流程，整理计算数据与结构图，并撰写修改中英文 Model 页面。
- **Zhe Jia · Human Practices 负责人**：统筹人类实践，设计访谈提纲与活动方案，通过利益相关方反馈推动项目设计调整。组织教育活动、队际合作和新媒体传播，参与创业规划，并撰写 Human Practices、Entrepreneurship 页面及修改 Education 内容。
- **Yirou Gong · Human Practices 负责人**：参与线上线下工作坊、互动游戏、科普与队际合作活动的策划和实施，协调活动与受众交流。撰写、修改和整合 Human Practices 与 Education 页面内容，并设计视觉和动画元素，使活动记录清晰易读、呈现一致。
- **Zecun Li · Human Practices 负责人**：设计 Bio Memory Match 教育游戏，提出虚拟实验室与 SST-QN 网络概念并参与完善。发起 Together with iGEM 合作，组织读书日与八段锦活动，撰写 Sustainability 页面及生物安全角色扮演游戏 DDL Crisis 的完整剧本。
- **Rong Gao · 新媒体小组负责人**：调研其他 iGEM 团队案例，为项目与传播提供参考；参与杏花节等公众活动的物料设计、现场组织和交流。协调新媒体运营，制作公众号内容、海报、宣传图与手册，并参与视频剪辑，保持团队对外传播的视觉风格一致。

也感谢 Wet Lab、Dry Lab 与 Human Practices 的全体成员在实验执行、安全与记录、生物信息学与计算设计、数学建模、工具开发、教育和公共传播中的共同投入，为 Wiki 的科学内容、项目记录与公众交流提供基础。

### 其他成员与指导团队

也感谢以下同学、指导教师与顾问的参与和支持。名单按 [Roster](https://2026.igem.wiki/jlu-fbh/roster) 分组，并与[官方 Attributions 团队贡献表](https://teams.igem.org/wiki/6056/attributions#team-member-contributions)核对；连同上文所列成员，完整团队共 44 人。各人的具体贡献可在官方表中查阅。

- **Wet Lab**：Jiaze Xu、Minxu Jin、Zitong Ye、Shuangshuo Tian、Jingtong Xu、Jiayi Zhang。
- **Dry Lab**：Hui Pan、Ziyi Yan、Yufan Ji。
- **Human Practices**：Jianyu Zhou、Qihang Chen、Jiatong Zhang、Yiran Zheng、Junhan Lu。
- **Primary PIs（主要指导教师）**：Bin Liu、Guoyue Lv、Jiuwei Cui、Songling Zhang。
- **Secondary PIs（共同指导教师）**：Lin Jia、Meihua Piao、Qingtian Guan。
- **Instructors（指导教师）**：Bin Wang、Kexin Gao、Ruihong Wu、Ruohan Yang。
- **Advisors（顾问）**：Mingwan Liu、Sirui Dong、Xilei Song、Yurui Wei。

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

<a id="授权与知识产权"></a>

## 许可与署名

主仓库采用 [CC BY 4.0](LICENSE)（知识共享署名 4.0 国际许可协议）。复用、分发或修改时，请保留署名并遵守许可条款。第三方素材、依赖和独立子项目适用各自的许可证。

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
    <img src="docs/media/readme-visit-wiki-en.svg" alt="Explore the Wiki ↗" width="248" height="52" />
  </a>
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

**CirCure** explores an engineered circular RNA (**circRNA**) platform for a multi-target triple-negative breast cancer (**TNBC**) vaccine. The Wiki presents the project's [design](https://2026.igem.wiki/jlu-fbh/description), [experiments](https://2026.igem.wiki/jlu-fbh/experiments), and [research findings](https://2026.igem.wiki/jlu-fbh/results) through research articles, hand-drawn illustrations, scroll-driven storytelling, model visualizations, and science communication games.

Alongside the molecular mechanisms and experimental design, we want readers to see the patients behind the research: their worries about recurrence and their hopes for everyday life. We begin with a patient's question and give readers room to pause, compare, and explore the science at their own pace.

<p align="center">
  <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot" title="Meet Lumi, the CirCure lamb mascot">
    <img src="docs/media/readme-lumi.png" alt="Lumi the lamb wears pink petals and a breast cancer awareness ribbon, smiling and making peace signs inside a circular RNA motif." width="140" height="140" />
  </a>
  <br />
  <strong>Hi, I'm Lumi!</strong><br />
  <sub>Your little lamb companion through CirCure · <a href="https://2026.igem.wiki/jlu-fbh/visual-design#lumi-mascot">Meet our mascot ↗</a></sub>
</p>

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

We designed CirCure's homepage and overall page framework to connect the project's clinical motivation, scientific rationale, and visual identity. Original watercolor artwork, prepared as aligned layers, works together with animated molecular explanations, scene transitions, chapter navigation, and interactive elements to shape the reading experience. We also kept sketches, interactive prototypes, and revisions to document how the artwork and interface developed alongside the project.

Throughout implementation and revision, we considered what each scene needed to communicate and how readers would follow the story: keeping the RNA ring recognizable through transitions, allowing time to read complete sentences, adjusting artwork framing for different screens, and making page names easier to scan in navigation. Here we share the alternatives we tried, the reasons for changing them, and the corresponding source code. We hope these decisions and trade-offs help future iGEM teams connect practical examples with the reasoning behind them, adapting and improving the ideas for their own projects.

**Open the [complete interactive Visual Design page ↗](https://2026.igem.wiki/jlu-fbh/visual-design), especially [Section 8: Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) and [Section 9: Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft).**

Section 8 connects the patient's perspective to the scientific story; Section 9 shares lessons in layered artwork, reading pauses, clear navigation, and reversible interactions. Try the demonstrations and expand **Technical details** for design rationale and implementation notes.

The [English methods guide](docs/visual-design-guide.en.md) and its [Chinese edition](docs/visual-design-guide.md) provide case summaries and source links for GitHub readers, search tools, and AI-assisted research. Use the original page to explore the complete interactions and expandable explanations.

**Also expand the [Design Folios: six studies and revisions ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive) near the end of the page.** They preserve explorations left out of the final Wiki, earlier directions, and reasons for revision: image-led navigation, a pink thread and expanding emblem, three Human Practices timelines, and composition and RNA-ring transition comparisons. Five interactive demonstrations are preserved as HTML pages; try them within the folios or choose **Open in full window**. They offer design ideas and implementation references for future teams; the [guide's Design Folios section](docs/visual-design-guide.en.md#design-folios-earlier-directions-and-interactive-studies) lists the examples and source files.

Meet the contributors in the [Roster · Visual Design group ↗](https://wiki.dayquay.com/jlu-fbh/roster#visual-design). Select a name below to open that member’s full profile directly.

The contribution summaries below combine the [official Attributions form](https://teams.igem.org/wiki/6056/attributions#team-member-contributions) with the project responsibilities documented here.

- [Yupeng Xu](https://wiki.dayquay.com/jlu-fbh/roster#yupeng-xu) (GitHub: [@xiangyupaiso](https://github.com/xiangyupaiso)) served as Wiki Lead, coordinating CirCure Wiki development and digital design through milestone planning, task allocation, and cross-team collaboration. The work included building the modular frontend framework, overseeing site architecture and the reading experience, and developing educational games, virtual-lab simulations, and interactive data displays for science communication. Yupeng also wrote technical documentation, reviewed content quality, and checked code and digital assets against iGEM guidance and open-source requirements. Alongside these responsibilities, Yupeng organized AI-agent collaboration and documented reusable workflows, skills, and tools so teammates could contribute to the website through a shared development process.
- [Jianyuan Li](https://wiki.dayquay.com/jlu-fbh/roster#jianyuan-li) (GitHub: [@jianyuanliljy-hub](https://github.com/jianyuanliljy-hub)) primarily designed and developed the CirCure homepage; researched, wrote, and designed Visual Design Sections 8 and 9; and developed related design studies and interactive implementations in Design Folios. Drawing on iGEM guidance, previous team Wikis, and the 2026 publishing workflow, Jianyuan contributed to information architecture, page hierarchy, narrative flow, page implementation, asset integration, and the arrangement of text and figures. The work also included reviewing drafts for factual accuracy, terminology, logical coherence, formatting, and clear English expression. Sketches, interactive prototypes, and revision records were retained so future teams can examine the design process alongside the source code.
- [Jingchen He](https://wiki.dayquay.com/jlu-fbh/roster#jingchen-he) (GitHub: [@HE-JINGCHEN](https://github.com/HE-JINGCHEN)) primarily built the virtual laboratory, organizing nine molecular biology experiments into interactive learning pages and refining experiment sidebars, controls, and media presentation. The work included Chinese-language switching, image migration, and source compression, maintaining resource references and page presentation while preserving existing interactions. Beyond the laboratory, Jingchen helped create and organize Wiki pages, integrate teammates' text, images, and project results, and adjust layouts so materials displayed correctly. Jingchen also discussed content and design with teammates, revised pages in response to their feedback, and addressed display and technical issues, helping connect the experimental learning flow with the wider project website.

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

On this page: [Technology](#technology) · [Page code](#how-pages-are-organized) · [Navigation](#pages-and-navigation) · [Interactions](#interaction-and-reading) · [Repository and builds](#repository-and-builds) · [Editing](#common-editing-locations) · [Quick start](#quick-start) · [Deployment](#collaboration-and-deployment) · [Thanks](#team-and-acknowledgements) · [License](#license-and-attribution)

<a id="technology-and-core-dependencies"></a>

## Technology

The Wiki is built with React, TypeScript, and Vite. GSAP handles animation, Mol\* displays molecular structures, and ECharts plots model data.

| Technology | Version | Used for |
| --- | --- | --- |
| React / TypeScript | 19.2.x / 5.9.x | Page components and type checking |
| Vite | 7.3.x | Development server and multiple HTML build entries |
| React Router | 7.x | Routes, navigation, and redirects |
| GSAP / @gsap/react | 3.15.x / 2.1.x | Intro animation, scroll scenes, and timelines |
| Mol\* (Molstar) | 5.13.x | On-demand WebGL molecular viewer |
| Apache ECharts | 6.1.x | Model charts and tooltips |
| CSS custom properties / Bootstrap | Bootstrap 5.3.x | Wiki colors, grids, and reading layout |
| Tailwind CSS / Lucide | 3.4.x / root Lucide 0.562.x | Laboratory styles and interface icons |
| Radix UI | Dialog / Tabs 1.x | Dialogs and tabs |
| ESLint / Prettier / Node test scripts | See configuration and lockfiles | Code checks, formatting, and regression tests |

See [package.json](package.json) for dependencies and the lockfiles for resolved versions. Games and the laboratory manage their own dependencies and builds; see [build boundaries](#build-boundaries).

<a id="architecture-and-development-principles"></a>

## How pages are organized

<a id="page-layers-data-assets-interaction-and-assembly"></a>

### Content, assets, and interactions have separate files

A typical article page uses four locations:

| Content | Typical location | What belongs here |
| --- | --- | --- |
| Page data | `src/data/[module]/[page]Page.ts` | Text, sections, figure descriptions, and links, using types such as `WikiPageContent` |
| Asset mappings | `src/data/[module]/[page]Assets.ts` | Local sources, images, attachments, and their CDN URLs |
| Interactions | `src/components/wiki/features/[module]/` | Charts, construct viewers, and other components connected through feature slots |
| Page assembly | `src/contents/[page].tsx` | Page data, Hero artwork, and features passed to `WikiRoutePage` |

Follow the [page specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) for new pages, and keep JSX out of content data. Existing data files live both at the root of `src/data/` and in module folders; follow the assembly file's imports to find them.

<a id="shared-reader-and-maintenance-entry-points"></a>

### Articles share a reader

`WikiRoutePage` handles article blocks, images, citations, outlines, and chapter links. Edit `src/styles/wiki-route-skin.css` for shared layout and `route-palette-*.css` for module colors. Keep page-specific interactions and styles with their feature components.

Maintain one source for content and one for asset mappings, rather than copying the same content into components.

<a id="shared-image-readiness-contract"></a>

### Images are prepared during page transitions

The shared loader collects Hero and article images from `WikiRoutePage`. Declare images in dialogs or inactive tabs with `preloadImages` or `PageImagePreloads` to reduce waiting when readers open them.

See the [image-loading rules](WIKI_ARCHITECTURE_SPEC.md#471-新页面接入) (Chinese). After changes, run `yarn test:page-loading` and check page transitions and the affected interactions in a browser.

<a id="standalone-applications-and-style-isolation"></a>

### The laboratory runs separately

The laboratory has its own Tailwind styles, dependencies, and build. The Wiki embeds its official deployment in a lazily loaded iframe, keeping the two documents' styles and viewports separate.

The laboratory requests closing through `window.postMessage`; the Wiki checks both the message origin and the iframe window. Its nine experiment pages use `React.lazy` and dynamic `import()` within the standalone project.

<a id="site-modules-and-pages"></a>

## Pages and navigation

Beyond [Home ↗](https://2026.igem.wiki/jlu-fbh/), five content groups contain 22 page entries. Click any page name below to visit it on the official Wiki. Navigation is defined in [src/pages.ts](src/pages.ts).

| Group | Pages |
| --- | --- |
| Team | [Roster](https://2026.igem.wiki/jlu-fbh/roster), [Attributions](https://2026.igem.wiki/jlu-fbh/attributions), [Activities](https://2026.igem.wiki/jlu-fbh/activities) |
| Project | [Description](https://2026.igem.wiki/jlu-fbh/description), [Engineering](https://2026.igem.wiki/jlu-fbh/engineering), [Results](https://2026.igem.wiki/jlu-fbh/results), [Contribution](https://2026.igem.wiki/jlu-fbh/contribution), [Visual Design](https://2026.igem.wiki/jlu-fbh/visual-design), [Notebook](https://2026.igem.wiki/jlu-fbh/notebook), [Safety and Security](https://2026.igem.wiki/jlu-fbh/safety-and-security) |
| Wet Lab | [Design](https://2026.igem.wiki/jlu-fbh/design), [Experiments](https://2026.igem.wiki/jlu-fbh/experiments), [Measurement](https://2026.igem.wiki/jlu-fbh/measurement), [Alternative Platform](https://2026.igem.wiki/jlu-fbh/alternative-platform) |
| Dry Lab | [Model](https://2026.igem.wiki/jlu-fbh/model), [Software](https://2026.igem.wiki/jlu-fbh/software), [Hardware](https://2026.igem.wiki/jlu-fbh/hardware), [Games](https://2026.igem.wiki/jlu-fbh/games) |
| Engagement | [Entrepreneurship](https://2026.igem.wiki/jlu-fbh/entrepreneurship), [Human Practices](https://2026.igem.wiki/jlu-fbh/human-practices), [Education](https://2026.igem.wiki/jlu-fbh/education), [Sustainability](https://2026.igem.wiki/jlu-fbh/sustainability) |

[Games](https://2026.igem.wiki/jlu-fbh/games) brings together the [virtual laboratory](https://2026.igem.wiki/jlu-fbh/games#game-virtual-lab), [Breast Guardian RPG](https://2026.igem.wiki/jlu-fbh/games#game-breast-guardian), [Bomb Cat](https://2026.igem.wiki/jlu-fbh/games#game-bomb-cat), and [Bio Memory Match](https://2026.igem.wiki/jlu-fbh/games#game-bio-memory).

<details>
<summary>View all page paths and descriptions</summary>

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

</details>

All paths are relative to `/jlu-fbh/`. `/team` redirects to `/roster`, and `/attribution` redirects to `/attributions`.

<a id="interaction-and-engineering-features"></a>

## Interaction and reading

<a id="opening-sequence-and-scroll-story"></a>

### Home: from the problem to the design

The [homepage](https://2026.igem.wiki/jlu-fbh/) opens with the CirCure signature animation, then follows the TNBC exploration map, antigen switcher, and circRNA illustrations. SVG strokes, Canvas particles, and GSAP timelines handle the intro and scene transitions.

Code lives in `src/components/home/`, data in `src/data/`, and styles mainly in `src/styles/home-*.css`. Home has its own layout; article pages use the shared reader.

<a id="hand-drawn-hero-artwork-and-long-form-reading"></a>

### Articles: illustrations, outlines, and chapter links

Hand-drawn Hero artwork follows an ink-wash watercolor style, with a separate palette for each content group. When an illustration already includes its title, `hideHeroCopy` can hide duplicate text while retaining a semantic `h1` for assistive technologies.

The reader includes the marker-style `WikiLineSidebar`, section navigation, charts, and citations. `WikiNextRecord` links to the next chapter at the end. Deeper outline entries usually expand around the reading position; some pages show the full outline. Try it on the [project description page](https://2026.igem.wiki/jlu-fbh/description). See the [design and typography specification](文案集/Wiki-设计与排版规范.md) (Chinese) for details.

<a id="virtual-molecular-biology-laboratory"></a>

### Virtual laboratory: nine guided experiments

The [live laboratory](https://virtual-lab-208fd4.igem.wiki/) groups courses into Beginner, Intermediate, and Advanced levels. They progress from culture revival, staining, and plasmid extraction to PCR, digestion, ligation, transformation, and expression analysis.

<details>
<summary>View the nine experiments and learning topics</summary>

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

</details>

The interface includes pipettes, centrifuges, thermal cyclers, and electrophoresis and imaging equipment, with step indicators, hints, and explanations of principles and reagents. Experiments can be restarted; small portrait screens show a landscape prompt.

Source and development instructions are in [virtual-lab/README.en.md](virtual-lab/README.en.md). The [official software repository](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab) manages the separate deployment.

### Science communication games

Selecting a game on the [Games page](https://2026.igem.wiki/jlu-fbh/games) loads that experience:

- **[Breast Guardian RPG](https://2026.igem.wiki/jlu-fbh/games#game-breast-guardian)** introduces breast-health concepts through characters and situations across life stages.
- **[Bomb Cat](https://2026.igem.wiki/jlu-fbh/games#game-bomb-cat)** is a circRNA-themed strategy card game with local bots, online rooms, and a rulebook.
- **[Bio Memory Match](https://2026.igem.wiki/jlu-fbh/games#game-bio-memory)** introduces biological concepts through observing, remembering, and matching specimen cards.

Buildable source for the first two games lives in `games/`; Bio Memory's runtime files are in `public/game-assets/bio-memory/`. See [games/README.en.md](games/README.en.md) for source records and build instructions.

<a id="molecular-and-data-visualization"></a>

### Molecular structures and model charts

The [Model page](https://2026.igem.wiki/jlu-fbh/model) displays the [Trop2 complex](https://2026.igem.wiki/jlu-fbh/model#model-structural-confirmation) with Mol\*. Readers can rotate, zoom, focus on segments, and toggle surfaces and polar contacts. The molecular runtime and PDB files load as readers approach the figure.

ECharts and related components display model data with interactive legends, range highlights, and tooltips for reading alongside the analysis.

<a id="navigation-cursor-and-reading-tools"></a>

### Navigation and reading tools

Responsive navigation, in-page search, back-to-top controls, and the footer are shared across the site. The sheep cursor follows fine-pointer, hover, and reduced-motion settings, retaining the native cursor in applicable input areas.

When changing shared components, check transitions between Home and article pages, narrow screens, keyboard use, and reduced-motion settings.

<a id="asset-sources-and-official-hosting"></a>

### Images, fonts, and attachments

Published images, fonts, and attachments use `static.igem.wiki`; videos and standalone applications use their respective official hosting platforms. The repository retains local assets, manuscripts, and CDN mappings. Upload copies and historical check records live in `delivery/uploads/`.

Follow the [asset guide](docs/assets.en.md) when replacing files to check sources, CDN URLs, and page references.

<a id="repository-structure-and-build-boundaries"></a>

## Repository and builds

Wiki code lives in `src/`, and standalone applications in `games/` and `virtual-lab/`. `文案集/` holds manuscripts; `delivery/` holds delivery records. For specific files, see [common editing locations](#common-editing-locations) or the [repository map](docs/repository-layout.en.md).

<a id="directory-entry-points"></a>

<details>
<summary>Expand the repository tree</summary>

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

</details>

Four HTML files serve as build entries: `index.html` for the Wiki, and `visual-design-study.html`, `archive-navigation-study.html`, and `archive-recognition-study.html` for design studies.

The existing `.env` contains team metadata and other build inputs; keep secrets out of it. `.dockerignore` excludes unrelated files from Docker build contexts.

### Build boundaries

| Application | Development instructions | What root `yarn build` does |
| --- | --- | --- |
| Wiki | [Development guide](docs/development.en.md) | Checks types, builds four HTML entries, and generates path mappings |
| Breast Guardian / Bomb Cat | [Game guide](games/README.en.md) | Copies committed runtime files from `public/game-assets/`; game source needs a separate build |
| Virtual Laboratory | [Laboratory guide](virtual-lab/README.en.md) | Builds the Wiki's iframe integration; the laboratory is built and published separately |

Each subproject has its own dependencies, lockfiles, and license. After rebuilding a game, update its runtime files in `public/game-assets/`. The laboratory is published on its own site.

## Common editing locations

| What to change | Where to look |
| --- | --- |
| Routes and navigation targets | `src/pages.ts`, `src/contents/` |
| Text, sections, and figure descriptions | The page's data files in `src/data/` |
| Image and attachment URLs | The relevant `*Assets.ts`, `src/data/assets/` |
| Page interactions and charts | `src/components/wiki/features/` |
| Homepage story and animation | `src/components/home/`, homepage data, and `home-*.css` |
| Article layout | `src/components/wiki/`, `src/styles/wiki-route-skin.css` |
| Module colors | `src/styles/route-palette-*.css` |
| Page loading and image preparation | `src/utils/`; also read the [page specification](WIKI_ARCHITECTURE_SPEC.md) (Chinese) |
| Asset sources and upload records | [Asset guide](docs/assets.en.md), [delivery index](delivery/README.en.md) |
| Script purpose and write scope | [Script index](scripts/README.en.md) |

Importers and asset generators may overwrite content or indexes; read their instructions before running them. Changes to scientific manuscripts, experimental parameters, formulas, and evaluation metrics require the content owner's confirmation.

## Quick start

<a id="environment-and-dependencies"></a>

### Start the Wiki

Use Node.js 22.12+ (22.x) and Yarn Classic 1.22.22 to match the official CI's Node major version. From the repository root:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open the address printed in the terminal, normally `http://localhost:5173/jlu-fbh/`.

The root also retains an npm lockfile. For npm, run `npm ci`, then `npm run <name>` for scripts. Use one package manager per dependency directory and maintain the corresponding lockfile when dependencies change.

<a id="check-build-and-preview"></a>

### Check and build

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

`build` runs TypeScript checks, Vite, and `scripts/postbuild-slug.mjs`, writing output to `dist/`. This includes the Wiki and design-study pages, with the Mol\* runtime compiled separately. `preview` serves that output; rebuild after changing source files.

Format only the files you changed during everyday work; `yarn format` rewrites all matching files. See the [development guide](docs/development.en.md) and [script index](scripts/README.en.md) for focused checks.

<a id="standalone-projects"></a>

### Start the laboratory or games

Start the laboratory in a separate terminal:

```sh
cd virtual-lab
npm ci
npm run dev
```

Its `npm run build` writes to its own Git-ignored `virtual-lab/dist/`. The root development server only serves the Wiki.

Install and build games in `games/breast-guardian/` and `games/bomb-cat/`, following their READMEs.

<a id="continuous-integration-and-hosting"></a>

## Collaboration and deployment

<a id="github-collaboration-and-official-gitlab-releases"></a>

### From GitHub review to GitLab publication

Contributors develop on their own branches on GitHub and use Pull Requests for review before merging into `main`. Branch names follow team conventions. The release maintainer then synchronizes reviewed versions to official GitLab as planned, where the pipeline builds and publishes the Wiki.

[.gitlab-ci.yml](.gitlab-ci.yml) runs only on GitLab's default branch:

```text
Node 22
  → yarn install --frozen-lockfile
  → yarn lint
  → yarn test:page-loading
  → yarn build
  → copy dist/. to public/ in the CI workspace, generate SPA fallback, and publish
```

<a id="yarn-classic-and-installation-consistency"></a>

The root `package.json` pins Yarn 1.22.22, and CI installs from the lockfile. Install subproject dependencies in their own directories. See the [deployment guide](docs/deployment.en.md) for release steps and hosting differences.

<a id="one-output-tree-and-path-mapping"></a>

### Hosting paths and static files

`scripts/postbuild-slug.mjs` reads Vite's base setting and generates Cloudflare `_redirects` in `dist/`. The default team path uses these rules, with additional rules for canonical HTML and directory URLs:

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

Vite preview and official GitLab Pages mount output at the base path. [wrangler.json](wrangler.json) points Cloudflare at `./dist` with a single-page application (SPA) fallback. No extra `dist/jlu-fbh/` copy is needed.

When needed, the script generates `.assetsignore` so Cloudflare skips files above 25 MiB during upload; use their CDN URLs instead. GitHub Pages needs its own mount path and deep-route fallback because it does not read Cloudflare's `_redirects`.

<a id="typescript-asset-indexes-and-configuration"></a>

After changing asset dictionaries such as `contributionAssets.ts`, `resultsAssets.ts`, or `designAssets.ts`, run type checks and the build to check index keys and resource paths.

## Team and acknowledgements

We thank the university, clinical institutions, research platforms, and supporters who helped the team. See the Wiki's [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) page for individual contributions and forms of support.

### Visual Design team

We thank all six members for their work on CirCure's visual design and Wiki. The summaries below draw on the [official Attributions form](https://teams.igem.org/wiki/6056/attributions#team-member-contributions), the [Roster](https://2026.igem.wiki/jlu-fbh/roster), and the page responsibilities already documented in this repository:

- **[Shuyi Wang](https://wiki.dayquay.com/jlu-fbh/roster#shuyi-wang) · Art Lead**: Designed the mascot, merchandise, and team uniform, and developed Wiki palettes, layouts, and animation effects. Coordinated art-team tasks, refined scientific schematics and flowcharts with wet-lab feedback, and maintained a consistent visual style across the website and outreach materials.
- **[Yupeng Xu](https://wiki.dayquay.com/jlu-fbh/roster#yupeng-xu) · Wiki Lead**: Led Wiki planning and coordination, built the modular frontend framework, and oversaw website architecture and user experience. Developed educational games, virtual-lab simulations, and interactive data displays; wrote technical documentation; and reviewed content quality, code, and digital assets against iGEM and licensing requirements.
- **[Jianyuan Li](https://wiki.dayquay.com/jlu-fbh/roster#jianyuan-li) · Team Member**: Primarily designed and developed the homepage and researched, wrote, and designed Visual Design Sections 8 and 9. Contributed to information architecture, page implementation, asset integration, layout refinement, and editorial review, while documenting sketches, revisions, and design lessons for future teams.
- **[Muzi Li](https://wiki.dayquay.com/jlu-fbh/roster#muzi-li) · Team Member**: Developed visual concepts and character designs, creating the team logo, mascot illustrations, Wiki graphics, scientific diagrams, homepage elements, and icons. Prepared illustrated medical and science communication materials and refined composition and style across sections to help wider audiences understand the project.
- **[Zhixia Ye](https://wiki.dayquay.com/jlu-fbh/roster#zhixia-ye) · Team Member**: Created original drawings for the Wiki loading page and homepage, alongside custom graphics for the website interface. Contributed cover art and other project illustrations, helping the entry pages share a coherent visual identity and supporting consistency across the site's artwork.
- **[Jingchen He](https://wiki.dayquay.com/jlu-fbh/roster#jingchen-he) · Team Member**: Primarily built the virtual laboratory and contributed to Wiki coding, organizing pages, adjusting layouts, and integrating teammates' text, images, and project results. Worked with the team on content and design revisions and addressed display and technical problems to present the project's materials clearly.

### Team leaders and other working groups

We thank the team leaders, group leads, and new media subgroup lead for their research, coordination, and communication work. These summaries follow the same Attributions form and Roster:

- **Ding Ma · Team Leader**: Contributed to project ideas, background research, data analysis, record organization, and reviews of hardware and software plans. As team secretary, coordinated schedules, internal communication, and administrative documentation, while supporting safety preparation, public engagement, fundraising, and the drafting and revision of project materials.
- **Jinqi Xu · Team Leader**: Helped assemble the team, plan the season, and coordinate wet-lab, dry-lab, and outreach work. Worked with fellow leaders on fundraising, sponsorship, public engagement, and entrepreneurship; drafted Engineering content; and filmed and edited the team's Promotion Video and Presentation Video.
- **Xuanhe Chang · Team Leader**: Helped define the experimental framework through literature research and coordinated wet-lab, Wiki, and art work. Supervised vaccine construction and functional verification, organized laboratory records and data management, prepared Description, Contribution, and homepage content, and supported scientific visualization and public outreach.
- **Ke Wang · Wet Lab Lead**: Coordinated wet-lab schedules, researched vaccine platforms and targets, and conducted experiments, analysis, and record keeping. Led Wet Lab and Hardware page writing, submitted Parts Registry entries and safety-related forms, and contributed to education, commercial materials, and a utility-model patent application.
- **Ouyang Li · Dry Lab Lead**: Led multiscale mechanistic modeling, sensitivity analysis, Bayesian calibration, and dosing-window prediction, alongside multi-omics target screening and epitope structural analysis. Developed the first circForge pipeline, organized computational data and structural figures, and drafted and revised the bilingual Model page.
- **Zhe Jia · Human Practices Lead**: Coordinated Human Practices, designed interview outlines and activity plans, and used stakeholder feedback to refine project design. Organized educational activities, inter-team collaborations, and social media outreach, contributed to entrepreneurship planning, wrote Human Practices and Entrepreneurship content, and revised Education materials.
- **Yirou Gong · Human Practices Lead**: Planned and delivered workshops, interactive games, science outreach, and inter-team activities, helping coordinate events and audience engagement. Drafted, revised, and integrated Human Practices and Education content, and designed visual and animated elements to improve clarity, accessibility, and consistency across the Wiki.
- **Zecun Li · Human Practices Lead**: Designed Bio Memory Match and proposed the Virtual Laboratory and SST-QN concepts, supporting their development. Initiated Together with iGEM, organized World Book Day and Baduanjin activities, wrote Sustainability content, and authored the complete script for the biosafety role-playing game DDL Crisis.
- **Rong Gao · New Media Subgroup Lead**: Reviewed other iGEM projects and supported outreach events, including the Apricot Blossom Festival, through materials, on-site organization, and audience communication. Coordinated new media work, producing WeChat content, posters, promotional graphics, and brochures, and contributed video editing while maintaining consistent visual communication.

We also thank every member of Wet Lab, Dry Lab, and Human Practices for their work on experiments, safety and documentation, bioinformatics and computational design, mathematical modeling, tool development, education, and public communication, which underpins the Wiki's scientific content and project records.

### Other members and mentors

We also thank the following students, PIs, instructors, and advisors for their participation and support. The names follow the [Roster](https://2026.igem.wiki/jlu-fbh/roster) groups and have been checked against the [official Attributions form](https://teams.igem.org/wiki/6056/attributions#team-member-contributions). Together with those listed above, they make up the full team of 44 people. Individual contributions are recorded in the official form.

- **Wet Lab**: Jiaze Xu, Minxu Jin, Zitong Ye, Shuangshuo Tian, Jingtong Xu, Jiayi Zhang.
- **Dry Lab**: Hui Pan, Ziyi Yan, Yufan Ji.
- **Human Practices**: Jianyu Zhou, Qihang Chen, Jiatong Zhang, Yiran Zheng, Junhan Lu.
- **Primary PIs**: Bin Liu, Guoyue Lv, Jiuwei Cui, Songling Zhang.
- **Secondary PIs**: Lin Jia, Meihua Piao, Qingtian Guan.
- **Instructors**: Bin Wang, Kexin Gao, Ruihong Wu, Ruohan Yang.
- **Advisors**: Mingwan Liu, Sirui Dong, Xilei Song, Yurui Wei.

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
