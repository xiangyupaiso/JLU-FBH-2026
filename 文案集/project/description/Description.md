# Description

## Introduction

Breast cancer is the most commonly diagnosed cancer among women worldwide \(Sung et al\. 2026\)\. Among its subtypes,** triple\-negative breast cancer \(TNBC\) **remains particularly challenging, accounting for approximately 15–20% of breast cancer cases\. Because TNBC lacks estrogen receptor \(ER\), progesterone receptor \(PR\), and HER2 overexpression, patients cannot benefit from conventional hormone\- or HER2\-targeted therapies \(Obidiro et al\. 2023\)\. Although chemotherapy, immunotherapy, targeted therapies, and antibody–drug conjugates have expanded treatment options \(Bianchini et al\. 2016\), **early recurrence, distant metastasis, treatment resistance, and toxicity remain major clinical challenges**** **\(Jiang et al\. 2022\)**\. **

Our motivation to work on TNBC began during our clinical internships and **clinical investigation**, where we encountered the challenges faced by patients with advanced TNBC and discussed their treatment experiences with **oncologists, patients, nursing staff, and researchers working on nucleic\-acid therapeutics**** **\(Yang and Cui 2024; Li et al\. 2022; Ferguson et al\. 2014\)**\.** These conversations helped us recognize a clinically important problem: for patients with advanced TNBC who undergo surgery, removal of the primary tumor does not necessarily eliminate microscopic residual or disseminated tumor cells\. The possibility of **micrometastatic disease after surgery** means that preventing recurrence and distant metastasis remains an important challenge in postoperative treatment \(Fancellu et al\. 2021\)\. 

We chose TNBC rather than another cancer type because of its **aggressive clinical course, relatively poor median survival, high risk of recurrence and metastasis, and limited availability of conventional molecular targets\.** These characteristics make TNBC a particularly demanding setting in which to explore new therapeutic strategies\. Our discussions with clinical and research stakeholders also led us to focus on the postoperative setting, where a therapeutic strategy capable of targeting residual tumor cells could potentially complement existing treatment rather than replace standard surgery or systemic therapy \(Ye et al\. 2023\)\. 

A fundamental problem is that **TNBC is highly heterogeneous\.** Tumors can differ in their molecular characteristics, tumor\-associated antigen expression, and immune microenvironment \(Bianchini et al\. 2016\)\. This means that a target expressed by one tumor\-cell population may not be uniformly present across the entire tumor\. When treatment or immune recognition depends on a limited number of targets, tumor cells with low or absent target expression may escape recognition and survive \(Yu et al\. 2025\)\. **For postoperative patients, this heterogeneity becomes particularly important because residual microscopic tumor cells may not share the same antigenic profile\.** Thus, the challenge is not simply to find another TNBC target, but to develop a therapeutic strategy capable of recognizing heterogeneous residual tumor populations more broadly \(Teplensky et al\. 2023\)\.

[description\-figure1\.zip](图片和附件/description-figure1.zip)

***figure1\. Clinical challenges of triple‑negative breast cancer and design requirements***

This challenge led us to explore **therapeutic cancer vaccines**, which can direct the immune system toward tumor\-associated antigens\. We chose a nucleic\-acid vaccine approach because antigen sequences can be designed and combined flexibly, allowing several tumor\-associated antigens to be incorporated into one therapeutic strategy\. 

We considered different vaccine formats, including mRNA, DNA, and protein\-based vaccines, before focusing on circRNA\. Compared with linear mRNA, circRNA has a covalently closed structure that provides greater resistance to exonuclease\-mediated degradation and can support more sustained antigen expression\. Compared with DNA\-based approaches, circRNA functions in the cytoplasm without requiring nuclear entry, while protein vaccines require the production and delivery of the antigen itself \(Moseman et al\. 2025; Niu et al\. 2023\)\. Importantly, circRNA also has the potential to interact with innate immune sensing pathways, providing an intrinsic **adjuvant\-like immunostimulatory effect** that may contribute to vaccine\-induced immune activation\. These characteristics made circRNA an attractive architecture for our goal of achieving **stable antigen expression together with immune stimulation**** **\(Huang et al\. 2024; Wesselhoeft et al\. 2019\)**\. **

This question became the starting point for CirCure, our exploration of a **multi\-antigen circRNA vaccine for postoperative treatment of advanced TNBC\.** We currently validate and apply CirCure in the postoperative adjuvant scenario of advanced TNBC as our initial clinical entry point, while our modular platform is designed to be **universally adaptable and expandable to diverse tumor types**, enabling broad application across multiple cancers in the future\.

## Project Solution\-**Building CirCure: A Multi\-Antigen circRNA Vaccine for TNBC**

CirCure was designed to address two major challenges of TNBC: the lack of conventional therapeutic targets and the limited durability of linear RNA\-based approaches\. Instead of relying on a single tumor marker, our vaccine combines multiple TNBC\-associated antigens within one circRNA molecule\. At the same time, the covalently closed structure of circRNA provides a more stable RNA architecture and enables cap\-independent translation, creating the potential for sustained antigen production \(C\.\-X\. Liu et al\. 2019\)\.

Our design therefore connects **antigen selection, circRNA engineering, RNA production, delivery, and immune activation** within one vaccine platform\. Rather than developing an individual construct for a single tumor antigen, we aimed to establish a modular strategy in which the antigen composition can be adapted according to different tumor antigen profiles\.

At this stage, we have established the major components required to evaluate this concept: **candidate antigen selection, multi\-antigen circRNA design, an intron\-mediated circularization workflow, molecular validation of the resulting RNA, computational evaluation of circRNA structure and immune sensing, and an in vitro functional testing route**\. These components allow us to move from sequence design toward biological evaluation while keeping the individual modules experimentally distinguishable\.

The central mechanism of CirCure can be summarized as:

**Antigen selection → circRNA engineering → RNA production → purification \& quality control → cellular delivery → antigen expression \& presentation → CD8⁺ T\-cell activation → TNBC cell killing**

[description\-figure2\.zip](图片和附件/description-figure2.zip)

***figure******2\. CirCure multi‑antigen circRNA vaccine workflow***

### Modules

- **Antigen Module**

The first challenge is deciding **what the vaccine should target**\.

TNBC is molecularly heterogeneous and lacks the classical ER\- or HER2\-based therapeutic targets found in other breast cancer subtypes \(Yin et al\. 2020\)\. We therefore focused on tumor\-associated antigens with relevance to TNBC and evaluated their expression and tumor specificity through literature analysis and bioinformatic screening\.

Our candidate set includes **Trop\-2, LIV\-1, Nectin\-4, and B7\-H4**, which provide multiple antigenic targets rather than depending on a single tumor\-associated molecule\.

This multi\-antigen strategy is intended to reduce the dependence of the vaccine on one tumor marker and provide broader coverage of heterogeneous TNBC tumors \(König et al\. 2021\)\.

- **circRNA Design Module**

Once candidate antigens were selected, we asked a second question:

**How can several tumor antigens be encoded within one stable RNA molecule?**

We designed a single circRNA construct containing multiple antigen\-coding sequences\. **2A peptides** were introduced between antigen sequences to enable their separation during translation, while codon optimization was used to improve compatibility with human cellular translation \(Chng et al\. 2015\)\.

Because circRNA lacks the conventional 5′ cap and 3′ poly\(A\) tail, we incorporated **IRES elements** to support cap\-independent translation\. The design of the IRES regions was also considered in relation to RNA secondary structure, aiming to maintain an appropriate balance between structural stability and translational activity \(Chen et al\. 2021\)\.

Together, these elements transform multiple antigenic targets into **one programmable circRNA vaccine construct**\.

[description\-figure3\.zip](图片和附件/description-figure3.zip)

***figure3\. Schematic of multi‑antigen circRNA backbone architecture***

- **Production \& Quality Control Module**

A vaccine design must ultimately be converted into a validated RNA molecule\.

We therefore established an experimental workflow for circRNA production using **self\-splicing intron\-mediated circularization**, followed by purification and structural validation\. RNase R treatment and other purification procedures were used to remove residual linear RNA, while complementary molecular assays were established to verify successful circularization\.

Our validation strategy combines **RNA purification, circularization analysis, RT\-qPCR, and back\-splice junction \(BSJ\) sequencing**, allowing us to distinguish successfully circularized RNA from linear products before proceeding to downstream functional studies\.

These experiments provide the first quality\-control checkpoint for CirCure: **before asking whether the vaccine can activate an immune response, we first need to establish that the intended circRNA molecule has been successfully produced and sufficiently characterized\.**

Our experimental characterization showed that the resulting circRNA achieved a **circularization rate and purity above 90%**, providing a quality\-control foundation for subsequent functional experiments\. RT\-qPCR and **back\-splice junction \(BSJ\) sequencing** were used to verify successful circularization and distinguish circular products from linear RNA\.

- **Delivery \& Immune Activation**

The final module of CirCure connects our engineered circRNA with the immune system\.

For future therapeutic application, we envision **lipid nanoparticles \(LNPs\)** as the delivery system for protecting circRNA and facilitating its uptake by target cells\. In our current **in vitro functional validation**, however, we use **electroporation** to efficiently introduce circRNA into cells\. This provides a direct experimental route for evaluating the biological activity of our constructs without making delivery efficiency a major variable \(Wan et al\. 2024\)\.

Following delivery, our experimental evaluation focuses on a sequence of biological questions: **whether the circRNA can support antigen expression, whether the encoded antigens can engage the intended immune pathway, and whether this immune activation can ultimately contribute to TNBC cell killing**\.

These measurements are intended to connect molecular RNA quality with functional anti\-tumor activity rather than treating vaccine production and biological efficacy as independent endpoints\.

Our overall design can therefore be summarized as:

**circRNA design → intracellular delivery → antigen expression → antigen presentation → CD8⁺ T\-cell activation → tumor\-cell killing**

Together, these modules connect the **molecular design of circRNA** with its intended **anti\-tumor immune function**, allowing CirCure to be evaluated as an integrated vaccine platform rather than as an isolated RNA construct\.

The final module of CirCure connects the engineered circRNA with the immune system\.

For our current in vitro experiments, we use **electroporation** to introduce circRNA into cells efficiently and reduce delivery efficiency as a major experimental variable\. Following delivery, we evaluated whether the circRNA could support antigen expression and stimulate immune responses\.

Our results showed that CirCure maintained **more sustained antigen expression than the corresponding mRNA control**, with detectable expression lasting for approximately **three days**, whereas the mRNA signal declined more rapidly\. This result supports our original rationale for selecting circRNA as the RNA architecture for the vaccine\.

We further evaluated interactions with dendritic cells\. **Cellular uptake and dendritic\-cell activation were assessed using flow cytometry, including CD80/CD86 expression, together with Western blot analysis\.** These experiments provided evidence that CirCure can interact with dendritic cells and induce immune activation\.

We also observed **innate immune activation without pronounced cytotoxicity**, supporting the feasibility of using circRNA as both an antigen\-expression platform and an immunostimulatory component\. Importantly, the absence of substantial cytotoxicity provides an initial indication that the observed immune effects are not simply attributable to nonspecific cellular damage\.

Finally, we evaluated the functional consequence of this immune activation using a **calcein\-release\-based cytotoxicity assay**\. Under our experimental conditions, CirCure\-mediated immune responses achieved **up to approximately 80% killing of TNBC cells**, providing an initial functional link between circRNA vaccination and tumor\-cell cytotoxicity\.

Together, these results establish an experimental chain from **RNA production and quality → sustained antigen expression → dendritic\-cell activation → immune\-mediated TNBC cell killing**\.

### **An Integrated Vaccine Platform（desigen outlook）**

The strength of CirCure lies in the connection between these modules\.

**Antigen Selection → circRNA Design → Circularization → Purification \& Validation → Delivery → Antigen Presentation → T\-cell Activation → Tumor Killing**

Each module addresses a specific limitation identified in our design process, while the overall architecture remains modular enough to be adapted to different antigen profiles\.

Rather than asking **“Can we make a circRNA?”**, we ask a broader question:

**“Can circRNA engineering provide a flexible platform for designing multi\-antigen cancer vaccines?”**

CirCure therefore represents a starting point for exploring this approach in TNBC\. The immediate goal is not to claim clinical efficacy, but to determine whether the engineered circRNA can successfully pass through each stage of the proposed workflow— from molecular construction and quality control to antigen expression, immune activation, and tumor\-cell killing\.

### In Vivo Validation Module

Building upon the validated in vitro antigen expression and immune activation outcomes, we further established a series of in vivo experiments to verify the antitumor efficacy and systematic immune\-regulatory mechanism of the multi\-antigen circRNA vaccine CirCure\. Given the low endogenous expression of key TNBC\-targeted antigens \(represented by TROP2\) in wild\-type 4T1 cells, we first constructed and validated a stable TROP2\-overexpressing 4T1 cell line via lentiviral transduction, GFP sorting, puromycin screening, and dual\-level validation at both mRNA and membrane protein levels\. This antigen\-matched tumor cell model provides a standardized and reliable platform for subsequent in vivo vaccine evaluation, ensuring that tumor lesions can present targeted antigens for vaccine\-induced T\-cell recognition\.

We further established subcutaneous TNBC xenograft models in immunocompetent BALB/c mice and implemented a standardized immunization regimen with CirCure LNP vaccine administered subcutaneously at days 0, 7, 14, 21, and 28\. PBS and empty circRNA vector groups were set as parallel controls to distinguish antigen\-specific antitumor immunity from non\-specific innate immune stimulation induced by circRNA backbone or LNP delivery systems\. Tumor growth kinetics were monitored throughout the immunization cycle, and endpoint tumor resection and measurement were performed to quantitatively evaluate the in vivo therapeutic efficacy of CirCure\.

To dissect the underlying immune mechanism, we systematically investigated both local tumor microenvironment and systemic immune responses\. Tumor\-infiltrating CD8⁺ cytotoxic T lymphocytes and Granzyme B activation were detected via immunofluorescence staining, verifying that CirCure vaccination effectively enhances intratumor immune cell infiltration and effector T\-cell activation\. At the systemic level, splenic immune profiling was performed to assess dendritic cell maturation, CD8⁺ T cell activation, and cytotoxic cytokine secretion \(IFN\-γ and Granzyme B\), demonstrating that CirCure triggers robust and systemic antitumor immune responses rather than localized inflammatory reactions\.

Collectively, the in vivo module completes the full functional verification chain of CirCure from molecular quality verification and in vitro immune activation to tangible in vivo antitumor efficacy\. Despite the HLA\-MHC mismatch limitation of the current mouse model, these in vivo results fully validate the feasibility, immune\-activating capacity, and therapeutic potential of our multi\-antigen circRNA vaccine platform for TNBC treatment, providing solid preclinical evidence for its further translational optimization and postoperative recurrence prevention application\.

[description\-figure4\.zip](图片和附件/description-figure4.zip)

***figure4\. Experimental verification pipeline of CirCure***

## Computational Tools

### Beyond Structure Prediction

Designing a therapeutic circRNA requires us to consider more than its encoded antigen\. Unlike linear RNA, circRNA forms a covalently closed molecule in which the two ends of the sequence are connected\. This circular topology can influence RNA folding and stability, while sequence and structural properties may also affect interactions with innate immune sensors \(Z\. Liu et al\. 2025\)\.

To account for these properties, we developed an advanced computational tool for **circRNA structure and immune\-context analysis**\. Rather than treating circRNA as a conventional linear RNA sequence, our framework incorporates the circular topology of the molecule into structural prediction\.

The software uses **circular\-aware positional encoding and structural constraints** to preserve the topological connection between the beginning and end of the sequence\. This allows us to evaluate the predicted structural characteristics and stability of candidate circRNAs before experimental synthesis\.

However, structural stability alone does not determine whether a circRNA is suitable for therapeutic use\. We therefore incorporated several innate immune sensing pathways, including **RIG\-I, TLR7, TLR8, and PKR**, into the same framework \(G\. Liu and Gack 2020\)\. This enables different candidates to be evaluated from both structural and immunological perspectives\.

The resulting workflow can be summarized as:

**circRNA sequence → circular structure → structural stability → immune sensing**

This provides CirCure with a computational layer for comparing candidate circRNAs before they enter experimental validation, helping us select designs with a more appropriate combination of structural and immunological properties\.

### Modeling Before Animal Experiments

We developed a **3R\-oriented computational model** to reduce the need for extensive *in vivo* testing of circRNA vaccine candidates\. By integrating **pharmacokinetic modeling with protein expression, immune response, and tumor dynamics**, our model connects the behavior of a circRNA after administration with its potential downstream therapeutic effects \(Rault et al\. 2022\)\.

The model describes the progression from **circRNA administration and persistence to antigen expression, immune activation, and tumor response**, allowing us to explore how changes in candidate design may propagate through the biological system\. Instead of evaluating each process independently, the integrated framework provides a continuous view of the potential relationship between **circRNA properties and therapeutic response**\.

To support candidate selection before animal experiments, the model can be used to **compare predicted responses across different circRNA designs** and prioritize candidates for subsequent *in vivo* validation\. In this way, computational simulation provides an additional decision\-making layer before committing experimental resources, supporting the principles of **Reduction and Refinement** within the 3Rs framework\.

By connecting molecular design with system\-level responses, our model complements the circRNA design software developed in CirCure\. While the software focuses on the **structural and immunological properties of the RNA molecule**, the model extends this analysis toward its **potential behavior in vivo**, providing a computational bridge from **circRNA design to therapeutic evaluation**\.

[description\-figure5\.zip](图片和附件/description-figure5.zip)

***figure5\. Computational tools workflow***

## Oncology Impact and Access

CirCure is currently positioned as an **advanced‑stage adjuvant**** therapeutic platform for TNBC**, particularly for patients whose tumors express one or more of the selected target antigens\. Our project focuses on the **treatment dimension** of the Oncology Track \-: we aim to explore whether a multi\-antigen circRNA vaccine can broaden immune recognition of heterogeneous TNBC tumors and contribute to better tumor control\. At this stage, we do not define a specific postoperative or recurrent/metastatic treatment indication, as determining the appropriate clinical setting will require further preclinical and clinical evidence\.

For CirCure, **boosting survival rate cannot be claimed directly from an in vitro vaccine study**\. We therefore define a measurable sequence of endpoints connecting our current experiments with eventual clinical outcomes: **circRNA quality → antigen expression and persistence → immune activation → TNBC cell killing → tumor control → recurrence and metastasis → survival**\. Our current experiments focus on the early stages of this chain, including circRNA circularization and purity, antigen expression and its duration, cellular uptake and immune activation, and cytotoxicity against TNBC cells\. These results will help determine whether CirCure has sufficient biological activity to justify subsequent *in vivo* evaluation\. Future animal studies will then assess tumor growth, regression, recurrence, and metastasis, while longer\-term clinical studies would be required to determine whether these effects ultimately translate into improved progression\-free and overall survival\. In this way, **survival is treated as the ultimate clinical endpoint rather than an unsupported claim at the current stage**\.

However, biological efficacy alone does not determine whether a cancer therapy can contribute to **quality and equitable cancer care**\. To address the access dimension of the Oncology Track, we will evaluate **manufacturability, storage stability, delivery requirements, companion biomarker requirements, and cost alongside biological efficacy**\. Manufacturing evaluation will consider whether circRNA production and purification can be performed reproducibly and whether the workflow can move beyond laboratory\-scale production\. Storage studies will examine whether the product can maintain sufficient quality over time and under practical storage conditions\. Delivery requirements will be considered together with the complexity of administration and the feasibility of the proposed delivery system\. Because CirCure uses multiple tumor\-associated antigens, companion biomarker requirements are also important: patient selection should be based on tumor antigen profiles rather than assuming that every TNBC patient will respond to the same antigen combination\. Finally, cost and manufacturing complexity will be considered together with biological performance to identify potential barriers to broader access\.

We also recognize that **cancer care extends beyond the development of a therapeutic product**\. Our Education activities therefore do not claim to provide clinical cancer prevention or professional patient care\. Instead, they contribute to the broader care ecosystem by improving public understanding of cancer biology, synthetic biology, and biotechnology, while our project\-level work focuses on developing a potential therapeutic approach\. Together, these efforts allow us to address different dimensions of the Oncology Track without overstating the scope of CirCure\.

Ultimately, CirCure aims to move beyond the question of whether a circRNA vaccine can be engineered\. We ask whether it can be developed into a **biologically effective, manufacturable, deliverable, and potentially accessible therapeutic strategy** for TNBC\. Our current work establishes the experimental foundation for answering these questions, while tumor control, recurrence, metastasis, survival, and real\-world accessibility remain the key challenges for 

subsequent stages of development\.

[description\-figure6\.zip](图片和附件/description-figure6.zip)

***figure6\. Hierarchical endpoint chain linking in‑vitro assays toward clinical outcomes***

## Education

Synthetic biology connects biology, engineering, medicine, and society, yet this interdisciplinary field can be difficult to approach without suitable educational opportunities\. We therefore asked how we could make synthetic biology and oncology understandable and engaging for people at different stages of learning\.

We built an educational journey that spans **from children to the general public**\. For younger students, we use **biology card games and interactive activities** to turn scientific knowledge into play\. For middle school students, we introduce synthetic biology and cancer biology through accessible and engaging courses\. High school students are given the opportunity to **step into the laboratory and experience hands\-on experiments**, while university students explore the broader responsibilities of biotechnology through **ethics and biosafety debates**\.

To extend learning beyond the classroom, we developed a **Virtual Laboratory** for students with limited access to experimental facilities and brought our science communication to the public through activities such as the **Xinghua Festival**\.

Through these different forms of engagement, we hope to make synthetic biology not only something to **learn**, but something to **experience, question, and discuss**—encouraging more people to understand biotechnology and inspiring the next generation to participate in the field\.

[description\-figure7\.zip](图片和附件/description-figure7.zip)

***figure7\. Multi‑layer educational outreach framework of CirCure***

## In The Future

Our goal is to develop CirCure from an early\-stage TNBC circRNA vaccine candidate into a **scalable platform for cancer immunotherapy**\. The next stage of work will focus on completing the experimental chain from **RNA quality and antigen expression to immune activation and TNBC cell killing**, followed by *in vivo* validation of anti\-tumor efficacy\. Further refinement of our computational models will also allow candidate designs to be prioritized before animal experiments\.

Beyond TNBC, the modular design of CirCure could be adapted to different tumor\-associated antigens and cancer types\. In the long term, we hope to explore personalized vaccine design, intellectual\-property development, and clinical translation\. However, these remain future directions rather than completed outcomes\.

**For us, CirCure is not the endpoint, but a starting point for exploring how synthetic biology can create more precise and adaptable cancer therapies\.**

# Reference

1\.  Sung, H\. *et al\.* Global cancer statistics 2024: GLOBOCAN estimates of incidence and mortality worldwide for 34 cancers in 186 countries\. *CA: A Cancer Journal for Clinicians* 76, e70090 \(2026\)\.

2\.  Obidiro, O\., Battogtokh, G\. \& Akala, E\. O\. Triple negative breast cancer treatment options and limitations: Future outlook\. *Pharmaceutics* 15, 1796 \(2023\)\.

3\.  Bianchini, G\., Balko, J\. M\., Mayer, I\. A\., Sanders, M\. E\. \& Gianni, L\. Triple\-negative breast cancer: Challenges and opportunities of a heterogeneous disease\. *Nat Rev Clin Oncol* 13, 674–690 \(2016\)\.

4\.  Jiang, M\.\-P\., Huang, X\., Yin, Y\.\-M\. \& Tang, J\.\-H\. The pathological and clinical landscape of refractory metastatic triple negative breast cancer: A narrative review\. *Ann Transl Med* 10, 907 \(2022\)\.

5\.  Yang, R\. \& Cui, J\. Advances and applications of RNA vaccines in tumor treatment\. *Mol Cancer* 23, 226 \(2024\)\.

6\.  Li, Y\. *et al\.* Recent advances in therapeutic strategies for triple\-negative breast cancer\. *J Hematol Oncol* 15, 121 \(2022\)\.

7\.  Ferguson, L\. L\., Curran, B\., Martinez, M\. \& Mancuso, P\. Triple\-negative breast cancer: What is known about it? *Clin J Oncol Nurs* 18, E6–E11 \(2014\)\.

8\.  Fancellu, A\. *et al\.* Outcomes after breast\-conserving surgery or mastectomy in patients with triple\-negative breast cancer: Meta\-analysis\. *Br J Surg* 108, 760–768 \(2021\)\.

9\.  Ye, F\. *et al\.* Advancements in clinical aspects of targeted therapy and immunotherapy in breast cancer\. *Mol Cancer* 22, 105 \(2023\)\.

10\.  Yu, H\. *et al\.* Optimized circular RNA vaccines for superior cancer immunotherapy\. *Theranostics* 15, 1420–1438 \(2025\)\.

11\.  Teplensky, M\. H\. *et al\.* Multi\-antigen spherical nucleic acid cancer vaccines\. *Nat Biomed Eng* 7, 911–927 \(2023\)\.

12\.  Moseman, J\. E\. *et al\.* Messenger RNA and plasmid DNA vaccines for the treatment of cancer\. *Vaccines \(Basel\)* 13, 976 \(2025\)\.

13\.  Niu, D\., Wu, Y\. \& Lian, J\. Circular RNA vaccine in disease prevention and treatment\. *Signal Transduct Target Ther* 8, 341 \(2023\)\.

14\.  Huang, D\. *et al\.* Tumour circular RNAs elicit anti\-tumour immunity by encoding cryptic peptides\. *Nature* 625, 593–602 \(2024\)\.

15\.  Wesselhoeft, R\. A\. *et al\.* RNA circularization diminishes immunogenicity and can extend translation duration in vivo\. *Mol Cell* 74, 508\-520\.e4 \(2019\)\.

16\.  Liu, C\.\-X\. *et al\.* Structure and degradation of circular RNAs regulate PKR activation in innate immunity\. *Cell* 177, 865\-880\.e21 \(2019\)\.

17\.  Yin, L\., Duan, J\.\-J\., Bian, X\.\-W\. \& Yu, S\.\-C\. Triple\-negative breast cancer molecular subtyping and treatment progress\. *Breast Cancer Res* 22, 61 \(2020\)\.

18\.  König, E\. *et al\.* Multi\-antigen outer membrane vesicle engineering to develop polyvalent vaccines: The staphylococcus aureus case\. *Front Immunol* 12, 752168 \(2021\)\.

19\.  Chng, J\. *et al\.* Cleavage efficient 2A peptides for high level monoclonal antibody expression in CHO cells\. *MAbs* 7, 403–412 \(2015\)\.

20\.  Chen, C\.\-K\. *et al\.* Structured elements drive extensive circular RNA translation\. *Mol Cell* 81, 4300\-4318\.e13 \(2021\)\.

21\.  Wan, J\. *et al\.* Circular RNA vaccines with long\-term lymph node\-targeting delivery stability after lyophilization induce potent and persistent immune responses\. *mBio* 15, e0177523 \(2024\)\.

22\.  Liu, Z\., Dai, Q\., Yu, X\., Duan, X\. \& Wang, C\. Predicting circRNA\-drug resistance associations based on a multimodal graph representation learning framework\. *IEEE J Biomed Health Inform* 29, 1838–1848 \(2025\)\.

23\.  Liu, G\. \& Gack, M\. U\. Distinct and orchestrated functions of RNA sensors in innate immunity\. *Immunity* 53, 26–42 \(2020\)\.

24\.  Rault, J\.\-L\., Binder, R\. \& Grimm, H\. Rethink farm animal production: The 3Rs\. *Science* 378, 842 \(2022\)\.

