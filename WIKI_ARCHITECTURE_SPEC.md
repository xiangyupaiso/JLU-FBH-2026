# CirCure Wiki 页面架构与代码组织规范 (Wiki Architecture & Development Spec)

> 本规范用于统一后续所有 Wiki 页面的文案迁移、资产组织、组件开发与样式尺寸管理，保证代码高可维护性与一致性。历史遗留页面按“按需重构，动则收编”的原则逐步平移。

---

## 目录

1. [核心设计原则](#一核心设计原则)
2. [页面结构分级（轻量页 vs 重度页）](#二页面结构分级)
3. [标准目录组织规范](#三标准目录组织规范)
4. [标准代码开发模板（四件套）](#四标准代码开发模板四件套)
   - [4.1 数据层（Pure Data）](#41-数据层纯净数据源)
   - [4.2 资产层（Assets 字典与图片双轨管理规范）](#42-资产层静态资源字典与图片双轨管理规范)
   - [4.3 组件层（Features 插槽）](#43-组件层可视化与交互插槽)
   - [4.4 路由入口层（Route Assembler）](#44-路由入口层极简装配)
   - [4.5 跨页共享系统：引用文献注册表](#45-跨页共享系统引用文献注册表citation-register)
   - [4.6 跨页共享模式：正文内嵌文档块（PDF / 报告）](#46-跨页共享模式正文内嵌文档块pdf--报告)
   - [4.7 页面加载与加载动画退出规则](#47-页面加载与加载动画退出规则)
5. [尺寸与样式收口铁律](#五尺寸与样式收口铁律)
   - [铁律 8：重部件页面的滚动编排退出](#铁律-8重部件页面的滚动编排退出scroll-choreography-opt-out)
6. [老旧代码识别与渐进式迁移 Checklist](#六老旧代码识别与渐进式迁移-checklist)

---

## 一、核心设计原则

1. **关注点彻底分离（Separation of Concerns）**：
   - **文案/数据**：负责文字、段落、层级、参考文献，**严禁侵入任何 React JSX 标签**。
   - **交互/组件**：负责 Canvas/SVG/状态逻辑，不硬编码长篇学术文案。
   - **路由入口**：仅负责把通用模板、数据、组件特征拼装在一起，保持在 20 行以内。
2. **单一真理来源（Single Source of Truth）**：
   - 改文案只找 `src/data/`；改图表逻辑只找 `features/`；改宏观页面尺寸只找 `wiki-route-skin.css`。
3. **渐进式迁移（Progressive Migration）**：
   - 新建页面严格执行新规范；老页面保持稳定，仅在发生改版或维护时顺手平移，避免全局破坏。
4. **完全忠于原文与杜绝内容重复（Faithful to Text & Zero Duplication）**：
   - **完全忠于原文**：学术正文纯粹由真实文案驱动。普通叙述段落即为 `prose`，表格即为 `table`，插图即为 `figure`。严禁开发或 AI 擅自根据页面内容自行做所谓的“语义分析”并凭空捏造卡片或提炼组件。
   - **坚决杜绝内容重复**：严禁把正文里已经讲清楚的文字抽提成卡片再讲一遍，杜绝“正文一段话 + 卡片要点三句话 + 标题再来一句”的严重同义反复（此前部分页面因自作主张堆砌组件导致内容与正文严重重复，已被全盘否决）。
5. **额外组件严格用户需求驱动与通用抽取（User-Demand Driven & Reusable Extraction）**：
   - **用户明确要求**：任何额外的特殊交互/可视化组件，必须严格根据用户的额外明确要求来制作，且在制作前必须确保充分沟通并明确用户意图；凡是用户没有明确要求增设的组件，严禁自行根据内容分析添加。
   - **通用规范抽取**：当用户明确要求需要特定额外组件时，若该组件具备跨页面复用价值（例如**人物访谈卡 / 专家评语卡**、机制链路卡、候选卡等），应当将其抽象封装为规范的可复用组件，统一收纳在共享库中供各页面复用，杜绝在各页面随手编写孤儿代码。

---

## 二、页面结构分级

根据页面内容密度分为两类，避免简单页面过度设计，也避免重度页面代码失控：

### 1. 轻量普通页（文本主导型，如 Notebook, Safety, Contribution）

- **特征**：以章节、正文段落、静态插图（`<figure>`）、表格为主，无复杂动画或大量交互卡片。
- **文件组合（2 件套）**：
  1. `src/contents/[page].tsx`（路由装配）
  2. `src/data/[module]/[page]Page.ts`（数据真理）

### 2. 重度可视化页（富图表与交互型，如 Description, Alternative Platform）

- **特征**：包含复杂交互网格、动态流程图、雷达图/弦图/3D 查看器、弹窗模态框、大量高清插图。
- **文件组合（4 件套）**：
  1. `src/contents/[page].tsx`（路由装配）
  2. `src/data/[module]/[page]Page.ts`（数据真理）
  3. `src/data/[module]/[page]Assets.ts`（图片资产字典，图片 > 3 张时必选）
  4. `src/components/wiki/features/[module]/[Page]Panels.tsx`（交互卡片与插槽）
  5. `src/styles/features/[page]-panels.css`（专属微观尺寸与样式，由组件内部就近引用）

---

## 三、标准目录组织规范

```text
src/
├── contents/                              # [1] 路由入口层（超薄外壳）
│   ├── description.tsx
│   └── alternative-platform.tsx
│
├── data/                                  # [2] 数据与文案层（纯数据）
│   ├── citations/                         # 跨页共享：引用模型与索引构建（纯函数，无 React）
│   │   ├── citationTypes.ts
│   │   └── citationIndex.ts
│   ├── project/                           # 按导航分组划分子目录
│   │   ├── descriptionPage.ts
│   │   └── descriptionAssets.ts
│   ├── wet-lab/
│   │   ├── alternativePlatformPage.ts
│   │   └── alternativePlatformAssets.ts
│   ├── dry-lab/
│   └── engagement/
│
├── components/wiki/
│   ├── WikiRoutePage.tsx                  # 全局通用阅读器模板
│   ├── proseInline.tsx                    # 共享行内排版（**bold** 与 Markdown 链接）
│   ├── citations/                         # 跨页共享：全站唯一的引用文献系统实现
│   │   └── CitationRegister.tsx
│   ├── documents/                         # 跨页共享：正文内嵌文档（PDF）收展查看器
│   │   └── DocumentViewer.tsx
│   ├── WikiLineSidebar.tsx                # 全局侧边栏目录
│   ├── WikiNextRecord.tsx                 # 底部下一页卡片
│   └── features/                          # [3] 特征交互组件层
│       ├── project/
│       │   └── DescriptionPanels.tsx
│       ├── wet-lab/
│       │   └── AlternativePlatformPanels.tsx
│       └── ...
│
└── styles/                                # [4] 样式层
    ├── wiki-route-skin.css                # 全局宏观骨架与外壳尺寸（唯一宏观真理）
    ├── wiki-citations.css                 # 跨页共享：引用皮肤（只消费 --route-*）
    ├── wiki-documents.css                 # 跨页共享：文档深色卡片与收展皮肤
    ├── route-palette-[module].css         # 模块主题三色板（主色/辅色/底色）
    └── features/                          # 页面专属微观尺寸样式
        └── alternative-platform-panels.css
```

---

## 四、标准代码开发模板（四件套）

### 4.1 数据层：纯净数据源

- **文件路径**：`src/data/[module]/[page]Page.ts`
- **规范**：导出一个符合 `WikiPageContent` 规范的对象，**禁止引入 React 或 JSX**。遇到复杂交互组件，使用 `{ type: "feature", key: "slot-key" }` 占位。

```typescript
import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import { platformFigures, getPlatformImage } from "./alternativePlatformAssets";

export const alternativePlatformPage: WikiPageContent = {
  route: "/alternative-platform",
  category: "wet-lab",
  chapter: "Wet Lab / 04 of 06",
  eyebrow: "Alternative Platform",
  title: "Alternative Platform",
  lede: "A multi-target circular RNA strategy.",
  boundary: "Evidence boundary statement here.",
  visual: "platform-orbit",
  visualLabel: "Platform Workflow",
  visualSteps: ["Design", "Build", "Test"],
  facts: [
    { label: "Purity", value: ">90%" },
    { label: "Stability", value: "3 days" },
  ],
  sections: [
    {
      id: "platform-workflow",
      index: "01",
      kicker: "01 / Workflow",
      title: "Modular circular RNA workflow",
      summary: "Three-stage execution pipeline.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "正文第一段，纯文本字符串，文案同学调整一目了然。",
            "正文第二段，支持直接排查与校对。",
          ],
        },
        // 普通静态图片使用 figure block，通过解析函数获取 URL
        {
          type: "figure",
          src: getPlatformImage("gelVerification"),
          alt: platformFigures.gelVerification.alt,
          caption: platformFigures.gelVerification.caption,
        },
        // 复杂自定义交互，使用 feature 插槽 key 占位
        {
          type: "feature",
          key: "interactive-orbit-view",
        },
      ],
    },
  ],
  links: [],
  next: {
    path: "/safety-and-security",
    label: "Safety and Security",
    title: "Safety",
  },
};
```

---

### 4.2 资产层：静态资源字典与图片双轨管理规范

- **文件路径**：`src/data/[module]/[page]Assets.ts`
- **规范目标**：全站后续需挂载大量科研插图、实验胶图、机制流程图与 PDF 附件。为**彻底杜绝图片漏传、线上死链、出处无从考证以及上线前修改正文代码的风险**，所有页面的图片资产必须建立专用的静态资源字典，并严格遵循“**本地相对路径 + 官方 CDN 上传路径（未传先留空）**”的双轨管理规范。

#### 4.2.1 核心字段契约（Asset Entry Contract）

资产字典中的每一个条目必须定义为结构严谨的强类型对象，包含以下核心字段：

| 字段名称          | 类型     | 是否必填 | 规范说明与铁律要求                                                                                                                                                                                                                                               |
| :---------------- | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileName`        | `string` | **必填** | 规范化文件名。必须采用全小写英文字母、数字和短横线（`kebab-case`），如 `platform-gel-verification.webp`，严禁中文、空格和括号。                                                                                                                                  |
| `localSourcePath` | `string` | **必填** | **本地源文件相对路径**（相对于项目根目录，如 `src/assets/wiki/platform/gel-verification.png` 或 `文案集/wetlab/platform/图片和附件/gel-fig1.png`）。作为源资产的第一真理来源，确保任何人都能秒查原图与设计源稿。                                                 |
| `localSrc`        | `string` |   可选   | 本地构建阶段`import` 的静态资源变量。用于在官方 CDN 尚未就绪期间，本地启动开发服务器（`yarn dev`）时能够直接正常预览和调试。                                                                                                                                     |
| `uploadUrl`       | `string` | **必填** | **iGEM 官方静态 CDN 线上 URL**（即 `https://static.igem.wiki/teams/6056/wiki/files/...`）。**【核心铁律】未传先留空**：若该图片尚未正式上传至 iGEM 官方服务器，**此字段必须严格赋值为空字符串 `""`**！严禁擅自伪造不存在的假链接，也不得随意引用外部不稳定图床。 |
| `alt`             | `string` | **必填** | 严格的学术无障碍描述（Accessibility）。清晰概括图片核心内容，便于屏幕朗读器与评委检视。                                                                                                                                                                          |
| `caption`         | `string` |   可选   | 正式学术图注说明（如`Figure 1: Agarose gel analysis showing >90% purity of circularized products.`）。                                                                                                                                                           |
| `section`         | `string` |   可选   | 所属章节或模块名称（如`Workflow`、`Gel Analysis`），便于全局资产索引与检索。                                                                                                                                                                                     |

#### 4.2.2 资产解析与优雅降级（Resolution Helper）

每个 `[page]Assets.ts` 必须导出一个轻量解析器函数 `get[Page]Image(key)`（或统一使用 helper）：

1. **优先使用官方 CDN**：若 `uploadUrl` 非空，优先返回官方静态 CDN 地址（生产环境构建最佳实践）。
2. **本地预览回退**：若 `uploadUrl` 为空（尚未上传），自动降级使用 `localSrc` 本地预览图片。
3. **优雅留白**：若二者均未就绪，返回空字符串 `""`，结合正文数据层的 `image-placeholder` 保持严谨证据留白，杜绝前端白屏崩溃。

#### 4.2.3 标准资产字典代码模板

```typescript
import gelVerificationImg from "../../../assets/wiki/platform/gel-verification.png";
import orbitDiagramImg from "../../../assets/wiki/platform/orbit-diagram.svg";

export interface PageAssetEntry {
  fileName: string;
  localSourcePath: string;
  localSrc?: string;
  uploadUrl: string;
  alt: string;
  caption?: string;
  section?: string;
}

const CDN_BASE = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab";

export const platformFigures = {
  gelVerification: {
    fileName: "platform-gel-verification.png",
    localSourcePath: "src/assets/wiki/platform/gel-verification.png",
    localSrc: gelVerificationImg,
    // 已经上传到 iGEM 官方 CDN 的填入真实 URL
    uploadUrl: `${CDN_BASE}/platform-gel-verification.webp`,
    alt: "Gel electrophoresis verification of circRNA circularization efficiency",
    caption:
      "Figure 1: Agarose gel analysis showing >90% purity of circularized products.",
    section: "Workflow",
  },
  orbitDiagram: {
    fileName: "platform-orbit-diagram.svg",
    localSourcePath: "src/assets/wiki/platform/orbit-diagram.svg",
    localSrc: orbitDiagramImg,
    // 尚未上传到 iGEM 官方 CDN，严格留空字符串 ""
    uploadUrl: "",
    alt: "Schematic representation of the circular RNA platform workflow",
    caption:
      "Figure 2: Three-stage execution pipeline of modular circular RNA.",
    section: "Workflow",
  },
} as const satisfies Record<string, PageAssetEntry>;

export type PlatformFigureKey = keyof typeof platformFigures;

/**
 * 资产解析器：自动双轨回退
 * 1. 优先使用已上传的 iGEM 官方 CDN uploadUrl；
 * 2. 尚未上传（uploadUrl 为空）时，降级使用本地 localSrc 进行开发态预览；
 * 3. 均无时返回空串。
 */
export const getPlatformImage = (key: PlatformFigureKey): string =>
  platformFigures[key].uploadUrl || platformFigures[key].localSrc || "";
```

#### 4.2.4 数据层消费规范 (`[page]Page.ts`)

在正文数据层中消费资产字典时，推荐以下两种标准方式：

1. **已就绪/已规划图表**：

```typescript
{
  type: "figure",
  src: getPlatformImage("gelVerification"),
  alt: platformFigures.gelVerification.alt,
  caption: platformFigures.gelVerification.caption,
}
```

1. **实验待补充/绘图中图表（诚实留白）**：

```typescript
{
  type: "image-placeholder",
  filename: platformFigures.orbitDiagram.fileName,
  instruction: "Insert modular circular RNA workflow diagram once graphic design completes.",
  caption: platformFigures.orbitDiagram.caption,
}
```

#### 4.2.5 增量上传与一键回填流程（Zero Code Disruption）

通过本套双轨规范，整个资产上云流程具有**极高的鲁棒性与零破坏性**：

1. **前期撰写与排查**：前端同学和文案同学在页面中登记好条目，尚未上传的图片在 `[page]Assets.ts` 中写明 `localSourcePath`，并将 `uploadUrl` 填为 `""`。
2. **全站未传资产秒级筛查**：全队在上传前，只需在 VS Code / 编辑器中全局检索 `uploadUrl: ""`，便能立即统计出全站所有尚未上传的图片和缺失文件，**完全杜绝遗忘和缺漏**。
3. **官方批量上传**：美工或负责资产的队员通过 iGEM 官方上传工具批量上传素材，获取官方 CDN 地址。
4. **一键回填**：队员打开对应的 `[page]Assets.ts`，仅将上传后的 CDN 地址替换到对应的 `uploadUrl: "..."` 即可。
5. **零代码改动保障**：正文数据层 `[page]Page.ts`、路由入口 `[page].tsx` 以及组件层 `[Page]Panels.tsx` **100% 零修改、零回归**，一次配置，终身受益。

---

### 4.3 组件层：可视化与交互插槽

- **文件路径**：`src/components/wiki/features/[module]/[Page]Panels.tsx`
- **规范**：封装本页专属的交互、动态展示或卡片组。**必须导出一个字典构造函数 `get[Page]Features()`**，其键值与数据层中的 `key` 严格对应。

```tsx
import type { ReactNode } from "react";
import "../../../../styles/features/alternative-platform-panels.css";

export function InteractiveOrbitView() {
  return (
    <div className="platform-orbit-panel">
      {/* 复杂的交互、SVG、Canvas 或本地状态 */}
      <div className="platform-orbit-panel__canvas">
        <span>Orbit Simulation</span>
      </div>
    </div>
  );
}

/**
 * 集中输出插槽映射表
 */
export function alternativePlatformFeatures(): Record<string, ReactNode> {
  return {
    "interactive-orbit-view": <InteractiveOrbitView />,
  };
}
```

---

### 4.4 路由入口层：极简装配

- **文件路径**：`src/contents/[page].tsx`
- **规范**：代码行数控制在 25 行以内。负责串联统一模板 `WikiRoutePage`、数据、资产与样式。

```tsx
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { alternativePlatformPage } from "../data/wet-lab/alternativePlatformPage";
import { alternativePlatformFeatures } from "../components/wiki/features/wet-lab/AlternativePlatformPanels";
import "../styles/route-palette-wetlab.css";

export function AlternativePlatform() {
  return (
    <WikiRoutePage
      content={alternativePlatformPage}
      heroImage={getWetLabHeroImage(alternativePlatformPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      features={alternativePlatformFeatures()}
    />
  );
}
```

---

### 4.5 跨页共享系统：引用文献注册表（Citation Register）

> **唯一实现，全站继承。** 正典来源是 Description 页（黄金范本）的引用层，已在重构中抽取为共享模块。**严禁任何页面再自建第二套** tooltip、文献列表或跳转逻辑——否则锚点、回链、配色会立刻分叉。

**共享层文件（不属于任何单个页面）**

| 层     | 路径                                                 | 职责                                                        |
| :----- | :--------------------------------------------------- | :---------------------------------------------------------- |
| 类型   | `src/data/citations/citationTypes.ts`                | `CitationReference` / `CitationIndex` / `CitationFlashTint` |
| 纯函数 | `src/data/citations/citationIndex.ts`                | 索引构建（两种行内体例）与 `reportCitationIssues()`         |
| 组件   | `src/components/wiki/citations/CitationRegister.tsx` | 行内链接、悬停文献卡、跳转闪烁、文末列表、反向链接          |
| 皮肤   | `src/styles/wiki-citations.css`                      | 唯一皮肤，只消费 `--route-*`，各模块自动适配                |

**两种行内体例都必须支持**（体例属于文档本身，**不要**为了统一而改写稿件正文）

| 体例        | 正文写法                         | 构建函数                       | 键的推导                                                                |
| :---------- | :------------------------------- | :----------------------------- | :---------------------------------------------------------------------- |
| author-year | `…worldwide (Sung et al. 2026).` | `buildAuthorYearCitationIndex` | `authors` 首作者姓 + `volumeYear` 中的 `(YYYY)`；可用缩写或第二作者消歧 |
| numeric     | `…markers[1]`、`…in cells[3][4]` | `buildNumericCitationIndex`    | 标记数字即 `id`                                                         |

解析不到的标记**保持原样输出**（保守策略），并在 DEV 下由 `reportCitationIssues()` 打印；`[label](url)` 这类 Markdown 链接不会被误判成引用。

**文献条目统一字段化**：`{ id, authors, title, journal, volumeYear, links? }`

- `authors` → 加粗槽；`title` → 正体槽；`journal` → **斜体槽**（手册、标准、指南类文献的标题也放这里，或用 `*…*` 包住 `title`，`CitationText` 会渲染成斜体）；`volumeYear` → 等宽槽。
- **`volumeYear` 保留稿件原标点**（如 `2020;20:179.`）。规范只统一**槽位与排版**，不重写书目数据——数字顺序、分号冒号一律照抄。
- `links` 放 DOI / PMID / URL 尾巴（`label` 去掉 `https://` 前缀，同一目标的重复标识合并为一条）；没有作者的条目（数据集、工具、专利号）写 `authors: ""`。

**页面接入三步（四件套结构不变）**

1. **数据层** `src/data/[module]/[page]Page.ts`：导出 `[page]References: CitationReference[]`；正文段落**原样保留**稿件的行内标记与 `**粗体**`。
2. **特征层** `src/components/wiki/features/[module]/[Page]Panels.tsx`：模块级构建索引，并同时导出渲染器与插槽。

```tsx
const pageCitationIndex = buildNumericCitationIndex(
  page.sections,
  pageReferences,
);
reportCitationIssues("page", pageCitationIndex);

export const renderPageCitedText = createCitationRenderer(
  pageCitationIndex,
  MODULE_CITATION_FLASH,
);

function PageReferenceList() {
  return (
    <CitationReferenceList
      references={pageReferences}
      index={pageCitationIndex}
      tint={MODULE_CITATION_FLASH}
    />
  );
}

export function pageFeatures(): Record<string, ReactNode> {
  return { "page-references": <PageReferenceList /> };
}
```

3. **路由层** `src/contents/[page].tsx`：传 `inlineRenderer={renderPageCitedText}`，数据层末尾用 `{ type: "feature", key: "page-references" }` 收尾。

**锚点契约（全站统一，深链可复用）**

| 锚点          | 含义                                                           |
| :------------ | :------------------------------------------------------------- |
| `#ref-N`      | 文末第 N 条文献条目（列表项本身，带 `tabIndex={-1}` 以便聚焦） |
| `#ref-N-body` | 该条目的正文容器（行内链接用 `aria-describedby` 指向它）       |
| `#cite-N-M`   | 正文中该文献的第 M 处引用（反向链接的回跳落点）                |

**唯一需要按模块给的**是落点闪烁色 `CitationFlashTint`：用该模块 H2 墨色的低透明版（Wet Lab `rgba(20,53,76,…)`、Dry Lab `rgba(21,62,52,…)`、Project 沿用原绿色）。**其余颜色一律走 `--route-*`；不要在页面 CSS 里重写 `.wiki-cite` / `.wiki-reference-*`**。

**回归验证**：`node scripts/verify-citations.mjs` —— 对共用同一套实现的多个页面同时校验锚点、反向链接、文献文本逐字存活、author-year 与 numeric 两种行为、以及「未被引用的条目不得产生反向链接」。

---

### 4.6 跨页共享模式：正文内嵌文档块（PDF / 报告）

把一份文档（报告、表单、手册）作为正文内容展示。**统一走共享组件**，不要自己写 iframe 和外皮：

| 层   | 路径                                                                    |
| :--- | :---------------------------------------------------------------------- |
| 组件 | `src/components/wiki/documents/DocumentViewer.tsx`                      |
| 皮肤 | `src/styles/wiki-documents.css`（只消费 `--route-*`，四种模块自动适配） |

外观是一条**收窄的深色横条**（`max-width: 760px` 居中）：用模块自己的深墨（`--route-heading-ink`）作条面，条上只有**一句话**（稿件自己的图注）和一个胶囊按钮，颜色的区分只由**条面本身**承担。**没有图标、没有顶部色线、没有端点圆点、没有「PDF」小标签、没有文件名、没有副标题、没有外链/下载按钮。** 理由见铁律 5 与铁律 7（并直接受铁律 3「剔除顶部线条、滑动圆点」与铁律 4「严禁 AI 眉标与机械小字」约束）。

参考实现：Design 页的 Figure 9（`design-eda-report`）。Sustainability 页的 `SustainabilityPdfPreview` 是这套组件之前的历史实现，**待迁移**（迁移时传 `defaultOpen` 即可保持它现在常开的观感，传 `readLabel="Read the manual"` 之类可以改按钮文案）。

```tsx
<DocumentViewer
  document={{
    caption: report.caption, // 稿件为这个东西写的那句话：卡片上唯一的文字
    url: getPageDocument("reportKey"), // 必须走解析函数
  }}
  // readLabel / closeLabel 可选，默认 "Read" / "Close"
/>
```

**七条铁律**

1. **默认收起，点击才展开。** 收起态不创建 `iframe`——插件面为零；首次展开后保持挂载，避免每次开合重新加载文档、丢失阅读页位。这条是**默认行为**，页面不需要做额外的事。
2. **绝不加 `.wiki-figure` 类。** 蓝色 `FIG. nn` 徽标挂在 `.wiki-figure figcaption::before`（`wiki-rebuild.css` 的 CSS 计数器）上；**文档不是插图**，套上就会出现「FIG. 10」与正文引用的「Figure 9」互相打架——Design 页踩过这个坑。稿件那句话由 `.wiki-document__caption` 承载（15px、卡片内左对齐、白色），它是卡片的一部分，不再单独漂在正文里。
3. **文档放 `public/assets/docs/`，URL 必须走解析函数**：`get[Page]Document(key) => uploadUrl || ${import.meta.env.BASE_URL}assets/docs/<fileName>`。这样 dev 与生产同源可用；资产字典里 `uploadUrl` 在官方上传前**严格留空**（与 4.2 图片双轨规范一致）。
4. **不写行内尺寸**：卡片宽度与 frame 高度收敛在共享皮肤里（铁律 2）。
5. **卡片上的文字只能来自稿件，一个字都不许自己加。** 卡片只显示资产字典里的 `caption`——稿件为这个内嵌物写的那句话（Design 是 `Figure 9. Experimental Design Report, NC3Rs EDA.`，去掉 `Figure N` 前缀），**不带手写编号**。**禁止**在卡片上补 `title` / `meta` / 文件名 / `PDF` 徽标 / 图标：这些字都是团队没写过的话，会让同一个东西在正文里被说三遍（正文一句 + 卡片标题 + 卡片副标题），一眼就是「生成味」。正文的引入句由 `designPage.ts` 的段落承担，那是数据层的事，不要搬到卡片上。
6. **要弹窗而不是就地展开时**，在共享组件内加一个 `variant`，**不要**在页面里另写一套（否则又变成第二实现）。
7. **文档块必须一眼看出是「一个东西」，不能是图注样式。** 正文列里图表、图注、正文段落都是同一套浅色排版，早先的文档块用「图注字号 + 居中 + 灰字 + 下划线链接」拼出来，读者（包括我们自己）会把它当成上面那张图的第二段图注——Design 页的 Figure 9 就发生过。所以文档块**必须**保留深色条面 + 真按钮，靠颜色和硬边界把它从正文里切出来。改配色只能改 `--route-*` 与条内的 `--doc-*` 派生量，不许改回浅色文字块。**颜色要醒目，文字要克制，装饰要为零**——颜色由条面本身承担，不靠加线、加点、加徽标来「设计」。

**CSS 特异性提示**：`wiki-documents.css` 里每条规则都写到 `.wiki-page .wiki-document .x` 三层，这是**有意为之**，不要「顺手简化」成一层。正文列里 `.wiki-page--route .wiki-prose p`（0,2,1）与 `.wiki-page--route .wiki-prose strong`（0,2,1）会给每个 `<p>`／`<strong>` 重新上色，`.wiki-prose figure`（0,1,1）还会强制 `display:flex / align-items:center / text-align:center`；两层选择器会输在打包顺序上，而卡片是深色面，颜色一旦失效就是白字白底。

**取舍提示**：插件 surface 会引入一个独立进程的面，本身不便宜（但它**不是**滚动掉帧的主因，见铁律 8）。收起态让首屏与滚动完全不碰它；若某页文档多且不在叙事主线上，直接把动作链接放在正文里、不挂 `DocumentViewer` 也是可接受的。

---

### 4.7 页面加载与加载动画退出规则

**加载单位是当前目标页面。** 首次打开与站内跳转采用同一规则：先显示 `index.html` 的加载动画，在遮罩下加载并挂载目标路由，等待该页的全部图片与动画资源就绪，再退出加载动画、显示页面。不得将所有路由的正文、图片或动画代码集中加载，也不得只等首屏图片便把普通页面的其余图片留给滚动时加载。

1. **路由代码按页加载**：`src/contents/index.tsx` 通过 `React.lazy` + 动态 `import()` 注册各页。`src/pages.ts` 仅提供同步导航元数据；导航栏、搜索与路由表不得因静态导出而拉入全部页面。公共导航、页脚、字体及共享运行时可以共用缓存。
2. **挂载后才判断就绪**：`src/containers/App/App.tsx` 的 `Suspense` 保留加载遮罩；目标页面实际提交后，由 `PageReady` 调用唯一共享入口 `hidePageLoaderWhenReady()`。不得在路由代码仍在加载、旧页面仍在屏幕上或只有 fallback 时提前判定完成。
3. **整页资源必须就绪**：`src/utils/pageLoader.ts` 等待样式与字体，以及当前已挂载页面的所有 `<img>`（包括屏幕外、透明、滚动揭示层）、SVG `<image>`、CSS 背景与蒙版（包括伪元素）、动画视频的 poster 和可渲染首帧。图片在遮罩期间触发加载并等待 `decode()`；普通页面的 `loading="lazy"` 不得绕过这一就绪门槛。
4. **动画就绪不等于播放结束**：CSS / SVG / GSAP 动画的代码、样式与所需图片须已准备好，动画仍按原有入场、滚动或交互时机播放；无限循环动画不等待播放完成。页面加载遮罩本身的有限入场动画结束后才允许退出。
5. **唯一按点击加载例外**：Games 页的游戏本体、虚拟实验室，以及页面中明确说明点击后才加载的 PDF、图谱、3D 查看器、播放器或其他对象，可以继续按点击挂载、下载并显示自己的加载状态。页面上的封面、预览图与普通正文图片仍须提前就绪。不得把普通内容擅自归为例外；点击加载对象未打开时，不创建其实际资源节点或提前请求其应用包。
6. **跳转与失败处理**：切换页面时取消上一轮就绪判定，迟到的旧请求不能收起新页面的遮罩。图片或媒体明确报错时结束该资源等待、保留页面原有替代显示；不得以固定计时器（例如原来的 8 秒上限）把仍在加载的普通图片视为已就绪。已缓存资源可以直接复用，不强制重复下载。

#### 4.7.1 共享模板的图片准备契约（新页面自动继承）

加载策略必须由共享底座执行，页面不得另写计时器、图片扫描器或加载遮罩。

- **公共导航**：`Navbar` 的桌面与移动菜单图标默认立即加载，不等待菜单展开；共享加载器等待这些图标就绪。
- **普通正文**：`WikiRoutePage` 自动把 `heroImage` 和 `content.sections` 中全部 `figure.src` 交给 `PageImagePreloads`。`wikiPageImages()` 递归覆盖 `dbtl.stages[].blocks` 和 `split.prose / aside`，包括未展开的抽屉和未选中的阶段。以后新增、替换普通正文图只改数据层，无需再改加载逻辑。
- **自定义交互**：如果图片尚未挂载在 DOM 中，将其 URL 清单通过模板的 `preloadImages` 属性声明。可复用 Feature 也可以在自身的始终挂载部分使用共享 `PageImagePreloads`；清单从已有资产字典、访谈或协议数据派生，不复制一套 URL。`protocolPairs` 的流程图与器材图由 `WikiRoutePage` 自动收集。
- **整页兜底**：`pageLoader.ts` 读取图片预加载声明，并扫描当前已挂载页面的图片、SVG 与 CSS 图像；普通 `<img>` 即使原先标记为 `lazy`，也会在遮罩期间统一启动加载，等待实际 `load / error`，成功后再完成解码。图片还在请求时的解码拒绝不能算作加载完成。
- **首页及独立布局**：首页各章节在加载遮罩期间一起准备素材，不按滚动距离才开始下载。未使用 `WikiRoutePage` 的独立页面复用 `wikiPageImages()` 和 `PageImagePreloads`，仍由 App 的同一个 `PageReady` 判定退出。
- **资源范围**：清单只包含目标页面及公共界面的普通图片。PDF 文件、游戏包、虚拟实验室、3D 数据和播放器本体继续遵循第 5 条的点击加载例外，预览图仍属于页面图片。

```tsx
// 普通正文图已在 pageContent 的 figure blocks 中，模板会自动收集。
// 只有交互之后才挂载的普通图片需要额外声明；不要把 PDF 或游戏包传入。
<WikiRoutePage
  content={pageContent}
  heroImage={getModuleHeroImage(pageContent.route)}
  preloadImages={dialogPhotos.map((photo) => photo.src)}
  features={pageFeatures()}
/>
```

新增可复用 Feature 时，若它自己拥有图片数据，使用下面的统一声明即可；在展开条件之外声明，所有复用该 Feature 的页面都会继承：

```tsx
<>
  <PageImagePreloads sources={records.map((record) => record.image)} />
  {open ? <ImageDialog record={records[selected]} /> : null}
</>
```

加载时序回归检查：`node --test scripts/verify-page-image-loading.mjs`，覆盖隐藏导航、整页图片、未挂载的弹窗、SVG/伪元素、慢图、失败、连续切页和大型对象例外。

**验收**：浏览器 Network 中直接打开 Results 不应请求其他页面的专属正文模块；加载遮罩开始退出时 Results 的 51 张正文图片应全部加载并完成解码；模拟慢速、损坏图片与快速连续跳转，验证退出时机；打开 Games 前不请求游戏本体，点击进入后才出现对应应用请求。同时验证桌面和移动端，以及 `tsc --noEmit` 与生产构建。

---

## 五、尺寸与样式收口铁律

严禁再出现“到处写尺寸、到处相互覆盖、找不到改动点”的混乱状况，所有开发必须遵循以下八条铁律（铁律 1–7 管尺寸与排版，铁律 8 管重部件页面的滚动性能）：

### 铁律 1：宏观外壳尺寸（禁止在页面 CSS 里擅自篡改）

整站所有页面的容器大框架统一由 `src/styles/wiki-route-skin.css` 驱动。若需调整全局尺寸，认准以下对应配置：

| 调整目标             | 唯一修改位置               | 对应变量 / 选择器                                    |
| :------------------- | :------------------------- | :--------------------------------------------------- |
| **页面最大限制总宽** | `wiki-route-skin.css:L65`  | `--route-page: 1120px;`                              |
| **左侧目录边栏宽度** | `wiki-route-skin.css:L63`  | `--toc-w: minmax(190px, 250px);`                     |
| **阅读容器视口高度** | `wiki-route-skin.css:L64`  | `--reader-h: calc(100dvh - var(--reader-header-h));` |
| **垫子外边缘留白**   | `wiki-route-skin.css:L62`  | `--reader-pad: clamp(14px, 1.8vw, 22px);`            |
| **正文默认内边距**   | `wiki-route-skin.css:L785` | `.wiki-article { padding: clamp(...) clamp(...); }`  |

### 铁律 2：微观组件尺寸（就近收口，禁止行内写死）

- 严禁在 TSX 节点上写死硬编码尺寸（如 `style={{ height: "480px" }}`）。
- 专属组件尺寸必须写在 `src/styles/features/[page]-panels.css` 中，并通过清晰的 CSS 类名或局部 CSS 变量暴露（如 `--orbit-panel-height: 420px;`）。

### 铁律 3：章节大标题排版与字号规范（Section Heading Contract）

- **字号严格控制**：章节标题 `h2` 基准字号设定为 `clamp(21px, 2.2vw, 25px)`（行高 `1.35`），只需清晰大于正文（~16px–17px）即可，**严禁使用 40px–60px 的膨胀巨号**，避免打断阅读节奏。
- **冒号自动分行（Colon Break）**：凡标题包含英文冒号 `:` 或中文冒号 `：`，冒号及前置词置于上行（Lead line），冒号后详细说明独立下沉为单独一行（Sub line，`clamp(18px, 1.9vw, 22px)`，字重 600）。该逻辑在 `WikiRoutePage.tsx` 中由 `renderSectionTitle()` 自动切分，**严禁在纯数据层 `[page]Page.ts` 中硬写 `<br>`**。
- **马克笔涂刷效果（Highlighter Marker）**：标题各行通过 `.wiki-heading-marker` 渲染手绘马克笔下半部高亮涂刷，配合 `box-decoration-break: clone` 实现优雅折行包裹。高亮色彩与标题文字颜色由各模块 `route-palette-[module].css` 统一收敛。
- **水印数字比例收敛**：左后方半透序号水印（`.wiki-section-number`）等比收敛至 `clamp(48px, 5.2vw, 68px)`，透明度保持在 `0.14`（悬浮 `0.20`），仅作空间定位参照，严禁喧宾夺主。
- **严禁无意义 AI 装饰与填充**：彻底剔除顶部线条、滑动圆点、下划虚线等生成式装饰；彻底禁止 AI 生成无实际学术意义的 `kicker` 标签与 `summary` 概述，版面纯粹还原团队真实学术文案。

### 铁律 4：严禁 AI 眉标与机械小字（No-AI-Kickers & Eyebrows Ban）

- **全面禁止全大写等宽眉标（Kickers / Eyebrows）**：
  - 严禁在小节标题（`h3`）、可视化组件头部、卡片顶部放置如 `PLATFORM MECHANISM`、`TARGET SELECTION`、`CLINICAL RATIONALE` 等全大写、拉宽字距、冷冰生硬的英文伪分类小字。
  - **信息处置原则（Information Repositioning）**：
    1. **同义反复/虚词废话**（如 `PLATFORM MECHANISM` 之于 `Full-Chain Verification Pipeline`、`TARGET SELECTION` 之于 `Antigen Module`）：**直接彻底删除**，保留纯粹主标题。
    2. **从属/层次关系**：若确实需要表达两层含义，融入主标题并使用冒号连接（如 `Antigen Module: Target Selection`），自动触发冒号断行，两行均受马克笔高亮保护。
    3. **实体药理/属性分类**（如靶点的 `Epithelial glycoprotein`）：作为主标题旁的微型优雅药理 pill 标签展示，不搞黑框与大写。
    4. **描述性段落/临床依据**（如 `High expression in >85% of TNBC tumors...`）：直接作为卡片正文或带左侧微装饰细线的自然说明呈现，严禁用 `CLINICAL RATIONALE` 字段名机械顶格。
- **清除 AI 模板装饰符号**：
  - 彻底去除小节标题左侧的彩色竖线（`.wiki-subheading::before`）。
  - 彻底去除卡片多余的货号式编号（如 `TARGET 01`、`CARD 02`），还原真实科研展示的高级感与人文阅读体验。

### 铁律 5：大标题与小标题双色层级设计规范（Dual-Tone Heading Hierarchy）

- **杜绝单色沉闷、同时杜绝同色系近色混淆**：
  - 严禁小标题（`h3`）与大标题（`h2`）复用同一种颜色或同一种色系深浅变体（如绿配绿、蓝配蓝，极易导致视觉疲劳且层级区分度不足）。
  - 大标题与小标题必须跨色相选取**“完全不相近、但符合出版物经典配色的和谐双色组合”**，既一眼区分层级，又维持典雅克制的学术纸本气质。
- | **全站五大 Part 双色规划表**： | 模块 Part          | 整体视觉基调              | 大标题 H2 (`--route-heading-ink`) | 大标题马克笔涂刷 (`--route-marker-bg`) | 小标题 H3 (`--route-subheading-ink`)                                                  | 搭配意境与对比原理 |
  | :----------------------------- | :----------------- | :------------------------ | :-------------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------ | ------------------ |
  | **Project**                    | 植物森林与生命科学 | `#243d2c`（深墨冷森绿）   | `#c4c7be`（柔和灰鼠绿）           | `#84382b`（暖陶土褐红）                | **森绿 + 赤陶红**（自然界经典原色，绿与赤土色相差 130°，完全不同色，沉稳雅致）        |
  | **Wet Lab**                    | 试剂水相与实验严谨 | `#14354c`（深邃实验海蓝） | `#c6e5f2`（冰川淡海泡蓝）         | `#88541e`（暖琥珀金棕）                | **海蓝 + 琥珀金**（冷暖互补色相差 174°，学术经典双色组合，一眼即分，典雅庄重）        |
  | **Dry Lab**                    | 数据算法与科技理性 | `#153e34`（深松针墨黑青） | `#c2ebe0`（薄荷冰绿）             | `#633256`（深紫晶墨色）                | **松黑青 + 紫晶墨**（算法理性与数理几何，青与深冷紫相映，拓扑纵深感极强且毫不突兀）   |
  | **Engagement**                 | 人文走访与社会温情 | `#4a2c1d`（深沉红咖褐）   | `#f7ddce`（柔杏微光）             | `#174a47`（深孔雀墨黛青）              | **暖咖褐 + 孔雀墨青**（暖木与冷翠互补，大地与水天相映，极具人文叙事温度与沉静感）     |
  | **Team**                       | 团队活力与金色荣誉 | `#3e2d14`（深古铜黑褐）   | `#f8ecbe`（浅金麦香）             | `#762338`（深勃艮第酒红）              | **古铜金 + 勃艮第酒红**（古典勋章与高校桂冠经典双色，金铜厚重，茜红深邃，典范感十足） |
- **工程落地契约**：
  - 各模块的双色真理唯一收敛在 `src/styles/route-palette-[module].css` 中，严禁在页面局部写死 hex。
  - 阅读器全局样式 `wiki-route-skin.css` 统一消费 `--route-subheading-ink`，确保全站所有页面自动继承对应 Part 的层级规划。

### 铁律 6：全站正文排版与统一间距层级规范 (Editorial Spacing Rhythm Contract)

为确保全站所有正文页面（Project、Wet Lab、Dry Lab、Engagement 等）视觉 UI 的绝对统一性与一致性，杜绝“忽大忽小、有组件空洞大无组件紧促”的乱象，整站必须严格遵循以下垂直律动阶梯（Vertical Rhythm Scale）：

$$
\text{段落间距 (16px，最小)} < \text{小标题到底正文 (14px，贴合)} < \text{大标题到内容 (24px) = 组件间距 (24px)} < \text{正文到小标题顶 (28px，稍大)} < \text{章节切换 (44px，宏观)}
$$

| 间距层级                  | 标准数值 / CSS Token                   | 适用场景与视觉行为                                                                                                                                    |
| :------------------------ | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. 段落间距 (最小)**    | `16px` (`--wiki-space-p`)              | 正文段落与段落之间 (`p ↔ p`)；单向垂直流，禁止子元素 `<p>` 泄漏 `margin-bottom`。连续两个 `prose` 块相邻时自适应保持 16px，严禁产生 80px 断层。       |
| **2. 小标题顶部 (稍大)**  | `28px` (`--wiki-space-subhead-top`)    | 正文或内容块到下一个小标题 (`h3`) 顶部的距离，产生清晰的子话题划分呼吸感。                                                                            |
| **2b. 小标题底部 (贴合)** | `14px` (`--wiki-space-subhead-bottom`) | 小标题 (`h3`) 到其紧随的正文或内容块底部的距离，符合格式塔邻近原则，紧密吸附下文。                                                                    |
| **3. 标准内容块间距**     | `24px` (`--wiki-space-block`)          | 正文与组件（`.wiki-feature`）、图表（`.wiki-figure`）、表格（`.wiki-table-wrap`）、Callout 之间的上下标准流间距。                                     |
| **4. 大标题底部间距**     | `24px` (`--wiki-space-head-bottom`)    | 章节大标题 (`h2`) 到底部正文或首个内容块的距离。                                                                                                      |
| **4b. 首块等距铁律**      | **严格等于 24px**                      | **当大标题下方直接跟小标题时（无引言正文），其间距严格等于大标题接正文（24px）**。首块强制 `margin-top: 0 !important`，严禁叠加小标题的 28px 顶边距。 |
| **5. 章节间距 (宏观)**    | `44px` (`--wiki-space-section`)        | 大章节与大章节之间 (`section + section`) 的切换距离。全站彻底废弃 128px 巨大尾白，统一保持 44px 典雅宏观分界。                                        |

### 铁律 7：全局基准与页面独有资产分工原则 (Global Baseline vs. Scoped Features Principle)

为防止“牵一发而动全身”并杜绝底座代码臃肿，团队必须清晰划分**“必须写进总体的”**与**“绝不写进总体的”**：

1. **必须写在总体的规范（全局基础设施，收敛在 `wiki-route-skin.css`）**：
   - 宏观阅读器外壳尺寸（`--route-page`, `--toc-w`, `--reader-h`）。
   - 全局垂直节奏阶梯（铁律 6 规定的 16px / 24px / 28px / 44px 及容器重置）。
   - 标题马克笔折行与双色系统契约。
   - 凡是约束**“全站正文基本面貌一致性”**的基础规则，必须统一收敛在全局。
2. **严禁写在总体的特例（页面独有资产，收敛在 `[page]-panels.css`）**：
   - 某个页面特有的自定义可视化（如 Description 的 8 步机制链 CSS、四抗原卡片网格；Sustainability 的 3D 旋转立体卡片；Experiments 的专属 Protocol 步骤抽屉）。
   - 这些页面的独有组件与微观样式，必须存放在 `src/components/wiki/features/[module]/` 与 `src/styles/features/` 中。
   - 组件内部容器的外部外边距一律 `margin: 0`，由全局 `.wiki-feature` 统一提供 24px 外间距。
   - **复用原则**：后续其他页面若需要使用相同的交互模式（如其他页面也要用机制链或四卡片），直接复制或抽取通用组件，**绝不允许为了适配某个页面的特殊形状，在全局基础样式里打 `if` 特判或写死例外类名**。

### 铁律 8：重部件页面的滚动编排退出（Scroll Choreography Opt-out）

**先记住骨架机制（这是判断依据）**：阅读器的滚动由主线程投影驱动（`useWetLabScrollRoute`：文档持有滚动条，每帧把位置投影回被钉住的文章容器，`inner.scrollTop = next`）；同时 `useWikiPageMotion` 在**每一帧**重写 `--wiki-section-reveal / focus / shift / drift`，而 `wetlab-editorial.css` 把它消费成：

```css
.wiki-page.wiki-page--manuscript .wiki-feature {
  transform: translate3d(0, var(--wiki-section-drift), 0);
  will-change: transform;
}
```

`--wiki-section-drift` 是**带小数的连续值**（`12 − progress × 24`），再叠加 `wiki-rebuild.css` 给每个 `[data-wiki-reveal]` 的 680ms opacity + translate 过渡——等于每个 feature 图层**每帧都被重新定位**。

**结论**：每帧代价 **∝ 该 feature 图层内内容的绘制复杂度**。小卡片免费；当一个 feature 里放进几千节点（矢量 SVG、`clip-path`、长列表、内嵌插件面）时，每帧的小数偏移都让主线程重栅格化整层 → 掉帧。**这与页面文案长度无关**，所以「文字更长的页面反而更流畅」是正常现象。

**规范**：当某页 feature 插槽偏重（节点数量级达数百，或含 SVG 图谱 / `clip-path` / 长列表 / `iframe`）时，**必须**为该页声明编排退出：

```css
/* 作用域优先取 slot 级：正文、图表、标题的入场与视差全部保留 */
.wiki-page[data-wiki-route="/<route>"] .wiki-feature,
.wiki-page[data-wiki-route="/<route>"] .wiki-feature[data-wiki-reveal] {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
  will-change: auto !important;
}
```

- **作用域升级规则**：先试 slot 级；只有整页都重时才升级到 route 级并顺带关掉 section `::before` 的视差。既有先例：`/experiments`（route 级，见 `experiments-panels.css` 的 "Pre-rendered Full Paint & Performance Overrides"）、`/engineering`（page 级，见 `engineering-experience.css`）。
- **视觉代价（已知且接受）**：这些插槽不做入场淡入、不做视差浮动，内容一开始就在那里、滚动时不浮动。这是**取舍**，换来可用帧率——不要再花力气把它「加回来」。
- **禁止**为了绕过它去改全局 `wetlab-editorial.css` / `wiki-rebuild.css`：编排是阅读器的全局设计语言，退出必须由页面自己声明（铁律 7）。
- 页面专属的其它性能手段同理就近收口在该页 `[page]-panels.css`（如给静态重部件 `contain: layout paint` / `will-change: transform` 一次性纹理、给长列表的每一行加 `contain`、把重复刻度改成一条 CSS 渐变）。

**自查工具**：`node scripts/measure-page-weight.mjs` —— 打印每个路由 feature 子树的节点数（含只在浏览器渲染的列表行）与最重元素统计。**新页面合入前跑一次**；数字明显高于同级页面时，先考虑减少节点 / 列表虚拟化，再考虑退出编排。

---

## 六、老旧代码识别与渐进式迁移 Checklist

### 典型反模式（Bad Smells）识别

1. ❌ **巨石文件反模式**：类似 `wetLabPages.ts` 将 5 个不同页面的数据塞在一个 40KB 巨大文件里。
2. ❌ **根目录散落反模式**：类似 `sustainability` 在 `components/wiki/` 根目录独占 19 个文件、在 `data/` 散落 8 个文件。
3. ❌ **全局打补丁反模式**：在全局 `wiki-route-skin.css` 或 `WikiRoutePage.tsx` 里写 `if (route === '/xxx')` 特判代码。
4. ❌ **多层嵌套重导反模式**：类似 `descriptionData.ts` → `descriptionPage.ts` → `projectPages.ts` 无意义的三层包装。
5. ❌ **第二套引用系统反模式**：页面自建 tooltip / 文献列表 / 跳转逻辑，导致锚点、回链、配色全站分叉（见 4.5）。
6. ❌ **重部件裸挂反模式**：把数千节点的交互部件直接放进 feature 插槽却不声明编排退出，页面滚动掉帧（见铁律 8）。
7. ❌ **文档冒充插图反模式**：给内嵌 PDF 的文档块套上 `.wiki-figure`，于是蓝色 `FIG. nn` 徽标与正文的「Figure N」编号打架；或绕开共享 `DocumentViewer` 自写 iframe（见 4.6）。
8. ❌ **文档冒充图注反模式**：把内嵌文档块做成「图注字号 + 居中 + 灰字 + 下划线链接」，读者会当成上面那张图的第二段图注（Design 页 Figure 9 的真实反馈）；深色条面与真按钮必须都在（见 4.6 铁律 7）。
9. ❌ **卡片自己加话反模式**：在文档卡片上补稿件里没有的标题 / 副标题 / 文件名 / `PDF` 徽标 / 图标，把同一件事说三遍，读者一眼看出是生成的装饰（见 4.6 铁律 5）。
10. ❌ **给卡片加装饰反模式**：在文档条上加顶部色线、端点圆点之类的「设计感」小装饰——直接违反铁律 3，Design 页的 Figure 9 卡片加过一次，被一眼认出并删掉（见 4.6）。
11. ❌ **自作主张增设组件与内容重复反模式**：开发/AI 自行分析页面正文，擅自编造提炼 aside mini-visual 或卡片，导致正文与卡片内容严重重复、阅读体验冗余混乱。除用户明确要求外，正文必须全宽自然舒展排版。

### 迁移新页面时的 Check List

- [ ] 正文完全忠于原文，没有自行根据文案做“分析增设”多余组件而导致内容重复
- [ ] 页面中所有额外交互/可视化组件均来自用户的明确要求，且已明确用户意图
- [ ] 若包含人物访谈卡、机制链、候选卡等通用组件，已优先走规范共享复用模式
- [ ] 数据文件放在了对应模块子目录中（例如 `src/data/project/[page]Page.ts`）
- [ ] 数据文件中没有导入 React，没有直接书写 JSX
- [ ] 图片建立了独立的 `[page]Assets.ts` 资产字典（遵循双轨规范）
- [ ] 资产字典严格包含 `localSourcePath`（本地相对路径）与 `uploadUrl`（官方 CDN URL）
- [ ] 尚未上传官方 CDN 的图片，`uploadUrl` 明确保持为空字符串 `""`，杜绝死链与假图
- [ ] 正文数据层通过资产解析函数或解构字典安全消费，图片回填上线时数据层零修改
- [ ] 自定义图表通过 `features` 插槽挂载，并在对应 `[Page]Panels.tsx` 集中导出
- [ ] 需要引用文献时复用了共享 register（`data/citations` + `components/wiki/citations` + `styles/wiki-citations.css`），没有自建第二套
- [ ] 文献条目为字段化格式（`authors` / `title` / `journal` / `volumeYear` / `links`），`volumeYear` 保留稿件原标点
- [ ] 内嵌文档走共享 `DocumentViewer`（默认收起、展开才挂 iframe）、未套 `.wiki-figure`、URL 走 `get[Page]Document()`、文件位于 `public/assets/docs/`
- [ ] 内嵌文档块保留了深色条面 / 真按钮，没有退化成图注样式（4.6 铁律 7）
- [ ] 文档卡片上的文字**只有**资产字典的 `caption`，没有自加标题 / 副标题 / 文件名 / `PDF` 徽标 / 图标（4.6 铁律 5）
- [ ] 文档条上没有顶部色线、端点圆点等装饰（铁律 3；4.6 反模式 10）
- [ ] 若 feature 插槽偏重（数百节点 / SVG 图谱 / `clip-path` / 长列表 / `iframe`），已加 `data-wiki-route` 编排退出（铁律 8）
- [ ] 已运行 `node scripts/measure-page-weight.mjs`，该页 feature 节点数没有明显高于同级页面
- [ ] 组件样式就近收口在 `src/styles/features/`，没有污染全局样式
- [ ] 路由入口 `src/contents/[page].tsx` 代码简洁纯粹（< 25 行）
- [ ] 运行 `npx tsc --noEmit` 保证 TypeScript 严格类型校验通过
- [ ] 若页面有文案稿件：跑对应忠实度探针（如 `scripts/verify-hardware-faithfulness.mjs`），确认正文与表格文字逐字存活
- [ ] 若页面有交互部件：跑几何 / 渲染探针（如 `scripts/verify-design-construct.mjs` / `verify-design-render.mjs`）
