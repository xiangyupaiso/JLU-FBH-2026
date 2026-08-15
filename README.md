# Team JLU-FBH 2026 Wiki

This repository uses `TypeScript` and `React` to manage the wikis.

This repository **MUST** contain all coding assets to generate your team's wiki
(HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts **MUST** be stored on `static.igem.wiki` using
[the uploads tool](https://teams.igem.org/go/deliverables/wiki/uploads), and Videos **must** be embedded
from [iGEM Video Universe](https://video.igem.org); see [the Video & Audio page](https://teams.igem.org/go/deliverables/wiki/videos-and-audios) for guidance on adding video and audio.

**Everything your wiki loads (CSS, JavaScript, fonts, images) must be served from
iGEM infrastructure.** Do not link to external or third-party CDNs (for example
Google Fonts, jsDelivr, cdnjs) — upload the files you need via
[the uploads tool](https://teams.igem.org/go/deliverables/wiki/uploads) and reference them from `static.igem.wiki`
instead.

For up-to-date requirements, resources, help and guidance, visit
[teams.igem.org/go/deliverables/wiki](https://teams.igem.org/go/deliverables/wiki).

> **Using an AI assistant (e.g. Claude Code)?** Please read
> [.claude/RESPONSIBLE_AI_USE.md](.claude/RESPONSIBLE_AI_USE.md) first. You remain
> fully responsible for everything you publish: never fabricate scientific
> results, data, or citations.

## Getting Started

Before refactoring the code of this template to suit your wiki needs, please make sure you have the ability to use React
for web development.

1. Clone the repository:
   ```bash
   git clone https://gitlab.igem.org/2026/jlu-fbh
   cd jlu-fbh
   ```
2. Install the dependencies:

   ```bash
   yarn install
   ```

   ### Important:

   Ensure you are using Node.js version `>=20.19.0` (Node 22 LTS recommended) to avoid compatibility issues.
   You can check your Node version by running `node -v` in your terminal.

3. Start the development server:
   ```bash
   yarn run dev
   ```
4. Navigate to the files you wish to edit:
   - The main App component can be found under `src/containers/App`
   - Pre-built components are located under `src/components`
   - Individual pages can be modified in the `src/pages.ts`
   - Content pages can be updated in the `src/contents`
5. Once you are done, save the changes by **committing** them to the _main branch_ of the repository
6. An automated script will build, test and deploy your wiki to the iGEM server

## About This Template

### Files

Below is the structure of important files and directories in this project:

    ├── README.md            -> The file you are currently reading
    ├── index.html           -> Single HTML file for the wiki
    ├── package.json         -> Manages project metadata and dependencies
    ├── public/              -> Static assets (images, PDFs, game builds)
    │   ├── assets/          -> Wiki images, protocol PDFs, documentation
    │   └── game-assets/     -> Game builds (Breast Guardian, Bomb Cat)
    ├── src/
    │   ├── assets/          -> Application-specific assets
    │   ├── components/      -> React components
    │   │   ├── wiki/        -> Wiki page components (DryLab, WetLab, HP, Sustainability)
    │   │   ├── BombCatGame/ -> Bomb Cat mini-game component
    │   │   └── BreastGuardianGame/ -> Breast Guardian game component
    │   ├── containers/
    │   │   └── App/         -> Main React application container
    │   ├── contents/        -> Page content components (iGEM deliverable pages)
    │   ├── data/            -> Data configuration files (Sustainability, Protocols, etc.)
    │   ├── hooks/           -> Custom React hooks
    │   ├── project-preview/ -> Project preview page components
    │   ├── styles/          -> Global CSS stylesheets
    │   ├── main.tsx         -> Entry point of the wiki application
    │   ├── pages.ts         -> Page definition and path mapping
    │   └── utils/           -> Utility functions
    ├── tsconfig.json        -> Configures TypeScript options
    ├── tsconfig.node.json   -> TypeScript settings for Node.js
    ├── vite.config.ts       -> Configuration for the Vite tool
    └── yarn.lock            -> Yarn lock file for dependency management

### Technologies

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org): Extends JavaScript by adding types
- [Vite](https://vitejs.dev): Frontend tooling that provides faster and leaner development builds
- [Bootstrap](https://getbootstrap.com): Framework for building responsive, mobile-first sites
- [React Bootstrap](https://react-bootstrap.github.io): Bootstrap components built with React
- [React Router](https://reactrouter.com): Declarative routing for React applications
- (Optional) [Prettier](https://prettier.io): Code formatter


---

<!-- 以下内容同步自 HE-JINGCHEN/wiki 仓库 -->

# CirCure iGEM Project Wiki

本仓库用于管理 CirCure 团队参加 iGEM 的维基站点版本迭代。所有可交付的页面版本按文件夹隔离，便于回溯、对比与评审。

---

## 仓库结构

```
├── circure-design-system/        # 设计系统（tokens.json + HTML 预览）
│   ├── circure-design-system.html
│   └── tokens.json
├── circure-igem-wiki/            # v2 完整单页版（Neo-TNBsee 2026）
│   ├── index.html                # 单页应用入口
│   ├── styles.css                # 视觉系统、布局与动画
│   ├── script.js                 # 交互逻辑：FLIP 导航、粒子场、滚动揭示
│   ├── server.mjs                # 零依赖本地开发服务器
│   ├── package.json              # 项目元数据
│   └── assets/                   # 图片与媒体资源
│       ├── circure-logo-*        # 品牌标识（PNG/WebP 双格式）
│       ├── igem-hero-v2.*        # 首屏主视觉
│       ├── igem-closing-v2.*     # 底部终场图
│       ├── igem-galaxy-*         # 粒子场星系素材
│       ├── beth-*                # 角色 Beth 故事线插图
│       ├── nav-*                 # 导航下拉面板背景图
│       └── igem-texture-*.jpg    # 页面纹理
├── circure-story-nav-local/      # 叙事型官网首页原型（Story Navigation）
│   ├── index.html                # 九章节滚动叙事主页
│   ├── styles.css                # 视觉系统样式（CSS 变量 + clip-path 动画）
│   ├── script.js                 # 交互逻辑（弹簧物理、滚动驱动、导航状态机）
│   ├── server.mjs                # Node.js 零依赖静态服务器
│   ├── STYLE_GUIDE.md            # 人文科学编辑风视觉规范
│   ├── README.md                 # 技术栈分析与版本管理
│   └── assets/                   # 徽章、丝带、导航卡片图
├── hp-testimonial-cards-local/   # v1 多页原型版（早期迭代）
│   ├── index.html                # Human Practices 页面原型
│   ├── project.html              # Project 页面（The Living Ring）
│   ├── dry-lab.html              # Dry Lab 模型手稿
│   ├── wet-lab.html              # Wet Lab 页面
│   ├── assets/                   # 生成图片与插图
│   ├── DRY_LAB_RESEARCH.md       # Dry Lab 研究与审计笔记
│   ├── HP_BEST_PRACTICES_RESEARCH.md  # HP 获奖与评审模式研究
│   ├── HP_FIELD_KIT.md           # 利益相关者参与模板
│   ├── PROJECT_PAGE_RESEARCH.md  # Project 页面设计原理
│   └── README.md                 # v1 详细项目说明
├── public/                       # 静态资源目录（React 应用使用）
│   ├── assets/
│   │   ├── docs/                 # PDF 文档（Sustainability 工具包）
│   │   ├── wiki/                 # Wiki 页面插图
│   │   ├── protocols/            # 实验协议 PDF
│   │   ├── story-nav/            # 叙事导航素材
│   │   ├── footer/               # 页脚标识
│   │   └── jlu-fbh-crest.png     # 校徽
│   └── game-assets/              # 游戏资源
│       ├── assets/               # Breast Guardian 游戏素材
│       │   ├── characters/       # 角色立绘（主角、家属、医疗人员、细胞等）
│       │   ├── scenes/           # 场景背景图
│       │   └── loading/          # 加载动画
│       └── bomb-cat/             # Bomb Cat 小游戏构建产物
├── src/                          # React 应用源代码
│   ├── assets/                   # 应用内引用资源
│   ├── components/               # React 组件
│   │   ├── wiki/                 # Wiki 专用组件（DryLab、WetLab、HP、Sustainability 等）
│   │   ├── BombCatGame/          # Bomb Cat 游戏组件
│   │   └── BreastGuardianGame/   # Breast Guardian 游戏组件
│   ├── containers/
│   │   └── App/                  # 主应用容器
│   ├── contents/                 # 页面内容组件（对应 iGEM 各交付页面）
│   ├── data/                     # 数据配置文件（Sustainability、Protocol、Project 等）
│   ├── hooks/                    # 自定义 React Hooks
│   ├── project-preview/          # 项目预览页面组件
│   ├── styles/                   # 全局样式文件
│   └── utils/                    # 工具函数
├── 文案集/                       # 文案与文档资料
│   └── Human Practice/
│       └── sustainability/       # Sustainability 相关文案、PDF 工具包及图片
├── index.html                    # Vite 入口 HTML
├── package.json                  # 项目依赖配置
├── tsconfig.json                 # TypeScript 配置
├── vite.config.ts                # Vite 构建配置
└── README.md                     # 本文件（仓库总览）
```

---

## 版本说明

| 版本 | 文件夹 | 说明 |
|------|--------|------|
| v1 | `hp-testimonial-cards-local/` | 早期多页原型，含 HP、Project、Dry Lab、Wet Lab 独立页面 |
| Story Nav | `circure-story-nav-local/` | 叙事型官网首页原型，九章节滚动叙事 + 粉线导航器 + 弹簧物理动效 |
| v2 | `circure-igem-wiki/` | 完整单页应用版，Neo-TNBsee 主线，Beth 叙事，粒子场星系，FLIP 导航 |
| Design System | `circure-design-system/` | 设计令牌（tokens.json）与视觉系统预览 |
| React App (Main) | `src/` + `public/` | 当前主分支使用的 React + TypeScript + Vite 应用，包含完整 Wiki 页面、游戏组件、Sustainability 数据可视化等 |

---

## 技术栈分析（v2 完整版）

### 核心架构
| 层级 | 技术选择 | 说明 |
|------|----------|------|
| 标记层 | HTML5 (语义化) | 原生标签 + ARIA 可访问属性，无模板引擎 |
| 样式层 | CSS3 (自定义属性 + Grid/Flex) | 无预处理器，纯原生实现响应式与动画 |
| 逻辑层 | Vanilla JavaScript (ES6+) | 零前端框架，自研模块化交互系统 |
| 服务层 | Node.js 原生 HTTP | 零依赖，单文件静态服务器 |

### 关键实现细节

**导航动画**
- 采用原生 WAAPI（Web Animations API）实现 FLIP（First Last Invert Play）状态补间
- 自写 `runFlip` 统一驱动 logo、导航链接、背景胶囊和 dropdown 的形变动画
- 替代方案对比：参考站使用 GSAP Flip 插件；本项目遵循 KISS 原则，用原生 API 复现核心效果，避免引入 50KB+ 的动画库

**粒子场星系**
- 32 个图块由持续 ticker 驱动，参数：`speed: 0.15`、`ease: 0.1`、`scaleEase: 0.25`
- 每个图块拥有独立速度（0.8–1.2x）和 Z 深度（−200 ~ 200）
- 离开视口边界后回收至另一侧，形成无限循环
- 使用 `perspective: 800px` 营造 3D 纵深感

**滚动揭示系统**
- 基于 Intersection Observer 的 `reveal` 类切换
- 统一由 `updateScrollState` 驱动导航形态、滚动方向和章节激活状态

**性能策略**
- 设备能力检测：`navigator.hardwareConcurrency` / `navigator.deviceMemory` 判定低性能设备并降级动画
- 图片格式：提供 WebP + PNG 双格式，优先使用有损压缩的 WebP
- 被动事件监听：`passive: true` 的滚动监听器减少主线程阻塞

### 设计原则
- **KISS**：用原生 WAAPI 实现 FLIP，避免为一个导航动效引入完整 GSAP
- **YAGNI**：只实现参考站当前可见交互，不预留复杂路由或 CMS
- **DRY**：滚动状态统一由 `updateScrollState` 驱动，所有导航形态走同一个 `runFlip`
- **SOLID**：导航动画、滚动 reveal、移动菜单和 dropdown 事件各自职责独立

---

## 版本管理策略

本仓库采用**文件夹级版本隔离**：

- 每个主要迭代新建文件夹，如 `v1-*/`、`v2-*/`
- 每个文件夹独立可运行，确保历史版本随时可回溯
- 根目录 `README.md` 始终为最新仓库总览

提交规范遵循 [Conventional Commits](https://www.conventionalcommits.org/)：
- `feat:` 新功能或页面区块
- `fix:` 样式或交互修复
- `docs:` README 或注释更新
- `refactor:` 代码重构（无功能变更）
- `assets:` 图片或媒体资源更新

---

## 本地运行

### React 主应用（当前主分支）
```bash
yarn install
yarn run dev
```
然后打开 `http://localhost:5173`。

### v2 完整版
```bash
cd circure-igem-wiki
npm run dev
```
然后打开 `http://127.0.0.1:4173`。

### Story Navigation
```bash
cd circure-story-nav-local
npm run dev
```
然后打开 `http://127.0.0.1:5183`。

### v1 原型版
```bash
cd hp-testimonial-cards-local
python3 -m http.server 5188
```
然后打开 `http://localhost:5188/index.html`。

### Design System 预览
```bash
cd circure-design-system
# 直接在浏览器中打开 circure-design-system.html
```

全部关键图片均为本地资源，不依赖外部 CDN，可离线运行。

---

## 项目背景

**CirCure** 是面向三阴性乳腺癌（TNBC）疫苗靶点发现的 iGEM 2026 项目。核心工具 **Neo-TNBsee** 提供可复现的证据评估工作流，将已知靶点（A-arm）与患者来源新候选物（B1-arm）纳入同一五维证据矩阵进行比较。

站点以角色 **Beth** 的证据之旅为叙事线索，贯穿问题提出、证据权衡、工程决策到人文关怀的完整研究叙事。

---

*Content on this site is licensed under a Creative Commons Attribution 4.0 International license.*