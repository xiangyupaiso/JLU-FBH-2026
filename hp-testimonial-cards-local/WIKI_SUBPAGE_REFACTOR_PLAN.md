# CirCure Wiki 子页面拆分与迁移审查

> 审查日期：2026-07-20  
> 审查范围：`hp-testimonial-cards-local/` 四个静态原型、正式 React Wiki 的路由/内容页/公共导航/页头/设计变量，以及相关研究与风格说明。  
> 本文只给出改造方案；本轮没有修改任何 HTML、CSS、JavaScript、React 页面或视觉效果。

## 结论先行

当前问题不是“少建了几个 HTML 文件”，而是**内容架构与交付架构没有对齐**：

- 正式 Wiki 已经有 17 个独立子路由；
- `hp-testimonial-cards-local/` 只有 Project、Wet Lab、Dry Lab、Human Practices 四个大型总页面；
- 四个原型同时承担了概览、方法、工程、结果、复用、风险等多种职责；
- 正式路由里的 17 个 React 页面仍大多是 iGEM 模板占位内容。

推荐的总体方案是：

> **一套全站外壳 + 四套内容语言 + 17 个独立路由 + 一套共享证据编号与交叉链接。**

四个现有原型应继续作为“视觉、组件和动效源库”，不应作为最终总页面直接嵌入。拆分时保留有意义的动效，但把每种动效分配给最适合的子页面；完整证据只由一个页面负责，其他页面只做摘要与深链。

## 1. 已审查范围与当前状态

### 1.1 四个原型

- `project.html`：The Living Ring、TNBC 异质性场、五阶段环构建、机制图、证据账本、长文目录。
- `wet-lab.html`、`wet-lab.css`、`wet-lab.js`：五级实验证据路线、实验记录、DBTL、结果发布标准、协议折叠、目录与滚动状态。
- `dry-lab.html`、`dry-lab-paper.css`、`dry-lab-paper.js`：三个模型模块、公式/参数/验证、Wet–Dry 回流、复现包、论文式目录与技术附录。
- `index.html`：Integrated Human Practices 的影响卡、环形时间线、访谈弹窗、决策闭环、方法区和 dossier。

### 1.2 正式 Wiki

正式站点已在 `src/pages.ts` 中定义目标路由：

| 分组       | 已有独立路由                                                                  |
| ---------- | ----------------------------------------------------------------------------- |
| Project    | Description、Engineering、Results、Contribution                               |
| Wet Lab    | Experiments、Notebook、Measurement、Alternative Platform、Safety and Security |
| Dry Lab    | Model、Software、Hardware                                                     |
| Engagement | Entrepreneurship、Human Practices、Education、Inclusivity、Sustainability     |

这些路由通过 `src/containers/App/App.tsx` 自动生成，并统一套用 `Navbar → Header → .container → Footer → BackToTop`。当前 17 个内容组件主要仍是官方要求与灵感链接，尚未承接四个原型的实际结构。

### 1.3 现有原型真正覆盖到哪里

| 原型            | 覆盖充分                      | 只提供种子内容                                                      | 基本未覆盖                      |
| --------------- | ----------------------------- | ------------------------------------------------------------------- | ------------------------------- |
| Project         | Description、部分 Engineering | Results 的证据框架、Contribution 的可复用思路                       | 真实结果、已发布贡献            |
| Wet Lab         | Experiments 的方法框架        | Notebook、Measurement、Engineering、Results、Safety                 | Alternative Platform 的完整论证 |
| Dry Lab         | Model                         | 模型代码的复现要求                                                  | 独立 Software、独立 Hardware    |
| Human Practices | Human Practices               | Education、Inclusivity、Entrepreneurship、Sustainability 的局部材料 | 四个页面各自完整的证据链        |

因此不能按“一张总页平均切成若干段”处理。很多子页面需要新增真实材料，而不是从总页复制文字来填满。

## 2. 关键审查发现与改动方向

#### 信息架构

| Before                                                           | After                                                                                                                      |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 四个原型各自形成一条很长的单页叙事，页面内锚点代替正式子页面。   | 17 个标准 URL 分别回答一个明确问题；原型章节按内容所有权迁移，跨页用摘要和深链连接。                                       |
| Wet Lab 总页同时放实验方法、DBTL、结果模板、测量标准和安全边界。 | 方法归 Experiments，时间记录归 Notebook，测量规范归 Measurement，迭代归 Engineering，真实数据归 Results，风险归 Safety。   |
| Dry Lab 被当作 Model 的同义词。                                  | Model 保留现有手稿；Software 和 Hardware 只有在存在独立、可复用产物时才建立完整叙事。                                      |
| Engagement 实际只有 Integrated Human Practices 总页。            | HP 保留“输入如何改变项目”；Education、Inclusivity、Entrepreneurship、Sustainability 各自建立目标、方法、证据、结果和反思。 |

#### 全站外壳与路由

| Before                                                                                                  | After                                                                                                   |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 每个静态原型自带 topbar、全局导航、阅读进度、返回顶部和 footer。                                        | 正式页面只使用 React Wiki 的 Navbar、Footer 和 BackToTop；页面内部只保留章节目录或局部进度。            |
| `App.tsx` 强制为所有内页添加同一个 `Header` 和 Bootstrap `.container`，不适合全宽机制图与 sticky 章节。 | 增加统一的内页框架，允许 `standard/editorial/immersive` 宽度与自定义 hero，同时保持全站导航和页脚不变。 |
| `pages.ts` 和 `Navbar.tsx` 的 `DROPDOWNS` 各维护一套路由名称与路径。                                    | 路由、导航标签、分组、前后页关系和页面布局元数据由单一配置产生，避免后续拆页时两处漂移。                |
| `App.tsx` 直接读取全局 `location.pathname` 计算标题。                                                   | 使用 React Router 的 location 状态，让站内切换子页面时标题、布局和 active 状态可靠更新。                |
| 移动菜单一次性列出分组入口和全部子页，但固定高度内没有明确滚动容器。                                    | 拆页上线前验证 17 个链接在窄屏和低屏高设备上可滚动、可聚焦且不会被裁切。                                |

#### 视觉系统一致性

| Before                                                                                     | After                                                                                                           |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 原型各自在 `:root` 重定义 paper、ink、wine、teal、radius，色值和圆角与正式主页不完全一致。 | 所有内页继承 `circure-tokens.css`：warm paper、ink、navy、care pink、28/20px panel radius、6px control radius。 |
| Project/HP 的酒红与深青是旧原型主色；主页当前以 navy 与 pink thread 定义结构和连接。       | 将 navy 用于科学结构与深色章节，pink 只表示连接、路径、当前状态与人的影响；coral/gold/blue 只用于数据类别。     |
| 每个原型都有自己的品牌标记和导航视觉。                                                     | 只保留主页共享的 CirCure wordmark、ribbon knot 与 mega-menu；页面特色放在 hero、机制图和证据组件中。            |
| 静态原型使用大量 8–18px 小圆角、局部玻璃感或强卡片阴影。                                   | 正文以编辑型排版、薄规则线、克制表面为主；圆角和阴影只在真正的交互表面使用，科学图板可保留直角出版物语义。      |
| `.hero`、`.topbar`、`.contents`、`.footer`、`.reveal` 等通用类名在多份 CSS 中重复。        | 每个页面使用明确根作用域（如 `.project-page`、`.wetlab-page`），或使用模块化样式，防止导入 React 后互相覆盖。   |

#### 动效、交互与可访问性

| Before                                                                                             | After                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 四个总页都用长滚动承载多种动效；HP 单页同时有横向卡、环形时间线、弹窗和 dossier。                  | 每个子页面只保留一个主导动效，其余交互负责查找、展开或解释；拆页后总滚动长度显著降低。                             |
| 原型脚本用全局 `querySelector` 和永久事件监听，适合独立 HTML，不适合 React SPA。                   | 将进度、scroll spy、reveal 和页面专属滚动效果移到带 ref 与清理函数的 React hook，查询范围限制在当前页面根节点。    |
| `will-change` 在部分固定/长列表元素上长期存在。                                                    | 只在确认存在首帧卡顿的 `transform/opacity/filter` 元素上短时使用，避免大量合成层。                                 |
| 一些桌面导航和局部按钮的可见高度为 32–36px。                                                       | 桌面交互命中区至少 40×40px，触屏至少 44×44px；视觉图标可以保持较小。                                               |
| 现有代码已提供 focus-visible、原生 `details`/`dialog`、passive scroll、rAF 节流和 reduced-motion。 | 这些能力必须保留；拆页后的 reduced-motion 模式不仅停止动画，还必须让所有 sticky/横向内容回到可顺序阅读的静态布局。 |
| 多数原型 reveal 只进入一次，HP/Project 的滚动状态更具方向性。                                      | 解释因果关系的主动画保持可逆；普通内容 reveal 可继续一次性出现，但不应成为每页唯一动效语言。                       |

#### 内容与证据治理

| Before                                                                           | After                                                                                                     |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 大量内容明确标记为 planned、future、awaiting team record 或 placeholder。        | 页面可以先完成结构，但发布前必须用真实构建、数据、日期、样本、图、引用、Registry/GitLab 链接替换。        |
| 同一内容可能同时出现在 Description、Experiments、Engineering 和 Results。        | 建立“唯一内容所有者”：完整证据只在一个页面，其他页面显示结论摘要、状态和锚点链接。                        |
| HP 的日期、引语、角色、evidence code 和图片仍属于原型数据。                      | 只有真实、同意公开、可追踪的材料可以进入正式页面；私人原始记录与公开摘要分层。                            |
| 模型复现代码容易被误当作 Software 页面，环境硬件信息容易被误当作 Hardware 页面。 | 模型代码仍属于 Model 的复现包；Software/Hardware 必须分别证明独立工具或设备的用途、验证、复用和发布状态。 |

## 3. 统一设计思路

### 3.1 保留“同一家族，不同学科”的感觉

所有页面共享：

- warm paper、ink、navy、pink thread；
- editorial serif + system sans + 少量 monospace 元数据；
- 全站 Navbar、Footer、返回顶部、焦点样式和 reduced-motion；
- 统一的 figure、caption、evidence state、章节目录、引用和前后页导航。

四个分组拥有不同的内容语法：

- **Project：Living Ring**——环、模块、设计决策、问题到方案。
- **Wet Lab：Evidence Atlas**——样本、门槛、控制、记录、可复现性。
- **Dry Lab：Model Manuscript**——研究问题、假设、数据、公式、验证、决策。
- **Engagement：Decision Trace**——谁受到影响、听到什么、改变什么、如何回访。

一致性来自 token、排版、导航和证据语法，不来自让 17 个页面都使用同一种卡片和同一种滚动动画。

### 3.2 动效分配原则

1. 一屏只保留一个主要表达性动效。
2. 动效必须解释关系：构建、比较、回流、聚合或验证，而不是持续漂浮。
3. 站点级动效与页面级动效分离；页面不得再创建第二套全局导航和返回顶部。
4. 分页后保留原有“动作动词”：
   - Description：rotate / scatter；
   - Engineering：build / close；
   - Results：reveal / compare；
   - Experiments：gate / unfold；
   - Model：trace / return；
   - Human Practices：listen / gather / return。
5. `prefers-reduced-motion` 下所有内容仍按 DOM 顺序完整可见。

### 3.3 页面内容的统一骨架

不是每页都必须长得一样，但每页至少应回答：

1. 本页负责回答什么问题？
2. 当前结论或产物是什么？
3. 证据、方法和关键控制在哪里？
4. 哪些内容尚未完成或不能主张？
5. 这项工作改变了哪个设计或下一步？
6. 原始记录、代码、协议、引用和关联页面在哪里？

## 4. 17 个页面应该如何填充

### 4.1 Project

| 页面         | 页面任务                                               | 从原型保留                                                                                        | 必须补充                                                                                                          | 推荐主互动                                                  |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Description  | 回答“为什么做、做什么、系统如何工作、当前边界是什么”。 | Living Ring hero、TNBC 异质性场、问题转向、连续机制图、Why TNBC/Why circRNA、简版证据边界、引用。 | 150 词内真实摘要、最终项目目标、实际构建概览、prior work、最终候选/模块名称、通往 Engineering/Results/HP 的入口。 | 环随阅读轻微旋转；异质性场随滚动展开。                      |
| Engineering  | 用真实迭代证明 Design–Build–Test–Learn。               | 五阶段 ring-building、设计 gate、Wet Lab 中的 DBTL 表达方式。                                     | 至少一个已完成循环；每轮版本、失败、数据、Learn、下一设计；HP/Model 如何改变设计。                                | 环按迭代逐步闭合；选择某轮后显示 before/after。             |
| Results      | 集中呈现所有实际结果与诚实解释。                       | evidence ledger 的状态语法、Wet Lab 的 result frame 和发布检查。                                  | 真实图表、样本、单位、n、统计、控制、失败结果、限制、未来工作；按研究问题组织而不是按日期堆叠。                   | 证据 gate 作为目录/筛选；图表本身保持稳定，不做干扰性动画。 |
| Contribution | 说明未来团队能直接复用什么以及如何复用。               | DR–01 决策记录思路、HP Field Kit、协议/证据模板。                                                 | Registry part、协议、数据集、代码、设计准则或 field kit 的正式版本、许可证、仓库、使用示例、已知限制。            | 安静的资源索引与展开说明；不需要长 sticky 动画。            |

### 4.2 Wet Lab

| 页面                 | 页面任务                                                     | 从原型保留                                                                                           | 必须补充                                                                                                                     | 推荐主互动                                                          |
| -------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Experiments          | 让其他团队理解并复现实验目的、设计、材料、步骤和控制。       | 五级 evidence route；construct/circularize/express/present/recognize 的 assay plan；protocol folds。 | 真实 protocol、材料与设备、浓度/体积/时间/温度、偏差、控制、对应 notebook 与结果链接。                                       | Evidence Atlas 门槛图 + 原生协议折叠。                              |
| Notebook             | 提供按时间排序、可追溯的研究记录。                           | sample ID、版本、primary record、decision rule、deviation log 等字段结构。                           | 真实日期、负责人、实验编号、样本 lineage、原始记录、会议与决策、当日结果和下一步。                                           | 可筛选的时间轴/记录表；默认按日期顺序，不复用 HP 的人物环形时间线。 |
| Measurement          | 解释为什么选择这些 readout，以及数据如何校准、归一化和解释。 | proof stack、assay window、controls、result publication checklist。                                  | 单位、检测范围、标准曲线、仪器设置、校准、技术/生物重复、归一化、统计、误差与不确定性。                                      | 可展开的测量链或控制矩阵；避免把结果页面复制过来。                  |
| Alternative Platform | 论证非标准宿主/平台的必要性、可行性与限制。                  | 只可借用 presentation/recognition 和细胞系统的局部实验语法。                                         | 先确认项目是否真的符合该奖项；若符合，补宿主选择、培养条件、平台优势、比较、适配、复现与安全；若不符合，不应用空泛内容凑页。 | 平台比较或 workflow 图；仅在有真实平台时使用。                      |
| Safety and Security  | 将风险识别、设计内缓解和实验操作连成证据链。                 | therapeutic boundary、delivery/viability/no-go 条件、HP 的伦理与过度承诺边界。                       | 生物/化学/物理/信息与误用风险、风险等级、培训、PPE、废弃物、转运、宿主/构建选择、表单与责任人。                              | 风险路径或矩阵；状态变化明确但不做游戏化评分。                      |

### 4.3 Dry Lab

| 页面     | 页面任务                                             | 从原型保留                                                                                        | 必须补充                                                                                                       | 推荐主互动                                                                   |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Model    | 证明模型如何理解、预测或改变项目。                   | 整个 model manuscript：三模型架构、数据与假设、公式、验证、敏感性、Wet–Dry return、复现包和限制。 | 实际数据来源、参数与单位、代码版本、拟合/验证图、失败模型、模型驱动的具体实验决策。                            | Sticky 论文目录、技术附录折叠、模型—实验回流路径。                           |
| Software | 证明一个独立软件工具对用户有用并可运行、检查和扩展。 | 只能复用 Model 的开源与复现标准。                                                                 | 明确用户问题、功能、界面/CLI、输入输出、安装与示例、架构、测试、部署、许可证、GitLab release、限制和用户反馈。 | 真实软件演示或输入—输出示例；没有独立工具时不要把 notebook 包装成 Software。 |
| Hardware | 证明一个实际设备被设计、构建、校准、测试并可复现。   | 可借用 Wet Lab 装置图与 DBTL 语法，但不能把示意图当成成品。                                       | 需求、原理、版本迭代、CAD/电路/BOM、成本、组装、校准、性能、用户测试、安全、源文件与许可证。                   | 爆炸图/工作流程或版本对比；必须由真实设备和数据支撑。                        |

### 4.4 Engagement

| 页面             | 页面任务                                               | 从原型保留                                                                                                              | 必须补充                                                                                                             | 推荐主互动                                                               |
| ---------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Human Practices  | 证明外部输入如何改变项目目的、设计、实验、治理与实施。 | thesis、judge quick view、impact cards、证据时间线、dialog、loop board、decision proof、method/ethics/limits、dossier。 | 真实且获同意的人员、日期、引语、证据链接、至少两个完整 before→signal→decision→artifact→return 案例、冲突和缺失声音。 | 保留影响横向卡与详细记录，但同一屏避免环形时间线和横向滚动同时争夺注意。 |
| Education        | 证明教育活动促成双向学习，而不是活动相册。             | public workshop、问题聚类、public explanation 被修改的材料。                                                            | 受众需求、共同设计、学习目标、活动方案、前后测/质性评价、参与者反馈、团队学到什么、材料下载与复用。                  | 活动旅程或学习反馈对照；HP 页只保留“反馈如何改变项目”的摘要。            |
| Inclusivity      | 证明团队识别并降低了参与科学的障碍。                   | consent tiers、missing voices、privacy、access concerns。                                                               | 目标人群与障碍、可访问性措施、语言/费用/场地/数字无障碍、代表性边界、评价结果和未解决排除。                          | 障碍→措施→结果矩阵；提供可访问的静态阅读方式。                           |
| Entrepreneurship | 证明项目正在围绕真实用户与商业可行性收敛。             | workflow constraints、adoption barrier、implementation concerns。                                                       | 客户/受益者、需求验证、价值主张、竞争/替代方案、MVP、成本、监管/IP、商业模式、访谈证据、风险和下一里程碑。           | 用户工作流或假设验证漏斗；不要把临床愿景写成已商业化。                   |
| Sustainability   | 证明项目针对 SDG 与生命周期影响做了具体取舍。          | access、manufacturing、deployment 与长期影响问题。                                                                      | 选定 SDG 及 target、相关 stakeholder、环境/社会/经济影响、生命周期边界、权衡、指标、合作与改进；明确负面影响。       | SDG→设计决定→指标的追踪图，不做纯图标墙。                                |

## 5. 如何把四个总页面拆成子页面

### 5.1 Project 原型的拆分

| 现有模块                                                 | 主归属页面                     | 处理方式                                                             |
| -------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| Hero / Living Ring / Project summary                     | Description                    | 原样保留核心视觉，文字替换为最终项目摘要与边界。                     |
| DR–01 Observation / Engineering response / Open question | Description；Engineering 深链  | Description 只放一次总决策；Engineering 展示完整版本变化。           |
| TNBC heterogeneity / question shift                      | Description                    | 作为选择项目与选择多表位策略的论证。                                 |
| Five decisions close the loop                            | Engineering                    | 改造成真实 DBTL/版本迭代，不再只是五步概念说明。                     |
| Proposed biological route                                | Description                    | 保留为项目机制总图；各箭头分别链接 Experiments/Measurement/Results。 |
| Evidence ledger                                          | Results 为主；Description 摘要 | Description 只显示 3–4 条状态；Results 承担真实证据和分析。          |
| Long-form Why TNBC / circRNA / construct / boundaries    | Description                    | 收紧重复段落，保留引用与图注。                                       |
| HP next route                                            | Description 与 HP 双向         | 使用正式 `/human-practices` 路由，并链接到具体 HP record。           |

### 5.2 Wet Lab 原型的拆分

| 现有模块                                      | 主归属页面                             | 处理方式                                                    |
| --------------------------------------------- | -------------------------------------- | ----------------------------------------------------------- |
| Five gates overview                           | Experiments                            | 作为实验路线总览，并链接各实验和结果锚点。                  |
| Gate 01–05 的 purpose/method/control          | Experiments                            | 保留实验逻辑，替换真实条件与协议。                          |
| 每个 gate 的实际图与分析                      | Results                                | 不在 Experiments 重复，只回链结果。                         |
| DBTL blocks / engineering cycles              | Engineering                            | 以实际版本和数据替换 blueprint。                            |
| sample ID / primary record / evidence link    | Notebook                               | 形成可追踪记录索引。                                        |
| proof stack / assay window / result checklist | Measurement                            | 形成测量、控制、单位和统计规范。                            |
| protocol library                              | Experiments；Contribution 可列复用入口 | 协议正文归 Experiments，Contribution 只说明复用价值和版本。 |
| boundary / viability / no-go                  | Safety                                 | 与安全表单、风险与缓解措施合并。                            |

### 5.3 Dry Lab 原型的拆分

| 现有模块                              | 主归属页面              | 处理方式                                                           |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------ |
| Abstract / judge brief / architecture | Model                   | 保留论文式入口与快速证据路线。                                     |
| Model I–III                           | Model                   | 每个模型都按 question→data→method→validation→decision→limit 展开。 |
| Wet–Dry iteration                     | Model；Engineering 深链 | Model 讲预测如何变；Engineering 讲整体项目版本如何变。             |
| Reproducibility package               | Model                   | 模型运行代码、环境、种子和复现实例仍属于模型证据。                 |
| Software 页面                         | Software                | 只有存在独立用户工具时另建；不能从复现章节机械切出。               |
| Hardware 页面                         | Hardware                | 只有存在实际设备时另建；当前 model manuscript 没有足够内容。       |

### 5.4 Human Practices 原型的拆分

| 现有模块                                       | 主归属页面                         | 处理方式                                                        |
| ---------------------------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| Hero / judge view / major changes              | Human Practices                    | 保留快速理解层。                                                |
| Impact cards / detailed timeline / dialog      | Human Practices                    | 用真实记录替换，占位 evidence code 必须变成有效锚点或公开文件。 |
| Loop board / decision proof / method / dossier | Human Practices                    | 合并重复层级，优先展示两到三个完整项目级改变。                  |
| Public workshop 与问题聚类                     | Education                          | Education 展示活动设计与学习评价；HP 仅说明反馈改变了什么。     |
| Consent、privacy、missing voices、access       | Inclusivity 为主；HP 摘要          | Inclusivity 展开障碍与措施，HP 保留治理规则和边界。             |
| Workflow、adoption、implementation             | Entrepreneurship                   | 用真实用户和商业假设验证补完整。                                |
| Access、manufacturing、long-term impact        | Sustainability                     | 映射到具体 SDG target、指标与权衡后才能成页。                   |
| `HP_FIELD_KIT.md`                              | Human Practices；Contribution 入口 | HP 解释方法，Contribution 提供可下载、带版本和许可的复用包。    |

## 6. 避免跨页重复的内容所有权规则

建议为正式内容建立稳定编号：

- `DR-xx`：设计决定；
- `EXP-xx`：实验/协议；
- `NB-xx`：Notebook 记录；
- `RES-xx`：结果/图；
- `MOD-xx`：模型；
- `HP-xx`：利益相关者记录；
- `SAFE-xx`：风险与缓解；
- `CON-xx`：贡献产物。

示例：

1. Description 写“我们选择多表位组合”，链接 `DR-03`。
2. Human Practices 记录哪个 stakeholder signal 触发 `DR-03`。
3. Model 记录 `MOD-01` 如何排序候选并支持 `DR-03`。
4. Engineering 展示 `DR-03` 前后的构建版本。
5. Experiments 链接验证该版本的 `EXP-04`。
6. Results 展示 `RES-07`，Notebook 提供原始记录 `NB-2026-xx`。

这样同一个事实不需要在六个页面复制六遍，评委仍能沿证据链前后追踪。

## 7. 推荐的 React 迁移架构

### 7.1 保持简单的文件组织

不建议立刻引入动画库或大型内容系统。可以保留现有 `src/contents/*.tsx` 作为路由入口，只抽取已重复三次以上的稳定能力：

```text
src/
  contents/                 # 17 个正式路由组件，继续使用现有文件名
  components/wiki/
    PageFrame.tsx           # 全站内页外壳与宽度模式
    ReadingOutline.tsx      # 桌面 sticky / 移动折叠目录
    Figure.tsx              # 图号、图注、状态、可访问描述
    EvidenceState.tsx       # rationale / planned / measured / boundary
    NextPage.tsx            # 同分组前后页与跨组深链
  hooks/
    useScrollProgress.ts
    useScrollSpy.ts
    useReveal.ts
  styles/pages/
    project-pages.css
    wetlab-pages.css
    drylab-pages.css
    engagement-pages.css
```

页面专属动画继续留在页面或分组样式中，不要创建一个无法表达不同叙事关系的“万能动画组件”。

### 7.2 `App.tsx` 的目标职责

最终应只负责：

1. 从单一路由配置读取当前页面；
2. 渲染全站 Navbar、页面框架、Footer 和 BackToTop；
3. 根据页面元数据决定标准/编辑/沉浸宽度；
4. 更新 document title；
5. 不替内容页重复创建 hero、container 或局部进度条。

### 7.3 CSS 迁移规则

- 删除四套原型里的局部 `:root` 主题定义，改用正式 token。
- 样式必须挂在页面根类下，避免 `.hero`、`.contents` 等全局污染。
- 不使用 `transition: all`；只声明 opacity、transform、filter、color 等真实需要的属性。
- 保留现有 CSS/WAAPI/原生浏览器能力，不为拆页新增动画依赖。
- 只给内容图像加主题感知的细边界；人物和实验图必须有准确图注、来源和替代文本。
- 最终发布资产迁移到 iGEM 允许的基础设施，并替换本地相对路径。

### 7.4 JavaScript 迁移规则

- 原型中的 rAF 节流、IntersectionObserver、passive scroll 可以保留。
- 所有监听器、observer 和 animation frame 在 React 页面卸载时清理。
- HP 的 `data-*` 访谈内容改成 TypeScript 数据对象，避免同一记录散落在 HTML 属性中。
- 原生 `details` 和 `dialog` 继续优先使用；补齐焦点回退、关闭与 reduced-motion 行为。
- 页面路由切换后恢复到顶端或目标 hash，并正确更新 scroll spy。

## 8. 推荐实施顺序

### 阶段 0：内容冻结与证据清点

- 将四个原型标记为设计快照，不再直接作为交付页扩写。
- 给所有 placeholder、planned、future、awaiting record 建清单。
- 确定哪些页面今年确实有内容，尤其是 Alternative Platform、Software、Hardware。
- 建立证据编号和跨页所有权表。

### 阶段 1：正式内页基础

- 统一路由与 Navbar 数据源。
- 建立 PageFrame、章节目录、Figure、EvidenceState、NextPage。
- 解决自定义 hero/全宽章节与 `App.tsx` 固定 Header/`.container` 的冲突。
- 验证移动菜单能容纳全部子页面。

### 阶段 2：先做三个“锚点页”

1. Description：确定内页如何继承主页风格。
2. Model：验证论文式长文、目录和技术折叠。
3. Human Practices：验证复杂交互、数据驱动内容和弹窗。

这三个页面分别代表 Project、Dry Lab、Engagement 的最复杂形态，能尽早暴露架构问题。

### 阶段 3：拆分证据链页面

- Engineering、Experiments、Measurement、Notebook、Results、Safety。
- 在这一阶段打通 DR/EXP/NB/RES/SAFE 的双向链接。
- 用真实内容替换原型里的示意图和结果框。

### 阶段 4：补齐独立产物与活动页

- Contribution、Education、Inclusivity、Entrepreneurship、Sustainability。
- Alternative Platform、Software、Hardware 按“是否真的适用”决定深度，不能为了导航完整而制造内容。

### 阶段 5：全站验证

- 每个标准 URL 可直接打开和刷新；浏览器前进/后退正常。
- 页面 title、导航 active、前后页、hash 深链正确。
- 桌面、平板、手机、低屏高和 reduced-motion 全部可读。
- 键盘能打开菜单、目录、折叠和 dialog；焦点不会丢失。
- 没有双导航、双返回顶部、重复页头或 CSS token 覆盖。
- 所有图有图号、图注、alt/文本解释；所有结果有单位、控制、重复、统计和限制。
- 所有人物、引语、日期、数据、Registry、GitLab、引用和许可证均真实可追踪。
- 生产构建、lint 和最终 iGEM 资产规则通过。

## 9. 最终建议

1. **保留四个现有原型，不在其中继续做最终内容集成。** 它们是设计与动效参考，不是最终路由层。
2. **正式改造从 `src/` 开始。** 先建立适合独立内页的外壳，再迁移内容。
3. **按内容所有权拆，不按视觉段落平均拆。** Wet Lab 的一段可能归 Engineering、Measurement 或 Safety；HP 的一段可能归 Education 或 Inclusivity。
4. **动效不删除，但重新分配。** 每页保留一个与科学或决策关系相符的主动效，其余交互服务于阅读。
5. **主页风格是最终裁判。** 内页使用正式 navy/pink/paper token、共享导航与 ribbon 语义；旧原型的 wine/teal 只作为迁移参考。
6. **没有真实产物就不要制造“完整页面”。** Software、Hardware、Alternative Platform 以及所有结果/贡献必须由真实证据决定内容深度。
7. **优先建立跨页证据链。** 对评委而言，能从 stakeholder → decision → model/experiment → result → contribution 追踪，比任何一个超长总页面更有说服力。

---

本方案的核心不是把四个长页面切碎，而是把它们重组为一套可审阅、可追踪、可复用的 Wiki：每个页面职责单一，但全站仍讲同一个 CirCure 故事。
