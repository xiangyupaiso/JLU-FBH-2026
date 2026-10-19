# CirCure Wiki 文案（Markdown）→ 统一视觉体系 / 可复用 TSX 转化规范

> **最高核心思想**：
>
> 1. **完全忠于原文 (100% Faithful to Original Text)**：学术正文纯粹由真实稿件驱动，普通叙述段落即为 `prose`，表格即为 `table`，插图即为 `figure`。**严禁开发或 AI 擅自根据页面内容自行做所谓的“语义分析”并凭空捏造卡片或提炼组件！**
> 2. **坚决杜绝内容重复 (Zero Duplication)**：坚决废除“正文讲一遍、侧边/卡片又提炼重复一遍”的冗余组件化做法（此前部分页面因自作主张堆砌组件导致内容与正文严重重复，已被全盘否决）。
> 3. **组件严格由用户需求驱动 (User-Demand Driven Components)**：任何额外的特殊交互/可视化组件，**必须严格根据用户的额外明确要求来制作**，且在制作前必须**确保充分沟通并明确用户意图**；凡是用户没有明确要求增设的组件，**严禁自行根据内容分析添加**！
> 4. **通用组件规范抽取复用 (Reusable Pattern Extraction)**：当用户明确要求需要特定额外组件时，若该组件具备跨页面复用价值（例如**人物访谈卡 / 专家走访评语卡**、机制链路卡、候选卡等），应当将其抽象封装为规范的可复用组件，统一收纳在共享库中供各页面复用，杜绝在各页面随手编写孤儿代码。
>
> **基准革命**：**全面以 `Description` 页面为黄金范本与复用指引**。彻底废弃早期 `Sustainability` 页面（其组件过多、文件散落 19 处、过度工程化且模板味过重，属于反模式）。
> **工程契约**：严格遵循项目根目录下 [WIKI_ARCHITECTURE_SPEC.md](../WIKI_ARCHITECTURE_SPEC.md) 架构规范与“七大铁律”。
> **适用场景**：全站全新页面布局编排、已有页面重构升级、文案与交互增量迭代。

---

## 目录

1. [全局架构与转化流水线](#一全局架构与转化流水线)
2. [黄金范式：Description 页面设计思想与组件复用库](#二黄金范式description-页面设计思想与组件复用库)
   - [2.1 Description 页面的核心设计哲学](#21-description-页面的核心设计哲学)
   - [2.2 核心可复用组件 1：全链条机制验证链 (Mechanism Route Chain)](#22-核心可复用组件-1全链条机制验证链-mechanism-route-chain)
   - [2.3 核心可复用组件 2：四方候选/实体卡片网格 (Candidate Entity Grid)](#23-核心可复用组件-2四方候选实体卡片网格-candidate-entity-grid)
   - [2.4 核心可复用组件 3：学术引用文献系统 (Academic Citation System)](#24-核心可复用组件-3学术引用文献系统-academic-citation-system)
   - [2.5 核心可复用组件 4：伴随式 Split 双栏 (严格单段原则与禁止自造提炼)](#25-核心可复用组件-4伴随式-split-双栏-严格单段原则与禁止自造提炼)
   - [2.6 核心可复用组件 5：数据对比矩阵与证据边界 (Table &amp; Note)](#26-核心可复用组件-5数据对比矩阵与证据边界-table--note)
   - [2.7 核心可复用组件 6：人物访谈与利益相关者卡片 (Interview / Stakeholder Card)](#27-核心可复用组件-6人物访谈与利益相关者卡片-interview--stakeholder-card)
3. [Markdown 元素 → 语义组件映射表](#三markdown-元素--语义组件映射表)
4. [全站尺寸与排版七大铁律 (Seven Ironclad Rules)](#四全站尺寸与排版七大铁律)
   - [铁律 1：宏观外壳尺寸（禁止篡改全局）](#铁律-1宏观外壳尺寸禁止篡改全局)
   - [铁律 2：微观组件尺寸（就近收口，禁止行内写死）](#铁律-2微观组件尺寸就近收口禁止行内写死)
   - [铁律 3：章节大标题排版与字号规范 (Section Heading Contract)](#铁律-3章节大标题排版与字号规范-section-heading-contract)
   - [铁律 4：严禁 AI 眉标与机械小字 (No-AI-Kickers &amp; Eyebrows Ban)](#铁律-4严禁-ai-眉标与机械小字-no-ai-kickers--eyebrows-ban)
   - [铁律 5：大标题与小标题双色层级设计规范 (Dual-Tone Heading Hierarchy)](#铁律-5大标题与小标题双色层级设计规范-dual-tone-heading-hierarchy)
   - [铁律 6：全站正文排版与统一间距层级规范 (Editorial Spacing Rhythm Contract)](#铁律-6全站正文排版与统一间距层级规范-editorial-spacing-rhythm-contract)
   - [铁律 7：全局基准与页面独有资产分工原则 (Global Baseline vs. Scoped Features)](#铁律-7全局基准与页面独有资产分工原则-global-baseline-vs-scoped-features)
5. [工程约定与高频避坑指南](#五工程约定与高频避坑指南)
6. [上线前验收自查清单](#六上线前验收自查清单)

---

## 一、全局架构与转化流水线

```text
Markdown 原文
   │  ① 忠于原文解析（100% 逐字保留：段落为 prose，图表为 figure/table；严禁擅自分析自造卡片）
   ▼
结构化纯数据  src/data/[module]/[page]Page.ts  (as const satisfies WikiPageContent)
   │  ② 纯数据层（逐字保真，严禁 JSX；仅当用户有明确需求时才分配 feature key）
   ▼
静态资产字典  src/data/[module]/[page]Assets.ts  (图片 > 3 张时必选)
   │  ③ 静态资产收敛（集中 import，避免数据层路径污染）
   ▼
可视化特征层  src/components/wiki/features/[module]/[Page]Panels.tsx
   │  ④ 用户明确要求的组件优先复用共享库（机制链、候选卡、访谈卡等），集中导出 [page]Features()
   ▼
专属微观样式  src/styles/features/[page]-panels.css
   │  ⑤ 微观尺寸局部收口，外部 margin 归零，禁止侵入全局
   ▼
统一模板装配  src/contents/[page].tsx  (<WikiRoutePage content features theme />)
   │  ⑥ 超薄路由入口（< 25 行），装配阅读器模板
   ▼
最终呈现：忠于原文、统一美学、无缝滚动、零AI味、高保真科研 Wiki
```

### 四大绝对不变式

1. **完全忠于原文**：学术文案 100% 逐字保留，普通文字一律舒展排版。**严禁私自分析正文来“设计”提炼卡片，杜绝正文与卡片内容重复**。
2. **组件仅由明确需求驱动**：多余的或特殊的交互组件，**只在用户明确提出需求且清楚意图后才制作**。用户未要求的组件严禁自行分析添加。
3. **纯数据严格无 JSX**：`src/data/` 目录中严禁引入 React 或 JSX 标签，所有复杂 UI 统一使用 `{ type: "feature", key: "slot-key" }` 挂载。
4. **尺寸有法可依**：宏观外壳尺寸收归 `wiki-route-skin.css` 全局变量；微观组件尺寸收敛在局部 feature CSS，严禁 TSX 行内硬编码。

---

## 二、黄金范式：Description 页面设计思想与组件复用库

### 2.1 Description 页面的核心设计哲学

`Description` 页面是 CirCure Wiki 的标准示范工程。相比于早期 `Sustainability` 页面散落 19 个独立文件、过度工程化、模板味重的问题，`Description` 确立了全新的标杆：

1. **极少 AI 味 (Zero-AI-Flavor)**：
   - 彻底剔除冷冰冰的全大写等宽伪标签（如 `PLATFORM MECHANISM`、`CLINICAL CONTEXT`）。
   - 彻底剔除生硬的货号式流水号（如 `CARD 01`、`TARGET 02`）。
   - 彻底剔除小标题左侧的彩色竖线装饰（`.wiki-subheading::before`）。
   - 还原纯正的高级学术期刊（Nature/Science 级）沉静排版质感。
2. **极简克制与高内聚 (Minimalist & High-Cohesion)**：
   - 全页仅用 3 个针对核心学术逻辑的定制 feature 插槽（机制验证链、2x2 候选抗原网格、学术文献引用系统）。
   - 85% 以上篇幅由高质量通栏正文、单段伴随 Split、清晰对比表格与高清科研图表构成。
   - 代码精炼，维护极为轻松。
3. **确保逻辑严密正确 (Ensure Logical Soundness)**：
   - 组件不是为了“显得像个卡片”而存在，而是直接服务于科研逻辑表达。
   - 机制链反映真实实验闭环（QC 质检菱形节点、终点实心节点清晰醒目）。
   - 候选卡片展示真实药理靶点特性与临床依据。
   - 引用系统具备严格的学术文献元数据与交互式双向溯源。
4. **零同义反复与忠于原文 (Zero Duplication & Faithful)**：
   - 绝不重复抄录正文段落充当卡片内容。
   - 绝不因“想丰富页面”而擅自把正文拆解成零碎卡片，把阅读的主导权完整还给学术正文。
5. **用户明确需求驱动制作 (User Demand Driven)**：
   - 新增组件必须由用户主动且明确提出。明确需求后，优先查看共享库是否有匹配模式，若无且具有通用性，则规范抽取并沉淀。

---

### 2.2 核心可复用组件 1：全链条机制验证链 (Mechanism Route Chain)

#### 适用场景

生命科学全流程实验、DBTL（Design-Build-Test-Learn）工程闭环、生信分析管线、从靶点到治疗的多阶段递进流程。

#### 组件原型 (`DescriptionPanels.tsx: MechanismRouteChain`)

```tsx
import { useId, type CSSProperties } from "react";

export function MechanismRouteChain({
  title = "Full-Chain Verification Pipeline",
  steps,
  qcStepIndex = 3, // 0-indexed，对应步骤 4（QC 质检菱形节点）
}: {
  title?: string;
  steps: string[];
  qcStepIndex?: number;
}) {
  const titleId = useId();

  return (
    <div className="description-mechanism-chain" data-wiki-reveal>
      <header className="description-mechanism-chain__header">
        <h4 id={titleId} className="description-mechanism-chain__title">
          {title}
        </h4>
      </header>
      <ol className="description-mechanism-chain__list" aria-labelledby={titleId}>
        {steps.map((step, index) => {
          const isQc = index === qcStepIndex;
          const isLast = index === steps.length - 1;
          return (
            <li
              key={step}
              className={`description-mechanism-chain__step ${isQc ? "is-qc" : ""} ${isLast ? "is-endpoint" : ""}`}
              style={{ "--step": index } as CSSProperties}
            >
              <span className="description-mechanism-chain__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="description-mechanism-chain__label">{step}</span>
              {!isLast ? (
                <span className="description-mechanism-chain__connector" aria-hidden="true">
                  <svg viewBox="0 0 10 10" width="10" height="10" focusable="false">
                    <path d="M3.5 2l3 3-3 3" />
                  </svg>
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
```

#### 样式与交互要点 (`description-page.css`)

- **自适应容器查询**：窄屏（移动端）自动呈现为竖向时间线；容器宽度 $\ge 32\text{rem}$ 时自适应切为 4×2 水平网格。
- **学术符号语汇**：普通步骤为圆环，质检步骤（QC）为 45° 菱形方块，终点为填色实心圆环。第 4 步到第 5 步折行连线采用虚线表示“跨行流转”。
- **单次渐进展开**：连接线根据 `--step` 延迟执行 `clip-path` 绘制动效，严禁无休止循环跳动。

---

### 2.3 核心可复用组件 2：四方候选/实体卡片网格 (Candidate Entity Grid)

#### 适用场景

候选生物靶点、分子构件、实验对比组、算法模块、利益相关者类别展示。

#### 组件原型 (`DescriptionPanels.tsx: AntigenCandidateCards`)

```tsx
export interface CandidateItem {
  symbol: string;       // 实体符号 / 简写 (如 Trop-2)
  fullName: string;     // 实体全称
  role: string;         // 分类/属性（显示为胶囊标签，如 Epithelial glycoprotein）
  highlight: string;    // 核心科研依据 / 关键证据
}

export function CandidateEntityGrid({ candidates }: { candidates: CandidateItem[] }) {
  return (
    <div className="description-antigen-grid" data-wiki-reveal>
      {candidates.map((item) => (
        <article key={item.symbol} className="description-antigen-card">
          <div className="description-antigen-card__header">
            <div className="description-antigen-card__title-row">
              <h4 className="description-antigen-card__symbol">{item.symbol}</h4>
              <span className="description-antigen-card__role">{item.role}</span>
            </div>
            <span className="description-antigen-card__fullname">{item.fullName}</span>
          </div>
          <div className="description-antigen-card__evidence">
            <p>{item.highlight}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
```

#### 样式与设计要点

- **2×2 对称平衡网格**：桌面端两列并排，移动端（<768px）自适应单列。
- **拒绝模板小字**：**严禁在顶部增加 `TARGET 01` 或 `CANDIDATE 02`**。实体名称与柔和胶囊标签一目了然。
- **微观质感**：纯白底板 + 模块主题色上边框（3px）+ 极其克制的悬浮微升（`translateY(-2px)`），稳重洗练。

---

### 2.4 核心可复用组件 3：学术引用文献系统 (Academic Citation System)

#### 适用场景

所有包含严谨参考文献、同行评审期刊引用的页面（如 Description, Engineering, Experiments 等）。

#### 架构三件套

1. **正文行内解析渲染**：使用 `renderCitedText` 或带有 `[1]` 上标锚点的行内渲染器，点击平滑滚动并高亮文献项。
2. **文献悬停浮层 (`CitationPreview`)**：读者悬停在 `[1]` 上标时，出现轻量 Portal 浮层，展示文献作者、标题、期刊与发表年份。
3. **文末列表与双向反查 (`DescriptionReferenceList` + `Backlinks`)**：文末参考文献项不仅支持正文点击落脚并闪烁高亮（`flashCitationTarget`），每一项文献末尾还自动生成反向链接（Backlinks），方便读者一键跳回正文中引用的具体段落。

---

### 2.5 核心可复用组件 4：伴随式 Split 双栏 (严格单段原则与禁止自造提炼)

#### 伴随单段铁律（伴随单段上限：≤ 1 段）

> **铁律**：伴随组件（`split.aside`）的唯一定位是**“主干正文某一段落的就近图解说明”**。
> **左侧 `split.prose` 中最多只允许放置 1 个直接对应的短段落！严禁将 2~3 段文字打包塞入导致左侧挤成长条细管！**
>
> ⚠️ **【严禁擅自脑补提炼】**：严禁开发或 AI 自行分析正文提炼几条要点充当 `mini-visual`！这会导致右侧卡片与左侧正文完全同义反复。**仅在原文稿件本身明确包含独立侧边伴随图解、或用户明确指令要求提炼时方可使用**。普通正文一律 100% 通栏舒展排版。

```typescript
// ✅ 标准写法：仅当有明确伴随需求时，其余段落全宽通栏，Split 仅伴随 1 段直接相关的文字
{
  type: "prose",
  paragraphs: [
    "第一段：TNBC 的临床困境与常规治疗限制...（通栏舒展阅读）"
  ]
},
{
  type: "split",
  id: "why-tnbc-split",
  prose: [
    {
      type: "prose",
      paragraphs: [
        "第二段：由于缺乏 ER、PR 和 HER2 表达，常规靶向疗法无法生效...（与右侧卡片高度契合）"
      ]
    }
  ],
  aside: {
    type: "mini-visual",
    title: "Why TNBC", // 严禁加 CLINICAL CONTEXT 等无意义小字标签！
    items: [
      "Aggressive clinical course",
      "Relatively poor median survival",
      "High risk of recurrence and metastasis",
      "Limited conventional molecular targets"
    ]
  }
},
{
  type: "prose",
  paragraphs: [
    "第三段：手术残留微转移灶的清除机理...（通栏舒展阅读）"
  ]
}
```

---

### 2.6 核心可复用组件 5：数据对比矩阵与证据边界 (Table & Note)

1. **结构化数据对比表 (`type: "table"`)**：
   - 用于不同平台特性、递送载体、实验组别的横向对比（如 Description 表 1）。
   - 纯 HTML 语义化表格，表头文字清晰，禁止滥用花哨渐变。
2. **诚实的证据边界说明 (`type: "note"` / `type: "callout"`)**：
   - 明确标注科研工作的证据极限（如“当前体外实验证实了递送与杀伤活性，尚未开展人体临床试验”）。
   - 严禁夸大疗效或伪造未完成结果。

---

### 2.7 核心可复用组件 6：人物访谈与利益相关者卡片 (Interview / Stakeholder Card)

#### 适用场景

Human Practices、社会走访调研、临床专家咨询、患者代表评语、伦理法律专家建议。**当且仅当用户明确提出需要访谈卡片呈现时方可制作**。

#### 设计原则与规范抽取

- **禁止在页面写死孤儿结构**：访谈卡必须抽象为通用组件（例如 `InterviewStakeholderCard` 或 `StakeholderGrid`），统一收纳在 `src/components/wiki/` 或模块 features 中跨页复用。
- **信息层级分明**：
  1. **受访者身份区**：头像/占位（微型圆角矩形）、姓名、专业头衔与所属机构。
  2. **核心洞见引语 (Quote)**：原汁原味呈现受访者核心金句，双引号点缀，字体略大且带典雅学术衬线/倾斜。
  3. **落地响应/团队反馈 (Takeaway)**：团队针对该访谈建议做出的具体实验/设计回应（如有）。
- **拒绝内容重复**：访谈卡作为正文的核心聚焦展示，正文无需再原封不动把同一段话抄录两遍。

```tsx
export interface StakeholderInterviewItem {
  name: string;             // 专家/受访者姓名 (如 Prof. Zhang)
  title: string;            // 专业头衔 (如 Chief Oncologist)
  affiliation: string;      // 所属机构 (如 Peking University First Hospital)
  field: string;            // 领域标签 (显示为柔和微型 pill，如 Clinical Oncology)
  quote: string;            // 核心原话/建议 (忠实原文，不擅自润色)
  reflection?: string;      // 团队思考与项目调整 (如 Integrated into Project Design)
  avatarSrc?: string;       // 资产字典解析的照片路径 (无照片时优雅留白)
}
```

---

## 三、Markdown 元素 → 语义组件映射表

带侧边栏的正文页统一采用正文编号：Overview 及其前面的引导章节不编号，正式章节从 1 连续计数；额外的无编号章节由 `hideSectionNumber` 标记。正文与目录共用 `numberWikiSections` 的编号结果，标题中自带的 `4.1.2` 等章节序号随父级同步调整，不能各自计数。日期、图表序号、参考文献编号及操作步骤名称不作为章节序号改写。

| Markdown 原始内容         | 语义类型 | 渲染目标（Block 类型 / 组件）                                 | 属性与参数约定                                                             |
| ------------------------- | -------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `#` / `##` 章节大标题 | 章节入口 | `WikiSection` (`index`, `title`, `summary`)           | 决定侧边栏一级导航与锚点，冒号自动分行                                     |
| `###` 章节内子标题      | 子章节   | `{ type: "subheading", id, index, title }`                  | 决定侧边栏二级导航，正文标题全部平齐、无装饰竖线                            |
| 名人引言 / 题词卷首语     | 引语     | `{ type: "epigraph", quote, translationZh, attribution }`   | 衬线体双语呈现                                                             |
| 普通叙述段落              | 正文叙事 | `{ type: "prose", paragraphs: [...] }`                      | 纯字符串数组，逐字保留，100% 舒展排版                                      |
| 伴随提炼说明（单段）      | 双栏画卷 | `{ type: "split", id, prose: [...], aside: mini-visual }`   | **严格单段伴随原则**，仅在用户要求或原文独立标注时使用，严禁自行提炼 |
| 独立科研插图 (带 Caption) | 静态图表 | `{ type: "figure", src, alt, caption }`                     | 语义化图片，优先使用资产字典                                               |
| 待测数据 / 占位图         | 证据留白 | `{ type: "image-placeholder", filename, instruction }`      | 严谨标明未完成，严禁伪造                                                   |
| 结构化对比表              | 数据矩阵 | `{ type: "table", caption, headers: [...], rows: [[...]] }` | 原生语义化表格                                                             |
| 机制流程 / 工程闭环       | 流程验证 | `{ type: "feature", key: "mechanism-route-chain" }`         | 用户明确要求时复用 Description 机制链组件                                  |
| 靶点/实体四方卡片         | 候选矩阵 | `{ type: "feature", key: "candidate-cards" }`               | 用户明确要求时复用 Description 2×2 候选网格                               |
| 人物访谈 / 利益相关者     | 专家访谈 | `{ type: "feature", key: "stakeholder-interviews" }`        | 用户明确要求时调用通用人物访谈卡组件                                       |
| 学术文献引用列表          | 参考文献 | `{ type: "feature", key: "page-references" }`               | 复用 Description 引用浮层与反查体系                                        |
| 关键结论 / 警示说明       | 边界声明 | `{ type: "callout", tone: "navy", label, body }`            | 纯粹学术提醒，克制着色                                                     |

---

## 四、全站尺寸与排版七大铁律

所有页面的排版与样式必须严格遵守以下七大铁律：

### 铁律 1：宏观外壳尺寸（禁止篡改全局）

整站容器大框架统一由 `src/styles/wiki-route-skin.css` 驱动。严禁在页面局部 CSS 里擅自篡改宏观宽度：

| 调整目标 | 唯一修改位置 | 对应变量 / 选择器 |
| :------------------------- | :--------------------------- | :----------------------------------------------------- |
| **页面最大限制总宽** | `wiki-route-skin.css:L65` | `--route-page: 1120px;` |
| **左侧目录边栏宽度** | `wiki-route-skin.css:L63` | `--toc-w: minmax(190px, 250px);` |
| **阅读容器视口高度** | `wiki-route-skin.css:L64` | `--reader-h: calc(100dvh - var(--reader-header-h));` |
| **垫子外边缘留白** | `wiki-route-skin.css:L62` | `--reader-pad: clamp(14px, 1.8vw, 22px);` |
| **正文默认内边距** | `wiki-route-skin.css:L785` | `.wiki-article { padding: clamp(...) clamp(...); }` |

### 铁律 2：微观组件尺寸（就近收口，禁止行内写死）

- 严禁在 TSX 节点上硬编码尺寸（如 `style={{ height: "480px" }}`）。
- 专属组件尺寸必须写在 `src/styles/features/[page]-panels.css` 中，并通过清晰的 CSS 类名或局部 CSS 变量暴露（如 `--orbit-panel-height: 420px;`）。组件外边距一律 `margin: 0`，由全局 `.wiki-feature` 统一提供标准外间距。

### 铁律 3：章节大标题排版与字号规范 (Section Heading Contract)

- **字号严格控制**：章节标题 `h2` 基准字号设定为 `clamp(21px, 2.2vw, 25px)`（行高 `1.35`），严禁使用 40px+ 的膨胀巨号。
- **冒号自动分行 (Colon Break)**：凡标题包含中英文冒号，由 `WikiRoutePage.tsx` 自动切分为 Lead line 与 Sub line，**严禁在纯数据层 `src/data/` 中手动写入 `<br>`**。
- **马克笔涂刷效果**：通过 `.wiki-heading-marker` 渲染手绘马克笔下半部高亮涂刷，色彩收敛在各模块 palette。
- **水印数字比例**：左后方序号水印（`.wiki-section-number`）收敛至 `clamp(48px, 5.2vw, 68px)`，透明度 `0.14`，严禁喧宾夺主。
- **严禁无意义 AI 装饰**：剔除顶部线条、滑动圆点、下划虚线等生成式装饰；彻底禁止 AI 生成无实际学术意义的 `kicker` 与 `summary`。

### 铁律 4：严禁 AI 眉标与机械小字 (No-AI-Kickers & Eyebrows Ban)

- **全面禁绝全大写等宽眉标**：严禁在小节标题（`h3`）、可视化组件头部、卡片顶部放置如 `PLATFORM MECHANISM`、`TARGET SELECTION`、`CLINICAL CONTEXT` 等全大写生硬小字。
- **处置原则**：
  1. 同义反复废话直接删除；
  2. 从属关系合入主标题并以冒号连接；
  3. 实体属性以主标题旁微型优雅 pill 标签展示；
  4. 描述性依据以卡片正文或自然说明呈现。
- **清除伪装饰**：彻底去除小节标题左侧彩色竖线（`.wiki-subheading::before`），去除卡片机械货号（如 `TARGET 01`）。正文 H3、H4 及更深标题全部与正文平齐，不添加左边框或专属内缩。

### 铁律 5：大标题与小标题双色层级设计规范 (Dual-Tone Heading Hierarchy)

- **标题层级**：H2 为 `clamp(21px, 2.2vw, 25px)` / 750 / 1.35，H3 为 `clamp(17px, 1.8vw, 20px)` / 700 / 1.35，H4 为 `clamp(15.5px, 1.6vw, 17px)` / 650 / 1.40，更深标题不超过 16px、15px。H3 使用模块小标题色，H4 使用模块 `--route-tertiary-ink`，正文和折叠小节共用全局字号变量。编号为空不代表层级较高；Step / Choice 等显式 H4 在正文与目录中都属于对应 H3。
- **H4 模块色**：Project `#345443`、Wet Lab `#275a52`、Dry Lab `#275661`、Engagement `#78442c`、Team `#5c4323`。H2、H3 与马克笔继续使用本模块的配色，完整速查表见 `WIKI_ARCHITECTURE_SPEC.md` 铁律 5。模块归属按实际路由与导航分组确定，正文标题不能由页面专属样式改成其他颜色。
- **Sustainability 特例**：保留现有 SDG / SCALE 标题色及页面专属标题样式，不纳入本次标题样式统一。正文与目录编号继续遵循共享规则。
- **Engineering 配色特例**：保留现有标题与 DBTL 阶段的独立颜色，字号层级使用共享变量。

- **杜绝单色沉闷，杜绝同色混淆**：大标题（`h2`）与小标题（`h3`）严禁复用同一种颜色或同色系深浅变体。
- **全站五大 Part 双色规划表**：| 模块 Part            | 大标题 H2 (`--route-heading-ink`) | 大标题马克笔涂刷 (`--route-marker-bg`) | 小标题 H3 (`--route-subheading-ink`) | 搭配意境与对比原理                                    |
  | :------------------- | :---------------------------------- | :--------------------------------------- | :------------------------------------- | :---------------------------------------------------- |
  | **Project**    | `#243d2c`（深墨冷森绿）           | `#c4c7be`（柔和灰鼠绿）                | `#84382b`（暖陶土褐红）              | **森绿 + 赤陶红**（色相差 130°，沉稳雅致）     |
  | **Wet Lab**    | `#14354c`（深邃实验海蓝）         | `#c6e5f2`（冰川淡海泡蓝）              | `#88541e`（暖琥珀金棕）              | **海蓝 + 琥珀金**（色相差 174°，冷暖互补经典） |
  | **Dry Lab**    | `#153e34`（深松针墨黑青）         | `#c2ebe0`（薄荷冰绿）                  | `#633256`（深紫晶墨色）              | **松黑青 + 紫晶墨**（算法理性与数理几何）       |
  | **Engagement** | `#4a2c1d`（深沉红咖褐）           | `#f7ddce`（柔杏微光）                  | `#174a47`（深孔雀墨黛青）            | **暖咖褐 + 孔雀墨青**（暖木冷翠，人文温度）     |
  | **Team**       | `#3e2d14`（深古铜黑褐）           | `#f8ecbe`（浅金麦香）                  | `#762338`（深勃艮第酒红）            | **古铜金 + 勃艮第酒红**（古典勋章桂冠）         |

### 铁律 6：全站正文排版与统一间距层级规范 (Editorial Spacing Rhythm Contract)

整站严格遵循以下垂直律动阶梯：

$$
\text{段落间距 (16px)} < \text{小标题到底正文 (14px)} < \text{大标题到内容 (24px) = 组件间距 (24px)} < \text{正文到小标题顶 (28px)} < \text{章节切换 (44px)}
$$

| 间距层级                        | 标准数值 / CSS Token                       | 适用场景与视觉行为                                                                             |
| :------------------------------ | :----------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **1. 段落间距 (最小)**    | `16px` (`--wiki-space-p`)              | 正文段落与段落之间 (`p ↔ p`)；连续 prose 自适应保持 16px。                                  |
| **2. 小标题顶部 (稍大)**  | `28px` (`--wiki-space-subhead-top`)    | 正文或内容块到下一个小标题 (`h3`) 顶部的距离。                                               |
| **2b. 小标题底部 (贴合)** | `14px` (`--wiki-space-subhead-bottom`) | 小标题 (`h3`) 到其紧随内容块底部的距离，紧密吸附下文。                                       |
| **3. 标准内容块间距**     | `24px` (`--wiki-space-block`)          | 正文与组件（`.wiki-feature`）、图表（`.wiki-figure`）、表格之间的标准流间距。              |
| **4. 大标题底部间距**     | `24px` (`--wiki-space-head-bottom`)    | 章节大标题 (`h2`) 到底部首个内容块的距离。                                                   |
| **4b. 首块等距铁律**      | **严格等于 24px**                    | **大标题下方直接跟小标题时，间距严格等于 24px**。首块强制 `margin-top: 0 !important`。 |
| **5. 章节间距 (宏观)**    | `44px` (`--wiki-space-section`)        | 大章节与大章节之间 (`section + section`) 的切换距离，彻底废弃 128px 巨大断层。               |

### 铁律 7：全局基准与页面独有资产分工原则 (Global Baseline vs. Scoped Features)

- **必须写在总体的规范**：阅读器外壳尺寸、垂直节奏阶梯、标题马克笔与双色系统契约。收敛在 `wiki-route-skin.css`。
- **严禁写在总体的特例**：某个页面特有的自定义可视化（如 Description 的 8 步机制链 CSS、四抗原卡片网格）。必须存放在 `src/components/wiki/features/[module]/` 与 `src/styles/features/`。
- **复用优先原则**：其他页面若需要使用相同的交互模式（如机制链或候选卡片），直接复用 Description 的通用组件，**绝不允许为了适配某个页面的特殊形状，在全局基础样式里打 `if` 特判或写死例外类名**。

---

## 五、工程约定与高频避坑指南

1. **全屏弹窗必须使用 Portal**：
   - 页面内的 `.wiki-feature[data-wiki-reveal]` 带有 CSS `transform`，会导致内部的 `position: fixed` 失效并被限制在卡片内部！
   - 所有全屏模态框、PDF 查看器或浮层，必须通过 `createPortal(modal, document.body)` 挂载到根节点。
2. **滚动联动感知**：
   - 需要感知当前读者滑到哪一节时，在组件内调用 `useRoutePageScroll()`，获取当前视口所在的 `{ activeSection, activeSubsection }`。
3. **保持单一页面级滚动**：
   - 侧边栏允许 sticky，但文章主体内部严禁产生嵌套滚动条（禁止 `overflow-y: scroll` 将正文变成内部小视窗）。
4. **科研文字逐字不改**：
   - 任何学术名词、符号（如 $\text{CD8}^+$）、括号出处必须与源 Markdown 保持严格一致，修改仅在布局和表现层完成。
5. **严禁擅自分析自造卡片导致内容重复**：
   - 严禁开发或 AI 自主对文案做所谓的“提取重点”，进而捏造卡片或伴随图解。
   - 这种做派不仅破坏正文沉浸式学术阅读，而且卡片内容必然与正文句子同义反复，导致页面内容严重冗余。
   - 额外组件制作必须有用户的**明确要求**与**明确意图**确认；用户未要求的组件一律不加。
6. **通用额外组件规范抽取沉淀**：
   - 当用户明确要求制作某种额外组件时（如人物访谈卡、机制链、候选靶点卡等），若具备多页面复用价值，必须规范抽离为共享可复用组件，统一收纳在共享库中供全站复用，禁止在页面内写死不可复用的临时孤儿代码。

---

## 六、上线前验收自查清单

- [ ] **完全忠于原文**：正文段落是否 100% 逐字保留？是否坚决没有私自把正文拆解或压缩为花哨卡片？
- [ ] **零同义反复**：页面中是否存在卡片要点与正文段落重复表达的冗余现象？（若有必须彻底剔除）
- [ ] **明确需求驱动**：页面中的每一个额外可视化组件，是否均来自于用户的明确要求？是否避免了擅自根据文案做“分析增设”？
- [ ] **范式对齐**：是否保持 Description 的正文排版与统一标题层级？是否剔除了 AI 伪小字与生硬卡片流水号，确保 H3 大于 H4、标题平齐无竖线，颜色符合所属模块？
- [ ] **组件复用**：需要展示机制流水线、候选组别或人物访谈时，是否优先复用了标准共享组件（机制链、四方候选网格、人物访谈卡）？
- [ ] **伴随单段**：所有 Split 双栏左侧是否严格只包含 $\le 1$ 段正文？没有挤压多段长文？且仅在有明确侧边图解需求时使用？
- [ ] **纯数据解耦**：`src/data/` 中是否完全没有任何 JSX 标签？
- [ ] **插槽映射**：数据层中的 `feature.key` 是否在 `[Page]Panels.tsx` 中都有对应实现？
- [ ] **双色层级**：H2 与 H3 是否正确应用了当前 Part 的双色跨色相契约？
- [ ] **尺寸规范**：没有在 TSX 里硬编码 `style={{ width, height }}`，宏观尺寸未随意覆写？
- [ ] **响应式验证**：移动端（<768px）阅读时，双栏自动折叠为单栏，图表无横向溢出？
- [ ] **严格类型安全**：运行 `npx tsc --noEmit` 保证 TypeScript 零错误通过？
