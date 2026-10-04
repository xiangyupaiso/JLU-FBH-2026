# CirCure\_Design

# Overview

Triple\-negative breast cancer lacks the oestrogen receptor, the progesterone receptor, and HER2, so the three targeted therapies that transformed outcomes in other breast cancers have nothing to bind to\. Chemotherapy remains the backbone of treatment; relapse is early, and the options after relapse are thin\. What TNBC does have is immune visibility: tumour\-infiltrating lymphocyte density is one of the few reproducible favourable prognostic markers in the disease\[1\], suggesting that T cells already find these tumours and that giving them a target is a reasonable approach\.

CirCure is our attempt at that target\. It is a multi\-epitope circular RNA \(circRNA\) vaccine platform that runs as a single chain from bench to tumour\. A plasmid, pCirCure\-circMEV, is transcribed in vitro by T7 polymerase; a self\-splicing intron closes the transcript into a covalently closed circle; the circle is packaged in a lipid nanoparticle and injected subcutaneously\. Dendritic cells take up the particle and translate the circRNA, display the encoded peptides on MHC class I, and prime CD8⁺ T cells that go on to kill TNBC cells\.

We built and tested the platform in two rounds\. We screened thirteen single\-epitope constructs against each other in human HLA\-A\*02:01 dendritic\-cell and T\-cell cultures, and assembled the eight epitopes that came through into one construct, which we carried into a TROP2\-positive mouse model of TNBC\.

How each quantity was defined, controlled and calibrated, including the pre\-registered design of the animal study, is on **Measurement**\. Sequences and part documentation are on **Parts**; the smaller engineering cycles run on individual experimental details are on **Engineering**\.

![Create a circular scientific workflow figure on a white background, flat vector\.png](图片和附件/Create%20a%20circular%20scientific%20workflow%20figure%20on%20a%20white%20background,%20flat%20vector.png)

**Figure 1\. CirCure at a glance\.**

---

## 1\. Why circRNA

The instruction has to be carried by some molecule, and linear mRNA is the obvious chassis for a nucleic\-acid cancer vaccine\. It is clinically validated, and an individualised mRNA vaccine has been shown to evoke durable T\-cell immunity in adjuvant TNBC\[2\]\. We chose circRNA instead, for three reasons that matter specifically to a therapeutic vaccine\.

The first is stability\. A linear mRNA has free 5′ and 3′ ends, and that is where exonucleases begin\. A covalently closed circle has neither, and circRNAs are correspondingly long\-lived in cells\[3\]\[4\]\. Longer expression per molecule delivered means less RNA per dose and fewer doses, so less carrier and less total exposure\. We did not take the property from the literature and leave it there; we measured it on the vaccine batch itself\.

![Create a structured two\-column comparison grid figure on a white background, fla \(1\)\.png](图片和附件/Create%20a%20structured%20two-column%20comparison%20grid%20figure%20on%20a%20white%20background,%20fla%20%281%29.png)

**Figure 2a\. Stability\.**

The second is cap\-independent translation\. circRNA is read through an internal ribosome entry site, so the 5′ cap and, in practice, the modified nucleosides that linear mRNA depends on both drop out of the process\. That removes cost, removes manufacturing steps, and keeps the work clear of a crowded patent area\. It also puts the whole production chain within reach of a student team: a plasmid, T7 polymerase and a self\-splicing intron\.

![Create a structured two\-column comparison grid figure on a white background, fla \(2\)\.png](图片和附件/Create%20a%20structured%20two-column%20comparison%20grid%20figure%20on%20a%20white%20background,%20fla%20%282%29.png)

**Figure 2b\. Translation initiation\.**

The third is that the circle is its own adjuvant\. Unmodified circRNA is sensed in the cytoplasm by RIG\-I and MDA5, which matures the dendritic cell and supplies the innate danger signal a therapeutic vaccine needs\. circRNA cancer vaccines exploit this actively\[5\], and it was one of our main reasons for choosing the chassis: the adjuvant travels with the molecule, and the innate stimulus lands in the same cell that presents the antigen\. It also fixes how the vaccine has to be read\. Since the backbone contributes to the response on its own, the contribution of the epitopes shows up only against an empty\-vector circRNA arm that carries the complete backbone and adjuvant with no epitope encoded\. Every functional comparison in the project uses that control\.

![Create a structured two\-column comparison grid figure on a white background, fla \(3\)\.png](图片和附件/Create%20a%20structured%20two-column%20comparison%20grid%20figure%20on%20a%20white%20background,%20fla%20%283%29.png)

**Figure 2c\. Innate sensing\.**

---

## 2\. Target selection

With the chassis settled, the question is what to encode in it\. A therapeutic cancer vaccine lives or dies on the antigen, and a student team has no access to patient tumour tissue, no immunohistochemistry series across normal organs, and no way to find out for itself whether a given surface protein is really enriched on TNBC\. So we looked for antigens where somebody else had already done that work, and the antibody–drug conjugate field has done it more thoroughly than anyone\.

An approved or clinical\-stage ADC against a target establishes three things we could not establish ourselves\. The antigen is on the tumour surface in real patients at a density high enough for a binder to find, which is a stronger statement than any cell\-line expression dataset\. Its expression across normal tissue has already been characterised and judged tolerable enough that a cytotoxic payload can be delivered systemically against it, so the tumour\-versus\-normal differential has been tested in people rather than inferred\. And the target carries a developed body of clinical expression data and reagents, so anyone who picks up the platform later has something to compare against\[6\]\.

A vaccine then attacks the same antigen by a different route\. An ADC has to bind the folded ectodomain from outside the cell, so only surface\-accessible epitopes are available to it\. A vaccine attacks peptides presented on MHC class I, which are processed from the whole protein inside the cell, so buried and intracellular regions are in play as well\. The effector is a cytotoxic T cell rather than a delivered drug, so there is no payload to distribute and no linker chemistry to tune\.

On that basis we set four criteria\. A candidate antigen had to be present on the TNBC cell surface; validated by an approved or clinical\-stage ADC; limited in expression in essential normal tissue; and mechanistically involved in the malignant phenotype, so that losing the antigen under immune pressure would cost the tumour fitness\. Four antigens cleared all four\.

**TROP2** \(TACSTD2\) is a transmembrane calcium\-signal transducer that drives proliferation, migration and invasion, and high expression carries a poor prognosis in TNBC\. It is the target of an approved ADC in metastatic TNBC, which makes it the most extensively validated of the four and the reason it later became our representative antigen in vivo\[7\]\.

**Nectin\-4** \(PVRL4\) is an adhesion molecule of the nectin family that supports adhesion\-dependent growth and metastasis\. It is largely absent from adult normal tissue and re\-expressed in carcinoma, which gives it an unusually wide therapeutic window\. It is an approved ADC target in urothelial carcinoma and under investigation in breast cancer\[6\]\.

**B7\-H4** \(VTCN1\) is a B7\-family immune checkpoint ligand that suppresses T\-cell proliferation and cytokine production and contributes to the immunosuppressive TNBC microenvironment\. Both ADC and checkpoint programmes against it are in clinical development\[6\]\. Of the four it is the one doing immunological harm by itself, so a CTL response against B7\-H4\-presenting cells should preferentially remove the cells that are suppressing that response\. That is our reasoning; no experiment in this project tests it\.

**LIV\-1** \(SLC39A6 / ZIP6\) is a zinc transporter that drives epithelial–mesenchymal transition and associates with metastatic spread\. It is a clinical\-stage ADC target in TNBC\[6\]\.

![Create four tall rounded\-rectangle card tiles in one row on a white background,\.png](图片和附件/Create%20four%20tall%20rounded-rectangle%20card%20tiles%20in%20one%20row%20on%20a%20white%20background,.png)

**Figure 3\. The four antigens of CirCure\.**

Carrying all four rather than the best one hedges against antigenic heterogeneity: expression of any single target varies between cells within one tumour, and sustained pressure on one antigen selects for antigen\-loss escape\[8\]\. Each antigen is represented in the final cassette by exactly two epitopes, a ceiling set by B7\-H4, which entered the wet\-lab screen with only two validated candidates\.

Covering four antigens does nothing for population coverage\. Every epitope in CirCure is HLA\-A\*02:01\-restricted, so the fraction of patients the current design could serve is bounded by that single allele however many antigens the cassette carries\[9\]\. The restriction did buy us something we relied on throughout: the entire in vitro programme could run in commercially sourced, HLA\-A\*02:01\-typed human mononuclear cells, so no blood was drawn from volunteers and every immunological readout came from human cells of the correct type\.

---

## 3\. From antigen to epitope

Having four antigens does not tell us what to put in the circle\. The cassette encodes short peptides rather than the four proteins, for three reasons\.

A CD8⁺ T cell never sees a protein\. It sees an eight\- to ten\-residue peptide held in an MHC class I groove, and only a small fraction of any protein's sequence is processed and loaded that way\. Most of a full\-length antigen would therefore contribute nothing to the response we are trying to raise\. Size is the second reason: four full\-length antigens come to close to two thousand codons, roughly six kilobases of coding sequence, against a whole plasmid of 5267 bp and a circularisation chemistry whose efficiency falls as the precursor grows\. The nine\-epitope cassette occupies about 340 bp\. The third reason is what these particular proteins do\. Expressing intact B7\-H4 in a dendritic cell would put a functional checkpoint ligand on the surface of the very cell that is trying to prime the T cell, and TROP2 and LIV\-1 are an active signalling receptor and an active transporter\. Encoding epitopes alone avoids handing the dendritic cell a working copy of any of them\.

Which peptides, then\. Candidate 9\-mers from all four antigens were scored for MHC class I binding with NetMHCpan 4\.1 through the IEDB NextGen pipeline, restricted to HLA\-A\*02:01\. Predicted binders were passed through VaxiJen at a threshold of 0\.5 to remove peptides unlikely to be antigenic\. Binding to MHC\-I is necessary but not sufficient, since the peptide must also be liberated from the polyprotein by the proteasome, so the ordering of fragments within the cassette was guided by NetChop cleavage prediction\[10\], placing epitope boundaries where the proteasome is predicted to cut\. What survived a structural and redundancy filter was a buildable candidate set of thirteen constructs: three from TROP2, two from B7\-H4, three from Nectin\-4 and five from LIV\-1\. That asymmetry is what the filters left, and it later set the per\-antigen ceiling of two\.

The fifth stage is the bench\. All thirteen constructs were built into one shared backbone, verified identically, and compared head to head by IFN\-γ ELISpot in a human dendritic\-cell and T\-cell co\-culture\. Across thirteen sequences that had all cleared the computational filter, the response spanned 47 to 271 spot\-forming cells, a 5\.8\-fold range that the prediction scores gave no hint of\. Without the wet\-lab screen, all thirteen would have entered the vaccine at equal weight\. How that screen was run, and what it changed, is section 7\.

![Create an illustrated screening funnel figure on a white background, flat vector \(2\)\.png](图片和附件/Create%20an%20illustrated%20screening%20funnel%20figure%20on%20a%20white%20background,%20flat%20vector%20%282%29.png)

**Figure 4\. The screening funnel\.**

---

## 4\. Mechanism

Everything the construct does, it does inside a dendritic cell\. After a subcutaneous dose, given at the base of the tail in our mouse study, the circRNA\-LNP drains through the lymphatics into local lymphoid tissue, where a dendritic cell internalises the particle and endosomal escape releases the circRNA into the cytoplasm\. Translation begins without a cap: synIRES\-RC25, a synthetic internal ribosome entry site derived from the human rhinovirus 3 5′ UTR and carrying an eIF4G\-recruiting aptamer, places the ribosome directly on the message\. What the ribosome produces is a single polyprotein\. At its N\-terminus sits a tPA signal and pro sequence, which directs the nascent chain into the secretory and processing pathway\. Then comes the epitope cassette: eight tandem fragments, separated by flexible linkers, carrying the two highest\-scoring epitopes of each of the four antigens\. Downstream of the cassette lie a GS linker, four tandem copies of mC3dP28, the MITD signal, and a FLAG tag\.

Two of those elements convert expression into presentation\. MITD is an MHC class I trafficking signal, and fusing an antigen to it routes the translation product through the class I pathway, raising the efficiency with which its peptides reach the cell surface\[11\]\. mC3dP28 is a complement\-C3d\-derived p28 peptide that acts as a molecular adjuvant when coupled to an antigen\[12\]; we carry four tandem copies because C3d adjuvanticity scales with copy number\. Acting alongside them is the circRNA backbone itself, sensed intracellularly as described in section 1\. Between them, the adjuvant module and the backbone drive the dendritic cell to mature and upregulate CD80 and CD86, which is signal 2, the signal that decides whether antigen presentation produces immunity or tolerance\.

The mature, antigen\-loaded dendritic cell then meets a CD8⁺ T cell\. Peptide–MHC\-I engagement of the T\-cell receptor provides signal 1; CD80 and CD86 engaging CD28 provide signal 2\. The T cell activates, as read by CD69 within hours; it expands; and it commits to an effector\-memory phenotype, CD45RO⁺CCR7⁻, which is what separates a response that persists from one that fades with the dose\. Those primed cytotoxic T cells then recognise the same peptide–MHC\-I complexes displayed on TNBC cells and kill through the perforin and granzyme axis, releasing IFN\-γ and Granzyme B as they do so\.

![环状RNA疫苗机制 recovered\.png](图片和附件/环状RNA疫苗机制%20recovered.png)

**Figure 5\. Mechanism of action\.**

---

## 5\. Construct architecture

"C:\\Users\\香芋派\\xwechat\_files\\wxid\_5ebnlqbau8vc22\_50a2\\msg\\file\\2026\-10\\HTML\(2\)\.zip"这是一个dna的一个展示的一个平台的一个网站然后它做的已经非常的好了我们现在需要把它放在这里

主题色什么的可以根据我们现在的位置进行迁移然后这个代码可以直接放进去也可以迁移到目前的代码融合进去啊这个你自己决定

有什么问题或者不清楚的可以问我 那个pdf你不用阅读也不用放到我们这个项目中它那个是用来为生成这个html文件的一个相当于提示词的，就是完全你不用管然后剩下的两个代码需要迁移进我们的项目中

## 6\. Delivery

A finished circle still has to reach a dendritic cell\. circRNA is large and highly charged and does not cross the plasma membrane, so it needs a carrier\. In vitro we use electroporation, which loads dendritic cells without a carrier contributing to the immunological readout\. In the animal we use lipid nanoparticles: the clinically validated route for RNA vaccines\[14\], tolerant of repeated subcutaneous dosing, and indifferent to whether the cargo is linear or circular\.

Our LNP is commercially sourced\. We specified a particle size of about 120 nm\. After subcutaneous injection, particles in roughly the 20–200 nm range drain through the lymphatics to the draining node instead of remaining at the injection site, and particles toward the upper end of that window are efficiently internalised by dendritic cells, which is where the chain in section 4 requires the cargo to arrive\. Dose is expressed in circRNA mass, 10 µg per injection, since the circRNA is the active ingredient\.

The lipid composition is the supplier's proprietary formulation and was not disclosed to us, and we hold no vendor figures for polydispersity, zeta potential or encapsulation efficiency; the equipment to measure them ourselves was outside what this project could access\. Three things limit what that gap can do to our conclusions\. The tolerated dose window was measured on our own material, as a CCK\-8 dose–viability series on dendritic cells across 0 to 400 ng per well\. A single supplier and a single batch were used throughout, so the formulation cannot differ between groups\. And the in vivo empty\-vector arm receives identical particles carrying non\-coding cargo, so any effect of the carrier appears in that arm and is subtracted by design\. With access to particle characterisation we would run loaded and empty particles on the same plate, which is what separates carrier toxicity from innate activation by the cargo\. That experiment is in our Outlook\.

---

## 7\. Experimental design

The wet\-lab programme has three parts, and they ran in this order\. Safety bounds were set first, because iGEM's review process required it\. Two Design–Build–Test–Learn cycles then took the vaccine from thirteen candidate epitopes to one validated construct\. The animal study came last\. The smaller cycles that ran on individual experimental details, such as electroporation conditions, circularisation temperature, primer design and gating strategy, sit inside the two large ones and are set out on **Engineering**\.

### Safety, set before anything else

Working through iGEM's safety framework changed how this part of the project was planned\. Completing the Safety Form, and passing the **Animal Use Form** through the Safety and Security Committee, meant the animal work had to be described, justified and approved before it began: species, numbers, endpoints, and the reason no alternative would answer the question\. The review is strict, and we found it useful\. It forced the in vivo study to be designed completely on paper before an animal was ordered, and it pushed us to answer in cell culture everything that cell culture could answer\.

Three quantities were bounded in culture\. Persistence: circRNA and its linear precursor incubated in parallel and sampled at 0, 24, 48 and 72 h, measured on the Combined vaccine batch, since the persistence figure feeds the dosing rationale and the reader should know which material produced it\. Off\-target killing: calcein\-AM release against four human normal lines \(HCAEC for coronary artery endothelium, LX\-2 for hepatic stellate cells, BEAS\-2B for bronchial epithelium and MCF12A for normal mammary epithelium\), with MDA\-MB\-231 as the positive\-control target, at effector\-to\-target ratios of 80:1 and 100:1\. All four normal lines were confirmed HLA\-A\*02:01\-positive before the experiment, which closes off the one explanation a low killing result would otherwise have\. And carrier tolerance: the CCK\-8 dose–viability series of section 6\.

What those three experiments establish is specificity and a working dose window\. Safety is a property of an organism, and a 96\-well plate has no stroma, no vasculature, no draining lymph node and no repeat\-dose exposure\. Their principal downstream use was to parameterise the Dry Lab model, which in turn informed the dose and schedule proposed for the animal study\. The in vivo toxicology package that would support a safety claim is set out in our Outlook\.

Biosafety also shaped how the project was built\. All human cells were commercially sourced HLA\-typed mononuclear cells and the dendritic cells and T cells derived from them, so no blood was drawn from volunteers\. The TROP2\-overexpressing target line was made with a commercially produced lentiviral preparation handled under BSL\-2 conditions, which avoided both the titre variability and the additional biosafety burden of packaging virus in\-house\. The animal work was approved by the Animal Ethics Committee of the First Hospital of Jilin University \(approval JDYY20261369, 27 July 2026; animal use licence SYXK \(Ji\) 2023\-0011\)\.

### Cycle 1: which epitopes are real

Thirteen single\-epitope constructs were built into one shared backbone and compared head to head\. Commercially sourced HLA\-A\*02:01\-typed human mononuclear cells supplied CD14⁺ monocytes, differentiated into monocyte\-derived dendritic cells with GM\-CSF and IL\-4, and autologous CD3⁺ T cells from the same donor; each circRNA was electroporated separately into dendritic cells, which were then co\-cultured with those T cells at a ratio of 1 : 20\. We used electroporation here on purpose\. It removes the carrier as a variable, so a difference between wells is a difference between epitope sequences\.

Three readouts were taken\. IFN\-γ ELISpot counts antigen\-specific IFN\-γ\-secreting T cells at single\-cell resolution and was the ranking criterion\. Calcein\-AM release against K562 asked whether the primed effector population could kill at all\. CD8⁺CD69⁺ flow cytometry measured activation within hours of T\-cell receptor signalling, giving the ELISpot ranking an independent cross\-check on the TROP2 epitopes\.

This cycle was built to produce a decision, and it carried no control wells: no empty\-vector well, no positive control, and no recorded replicate count\. Its spot counts therefore rank constructs against one another and cannot be cited as antigen\-specific T\-cell frequencies\. The strict vector control entered the second cycle because the first lacked it\.

Three results became three design changes\. The ELISpot response spanned 47 to 271 spot\-forming cells across thirteen sequences that had all cleared the computational filter, so only wet\-lab\-validated epitopes were carried forward\. B7\-H4 contributed only two constructs against three to five for every other antigen, so equal representation of all four antigens capped every antigen at two, giving eight epitopes in all\. And K562 killing spanned only 1\.41\-fold across the thirteen constructs and did not correlate with ELISpot \(ρ = 0\.43\)\. The problem there was the target cell\. K562 is MHC class I\-negative and antigen\-negative, so a killing assay run on it cannot resolve epitopes however carefully it is executed, and the general lesson we took from it is that an assay can be run perfectly and still tell you nothing if the target cell cannot present the antigen\. The second cycle switched to MDA\-MB\-231, which carries both the correct HLA type and the target antigen\.

### Cycle 2: does the multi\-epitope design work

Those three changes defined the construct described in section 5\. The eight selected epitopes were assembled into pCirCure\-circMEV and tested against the single\-epitope constructs they came from\. Five preparations were compared: empty vector, TROP2\-CTL1, TROP2\-CTL2, TROP2\-CTL1\+2 and Combined\. The empty\-vector arm carries the complete backbone and the 4×mC3dP28 adjuvant and encodes nothing, which is what allows an increment to be attributed to the epitope\-encoding sequence rather than to electroporation stress, to innate sensing of the backbone, or to the adjuvant\.

This cycle tested the chain of section 4 link by link, with five readouts\. Flow cytometry for CD80⁺CD86⁺ asks whether the vaccine matures the dendritic cell as well as loading it\. Anti\-FLAG Western blot asks whether the circRNA is translated inside that cell at all; this is the experiment the FLAG tag was built into the construct for, and it turns translation from an inference into an observation\. Flow cytometry for CD69, CD28 and CD45RO⁺CCR7⁻ characterises the resulting T\-cell response across activation, co\-stimulation and effector\-memory commitment\. A second ELISpot asks whether eight epitopes outperform two and one\. Calcein\-AM release against MDA\-MB\-231 asks whether the primed T cells kill real TNBC cells, at three effector\-to\-target ratios of 20:1, 40:1 and 80:1 so that killing could be shown to scale with effector dose\.

![Create a diagram of two Design\-Build\-Test\-Learn cycles side by side on a white b\.png](图片和附件/Create%20a%20diagram%20of%20two%20Design-Build-Test-Learn%20cycles%20side%20by%20side%20on%20a%20white%20b.png)

**Figure 7\. Two design cycles\.**

### In vivo

Both cycles ran in culture, so the last question is whether the construct restrains a tumour in an animal\. That needs a tumour carrying the antigen the vaccine targets, and wild\-type 4T1 barely expresses TROP2\. We therefore built a stable TROP2\-overexpressing 4T1 line with a commercially produced second\-generation lentiviral preparation carrying a CopGFP reporter and puromycin resistance, and validated it through four sequential checkpoints, each with its own readout: GFP microscopy for transduction, flow sorting through a three\-step gate followed by puromycin selection for enrichment, RT\-PCR for transcript, and flow cytometry for surface TROP2\. The first two steps use GFP as a surrogate for successful integration; the last two measure TROP2 itself, which is what a T cell can see, and reporting all four makes the chain from virus to validated tool line auditable end to end\.

That line went into immunocompetent BALB/c mice\. The host keeps the complete adaptive immune system the vaccine's mechanism depends on, and it matches the clinical population for a disease of women modelled with a cell line of female origin\. Three arms \(PBS vehicle, empty\-vector circRNA\-LNP and Combined circRNA\-LNP\) received five weekly subcutaneous doses at the tail base from the day of tumour inoculation, with tumour volume followed by calliper to a D35 endpoint and tumour and spleen taken for mechanism readouts\.

The design of that study was built in the **NC3Rs Experimental Design Assistant** before any animal was ordered, producing an Experimental Design Report conforming to the ARRIVE 2\.0 Essential 10\[15\]\. Sample size, the minimum biologically important effect, randomisation, blinding, inclusion and exclusion criteria, the primary outcome and the full statistical plan including the two pre\-specified pairwise contrasts were all fixed in advance\. The report is embedded below, and the reasoning behind each entry is on **Measurement**\.

![Create a horizontal study\-timeline diagram for a mouse tumour experiment\. One ho\.png](图片和附件/Create%20a%20horizontal%20study-timeline%20diagram%20for%20a%20mouse%20tumour%20experiment.%20One%20ho.png)

**Figure 8\. In vivo study design\.**



**Figure 9\. Experimental Design Report, NC3Rs EDA\.**

---

## 8\. Outlook

CirCure as it stands is a platform proof of concept\. Five pieces of work would turn it into a candidate\.

**Showing that the response is antigen\-specific\.** CirCure's epitopes are human HLA\-A\*02:01\-restricted, and the efficacy study used wild\-type BALB/c mice of H\-2d haplotype, which cannot efficiently present them\. Whatever tumour inhibition we observe may therefore carry non\-specific innate contributions from the circRNA backbone and the adjuvant\. The experiment that settles it is the same study run in an HLA\-A\*02:01 transgenic or humanised host, with tetramer staining to identify epitope\-specific CD8⁺ T cells directly and an irrelevant\-epitope arm alongside the empty vector\. This is our highest priority, and the other four fit best around it\.

**Validating the other three antigens in vivo\.** The tumour model overexpresses TROP2 alone, so the B7\-H4, Nectin\-4 and LIV\-1 epitopes had no target in it\. TROP2 was chosen deliberately as the representative antigen, being the strongest performer in the primary screen\. Extending the work means building 4T1 lines overexpressing each of the remaining three by the same lentiviral route, and then a line co\-expressing all four, which would test in one model whether the epitopes of the cassette act together\.

**Taking safety into an organism\.** The safety work in this project was done entirely in cell culture, and what it establishes is specificity and a working dose window\. The study that would support a tolerability claim is a repeat\-dose toxicology study in both sexes at the efficacy dose and a deliberate multiple of it, on the dosing schedule actually proposed, with a recovery cohort, clinical chemistry and haematology, histopathology of the organs where the target antigens are expressed at low level, and biodistribution of both the circRNA and a labelled carrier\. It pairs naturally with the transgenic model above: the same animals can carry the specificity readouts and the toxicology endpoints, which is also the arrangement the 3Rs favour\.

**Characterising the particle\.** Our LNP is commercially sourced and its composition is proprietary, so we can attribute no effect to any specific lipid\. With access to dynamic light scattering, zeta potential measurement and a RiboGreen encapsulation assay, we would characterise each batch and require a certificate of analysis for it\. The single experiment that would add most is running loaded and empty particles on the same plate across the same dose series, which separates carrier toxicity from innate activation by the cargo\.

**Widening the population the design can serve\.** Adding antigens broadens the response within a patient and leaves the fraction of patients served unchanged, since that is bounded by HLA\-A\*02:01\[9\]\. Covering further HLA supertypes means returning to the prediction stage and building allele\-matched cassettes\. The platform is suited to it: the backbone, the adjuvant module and the trafficking elements stay as they are, and only the antigen zone of Figure 6 is rebuilt\.

---

## References

1. Gao G, Wang Z, Qu X, Zhang Z\. Prognostic value of tumor\-infiltrating lymphocytes in patients with triple\-negative breast cancer: a systematic review and meta\-analysis\. *BMC Cancer\.* 2020;20:179\. doi:10\.1186/s12885\-020\-6668\-z

2. Individualized mRNA vaccines evoke durable T cell immunity in adjuvant TNBC\. *Nature\.* doi:10\.1038/s41586\-025\-10004\-2\. PMID: 41708868

3. Jeck WR, Sorrentino JA, Wang K, et al\. Circular RNAs are abundant, conserved, and associated with ALU repeats\. *RNA\.* 2013;19\(2\):141–157\. PMID: 23249763

4. Enuka Y, Lauriola M, Feldman ME, Sas\-Chen A, Ulitsky I, Yarden Y\. Circular RNAs are long\-lived and display only minimal early alterations in response to a growth factor\. *Nucleic Acids Res\.* 2016;44\(3\):1370–1383\. PMID: 26657629

5. Gong Z, Hu W, Zhou C, Guo J, Yang L, Wang B\. Recent advances and perspectives on the development of circular RNA cancer vaccines\. *npj Vaccines\.* 2025;10:41\. doi:10\.1038/s41541\-025\-01097\-x

6. Future potential targets of antibody–drug conjugates in breast cancer\. PMC10063401

7. Trop2\-based antibody–drug conjugates: emerging strategy and progress in triple\-negative breast cancer therapy\. *Curr Oncol\.* doi:10\.3390/curroncol33020092\. PMID: 41744856

8. TROP2\-targeting antibody–drug conjugates in breast cancer and ovarian carcinoma: therapeutic advances and resistance mechanisms\. PMID: 42040770; PMC13103265

9. IEDB Population Coverage tool\. https://tools\.iedb\.org/population/

10. Nielsen M, Lundegaard C, Lund O, Keşmir C\. The role of the proteasome in generating cytotoxic T cell epitopes: insights obtained from improved predictions of proteasomal cleavage\. *Immunogenetics\.* 2005;57:33–41\. PMID: 15744535

11. Kreiter S, Selmi A, Diken M, et al\. Increased antigen presentation efficiency by coupling antigens to MHC class I trafficking signals\. *J Immunol\.* 2008;180\(1\):309–318\. PMID: 18097032

12. Bergmann\-Leitner ES, Duncan EH, Leitner WW, et al\. C3d\-defined complement receptor\-binding peptide p28 conjugated to circumsporozoite protein provides protection against *Plasmodium berghei*\. *Vaccine\.* 2007;25\(45\):7732–7736\. PMID: 17931754

13. In silico design and in vitro validation of a multi\-epitope peptide vaccine targeting triple\-negative breast cancer\. *Front Oncol\.* 2025;15:1611991\. PMID: 40626008

14. Hou X, Zaks T, Langer R, Dong Y\. Lipid nanoparticles for mRNA delivery\. *Nat Rev Mater\.* 2021;6\(12\):1078–1094\. PMID: 34394960

15. Percie du Sert N, Hurst V, Ahluwalia A, et al\. The ARRIVE guidelines 2\.0: updated guidelines for reporting animal research\. *PLoS Biol\.* 2020;18\(7\):e3000410\. PMID: 32663219

