# Model: Judging and SST-QN source revision

# Judging

For your convenience, we briefly outlined how our work meets the iGEM model criteria in the section below\.

### How impressive is the modeling?

Our modeling work spans **three complementary computational frameworks** that together form an **integrated decision\-support system** for rational vaccine design, dosing optimization, and sustainability assessment\.

**Antigen\-Epitope Integration Pipeline \(AEIP\)** tackles the dual challenge of **antigen selection and epitope refinement** through systematic integration of **four orthogonal data sources**\. We processed **quantitative proteomics from 154 TNBC patients** across two independent cohorts, **single\-cell transcriptomics from 39,324 quality\-controlled cells**, **genomic profiling of 115 TCGA cases**, and **AlphaFold3 structural modeling of 85 peptide\-MHC complexes** \(see AEIP data integration\)\.The pipeline filtered **1,838 candidate epitopes to 15 HLA\-A\*02:01\-restricted sequences** using NetMHCpan binding prediction, IEDB immunogenicity scoring, and structural checks of hydrogen\-bond networks and F\-pocket engagement\. These checks allowed us to assess the peptide–MHC binding geometry directly\.

**A Cell\-Informed Mechanistic Model for Tumor Vaccine Dose Exploration（Cell2Dose）** represents an exceptionally ambitious **multi\-scale integration** connecting cell\-based assays to animal dosing recommendations\. This mechanistic model comprises **seven integrated modules** spanning the molecular \(LNP delivery and RNA stability\), cellular \(DC maturation and T\-cell activation\), tissue \(lymph node dynamics\), and organismal \(35\-day tumor growth kinetics\) scales\. The model uses **Bayesian calibration**, **14\-state ordinary differential equations**, and **Latin Hypercube Sampling** across 1,024 parameter draws to propagate uncertainty through **301 dose scenarios** \(see Cell2Dose methodology\)\. The model links in vitro measurements to in vivo outcomes through a sequence of mechanistic steps\.

**SDG Synergy–Trade\-off Quantification Network \(SST\-QN\)** first explores **how all 17 SDGs may influence one another in a general, project\-independent context**\. It then applies this network to **CirCure**, a circRNA vaccine for triple\-negative breast cancer, to identify the goals most relevant to the project and assess how CirCure’s actions may interact with other goals under its implementation conditions\. Applying SST\-QN, we identified documented contributions linked to health, education, innovation, responsible consumption, and partnerships, and mapped pathways to broader social and economic goals\. Scenario analysis showed how different implementation conditions could shape CirCure’s contributions across multiple SDGs, making its broader sustainability impacts visible\.

Together, these three models establish CirCure as a project grounded in **computational rigor**: **AEIP tells us what to deliver, Cell2Dose tells us how much to dose, and SST\-QN maps CirCure’s contributions across the SDGs\.**

### Did the model help the team understand a part, device, or system?

Yes—our models transformed abstract data into **actionable design decisions** at multiple levels\.

AEIP's **four\-dimensional scoring framework** resolved conflicting literature guidance by ranking 40\+ candidate antigens across localization, tumor specificity, prognostic significance, and therapeutic validation, identifying **TROP2, B7\-H4, Nectin\-4, and LIV\-1** as top candidates\. TCGA genomic profiling then showed that this four\-antigen panel covered **88%** of cases \(101/115\) when a case counted if at least one gene had mRNA z\-score ≥ 0\.5 or high\-level amplification\.Critically, **cross\-modal validation** through proteomics confirmed that all four antigens display **tumor\-enriched protein abundance** \(fold changes **1\.14–18\.25**, all **FDR \< 0\.05**\)\. These results support the presence and tumor\-enriched abundance of the selected antigens, providing our wet lab team with the confidence to proceed\.

These results support the presence and tumor\-enriched abundance of the selected antigens, supporting their prioritization for downstream experimental testing\.

Before using Cell2Dose, we had cell\-viability curves but no systematic basis for selecting an animal dose\. Cell2Dose used the calibrated cell\-response data to evaluate **301 candidate doses** against the model’s joint\-pass criteria\. The scan identified **10\.2 μg per injection** as having the highest joint\-pass fraction \(**0\.8145**\), with **9\.4–12\.6 μg** as the candidate range\. These results provided a quantitative basis for selecting the dose and range for subsequent experiments\.

Binding\-affinity and IEDB pMHC immunogenicity filters reduced 1,838 candidate peptides to 51 before topology review and structural assessment\.\. **AlphaFold3 structural validation** showed that two high\-confidence peptides \($pTM=0.933,\;0.960$\) did not meet the geometric criteria because their F\-pocket burial was insufficient\.This taught us that **confidence metrics alone are insufficient**; explicit structural geometry must be validated\. The **15 candidate epitopes retained after AEIP screening** provided the starting dataset for subsequent **wet\-lab screening** and **circRNA construct design**\. \(see epitope screening and structural validation\)\.

The **SST\-QN** helped the team understand CirCure as part of a wider sustainability system\. By combining **four\-dimensional evidence scoring** with **20 directed project relationships**, it showed how documented contributions to **SDGs 3, 4, 9, 12 and 17** connect to broader outcomes, including **poverty reduction and decent work** under future implementation conditions\. Scenario analysis also revealed how these connections can create **cross\-goal synergies and trade\-offs**, helping the team identify priorities for access, employment, materials and resource tracking\.

### Did the team use measurements of a part, device, or system to develop the model?

Yes, we used **experimental data** and **project evidence** for our models\.

**Cell2Dose calibration:** We used **CCK8 viability assays** \(5 doses × 4 replicates = **20 observations**\) and **cytotoxicity killing assays** \(blank and combined groups with 3 replicates each\) to calibrate dose\-response curves via **Bayesian inference**\. **DC activation** \(CD80⁺CD86⁺ fold\-gain ≈ **2\.16**\) and **T\-cell activation** \(CD69⁺ fold\-gain ≈ **2\.76**\) readouts from our wet lab experiments directly parameterized **immune amplification modules**\. For parameters unavailable from our experiments, we used **literature\-sourced values with explicit provenance** Benzekry et al\. \(2014\) for growth kinetics and flagged these as **transfer assumptions requiring validation**\. Animal tumor measurements \(**PBS mean, 233\.64 mm³; vaccine mean, 24\.2 mm³**\) were **withheld from calibration** and used to evaluate frozen predictions\. For the untreated group, the predicted median tumor volume \(**1,103\.58 mm³**\) was **4\.7 times the observed PBS mean**, and we honestly reported this in our discussion, prioritizing **transparency over false validation** \(see experimental calibration and validation\)\.

**AEIP multi\-omics integration:** We processed **two independent proteomic cohorts** \(PXD024322: **88 tumors vs 38 normals** across 38 TMT batches; PXD028102: **66 patient\-matched pairs**\) yielding **tumor\-enriched fold changes** for all four candidate antigens\. **Single\-cell RNA\-seq** \(GSE176078: **39,324 cells from 10 TNBC patients**\) measured detection rates in malignant vs non\-malignant compartments, showing that **81\.4% of malignant cells** express at least one of our four genes\. **TCGA genomic data** \(115 cases\) quantified individual gene reach \(4%–79%\) and **panel reach \(88%\)**\. **NetMHCpan binding predictions** were trained on **\>850,000 experimental peptide\-MHC measurements** from IEDB\. **AlphaFold3 structural coordinates** provided measurable geometric features including **hydrogen\-bond distances, solvent\-accessible surface areas, and F\-pocket fill ratios**—enabling rejection of two candidates based on **explicit structural defects** rather than subjective assessment\.

**SST\-QN project scoring and network analysis:** We developed a scoring framework to **quantify the project’s contributions** to the SDGs\. First, we incorporated CirCure’s specific actions and available evidence into the framework and scored its direct contributions across four dimensions: Alignment with the target and **mechanism \(A\)**, **Implementation and outputs \(I\)**, **Feedback incorporated into decisions \(F\)**, and **Evidence traceability \(R\)**\. These scores formed the initial contribution vector for the network model\. We then propagated this vector through the 20 registered directed project relationships in the SST\-QN under** realistic **scenario conditions\. This allowed us to assess how changes in the SDGs **directly affected** by CirCure could propagate through the network and influence the modeled indices of other SDGs\.

### Does the modeling approach provide a good example for others?

Yes—our modeling frameworks are designed for **modularity, transparency, and extensibility**, making them **strong templates** for future iGEM teams\.

**Reusable architecture:** Cell2Dose's **seven\-module structure** is **generalizable beyond mRNA vaccines**\. This means that teams can swap modules for DNA expression, CAR\-T expansion, or bacterial clearance **without rebuilding the entire chain**\. AEIP's **four\-stage pipeline** is **disease\-agnostic**, making it applicable to melanoma, glioblastoma, or hepatocellular carcinoma by substituting datasets and HLA alleles\. **SST\-QN** provides a reusable scoring rubric and finite\-path engine; each team can register its assessment boundary, evidence base, project relationships, and calculation parameters\.

**Honest uncertainty quantification:** Most models hide uncertainty, but we make it **central**\. Cell2Dose's **1,024 parameter draws** produce wide prediction intervals, and AEIP acknowledges that two peptides failed structural validation despite high confidence scores\. **SST\-QN** calculates direct, one\-step, and multi\-step contributions from documented direct scores and registered project relationships\.

**Exemplary documentation:** We provide **complete codebases with verification scripts**, parameter registries linking values to sources, public dataset accessions, software versions, and numerical thresholds for filtering steps\. For **SST\-QN**, the reproducibility package includes frozen input files, full\-precision results, path ledgers, calculation\-configuration records, sensitivity ranges, and arithmetic and graph checks\. This transparency allows teams to **reproduce our analysis, critically evaluate our choices, or adapt our methods** to their own systems\.

**Integration with experimental design:** Our models **guide future experiments**\. Cell2Dose's **sensitivity analysis** identifies **high\-information measurements** that would reduce uncertainty more effectively than additional cell assays\. AEIP's **structural validation workflow** provides **allele\-independent geometric criteria** applicable to any peptide\-MHC complex\. **SST\-QN** uses parameter\-sensitivity comparisons to show how relationship evidence and calculation settings affect cross\-goal contributions, guiding follow\-up evidence collection on access and resource use\.

**Community impact:** Together, our three models demonstrate that computational work in iGEM can be both **rigorous and practical**, balancing mechanistic depth with uncertainty quantification, multi\-omics integration with transparent limitations, and sustainability assessment with explicit scoring\. Future teams can use **Cell2Dose** for dose optimization, **AEIP** for rational vaccine design, and **SST\-QN** for cross\-goal contribution assessment\.

# SST\-QN

The **17 Sustainable Development Goals \(SDGs\)** are interconnected: progress toward one can support or constrain others \(Le Blanc, 2015; United Nations, 2015\)\. To help iGEM teams systematically understand and visualize these relationships, we developed the **SDG Synergy–Trade\-off Quantification Network \(SST\-QN\)**, a quantitative framework that first explores **how the 17 SDGs may influence one another in a general, project\-independent context**\. We then considered **CirCure**, a circRNA vaccine for triple\-negative breast cancer, to identify the SDGs most relevant to the project and assess their interactions with other goals in the CirCure project context\.

We combined **stage\-specific evidence scoring** with **directed network analysis**\. We scored direct contributions across four dimensions: Alignment \(10%\), Implementation \(30%\), Feedback \(10%\), and Records \(50%\)\. These scores describe what the project has documented at its registered stage\. We then registered **20 directed project relationships** within the 17\-goal network, drawing on general SDG interaction evidence and project mechanisms\. The direct scores provide the starting vector for one\-step and multi\-step contributions along paths of up to three relationships, with fixed source normalization, attenuation, and no repeated goal\.

CirCure showed direct contribution evidence for **SDGs 3, 4, 9, 12, and 17**\. The three highest composite indices were **SDG 4** \(Quality Education, **3\.819**\), **SDG 9** \(Industry, Innovation and Infrastructure, **3\.435**\), and **SDG 3** \(Good Health and Well\-Being, **3\.227**\)\.

**17项可持续发展目标（SDGs）彼此关联：一个目标的进展可能促进或制约其他目标（Le Blanc, 2015；United Nations, 2015）。为帮助iGEM团队系统地理解并可视化这些关系，我们构建了可持续发展目标协同—权衡量化网络（SST\-QN）。该框架首先在一般且独立于具体项目的背景下，探讨17项SDG如何相互影响。随后，我们结合CirCure（一种针对三阴性乳腺癌的circRNA疫苗）的特点，确定与项目最相关的SDG，并在CirCure项目情境中分析这些目标与其他目标的关系。**

我们将**阶段证据评分**与**有向网络分析**结合起来。直接贡献从四个维度评分：目标与机制贴合（10%）、实施与产出（30%）、反馈进入决策（10%）和记录与评价完备度（50%）。这些分值描述项目在登记阶段已经形成并记录的证据。在17个目标组成的网络中，我们依据一般SDG交互证据和项目机制，登记了**20条项目有向关系**。再以直接分作为起点，采用固定源目标归一尺度与传播衰减，沿不重复经过同一目标、最长三条关系的路径，计算一级和多级贡献。

CirCure在**SDG 3、4、9、12和17**具有直接贡献证据。综合指数最高的三个目标为**SDG 4**（教育，**3\.819**）、**SDG 9**（创新，**3\.435**）和**SDG 3**（健康，**3\.227**）。

https://static\.igem\.wiki/teams/6056/wiki/files/pages/dry\-lab/model/sst\-qn/sst\-qn\-structure\.avif

**Figure 46\.** SST\-QN structure\.

## Inspiration

#### From Single\-Goal Lists to Network Effects

We developed SST\-QN to connect two tasks: mapping interactions among the 17 SDGs and calculating how a project contributes through those interactions\. The general network organizes supportive and constraining relationships between goals\. Applying the network to CirCure then links research, education, resource management, and partnerships to direct scores and cross\-goal pathways\.

我们构建SST\-QN，将两项工作连接起来：梳理17个SDG之间的相互作用，并计算项目通过这些关系形成的贡献。一般网络整理目标之间的促进与制约关系；应用于CirCure时，再将研发、教育、资源管理和合作活动转化为直接评分，并沿目标间的关系计算传播贡献。

In CirCure, **SDG 3 was addressed through our efforts to meet** the health needs of patients with triple\-negative breast cancer; **SDG 9 through our work to translate** biomedical innovations into practice; and **SDG 12 through our support for** the responsible development of medical technologies\. These project activities provide the starting point for the calculation\. The network then links them to further mechanisms, including health translation, manufacturing adoption, employment, resource use, and knowledge sharing\. SST\-QN calculates direct contributions and additional contributions propagated along these pathways\.

#### From General Relationships to Project Evidence

We first organize the general SDG relationships\. Interaction\-rating frameworks describe supportive and constraining mechanisms \(Nilsson et al\., 2016\), and indicator\-based analyses describe associations between outcomes \(Pradhan et al\., 2017\)\. These sources guide the candidate relationship ledger and the general relationship inputs used by SST\-QN\.

我们首先整理一般SDG关系。交互评分框架描述目标间的促进与制约机制（Nilsson et al\., 2016），指标分析描述目标结果之间的关联（Pradhan et al\., 2017）。这些材料为候选关系台账及一般关系输入提供依据。

We then use CirCure's action records, research outputs, educational resources, resource\-management records, and stakeholder feedback to score direct contributions and review the project mechanisms for each relationship\. Each project edge records its source goal, receiving goal, mechanism, and supporting evidence\. The resulting direct vector and relationship scores enter the same path calculation, which separates direct, one\-step, and multi\-step contributions for each receiving goal\.

随后，我们结合CirCure的行动记录、研发产出、教育资源、资源管理记录及相关方反馈，评定直接贡献，并逐项审查关系对应的项目机制。每条项目关系记录源目标、接收目标、作用机制及其支持证据。直接向量与关系分值共同进入路径计算，最后按接收目标汇总直接、一步和多步贡献。

#### Design Principles

SST\-QN follows three connected steps\. First, organize the general relationships among the 17 SDGs by their direction, sign, and classification\. Second, use project records to calculate direct scores and assign contextual relationship scores\. Third, propagate the direct scores along the registered project relationships and sum the direct, one\-step, and multi\-step contributions for each receiving goal\.

SST\-QN按三个相连的步骤计算：首先按方向、正负作用和关系类别整理17个SDG之间的一般关系；随后依据项目记录计算直接分，并确定项目情境下的关系分值；最后沿已登记的项目关系传播直接分，按接收目标汇总直接、一步和多步贡献。

All goals use the same four evidence dimensions\. For each dimension, the assessment records the evidence, the assigned rating, and the reason for that rating\.

所有目标使用同一套四维评分标准，每个维度记录对应证据、评分及取值理由。

- **Alignment:** correspondence between the activity, output, recipients, mechanism, and a specific SDG target\.

- **Implementation and outputs:** delivery of the registered stage tasks and appropriate checks\.

- **Feedback informing decisions:** stakeholder input linked to concrete changes and follow\-up\.

- **Record and assessment completeness:** accessible methods, outputs, assessments, and supporting records\.

Each dimension uses five ratings: 0, 0\.25, 0\.50, 0\.75, and 1\. The weights for Alignment, Implementation, Feedback, and Records are 10%, 30%, 10%, and 50%, respectively\. Their weighted sum forms the direct score described in Core Structure\.

四个评分维度及其对应内容如下。

- **目标与机制贴合：**行动、产出、作用对象及机制与具体SDG目标的对应程度。

- **实施与产出：**登记阶段任务的交付情况及检查情况。

- **反馈进入决策：**相关方意见与具体调整、后续核验的对应情况。

- **记录与评价完备度：**方法、产出、评价及支持记录的可查阅程度。

各维度采用0、0\.25、0\.50、0\.75和1五档评分，权重依次为10%、30%、10%和50%。四维加权结果用于计算Core Structure中的直接分。

## Mathematical Framework

#### Core Structure

SST\-QN represents the 17 SDGs as a directed network\. Each node is a goal, and an edge runs from source goal $i$ to receiving goal $j$\. The general network supplies the candidate relationships\. Project evidence supplies direct scores, while the registered assessment context $\sigma$ identifies the context used to assess project relationships\. The equations below connect these inputs to the contribution received by each goal\.

SST\-QN将17个SDG表示为有向网络：节点代表目标，边从源目标$i$指向接收目标$j$。一般网络提供候选关系，项目证据提供直接评分，登记的评价情境$\sigma$用于界定项目关系的评价范围。下面六组公式将这些输入连接起来，计算每个目标接收的贡献。

**Direct score\.** We combine the four evidence ratings into one starting score for each goal\. Their weights sum to 1; multiplying by 3 expresses the weighted rating on the direct\-score scale, and $G_i$ determines eligibility\.

**直接评分。** 四个证据维度按权重合成为每个目标的起始分。权重之和为1，乘以3后转换为直接评分量表，$G_i$用于判定直接评分资格。

$D_i=3G_i\left(0.10A_i+0.30I_i+0.10F_i+0.50R_i\right),\qquad 0\leq D_i\leq3$

The direct vector $\mathbf{D}$ collects the 17 direct scores in SDG order\. Each path starts with the direct score of its source goal\. Alignment, implementation, feedback, and records are represented by $A_i,I_i,F_i,R_i$, respectively\.

直接向量$\mathbf{D}$按SDG顺序排列17个目标的直接分，每条传播路径从起点目标的直接分出发。$A_i,I_i,F_i,R_i$依次表示目标贴合、实施、反馈和记录的评分。

**Relationship score\.** We combine the general relationship input $P_{ij}$ with the project mechanism score $C_{ij}^{(\sigma)}$\. The blend weight $\eta_{ij}$ controls their relative contributions\. The applicability factor adjusts the blended score to the registered project context, and the relationship inclusion term is applied as recorded in the project input\.

**关系评分。** 一般关系输入$P_{ij}$与项目机制分值$C_{ij}^{(\sigma)}$共同构成关系分，$\eta_{ij}$控制两者的相对权重；适用程度系数将混合分值调整到登记的项目情境，关系纳入项则按项目输入记录参与计算。

$S_{ij}^{(\sigma)}=\varepsilon_{ij}^{(\sigma)}\tau_{ij}^{(\sigma)}\left[(1-\eta_{ij})P_{ij}+\eta_{ij}C_{ij}^{(\sigma)}\right]$

The applicability factor $\tau_{ij}^{(\sigma)}$ scales the blended score to the declared project context\. The relationship inclusion term $\varepsilon_{ij}^{(\sigma)}$ is applied as recorded in the project\-edge input\. The sign of $S_{ij}^{(\sigma)}$ identifies a supportive or constraining contribution, and its magnitude enters the propagation\-weight calculation\.

$\tau_{ij}^{(\sigma)}$按登记的项目情境调整混合分值。关系纳入项$\varepsilon_{ij}^{(\sigma)}$按项目关系输入记录参与计算。$S_{ij}^{(\sigma)}$的正负表示促进或制约方向，其数值大小进入下一步边权重计算。

**Propagation weight\.** We convert each relationship score into the weight applied along a path\. The shared attenuation $\delta$ sets the propagation scale, and $c_i$ normalizes the outgoing scores of source goal $i$\.

**传播权重。** 关系分经过衰减和归一化，转换为路径计算使用的边权重。$\delta$设置传播衰减程度，$c_i$对源目标$i$的出向关系分进行归一化。

$b_{ij}^{(\sigma)}=\frac{\delta S_{ij}^{(\sigma)}}{c_i},\qquad \delta=0.50$

The source scale $c_i$ uses the largest total absolute outgoing score across the registered comparison settings, with a minimum value of 1, and is held fixed for those comparisons\. The resulting $b_{ij}^{(\sigma)}$ determines how the path contribution changes as it crosses this edge\.

$c_i$取登记比较设置中最大的出向关系绝对分值总和，最小取1，并在这些比较中固定使用。得到的$b_{ij}^{(\sigma)}$决定路径贡献经过这条边时如何变化。

**Contribution along a path\.** A path $p=(i_0,\ldots,i_\ell)$ starts at goal $i_0$ and reaches goal $i_\ell$ through $\ell$ edges\. We multiply the starting direct score by the edge weight at every step\.

**路径贡献。** 路径$p=(i_0,\ldots,i_\ell)$从目标$i_0$出发，经过$\ell$条边到达目标$i_\ell$。计算时，从起点直接分出发，依次乘以沿途各边的传播权重。

$v_p=D_{i_0}\prod_{r=0}^{\ell-1}b_{i_ri_{r+1}}^{(\sigma)},\qquad p=(i_0,\ldots,i_\ell),\quad 1\leq\ell\leq K$

This product gives $v_p$, the signed contribution arriving through that route\. The calculation follows registered directed simple paths, with each visited goal appearing once along the route\. The baseline $K=3$ includes routes containing one, two, or three edges\.

乘积$v_p$给出沿该路径到达终点的带符号贡献。计算沿登记的有向简单路径展开，沿途经过的目标各出现一次。基准$K=3$包含一条、两条和三条边的路径。

**One\-step and multi\-step indirect contributions\.** We group all paths arriving at goal $j$ by their edge count\. Summing one\-edge paths gives $I_{1,j}$; summing paths with two through $K$ edges gives $I_{2+,j}$\.

**一步与多步贡献。** 将所有到达目标$j$的路径按边数分组：一条边的路径贡献相加得到$I_{1,j}$，两条至$K$条边的路径贡献相加得到$I_{2+,j}$。

$I_{1,j}=\sum_{p:\,i_\ell=j,\,\ell=1}v_p,\qquad I_{2+,j}=\sum_{p:\,i_\ell=j,\,2\leq\ell\leq K}v_p$

Each sum retains the sign of every path\. This decomposition shows how much arrives through immediate relationships and how much arrives through intermediate goals\. The notation $I_i$ denotes the implementation rating in direct scoring; $I_{1,j}$ and $I_{2+,j}$ denote the two propagated components\.

汇总时保留每条路径的正负号，由此分别看出一步关系和经过中间目标的多步路径带来多少贡献。符号$I_i$用于直接评分中的实施维度，$I_{1,j}$和$I_{2+,j}$用于两类传播贡献。

**Total contribution received by a goal\.** We add goal $j$'s own direct score to the one\-step and multi\-step contributions arriving at it\.

**目标接收的总贡献。** 将目标$j$自身的直接分，与到达该目标的一步和多步贡献相加。

$T_j=D_j+I_{1,j}+I_{2+,j}$

$T_j$ is the composite index for receiving goal $j$ in the registered calculation\. Reporting it with $D_j,I_{1,j},I_{2+,j}$ shows how its value is composed and supports comparisons across goals using the same assessment inputs\.

$T_j$是登记计算中接收目标$j$的综合指数。将它与$D_j,I_{1,j},I_{2+,j}$一起报告，可以看出分值构成，并在相同评价输入下比较各目标。

|Symbols / 符号|Meaning and role / 含义与作用|
|---|---|
|i, j, $\sigma$|Source goal, receiving goal, and registered assessment context\. / 源目标、接收目标与登记的评价情境。|
|$G_i$|Eligibility gate for direct scoring\. / 直接评分的资格门槛。|
|$A_i,I_i,F_i,R_i$|Alignment, implementation, feedback, and records\. Each uses 0, 0\.25, 0\.50, 0\.75, or 1\. / 目标贴合、实施、反馈与记录，均采用五档评分。|
|$P_{ij},C_{ij}^{(\sigma)}$|General relationship input and project mechanism score\. / 一般关系输入与项目机制分值。|
|$\eta_{ij}$|Blend weight assigned to the project mechanism score\. / 混合时分配给项目机制分值的权重。|
|$\tau_{ij}^{(\sigma)},\varepsilon_{ij}^{(\sigma)}$|Applicability factor and relationship inclusion term\. / 适用程度系数与关系纳入项。|
|$c_i,\delta$|Fixed source normalization and propagation attenuation; baseline delta = 0\.50\. / 固定源目标归一尺度与传播衰减系数，基准delta为0\.50。|
|$p,i_0,i_\ell,\ell,K$|Path, starting goal, final goal, edge count, and path\-length limit; baseline K = 3\. / 路径、起点、终点、边数与路径长度上限，基准K为3。|

#### Assessment Boundaries

We begin by recording the assessment period, project stage, activities, recipients, relevant SDG targets, and evidence locations\. This record links each direct score to its project evidence and each registered project relationship to its mechanism and supporting evidence\.

计算前，先登记评价时期、项目阶段、行动、作用对象、相关SDG具体目标及证据位置。这些记录将直接评分与项目证据、项目关系与作用机制及其支持证据相连。

To consider how our actions relate to the social, economic, and ecological dimensions of the SDGs and reduce the chance of overlooking relevant goals, we first group the 17 SDGs by their main analytical focus\. The Social Dimension comprises SDGs 3, 4, 5, 10, 11, and 16, covering health, education, equality, communities, and institutions\. The Economic Dimension comprises SDGs 1, 2, 8, 9, and 17, covering basic livelihoods and food security, employment, innovation, and development partnerships\. The Ecological Dimension comprises SDGs 6, 7, 12, 13, 14, and 15, covering water, energy, resource use, climate, and ecosystems\. The chord diagram \(Figure 47\) organizes the goal nodes so that relationships within and across dimensions can be examined together\. We then classify each directed source\-to\-receiving\-goal relationship as Core \(C\), Exploratory \(E\), Conditional \(±\), or Excluded \(0\), and record its signed relationship score separately\.

为尽可能综合考虑我们的行动与SDG在社会、经济和生态三方面的联系，并减少遗漏相关目标的可能，我们先按主要分析侧重点将17项SDG归入三个维度。社会维度包括SDG 3、4、5、10、11和16，关注健康、教育、平等、社区与制度；经济维度包括SDG 1、2、8、9和17，关注基本生计与粮食保障、就业、创新及发展合作；生态维度包括SDG 6、7、12、13、14和15，关注水、能源、资源使用、气候与生态系统。弦图（Figure 47）按此分组组织目标节点，便于同时查看维度内部及跨维度的联系。随后，再将每一条“源目标—接收目标”有向关系划分为Core（C）、Exploratory（E）、Conditional（±）或Excluded（0），并单独记录其带符号的关系分值。

弦图组件

**Figure 47\.** Chord diagram of the 17 SDGs grouped into Social \(3, 4, 5, 10, 11, 16\), Economic \(1, 2, 8, 9, 17\), and Ecological \(6, 7, 12, 13, 14, 15\) dimensions\.

The classification uses three questions: what direct mechanism connects the two goals, how well the evidence supports that mechanism, and whether its sign changes with implementation conditions\. Each decision is recorded alongside the mechanism description, citation keys, and evidence label in the original relationship ledger\.

分类依据包括三个问题：两个目标之间通过什么直接机制相连，现有证据对该机制的支持程度如何，以及作用的正负方向是否随实施条件变化。每条分类记录都对应原始关系台账中的机制说明、引用来源和证据标签。

**Core \(C\)\.** A well\-supported direct mechanism, supported by literature or an official report together with a mechanism explanation\. The registry labels these entries as literature\+mechanism or official report\+mechanism\. For example, SDG 6 to SDG 3 is Core: safe water, sanitation, handwashing, and wastewater treatment interrupt water\-borne disease transmission and reduce toxic exposure\.

**Core（C，核心关系）。**直接作用机制有充分支持，依据包括文献或官方报告及相应的机制说明。台账使用literature\+mechanism或official report\+mechanism标记这类证据。例如，SDG 6到SDG 3被列为Core：安全饮水、卫生设施、洗手和污水处理能够阻断水传播疾病并减少有毒物质暴露。

**Exploratory \(E\)\.** A plausible direct mechanism with partial evidence and weaker identification of the direct relationship\. The registry labels these entries as mechanism/partial evidence or mechanism/partial country evidence\. For example, SDG 5 to SDG 1 is Exploratory: greater control of resources and more equal representation of women and girls provide a plausible pathway to lower poverty and vulnerability, while the registered evidence supports retaining the relationship for further examination\.

**Exploratory（E，探索关系）。**直接作用机制合理，已有部分证据，但对这一直接关系的识别较弱。台账使用mechanism/partial evidence或mechanism/partial country evidence标记这类证据。例如，SDG 5到SDG 1被列为Exploratory：女性和女孩对资源的控制及更平等的代表权，为减轻贫困和脆弱性提供了合理机制，现有证据支持将其保留为进一步考察的关系。

**Conditional \(±\)\.** A direct mechanism whose sign changes with implementation conditions\. The registry labels these entries as path\-dependent and records positive and negative branches\. For example, SDG 2 to SDG 6 is Conditional: agricultural expansion can increase water withdrawals and nutrient runoff, whereas precision irrigation, nutrient management, and sustainable farming can reverse the direction of the relationship\. The implementation pathway determines which branch applies\.

**Conditional（±，条件关系）。**直接作用机制的正负方向会随实施条件改变。台账将其标记为path\-dependent，并分别记录正向和负向分支。例如，SDG 2到SDG 6被列为Conditional：农业扩张可能增加取水和营养盐径流，精准灌溉、养分管理与可持续耕作则可能改变作用方向。具体采用哪一分支，由实施路径决定。

For pairs recorded as **excluded \(0\)**, the ledger records the exclusion reason, the allowed indirect pathway, and the evidence required to register an independent direct relationship\. Classification is completed first; the subsequent scoring step quantifies the direction and strength of the registered relationships\.

对于记为Excluded（0，排除）的目标对，台账登记排除理由、允许的间接路径，以及建立独立直接关系所需的证据。先完成关系分类，再在后续评分步骤中量化已登记关系的作用方向和强度。

For each of the 17 source goals, the other 16 goals are possible receiving goals\. The general ledger therefore covers 17 × 16 = 272 ordered pairs\. The direction is part of the entry: i to j and j to i are recorded separately\.

17个目标中的每个源目标，都对应其余16个可能的接收目标，因此一般关系台账覆盖17 × 16 = 272个有序目标对。方向是每条记录的一部分：i到j与j到i分别登记。

The existing ledger retains 70 Core, 14 Exploratory, and 15 Conditional pairs, giving 99 classified candidate relationships\. The remaining 173 pairs are recorded as excluded from the general screening set\. These counts describe the general relationship screening that precedes the CirCure project review\.

现有台账保留70对Core、14对Exploratory和15对Conditional关系，合计99对已分类的候选关系；其余173对记录为一般筛选中的排除项。这些数量描述进入CirCure项目审查之前的一般关系筛选结果。

Figure 48 summarizes this classification\. The following Project\-specific Relationships section then reviews the project mechanisms and conditions, leading to the 20 directed CirCure relationships used in the model\.

Figure 48汇总上述分类。接下来的Project\-specific Relationships小节依据项目机制和成立条件审查关系，得到模型使用的20条CirCure有向关系。



组件

**Figure 48****\.** General directed SDG relationship classification across 272 ordered pairs: 70 Core, 14 Exploratory, 15 Conditional, and 173 excluded pairs\. The project calculation separately registers 20 CirCure relationships\. / 272个SDG有序目标对的一般关系分类：70条Core、14条Exploratory、15条Conditional及173个排除项；项目计算另行登记20条CirCure关系。

#### Project\-specific Relationships

The general C/E/± classification supplies candidate relationships\. Project review records the source goal, receiving goal, mechanism, evidence location, and applicability context for each edge\. The CirCure ledger contains 20 project\-specific directed relationships\. The general input and project coding are then combined as follows\.

一般C/E/±分类提供候选关系。项目审查逐条登记源目标、接收目标、作用机制、证据位置和适用情境。CirCure台账包含20条项目有向关系，按下式将一般关系输入与项目编码结合。

##### Project\-context relationship score

$S_{ij}^{(\sigma)}=\varepsilon_{ij}^{(\sigma)}\tau_{ij}^{(\sigma)}[(1-\eta_{ij})P_{ij}+\eta_{ij}C_{ij}^{(\sigma)}]$

Here $i$ is the source goal and $j$ is the receiving goal\. The calculation blends the general relationship input and project mechanism coding, adjusts the combined score for contextual applicability, and applies the relationship inclusion value recorded for the project assessment\. The resulting $S_{ij}^{(\sigma)}$ supplies the signed relationship score for the propagation\-weight calculation\.

其中$i$为源目标，$j$为接收目标。计算融合一般关系输入和项目机制编码，按情境适用程度调整合成分值，并应用项目评价输入中登记的关系纳入值。得到的$S_{ij}^{(\sigma)}$是下一步计算传播权重所需的带符号关系分。

|Parameter / 参数|Source and role / 来源与作用|Assignment / 取值方法|
|---|---|---|
|$P_{ij}$|General directed SDG relationship input from the registered SST\-QN matrix\.<br>来自登记版SST\-QN矩阵的一般有向关系输入。|Read source row i and receiving column j\. Retain the original sign and two\-decimal precision used in this input version\.<br>按源目标i所在行、接收目标j所在列取值，保留本版输入的符号及两位小数精度。|
|$C_{ij}^{(\sigma)}$|Project\-context mechanism coding, tied to the mechanism rationale and project record\.<br>项目情境下的机制编码，对应机制理由和项目记录。|Use a sign for support or constraint and a magnitude of 0, 0\.25, 0\.50, 0\.75, or 1\.00, as described below\.<br>用正负号表示促进或制约，绝对值按下述五档判定。|
|$\eta_{ij}$|Weight assigned to project coding in the blend\.<br>融合时分配给项目编码的权重。|0\.50 when both inputs are available; 1\.00 for a supported new project mechanism with no applicable P\. Registered comparisons use 0\.25 and 0\.75 for the blended edges\.<br>两类输入均可用时取0\.50；有项目依据、缺少适用P的新增机制取1\.00；融合关系另登记0\.25与0\.75作比较。|
|$\tau_{ij}^{(\sigma)}$|Applicability of the relationship to the declared project context\.<br>该关系迁移到声明项目情境的适用程度。|0: inapplicable; 0\.25: weak contextual fit; 0\.50: partial contextual fit; 1\.00: strong contextual fit\.<br>0：不适用；0\.25：情境适配较弱；0\.50：部分适配；1\.00：与记录的项目情境高度适配。|
|$\varepsilon_{ij}^{(\sigma)}$|Relationship inclusion term recorded in the project\-edge input\.<br>关系纳入项按项目关系输入记录。|1 for a registered relationship included in the calculation; 0 when the relationship is outside the assessed input set\.<br>登记关系纳入本次计算时取1；未纳入本次评价输入时取0。|

For $|C_{ij}^{(\sigma)}|$, 0 denotes an evidence\-supported neutral relationship; 0\.25 a weak conceptual mechanism; 0\.50 a plausible mechanism with explicit conditions; 0\.75 a mechanism supported by action or decision records; and 1\.00 a strongly supported mechanism with sufficient verification\. Positive and negative signs indicate supportive and constraining directions\. Each selected tier is stored with its rationale and evidence location\.

$|C_{ij}^{(\sigma)}|$的五档依次为：0表示有依据的中性关系；0\.25表示弱的概念机制；0\.50表示条件明确的合理机制；0\.75表示已有行动或决策记录支持的机制；1\.00表示经过充分验证的强机制。正负号分别表示促进和制约，所选档位与理由、证据位置一并保存。

Project\-edge inputs record the assessment context associated with each mechanism\. For example, the E03\_01 relationship is linked to clinical translation and affordable access\. The edge ledger records the mechanism score, blend weight, applicability, and relationship inclusion value used in the calculation\.

项目关系输入记录各机制对应的评价情境。例如，E03\_01关系对应临床转化和可负担获取。边台账记录计算所用的机制评分、混合权重、适用程度和关系纳入值。

**Worked relationship\.** E09\_04 describes R\&D experience entering reusable teaching materials\. Its recorded inputs are $P_{9,4}=0.59$, $C_{9,4}=0.75$, $\eta_{9,4}=0.50$, and $\tau_{9,4}=1.00$\. The relationship inclusion value in the project\-edge input is $\varepsilon_{9,4}=1$:

**关系复算示例。**E09\_04表示研发经验进入可复用教学材料。台账取$P_{9,4}=0.59$、$C_{9,4}=0.75$、$\eta_{9,4}=0.50$和$\tau_{9,4}=1.00$。项目关系输入中登记的纳入值为$\varepsilon_{9,4}=1$：

$S_{9,4}=1(1.00)[(1-0.50)(0.59)+0.50(0.75)]=0.67$

For the supported new mechanism E03\_09, $\eta=1$, $C=0.75$, and $\tau=1.00$ give $S=0.75$\. Together with the E09\_04 calculation above, these examples show how project\-only coding and blended relationship inputs are carried into the signed propagation calculation\.

有项目依据的新增机制E03\_09取$\eta=1$、$C=0.75$和$\tau=1.00$，得到$S=0.75$。结合上面的E09\_04计算，这两个例子说明项目机制编码及融合关系如何进入带符号的传播计算。



组件

**Figure 49\.** Directed relationship scores from source goal $i$ to receiving goal $j$: general prior $P_{ij}$ and project\-specific score $S_{ij}^{(\sigma)}$ after project\-context adjustment\. / 从源目标$i$到接收目标$j$的有向关系分值：一般先验$P_{ij}$及经项目情境调整后的项目关系分值$S_{ij}^{(\sigma)}$。

#### Scoring System

For each goal, we first connect the implemented action to a specific SDG target, an identifiable output, and its evidence location\. An implemented, in\-scope direct output with a traceable record receives $G_i=1$\. A reviewed contribution that is unimplemented or inapplicable receives $G_i=0$; an unresolved evidence record is kept as NA until reviewed\.

对每个目标，先把已实施行动与具体SDG target、可识别产出和证据位置对应起来。已实施、位于评价范围内且具有可定位记录的直接成果取$G_i=1$；经审查尚未实施或不适用的直接贡献取$G_i=0$；证据尚待核实的记录保留为NA，完成核查后判定。

##### Direct evidence score

$D_i=3G_i(0.10A_i+0.30I_i+0.10F_i+0.50R_i)$

The four ratings answer different questions\. $A_i$ records how the action and output match the target and assessment scope\. $I_i$ records implementation, substantive outputs, and checks appropriate to the registered stage\. $F_i$ records how stakeholder feedback led to decisions and changes\. $R_i$ records whether the methods, outputs, limitations, versions, and supporting materials can be located and reviewed\. Each rating uses the five\-tier rubric below\.

四个评分分别回答不同问题：$A_i$看行动和成果与具体目标及评价范围的贴合程度；$I_i$看登记阶段的实施、实质产出和相应检查；$F_i$看相关方反馈如何进入决策并带来改变；$R_i$看方法、产出、局限、版本与附件能否定位复查。各维度按下表独立判档。

|Tier / 档位|A: Alignment / 目标贴合|I: Implementation / 实施产出|F: Feedback / 反馈决策|R: Records / 记录评价|
|---|---|---|---|---|
|0|No correspondence\.<br>不对应。|Not implemented\.<br>未实施。|No feedback record\.<br>无反馈记录。|No locatable materials\.<br>缺可定位材料。|
|0\.25|Thematic relevance only\.<br>仅主题相关。|Initiated or isolated actions\.<br>启动或零散行动。|Opinions collected\.<br>收集意见。|Overview only\.<br>仅有概述。|
|0\.50|Mechanism explained; scope incomplete\.<br>机制可说明，边界不完整。|Some substantive outputs\.<br>部分实质产出。|Partial responses or changes\.<br>部分响应或改变。|Outputs identifiable; substantial material gaps\.<br>产出可辨，材料缺口明显。|
|0\.75|Mechanism and most scope elements specified\.<br>机制及大部分边界明确。|Core delivery completed; checks or follow\-up incomplete\.<br>核心交付完成，检查或跟踪不完整。|Specific feedback linked to a specific change\.<br>具体意见对应具体改变。|Most methods, outputs, and limitations locatable\.<br>方法、产出及局限大部分可定位。|
|1\.00|Direct output explicitly matches the target; scope fully specified\.<br>直接成果与target明确对应，边界充分。|Main stage tasks completed with appropriate output checks\.<br>主要阶段任务完成，并有适当产出检查。|Follow\-up verification leads to a further decision\.<br>返回核验后再次决策。|Complete evidence package available for appropriate review\.<br>完整证据包可供适当复查。|

The 2026\-10\-17 traceability\-focused method assigns 50% to $R_i$ to emphasize reviewable sources, methods, results, versions, and limitations; 30% to $I_i$ to retain a substantive\-delivery basis; and 10% each to target alignment and feedback\. These shared model\-design weights express the assessment priority and apply to every goal\. Their sum is 1, so the weighted rating remains between 0 and 1; multiplying by 3 gives the 0\-to\-3 direct\-score scale\.

2026年10月17日的严格可追溯型方法将$R_i$权重设为50%，突出来源、方法、结果、版本和局限的可复查性；$I_i$占30%，保持对实质实施和产出的重视；目标贴合与反馈各占10%。这组共同权重体现模型的评价侧重，统一用于所有目标。权重之和为1，四维加权值保持在0至1之间，乘以3后得到0至3的直接分。

For each rating, the assessment ledger retains the tier, evidence location, rationale, and material gap\. Assessors judge each dimension separately and resolve differences against the records\. Implementation is assessed against the registered stage\. Feedback at 0\.75 requires a traceable opinion\-decision\-change link; 1\.00 adds a return check and a further decision\. Repeated descriptions of the same output are consolidated into one achievement record before scoring\.

评分台账逐项保留档位、证据位置、判定理由和材料缺口。评价者分别判断各维度，再根据记录处理分歧。实施维度按登记阶段判断；反馈达到0\.75须能定位“意见—处理决定—具体改变”，达到1\.00还须有返回核验与再次决策。同一成果的重复描述在评分前合并为一条成果记录。

#### Network Propagation

##### Source normalization

$c_i=\max\left(1,\max_{\sigma,\eta}\sum_{j\ne i}\left|S_{ij}^{(\sigma)}(\eta)\right|\right)$

For each source goal $i$, sum the absolute values of its outgoing relationship scores within each registered calculation setting\. Take the largest total across the comparison domain and apply the lower bound of 1 to obtain $c_i$\. Absolute values account for both supportive and constraining relationships, while the lower bound preserves the existing scale of weak outgoing networks\. The same $c_i$ is used throughout the parameter comparisons\.

对每个源目标$i$，分别汇总各登记计算设置下所有出边关系分值的绝对值，并在比较范围内取最大总和；再以1为下限，得到$c_i$。绝对值同时计入促进和制约关系的强度，下限则保留较弱出边网络的原有尺度。参数对照中使用同一$c_i$。

The comparison domain includes the main mixing setting and $\eta=0.25,0.50,0.75$; relationships without an applicable prior $P$ retain $\eta=1$\. Once calculated, $c_i$ stays fixed across the registered relationship settings and the $\eta$, $\delta$, and $K$ comparisons\. This common denominator lets changes in relationship and propagation parameters appear directly in the comparison\. The CirCure calculation gives $c_3=2.56875$, $c_9=2.01125$, and $c_{17}=2.75$; the remaining source scales are 1\.

比较范围包含主混合设定及$\eta=0.25,0.50,0.75$；缺少适用先验$P$的关系仍取$\eta=1$。计算后，$c_i$在登记关系设置及$\eta$、$\delta$和$K$参数对照中保持固定，使关系和传播参数的变化体现在同一分母下。CirCure计算得到$c_3=2.56875$、$c_9=2.01125$和$c_{17}=2.75$，其余源目标的尺度均为1。

The four registered relationships leaving SDG 17 have scores 0\.75, 0\.50, 0\.75, and 0\.75\. Their absolute sum is 2\.75, so $c_{17}=\max(1,2.75)=2.75$\.

SDG 17的四条登记出边分值依次为0\.75、0\.50、0\.75和0\.75，绝对值之和为2\.75，因此$c_{17}=\max(1,2.75)=2.75$。

##### Propagation weight for each edge

$b_{ij}^{(\sigma)}=\frac{\delta S_{ij}^{(\sigma)}}{c_i},\qquad \sum_{j\ne i}|b_{ij}^{(\sigma)}|=\frac{\delta}{c_i}\sum_{j\ne i}|S_{ij}^{(\sigma)}|\leq\delta$

The signed relationship score $S_{ij}^{(\sigma)}$ is converted into the propagation weight $b_{ij}^{(\sigma)}$ by dividing by the source scale $c_i$ and multiplying by the common step attenuation $\delta$\. The sign determines the direction of the numerical contribution, and the magnitude determines the proportion carried through that edge\. Source normalization makes the sum of absolute outgoing weights at most $\delta$\. With the baseline $\delta=0.50$, at most half of a quantity arriving at a source is passed to all its next\-step destinations in absolute terms\.

关系分值$S_{ij}^{(\sigma)}$除以源尺度$c_i$，再乘共同的逐步衰减参数$\delta$，得到传播权重$b_{ij}^{(\sigma)}$。符号决定数值贡献的方向，绝对值决定沿该边传递的比例。源归一化使全部出边权重的绝对值之和至多为$\delta$。基准$\delta=0.50$表示：某个量到达源节点后，传向下一步所有目标的绝对贡献之和至多为该量的一半。

For the relationship $9\to4$, the preceding section gives $S_{9,4}=0.67$\. With $c_9=2.01125$, $b_{9,4}=0.50(0.67)/2.01125\approx0.166563$\. The matrix stores this weight in row 4 and column 9: in general, $B_{ji}=b_{ij}$, so the first\-order response is $\mathbf I_1=B\mathbf D$, with $\mathbf D$ a column vector\.

以前文登记的$9\to4$关系为例，$S_{9,4}=0.67$、$c_9=2.01125$，因此$b_{9,4}=0.50(0.67)/2.01125\approx0.166563$。矩阵将该权重存于第4行、第9列；一般写作$B_{ji}=b_{ij}$，即行对应接收目标、列对应源目标。以列向量$\mathbf D$输入时，一步传导为$\mathbf I_1=B\mathbf D$。

##### Simple paths and path limit

A path is an ordered sequence $p=(i_0,\ldots,i_\ell)$ of distinct goal nodes connected by registered directed relationships\. Its length $\ell$ counts edges\. Starting from each goal with $D_{i_0}>0$, the calculation follows nonzero edge weights, keeps a set of visited nodes, records each new endpoint, and continues until $\ell=K$ or no unvisited destination remains\. Thus $K=3$ includes one\-, two\-, and three\-edge paths, with at most four distinct nodes in one path\.

一条路径是由登记的有向关系连接的互异目标序列$p=(i_0,\ldots,i_\ell)$，长度$\ell$按边数计算。程序从每个$D_{i_0}>0$的目标出发，沿非零边权搜索，保存已访问节点集合，将每个新终点记入路径台账，直至$\ell=K$或没有尚未访问的后续节点。因此，$K=3$涵盖一步、两步和三步路径，一条路径最多包含四个不同节点。

Input preparation checks that each source output can enter its first mechanism and that successive mechanisms share compatible objects, states, and assessment scope\. For the path $17\to9\to3\to1$, the ledger records knowledge reuse, clinical translation, and affordable access across its relationships\. The path product then uses the corresponding relationship weights\.

输入整理时，逐项核查来源成果能否进入首条机制，以及前后机制的对象、状态和评价范围能否衔接。对于路径$17\to9\to3\to1$，台账记录各关系对应的知识复用、临床转化和可负担获取。路径贡献由对应关系权重连乘得到。

##### Contribution along a simple path

$v_p=D_{i_0}\prod_{r=0}^{\ell-1}b_{i_ri_{r+1}}^{(\sigma)}=D_{i_0}\delta^\ell\prod_{r=0}^{\ell-1}\frac{S_{i_ri_{r+1}}^{(\sigma)}}{c_{i_r}}$

The path starts with the direct score of its original source\. Each additional edge multiplies the amount already carried along that path by the next edge weight\. This product describes sequential transmission: every step contributes its sign, relationship strength, source normalization, and one factor of $\delta$\. Intermediate goals retain their own direct scores as separate starting inputs\. The examples below use $\delta=0.50$ and $K=3$\.

路径以最初源目标的直接分起算，每增加一条边，就将本条路径已经传入的量乘以下一条边权。连乘表示逐步传导：每一步都带入该边的符号、关系强度、源归一化尺度和一个$\delta$因子。中间目标自身的直接分作为独立起点另行计算。以下算例采用$\delta=0.50$、$K=3$。

**Two\-step example\.** For $17\to9\to3$, use $D_{17}=1.875$, $S_{17,9}=0.75$, $S_{9,3}=0.375$, $c_{17}=2.75$, and $c_9=2.01125$\. The first edge carries approximately 0\.255682 to SDG 9; extending that same path to SDG 3 gives approximately 0\.023836\. The path ledger identifies it as E17\_09/E09\_03\.

**两步算例。**对$17\to9\to3$，代入$D_{17}=1.875$、$S_{17,9}=0.75$、$S_{9,3}=0.375$、$c_{17}=2.75$和$c_9=2.01125$。第一条边向SDG 9传入约0\.255682，沿同一路径再传至SDG 3得到约0\.023836；其路径台账编号为E17\_09/E09\_03。

$v_{17\to9\to3}=1.875\left(\frac{0.50(0.75)}{2.75}\right)\left(\frac{0.50(0.375)}{2.01125}\right)\approx0.023836$

Extending the route through $3\to1$, where $S_{3,1}=0.355$ and $c_3=2.56875$, gives $v_{17\to9\to3\to1}=v_{17\to9\to3}[0.50(0.355)/2.56875]\approx0.001647$\. The two\-edge path enters the higher\-order response of SDG 3; the three\-edge path enters that of SDG 1\. Calculations retain full precision throughout; these displayed values are rounded\.

继续经$3\to1$传导，使用$S_{3,1}=0.355$和$c_3=2.56875$，得到$v_{17\to9\to3\to1}=v_{17\to9\to3}[0.50(0.355)/2.56875]\approx0.001647$。两步路径计入SDG 3的多步项，三步路径计入SDG 1的多步项；内部计算始终保留完整精度，正文数值按显示位数舍入。

A signed path product retains the sign of each relationship weight\. Positive and negative path contributions are recorded separately and contribute with their signs to the receiving\-goal total\.

路径连乘保留各关系权重的正负号。正、负路径贡献分别记录，并按其符号计入接收目标的合计。

组件（新组件）

**Figure 50\.** Directed relationships used in the CirCure calculation; the baseline calculation uses $\delta=0.50$, default $\eta=0.50$, and a maximum simple\-path length of $K=3$\.

#### Derivation and Implications

##### Group responses by path length

$I_{1,j}=\sum_{p:\,i_\ell=j,\,\ell=1}v_p,\qquad I_{2+,j}=\sum_{p:\,i_\ell=j,\,2\leq\ell\leq K}v_p$

For each receiving goal $j$, collect all eligible paths ending there and group them by edge count\. One\-edge paths contribute to $I_{1,j}$; paths of length 2 through $K$ contribute to $I_{2+,j}$\. Each sum includes paths from all positive\-direct\-score sources and retains every path's sign\. At the baseline $K=3$, the higher\-order response is the sum of the two\-edge and three\-edge subtotals\. The path ledger records source, destination, ordered nodes, edge identifiers, depth, signed contribution, and shared conditions\.

对每个接收目标$j$，汇集所有以它为终点的合格路径，再按边数分组：一条边的路径计入$I_{1,j}$，两条至$K$条边的路径计入$I_{2+,j}$。每组汇总来自全部正直接分起点的路径，并保留各条路径的符号。基准$K=3$时，多步项由两步和三步小计相加得到。路径台账逐条保存起点、终点、有序节点、边编号、长度、带符号贡献和共享条件。

For SDG 3 in the CirCure calculation, the one\-edge routes are $4\to3$, $9\to3$, and $17\to3$, with contributions approximately 0\.347437500, 0\.237725295, and 0\.170454545\. Their sum is $I_{1,3}\approx0.755617341$\. The two\-edge subtotal is approximately 0\.133813045 and the three\-edge subtotal is approximately 0\.012271032, giving $I_{2+,3}\approx0.146084077$\. The previously calculated $17\to9\to3$ path is one entry in that two\-edge subtotal\.

在CirCure计算中，SDG 3的一步来源为$4\to3$、$9\to3$和$17\to3$，贡献分别约为0\.347437500、0\.237725295和0\.170454545，合计$I_{1,3}\approx0.755617341$。两步小计约为0\.133813045，三步小计约为0\.012271032，合计$I_{2+,3}\approx0.146084077$。前述$17\to9\to3$的0\.023836路径贡献是两步小计中的一项。

##### Total index for each receiving goal

$T_j=D_j+I_{1,j}+I_{2+,j}$

The total for receiving goal $j$ adds its own direct score to all one\-step and multi\-step contributions arriving there in the same calculation\. $D_j$ appears once; incoming paths are assigned to their destination\. For SDG 3, the unrounded calculation gives $T_3=3.2267014178414035$, reported as 3\.227\. A goal with $D_j=0$ can still receive signed indirect contributions along registered paths\.

接收目标$j$的合计分，由它自身的直接分与同次计算中到达该目标的一步、多步贡献相加得到。$D_j$计入一次，输入路径按终点归入对应目标。SDG 3的未舍入合计为$T_3=3.2267014178414035$，正文显示为3\.227。$D_j=0$的目标也可沿已登记路径接收带符号的间接贡献。

$T_3=2.325+0.7556173406689644+0.1460840771724391\approx3.227$

To show the contributions behind the net result, let $I_j^{+}$ be the sum of positive path values and $I_j^{-}$ the sum of negative path values, both over paths ending at $j$ with lengths 1 through $K$\. These are subtotals of the same path ledger; $I_j^{-}$ retains its negative sign\.

为展示净值的组成，将终点为$j$、长度为1至$K$的正路径值之和记为$I_j^{+}$，负路径值之和记为$I_j^{-}$。两者均由同一份路径台账分组求和，$I_j^{-}$保留负号。

$I_j^{+}=\sum_{p:\,i_\ell=j,\,1\leq\ell\leq K}\max(v_p,0),\qquad I_j^{-}=\sum_{p:\,i_\ell=j,\,1\leq\ell\leq K}\min(v_p,0)$

$I_{1,j}+I_{2+,j}=I_j^{+}+I_j^{-},\qquad T_j=D_j+I_j^{+}+I_j^{-}$

In exported results, indirect\_positive equals $I_j^{+}$ and indirect\_negative equals $I_j^{-}$\. The positive column includes the direct score, so positive equals $D_j+I_j^{+}$, negative equals $I_j^{-}$, and their sum equals $T_j$\. For SDG 3, the positive\-path subtotal is approximately 0\.901701, the positive column is approximately 3\.226701, and the negative column is zero\. When positive and negative paths both reach a goal, reporting both subtotals shows how they combine into the net result\.

导出结果中，indirect\_positive对应$I_j^{+}$，indirect\_negative对应$I_j^{-}$；positive列已经包含直接分，即$D_j+I_j^{+}$，negative列等于$I_j^{-}$，两列相加即为$T_j$。SDG 3的正路径小计约为0\.901701，positive列约为3\.226701，negative列为0。若同一目标同时接收正、负路径，分别列出两个小计即可说明它们如何形成净值。

## Applying SST\-QN to CirCure

#### Constructing the Intervention Vector

We construct the direct input from the frozen project\-assessment ledger\. Each goal record identifies the SDG target, assessed output, source passages, eligibility G, and four evidence ratings\. The five eligible goals below use the same rubric and weights\. Their A ratings are 1\.00 because the assessment links a defined direct output and project scope to the listed targets; their I, F, and R ratings reflect the recorded stage of delivery, feedback use, and evidence completeness\.

直接输入来自冻结的项目评估台账。每个目标记录具体target、评价成果、来源段落、资格G和四维评分。以下五个符合资格的目标使用同一套判据和权重。其A均取1\.00，因为评估记录已将明确的直接成果及项目范围对应到所列target；I、F和R则按实施阶段、反馈使用及证据完备程度分别判档。

**SDG 3\.** $G_{3}=1,\quad (A_{3},I_{3},F_{3},R_{3})=(1.00,0.75,0.75,0.75),\quad D_{3}=2.325$ Target 3\.4: documented health needs informed research priorities\. Health\-information activities delivered project\-related knowledge, and feedback informed decisions on efficacy, safety, and evaluation\.

**SDG 3。** $G_{3}=1,\quad (A_{3},I_{3},F_{3},R_{3})=(1.00,0.75,0.75,0.75),\quad D_{3}=2.325$ 对应具体目标 3\.4：健康需求记录为研发优先级提供了依据。健康信息活动交付了项目相关知识，反馈也用于疗效、安全和评价决策。

**SDG 4\.** $G_{4}=1,\quad (A_{4},I_{4},F_{4},R_{4})=(1.00,1.00,0.75,0.75),\quad D_{4}=2.550$ Targets 4\.5 and 4\.7: curricula and educational resources were delivered and assessed during project activities\. Feedback from learners and teachers informed adjustments to delivery\.

**SDG 4。** $G_{4}=1,\quad (A_{4},I_{4},F_{4},R_{4})=(1.00,1.00,0.75,0.75),\quad D_{4}=2.550$ 对应具体目标 4\.5 和 4\.7：项目活动完成了课程及教育资源的交付与评价，并依据学习者和教师的反馈调整交付方式。

**SDG 9\.** $G_{9}=1,\quad (A_{9},I_{9},F_{9},R_{9})=(1.00,1.00,0.75,0.75),\quad D_{9}=2.550$ Target 9\.5: research\-platform outputs, functional checks, and computational tools supported the project’s R\&D activities\.

**SDG 9。** $G_{9}=1,\quad (A_{9},I_{9},F_{9},R_{9})=(1.00,1.00,0.75,0.75),\quad D_{9}=2.550$ 对应具体目标 9\.5：科研平台产出、功能检查和计算工具支持了项目研发工作。

**SDG 12\.** $G_{12}=1,\quad (A_{12},I_{12},F_{12},R_{12})=(1.00,0.75,0.75,0.50),\quad D_{12}=1.950$ Targets 12\.2, 12\.4, 12\.5, and 12\.8: project records document resource\-management actions, waste sorting, container reuse, and practical guidance\.

**SDG 12。** $G_{12}=1,\quad (A_{12},I_{12},F_{12},R_{12})=(1.00,0.75,0.75,0.50),\quad D_{12}=1.950$ 对应具体目标 12\.2、12\.4、12\.5 和 12\.8：项目记录涵盖资源管理、废物分类、容器再用和实践指南。

**SDG 17\.** $G_{17}=1,\quad (A_{17},I_{17},F_{17},R_{17})=(1.00,0.75,0.50,0.50),\quad D_{17}=1.875$ Target 17\.16: joint planning, drafting, editing, and integration formed the partnership contribution\. Technical, educational, and resource\-related outputs are assigned mainly to SDGs 9, 4, and 12, respectively\.

**SDG 17。** $G_{17}=1,\quad (A_{17},I_{17},F_{17},R_{17})=(1.00,0.75,0.50,0.50),\quad D_{17}=1.875$ 对应具体目标 17\.16：共同规划、编写、审阅和整合工作构成了伙伴关系方面的贡献。技术、教育和资源相关成果分别主要归入 SDG 9、SDG 4 和 SDG 12。

For the other goals, $G_i=0,\ D_i=0$ in this assessment\. In SDG order, the **direct vector** is $\mathbf D=(0,0,2.325,2.550,0,0,0,0,2.550,0,0,1.950,0,0,0,0,1.875)^\mathsf{T},$ with $\sum_i D_i=11.25.$

#### Key Findings

气泡图

**Figure 51\.** Direct, one\-step, and multi\-step contribution profile in the CirCure assessment \($\delta=0.50$, default $\eta=0.50$, $K=3$\)\.

**Education receives the largest total contribution in the CirCure calculation\.** SDGs 4 and 9 have the same direct score, $D_4=D_9=2.550$\. For SDG 4, the one\-step and multi\-step components are approximately 1\.058 and 0\.211, giving $T_4=3.819$\. For SDG 9, they are approximately 0\.780 and 0\.105, giving $T_9=3.435$\. SDG 3 follows at $T_3=3.227$\. The difference between SDGs 4 and 9 comes from their incoming pathways: health, research, and partnership routes contribute more to education\.

**在CirCure计算中，教育的合计贡献最高。**SDG 4与SDG 9的直接分相同，均为$D_4=D_9=2.550$。SDG 4的一步和多步项约为1\.058和0\.211，得到$T_4=3.819$；SDG 9的两项约为0\.780和0\.105，得到$T_9=3.435$，随后为$T_3=3.227$。SDG 4与9的差异来自入向路径：健康、研发及合作路径向教育传入的贡献更多。

**SDGs 1 and 8 receive indirect contributions through the registered project pathways\.** With $D_1=D_8=0$, their totals come entirely from one\-step and multi\-step paths, giving $T_1=0.222$ and $T_8=0.467$\. SDG 8 has the larger incoming path subtotal\.

**SDG 1和SDG 8通过登记的项目路径接收间接贡献。**两者直接分均为零，即$D_1=D_8=0$，合计完全来自一步和多步路径，分别为$T_1=0.222$和$T_8=0.467$。SDG 8的入向路径小计更大。

#### Network Contribution Summary

The path decomposition separates direct, one\-step, and multi\-step values for receiving goals\. Figure 51 presents a compact view, while Tables 28–30 retain the calculated outputs\.

路径分解分别汇总接收目标的直接、一步和多步贡献。Figure 51展示紧凑视图，Tables 28–30保留相应计算结果。

## Model Verification and Sensitivity Analysis

We verified that the implementation follows the stated scoring and path\-calculation rules, and examined the sensitivity of the results to registered parameter settings\. These checks support computational consistency and describe the stability of the results within the tested settings\. Empirical validation against independently observed SDG outcomes remains future work\.

#### Score Recalculation

We recalculated the frozen inputs with the common weights $(w_A,w_I,w_F,w_R)=(0.10,0.30,0.10,0.50)$\. The five eligible goals reproduce $(D_3,D_4,D_9,D_{12},D_{17})=(2.325,2.550,2.550,1.950,1.875)$\. The recalculated full\-precision results match the saved baseline and sensitivity outputs\.

我们使用共同权重$(w_A,w_I,w_F,w_R)=(0.10,0.30,0.10,0.50)$重新计算冻结输入，五个符合资格目标的直接分复现为$(D_3,D_4,D_9,D_{12},D_{17})=(2.325,2.550,2.550,1.950,1.875)$。重新生成的完整精度结果与保存的基准及敏感性输出一致。

A separate arithmetic check reconstructs the relationship scores and fixed source scales, enumerates simple paths, and groups their values by receiving goal and path length\. It checks all 188 paths in the baseline calculations and every goal row in the baseline and sensitivity calculations, 1,428 goal rows in total\. The maximum absolute difference is below $10^{-12}$\. The check also confirms each positive subtotal, negative subtotal, and total against the path values\.

另行编写的算术核验按公式重建关系分值和固定源尺度，枚举简单路径，再按接收目标及路径长度汇总。核验覆盖基准计算中的188条路径，以及基准和敏感性计算中的全部目标结果行，共1,428行；最大绝对差小于$10^{-12}$。正路径小计、负路径小计和合计也逐项与路径值对应核查。

#### Internal Consistency

The consistency checks follow the model equations\. Every direct score satisfies $0\leq D_j\leq3$\. For each receiving goal, the total equals both the depth\-based decomposition and the signed\-path decomposition:

一致性核验逐项对应模型公式。所有直接分满足$0\leq D_j\leq3$；每个接收目标的合计同时满足按步数分解与按符号分解的等式：

$T_j=D_j+I_{1,j}+I_{2+,j}=D_j+I_j^{+}+I_j^{-}$

The exported positive field equals $D_j+I_j^{+}$, and negative equals $I_j^{-}$; their sum reproduces $T_j$\. Each baseline path contains one to three edges and distinct nodes\. Each source satisfies $\sum_{j\ne i}|b_{ij}|\leq\delta$, with $\delta=0.50$ at baseline, and the same source scales are used throughout the parameter and sensitivity comparisons\.

导出字段positive等于$D_j+I_j^{+}$，negative等于$I_j^{-}$，两列相加复现$T_j$。每条基准路径包含一至三条边，节点互不重复。各源目标满足$\sum_{j\ne i}|b_{ij}|\leq\delta$，基准$\delta=0.50$；参数与敏感性对照始终使用同一组源尺度。

**Zero\-input and empty\-network tests\.** Setting all direct inputs to zero produces zero direct, propagated, and total outputs\. With no relationship edges in the input, $\mathbf T=\mathbf D$\. The path enumerator reproduces the path ledger for the registered calculation inputs\. These tests verify the implementation against the stated calculation rules\.

**全零输入与空网络测试。**将全部直接输入设为零后，直接、传播及合计输出均为零；输入中没有关系边时，$\mathbf T=\mathbf D$。路径枚举结果与已登记计算输入的路径台账一致。这些测试逐项核验程序是否执行了所述计算规则。

## Parameter Sensitivity and Calculation Configurations

CirCure calculations use three registered calculation configurations\. The principal configuration contains 20 project relationships and produces 101 baseline paths\. The other configurations remain in the output tables for reproducibility checks\.

CirCure计算使用三组登记配置。主要配置包含20条项目关系，产生101条基准路径；其余配置的结果保留在输出表中供复现核对。

#### Parameter Sensitivity Quantification

The deterministic grid varies the common step attenuation $\delta$, the prior–project blend $\eta$, and maximum path length $K$:

确定性网格分别改变共同逐步衰减参数$\delta$、一般关系与项目编码的混合参数$\eta$，以及最大路径长度$K$：

$\delta\in\{0.25,0.50,0.75\},\qquad\eta\in\{0.25,0.50,0.75\},\qquad K\in\{2,3,4\}$

The full cross\-product gives $3\times3\times3=27$ parameter combinations per calculation configuration and 81 evaluations across the three configurations\. Direct ratings, their weights, and relationship inputs remain fixed within each configuration\. Relationships without an applicable prior retain $\eta_{ij}=1$, and every run uses the same source\-normalization envelope\. Table 29 reports the baseline $T_j$ for each selected goal and the minimum and maximum of its 27 calculated values\.

三个参数取值的全组合构成每组计算配置下$3\times3\times3=27$组设置，三组配置合计81次计算。每组配置内的直接评分、权重和关系输入保持固定；缺少适用先验的关系仍取$\eta_{ij}=1$，所有计算共用固定源归一尺度。Table 29列出所选目标的基准$T_j$及27个计算值中的最小值和最大值。

Increasing $\delta$ increases the magnitude carried by each relationship weight, with a factor $\delta^\ell$ along a path of length $\ell$\. Changing $\eta$ shifts the balance between the prior and project\-context code\. Increasing $K$ includes additional simple\-path lengths\. The reported interval is the observed range of this specified parameter grid; its endpoints come directly from the calculated runs\.

增大$\delta$会增大关系权重传递量的绝对值，长度为$\ell$的路径含有$\delta^\ell$因子；改变$\eta$会调整一般关系与项目编码的相对权重；增大$K$则纳入更长的简单路径。报告区间是指定参数网格的计算取值范围，端点直接取自相应结果。

**Table 29\.** Baseline $T_j$ and calculated minima and maxima for selected goals\. The grid crosses three values each of $\delta$, $\eta$, and $K$, giving 27 combinations with fixed direct inputs and source normalization\. / 部分目标的基准$T_j$及计算最小值、最大值；$\delta$、$\eta$和$K$各取三个值，构成27组组合，直接输入与源归一尺度保持固定。

Across all 27 parameter combinations, SDGs 4, 9, and 3 retain the same rank order\. This ranking is stable within the tested parameter grid\.

在全部27组参数设置中，SDG 4、9、3的排序保持不变；这一排序在所测试的参数网格内稳定。

#### Calculation Configuration Outputs

Table 30 reports selected receiving\-goal totals across the three registered calculation configurations\. The direct input vector and source normalization are held constant for the comparison, allowing the listed totals to be checked against their one\-step and multi\-step components\.

Table 30列出三组登记计算配置下部分接收目标的合计。对照中保持直接输入向量和源归一尺度一致，便于将所列合计与一步、多步分项核对。

**Table 30\.** Selected receiving\-goal totals for three registered calculation configurations at baseline parameters, using the same direct inputs and fixed source normalization\. / 基准参数下三组登记计算配置中部分接收目标的合计；三组配置使用相同直接输入与固定源归一尺度。

For SDG 3, the total of $T_3=3.227$ combines its direct score with incoming one\-step and multi\-step contributions\. SDG 8 has $D_8=0$, so its total of $T_8=0.467$ comes from network pathways\. The displayed subtotals in Tables 28 and 30 provide arithmetic checks for their listed rows\.

SDG 3的合计$T_3=3.227$由直接分与入向的一步、多步贡献相加得到。SDG 8的$D_8=0$，因此$T_8=0.467$来自网络路径。Tables 28和30中的所列小计用于核对对应行的算术加总。

## Reusability

#### For Other iGEM Teams

SST\-QN helps iGEM teams assess how their project activities relate to the Sustainable Development Goals \(SDGs\)\. By organizing project evidence and analyzing connections between different SDGs, teams can review their project’s direct and indirect contributions to the SDGs\.

### Organizing and submitting evidence / 整理与提交证据

Teams can use the Stakeholder Sustainability Tracker\(见sustinability页的Stakeholder Sustainability Tracker章节\) to organize files and materials related to their project, such as project activity records, results, and other supporting evidence\. Once organized, the relevant evidence and project information can be provided to SST\-QN for assessment\.

团队可以使用 Stakeholder Sustainability Tracker 整理项目相关文件和材料，例如项目活动记录、研究结果及其他支持性证据。整理完成后，团队可以将相关证据和项目信息提交给 SST\-QN 进行评估。

### Results from SST\-QN / SST\-QN 的输出结果

SST\-QN summarizes the project’s direct contributions to relevant SDGs based on the submitted evidence, and calculates its indirect contributions by analyzing the connections between SDGs\.

### Using the results / 如何使用结果

Teams can use these results to identify which SDGs are most closely connected to their project, and decide which project activities to develop or which evidence to collect next\. The results can also support discussions about project priorities and sustainability planning\.

团队可以根据这些结果了解哪些 SDG 与项目联系最紧密、，并规划后续要开展的项目活动或收集的证据。分析结果也可以帮助团队讨论项目重点和可持续发展规划。

### Repository and basic use / 仓库与基本使用

The model and example files are available in the [SST\-QN GitLab repository](https://gitlab.igem.org/2026/software/jlu-fbh/sst-qn)\. After obtaining permission to use the package, teams can clone the repository and run the model with Python 3\.10 or later\.

模型和示例文件位于 [SST\-QN GitLab 仓库](https://gitlab.igem.org/2026/software/jlu-fbh/sst-qn)。取得软件使用许可后，团队可以克隆仓库，并使用 Python 3\.10 或更高版本运行模型。

```Plain Text
git clone https://gitlab.igem.org/2026/software/jlu-fbh/sst-qn.git
cd sst-qn
python src/run_model.py
```

The current package uses CirCure V0\.2 as its worked example\. Teams can replace the example’s project assessments, and SDG relationships with information from their own project\.

当前软件包以 CirCure V0\.2 作为示例。其他队伍可以将示例中的项目评价、SDG 关系和情景设置替换为自己项目的信息。

## Discussion

### SST\-QN and CirCure

SST\-QN maps general interactions among the 17 SDGs and uses project actions to estimate how contributions to selected goals may extend to others\. For CirCure, the model included 20 directed project relationships and identified direct contributions to SDGs 3, 4, 9, 12, and 17\. In the future\-development scenario with residual ecological risk, the highest composite indices were for SDG 4 \(3\.819\), SDG 9 \(3\.435\), and SDG 3 \(3\.227\)\. These results show how the model connects CirCure’s direct contributions to wider SDG interactions\.

### Limitation

We assigned retained project records a weight of 50% in the direct scoring system, so the assessment partly depends on how project activities were documented\. Although CirCure addresses SDG 3, SDG 4 had the highest composite index\. We suspect this may partly reflect the available evidence: interviews related to SDG 3 focused mainly on the early detection and treatment of triple\-negative breast cancer, while project records more clearly documented education and information\-sharing activities\. As a result, the project’s links to SDG 4 may have been more visible in the assessment\. Through these activities, we also aim to share the importance of good health with a wider audience\.

### Outlook

Under the future\-development scenario with residual ecological risk, SDGs 14 and 15 had small negative indices of −0\.063 and −0\.086\. During implementation, we will pay closer attention to resource use, waste, and other environmental impacts, and take an environmentally responsible approach\. We will also refine SST\-QN by reporting documentation completeness separately from contribution strength, testing alternative scoring weights, and updating the ecological\-risk pathways with project\-specific implementation data\.
