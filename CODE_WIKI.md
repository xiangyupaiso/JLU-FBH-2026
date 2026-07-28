# CirCure iGEM 2026 — Code Wiki

> 本文档为 CirCure 团队参加 iGEM 2026 的仓库级 Code Wiki，覆盖项目整体架构、主要模块职责、关键类与函数说明、依赖关系以及项目运行方式。
>
> - 仓库根：`/workspace`
> - 主部署目标：iGEM GitLab Pages（`https://${year}.igem.wiki/${team-slug}/`）
> - 团队：`JLU-FBH`（Year 2026，Team ID 6056）
> - 许可：CC BY 4.0

---

## 目录

1. [项目概览](#1-项目概览)
2. [仓库整体架构](#2-仓库整体架构)
3. [主应用 — React/Vite Wiki（仓库根）](#3-主应用--reactvite-wiki仓库根)
4. [子项目 — circure-igem-wiki（v2 单页版）](#4-子项目--circure-igem-wikiv2-单页版)
5. [子项目 — circure-story-nav-local（叙事导航原型）](#5-子项目--circure-story-nav-local叙事导航原型)
6. [子项目 — hp-testimonial-cards-local（v1 多页原型）](#6-子项目--hp-testimonial-cards-localv1-多页原型)
7. [依赖关系总览](#7-依赖关系总览)
8. [项目运行方式](#8-项目运行方式)
9. [构建与部署](#9-构建与部署)
10. [代码规范与守则](#10-代码规范与守则)

---

## 1. 项目概览

**CirCure** 是面向三阴性乳腺癌（TNBC）疫苗靶点发现的 iGEM 2026 项目，核心工具 **Neo-TNBsee** 提供可复现的证据评估工作流，将已知靶点（A-arm）与患者来源新候选物（B1-arm）纳入同一五维证据矩阵进行比较。站点以角色 **Beth** 的证据之旅为叙事线索，贯穿问题提出、证据权衡、工程决策到人文关怀的完整研究叙事。

### 仓库定位

本仓库同时承载两类产物：

| 产物 | 位置 | 角色 |
|------|------|------|
| **可部署的 iGEM Wiki 模板** | 仓库根（`src/`、`index.html`、`vite.config.ts` 等） | 基于官方模板的 React + Vite + TypeScript 工程，最终通过 GitLab CI 部署到 iGEM 站点 |
| **设计原型与版本快照** | `circure-igem-wiki/`、`circure-story-nav-local/`、`hp-testimonial-cards-local/` | 零依赖静态原型，用于设计探索、版本回溯与评审；与主应用独立运行，不参与 CI 部署 |

### 技术栈分层

| 层级 | 主应用（部署） | 原型子项目 |
|------|----------------|------------|
| 标记层 | `index.html`（Vite SPA 入口） | 原生 HTML5 + ARIA |
| 框架层 | React 19 + React Router 7 + React Bootstrap 2 | 无框架 |
| 语言层 | TypeScript 5.9（strict） | 原生 ES6+ JavaScript |
| 构建层 | Vite 7 | 无构建步骤 |
| 样式层 | Bootstrap 5 + 自定义 `App.css` | 纯原生 CSS3（变量、Grid/Flex、clip-path） |
| 服务层 | Vite dev server / GitLab Pages | Node.js 原生 `http`（零依赖单文件服务器） |

---

## 2. 仓库整体架构

```
/workspace
├── src/                                # 主应用源码（React + TS）
│   ├── assets/                         # 本地媒体资源（按用途分桶）
│   │   ├── footer/                     # footer logo & closing visuals
│   │   ├── story-nav/                  # story-nav emblem / ribbon
│   │   └── wiki/                       # wiki 页面图片（HP/hardware/model 等）
│   ├── components/
│   │   ├── BackToTop.tsx               # 滚动到顶部浮动按钮（带磁吸效果）
│   │   ├── Footer.tsx                  # 站点页脚（含许可声明 + 仓库链接，勿改）
│   │   ├── Header.tsx                  # 页面 hero 区
│   │   ├── Inspirations.tsx            # 灵感参考侧栏
│   │   ├── Navbar.tsx                  # 顶部固定导航栏
│   │   ├── NotFound.tsx                # 404 兜底
│   │   └── wiki/                       # 可复用 Wiki 页面体系
│   │       ├── WikiPage.tsx            #   通用 Wiki 页面壳（hero + 章节侧栏 + features）
│   │       ├── WikiLineSidebar.tsx     #   章节侧边栏导航
│   │       ├── HumanPracticesPage.tsx  #   HumanPractices 页面装配
│   │       ├── wikiPageTypes.ts        #   Wiki 内容类型定义（WikiPageContent 等）
│   │       └── features/               #   按页面拆分的特性块
│   │           ├── DryLabFeatures.tsx
│   │           ├── EngagementFeatures.tsx
│   │           ├── HardwareEvidenceFeatures.tsx
│   │           ├── ModelEvidenceFeatures.tsx
│   │           ├── ProjectFeatures.tsx
│   │           ├── SoftwareEvidenceFeatures.tsx
│   │           └── WetLabFeatures.tsx
│   ├── containers/
│   │   └── App/                        # 应用容器（路由 + 布局）
│   │       ├── App.tsx
│   │       └── App.css
│   ├── contents/                       # 各页面内容组件（19 个）
│   │   ├── index.tsx                   # 内容组件统一导出
│   │   ├── home.tsx                    # 首页：九章节滚动叙事 + GSAP 动画
│   │   ├── members.tsx
│   │   ├── description.tsx
│   │   ├── engineering.tsx
│   │   ├── results.tsx
│   │   ├── contribution.tsx
│   │   ├── experiments.tsx
│   │   ├── notebook.tsx
│   │   ├── measurement.tsx
│   │   ├── alternative-platform.tsx
│   │   ├── safety-and-security.tsx
│   │   ├── model.tsx
│   │   ├── software.tsx
│   │   ├── hardware.tsx
│   │   ├── entrepreneurship.tsx
│   │   ├── human-practices.tsx
│   │   ├── education.tsx
│   │   ├── inclusivity.tsx
│   │   └── sustainability.tsx
│   ├── data/                           # Wiki 页面数据源（与 contents 解耦）
│   │   ├── dryLabPages.ts              #   Model / Software / Hardware 内容
│   │   ├── engagementPages.ts          #   HP / Education / Inclusivity / Sustainability / Entrepreneurship
│   │   ├── hardwarePage.ts            #   Hardware 单页内容
│   │   ├── modelPage.ts               #   Model 单页内容
│   │   ├── projectPages.ts            #   Description / Engineering / Results / Contribution
│   │   ├── softwarePage.ts            #   Software 单页内容
│   │   └── wetLabPages.ts             #   Experiments / Notebook / Measurement / Alt / Safety
│   ├── hooks/                         # React Hooks（动画与交互逻辑）
│   │   ├── useStoryNavAnimation.ts     #   首页 GSAP ScrollTrigger 滚动叙事动画
│   │   └── useWikiPageMotion.ts       #   Wiki 页面章节激活态 + 滚动揭示
│   ├── styles/                        # 模块化 CSS（设计令牌 + 各页面样式）
│   │   ├── circure-tokens.css         #   设计令牌（CSS 变量：色板 / 字号 / 间距 / header-height）
│   │   ├── circure-home.css           #   首页样式（消费 --*-progress 变量）
│   │   ├── circure-nav.css            #   导航栏样式
│   │   ├── circure-footer.css         #   页脚样式
│   │   ├── circure-back-to-top.css    #   返回顶部按钮样式
│   │   ├── hardware-page.css          #   Hardware 子页样式
│   │   ├── model-page.css             #   Model 子页样式
│   │   ├── software-page.css          #   Software 子页样式
│   │   ├── human-practices-local.css  #   HumanPractices 子页样式
│   │   ├── wiki-features.css          #   features/* 共用样式
│   │   └── wiki-rebuild.css           #   WikiPage 主壳布局样式
│   ├── utils/                         # 工具函数
│   │   ├── index.ts                   #   桶导出
│   │   ├── getPathMapping.ts          #   pages.ts → path 映射
│   │   └── stringToSlug.ts            #   字符串 → URL slug
│   ├── main.tsx                       # React 入口
│   ├── pages.ts                       # 页面定义与路径映射（含 FolderNavMeta）
│   └── vite-env.d.ts                  # Vite 环境变量类型
├── home-gsap-refactor/                 # 首页 GSAP 重构研究工作目录
│   ├── GSAP重构映射清单.md             #   原生 rAF → GSAP 映射清单
│   ├── verify_gsap.py                 #   动画验证脚本
│   └── verify_*.png                   #   验证截图（pin/opening/bottom）
├── circure-igem-wiki/                  # v2 完整单页版原型（Neo-TNBsee 主线，vanilla JS）
├── circure-story-nav-local/            # 叙事型官网首页原型（vanilla JS）
├── hp-testimonial-cards-local/         # v1 多页原型版（vanilla HTML/CSS/JS）
├── .claude/                            # AI 助手使用守则
├── .env                                # Vite 环境变量（团队信息）
├── .gitlab-ci.yml                      # GitLab CI 部署流水线
├── eslint.config.js                    # ESLint 9 flat config
├── tsconfig.json                       # TypeScript 配置（src）
├── tsconfig.node.json                  # TypeScript 配置（Vite/Node）
├── vite.config.ts                      # Vite 配置（base 路径由团队名 slug 决定）
├── index.html                          # SPA HTML 模板
├── package.json                        # 依赖与脚本（yarn）
├── yarn.lock                           # 锁文件
├── LICENSE                             # CC BY 4.0
├── CLAUDE.md                           # AI 助手使用指南
├── CODE_WIKI.md                        # 本文件
├── DRY_LAB_BEST_WIKI_COMPARE_AND_MIGRATION_PLAN.md  # Dry Lab 内容迁移计划
└── README.md                           # 仓库总览
```

### 架构分层关系

```
                    ┌─────────────────────────────────┐
                    │  index.html (Vite SPA 入口)     │
                    └─────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────────┐
                    │  src/main.tsx                   │
                    │  - ReactDOM.createRoot          │
                    │  - BrowserRouter(base=BASE_URL) │
                    └─────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────────┐
                    │  containers/App/App.tsx         │
                    │  - 读取 pages.ts 路由映射       │
                    │  - 渲染 Navbar/Header/Routes/Footer│
                    └─────────────────────────────────┘
              ┌──────────┬───────────┬───────────┐
              ▼          ▼           ▼           ▼
        components/  contents/   pages.ts    utils/
        (UI 组件)   (页面内容)  (路由定义)  (路径/Slug 工具)
```

---

## 3. 主应用 — React/Vite Wiki（仓库根）

### 3.1 入口与启动流程

#### `index.html`
SPA 模板，仅包含一个 `<div id="root">` 与对 `/src/main.tsx` 的模块引用。`<title>` 通过 Vite 的 `%VAR%` 占位符替换为 `${VITE_TEAM_NAME} - iGEM ${VITE_TEAM_YEAR}`，favicon 指向 iGEM 官方资源。

#### `src/main.tsx`（[查看](file:///workspace/src/main.tsx)）
React 应用入口。核心职责：
- 使用 `ReactDOM.createRoot` 将根组件挂载到 `#root`
- 包裹 `<React.StrictMode>` 用于开发期检测
- 包裹 `<BrowserRouter basename={import.meta.env.BASE_URL}>`，`basename` 由 Vite 配置中的团队名 slug 推导（如 `/jlu-fbh/`）

### 3.2 应用容器

#### `src/containers/App/App.tsx`（[查看](file:///workspace/src/containers/App/App.tsx)）

应用层核心组件，负责整体布局与路由分发。

**关键逻辑：**
1. 调用 `getPathMapping()` 将扁平的 `Pages` 数组转换为 `{ path → { title, lead, component } }` 映射表
2. 从 `location.pathname` 中截掉团队 slug 前缀，得到当前页面路径 `currentPath`
3. 通过 `useEffect` 同步 `document.title` 为 `${title} | ${VITE_TEAM_NAME} - iGEM ${VITE_TEAM_YEAR}`
4. 渲染结构：`Navbar` → `Routes`（遍历 `pathMapping` 生成 `<Route>`，每个页面共享 `Header + container` 外壳）→ 通配符路由 → `Footer`

```tsx
// 简化示意
<Navbar />
<Routes>
  {Object.entries(pathMapping).map(([path, { title, lead, component }]) => (
    <Route path={path} element={<><Header .../><div className="container"><Component/></div></>} />
  ))}
  <Route path="*" element={<><Header title="Not Found"/><NotFound/></>} />
</Routes>
<Footer />
```

#### `src/containers/App/App.css`
全局样式补充：body 顶部 padding（为固定 Navbar 留位）、导航左对齐、`bg-dark`/`bg-hero` 色块、`bd-callout-*` 提示框、footer 链接样式。

### 3.3 页面定义与路由

#### `src/pages.ts`（[查看](file:///workspace/src/pages.ts)）

集中声明所有页面及其元数据，是路由与导航的数据源。

**类型定义：**
- `Base`：所有页面/文件夹共有的 `name` 字段
- `Folder`：包含 `folder: Page[]`，用于带下拉子菜单的分组（如 Project / Wet Lab / Dry Lab / Engagement）
- `Page`：包含 `title`、`path`、`component`（React 组件）、`lead`（页头副标题）

**页面结构（顶层条目）：**
| 顶层条目 | 类型 | 子页面 |
|----------|------|--------|
| Home | 单页 | — |
| Team | 单页 | — |
| Project | Folder | Description, Engineering, Results, Contribution |
| Wet Lab | Folder | Experiments, Notebook, Measurement, Alternative Platform, Safety and Security |
| Dry Lab | Folder | Model, Software, Hardware |
| Engagement | Folder | Entrepreneurship, Human Practices, Education, Inclusivity, Sustainability |

### 3.4 通用组件（`src/components/`）

| 组件 | 文件 | 职责 |
|------|------|------|
| `Navbar` | [Navbar.tsx](file:///workspace/src/components/Navbar.tsx) | 顶部固定导航栏。基于 React Bootstrap 的 `Navbar`/`Nav`/`NavDropdown`，遍历 `Pages`：`folder` 类型渲染为下拉菜单，`path` 类型渲染为 `Nav.Link`，全部通过 `react-router-dom` 的 `Link` 跳转。品牌名取自 `VITE_TEAM_NAME`。 |
| `Header` | [Header.tsx](file:///workspace/src/components/Header.tsx) | 页面顶部 hero 区，接收 `title` 与 `lead`，渲染大号标题 + 副标题，背景为 `bg-hero` 绿色块。 |
| `Footer` | [Footer.tsx](file:///workspace/src/components/Footer.tsx) | 站点底部。**关键约束：必须包含 CC BY 4.0 许可声明 + `gitlab.igem.org/${year}/${teamSlug}` 仓库链接**（iGEM 评审强制要求）。链接地址由 `stringToSlug(teamName)` 生成。 |
| `Inspirations` | [Inspirations.tsx](file:///workspace/src/components/Inspirations.tsx) | "灵感参考"侧栏组件，输入 `InspirationLink[]`（年份、团队名、页名），输出到历届 iGEM 团队 wiki 的外链。年份 < 2022 走旧版 `https://${year}.igem.org/Team:...`，否则走 `https://${year}.igem.wiki/${teamSlug}/${pageSlug}`。 |
| `BackToTop` | [BackToTop.tsx](file:///workspace/src/components/BackToTop.tsx) | 滚动到顶部的浮动按钮。带磁吸效果：指针在 `MAGNET_PADDING=80` 范围内时按钮向指针方向偏移，最大 `MAX_MAGNET_OFFSET=12`，强度 `MAGNET_STRENGTH=5`。样式见 `circure-back-to-top.css`。 |
| `NotFound` | [NotFound.tsx](file:///workspace/src/components/NotFound.tsx) | 404 兜底页，显示大号 "404" 与"Back to Home"按钮。 |

#### Wiki 子体系（`src/components/wiki/`）

为内容型 Wiki 页面提供的可复用页面体系，将"页面壳"、"数据"、"特性块"三者解耦：

| 文件 | 职责 |
|------|------|
| [WikiPage.tsx](file:///workspace/src/components/wiki/WikiPage.tsx) | 通用 Wiki 页面壳。接收 `content: WikiPageContent`、`heroVisual`、`features: FeatureMap`、`pageClassName`。组装 hero、章节侧栏、`ItemCollection`（支持 `editorial`/`steps`/`ledger`/`matrix`/`timeline` 五种布局）、特性块插槽。内部调用 `useWikiPageMotion` 同步章节激活态。 |
| [WikiLineSidebar.tsx](file:///workspace/src/components/wiki/WikiLineSidebar.tsx) | 章节侧边栏：竖向线条 + 锚点，跟随当前滚动位置高亮，点击平滑滚动到对应章节。 |
| [HumanPracticesPage.tsx](file:///workspace/src/components/wiki/HumanPracticesPage.tsx) | HumanPractices 专用页面装配，组合 `WikiPage` + HP 特性块。 |
| [wikiPageTypes.ts](file:///workspace/src/components/wiki/wikiPageTypes.ts) | Wiki 内容的类型定义：`WikiCategory`（project/wet-lab/dry-lab/engagement）、`WikiVisual`（17 种视觉主题）、`WikiSectionLayout`、`WikiFact`、`WikiItem`、`WikiSection`、`WikiPageContent`。 |

**特性块（`features/`）**：按 Wiki 类别拆分的 7 个组件，由对应 `src/data/*.ts` 数据驱动，按 `WikiPage` 约定的 key 注入到 `features` 插槽中：

| 特性块 | 数据源 | 用途 |
|--------|--------|------|
| `ProjectFeatures` | `projectPages.ts` | Description / Engineering / Results / Contribution |
| `WetLabFeatures` | `wetLabPages.ts` | Experiments / Notebook / Measurement / Alternative Platform / Safety |
| `DryLabFeatures` | `dryLabPages.ts` | Model / Software / Hardware |
| `ModelEvidenceFeatures` | `modelPage.ts` | Model 单页证据矩阵 |
| `SoftwareEvidenceFeatures` | `softwarePage.ts` | Software 单页证据矩阵 |
| `HardwareEvidenceFeatures` | `hardwarePage.ts` | Hardware 单页证据矩阵 |
| `EngagementFeatures` | `engagementPages.ts` | HP / Education / Inclusivity / Sustainability / Entrepreneurship |

### 3.5 内容页（`src/contents/`）

`src/contents/index.tsx` 统一导出 19 个页面组件，每个组件对应 `pages.ts` 中一个 `Page` 条目。

**两类实现：**

1. **`Home`（[home.tsx](file:///workspace/src/contents/home.tsx)）**：已实现完整的九章节滚动叙事。通过 `useRef` 收集 root + thread-guide + 9 个章节引用，传入 `useStoryNavAnimation` 驱动 GSAP 滚动动画。引用 `assets/story-nav/` 下的 emblem/ribbon 图片，样式见 `circure-home.css`。
2. **其他 18 个页面**：使用 `WikiPage` 体系装配（部分页面仍为模板占位）。每个页面从 `src/data/*.ts` 读取 `WikiPageContent`，按需注入对应 `features/*` 特性块。

**导出清单：**
```
Home, Members,
Description, Engineering, Results, Contribution,
Experiments, Notebook, Measurement, AlternativePlatform, SafetyAndSecurity,
Model, Software, Hardware,
Entrepreneurship, HumanPractices, Education, Inclusivity, Sustainability
```

### 3.6 数据源（`src/data/`）

Wiki 页面的内容数据源，与 `contents/*.tsx` 解耦。每个文件导出符合 `WikiPageContent`（见 `wikiPageTypes.ts`）的内容对象，由对应 `features/*.tsx` 组件消费。

| 文件 | 覆盖页面 |
|------|----------|
| [projectPages.ts](file:///workspace/src/data/projectPages.ts) | Description / Engineering / Results / Contribution |
| [wetLabPages.ts](file:///workspace/src/data/wetLabPages.ts) | Experiments / Notebook / Measurement / Alternative Platform / Safety |
| [dryLabPages.ts](file:///workspace/src/data/dryLabPages.ts) | Model / Software / Hardware |
| [engagementPages.ts](file:///workspace/src/data/engagementPages.ts) | HP / Education / Inclusivity / Sustainability / Entrepreneurship |
| [hardwarePage.ts](file:///workspace/src/data/hardwarePage.ts) | Hardware 单页内容 |
| [modelPage.ts](file:///workspace/src/data/modelPage.ts) | Model 单页内容 |
| [softwarePage.ts](file:///workspace/src/data/softwarePage.ts) | Software 单页内容 |

**`WikiPageContent` 关键字段**：`route`、`category`、`chapter`、`eyebrow`、`title`、`lede`、`boundary`（边界声明，不可越界）、`visual`（17 种视觉主题之一）、`visualSteps`、`sections: WikiSection[]`（每节含 `layout` 与 `items`）。

### 3.7 Hooks（`src/hooks/`）

#### `useStoryNavAnimation`（[查看](file:///workspace/src/hooks/useStoryNavAnimation.ts)）

**首页九章节滚动叙事动画的核心驱动**。从原生 `requestAnimationFrame + 9 路弹簧物理` 重构为 GSAP + ScrollTrigger，视觉契约不变（仍只写相同的 `--*-progress` CSS 变量，`circure-home.css` 的 `calc()` 消费端完全不动）。

**关键映射**：
- 原 rAF 脏标志循环 → 每节独立的 `ScrollTrigger` + `scrub`（0.40–0.60s，按章节节奏调参）
- 原 `smoothstep(clamp(...))` → 每个子变量一个 tween，ease `sine.inOut`（≈ smoothstep），用 timeline position parameter 放在 offset/range 位置
- 原 `withCompletionHold(p / 0.72)` → 每个 sticky timeline 把 tweens 塞进 `[0, 0.72]`，留 `[0.72, 1]` 为空（**Hold Zone**），让复合帧在最后 28% sticky 滚动内保持静止
- 原 `position: sticky` + `min-height: NNNsvh` → GSAP `pin: true`（pinSpacing 默认），原 min-height 跨度变为 `end: "+=(span − 100svh) + headerH"` 的 pin 距离
- `gsap.matchMedia()` 处理 reduced-motion 与 620px 断点
- `useGSAP` 的 context 在 unmount/Vite HMR 时回滚所有 ScrollTrigger，自动移除 pin-spacer，无遗留 DOM

**输入**：`StoryNavAnimationRefs`（root + threadGuide + 9 个章节 RefObject）。
**不负责**：导航菜单开闭（由 Navbar 自管）。

#### `useWikiPageMotion`（[查看](file:///workspace/src/hooks/useWikiPageMotion.ts)）

Wiki 页面通用动效 hook。职责：
- 跟踪当前激活章节（同步到侧边栏高亮 + URL hash）
- `prefers-reduced-motion` 降级
- 基于 `IntersectionObserver` 的滚动揭示
- 从 `--header-height` CSS 变量读取头部高度，计算 outline offset

**签名**：`useWikiPageMotion(rootRef, sectionIds: string[], route: string)`

### 3.8 样式（`src/styles/`）

模块化 CSS，按职责拆分。**设计令牌**集中在 `circure-tokens.css`（色板、字号、间距、`--header-height` 等 CSS 变量），其他文件消费这些变量。

| 文件 | 职责 |
|------|------|
| [circure-tokens.css](file:///workspace/src/styles/circure-tokens.css) | 设计令牌（CSS 变量定义） |
| [circure-home.css](file:///workspace/src/styles/circure-home.css) | 首页样式：消费 `useStoryNavAnimation` 写入的 `--*-progress` 变量 |
| [circure-nav.css](file:///workspace/src/styles/circure-nav.css) | 导航栏样式 |
| [circure-footer.css](file:///workspace/src/styles/circure-footer.css) | 页脚样式 |
| [circure-back-to-top.css](file:///workspace/src/styles/circure-back-to-top.css) | 返回顶部按钮样式 |
| [hardware-page.css](file:///workspace/src/styles/hardware-page.css) | Hardware 子页样式 |
| [model-page.css](file:///workspace/src/styles/model-page.css) | Model 子页样式 |
| [software-page.css](file:///workspace/src/styles/software-page.css) | Software 子页样式 |
| [human-practices-local.css](file:///workspace/src/styles/human-practices-local.css) | HumanPractices 子页样式 |
| [wiki-features.css](file:///workspace/src/styles/wiki-features.css) | `features/*` 共用样式 |
| [wiki-rebuild.css](file:///workspace/src/styles/wiki-rebuild.css) | `WikiPage` 主壳布局样式 |

> **首页动画契约**：`circure-home.css` 中的 `calc()` 表达式消费 `--*-progress` 自定义属性，由 `useStoryNavAnimation` 通过 GSAP tween 写入。改首页动效时，**CSS 消费端不动**，只改 hook 中的 tween 参数。

### 3.9 工具函数（`src/utils/`）

#### `stringToSlug(string: string): string`（[查看](file:///workspace/src/utils/stringToSlug.ts)）
将任意字符串转换为 URL slug。
- 转小写 → 非 `[a-z0-9-]` 字符替换为 `-` → 合并连续 `-` → 去除首尾 `-`
- 用途：生成 `gitlab.igem.org` 仓库路径、`basename`、团队 wiki URL

#### `getPathMapping()`（[查看](file:///workspace/src/utils/getPathMapping.ts)）
将 `Pages` 数组扁平化为 `{ [path]: { name, title, component, lead } }`。
- 顶层 `Page` 直接映射
- `Folder` 递归遍历其 `folder` 子项
- 跳过缺少 `path`/`component` 的条目

#### `src/utils/index.ts`
桶文件，重导出 `getPathMapping` 与 `stringToSlug`。

### 3.10 环境变量（`.env`）

```env
VITE_TEAM_ID=6056
VITE_TEAM_NAME=JLU-FBH
VITE_TEAM_YEAR=2026
```

类型定义见 `src/vite-env.d.ts`，通过 `import.meta.env.VITE_*` 在客户端代码中访问。

### 3.11 构建配置

#### `vite.config.ts`（[查看](file:///workspace/vite.config.ts)）
```ts
export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,  // /jlu-fbh/
    plugins: [react()],
  });
};
```
`base` 决定所有静态资源的 URL 前缀，必须与 GitLab Pages 的子路径一致。

#### `tsconfig.json`
- `target: ES2020`，`jsx: react-jsx`
- 严格模式：`strict`、`noUnusedLocals`、`noUnusedParameters`、`noFallthroughCasesInSwitch`
- 仅编译 `src/`，`noEmit: true`（Vite 接管打包）

#### `eslint.config.js`
ESLint 9 flat config，集成 `@eslint/js` + `typescript-eslint` + `react-hooks` + `react-refresh`，忽略 `dist`。

---

## 4. 子项目 — circure-igem-wiki（v2 单页版）

### 4.1 定位

v2 完整单页应用原型，以 Neo-TNBsee 为主线，包含 Beth 叙事、粒子场星系、FLIP 导航等高级交互。**与主应用解耦**，用于设计验证与版本快照。

### 4.2 文件结构

```
circure-igem-wiki/
├── index.html          # 单页应用入口（含全部 HTML 结构与内联语义）
├── styles.css          # 视觉系统、布局与动画
├── script.js           # 交互逻辑：FLIP 导航、粒子场、滚动揭示
├── server.mjs          # 零依赖 Node.js 静态服务器
├── package.json        # 仅 dev 脚本
└── assets/             # 品牌图、英雄图、粒子素材、纹理
```

### 4.3 关键模块（`script.js`）

`script.js` 是一个零模块化的原生 JS 文件，通过 DOM 查询获取元素并绑定交互。核心函数：

| 函数 | 行号 | 职责 |
|------|------|------|
| `clamp(value, min, max)` | [62](file:///workspace/circure-igem-wiki/script.js#L62) | 数值钳制 |
| `measure(elements)` | [66](file:///workspace/circure-igem-wiki/script.js#L66) | 批量获取元素 `BoundingClientRect`，返回 `Map` |
| `hydrateParticles()` | [70](file:///workspace/circure-igem-wiki/script.js#L70) | 动态创建粒子 DOM（数量按设备能力降级：32/24/18/16） |
| `canAnimateParticles()` | [106](file:///workspace/circure-igem-wiki/script.js#L106) | 设备能力 + 可见性 + `prefers-reduced-motion` 综合判定 |
| `startParticleLoop()` / `stopParticleLoop()` | [110](file:///workspace/circure-igem-wiki/script.js#L110) | 通过 `requestAnimationFrame` 驱动粒子 ticker |
| `layoutParticles()` | [122](file:///workspace/circure-igem-wiki/script.js#L122) | 重新测量容器尺寸并重排粒子位置 |
| `updateParticleFrame(timestamp)` | [148](file:///workspace/circure-igem-wiki/script.js#L148) | 每帧更新粒子位置，使用 `ease: 0.1` 平滑趋近目标 |
| `runFlip(mutator)` | [181](file:///workspace/circure-igem-wiki/script.js#L181) | **核心动画原语**：FLIP（First-Last-Invert-Play）补间，统一驱动 logo、导航链接、背景胶囊、dropdown 的形变 |
| `setClass(name, enabled)` | [228](file:///workspace/circure-igem-wiki/script.js#L228) | 切换根元素 class，返回是否发生变更 |
| `updateScrollState()` | [234](file:///workspace/circure-igem-wiki/script.js#L234) | **统一滚动状态机**：更新 `has-scrolled`/`has-passed-fold`/`is-scrolling-down`，驱动导航形态、push 段落进度、galaxy 词进度、final window 进度 |
| `requestScrollUpdate()` | [287](file:///workspace/circure-igem-wiki/script.js#L287) | `requestAnimationFrame` 节流入口 |
| `applyDropdownState(nextKey, open)` | [293](file:///workspace/circure-igem-wiki/script.js#L293) | 切换 dropdown 面板状态，同步 `aria-hidden`/`inert` |
| `setDropdown(key, open)` | [310](file:///workspace/circure-igem-wiki/script.js#L310) | 状态变更入口，调用 `runFlip` 平滑过渡 |
| `queueDropdownOpen(key)` / `queueDropdownClose(delay)` | [324](file:///workspace/circure-igem-wiki/script.js#L324) | 延迟队列，避免快速移动触发抖动 |
| `setStoryActive(index)` | [439](file:///workspace/circure-igem-wiki/script.js#L439) | 切换故事章节激活态 |

**关键设计模式：**

1. **FLIP 动画**：`runFlip(mutator)` 通过 `measure()` 前后对比元素位置，使用原生 WAAPI (`element.animate`) 做 `translate + scale` 补间，duration 400ms，easing `cubic-bezier(0.215, 0.61, 0.355, 1)`。**避免引入 GSAP Flip 插件（节省 50KB+）**。
2. **粒子场**：32 个图块由持续 ticker 驱动，参数 `speed: 0.15`、`ease: 0.1`、`scaleEase: 0.25`；每个图块独立速度（0.8–1.2x）与 Z 深度（−200 ~ 200），通过 `perspective: 800px` 营造 3D 感；离开视口边界后回收至另一侧形成无限循环。
3. **设备能力降级**：`navigator.hardwareConcurrency` ≤ 4 或 `navigator.deviceMemory` ≤ 4 时，添加 `is-constrained-device` class，粒子数减半。
4. **被动监听**：滚动监听一律 `passive: true`，避免阻塞主线程。

### 4.4 静态服务器（`server.mjs`）

零依赖 Node.js 原生 `http` 服务器：
- 监听 `127.0.0.1:4173`（默认）
- 路径安全过滤：`normalize` + 去除 `../` 前缀
- 不存在的路径回退到 `index.html`（SPA 兼容）
- MIME 映射：`.css/.html/.jpg/.js/.png/.svg`
- `Cache-Control: no-store`

---

## 5. 子项目 — circure-story-nav-local（叙事导航原型）

### 5.1 定位

叙事型官网首页原型，九章节滚动叙事 + 粉线导航器 + 弹簧物理动效。视觉系统采用"人文科学编辑风"（Humanist Scientific Editorial）。

### 5.2 文件结构

```
circure-story-nav-local/
├── index.html          # 九章节滚动叙事主页
├── styles.css          # 视觉系统样式（CSS 变量 + clip-path 动画）
├── script.js           # 交互逻辑（弹簧物理、滚动驱动、导航状态机）
├── server.mjs          # Node.js 零依赖静态服务器（默认 5183）
├── STYLE_GUIDE.md      # 人文科学编辑风视觉规范
├── README.md           # 技术栈分析与版本管理
└── assets/             # 徽章、丝带、导航卡片图
```

### 5.3 关键模块（`script.js`）

| 函数 | 行号 | 职责 |
|------|------|------|
| `setDesktopNav(key, isOpen)` | [100](file:///workspace/circure-story-nav-local/script.js#L100) | 切换桌面端导航状态（三种可逆状态：顶部轻量栏 → 紧凑海军蓝栏 → 四列图片菜单） |
| `queueDesktopNavOpen(key)` / `queueDesktopNavClose()` | [145](file:///workspace/circure-story-nav-local/script.js#L145) | 延迟队列，防止抖动 |
| `setMobileMenu(isOpen)` | [157](file:///workspace/circure-story-nav-local/script.js#L157) | 移动端菜单切换 |
| `followProgress(current, target, elapsed, response, maxStep)` | [169](file:///workspace/circure-story-nav-local/script.js#L169) | **临界阻尼弹簧**：粉线导航器平滑双向移动，无过冲 |
| `updateThreadGuideOrientation()` | [176](file:///workspace/circure-story-nav-local/script.js#L176) | 粉线导向器方向更新 |
| `setPageProgressFromGuide(progress)` | [183](file:///workspace/circure-story-nav-local/script.js#L183) | 从导向器进度反推页面滚动位置（拖拽交互） |
| `getPointerGuideProgress(event)` | [206](file:///workspace/circure-story-nav-local/script.js#L206) | 从指针事件计算导向器进度 |
| `beginThreadDrag` / `moveThreadDrag` / `endThreadDrag` | [214](file:///workspace/circure-story-nav-local/script.js#L214) | 粉线导航器拖拽交互三件套 |
| `handleThreadGuideKeydown(event)` | [252](file:///workspace/circure-story-nav-local/script.js#L252) | 键盘可达性支持 |
| `getSectionProgress(metric, startRatio, endRatio)` | [276](file:///workspace/circure-story-nav-local/script.js#L276) | 章节进度计算 |
| `getStickyProgress(metric)` | [287](file:///workspace/circure-story-nav-local/script.js#L287) | 粘性元素进度 |
| `cacheLayout()` | [296](file:///workspace/circure-story-nav-local/script.js#L296) | 缓存布局测量值，避免每帧重排 |
| `updateHeaderTheme()` | [337](file:///workspace/circure-story-nav-local/script.js#L337) | 头部主题切换 |
| `updateThreadGuide()` | [358](file:///workspace/circure-story-nav-local/script.js#L358) | 粉线导向器每帧更新 |
| `measureProgress()` | [384](file:///workspace/circure-story-nav-local/script.js#L384) | 测量各章节滚动进度 |
| `paint(time)` | [408](file:///workspace/circure-story-nav-local/script.js#L408) | 主渲染循环 |
| `requestPaint()` | [668](file:///workspace/circure-story-nav-local/script.js#L668) | `requestAnimationFrame` 节流 |
| `handleResize()` | [675](file:///workspace/circure-story-nav-local/script.js#L675) | 视口变化时重新缓存布局 |

### 5.4 视觉规范（`STYLE_GUIDE.md`）

- **风格定义**：Humanist Scientific Editorial
- **叙事脊柱**：围绕 "Recognition"（识别）展开九章节
- **色板**：主文本 `#1b1719`、纸张色 `#eee7dc`/`#fcf8f1`、科学结构 `#173f78`/`#102f59`、粉线纽带 `#d784b3`、blush 面 `#ddcbd3`
- **字体策略**：展示标题用衬线体（Iowan/Baskerville），数据与导航用系统无衬线体

### 5.5 静态服务器

`server.mjs` 与 `circure-igem-wiki/server.mjs` 结构一致，监听端口 5183，扩展支持 `.webp` 与 `.json` MIME 类型。

---

## 6. 子项目 — hp-testimonial-cards-local（v1 多页原型）

### 6.1 定位

v1 早期多页原型，包含 Human Practices、Project、Dry Lab、Wet Lab 四个独立 HTML 页面。设计研究文档（`*_RESEARCH.md`、`HP_FIELD_KIT.md`）沉淀了 iGEM 历届获奖模式与设计原理。

### 6.2 文件结构

```
hp-testimonial-cards-local/
├── index.html          # Human Practices 页面原型（单文件，内联 CSS/JS）
├── project.html        # Project 页面（The Living Ring 视觉系统）
├── dry-lab.html        # Dry Lab 模型手稿
├── wet-lab.html        # Wet Lab 页面
├── dry-lab-paper.css   # Dry Lab 论文体样式
├── dry-lab-paper.js    # Dry Lab 阅读交互（目录、进度、技术折叠）
├── wet-lab.css         # Wet Lab 样式
├── wet-lab.js          # Wet Lab 交互（记录滚动、reveal 动画）
├── assets/             # 生成图片与插图（人物肖像、场景、装置）
├── DRY_LAB_RESEARCH.md          # Dry Lab 历届 Best Model 研究笔记
├── HP_BEST_PRACTICES_RESEARCH.md# HP 获奖与评审模式研究
├── HP_FIELD_KIT.md              # 利益相关者参与模板
├── PROJECT_PAGE_RESEARCH.md     # Project 页面设计原理
└── README.md
```

### 6.3 关键模块

#### `index.html`（Human Practices）
单文件原型，内联 CSS + JS。核心函数（位于文件末尾 `<script>`）：

| 函数 | 行号 | 职责 |
|------|------|------|
| `clamp(value, min, max)` | [3796](file:///workspace/hp-testimonial-cards-local/index.html#L3796) | 数值钳制 |
| `getImpactHoldDistance()` | [3800](file:///workspace/hp-testimonial-cards-local/index.html#L3800) | 影响卡片吸附距离 |
| `renderImpactScroll()` | [3804](file:///workspace/hp-testimonial-cards-local/index.html#L3804) | 渲染水平影响卡片滚动 |
| `updateImpactScroll()` | [3856](file:///workspace/hp-testimonial-cards-local/index.html#L3856) | 更新滚动状态 |
| `updateImpactGeometry()` | [3862](file:///workspace/hp-testimonial-cards-local/index.html#L3862) | 重算几何尺寸 |
| `updateTimelineScroll()` | [3942](file:///workspace/hp-testimonial-cards-local/index.html#L3942) | 时间线滚动同步 |
| `requestTimelineUpdate()` | [3987](file:///workspace/hp-testimonial-cards-local/index.html#L3987) | 时间线更新节流 |
| `updatePageProgress()` | [4050](file:///workspace/hp-testimonial-cards-local/index.html#L4050) | 页面整体进度条 |

#### `dry-lab-paper.js`
论文体阅读交互，IIFE 封装：
- `updateProgress()`：阅读进度条
- `setActiveLink(id)` / `updateActiveSection()`：左侧目录高亮当前章节
- `contentsToggle`：目录折叠
- `foldControl`：技术折叠展开/收起

#### `wet-lab.js`
Wet Lab 页面交互：
- `clamp(value, min, max)`：数值钳制
- `setActiveRecord(recordId)`：激活实验记录卡片
- `revealObserver`：`IntersectionObserver` 驱动的滚动揭示
- `recordObserver`：实验记录可见性同步
- `updatePageState()`：页面进度与状态
- `requestPageStateUpdate()`：rAF 节流

### 6.4 研究文档

| 文档 | 内容 |
|------|------|
| `HP_BEST_PRACTICES_RESEARCH.md` | 2022–2025 Best Integrated HP 获奖者/提名者页面审计 + 评审模式 |
| `HP_FIELD_KIT.md` | 利益相关者参与、同意书、决策账本、冲突处理、回流闭环、发布门禁的可复用模板 |
| `PROJECT_PAGE_RESEARCH.md` | Project 页面设计原理、iGEM 评审标准、参考团队案例 |
| `DRY_LAB_RESEARCH.md` | 2022–2025 Best Model 历届结果、获奖页面审计、设计依据 |

### 6.5 运行

无 Node 服务器，使用 Python 内置 HTTP 服务器：
```bash
python3 -m http.server 5188
```

---

## 7. 依赖关系总览

### 7.1 主应用运行时依赖

| 依赖 | 版本 | 用途 |
|------|------|------|
| `react` | ^19.2.0 | UI 框架 |
| `react-dom` | ^19.2.0 | DOM 渲染 |
| `react-router-dom` | ^7.9.0 | 客户端路由（`BrowserRouter`/`Link`/`Route`/`Routes`） |
| `bootstrap` | ^5.3.8 | 响应式样式框架（CSS） |
| `react-bootstrap` | ^2.10.10 | Bootstrap 的 React 封装（`Navbar`/`Nav`/`NavDropdown`/`Container`） |
| `gsap` | ^3.15.0 | 动画引擎：`useStoryNavAnimation` 用 `ScrollTrigger` 驱动首页九章节滚动叙事（pin / scrub / Hold Zone） |
| `@gsap/react` | ^2.1.2 | GSAP 的 React 集成：`useGSAP` 作用域化动画，unmount / Vite HMR 时自动回滚 ScrollTrigger 与 pin-spacer |

### 7.2 主应用开发依赖

| 依赖 | 版本 | 用途 |
|------|------|------|
| `vite` | ^7.0.0 | 构建工具与开发服务器 |
| `@vitejs/plugin-react` | ^5.0.0 | Vite React 插件 |
| `typescript` | ^5.9.0 | 类型系统 |
| `eslint` | ^9.36.0 | 代码检查（flat config） |
| `typescript-eslint` | ^8.40.0 | TS ESLint 解析与规则 |
| `eslint-plugin-react-hooks` | ^5.2.0 | React Hooks 规则检查 |
| `eslint-plugin-react-refresh` | ^0.4.20 | Fast Refresh 兼容性检查 |
| `@eslint/js` | ^9.36.0 | ESLint 推荐规则集 |
| `globals` | ^15.15.0 | 浏览器全局变量定义 |
| `prettier` | ^3.3.3 | 代码格式化 |
| `@types/node` | ^22.18.0 | Node 类型 |
| `@types/react` | ^19.2.0 | React 类型 |
| `@types/react-dom` | ^19.2.0 | ReactDOM 类型 |

### 7.3 子项目依赖

三个原型子项目**零运行时依赖、零构建依赖**：
- `circure-igem-wiki/package.json` 仅声明 `name/version/type` 与 `dev: node server.mjs`
- `circure-story-nav-local/package.json` 同上（`dev: node server.mjs 5183`）
- `hp-testimonial-cards-local/` 无 `package.json`，依赖 Python 3 内置 `http.server`

### 7.4 模块间引用关系

```
src/main.tsx
  └── src/containers/App/App.tsx
        ├── src/components/Navbar.tsx ──── src/pages.ts
        │                                   └── src/contents/index.tsx
        │                                         └── src/contents/*.tsx
        │                                               ├── src/components/Inspirations.tsx
        │                                               │     └── src/utils/stringToSlug.ts
        │                                               ├── src/contents/home.tsx ── src/hooks/useStoryNavAnimation.ts
        │                                               │                              └── gsap / @gsap/react / gsap/ScrollTrigger
        │                                               │     ├── src/assets/story-nav/*.{png,webp}
        │                                               │     └── src/styles/circure-home.css
        │                                               └── src/contents/<其他>.tsx ── src/components/wiki/*
        │                                                     ├── WikiPage.tsx ── useWikiPageMotion
        │                                                     │                 ├── src/styles/wiki-rebuild.css
        │                                                     │                 └── src/styles/circure-tokens.css（--header-height）
        │                                                     ├── WikiLineSidebar.tsx
        │                                                     └── features/<X>Features.tsx ── src/data/<x>Pages.ts
        ├── src/components/Header.tsx
        ├── src/components/NotFound.tsx
        ├── src/components/BackToTop.tsx ── src/styles/circure-back-to-top.css
        ├── src/components/Footer.tsx ──── src/utils/stringToSlug.ts
        └── src/utils/getPathMapping.ts ── src/pages.ts

vite.config.ts ── src/utils/stringToSlug.ts
```

**新增的"Wiki 页面四层解耦"**：
```
data/*.ts (内容数据，符合 WikiPageContent)
   │
   ▼
contents/*.tsx (页面组件，路由入口)
   │
   ▼
components/wiki/WikiPage.tsx + WikiLineSidebar (页面壳 + 章节侧栏)
   │
   ▼
components/wiki/features/*.tsx (按类别注入的特性块插槽)
```

子项目之间及子项目与主应用之间**无任何代码引用**，彼此完全独立。

---

## 8. 项目运行方式

### 8.1 主应用（React/Vite Wiki）

**前置要求**：Node.js ≥ 20.19.0（推荐 Node 22 LTS）

```bash
# 安装依赖
yarn install

# 启动开发服务器（默认 http://localhost:5173/jlu-fbh/）
yarn run dev

# 生产构建（tsc 类型检查 + vite build）
yarn run build

# 预览生产构建
yarn run preview

# 代码检查
yarn run lint

# 代码格式化
yarn run format
```

**关键说明：**
- 开发服务器 URL 路径包含 base 前缀 `/jlu-fbh/`（由 `vite.config.ts` 中 `stringToSlug(VITE_TEAM_NAME)` 决定），与 iGEM GitLab Pages 部署路径一致
- 修改页面内容 → 编辑 `src/contents/*.tsx`（路由入口）或 `src/data/*.ts`（内容数据）
- 修改页面元数据/路由 → 编辑 `src/pages.ts`
- 修改布局/通用 UI → 编辑 `src/components/*.tsx`（含 `wiki/` 子目录）
- 修改样式 → 编辑 `src/styles/*.css`（设计令牌在 `circure-tokens.css`）；`App.css` 仅保留少量全局补充
- 修改首页滚动动画 → 编辑 `src/hooks/useStoryNavAnimation.ts`（**CSS 消费端的 `--*-progress` 变量名不要改**）

### 8.2 子项目运行

#### v2 单页版
```bash
cd circure-igem-wiki
npm run dev
# → http://127.0.0.1:4173
```

#### 叙事导航原型
```bash
cd circure-story-nav-local
npm run dev
# → http://127.0.0.1:5183/
# 自定义端口：node server.mjs 8080
```

#### v1 多页原型
```bash
cd hp-testimonial-cards-local
python3 -m http.server 5188
# → http://localhost:5188/index.html
# → http://localhost:5188/project.html
# → http://localhost:5188/dry-lab.html
# → http://localhost:5188/wet-lab.html
```

**全部子项目均使用本地资源，不依赖外部 CDN，可离线运行。**

---

## 9. 构建与部署

### 9.1 GitLab CI 流水线（`.gitlab-ci.yml`）

```yaml
image: node:22

pages:
  stage: build
  cache:
    - key:
        files:
          - yarn.lock
      paths:
        - .yarn-cache/
  before_script:
    - echo 'yarn-offline-mirror ".yarn-cache/"' >> .yarnrc
    - echo 'yarn-offline-mirror-pruning true' >> .yarnrc
    - yarn install --frozen-lockfile
  script:
    - yarn build
    - cp -a dist/. public/
    - echo '/* /index.html 200' > public/_redirects
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH != $CI_DEFAULT_BRANCH
      when: never            # 非 main 分支不构建
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
      when: always           # main 分支自动构建部署
```

**流程要点：**
1. 使用 `node:22` Docker 镜像
2. 基于 `yarn.lock` 缓存离线镜像，加速后续构建
3. `yarn build` 执行 `tsc && vite build`，输出到 `dist/`
4. 复制 `dist/` 到 `public/`（GitLab Pages 的固定产物目录）
5. 写入 `_redirects`（`/* /index.html 200`）实现 SPA 路由回退
6. 仅在 `main` 分支触发，其他分支不消耗 runner

### 9.2 资源约束（iGEM 强制）

- **图片/字体**：必须上传至 `static.igem.wiki`（通过 [uploads tool](https://teams.igem.org/go/deliverables/wiki/uploads)），不能引用外部 CDN（Google Fonts、jsDelivr、cdnjs 等）
- **视频/音频**：必须嵌入 [iGEM Video Universe](https://video.igem.org)
- **部署目标**：`https://${year}.igem.wiki/${team-slug}/`（如 `https://2026.igem.wiki/jlu-fbh/`）

---

## 10. 代码规范与守则

### 10.1 提交规范（Conventional Commits）

| 前缀 | 用途 |
|------|------|
| `feat:` | 新功能或页面区块 |
| `fix:` | 样式或交互修复 |
| `docs:` | README 或注释更新 |
| `refactor:` | 代码重构（无功能变更） |
| `assets:` | 图片或媒体资源更新 |

### 10.2 不可变守则（来自 `CLAUDE.md`）

- **不要修改 `LICENSE`**：CC BY 4.0 是评审强制要求
- **不要修改 `Footer` 组件中的许可声明 + GitLab 仓库链接**：评审要求每页可见
- **不要随意修改 `.gitlab-ci.yml`**：构建/部署问题由团队自行承担
- **不要在原型子项目中预留路由或 CMS**：遵循 YAGNI

### 10.3 AI 助手使用守则（`.claude/RESPONSIBLE_AI_USE.md`）

- 团队对提交的每一行代码与每一个声明**完全负责**
- **严禁**让 AI 编造实验结果、数据、引用、统计、署名
- AI 可辅助措辞、结构、翻译、调试，但不得生成虚假科学内容
- 必须保留人类审查环节，不得将 AI 文本冒充真人引语或同行评审事实
- 不得向 AI 提示中粘贴个人数据、未公开第三方数据、凭证或机密

### 10.4 TypeScript 严格模式

`tsconfig.json` 启用：
- `strict: true`（含 `noImplicitAny`、`strictNullChecks` 等）
- `noUnusedLocals: true`、`noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `allowImportingTsExtensions: true`（允许 `.ts`/`.tsx` 后缀导入）
- `isolatedModules: true`（兼容 Vite 的逐文件编译）

### 10.5 设计原则

**原型子项目**（vanilla JS）：
- **KISS**：用原生 WAAPI 实现 FLIP，避免为单一动效引入完整 GSAP
- **YAGNI**：只实现参考站当前可见交互，不预留复杂路由或 CMS
- **DRY**：滚动状态统一由 `updateScrollState` 驱动，所有导航形态走同一个 `runFlip`
- **SOLID**：导航动画、滚动 reveal、移动菜单、dropdown 事件各自职责独立

**主应用（React + GSAP）**：
- **CSS / JS 解耦**：`circure-home.css` 的 `calc()` 消费 `--*-progress` 变量，`useStoryNavAnimation` 只写变量、不改 CSS；动效调参不动样式，样式调整不动动效
- **数据 / 视图解耦**：`src/data/*.ts` 提供内容，`contents/*.tsx` 仅作路由入口，`WikiPage` + `features/*` 负责渲染
- **HMR 安全**：所有 GSAP 动画经 `useGSAP` 作用域化，unmount / HMR 自动回滚，无遗留 ScrollTrigger 或 pin-spacer
- **降级优先**：`gsap.matchMedia()` 处理 `prefers-reduced-motion` 与 620px 断点；原型侧用 `navigator.hardwareConcurrency` / `deviceMemory` 降级粒子数

---

## 附录：版本快照对照

| 版本 | 文件夹 | 说明 |
|------|--------|------|
| v1 | `hp-testimonial-cards-local/` | 早期多页原型，含 HP、Project、Dry Lab、Wet Lab 独立页面 |
| Story Nav | `circure-story-nav-local/` | 叙事型官网首页原型，九章节滚动叙事 + 粉线导航器 + 弹簧物理动效 |
| v2 | `circure-igem-wiki/` | 完整单页应用版，Neo-TNBsee 主线，Beth 叙事，粒子场星系，FLIP 导航 |
| GSAP 重构 | `home-gsap-refactor/` | 研究工作目录：原生 rAF → GSAP 映射清单 + 验证脚本与截图（非运行时产物） |
| Deploy | 仓库根（`src/`） | 官方 iGEM Wiki 模板（React 19 + Vite 7 + TS + GSAP），最终部署到 GitLab Pages |

---

*Content on this site is licensed under a Creative Commons Attribution 4.0 International license.*
