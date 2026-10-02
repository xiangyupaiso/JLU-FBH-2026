# Sustainability 页面迁移排版计划 (v1.0)

> **输入源**：`文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md`（4128 行）
> **范围**：Overview → Stakeholder Sustainability Tracker（L7–L764）
> **模式**：Mode A 全量重构（旧页面结构与新稿差异过大 + 大量越界删减）
> **黄金范本**：`src/contents/description.tsx` + `src/data/project/descriptionPage.ts` + `DescriptionPanels.tsx`

---

## 目录

0. [决策记录](#0-决策记录本轮全部商讨结论)
1. [阻塞项：Alignment 表格 Why 列错位](#1-阻塞项alignment-表格-why-列错位)
2. [文案 → 结构映射](#2-文案--结构映射严格按新稿原始层级)
3. [SCALE Rail 设计（方案 C）](#3-scale-rail-设计方案c)
4. [可视化组件裁决](#4-可视化组件裁决)
5. [数据层重构（SDG 复用契约）](#5-数据层重构sdg-复用契约)
6. [资产映射](#6-资产映射)
7. [样式收口](#7-样式收口)
8. [执行步骤](#8-执行步骤)
9. [验收清单](#9-验收清单)
10. [待确认事项](#10-待确认事项)

---

## 快照：现有实现体量（改造前基线）

| 层 | 现状 | 目标 |
|:---|:---|:---|
| 数据文件 | 9 个文件 / ~191 KB（`sustainabilityData.ts` 单文件 90 KB / 1358 行 / 62 导出） | 5 个文件 / ~95 KB |
| 组件 | 22 个文件（`SdgDimensionChord.tsx` 422 行含 `@ts-nocheck`） | 12 个文件 |
| feature key | 31 | 13 |
| CSS | `sustainability-panels.css` 54,168 B / 2,445 行 / 279 规则 / 74 类名（其中 37 个无引用） | ≈15 KB |
| section / subheading | 4 / 8 | 5 / 11 |

---

## 0. 决策记录（本轮全部商讨结论）

| # | 议题 | 决策 |
|:---|:---|:---|
| D1 | 页面范围 | Overview → SDG 3 结束（SDG 9/12/4/17 暂不上线） |
| D2 | 三大核心 SDG 卡片 | image 11 已有静态图 → **组件化重写**，删 3D 翻转 |
| D3 | SET/DEVELOP/GROW 药丸 | **只保留有跳转目标的药丸**（SET→4.1；9/12→04） |
| D4 | 17×17 矩阵 | **删静态图，保留 ECharts**（`SdgBoundaryMatrix` / `SdgInteractionHeatmap`）；`echarts` 依赖保留 |
| D5 | d3 弦图 | **保留**（`SdgDimensionChord`） |
| D6 | 越界内容 | SDG 9/12/GROW 的 13 个 feature key **全部删除** |
| D7 | 必须保留 | `StakeholderProfileCard`（人物卡）、`PatientChatDialog`（患者气泡）、`CountUpStat`（滚动数字栏） |
| D8 | 目录层级 | SET=section(04) → SDG 3=subheading(4.1) → SCALE=subheading(4.1.x) |
| D9 | SCALE 呈现 | **方案 C**：桌面 fixed rail（侧边栏与正文间隙）+ 移动端 sticky 条降级 |
| D10 | Rail 唤起范围 | **仅滚动进入 SDG 3 区间时淡入**，离开淡出 |
| D11 | Rail 视觉 | **无圆点**、**渐变无阻尼滑块**、**常驻显示英文全称** |
| D12 | 旧 `scale-chain` key | **保留**，作为后续排版参考范式（不删除） |
| D13 | Alignment 表格 | 新稿已有（见 §1 阻塞项） |

---

## 1. 阻塞项：Alignment 表格 Why 列整体错位

新稿 L635–L643 的表格存在**内容错位**，必须先修正再排版：

| 行 | Relationship | Status | Why 实际内容属于 |
|:---|:---|:---|:---|
| 637 | SDG 3 ↔ SDG 9 | Core (C) | **空** |
| 638 | SDG 3 → SDG 4 | Core (C) | 属于 637（术后 TNBC 复发/技术设计/功能验证） |
| 639 | SDG 3 ↔ SDG 10 | Conditional (±) | 属于 638（乳腺健康/筛查/早筛 → 科普教育） |
| 640 | SDG 3 ↔ SDG 12 | Conditional (±) | 属于 639（定价/医保/可及性） |
| 641 | SDG 17 → SDG 3 | Exploratory (E) | 属于 640（规模化生产/原料/废弃物） |
| 642 | SDG 3 → SDG 5 | Excluded (0) | 属于 641（多方协作 → 决策改善） |
| 643 | *(空行)* | *(空)* | 属于 642（TNBC/女性健康 ≠ 结构性性别平等） |

**验证依据**：L648–L654 的 Key Findings 逐条与表格 Why 列**错位一位后完全吻合**。

**结论**：Why 列需整体上移一行，行 637 的 Why 从 L638 取，L643 补入 L642 后的内容并删除该空行。

---

## 2. 文案 → 结构映射（严格按新稿原始层级）

```
新稿 Markdown              底座              id                        index
─────────────────────────────────────────────────────────────────────────────
#   Overview                section h2        overview                  01
#   SST-QN                  section h2        sst-qn                    02
#   SDG Impact Framework    section h2        sdg-impact-framework      03
##  SET (L87)               section h2        set-core-challenges       04
###   SDG3 (L95)            subheading h3     sdg3-health               4.1
####    S (L99)             subheading h3     sdg3-stakeholder          4.1.1
####    C (L575)            subheading h3     sdg3-consequences         4.1.2
####    A (L628)            subheading h3     sdg3-alignment            4.1.3
####    L (L656)            subheading h3     sdg3-legacy               4.1.4
####    E (L720)            subheading h3     sdg3-evidence             4.1.5
###   Tracker (L758)       subheading h3     stakeholder-tracker       4.1.6
```

### 2.1 三级编号可行性（已核实）

- `WikiRoutePage.tsx:652` — subheading 的 `index` **原样渲染** `{subheading.index}`
- `WikiLineSidebar.tsx:506` — `{child.index}` **原样渲染**
- 仅 section 在 `WikiRoutePage.tsx:750` 做 `parseInt(index).padStart(2,"0")`

故 `"4.1.1"` 安全，不会被截断或 NaN。

### 2.2 侧边栏实际呈现（两级，底座硬限制）

```
01  Overview
02  SST-QN
03  SDG Impact Framework
04  SET — Addressing Core Challenges
   └ 4.1    SDG3: Good Health and Well-being
   └ 4.1.1  S — Stakeholder Insights
   └ 4.1.2  C — Consequences
   └ 4.1.3  A — Alignment
   └ 4.1.4  L — Legacy
   └ 4.1.5  E — Evidence
   └ 4.1.6  Stakeholder Sustainability Tracker
```

**SCALE 三级语义**由页内 rail 承担（见 §3），不依赖侧边栏三级嵌套。

### 2.3 底座硬限制备忘

| 约束 | 证据 |
|:---|:---|
| 侧边栏只有 2 级 | `WikiLineSidebar.tsx:23` `children?: Array<{...}>`；`:468-473` 只渲染一层 |
| subheading 只渲染 `<h3>` | `WikiRoutePage.tsx:504-515` |
| 滚动间谍按 parent 过滤，与层级深度无关 | `useWikiPageMotion.ts:240` |

---

## 3. SCALE Rail 设计（方案 C）

### 3.1 位置

挂 `{type:"feature", key:"scale-rail"}`，紧随 `sdg3-health` subheading 之后、`sdg3-stakeholder` 之前。

**桌面（≥1024px）**：

```css
.sust-scale-rail {
  position: fixed;
  right: max(10px, calc(50vw - 566px));
  top: 50%;
  transform: translateY(-50%);
}
```

落在 `--toc-w`(190–250px) 与正文之间约 22px 间隙 + 正文右侧余白内。
（依据：`wiki-route-skin.css:317` `grid-template-columns: var(--toc-w) minmax(0,1fr)`；`:318` `gap: 22px`）

**移动（<1024px）**：降级为 sticky 横条，复用 `.sub-nav` 模式（`wiki-route-skin.css:218-230`）。

### 3.2 视觉（D11）

| 要求 | 实现 |
|:---|:---|
| **无圆点** | 不用 `.sust-scale-chain__dot`；改为纯文字 + 左侧色条 |
| **渐变无阻尼滑块** | 竖向轨道 + 渐变滑块，`transform: translateY()` 由 `activeIndex` 驱动；`transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1)`（无回弹） |
| **常驻全称** | `Stakeholder Insights` / `Consequences` / `Alignment` / `Legacy` / `Evidence`，11px，与字母 `S/C/A/L/E` 左对齐 |
| 已完成态 | 轨道填充渐变 + 文字提亮 |
| 当前态 | 滑块 + 文字加粗 + 左侧 2px 色条 |

### 3.3 数据与状态

复用 `SCALEProgressChain.tsx` 的 `activeIndex` 状态机（`done` / `current` / `upcoming` / `reserved`）与 `sustainabilityAnchors` 查找，`jumpTo()` 逻辑不变。

**当前项来源**：`useRoutePageScroll().activeSubsection`（`SustainabilityPanels.tsx:140` 已在用）。

**唤起范围（D10）**：`activeSection === "set-core-challenges"` 时淡入，否则淡出。用 `opacity` / `visibility` 过渡，不卸载 DOM。

### 3.4 实现风险与解法

| 风险 | 说明 | 解法 |
|:---|:---|:---|
| `[data-wiki-reveal]` 祖先 transform | `wiki-rebuild.css:717` 初始 `translateY(20px)`；`.wiki-feature` 自带 reveal（`WikiRoutePage.tsx:518`）→ fixed 定位失效 | rail 内部包一层 `.sust-scale-rail__inner` 承载 fixed，或该 feature 槽改用非 reveal 包裹 |
| `<1024px` 抽屉重叠 | `.wiki-record` 变 `display:block`，TOC 变 fixed 抽屉（`wiki-route-skin.css:1529-1552`） | 媒体查询切 sticky 条 |

---

## 4. 可视化组件裁决

### 4.1 保留（12）

| 组件 | 说明 |
|:---|:---|
| `StakeholderProfileCard` | D7 必留。承载 12 位人物；`chat` 触发改数据驱动（`showChat?: boolean`），移除 `id === "02-tnbc-patients"` 硬编码 |
| `PatientChatDialog` | D7 必留。患者 A/B/C/D 原话 |
| `CountUpStat` + `StatsGrid` | D7 必留。Overview 4 数字 + Evidence 4 数字 |
| `SdgBoundaryMatrix` (ECharts) | D4 |
| `SdgInteractionHeatmap` (ECharts) | D4 |
| `SdgDimensionChord` (d3) | D5 |
| `SSTQNClassificationMatrix` | Figure 5 |
| `SSTQNScoreProcess` | 评分流程 |
| `SCALEProgressChain` | D12 保留作参考范式 |
| `PdfToolList` | L 节 4 工具 + Tracker 2 文件 |
| `SustainabilityPdfPreview` | SST-QN PDF |
| `ConsequencesDimensionCard` | C 节三维 |

### 4.2 删除 / 重写（10 + 1 重写）

| 组件 | 处置 | 理由 |
|:---|:---|:---|
| `SDGInteractiveCard` | **重写** | D2：删 3D 翻转 + `03/09/12` 机械号，改 Description 式卡片 |
| `SdgImpactRadar` | 删 | 17 宫格新稿无对应文案；与 Heatmap 的 17-SDG 名单重复 |
| `ImpactFrameworkDiagram` | 删 | 与 `OverviewSetDevelopGrowCards` 完全重复（同 3 层两套语言） |
| `ProblemCardGroup` | 删 | `P-01/02/03` 机械编号违规；内容已并入 C 节 |
| `ExpertFeedbackGrid` | 删 | 与人物卡重复 |
| `StakeholderTrackerPanel` | 删 | 100% 是 `PdfToolList` 硬编码 2 项版；数据回数据层 |
| `useInViewReveal` | 删 | 与全局 `useWikiPageMotion` 的 `[data-wiki-reveal]` 重复 |
| `SustPanelScope` | 删 | 三份同款 wrapper 之一；token 改用 `route-palette-engagement.css` |
| `sustainabilitySdg9.ts` | 删 | 32 KB 越界数据 |
| `sustainabilitySdg12.ts` | 删 | 27 KB 越界数据 |
| `sustainabilityGrow.ts` | 删 | 17 KB 越界数据 |
| `sustainabilitySdgNetwork.ts` | **保留** | D5 弦图消费，不改 |

### 4.3 feature key：31 → 13

```
sdg-cards · overview-set-develop-grow · framework-intros · scale-chain
sstqn-matrix · sdg-boundary-matrix · sstqn-score-flow · sdg-interaction-heatmap
sdg-dimension-chord · pdf-sst-qn
scale-rail(新) · stakeholders · consequences · pdf-tools-sdg3 · stats-sdg3
stats · stakeholder-tracker-tools
```

---

## 5. 数据层重构（SDG 复用契约）

### 5.1 核心设计

新稿 L766 起 SDG 9/12/4/17 全部遵循同一骨架：

```
### SDG N
#### S → intro prose → N 张人物卡（可含 click more）
#### C → lead prose → 三维
#### A → lead prose → 表格 → Key Findings
#### L → intro → M 个 PDF 工具卡
#### E → intro → 统计数字 → N 张实验图 → Significant
```

**因此抽象出唯一 SDG 章节契约**：

```ts
// src/data/engagement/sustainability/sdgChapterContract.ts
export interface SdgChapter {
  id: string; // "sdg3-health"
  index: string;                 // "4.1"
  title: string;                 // "SDG3: Good Health and Well-being"
  intro: string[];
  stakeholders: {
    lead: string[];
    profiles: StakeholderProfile[];
    closing: string[];
  };
  consequences: {
    lead: string[];
    shortTerm?: { heading: string; paragraphs: string[] };
    longTermIntro?: string;
    dimensions: ConsequenceDimension[];
  };
  alignment: { lead: string[]; table?: AlignmentTable; findings: string[] };
  legacy: { intro: string[]; tools: LegacyTool[] };
  evidence: {
    intro: string[];
    stats: SustainabilityStat[];
    measurable: EvidenceItem[];     // { text, figure?: FigureKey }
    significant: string[];
  };
  tracker?: { paragraphs: string[]; files: TrackerFile[] };
}
```

**复用收益**：SDG 9/12/4/17 上线时只需新增一个导出 `SdgChapter` 的文件 + `sections.push(sdg9Chapter)`，`SustainabilityPanels.tsx` **零改动**（feature key 由字段名推导）。

### 5.2 AlignmentTable（新增，承载 Why 列错位修正）

```ts
export interface AlignmentTable {
  headers: readonly string[];              // Relationship | Status | Interaction | Why
  rows: ReadonlyArray<readonly string[]>;
}
```

**数据来源**：新稿 L635–L643，按 §1 修正后录入。修正在数据层完成，**不改动源 MD**。

### 5.3 顺带修复的既有缺陷

| 缺陷 | 现状 | 修复 |
|:---|:---|:---|
| `anchorLabel("framework-architecture")` | id 不在 anchors → **线上正渲染裸 id** | 补进 anchors |
| `sustainabilityOverview.paragraphs[2..5]` | 索引寻址，重排即静默错位 | 改具名 id |
| `consequencesSection` 88% 死文案 | `shortTerm` / `social` / `economic` / `environmental` 全未渲染 | 新稿已补齐 → 全部接入 |
| 13/19 资产未引用 | 含 3 张被 ECharts 取代的图 | 清理（需同步改 `sustainabilityImages.ts` 的 `satisfies`） |
| 4 项死导出 | `scaleElements` / `sstqnClassificationCards` / `sstqnScoreSteps` / `SdgScaleContent.experts` | 删除 |
| `sdg3EvidenceExtra` | 内嵌 `"1. "` 编号与 `**bold**` 字面量 | 拆为结构化 `EvidenceItem` |
| `-sdg9/12/grow` 的 SCALE 链 | anchor id 不在 `sustainabilityAnchors` → **三条链渲染为空** | 随 key 删除自然消失 |

---

## 6. 资产映射

### 6.1 复用已有 iGEM 资产（已上传，无需重新上传）

`sustainabilityImages.ts` 中 7 个 key 已指向 `static.igem.wiki`，直接复用：

| Figure | 新稿行 | 复用 asset key | 承载形式 |
|:---|:---|:---|:---|
| Fig 1 Map of stakeholders | L21 | `overviewMapOfStakeholders` | `figure` |
| Fig 2 SCALE Model | L27 | `overviewScaleModel` | `figure` |
| Fig 3 SST-QN Network | L33 | `overviewSstQnNetwork` | `figure` |
| Fig 4 Reusable Toolkit | L39 | `overviewReusableToolkit` | `figure` |
| Fig 8 SET-DEVELOP-GROW | L81 | `frameworkSetDevelopGrow` | `figure` |
| Evidence #1（49 stakeholders） | L728 | `sdg3StakeholdersDistribution` | `figure` |
| Evidence #2（8 项改进） | L732 | `sdg3TraceableImprovements` | `figure` |

### 6.2 删除的资产（D4 —— 已被 ECharts 取代）

| Figure | 新稿行 | asset key | 处置 |
|:---|:---|:---|:---|
| Fig 5 SST-QN 分类 | L51 | `sstQnStatusClassification` | 删 key；由 `SSTQNClassificationMatrix` 覆盖 |
| Fig 6 Boundary Matrix | L57 | `sstQnBoundaryMatrix` | 删 key；由 `SdgBoundaryMatrix`(ECharts) 覆盖 |
| Fig 7 Interaction Scores | L63 | `sstQnInteractionScores` | 删 key；由 `SdgInteractionHeatmap`(ECharts) 覆盖 |

同时删除本地文件夹中对应的 `image 3.png` / `image 8.png` / `image 1.png`（仅本地产物，不上传）。

### 6.3 不需上传的资产（D2 / D3 —— 组件化）

| 源文件 | 处置 |
|:---|:---|
| image 11.png（三大核心 SDG） | **组件化重写**（`sdg-cards`），不上传 |
| image 4.png（SET/DEVELOP/GROW） | **组件化保留**（`overview-set-develop-grow`），不上传 |

### 6.4 需新上传的资产（仅 3 张）

新稿 Evidence 节有 **5 张图**，前 2 张复用已有（§6.1），后 3 张为新增实验图：

| Figure | 新稿行 | 内容 | 状态 |
|:---|:---|:---|:---|
| Evidence #3 | L736 | DC 成熟流式（CD80⁺CD86⁺ 10.33% → 22.37%） | **需上传** |
| Evidence #4 | L740 | IFN-γ⁺CD8⁺ / GzmB⁺CD8⁺ 脾细胞流式 | **需上传** |
| Evidence #5 | L744 | 肿瘤生长终点体积对比 | **需上传** |

> ⚠️ 需确认本地文件夹中哪 3 个文件对应这 3 张图。已知 `image 5.png` 与 `image 13.png` **MD5 完全相同**（`93E81F4FA20D`），疑似装配错误；`image 10.png` 内容为「CONNECT→EXPERIMENT→ANALYZE→DECIDE→DESIGN」五步路径，与 SDG 3 Evidence 语境不符。

### 6.5 PDF（已在 iGEM）

| 用途 | asset key | 状态 |
|:---|:---|:---|
| SST-QN 报告预览 | `sstQnModelConstruction09` | 已上传（53 页） |
| L 节 4 工具 × 双语 = 8 份 | `sdg3LegacyTools[].pdfs` | 已在 iGEM docs |
| Tracker + User Manual | 待补 key | **需确认是否已上传** |

---

## 7. 样式收口

| 项 | 现状 | 目标 |
|:---|:---|:---|
| 文件位置 | `src/styles/sustainability-panels.css` | 迁至 `src/styles/features/sustainability-panels.css` |
| 体积 | 54,168 B / 2,445 行 / 279 规则 | ≈15 KB |
| 删除 | 34 条死选择器（旧页脚手架 `.sust-title` / `.sust-section` / `.sust-copy` / `.sust-epigraph` / `.sust-callout` 等）+ 3D 翻转段（`.sust-sdg-card__face` / `__front` / `__back` / `is-flipped` ≈20 规则）+ 未使用 variant（`.sust-stake-card--interview` / `--field` ≈30 规则） | — |
| 新增 | `.sust-scale-rail` / `__track` / `__slider` / `__item` | 尺寸就近收口 |
| 双色层级 | `route-palette-engagement.css`：暖咖褐 `#4a2c1d` + 孔雀墨青 `#174a47` | SCALE rail 沿用 |
| 铁律 2 | `ConsequencesDimensionCard` 内联 `color` | 移入 CSS |

---

## 8. 执行步骤

| Step | 动作 | 产出 |
|:---|:---|:---|
| 0 | 修正 §1 表格错位（**在数据层完成，不改源 MD**） | 干净的 6 行表 |
| 1 | **复用 7 个已有 iGEM 图片资产**（§6.1），删 3 个被 ECharts 取代的 key；上传 3 张新增实验图（§6.4） | 资产字典 |
| 2 | 建 `sdgChapterContract.ts` + `sustainabilitySdg3.ts`（按新稿填数） | 可复用模板 |
| 3 | 重写 `sustainabilityData.ts`：接入 `consequencesSection` 全量、修 `paragraphs` 索引、补 `framework-architecture` anchor、拆 `EvidenceItem` | 纯数据层 |
| 4 | 删 3 个越界数据文件 + 4 项死导出 + 死资产 | −76 KB |
| 5 | 重写 `sustainabilityPage.ts`：4→5 section、8→11 subheading、三级 index、Alignment table | 路由数据 |
| 6 | 新建 `ScaleRail.tsx`（无圆点 + 渐变滑块 + 唤起范围） | 新组件 |
| 7 | 重写 `SustainabilityPanels.tsx`：31→13 key、删 `FrameworkIntroGrid` 重复与工具序号算术 | feature map |
| 8 | 删 10 个组件；重写 `SDGInteractiveCard`；`StakeholderProfileCard` 的 chat 改数据驱动 | 21→12 组件 |
| 9 | 裁剪 CSS 并迁至 `styles/features/` | −39 KB CSS |
| 10 | 验收：`npx tsc --noEmit` + `yarn lint` + 视觉走查 | — |

---

## 9. 验收清单

- [ ] `src/data/` 零 JSX
- [ ] `feature.key` ↔ Panels 实现 13 ↔ 13
- [ ] 无 `TOOL-0X` / `P-01` / `sust-sdg-card__eyebrow` 等机械编号与 AI 眉标
- [ ] Split 双栏左侧严格 ≤1 段（复核 `sstqn-classification` / `sstqn-score` / `framework-layers`）
- [ ] H2/H3 走 engagement 双色
- [ ] TSX 内无 `style={{width/height}}`（ECharts `width:"100%"` 白名单）
- [ ] SCALE rail：桌面固定于间隙、移动端 sticky 条、仅 SDG 3 区间淡入
- [ ] `4.1.1`~`4.1.6` 三级编号在侧边栏与正文均正确渲染
- [ ] <768px 单栏折叠，ECharts/弦图无横向溢出
- [ ] `npx tsc --noEmit` 零错误 + `yarn lint` 零警告
- [ ] 单滚动条无溢出

---

## 10. 待确认事项

1. **§1 表格 Why 列错位** — 计划在数据层修正（不改源 MD），确认可行？
2. **Evidence 3 张新图对应文件** — `image 5` 与 `image 13` MD5 相同，`image 10` 语境不符，需你指认哪 3 个文件对应 Evidence #3/#4/#5
3. **Rail 断点** — 桌面 fixed 断点建议 1024px（与 `.wiki-record` 抽屉断点对齐），确认？
4. **Tracker PDF** — Tracker + User Manual 是否已上传至 iGEM docs？
