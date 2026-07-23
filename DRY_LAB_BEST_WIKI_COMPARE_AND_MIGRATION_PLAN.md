# CirCure Dry Lab 参照站深度分析、模板对照与分页面迁移规划

> 调研日期：2026-07-23  
> 输入报告：`iGEM2025_BestWiki_深度分析报告.md`  
> 对照对象：`hp-testimonial-cards-local/dry-lab.html` 与当前 `Official-wiki` React/Vite 模板  
> 输出范围：研究与规划，不修改任何页面代码

---

## 0. 执行摘要

最适合 CirCure 的方向不是复制某支队伍的视觉外壳，而是组合三类成熟做法：

1. **GreatBay-SCIE / PekingHSC 的 judge-first 证据顺序**：开头先回答“完成了什么、如何验证、改变了什么”，再进入长方法。
2. **XJTLU / Uprize-I 的结果组织能力**：将筛选、模拟、参数与验证以图表、表格和成组图像呈现，并提供稳定目录。
3. **EPFL / MIT-MAHE / Bologna 的交付物导向**：Software 写成真实用户工作流，Hardware 写成构成、装配、校准与局限，而不是技术名词或图片清单。

现有资产中，旧 `hp-testimonial-cards-local` Dry Lab 总页已经拥有较成熟的证据语法：Judge brief、claim-to-evidence matrix、模型架构、参数表、Wet–Dry iteration、reproducibility 与 limitations。当前 `Official-wiki` 则已经拥有更适合最终交付的三分页面路由、统一品牌 token、共享阅读进度、粘性 ribbon 目录、滚动 reveal、响应式和 reduced-motion 支持。

因此建议：

- **保留当前 Model / Software / Hardware 三页，不再创建 Dry Lab 总页。**
- 将旧总页按“证据责任”拆入三页，而不是按旧页面区块机械切割。
- P0 优先完成内容结构、证据表、图表语义和跨页链路；P1 再做目录、图集、代码复制、术语解释等交互；P2 才考虑装饰性动效。
- 任何核心结论必须默认可见；轮播、折叠和悬停只承载补充材料。
- 维持 CirCure 的“暖纸色 + 深蓝 + 金色 Dry Lab accent + 粉色 ribbon”体系，不迁移参照站的绿色、紫色、黑橙色等表层主题。

---

## 1. 范围、方法与可核查边界

### 1.1 本轮纳入的站点

输入报告正文及 URL 表共涉及 12 支队伍/参考站：GreatBay-SCIE、EPFL、TU Darmstadt、Freiburg、XJTLU-Science-China、SUSTech-BIO、Uprize-I、PekingHSC、MIT-MAHE、Brno、Bologna、UOttawa。

本轮以各站首页实际暴露的 `Model / Modeling / Software / Hardware` 入口为准；没有这些栏目时，只审计与计算设计最接近的页面，并明确标注“非标准 Dry Lab 页”。

### 1.2 实际核查状态

| 站点 | 实际核查页面 | 状态 | 结论使用方式 |
|---|---|---:|---|
| GreatBay-SCIE | [Model](https://2025.igem.wiki/greatbay-scie/model) | 可访问 | Model 主参照 |
| EPFL | [Modeling](https://2025.igem.wiki/epfl/modeling)、[Software](https://2025.igem.wiki/epfl/software)、[Hardware](https://2025.igem.wiki/epfl/hardware) | 可访问 | 三分页面主参照 |
| TU Darmstadt | [首页](https://2025.igem.wiki/tu-darmstadt/) | 404 | 只保留报告中已有描述，不推断页面细节 |
| Freiburg | [Plasmid Design](https://2025.igem.wiki/freiburg/plasmid-design/) | 可访问；无 Model/Software/Hardware 栏目 | 仅作为大型构建设计图集参照 |
| XJTLU-Science-China | [Model](https://2025.igem.wiki/xjtlu-science-china/model/) | 可访问 | Model 可视化与阅读交互主参照 |
| SUSTech-BIO | [Model](https://2025.igem.wiki/sustech-bio/model)、[Hardware](https://2025.igem.wiki/sustech-bio/hardware) | 路径存在，但直接访问落入错误/回退内容 | 不评价正文，仅提炼“深链接可靠性”教训 |
| Uprize-I | [Model](https://2025.igem.wiki/uprize-i/model) | 可访问 | 评分表与模型验证参照 |
| MIT-MAHE | [Model](https://2025.igem.wiki/mit-mahe/model)、[Software](https://2025.igem.wiki/mit-mahe/software) | 可访问 | 工具提示、软件管线、用户手册参照 |
| PekingHSC | [Model](https://2025.igem.wiki/pekinghsc/model)、[Software](https://2025.igem.wiki/pekinghsc/software) | 可访问 | 超长模型页、折叠附录、软件工具族参照 |
| Brno | [首页](https://2025.igem.wiki/brno/) | 404 | 不推断页面细节 |
| Bologna | [Software](https://2025.igem.wiki/bologna/software)、[Hardware](https://2025.igem.wiki/bologna/hardware) | 可访问 | Software / Hardware 内容组织主参照 |
| UOttawa | [首页](https://2025.igem.wiki/uottawa/) | 可访问；未暴露 Dry Lab 入口 | 只作为滚动叙事和导航技术参考 |

### 1.3 输入报告的数据质量提醒

- 报告页首写“研究日期 2025/06/08”，但内容包含 2025 最终奖项，且文件所在上下文为 2026-06，日期很可能需要校正。
- 报告称“全球仅 11 支 Best Wiki 提名队伍”，正文列表并未列满 11 支；本轮以报告实际点名的站点为范围，不把该数字作为完整名录。
- 报告主要是全站设计分析，不是 Dry Lab 专项报告。本文件中的 Dry Lab 结论来自实际页面复核，而不是直接照抄报告。

---

## 2. 跨站共性：优秀 Dry Lab 页真正解决的五个问题

### 2.1 先告诉评委“模型改变了什么”

GreatBay-SCIE 把 `Key Success` 放在 `Abstract` 前；PekingHSC 用总框架和流程图先建立尺度关系；Bologna Software 先说明 CAPE 解决的任务。共同点是：读者不必读完方法才能知道贡献。

CirCure 应在每页首屏后设置一条 30 秒证据路径：

`Need / Question → Output → Validation → Project consequence → Reusable deliverable`

### 2.2 用“决策链”而不是“工具清单”组织内容

XJTLU 的系统发育、分子动力学与 COMSOL 之所以有说服力，是因为它们围绕筛选和扩散问题；Bologna CAPE 的七步结构从输入走到 assembly-ready output；MIT-MAHE Software 从模型与自动化走到用户手册。

CirCure 页面不应按 AlphaFold、Python、某数据库等工具分章，而应按候选筛选、结构评估、动力学窗口、用户任务、硬件测量需求分章。

### 2.3 图表必须让比较发生

高价值可视化不是“有图”，而是让读者比较：

- 候选之间：排序、分数分解、阈值与淘汰原因。
- 预测与验证之间：曲线/点、误差、残差与不确定性。
- 版本之间：v0.1 → v0.2 的问题、改动与测量结果。
- 模块之间：输入、输出、反馈与决策接口。

### 2.4 长页面需要双层阅读路径

PekingHSC 的水平目录、滚动进度、搜索、代码复制和 `details` 适合超长技术页；XJTLU 的侧栏 TOC 和回顶进度环也在降低迷失感。但核心证据若全部折叠或塞进轮播，会提高评委成本。

正确分工应是：

- 默认展开：问题、方法概览、关键结果、验证、决策、局限。
- 可折叠：完整推导、参数全集、代码、补充图、缩写、参考文献详情。
- 可轮播：同类结构快照或重复结果图；必须同时提供概览、图号和下载/查看全部入口。

### 2.5 动效应表达状态，不应只是制造“高级感”

值得迁移的动效：阅读进度、目录 active 状态、流程步骤切换、图层聚焦、scroll reveal、复制反馈。默认不迁移：长时间 Splash、整块内容持续漂浮、纯装饰 3D、自动轮播、过量视差。

---

## 3. 逐站 Dry Lab 页面审计

### 3.1 GreatBay-SCIE — Model

**页面事实**：约 9,200 个可见词、40 张图片、3 张数据表、5 个代码复制按钮；固定左侧目录；顶部导航内嵌 `progressBar` 与切换图标；存在图像查看器的放大、缩小、关闭控制。

**内容亮点**

- `Key Success → Abstract → Introduction → Chitinase → Glucanase → Discussion`，贡献优先。
- 参数/结果表将计算指标与 Wet Lab label 放在一起，模型输出不与实验结论分离。
- 两个酶模块沿用相同的章节语法，适合多模型并列但不强迫所有图使用同一形式。
- Supplementary Materials 与正文分层，便于主路径保持清晰。

**组件/动效亮点**

- 顶部阅读进度与品牌小图标结合，功能明确且视觉成本低。
- 固定侧栏比悬浮大目录更适合 9,000+ 词长文。
- 代码块复制和图像放大是真实技术阅读需求，不是装饰交互。

**迁移建议**

- `Key Success` 转译为 Model 页的 `Judge brief + claim-to-evidence matrix`。
- 表格“计算指标 + 独立检查 + Wet Lab consequence”直接映射到 CirCure 候选与结构比较。
- 不复制绿色森林主题、卡通图标切换；当前模板已有更统一的金色进度线与 ribbon。

### 3.2 EPFL — Modeling / Software / Hardware

**页面事实**

- Modeling：CAD、完整无人机装配、喷洒系统、仿真环境，配粘性侧栏。
- Software：系统架构、ROS 节点、检测、立体视觉、传输、飞控、安装指南；约 1,800 词、7 个 figure。
- Hardware：主组件、传感器、团队自制件、装配、喷洒系统、结果与局限；约 2,450 词、16 个 figure。

**亮点**

- 三页边界非常清楚：Modeling 解释 CAD/仿真，Software 解释数据流和节点，Hardware 解释物理构成与装配。
- Software 的架构图和 ROS node layout 是高价值“系统地图”。
- Hardware 的组件逐项图像、装配和限制形成从器件到系统的阅读链。
- 同一套深色内容画布、橙色标题、粘性目录贯穿三页，页面不同但品牌一致。

**不足与借鉴边界**

- Hardware 缺少真正的 BOM 表、校准曲线、版本迭代与验收阈值，图像多但“可复现性”仍可加强。
- Software 以技术模块为主，真实用户任务和错误路径不够突出。

**迁移建议**

- 采用“三页边界清晰 + 同一视觉语法”，不采用同一页塞满三类内容。
- Software 用 architecture/dataflow 图；Hardware 用 annotated assembly + BOM + calibration，而非单纯组件画廊。

### 3.3 TU Darmstadt

报告提供的 2025 URL 当前返回 404。本轮不把报告中“Best Wiki”身份扩展为未经核查的 Dry Lab 结论。迁移规划中不使用其作为组件来源。

### 3.4 Freiburg — Plasmid Design（邻近案例）

Freiburg 没有独立 Model、Software 或 Hardware 栏目。Plasmid Design 页包含大量 SVG 构建图、分组章节和多个 carousel，适合浏览上百个 construct 变体。

**可借鉴**

- 将大量同类设计按 family 分组，并提供稳定的命名和外部 part link。
- 轮播适合重复、同构、补充级的构建图。

**不可直接迁移**

- 关键比较不应只存在于轮播。CirCure 的候选排名、参数或验证需要同屏 small multiples / table，而不是逐张点击。

### 3.5 XJTLU-Science-China — Model

**页面事实**：约 4,050 词、18 个 figure、3 张表、3 组图像 slider；含固定/可折叠侧栏 TOC、自动高亮、回顶阅读进度环、上一张/下一张与 dot 控制；加载 Chart.js、ECharts 与 MathJax。

**内容亮点**

- 模型明确分为 `Integrated FnBP Screening` 与 `Intracellular Bacterial Diffusion` 两条主线。
- Screening 依次呈现系统发育、结构预测、MD、自由能、contact heatmap 与综合结论。
- Diffusion 同时呈现方程、参数、COMSOL 场图和实验时间结果，形成计算—实验对照。
- 参数表、接触热图、时间曲线、二维分布图各自匹配不同问题，没有用一种卡片包办所有数据。

**交互亮点**

- TOC 自动高亮和回顶进度环适合长模型页。
- Slider 有可访问名称、dot、Previous/Next，明显优于无控制自动轮播。
- Awards 流光属于全站品牌微交互，不应迁到科学内容内部。

**迁移建议**

- 将 slider 仅用于结构候选/模拟快照补充图；关键比较改为 small multiples + summary table。
- 复用“图形类型随问题变化”的原则，不引入 Chart.js/ECharts，除非真实数据需要交互缩放/筛选；当前 React/SVG/CSS 足以覆盖多数静态图。

### 3.6 SUSTech-BIO

首页 footer 暴露 Model 与 Hardware 路径，但直接访问实际落入错误/回退内容，站内入口也无法稳定完成跳转。本轮不对其正文和动效做推断。

对 CirCure 最有价值的反面教训是：

- Model / Software / Hardware 必须支持直接 URL、刷新、分享和锚点恢复。
- 路由错误不能静默回退到 Description；应有明确 404 或内容状态。
- 每个页面的 title、h1、active navigation 必须与 URL 一致。

### 3.7 Uprize-I — Model

**页面事实**：约 2,565 词、4 张表；主线为 `Secretion Efficiency Prediction` 与 `Molecular Docking`；含 Data Assembly、Pathway Classification、Weighted Scoring、Validation；侧边 section item 具有状态过渡。

**亮点**

- Weighted scoring framework 把 feature、weight、scoring method、biological rationale 放在同一表中。
- 高/低排名信号肽表和 AutoDock Vina 输出表使“选择了谁、为什么”可审查。
- 验证不是末尾一句话，而是评分模型的独立章节。

**迁移建议**

- CirCure epitope prioritisation 应采用同类“权重—理由—敏感性—最终决策”结构。
- 表格要再增加 provenance、missingness、uncertainty 与 exclusion reason，避免只有最终分数。

### 3.8 MIT-MAHE — Model / Software

**页面事实**

- Model：Docking + S.E.N.S.E stability model；4 张 docking 表、9 个 figure。
- Software：development timeline、at-a-glance、pipeline、提交/状态/输出截图、用户手册、用途和 future scope。
- 全站具备明暗主题、加载动画、文章目录和行内术语解释；术语 tooltip 解释 RMSD、MD、docking、standardization、outlier 等。

**亮点**

- 行内术语解释非常适合 generalist judge，减少在正文中反复定义。
- Software 用连续 UI 截图说明提交、等待、完成和输出，比单一“产品海报”可信。
- 软件开发 timeline 与 pipeline 分别回答“怎么迭代”和“怎么运行”。

**不足与迁移边界**

- Splash 会让内容首屏延迟出现；不应迁移。
- 全站明暗模式只有在全 Wiki 统一实现时才值得做，不能只给 Dry Lab 增加一套孤立主题。
- Tooltip 必须支持 focus/tap，不能只支持 hover。

### 3.9 PekingHSC — Model / Software

**页面事实**

- Model：约 4,866 词、42 个 figure、11 个 `details`、大量可复制代码；涵盖 MD、深度学习相互作用预测、PBPK、细胞模型、多剂量和 RNA 设计。
- Software：约 2,946 词、30 个 figure、15 个 `details`；按结构预测、相互作用预测、de novo design 组织工具族，并加入 RAG 与 Agent。
- 有顶部滚动进度、水平 TOC、站内搜索、主题切换和代码复制。

**亮点**

- 多尺度模型由总框架串联，而不是平铺 40 张图。
- 代码和长参数区使用折叠，正文仍保留结果、流程图和结论。
- Software 的“工具类别 → 单工具界面/架构 → More About”是大型工具集合的有效组织法。

**风险**

- 部分 `details` 包含整段方法和结果；折叠过多会让核心证据不可扫描。
- 软件页工具数量巨大，若缺少 benchmark / user task / selection rationale，容易变成目录式展示。

**迁移建议**

- 采用“水平/粘性目录 + 技术附录 details + code copy”的组合思想。
- CirCure 只有一个明确软件产品时，不需要 PekingHSC 的工具目录规模；应聚焦一个真实用户的 end-to-end task。

### 3.10 Brno

报告提供的 URL 当前返回 404。本轮不对其 Dry Lab 内容做推断。

### 3.11 Bologna — Software / Hardware

**Software 亮点**

- CAPE 先给四个 feature card，再给可复制的安装步骤、七步内部工作流、六步 Web 使用流程、edge weighting 与 future improvements。
- 七步链路从 KEGG graph、RetroPath、path selection、EC、ortholog、codon optimization 到 output，输入输出清晰。
- `.feature-card` 和 `.step-section` 使用滚动淡入；code block 有 hover 反馈。

**Hardware 亮点**

- 章节按 Problem、Biosensor Principle、传统方法比较、Device Design、Prototype Roadmap、Calibration/Future 排列。
- 原理图与 workflow 图比“设备照片”更早出现，先解释测量逻辑。

**风险与迁移边界**

- Hardware 的整块 `float` 动画持续 6 秒，会削弱科学文档稳定性；不迁移。
- Software reveal 初始 opacity 为 0，必须保证 JS 失败或 reduced-motion 时内容仍可见。
- Hardware 仍需要真实 BOM、校准曲线、误差与安全表补齐。

### 3.12 UOttawa

该站是强滚动叙事/Canvas/3D 导航参考，但首页未暴露独立 Dry Lab 页面。本轮不将其作为 Model / Software / Hardware 内容模板。

可吸收的只有两点：全站设计 token 统一、复杂动效集中在叙事入口；技术长文仍应回到稳定、可定位、可分享的内容页面。

---

## 4. 可迁移组件与动效总表

| 模式 | 来源 | 解决的问题 | CirCure 适配方式 | 推荐页面 | 优先级 |
|---|---|---|---|---|---:|
| 30 秒 Judge brief | GreatBay、旧 Dry Lab 原型 | 先看到贡献与证据状态 | 四项 evidence strip，保持纸面编辑风 | Model；Software/Hardware 简版 | P0 |
| Claim-to-evidence matrix | 旧原型、GreatBay 表格 | claim 与验证/后果脱节 | 列为 Claim / Output / Independent check / Consequence / Status | Model | P0 |
| 模型架构 + Wet–Dry 回路 | XJTLU、旧原型、当前 ModelPipeline | 多模型接口难理解 | 金色主路径、粉色 return ribbon；静态可读，点击仅聚焦 | Model | P0 |
| 参数/来源表 | Uprize、GreatBay、旧原型 | 数值不可追踪 | 参数、单位、值/范围、来源、拟合/测量、敏感性 | Model | P0 |
| 预测—验证同图 | XJTLU | 预测与数据分散 | 实验点 + 模型线 + uncertainty band + residual inset | Model | P0 |
| Software end-to-end workflow | Bologna、MIT、EPFL | 软件变成功能清单 | Input → Validate → Run → Inspect → Export → Recover | Software | P0 |
| 系统 architecture/dataflow | EPFL、MIT | 模块与数据边界不清 | 用户层/服务层/模型层/数据层，标输入输出与 provenance | Software | P0 |
| Annotated apparatus / exploded view | EPFL、Bologna | 硬件图片不能说明工作原理 | 静态总览 + 可点击的 sample/calibration/safety layer | Hardware | P0/P1 |
| BOM + build release table | EPFL 的组件页启发、当前 BomTable | 无法复现设备 | Part / purpose / spec / qty / supplier / alt / cost / source | Hardware | P0 |
| 粘性目录 active 状态 | XJTLU、GreatBay、当前 WikiLineSidebar | 长页迷失 | 直接强化当前 ribbon，不另造目录系统 | 三页 | 已有/完善 |
| 顶部阅读进度 | GreatBay、PekingHSC、当前模板 | 不知道长页进度 | 保留当前 header 下 2px 金线 | 三页 | 已有 |
| 补充图 slider | XJTLU、Freiburg | 同构图太多 | 手动控制、图号/标题可见、提供 View all；核心结论不入轮播 | Model / Hardware | P1 |
| 技术附录 `details` | PekingHSC、旧原型 | 正文过长 | 只折叠完整推导、代码、参数全集、参考文献 | 三页 | P1 |
| 行内术语 tooltip | MIT-MAHE | generalist judge 不懂术语 | click/focus/hover 均可用；另有 glossary 总表 | Model / Software | P1 |
| Code block copy | GreatBay、PekingHSC | 命令与示例难复用 | 复制后明确反馈，代码仍可选择 | Model / Software | P1 |
| Scroll reveal | Bologna、当前模板 | 建立阅读节奏 | 只做一次 12–20px/淡入；无 JS 默认可见 | 三页 | 已有/约束 |
| 主题切换 | MIT、PekingHSC | 长时阅读偏好 | 只有全站统一时再做 | 全站 | P2 |
| 全屏 Splash | MIT、Uprize 等 | 品牌登场 | 不迁移；真实加载慢时使用局部 skeleton | 无 | 禁止默认 |
| 装饰性 3D / 持续漂浮 | UOttawa、Bologna Hardware | 氛围 | 只有能表达结构/空间数据时采用；不让正文漂浮 | 视真实数据 | P2/慎用 |

---

## 5. 三个分页面的内容—可视化匹配

### 5.1 Model 页面

| 内容问题 | 首选呈现 | 为什么 | 不推荐 |
|---|---|---|---|
| 评委 30 秒内理解贡献 | Judge brief + claim matrix | 直接对应 Best Model 证据责任 | 纯 Hero 大图 |
| 三个模型如何连接 | 有向 pipeline + Wet–Dry return | 显示输入、输出、接口、反馈 | 三张彼此孤立卡片 |
| 候选如何打分 | 排名表 + stacked score decomposition | 同时看总分和各维贡献 | 只给 radar；只给最终 top 5 |
| 多指标取舍 | heatmap / parallel coordinates（数据足够时） | 能看候选在多维上的结构 | 3D 柱状图 |
| 阈值是否稳健 | threshold sweep / sensitivity tornado | 显示决策对假设的敏感性 | 单一阈值数字 |
| 结构候选比较 | 同尺度 small multiples + 指标表 | 允许同屏比较 | 自动轮播 |
| 动力学预测 | 实验点 + 模型线 + uncertainty band | 预测、验证和不确定性相邻 | 只有平滑模拟曲线 |
| 模型拟合质量 | parity plot + residual plot + metric table | 不只报一个 R² | 仪表盘分数 |
| 参数来源 | 参数 provenance table | 单位、来源、拟合、范围可追踪 | 参数散落在段落 |
| Wet–Dry 迭代 | cycle/ledger：Input → Prediction → Experiment → Revision | 明确模型改变实验、实验改变模型 | 只画无限循环箭头 |
| 局限与适用域 | limitation matrix：Assumption / risk / affected output / mitigation | 可行动而非免责声明 | 一段泛化 future work |

**推荐章节**

1. Judge brief & evidence boundary
2. Model architecture
3. Model I — Epitope prioritisation
4. Model II — circRNA structural assessment
5. Model III — Expression and immune dynamics
6. Cross-model validation & uncertainty
7. Wet–Dry iteration and decision log
8. Limitations / applicability
9. Reproducibility / references / technical appendices

### 5.2 Software 页面

| 内容问题 | 首选呈现 | 必须包含 |
|---|---|---|
| 谁在何时使用 | user-task strip / job story | User、trigger、current pain、desired decision |
| 输入是否合规 | schema table + validation states | 字段、单位、格式、缺失、隐私、错误示例 |
| 系统怎么工作 | architecture/dataflow | 模块、数据边界、版本、外部服务、失败点 |
| 最短成功路径 | stepper + 真实截图 | Input → Run → Inspect → Export；不要假终端 |
| 输出是否可信 | annotated output + provenance panel | score decomposition、uncertainty、warning、version |
| 软件是否被验证 | test matrix + benchmark charts | 单元/集成/数据集、性能、基线、失败案例 |
| 用户是否能复用 | Quickstart + copy + expected output | 环境、命令、example、checksum/expected result |
| 迭代是否真实 | release timeline | 用户反馈、bug、修改、影响、版本号 |
| 责任与边界 | limitations / responsible use panel | 适用域、误用、数据与安全、人工复核 |

**推荐章节**

1. User need & software claim
2. What the tool does / does not do
3. Architecture & data flow
4. Input → run → inspect → export
5. Validation, benchmark & failure handling
6. User testing and iteration
7. Installation, API/CLI, release & reuse
8. Limitations, ownership and references

### 5.3 Hardware 页面

| 内容问题 | 首选呈现 | 必须包含 |
|---|---|---|
| 为什么需要设备 | requirements matrix | user、sample、range、accuracy、throughput、cost、safety |
| 样品/信号如何流动 | annotated system schematic | sample path、measurement path、control path |
| 设备由什么组成 | exploded view + BOM | part、spec、quantity、cost、alternative、source |
| 如何装配 | numbered assembly sequence | 工具、方向、容差、QC、照片/图 |
| 如何迭代 | DBTL version timeline | 问题、测量、改动、结果、下个版本 |
| 是否测得准 | calibration curve + residual/error band | 标准、重复、范围、LOD/LOQ（若适用）、误差 |
| 与现有方案相比 | benchmark table | accuracy、time、cost、access、maintenance |
| 如何安全使用 | risk matrix + maintenance flow | hazard、severity、mitigation、containment、cleaning、disposal |
| 能否复现 | release checklist | CAD、circuit、firmware、BOM、manual、license、test data |

**推荐章节**

1. Laboratory need & measurable requirements
2. Principle and system architecture
3. Components, BOM and source files
4. Build iterations
5. Calibration and performance
6. Workflow, safety and maintenance
7. Comparison, limitations and future changes
8. Reproduction package and references

---

## 6. 旧 Dry Lab 总页与当前 Official-wiki 的对照

### 6.1 旧 `hp-testimonial-cards-local/dry-lab.html`

实测结构：11 个 section、4 张表、4 个 figure、5 个 `details`、2 个按钮；顶部 3px 阅读进度、粘性顶栏、粘性 Contents；章节覆盖 Abstract、Judge brief、Model architecture、三个模型、Wet–Dry iteration、Reproducibility、Limitations、References。

**优势**

- 证据语法完整，尤其是 Judge brief、claim-to-evidence、参数/来源表和技术附录。
- 视觉克制，像 manuscript，适合计算内容。
- 默认明确标注 `Proposed / team data not supplied`，没有伪造结果。
- 折叠只承担部分技术附录，基本符合渐进披露原则。

**问题**

- 将 Model、Software 责任和可能的 Hardware 责任压在一个“Dry Lab”语境里，不适合最终三路由。
- 旧色系是酒红 `#79283a` + 青绿 `#2f6f68`；当前品牌已演进为深蓝/粉/金，直接搬 CSS 会造成双设计系统。
- 页面为独立 HTML/CSS/JS，顶栏和目录逻辑与 React 模板重复。
- 内容仍是 architecture prototype；模型数字、参数、验证和软件/硬件发布均需真实团队材料替换。

### 6.2 当前 `Official-wiki`

**现有优势**

- 路由已明确拆为 `/model`、`/software`、`/hardware`。
- 三页共享 `WikiPage`、`WikiLineSidebar`、reading progress、facts、status、next record 和 related records。
- Dry Lab token 已统一：暖纸 `#eee7dc`、深蓝 `#0b294d / #173f78`、金色 `#c39a55`，与全站粉色 ribbon 共存。
- `useWikiPageMotion` 已处理 reveal、active section、页面进度、目录 ribbon 进度、hash 恢复和 reduced motion。
- 已有 ModelPipeline、EquationPanel、WetDryReturn、SoftwareRun、ReproducibilityChecklist、Hardware apparatus、BOM 等原型组件。

**当前不足**

- `WikiSection` 数据类型只支持 paragraph、items、note 和五种通用 layout；尚不能原生表达 figure、table、equation、citation、code、details、dataset provenance 和 chart spec。
- 三页各只有 3 个主 section，真实材料进入后会过度拥挤，侧栏价值也无法充分发挥。
- 当前 Model 的 `model-reproducibility` section 挂载的是 `WetDryReturn`，语义不匹配；Wet–Dry iteration 应独立成章，reproducibility 应挂 checklist/release block。
- Hardware 页面已有 `HardwareApparatus` 组件，但当前 `hardware.tsx` 的 heroVisual 为 `null`；需要决定是使用真实设备总览，还是维持无概念图的严谨边界。
- `SoftwareRun` 目前明确是 placeholder；在真实可执行流程出现前不能做成看似运行成功的产品演示。
- 通用 matrix/ledger/card 足以做骨架，但不足以承载真实科学图、参数表、校准曲线和代码证据。

### 6.3 合并原则

| 维度 | 旧原型保留什么 | 当前模板保留什么 | 最终决策 |
|---|---|---|---|
| 信息架构 | judge-first、证据链、附录边界 | Model/Software/Hardware 三路由 | 旧内容语法拆入三页 |
| 品牌 | 编辑式、克制、manuscript 气质 | 当前 token、导航、footer、ribbon | 只迁结构，不迁旧色值/顶栏 |
| 阅读导航 | 精细目录与顶部进度 | 共享进度 + ribbon sidebar | 以当前系统为唯一实现 |
| 动效 | 少量目录/进度反馈 | reveal、progress、active state、交互 feature | 保留状态型动效，限制 reveal 强度 |
| 数据呈现 | 表、claim matrix、parameter ledger | 通用 item layouts | 增加科学内容 primitives，而非继续堆卡片 |
| 真实性 | 清晰 evidence boundary | planned/open/recorded status | 继续使用状态，但最终页面逐项换成证据 |

---

## 7. 无 Dry Lab 总页条件下的迁移分布

### 7.1 Model 页承接

从旧总页迁入：Abstract、Judge brief、claim-to-evidence matrix、Model architecture、三个模型章节、Wet–Dry iteration、模型局限、模型复现。

新增/强化组件：

- `JudgeBriefStrip`
- `ClaimEvidenceTable`
- `ModelArchitectureMap`
- `ScoreDecompositionFigure`
- `ParameterProvenanceTable`
- `PredictionValidationPlot`
- `SensitivityFigure`
- `WetDryDecisionLedger`
- `TechnicalAppendix`

当前组件调整：

- `ModelPipeline` 保留，但从三张切换卡升级为“总图 + 点击聚焦”，默认必须看见完整链路。
- `ModelEquationPanel` 增加 equation number、symbol、unit、source、assumption、cross-reference。
- `WetDryReturn` 移到独立 iteration section，不再占据 reproducibility 位置。

### 7.2 Software 页承接

从旧总页迁入：与模型代码复现相关的环境、命令、输入输出、ownership；但“复现模型的脚本”和“独立用户工具”必须分清。

新增/强化组件：

- `UserTaskBrief`
- `SoftwareArchitectureFlow`
- `InputSchemaTable`
- `RealRunStepper`
- `AnnotatedOutput`
- `TestBenchmarkMatrix`
- `ReleaseTimeline`
- `QuickstartCodeBlock`
- `FailureRecoveryPanel`

当前组件调整：

- `SoftwareRun` 只有接入真实命令、真实输入和 expected output 后才作为主 feature；否则保持 boundary 状态。
- `ReproducibilityChecklist` 应从纯视觉 checklist 升级为可链接的发布清单。
- `ResourceShelf` 只展示真实 GitLab release、docs、sample data、license、issue tracker，不放占位链接。

### 7.3 Hardware 页承接

旧总页没有完整 Hardware 证据，因此主要从当前 Hardware scaffold、EPFL 与 Bologna 参照补足。

新增/强化组件：

- `HardwareRequirementMatrix`
- `AnnotatedSystemDiagram`
- `ExplodedAssembly`
- `BomTable`
- `BuildIterationTimeline`
- `CalibrationPlot`
- `PerformanceComparisonTable`
- `SafetyRiskMatrix`
- `OpenHardwareReleaseChecklist`

当前组件调整：

- `HardwareApparatus` 必须换成真实设备/真实示意，并保持 sample path / calibration / safety 三个图层。
- `BomTable` 增加数量、关键规格、成本、替代件、源文件和版本。
- `ReproducibilityChecklist` 在 Hardware 语境改写为 Source / Build / Calibrate / Operate / Maintain。

### 7.4 跨页连接

- Model 的每个 `Decision` 链接到对应 Experiments / Measurement 证据。
- Software 的算法或评分说明链接回 Model，而用户反馈/需求链接到 Human Practices。
- Hardware 的校准链接 Measurement，实际使用链接 Experiments，发布包链接 Contribution。
- 三页底部 next record 仍按 Model → Software → Hardware 顺序；related records 提供非线性跳转。
- 不新增 Dry Lab landing page；全站 mega-menu 本身承担分组入口。

---

## 8. 与当前主题适配的视觉规则

### 8.1 颜色语义

- `gold`：Dry Lab 主证据、active、关键路径、figure number。
- `brand navy / deep`：结构、系统背景、公式/代码/架构深色面板。
- `care pink`：CirCure ribbon、Wet–Dry return、与患者/HP 输入相关的回流。
- `coral`：只在跨到 Wet Lab 的实验动作/警示时使用。
- `paper / paper-bright`：正文和表格，保证长时阅读。

不要将参照站的紫色、荧光绿、黑橙、森林绿直接引入 token。

### 8.2 版式

- 保留 860px 左右正文列，数据密集 figure/table 可 breakout 到 1100–1280px。
- 图、表、公式统一 `Fig. M-01 / Table M-01 / Eq. M-01` 编号。
- 每个模型章节重复相同证据顺序，但允许使用不同图形。
- 卡片只用于并列短信息；公式、参数、结果与验证优先使用 manuscript/table/figure。

### 8.3 动效预算

- reveal：一次、180–500ms、位移不超过 20px。
- hover/focus：120–220ms；不改变布局。
- 进度/目录：跟随滚动，但用 requestAnimationFrame 与 CSS transform。
- 图表切换：只在用户明确选择候选/层级时触发。
- `prefers-reduced-motion` 下所有内容直接可见、无平滑滚动、无连续动画。

---

## 9. 后续实施路线（本轮不执行）

### Phase 0 — 内容合同与证据盘点（P0）

1. 为三个页面建立 content inventory：claim、数据、图、表、代码、来源、owner、状态。
2. 给每个 claim 指定 independent check 和 project consequence。
3. 列出真实模型、软件产品、硬件设备是否存在；不存在的分页面保持诚实边界，不用视觉制造完成感。
4. 确定所有 figure/table/equation 编号与引用规则。

### Phase 1 — 扩充共享内容 primitives（P0）

建议未来在 `src/components/wiki` 下补充可复用的科学文档组件，而不是为每页写一次性 HTML：

- Figure / FigureGroup / FigureCarousel
- DataTable / ParameterTable / EvidenceTable / BomTable
- EquationBlock / SymbolTable
- CodeBlock / CopyButton
- DetailsAppendix
- ProvenanceBadge / EvidenceStatus
- ChartFrame（真实数据传入，不内置假曲线）

同时扩充 `WikiPageContent`，使 section 能声明 figure/table/code/details/citation，而不是把所有内容塞进 `items`。

### Phase 2 — 分页面专属组件（P0/P1）

- Model：评分分解、验证图、灵敏度、Wet–Dry ledger。
- Software：系统图、真实 run、benchmark、release。
- Hardware：示意/爆炸图、BOM、校准、风险矩阵。

### Phase 3 — 交互增强（P1）

- 技术附录 details、代码复制、术语 tooltip。
- 补充图手动 slider / View all。
- 图表 candidate filter 或 layer focus；仅在真实数据量足以支持时实现。

### Phase 4 — QA 与评委阅读测试（P0）

- 30 秒：能否回答方法、结果、验证、决策、复现。
- 3 分钟：能否找到一个 claim 的完整证据链。
- 专家深读：能否追到参数、代码、版本、数据来源。
- 直接 URL、刷新、锚点、键盘、移动端、reduced motion、无 JS 可读性。
- 图表 alt/caption、表格横向滚动、颜色对比和 print/PDF 可读性。

---

## 10. 优先级与取舍

### P0：没有这些就不应先做动效

- 三页真实内容边界和章节结构。
- Judge brief / claim matrix。
- 模型架构、真实结果与验证可视化。
- Software 真实输入—运行—输出—失败路径。
- Hardware 需求、BOM、校准、性能、安全。
- figure/table/equation 编号、来源和复现链接。
- 直接 URL、active nav、目录、移动端与可访问性。

### P1：明显提升阅读与复用

- 代码复制、技术附录、术语解释。
- 手动补充图 slider + View all。
- 交互式图层聚焦、candidate filter。
- 用户测试/版本迭代可视化。

### P2：有真实语义时才做

- 3D 分子/设备模型。
- 全站暗色模式。
- 复杂滚动叙事。

### 明确不建议默认迁移

- 全屏 Splash/loading 表演。
- 自动播放轮播。
- 整块正文持续漂浮。
- 纯装饰粒子/3D。
- 关键结果默认折叠。
- 只在 hover 可用的术语或数据。
- 为单个图表引入大型依赖。
- 无真实数据的“可调参数模拟器”。

---

## 11. 验收标准

### 全局

- [ ] Dry Lab 无总页；Model / Software / Hardware 均可直接访问、刷新与分享。
- [ ] 三页共享 CirCure token、导航、footer、阅读进度和 ribbon sidebar。
- [ ] 所有核心内容在 JS 失败或 reduced-motion 下仍可读。
- [ ] 每个 figure/table/equation 可被正文引用，并有 caption、来源与状态。
- [ ] 不加载第三方 CDN；资源符合 iGEM infrastructure 规则。

### Model

- [ ] 30 秒内看见至少一个可核查的 model-guided decision。
- [ ] 每个模型均有 Question / Data / Method / Result / Validation / Decision / Limitation。
- [ ] 预测、实验/独立证据和误差尽量同图或相邻。
- [ ] 参数有单位、来源、值/范围、拟合/测量状态。
- [ ] Wet–Dry iteration 与 reproducibility 分章，不再语义错位。

### Software

- [ ] 明确一个真实用户与真实任务。
- [ ] 有可运行 quickstart、示例输入、expected output、测试与 release。
- [ ] UI 截图形成完整任务链，而不是只展示首页。
- [ ] 输出包含 provenance、uncertainty/warning 和版本。

### Hardware

- [ ] 需求可量化，设备图能解释 sample/measurement/control path。
- [ ] BOM、装配、校准、性能、安全与维护可追踪。
- [ ] 至少一个 build iteration 由测量问题驱动。
- [ ] 开源包足以让另一支队伍复现关键功能。

---

## 12. 最终建议

当前最值得立即保留的是 `Official-wiki` 的三分页面骨架、品牌 token、progress/ribbon/sidebar 和 reduced-motion；最值得从旧原型迁入的是 Judge brief、claim-to-evidence、完整模型章节语法和技术附录边界；最值得从参照站借鉴的是 GreatBay 的贡献优先、XJTLU 的多类型结果图、Uprize 的评分表、EPFL 的三页边界、MIT 的术语解释、PekingHSC 的长文工具、Bologna 的真实软件工作流。

迁移时应始终遵守一句判断标准：**这个组件是否帮助读者理解、比较、验证、复现或作出决策？** 如果答案只是“让页面更炫”，就不应进入 P0/P1。
