# CirCure Wiki 页面架构与代码组织规范 (Wiki Architecture & Development Spec)

> 本规范用于统一后续所有 Wiki 页面的文案迁移、资产组织、组件开发与样式尺寸管理，保证代码高可维护性与一致性。历史遗留页面按“按需重构，动则收编”的原则逐步平移。

---

## 目录

1. [核心设计原则](#一核心设计原则)
2. [页面结构分级（轻量页 vs 重度页）](#二页面结构分级)
3. [标准目录组织规范](#三标准目录组织规范)
4. [标准代码开发模板（四件套）](#四标准代码开发模板四件套)
   - [4.1 数据层（Pure Data）](#41-数据层纯净数据源)
   - [4.2 资产层（Assets 字典）](#42-资产层静态资源字典)
   - [4.3 组件层（Features 插槽）](#43-组件层可视化与交互插槽)
   - [4.4 路由入口层（Route Assembler）](#44-路由入口层极简装配)
5. [尺寸与样式收口铁律](#五尺寸与样式收口铁律)
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

---

## 二、页面结构分级

根据页面内容密度分为两类，避免简单页面过度设计，也避免重度页面代码失控：

### 1. 轻量普通页（文本主导型，如 Notebook, Safety, Contribution）

- **特征**：以章节、正文段落、静态插图（`<figure>`）、表格为主，无复杂动画或大量交互卡片。
- **文件组合（2 件套）**：
  1. `src/contents/[page].tsx`（路由装配）
  2. `src/data/[module]/[page]Page.ts`（数据真理）

### 2. 重度可视化页（富图表与交互型，如 Alternative Platform, Description, Sustainability）

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
import { platformFigures } from "./alternativePlatformAssets";

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
    { label: "Stability", value: "3 days" }
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
            "正文第二段，支持直接排查与校对。"
          ]
        },
        // 普通静态图片使用 figure block
        {
          type: "figure",
          src: platformFigures.gelVerification,
          alt: "Gel verification",
          caption: "Figure 1: Agarose gel analysis."
        },
        // 复杂自定义交互，使用 feature 插槽 key 占位
        {
          type: "feature",
          key: "interactive-orbit-view"
        }
      ]
    }
  ],
  links: [],
  next: { path: "/safety-and-security", label: "Safety and Security", title: "Safety" }
};
```

---

### 4.2 资产层：静态资源字典

- **文件路径**：`src/data/[module]/[page]Assets.ts`
- **规范**：集中管理该页面所需的图片、SVG 或 PDF 资源。防止在正文数据层混杂过长 import。

```typescript
import gelVerification from "../../assets/wiki/platform/gel-verification.png";
import orbitDiagram from "../../assets/wiki/platform/orbit-diagram.svg";

export const platformFigures = {
  gelVerification,
  orbitDiagram,
} as const;

export type PlatformFigureKey = keyof typeof platformFigures;
```

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

## 五、尺寸与样式收口铁律

严禁再出现“到处写尺寸、到处相互覆盖、找不到改动点”的混乱状况，所有开发必须遵循以下两条铁律：

### 铁律 1：宏观外壳尺寸（禁止在页面 CSS 里擅自篡改）

整站所有页面的容器大框架统一由 `src/styles/wiki-route-skin.css` 驱动。若需调整全局尺寸，认准以下对应配置：

| 调整目标 | 唯一修改位置 | 对应变量 / 选择器 |
| :------------------------- | :--------------------------- | :----------------------------------------------------- |
| **页面最大限制总宽** | `wiki-route-skin.css:L65` | `--route-page: 1120px;` |
| **左侧目录边栏宽度** | `wiki-route-skin.css:L63` | `--toc-w: minmax(190px, 250px);` |
| **阅读容器视口高度** | `wiki-route-skin.css:L64` | `--reader-h: calc(100dvh - var(--reader-header-h));` |
| **垫子外边缘留白** | `wiki-route-skin.css:L62` | `--reader-pad: clamp(14px, 1.8vw, 22px);` |
| **正文默认内边距** | `wiki-route-skin.css:L785` | `.wiki-article { padding: clamp(...) clamp(...); }` |

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
- **全站五大 Part 双色规划表**：| 模块 Part            | 整体视觉基调       | 大标题 H2 (`--route-heading-ink`) | 大标题马克笔涂刷 (`--route-marker-bg`) | 小标题 H3 (`--route-subheading-ink`) | 搭配意境与对比原理                                                                          |
  | :------------------- | :----------------- | :---------------------------------- | :--------------------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------------ |
  | **Project**    | 植物森林与生命科学 | `#243d2c`（深墨冷森绿）           | `#c4c7be`（柔和灰鼠绿）                | `#84382b`（暖陶土褐红）              | **森绿 + 赤陶红**（自然界经典原色，绿与赤土色相差 130°，完全不同色，沉稳雅致）       |
  | **Wet Lab**    | 试剂水相与实验严谨 | `#14354c`（深邃实验海蓝）         | `#c6e5f2`（冰川淡海泡蓝）              | `#88541e`（暖琥珀金棕）              | **海蓝 + 琥珀金**（冷暖互补色相差 174°，学术经典双色组合，一眼即分，典雅庄重）       |
  | **Dry Lab**    | 数据算法与科技理性 | `#153e34`（深松针墨黑青）         | `#c2ebe0`（薄荷冰绿）                  | `#633256`（深紫晶墨色）              | **松黑青 + 紫晶墨**（算法理性与数理几何，青与深冷紫相映，拓扑纵深感极强且毫不突兀）   |
  | **Engagement** | 人文走访与社会温情 | `#4a2c1d`（深沉红咖褐）           | `#f7ddce`（柔杏微光）                  | `#174a47`（深孔雀墨黛青）            | **暖咖褐 + 孔雀墨青**（暖木与冷翠互补，大地与水天相映，极具人文叙事温度与沉静感）     |
  | **Team**       | 团队活力与金色荣誉 | `#3e2d14`（深古铜黑褐）           | `#f8ecbe`（浅金麦香）                  | `#762338`（深勃艮第酒红）            | **古铜金 + 勃艮第酒红**（古典勋章与高校桂冠经典双色，金铜厚重，茜红深邃，典范感十足） |
- **工程落地契约**：
  - 各模块的双色真理唯一收敛在 `src/styles/route-palette-[module].css` 中，严禁在页面局部写死 hex。
  - 阅读器全局样式 `wiki-route-skin.css` 统一消费 `--route-subheading-ink`，确保全站所有页面自动继承对应 Part 的层级规划。

### 铁律 6：全站正文排版与统一间距层级规范 (Editorial Spacing Rhythm Contract)

为确保全站所有正文页面（Project、Wet Lab、Dry Lab、Engagement 等）视觉 UI 的绝对统一性与一致性，杜绝“忽大忽小、有组件空洞大无组件紧促”的乱象，整站必须严格遵循以下垂直律动阶梯（Vertical Rhythm Scale）：

$$\text{段落间距 (16px，最小)} < \text{小标题到底正文 (14px，贴合)} < \text{大标题到内容 (24px) = 组件间距 (24px)} < \text{正文到小标题顶 (28px，稍大)} < \text{章节切换 (44px，宏观)}$$

| 间距层级 | 标准数值 / CSS Token | 适用场景与视觉行为 |
| :--- | :--- | :--- |
| **1. 段落间距 (最小)** | `16px` (`--wiki-space-p`) | 正文段落与段落之间 (`p ↔ p`)；单向垂直流，禁止子元素 `<p>` 泄漏 `margin-bottom`。连续两个 `prose` 块相邻时自适应保持 16px，严禁产生 80px 断层。 |
| **2. 小标题顶部 (稍大)** | `28px` (`--wiki-space-subhead-top`) | 正文或内容块到下一个小标题 (`h3`) 顶部的距离，产生清晰的子话题划分呼吸感。 |
| **2b. 小标题底部 (贴合)** | `14px` (`--wiki-space-subhead-bottom`) | 小标题 (`h3`) 到其紧随的正文或内容块底部的距离，符合格式塔邻近原则，紧密吸附下文。 |
| **3. 标准内容块间距** | `24px` (`--wiki-space-block`) | 正文与组件（`.wiki-feature`）、图表（`.wiki-figure`）、表格（`.wiki-table-wrap`）、Callout 之间的上下标准流间距。 |
| **4. 大标题底部间距** | `24px` (`--wiki-space-head-bottom`) | 章节大标题 (`h2`) 到底部正文或首个内容块的距离。 |
| **4b. 首块等距铁律** | **严格等于 24px** | **当大标题下方直接跟小标题时（无引言正文），其间距严格等于大标题接正文（24px）**。首块强制 `margin-top: 0 !important`，严禁叠加小标题的 28px 顶边距。 |
| **5. 章节间距 (宏观)** | `44px` (`--wiki-space-section`) | 大章节与大章节之间 (`section + section`) 的切换距离。全站彻底废弃 128px 巨大尾白，统一保持 44px 典雅宏观分界。 |

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

---

## 六、老旧代码识别与渐进式迁移 Checklist

### 典型反模式（Bad Smells）识别

1. ❌ **巨石文件反模式**：类似 `wetLabPages.ts` 将 5 个不同页面的数据塞在一个 40KB 巨大文件里。
2. ❌ **根目录散落反模式**：类似 `sustainability` 在 `components/wiki/` 根目录独占 19 个文件、在 `data/` 散落 8 个文件。
3. ❌ **全局打补丁反模式**：在全局 `wiki-route-skin.css` 或 `WikiRoutePage.tsx` 里写 `if (route === '/xxx')` 特判代码。
4. ❌ **多层嵌套重导反模式**：类似 `descriptionData.ts` → `descriptionPage.ts` → `projectPages.ts` 无意义的三层包装。

### 迁移新页面时的 Check List

- [ ] 数据文件放在了对应模块子目录中（例如 `src/data/project/[page]Page.ts`）
- [ ] 数据文件中没有导入 React，没有直接书写 JSX
- [ ] 图片超过 3 张时，建立了独立的 `[page]Assets.ts`
- [ ] 自定义图表通过 `features` 插槽挂载，并在对应 `[Page]Panels.tsx` 集中导出
- [ ] 组件样式就近收口在 `src/styles/features/`，没有污染全局样式
- [ ] 路由入口 `src/contents/[page].tsx` 代码简洁纯粹（< 25 行）
- [ ] 运行 `npx tsc --noEmit` 保证 TypeScript 严格类型校验通过
