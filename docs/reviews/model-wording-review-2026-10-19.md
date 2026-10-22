# Model 表述核对清单

核对日期：2026-10-19。按用户最新要求，Model 页面继续忠实展示文案集里的 Model 原文。以下是供人工核稿的差异清单，本轮未据此改写 Model、Design、Results 或 Sustainability 正文。此前已确认的方法/ipTM 修正继续保留，Table 26、27 正常展示。

## 页面之间的差异

以下包含数值冲突、版本状态不同，以及证据范围容易被混同的表述；不代表每一项都能简单判定其中一页错误。

| 项目 | Model 原文 | 其他页面原文 | 待核对点 |
| --- | --- | --- | --- |
| 候选表位与最终构建 | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L27>) 称整个疫苗构建建立在通过筛选的 15 条表位上；[AEIP 末尾](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1181>) 仍写“将选择子集、将构建最终疫苗”。 | [Design 开头](<../../文案集/wetlab/design/CirCure_Design.md?plain=1#L9>)、[Results 开头](<../../文案集/project/results/3.3%20Results.md?plain=1#L5>) 写的是已经完成：15 条计算候选 → 13 个单表位构建 → 8 表位 Combined。 | 区分计算候选、实验筛选库和最终构建，并核对完成时态。 |
| “88% 患者覆盖”的范围 | [Overview](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L59>) 使用 “cover 88% of patients”；[方法](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L553>) 实际定义为 101/115 病例至少一个基因满足 mRNA/扩增规则。 | [Design](<../../文案集/wetlab/design/CirCure_Design.md?plain=1#L67>) 和 [Results](<../../文案集/project/results/3.3%20Results.md?plain=1#L486>) 明确：四抗原不等于扩大 HLA 人群覆盖，当前设计仍受 HLA-A*02:01 限制。 | 基因层面的病例覆盖与疫苗适用人群是不同指标；摘要目前容易混读。 |
| CD8 T 细胞识别对象 | [AEIP 定位评分](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L113>) 将胞内蛋白需要加工/MHC 呈递与膜蛋白并列区分；[组织学结论](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L656>) 称膜定位支持疫苗中的免疫识别可及性。 | [Design](<../../文案集/wetlab/design/CirCure_Design.md?plain=1#L75>) 明确写 CD8 T 细胞识别的是 MHC-I 上的短肽。 | 膜蛋白作为抗体靶点的可及性，与其肽段能否被 CD8 T 细胞识别，不是同一证据。 |
| 淋巴递送比例 | [Module 2](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1480>) 为 f_lymph ∈ [0.005, 0.60] 的宽结构假设，并明确不是产品实测范围。 | [Results §7.3](<../../文案集/project/results/3.3%20Results.md?plain=1#L806>) 写固定 40%，据此称每次约 4 μg 到达淋巴相关区室。 | 固定中心值与完整扫描先验不同；Results 的 4 μg 不能代表全部抽样情景。 |
| RNA 持续性参数 | [Module 3](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1608>) 引用 80/116 h 的蛋白产出持续性，采用 d_R = 0.12–0.35 day⁻¹，并明确不是纯 RNA 分子半衰期或产品匹配的体内测量。 | [Results](<../../文案集/project/results/3.3%20Results.md?plain=1#L808>) 写 circRNA 半衰期约 48 h、线性 mRNA 约 6 h。 | 数值、测量对象和体内外适用范围均不同。 |
| 基准肿瘤增长结构及来源 | [Module 5](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1710>)、[增长公式](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1762>) 使用指数–线性模型，参数来自 LM2-4 LUC⁺/SCID 外部系统。 | [Results](<../../文案集/project/results/3.3%20Results.md?plain=1#L820>) 称基准为 Gompertz；[局限](<../../文案集/project/results/3.3%20Results.md?plain=1#L864>) 称增长参数来自 4T1 文献。 | 基准模型形式与参数来源均不一致。 |
| 冻结预测的中央值 | [Module 5](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1738>) 的 10.2 μg 处理组可观测体积中位数是 46.85 mm³；[动物对照](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2226>) 未处理组为 1103.58 mm³。 | [Results §7.5](<../../文案集/project/results/3.3%20Results.md?plain=1#L850>) 使用处理组约 80、对照约 200 mm³，比例约 0.40。 | 同一组冻结预测出现不同版本的中央值；另需区分成对潜在负荷比与两组可观测体积的比值。 |
| 敏感性排序和数值 | [Module 7](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2033>) 的肿瘤负荷主要因素是 γ_ET、q_scale、f_lymph，总效应均值约 0.35、0.34、0.27。 | [Results §7.4](<../../文案集/project/results/3.3%20Results.md?plain=1#L840>) 写肿瘤增长与杀伤参数合计 >50%，淋巴递送约 15%，RNA 半衰期约 10%。 | 参数集、输出和灵敏度定义需要核准；不能当作同一次分析的同一结论。 |
| 替代增长结构下的稳健性 | [Module 5](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1746>) 指出 logistic 情景的效力通过率 0.7793 低于 0.80，因此不能称同一剂量对全部结构都稳健。 | [Results](<../../文案集/project/results/3.3%20Results.md?plain=1#L844>) 称 10.2 μg 建议对这些结构变化稳健。 | 剂量排序相近与能否跨过联合筛选门槛，结论强度不同。 |
| 实际给药方案是否一致 | [Model 动物对照](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2216>) 写 D0/7/14/21/28；[Results 实验设计](<../../文案集/project/results/3.3%20Results.md?plain=1#L1099>) 同样写这五次给药、D35 终点。 | [Results §7.5](<../../文案集/project/results/3.3%20Results.md?plain=1#L860>)、[Mismatch sources](<../../文案集/project/results/3.3%20Results.md?plain=1#L864>) 却称实际采用修改方案、时序没有完全对齐。 | 文中所列给药日一致；若确有其他时序差异，需要原始记录说明。 |
| 动物结果是否证明预期表位机制 | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L27>) 将结构筛选后的 pMHC 与后续动物抑瘤相连；[机制消融](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1662>) 为关闭抗原/适应性通路后归零的模型内部检查。 | [Results §9 开头](<../../文案集/project/results/3.3%20Results.md?plain=1#L1038>) 明确野生型 BALB/c 的 H-2d 与人 HLA-A*02:01 不匹配，动物结果只能作为平台概念验证，不能解释为预期 HLA 限制性 CTL 机制已获证明。 | 计算结构、模型内部逻辑与动物机制验证需要分开理解。 |
| 模型是否实际指导本次动物剂量 | [Dry and Wet Lab Integration](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2169>) 明确：是否采纳模型建议，需要同时期决策和给药记录。 | [Results](<../../文案集/project/results/3.3%20Results.md?plain=1#L798>) 将实际 10.0 μg 解释为依据 10.0/10.2 的模型差异与操作精度作出的选择。 | 数学建议与历史决策因果不同，需以记录核实。 |

Sustainability 当前页面中 SDG 4 总分 3.819 与 Model 的四舍五入值 3.82 一致，没有把这一舍入差异列为冲突。17 个网络目标与 10 个 Set–Develop–Grow 目标属于不同范围，也不当作矛盾。

## Model 原文内部另需核准的地方

这些问题同样只记录，页面继续按原文展示。

| 项目 | 原文位置及差异 |
| --- | --- |
| Module 4 两组方程相反 | [主公式](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1644>) 为 v(S)=1/[1+(αS/E50)^h]，E 的生成项含 t_fold·P/(K_P+P)·(1−E)/(1+X)；[展开公式](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1676>) 却为 v(S)=1+(αS/E50)^h，E 的几个因子也改成了相反的分式。两式不等价，后者还与后文 [0,1] 不变区间说明冲突。 |
| 参数表数量、成员和敏感性列 | [Table 26](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2282>) 实列 17 行，标题和方法为 16 个结构因素；缺少正文讨论的 k_sc、f_lymph。表中 alpha 的 ST≈0.3544、γ_ET≈0.2884，也与 Module 7 的输出说明/数值不同。Table 26、27 已按用户选择正常展示，未猜改参数。 |
| “94% 的预测不确定性” | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L23>) 作该归因；[Module 7](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2080>) 明确总效应包含交互、无须加和为 1。不能将这些 ST 直接相加后解释成互不重叠的方差占比。 |
| “减少不确定性 3–5 倍” | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L51>) 声称比增加细胞实验更有效；[固定参数情景](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1980>) 实际比较候选网格数 31→50/142/82，并明确“更多通过剂量”和“更窄预测”不同、不能直接视为测量优先级。 |
| CD69 与复合效应增益混用 | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L35>) 将 CD69⁺ fold-gain 写成约 2.76；[Module 1](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1342>) 写活化读数约 1.67，2.76 是活化/IFN-γ/Granzyme B 的几何均值 t_fold。 |
| 相同方案的通过率 | [方案比较正文](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1500>) 按 5/7/10 天列出 0.8145/0.8203/0.7783；[补充说明](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1528>) 又称每周方案重现 834/1024（即 0.814453125），与 7 天正文值不同。 |
| 生长系数的冻结时序 | [Module 5](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1720>) 写增长转移系数向观察到的 PBS 终点调整；[动物比较开头](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2212>) 则写所有参数和预测都在看到动物数据前冻结。需区分先验、事后解释和修订版本。 |
| SST-QN 输入评分算术 | [公式](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2540>) 为 D=3G(0.10A+0.30I+0.10F+0.50R)。[SDG 9](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2550>)、[SDG 4](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2556>) 所列 A=1、I=1、F=0.75、R=1 代入得 2.925，而文中 D=2.550。需核准评分分项还是总分；本轮没有据此重算网络结果。 |
| SST-QN 传播公式 | [幂级数](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2480>) 的 A+αA²+α²A³ 与同一行 ΣαᵏAᵏ 首项不同；正文既称 K=3 截断，也使用无限级数闭式。另行列定义为 i→j，随后使用列向量形式 r=(I−αA)⁻¹u，方向约定需与代码核准。 |
| SST-QN 绿色情景与基线 | [Judging](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L15>) 将 SDG 14/15 都写成 +0.77，而 [Table 28](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2676>) 与 [Table 30](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2827>) 分别为 +0.47/+0.77。两表的 SDG 13 最差情景还分别为 0.06/0.21；[下文](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L2833>) 称三个生态目标均从负转正，但 SDG 13 在两表基线均为正。 |
| 全长抗原、结构证据与单位 | [AEIP](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L705>) 的 “full-length antigens cannot be used directly” 比说明本项目选择短表位更强；[结构段](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L966>) 将 Å² 表面积称为 volume。预测结构几何与实测稳定性/呈递也需区分。 |
| 名称、图号和编辑残留 | 同页出现 Cell2dose/Cell2Dose、AEIP/AEIPV、AlphaFold3/AlphaFold 3；[蛋白组图号](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L417>) 写 Figures 5–8，实际对应 6–9；[UMAP 说明](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L521>) 写 Figure 9，实际图题为 10；[结构数据说明](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L1167>) 写 Figures 15–18，当前对应 17–20；[第 810 行](<../../文案集/drylab/model/5.1%20Model.md?plain=1#L810>) 留有 “.table”。 |

代码公开、哈希冻结、评分审计和外部一致率等声明，本轮没有取得足够的原始运行归档来独立复核，因此未判定真伪，也未替换原文结论。此前未提供真实地址的仓库占位链接继续按已确认决定隐藏。
