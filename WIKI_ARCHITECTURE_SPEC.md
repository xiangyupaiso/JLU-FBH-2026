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
| :--- | :--- | :--- |
| **页面最大限制总宽** | `wiki-route-skin.css:L65` | `--route-page: 1120px;` |
| **左侧目录边栏宽度** | `wiki-route-skin.css:L63` | `--toc-w: minmax(190px, 250px);` |
| **阅读容器视口高度** | `wiki-route-skin.css:L64` | `--reader-h: calc(100dvh - var(--reader-header-h));` |
| **垫子外边缘留白** | `wiki-route-skin.css:L62` | `--reader-pad: clamp(14px, 1.8vw, 22px);` |
| **正文默认内边距** | `wiki-route-skin.css:L785` | `.wiki-article { padding: clamp(...) clamp(...); }` |

### 铁律 2：微观组件尺寸（就近收口，禁止行内写死）
- 严禁在 TSX 节点上写死硬编码尺寸（如 `style={{ height: "480px" }}`）。
- 专属组件尺寸必须写在 `src/styles/features/[page]-panels.css` 中，并通过清晰的 CSS 类名或局部 CSS 变量暴露（如 `--orbit-panel-height: 420px;`）。

---

## 六、老旧代码识别与渐进式迁移 Checklist

### 典型反模式（Bad Smells）识别：
1. ❌ **巨石文件反模式**：类似 `wetLabPages.ts` 将 5 个不同页面的数据塞在一个 40KB 巨大文件里。
2. ❌ **根目录散落反模式**：类似 `sustainability` 在 `components/wiki/` 根目录独占 19 个文件、在 `data/` 散落 8 个文件。
3. ❌ **全局打补丁反模式**：在全局 `wiki-route-skin.css` 或 `WikiRoutePage.tsx` 里写 `if (route === '/xxx')` 特判代码。
4. ❌ **多层嵌套重导反模式**：类似 `descriptionData.ts` → `descriptionPage.ts` → `projectPages.ts` 无意义的三层包装。

### 迁移新页面时的 Check List：
- [ ] 数据文件放在了对应模块子目录中（例如 `src/data/project/[page]Page.ts`）
- [ ] 数据文件中没有导入 React，没有直接书写 JSX
- [ ] 图片超过 3 张时，建立了独立的 `[page]Assets.ts`
- [ ] 自定义图表通过 `features` 插槽挂载，并在对应 `[Page]Panels.tsx` 集中导出
- [ ] 组件样式就近收口在 `src/styles/features/`，没有污染全局样式
- [ ] 路由入口 `src/contents/[page].tsx` 代码简洁纯粹（< 25 行）
- [ ] 运行 `npx tsc --noEmit` 保证 TypeScript 严格类型校验通过
