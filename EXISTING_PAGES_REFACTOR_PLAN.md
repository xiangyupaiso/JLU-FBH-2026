# 已落地 Wiki 页面架构重构方案与迁移计划 (Existing Pages Refactoring Plan)

> **文档说明**：本计划针对当前已落地的页面（Description、Hardware、Sustainability、Wet Lab 5 合 1 巨石文件等）中存在的架构反模式与维护痛点，提供**详尽的解耦方案、文件重组蓝图及分阶段迁移排期**。
> **原则**：**方案先行，谋定后动；改动期间保证零运行时破坏、零文案篡改、渐进式迁移。**

---

## 目录

1. [重构目标与执行铁律](#一重构目标与执行铁律)
2. [四大核心问题页面深度诊断与目标架构](#二四大核心问题页面深度诊断与目标架构)
   - [2.1 Wet Lab：五合一巨石文件解耦](#21-wet-lab五合一巨石文件解耦)
   - [2.2 Hardware：彻底消除运行时裸 Markdown 正则解析](#22-hardware彻底消除运行时裸-markdown-正则解析)
   - [2.3 Sustainability：消除根目录散落与全局核心特判侵入](#23-sustainability消除根目录散落与全局核心特判侵入)
   - [2.4 Description：解除三层套娃跳转与扁平化合并](#24-description解除三层套娃跳转与扁平化合并)
   - [2.5 衍生关联页面诊断（Engagement 四合一、Project 三合一、HP 超大单文件）](#25-衍生关联页面诊断)
3. [重构前后的目录结构对照蓝图 (Before vs. After)](#三重构前后的目录结构对照蓝图)
4. [分阶段实施路线图与执行工期 (Roadmap)](#四分阶段实施路线图与执行工期)
5. [零风险平滑演进与防破坏验收策略](#五零风险平滑演进与防破坏验收策略)

---

## 一、重构目标与执行铁律

### 核心目标

1. **消除代码心理负担**：改文案必能在 `src/data/[module]/[page]Page.ts` 单点定位，改组件必在 `features/` 单点定位，改尺寸必在 `wiki-route-skin.css` 或专属局部 CSS 单点定位。
2. **对齐规范**：所有存量页面全面向 [WIKI_ARCHITECTURE_SPEC.md](./WIKI_ARCHITECTURE_SPEC.md) 标准演进。
3. **消除运行时技术隐患**：下线手写正则 Markdown 动态解析器与通用底座中的私有硬编码特判。

### 改造期间三大铁律

1. **Verbatim 逐字不变**：重构仅改变代码的文件组织和数据抽象形态，绝对不增减、篡改或润色学术出版正文。
2. **向下兼容过渡（Facade Re-export）**：拆分旧大文件时，旧文件先保留 `re-export` 别名，确保页面路由和全局引用在重构的任何阶段均不发生白屏或构建报错。
3. **步步通过类型检查**：每完成一个独立模块的拆分，必须立即运行 `npx tsc --noEmit` 校验，保证零错误后方可进入下一阶段。

---

## 二、四大核心问题页面深度诊断与目标架构

---

### 2.1 Wet Lab：五合一巨石文件解耦

#### 现状诊断

- **痛点文件**：[src/data/wetLabPages.ts](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/wetLabPages.ts>)（共 908 行，40KB）。
- **包含内容**：将 `/experiments`、`/notebook`、`/measurement`、`/alternative-platform`、`/safety-and-security` **5 个独立页面的全部章节数据塞进同一个文件**。
- **并发症**：
  - 找一个错别字要在近千行代码中搜索，难以分工协作；
  - [src/contents/alternative-platform.tsx](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/contents/alternative-platform.tsx>) 竟然跨越其他 4 个页面的数据来读取自己；
  - 组件层 [src/components/wiki/features/WetLabFeatures.tsx](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/features/WetLabFeatures.tsx>)（17KB）同样将多个页面的 Orbit 轨道、工作流、证据矩阵、实验生长曲线混杂在一起。

#### 目标改造方案

1. **新建模块子目录** `src/data/wet-lab/`，将 5 个页面拆为独立文件：
   - `experimentsPage.ts`
   - `notebookPage.ts`
   - `measurementPage.ts`
   - `alternativePlatformPage.ts`（以及对应的 `alternativePlatformAssets.ts`）
   - `safetyPage.ts`
2. **拆分组件层**：
   - 在 `src/components/wiki/features/wet-lab/` 中建立专属 `AlternativePlatformPanels.tsx`（收纳 `PlatformOrbit`, `PlatformWorkflow`, `PlatformEvidenceMatrix`）。
3. **路由入口更新**：
   - 5 个入口（`alternative-platform.tsx` 等）改为直接从 `../data/wet-lab/[page]Page` 导入。
4. **平滑过渡措施**：
   - 原 `wetLabPages.ts` 保留并改为重导出层（`export * from "./wet-lab/..."`），确保旧引用不崩。

---

### 2.2 Hardware：彻底消除运行时裸 Markdown 正则解析

#### 现状诊断

- **痛点文件**：[src/data/hardwareMarkdown.ts](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/hardwareMarkdown.ts>)（共 402 行）。
- **运行机制**：
  ```typescript
  import hardwareMarkdown from "./drylab/Hardware.md?raw";
  // 手写了 400 行正则：unescapeMarkdown, splitTableRow, parseTable, slugify, isTableDivider...
  ```
- **核心风险**：
  - **脆弱性极高**：文案只要稍微修改一段 Markdown 里的表格空行、中文标点或缩进，手写正则就会解析错乱甚至漏掉整个章节。
  - **丧失高级排版能力**：无法使用 `WikiContentBlock` 的高级特性（如 `split` 伴随双栏、`callout` 色彩控制、`image-placeholder` 证据留白等）。
  - **性能与类型隐患**：每次客户端渲染都要在浏览器中进行耗时的字符串正则匹配，且无法获得编译期的静态数据类型检查（`WikiPageContent`）。

#### 目标改造方案

1. 将 `Hardware.md` 静态编译/转化为标准的 TypeScript 纯数据文件：`src/data/dry-lab/hardwarePage.ts`。
2. 严格按 `WikiPageContent` 的 schema，将原 Markdown 中的标题、段落、参数对比表、硬件示意图转化为标准 blocks。
3. 彻底删除 `hardwareMarkdown.ts` 中脆弱的 400 行自定义正则解析器。
4. [src/contents/hardware.tsx](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/contents/hardware.tsx>) 直接加载静态纯数据。

---

### 2.3 Sustainability：消除根目录散落与全局核心特判侵入

#### 现状诊断

- **痛点文件**：
  - 数据层在 `src/data/` 根目录散落 **8 个孤立文件**：`sustainabilityData.ts` (56KB), `sustainabilityPage.ts` (13KB), `sustainabilityGrow.ts` (17KB), `sustainabilitySdg9.ts` (31KB), `sustainabilitySdg12.ts` (26KB), `sustainabilityAssets.ts`, `sustainabilityImages.ts`, `sustainabilitySdgNetwork.ts`。
  - 组件层独占根目录 `src/components/wiki/sustainability/`，内含 **19 个组件**。
  - 全局代码被私有特判污染：
    - [WikiRoutePage.tsx:L532](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/WikiRoutePage.tsx#L532>)：
      `content.route === "/sustainability" && window.matchMedia(...)`
    - [wiki-route-skin.css:L1540](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/styles/wiki-route-skin.css#L1540>)：
      `.wiki-page--route.route--sustainability-flow .route-frame`
    - [sustainability-panels.css:L2022](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/styles/sustainability-panels.css#L2022>)：
      `.wiki-page[data-wiki-route="/sustainability"] .wiki-article`

#### 目标改造方案

1. **数据层收拢归位**：
   - 创建 `src/data/engagement/sustainability/` 专属子目录，将这 8 个碎片文件归置其中；
   - 统一由 `src/data/engagement/sustainability/index.ts`（或 `sustainabilityPage.ts`）对外输出唯一的 `sustainabilityPage`。
2. **组件层归位**：
   - 将 `src/components/wiki/sustainability/` 移入 `src/components/wiki/features/engagement/sustainability/`；
   - 保持 [SustainabilityPanels.tsx](<file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/features/SustainabilityPanels.tsx>) 的集中插槽导出。
3. **拔除全局代码中的私有补丁**：
   - 将 `WikiRoutePage.tsx` 中的 `desktopSustainabilityFlow` 特判重构为通用能力（如 `WikiRoutePageProps.enableWideFlow?: boolean`），不再通过字符串 `route === "/sustainability"` 硬编码特判。
   - 清理 `wiki-route-skin.css` 中仅针对 sustainability 的私有选择器，下沉到 `sustainability-panels.css`。

---

### 2.4 Description：解除三层套娃跳转与扁平化合并

#### 现状诊断

- **链路断层**：
  ```text
  descriptionData.ts (纯正文与文献列表 34KB)
      └── 被 descriptionPage.ts (拼装 sections 13KB) 引用
              └── 被 projectPages.ts (重新包裹 re-export 14KB) 引用
                      └── 最后由 src/contents/description.tsx 导入
  ```
- **问题**：改一句话要在 3 个文件之间往返跳转；且 `descriptionPage` 与其他项目页被打包在 `projectPages.ts` 中，概念模糊。

#### 目标改造方案

1. **扁平化收口**：
   - 创建 `src/data/project/descriptionPage.ts`，将纯文字数据与 section 结构合并；
   - 将其中的 6 篇学术参考文献直接内联在对应模块末尾（或作为统一文献数据导出）；
   - 将图片资源抽离到标准的 `src/data/project/descriptionAssets.ts`。
2. **解除套娃**：
   - `src/contents/description.tsx` 直接指向 `../data/project/descriptionPage`，彻底移出 `projectPages.ts`。

---

### 2.5 衍生关联页面诊断

除了上述 4 个重点页面外，代码库中还存在类似问题的存量页面，需一并列入后续收编计划：

1. **`engagementPages.ts` (四合一巨石)**：
   - 塞入了 `entrepreneurship`, `humanPractices`, `education`, `inclusivity` 四个页面的全部数据；
   - 建议按模块拆解到 `src/data/engagement/[page]Page.ts`。
2. **`projectPages.ts` (三合一巨石)**：
   - 塞入了 `engineering`, `results`, `contribution`；
   - 建议拆解到 `src/data/project/[page]Page.ts`。
3. **`HumanPracticesPanels.tsx` (52KB 巨型组件)**：
   - 单个文件 52KB，塞满了各种各样的 Stakeholder 画像卡、时间轴图表、伦理审查面板；
   - 建议按功能卡片拆分出子组件，由 `HumanPracticesPanels.tsx` 集中组装。

---

## 三、重构前后的目录结构对照蓝图

### 当前现状 (Before - 混乱与分散)

```text
src/
├── contents/
│   ├── alternative-platform.tsx   ──> 引用 ../data/wetLabPages.ts (908行巨石)
│   ├── hardware.tsx               ──> 引用 ../data/hardwareMarkdown.ts (动态手写正则解析器)
│   ├── description.tsx            ──> 引用 ../data/projectPages (三层重导)
│   └── sustainability.tsx         ──> 引用 ../data/sustainabilityPage
│
├── data/                          # 20+ 个文件全部平铺在根目录
│   ├── descriptionData.ts
│   ├── descriptionPage.ts
│   ├── projectPages.ts            # 混合工程、贡献、结果与描述
│   ├── hardwareMarkdown.ts        # 400行自定义解析器
│   ├── sustainabilityData.ts      # 8个以 sustainability 开头的碎片
│   ├── sustainabilityGrow.ts
│   ├── sustainabilitySdg9.ts
│   ├── sustainabilitySdg12.ts
│   ├── ...
│   └── wetLabPages.ts             # 908行，硬塞5个页面
│
└── components/wiki/
    ├── sustainability/            # 独占根目录的19个组件
    └── features/                  # 其他所有组件平铺混杂在这里
        ├── WetLabFeatures.tsx     # 混杂多个湿实验图表
        └── HumanPracticesPanels.tsx (52KB)
```

---

### 重构后目标蓝图 (After - 模块化闭环与高可维护)

```text
src/
├── contents/                              # 超薄装配层 (<20行)
│   ├── alternative-platform.tsx
│   ├── hardware.tsx
│   ├── description.tsx
│   └── sustainability.tsx
│
├── data/                                  # 按一级分组，每页一个标准纯数据文件
│   ├── project/
│   │   ├── descriptionPage.ts
│   │   ├── descriptionAssets.ts
│   │   ├── engineeringPage.ts
│   │   └── resultsPage.ts
│   ├── wet-lab/
│   │   ├── alternativePlatformPage.ts
│   │   ├── alternativePlatformAssets.ts
│   │   ├── experimentsPage.ts
│   │   ├── notebookPage.ts
│   │   ├── measurementPage.ts
│   │   └── safetyPage.ts
│   ├── dry-lab/
│   │   ├── hardwarePage.ts                # 静态标准数据，零正则运行时
│   │   ├── modelPage.ts
│   │   └── softwarePage.ts
│   └── engagement/
│       ├── sustainability/                # 专属子目录隔离
│       │   ├── sustainabilityPage.ts
│       │   └── ...
│       ├── humanPracticesPage.ts
│       └── educationPage.ts
│
├── components/wiki/
│   ├── WikiRoutePage.tsx                  # 纯粹的通用骨架，无任何页面私有特判
│   ├── WikiLineSidebar.tsx
│   ├── WikiNextRecord.tsx
│   └── features/                          # 按业务模块归类
│       ├── project/
│       │   └── DescriptionPanels.tsx
│       ├── wet-lab/
│       │   └── AlternativePlatformPanels.tsx
│       ├── dry-lab/
│       │   └── HardwarePanels.tsx
│       └── engagement/
│           ├── sustainability/            # 统一收归到 features 下
│           └── HumanPracticesPanels.tsx
│
└── styles/
    ├── wiki-route-skin.css                # 唯一宏观尺寸真理（无任何私有页面补丁）
    └── features/                          # 各页面专属微观尺寸
        ├── description-panels.css
        ├── alternative-platform-panels.css
        └── sustainability-panels.css
```

---

## 四、分阶段实施路线图与执行工期 (Roadmap)

整个重构采用**“低风险先行、逐页解耦、测试随行”**的 5 个阶段排期：

| 阶段              | 任务目标                                          | 涉及文件                                                                                   | 风险评估 | 验收标准                                                     |
| :---------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| **Phase 1** | **Wet Lab 五合一巨石解耦**                  | `src/data/wetLabPages.ts` → `src/data/wet-lab/*`                                      | 极低     | 5 个湿实验页面正文文本与章节不变，`tsc` 0 报错             |
| **Phase 2** | **Hardware 静态化与消除运行时正则**         | 编译`Hardware.md` 为 `hardwarePage.ts`，下线 `hardwareMarkdown.ts`                   | 低       | 硬件页面参数表格、章节层级与原效果完全一致，彻底移除`?raw` |
| **Phase 3** | **Description 扁平化归位**                  | 合并`descriptionData` + `descriptionPage`，脱离 `projectPages`                       | 极低     | 消除 3 层跳转，Description 页面无缝加载                      |
| **Phase 4** | **Sustainability 归档与消除全局硬编码特判** | 移动 19 个组件至`features/`，重构 `WikiRoutePage` 中的 `route === '/sustainability'` | 中       | 拔除通用底座中的特判，页面外观及滚动交互无回归异常           |
| **Phase 5** | **Engagement & Project 剩余巨石拆分**       | 拆分`engagementPages.ts` 与 `projectPages.ts`                                          | 极低     | 所有平铺数据文件全部归入模块子目录                           |

---

## 五、零风险平滑演进与防破坏验收策略

为了保证在重构过程中**开发服务器（`npm run dev`）不挂、正在调样式的页面不崩**，必须执行以下防护策略：

### 1. 门面兼容层模式 (Facade Re-export Pattern)

在拆分 `wetLabPages.ts` 时：

```typescript
// 旧的 src/data/wetLabPages.ts 不立即物理删除，而是写入重导出：
export { experimentsPage } from "./wet-lab/experimentsPage";
export { notebookPage } from "./wet-lab/notebookPage";
export { measurementPage } from "./wet-lab/measurementPage";
export { alternativePlatformPage } from "./wet-lab/alternativePlatformPage";
export { safetyPage } from "./wet-lab/safetyPage";
```

这样可以确保若有其他未注意到的代码还在引用旧路径，系统依然能正常运行，不会发生断崖式构建报错。

### 2. 学术文案逐字比对 (Verbatim Text Diffing)

在迁移前后，利用脚本提取网页纯文本内容进行 `diff`，确保所有文字、标点、术语、下标保持 100% 逐字吻合。

### 3. 类型防线 (Type-Check Gate)

每完成一步改造，立即在终端执行：

```powershell
npx tsc --noEmit
```

利用 TypeScript 编译器作为权威的安全网，拦截任何由于属性缺失、命名改动导致的类型偏差。

---

> **下一步建议**：目前此重构方案已完全固化在文档中。我们**暂不修改任何实际代码**，你可以随时审阅本计划。当你确认可以启动时，我们建议从 **Phase 1（Wet Lab 五合一拆分）** 开始执行第一步，整个过程安全透明且立竿见影！
