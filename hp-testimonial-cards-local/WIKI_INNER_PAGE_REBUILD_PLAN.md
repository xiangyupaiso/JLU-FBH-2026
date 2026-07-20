# CirCure Wiki 内页重新迁移计划

> 状态：忠实迁移实施中（Human Practices 锚点页已完成）  
> 范围：Project、Wet Lab、Dry Lab、Engagement 下的 17 个正式子页面  
> 技术栈：React 19 + TypeScript + Vite；保留当前模板的 Navbar、Footer 与 BackToTop

## 0. 实施状态（2026-07-20）

第一轮通用化迁移虽然完成了路由和技术骨架，但没有忠实保留四套原型的组件与动效，不能视为视觉迁移完成。2026-07-20 已按审查意见启动纠偏：迁移基准由“重新挑选和组合”改为“以本地原型为唯一视觉与交互依据，逐模块 React 化”。

当前真实状态：

- Human Practices 已改为专用 `HumanPracticesPage`，完整迁移原型的 10 张 Stakeholder Impact 卡、5 阶段进度、8 节点圆形 Evidence Timeline、人物头像、活动证据卡、证据弹窗、Integration Ledger、5 行 Decision Proof、Method / Ethics / Limits 与 5 章 Dossier；
- 原型自带的独立头部导航、页脚和返回顶部按钮没有迁入，继续只使用模板的全局 Navbar、Footer 与 BackToTop；
- 17 个子页面共用左侧 `WikiLineSidebar`：保留点击跳转和活动标题前移高亮，增加连续线、阅读进度线、节点与活动节点；Home 的右侧 thread guide 没有改动；
- 其余通用子页面的大型左右分栏 Hero 已改为 HP Local 式简洁开场；
- 全页重复横线背景保持移除，页面主背景为纯净纸色；
- Project、Wet Lab、Dry Lab 的原型专属组件仍需按 `project.html`、`wet-lab.html/css/js`、`dry-lab.html/css/js` 继续逐页忠实迁移，不能把当前通用组件当作最终完成状态。

本轮已验证：ESLint 通过、生产构建通过；HP 桌面端 10 / 8 / 5 项数据数量正确、圆环和弹窗可交互、移动端 8 张证据卡静态展开、无横向溢出、页面背景无重复横线。

## 1. 本轮结论

新的内页不能继续由一个 `ResearchPage + PageVisual + data` 模型统一生成。它把内容压缩成同一种 Hero、同一种卡片和同一种目录，无法表达四套原型已有的图片、证据关系和滚动交互。

重新迁移采用两层结构：

1. **稳定阅读骨架**：全站 Navbar、可变化的页面开场、左侧既有目录、正文主列、下一页入口、Footer。
2. **可组合正文组件**：表格、证据矩阵、圆形时间线、图片墙、五道证据门、模型图、协议折叠等都作为独立模块插入正文；同一栏目优先使用同一套组件表面，同一模块跨栏目复用时才根据语境改变布局密度和视觉语气。

统一的不只是阅读方式和品牌线索。四个栏目各自拥有一套稳定的栏目设计语言，栏目内页面沿用相同的结构、底色、丝带语法和组件表面；具体页面只根据内容更换重点组件、章节组合和小型动效。目标是避免 17 页完全复制，也避免为了差异而把 17 页做成 17 个独立网站。

### 1.1 差异层级

| 层级 | 统一范围 | 变化范围 |
| --- | --- | --- |
| 全站层 | Navbar、Footer、左侧目录 + 正文、Home 粉色丝带、字体与基础间距 | 不变化 |
| 栏目层 | Project / Wet Lab / Dry Lab / Engagement 各自的主色、页面开场语法、组件表面、目录样式、主要动效语法 | 四个栏目之间有清晰差异 |
| 页面层 | 同栏目骨架与视觉基调 | 章节内容、重点组件、图表、图片和少量小动效 |
| 内容层 | 相同语义组件的交互与可访问性 | 数据字段、宽度、强调色和信息密度 |

例如 Wet Lab 五页共享“实验记录 + 五道证据门 + 样本丝带”的总思路。Experiments 展示五门全景，Notebook 强调记录节点，Measurement 强调读数窗口，Alternative Platform 强调实验上下文，Safety 强调停止条件；它们不需要五套完全不同的 Hero 和动效系统。

## 2. 当前版本的三个直接问题

### 2.1 页面千篇一律

迁移前的 17 个路由全部调用 `src/components/wiki/ResearchPage.tsx`。数据结构只允许 `editorial / steps / ledger / matrix / timeline` 五种正文排列，页面差异主要来自标题、配色和 Hero 中的 CSS 图形。

这导致：

- 不同学科被迫使用同一种叙事节奏；
- 原型中的复杂组件没有迁移入口；
- `Interactive figure` 多数只是随页面滚动改变一点 CSS 的装饰图，并不是真正可探索的图；
- 页面内容即使不同，看起来仍像同一张模板换了文字。

### 2.2 子页面左侧目录必须保留

当前 `.research-record` 使用 `230px + 860px` 两列，目录位于正文左侧。根据 iGEM 子页面规范，本轮不改变这套目录的位置和基础风格。

继续保留：

- 左侧 `position: sticky` 的章节目录；
- `IntersectionObserver` 判断活动章节；
- 活动标题变为页面强调色；
- 悬停或点击时标题向正文方向轻微前移的高亮反馈；
- hash 跳转、键盘焦点和移动端目录回退。

Home 页独立的丝带滚动控件继续保留在右侧。其他子页面复用其中的滚动轨道与 ribbon knot 语言，把简化版本放入现有左侧目录；目录位置、标题列表和前移高亮保持不变。

### 2.3 全页横线背景应移除

截图中的横线来自 `src/styles/circure-pages.css`：

```css
.research-page {
  background:
    linear-gradient(rgba(27, 23, 25, 0.025) 1px, transparent 1px),
    var(--paper);
  background-size: 100% 52px;
}
```

它在整个页面每隔 52px 绘制一条横线。新方案中：

- 页面底色改为干净的纸色、柔和色块或局部深色章节；
- 网格只保留在模型坐标、测量图、工程蓝图等确实需要坐标语义的组件内部；
- 正文区不再使用重复横线、重复点阵或大面积假纸张纹理。

## 3. 全站内页阅读骨架

### 3.1 页面层级

```text
Template Navbar
└─ WikiPage
   ├─ PageOpening（每页可不同，不强制左右双栏）
   ├─ JudgeSummary（可选）
   ├─ ReadingFrame
   │  ├─ ReadingOutline（桌面左侧 sticky，保留既有风格）
   │  └─ ArticleBody
   │     ├─ TextSection
   │     ├─ ComponentIsland
   │     ├─ Figure / Table / Gallery / Fold
   │     └─ EvidenceBoundary
   ├─ CrossPageEvidenceLinks（可选）
   └─ NextPage
Template Footer + BackToTop
```

### 3.2 正文与目录尺寸

- 页面最大阅读宽度约 `1240–1320px`。
- 正文主列约 `760–860px`，长段落的实际字行宽控制在 `680–740px`。
- 左侧目录约 `200–230px`，与正文保持 `64–112px` 间距。
- 普通正文组件跟随文字列宽；数据表、横向图和图片墙可用 `ComponentIsland` 向左或向右突破正文列，但不能遮挡目录。
- Hero 不再统一强制接近一屏高度。页面开场高度由内容决定，避免当前截图中过长的空白和过大的标题压迫。

### 3.3 组件插入规则

每个正文组件是独立的 `div/section/figure`，具有：

- 稳定 `id`，可被目录和跨页证据链接定位；
- 标题、简短说明、状态、图注或数据来源槽位；
- 默认静态可读，不依赖动画才能理解；
- `compact / wide / full-bleed` 三种宽度；
- `paper / dark / technical / people / warning` 等视觉变体；
- 页面可以微调颜色、间距和强调方式，但不复制业务逻辑。

## 4. 主页丝带如何贯穿所有页面

丝带不能退化成每页角落里相同的粉色曲线。它应该既是品牌线索，也是阅读和证据关系的可视化。

### 4.1 始终不变的部分

- 核心丝带保持 Home 页的 `care pink`，不跟随页面主题随意变色；
- 使用 Home 页已有的 ribbon knot / emblem 语言；
- 丝带总是代表“从问题沿证据走向下一次决定”；
- 首选 SVG path、CSS custom property 和现有浏览器能力，不为丝带引入动画库。

### 4.2 内页的四个出现位置

1. **开场**：丝带从页名或主图边缘进入，不同页面采用不同路径。
2. **子页面左侧目录**：从 Home thread guide 提取轨道、进度与 knot，在其他页面放到左侧目录中；Home 本身仍在右侧。
3. **正文组件**：关键组件里只在确实有“关系/回路/传递”含义时让丝带穿过，不做无意义装饰。
4. **下一页入口**：丝带在本页形成一个结，随后向下一路由延伸，建立跨页连续性。

### 4.3 四个栏目中的丝带语义

| 栏目 | 丝带形态 | 表达的关系 |
| --- | --- | --- |
| Project | 逐渐闭合的环、回到起点的结 | 问题如何收敛为项目设计 |
| Wet Lab | 穿过五道门的样本线 | 每一步证据是下一步的前提 |
| Dry Lab | 数据曲线、参数连线、Wet–Dry 返回线 | 模型输入如何变成决策并返回实验 |
| Engagement | 人与人之间的连接线、反馈回路 | 外部声音如何进入项目并被回访 |

### 4.4 动效行为

- 页面滚动驱动丝带 `stroke-dashoffset`，而不是不断播放循环动画。
- Home 右侧 knot 保持现状。子页面左侧 knot 跟随正文阅读位置移动，章节标题继续负责点击、hash 和键盘定位。
- 路由切换只做短暂的丝带延续，不做阻塞阅读的过场。
- `prefers-reduced-motion` 下显示完整静态路径和明确活动章节，不移动 knot。

## 5. 左侧目录保留方案

### 5.1 桌面端

- 位于正文左侧，`position: sticky`，顶部避开模板 Navbar。
- 保留当前编号、短标题、细分隔线和强调色；在标题列表左侧加入简化的粉色丝带轨道与随阅读移动的 knot。
- 子页面丝带比 Home 更小、更克制，只承担阅读进度，不照搬 Home 的大尺寸标签和拖动控件。
- 保留标题向正文方向轻微前移的 hover/click 反馈，以及活动章节高亮。
- 相关页面链接继续放在目录底部的独立区域，不混入章节列表。
- 只允许在后续迁移真实长文时更新目录文字和锚点，不改变目录的基础视觉风格。

### 5.2 逻辑来源

继续使用当前 React 页面已经具备的：

- `useWikiPageMotion` 的章节顶部判定与 reveal observer；
- 页面阅读进度计算；
- 点击锚点和 hash 深链；
- 卸载时清理 observer、scroll listener 和 animation frame。

HP 原型的 dossier observer 只用于补齐长页面的稳定判断和记录，不改变现有左侧目录外观。

### 5.3 移动端

- 左侧目录在窄屏下变为 Navbar 下方的紧凑章节条或原生 `details`；
- 展开后是单列章节列表，当前章节置顶；
- 移动端可隐藏丝带轨道，保留章节目录本身，避免与横向目录和触摸滚动冲突；
- 每个点击目标至少 `44 × 44px`，展开后不遮挡正文焦点。

## 6. 可复用正文组件库

这些组件是“可以跨页复用的能力”，不是强迫所有页面长得一样的模板。

| 组件 | 来源/原型 | 适合页面 | 允许的页面变体 |
| --- | --- | --- | --- |
| `EvidenceTable` | HP decision proof、Wet Lab evidence table | Engineering、Results、Safety、HP、Contribution | 横向表、逐行展开、深色审计表 |
| `DecisionLedger` | Project evidence ledger、HP loop board | Description、Engineering、Entrepreneurship、HP | claim-first、before/after、risk-first |
| `GateSequence` | Wet Lab Five gates | Experiments、Measurement、Results、Safety | 五门全景、当前门放大、no-go 版本 |
| `CircularTimeline` | HP 圆形时间线 | Human Practices；必要时 Notebook 使用线性变体 | 圆形证据、线性记录；不能所有页都使用圆形 |
| `HorizontalMediaRail` | HP impact wall | Human Practices、Education | 纵向滚动驱动横移、手动横滑静态回退 |
| `ImageEvidence` | HP dossier 图片、Wet Lab apparatus | HP、Education、Hardware、Experiments | 单图、双图比较、图组、带证据状态 |
| `BeforeAfterDecision` | HP before → signal → decision → proof | HP、Engineering、Entrepreneurship、Safety | 四列完整表、移动端逐条卡片 |
| `DBTLCycle` | Project ring、Wet Lab cycles | Engineering、Experiments、Model | 环形、版本叠层、Wet–Dry 双向 |
| `ComparisonMatrix` | Wet Lab functional matrix | Measurement、Results、Alternative Platform、Inclusivity | 控制矩阵、能力比较、障碍矩阵 |
| `ProtocolFold` | Wet Lab protocol library、Dry Lab technical folds | Experiments、Notebook、Model、Software、Contribution | 原生 details，正文结论默认展开 |
| `ModelFigure` | Dry Lab manuscript | Model、Measurement、Software | 公式/参数/曲线/验证；禁止伪造可计算数据 |
| `RiskBoundary` | Wet Lab no-go、HP ethics | Safety、Results、HP、Sustainability | warning、boundary、unresolved |
| `QuoteRecord` | HP timeline/dialog | HP、Education、Inclusivity、Entrepreneurship | 必须包含人物角色、同意状态和证据链接槽位 |
| `ResourceShelf` | Contribution prototype | Contribution、Software、Education | 下载物、版本、许可、复用步骤 |

### 6.1 表格组件的复用原则

用户提到的表格会做成独立正文模块，但不会在每页复制同一张视觉表：

- 数据字段和语义固定，例如 `Before / Signal / Decision / Proof`；
- Header、行状态、展开细节和移动端重排由公共组件完成；
- Human Practices 使用“谁说了什么、改变了什么”；
- Engineering 使用“上一版本、测试信号、下一构建”；
- Results 使用“主张、数据、分析、边界”；
- Safety 使用“风险、触发条件、缓解、no-go”；
- Contribution 使用“产物、版本、许可、验证过的复用方式”。

这样可以复用逻辑，同时让每张表看起来属于它所在的页面。

## 7. 动效体系

### 7.1 栏目动效母题与页面配额

动效首先按栏目设计，不要求每个页面发明一套独占动效。

| 栏目 | 共用动效母题 | 页面内的变化 |
| --- | --- | --- |
| Project | 环逐步闭合、证据让设计返回 | 当前页面突出问题收敛、版本替换、结果门或资源交付 |
| Wet Lab | 样本丝带穿过证据门、记录编号推进 | 当前页面突出 gate、时间记录、测量读数、实验上下文或 no-go |
| Dry Lab | 数据进入模型、决定返回实验 | 当前页面突出模型管线、软件运行或样本经过设备 |
| Engagement | 外部输入进入决定并形成回访 | 当前页面突出假设、访谈、学习、障碍或生命周期权衡 |

每页原则上包括：

- 直接继承 1 套栏目动效母题，不强制增加独占的大型动效；
- 1 个丝带/目录进度动效；
- 根据正文需要使用 1–3 个小型交互，如表格展开、图例筛选、图片详情；
- 只有锚点页或内容确实需要时才设置主要滚动场景；
- 普通段落只做克制的分块 reveal，不给每个元素重复飞入。

### 7.2 动效类型

| 类型 | 用途 | 实现要求 |
| --- | --- | --- |
| Scroll narrative | 横向图片墙、圆环时间线、五道门推进 | 每页最多一个主要滚动场景；移动端有静态/手动回退 |
| Explore | 图例筛选、数据对比、证据详情 | 使用可中断 transition；键盘可操作 |
| Reveal | 章节标题、图片、结论 | 按语义块约 100ms 错峰，不动画整块大容器 |
| Progress | 丝带目录、证据门状态 | 仅动画 transform、opacity、stroke-dashoffset |
| Fold/Dialog | 方法附录、访谈证据 | 优先原生 `details` 与 `dialog`；关闭后焦点返回触发按钮 |

### 7.3 性能与可访问性

- scroll listener 使用 passive + requestAnimationFrame 节流；
- observer、event listener、animation frame 在组件卸载时全部清理；
- 不使用 `transition: all`；
- 不永久给大列表添加 `will-change`；
- 图片进入视口前可懒加载，但首屏主图需稳定占位，避免布局跳动；
- reduced-motion 下不删除信息，只去掉位移、旋转和滚动锁定。

## 8. 页面主题体系

Home 页粉色丝带保持统一。页面主题色控制背景、标题、局部组件和状态，不控制丝带本体。

| 页面族 | 基础底色 | 结构色 | 重点色 | 总体气质 |
| --- | --- | --- | --- | --- |
| Project | 暖象牙纸色 | 深海军蓝 | 粉色 / 珊瑚 | 项目命题、收敛、工程回路 |
| Wet Lab | 浅纸色与深瓶绿交替 | 蓝绿 / 墨绿 | 珊瑚 | 实验记录、证据门、样本追踪 |
| Dry Lab | 冷象牙与深蓝稿纸 | 海军蓝 | 金色 / 粉色 | 学术手稿、模型、仪器 |
| Engagement | 暖纸、酒红、浅粉和鼠尾草 | 酒红 / 深绿 | 粉色 / 金色 | 人、反馈、责任与实施 |

栏目内页面保持同一套基础底色和结构色。子页面只允许改变局部强调色、深浅比例或某个组件场景；不要求五页拥有五套主色，也不要求为了辨认页面而更换整体皮肤。

## 9. Project 页面逐页计划

**栏目共用设计**：暖象牙底、深海军蓝结构、粉色闭环丝带、相同的左侧目录和证据状态。四页像同一项目档案的四章；页面差异主要来自 Living Ring、版本环、结果 ledger 和资源 shelf 的正文重点。

### 9.1 Description `/description`

- **正文填充**：项目短摘要、TNBC 异质性、旧问题到新问题的转变、为何选择多表位 circRNA、拟议生物机制、当前证据边界、深入页面入口。
- **原型来源**：`project.html` 的 Living Ring Hero、heterogeneity field、question shift、mechanism、evidence ledger 摘要。
- **标志性组件**：Living Ring。滚动时散开的候选点逐步进入环并在 junction 处闭合；点击节点显示设计理由。
- **可复用组件**：Project thesis、机制步骤图、精简 EvidenceTable、EvidenceBoundary。
- **丝带用法**：从 Hero 的未闭合环进入机制正文并形成闭环，不接管左侧目录。
- **色基调**：干净象牙色 + 深海军蓝；粉色丝带；异质性标记使用珊瑚、蓝灰、金色。
- **限制**：本页只解释项目及选择，不复制完整工程循环和结果数据。

### 9.2 Engineering `/engineering`

- **正文填充**：设计准则、真实 DBTL 轮次、构建版本、停止/继续规则、失败如何改变下一版本、HP/Model/Wet Lab 对设计的输入。
- **原型来源**：`project.html` 的 Five decisions close the loop；`wet-lab.html` 的 engineering cycles。
- **标志性组件**：版本化工程环。滚动不是反复旋转四个标签，而是让 V1、证据、决策、V2 逐层替换。
- **可复用组件**：BeforeAfterDecision、DBTLCycle、CrossPageTrace、EvidenceTable。
- **丝带用法**：丝带先形成未闭合工程环，每完成一个有证据的决策才闭合一段。
- **色基调**：浅蓝灰 + 海军蓝 + 珊瑚，局部有工程蓝图感；网格只允许出现在构建图内部。

### 9.3 Results `/results`

- **正文填充**：结果总览、按证据门排序的图、控制与统计、失败与阴性结果、讨论、边界、未来工作。
- **原型来源**：`project.html` Evidence Ledger；`wet-lab.html` evidence standard 与结果发布检查表。
- **标志性组件**：Claim-to-evidence ledger。选择某一主张时，同屏突出对应图、控制、结论和限制。
- **可复用组件**：EvidenceTable、ResultFigure、ComparisonMatrix、RiskBoundary。
- **丝带用法**：丝带只连接真正有前后依赖的结果，不把所有图强行串成成功故事；中断处显示未通过的 gate。
- **色基调**：暖白 + 深酒红/深蓝 + 低饱和绿色状态色；数据本身优先于装饰。

### 9.4 Contribution `/contribution`

- **正文填充**：可复用产物、适用对象、版本与许可证、快速开始、验证记录、限制、下载与仓库入口。
- **原型来源**：HP Field Kit、Wet Lab protocol library、Dry Lab reproducibility package。
- **标志性组件**：Resource shelf。不是装饰书架，而是可筛选的产物包，展开后显示“包含什么、谁用过、如何复用”。
- **可复用组件**：ResourceShelf、ProtocolFold、EvidenceTable、ReuseSteps。
- **丝带用法**：丝带把四类资源包扎成结，再延伸到使用步骤；表达“交付给下一支队伍”。
- **色基调**：暖纸色 + 墨绿 + 粉色，少量金色表示已发布版本。

## 10. Wet Lab 页面逐页计划

**栏目共用设计**：五页统一使用 `Lab Record` 语法——深瓶绿/象牙双色、珊瑚 gate 状态、等宽记录编号、左侧既有目录和相同的表格/协议表面。各页不是重新设计 Hero，而是突出同一证据链中的不同观察窗口。

### 10.1 Experiments `/experiments`

- **正文填充**：五道证据门总览、各门的目的/材料/方法/控制/停止条件、关键实验路线、协议库。
- **原型来源**：`wet-lab.html` 的 Five gates、Gate 01–05 方法部分、protocol library。
- **标志性组件**：Five Gates evidence map，忠实迁移深绿色证据地图。滚动/点击依次推进 Construct → Circularize → Express → Present → Recognize。
- **可复用组件**：GateSequence、ProtocolFold、ConstructMap、EvidenceBoundary。
- **丝带用法**：粉色丝带作为样本线穿过五道门；上一门未通过时，后续路径保持虚线。
- **色基调**：深瓶绿主场景 + 象牙正文 + 珊瑚 gate 状态，延续截图中的实验气质。

### 10.2 Notebook `/notebook`

- **正文填充**：日期、实验目的、人员、样本 ID、偏差、原始记录、观察、决定、与 Results/Engineering 的交叉链接。
- **原型来源**：Wet Lab long-form record 的 record 编号与 sample/evidence link；HP 时间线的记录展开方式可作为交互参考。
- **标志性组件**：Chronology with evidence spine。时间线节点按日期排列，展开时显示同一天的样本谱系和决策，而不是普通活动卡片。
- **可复用组件**：RecordTimeline、SampleLineage、ProtocolFold、CrossPageTrace。
- **丝带用法**：丝带是实验记录的装订线，节点代表真实日期；偏差记录让线发生可见分叉。
- **色基调**：沿用 Wet Lab 的深瓶绿、象牙与珊瑚；Notebook 只把正文纸色比例提高，并增加局部装订细节，不更换整套皮肤。

### 10.3 Measurement `/measurement`

- **正文填充**：被测量量、范围与单位、仪器/方法、控制、校准、归一化、重复、统计、判定阈值、图表发布规范。
- **原型来源**：Wet Lab proof stack、expression assay window、functional comparison matrix、publication gate。
- **标志性组件**：Measurement window。用户选择 claim 后，组件切换到相应 readout、控制和解释边界；只有局部坐标区使用网格。
- **可复用组件**：ComparisonMatrix、ModelFigure、EvidenceTable、FigureChecklist。
- **丝带用法**：丝带成为贯穿“样本 → 仪器 → 数值 → 决策”的测量链。
- **色基调**：沿用 Wet Lab 的深绿/象牙体系；测量组件局部加入冷灰蓝坐标区和珊瑚测量点。

### 10.4 Alternative Platform `/alternative-platform`

- **正文填充**：平台为何必要、宿主/体系来源与状态、与构建体的兼容约束、基准平台比较、适用范围、无法迁移的限制。
- **原型来源**：当前 payload/host/readout 概念可保留语义，但必须重做为真实内容组件；不能继续使用全页横线背景和“假交互图”。
- **标志性组件**：Host Context Orbit。选择 host/context 后，外环显示改变的表达、加工、安全与 readout，而不是仅随页面滚动缩放圆环。
- **可复用组件**：ComparisonMatrix、PlatformProfile、RiskBoundary、EvidenceTable。
- **丝带用法**：同一粉色 payload 丝带进入不同宿主环境后改变路径曲率，强调环境改变解释。
- **色基调**：沿用 Wet Lab 的象牙正文和深色组件；Host Context Orbit 可偏石油蓝，但目录、编号和 gate 状态仍与另外四页一致。
- **限制**：若团队没有真实 alternative platform 产物，页面明确写适用性边界，不制造完整成果。

### 10.5 Safety and Security `/safety-and-security`

- **正文填充**：风险对象、材料与宿主风险、实验操作风险、信息风险、控制层级、责任人、触发阈值、no-go 条件、事件与复盘。
- **原型来源**：Wet Lab 的 boundary/viability/no-go；HP 的 ethics、consent 与 implementation boundaries。
- **标志性组件**：Safety boundary map。风险靠近边界时显示触发原因和控制，不做警报灯式装饰动画。
- **可复用组件**：RiskBoundary、EvidenceTable、ControlHierarchy、BeforeAfterDecision。
- **丝带用法**：丝带代表项目路径；遇到 no-go 节点明确停止或折返，不能视觉上默认所有路径都能继续。
- **色基调**：沿用 Wet Lab 的象牙、深瓶绿和珊瑚；Safety 仅提高文字与警戒边界的对比，不切换成另一套整页危险红主题。

## 11. Dry Lab 页面逐页计划

**栏目共用设计**：冷象牙 manuscript、海军蓝结构、金色编号和粉色 Wet–Dry 返回线。Model、Software、Hardware 共享论文式图号、表号、技术折叠和左侧目录；页面差异来自内容载体，不来自整体换肤。

### 11.1 Model `/model`

- **正文填充**：Abstract、Judge brief、模型架构、三个模型章节、数据与假设、公式和参数、验证、设计决定、Wet–Dry iteration、复现、限制与参考文献。
- **原型来源**：`dry-lab.html` 的完整 manuscript 结构。
- **标志性组件**：Model architecture pipeline。滚动时只展开当前模型的输入、方法、输出和实验返回；公式与关键结果默认可见。
- **可复用组件**：ModelFigure、ParameterTable、ValidationPanel、TechnicalFold、WetDryLoop。
- **丝带用法**：丝带从数据输入穿过三个模型，在每个 decision point 打结，再返回 Wet Lab。
- **色基调**：冷象牙稿纸 + 海军蓝 + 金色编号 + 粉色返回线；网格只存在于图表。

### 11.2 Software `/software`

- **正文填充**：若存在独立工具，则写用户问题、输入/输出、界面或命令流程、架构、安装、测试、示例、许可、维护和限制；若只是模型代码，则不要重复 Model 页面，改为复现入口。
- **原型来源**：Dry Lab reproducibility package；当前 console visual 只可作为局部样式参考。
- **标志性组件**：Inspectable run。使用真实示例数据逐步展示输入、检查、输出和错误状态；不能只是自动闪烁的终端光标。
- **可复用组件**：CodeWalkthrough、ResourceShelf、TestMatrix、TechnicalFold。
- **丝带用法**：丝带连接 input → transform → output，并在错误分支形成可返回的 loop。
- **色基调**：深海军蓝局部工作台 + 纸色说明区 + 粉色焦点 + 蓝灰状态。

### 11.3 Hardware `/hardware`

- **正文填充**：真实设备需求、结构、材料与 BOM、组装、校准、实验用法、测量误差、安全、成本、文件和复现。
- **原型来源**：`assets/wetlab-circure-apparatus.png` 及真实设备资料；当前 schematic 只能作为布局草图。
- **标志性组件**：Exploded apparatus。滚动或点击拆解设备层级，并把零件连接到 BOM、校准和用途。
- **可复用组件**：ImageEvidence、BOMTable、CalibrationFigure、ProtocolFold、RiskBoundary。
- **丝带用法**：丝带成为样本在装置中的实际路径，不能只是围绕设备绕圈。
- **色基调**：浅工业蓝灰 + 深海军蓝 + 铜金色 + 粉色样本路径。
- **限制**：没有真实硬件时只保留诚实的适用性说明，不把概念插图包装成成品。

## 12. Engagement 页面逐页计划

**栏目共用设计**：暖纸底、酒红/深绿结构、粉色反馈丝带、图片与证据并置、相同的记录展开和 consent/boundary 状态。Human Practices 是完整母版，其他四页复用其中适合自己的逻辑并减少复杂度。

### 12.1 Entrepreneurship `/entrepreneurship`

- **正文填充**：真实用户工作流、需求验证、替代方案、风险假设、价值主张、MVP、成本/监管/IP、商业路线、下一里程碑和未解决问题。
- **原型来源**：HP dossier 中 workflow/adoption/implementation 内容。
- **标志性组件**：Assumption funnel。假设经过证据后被保留、修改或淘汰，不能用向上的增长动画暗示已商业成功。
- **可复用组件**：BeforeAfterDecision、StakeholderMap、EvidenceTable、Roadmap。
- **丝带用法**：丝带穿过用户工作流；无法采用的环节形成阻塞结点并回到假设。
- **色基调**：暖纸 + 深梅红 + 金色 + 粉色，像策略档案而不是 SaaS 营销页。

### 12.2 Human Practices `/human-practices`

- **正文填充**：Judge view、主要项目改变、stakeholder impact、详细证据记录、before/signal/decision/proof、方法、伦理、冲突、回访、缺失声音和限制。
- **原型来源**：`index.html` 的全部核心模块与现有图片资产。
- **标志性组件**：保留两个互补场景：横向 impact wall 用于快速浏览；圆形 evidence timeline 用于深入记录。两者之间用简洁过渡隔开，避免同屏争夺注意力。
- **可复用组件**：HorizontalMediaRail、CircularTimeline、EvidenceDialog、BeforeAfterDecision、DossierSection、QuoteRecord。
- **丝带用法**：丝带从外部声音进入决策表，形成反馈环并返回 stakeholder；这是 Engagement 栏目中最完整的丝带叙事。
- **色基调**：原型暖纸 + 酒红 + 深青绿，融合 Home 粉色丝带；保留人物与活动图片，不用抽象占位图替代。
- **目录要求**：保留现有左侧目录的标题、前移高亮与点击跳转，并加入子页面专用的小型丝带进度轨道；原 dossier 的章节观察逻辑作为内部实现参考。

### 12.3 Education `/education`

- **正文填充**：受众需求、共同设计、学习目标、活动形式、材料、双向问题、评价、材料如何被反馈修改、团队学到什么、可下载资源。
- **原型来源**：HP community workshop 图片与 public dialogue 记录；HP 页只保留“它如何改变项目”的摘要。
- **标志性组件**：Learning dialogue carousel。每个活动展示“原解释 → 参与者问题 → 修改后的材料”，而不是照片轮播。
- **可复用组件**：HorizontalMediaRail 的轻量变体、BeforeAfterDecision、ImageEvidence、ResourceShelf。
- **丝带用法**：丝带在 educator 与 audience 之间来回，而不是单向从团队指向公众。
- **色基调**：明亮暖纸 + 海军蓝 + 金黄 + 粉色，活泼但不幼儿化。

### 12.4 Inclusivity `/inclusivity`

- **正文填充**：目标群体、参与障碍、语言/费用/场地/数字访问、同意层级、隐私、代表性边界、采取的措施、效果和仍缺失的人群。
- **原型来源**：HP dossier 的 consent、privacy、missing voices、access concerns。
- **标志性组件**：Barrier-to-access map。选择一种障碍时显示谁受影响、采取何种措施、结果和剩余缺口。
- **可复用组件**：ComparisonMatrix、RiskBoundary、QuoteRecord、AccessibleFormatPreview。
- **丝带用法**：丝带网络保留断点；没有被覆盖的人群显示为未连接节点，避免虚假的“人人可达”。
- **色基调**：浅粉灰/淡紫 + 深绿或深蓝 + 粉色丝带，强调柔和可读性和高对比。

### 12.5 Sustainability `/sustainability`

- **正文填充**：具体 SDG target、生命周期边界、制造/部署/可及性影响、正负权衡、利益相关者、指标、改进和长期责任。
- **原型来源**：HP dossier 的 access、manufacturing、deployment 与 long-term impact。
- **标志性组件**：Trade-off orbit。不是装饰雷达图；选择某一设计决定后显示它对环境、社会、经济和访问的正负影响及证据状态。
- **可复用组件**：LifecyclePath、ComparisonMatrix、RiskBoundary、EvidenceTable。
- **丝带用法**：丝带形成生命周期环，但在未评估阶段保留缺口，不画成自动闭合的完美循环。
- **色基调**：暖灰纸色 + 鼠尾草绿 + 深海军蓝 + 金色，粉色用于项目路径而非 SDG 图标墙。

## 13. 四套原型的拆分归属

| 原型模块 | 主归属页面 | 其他页面的使用方式 |
| --- | --- | --- |
| Project Living Ring / heterogeneity / mechanism | Description | Engineering 只引用相关决策锚点 |
| Project five decisions | Engineering | Description 放简短入口 |
| Project evidence ledger | Results | Description 只显示状态摘要 |
| Wet Lab five gates | Experiments | Measurement、Results、Safety 显示对应 gate 深链 |
| Wet Lab proof stack / assay / matrix | Measurement | Results 放真实输出图，Experiments 放方法链接 |
| Wet Lab DBTL cycles | Engineering | Experiments 记录具体协议版本 |
| Wet Lab protocol library | Experiments | Contribution 提供可复用包入口 |
| Wet Lab evidence standard | Results | Measurement 提供图表规范 |
| Dry Lab manuscript / models | Model | Software 仅承接独立工具和复现接口 |
| Dry Lab reproducibility | Model 或 Software | Contribution 提供发布包入口 |
| HP impact wall / circular timeline / decision proof | Human Practices | 其他 Engagement 页面只取自己的活动与证据 |
| HP public workshop | Education | HP 保留项目影响摘要和回链 |
| HP consent / missing voices / access | Inclusivity | HP 保留治理原则和边界摘要 |
| HP workflow / adoption | Entrepreneurship | HP 保留触发项目改变的记录 |
| HP long-term impact | Sustainability | HP 保留反馈来源和回链 |

## 14. React/Vite 迁移架构

不再建立一个能描述所有页面的巨型数据 schema。公共层只抽取稳定能力。

```text
src/
  components/wiki/
    WikiPage.tsx
    PageOpening.tsx
    ReadingFrame.tsx
    ReadingOutline.tsx
    RibbonMotif.tsx
    ComponentIsland.tsx
    Figure.tsx
    EvidenceTable.tsx
    DecisionLedger.tsx
    ComparisonMatrix.tsx
    ProtocolFold.tsx
    EvidenceBoundary.tsx
    NextPage.tsx
  components/wiki/signatures/
    LivingRing.tsx
    FiveGateMap.tsx
    CircularEvidenceTimeline.tsx
    HorizontalImpactWall.tsx
    ModelArchitecture.tsx
    ApparatusExplodedView.tsx
  hooks/
    useScrollProgress.ts
    useScrollSpy.ts
    useRibbonProgress.ts
    useHorizontalScrollScene.ts
  styles/wiki/
    frame.css
    ribbon.css
    components.css
    project.css
    wet-lab.css
    dry-lab.css
    engagement.css
  contents/
    description.tsx
    ...17 个现有路由入口
```

原则：

- 17 个 `contents/*.tsx` 重新拥有自己的 JSX 组合顺序；
- 稳定交互由公共组件负责，页面只传真实内容和主题变体；
- 页面专属复杂动效放入 `signatures/`，不塞进万能 `PageVisual`；
- `ResearchPage` 只允许作为迁移期临时 fallback；全部正式路由迁完后立即删除（本轮已完成）；
- 当前集中路由元数据、模板 Navbar/Footer 和 immersive layout 基础可以保留。

## 15. 实施顺序与审查节点

### 阶段 0：冻结错误通用方案

- 不再扩展 `ResearchPage`、`PageVisual` 和五种 section layout；
- 保存当前实现作为对照，不继续在其上做视觉补丁；
- 锁定四套原型和图片资产为迁移依据。

### 阶段 1：只实现公共骨架

- 建立无横线背景的 `WikiPage`；
- 保留并整理左侧 ReadingOutline + 正文结构；
- 建立移动目录和 reduced-motion；
- 用短假内容验证桌面、平板、手机，不迁移正式组件。

**审查点 A**：确认正文宽度、子页面左侧丝带目录、Home 原有右侧丝带、纯净背景与模板 Navbar/Footer 一致。

### 阶段 2：四个锚点页

按以下顺序迁移：

1. Human Practices：验证最复杂的图片墙、圆环、表格、dialog 和目录。
2. Experiments：验证 Five Gates 与长正文。
3. Description：验证 Project Living Ring 和机制叙事。
4. Model：验证论文式长文、公式、表格与折叠。

**审查点 B**：四页必须明显属于同一 Wiki，但任何两页不能像换字模板。

### 阶段 3：可复用组件与证据链页面

- Engineering、Results、Measurement、Notebook、Safety；
- 抽取已经在两个页面中真实复用的表格、矩阵、图和 fold；
- 建立 DR / EXP / NB / RES / SAFE 跨页锚点。

**审查点 C**：同一证据可跨页追踪，但正文不重复粘贴。

### 阶段 4：产物与 Engagement 页面

- Contribution、Education、Inclusivity、Entrepreneurship、Sustainability；
- Software、Hardware、Alternative Platform 只在真实内容足够时深入迁移。

**审查点 D**：所有产物、人物、引语、结果和链接均为真实记录或明确占位。

### 阶段 5：清理与全站验证

- 确认没有路由继续使用通用 `ResearchPage` 后再删除旧系统（本轮已完成）；
- 检查重复 Navbar/Footer/BackToTop；
- 检查 hash、浏览器前进后退、目录活动状态和路由切换回顶部；
- 构建、lint、键盘、移动端、低屏高、reduced-motion 和性能验证。

## 16. 正式内容占位规则

- 没有真实数据时写 `Planned / Awaiting team record / Not yet claimed`，不画伪结果曲线。
- 所有人物照片、引语和角色需要同意状态与来源槽位。
- 每张实验图需要图号、图注、样本、单位、控制、重复、统计和限制。
- 每个模型结果需要数据来源、假设、参数、验证和对项目的具体决定。
- 每项贡献需要版本、许可证、下载地址、复用步骤和已测试范围。
- Software、Hardware、Alternative Platform 内容不足时保持诚实的短页面，不为导航完整性制造成果。

## 17. 下一轮开始编码前需要确认的设计决定

1. 接受“左侧丝带目录 + 正文主列”为所有 17 页的稳定阅读骨架；Home thread guide 继续保留在右侧。
2. 接受保留 Home 粉色丝带本色，页面主题色作用于背景和组件，而不把丝带染成 17 种颜色。
3. 接受每个栏目一套动效母题，页面只按内容选择重点组件和小动效；锚点页可以有大型滚动场景，其余页面不强制。
4. 接受 Human Practices 同时保留横向 impact wall 和圆形 evidence timeline，但分开呈现。
5. 接受全页横线背景删除，网格仅存在于局部技术图。
6. 接受 `ResearchPage` 只作为迁移期 fallback，并在全部正式路由迁出后移除（本轮已完成）。
7. 接受先完成四个锚点页并进行视觉审查，再批量迁移其余页面。

## 18. 完成标准

- 所有页面只有模板的一套全局 Navbar、Footer 和 BackToTop；
- 所有页面都有清晰正文和左侧目录，移动端目录可用；
- 每页至少有一个与内容关系明确的主组件，但不要求组件数量相同；
- 原型图片、表格、圆环、证据门、模型稿和目录逻辑得到真实 React 迁移；
- 页面色调有区分，Home 粉色丝带持续贯穿；
- 页面静止时也能完整阅读，动效只增强关系解释；
- 不再出现全页横线背景、假的交互标签或一套卡片复制到 17 页；
- 所有真实主张可追踪，所有占位和边界明确标记。
