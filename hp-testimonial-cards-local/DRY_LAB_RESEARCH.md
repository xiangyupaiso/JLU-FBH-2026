# CirCure Dry Lab 页面调研与设计依据

调研日期：2026-07-13

## 1. 调研目标

本次调研不是寻找一个可直接套用的 Dry Lab 模板，而是回答两个问题：

1. 优秀 iGEM Dry Lab / Model 页面如何让评委快速理解模型价值？
2. CirCure 的 Dry Lab 页面如何与现有 Human Practices 页面保持同一视觉语言，同时使用更适合计算与模型内容的页面形式？

## 2. 官方评审要求

iGEM 2026 Best Model 的四个公开评审问题是：

1. 模型或计算方法本身是否令人印象深刻？
2. 模型是否帮助团队理解、预测或设计一个 part、device 或 system？
3. 团队是否使用实验数据或其他相关数据开发、训练或验证模型？
4. 该建模方法是否能为其他团队提供良好范例？

这意味着页面不能只展示公式或软件截图。页面必须建立一条可追踪的证据链：

`Research question → Assumptions / inputs → Method → Validation → Design decision → Reusable output`

来源：

- [iGEM 2026 Special Awards — Best Model](https://competition.igem.org/judging/special-prizes)
- [iGEM 2022 Judge Handbook — Model and Wiki guidance](https://static.igem.org/websites/competition/2022/2022-igem-judge-handbook.pdf)

## 3. 案例观察

### 2022–2025 Best Model 官方结果核对

为了避免只研究“看起来优秀”的页面，本轮先以官方 Special Prizes 结果锁定 Best Model Winner 与 Nominee，再抽取其中具有代表性的页面做结构审计。

| 年份 | 组别 | Winner | Nominees |
| --- | --- | --- | --- |
| 2025 | Undergraduate | Peking | IZJU-China, NJU-China, PekingHSC, SUSTech-BIO |
| 2025 | Overgraduate | Heidelberg | DTU-Denmark, HPI-Potsdam, Munich, TAU-Israel, Toronto |
| 2025 | High School | GreatBay-SCIE | AIS-China, GEMS-Taiwan, HK-Joint-School, Lambert-GA |
| 2024 | Undergraduate | Heidelberg | BNUZH-China, CJUH-JLU-China, Tsinghua, Waseda-Tokyo |
| 2024 | Overgraduate | UToronto | Toulouse-INSA-UPS, UCopenhagen, UniMuenster, WageningenUR |
| 2024 | High School | IEA | City-of-London-UK, GEMS-Taiwan, HK-Joint-School, LINKS-China |
| 2023 | Undergraduate | ZJU-China | AFCM-Egypt, NUS-Singapore, UCAS-China, William-and-Mary |
| 2023 | Overgraduate | Toronto | Heidelberg, Leiden, Sheffield, Toulouse-INSA-UPS |
| 2023 | High School | BJEA-China | BZK-SH, Lambert-GA, LINKS-China, PuiChing-Macau |
| 2022 | Undergraduate | TU-Eindhoven | IISER-Pune2_India, Munich, NMU_China, UTokyo, William_and_Mary |
| 2022 | Overgraduate | TAU_Israel | Leiden, Thessaloniki_Meta, UCopenhagen, UZurich |
| 2022 | High School | GEMS_Taiwan | City_of_London_UK, ICJFLS, Lambert_GA, Seoul_Korea |

官方来源：

- [iGEM 2025 Results — Special Prizes](https://competition.igem.org/results/2025?tab=special-prizes)
- [iGEM 2024 Results — Special Prizes](https://competition.igem.org/results/2024?tab=special-prizes)
- [iGEM 2023 Results — Special Prizes](https://competition.igem.org/results/2023?tab=special-prizes)
- [iGEM 2022 Results — Special Prizes](https://competition.igem.org/results/2022?tab=special-prizes)

### 获奖与提名页面的结构审计

#### Peking 2025 — 多模型论文集

页面不是用统一卡片强行包装不同模型，而是为每个模型重复一套学术论证结构：Background、Assumptions、Mathematical Model / Methods、Parameter Table、Results、Data Sources。页面抽样约有 17,000 词、52 张图片、11 张表，覆盖微球溶解、推进、胃内扩散、黏液穿透、分子动力学、GPCR 通路、蛋白扩散和 SEIR 等多个尺度。

可借鉴：

- 多模型可以共享章节语法，但不必共享同一种组件。
- 参数值、单位、代码变量与来源必须靠近模型正文。
- 每个模型都要有自己的结果与解释，不能把所有结果挤到页面末尾。

来源：[Peking 2025 Model](https://2025.igem.wiki/peking/model/)

#### Heidelberg 2025 — 多尺度数字孪生叙事

页面以 Introduction 定义三个建模目的，再从 de novo binder、亲和力表征、膜上受体二聚、信号通路数学模型一路走到 Model-guided Cell Design。Wet Lab validation 并非独立装饰块，而是直接嵌在相应模型的 Results 下。页面抽样约有 10,000 词、102 张图片、7 张表。

可借鉴：

- 总览图应解释模型之间如何传递输入和决策，而不是只做视觉装饰。
- “Results: Model Predictions” 与 “Results: Wet Lab Validation”相邻，方便评委比较。
- 最后单独总结 model-guided design，回答模型到底改变了什么。

来源：[Heidelberg 2025 Model](https://2025.igem.wiki/heidelberg/model)

#### UToronto 2024 — 生成模型的完整证据链

页面依次呈现 Abstract、Background、Objectives、Dataset Curation、Model Development、Training、Inference、In-silico Validation、Batch Results、Discussion、Limitations。尤其重要的是它保留失败：Batch 1 的候选未工作，Batch 2 更换 tokenizer 与架构，Wet Lab 结果再用于 Batch 3 微调。

可借鉴：

- 数据集与预处理是模型正文，不应藏进“技术细节”。
- 用版本或批次讲工程迭代，比单个最终曲线更可信。
- 失败结果、选择阈值和实验可行性共同构成决策证据。

来源：[UToronto 2024 Model](https://2024.igem.wiki/utoronto/model.html)

#### ZJU-China 2023 — 接近论文的编号体系

页面使用编号章节、编号公式、编号图和长参考文献，把深度学习与中心法则等模型写成连续论文，而不是营销式展示。公式不是孤立视觉元素，其前后都有变量定义、推导和结果解释。

可借鉴：

- 章节、图、表和公式统一编号，便于交叉引用。
- 公式下方必须解释变量、单位和生物学意义。
- 长页面依靠稳定目录和清晰层级，而不是频繁切换交互模式。

来源：[ZJU-China 2023 Model](https://2023.igem.wiki/zju-china/model)

#### TU-Eindhoven 2022 — 主文展开、附录折叠

页面先给 Overview / Methods / Results 阅读入口，再展开 Model structure、Assumptions、Sensitivity Analysis、Validation、Parameter variations、Conclusion。折叠按钮主要用于 References、Abbreviations、Initial conditions、Parameters、Reaction equations 和 Elaborate method。

可借鉴：

- Research question、方法主线、关键结果与结论默认展开。
- 折叠只承担参数全集、推导、缩写、参考文献等“可选深读”内容。
- 灵敏度分析与模型验证是主章节，不应藏在 accordion 中。

来源：[TU-Eindhoven 2022 Model](https://2022.igem.wiki/tu-eindhoven/model)

#### TAU-Israel 2022 与 GEMS-Taiwan 2022 — 两种长文控制策略

TAU-Israel 用页面目录串联回归指标、trigger selection、sequence design、pseudoknot、immune response、assessment metric 和 translation efficiency；GEMS-Taiwan 则先给三个模型总览，再把 MaxEnt、toxin-antitoxin ODE 和经济模型拆到独立子页。

可借鉴：

- 同一证据链上的章节适合单页连续阅读。
- 原理、数据和评估完全不同的模型可拆分子页，但总览页必须解释接口。

来源：

- [TAU-Israel 2022 Model](https://2022.igem.wiki/tau-israel/model)
- [GEMS-Taiwan 2022 Model](https://2022.igem.wiki/gems-taiwan/model)

### KULeuven 2024

页面将 Dry Lab 组织成一个顺序工作流：目标蛋白筛选、基线结合预测、序列优化、优化验证、机器学习。其价值在于每一步都有明确输入和输出，并公开记录工具失效后如何更换方法。

可借鉴：

- 用管线而不是工具列表组织内容。
- 公开失败、替代路径与 pivot。
- 把最终候选如何进入 Wet Lab 写清楚。

来源：[KULeuven 2024 Model](https://2024.igem.wiki/kuleuven/model)

### TokyoTech 2024

页面先给出多个模型的总览，再分别深入 RNA-mMV、表面展示和生物反应器模型。各模型围绕一个独立决策问题，同时说明其对实验优先级、培养条件或规模化的影响。

可借鉴：

- 先用“模型地图”降低长页面认知成本。
- 每个模型首先回答 Purpose，而不是先给公式。
- 让模型结果对应项目预算、实验优先级或实施问题。

来源：[TokyoTech 2024 Model](https://2024.igem.wiki/tokyotech/model/)

### NTHU Taiwan 2024

页面把 Wet Lab 实验数据用于 ODE 拟合，再用模拟数据支持治疗过程与优化策略。其突出特点是模型并非独立章节，而是把实验数据、动力学和优化连接成连续过程。

可借鉴：

- 显式展示 Wet → Dry → Wet 的校准回路。
- 在图表旁同时呈现数据来源、拟合方式和设计结论。
- 将复杂模型拆成读者可理解的分层解释。

来源：[NTHU Taiwan 2024 Model](https://2024.igem.wiki/nthu-taiwan/model/)

### Stanford 2024

页面从单结合位点模型扩展到扩散、ODE 和 Markov 模型，呈现由局部机制到细胞尺度的推理。它还明确记录为什么单一 ODE 不足，并引入随机模型处理个体差异。

可借鉴：

- 用尺度变化解释为什么需要多个模型。
- 把“为什么升级模型”视为工程迭代证据。
- 区分确定性预测、随机性与尚未验证的未来方向。

来源：[Stanford 2024 Model](https://2024.igem.wiki/stanford/model)

### WageningenUR 2024

页面给出模型假设、ODE、参数边界、实验重复、拟合过程和 leakiness 分析。它非常接近评委想看到的完整证据结构：假设可审查、参数有来源、模型用实验数据拟合、结果回答具体设计问题。

可借鉴：

- 假设、参数、单位、来源和不确定性必须可快速查找。
- 实验点与模型曲线应在同一视图比较。
- 敏感性或参数扫描应最终落到设计决策。

来源：[WageningenUR 2024 Model](https://2024.igem.wiki/wageningenur/model)

### Heidelberg 2024

DaVinci 将结构预测、分子动力学和长程 DNA 模拟连接成多尺度数字孪生管线，并把 Wet Lab 结果重新反馈到 linker 和 target-site 设计。页面同时承认模型与实验仅部分一致以及不确定性来源。

可借鉴：

- 多尺度模型需要一个总架构图解释各模块的接口。
- 把模型预测成功与不一致并列展示，可信度更高。
- “模型改变了哪个构建设计”应成为页面最显眼的信息之一。

来源：[Heidelberg 2024 Model](https://2024.igem.wiki/heidelberg/model)

## 4. 归纳出的内容模式

优秀页面普遍包含以下层级：

1. **Abstract before spectacle**：先交代问题、方法、结果状态和贡献，再进入视觉总览。
2. **Model architecture**：用一张总图解释模型数量、接口、尺度与项目角色。
3. **Question-first chapters**：每个模型从设计问题开始，不从工具或公式开始。
4. **Methods as a traceable chain**：数据、预处理、假设、方程、参数和实现可逐项追踪。
5. **Results next to validation**：预测、实验/文献数据、误差和解释出现在同一章节。
6. **Decision record**：明确写出模型保留、淘汰或修改了什么。
7. **Wet–Dry iteration**：用版本或批次展示预测、实验、校准和下一轮设计。
8. **Limitations and reuse**：说明适用边界、代码、数据、环境、版本和复现方式。

### 折叠交互的使用规则

默认展开：Abstract、Research question、Methods overview、关键假设、关键结果、验证、设计决策、局限。

允许折叠：完整推导、参数全集、初始条件、代码映射、补充图、缩写和参考文献详情。

禁止折叠：模型真正影响项目的证据。评委不应为了理解贡献而连续点击多个 accordion。

## 5. CirCure 页面方案

### 保持统一的部分

- 暖纸色背景、深墨色正文、酒红和青绿作为状态色。
- 超大标题、等宽 kicker、细分隔线、克制圆角。
- 1320px 内容宽度、粘性顶部导航、粘性章节目录。
- 先给结论，再给证据；所有交互兼顾键盘和 reduced motion。

### Dry Lab 独有的部分

- 页面主体改为双栏 manuscript：左侧粘性目录，右侧窄列正文。
- 图、表、公式和章节统一编号，支持正文交叉引用。
- 每个模型使用相同的证据顺序，但根据内容选择不同图表形式。
- 使用原生 `details` 承担附录级展开，保持键盘可访问和无脚本可读。
- 删除以滑块驱动的 Scenario Explorer，避免在没有真实数据时制造“可计算”的错觉。

### 页面结构

1. Cover：Modeling CirCure，附文档版本与证据状态。
2. Abstract：研究问题、拟采用方法、当前结果边界和贡献。
3. Model architecture：候选筛选 → circRNA 结构 → 表达/免疫动力学 → 实验决策。
4. Model I：Epitope prioritisation，含数据、评分式、参数与验证计划。
5. Model II：circRNA structural assessment，含结构指标、选择规则与交付物。
6. Model III：Expression and immune dynamics，含 ODE、初值、参数与敏感性计划。
7. Wet–Dry iteration：按轮次记录 input、model decision、wet-lab response 与 revision。
8. Limitations and reproducibility：声明边界、数据/代码槽位、版本和参考文献。

## 6. 内容边界

当前仓库未提供 CirCure 的真实 Dry Lab 数据、公式、参数、代码仓库或验证结果。因此新页面中的技术数字和交互曲线必须明确标注为 **illustrative prototype**，用于验证信息架构和交互，不可当作团队实验结论。正式上线前应逐项替换为团队可引用、可复现的数据。

## 7. 第三轮：Judge-first 优化（2026-07-14）

### 2026 评审机制带来的变化

2026 Best Model 仍使用四个公开问题：方法是否令人印象深刻；是否帮助理解、预测或设计系统；是否使用实验或其他相关数据开发、训练或验证；是否为其他团队提供良好范例。评分采用 1–6 分学术量表。

更重要的是，2026 Gold Medal 不再由独立 Gold 条目直接投票。团队在 Judging Form 中选择的三个 Special Awards 会用于推导 Gold 是否达标。因此，如果 CirCure 把 Best Model 作为 Gold 选择，Model 标准页需要同时承担“奖项竞争”和“Gold 达标证据”两项任务。

官方来源：

- [iGEM 2026 Special Awards — Best Model](https://competition.igem.org/judging/special-prizes)
- [iGEM 2026 Medals — Gold assessment](https://competition.igem.org/judging/medals)
- [iGEM 2026 Judging Form](https://competition.igem.org/deliverables/judging-form)
- [iGEM 2026 Judging Session](https://competition.igem.org/deliverables/judging-session)

### 评委的真实阅读条件

Judge Handbook 要求评委作为 “master generalist” 工作，不能假设每位评委都熟悉具体算法、免疫学或 RNA 结构。评委会在 Judging Session 前查看 Wiki 与 Presentation，现场主要用于追问，而不是第一次理解项目。

因此页面需要两种并行阅读路径：

1. **30 秒证据路径**：方法 → 设计影响 → 数据验证 → 可复现输出。
2. **完整论文路径**：研究问题 → 数据 → 假设 → 方法 → 结果 → 验证 → 决策 → 局限。

### 新增案例观察

#### GreatBay-SCIE 2025

页面在 Abstract 之前放置 Key Success，直接给出酶活性、设计变体数量、计算筛选和 Wet Lab 测试，并紧接一张 model-guided design 总图。它没有要求评委先阅读完整方法才知道团队完成了什么。

来源：[GreatBay-SCIE 2025 Model](https://2025.igem.wiki/greatbay-scie/model)

#### Heidelberg 2025

页面开头直接说明计算流程降低实验成本、binder 已被 Wet Lab 验证，以及数学模型如何优化 circuit design。详细方法随后展开。这种顺序把贡献、证据和项目影响放在同一屏语义中。

来源：[Heidelberg 2025 Model](https://2025.igem.wiki/heidelberg/model)

### 第三轮设计决定

- 将原本泛化的 Q1–Q4 提示改为可点击的 rubric-to-evidence map。
- 增加 30 秒 Judge brief，并明确当前证据状态。
- 增加 claim-to-evidence matrix，强制每项目标 claim 对应模型输出、独立验证和项目后果。
- 每个模型统一增加 Result / Validation / Decision / Confidence checkpoint。
- 增加适合 generalist judge 的术语表，但保持为可选展开内容。
- 将无效 `href="#"` 替换为非链接状态标签，避免产生虚假可用性。
- 增加 student ownership / external contribution 复现槽位。
- 修正重复数据行，避免证据表自身出现质量问题。
