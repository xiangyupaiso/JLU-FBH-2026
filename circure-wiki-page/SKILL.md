---
name: circure-wiki-page
description: "Unified engineering workflow for CirCure Wiki pages. Strictly faithful to the original text, strictly user-demand driven for components, zero content duplication, adhering to the Description page golden paradigm, WIKI_ARCHITECTURE_SPEC constraints, and reusable component libraries (mechanism chain, candidate grid, interview cards)."
metadata:
  short-description: Build or update CirCure Wiki pages (Description paradigm)
---

# CirCure Wiki 统一页面工程流 (Unified Page Engineering Workflow)

> **统一体系定位**：本 Skill 是 CirCure Wiki 页面开发的**唯一权威工程入口**，合并并替代了原有的 `circure-new-page-layout` 与 `circure-page-update`。
> **核心思想**：无论是“从零编排新页面”还是“在现有页面上做增量修改”，二者均基于**完全同一套工程底座、设计哲学、Description 黄金范本、组件复用库与七大铁律**。二者的唯一区别在于入口策略与作业步骤（新排版 vs. 局部修润）。
> 
> **最高核心准则（忠于原文与严格需求驱动）**：
> 1. **完全忠于原文 (100% Faithful to Original Text)**：学术正文纯粹由真实文案驱动，普通叙述段落即为 `prose`，表格即为 `table`，插图即为 `figure`。**严禁开发或 AI 擅自根据页面内容自行做所谓的“语义分析”并凭空捏造卡片或提炼组件！**
> 2. **坚决杜绝内容重复 (Zero Duplication)**：坚决废除“正文讲一遍、侧边/卡片又提炼重复一遍”的冗余组件化做法（此前部分页面因自作主张堆砌组件导致内容与正文严重重复，已被全盘否决）。
> 3. **组件严格由用户明确要求驱动 (User-Demand Driven Components)**：任何额外的特殊交互/可视化组件，**必须严格根据用户的额外明确要求来制作**，且在制作前必须**确保充分沟通并明确用户意图**；凡是用户没有明确要求增设的组件，**严禁自行根据内容分析添加**！
> 4. **通用组件规范抽取复用 (Reusable Pattern Extraction)**：当用户明确要求需要特定额外组件时，若该组件具备跨页面复用价值（例如**人物访谈卡 / 专家评语卡**、机制链路卡、候选卡等），应当将其抽象封装为规范的可复用组件，统一收纳在共享库中供各页面复用，杜绝在各页面随手编写孤儿代码。

---

## 目录

1. [信息层级与权威依据（直接读取项目文档）](#一信息层级与权威依据直接读取项目文档)
2. [模式自适应分流：Mode A vs. Mode B](#二模式自适应分流mode-a-vs-mode-b)
3. [黄金范式：Description 页面设计哲学与反模式警示](#三黄金范式description-页面设计哲学与反模式警示)
4. [Description 优秀组件复用库 (Reusable Component Catalog)](#四description-优秀组件复用库-reusable-component-catalog)
5. [全站尺寸与排版七大铁律 (Seven Ironclad Rules)](#五全站尺寸与排版七大铁律-seven-ironclad-rules)
6. [作业流程 SOP：Mode A 全新编排与全量重构](#六作业流程-sopmode-a-全新编排与全量重构)
7. [作业流程 SOP：Mode B 现有页面精准更新与渐进解耦](#七作业流程-sopmode-b-现有页面精准更新与渐进解耦)
8. [统一上线验收自查清单 (Quality Checklist)](#八统一上线验收自查清单-quality-checklist)

---

## 一、信息层级与权威依据（直接读取项目文档）

> **【架构规范维护唯一真理原则】**：
> 本 Skill **不再在技能目录内部维护任何冗余的规范文档副本**（已彻底移除自带的副本文档），以避免多头维护脱节。
> 执行本技能时，**必须直接读取当前项目工作区内的最新权威规范文档**：
> 1. **架构工程权威规范**：`WIKI_ARCHITECTURE_SPEC.md`（位于当前项目工作区根目录下）
> 2. **设计与排版规范**：`文案集/Wiki-设计与排版规范.md`（位于当前项目工作区 `文案集/` 目录下）
> 任何规范更新只需在当前项目工作区中的这两个文件内维护，所有平台的 Skill 自动全局生效！

在动手编写或修改任何页面前，必须依次查阅：

1. **输入源**：用户提供的 Markdown 文案、需求提示或更新对比项。
   - *严格注意*：区分正文与指令（文案中的评审指示如“上线前删除”、“点击查看第X章”为实现指令，非出版正文）。
   - *明确意图*：先确认用户是否提出了额外的特型组件需求；若无明确要求，一律忠实还原正文，严禁自行分析造卡。
2. **项目架构规范 `WIKI_ARCHITECTURE_SPEC.md`**（相对当前项目工作区根目录）：架构工程权威规范。纯数据层严格无 JSX（`src/data/`）、资产字典集中收敛（`[page]Assets.ts`）、特征插槽协议（`[Page]Panels.tsx`）、超薄路由装配（`< 25 行`）、单一真理尺寸收口、性能退出策略。
3. **项目设计排版规范 `文案集/Wiki-设计与排版规范.md`**（相对当前项目工作区 `文案集/` 目录）：设计哲学、完全忠于原文原则、零内容重复原则、用户明确需求驱动原则、去 AI 痕迹、双色阶梯与排版契约。
4. **黄金范本（Description 页面）**：
   - 路由入口：`src/contents/description.tsx`
   - 纯数据层：`src/data/project/descriptionPage.ts`
   - 资产字典：`src/data/project/descriptionAssets.ts`
   - 特征插槽：`src/components/wiki/features/project/DescriptionPanels.tsx`
   - 专属样式：`src/styles/description-page.css`
5. **底座渲染器与类型**：`src/components/wiki/WikiRoutePage.tsx` 与 `wikiPageTypes.ts`。

---

## 二、模式自适应分流：Mode A vs. Mode B

根据用户输入与目标页面的当前状态，自动判定并执行对应作业分支：

```text
                                用户需求输入
                                     │
                 ┌───────────────────┴───────────────────┐
                 ▼                                       ▼
      【Mode A：全新构建 / 全量重构】               【Mode B：现有页面精准更新】
   - 场景：代码库无该页面或结构彻底推倒重来         - 场景：页面已有成熟代码，修改局部文案/交互
   - 重点：忠于原文提取，搭建四件套               - 重点：外科手术式微调，冻结非关区域与 Hero
   - 执行：前往【第六章 SOP】                       - 执行：前往【第七章 SOP】
```

| 判定维度 | Mode A：全新页面编排 / 全量重构 | Mode B：现有页面精准更新 / 渐进平移 |
|:---|:---|:---|
| **适用前提** | 页面在 `src/contents/` 尚无实现，或旧页面混乱腐朽需要全盘重构 | 页面已有完整实现，仅需修改文字、替换插图、增删小节或修复交互 |
| **文案范围** | 完整的 Markdown 稿件（标题、章节、图表、附录） | 局部文案改动、修改说明、新增段落或纠错笔记 |
| **操作策略** | 全盘语义分类，新建纯数据、资产字典、特征组件与超薄路由 | 圈定 Diff 边界，**严格冻结未受影响章节与 Hero**，局部修润 |
| **旧代码处置** | 直接采用最新四件套规范落地，严禁擅自增设组件 | 顺手清理被触碰章节中的 AI 伪标签与擅自捏造的重复内容卡片 |

---

## 三、黄金范式：Description 页面设计哲学与反模式警示

### 3.1 树立 Description 为唯一黄金基准
`Description` 页面是 CirCure Wiki 的最高标准范本，后续所有页面的设计、开发与重构均以此为导向：
- **极少 AI 味 (Zero-AI-Flavor)**：没有任何生硬大写伪标签、没有空洞货号（CARD 01）、没有机械竖线或花哨装饰。纯正的高级学术期刊（Nature/Science 级）沉静排版质感。
- **极简克制与高内聚 (Minimalist & Focused)**：全页仅 3 个核心定制 feature 插槽（全链条验证机制链、2x2 候选抗原卡片、学术引用文献浮层与反向跳转），其余 85% 篇幅由高清晰度图表、清晰数据对比表与舒展的通栏正文构成。代码轻盈，可维护性极高。
- **确保逻辑正确 (Ensure Logical Soundness)**：每个组件紧密服务于科研因果逻辑。机制链反映真实实验闭环（带质控质检节点与终点标注）；候选卡片展示真实药理靶点特性；引用系统具备严格的学术文献元数据与交互式溯源；诚实标注证据边界（不伪造未完成实验）。
- **零同义反复与完全忠于原文 (Zero Duplication & Faithful)**：正文已经表述完整的内容，严禁再提炼一张卡片重讲一遍！绝不擅自为了“页面不单调”而对正文做提炼切片。
- **用户明确需求驱动 (User Demand Driven)**：多余的或特殊的交互组件，只在用户明确提出需求、清楚确认用户意图之后再制作。用户没要的组件不要根据内容自己分析增设。

### 3.2 彻底废弃 Sustainability 早期臃肿模式
⚠️ **反模式警示**：早期 `Sustainability` 页面虽然做过多维探索，但代码散落 19 个独立文件、多层嵌套重导、包含大量无法跨页复用的复杂 3D/特异卡片，维护成本极高、AI 模板味重。**严禁再将 Sustainability 作为参考模板或组件范例！**

---

## 四、Description 优秀组件复用库 (Reusable Component Catalog)

无论新建页面还是更新页面，**在用户明确提出组件需求的前提下，优先复用标准组件**，杜绝随意造轮子或编写不可复用的孤儿组件：

| 可复用模式 | 原型参考 / 规范位置 | 适用场景 | 核心复用契约 |
|:---|:---|:---|:---|
| **全链条机制验证链** | `MechanismRouteChain` | 实验全流程、DBTL 闭环、生信管线、治疗机制递进 | 纯数据驱动数组；CSS 容器查询（移动端垂直时间线，宽屏 4×2 网格）；带 QC 菱形质检节点与终点实心圆点；单次 reveal 展开动效，严禁无休止循环跳动。 |
| **四方候选/实体卡片** | `AntigenCandidateCards` | 候选分子/靶点、实验组别、工具模块、利益相关者 | 平衡 2×2 网格；纯白底板 + 3px 顶部主题色边框；标题集成名称与微型优雅药理 pill；副标题全称；底部科研证据；轻量 hover 微升；**彻底严禁 CARD 01 / TARGET 01 等生硬编号**。 |
| **人物访谈与利益相关者卡片** | `StakeholderProfileCard`（现有实现：`src/components/wiki/features/engagement/sustainability/StakeholderProfileCard.tsx`） | Human Practices、专家走访、患者/医生意见、利益相关者 | **用户明确要求时制作**。当前实现属于 Sustainability 特征模块；跨页面复用前应先抽取为共享组件。受访者身份区 + 核心引语 + 团队落地回应，绝不把正文大段整段抄入造成重复。 |
| **严肃学术引用文献系统** | `createCitationRenderer` + `CitationReferenceList` + `CitationPreview`（位于 `src/components/wiki/citations/CitationRegister.tsx`） | 参考文献、论文出处、学术引文列表 | 行内 `[1]` 上标渲染；悬停展示文献卡片（作者/题目/期刊/年份）；点击平滑跳转文末参考文献列表并闪烁高亮；文末文献项自带反向链接（Backlinks）跳回正文具体引用处。Description 页面通过 `description-references` feature key 注册文献列表。 |
| **伴随式 Split 双栏** | `{ type: "split", aside: mini-visual }` | 正文段落的关键结论伴随图解 | **仅在用户要求或原文明确具备独立侧边图解时使用！严禁 AI 擅自提取正文当 mini-visual！** 伴随单段铁律：左侧 prose 严格只包含 $\le 1$ 段直接相关的文字！右侧宽度收敛在 260~320px。其余正文一律 100% 通栏舒展排版。 |
| **结构化数据对比矩阵** | `{ type: "table" }` | 平台参数对比、技术方案差异 | 纯原生 HTML 表格语义，表头清晰，斑马纹与柔和边框，杜绝渐变装饰。 |
| **标准科研插图块** | `{ type: "figure" }` | 凝胶电泳、显微图、数据图表 | 语义化图片展示，规范 Caption 说明，集中收纳于 `[page]Assets.ts`。 |
| **证据边界与留白** | `{ type: "callout" }` / `image-placeholder` | 实验局限、体外阶段声明、待测批次 | 诚实声明研究边界，保留真实科学实验探索性。 |

---

## 五、全站尺寸与排版七大铁律 (Seven Ironclad Rules)

整站开发与维护必须无条件遵守以下七条铁律：

1. **铁律 1：宏观外壳尺寸收口**：整站框架尺寸唯一由 `src/styles/wiki-route-skin.css` 驱动（`--route-page: 1120px;`, `--toc-w: minmax(190px, 250px);`, `--reader-h`, `--reader-pad`）。严禁在局部页面 CSS 中篡改页面总宽。
2. **铁律 2：微观组件尺寸就近收口**：严禁在 TSX 节点写死行内样式（`style={{ height: ... }}`）。组件尺寸收口在 `src/styles/features/[page]-panels.css`。组件外部 `margin: 0`，由全局 `.wiki-feature` 统一分配 24px 外间距。
3. **铁律 3：章节大标题排版与字号规范**：`h2` 基准字号收敛至 `clamp(21px, 2.2vw, 25px)`（行高 1.35）。中英文冒号自动分行由 `WikiRoutePage.tsx` 自动处理，**严禁在纯数据层手动写 `<br>`**。标题下半部带 `.wiki-heading-marker` 马克笔涂刷。背景序号水印收敛至 `clamp(48px, 5.2vw, 68px)`，透明度 0.14。
4. **铁律 4：严禁 AI 眉标与机械小字**：彻底剔除小节标题（`h3`）、可视化组件头部、卡片顶部的全大写等宽伪标签；彻底剔除 `h3` 左侧彩色竖线；彻底去除卡片机械货号（如 `TARGET 01`）。
5. **铁律 5：大标题与小标题双色层级设计**：跨色相选取和谐双色（Project: 森绿 `#243d2c` + 赤陶红 `#84382b`；Wet Lab: 海蓝 `#14354c` + 琥珀金 `#88541e`；Dry Lab: 松黑青 `#153e34` + 紫晶墨 `#633256`；Engagement: 暖咖褐 `#4a2c1d` + 孔雀墨青 `#174a47`；Team: 古铜金 `#3e2d14` + 勃艮第酒红 `#762338`）。收敛于各模块 `route-palette-[module].css`。
6. **铁律 6：全站正文排版与统一间距层级规范**：
   $$\text{段落间距 (16px)} < \text{小标题到底正文 (14px)} < \text{大标题到内容 (24px) = 组件间距 (24px)} < \text{正文到小标题顶 (28px)} < \text{章节切换 (44px)}$$
   大标题下方紧随小标题时，间距严格强制等于 24px（首块 `margin-top: 0 !important`）。
7. **铁律 7：全局基准与页面独有资产分工**：全站通用基准写入 `wiki-route-skin.css`；页面专属组件与尺寸就近写入 `src/components/wiki/features/[module]/` 与 `src/styles/features/`。严禁为了单个页面的特殊性在全局样式打 `if` 特判。

---

## 六、作业流程 SOP：Mode A 全新编排与全量重构

当需要从 Markdown 稿件创建新页面，或对老页面彻底重做时，按以下 7 步标准作业程序推进：

1. **Step 1：文案审阅与信息提取 (Read & Classify)**
   - 提取正文、引言、章节结构、插图、数据表、边界说明；剔除内部提示词。
   - **核心纪律**：完全忠于原文，正文一律规划为通栏 `prose`，严禁脑补提炼卡片。
2. **Step 2：页面分级与用户意图确认 (Architecture & User Intent)**
   - 判定为轻量普通页（2 件套：路由 + 纯数据）或重度可视化页（4 件套：路由 + 纯数据 + 资产字典 + 特征插槽）。
   - **用户意图确认**：确认用户是否有额外提出的特型组件需求（如人物访谈卡、流程链等）。用户没有明确要求的组件坚决不加。
3. **Step 3：构建纯数据层 (Pure Data Layer)**
   - 路径：`src/data/[module]/[page]Page.ts`。
   - 严格要求：**禁止引入 React 或 JSX**。学术正文 100% 逐字保留。复杂 UI 仅在用户明确要求时采用 `{ type: "feature", key: "slot-key" }` 占位。
4. **Step 4：集中管理资产字典 (Asset Mapping Dictionary)**
   - 图片 > 3 张时，建立 `src/data/[module]/[page]Assets.ts`，集中管理静态资源导入。
5. **Step 5：实现特征组件与规范抽取 (Feature Panels & Reusable Extraction)**
   - 路径：`src/components/wiki/features/[module]/[Page]Panels.tsx`。
   - 优先复用 Description 机制链、四方候选卡片、学术引用文献、人物访谈卡等成熟模式。若有通用需求，规范抽取为共享组件。集中导出 `[page]Features(): Record<string, ReactNode>` 字典函数。
6. **Step 6：微观尺寸与专属样式收口 (Scoped Styling)**
   - 路径：`src/styles/features/[page]-panels.css`。
   - 定义专属网格列数与图表高度，外部 `margin: 0`，由 `[Page]Panels.tsx` 就近引用。
7. **Step 7：超薄路由装配 (Route Assembler)**
   - 路径：`src/contents/[page].tsx`。
   - 控制在 25 行以内，装配 `WikiRoutePage`、`content`、`theme` 与 `features`。

---

## 七、作业流程 SOP：Mode B 现有页面精准更新与渐进解耦

当针对已有成熟页面进行文案修改、小节增删或局部修润时，按以下 6 步标准作业程序推进：

1. **Step 1：Diff 审查与边界冻结 (Scope Freezing)**
   - 圈定受影响的精确章节，**严格冻结未受影响章节与首屏 Hero**，杜绝附带改动。
2. **Step 2：识别旧代码 Bad Smells 并渐进解耦 (Progressive Decoupling)**
   - 检查被修改章节是否存在老旧写法（如纯数据文件中混有 JSX、单文件臃肿巨石、AI 伪眉标、**擅自提炼与正文重复的冗余卡片**）。
   - 若发现内容重复的多余组件，彻底移除，将正文还原为通栏舒展阅读。
3. **Step 3：精准更新纯数据层 (Update Pure Data)**
   - 在 `src/data/[module]/[page]Page.ts` 中更新对应文字或块结构，保持 `id`、`index` 与侧边栏稳定，文案 100% 逐字保留。
4. **Step 4：特征组件更新与复用库对齐 (Refine Features via Reusable Library)**
   - 仅在用户有明确要求时更新或新增卡片，优先复用共享组件模式，在 `[Page]Panels.tsx` 中就近调整。
5. **Step 5：样式微调与律动复核 (Styling & Rhythm Guard)**
   - 检查大标题、小标题、正文之间是否符合 16/14/24/28/44 垂直律动，严禁产生局部多余间距。
6. **Step 6：防退化验证与验收 (Verification)**
   - 运行 `npx tsc --noEmit`，比对纯文本 Diff 确保文案 100% 忠实保留，确认页面保持单滚动条无溢出。

---

## 八、统一上线验收自查清单 (Quality Checklist)

- [ ] **完全忠于原文**：正文段落是否 100% 逐字保留？是否坚决没有私自把正文拆解或压缩为花哨卡片？
- [ ] **零内容重复**：页面中是否存在卡片要点与正文段落重复表达的冗余现象？（若有必须彻底剔除）
- [ ] **明确需求驱动**：页面中的每一个额外可视化组件，是否均来自于用户的明确要求？是否做到了“用户没要的组件不要根据内容自己分析增设”？
- [ ] **范式对齐**：是否以 Description 为标杆？彻底剔除了 AI 伪小字、生硬卡片流水号（CARD 01）与彩色副标题竖线？
- [ ] **组件复用与规范抽取**：需要展示机制流水线、候选组别或人物访谈时，是否优先复用了标准共享组件（机制链、四方候选网格、人物访谈卡）？
- [ ] **伴随单段**：所有 Split 双栏左侧是否严格只包含 $\le 1$ 段正文？没有挤压多段长文？且仅在有明确侧边图解需求时使用？
- [ ] **纯数据解耦**：`src/data/` 中是否完全没有任何 JSX 标签？
- [ ] **插槽映射**：数据层中的 `feature.key` 是否在 `[Page]Panels.tsx` 中都有对应实现？
- [ ] **双色层级**：H2 与 H3 是否正确应用了当前 Part 的双色跨色相契约？
- [ ] **尺寸规范**：没有在 TSX 里硬编码 `style={{ width, height }}`，宏观尺寸未随意覆写？
- [ ] **响应式验证**：移动端（<768px）阅读时，双栏自动折叠为单栏，图表无横向溢出？
- [ ] **严格类型安全**：运行 `npx tsc --noEmit` 保证 TypeScript 零错误通过？
