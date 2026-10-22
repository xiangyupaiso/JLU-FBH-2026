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
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>浏览 Wiki ↗</strong></a>
  &nbsp;·&nbsp;
  <a href="#全站模块与页面体系">页面导航</a>
  &nbsp;·&nbsp;
  <a href="#快速启动">快速启动</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md">参与贡献</a>
</p>

## 项目概览

**CirCure** 是 JLU-FBH 团队面向三阴性乳腺癌（Triple-Negative Breast Cancer, TNBC）开展的合成生物学研究项目，探索以工程化环状 RNA（circular RNA, circRNA）为载体的多靶向治疗性疫苗设计。本网站作为团队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki，系统记录从研究问题、方案设计到实验探索与计算建模的工作，以及社会需求、公众沟通与可持续性对项目发展的影响。

首页用手绘插画和滚动动画介绍 TNBC 的疾病背景与 circRNA 的设计思路。实验、建模和社会实践页面记录团队开展的工作、采用的方法和参考资料。网站还提供分子结构查看器、虚拟实验室和科普游戏，读者可以查看分子结构、体验实验步骤，也可以通过游戏了解相关的生物学知识。

本仓库包含网站源码、页面文案、插画和素材来源记录，以及虚拟实验室和游戏的源码。主站使用 React、TypeScript 和 Vite 开发，正文内容、素材引用与交互组件分别维护。运行方式、目录说明和部署流程见下方文档。

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

**开发预览版** · 持续更新的页面、交互与设计展示<br />[https://wiki.dayquay.com/jlu-fbh/](https://wiki.dayquay.com/jlu-fbh/)

**项目宣传视频 · Promotion Video** · iGEM 官方视频平台<br />[https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16)

**官方 GitLab** · 官方源码与发布记录<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**团队后台 · Team 6056** · 团队管理、素材上传与参赛交付<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

日常开发与 Pull Request 在本 GitHub 仓库进行；官方 GitLab 同步与网站发布的关系见[部署说明](docs/deployment.md)。

### 预览版与正式版的区别

`wiki.dayquay.com` 是开发预览入口，包含尚未同步到官方 GitLab 的内容。正式参赛网站以 `2026.igem.wiki/jlu-fbh/` 为准；两个环境独立发布，GitHub 更新后仍需等待预览部署。

截至 2026-10-22，GitHub 开发版相较官方 GitLab 保留了以下补充：

- **Visual Design**：11 张初始草稿、四种图片圆角对比、Next page 与页脚之间的留白说明和完整截图，以及更完整的丝带与历史设计展示。已在 dayquay 预览页核对草稿、圆角对比和留白展示。
- **Bomb Cat**：创建与加入在线房间、大厅、连接状态及 PeerJS 联机源码；源码与重建产物均保留在 GitHub。
- **Sustainability**：恢复 10 月 21 日晚紧急回退覆盖的 Tracker 汇总，区分 66 位参与者、38 份来源档案和 78 条反馈，展示 10 项框架 SDG 的 SET / DEVELOP / GROW 分层；长期路径保留待验证说明。
- **素材与工程资料**：保留可构建的游戏与虚拟实验室源码、本地素材、来源记录及双语开发文档。

具体文件、回退时间线和发布边界见[版本差异说明](docs/deployment.md#预览版与官方-gitlab-的内容差异)。

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
  <a href="https://2026.igem.wiki/jlu-fbh/"><strong>Wiki ↗</strong></a>
  &nbsp;·&nbsp;
  <a href="#site-modules-and-pages">Pages</a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp;
  <a href="CONTRIBUTING.en.md">Contribute</a>
</p>

## Project overview

**CirCure** is a synthetic biology research project by JLU-FBH exploring engineered circular RNA (**circRNA**) as a platform for a multi-target therapeutic vaccine against triple-negative breast cancer (**TNBC**). As the team’s official Wiki for the 2026 International Genetically Engineered Machine Competition (**iGEM**), this website documents the work from defining the research question and developing the design to experimental investigation and computational modeling. It also traces how societal needs, public engagement, and sustainability inform the project’s development.

The homepage uses hand-drawn illustrations and scroll animations to introduce TNBC and the circRNA design. The experimental, modeling, and human practices pages describe the team’s work, methods, and references. A molecular structure viewer, virtual laboratory, and science games let readers examine molecular structures, try experimental procedures, and learn about the biology behind the project.

This repository contains the website source, page text, illustrations, asset source records, and the source code for the virtual laboratory and games. The main site uses React, TypeScript, and Vite, with page content, asset references, and interactive components maintained separately. The documentation below explains how to run the project, find files, and deploy the site.

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

## Project links

**Live Wiki** · Published site and project showcase<br />[https://2026.igem.wiki/jlu-fbh/](https://2026.igem.wiki/jlu-fbh/)

**Development preview** · Ongoing page, interaction, and design updates<br />[https://wiki.dayquay.com/jlu-fbh/](https://wiki.dayquay.com/jlu-fbh/)

**Project Promotion Video** · Hosted on the official iGEM video platform<br />[https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16](https://video.igem.org/w/m8LNK1BBUzt9hSXsHRqH16)

**Official GitLab** · Official source and release history<br />[https://gitlab.igem.org/2026/jlu-fbh](https://gitlab.igem.org/2026/jlu-fbh)

**Team dashboard · Team 6056** · Team administration, uploads, and deliverables<br />[https://teams.igem.org/6056](https://teams.igem.org/6056)

Development and Pull Requests take place in this GitHub repository. See the [deployment guide](docs/deployment.en.md) for the roles of GitHub, official GitLab, and website releases.

### Preview and published versions

`wiki.dayquay.com` is the development preview and includes content that has not been synchronized to official GitLab. The competition website is `2026.igem.wiki/jlu-fbh/`. The environments deploy independently; GitHub changes still need a preview deployment.

As of 2026-10-22, the GitHub development version retains these additions relative to official GitLab:

- **Visual Design**: eleven initial sketches, four image-corner comparisons, complete screenshots explaining the gap between Next page and the footer, and additional ribbon and historical design studies. The sketches, corner comparison, and spacing study were also checked on the live dayquay preview.
- **Bomb Cat**: online room creation and joining, the lobby, connection state, and PeerJS networking source, together with rebuilt runtime assets.
- **Sustainability**: restored Tracker summaries overwritten by the October 21 emergency rollback, distinguishing 66 participants, 38 source profiles, and 78 feedback records, with ten framework SDGs grouped into SET / DEVELOP / GROW. Long-term pathways retain their evidence limitations.
- **Assets and engineering resources**: buildable game and virtual laboratory source, local assets, provenance, and bilingual development documentation.

See the [version comparison](docs/deployment.en.md#preview-and-official-gitlab-content-differences) for source paths, the rollback timeline, and deployment boundaries.

## Start here

- Run the project: [Quick start](#quick-start)
- Develop, check, and build: [Development guide](docs/development.en.md)
- Find the right files: [Repository map](docs/repository-layout.en.md)
- Understand hosting environments: [Deployment guide](docs/deployment.en.md)
- Maintain images, manuscripts, CDN mappings, and upload batches: [Asset guide](docs/assets.en.md)
- Browse documentation: [Documentation index](docs/README.en.md)
- Prepare a contribution: [Contributing](CONTRIBUTING.en.md)

On this page: [Technology](#technology-and-core-dependencies) · [Architecture](#architecture-and-development-principles) · [Site map](#site-modules-and-pages) · [Features](#interaction-and-engineering-features) · [Repository structure](#repository-structure-and-build-boundaries) · [Editing guide](#common-editing-locations) · [Deployment](#continuous-integration-and-hosting) · [License](#license-and-attribution)

## Technology and core dependencies

This table summarizes the current technology choices. Root dependency declarations live in [package.json](package.json); lockfiles record resolved versions. Standalone applications maintain their own dependencies.

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

New pages follow this structure. Existing `src/data/` files include both root-level files and module directories. Follow actual imports when maintaining an existing page and migrate it as needed.

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

This map describes the website's organization. Each page provides the evidence, assumptions, and scope for its scientific content.

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

ECharts and related components provide model charts, legends, and interactive tooltips. These viewers present the data and models described on the page; structural visualization alone does not establish experimental validation.

### Navigation, cursor, and reading tools

Shared features include responsive navigation, in-page search, back-to-top controls, the footer, and a sheep cursor. The cursor is enabled according to fine-pointer, hover, and reduced-motion settings, while applicable input areas retain native cursor behavior.

Changes to shared components should cover transitions between Home and article pages, narrow viewports, keyboard use, and reduced-motion preferences.

### Asset sources and official hosting

Published pages use official images, fonts, and attachments on `static.igem.wiki`. The repository also retains local assets, manuscripts, and source mappings. Use the relevant asset dictionary and registry, and retain official hosting entries for videos and standalone applications.

Upload copies and historical checks live in `delivery/uploads/`. See the [asset guide](docs/assets.en.md) for source files, expected URLs, upload records, and maintenance.

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

The root files `index.html`, `visual-design-study.html`, `archive-navigation-study.html`, and `archive-recognition-study.html` are active build entries. Review references before moving files whose names contain `archive`.

`.env` contains existing team metadata and build inputs; keep secrets out of it. `.dockerignore` filters local build contexts. See the [repository map](docs/repository-layout.en.md) for other root files and migration records.

### Build boundaries

| Application                | Development entry                                    | Root build behavior                                                                   |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Wiki                       | `src/`, `yarn dev`                                   | Type-check, build four HTML entries, and generate path mappings                       |
| Breast Guardian / Bomb Cat | [games/README.en.md](games/README.en.md)             | Publish checked-in files in `public/game-assets/`; game source is built separately    |
| Virtual Laboratory         | [virtual-lab/README.en.md](virtual-lab/README.en.md) | Embed the official laboratory deployment; build and release the laboratory separately |

Subprojects maintain their own dependencies, lockfiles, and licenses. Read their README files before development. Keep laboratory output in its own project and explicitly update the Wiki's runtime game files when publishing a rebuilt game.

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

Importers and asset generators can overwrite content or indexes. Read their instructions before running them. Changes to scientific manuscripts, experimental parameters, formulas, and evaluation metrics require content-owner review.

## Quick start

### Environment and dependencies

For the Wiki, use Node.js 22.12+ within the 22.x release family and Yarn Classic 1.22.22, matching the official CI's Node 22 major version. `package.json` declares the package manager.

From the repository root:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open the URL printed by the terminal, normally `http://localhost:5173/jlu-fbh/`.

The root npm lockfile is also retained. For npm, use `npm ci` and `npm run <script>`. Use one installation workflow per dependency directory and handle dependency upgrades separately.

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

The copy takes place in the CI workspace. Keep the resulting deployment directory out of local source commits. See the [deployment guide](docs/deployment.en.md) for release contents and source-only asset checks.

### Yarn Classic and installation consistency

`package.json` declares `yarn@1.22.22`; the official pipeline uses `--frozen-lockfile`. Retain this declaration to avoid lockfile migration by another Yarn major version. Subprojects use their own dependencies and lockfiles.

### One output tree and path mapping

`scripts/postbuild-slug.mjs` reads Vite's resolved base and generates Cloudflare `_redirects` inside a single `dist/` output tree. Core rules for the default team path are:

```text
/ /jlu-fbh/ 302
/jlu-fbh /jlu-fbh/ 301
/jlu-fbh/* /:splat 200
```

Additional rules canonicalize HTML and directory entries. Vite preview and official GitLab Pages mount output at the base path. [wrangler.json](wrangler.json) points Cloudflare at `./dist` with SPA fallback. An extra `dist/jlu-fbh/` copy is unnecessary.

When needed, the script generates `.assetsignore` to exclude files above 25 MiB from Cloudflare uploads. Local files and GitLab output remain intact; review actual references and CDN URLs for excluded resources.

GitHub Pages does not read Cloudflare's `_redirects`. Configure its mount path and deep-route fallback separately if using that host.

### TypeScript asset indexes and configuration

Asset dictionaries such as `contributionAssets.ts`, `resultsAssets.ts`, and `designAssets.ts` connect resources to pages. Earlier fixes addressed broad key indexing and `never` inference. Continue validating changes through TypeScript and build checks.

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

### Research platforms and tools

<p align="center">
  <img src="docs/media/readme-acknowledgements.svg" alt="Acknowledgements from the Wiki footer: Core Facility, Institute of Translational Medicine, Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger." width="640" />
</p>

These marks come from the existing Wiki footer. Research platforms include the Core Facility and Institute of Translational Medicine at the First Hospital of Jilin University. Tools and other supporters include Charles River, BioRender, MathWorks, Lark, Grammarly, and Schrödinger.

## License and attribution

The root repository uses [CC BY 4.0](LICENSE). Retain the required attribution and license terms when using, sharing, or modifying the work. Third-party assets, dependencies, and standalone applications retain their own licensing requirements.

Preserve the shared footer's license notice and official GitLab repository link. AI-assisted work also follows [Contributing](CONTRIBUTING.en.md) and the [responsible-use guidance](.claude/RESPONSIBLE_AI_USE.en.md).

<p align="center"><a href="#readme-en">↑ Back to English</a> · <a href="#readme-zh">阅读中文版</a></p>
