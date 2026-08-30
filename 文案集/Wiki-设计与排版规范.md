# CirCure Wiki 文案（Markdown）→ 统一视觉体系 / 可复用 TSX 转化方法

> **核心问题**：怎么把一段写好的 md 正文，变成一套**排版一致、文字逐字不改、可被其他页面复用**的 React 组件体系。
> **答案**：不直接渲染 md，而是先把它**抽象成语义数据**，再落到**既有可复用组件**上。这样排版统一、文案可维护、新页面直接套用。
> **来源**：由 Sustainability 页（`src/contents/sustainability.tsx` + `src/data/*` + `src/components/wiki/sustainability/*`）实际落地路径提炼。
> **使用**：凡新增 / 改造页面，先跳过手写 JSX，先走一遍 §2 的「识别 → 数据 → 组件 → 挂载」四步。

---

## 1. 一句话看完整个体系

```
Markdown 原文
   │  ① 语义识别（这段在讲什么）
   ▼
结构化数据  src/data/*.ts   (as const satisfies Xxx)
   │  ② 语义 → 类型安全的常量
   ▼
可复用组件  src/components/wiki/*   (props = 数据)
   │  ③ 数据 → 组件（只喂数据，样式/结构固定）
   ▼
页面组装    style: WikiPage(content, features) + WikiSection.blocks
   │  ④ 组件 → 页面区块（保顺序/锚点/侧边栏）
   ▼
统一视觉页面
```

**不变式**：文案只出现在数据层（逐字保留）；组件只消费数据、不写死文案；页面组装层只排顺序、不写正文。

---

## 2. 转化流水线（核心，四步）

### ① md → 语义识别（Section 结构）
拿到一段 md，先问「这段在讲什么」，而不是「这段怎么排版」。每个结构元素都对应一种**信息类型**，查下表：

| md 里的东西 | 识别为 | 落成 block / 组件 |
|---|---|---|
| `#` 块一级标题 | 页面 / 章节 | `section.title`、`subheading` |
| 名人引言 + 出处 | Epigraph | `epigraph` block |
| 普通段落 | 正文 | `prose` block |
| 强调句 / 关键结论 | Callout | `callout` block |
| 图片 / 图表 | 可视化 | `figure` block，或可视化组件 |
| 并列要点 / 小标题组 | 卡片组 | `feature`（对应卡组件） |
| 列表（问题 / 维度 / 步骤） | 卡片 | `ProblemCardGroup` / `ConsequencesDimensionCard` / 步骤图 |
| 表格 | 结构化数据 | 矩阵 / 卡片 / 热力图 |
| 「Click more」可展开 | 可展开区 | 组件内的 `<details>` 区 |
| 数字 + 双语文案 | 量化结果 | `CountUpStat` |
| 个人 / 组织（谁、为什么、反馈、改变） | 人物立场 | `StakeholderProfileCard` |
| PDF 附件 | 文档 | `PdfToolList` + `PdfViewerModal` |
| 章节内子章节 | 侧边栏目录 | `subheading`（带 `id` + `index`） |

### ② 语义 → 数据（只动数据文件）
把上面的【信息类型】写成**类型安全常量**，`as const satisfies Xxx`，原文逐字保留。
- md **不直接渲染**。对应 md 会被拆成 `src/data/*.ts` 里的结构化对象。
- 类型 =「这段 md 的语义骨架」。例如：
  - `StakeholderProfile`：`id / name / role / variant / 对象 / 原因 / 反馈 / 修订 / sdg / detailedInterview[]`
  - `SdgScaleContent`：`intro / stakeholders[] / consequences[] / alignment[] / legacyTools[] / evidenceStats[]`
  - `LegacyTool`：`title / description / pdfs[]`
  - `SustainabilityStat`：`value / labelZh / labelEn`

> **分家**：文案内容（md）住在数据文件；**顺序与锚点**住在 Pages 组装文件；两者都不写死 JSX 结构。

### ③ 数据 → 组件（复用，别重写）
把数据喂给对应组件。这些组件**只吃数据**，样式与 DOM 结构固定，所以**同一语义在任何页长得一模一样**。
- 例子：`<CountUpStat stat={...} delay={...}/>`、`<StakeholderProfileCard profile={...} ordinal={...}/>`、`<PdfToolList tools={...} startIndex={...}/>`、`<ConsequencesDimensionCard dimensions={...}/>`、`<StatsGrid stats={...}/>`。
- 挂到 `WikiPage` 的 `features` 对象：`features["stats-sdg3"] = <StatsGrid stats={sdg3EvidenceStats}/>`。

### ④ 组件 → 页面区块（排序 / 锚点 / 侧边栏）
用 `WikiSection.blocks`（`src/components/wiki/wikiPageTypes.ts` 定死的 block 类型）按顺序排：

```ts
type WikiContentBlock =
  | { type:"prose"; paragraphs:string[] }
  | { type:"figure"; src; alt; caption? }
  | { type:"callout"; tone; label?; body }
  | { type:"subheading"; id; index; kicker?; title }
  | { type:"feature"; key }
  | { type:"note"; label; body }
  | { type:"epigraph"; quote; translationZh; attribution; attributionRole }
  | { type:"split"; id; prose:WikiContentBlock[]; aside:WikiContentBlock }
```

- `section.index / kicker / title / summary` 决定章节头与侧边栏。
- 每个 `subheading` 有 `id`（锚点）+ `index`（侧边栏子项），**侧边栏目录与滚动手感都由 `WikiPage` 自动生成**，无需手写。
- 页面级 metadata（`route / category / chapter / title / lede / boundary / visual / facts / links / next`）进 `WikiPageContent`。

---

## 3. 组件的两种复用层级

**层级 A：语义数据组件**（挂在 feature 上）。特点：`props = 数据`，样式 / 结构完全一致。
- `StakeholderProfileCard`、`CountUpStat`、`PdfToolList`、`ConsequencesDimensionCard`、`ProblemCardGroup`、`ExpertFeedbackGrid`、`SdgImpactRadar`、`SSTQNClassificationMatrix`… 全部在此层。

**层级 B：页面组装层**（`WikiPage(content, features)`）。特点：`content` 描述章节与 block 顺序；`features` 把语义数据组件挂到具名 key。
- `WikiSection` / `WikiPageContent` / `sustainabilityPage.ts` 在此层。
- 这一层是**版式骨架**（章节头、侧边栏、锚点、滚动联动），全站共用同一份 `WikiPage` 渲染器。

> 结论：**换页面 = 换数据 + 换 features 里的组件实例，不改 `WikiPage`、不重复写章节骨架。**

---

## 4. 什么时候新建组件 vs 复用（决策树）

1. 这段 md 属于 §2 表里的哪一类？
2. **页面上有没有同类组件？**
   - 有 → **复用**：只加数据 + 加一个 `feature` key（如 `"stats-sdg9"`）。← 绝大多数情况
   - 没有 → 才**新建**。
3. 新建时：新组件 =「确实新的语义」+ 遵循 §5 视觉规范 + 走 feature 机制，**不改共享渲染器**（`WikiPage` / `wikiPageTypes`）。

**反面教材**：同一体系如果为了「好看」在不同页各造一个近似组件 → 视觉失控、维护爆炸。禁止。

---

## 5. 新组件的视觉 / 排版硬性规范（复用 Sustainability 页已定的基线）

### 5.1 角色分工
| 角色 | 载体 | 用途 |
|---|---|---|
| 编辑衬线 | `var(--font-editorial)` | 标题、引语、大数字 |
| 系统无衬线 | `var(--font-sans)` | 正文、标签、按钮 |
| mono | `var(--font-mono)` | **仅**编号 / 时间戳（`INT-0X`），不作装饰 |

### 5.2 颜色语义
- 粉色 `--care #d784b3`：**只作「连接」**（引语左线、`→` 箭头），每组件 ≤2 处；副标题 / 标签 / pill / 头像底一律去粉。
- 海军蓝 `--brand-navy #173f78`：结构色（标题、按钮、强调）。
- `--ink/#1b1719`（主墨）、`--ink-muted rgba .68`（次墨）、`--ink-faint rgba .46`（极弱 / 编号）、`--line rgba .18`（默认线）、`--line-hair rgba .06`（发丝线）。

### 5.3 排版
- 标题 serif `clamp(22,1.7vw,28)` w500；正文 sans 15–16 / 1.72；**任何正文 ≥15px**；≤12px 仅编号 / 注释 / 行首标签。
- 间距 4px 网格（8/12/16/22/28/42）；卡片 padding 28；组间 22 / 组内 8–12；**禁止全卡等距平铺**。
- 圆角 `radius/panel 28`（卡）、`radius/control 6`（控件）。

### 5.4 动效
- 缓动统一 `var(--ease-out)` = `cubic-bezier(.22,1,.36,1)`；hover 位移 ≤4px；**无循环动画**。
- 计数为一次性揭示动画（IntersectionObserver 触发后 unobserve）；`prefers-reduced-motion` 下去动效、内容与层级不变。
- 底部 3px 粉条**仅 hover** 出现（`scaleX(0→1)`）。

### 5.5 一条硬约束
**文本逐字不变**。正文、标题、副标题、标签内容、可展开文本、按钮文字一律不改写 / 合并 / 缩减 / 加标点；改动只作用于**样式层**（颜色 / 字体 / 字号 / 间距 / 边框 / 布局 / 伪元素装饰）。`→`、`「」`等一律用 `::before/::after` 实现，不进文本节点。

---

## 6. 可复用的「编号体系」chrome

| 前缀 | 对象 | 形式 |
|---|---|---|
| `INT-0X` | 访谈卡 | `INT-01 · 访谈` |
| `FIELD-0X` | 调研走访卡 | `FIELD-01 · 调研` |
| `TOOL-0X` | 工具 / 文档卡 | `TOOL-01 · REUSABLE TOOL` |

- 编号按 **DOM 顺序**连续生成（跨章节不重计），mono 10、`--ink-faint`。
- 新增组件类型沿用「`前缀-0X · 中文说明`」命名。

---

## 7. 一个完整例子：md 一句话 → 统计卡

md：`活动共发放 **194 份种植材料**。`

1. **识别**：`数字 + 语义` → 「量化结果」。
2. **数据**：`{ id:"sdg12-kits", value:194, labelZh:"种植材料", labelEn:"Planting kits distributed" }`。
3. **组件**：`<CountUpStat stat={...} delay={...}/>`（自动一次性计数、静止即终值、`aria-label` 标终值、无 JS / 减动效静态）。
4. **挂载**：`features["stats-sdg12"] = <StatsGrid stats={...}/>`；section blocks 里 `{ type:"feature", key:"stats-sdg12" }`。

→ 任何页面出现「数字 + 说明」都走同一组件，中英标签样式、数字字体、节奏、动效完全一致。

---

## 8. 一致性守则（团队协作）

- **同一语义 → 同一组件**；不因页面不同而各造近似变体。
- **文案只改数据文件**，组件与样式不动；**组件只改自身**，文案不动。
- 遇到新 md 内容 → 走「识别 → 数据 → 组件 → 挂载」四步，优先复用。
- 新页面：复制一份 `sustainabilityPage.ts` 的骨架（sections + features），换数据；校验每个 `subheading` 的 `id` / `index` 与侧边栏一致。
- 可视化（SVG / ECharts / chord）：优先复用 `src/components/wiki/sustainability/*` 里的图表组件；需要新图时用本地 d3（`public/vendor/d3.min.js` + `%BASE_URL%`），禁止运行时拉 CDN。

---

## 9. 上线前自查

1. 语义识别是否准确（这段到底是「关系 / 流程 / 量化 / 人物 / 文档」哪类）？
2. 是否**复用了同语义组件**？（而不是重写）
3. 文本 diff：正文 / 标题 / 标签 / 可展开文本与 md 原文逐字一致？
4. 新组件是否符合 §5 角色分工 / 字号 / 间距 / 粉色 ≤2 / 动效规范？
5. **以 `tsc --noEmit` 为准**（受限环境下 `vite build` 可能因 esbuild `spawn EPERM` 失败，并不代表代码有问题）；能用则再 `yarn build`。响应式（<760px）与 `prefers-reduced-motion` 正常。
6. iGEM 合规：无外部 CDN、图片 / PDF 来源正确、系统字体。

---

## 10. 工程化约定与高频坑（组件化落地的工程细节）

> 这一节是「从 md 到 tsx」真正容易出问题的地方，新建 / 更新页面都要遵守。

### 10.1 四层文件结构（页面 = 一套骨架 + 一套数据）
以 Sustainability 页为范式，每页按下面组织：
- **数据层**（文案，逐字来源）：`src/data/<page>Data.ts` 等，`as const satisfies Xxx`，所有 md 正文、标签、可展开文本都在这里。
- **组装层**（只排顺序/锚点，不写正文）：`src/data/<page>Page.ts`，定义 `WikiPageContent` + 各 `WikiSection`，用 `WikiSection.blocks` 排 `prose/figure/callout/subheading/feature/note/split`。
- **组件层**（只吃数据）：`src/components/wiki/<page>/`，如 `<StakeholderProfileCard profile ordinal/>`、`<CountUpStat stat delay/>`、`<PdfToolList tools startIndex/>`。
- **样式层**：`src/styles/<page>-page.css`（页面名字面量 token 别名，如 `--ink-muted` 等）。
- **特征挂载**：`src/contents/<page>.tsx` 的 `features` 对象，把组件实例挂到具名 key；`<WikiPage content features/>` 渲染。

> **文案不进组件 / 不进 JSX**；组件里只允许「交互 / 标签 chrome」（如 `WHY WE ENGAGED`、`Reusable Tool`、`阅读完整访谈`、按钮 `CN/EN`），这些属于可编辑样式/naming 层，不算「出版正文」。

### 10.2 复用「内容形状 → 章节」的构建器
若多个章节共享同一**语义骨架**（例如每个 SDG 的 S/C/A/L/E、四个评估维度），先定义一个共享 `interface`（如 `SdgScaleContent`）+ `buildSection(content)`，一次性生成这些 section，**而不是每段手写**。这是最重要的 DRY 手段。
- 每个子章节要有稳定的 `id`（锚点）+ `index`（侧边栏序号）；侧边栏目录与滚动手感由 `WikiPage` 自动生成。

### 10.3 编号 chrome（全站统一）
- `INT-0X · 访谈` / `FIELD-0X · 调研` / `TOOL-0X · REUSABLE TOOL`，mono 10、`--ink-faint`。
- 编号**按 DOM 顺序连续生成**（跨章节不重计）；用 `data-*` 属性 + `::before` 渲染，避免把编号塞进文本节点。

### 10.4 资产注册表与来源核对（易踩坑）
- 建 `src/data/<page>Assets.ts`（语义 key + kind/fileName/alt/section/usageNote/webPath）与 `<page>Images.ts`（图片 import 映射）。
- **先核对「md 引用图 ↔ 实际资源」的对应关系**（我曾遇到 `filename 1.png` 被误映射成 SCALE 图、`image 2.png` 不存在），按 md 语义重新指定源文件 → 目标的映射，再复制到 `src/assets/wiki/`、PDF 进 `public/assets/docs/`。
- 图片 / PDF 一律语义化命名（`<page>-*`），上传 iGEM 后回填 `uploadUrl`。

### 10.5 position:fixed / 全屏的坑（必须 Portal）
- `.wiki-feature[data-wiki-reveal]` 的 `transform` 会给固定定位**重新建立包含块**；`.wiki-page` 的 `overflow: clip` 会裁剪。因此**任何覆盖全视口的组件（Modal / 全屏）都用 `createPortal(modal, document.body)`**，否则被困在内容区。
- PDF 预览 Modal：打开时 `document.body.style.overflow = "hidden"`；Esc + 点遮罩关闭；进入/退出原生全屏后 `fitToViewport()`。
- PDF 缩放用 **fit-to-viewport**（`min(可用宽/pageW, 可用高/pageH)`），别按宽度填满（会放大到 170% 造成双滚动条）。

### 10.6 category → 布局分支（manuscript）
`WikiPage` 中 `isManuscript = isWetLab || isEngagement`。对 manuscript 页（engagement / wet-lab），**`facts / boundary / chapter / eyebrow` 不渲染**，hero 只有 `title + lede + 视觉图`。因此：
- 别花时间填不渲染的 `facts / boundary`（可留合理默认）。
- 通过 `category` 先判断 hero 契约，再决定要填哪些 metadata。

---

## 附：Sustainability 页可对照的落地骨架

- **Overview**：`epigraph` + `prose` + `sdg-cards`（翻转卡）+ `split`（callout 左 / 右 `sdg-radar`）+ `framework-intros`（三框架导读卡）+ `sdg-dimension-chord`（可视化）。
- **SST-QN**：`split`（prose 左 / 分类矩阵右）+ 边界矩阵 + `split`（定义 + 评分流）+ 热力图 + `note` + prose + 两个 `callout` + `pdf-sst-qn`（PDF 预览）。
- **SET–Develop–Grow**：`split`（intro / 三层图）+ `subheading` + `figure` + `callout`。
- **SET → SDG3**：`callout`(WHO) + `prose` + `stats` + `figure` + `callout` + `subheading`×N（SDG3 的 S/C/A/L/E，各带 feature）。
- **SDG9 / SDG12 / GROW**：由 `buildScaleSection(SdgScaleContent)` 统一生成 S/C/A/L/E 骨架（含 SCALE 链、statistics、stakeholder 卡、consequences、pdf-tools，E/L 可留 reserved）。
