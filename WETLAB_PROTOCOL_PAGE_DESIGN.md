# Wetlab Protocol 实验手册页面 — 设计方案（最终确认版）

> 面向 CirCure / JLU-FBH 2026 Wiki 主库（React 19 + TS + Vite）的新增页面设计方案。
> 决策点已全部确认（见第 7 节），本文档为可直接落地的最终版，按第 8 节顺序执行即可。

---

## 0. 路径与架构校准（重要前置）

你给的目标主库路径 `C:\Users\香芋派\.trae-cn\Official-wiki\Official-wiki（改动版）` **不存在**。经扫描，实际主库位于工作区根目录 `c:\Users\香芋派\.trae-cn\Official-wiki`，其 `src/` 即为 React 主代码库。本方案基于实际主库编写。

同时纠正一处技术假设：**本项目并未使用 Tailwind**。技术栈为：

- React 19 + TypeScript + Vite 7 + React Router 7
- Bootstrap 5 + React Bootstrap（工具类 + 组件）
- GSAP + `@gsap/react`（动画）
- 纯 CSS 变量驱动的设计令牌系统（`src/styles/circure-tokens.css` + `wetlab-editorial.css`）
- **iGEM 规则**：禁止任何外部 CDN / 字体，仅允许系统字体栈；图片/PDF 须托管于 `static.igem.wiki`（开发期可用 `src/assets/` 本地占位）

因此新页面样式应沿用 **CSS 变量 + 既有 BEM 风类名 + Bootstrap 栅格**，而非 Tailwind 工具类。

---

## 1. 从现有页面提取的设计原语（Design Tokens & Colors）

### 1.1 全局令牌（`src/styles/circure-tokens.css`）

| 令牌 | 值 | 用途 |
|------|-----|------|
| `--paper` | `#eee7dc` | 全站背景（暖米纸） |
| `--paper-bright` | `#fcf8f1` | 亮面 / hero 背景 |
| `--ink` | `#1b1719` | 正文文字 |
| `--brand-navy` / `--brand-navy-deep` | `#173f78` / `#102f59` | 深色块、Footer |
| `--care` | `#d784b3` | **主强调色（粉）** — 湿实验页 accent |
| `--coral` | `#df705b` | 次强调（珊瑚） |
| `--gold` | `#c39a55` | 点缀金 |
| `--green` / `--green-strong` | `#d79cbe` / `#754356` | blush / 深粉 |
| `--surface-blush` / `--surface-map` | `#ddcbd3` / `#e5d9d2` | 卡片底色变体 |
| `--muted` | `rgba(27,23,25,0.68)` | 次要文字 |
| `--line` | `rgba(27,23,25,0.18)` | 分割线 |
| `--radius-control` | `6px` | 控件圆角 |
| `--radius-panel` / `--radius-panel-mobile` | `28px` / `20px` | 面板圆角 |
| `--ease-out` | `cubic-bezier(0.22,1,0.36,1)` | 标准缓动 |
| `--duration-fast` | `220ms` | 标准过渡时长 |
| `--font-sans` | 系统栈（-apple-system…） | 正文 |
| `--font-editorial` | Iowan Old Style, Baskerville, Georgia, serif | 标题 / 手稿正文 |
| `--font-mono` | SFMono-Regular, Consolas… | 标签 / 编号 / 元数据 |
| `--tracking-label` | `0.1em` | 大写小标签字距 |

### 1.2 Wetlab 手稿页专属令牌（`wetlab-editorial.css` 顶部，`.wiki-page--manuscript` 作用域）

这些是 Wetlab 系列页面真正继承的色调，**新页面必须挂到 `wiki-page--manuscript` 作用域下**才能拿到：

| 令牌 | 值 | 用途 |
|------|-----|------|
| `--wet-paper` | `#f4f2ed` | 手稿纸面 |
| `--wet-paper-light` | `#fbfaf7` | 高亮纸面 |
| `--wet-paper-deep` | `#ebe7df` | 深纸面 |
| `--wet-ink` | `#1d1d1f` | 正文墨色 |
| `--wet-muted` | `rgba(29,29,31,0.66)` | 次要文字 |
| `--wet-faint` | `rgba(29,29,31,0.46)` | 更弱文字 |
| `--wet-line` | `rgba(29,29,31,0.11)` | 细分割线 |
| `--wet-line-strong` | `rgba(29,29,31,0.22)` | 强分割线 |
| `--wet-accent` | `var(--care)` = `#d784b3` | **湿实验强调色（粉）** |
| `--wet-teal` | `#2f6f68` | 结构色（青绿） |
| `--wet-page` | `min(1120px, calc(100% - 48px))` | 页面宽度 |
| `--wet-article` | `830px` | 正文栏宽 |

页面背景为径向 + 线性渐变叠加的"纸面纹理"：

```
radial-gradient(circle at 84% 4%, color-mix(in srgb, var(--wet-accent) 8%, transparent), transparent 26%),
linear-gradient(180deg, #fbfaf7 0, var(--wet-paper) 46%, #f0ede7 100%)
```

### 1.3 关键交互模式（从现有 Wetlab 代码提取，需严格复用）

**A. 标签切换（Tabs）— 复用 `.wet-measurement__tabs` 模式**
- 结构：`<div class="wet-measurement__tabs">` 内放 `<button>`，激活态加 `.is-active`
- 视觉：下划线式标签，透明背景，`min-height: 54px`，`border-bottom: 2px solid transparent`
- 激活/悬停：`border-bottom-color: var(--wet-accent)`，文字变 `var(--wet-ink)`
- 无 box-shadow、无 transform —— 与编辑风一致

**B. 卡片网格（Card Grid）— 采用"刻线板"风格【已确认】**
- 现有 `.wiki-item-grid` 明确注释："Scientific material: ruled plates instead of rounded cards"
- 即：`border-radius: 0`、`box-shadow: none`、`background: transparent`、用 `border-bottom` 分隔
- 书架卡片沿用此语言：直角、细线分隔、悬停以 accent 下划线 + 文字位移表达，**不使用抬升阴影**
- 全站一致性优先，绝不破坏已有 Wetlab 视觉基调

**C. 协议展开（Protocol Expand）— 复用 `.wet-protocols` 模式**
- 原生 `<details>/<summary>`，`summary::after` 一条 `scaleX(0→1)` 的下划线（360ms `cubic-bezier(0.22,1,0.36,1)`）
- 悬停时 `summary strong` `translateX(8px)`，`summary i`（+号）`rotate(90deg)`

**D. 悬停微动效统一语法**
- 过渡：`transition: transform 360ms cubic-bezier(0.22,1,0.36,1)` 或 `220ms ease`
- 位移幅度：`translateX(8px)` / `translateY(-2px)`
- 色变：`color` / `border-color` 切到 `--wet-accent` / `--wet-ink`

**E. 模态/弹窗（Modal）— 自建轻量 overlay【已确认】**
- 不用 `react-bootstrap` 的 `Modal`（其默认圆角阴影与编辑风不符）
- 自建：固定定位 + `backdrop-filter: blur(16px)`（此手法已在 `wetlab-editorial.css:188` 用于侧栏，风格一致）+ 居中纸面面板
- 进出场动画：淡入 + `translateY(12px)→0`，时长 220–320ms，缓动 `--ease-out`

---

## 2. 页面整体组件结构

新页面定位为 **Wet Lab 第 06 篇记录 / 实验手册库**，与现有 Experiments（五闸门）互补：Experiments 讲"实验路线与控制逻辑"，Protocol 页是"可下载/可预览的协议手册库"。

### 2.1 组件树

```
<ProtocolPage>                          // 自建页面壳，挂 wiki-page wiki-page--manuscript wiki-page--wet-lab
  ├─ <WikiHero 区>                      // 复用 hero 结构：chapter + kicker + h1 + lede
  ├─ <WetLabRouteNav>                   // 复用现有组件（需在其数据里加一条）
  ├─ <ProtocolBookcase>                 // 主体：书架网格 + 分类筛选
  │   ├─ <ProtocolCategoryTabs>         // 复用 .wet-measurement__tabs 视觉
  │   │   └─ All / DNA / Cell / Animal & Other
  │   └─ <ProtocolGrid>                 // 刻线板网格
  │       └─ <ProtocolCard> ×15
  │           ├─ 封面/图标区
  │           ├─ 标题 + 描述
  │           ├─ 分类 Tag + 版本/日期
  │           └─ 点击 → 打开 PDF Modal
  ├─ <WikiNextRecord>                   // 复用现有"下一条记录"组件
  └─ <PdfViewerModal>                   // 内置 PDF 阅读器弹窗
      ├─ 遮罩层（blur）
      ├─ 工具栏：关闭 / 上一页 / 下一页 / 缩小 / 放大 / 全屏 / 下载
      └─ PDF 渲染区
```

### 2.2 为何不直接套 `<WikiPage>` 通用壳

现有 `WikiPage`（`src/components/wiki/WikiPage.tsx`）是"hero + 路线导航 + 左侧线状目录 + 分段文章"的手稿结构，其 `sections` 数据驱动的是文字段落与 item 列表，**没有"卡片网格 + 标签筛选 + 弹窗"这种交互形态**。

因此 Protocol 页采用**独立页面组件**，但仍：
- 挂 `wiki-page wiki-page--manuscript wiki-page--wet-lab` 类名 → 自动继承全部 `--wet-*` 令牌与纸面背景
- 复用 `WetLabRouteNav`、`WikiNextRecord`、hero 排版样式
- 这样视觉 100% 统一，但交互自由。

---

## 3. 计划新建 / 修改的文件

### 3.1 新建文件

| 路径 | 职责 |
|------|------|
| `src/data/protocolPages.ts` | 15 条协议手册 Mock 数据 + 类型定义 |
| `src/contents/protocol.tsx` | `ProtocolPage` 页面组件（壳 + 书架 + 标签 + 弹窗组装） |
| `src/components/wiki/features/ProtocolBookcase.tsx` | `ProtocolBookcase` + `ProtocolCategoryTabs` + `ProtocolGrid` + `ProtocolCard` |
| `src/components/wiki/features/PdfViewerModal.tsx` | 内置 PDF 阅读器 Modal（缩放/翻页/全屏/下载/遮罩关闭） |
| `src/styles/protocol-bookcase.css` | 书架网格 + 卡片 + 标签筛选 + Modal 样式（挂 `--wet-*` 令牌） |

### 3.2 需修改的现有文件

| 路径 | 改动 |
|------|------|
| `src/contents/index.tsx` | 新增 `export { Protocol } from "./protocol.tsx";` |
| `src/pages.ts` | 在 `Wet Lab` folder 数组末尾追加一项：`{ name: "Protocol", title: "Protocol Library", path: "/protocol", component: Protocol, lead: "...", nav: { small: "06 / MANUAL", em: "Protocols · Library · Viewer", spriteRow: "100%" } }` |
| `src/components/wiki/WetLabRouteNav.tsx` | `wetLabRecords` 数组追加 `["/protocol", "Protocol"]`（从 5 项→6 项） |
| `src/styles/wetlab-editorial.css` | **第 326 行** `grid-template-columns: repeat(5, 1fr)` 改为 `repeat(6, 1fr)`；同时检查第 2496 行附近的移动端媒体查询（`repeat(2,1fr)` 容纳 6 项无需改，但需验证不溢出） |

> Hero 方案【已确认】：纯文字 Hero，不调用 `WetLabHeroVisual`，`heroVisual={null}`。保持干净精简的学术/实验风格。

---

## 4. 数据结构（`src/data/protocolPages.ts`）

```ts
export type ProtocolCategory = "dna" | "cell" | "animal" | "other";

export interface ProtocolManual {
  id: string;                // "PR-01"
  title: string;             // "Construct Assembly & Sequence Verification"
  category: ProtocolCategory;
  description: string;       // 一句话简述
  pdfUrl: string;            // static.igem.wiki 地址或本地 assets 占位
  coverImage?: string;       // 可选封面图；缺省走图标占位
  version: string;           // "v1.2"
  updatedAt: string;         // "2026-07-12"
  pages?: number;            // PDF 页数（可选，用于卡片角标）
  status?: "draft" | "verified" | "deprecated";
}
```

15 条 Mock 覆盖三类，建议配比：DNA 6 条（PCR、质粒构建、凝胶电泳、胶回收、测序送样、Golden Gate）、Cell 5 条（细胞培养、转染、表达诱导、流式染色、活力检测）、Animal & Other 4 条（动物实验伦理备案、样本采集、菌种保藏、废液处理）。

### 4.1 PDF 文件命名规范【已确认】

开发期 PDF 存放目录：`src/assets/protocols/`（由开发者建好并放置 1 个占位 PDF）。

命名格式：`{分类}-{子类}-protocol.pdf`，全小写、连字符分隔、英文。完整对照表：

| id | 分类 | 文件名 |
|----|------|--------|
| PR-01 | dna | `dna-pcr-protocol.pdf` |
| PR-02 | dna | `dna-plasmid-assembly-protocol.pdf` |
| PR-03 | dna | `dna-gel-electrophoresis-protocol.pdf` |
| PR-04 | dna | `dna-gel-extraction-protocol.pdf` |
| PR-05 | dna | `dna-sequencing-submission-protocol.pdf` |
| PR-06 | dna | `dna-golden-gate-protocol.pdf` |
| PR-07 | cell | `cell-culture-protocol.pdf` |
| PR-08 | cell | `cell-transfection-protocol.pdf` |
| PR-09 | cell | `cell-expression-induction-protocol.pdf` |
| PR-10 | cell | `cell-flow-staining-protocol.pdf` |
| PR-11 | cell | `cell-viability-assay-protocol.pdf` |
| PR-12 | animal | `animal-ethics-review-protocol.pdf` |
| PR-13 | animal | `animal-sample-collection-protocol.pdf` |
| PR-14 | other | `other-strain-preservation-protocol.pdf` |
| PR-15 | other | `other-waste-disposal-protocol.pdf` |

开发期统一指向占位文件 `src/assets/protocols/_placeholder.pdf`（15 条 Mock 的 `pdfUrl` 都先指它，跑通点击与阅读逻辑）；后续你用真实 PDF 按上表命名替换即可，**只需替换文件、无需改代码**。

部署期：PDF 随 wiki 一起上传至 `static.igem.wiki`，`pdfUrl` 替换为形如 `https://static.igem.wiki/teams/2026/jlu-fbh/protocols/dna-pcr-protocol.pdf` 的链接。

---

## 5. 内置 PDF 阅读器（PdfViewerModal）实现策略

### 5.1 渲染方案【已确认：react-pdf，本地打包 worker】

项目当前未装任何 PDF 库，且 iGEM 禁止外部 CDN。

**采用方案：`react-pdf`（封装 `pdfjs-dist`）**
- `yarn add react-pdf`
- worker 通过 Vite 的 `?url` 导入本地文件（不触 CDN），完全符合 iGEM 无 CDN 规则
- 工具栏（缩放/翻页/全屏/下载）自建，套 `--wet-*` 令牌

**兜底机制【已确认】**：若 `react-pdf` 安装或 worker 配置异常，自动退回 `<iframe src={pdfUrl} />`，保证 PDF 可查看（仅损失自定义工具栏体验）。检测方式：尝试动态 import `react-pdf`，失败则走 iframe 分支。

### 5.2 react-pdf 关键配置要点

- worker 导入：`import { pdfjs } from "react-pdf"; pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();`
  - 此写法让 Vite 把 worker 打进本地 bundle，不触 CDN
- `<Document file={pdfUrl} onLoadSuccess={...}>` + `<Page pageNumber={n} scale={scale} />`
- `react-pdf` 需在 `vite.config.ts` 无额外配置；若 worker 路径在 dev/build 不一致，用 `import.meta.env.DEV` 分支区分

### 5.3 工具栏与交互

- 关闭：右上角 `×` + 遮罩点击 + `Esc` 键
- 翻页：`‹` `›` + 键盘左右键 + `第 n / N 页` 显示
- 缩放：`−` `+` + 滚轮缩放（Ctrl+滚轮），显示当前比例 `100%`
- 全屏：调用 `requestFullscreen()`，全屏内仅保留 PDF 区与精简工具栏
- 下载：`<a download>` 直链下载原 PDF
- 进出场：遮罩 `opacity 0→1` 220ms，面板 `translateY(12px)→0` + `opacity` 320ms `--ease-out`
- 可访问性：`role="dialog"` `aria-modal="true"` `aria-labelledby`，焦点陷阱，打开时聚焦关闭按钮

---

## 6. 响应式策略

| 断点 | 书架网格 | 标签 | Modal |
|------|----------|------|-------|
| ≥992px（PC） | 3 列刻线板网格 | 横向下划线标签 | 面板 `min(90vw, 1100px)` × `85vh` |
| 768–991px（平板） | 2 列 | 横向可横滑 | 面板 `92vw` × `80vh` |
| <768px（移动） | 单列 | 横向横滑（`overflow-x:auto`） | 近全屏 `100vw`×`100vh`，工具栏图标化 |

网格用 `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`，gap 沿用 `--wet-line` 细线分隔而非间距阴影。

---

## 7. 决策点确认结果【全部已确认】

1. **卡片视觉语言**：✅ 刻线板风格（直角、细线、无阴影、悬停下划线+位移）。全站一致性优先，不破坏 Wetlab 视觉基调。
2. **PDF 库依赖**：✅ 允许新增 `react-pdf`（本地打包 worker，符合无 CDN）。安装/配置异常时自动退回 `<iframe />` 兜底。
3. **路由归属**：✅ 作为 Wet Lab 第 06 篇，接入 Wetlab 子导航。`WetLabRouteNav` 更新为 6 列网格/6 个路由项。
4. **Hero 图**：✅ 纯文字 Hero，干净精简的学术/实验风格，`heroVisual={null}`。
5. **PDF 来源**：✅ 由用户亲自提供真实 PDF。开发期先建 `src/assets/protocols/` 目录并放 1 个占位 PDF（`_placeholder.pdf`），15 条 Mock 统一指向它跑通逻辑；预留规范命名（见 4.1 节对照表），用户后续直接替换文件即可。

---

## 8. 执行步骤（按序执行）

1. `yarn add react-pdf`（若失败则记录，走 iframe 兜底分支）
2. 新建目录 `src/assets/protocols/`，放入 1 个占位 PDF 文件 `_placeholder.pdf`
3. 新建 `src/data/protocolPages.ts`（类型 + 15 条 Mock，`pdfUrl` 统一指向占位文件）
4. 新建 `src/styles/protocol-bookcase.css`（刻线板书架/卡片/标签/Modal，挂 `--wet-*` 令牌）
5. 新建 `src/components/wiki/features/ProtocolBookcase.tsx`（标签筛选 + 刻线板网格 + 卡片）
6. 新建 `src/components/wiki/features/PdfViewerModal.tsx`（react-pdf 阅读器 + iframe 兜底）
7. 新建 `src/contents/protocol.tsx`（组装页面壳，挂 `wiki-page--manuscript wiki-page--wet-lab`，纯文字 Hero）
8. 改 `src/contents/index.tsx`：导出 `Protocol`
9. 改 `src/pages.ts`：在 Wet Lab folder 末尾追加 `/protocol` 路由项
10. 改 `src/components/wiki/WetLabRouteNav.tsx`：`wetLabRecords` 追加 `["/protocol", "Protocol"]`
11. 改 `src/styles/wetlab-editorial.css`：第 326 行 `repeat(5,1fr)` → `repeat(6,1fr)`
12. `yarn dev` 本地验证：分类筛选、卡片悬停、Modal 进出场、PDF 翻页/缩放/下载、Esc/遮罩关闭、响应式三档、WetLab 子导航 6 项不溢出
13. `yarn lint` 通过后提交（Conventional Commits：`feat: add wetlab protocol bookcase page`）

---

*本方案为最终确认版，决策点已全部锁定，可直接按第 8 节进入编码。*
