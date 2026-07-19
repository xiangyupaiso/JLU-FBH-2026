# CirCure Project 页面调研与设计决策

## 1. 调研目标

为 CirCure 新建独立的 Project Description 页面。页面需要与现有 Integrated Human Practices 页面共享同一视觉语言，但用不同的信息结构解释项目本身：问题、机制、设计选择、验证路径、证据边界与后续页面入口。

## 2. 官方要求与评审视角

### iGEM 官方信息

- iGEM 2026 评审强调：评委会通过 Wiki 上的标准 URL 页面检查奖牌条件，项目组件应被完整记录并以数据支持。[Medal criteria](https://competition.igem.org/judging/medals)
- General Project 评审会关注工程原则、项目是否可能工作、数据是否支持主张、潜在影响、HP 是否改变项目、项目组件是否被清楚记录。[Project awards](https://competition.igem.org/judging/project-prizes)
- Best Wiki 关注五件事：项目目标是否易懂、实验依据是否有说服力、设计是否帮助查找和理解内容、是否能成为未来队伍可复用的长期记录、引用是否完整。[Best Wiki](https://competition.igem.org/judging/special-prizes)
- Project Promotion 的官方叙事框架是：problem、solution、engineering、potential impact；这是 Project 页首屏最适合采用的最小信息集。[Project Promotion Video](https://competition.igem.org/deliverables/project-promotion-video)
- Judging Form 要求标题不超过 15 个词、摘要不超过 150 个词，且准确反映实际完成的工作。因此 Project 页应提供一个可直接复用的短摘要，但必须避免超过现有证据的承诺。[Judging Form](https://competition.igem.org/deliverables/judging-form)

### 对页面设计的直接含义

1. 首屏不能只做氛围，应立即回答“做什么”和“为什么”。
2. 机制图应承担核心解释任务，正文承担论证和引用任务。
3. 设计目标、已完成工作、待验证内容和长期愿景必须视觉区分。
4. Project 页应成为 Design、Engineering、Results、HP 等深层页面的入口，而不是复制这些页面。
5. 评委快速视图和普通读者的故事视图应并存。

## 3. 优秀案例拆解

### McGill 2023 — Proteus（本科生总冠军）

参考：[Project landing page](https://2023.igem.wiki/mcgill/)、[Design](https://2023.igem.wiki/mcgill/design/)

- 先用疾病困境建立紧迫性，再用连续短句和机制图解释系统。
- 用三个明确优势组织记忆点：基因型靶向、焦亡招募免疫、平台模块化。
- “我们证明了什么”与“探索项目其他部分”紧接机制之后，路径非常清楚。
- 可借鉴：强项目命题、分步机制、平台价值、证据入口。
- 不直接复制：沉浸式营销首页形式会削弱 CirCure 现有的编辑型、证据型风格。

### Imperial College 2024 — Project Description

参考：[Project Description](https://2024.igem.wiki/imperial-college/description/)

- 不只写最终方案，也解释团队如何筛选和收敛题目。
- 通过评价标准、文献空白和可行性逐步证明“为什么选择这个项目”。
- 可借鉴：把设计选择写成有依据的决策，而不是事后包装。

### Warsaw 2025 — Project Description

参考：[Project Description](https://2025.igem.wiki/warsaw/description)

- 页面开头用三条简短机制摘要压缩复杂系统。
- 内容路径从动机、疾病、递送问题、靶标特异性，再进入细胞死亡机制和具体工程方案。
- 明确说明前序 iGEM 项目如何影响方案，强化项目在开放科学中的连续性。
- 可借鉴：机制先行、从问题到工程逐层收敛、单独展示 prior work。
- 风险：目录和正文很长；需要更强的层级和折叠设计降低阅读负担。

### TAU-Israel 2025 — Project Description

参考：[Project Description](https://2025.igem.wiki/tau-israel/description)

- 用 “Global Burden → Strategy → Key Players → How it works → Experimental approach → Goals” 形成完整闭环。
- 将短期体外验证和长期临床愿景分开，可信度更高。
- 把 Design–Build–Test–Learn 直接映射到实验路径。
- 可借鉴：系统组件、组合机制、短期目标、长期愿景与工程循环。
- 风险：组件解释非常长；CirCure 应用交互式机制面板减少首屏后的认知负担。

### Leiden 2025 — Project Description

参考：[Project Description](https://2025.igem.wiki/leiden/description)

- Overview 先概括技术、验证方法和潜在平台价值，再展开具体研究。
- 把 HP 影响放入项目概览，而不是把科学与社会责任完全分离。
- 可借鉴：在 Project 页中保留一个清晰的 HP 回链，但不重复 HP 页面内容。

## 4. 归纳出的高质量 Project 页面模式

| 层级 | 读者问题 | 推荐组件 |
| --- | --- | --- |
| 入口 | 你们做什么？ | 项目命题 + 150 词以内摘要 |
| 问题 | 为什么值得做？ | 疾病异质性、治疗缺口、设计约束 |
| 机制 | 系统如何工作？ | 4–6 步系统架构图 |
| 选择 | 为什么是这种技术？ | 设计原则 / 方案比较 |
| 工程 | 怎么验证？ | Design–Build–Test–Learn 或证据矩阵 |
| 可信度 | 哪些已知、哪些未知？ | claim / evidence / status 边界表 |
| 深入 | 去哪里看数据和社会影响？ | Design、Engineering、Results、HP 入口 |
| 长期记录 | 来源是什么？ | 可追踪引用、图注、prior work |

## 5. CirCure 页面方案

### 视觉继承

- 沿用：米白纸张背景、黑色主文字、酒红与深青双色、单像素分隔线、8px 圆角、等宽 kicker、粘性玻璃导航、超大紧凑标题。
- 不沿用：HP 的人物照片卡、时间线和访谈弹窗。这些组件属于“谁改变了项目”的叙事，不适合解释分子系统。

### Project 专属组件

1. **Project thesis hero**：一句项目主张 + 一句证据边界。
2. **Judge quick view**：Challenge / Platform / Design / Current boundary 四栏。
3. **Problem field**：用“单一靶点脆弱性、线性 RNA 持续时间、临床约束”三个问题构建方案必要性。
4. **System architecture**：Select → Encode → Circularize → Deliver → Present，点击步骤更新详细面板。
5. **Design principles**：Breadth、Persistence、Traceability 三个原则。
6. **Evidence ledger**：区分 Design rationale、Planned validation、Not yet claimed。
7. **Project dossier**：粘性章节导航，展开 Need、Platform、Construct、Validation、Boundaries。
8. **Next route**：强回链到 Human Practices，形成双向页面切换。

## 6. 内容风险与后续替换清单

现有本地 HP 页面已明确 CirCure 是面向 TNBC 的多表位 circRNA 疫苗概念，但没有提供真实构建体序列、候选表位、定量模型和实验结果。因此本次页面只陈述架构与验证逻辑：

- 不写虚构疗效数字。
- 不写“已证明安全/有效”。
- 不把计划中的递送、免疫原性或临床实施描述为已完成。
- 真实数据到位后，应替换 evidence ledger、候选筛选说明、构建设计图、实验 readout、引用与 Registry 链接。

## 7. 第二轮视觉调研：为什么第一版不成立

第一版虽然满足信息架构要求，但视觉上采用了常见的“大标题 + 卡片网格 + 五步流程 + 数据表”组合。这些组件可用，却没有将 CirCure 的科学概念转化为页面形式，因此呈现出明显的模板化和 AI 落地页观感。

第二轮通过真实浏览器检查了以下 Best Wiki 获奖或提名页面：

- **Heidelberg 2024 / PICasSO**：低多边形视觉、3D DNA 折叠、Cas staple、PICasSO/DaVinci 命名形成统一的项目世界观。Description 首屏不是复杂交互，但项目概念与图形资产高度一致。
- **Marburg 2024 / Tarakate**：黑底蒲公英实拍构成极强的首屏识别；正文恢复克制的文章布局。视觉亮点集中在一张不可替代的项目图像，而不是平均分配到大量卡片。
- **Patras Medicine 2022 / syn-PNOIA**：肺部影像横幅、医学蓝色调和 serif 标题共同建立诊断项目身份。
- **Leiden 2020 / Rapidemic**：检测盒、病毒、DNA、世界地图等团队自制插画贯穿页面；正文侧栏稳定，插图直接承担解释工作。
- **TU Kaiserslautern 2019**：实验装置现场照片作为首屏，波形分隔与项目色形成连续页面语言。
- **Waseda-Tokyo 2024 / PET TWINS**：像素字、粗线框和双瓶标志形成非常明确的复古工具界面风格。即使具体版式并不复杂，读者也不会把它误认为其他项目。

### 共同模式

1. **先建立项目身份，再组织信息。** 好的 Description 页面首先让人记住项目“长什么样”。
2. **一个强主视觉胜过十个通用组件。** 获奖页面通常把视觉预算集中在 hero、机制图或项目实物上。
3. **科学概念决定图形语法。** DNA 折叠对应折线与空间，蒲公英对应植物摄影，检测工具对应模块化插画。
4. **正文不需要持续表演。** 清晰侧栏、文章宽度、图注和引用足以承载长内容。
5. **真实或团队自制资产降低 AI 感。** 通用渐变、玻璃卡、等距流程和均匀卡片网格会削弱项目真实性。

## 8. CirCure 新方向：The Living Ring

新版不再把 Project 设计成产品落地页，而是把 circRNA 的“环”直接变成页面骨架：

- 首屏使用大型可旋转 RNA 环和表位坐标，标题为 **One ring. Many targets.**
- TNBC 异质性通过不规则“细胞碎片场”呈现，而不是三张问题卡。
- 用被划掉的旧问题与新的设计问题表现团队决策转变。
- 在粘性滚动章节中逐步给环加入表位、翻译入口、连接逻辑和验证门。
- 机制部分采用连续科学图而不是五张独立卡片。
- 证据边界保留，但改造成实验记录式 gate ledger，避免企业仪表盘观感。

视觉上继续使用 HP 的米白、黑色、酒红和深青，但加入更强的纸张编辑感、超大编号、手绘式 SVG 标注和不对称排版。这样既属于同一套 Wiki，又拥有 Project 自己不可替代的识别系统。

## 9. 第三轮调研：从“项目视觉”走向“团队研究记录”

第三轮不再寻找更多炫技组件，而是比较获奖页面如何建立可信度和人工痕迹。

### 新增样本与官方要求

- **iGEM 官方 Project Description 模板**：要求页面清楚、简洁地说明项目与选择原因，记录来源，并用插图解释；尤其建议把章节当作论文部分，做到 concise、accurate、unambiguous。
  参考：[iGEM 2022 Project Description guidance](https://2022.igem.wiki/example/description)
- **Heidelberg 2024 / PICasSO**：Abstract 迅速给出 gap、toolbox、mechanism 和 contribution；正文插图以 Figure 1、Figure 2 连续编号，并在图注中说明组件和作用，而不是仅做氛围装饰。
  参考：[Heidelberg 2024 Description](https://2024.igem.wiki/heidelberg/description)
- **Leiden 2022 / Binanox**：首屏用三个具体技术支柱概括项目；正文大量使用明确单位、范围、图号和文献编号，使页面即使视觉强烈，也仍然像可审阅的研究记录。
  参考：[Leiden 2022 Description](https://2022.igem.wiki/leiden/description)
- **Leiden 2020 / Rapidemic**：团队自制图并不追求统一的“组件卡片”，而是根据检测流程、全球变化和硬件概念分别绘制；图下直接说明图像在论证中的作用和仍在开发的部分。
  参考：[Leiden 2020 Description](https://2020.igem.org/Team:Leiden/Description)

### 当前页面的 AI 感来源

1. **玻璃导航与渐变进度条**：视觉语汇更接近 SaaS landing page，而不是 Wiki 或研究档案。
2. **标题全部超大、超粗、全大写**：所有章节都争夺注意力，失去主次和阅读呼吸。
3. **步骤只有同构文字块**：即使内容不同，形态完全一致，容易产生自动生成模板感。
4. **状态使用圆角胶囊标签**：属于常见仪表盘组件，与实验记录语境不匹配。
5. **文案偏抽象**：traceable、system、design rationale 等词重复出现，但具体的 observation、control、figure 和 unresolved question 不够靠前。
6. **图形缺少出版物语义**：已有 SVG 具备项目特征，但需要图号、版本、比例声明和解释性图注，才能从装饰变成证据载体。

### 第三轮设计规则

1. **Flat over glass**：导航、证据状态和跨页入口使用平面色与单像素规则线，不使用玻璃模糊和营销渐变。
2. **Publication before slogan**：保留一个强标题，其余章节标题降低字重和大写强度；长文使用 serif，元数据使用 monospace。
3. **Every figure has a job**：机制图与环图加入 Figure 编号、版本、Not to scale 和解释性图注。
4. **Different decisions need different marks**：五个设计阶段使用五张不同的手绘线图，而不是重复图标或统一卡片。
5. **Record the unresolved**：用 DR–01 的 Observation / Engineering response / Open question 结构替代概念口号。
6. **Keep evidence visibly provisional**：状态改成实验记录式横线标记，避免“完成度标签”造成结果已完成的错觉。

### 已落实的第三轮修改

- 顶部导航改为贴边纸张式导航，删除 blur、悬浮阴影和圆角容器。
- 进度条改为单一酒红色。
- Hero 图板改为直角网格纸，加入 FIG. 01、REV. 03、NOT TO SCALE。
- Hero 摘要改为具体的设计问题，不再使用 persistent expression 等无法由当前页面支持的暗示性措辞。
- Project thesis 改成 DR–01 设计记录。
- 五个 ring-building 阶段分别加入候选排序、模块序列、闭环验证、递送、呈递/识别草图。
- 机制图加入 Figure 2 工作假设图注。
- Evidence 状态由胶囊 chip 改成实验记录式线性标记。
- HP 跨页入口改为纯酒红平面和环形轮廓，不再使用双色渐变。
- 长文加入文献编号，并统一采用出版物式 serif 正文。
