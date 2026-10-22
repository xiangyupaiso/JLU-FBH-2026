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
  <a href="#全站模块与页面体系">页面导航</a>
  &nbsp;·&nbsp;
  <a href="#快速启动">快速启动</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md">参与贡献</a>
</p>

## 项目概览

本项目为 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki 网站前端工程，同时保存页面内容、素材来源与可复用的子项目源码。

项目以 **CirCure**——基于工程化环状 RNA（circRNA）的多靶向三阴性乳腺癌（TNBC）疫苗平台——为主题，通过学术长文、手绘插画、滚动叙事、模型可视化与交互科普介绍团队的设计、实验和研究过程。

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

## 项目链接

**在线 Wiki** · 正式网站与项目展示<br />[https://2026.igem.wiki/jlu-fbh/](https://2026.igem.wiki/jlu-fbh/)

**官方 GitLab** · 官方源码与发布记录<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**团队后台 · Team 6056** · 团队管理、素材上传与参赛交付<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

日常开发与 Pull Request 在本 GitHub 仓库进行；官方 GitLab 同步与网站发布的关系见[部署说明](docs/deployment.md)。

### 预览版与正式版的区别

根据 [iGEM 2026 官方日历](https://competition.igem.org/about/calendar)，官方 Wiki 于 **2026 年 10 月 21 日 15:00 UTC（北京时间 23:00，UTC+8）**进入冻结期（Wiki Freeze）。冻结期间无法继续编辑，需等待赛事结束后的 Wiki Thaw 重新开放修改。

未纳入官方冻结版本的补充内容、恢复资料与后续完善，继续保存在本 GitHub 仓库，并通过[开发预览版 `wiki.dayquay.com`](https://wiki.dayquay.com/jlu-fbh/)展示，供读者查阅和后续团队参考。正式参赛内容仍以 [`2026.igem.wiki/jlu-fbh/`](https://2026.igem.wiki/jlu-fbh/) 的冻结版本为准；两个环境独立发布，GitHub 更新后仍需等待预览部署。

## 从这里开始

- 直接运行项目：[快速启动](#快速启动)
- 开发、检查与构建：[开发指南](docs/development.md)
- 改页面时去哪里找文件：[仓库地图](docs/repository-layout.md)
- GitHub、官方 GitLab 与预览环境：[部署说明](docs/deployment.md)
- 图片、原稿、CDN 映射与上传包：[素材维护](docs/assets.md)
- 所有文档：[文档索引](docs/README.md)
- 提交改动前：[协作约定](CONTRIBUTING.md)

本页内容：[技术栈](#技术栈与核心依赖) · [架构原则](#架构设计与开发原则) · [页面体系](#全站模块与页面体系) · [交互特色](#核心交互与工程特色) · [仓库目录](#仓库目录与构建边界) · [修改入口](#常见修改位置) · [部署适配](#持续集成与多环境适配) · [许可](#授权与知识产权)

## 技术栈与核心依赖

下表概括当前工程的主要选型。主站的依赖声明以 [package.json](package.json) 为准，实际解析版本见锁文件；独立子项目各自维护依赖。

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

这也是新增页面的组织目标。现有 `src/data/` 仍有根级文件与模块子目录并存的情况；维护时从实际 import 追踪来源，按需迁移，避免为目录整齐改动无关实现。

### 共享阅读器与单一维护入口

正文页面复用 `WikiRoutePage`，统一处理内容块、图片、文献、目录与章节衔接。共享尺寸和阅读版式优先维护 `src/styles/wiki-route-skin.css`；模块主题由 `route-palette-*.css` 管理，页面专用交互与样式留在对应 feature 中。

正文与资产映射分别维护，避免同一内容在组件和数据文件中重复保存。具体修改位置见[常见修改位置](#常见修改位置)。

### 独立应用与样式隔离

主站以共享阅读器、CSS 主题和 Bootstrap 为基础；虚拟实验室有自己的 Tailwind 样式、依赖和构建。主站通过 `loading="lazy"` 的 iframe 嵌入官方实验室部署，隔离两个文档的样式与视口。

实验室使用 `window.postMessage` 通知主站关闭，主站同时检查消息来源域名与 iframe 窗口。实验室的九个实验页面使用 `React.lazy` 和动态 `import()` 分包；主站不会把它们再次打进自身产物。

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

页面体系描述网站内容的组织方式；科研结果、模型假设和适用范围以对应页面的正文与证据为准。

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

ECharts 等组件承载模型相关图表、图例和交互提示。可视化用于浏览页面所列的数据和模型；结构展示本身不构成实验验证。

### 共享导航、光标与页面辅助

站点包含响应式导航、页面内搜索、返回顶部、共享页脚，以及绵羊光标等交互。光标根据精细指针、悬停和 reduced motion 条件启用，在适用的输入区域保留原生光标行为。

这些共享组件跨页面使用，修改时需同时检查首页与正文页的状态切换、窄屏、键盘操作和减少动态效果（reduced motion）设置。

### 素材来源与官方托管

正式页面使用 `static.igem.wiki` 上的官方图片、字体和附件；仓库也保留本地素材、原稿与来源映射。素材调用应沿用对应资产字典和登记规则，视频与独立应用按官方托管入口接入。

上传副本和历史核验归入 `delivery/uploads/`。本地保留素材、预期 CDN 地址、历史探活与当前线上可用性需要分别核对；维护流程见[素材维护](docs/assets.md)。

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

根目录的 `index.html`、`visual-design-study.html`、`archive-navigation-study.html` 和 `archive-recognition-study.html` 都是当前构建入口。带有 `archive` 的文件仍可能参与正式页面，移动前必须核对引用。

`.env` 保存现有队伍元数据等构建输入，不应写入密钥；`.dockerignore` 用于排除本机构建上下文中的无关文件。其余根目录文件职责与迁移记录见[仓库地图](docs/repository-layout.md)。

### 三类应用的构建边界

| 应用                       | 开发入口                                       | 根目录构建的行为                                                |
| -------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| Wiki 主站                  | `src/`，`yarn dev`                             | 类型检查、四个 HTML 入口打包、生成路径映射                      |
| Breast Guardian / Bomb Cat | [games/README.md](games/README.md)             | 发布 `public/game-assets/` 中已提交的运行文件；不会自动重建游戏 |
| Virtual Laboratory         | [virtual-lab/README.md](virtual-lab/README.md) | 主站嵌入官方实验室部署；不会自动构建或发布实验室                |

子项目有各自的依赖、锁文件和许可证，开发前先阅读对应 README。不要把独立实验室的构建产物复制回主站，也不要仅修改游戏源码后就认为已更新 `public/game-assets/` 中的运行版本。

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

导入器和素材生成器可能覆盖内容或索引；查看脚本说明后再运行。科研原稿、实验参数、公式与评价指标的修改需单独确认，目录整理不自动同步这些内容。

## 快速启动

### 环境与依赖

主站建议使用 Node.js 22.12+ 的 22.x 环境和 Yarn Classic 1.22.22，保持与官方 CI 的 Node 22 主版本一致。包管理器以 `package.json` 的 `packageManager` 为准。

从仓库根目录运行：

```sh
yarn install --frozen-lockfile
yarn dev
```

打开终端输出的地址，默认路径为 `http://localhost:5173/jlu-fbh/`。

根目录同时保留 npm 锁文件；需要使用 npm 时执行 `npm ci`，对应脚本通过 `npm run <名称>` 运行。不要在同一依赖目录交替安装，依赖升级应单独维护锁文件。

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

GitLab 的产物复制发生在 CI 工作目录，不应将复制后的目录混入本机源码提交。实际发布范围及纯源码检查说明见[部署说明](docs/deployment.md)。

### Yarn Classic 与安装一致性

`package.json` 声明 `yarn@1.22.22`，官方流水线采用 `--frozen-lockfile`。沿用该声明，避免托管平台使用其他 Yarn 主版本迁移锁文件。不同子项目按自己的依赖和锁文件安装，不因共处一个仓库而共享安装目录。

### 单份产物与路径映射

`scripts/postbuild-slug.mjs` 读取 Vite 实际解析的 base，在单份 `dist/` 中生成 Cloudflare 的 `_redirects`。默认队伍路径的核心规则为：

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

此外还生成 HTML 与目录入口的规范地址规则。Vite preview 与官方 GitLab Pages 按 base 挂载产物；[wrangler.json](wrangler.json) 让 Cloudflare 从 `./dist` 读取静态文件并使用 SPA 回退。无需再复制出 `dist/jlu-fbh/`。

脚本会在需要时生成 `.assetsignore`，Cloudflare 上传时跳过超过 25 MiB 的文件；它不会删除本地文件，也不会缩小 GitLab 的产物。被排除的文件是否影响页面，仍需核对实际引用与 CDN 状态。

GitHub Pages 不读取 Cloudflare 的 `_redirects`，另行托管时需独立配置挂载路径与深层路由回退。

### TypeScript 资产索引与配置维护

`contributionAssets.ts`、`resultsAssets.ts`、`designAssets.ts` 等资产字典连接素材与页面。此前针对宽泛键索引与 `never` 推导的修复属于类型兼容处理；后续变更继续通过当前 `tsc` 与构建检查验证，避免绕过类型约束。

`wrangler.json` 由 Cloudflare 使用，`.gitlab-ci.yml` 负责官方 Wiki 流水线；`.dockerignore` 只影响 Docker 上下文的文件筛选。修改这些文件时按对应平台核对用途，避免把预览配置与正式发布状态混为一谈。

## 团队与致谢

感谢学校、临床机构、科研平台及各支持方对团队工作的帮助。具体工作归属与支持方式见官网的 [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) 页面。

<p align="center">
  <img src="docs/media/readme-institutions.svg" alt="吉林大学；吉林大学白求恩第一医院；吉林大学白求恩第一临床医学院。" width="640" />
</p>

<p align="center">
  <strong>吉林大学</strong><br />
  吉林大学白求恩第一医院 · 吉林大学白求恩第一临床医学院
</p>

### 科研平台与工具

<p align="center">
  <img src="docs/media/readme-acknowledgements.svg" alt="官网页脚致谢标识：公共技术平台、转化医学研究院、Charles River、BioRender、MathWorks、Lark、Grammarly 和 Schrödinger。" width="640" />
</p>

标识沿用官网页脚的现有素材。科研平台包括吉林大学第一医院公共技术平台与转化医学研究院；工具及其他支持方包括 Charles River、BioRender、MathWorks、Lark、Grammarly 和 Schrödinger。

## 授权与知识产权

主仓库采用 [CC BY 4.0](LICENSE)（知识共享署名 4.0 国际许可协议）。使用、分发和修改时遵守署名与许可要求；第三方素材、依赖及独立子项目保留各自的许可要求。

维护时保留共享页脚中的许可证说明与官方 GitLab 仓库链接。AI 辅助编写与修改还需遵循[协作约定](CONTRIBUTING.md)及[负责任使用说明](.claude/RESPONSIBLE_AI_USE.md)。
