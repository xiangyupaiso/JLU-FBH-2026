# CirCure Wiki 文案（Markdown）→ 统一视觉体系 / 可复用 TSX 转化规范

> **核心问题**：怎么把一段写好的 Markdown 正文，变成一套**排版高度统一、学术文字逐字不改、代码易于维护排查、尺寸清晰可控**的现代化 Wiki 页面？
> **答案**：不直接裸渲染 Markdown，而是将其**抽象为结构化语义数据**，通过通用模板 `WikiRoutePage` 与**可复用特征组件**进行装配。
> **基准与演进**：以 Sustainability 建立的视觉与排版词汇为美学基线，全面接入标准阅读器架构与 [WIKI_ARCHITECTURE_SPEC.md](../WIKI_ARCHITECTURE_SPEC.md) 工程规范。
> **使用场景**：凡新增页面排版、已有页面重构或文案修正，统一遵循本规范。

---

## 目录

1. [全局架构与转化流水线](#1-全局架构与转化流水线)
2. [Markdown 元素 → 语义组件映射表](#2-markdown-元素--语义组件映射表)
3. [页面分级与文件组织规范（轻量 vs 重度）](#3-页面分级与文件组织规范)
4. [核心视觉与排版硬性标准](#4-核心视觉与排版硬性标准)
5. [宏观与微观尺寸控制铁律（改尺寸去哪找）](#5-宏观与微观尺寸控制铁律)
6. [可复用的编号体系 Chrome](#6-可复用的编号体系-chrome)
7. [高级排版模式：Split 双栏与占位留白](#7-高级排版模式split-双栏与占位留白)
8. [工程化约定与高频避坑指南](#8-工程化约定与高频避坑指南)
9. [上线前验收自查清单](#9-上线前验收自查清单)

---

## 1. 全局架构与转化流水线

```text
Markdown 原文
   │  ① 语义识别（区分正文、引言、量化数据、图表、交互卡片）
   ▼
结构化纯数据  src/data/[module]/[page]Page.ts  (as const satisfies WikiPageContent)
   │  ② 语义 → 纯数据（逐字保留文本，严禁 JSX，组件用 feature key 占位）
   ▼
可视化组件    src/components/wiki/features/[module]/[Page]Panels.tsx
   │  ③ 数据 → 组件（纯 UI 逻辑，通过 getFeatures() 集中导出字典）
   ▼
统一模板装配  src/contents/[page].tsx  (<WikiRoutePage content features theme />)
   │  ④ 装配阅读器（侧边栏、藤蔓底板、滚动联动、回顶与下一页自动生成）
   ▼
最终呈现：统一美学、无缝滚动、响应式科研 Wiki
```

**三大不变式**：

1. **文案只在数据层**：逐字忠实保留学术文案，严禁擅自删减或意译。
2. **组件只在特征层**：组件负责视觉形态与交互状态，不硬编码长段出版正文。
3. **尺寸在规范层**：宏观尺寸严格收归共享变量，微观尺寸就近在局部样式收口。

---

## 2. Markdown 元素 → 语义组件映射表

拿到一段原始 Markdown 时，**先识别其学术信息类型，再决定落到哪种 block 或组件**：

| Markdown 原始内容            | 语义类型   | 渲染目标（Block 类型 / 组件）                                                | 属性与参数约定                         |
| ---------------------------- | ---------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| `#` / `##` 章节大标题    | 章节入口   | `WikiSection` (`index`, `kicker`, `title`, `summary`)              | 决定侧边栏一级导航与锚点               |
| `###` 章节内子标题         | 子章节     | `{ type: "subheading", id, index, title }`                                 | 决定侧边栏二级子导航与平滑滚动         |
| 名人引言 / 卷首语 + 出处     | 题词/引语  | `{ type: "epigraph", quote, translationZh, attribution, attributionRole }` | 衬线体双语呈现，带出处角色             |
| 普通叙述段落                 | 正文叙事   | `{ type: "prose", paragraphs: [...] }`                                     | 保持纯文本字符串数组                   |
| 行内带锚点/外链的长段落      | 导读/跳转  | `{ type: "prose-linked", parts: [{ text, target, label }] }`               | 保持行内语义不断裂                     |
| 关键结论 / 强调卡片          | 警示/提示  | `{ type: "callout", tone: "navy"\|"coral"\|"gold"\|"neutral", label, body }`  | 限制颜色，形成视觉呼吸                 |
| 边界声明 / 局限性说明        | 证据边界   | `{ type: "note", label, body }`                                            | 标明科研未完成或范围限制               |
| 独立科研插图 (带 Caption)    | 静态图表   | `{ type: "figure", src, alt, caption }`                                    | 语义化图片，优先使用资产字典           |
| 待测数据 / 占位图            | 证据留白   | `{ type: "image-placeholder", filename, instruction, caption }`            | 严谨保留实验未完成标记，禁止伪造       |
| 叙述文字 + 侧边伴随小图      | 双栏画卷   | `{ type: "split", id, prose: [...], aside: figure/feature }`               | 避免小图打断阅读通栏（<880px自动折叠） |
| 结构化对比表                 | 数据矩阵   | `{ type: "table", headers: [...], rows: [[...]] }`                         | 原生语义化表格                         |
| 数字 + 双语标签 (如 194 份)  | 量化结果   | `{ type: "feature", key: "stats-xxx" }` → `<CountUpStat />`             | 一次性递增动效，无无休止循环           |
| 流程步骤 / 设计循环 (DBTL)   | 工程规范   | `{ type: "feature", key: "xxx" }` → `<SCALEProgressChain />` 等         | 步骤清晰可追溯                         |
| 复杂交互卡片 / 雷达图 / 弦图 | 深度可视化 | `{ type: "feature", key: "xxx" }` → 专属 Panels 组件                      | 纯组件化开发，支持滚动监听             |
| PDF 报告 / 附件手册          | 科研凭证   | `{ type: "feature", key: "xxx" }` → `<PdfToolList />`                   | 带 Portal 全屏预览，安全防遮挡         |

---

## 3. 页面分级与文件组织规范

避免过去的“全员平铺”或“过度拆分”极端，按复杂度分级组织：

### 3.1 轻量文档型页面（2 件套：如 Notebook, Safety, Contribution）

- **数据层**：`src/data/[module]/[page]Page.ts`（直接导出一个完整的 `WikiPageContent`）。
- **入口层**：`src/contents/[page].tsx`（约 15~20 行装配代码）。
- **规矩**：不需要搞 `xxxData.ts` + `xxxPage.ts` 多层嵌套，纯文本单文件直出最易维护。

### 3.2 重度可视化交互页（4 件套：如 Alternative Platform, Description, Sustainability）

当页面具备多张图片或深度交互图表时，严格拆分以下文件，禁止将所有逻辑写在单文件：

1. **路由入口**：`src/contents/[page].tsx`（超薄装配层，注入 theme、hero、features）。
2. **纯数据层**：`src/data/[module]/[page]Page.ts`（**严禁引入 React 或 JSX**，复杂组件只用 `feature` 键占位）。
3. **资产字典**：`src/data/[module]/[page]Assets.ts`（图片 > 3 张时必选，统一管理 import 与说明）。
4. **特征组件**：`src/components/wiki/features/[module]/[Page]Panels.tsx`（封装专属交互卡片，统一导出 `get[Page]Features()` 映射表）。
5. **专属样式**：`src/styles/features/[page]-panels.css`（专属微观尺寸在此收口，禁止污染全局）。

---

## 4. 核心视觉与排版硬性标准

基于 Sustainability 沉淀的美学基准，所有页面必须严格执行：

### 4.1 字体角色分工（Typography Roles）

| 角色                   | 载体 Token                | 适用范围                                         | 禁忌                              |
| :--------------------- | :------------------------ | :----------------------------------------------- | :-------------------------------- |
| **学术编辑衬线** | `var(--font-editorial)` | 页面大标题、章节 H2、引语、大核心数字            | 严禁用于长篇正文或密集表格        |
| **现代无衬线**   | `var(--font-sans)`      | 所有正文阅读、二级小标题、说明、按钮             | 默认基准字号为 15~16px，行高 1.72 |
| **等宽代码体**   | `var(--font-mono)`      | 仅用于章节序号、编号标签（如`INT-01`）、时间戳 | 严禁作为纯装饰文字使用            |

### 4.2 色彩与情绪契约

- **主色/结构色**（海军蓝 `--brand-navy #173f78` 或模块 `--route-main`）：用于标题、主要线条、重点卡片边框。
- **连接/强调色**（柔粉 `--care #d784b3` 或模块主强调）：**极其克制，仅作“连接”**（如引语左边线、箭头 `→`），单个卡片内 ≤2 处。
- **环境底色**（`--route-base` / `--route-paper`）：整体阅读背景，提供柔和沉浸的纸质阅读感。

### 4.3 动效哲学

- 统一缓动：`cubic-bezier(.22, 1, .36, 1)`。
- **严禁无休止循环跳动**；数字计数器仅在进入视口时执行一次（`unobserve`）；悬浮位移不超过 4px。
- 严格遵循 `prefers-reduced-motion`，开启减弱动效时直接呈现终态。

### 4.4 章节大标题与马克笔排版规范（Section Heading Contract）

- **字号克制控制**：章节标题 `h2` 基准字号统一收敛至 `clamp(21px, 2.2vw, 25px)`（行高 `1.35`），确保比正文（16px~17px）稍大即可，严禁使用 40px+ 割裂阅读视线的超大字号。
- **冒号自动分行（Colon Break）**：凡标题包含英文冒号 `:` 或中文冒号 `：`，冒号及前置词置于上行（Lead line），冒号后详细说明独立下沉为单独一行（Sub line，`clamp(18px, 1.9vw, 22px)`，字重 600）。
  - 该规则由 `WikiRoutePage.tsx` 中的 `renderSectionTitle()` 自动正则切割完成，严禁在纯文案数据文件 `src/data/` 中手动写入 `<br>`。
- **马克笔高亮手绘涂刷（Highlighter Marker）**：标题各行通过 `.wiki-heading-marker` 渲染下半部主题色手绘马克笔条，配合 `box-decoration-break: clone` 实现平滑包裹。主题色与底色由各模块 palette 样式统一管理。
- **章节背景水印**：左后方半透明数字序号（`.wiki-section-number`）等比收缩至 `clamp(48px, 5.2vw, 68px)`，透明度 `0.14`，衬托文字空间结构。
- **纯粹性要求**：严禁加入顶部线条、滑动圆点、下划虚线等 AI 装饰；严禁添加 AI 生成的无意义 `kicker` 和 `summary` 占位文字，100% 忠实还原团队科研文本。

### 4.5 严禁 AI 眉标与机械小字规范（No-AI-Kickers & Eyebrows Ban）

- **全面禁绝全大写等宽眉标（Eyebrows / Kickers）**：
  - 严禁在小节标题（`h3`）、可视化组件头部、卡片顶部出现如 `PLATFORM MECHANISM`、`TARGET SELECTION`、`CLINICAL RATIONALE` 等全大写、字间距拉宽、缺乏人情味的伪分类小字。
- **信息处置与重构原则**：
  1. **同义反复/虚词废话**：直接删除（如 `Full-Chain Verification Pipeline` 上方的 `PLATFORM MECHANISM`，如 `Antigen Module` 上方的 `TARGET SELECTION`）。
  2. **从属关系信息**：若副概念有学术价值，使用冒号合入标题（如 `Antigen Module: Target Selection`），自动触发冒号换行。
  3. **实体药理/属性分类**：作为主标题旁的微型优雅药理 pill 标签展示（如靶点旁的 `Epithelial glycoprotein`），不搞生硬黑框。
  4. **描述性依据**：直接以卡片正文或左侧微线条的段落形式自然呈现，严禁使用类似 `CLINICAL RATIONALE` 的冷冰表单字段名顶头。
- **剥离伪装饰线条**：
  - 彻底去除小节标题左侧的彩色竖线（`.wiki-subheading::before`）。
  - 彻底去除卡片多余的货号式编号（如 `TARGET 01`、`CARD 02`），还原高级学术出版物的纯净质感。

### 4.6 大标题与小标题双色层级设计规范（Dual-Tone Heading Hierarchy）

- **杜绝单色沉闷、同时杜绝同色系近色混淆**：
  - 严禁小标题（`h3`）与大标题（`h2`）复用同一种颜色或同一种色系深浅变体（如绿配绿、蓝配蓝，极易导致视觉疲劳且层级区分度不足）。
  - 大标题与小标题必须跨色相选取**“完全不相近、但符合出版物经典配色的和谐双色组合”**，既一眼区分层级，又维持典雅克制的学术纸本气质。
- **全站五大 Part 双色规划表**：
  | 模块 Part | 整体视觉基调 | 大标题 H2 (`--route-heading-ink`) | 大标题马克笔涂刷 (`--route-marker-bg`) | 小标题 H3 (`--route-subheading-ink`) | 搭配意境与对比原理 |
  | :--- | :--- | :--- | :--- | :--- | :--- |
  | **Project** | 植物森林与生命科学 | `#243d2c`（深墨冷森绿） | `#c4c7be`（柔和灰鼠绿） | `#84382b`（暖陶土褐红） | **森绿 + 赤陶红**（自然界经典原色，绿与赤土色相差 130°，完全不同色，沉稳雅致） |
  | **Wet Lab** | 试剂水相与实验严谨 | `#14354c`（深邃实验海蓝） | `#c6e5f2`（冰川淡海泡蓝） | `#88541e`（暖琥珀金棕） | **海蓝 + 琥珀金**（冷暖互补色相差 174°，学术经典双色组合，一眼即分，典雅庄重） |
  | **Dry Lab** | 数据算法与科技理性 | `#153e34`（深松针墨黑青） | `#c2ebe0`（薄荷冰绿） | `#633256`（深紫晶墨色） | **松黑青 + 紫晶墨**（算法理性与数理几何，青与深冷紫相映，拓扑纵深感极强且毫不突兀） |
  | **Engagement**| 人文走访与社会温情 | `#4a2c1d`（深沉红咖褐） | `#f7ddce`（柔杏微光） | `#174a47`（深孔雀墨黛青） | **暖咖褐 + 孔雀墨青**（暖木与冷翠互补，大地与水天相映，极具人文叙事温度与沉静感） |
  | **Team** | 团队活力与金色荣誉 | `#3e2d14`（深古铜黑褐） | `#f8ecbe`（浅金麦香） | `#762338`（深勃艮第酒红） | **古铜金 + 勃艮第酒红**（古典勋章与高校桂冠经典双色，金铜厚重，茜红深邃，典范感十足） |
- **工程落地契约**：
  - 各模块的双色真理唯一收敛在 `src/styles/route-palette-[module].css` 中，严禁在页面局部写死 hex。
  - 阅读器全局样式 `wiki-route-skin.css` 统一消费 `--route-subheading-ink`，确保全站所有页面自动继承对应 Part 的层级规划。

---

## 5. 宏观与微观尺寸控制铁律

解决“找不到改尺寸位置”的根本原则是**明确尺寸归属权**：

```text
┌────────────────────────────────────────────────────────┐
│ 宏观外壳尺寸 (全站统领，唯一真理：wiki-route-skin.css)      │
│  ├── --route-page : 1120px; (最大总宽度)                │
│  ├── --toc-w      : minmax(190px, 250px); (侧边栏宽度) │
│  ├── --reader-h   : calc(100dvh - 78px); (工作台高度)   │
│  └── --reader-pad : clamp(14px, 1.8vw, 22px); (底板边距)│
└────────────────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 微观组件尺寸 (局部收口：styles/features/[page].css)     │
│  ├── 卡片网格列数 (grid-template-columns: repeat(2, 1fr))│
│  ├── 图表高度容器 (--chart-height: 420px;)               │
│  └── 局部响应式折叠断点 (@media (max-width: 768px))     │
│  ※ 严禁在 TSX 标签中写 style={{ width: ..., height: ...}}│
└────────────────────────────────────────────────────────┘
```

- **改整页总宽、侧边栏宽度、首屏 Hero 高度**：直接去 [wiki-route-skin.css](../src/styles/wiki-route-skin.css) 第 60~67 行调整。
- **改特定卡片高宽、网格排列**：只在对应页面的专属 feature CSS 文件中通过局部 CSS 变量或语义类调整。

---

## 6. 可复用的编号体系 Chrome

跨章节出现的调研、访谈与工具卡，必须遵循连续的 DOM 编号：

| 前缀         | 代表对象              | 渲染形态                     | 样式规范                        |
| :----------- | :-------------------- | :--------------------------- | :------------------------------ |
| `INT-0X`   | 利益相关者深度访谈    | `INT-01 · 深度访谈`       | 等宽体 10px，弱对比度，自动累加 |
| `FIELD-0X` | 医疗机构/产业调研走访 | `FIELD-01 · 现场调研`     | 等宽体 10px，带微型胶囊徽章     |
| `TOOL-0X`  | 开放工具 / 规范手册   | `TOOL-01 · REUSABLE TOOL` | 等宽体 10px，支持点击唤起查看器 |

- 优先使用 `data-*` 属性与 CSS `::before` 渲染编号，避免把辅助编号强塞进出版文本节点。

---

## 7. 高级排版模式：Split 双栏与占位留白

### 7.1 Split 伴随双栏（避免巨幅 Banner 割裂阅读）

当有图表需要配合左侧长段学术说明时，不要使用通栏 figure，使用 `split` 块：

```typescript
{
  type: "split",
  id: "structure-mechanism-split",
  prose: [
    {
      type: "prose",
      paragraphs: [
        "左侧为连续的学术论述段落，保持流畅的阅读视线...",
        "实验结果进一步支持了上述拓扑稳定性假设..."
      ]
    }
  ],
  aside: {
    type: "feature",
    key: "trop2-structure-viewer" // 右侧并列显示交互式 3D 查看器或小图表
  }
}
```

### 7.2 严谨的科研占位留白（Image Placeholder）

遇到未完成的实验或待补充的数据，绝不伪造图片，使用严谨的证据边界块：

```typescript
{
  type: "image-placeholder",
  filename: "gel-electrophoresis-batch3.png",
  instruction: "Waiting for Western Blot batch 3 confirmation under TNBC cell lysate.",
  caption: "Figure S2: Planned validation of multi-target circular RNA expression."
}
```

---

## 8. 工程化约定与高频避坑指南

1. **全屏弹窗必须使用 Portal**：
   - 页面内的 `.wiki-feature[data-wiki-reveal]` 带有 CSS `transform`，会导致内部的 `position: fixed` 失效并被限制在卡片内部！
   - **所有模态框、全屏图表或 PDF 查看器，必须通过 `createPortal(modal, document.body)` 挂载到根节点。**
2. **滚动联动感知**：
   - 如果某个交互卡片需要感知当前读者正滑到哪一段，在组件内调用 `useRoutePageScroll()`，它会返回当前视口所在的 `{ activeSection, activeSubsection }`。
3. **章节与目录绑定**：
   - 每个 `WikiSection` 的 `id` 必须全站唯一且与 `index` 对应；每个 `subheading` 的 `id` 必须对应并在侧边栏有明确反馈。
4. **科研文字逐字不改**：
   - 任何括号说明、英文专业名词、下标（如 $\text{CD8}^+$）必须与原始文案保持严格一致，修改仅在布局和表现层完成。

---

## 9. 上线前验收自查清单

- [ ] **语义识别**：是否正确分类正文、引言、量化数据与专属交互？
- [ ] **纯数据解耦**：`src/data/` 中是否完全没有任何 JSX 标签？
- [ ] **插槽映射**：数据层中的 `feature.key` 是否在 `[Page]Panels.tsx` 中都有对应实现？
- [ ] **尺寸规范**：没有在 TSX 里硬编码 `style={{ width, height }}`，宏观尺寸未随意覆写？
- [ ] **响应式验证**：移动端（<768px）阅读时，双栏自动折叠为单栏，图表无横向溢出？
- [ ] **类型安全**：运行 `npx tsc --noEmit` 保证 TypeScript 零类型错误？
- [ ] **合规无外链**：没有任何运行时拉取外部 CDN 脚本的行为，所有图片与资源均走本地或合规 iGEM 上传路径。
