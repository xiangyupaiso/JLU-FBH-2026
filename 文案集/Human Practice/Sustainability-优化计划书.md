# 📋 Sustainability 页面优化与视觉增强计划书

> **文档定位**：基于飞书文档最新版正文与 `circure-design-system` 设计规范的页面改造计划  
> **适用项目**：CirCure iGEM 2026 Wiki — Engagement 板块 → Sustainability 页面（路由 `/sustainability`）  
> **文案来源**：飞书文档 `https://ucnwvgd1zs0j.feishu.cn/wiki/QoEDwm9qGig8UikX7jdc5uqxnsf`（revision 187），正文已进行顺序调整与内容扩充，本计划基于最新版正文规划  
> **现有页面状态**：当前 `src/contents/sustainability.tsx` 使用通用 `WikiPage` 框架 + 占位数据（`engagementPages.ts` 中的 `sustainabilityPage`），正文内容为框架性占位文本，需替换为真实文案  
> **计划性质**：暂不修改源文件，仅提供结构化改造蓝图  
> **编制日期**：2026-08-08  
> **更新日期**：2026-08-08（同步飞书文档 revision 187 的顺序调整）

---

## 一、 内容架构与排版重构计划

### 原架构优化点

| 编号 | 优化点描述 | 设计建议 |
|------|-----------|---------|
| O-01 | **利益相关者档案为纯粗体文本堆砌**：李成丽医生与 TNBC 患者的档案使用连续 `**bold**` 段落（Relevant Stakeholder / Why We Engaged / Feedback / Improvement / SDG Addressed），信息密度高但缺乏结构化布局 | 转化为结构化的 `StakeholderProfileCard` Key-Value 卡片组件，每个字段用 `<dl>` 定义列表呈现 |
| O-02 | **图片为飞书 CDN 链接**：全部 5 张图片引用 `internal-api-drive-stream.feishu.cn`，违反 iGEM 禁止外部 CDN 规则 | 下载后通过 iGEM Wiki uploads 工具上传，替换为 iGEM 服务器 URL |
| O-03 | **专家反馈为扁平段落**：魏宇航、刘雅文、贾琳、崔久嵬、范志民 5 位专家的反馈以连续段落排列，无视觉分隔 | 转化为 `ExpertFeedbackGrid` 卡片网格，每张卡片展示专家姓名、领域视角、核心建议与项目改进 |
| O-04 | **现有 Wiki 页面使用占位数据**：`engagementPages.ts` 中的 `sustainabilityPage` 仅含 3 个占位章节（Impact boundary / SDG trace / Decision indicators），与 `Sustainability.md` 正文的丰富内容不匹配 | 需重构 `sustainabilityPage` 数据结构或创建自定义页面组件，以承载正文中的多层级内容 |
| O-05 | **"Click More" 展开逻辑为纯文本标注**：文中以"（李成丽详细）点击 click more 后显示"和"（患者详细）点击 click more 后显示"标注可展开内容，未实现交互 | 使用 `<details>` / `<summary>` 或自定义折叠组件实现可展开的详细访谈内容 |
| O-06 | **三个亟待解决的问题为纯列表**：Limited effective treatment / Long-term control / Accessibility 使用 `- **bold**` 列表，缺乏视觉层次 | 转化为 3 列问题卡片组，每张含图标 + 中英双语标题 + 描述 |
| O-07 | **利益相关者统计数据嵌入正文**：43 名、6 个领域、23 名专家、4 名患者、16 名公众等数字散落在段落中 | 提取为 `CountUpStat` 数字滚动计数器组件，增强数据冲击力 |
| O-08 | **SST-QN 章节内容密集且多层级**（飞书版新增）：SST-QN 从 Overview 简述升级为独立 H1 章节，包含分类体系（Core/Exploratory/Conditional/Excluded）、Evidence-calibrated Directed Interaction Score、间接传播、implementation pathways、edge registry 等多层概念，纯文字叙述缺乏视觉层次 | 为 SST-QN 章节设计专属可视化组件：分类矩阵图 + 有向网络图 + 评分流程图，关键概念用 `Callout` 高亮 |
| O-09 | **SST-QN 章节包含 PDF 附件**（飞书版新增）："SDG 模型构建.pdf" 嵌入正文末尾，需在 Wiki 页面中提供可下载链接或内嵌预览 | 使用 `PdfViewerModal` 组件（项目已有）或提供下载链接卡片 |
| O-10 | **C — Consequences 已有正文内容**（飞书版新增）：从空标题升级为含一段正文，讨论 CirCure 临床转化的社会/经济/环境三维度长期影响 | 更新内容状态为"现有"，设计三维度影响评估卡片或 Callout 组件 |
| O-11 | **Overview 中框架引入顺序调整**（飞书版变更）：原版为 SDG Impact Framework → SCALE → SST-QN；飞书版改为 SST-QN → SDG Impact Framework → SCALE，叙事逻辑从"先框架后方法"变为"先方法后框架" | 更新 Overview 章节的组件排列顺序与侧边栏锚点结构 |
| O-12 | **SST-QN 章节含"图片用两次"标注**（飞书版备注）：文中标注"（这个图片要改，用两次不行）"，需区分 Overview 中的 SST-QN 概览图与 SST-QN 章节内的详细网络图 | 为 Overview 和 SST-QN 章节分别准备不同层级的可视化图：Overview 用简化版示意图，SST-QN 章节用完整网络图 |

### 重构后 Heading 架构表

> 以下架构基于飞书文档 revision 187 最新正文规划。标注"现有"的章节表示文案已存在；标注"预留"的章节表示文案尚为部分内容，后续将补充。

| 层级 | 原标题 | 建议新标题 | 锚点 ID (Anchor) | 内容状态 | 叙事功能说明 |
|---|---|---|---|---|---|
| H1 | Sustainability | Sustainability | `#sustainability` | 现有 | 页面标题，Hero 区域主标题 |
| — | _（Maurice Strong 引言）_ | _Epigraph 引言块_ | — | 现有 | Hero 下方权威引言，建立可持续发展语境 |
| H2 | Overview | Overview | `#overview` | 现有 | 总览：SDG 3/9/12 核心目标 + 三大框架引入（**顺序调整：SST-QN → SDG Impact Framework → SCALE**） |
| H2 | SDG Synergy–Trade-off Quantification Network（SST-QN） | SST-QN — SDG Synergy–Trade-off Quantification Network | `#sst-qn` | 现有（飞书版扩充） | **新增独立 H2 章节**：SDG 相互作用网络方法论，含分类体系、评分模型、间接传播、实施路径分析、PDF 附件 |
| H2 | SET-DEVELOP-GROW Impact Framework（SDG Impact Framework） | SET–Develop–Grow Impact Framework | `#sdg-impact-framework` | 现有 | 可持续发展影响框架总述：三层递进逻辑（飞书版精简，删除英文翻译段落） |
| H3 | _（框架描述段落）_ | Framework Architecture | `#framework-architecture` | 现有 | SET/DEVELOP/GROW 三层定义与递进关系，配框架图 |
| H3 | SET：Addressing Core Challenges | SET — Addressing Core Challenges | `#set-core-challenges` | 现有 | 核心问题响应层：WHO 数据、TNBC 临床需求、SDG 对齐、43 名利益相关者总览 |
| H4 | SDG3: Good Health and Well-being | SDG 3 — Good Health and Well-being | `#sdg3-health` | 现有 | 健康福祉：circRNA 疫苗治疗策略回应 TNBC 未满足需求 |
| H5 | S — Stakeholder Insights | S — Stakeholder Insights | `#sdg3-stakeholder` | 现有 | 利益相关者洞察：李成丽医生 + TNBC 患者 + 5 位专家反馈 |
| H5 | C — Consequences | C — Consequences | `#sdg3-consequences` | 现有（飞书版新增正文） | 后果分析：CirCure 临床转化的社会/经济/环境三维度长期影响评估 |
| H5 | A — Alignment | A — Alignment | `#sdg3-alignment` | 预留 | 对齐分析（标题已存在，正文后续补充） |
| H5 | L — Legacy | L — Legacy | `#sdg3-legacy` | 预留 | 长期遗产（标题已存在，正文后续补充） |
| H5 | E — Evidence | E — Evidence | `#sdg3-evidence` | 预留 | 证据链（标题已存在，正文后续补充） |

### 侧边栏锚点目录结构

```
📁 Sustainability
├── 📌 Overview
├── 📌 SST-QN                        ← 飞书版新增独立 H2 章节
│   ├── 分类体系（Core / Exploratory / Conditional / Excluded）
│   ├── Evidence-calibrated Directed Interaction Score
│   ├── 间接传播与反馈结构
│   ├── Implementation Pathways
│   └── PDF 附件：SDG 模型构建.pdf
├── 📌 SET–Develop–Grow Framework
│   ├── Framework Architecture
│   └── SET — Core Challenges
│       └── SDG 3 — Health
│           ├── S — Stakeholder
│           ├── C — Consequences       ← 飞书版新增正文
│           ├── A — Alignment
│           ├── L — Legacy
│           └── E — Evidence
└── 📌 SCALE Framework                ← Overview 中引入，正文待展开
```

---

## 二、 组件与动效规划 (含已有组件映射与自定义新组件设计)

### 1. 已有组件复用

| 组件名称 | 来源文件 | 应用位置 | 复用方式说明 |
|---------|---------|---------|-------------|
| `WikiLineSidebar` | `src/components/wiki/WikiLineSidebar.tsx` | 全页侧边栏 | 使用现有侧边栏组件，配置本页锚点目录。复用丝带滑块（ribbon）与滚动联动高亮 |
| `EngagementRouteNav` | `src/components/wiki/EngagementRouteNav.tsx` | 页面顶部 | 5 页标签导航（HP / Sustainability / Education / Entrepreneurship / Inclusivity），已有实现直接复用 |
| `EngagementHeroVisual` | `src/components/wiki/EngagementHeroVisual.tsx` | Hero 区域 | 按路由映射的 Hero 视觉图，已有 sustainability 映射 |
| `WikiPage` manuscript 模式 | `src/components/wiki/WikiPage.tsx` | SCALE 各子章节 | 复用 `ItemCollection` 手风琴折叠列表（`details/summary`），用于 C-A-L-E 各要素的展开/收起 |
| `useWikiPageMotion` | Wiki 页面通用 hook | 全页滚动动画 | 复用 `data-wiki-reveal` + `IntersectionObserver` 入场动画机制 |
| `DecisionProofTable` | `EngagementFeatures.tsx` | SET 层改进追踪 | 已在现有 Sustainability 页面中使用，可扩展用于展示"反馈→改进"的审计追踪表 |
| `TradeoffOrbit` | `EngagementFeatures.tsx` | SST-QN 章节 | 已在现有页面中使用。4 维度切换可映射为 Synergy / Trade-off / Neutral / Indirect |
| `PdfViewerModal` | `src/components/wiki/features/PdfViewerModal.tsx` | SST-QN 章节 — PDF 附件 | 飞书版新增"SDG 模型构建.pdf"附件，复用项目已有的 PDF 预览弹窗组件 |
| `Callout` | `circure-design-system.html` | 全页关键论述 | 复用 `.callout` 样式（`border-left: 3px solid var(--care)` + `background: var(--surface-blush)`） |
| `.demo-card` | `circure-design-system.html` | 专家反馈卡片基底 | 复用卡片组件（`radius/panel` 28px + 底部 3px 强调条 hover 动效） |
| `details/summary` 折叠 | 项目通用模式 | "Click More" 展开 | 复用 HP Dossier 和 ProtocolStack 中已有的 `<details>` 折叠模式 |

### 2. 自定义新组件设计 (Custom Components)

---

#### 组件 1：`SDG-Interactive-Card`（SDG 交互翻转卡片）

**适用章节**：Overview — 三项核心 SDG 展示；SET 层 SDG 3 章节头部

**设计目的**：将 SDG 3 / 9 / 12 的核心信息以可交互的翻转卡片呈现，正面展示 SDG 编号与标题，背面展示 CirCure 对该目标的回应方式。

**UI 样式**：
- 卡片尺寸：`min-height: 280px`，`border-radius: var(--radius-panel)` (28px)
- 正面背景：SDG 官方色系映射到设计系统语义色
  - SDG 3 → `--semantic-success` (#2f6f68, wet-teal)
  - SDG 9 → `--brand-navy` (#173f78)
  - SDG 12 → `--accent-gold` (#c39a55)
- 背面背景：`--surface-paperBright` (#fcf8f1)，1px `--line-default` 边框
- 字体：SDG 编号用 `--font-display` `clamp(48px, 5vw, 72px)` `weight: 720`；标题用 `--font-editorial` `clamp(18px, 1.6vw, 24px)`

**交互逻辑**：
- **Hover（桌面）**：卡片沿 Y 轴翻转 180°，`transform: rotateY(180deg)`，`duration: 440ms` (`--duration-slow`)，`easing: var(--ease-out)`
- **Click（移动端）**：点击触发翻转，再次点击翻回
- **Focus-visible**：`outline: 2px solid var(--care)`，`outline-offset: 3px`
- **prefers-reduced-motion**：禁用翻转，正面显示标题 + 背面内容在下方展开

---

#### 组件 2：`StakeholderProfileCard`（利益相关者档案卡片）

**适用章节**：SET → SDG 3 → S — Stakeholder Insights

**设计目的**：将李成丽医生与 TNBC 患者的档案信息从纯粗体文本转化为结构化 Key-Value 卡片。每张卡片包含：Relevant Stakeholder / Why We Engaged / Stakeholder Feedback / Feedback Incorporated / Project Improvement / SDG Addressed 六个字段。

**UI 样式**：
- 布局：左侧人物头像/图标区（`width: 120px`），右侧信息区
- 卡片：`background: var(--surface-paperBright)`，`border: 1px solid var(--line)`，`border-radius: var(--radius-panel)` (28px)，`padding: var(--space-6)` (28px)
- 信息区采用定义列表（`<dl>`）布局：
  - 标签（`<dt>`）：`font-family: var(--font-mono)`，`font-size: 10px`，`weight: 800`，`letter-spacing: 0.06em`，`text-transform: uppercase`，`color: var(--care)`
  - 值（`<dd>`）：`font-family: var(--font-sans)`，`font-size: 14px`，`color: var(--ink-primary)`
- 底部 SDG 标签：`pill` 形状（`border-radius: 999px`），`background: var(--surface-blush)`，`color: var(--care-strong)`

**交互逻辑**：
- **"Click More" 展开**：卡片底部 `<details>` 折叠区，点击展开李成丽医生/患者的详细访谈内容（Line 111-127 正文）
- 展开动画：`grid-template-rows: 0fr → 1fr`，`duration: 360ms` (`--duration-base`)，`easing: var(--ease-out)`
- **Hover**：卡片 `translateY(-3px)`，底部 3px 强调条 `scaleX(0→1)`
- SDG 标签 hover：`background` 变为 `var(--care)`，`color: #fff`

**数据映射**：
```
李成丽医生:
  Relevant Stakeholder → 湖南省长沙市第八医院肿瘤科医生，一线参与肿瘤患者诊疗与决策
  Why We Engaged Her   → 从临床视角了解TNBC未满足需求，并评估CirCure的临床价值
  Stakeholder Feedback → TNBC患者更需要明确的治疗获益，降低复发风险和延长生存优先于单纯减少副作用
  Feedback Incorporated → 这一反馈纠正了我们过度强调副作用的倾向，使CirCure更加关注抗肿瘤疗效
  Project Improvement  → 将设计原则调整为"疗效优先，安全性优化"
  SDG Addressed        → SDG 3 — Good Health and Well-being

TNBC Patients:
  Relevant Stakeholder → TNBC患者是CirCure未来最直接的潜在受益者
  Why We Engaged Them  → 直接了解患者真正关注的治疗需求与现实顾虑
  Stakeholder Feedback → 患者最关注治疗效果、复发风险和长期生存，同时也关心治疗费用
  Feedback Incorporated → 我们进一步将抗肿瘤疗效、长期获益和治疗可及性纳入项目评价
  Project Improvement  → 由技术性能评价扩展为疗效、长期获益与可及性的综合评估
  SDG Addressed        → SDG 3 — Good Health and Well-being
```

---

#### 组件 3：`ExpertFeedbackGrid`（专家反馈网格）

**适用章节**：SET → SDG 3 → S — Stakeholder Insights（专家咨询部分，Line 138-153）

**设计目的**：将 5 位专家的反馈从扁平段落转化为结构化卡片网格。

**UI 样式**：
- 网格：`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`，`gap: var(--space-5)` (22px)
- 卡片：`background: var(--surface-paperBright)`，`border: 1px solid var(--line)`，`border-radius: var(--radius-panel)` (28px)，`padding: var(--space-6)` (28px)
- 卡片头部：姓名用 `--font-editorial` `clamp(18px, 1.4vw, 22px)` `weight: 500`；领域标签用 `--font-mono` `9px` `weight: 800` `color: var(--care)` `text-transform: uppercase`
- 建议文本：`font-size: 13px`，`line-height: 1.58`，`color: var(--ink-muted)`
- 改进措施：前缀 `→` 符号，`color: var(--brand-navy)`，`font-weight: 650`

**交互逻辑**：
- **Hover**：卡片 `translateY(-3px)` + `box-shadow: var(--shadow-medium)`
- **入场动画**：卡片依次淡入（stagger `60ms`），`opacity: 0→1` + `translateY(20px→0)`，`duration: 440ms`，`easing: var(--ease-out)`，由 `IntersectionObserver` 触发

**数据映射**：
```
魏宇航 (副院长) — 公共健康与医疗资源分配
  建议: 新的治疗策略应考虑不同患者获得治疗的机会
  改进: 加入医疗可及性和健康公平内容，关注 SDG 10

刘雅文 (副院长) — 女性健康与疾病防治
  建议: 乳腺癌防治需提高女性主动体检、定期筛查和早期发现的意识
  改进: 将乳腺健康科普和体检筛查意识纳入公众教育

贾琳 (老师) — 乳腺癌临床特点
  建议: 项目设计应从TNBC真实治疗需求出发，不能只关注技术本身的创新性
  改进: 梳理TNBC现有治疗不足，将临床需求作为设计依据

崔久嵬 (老师) — 肿瘤免疫治疗
  建议: 更加关注免疫治疗策略的有效性、安全性及未来临床应用可行性
  改进: 完善免疫治疗设计思路，增加安全性、临床转化和负责任应用考量

范志民 (老师) — 乳腺癌临床治疗路径
  建议: 新型治疗方式需真正改善患者治疗结果，考虑与现有治疗方案衔接
  改进: 将患者获益和临床应用场景纳入设计与长期价值评估
```

---

#### 组件 4：`ImpactFrameworkDiagram`（SET-DEVELOP-GROW 三层框架图）

**适用章节**：SET–Develop–Grow Framework → Framework Architecture（Line 25-39）

**设计目的**：用 SVG + CSS 动效绘制三层递进框架图，替代当前飞书静态图片（Line 29），展示 SET → DEVELOP → GROW 的递进关系。

**UI 样式**：
- SVG 绘制，宽度 `100%`，`max-width: 830px`，居中
- 三层同心弧或三段水平条带：
  - SET 层：`fill: var(--brand-navy)` (#173f78)，标注"核心问题响应" + SDG 3/9/12
  - DEVELOP 层：`fill: var(--accent-pinkThread)` (#d784b3)，标注"多维影响拓展"
  - GROW 层：`fill: var(--accent-gold)` (#c39a55)，标注"长期系统价值"
- 连接线：`stroke: var(--care)`，`stroke-width: 1.5`，`stroke-dasharray: 4 4`
- 标签：`font-family: var(--font-mono)`，`font-size: 11px`，`fill: var(--paper-bright)`

**交互逻辑**：
- **滚动驱动展开**：三层随滚动逐层"生长"（`stroke-dashoffset` 动画），由 `IntersectionObserver` 触发
- **Hover 层级**：悬停某层时该层 `opacity: 1`，其余 `opacity: 0.4`，显示 tooltip
- 展开动画：`duration: 600ms`，`easing: var(--ease-out)`
- **prefers-reduced-motion**：三层同时静态显示

---

#### 组件 5：`CountUpStat`（数字滚动计数器）

**适用章节**：SET → Addressing Core Challenges（Line 47 利益相关者统计数据）

**设计目的**：将"43 名利益相关者""6 个领域""23 名专家""4 名患者""16 名社会公众"等关键数字以滚动计数器形式动态展示。

**UI 样式**：
- 布局：`grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))`，`gap: var(--space-5)` (22px)
- 数字：`font-family: var(--font-display)`，`font-size: clamp(36px, 4vw, 56px)`，`weight: 720`，`color: var(--brand-navy)`
- 标签：`font-family: var(--font-mono)`，`font-size: 10px`，`weight: 800`，`letter-spacing: 0.06em`，`text-transform: uppercase`，`color: var(--care)`
- 容器：`background: var(--surface-paperBright)`，`border: 1px solid var(--line)`，`border-radius: var(--radius-panel)` (28px)，`padding: var(--space-6)` (28px)

**交互逻辑**：
- **滚动触发**：`IntersectionObserver`（`threshold: 0.3`），数字从 `0` 滚动到目标值
- 动画：`requestAnimationFrame`，`duration: 1200ms`，`easing: ease-out`
- **prefers-reduced-motion**：直接显示最终数字

---

#### 组件 6：`SCALE-ProgressChain`（SCALE 五步进展链）

**适用章节**：SDG 3 章节内的 S-C-A-L-E 五要素导航（Line 57, 155-161）

**设计目的**：为 SDG 3 章节提供 SCALE 五要素水平进展链导航，当前所在步骤高亮，点击可跳转。

**UI 样式**：
- 布局：`display: flex`，`gap: var(--space-3)` (12px)，`align-items: center`
- 节点：圆形（`32×32px`，`border-radius: 999px`），内填首字母 S/C/A/L/E
  - 已完成节点：`background: var(--brand-navy)`，`color: var(--paper-bright)`
  - 当前节点：`background: var(--care)` (#d784b3)，`color: #fff`，`transform: scale(1.15)`
  - 预留节点：`background: var(--surface-map)`，`color: var(--ink-faint)`，`border: 1px dashed var(--line)`
- 连接线：`height: 1px`，`background: var(--line)`；已完成段为 `var(--brand-navy)`
- 节点标签：`--font-mono`，`9px`，`weight: 800`，`text-transform: uppercase`

**交互逻辑**：
- **Click 节点**：平滑滚动到对应锚点
- **Scroll 联动**：滚动到对应章节时自动更新当前节点
- **Hover**：`transform: scale(1.1)`，`duration: 220ms`

---

#### 组件 7：`ProblemCardGroup`（三个亟待解决问题卡片组）

**适用章节**：SET → SDG 3 → S — Stakeholder Insights（Line 129-136）

**设计目的**：将三个亟待解决的问题从列表转化为 3 列视觉卡片组。

**UI 样式**：
- 网格：`grid-template-columns: repeat(3, 1fr)`，`gap: var(--space-5)` (22px)；移动端单列
- 卡片：`background: var(--surface-paperBright)`，`border-top: 3px solid var(--accent-coral)` (#df705b)，`border-radius: 0 0 var(--radius-panel) var(--radius-panel)`，`padding: var(--space-6)` (28px)
- 标题：中英双语，中文用 `--font-editorial` `clamp(16px, 1.2vw, 20px)` `weight: 500`；英文用 `--font-sans` `12px` `color: var(--ink-muted)`
- 描述：`font-size: 13px`，`line-height: 1.58`，`color: var(--ink-muted)`

**交互逻辑**：
- **Hover**：卡片 `translateY(-3px)` + `box-shadow: var(--shadow-medium)`
- **入场动画**：依次淡入，stagger `120ms`

---

#### 组件 8：`SSTQN-ClassificationMatrix`（SST-QN 分类矩阵图）

**适用章节**：SST-QN 章节 — 分类体系部分（Core / Exploratory / Conditional / Excluded）

**设计目的**：将 SST-QN 的四类 SDG 相互作用分类以可视化矩阵呈现，替代纯文字描述，帮助读者快速理解分类逻辑。

**UI 样式**：
- SVG 绘制 2×2 矩阵或四象限图，`max-width: 720px`，居中
- 四象限分别对应：
  - Core（C）：`fill: var(--brand-navy)` (#173f78)，标注"充分机制与证据"
  - Exploratory（E）：`fill: var(--accent-gold)` (#c39a55)，标注"合理机制，证据有限"
  - Conditional（±）：`fill: var(--accent-pinkThread)` (#d784b3)，标注"方向随条件变化"
  - Excluded（0）：`fill: var(--surface-map)` (#e5d9d2)，标注"无直接作用，允许间接传播"
- 轴标签：X 轴"机制清晰度"（低→高），Y 轴"证据强度"（低→高）
- 标签字体：`--font-mono`，`10px`，`weight: 800`，`fill: var(--paper-bright)`

**交互逻辑**：
- **Hover 象限**：该象限 `opacity: 1`，其余 `opacity: 0.3`，显示 tooltip 含详细说明
- **入场动画**：四象限依次淡入（stagger `150ms`），`duration: 500ms`
- **prefers-reduced-motion**：静态显示

---

#### 组件 9：`SSTQN-DirectedNetwork`（SST-QN 有向网络图）

**适用章节**：SST-QN 章节 — Evidence-calibrated Directed Interaction Score 部分

**设计目的**：将 SDG 之间的有向相互作用以网络图可视化，展示 Synergy（正值）/ Trade-off（负值）/ 无直接作用（0）的关系。

**UI 样式**：
- SVG 力导向布局或预设坐标网络图，`max-width: 830px`
- 节点（17 项 SDG）：
  - 核心 SDG（3/9/12）：`r: 28`，`fill: var(--brand-navy)`
  - 关联 SDG：`r: 20`，`fill: var(--accent-pinkThread)`
  - 远期 SDG：`r: 16`，`fill: var(--accent-gold)`
- 有向边（箭头）：
  - Synergy：`stroke: var(--semantic-success)` (#2f6f68)，实线，`stroke-width: 1.5`
  - Trade-off：`stroke: var(--accent-coral)` (#df705b)，虚线 `5 3`，`stroke-width: 1.5`
  - 线宽映射 Evidence-calibrated Score 绝对值（`|score|` 越大线越粗）
- 边标签：`--font-mono`，`8px`，显示 score 值（如 `+0.7` / `-0.3`）

**交互逻辑**：
- **Hover 节点**：高亮该节点的所有连接边与对端节点，其余 `opacity: 0.15`
- **Hover 边**：显示 tooltip 含 SDGi→SDGj 方向、score 值、分类类别
- **图例**：右上角固定图例，标注 Synergy / Trade-off / Excluded 三种边类型
- **入场动画**：节点先淡入，边随后"绘制"（`stroke-dashoffset`），`duration: 800ms`

---

#### 组件 10：`SSTQN-ScoreProcess`（SST-QN 评分流程图）

**适用章节**：SST-QN 章节 — 评分模型与证据校准部分

**设计目的**：将 Evidence-calibrated Directed Interaction Score 的评分流程以步骤流程图呈现，展示从"机制清晰度 + 跨情境重复性 + 因果证据 + 数据兼容性"到"结构化评分"的校准过程。

**UI 样式**：
- SVG 水平流程图，`max-width: 830px`
- 四个输入节点（左列）→ 校准节点（中间）→ 输出节点（右列）
  - 输入节点：`fill: var(--surface-paperBright)`，`stroke: var(--care)`，标注"机制清晰度""跨情境重复性""因果证据""数据兼容性"
  - 校准节点：`fill: var(--brand-navy)`，标注"Evidence Calibration"
  - 输出节点：`fill: var(--accent-gold)`，标注"Directed Interaction Score [−1, 1]"
- 连接线：`stroke: var(--line)`，带箭头标记

**交互逻辑**：
- **入场动画**：从左到右依次激活节点与连接线，`duration: 600ms`，`stagger: 200ms`
- **Hover 输入节点**：显示 tooltip 解释该维度含义

---

#### 组件 11：`ConsequencesDimensionCard`（C — Consequences 三维度影响卡片）

**适用章节**：SET → SDG 3 → C — Consequences（飞书版新增正文）

**设计目的**：将 Consequences 章节中"社会、经济和环境三个维度"的长期影响评估以三列卡片呈现。

**UI 样式**：
- 网格：`grid-template-columns: repeat(3, 1fr)`，`gap: var(--space-5)` (22px)；移动端单列
- 卡片：`background: var(--surface-paperBright)`，`border-radius: var(--radius-panel)` (28px)，`padding: var(--space-6)` (28px)
- 顶部图标区：`height: 48px`，分别使用社会/经济/环境语义图标
  - 社会维度：`color: var(--care)` (#d784b3)
  - 经济维度：`color: var(--accent-gold)` (#c39a55)
  - 环境维度：`color: var(--semantic-success)` (#2f6f68)
- 维度标题：`--font-editorial` `clamp(16px, 1.2vw, 20px)` `weight: 500`
- 描述文本：`font-size: 13px`，`line-height: 1.58`，`color: var(--ink-muted)`

**交互逻辑**：
- **Hover**：卡片 `translateY(-3px)` + `box-shadow: var(--shadow-medium)`
- **入场动画**：依次淡入，stagger `120ms`

---

### 3. 可视化图表规划

#### 图表 A：SDG 影响范围雷达图

**适用章节**：Overview（配图 Line 15 替代或增强）

**实现方式**：SVG 手绘雷达图（项目已有先例如 `MeasurementWindow`）

**设计**：
- 17 轴对应 17 项 SDG，仅高亮 CirCure 相关的 15 项
- 三层填充区域对应 SET / DEVELOP / GROW：
  - SET 层：`fill: var(--brand-navy)`，`opacity: 0.15`
  - DEVELOP 层：`fill: var(--accent-pinkThread)`，`opacity: 0.12`
  - GROW 层：`fill: var(--accent-gold)`，`opacity: 0.10`
- 轴标签：`--font-mono`，`9px`，`color: var(--ink-muted)`

#### 图表 B：利益相关者反馈→项目改进流程图

**适用章节**：SET → SDG 3 → S — Stakeholder Insights（总结部分，Line 129-136）

**实现方式**：SVG 流程图 + CSS 动效

**设计**：
- 左侧：利益相关者图标群（医生、患者、专家、公众），`fill: var(--care)`
- 中间：三个问题节点，`fill: var(--accent-coral)`，圆角矩形
- 右侧：项目改进措施节点，`fill: var(--brand-navy)`
- 连接箭头：`stroke: var(--line)`，`stroke-width: 1.5`
- **动效**：箭头沿路径"绘制"（`stroke-dashoffset`），`duration: 800ms`

#### 图表 C：SDG 协同网络图

**适用章节**：Overview 中 SST-QN 简述部分（简化版示意图）；SST-QN 章节内（完整版网络图，对应组件 9 `SSTQN-DirectedNetwork`）

**实现方式**：SVG 预设坐标节点图（Overview 用简化版；SST-QN 章节用完整交互版）

**设计**：
- 核心 SDG（3/9/12）：`r: 28`，`fill: var(--brand-navy)`
- 关联 SDG：`r: 20`，`fill: var(--accent-pinkThread)`
- 远期 SDG：`r: 16`，`fill: var(--accent-gold)`
- 协同连线：`stroke: var(--semantic-success)` (#2f6f68)，实线
- 权衡连线：`stroke: var(--accent-coral)` (#df705b)，虚线 `5 3`
- **交互**：Hover 节点高亮其连接，其余 `opacity: 0.2`
- **注意**：Overview 中使用简化版（仅展示核心 SDG 与主要连接），SST-QN 章节使用完整版（17 节点 + 全部有向边 + score 标签），避免"图片用两次"问题

#### 图表 D：SST-QN Interaction Matrix 热力图

**适用章节**：SST-QN 章节 — Evidence-calibrated Directed Interaction Score 部分

**实现方式**：SVG 17×17 矩阵热力图

**设计**：
- 矩阵单元格：`fill` 根据 score 值映射
  - 正值（Synergy）：`fill: var(--semantic-success)`，`opacity` 随 `|score|` 增大
  - 负值（Trade-off）：`fill: var(--accent-coral)`，`opacity` 随 `|score|` 增大
  - 零值（Excluded）：`fill: var(--surface-map)`，`opacity: 0.3`
- 行列标签：SDG 编号（1-17），`--font-mono`，`9px`
- **交互**：Hover 单元格显示 tooltip（SDGi→SDGj、score、分类）
- **入场动画**：按行依次淡入，`stagger: 30ms`

#### 图表 E：SST-QN 间接传播路径图

**适用章节**：SST-QN 章节 — 间接传播与反馈结构部分

**实现方式**：SVG 路径图

**设计**：
- 展示 SDGi → SDGk → SDGj 的间接传播链路
- 直接作用：实线箭头，`stroke: var(--brand-navy)`
- 间接传播：虚线箭头，`stroke: var(--accent-gold)`，`stroke-dasharray: 4 3`
- 反馈回路：曲线箭头，`stroke: var(--care)`
- 时间滞后标注：节点旁沙漏图标 + 延迟时间标签

---

## 三、 数据/信息表格化与高亮排版

### 高亮卡片与 Callout 规划

| 位置 | 类型 | 内容摘要 | 样式规范 |
|------|------|---------|---------|
| Hero 下方 | **Epigraph 引言块** | Maurice Strong 引言 + 中文释义 | `--font-editorial`，`clamp(18px, 1.6vw, 24px)`，`color: var(--brand-navy)`，左侧 3px `var(--care)` 竖线 |
| Overview SDG 核心目标 | **Callout** | "三项核心 SDG 分别回应 TNBC 患者健康需求、生物医学创新转化以及医疗技术负责任发展的挑战" | `.callout`：`border-left: 3px solid var(--care)`，`background: var(--surface-blush)` |
| SET 层开头 | **数据 Callout** | "2024 年全球约 240 万女性诊断为乳腺癌，69.4 万人死亡"（WHO 数据，Line 43） | `background: var(--surface-map)`，`border-left: 3px solid var(--accent-coral)`，数字用 `--font-display` 加粗 |
| SET 利益相关者总览 | **统计计数器** | 43 名 / 6 领域 / 23 专家 / 4 患者 / 16 公众（Line 47） | `CountUpStat` 组件 |
| 三个亟待解决的问题 | **问题卡片组** | Limited effective treatment / Long-term control / Accessibility（Line 131-136） | 3 列网格卡片，`border-top: 3px solid var(--accent-coral)` |
| 专家反馈总结 | **改进追踪 Callout** | "5 位专家从公共健康、女性健康、肿瘤免疫等角度提出建议"（Line 138） | `background: var(--surface-blush)`，`border-left: 3px solid var(--care)` |
| SET 层框架总结 | **Callout** | "由核心问题响应（SET），逐步扩展至多维影响拓展（DEVELOP），最终形成长期系统价值（GROW）" | `.callout`，关键词用 `color: var(--brand-navy)` 加粗 |
| SST-QN 章节核心论点 | **Callout** | "Trade-off 往往并非来自 SDG 目标本身，而来自实现目标的具体路径"（飞书版新增） | `.callout`：`border-left: 3px solid var(--accent-coral)`，`background: var(--surface-map)` |
| SST-QN 章节方法论定位 | **Callout** | "SST-QN 不仅用于描述一组既定的 SDG 关系，而是为未来 iGEM 团队提供可更新的分析框架"（飞书版新增） | `.callout`：`border-left: 3px solid var(--brand-navy)`，`background: var(--surface-blush)` |
| SST-QN → CirCure 过渡 | **过渡 Callout** | "在建立 SDG 相互作用网络之后，我们进一步回到 CirCure 本身，构建 SDG Impact Framework"（飞书版新增） | `.callout`：`border-left: 3px solid var(--accent-gold)`，居中强调过渡性 |
| C — Consequences 三维度 | **维度卡片组** | "从社会、经济和环境三个维度评估 CirCure 可能产生的长期影响"（飞书版新增正文） | `ConsequencesDimensionCard` 组件，3 列卡片 |

### 拟定表格预览

#### 表格 1：三项核心 SDG 与 CirCure 对齐关系

| SDG 编号 | SDG 名称 | CirCure 回应的核心挑战 | 对应 SET 层 |
|---------|---------|---------------------|------------|
| SDG 3 | Good Health and Well-being | TNBC 治疗选择有限、复发风险高、长期预后不佳 | 核心问题响应 |
| SDG 9 | Industry, Innovation and Infrastructure | 生物医学创新转化与基础设施建设 | 核心问题响应 |
| SDG 12 | Responsible Consumption and Production | 医疗技术负责任发展与资源可持续性 | 核心问题响应 |

#### 表格 2：利益相关者参与统计

| 类别 | 人数 | 来源领域 | 主要贡献方向 |
|------|------|---------|-------------|
| 专家 | 23 | 肿瘤学、公共健康、免疫学、临床医学等 | 疾病需求评估、治疗策略优化、安全性建议 |
| 患者 | 4 | TNBC 患者、乳腺癌患者 | 真实治疗体验、获益预期、费用顾虑 |
| 社会公众 | 16 | 社区、学生群体等 | 社会认知、健康科普需求、伦理关注 |
| **合计** | **43** | **6 个领域** | **覆盖 SDG 3 / 9 / 12 三大核心目标** |

#### 表格 3：SCALE 五要素内容追踪（SDG 3）

| 要素 | 全称 | 核心问题 | 内容状态 |
|------|------|---------|---------|
| S | Stakeholder Insights | 利益相关者如何看待 TNBC 未满足需求？ | ✅ 现有：李成丽医生 + TNBC 患者 + 5 位专家 |
| C | Consequences | 反馈揭示了哪些后果与问题？ | ✅ 现有（飞书版新增）：社会/经济/环境三维度长期影响评估 |
| A | Alignment | 项目改进如何与 SDG 3 子目标对齐？ | 预留：标题已存在，正文后续补充 |
| L | Legacy | 项目对 TNBC 治疗领域的长期贡献？ | 预留：标题已存在，正文后续补充 |
| E | Evidence | 支撑上述判断的证据有哪些？ | 预留：标题已存在，正文后续补充 |

#### 表格 4：专家反馈→项目改进追踪

| 专家 | 领域视角 | 核心建议 | 项目改进 | SDG 关联 |
|------|---------|---------|---------|---------|
| 魏宇航 | 公共健康与医疗资源分配 | 新治疗策略应考虑不同患者获得治疗的机会 | 加入医疗可及性和健康公平内容 | SDG 3 → SDG 10 |
| 刘雅文 | 女性健康与疾病防治 | 乳腺癌防治需提高女性主动体检和筛查意识 | 将乳腺健康科普和体检筛查纳入公众教育 | SDG 3（扩展） |
| 贾琳 | 乳腺癌临床特点 | 项目设计应从 TNBC 真实治疗需求出发 | 梳理 TNBC 现有治疗不足，以临床需求为设计依据 | SDG 3 |
| 崔久嵬 | 肿瘤免疫治疗 | 关注免疫治疗策略的有效性、安全性和临床可行性 | 完善免疫治疗设计思路，增加安全性与转化考量 | SDG 3 + SDG 9 |
| 范志民 | 乳腺癌临床治疗路径 | 新治疗方式需真正改善患者结果，考虑与现有方案衔接 | 将患者获益和临床应用场景纳入设计与评估 | SDG 3 + SDG 9 |

#### 表格 5：三个亟待解决的问题

| 问题 | 英文 | 核心描述 |
|------|------|---------|
| 有效治疗选择仍然有限 | Limited effective treatment options | 术后患者需降低复发风险，晚期患者需更有效的疾病控制和新选择 |
| 长期疾病控制仍面临挑战 | Challenges in long-term disease control | 疗效需转化为降低复发/转移风险、延长生存时间等长期获益 |
| 治疗可及性仍需进一步关注 | Treatment accessibility remains a concern | 患者关注副作用可管理性与费用可承担性，过高治疗负担限制受益 |

---

## 四、 图像资产语义化重命名对照清单

| 序号 | 原始图片路径/文件名 | 建议新文件名 | 涉及版块说明 | 建议 Alt 文本 |
|---|---|---|---|---|
| 1 | `feishucdn/...code=ZTQ0ZGVi...` (Overview SST-QN) | `sustainability-overview-sst-qn-preview-01.png` | Overview — SST-QN 简述配图（简化版示意图） | SST-QN SDG 协同与权衡量化网络概念示意图 |
| 2 | `feishucdn/...code=MDZkY2Mz...` (Overview SDG 关联) | `sustainability-overview-sdg-impact-framework-02.png` | Overview — SDG Impact Framework 扇形关联图 | CirCure 项目与 17 项 SDG 的关联总览，高亮 SDG 3/9/12 三项核心目标 |
| 3 | `feishucdn/...code=MThjNzVi...` (Overview SCALE) | `sustainability-overview-scale-framework-03.png` | Overview — SCALE Framework 流程图 | SCALE Framework 利益相关者动态改进机制流程图 |
| 4 | `feishucdn/...code=ZDVkOWQ1...` (SST-QN 分类图) | `sustainability-sst-qn-classification-04.png` | SST-QN 章节 — Core/Exploratory/Conditional/Excluded 分类图 | SST-QN 四类 SDG 相互作用分类示意图 |
| 5 | `feishucdn/...code=Y2UwNDc2...` (SST-QN 评分图) | `sustainability-sst-qn-score-matrix-05.png` | SST-QN 章节 — Evidence-calibrated Directed Interaction Score 矩阵图 | SDG 间有向相互作用评分矩阵热力图 |
| 6 | `feishucdn/...code=NDM2MWIw...` (SET-DEVELOP-GROW) | `sustainability-framework-set-develop-grow-06.png` | SET-DEVELOP-GROW Framework — 三层框架图 | SET-DEVELOP-GROW 三层递进影响框架图 |
| 7 | `feishucdn/...code=ZmI3YTdk...` (SET 利益相关者) | `sustainability-set-stakeholder-overview-07.png` | SET 层 — 43 名利益相关者总览图 | 6 个领域 43 名利益相关者的参与总览 |
| 8 | `feishucdn/...code=MWZlMGRj...` (SDG3 交流照片) | `sustainability-sdg3-stakeholder-engagement-08.png` | SDG 3 → S — Stakeholder Insights — 交流照片 | CirCure 团队与临床医生和患者进行利益相关者交流的场景 |
| 9 | _PDF 附件_ "SDG 模型构建.pdf" | `sustainability-sst-qn-model-construction-09.pdf` | SST-QN 章节末尾 — 模型构建详细文档 | SST-QN SDG 模型构建方法论与完整评分矩阵 |

> **注意**：
> - 所有图片需从飞书 CDN 下载后，通过 iGEM Wiki uploads 工具上传至 iGEM 服务器，再替换 Markdown 中的图片路径。命名前缀统一使用 `sustainability-`（非 `hp-`），对应页面归属 Engagement 板块。
> - 飞书文档中标注"（这个图片要改，用两次不行）"，Overview 中的 SST-QN 配图（序号 1）与 SST-QN 章节内的分类图（序号 4）需使用不同图片，不可复用。
> - PDF 附件同样需上传至 iGEM 服务器，可通过 `PdfViewerModal` 组件提供内嵌预览。

---

## 五、 执行 Roadmap

### Phase 1：图像资产处理

| 步骤 | 任务 | 产出 |
|------|------|------|
| 1.1 | 下载全部飞书 CDN 图片到本地（含 SST-QN 章节新增图片） | 本地图片文件 |
| 1.2 | 下载 SST-QN 章节的 PDF 附件"SDG 模型构建.pdf" | 本地 PDF 文件 |
| 1.3 | 按照重命名清单（第四节）进行语义化重命名 | `sustainability-*.png` / `sustainability-*.pdf` 文件 |
| 1.4 | 通过 iGEM Wiki uploads 工具上传至 iGEM 服务器 | iGEM 服务器 URL |
| 1.5 | 补充 SET 层利益相关者总览图（当前为占位符） | 新图片或替代可视化 |
| 1.6 | 区分 Overview SST-QN 简化示意图与 SST-QN 章节完整网络图（避免"图片用两次"） | 两张不同层级的可视化图 |
| 1.7 | 更新正文中的图片路径与 PDF 附件链接 | 全部使用 iGEM 服务器 URL |

### Phase 2：页面框架搭建

| 步骤 | 任务 | 产出 |
|------|------|------|
| 2.1 | 决定页面实现策略：升级现有 `WikiPage` 框架的数据结构，还是参照 `HumanPracticesPage` 创建自定义 `SustainabilityPage` 组件 | 技术方案决策 |
| 2.2 | 重构 `engagementPages.ts` 中的 `sustainabilityPage` 数据，替换占位内容为 `Sustainability.md` 正文对应的章节结构 | 更新后的数据对象 |
| 2.3 | 配置侧边栏锚点目录（第一节 Heading 架构表） | `WikiLineSidebar` 配置数据 |
| 2.4 | 搭建 Hero 区域 + Epigraph 引言块（Maurice Strong 引言） | Hero 组件 |
| 2.5 | 搭建 Overview 章节框架（注意：SST-QN → SDG Impact Framework → SCALE 顺序） | Overview section |
| 2.6 | 搭建 SST-QN 独立章节框架（飞书版新增 H2） | SST-QN section |
| 2.7 | 搭建 SET-DEVELOP-GROW Framework 章节框架 | Framework section |
| 2.8 | 搭建 SET → SDG 3 章节 + SCALE 五要素头部 | SDG 3 section |

### Phase 3：组件开发与集成

| 步骤 | 任务 | 产出 | 依赖 |
|------|------|------|------|
| 3.1 | 开发 `SDG-Interactive-Card` 翻转卡片组件 | 组件文件 + CSS | Phase 2 |
| 3.2 | 开发 `StakeholderProfileCard` 利益相关者档案卡片 | 组件文件 + CSS | Phase 2 |
| 3.3 | 开发 `ExpertFeedbackGrid` 专家反馈网格 | 组件文件 + CSS | Phase 2 |
| 3.4 | 开发 `ImpactFrameworkDiagram` 三层框架 SVG 图 | 组件文件 | Phase 2 |
| 3.5 | 开发 `CountUpStat` 数字滚动计数器 | 组件文件 + hook | Phase 2 |
| 3.6 | 开发 `SCALE-ProgressChain` 五步进展链 | 组件文件 + CSS | Phase 2 |
| 3.7 | 开发 `ProblemCardGroup` 三个问题卡片组 | 组件文件 + CSS | Phase 2 |
| 3.8 | 开发 `SSTQN-ClassificationMatrix` 分类矩阵图（SVG） | 组件文件 | Phase 2 |
| 3.9 | 开发 `SSTQN-DirectedNetwork` 有向网络图（SVG） | 组件文件 | Phase 2 |
| 3.10 | 开发 `SSTQN-ScoreProcess` 评分流程图（SVG） | 组件文件 | Phase 2 |
| 3.11 | 开发 `ConsequencesDimensionCard` 三维度影响卡片 | 组件文件 + CSS | Phase 2 |
| 3.12 | 开发 SDG 影响范围雷达图（SVG） | 组件文件 | Phase 2 |
| 3.13 | 开发利益相关者反馈→改进流程图（SVG） | 组件文件 | Phase 2 |
| 3.14 | 开发 SST-QN Interaction Matrix 热力图（SVG） | 组件文件 | Phase 2 |
| 3.15 | 开发 SST-QN 间接传播路径图（SVG） | 组件文件 | Phase 2 |
| 3.16 | 集成 `PdfViewerModal` 用于 SST-QN PDF 附件预览 | 组件配置 | Phase 2 |

### Phase 4：现有内容填充与排版

| 步骤 | 任务 | 对应飞书文档章节 | 产出 |
|------|------|----------------|------|
| 4.1 | 填充 Hero + Epigraph + Overview 章节（注意 SST-QN → SDG Impact Framework → SCALE 顺序） | Overview | Overview 完整渲染 |
| 4.2 | 填充 SST-QN 独立章节（分类体系 + 评分模型 + 间接传播 + 实施路径 + PDF 附件） | SST-QN | SST-QN 完整渲染 |
| 4.3 | 填充 SET-DEVELOP-GROW Framework 章节 | SET-DEVELOP-GROW | Framework 完整渲染 |
| 4.4 | 填充 SET → Addressing Core Challenges 总述 + 统计数据 | SET — Core Challenges | SET 总述渲染 |
| 4.5 | 填充 SDG 3 → S — Stakeholder Insights（李成丽 + 患者档案 + Click More + 专家反馈） | S — Stakeholder Insights | SDG 3-S 完整渲染 |
| 4.6 | 填充三个亟待解决的问题卡片组 | S — Stakeholder Insights | 问题卡片渲染 |
| 4.7 | 填充 C — Consequences 三维度影响评估（飞书版新增正文） | C — Consequences | Consequences 卡片渲染 |
| 4.8 | 填充 SCALE A-L-E 三要素（预留占位） | A / L / E | 预留章节渲染 |
| 4.9 | 全页表格化信息填充（第三节表格） | — | 表格组件渲染 |

### Phase 5：动效调试与响应式适配

| 步骤 | 任务 | 产出 |
|------|------|------|
| 5.1 | 调试所有组件的 `prefers-reduced-motion` 降级 | 无障碍合规 |
| 5.2 | 移动端布局适配（`< 760px`）：网格变单列、翻转卡片改为点击展开 | 响应式 CSS |
| 5.3 | 滚动驱动动画与侧边栏联动调试 | 滚动体验优化 |
| 5.4 | 性能优化：SVG 图表懒加载、`IntersectionObserver` unobserve | 性能达标 |

### Phase 6：验收与上线

| 步骤 | 任务 | 产出 |
|------|------|------|
| 6.1 | 内容完整性检查：现有正文内容全部渲染、锚点可跳转 | 检查报告 |
| 6.2 | iGEM 规则合规检查：无外部 CDN、无 web 字体、图片在 iGEM 服务器 | 合规报告 |
| 6.3 | 设计系统一致性检查：颜色/字体/圆角/间距均使用 design token | 一致性报告 |
| 6.4 | 交叉浏览器测试（Chrome / Firefox / Safari） | 兼容性报告 |
| 6.5 | 提交代码，部署至 iGEM Wiki | 上线 |

---

### 关键依赖关系图

```
Phase 1（图像处理）→ 独立可并行

Phase 2（框架搭建）→ Phase 3（组件开发）→ Phase 4（内容填充）→ Phase 5（调试）→ Phase 6（上线）

Critical Path: 2.x → 3.1-3.16 → 4.1-4.9 → 5.x → 6.x
```

---

> **附注**：本计划书基于飞书文档 revision 187 最新正文规划。飞书版相比原 `Sustainability.md` 的主要变更：(1) SST-QN 从 Overview 简述升级为独立 H2 章节，置于 SET-DEVELOP-GROW Framework 之前；(2) Overview 中框架引入顺序调整为 SST-QN → SDG Impact Framework → SCALE；(3) C — Consequences 新增正文内容；(4) SET-DEVELOP-GROW 章节删除英文翻译段落；(5) 新增多张 SST-QN 相关图片与"SDG 模型构建.pdf"附件。文中标注"预留"的章节（A-L-E 三要素）表示标题已存在于正文中，后续文案将随项目推进补充。Phase 1（图像处理）可与 Phase 2 并行执行。
