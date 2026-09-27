# Experiments

## Overview

To test whether the CirCure multi\-epitope circRNA vaccine can effectively activate cellular immunity specific to triple\-negative breast cancer, we designed a series of **progressively deeper experiments** around the sequence **construct → screen → optimise → validate → in vivo**\. They confirm not only that circRNA is **correctly translated inside dendritic cells** and that antigen is **presented on MHC\-I**, but also, layer by layer, that the vaccine **activates CD8⁺ T cells**, drives their **differentiation towards effector memory**, and ultimately **kills tumour cells**\. Through this **dual validation in vitro and in vivo**, we hope to demonstrate the feasibility of a multi\-epitope circRNA vaccine platform for TNBC immunotherapy\.

## 1\. Construction and in vitro synthesis of the circRNA vaccine

Everything starts with **turning a candidate epitope into a usable vaccine molecule**\. We first used **molecular cloning** to insert the CTL epitope coding sequences predicted by the dry lab into an expression plasmid carrying a **T7 promoter** and the **circularisation elements**; after confirmation by **double digestion and Sanger sequencing**, this plasmid served as the **in vitro transcription template**\. **T7 RNA polymerase** then transcribed a linear RNA, the DNA template was removed and the RNA purified, and a **self\-splicing intron** was used to drive **covalent closure into a circle**\. The circular structure makes circRNA **more stable and more resistant to nuclease degradation** than a linear mRNA, allowing **sustained antigen expression inside the DC** — precisely the core advantage of this platform\. Finally, **RT\-qPCR with divergent and convergent primers** confirmed circularisation, delivering **qualified vaccine material** for all subsequent cell and animal experiments\.

### 1\.1 Epitope plasmid construction

**Background**｜Producing circRNA at scale first requires a DNA template that can be transcribed efficiently in vitro\. Restriction–ligation cloning generates complementary sticky ends on the vector and the insert, and T4 ligase joins them directionally, inserting the CTL epitope sequences selected in the dry lab into a prokaryotic plasmid carrying a T7 promoter\. The recombinant plasmid is amplified in *E\. coli* and, once sequence\-verified, serves as the in vitro transcription \(IVT\) template\. This is the starting point of the entire circRNA vaccine production chain, and its sequence accuracy directly determines whether the downstream antigen is correct\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Epitope template DNA; forward/reverse primers carrying BamHI/PmeI sites|Primer working solution 10 µM|
|2× Taq PCR StartMix; ddH₂O|Per reaction below|
|BamHI, PmeI; 10× rCutSmart Buffer; BSA|2 µL of each enzyme|
|T4 DNA ligase \+ ligase buffer; PEG\-4000 \(optional ligation enhancer\)|1 µL each|
|Competent *E\. coli* \(e\.g\. DH5α\); SOC medium|25 µL / 200 µL|
|Ampicillin \(Amp, final 100 µg/mL\) LB plates and broth; gel extraction kit|As required|
|Endotoxin\-free plasmid miniprep kit|TIANGEN \#DP123|

**Equipment**｜Thermal cycler, agarose gel electrophoresis system, UV/long\-wave gel imager, shaking incubator, dry bath, centrifuge, biosafety cabinet\.

**Step\-by\-Step Instructions**

**PCR Amplification** \[1\]

1. Assemble a 20 µL PCR reaction containing 2 µL template, 10 µL 2× Taq StartMix, 0\.4 µL each of the forward and reverse primers, and 7\.2 µL ddH₂O\.

2. Amplify on the thermal cycler with initial denaturation at 94 ℃ for 2 min, then 25–30 cycles of \(94 ℃ 30 s → 55–65 ℃ 30 s → 72 ℃ 60 s/kb\), and a final extension at 72 ℃ for 5–10 min\.

3. Run the PCR product on a 1% agarose gel to confirm the band size, then excise and recover the target fragment\.

**Digestion \& Ligation** \[2\]\[3\]

4. Digest the insert \(25 µL product \+ 3 µL 10× Buffer \+ 2 µL of each enzyme\) and the vector \(20 µL reaction, see below\) with BamHI and PmeI\.

|Material|Amount|
|---|---|
|Backbone plasmid|1 µg|
|10× rCutSmart Buffer|2 µL|
|100× BSA|0\.2 µL|
|BamHI|2 µL|
|PmeI|2 µL|
|ddH₂O|up to 20 µL|

5. Digest at 37 ℃ for 30 min, then recover after electrophoresis\.

6. Set up the ligation at a vector : insert molar ratio of 1 : \(3–5\): 7\.5 µL DNA mix \+ 1 µL 10× T4 Buffer \+ 1 µL T4 ligase \(about 10 µL total\), and ligate at 22 ℃ for 10–20 min\.

**Transformation \& Screening** \[4\]

7. Add 3 µL of ligation product to 25 µL competent cells, hold on ice for 15 min, heat\-shock at 42 ℃ for 45 s, then immediately return to ice for 5 min\.

8. Add 200 µL SOC medium and recover at 37 ℃ with shaking for 1 h\.

9. Spread the culture on Amp\-containing LB plates, incubate overnight at 37 ℃, and the next day pick single colonies for Sanger sequencing\.

**Miniprep**

10. Inoculate a sequence\-verified culture into 2 mL Amp\-containing LB, shake at 37 ℃ for 12–16 h, extract the plasmid with the endotoxin\-free kit and store at −20 ℃\.

**Notes**

1. If the buffers of the two enzymes are incompatible, digest sequentially or switch to a universal buffer; the vector can be treated with alkaline phosphatase to remove the 5′ phosphate and further reduce the self\-ligation background\. \[5\]

2. Very short epitope fragments can also be obtained directly as double\-stranded inserts by annealing complementary oligonucleotides instead of by PCR, which avoids mutations introduced during amplification\.

3. Construct count: for the round\-1 screen this project built **13 single\-epitope plasmids** — TROP2 ×3 \(CTL1–3\), B7\-H4 ×2 \(CTL1, CTL3\), Nectin\-4 ×3 \(CTL2–4\) and LIV\-1 ×5 \(CTL1–5\); in round 2 a further **multi\-epitope combined vaccine plasmid, pCirCure\-circMEV \(5267 bp\)**, was built, giving **14 constructs in total**\. ⚠️ This count is provisional: the final single\-epitope number is still being confirmed by the wet\-lab team, and every count on this page must be updated together if it changes\.

### 1\.2 **circRNA synthesis and circularity verification**

**Background**｜circRNA is a covalently closed circular RNA with no free 5′/3′ ends; it resists exonuclease degradation better than a linear mRNA and expresses for longer, which is the core of this platform's stability\. In this experiment, a linearised epitope plasmid serves as the template for T7 in vitro transcription \(IVT\) of a precursor RNA, which is then circularised into a covalently closed circRNA by self\-splicing of a permuted group I intron–exon \(PIE\) element\. Circularisation is then confirmed by RT\-qPCR with divergent versus convergent primers\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Recombinant epitope plasmid \(template\)|1 µg, linearised by digestion|
|BamHI \+ PmeI \+ 5×/10× Buffer|2 µL of each enzyme|
|Phenol:chloroform \(1:1\), chloroform, 3 M NaOAc \(pH 5\.2\), absolute/70% ethanol|As required|
|HiScribe® T7 Quick High Yield RNA Synthesis Kit|NEB \#E2050S, 20 µL reaction|
|DNase I \(RNase\-free\)|2 µL|
|7\.5 M LiCl \(10 mM EDTA\)|25 µL / 50 µL|
|GTP, Mg²⁺ \(self\-splicing cofactors / circularisation buffer\)|GTP final 2 mM, MgCl₂ final 10 mM \(50 mM Tris\-HCl, pH 7\.5\)|
|RNase R|2\.0 µg RNA \+ 2 µL 10× Buffer \+ 2 U RNase R \+ water to 20 µL, 37 ℃|
|Reverse transcription \+ RT\-qPCR kits, divergent primers, convergent primers|Per kit|
|Nuclease\-free water, 0\.1 mM EDTA|As required|

**Equipment**｜Thermal cycler, real\-time PCR instrument, dry bath, micro\-volume spectrophotometer \(NanoDrop\), biosafety cabinet, centrifuge; nuclease\-free consumables throughout\.

**Experimental Design \(controls and replicates\)**｜**Controls**: divergent primers \(circular\) and convergent primers \(linear\) act as reciprocal controls to distinguish circular from linear template\. Every construct is carried through the same preparation route, including the RNase R purification step, and the RT\-qPCR is run on the purified product; the two primer sets are assayed side by side on the same cDNA and the ratio is obtained from the ΔCq between them\. A no\-template control \(NTC\) is included on every plate\. **Scope of the measurement**: the thirteen constructs share one backbone and differ only in a short epitope cassette of near\-identical length, so the quantification was run on **one representative construct, TROP2\-CTL1**; the remaining twelve were not quantified individually\. **Replicates**: each primer set is run at 2/4/6 µL in **3 technical replicate wells per loading volume**, giving 9 Cq values per primer set for that construct\.

Back\-splice junction sequencing was performed on the Combined vaccine only \(3\.2 step 10\)\. For the constructs of this round, circularity rests on the divergent/convergent RT\-qPCR above\.

**Step\-by\-Step Instructions**

**Template Linearisation \& Purification**

1. Digest the plasmid completely with BamHI and PmeI in a 50 µL reaction \(1 µg plasmid, 10 µL 5× Buffer, 2 µL of each enzyme\) at 37 ℃ for 3 h\.

2. Run the digestion product on a 1% agarose gel to confirm that no supercoiled plasmid remains, then purify by extracting twice with phenol:chloroform and once with chloroform\.

3. Add 1/10 volume of 3 M NaOAc and 2 volumes of absolute ethanol to the aqueous phase, precipitate at −20 ℃ for 30 min, and recover the DNA by centrifugation at 4 ℃ for 15 min\.

4. Wash with 70% ethanol, air\-dry, and dissolve in nuclease\-free water to 0\.5–1 µg/µL as the transcription template\.

**In Vitro Transcription** \[6\]

5. Assemble a 20 µL in vitro transcription reaction at room temperature according to the HiScribe® T7 kit, mix, and incubate at 37 ℃ for 2 h to synthesise the precursor RNA\.

**DNase I Treatment**

6. Add 30 µL nuclease\-free water and 2 µL DNase I and incubate at 37 ℃ for a further 15 min to remove the DNA template completely\.

**LiCl Precipitation**

7. Bring the reaction to 50 µL, add 25 µL 7\.5 M LiCl and mix, stand at −20 ℃ for 30 min, then pellet the RNA by centrifugation at ≥16,000 × g, 4 ℃, for 15 min\.

8. Discard the supernatant, wash with 500 µL pre\-chilled 70% ethanol, air\-dry for 5 min, and resuspend in 50 µL 0\.1 mM EDTA\.

**Circularisation** \[7\]

9. Assemble the reaction according to the circularisation kit \(containing GTP and Mg²⁺\) and incubate at 55 ℃ for 10–15 min to allow the precursor RNA to self\-splice into a circle\.

**RNase R Digestion** \[22\]

10. Digest the linear RNA in the circularisation product with RNase R \(2 U per 2\.0 µg RNA in a 20 µL reaction, 37 ℃\)\.

**Circularisation Assay: RT\-qPCR**

11. Measure A260/280 on the micro\-volume spectrophotometer to assess purity and concentration\.

12. Reverse\-transcribe the digested product to cDNA and quantify by RT\-qPCR with divergent and convergent primers, loading **2/4/6 µL in 3 replicate wells per volume for each primer set** — one row of 9 wells per primer set on the same plate\. Run 95 ℃ 3 min; 40 × \(95 ℃ 10 s → 60 ℃ 30 s\), record the Cq of every well, and calculate the ratio as Ratio = 2^\(−ΔCq\)\.

**Notes**

1. The quantity is measured on RNase R–purified material\. Purification removes linear precursor rather than converting it into circles, and a small amount of highly structured linear RNA can survive digestion, so the circular fraction describes the composition of the released material and is a close upper estimate\. Divergent primers also give some non\-specific amplification on uncircularised precursor\. Direct evidence of covalent closure comes from BSJ sequencing, performed on the Combined vaccine \(3\.2 step 10\)\.

2. Circularisation is sensitive to Mg²⁺ concentration and temperature: excess Mg²⁺ promotes non\-specific folding and gel smearing, while too low a temperature leaves self\-splicing incomplete\. Optimise conditions for each sequence, aliquot circRNA at −80 ℃, and avoid repeated freeze–thaw\.

3. **Read the three loading volumes before trusting the ratio\.** Across 2 → 4 → 6 µL the Cq should fall by roughly 1 cycle per doubling of input for both primer sets; a series that flattens indicates saturation, and one that scatters indicates pipetting error\. Take the ratio only from a loading series that behaves, and check that the three replicate wells at each volume agree closely before using their mean\.

## 2\. Round 1: single\-epitope immunogenicity screening

With circRNA for the **13 single\-epitope constructs** in hand, the task of round 1 was to identify **which of them are genuinely immunogenic**\. Starting from commercially sourced human PBMC of defined **HLA\-A\*02:01** type, we sorted monocytes and induced them into **dendritic cells** while also sorting **autologous T cells**; each single\-epitope circRNA was **electroporated separately** into DCs, which were then **co\-cultured with autologous T cells** so that the translated epitope could be **presented on MHC\-I**\. **ELISpot quantification of antigen\-specific IFN\-γ secretion** served as the main criterion, supported by **cytotoxicity and flow\-cytometric activation assays**, comparing the strength of the T cell response induced by each epitope one by one\. The purpose is to select, from each of the four antigens — **TROP2, B7\-H4, Nectin\-4 and LIV\-1** — the **two most immunogenic epitopes** to carry into the next round of combined construction\. The per\-antigen ceiling of two is set by **B7\-H4, which entered round 1 with only two constructs**; taking two from every antigen is what keeps the four antigens equally represented in the cassette\.

### 2\.1 DC preparation and circRNA delivery

**Background**｜Dendritic cells \(DCs\) are the most powerful professional antigen\-presenting cells and are key to initiating a CTL response\. Human peripheral blood CD14⁺ monocytes differentiate into immature monocyte\-derived DCs \(moDC\) under GM\-CSF \+ IL\-4\. In this experiment CD14⁺ monocytes are positively selected by magnetic beads from commercial HLA\-A\*02:01 PBMC and induced into moDCs, then circRNA is introduced by electroporation so that the epitope is translated intracellularly and presented on MHC\-I\. The resulting "circRNA\-loaded DC" is the central tool for all subsequent immunological readouts\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Commercial HLA\-A\*02:01 PBMC|Typed and quality\-controlled|
|Human peripheral blood lymphocyte separation medium|TBD LTS1077, density 1\.077 g/mL|
|MACS buffer|39 mL 0\.9% NaCl \+ 0\.8 mL albumin \+ 160 µL 0\.5 M EDTA \(degassed, pre\-chilled\)|
|CD14⁺ MicroBeads \+ separation column|Miltenyi Biotec; 80 µL buffer \+ 5 µL beads per 10⁷ cells|
|RPMI\-1640 \+ 10% FBS \+ 1% P/S|Complete medium|
|Recombinant human GM\-CSF|100 ng/mL|
|Recombinant human IL\-4|50 ng/mL|
|Purified circRNA|5 µg / 1×10⁶ DC|
|Nucleofector II electroporation buffer|Human DC program U\-002, 100 µL per reaction|

**Equipment**｜Centrifuge with slow acceleration/deceleration, MACS separator \+ high\-gradient magnet, Nucleofector II electroporation system, CO₂ incubator, biosafety cabinet, haemocytometer\.

**Step\-by\-Step Instructions**

**PBMC Isolation** \[8\]

1. Dilute PBMC \(or whole blood\) with 1× PBS \(pH 7\.2–7\.4\) and layer slowly down the tube wall onto the surface of the separation medium, keeping the interface intact\.

2. Centrifuge at room temperature at 2000 rpm for 15 min with slow acceleration and deceleration so that mononuclear cells form a buffy layer\.

3. Aspirate the buffy layer with a Pasteur pipette into a 50 mL tube, add 5–10 volumes of PBS, centrifuge at 2200 rpm for 5 min, and wash twice\.

**CD14⁺ MACS Sorting** \[9\]

4. Resuspend in MACS buffer and count; mix at a ratio of 80 µL buffer \+ 5 µL CD14⁺ MicroBeads per 10⁷ cells and incubate at 4 ℃ in the dark for 15 min\.

5. Pass the suspension through the magnetic column, collect the flow\-through \(CD14\-negative, contains T cells, retained for 2\.2\), and wash the column three times with 3 mL buffer each\.

6. Remove the column from the magnet, add 5 mL buffer and use the plunger to flush the bound CD14⁺ monocytes into a fresh tube; collect by centrifugation at 1500 rpm for 5 min\.

**DC Differentiation** \[10\]

7. Resuspend CD14⁺ monocytes in RPMI\-1640 containing 10% FBS and add GM\-CSF 100 ng/mL and IL\-4 50 ng/mL\.

8. Culture at 37 ℃, 5% CO₂ for 7 days to induce immature DCs, performing a half\-volume medium change with fresh cytokines every 3 days\.

**circRNA Electroporation** \[11\]

9. Harvest the immature DCs and use the Nucleofector II human DC program \(U\-002\) to electroporate 5 µg circRNA into 1×10⁶ DCs in 100 µL electroporation buffer\.

10. Immediately after electroporation, add pre\-warmed complete medium to stop the reaction and return the cells to the incubator for 24 h of recovery\.

**Notes**

1. Adjust cytokines by stage: during antigen loading and maturation, IL\-4 is usually reduced or removed while GM\-CSF is maintained or lowered; the DC–T co\-culture stage no longer depends on GM\-CSF/IL\-4\. Staged adjustment helps keep the DC phenotype stable\.

2. Confirm DC viability \> 90% before electroporation to avoid non\-specific fluorescence from dead cells in downstream flow cytometry; if the monocyte fraction is low, a brief plastic\-adherence step can enrich it first\.

### 2\.2 T cell isolation and DC–T co\-culture

**Background**｜Detecting a CTL response requires antigen\-specific T cells\. This step positively selects CD3⁺ T cells by magnetic beads from the CD14\-negative flow\-through and co\-cultures them with autologous circRNA\-loaded DCs — the DC presents the epitope to the T cell, reproducing "antigen presentation → T cell priming" in vitro\. DC : T is fixed at 1 : 20 in this system\. This co\-culture system is upstream of all functional readouts: ELISpot, activation flow cytometry and killing assays\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|CD14\-negative flow\-through retained from 2\.1|Contains T cells|
|CD3⁺ MicroBeads \+ separation column|Miltenyi Biotec; 80 µL buffer \+ 20 µL beads per 10⁷ cells|
|MACS buffer|As in 2\.1 \(pre\-chilled\)|
|T cell medium \(RPMI\-1640 \+ 10% FBS ± IL\-2\)|IL\-2 20–50 IU/mL \(added during long\-term priming\)|
|circRNA\-loaded DCs|From 2\.1|
|30 µm pre\-separation filter|Prevents column clogging|

**Equipment**｜MACS separator, centrifuge, CO₂ incubator\.

**Step\-by\-Step Instructions**

**CD3⁺ MACS Sorting** \[12\]\[13\]

1. Take the CD14\-negative flow\-through retained in 2\.1 and add 80 µL MACS Buffer \+ 20 µL CD3 MicroBeads per 10⁷ cells; incubate at 2–8 ℃ for 15 min\.

2. Before loading the column, the cells must be wetted and filtered through a 30 µm pre\-separation filter to prevent clumps from clogging it; then pass the suspension through the magnetic column and wash three times with 3 mL pre\-chilled buffer each to remove unbound cells\.

3. Remove the column from the magnet, add 5 mL buffer and flush rapidly with the plunger; collect the CD3⁺ T cells and centrifuge at 1500 rpm for 5 min\.

4. Resuspend the CD3⁺ T cells in T cell medium\.

**DC–T Co\-culture** \[14\]

5. Mix DCs electroporated with circRNA 24 h earlier with autologous CD3⁺ T cells at 1 : 20\.

6. Co\-culture at 37 ℃, 5% CO₂ for downstream ELISpot, flow cytometry or killing assays\.

7. Short\-term culture \(24 h ELISpot / CD69 flow cytometry\): no exogenous IL\-2, to avoid background interference\. Long\-term priming \(7–10 days\): supplement low\-dose IL\-2 \(20–50 IU/mL\) every 3 days\.

**Notes**

1. CD3⁺ T cells should be sorted from the flow\-through after CD14 depletion to avoid monocyte contamination; if necessary, residual monocytes can first be removed by adherence\.

2. Primary antigen sensitisation usually requires 7–10 days and can be repeated to expand antigen\-specific T cells; a single 24 h co\-culture is relatively short and may underestimate the frequency, so priming can be extended if sensitivity is a priority\.

### 2\.3 ELISpot assay and spot counting

**Background**｜ELISpot detects IFN\-γ–secreting antigen\-specific T cells at the single\-cell level and is one of the most sensitive and specific methods for evaluating a vaccine\-induced CTL response\. IFN\-γ secreted by activated T cells is captured by the plate\-bound antibody and developed into an insoluble spot through biotin–streptavidin–HRP–AEC; the spot count \(SFC\) directly reflects the frequency of antigen\-specific T cells\. This step was used in round 1 to select the most immunogenic of the 13 single\-epitope constructs\. \[15\]

**Round 1 was run as a ranking screen with no negative control\.** See the Experimental Design note below before using any number from this round\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Human IFN\-γ Precoated ELISpot Kit|Dakewe \#2110005|
|RPMI\-1640; deionised water|Activation / lysis|
|Wash buffer \(0\.05% Tween\-20 in PBS\)|50× dilution|
|Biotinylated detection antibody, streptavidin\-HRP, AEC substrate|Supplied in kit, 100 µL/well|
|DC–T co\-culture cells \(from 2\.2\)|1×10⁵/well|

**Equipment**｜ELISpot reader/analysis system, CO₂ incubator, biosafety cabinet, centrifuge\.

**Experimental Design \(controls and replicates\)**｜**Controls: none were included in round 1 — neither negative nor positive\.** This round was deliberately run as a **pure between\-construct comparison** whose only purpose was to rank the candidate constructs\. **No negative control well of any kind was seeded** \(neither an empty\-vector well nor an antigen\-free well\), and **the kit's PHA positive\-control well was not run either**\. Consequently **SFC is reported as the raw spot count per 1×10⁵ cells, with no background subtraction**, and no value from this round may be cited as an antigen\-specific T\-cell frequency\. **Replicates**: **no replicate\-well count is on record**; the values should be treated as single determinations, and no statistical test is performed on them\. The empty\-vector \(vector\) control was introduced only from round 2 onwards — see 4\.4\.

**Step\-by\-Step Instructions**

**Cell Seeding** \[16\]

1. Add 200 µL RPMI\-1640 per well to the pre\-coated plate, activate at room temperature for 10 min, then discard\.

2. Seed the DC–T co\-culture cells at 1×10⁵ per 100 µL per well, together with the control wells defined in the Experimental Design\.

3. Incubate the plate at 37 ℃, 5% CO₂ in the dark for 20 h; do not shake during incubation or spot morphology will be distorted\.

**Lysis \& Washing**

4. Discard the cells and add 200 µL pre\-chilled deionised water per well to lyse at 4 ℃ for 10 min\.

5. Wash the plate 6 times with 260 µL wash buffer per well and blot dry on absorbent paper after the final wash\. Never allow the PVDF membrane to dry out between washes\.

**Detection \& Development** \[16\]

6. Add 100 µL biotinylated detection antibody per well, incubate at 37 ℃ for 1 h, then wash 5 times\.

7. Add 100 µL streptavidin\-HRP per well, incubate at 37 ℃ for 1 h, wash and blot dry\.

8. Add 100 µL AEC substrate per well and develop at room temperature in the dark for 5–15 min, stopping immediately once spots are clearly visible and never beyond 20 min; stop by rinsing 3–5 times with deionised water, then unclip the plate bottom and rinse the back of the membrane\. Mabtech \& Abcam ELISpot Guides

**Spot Counting**

9. After air\-drying, count round spots with a halo on the reader and report SFC per 1×10⁵ cells, stating whether the count is raw or background\-subtracted\.

**Notes**

1. High background usually results from insufficient washing or blocking; do not touch the coated area of the plate bottom, and AEC development must be kept dark and strictly timed to prevent spots from merging\.

2. Plan the control wells before seeding: include the kit PHA positive well, and an antigen\-free or empty\-vector negative well\. Subtract the negative well before reporting any count as an antigen\-specific frequency\.

3. Seed the same T\-cell input into every well\. SFC is comparable between constructs only if the denominator is identical, so report it per 1×10⁵ cells and verify the count rather than assuming it\.

### 2\.4 **Calcein\-AM killing assay \(K562\)**

**Background**｜Ultimately a vaccine must be judged on whether effector T cells can kill target cells\. Calcein\-AM is a lipophilic, non\-fluorescent dye; once inside a live cell it is hydrolysed by esterases into charged, intracellularly retained fluorescent calcein\. When the target cell is lysed, calcein is released into the supernatant, and supernatant fluorescence correlates positively with the degree of lysis, allowing the killing rate to be quantified\. This step serves as the overall cytotoxicity readout of effector T cells during preliminary vector screening \(K562 as target\)\. \[17\]\[18\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|K562 target cells|E:T = 80:1; 1×10⁶/mL for labelling, 5×10⁴/mL for plating|
|Calcein\-AM|Final concentration 1 µM|
|Medium with 5% FBS; PBS|As required|
|4\.2% Triton X\-100|Maximum\-release wells, 10 µL/well|
|96\-well flat plate / black 96\-well plate|3 replicate wells per condition|

**Equipment**｜CO₂ incubator, microplate reader \(Ex 485 / Em 528 nm\), centrifuge, microscope\.

**Experimental Design \(controls and replicates\)**｜**Controls**: spontaneous\-release wells \(target \+ medium\) and maximum\-release wells \(target \+ 4\.2% Triton X\-100\), which define the lower and upper bounds of the killing calculation\. **Replicates**: **3 replicate wells per condition**, on a single plate — technical replicates only, with no biological replication across effector\-cell batches\. All **13 round\-1 single\-epitope constructs** were assayed in parallel\.

**Step\-by\-Step Instructions**

**Target Labeling**

1. Harvest K562, wash once with PBS and adjust to 1×10⁶/mL, add Calcein\-AM to a final concentration of 1 µM, and incubate at 37 ℃ in the dark for 20–30 min\.

2. Wash away free dye and adjust the target cells to 5×10⁴/mL in medium containing 5% FBS\.

**Effector Preparation**

3. Harvest the co\-cultured effector T cells and adjust to 4×10⁶/mL in medium containing 5% FBS \(corresponding to 80:1\)\.

**Plating \& Co\-incubation**

4. Plate in a 96\-well plate: spontaneous wells \(100 µL target \+ 100 µL medium\), maximum wells \(100 µL target \+ 90 µL medium \+ 10 µL 4\.2% Triton\), experimental wells \(100 µL target \+ 100 µL effector\), 3 replicate wells each\.

5. Co\-incubate at 37 ℃, 5% CO₂ in the dark for 4 h\.

**Fluorescence Readout**

6. After the 4 h co\-incubation, the 96\-well plate must first be centrifuged at 200 × g for 5 min at room temperature; then transfer 100 µL supernatant per well to a black plate and measure fluorescence on the plate reader \(Ex 485 / Em 528 nm\)\.

7. Calculate the killing rate as:

Cytotoxicity \(%\) = \(F experimental − F spontaneous\) / \(F maximum − F spontaneous\) × 100%

**Notes**

1. Use K562 only as a readout of overall \(including NK\-like\) cytotoxic activity: it is MHC\-I–negative and antigen\-negative, so it cannot report antigen specificity\. Validate antigen\-specific killing on an HLA\-matched, antigen\-positive target such as MDA\-MB\-231 \(see 4\.5\)\.

2. Ageing target or effector cells and over\-long incubation both raise spontaneous release and depress the signal\-to\-noise ratio; use cells in good condition and control the incubation time\.

3. Treat replicate wells on one plate as a measure of precision only\. Where a small difference between constructs has to be shown to be real, plan biological replication as well — a repeat with an independently prepared effector\-cell batch\.

### 2\.5 **Flow validation of TROP2 epitopes**

**Background**｜CD69 is the earliest T cell activation marker, upregulated within 2–4 h of TCR signalling, and sensitively reflects whether antigen presentation has successfully initiated a T cell response\. This step uses multicolour flow cytometry to quantify the CD8⁺CD69⁺ double\-positive fraction at the single\-cell level, comparing the immediate activation induced by the TROP2\-CTL1 and CTL2 epitopes and providing independent functional evidence for epitope selection alongside ELISpot\. \[19\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|DC–T co\-culture cells \(prepared as in 2\.1–2\.2\)|1×10⁶/mL|
|Human Fc receptor block \(Human TruStain FcX\)|5 µL/tube|
|Fixable Viability Dye eFluor 780|1 µL|
|PE anti\-human CD8 \(clone SK1\)|0\.2 µg/10⁶|
|PerCP anti\-human CD69 \(clone FN50\)|0\.3 µg/10⁶|
|Flow staining buffer \(PBS \+ 2% FBS \+ 0\.1% sodium azide\); pre\-chilled PBS; single\-stain compensation beads|As required|

**Equipment**｜Flow cytometer \(488 nm\), refrigerated centrifuge with slow acceleration/deceleration, vortex mixer, 200 µm nylon mesh, 5 mL light\-protected flow tubes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: an isotype control tube, an unstained control tube and single\-stain compensation beads \(to build the compensation matrix\), plus a fixable viability dye to remove dead\-cell false positives before analysis\. ≥2×10⁴ events are acquired per tube\.

**Step\-by\-Step Instructions**

**Blocking \& Staining** \[20\]

1. Harvest, filter and count the co\-cultured cells, adjust to 1×10⁶/mL, add staining buffer and Fc block, and incubate at room temperature in the dark for 10 min\.

2. Add the fixable viability dye, incubate at 4 ℃ for 30 min, and wash once\.

3. Add CD8\-PE 0\.2 µg and CD69\-PerCP 0\.3 µg and incubate at 4 ℃ in the dark for 15 min, flicking the tube every 5 min\.

**Washing \& Resuspension**

4. Add 2 mL pre\-chilled PBS, centrifuge at 1500 rpm, 4 ℃, for 5 min and discard the supernatant\.

5. Disperse the pellet into a single\-cell suspension with vortex pulses \(2000 rpm\)\.

**Acquisition \& Analysis**

6. Warm up the instrument for 30 min and calibrate with compensation beads \(CV \< 5%\); set an FSC\-H \> 10⁴ threshold to exclude debris\.

7. Gate on the live cell population and quantify the CD8⁺\(PE\) CD69⁺\(PerCP\) double\-positive fraction\.

**Notes**

1. Multicolour staining requires single\-stain controls to build the compensation matrix; never auto\-compensate from a fully stained sample\.

2. Donor material from a single batch cannot separate an epitope effect from a donor effect; plan n ≥ 3 independent donor batches where the conclusion has to generalise beyond the donor\.

## 3\. Epitope optimisation and Combined vaccine construction

This round brings together the epitopes that were **most immunogenic in the primary screen**\. Guided by the **ELISpot data** we selected the **two highest\-SFC epitopes of each of the four antigens — 8 epitopes out of the 13** — joined them with **flexible linkers** and rebuilt them into an **optimised vector** that retains the core functional elements — the **T7 promoter**, the **T4 *****td***** circularisation intron**, the **translation enhancement element**, the **4×mC3dP28 adjuvant** and the **membrane\-localisation signal** — giving the **multi\-epitope Combined vaccine plasmid**\. It was then **transcribed, circularised and RNase R–purified** again to prepare a new batch of circRNA\. This step converges **"broad screening" into "a precise multivalent vaccine"** and is the key transition from candidate molecules to the final vaccine\.

### 3\.1 **Combined plasmid construction**

**Background**｜A single\-epitope vaccine has narrow coverage and is easily escaped by the tumour; concatenating several highly immunogenic epitopes into a multi\-epitope vaccine broadens the response and enhances efficacy\. Based on the round\-1 ELISpot data, this step selects the two strongest epitopes for each antigen out of the 13 \(**8 selected epitopes, carried in 8 tandem fragments**; because two of the selected Nectin\-4 epitopes overlap in the native sequence, one fragment spans both, so the cassette encodes **9 epitopes in 8 fragments**\), joins them with flexible linkers and rebuilds them into an optimised vector retaining T7, the circularisation intron, the translation enhancement element, the mC3dP28 adjuvant and the membrane\-localisation element, giving the Combined vaccine plasmid — the key transition from "broad screening" to "a precise multivalent vaccine"\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|ELISpot SFC data; bioinformatic tools|Linker/epitope design|
|Optimised backbone YRH pUC57\-ALL4\-4×mC3dP28|Contains AmpR, T7, T4 *td* intron, synIRES\-RC25, 4×mC3dP28, MITD, FLAG|
|BamHI/PmeI \+ Buffer; T4 ligase|2 µL each / 1 µL|
|Competent cells; Amp\-containing LB \(final 100 µg/mL\)|As required|
|Endotoxin\-free plasmid miniprep kit|TIANGEN \#DP123|

**Equipment**｜Thermal cycler, electrophoresis system, shaking incubator, centrifuge, biosafety cabinet\.

**Step\-by\-Step Instructions**

**Epitope Selection \& Design**

1. Rank the 13 single\-epitope constructs by IFN\-γ SFC and select the **two most immunogenic epitopes of each antigen \(8 in total\)**: TROP2\-CTL1/CTL2, B7H4\-CTL1/CTL3, Nectin4\-CTL2/CTL4 and LIV1\-CTL2/CTL3\. Where two selected epitopes of the same antigen **overlap in the native sequence**, synthesise them as a **single contiguous fragment** rather than as two\.

2. Insert flexible linkers between the epitopes, verify the reading frame throughout, and use bioinformatic tools to confirm that the linkers do not introduce new immunogenic epitopes\.

**Amplification \& Assembly** \[21\]

3. Amplify the optimised tandem epitope fragment by PCR \(reaction and program as in 1\.1\)\.

4. Use double digestion / homologous recombination to replace the original epitope sequence in the backbone seamlessly at a vector : insert molar ratio of 1 : 3\.

**Transformation \& Validation**

5. Transform and plate on Amp\-containing plates overnight at 37 ℃; the next day screen positive clones by colony PCR\.

6. Verify positive clones by double digestion and full\-length Sanger sequencing \(100% correct required\), then prepare endotoxin\-free plasmid and bank the strain\.

**Notes**

1. Linkers must balance flexibility against accessibility of cleavage sites, so that neighbouring epitopes do not sterically hinder processing and presentation; proteasomal cleavage prediction can be used to optimise the order of the epitopes\.

2. The longer the tandem sequence, the harder the cloning; it can be synthesised/assembled in segments and then joined, with the junctions sequenced particularly carefully\.

### 3\.2 **Combined circRNA synthesis and release testing**

**Background**｜As in 1\.2, the optimised Combined plasmid must be converted into qualified circRNA before the second round of functional validation\. The chemistry and the verification are unchanged from 1\.2 — the **same circularisation condition \(55 ℃, 10–15 min\)**, the **same RNase R digestion**, the **same divergent/convergent RT\-qPCR readout** and **BSJ Sanger sequencing of every construct**\. What this step adds is a **release framework** around that chemistry: a **template QC gate** before transcription and an **explicit release criterion** that each preparation must meet before it may be electroporated\. It prepares the round\-2 batch of circRNA — **five preparations: empty\-vector \(the Blank material used throughout Section 4\), TROP2\-CTL1, TROP2\-CTL2, TROP2\-CTL1\+2 and Combined**\.

This step is a **release test** and not merely a synthesis: each preparation is carried through RNase R purification and then quantified by RT\-qPCR, and the figure it returns is the **circular fraction** of the material that will actually be electroporated\. A preparation is released on that figure alone\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Optimised plasmids \(5 groups, including the empty vector\)|Template|
|SJ4435 / SJ4436 primers|Amplify the T7\-containing target region \(primer span \~402–3193 on the Combined plasmid, ≈ 2\.8 kb\) |
|Agarose \(1%\), 1× TAE, DNA ladder, nucleic\-acid stain|Template QC \(step 3\)|
|HiScribe® T7 Quick Kit|NEB \#E2050S|
|DNase I; 7\.5 M LiCl; 0\.1 mM EDTA; circularisation kit|As in 1\.2|
|RNase R|2\.0 µg RNA \+ 2 µL 10× Buffer \+ 2 U RNase R \+ water to 20 µL, **37 ℃ for 15 min \(fixed for the whole batch; do not vary between preparations\)**|
|Reverse transcription \+ RT\-qPCR kits|Circularisation quantification|

**Equipment**｜Thermal cycler / qPCR instrument, water bath, micro\-volume spectrophotometer, **agarose electrophoresis system and gel imager**, 96\-well plates, centrifuge\.

**Experimental Design \(controls and replicates\)**｜**Controls**: **divergent primers \(circular\) and convergent primers \(linear\) act as reciprocal controls** — both primer sets are assayed on the same cDNA, on the same plate, so the two Cq series are directly comparable\. A no\-template control \(NTC\) is included on every plate\. **Scope of the measurement**: of the five Round 2 preparations, the **Combined vaccine** was quantified by this assay \(3 technical replicate wells at the 4 µL input established in 1\.2\)\. The three TROP2 preparations and the empty vector were made by the same route and were not quantified individually\. **Release criterion**: the criterion applied to the quantified preparation is a **circular fraction ≥ 90%**; a preparation that does not reach it is re\-prepared from the transcription step\.

**Step\-by\-Step Instructions**

**Template Preparation**

1. Using the optimised plasmid as template, PCR\-amplify the T7 promoter–containing target region with the SJ4435/SJ4436 primers and purify it as the transcription template\.

2. Purify by column to remove residual primers, dNTPs and salts\.

3. **Template QC**: run an aliquot of each of the five purified templates side by side on one 1% agarose gel against a DNA ladder\. 

**IVT \& Template Removal** \[6\]

4. Transcribe in vitro with the HiScribe® T7 system at 37 ℃ for 2 h, then add DNase I and incubate at 37 ℃ for 20 min to remove the template\.

**Purification \& Circularisation** \[7\]\[22\]

5. Purify the RNA by LiCl precipitation \(as in 1\.2\), then circularise at 55 ℃ for 10–15 min \(the same condition as 1\.2\)\.

6. Digest the linear RNA in the circularisation product with RNase R \(2 U per 2\.0 µg RNA in a 20 µL reaction, 37 ℃ for 15 min\), using the **same digestion time for every preparation in the batch**\.

**Circularisation Assay**

7. Reverse\-transcribe the digested product to cDNA\.

8. Set up RT\-qPCR on the **same plate** for both primer sets, loading **4 µL into 3 replicate wells for each primer set**\. Run 95 ℃ 3 min; 40 × \(95 ℃ 10 s → 60 ℃ 30 s\), record the Cq of every well, and calculate the circular fraction as 2^\(−ΔCq\), where ΔCq = Cq\(divergent primers\) − Cq\(convergent primers\)\. Report as mean ± SD with n = 3\.

9. **Release decision**: compare the value against the ≥ 90% criterion\. If a preparation fails, do not proceed to electroporation; re\-prepare it and record the failure — a failed release is data, not a discard\.

**BSJ Verification \(every preparation\)**

10. For **every preparation**, amplify across the back\-splice junction \(BSJ\) by RT\-PCR with divergent primers and submit the product for Sanger sequencing\. Accept the trace only if it shows a flat baseline, single sharp peaks and no overlapping peaks on either side of the junction\.

**Notes**

1. **Name the quantity consistently\.** The Cq values are read on RNase R–digested material, so the figure derived from them is the **RNase R–resistant fraction**, and that is the name it should carry wherever it appears on the wiki\.

2. The 4 µL input is carried over from the loading series run in 1\.2, which established that this volume sits inside the linear range of the assay\. A single volume is sufficient only while the material and the primer sets are unchanged; if either changes, re\-run a 2/4/6 µL series first and settle on a volume from that before quantifying with replicates at one point\.

3. **Read the three loading volumes before trusting the ratio\.** Across 2 → 4 → 6 µL the Cq should fall by roughly 1 cycle per doubling of input for both primer sets; a series that flattens indicates saturation, and one that scatters indicates pipetting error\. The ratio should be taken only from a loading series that behaves, and the three replicate wells at each volume should agree closely before their mean is used\.

3. **Future work — the circularisation reaction itself\.** The 55 ℃ / 10–15 min condition was adopted empirically and was not gradient\-optimised at the time\. Both Mg²⁺ concentration \(too high → non\-specific folding, with gel smearing and secondary bands\) and reaction temperature \(too low → incomplete self\-splicing\) should be titrated as a gradient before this process is described as optimised\.

4. **Future work — digestion conditions\.** Excess RNase R or over\-long digestion can partly degrade loosely structured circular RNA; enzyme amount and digestion time should likewise be optimised as a gradient\.

5. Work RNase\-free throughout: dedicated pipettes and filter tips, gloves changed frequently, nuclease\-free water and tubes, samples kept on ice, and circRNA aliquoted and stored at −80 ℃ to avoid repeated freeze–thaw\.

6. **Release criterion and what to do when it is not met\.** A preparation whose RNase R–resistant fraction reaches ≥ 90% may proceed; one that does not must be re\-prepared from the transcription step\. **The number must not be pushed up by extending the digestion time** — longer digestion removes more linear RNA rather than making more circles, and it degrades the circle as well\.

7. **Data recording\.** Every well must be labelled with preparation name \+ loading volume \+ replicate\-well number, and the plate layout archived, so that the value reported for each of the five preparations can be traced back to the wells it came from\.

8. **How to read a set of BSJ traces that are all the same — and why that is the correct result\.** Every construct shares one backbone and differs only in the epitope cassette, while the back\-splice junction is formed between the flanking exons of the T4 *td* element — sequence that is **identical in every construct**\. A BSJ read taken with backbone\-anchored divergent primers therefore returns the **same junction sequence whichever preparation it came from**\. **Identical traces across all constructs are the expected outcome, not a duplication error**, and the set should be presented as such so that a reader does not mistake it for one trace copied several times\. What each trace establishes is that the permuted\-intron chemistry proceeded as designed **in that particular preparation** — which is exactly why running it on every construct is worth doing, even though the sequence read is common to all of them\. What it cannot establish is **which cassette is inside the circle**: for construct\-specific structural proof the divergent primers would have to be placed so that the amplicon spans the junction **and** reaches into the epitope cassette\. That is the one addition that would make this readout construct\-resolving\.

## 4\. Round 2: functional validation of the Combined vaccine

With the Combined vaccine available, round 2 sets out to answer one systematic question: **can it activate a complete and effective anti\-tumour immune chain?** Using the same DC/T system as round 1, we electroporated **four constructs** \(the single\-epitope, double\-epitope and Combined TROP2 constructs\) into DCs and then validated the response **link by link, in the natural order of an immune response**: first whether the **DC matures \(CD80/CD86\)** and whether the **antigen is translated \(anti\-FLAG WB\)**, then whether **T cells are activated and differentiate towards effector memory \(CD69, CD28, CD45RO⁺CCR7⁻\)**, and finally whether they **secrete cytokines \(ELISpot\)** and **genuinely kill TNBC target cells \(MDA\-MB\-231\)**\.

### 4\.1 **DC maturation**

**Background**｜For a DC to prime T cells effectively it must not only present antigen \(signal 1\) but also upregulate the co\-stimulatory molecules CD80/CD86 \(signal 2\)\. This step uses flow cytometry to measure the CD80⁺CD86⁺ mature fraction of DCs after electroporation with the different constructs, assessing the ability of each circRNA to promote DC maturation — the prerequisite for judging whether the vaccine can effectively initiate downstream T cell immunity\. \[23\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Immature DC \(iDC\); candidate circRNA; empty\-vector circRNA \(for the Blank group\)|Grouped electroporation; 5 µg circRNA / 1×10⁶ DC / 100 µL, Program U\-002 \(as in 2\.1\)|
|RPMI\-1640 complete medium|Culture for 24–48 h|
|Fluorochrome\-conjugated anti\-CD80, anti\-CD86|Surface staining, 0\.2–0\.5 µg/10⁶ \(determined by titration\)|
|Isotype control antibodies; flow staining buffer|Controls|

**Equipment**｜Nucleofector II electroporation system, flow cytometer, CO₂ incubator, centrifuge, biosafety cabinet\.

**Experimental Design \(controls and replicates\)**｜**Controls**: the Blank group is electroporated with **an equal amount of empty\-vector circRNA** \(retaining the complete circRNA backbone and the 4×mC3dP28 adjuvant element but encoding no epitope\) and serves as the **vector control**\. This design lets the Blank group subtract three backgrounds at once: the stress of electroporation itself, the innate immune stimulation of the circRNA backbone through intracellular sensors such as RIG\-I/MDA5, and the effect of the adjuvant element; each group also has an isotype control tube\. Electroporation conditions \(cell number, volume, program\) are identical across groups\. **Replicates**: **n = 3** — three independently electroporated wells per group, each acquired as a separate flow tube, and reported as mean ± SD of the three\. ≥2×10⁴ events are acquired per tube\.

**Step\-by\-Step Instructions**

**Grouped Electroporation** \[11\]

1. For each group, mix 100 µL cells with the corresponding circRNA \(the Blank group receives an equal amount of empty\-vector circRNA\), stand at room temperature for 5 min and avoid bubbles\.

2. Electroporate with the Nucleofector II human DC program \(U\-002\) and immediately add pre\-warmed RPMI complete medium to stop the reaction\.

3. Transfer to a 6\-well plate and culture at 37 ℃, 5% CO₂ for 24–48 h to induce maturation\.

**Flow Staining** \[20\]

4. Harvest DCs by centrifugation at 1200 rpm for 5 min and resuspend in 100 µL flow staining buffer\.

5. Add anti\-CD80 and anti\-CD86 \(with a separate isotype control tube\) and incubate at 4 ℃ in the dark for 30 min\.

**Acquisition**

6. Wash twice with 2 mL buffer, filter and acquire; gate on the DC population and quantify the CD80⁺CD86⁺ double\-positive fraction\.

**Notes**

1. A more complete maturation assessment could add CD83, HLA\-DR and CCR7; this experiment uses CD80/CD86 as the core markers\.

2. Use empty\-vector circRNA for the Blank group rather than mock electroporation or untreated cells, so that backbone and adjuvant stimulation is identical across groups and subtracted at the baseline\.

### 4\.2 **Antigen translation by anti\-FLAG Western blot**

**Background**｜For the vaccine to work, circRNA must first be genuinely translated into antigen protein inside the DC\. A FLAG tag was fused downstream of the epitopes during construction; this step uses Western blotting with an anti\-FLAG antibody to detect the expression product in DCs \(β\-actin as loading control\), confirming effective translation of the circRNA at the protein level and providing direct material evidence for its presentation on MHC\-I and activation of T cells\. \[24\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Electroporated DCs \+ blank control DCs|Samples|
|RIPA lysis buffer with protease inhibitors; PMSF; PBS; loading buffer; protein marker|PMSF 1 mM, protease inhibitor 1×; equal loading|
|SDS\-PAGE gel kit; running/transfer buffer; PVDF membrane; methanol|Electrophoresis and transfer|
|5% skimmed milk; anti\-FLAG primary antibody; HRP secondary antibody; TBST; ECL \(A/B\)|Immunoblotting/development|

**Equipment**｜Protein electrophoresis unit, transfer apparatus, chemiluminescence gel imager, shaker, ice box, centrifuge\.

**Experimental Design \(controls and replicates\)**｜**Controls**: Blank group DCs \(electroporated with empty\-vector circRNA\); β\-actin as the loading control\. Equal protein is loaded in every lane so that bands are comparable between groups\.

**Step\-by\-Step Instructions**

**Protein Extraction** \[25\]

1. Wash the DCs twice with PBS, add freshly prepared 1 mM PMSF and 1× protease inhibitor, keeping everything on ice, then add RIPA and lyse on ice for 30 min \(mixing every 10 min\)\.

2. Centrifuge at 14,000 × g, 4 ℃, for 15 min, take the supernatant and quantify protein; add loading buffer, denature in boiling water for 10 min and chill on ice\.

**SDS\-PAGE \& Transfer** \[26\]

3. Load equal amounts of protein together with the marker; run the stacking gel at 80 V until the dye front reaches the resolving gel, then switch to 120 V until the bromophenol blue runs off\.

4. Activate the PVDF membrane in methanol for 15–30 s, then equilibrate it in transfer buffer for 2–5 min; assemble filter paper–gel–membrane–filter paper, expel bubbles, and wet\-transfer at constant current 250–300 mA or constant voltage 100 V for 60–90 min\.

**Immunoblotting**

5. Block with 5% skimmed milk at room temperature for 1 h, then incubate with the anti\-FLAG primary antibody overnight at 4 ℃ on a shaker\.

6. Wash the membrane 3 times with TBST \(10 min each\), incubate with the HRP secondary antibody at room temperature for 1 h and wash 3 more times\.

**ECL Detection**

7. Mix ECL solutions A and B in equal volumes and apply; react in the dark for 1 min and expose on the imager \(β\-actin as loading control\), judging the FLAG band against the marker\.

**Notes**

1. An anti\-FLAG Western blot demonstrates translation/expression, not MHC\-I surface presentation directly; presentation is supported indirectly by the downstream ELISpot, activation and killing readouts\.

2. If the target band is weak, increase the loading, extend the exposure or use a more sensitive ECL; diffuse bands usually result from overloading or over\-transfer\.

### 4\.3 **T cell activation and memory differentiation**

**Background**｜A complete, high\-quality CTL response requires not only immediate activation but also co\-stimulatory support and differentiation towards a memory/effector phenotype\. This step uses flow cytometry to assess three dimensions — CD69 \(early activation\), CD28 \(maintenance of co\-stimulation and effector survival\) and CD45RO⁺CCR7⁻ \(effector memory differentiation\) — to characterise systematically the quality of the T cell response induced by the Combined vaccine\. \[27\]\[28\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|DC–T co\-culture cells for the four constructs \(see 2\.1–2\.2\)|1×10⁶/mL|
|Panel ① CD8\-PE \+ CD69\-PerCP|CD8 0\.2 µg, CD69 0\.3 µg /10⁶|
|Panel ② CD8\-PE \+ CD28\-APC|0\.2 / 0\.3 µg /10⁶|
|Panel ③ CD8\-PE \+ CD45RO\-FITC \+ CCR7\-APC|0\.2 / 0\.3 µg /10⁶|
|Fixable viability dye \(e\.g\. 7\-AAD or Zombie Aqua\)|Per manufacturer|
|Pre\-chilled PBS; cell fixation buffer; compensation beads|As required|

**Equipment**｜Flow cytometer, CO₂ incubator, centrifuge, vortex mixer, 5 mL light\-protected flow tubes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: the Blank group \(electroporated with empty\-vector circRNA\) as baseline; each panel also has isotype, unstained and single\-stain compensation controls, plus a fixable viability dye to exclude dead cells\. ≥2×10⁴ events are acquired per tube\. **Replicates**: **n = 3** per group for all three panels \(CD69, CD28, CD45RO/CCR7\) — three independently electroporated and co\-cultured wells, each acquired as a separate tube, and reported as mean ± SD of the three\.

**Step\-by\-Step Instructions**

**Antibody Staining** \[20\]\[29\]

1. Harvest T cells from each group, adjust to 1×10⁶/mL, centrifuge at 300 × g for 5 min and resuspend in about 100 µL\.

2. Add the antibody panel appropriate to the readout and incubate in the dark for 15–20 min \(flicking every 5 min\): Panels ① and ② \(CD8/CD69, CD8/CD28\) are stained at 4 ℃; Panel ③, which contains CCR7, is stained at 37 ℃\. Immediately after staining, wash with pre\-chilled PBS and acquire as soon as possible\.

**Washing \& Resuspension**

3. Add 2 mL pre\-chilled PBS, centrifuge at 1500 rpm, 4 ℃, for 5 min and discard the supernatant\.

4. Disperse into a single\-cell suspension with vortex pulses \(2000 rpm, 1–2 s × 3–5\)\.

**Acquisition \& Analysis** \[30\]

5. Calibrate with compensation beads and set an FSC\-H \> 10⁴ threshold; gate the lymphocyte population on FSC/SSC \(R1\)\.

6. Add a fixable viability dye \(e\.g\. 7\-AAD or Zombie Aqua\) to exclude non\-specific fluorescence from dead cells\.

7. Within the CD8⁺ gate, quantify the positive fraction for each marker: CD69, CD28 and CD45RO⁺CCR7⁻\.

**Notes**

1. CD28 can be downregulated with terminal effector differentiation, so the time point of detection matters; acquire promptly after staining, or fix and store at 4 ℃ in the dark \(noting that fixation may affect some epitopes\)\.

2. CCR7 stains poorly at 4 ℃, which is why Panel ③ is stained at 37 ℃ while the other panels are kept cold; after staining, wash with pre\-chilled PBS and acquire promptly, because surface receptors internalise once the cells are warmed\.

3. Use an empty\-vector circRNA Blank to subtract the innate contribution of the backbone and the adjuvant\. For proof of antigen specificity, add pMHC tetramer staining in a matched HLA system \(see Outlook O1\)\.

### 4\.4 Round\-2 ELISpot

**Background**｜Based on the same principle as 2\.3, this step repeats the ELISpot on the four optimised constructs to quantify and compare their ability to induce antigen\-specific IFN\-γ–secreting T cells, testing whether the multi\-epitope Combined vaccine is stronger than the single\-epitope constructs and providing direct immunogenicity evidence for the superiority of the design\. \[15\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Human IFN\-γ Precoated ELISpot Kit|Dakewe \#2110005|
|Blocking solution; wash buffer; biotinylated detection antibody; HRP\-streptavidin; AEC|Supplied in kit, 100 µL/well|
|DCs electroporated with the four circRNA constructs \+ autologous T cells \(see 2\.1–2\.2\)|DC : T = 1 : 20, 1×10⁵/well; plus Blank \(empty\-vector circRNA\)|

**Equipment**｜ELISpot reader/analysis system, CO₂ incubator, centrifuge, biosafety cabinet\.

**Experimental Design \(controls and replicates\)**｜**Control**: the Blank group is **DCs electroporated with empty\-vector circRNA** \(complete backbone and 4×mC3dP28 adjuvant, no epitope encoded\) co\-cultured with autologous T cells, and it provides the background against which every other group is read\. This is a **strict vector control**, not an untreated well — which is precisely the control that round 1 lacked \(see 2\.3\), and it is what allows the round\-2 increment to be attributed to the epitope\-encoding sequence\. T\-cell input numbers are identical across groups and results are reported as SFC per 1×10⁵ cells\. **Replicates**: **no replicate wells were run** — each group is a single well, so no error bar or statistical test can be derived from this assay and every value must be reported as a single determination\. Replicate wells should be added in any repeat of this experiment\.

**Step\-by\-Step Instructions**

**Blocking \& Co\-culture** \[16\]

1. Equilibrate the ELISpot plate to room temperature, add blocking solution and block at room temperature, then discard\.

2. Add DCs and autologous T cells for each group at DC : T = 1 : 20, 1×10⁵ cells per well, together with a Blank \(empty\-vector circRNA group\), and incubate at 37 ℃ in the CO₂ incubator for 20 h to stimulate IFN\-γ secretion\.

**Detection \& Development** \[16\]

3. Discard the cells and wash the plate 5 times with wash buffer, then add the biotinylated detection antibody and incubate at room temperature\.

4. Wash and add HRP\-streptavidin; incubate at room temperature\.

5. Wash and add AEC substrate, developing in the dark until spots are clearly visible, then stop with deionised water\.

**Spot Counting**

6. Air\-dry and count on the reader\.

**Notes**

1. The T cell input must be identical across constructs for SFC to be comparable; report SFC per 10⁵ cells\.

### 4\.5 MDA\-MB\-231 specific killing

**Background**｜Finally, it must be demonstrated that vaccine\-primed T cells can specifically kill real tumour cells\. This step uses the Calcein\-AM release assay with the human triple\-negative breast cancer line MDA\-MB\-231 \(HLA\-A\*02:01⁺, TROP2⁺\) as the target — compared with K562 in 2\.4, it carries both the correct HLA type and the target antigen, making it more reliable evidence of antigen\-specific killing and confirming the in vitro anti\-tumour activity of the vaccine at the functional level\. \[17\]\[18\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|MDA\-MB\-231 \(HLA\-A\*02:01⁺, TROP2⁺\)|Target cells; 1×10⁶/mL for labelling|
|Calcein\-AM|Label in the dark, final concentration 1 µM|
|0\.05% Trypsin\-EDTA or gentle cell dissociation buffer|Digest for \< 3 min|
|Medium with FBS; PBS; Triton X\-100|As required|
|Primed effector T cells of each group|E:T = 20:1 / 40:1 / 80:1|
|Black light\-protected 96\-well plate|3 replicate wells|

**Equipment**｜CO₂ incubator, fluorescence microplate reader \(Ex 485 / Em 530 nm\), centrifuge, microscope\.

**Experimental Design \(controls and replicates\)**｜**Controls**: spontaneous\-release wells \(target \+ medium\), maximum\-release wells \(target \+ Triton\) and blank wells \(medium only\)\. **Replicates**: 3 replicate wells per condition, at **three effector\-to\-target ratios, 20:1, 40:1 and 80:1**, to examine the dose dependence of killing\.

**Step\-by\-Step Instructions**

**Target Labeling** \[31\]

1. Take log\-phase MDA\-MB\-231 and detach briefly \(\< 3 min\) with 0\.05% Trypsin\-EDTA or a gentle cell dissociation buffer, washing twice with PBS after labelling to prevent damage to membrane proteins; then add Calcein\-AM and label at 37 ℃ in the dark for 30 min\.

2. Wash twice with complete medium to remove free dye and adjust to the required density\.

**Plating \& Co\-incubation**

3. Plate the activated T cells with the labelled target cells at **three E:T ratios, 20:1, 40:1 and 80:1**, with spontaneous, maximum \(Triton\) and blank wells, 3 replicates each\.

4. Co\-incubate at 37 ℃ in the dark for 4–6 h\.

**Fluorescence Readout**

5. Centrifuge at 200 × g for 5 min and carefully transfer the supernatant to a black 96\-well plate\.

6. Measure fluorescence on the fluorescence plate reader \(Ex 485 / Em 530 nm\) and calculate the specific killing rate as:

Specific lysis \(%\) = \(F experimental − F spontaneous\) / \(F maximum − F spontaneous\) × 100%

**Notes**

1. Pair the tumour target with an HLA\-matched, antigen\-negative target — or with a normal line of the same tissue origin — so that the comparison separates antigen recognition from HLA recognition\.

2. The Calcein\-AM release method suits short \(4–6 h\) killing assays; for longer time courses or higher sensitivity, LDH release or a luciferase reporter target cell can be considered\.

## 5\. Safety Exploration: In Vitro Groundwork

This block measures three quantities in vitro: **the in vitro resistance of circRNA to degradation, measured against its linear precursor** \(which feeds the dosing rationale — the more resistant the molecule, the lower the dose and the fewer administrations needed for the same effect\), **whether the T cells activated by the vaccine kill normal cells** \(off\-target cytotoxicity\), and **at what dose the LNP carrier still does not harm cells** \(the working\-dose ceiling\)\.

**How the three fit together\.** Safety is not a single measurement but a chain of them, and this block builds the first three links deliberately rather than opportunistically\. Each addresses a distinct way the platform could go wrong: the **molecule** could require so much material, so often, that exposure becomes the problem \(5\.1\); the **immune response it raises** could fail to tell tumour from healthy tissue \(5\.2\); and the **carrier that delivers it** could be toxic in its own right \(5\.3\)\. Together they give the platform a working envelope — how much, how often, and against what — before any animal is used, which is itself a 3Rs argument for doing this stage first\.

**What this stage establishes, and where it hands over\.** These are **cell\-based** experiments, so what they establish holds at the level of cells: a discrimination ratio, a dose ceiling, a persistence profile\. The tissue\-level questions that complete a safety case — repeat\-dose tolerance, organ histopathology, haematology and serum chemistry, immunotoxicity and biodistribution — are answered in an animal, and the study designed to answer them is set out in **Outlook O3**\. The two stages are one programme: the numbers obtained here **parameterised the Dry Lab model**, and that model in turn proposed the dose and schedule carried into the in vivo work in Section 7\. Reported accordingly, this block is the foundation of the safety case rather than a substitute for its in vivo half\.

### 5\.1 In vitro stability of circRNA versus linear RNA

**Background**｜circRNA has no free 5′/3′ ends and natively resists exonuclease degradation, so in principle it resists degradation better than linear RNA — this is the material basis of the platform's "low dosing frequency, durable expression" and also a prerequisite for safety: the higher the stability, the lower the nucleic\-acid dose and dosing frequency required for the same antigen expression, and the smaller the exposure of the body\. In this step, equal amounts of circRNA and its linear precursor RNA are incubated in parallel and sampled at 0, 24, 48 and 72 h, and the residual band intensity of the two is compared qualitatively by agarose gel electrophoresis\. \[7\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Purified circRNA / an equal amount of linear precursor RNA|Two groups in parallel at equal mass; **from the Combined batch \(3\.2\)**; specific preparation: the **Combined** circRNA|
|Incubation matrix|Incubated at 37 ℃; the matrix and the loading amount per time point are to be confirmed|
|1% agarose, nucleic acid stain, RNA marker|Electrophoresis|
|Micro\-volume spectrophotometer consumables; nuclease\-free consumables and water|Nuclease\-free throughout|

**Equipment**｜Dry bath / incubator \(37 ℃\), agarose gel electrophoresis system, gel imager, micro\-volume spectrophotometer; nuclease\-free consumables throughout\.

**Experimental Design \(controls and replicates\)**｜**State the material first\.** This experiment was performed on **circRNA from the Combined batch \(3\.2\)** — the same preparation run, circularisation condition and RNase R enrichment as the material used from round 2 onwards\. Because the platform\-level claim "circRNA is more stable than linear RNA" is carried forward into the dosing rationale, the reader must be able to tell which material it was measured on; measuring it on the vaccine batch rather than a round\-1 construct is what allows the claim to be stated without qualification\. The specific material used was the **Combined** circRNA of that batch\. **Control**: an equal mass of the linear precursor RNA serves as the parallel control group, incubated in the same matrix and at the same temperature as the circRNA; the 0 h lane of each group is its own baseline reference\. All time points are run side by side on the same gel so that the two RNAs are under identical electrophoresis and imaging conditions\. After imaging, band intensities are **integrated densitometrically**, normalised to the integrated signal of the DNA ladder lane of the same panel, and expressed relative to the 0 h lane of each RNA \(set to 1\.0\)\. **Each time point is a single lane with no biological replicate**, so only the relative residual amount at each time point is reported; **no decay fitting is performed and no half\-life or decay constant is reported**\.

**Step\-by\-Step Instructions**

**Sample Preparation \& Incubation**

1. Measure the concentration and A260/280 of the purified circRNA and the linear precursor RNA on the micro\-volume spectrophotometer and normalise both to the same mass concentration\.

2. Aliquot equal amounts of the two RNAs into nuclease\-free tubes, one tube per RNA per time point\.

3. Incubate all tubes at 37 ℃ and remove the corresponding tubes at 0, 24, 48 and 72 h; freeze each sampled tube immediately at −80 ℃ so that all time points can be run on the same gel\.

**Agarose Gel Electrophoresis**

4. Thaw all time\-point samples together, load equal volumes onto a 1% agarose gel alongside an RNA marker, and run at 100 V\.

5. After imaging, integrate the density of each band with image analysis software, normalise to the DNA ladder lane of the same panel, and calculate for each time point the residual fraction of each RNA relative to its own 0 h lane\.

**Notes**

1. Circular RNA migrates anomalously in non\-denaturing gels \(usually more slowly than linear RNA of the same length\), so band position alone is not sufficient to establish circularisation — confirm circularisation by divergent\-primer RT\-qPCR \(1\.2/3\.2\) and BSJ sequencing \(3\.2 step 10\) instead\.

2. Report densitometry as a **relative residual amount**, not as a kinetic parameter\. Report a half\-life or decay constant only from a time course with replicated points and enough points to fit and test a decay model — preferably quantified by divergent\-primer RT\-qPCR against an internal reference rather than by gel, and preferably inside cells\.

3. The incubation matrix must be specified when interpreting the biological meaning: degradation in nuclease\-free buffer, in serum\-containing medium and inside a cell are three different questions\.

4. Densitometry in the low\-signal range is noise\-prone: once a band approaches background, integration error is greatly amplified and a later time point can read higher than an earlier one\. Report raw integrated values without smoothing or exclusion, and read any point near the detection limit only as "at or below the detection limit" rather than interpreting it individually\.

### 5\.2 **Off\-target cytotoxicity against normal cells**

**Background**｜The most worrying safety risk of a tumour vaccine is that activated cytotoxic T cells may damage normal tissues expressing low levels of the same antigen while killing the tumour \(on\-target/off\-tumour toxicity\)\. This step uses exactly the same Calcein\-AM release system as the efficacy experiment, co\-incubating Combined\-vaccine\-primed effector T cells with a panel of human normal cell lines — HCAEC \(coronary artery endothelium\), LX\-2 \(hepatic stellate cells\), BEAS\-2B \(bronchial epithelium\) and MCF12A \(normal mammary epithelium\) — with MDA\-MB\-231 \(the TNBC target\) as a positive control, and examines whether off\-target killing occurs at two relatively high effector\-to\-target ratios\. The lower the killing of normal cells and the greater the contrast with the tumour cells, the better the specificity and safety of the vaccine\-induced killing\. \[17\]\[18\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Normal cell lines: HCAEC, LX\-2, BEAS\-2B, MCF12A|5×10⁴/mL each; **all four confirmed HLA\-A\*02:01 positive**|
|Positive\-control target: MDA\-MB\-231 \(HLA\-A\*02:01⁺, TROP2⁺\)|5×10⁴/mL|
|Combined\-vaccine\-primed effector T cells \(see 2\.2\)|E:T = 80:1 and 100:1|
|Calcein\-AM|Final concentration 1 µM|
|4\.2% Triton X\-100 \(maximum release\); medium with 5% FBS; PBS|As required|
|Black light\-protected 96\-well plate|3 replicate wells per condition|

**Equipment**｜CO₂ incubator, fluorescence microplate reader \(Ex 485 / Em 530 nm\), centrifuge, biosafety cabinet, microscope\.

**Experimental Design \(controls and replicates\)**｜**Controls**: every target cell line has spontaneous\-release wells \(target \+ medium\) and maximum\-release wells \(target \+ Triton\); MDA\-MB\-231 is the positive\-control target \(high killing expected\) and the four normal cell lines are the safety objects \(low killing expected\)\. Every condition is examined at **two effector\-to\-target ratios, 80:1 and 100:1**, with **3 replicate wells per condition**\. **Replicates**: **n = 3 technical replicate wells on a single plate** — this is plate\-level precision, **not** biological replication across effector\-cell batches, and any mean ± SD derived from them must be described accordingly\. **All four normal cell lines were confirmed HLA\-A\*02:01 positive before the experiment**, which is the design feature that gives the readout explanatory power: whatever level of killing is observed, it cannot afterwards be attributed to "HLA mismatch preventing CTL recognition"\.

**Step\-by\-Step Instructions**

**Target Labeling**

1. Take log\-phase normal cell lines and MDA\-MB\-231, wash twice with PBS and resuspend in PBS at 1×10⁶/mL\.

2. Add Calcein\-AM to a final concentration of 1 µM and incubate at 37 ℃, 5% CO₂ in the dark for 20–30 min\.

3. Wash away free dye and adjust to 5×10⁴/mL in medium containing 5% FBS\.

**Effector Preparation \& Plating**

4. Harvest the Combined\-vaccine\-primed effector T cells and adjust the concentration for the two effector\-to\-target ratios, 80:1 and 100:1\.

5. For each target cell line, plate spontaneous wells \(target \+ medium\), maximum wells \(target \+ Triton\) and experimental wells \(target \+ effector\), 3 replicate wells per condition\.

**Co\-incubation \& Readout**

6. Co\-incubate at 37 ℃, 5% CO₂ in the dark for 4–6 h\.

7. Centrifuge at 200 × g at room temperature for 5 min and carefully transfer 100 µL supernatant per well to a black 96\-well plate\.

8. Measure fluorescence \(Ex 485 / Em 530 nm\) and calculate the killing percentage for each cell line for between\-group comparison:

Killing \(%\) = \(F experimental − F spontaneous\) / \(F maximum − F spontaneous\) × 100%

**Notes**

1. Normal cells are mostly adherent; before labelling and plating they must be dissociated into a uniform single\-cell suspension and their viability confirmed, so that digestion damage does not raise spontaneous release and get misread as "off\-target killing"\.

2. Confirm the HLA type of every normal line before the assay, and match the panel to the restriction element of the epitopes; an unmatched panel cannot test antigen discrimination\.

3. Measure target\-antigen expression on the normal panel as well \(flow cytometry suffices\)\. Until it is measured, call the panel an **HLA\-matched normal cell panel** and not an **antigen\-negative control**\.

### 5\.3 Safe dose window of the LNP delivery system

**Background**｜circRNA requires lipid nanoparticles \(LNP\) to enter cells efficiently, but cationic/ionisable lipids are themselves cytotoxic at high doses, so the interval in which delivery is effective and cells are undamaged must be defined first\. This step co\-cultures **empty LNP — the carrier alone, with no circRNA cargo** — with DCs across a dose gradient \(0, 50, 100, 200, 400 ng of LNP per well\) and measures cell viability by CCK\-8, determining the highest dose that causes no obvious toxicity as the safety ceiling for subsequent in vitro and in vivo dose selection\. **The dose axis is therefore lipid mass, not RNA mass**, and what is measured is the intrinsic toxicity of the delivery vehicle, isolated from any contribution of the nucleic\-acid cargo\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|**Empty LNP \(carrier only, no circRNA loaded\)**|0 / 50 / 100 / 200 / 400 ng LNP per well|
|Immature moDC \(prepared as in 2\.1\)|1×10⁴/well \(96\-well plate\)|
|RPMI\-1640 complete medium|100 µL/well|
|CCK\-8 reagent \(WST\-8\)|10 µL/well|
|96\-well flat\-bottom plate|4 replicate wells per dose|

**Equipment**｜CO₂ incubator, microplate reader \(450 nm\), biosafety cabinet, pipettes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: the 0 ng group \(medium only\) is the 100% viability baseline; a cell\-free blank well \(medium \+ CCK\-8\) is included to subtract background absorbance\. **What this experiment does and does not isolate**: because the particles carry no circRNA, the dose–viability relationship measured here is attributable to the lipid carrier alone; **no circRNA\-loaded LNP was tested in this assay**, so the result is a carrier\-toxicity window and not a whole\-formulation toxicity window\. **Replicates**: 4 replicate wells per dose\.

**Step\-by\-Step Instructions**

**Cell Seeding**

1. Seed immature DCs at 1×10⁴ per well in 100 µL complete medium in a 96\-well flat\-bottom plate\.

2. Incubate overnight at 37 ℃, 5% CO₂ to let the cells stabilise\.

**LNP Treatment**

3. Prepare the empty LNP \(carrier only, no circRNA loaded\) and dilute in complete medium to give the series 0, 50, 100, 200 and 400 ng LNP per well\.

4. Add the corresponding dose of empty LNP to each well, with 4 replicate wells and a cell\-free blank, and mix by gentle rocking\.

5. Continue culture at 37 ℃, 5% CO₂ for 24 h\.

**CCK\-8 Assay** \[32\]

6. Add 10 µL CCK\-8 reagent per well, avoiding bubbles, and mix by gentle rocking\.

7. Incubate at 37 ℃ in the dark for 1–4 h \(aiming for an OD of 1\.0–1\.5 in the 0 ng group\)\.

8. Measure absorbance at 450 nm on the plate reader \(600–650 nm may be used as the reference wavelength\)\.

9. Calculate relative viability as below, plot the dose–viability curve and determine the safe dose window:

Relative viability \(%\) = \(OD sample − OD blank\) / \(OD 0 ng − OD blank\) × 100%

**Notes**

1. CCK\-8 is a colorimetric method and the development time must be determined for each cell type in a pilot run; over\-incubation saturates the OD and compresses between\-group differences\. Any bubbles after adding reagent must be popped, or the reading will be badly disturbed\.

2. The safe dose window should be interpreted together with the functional data: the working dose finally chosen must lie within the non\-toxic interval and also be sufficient for antigen expression and DC activation\.

3. Assay the empty carrier first so that any toxicity seen is attributable to the lipid alone, then run the loaded particle alongside it on the same dose series and the same plate\. Do not carry a window obtained on the empty carrier over to the loaded particle, and do not convert a per\-cell in vitro dose \(ng per 10⁴ cells\) into a per\-animal in vivo dose\.

## 6\. Construction of the TROP2\-positive target model

For an in vivo experiment to be meaningful, the tumour cells **must carry the target antigen that the vaccine is directed against** so that T cells can recognise them\. **Wild\-type 4T1 barely expresses TROP2**, so we needed a **4T1 line stably overexpressing TROP2** as a target\-matched, standardised tool\. To ensure vector quality and batch consistency and to avoid the biosafety burden and titre variability of in\-house packaging, this project **ordered a ready\-made TROP2\-overexpressing lentiviral preparation directly from a commercial supplier** \(carrying a GFP reporter gene and puromycin resistance\), and **did not carry out molecular cloning or virus packaging itself**\. On arrival the virus was used to transduce 4T1 directly; **GFP⁺ cells were then sorted by flow cytometry** and maintained under **puromycin selection**, and TROP2 expression was finally verified at both the **mRNA \(RT\-PCR\)** and **membrane protein \(flow cytometry\)** levels, so that this cell line can reliably support the subsequent in vivo efficacy evaluation\.

### 6\.1 **Lentiviral transduction of 4T1**

**Background**｜To make 4T1 express TROP2 stably rather than transiently, the gene of interest must be integrated into the host genome by a lentivirus\. To keep the titre stable and batches consistent, and to avoid the quality variability and additional biosafety burden of in\-house packaging, this project ordered a **ready\-made TROP2\-overexpressing lentiviral preparation** \(carrying a GFP reporter for flow sorting and puromycin resistance for selection pressure\), and on arrival transduced 4T1 directly under BSL\-2 conditions, using GFP fluorescence for preliminary confirmation of successful transduction\. Stable integration is the basis for a tumour\-model cell line that can be passaged long\-term with a stable target\. The virus is produced by the supplier by co\-transfecting HEK293T with a **second\-generation three\-plasmid system** \(transfer vector \+ psPAX2, which provides both Gag/Pol and Rev, \+ pMD2\.G, the VSV\-G envelope\), as described in Chapter 6, “Lentiviral packaging”, of the plasmid manual shipped with the product \(Miaoling Bio\) — the key difference between the second\- and third\-generation systems is precisely that *rev* sits on the same plasmid as *gag/pol*, which is also why the BSL\-2 precautions below cannot be omitted\. \[33\]\[34\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Commercial TROP2\-overexpressing lentiviral preparation \(GFP \+ puromycin resistance\)|Titre not determined in\-house; aliquoted and stored at −80 ℃|
|Log\-phase 4T1 cells|2×10⁵/well \(6\-well plate\)|
|Polybrene \(transduction enhancer\)|Final concentration 4–8 µg/mL|
|RPMI\-1640 complete medium \(10% FBS \+ 1% P/S\)|Medium change / culture|
|Chlorine disinfectant \(available chlorine ≥5000 ppm\)|Inactivation of viral waste, ≥30 min contact|

**Equipment**｜CO₂ incubator, Class II biosafety cabinet \(BSC\), fluorescence microscope, centrifuge, −80 ℃ freezer\.

**Experimental Design \(controls and replicates\)**｜**Control**: a blank control of normal 4T1 without virus, used to exclude autofluorescence and to assess the effect of the handling itself\. **Volume of virus added**: the titre of this batch was not determined, so the MOI could not be calculated; the volume added followed the instructions shipped with the product, and successful transduction was judged directly from GFP fluorescence\.

**Step\-by\-Step Instructions**

**Storage**

1. Aliquot into single\-use volumes inside the BSC and store at −80 ℃, avoiding repeated freeze–thaw, which lowers the titre \(20–50% loss per cycle\); thaw slowly on ice before use\.

**Cell Seeding**

2. Take log\-phase 4T1, trypsinise and count, seed at 2×10⁵ per well in a 6\-well plate and culture overnight at 37 ℃ to 50–70% confluence\.

**Transduction**

3. In the BSC, aspirate the medium and replace it with fresh complete medium\.

4. Add the volume of virus recommended by the instructions shipped with the product, add Polybrene to a final concentration of 4–8 µg/mL, mix by gentle rocking and return to the incubator\.

**Medium Change \& Expression**

5. After 12–24 h of transduction, aspirate the virus\-containing medium in the BSC and discharge it directly into chlorine disinfectant \(available chlorine ≥5000 ppm, ≥30 min\)\.

6. Wash the cells gently 1–2 times with PBS, change to fresh complete medium and culture for a further 48–72 h to allow full expression of TROP2 and GFP\.

**GFP Verification**

7. Under an inverted fluorescence microscope, observe and capture bright\-field, GFP\-channel and merged images in turn\. Proceed to the sorting in 6\.2 only if the fluorescence is bright and dense and the cell morphology is normal; if the signal is weak, read again at 72–96 h\.

**Notes**

1. **Biosafety \(BSL\-2\)**: The lentivirus is VSV\-G pseudotyped with broad tropism; although replication\-defective, it can still infect human cells and integrate into the genome\. All open\-vessel handling must therefore be carried out in a Class II biosafety cabinet with double gloves, and sealed rotors must be used for centrifugation; tips, tubes and media that have contacted virus must be soaked in chlorine disinfectant \(available chlorine ≥5000 ppm\) for ≥30 min before autoclaving\. In the event of a spill, cover with absorbent paper, pour chlorine disinfectant from the outside inwards, leave for 30 min, then clean up and report\. Immunocompromised and pregnant personnel must not take part in these operations\.

2. What lentivirus does to 4T1 is **transduction** \(integration into the genome\), not transfection; GFP fluorescence usually peaks 48–72 h after transduction, so observing too early gives false negatives while observing too late allows the cells to over\-confluence and obscures the reading\.

3. Thawed virus should not be refrozen: each freeze–thaw cycle costs 20–50% of the titre, which is the most common cause of an unexpectedly low transduction rate\.

### 6\.2 Flow sorting of GFP⁺ cells

**Background**｜After lentiviral transduction the culture is a mixture of positive and negative cells and must be enriched and purified to obtain a homogeneous overexpressing cell line\. This step uses fluorescence\-activated cell sorting to positively select GFP⁺ cells after a three\-step gating strategy that excludes debris and doublets, then applies continuous puromycin selection pressure to remove residual negative cells, giving a high\-purity, stable TROP2\-overexpressing 4T1 population\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Transduced 4T1; trypsin; pre\-chilled PBS|1×10⁶–5×10⁶/mL|
|Untransduced 4T1 negative control; standard fluorescent beads|Threshold setting / calibration|
|Puromycin|Working concentration 2 µg/mL|
|Collection tubes pre\-filled with 100% fetal bovine serum \(FBS\) or complete medium containing 50% FBS|Protection during sorting|

**Equipment**｜Cell sorter, CO₂ incubator, biosafety cabinet, centrifuge, fluorescence microscope\.

**Experimental Design \(controls and replicates\)**｜**Controls**: untransduced 4T1 as the negative control for setting the FSC/SSC voltages and the GFP threshold; standard fluorescent beads for instrument calibration\. After sorting, an aliquot is re\-run on the flow cytometer and checked by fluorescence microscopy to confirm purity\. **The post\-sort purity re\-check was performed but its numerical value was not recorded**, which leaves a gap between the at\-sort GFP⁺ reading and the downstream surface\-TROP2 verification in 6\.4\. Any repeat of this step must record the re\-check percentage\.

**Step\-by\-Step Instructions**

**Single\-Cell Preparation**

1. Wash the transduced 4T1 twice with PBS, trypsinise at 37 ℃ for 2–3 min until the cells round up, and stop with complete medium\.

2. Pipette gently, centrifuge at 1000 rpm for 5 min and resuspend in pre\-chilled PBS at 1×10⁶–5×10⁶/mL; keep on ice\.

**Calibration \& Gating**

3. Calibrate the instrument with standard beads and use the negative control to set the FSC/SSC voltages and the GFP threshold \(negative fluorescence 10¹–10²\)\.

4. Gate in sequence: FSC\-A/SSC\-A to remove debris → FSC\-A/FSC\-H to remove doublets → GFP⁺ \(threshold about 10³\)\.

**Sorting \& Selection** \[35\]\[36\]

5. Sort GFP⁺ cells aseptically into collection tubes containing medium\.

6. Seed the sorted cells in medium containing 2 µg/mL puromycin and select for 3–5 days before expansion\.

**Purity Re\-check**

7. Re\-run an aliquot on the flow cytometer to measure the GFP⁺ percentage and check homogeneity under the fluorescence microscope to confirm purity\.

**Notes**

1. Sorted cells are relatively fragile; collection tubes should be pre\-filled with complete medium \(which may contain a higher serum concentration\) for protection, and the cells should be seeded as soon as possible\.

2. If a single sort does not give sufficient purity, the cells can be expanded and sorted a second time; over long\-term passage, GFP/TROP2 should be re\-checked periodically in case the transgene is silenced\.

### 6\.3 RT\-PCR verification of TROP2 mRNA

**Background**｜Overexpression must be confirmed at the transcript level\. This step extracts total RNA with TRIzol, reverse\-transcribes it to cDNA and amplifies TROP2 by PCR, comparing mRNA levels between wild\-type and overexpressing cells; the RNA is treated with DNase I before reverse transcription to remove genomic and residual plasmid DNA and so limit false positives\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|WT / OE 4T1|Two groups|
|TRIzol; chloroform, isopropanol, 75% ethanol \(DEPC\), DEPC water|RNA extraction; 200 µL chloroform per 1 mL TRIzol|
|DNase I, EDTA; reverse transcription kit \(oligo\(dT\)/random primers, RNase inhibitor\)|Genomic removal / RT|
|TROP2 and reference \(GAPDH/β\-actin\) primers; 2× PCR Mix|20 µL reaction|
|1\.5% agarose, DNA marker, 1× TAE|Electrophoresis|

**Equipment**｜Thermal cycler, agarose electrophoresis unit, centrifuge, nucleic acid quantification instrument, gel imaging system; ImageJ, GraphPad Prism\.

**Experimental Design \(controls and replicates\)**｜**Control**: wild\-type 4T1 \(WT\) as the control group, run in parallel with the overexpressing cells through the same RNA extraction, DNase I treatment, reverse transcription and PCR, with a reference gene \(GAPDH/β\-actin\) for normalisation\. **Replicates**: **n = 3** — three independent RNA extractions and reverse\-transcription reactions per group, each with its own reference\-gene amplification, reported as mean ± SD of the three\. A no\-reverse\-transcriptase \(−RT\) control and a no\-template control \(NTC\) are run alongside every batch\.

**Step\-by\-Step Instructions**

**RNA Extraction \& DNase** \[37\]

1. Lyse the cells in TRIzol, add 200 µL chloroform per 1 mL, shake and let stand, then centrifuge at 12,000 g, 4 ℃, for 15 min and take the aqueous phase\.

2. Precipitate the RNA with an equal volume of isopropanol, wash twice with 75% ethanol, dissolve in DEPC water and measure concentration/purity\.

3. Treat with DNase I at 37 ℃ for 30 min to remove genomic DNA, then inactivate with EDTA at 65 ℃ for 10 min\.

**Reverse Transcription**

4. Take 1 µg RNA with primers, denature at 65 ℃ for 5 min and chill on ice, then assemble a 20 µL reverse transcription reaction\.

5. Run 25 ℃ 5–10 min → 42 ℃ 30–60 min → 85 ℃ 5 min to synthesise cDNA\.

**PCR \& Analysis**

6. Assemble 20 µL PCR reactions \(2× Mix, primers, cDNA, water\) for the WT and overexpressing groups in parallel, and amplify with 95 ℃ 5 min → \(95 ℃ 30 s → 55–60 ℃ 30 s → 72 ℃ 30–60 s\) × 28–35 → 72 ℃ 5–10 min\.

7. Run on 1\.5% agarose at 100–120 V, perform densitometry in ImageJ \(TROP2/reference\) and analyse statistically in GraphPad\.

**Notes**

1. Exogenous overexpression plasmid very readily causes DNA\-contamination false positives, so the DNase I step before reverse transcription must not be omitted\. A −RT \(no reverse transcriptase\) control alongside every batch closes this gap rigorously and should be run as standard\.

2. Semi\-quantitative RT\-PCR has limited precision; for accurate quantification, RT\-qPCR \(ΔΔCt relative quantification\) is recommended\.

### 6\.4 **Surface TROP2 by flow cytometry**

**Background**｜Elevated mRNA must still be verified at the protein level, because what T cells ultimately recognise is TROP2 protein on the cell membrane\. This step uses flow cytometry to detect surface TROP2 on 4T1, with wild\-type cells as the negative control and an isotype control to set the threshold, quantifying the TROP2\-positive rate and fluorescence intensity of the overexpressing group as a cross\-check with the RT\-PCR result\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|WT / OE 4T1|Two groups, 1×10⁶/mL|
|Mouse Fc Block \(anti\-mouse CD16/32, clone 2\.4G2, BioLegend Cat\. No\. 101320\)|Block for 10 min before staining|
|Fluorochrome\-conjugated anti\-TROP2; isotype control antibody; unstained control \(PBS\)|Staining / gating|
|Basal medium \(RPMI\-1640 \+ 10% FBS \+ antibiotics\), PBS; compensation beads|As required|

**Equipment**｜Flow cytometer, CO₂ incubator, biosafety cabinet, centrifuge, light\-protected flow tubes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: wild\-type 4T1 \(WT\) as the negative control, an isotype control tube to set the positive threshold and an unstained control tube to correct autofluorescence, together with the TROP2\-overexpressing group — four tubes in total\. ≥2×10⁴ events are acquired per tube\.

**Step\-by\-Step Instructions**

**Grouping \& Staining** \[20\]\[38\]

1. Harvest the cells of each group, adjust to 1×10⁶/mL, leave about 100 µL and divide into WT / isotype / unstained / OE groups\.

2. Before staining, add mouse Fc Block \(anti\-mouse CD16/32, clone 2\.4G2\) to each tube and block for 10 min to prevent non\-specific adsorption of fluorescent antibody by 4T1 cells\.

3. Add the TROP2 antibody to each group \(an equal amount of isotype control to the isotype group, PBS to the unstained group\) and incubate at 4 ℃ in the dark for 15–20 min \(flicking every 5 min\)\.

**Washing**

4. Wash twice with 2 mL pre\-chilled PBS to remove free antibody\.

**Acquisition \& Analysis**

5. Calibrate with compensation beads, gate on the live cell population and set the positive threshold on the isotype control\.

6. Acquire ≥2×10⁴ events per tube and report the TROP2⁺ rate and mean fluorescence intensity\.

**Notes**

1. Overexpressing lines may silence the transgene over long passage, so confirm before assay that the cells are in log phase and healthy\.

2. Non\-permeabilised \(surface\) staining is recommended for membrane proteins; if the signal is weak, optimise the antibody clone and amount and use FMO controls for accurate gating\.

## 7\. In vivo efficacy and immune mechanism

The last step is to **test the in vitro conclusions in a living animal**\. Using the **TROP2\-positive 4T1** cells constructed in the previous step, we established tumours in the **right axillary subcutaneous fat pad of immunocompetent BALB/c mice** and immunised **from the day of inoculation** on a **D0, 7, 14, 21, 28 schedule** by **subcutaneous injection at the base of the tail** \(with **D35 as the study endpoint**\), comparing tumour growth between the **PBS, empty\-vector and Combined vaccine groups**\. At the endpoint we examined **CD8⁺ T cell infiltration and Granzyme B release** in the tumour by immunofluorescence and the **systemic immune response** by splenocyte flow cytometry and intracellular cytokine staining, moving **from macroscopic efficacy down to local and systemic mechanism**\. It should be noted that, because the vaccine epitopes are **human HLA\-A\*02:01–restricted** while the model is a **wild\-type mouse**, the conclusions of this section should be understood as a **proof of concept** for the multi\-epitope circRNA platform\. The in vivo design of this section was modelled with the **NC3Rs Experimental Design Assistant \(EDA\)** and an Experimental Design Report generated before the study began; **sample size, randomisation, blinding, inclusion/exclusion criteria and statistical methods** were all **pre\-specified** before the experiment started\.

### 7\.1 Establishing the tumour\-bearing model

**Background**｜In vitro conclusions need to be tested in a living animal\. This step uses 4T1 stably overexpressing TROP2 to establish a syngeneic tumour model in the **right axillary subcutaneous fat pad** of immunocompetent BALB/c mice — syngeneic transplantation preserves the complete adaptive immune system and has a defined target antigen, making it the standardised platform for evaluating a vaccine that suppresses tumours by activating anti\-tumour immunity\. A standardised inoculation technique and proper randomisation are prerequisites for reliable between\-group data\. \[39\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|SPF female BALB/cAnNCrl mice|6–8 weeks, 18–22 g; supplier Beijing Vital River; ethics approval JDYY20261369; animal use licence SYXK \(Ji\) 2023\-0011|
|4T1 stably overexpressing TROP2|Viability ≥95%, 1×10⁶/100 µL|
|0\.25% trypsin\-EDTA, RPMI\-1640, FBS; sterile pyrogen\-free PBS \(pH 7\.4\); trypan blue|Cell preparation|
|Isoflurane; 75% ethanol, povidone\-iodine, 0\.5% peracetic acid|Anaesthesia / disinfection|
|1 mL syringe \+ 4\-gauge needle; electric clipper|Inoculation; a fresh needle for each animal|

**Equipment**｜Vernier caliper \(0\.02 mm\), CO₂ incubator, Class II biosafety cabinet, SPF barrier animal facility \(7th floor, Institute of Translational Medicine\)\.

**Experimental Design \(controls and replicates\)** \[40\]\[41\]

- **Groups and sample size**: Randomly divided into 3 groups \(PBS vehicle / empty vector / Combined vaccine\), n = 5 per group, 15 experimental units in total, plus 3 reserve mice to replace animals lost at inoculation, giving 18 animals overall; the experimental unit is the individual mouse\.

- **Sample size justification**: The minimum biologically important effect is a ≥50% reduction in mean endpoint tumour volume \(TGI ≥ 50%\), which at the variability commonly reported for subcutaneous 4T1 models \(CV ≈ 30%\) corresponds to Cohen d ≈ 1\.7\. With n = 5, a two\-sample t\-test \(α = 0\.05, two\-sided\) has approximately 80% power to detect d ≈ 2\.0 \(about 60% TGI\) and approximately 65% power at the minimum important effect itself\. The resource equation gives E = N − k = 15 − 3 = 12, within the recommended range of 10–20\. n = 5 is the smallest group size, within the approved animal allocation, that keeps the resource equation in range while retaining \~80% power for a large antitumour effect \(3Rs – Reduction\)\. A non\-significant result at the 50% TGI level will be interpreted as inconclusive rather than as evidence of no effect\.

- **Randomisation**: Complete randomisation using a randomisation table on the day of inoculation \(Day 0\), with individual ear\-tag coding\.

- **Inclusion criteria**: SPF female BALB/cAnNCrl mice, 6–8 weeks old, supplied at 18–22 g and verified against the supplier's certificate on arrival; healthy after a 7\-day acclimatisation period \(normal activity, feeding and drinking, glossy coat, body condition score 3/5, no clinical signs\); technically successful tumour cell inoculation\.

- **Pre\-randomisation exclusion**: Body weight outside the 18–22 g supply specification on arrival; any sign of ill health during acclimatisation; visible leakage of the cell suspension, bleeding or misinjection at inoculation\. Excluded animals are replaced from the reserve cohort of 3, so that all three groups start with n = 5\.

- **Humane endpoints** \(applied pre\-emptively and independently of the scheduled endpoint\): \(i\) maximum tumour diameter reaching 1\.5 cm \(approximately 1500 mm³, the UKCCCR/NCRI upper limit for therapeutic studies\); \(ii\) tumour ulceration or necrosis, or a tumour interfering with locomotion, feeding or drinking; \(iii\) a body condition score of 1 \(emaciated\) on the 5\-point murine scale \(Ullman\-Cullere \& Foltz, 1999\), or a score of 2 combined with any clinical sign; \(iv\) signs of severe distress such as persistent hunching, immobility, laboured respiration, or failure to eat or drink over 24–48 h\. A body condition score of 2 alone does not itself trigger euthanasia but triggers escalation to twice\-daily observation and reporting to the project supervisor and veterinary staff\.

- **Handling of animals with no tumour**: Not excluded\. Because dosing begins on the day of inoculation, the absence of a tumour may be a treatment effect rather than a technical failure, and excluding such animals would systematically remove the strongest responders and bias the analysis against the vaccine; these animals are analysed with an endpoint tumour volume of 0 mm³ and the number of tumour\-free animals per group is reported separately\.

- **Justification for a single sex**: Triple\-negative breast cancer occurs overwhelmingly in women, and 4T1 derives from a spontaneously arising mammary carcinoma of female BALB/c origin, so this syngeneic model is conventionally established in female mice, reflecting the clinical target population\. Restricting the study to one sex also removes sex as a source of variability and reduces animal use \(3Rs – Reduction\)\. Sex as a biological variable can be addressed in later confirmatory studies\.

- **Other sources of variability** are controlled by standardisation rather than by blocking: a single supplier, a single batch, a single sex, a 2\-week age window and a 4 g weight window; all animals inoculated on the same day by the same operator from the same cell preparation; housing in a single room under identical conditions\. Cage is not used as a blocking factor because animals are housed by treatment group for husbandry reasons, so cage is confounded with treatment — this is stated openly as a limitation of the design\.
**Step\-by\-Step Instructions**

**Acclimation \& Grouping**

1. Acclimatise the mice in the SPF facility for 7 days, excluding animals with abnormal weight on arrival or signs of ill health\.

2. On the day of inoculation, use a randomisation table to allocate the eligible mice completely at random to the PBS, empty\-vector and Combined groups \(5 animals each\), with individual ear\-tag coding\.

**Cell Preparation**

3. Take log\-phase 4T1\-TROP2 \(viability ≥95%\), remove serum and antibiotics thoroughly, resuspend in sterile PBS at 1×10⁶/100 µL and keep on ice\.

**Inoculation into the Axillary Subcutaneous Fat Pad**

4. Shave an area of about 2 cm diameter over the right axilla and disinfect in a circular motion with 75% ethanol\. Under light isoflurane anaesthesia, locate the axillary fossa with the forelimb gently abducted; the **subcutaneous fat pad lies immediately beneath the skin in the hollow of the axilla** and is the target depot\.

5. Lift a 5–7 mm skin fold over the axilla, insert the needle 5–6 mm at an angle of 15° to the skin so that the bevel comes to rest **within the axillary subcutaneous fat pad**, and inject 100 µL of cell suspension slowly \(over about 5 s\)\. Confirm placement by the appearance of a small, well\-defined bleb confined to the fat pad\.

6. After withdrawing the needle, press the puncture site with a dry cotton ball for 10 s and disinfect with povidone\-iodine; use a fresh needle for each mouse, and exclude any animal with visible leakage, replacing it from the reserve cohort\.

**Monitoring** \[42\]\[43\]

7. Observe daily and record welfare indicators including activity, feeding and drinking, coat condition, body condition score and tumour ulceration; tumours are typically visible 5–7 days after inoculation\.

8. Give the first immunisation on the day of inoculation \(D0\), following the schedule in 7\.2; do not wait for the tumour to reach a predefined volume\.

**Notes**

1. 4T1 is highly metastatic and forms tumours rapidly, so humane endpoints \(tumour volume/ulceration limits\) must be enforced strictly with daily inspection\.

2. Do not advance the needle beyond the fat pad — the thoracic wall and the axillary vessels lie immediately deeper, and a misplaced bolus changes the growth kinetics of the tumour\. Where dosing starts on D0 rather than at a predefined tumour volume, record tumour\-free animals and analyse them at 0 mm³ rather than excluding them\.

3. Match the host MHC to the restriction element of the epitopes\. Human HLA\-A\*02:01–restricted epitopes are unlikely to be presented in wild\-type BALB/c \(H\-2d\), so antigen\-specific validation requires an HLA\-A\*02:01 transgenic \(e\.g\. HHD\) or humanised host — see Outlook O1\.

### 7\.2 **In vivo antitumour effect**

**Background**｜This is the core experiment for evaluating the efficacy of the vaccine\. From the day of tumour inoculation \(D0 being the day of implantation\), circRNA\-LNP vaccine is injected subcutaneously at the base of the tail of the tumour\-bearing mice according to the pre\-set immunisation schedule \(D0/7/14/21/28, once a week, five doses in total\)\. Tumour growth curves and endpoint tumour size are used to compare the PBS, empty\-vector and Combined groups, quantifying the in vivo antitumour activity of the vaccine directly; the empty\-vector control serves to subtract the non\-specific innate immune effect of the circRNA backbone and adjuvant themselves\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|4T1/TROP2 tumour\-bearing mice \(from 7\.1\)|3 groups × n = 5|
|PBS, empty\-vector circRNA\-LNP, Combined circRNA\-LNP vaccine|LNP\-encapsulated, 10 µg per dose, 0\.1 mL subcutaneously, 5 doses in total|
|Vernier caliper \(0\.02 mm\), electronic balance|Measurement|
|Surgical scissors / non\-toothed forceps, saline, 75% ethanol|Tumour excision|

**Equipment**｜Mouse restrainer, vernier caliper, electronic balance, surgical instruments\.

**Experimental Design \(controls and replicates\)** \[40\]\[41\]

- **Controls**: a PBS vehicle control group and an empty\-vector circRNA\-LNP control group\. The empty\-vector group serves to subtract any non\-specific innate immune background contributed by the circRNA backbone/adjuvant, so that the vaccine\-versus\-vector contrast isolates the contribution of the epitope\-encoding sequence\. **All three pairwise comparisons are pre\-specified** — Combined versus empty vector, Combined versus PBS, and empty vector versus PBS — because each answers a different question and none is treated as subordinate to the others\.

- **Replicates**: n = 5 per group \(the experimental unit is the individual mouse\), with complete randomisation on Day 0\.

- **Primary outcome**: endpoint tumour volume \(mm³, continuous\)\. Growth curves are presented descriptively only; confirmatory inference is based on the endpoint volume alone\.

- **Blinding**: the person administering treatment is aware of the group allocation \(the three preparations look different and the administering operator cannot be blinded\)\. To reduce bias, tumour measurement \(the primary outcome\) is performed blind by a single independent operator, animals are individually coded, and the measurement order is randomised at each time point from a random\-number table so that operator drift cannot become confounded with treatment group; ex vivo samples \(immunofluorescence and splenic flow cytometry\) from all three groups are processed in one batch in a randomised order, with identical antibody panels, instrument settings and gating templates; groups are coded during data analysis\.

- **Statistical methods**: the primary analysis uses a one\-way independent ANOVA with treatment as a 3\-level factor; normality is assessed by the Shapiro\-Wilk test and Q\-Q plots and homogeneity of variance by the Levene test and residual\-versus\-fitted plots\. If these are violated, endpoint volume is log\-transformed and the ANOVA repeated; if assumptions remain violated after transformation, a Kruskal\-Wallis test with Dunn post hoc is used\. Following the omnibus test, **all three pairwise comparisons are made, all of them pre\-specified** — Combined vaccine versus empty vector, Combined vaccine versus PBS, and empty vector versus PBS — with multiplicity controlled by the Holm procedure across the full set of three\. Each addresses a distinct question: the first isolates the epitope\-encoded contribution, the second gives the total effect of the administered product against vehicle, and the third quantifies how much of that total the backbone and adjuvant supply on their own\.

**Step\-by\-Step Instructions**

**Immunization**

1. **The first dose is given on the day of tumour inoculation \(D0\)**, followed by the schedule D0, 7, 14, 21, 28 \(once a week, five doses in total\), injecting the corresponding preparation **subcutaneously at the base of the tail** of each group at 10 µg circRNA\-LNP \(100 µL\) per dose, with identical injection volume and technique across all groups\.

2. Inject at the base of the tail, keeping the site well away from the tumour in the right axillary fat pad\.

**Measurement** \[39\]\[44\]

3. During the immunisation period, the same independent operator measures the long and short tumour diameters blind, in a randomised order, with a vernier caliper, and calculates the volume as follows before plotting the growth curve:

V = 0\.5 × L × W²

where L is the long diameter and W the short diameter \(mm\); volume is expressed in mm³\.

4. Record welfare observations such as activity and feeding status at the same time \(body weight is not recorded as an outcome measure\)\.

**Endpoint Excision**

5. At the study endpoint \(**D35**\), euthanise the mouse, make a small incision at the base of the tumour and dissect the tumour out intact by blunt dissection with non\-toothed forceps and ophthalmic scissors\.

6. Rinse the wound with saline, wash the excised tumour in pre\-chilled PBS and blot dry on filter paper\.

7. Measure the same tumour three times consecutively, blind, and take the mean to calculate the volume\.

8. Sample collection: the tumour is fixed and paraffin\-embedded for the immunofluorescence in 7\.3; the spleen is processed fresh into a single\-cell suspension for the flow cytometry in 7\.4–7\.5\.

**Notes**

1. Caliper readings must be taken by the same operator throughout, blind to group allocation, with the animal gently restrained so that the tumour is not compressed; measure the long and short axes at the widest point and take the mean of repeated readings\.

2. Keep the injection site \(tail base\) well away from the tumour site, so that local injection\-site reaction cannot interfere with tumour measurement or with interpretation of the intratumoural microenvironment\.

3. Bring circRNA\-LNP to room temperature and mix by gentle inversion — never vortex — and aliquot per dosing day: freeze–thaw cycles change particle size and encapsulation, so the dose actually delivered stops matching the dose recorded\.

4. Fix the statistical path before the data are seen, and record which branch was taken\. Choosing between a parametric and a non\-parametric analysis after inspecting the results invalidates the p\-values\.

### 7\.3 **Intratumoural CD8 and Granzyme B**

**Background**｜Tumour inhibition requires a mechanistic explanation\. CD8⁺ T cells are the core effector cells of anti\-tumour immunity, and Granzyme B is the key effector molecule with which they kill target cells\. This step uses dual\-label immunofluorescence to detect CD8⁺ T cell infiltration and Granzyme B expression and their co\-localisation within tumour tissue, revealing at the level of the local immune microenvironment whether the vaccine suppresses the tumour by recruiting and activating CTLs\.

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Paraffin sections of tumours from the three groups \(PBS/empty vector/vaccine\)|n = 3 per group|
|Xylene, graded ethanol; citrate antigen retrieval solution; Triton X\-100|Dewaxing/retrieval/permeabilisation; retrieval solution 1×, pH 6\.0|
|BSA blocking solution; CD8 and Granzyme B fluorescent primary antibodies; corresponding fluorescent secondary antibodies; DAPI|Staining|
|Anti\-fade mounting medium; PBS|Mounting|

**Equipment**｜Fluorescence microscope with image acquisition system, water bath, slide dryer, humidified chamber, slides and coverslips\.

**Experimental Design \(controls and replicates\)**｜**Controls**: the PBS and empty\-vector groups serve as parallel controls for the vaccine group; a negative control section \(no primary antibody, secondary antibody/isotype only\) is included to subtract the strong autofluorescence of necrotic tumour tissue\. **Replicates**: **n = 3 animals per group, with one field acquired per animal**, that field being the animal's data point \(the statistical unit is the animal, not the field\)\. These 3 animals were **selected at random** from the 5 tumour\-bearing mice of each group, and **the same 3 animals provided both this immunofluorescence material and the splenic material for 7\.4/7\.5** — so the two ex vivo assays come from one randomly chosen subsample and there is no selection bias from picking animals by tumour size\. Limitations of sectioning and imaging meant the intended multi\-field sampling was not achieved, so the result is positioned as **descriptive evidence**; a single field cannot capture intratumoural spatial heterogeneity, and this is stated openly\. All three groups of sections are imaged in one batch in a randomised order under uniform exposure, magnification and field\-selection criteria, with groups coded during analysis\. The outcome measures are **CD8⁺ T cell infiltration density**, **Granzyme B positive\-area fraction** and the **CD8/Granzyme B co\-localisation coefficient** \(all three were measured\)\.

**Step\-by\-Step Instructions**

**Dewaxing \& Antigen Retrieval** \[45\]\[46\]

1. Dewax the paraffin sections through xylene and graded ethanol to water and wash in PBS\.

2. Immerse in 1× citrate retrieval solution \(pH 6\.0\) and heat at 95–100 ℃ in a water bath or microwave for 15–20 min, cool naturally at room temperature for 30 min, then permeabilise with Triton at room temperature\.

**Blocking \& Primary Antibody**

3. Block with BSA at room temperature, then apply the CD8 and Granzyme B primary antibodies and incubate overnight at 4 ℃ in a humidified chamber\.

**Secondary Antibody \& DAPI**

4. Wash thoroughly with PBS, apply the corresponding fluorescent secondary antibodies at room temperature in the dark, then counterstain the nuclei with DAPI\.

**Imaging \& Analysis**

5. Mount with anti\-fade mounting medium and acquire images of all groups under uniform exposure, magnification and field\-selection criteria on the fluorescence microscope\.

6. Using Fiji/ImageJ, quantify the CD8⁺ infiltration density, the Granzyme B positive\-area fraction and their co\-localisation coefficient \(Pearson's r and thresholded Manders tM1/tM2\), acquiring one field per animal\. Apply a **single fixed co\-localisation threshold identically to every field**\.

**Notes**

1. Over\-retrieval destroys tissue morphology while insufficient retrieval gives a weak signal; the secondary antibody and DAPI steps must be kept dark throughout to prevent quenching\.

2. **Quantify from the original microscope files, never from exported JPEGs**; lossy compression shifts above\-threshold positive area and affects co\-localisation coefficients most of all\. Archive the raw files before any analysis begins\.

3. Image a **single\-stain and an isotype control** alongside the negative\-control section, under the same settings — necrotic tumour tissue autofluoresces strongly\.

4. Acquire all groups in one batch, in randomised order, under uniform exposure, magnification and field\-selection criteria, and code the groups during analysis\.

5. Apply a fixed co\-localisation threshold identically to every field rather than an automatic per\-image one; automatic methods such as Costes thresholding in Coloc 2 estimate the threshold from the correlation between channels and will not converge when that correlation is near zero\.

### 7\.4 **Splenocyte flow cytometry**

**Background**｜Immunofluorescence of the tumour reflects only the intratumoural microenvironment and cannot show whether the vaccine has activated anti\-tumour immunity systemically\. The spleen is the most important secondary lymphoid organ, and its immune cell composition directly reflects the systemic immune response\. At the study endpoint \(D35\), spleens are taken and made into single\-cell suspensions, and multicolour flow cytometry is used to assess the complete chain of "antigen presentation → T cell activation → memory formation → effector molecule production": **dendritic cell maturation \(CD80/CD86\)**, **early CD8⁺ T cell activation \(CD69\)**, **memory phenotype \(CD44/CD62L\)** and **intracellular effector molecules \(IFN\-γ, Granzyme B\)**, corroborating the immune activation capacity of the vaccine at the systemic level and cross\-checking the local tumour immunofluorescence \(7\.3\)\. \[27\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|Spleens from each group \(PBS / circRNA\-vector / circRNA\-antigens\), collected at the D35 endpoint|3 groups × n = 3|
|Red blood cell lysis buffer \(ACK / RBC Lysis Buffer\); 70 µm cell strainer; syringe plunger|Single\-cell preparation|
|Flow staining buffer \(DPBS \+ 1% FBS \+ 0\.09% NaN₃, pH 7\.4–7\.6\); pre\-chilled PBS|Staining / washing|
|Mouse Fc receptor block anti\-mouse CD16/32 \(clone 2\.4G2\)|1 µg/10⁶ cells|
|Fixable Viability Dye|Per manufacturer|
|**Panel ① DC maturation**: CD11c \+ CD80 \+ CD86|Surface staining|
|**Panel ② T cell activation**: CD3 \+ CD8 \+ CD69|Surface staining|
|**Panel ③ T cell memory**: CD3 \+ CD8 \+ CD44 \+ CD62L|Surface staining|
|**Panel ④ Intracellular effector molecules**: CD3 \+ CD8 \+ IFN\-γ \+ Granzyme B|Surface \+ intracellular \(see 7\.5\)|
|Isotype controls, FMO controls, single\-stain compensation beads|Gating / compensation|

**Equipment**｜Multicolour flow cytometer, CO₂ incubator, refrigerated centrifuge, biosafety cabinet, 70 µm strainers and grinder, 5 mL light\-protected flow tubes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: the PBS and empty\-vector groups serve as parallel controls for the vaccine group; each panel also has isotype, unstained, FMO and single\-stain compensation controls, with a fixable viability dye to exclude dead cells\. Surface panels and intracellular panels are run in separate tubes \(fixation and permeabilisation affect some surface epitopes\)\. **Replicates**: **n = 3 animals per group** — 3 of the 5 tumour\-bearing mice in each group, selected at random, with **the same animals providing both the splenic material here and the tumour immunofluorescence material in 7\.3**; ≥2×10⁴ events per tube; samples from all three groups are processed in one batch in a randomised order with identical antibody panels, instrument settings and gating templates, and groups are coded during analysis\.

**Step\-by\-Step Instructions**

**Splenocyte Preparation**

1. At the study endpoint \(D35\), euthanise the mouse, remove the spleen aseptically into pre\-chilled flow staining buffer and trim away surrounding connective tissue\.

2. Grind the spleen gently through a 70 µm strainer with a syringe plunger and rinse the strainer with buffer to collect the cell suspension\.

3. Add red blood cell lysis buffer and lyse at room temperature for 3–5 min to remove erythrocytes, then stop immediately with PBS and wash once\.

4. Resuspend in flow staining buffer, count with trypan blue, adjust to 1×10⁷/mL and keep on ice\.

**Fc Blocking** \[38\]

5. Take 1×10⁶ splenocytes per tube, add 1 µg anti\-mouse CD16/32 \(2\.4G2\) in 100 µL staining buffer and incubate at 4 ℃ in the dark for 10–15 min to block Fc receptor–mediated non\-specific binding\.

**Viability \& Surface Staining** \[20\]

6. Add the fixable viability dye, incubate at 4 ℃ in the dark for 15–30 min, and wash once\.

7. Add the corresponding surface antibodies to separate tubes according to panel, in 50–100 µL staining buffer, and incubate at 4 ℃ in the dark for 20–30 min:

    - **Panel ① \(DC maturation\)**: CD11c, CD80, CD86

    - **Panel ② \(activation\)**: CD3, CD8, CD69

    - **Panel ③ \(memory\)**: CD3, CD8, CD44, CD62L

    - **Panel ④ \(surface staining before intracellular staining\)**: CD3, CD8 \(then proceed to the intracellular staining in 7\.5\)

8. Add 1–2 mL staining buffer and wash twice by centrifugation at 250 × g for 5 min\.

**Intracellular Staining**

9. After surface staining, Panel ④ samples are fixed, permeabilised and stained for IFN\-γ and Granzyme B according to the **intracellular cytokine staining** workflow in 7\.5\.

**Acquisition \& Analysis**

10. Calibrate the compensation matrix with single\-stain compensation beads, set FSC/SSC thresholds to exclude debris, and acquire ≥2×10⁴ events per tube\.

11. Gate in sequence and report the proportions for each group:

- **CD80⁺CD86⁺** \(within the CD11c⁺ DC gate\) — DC maturation;

- **CD69⁺CD8⁺** — early CD8⁺ T cell activation;

- **CD44⁺CD62L⁺** \(within the CD8⁺ gate\) — central memory phenotype;

- **IFN\-γ⁺CD8⁺** and **GzmB⁺CD8⁺** — effector molecule expression\.

12. Perform between\-group statistics in GraphPad Prism \(one\-way ANOVA with post hoc testing\), with groups coded during analysis\.

**Notes**

1. The interval from spleen collection to staining should be as short as possible and everything kept cold; red blood cell lysis should not be prolonged \(\> 5 min damages lymphocytes and raises the dead cell fraction\)\.

2. CD62L is sensitive to temperature and enzymatic digestion and sheds readily, so pre\-chilled buffers must be used throughout and prolonged periods at room temperature avoided, otherwise the central memory subset will be underestimated\.

3. Set up compensation with single\-stain controls and include an FMO control for each marker whose gate is not clearly bimodal, since a gate drawn on a continuous distribution is otherwise arbitrary\.

### 7\.5 **Intracellular cytokine staining**

**Background**｜IFN\-γ and Granzyme B are the key molecules through which CD8⁺ T cells exert their anti\-tumour effects, but both are located inside the cell and cannot be detected by ordinary surface staining\. Intracellular cytokine staining \(ICS\) uses the workflow "**restimulation \+ protein transport inhibitor to block secretion → formaldehyde fixation → saponin permeabilisation → intracellular antibody staining**" so that antibodies can enter the cell and bind the target molecules, quantifying effector molecule expression at the single\-cell level\. This project uses the **BD Cytofix/Cytoperm™ Plus Fixation/Permeabilization Kit with BD GolgiPlug™ \(Cat\. No\. 555028\)**, in which the active ingredient of GolgiPlug is brefeldin A, which blocks Golgi transport so that newly synthesised cytokines accumulate intracellularly and markedly improve the detection signal\. \[47\]

**Materials \& Reagents**

|Component|Amount / Spec|
|---|---|
|BD Cytofix/Cytoperm™ Plus Kit \(with GolgiPlug\)|**BD Cat\. No\. 555028**|
|├ Fixation/Permeabilization Solution \(contains 4\.2% formaldehyde\)|250 µL per tube \(flow tube\)|
|├ BD Perm/Wash™ Buffer \(10× concentrate, contains FBS and saponin\)|Dilute **1:10** in distilled water before use|
|└ BD GolgiPlug™ \(Brefeldin A\)|**1 µL / 1 mL of cell culture**|
|Restimulation reagents: PMA \+ ionomycin|PMA 50 ng/mL; ionomycin 1 µg/mL|
|Staining buffer \(DPBS \+ 1% heat\-inactivated FCS \+ 0\.09% NaN₃, pH 7\.4–7\.6, 0\.2 µm filtered\)|Surface staining / washing|
|anti\-mouse CD16/32 \(2\.4G2\) Fc block|1 µg/10⁶ cells|
|Surface antibodies: CD3, CD8; intracellular antibodies: anti\-IFN\-γ, anti\-Granzyme B|Titrated amounts|
|Isotype control antibodies \(at the same concentration as the intracellular antibodies\)|Negative control|

**Equipment**｜CO₂ incubator, multicolour flow cytometer, refrigerated centrifuge, vortex mixer, light\-protected flow tubes\.

**Experimental Design \(controls and replicates\)**｜**Controls**: each sample has a stimulated and an unstimulated group; the negative control is an isotype control \(stained in Perm/Wash buffer at the same concentration as the intracellular antibody\) combined with unstained cells; the positive control is splenocytes fully stimulated with PMA/ionomycin\. Granzyme B is constitutively stored in intracellular granules and can be stained without restimulation; IFN\-γ must be detected after restimulation\.

**Step\-by\-Step Instructions**

**Stimulation \& Transport Block**

1. Take the splenocyte suspension \(about 1–2×10⁶/mL\) into culture and add PMA \(final concentration 50 ng/mL\) and ionomycin \(final concentration 1 µg/mL\) for restimulation\.

2. At the same time, add the protein transport inhibitor at **1 µL BD GolgiPlug per 1 mL of culture** and mix thoroughly to block cytokine secretion so that cytokines accumulate intracellularly\.

3. Incubate at 37 ℃, 5% CO₂ for **4–6 h** \(total GolgiPlug time in culture should not exceed 12 h\)\.

**Harvest \& Fc Block**

4. Centrifuge to collect the cells, discard the GolgiPlug\-containing medium, resuspend in staining buffer and count\.

5. Take about 1×10⁶ cells per tube, add 1 µg anti\-mouse CD16/32 in 100 µL staining buffer and block at 4 ℃ in the dark for 10–15 min\.

**Surface Staining**

6. Add the surface antibodies \(CD3, CD8\) in 50 µL staining buffer and incubate at 4 ℃ in the dark for 30 min\.

7. Wash twice with staining buffer \(1 mL each\), centrifuging at 250 × g and discarding the supernatant\.

**Fixation \& Permeabilization** \[47\]

8. Resuspend the cell pellet fully \(a gentle vortex first prevents clumping\) and add **250 µL Fixation/Permeabilization Solution** per tube, incubating at **4 ℃ in the dark for 20 min**\.

9. Wash twice with **1× BD Perm/Wash™ Buffer** \(1 mL each\), centrifuging and discarding the supernatant\. **From this point on, all washes and antibody dilutions must use Perm/Wash Buffer in order to maintain the permeabilised state of the cells\.**

**Intracellular Staining**

10. Resuspend the fixed and permeabilised cells in **50 µL Perm/Wash Buffer** containing anti\-IFN\-γ and anti\-Granzyme B antibodies at titration\-optimised concentrations \(with a separate isotype control tube\)\.

11. Incubate at **4 ℃ in the dark for 30 min**\.

12. Wash twice with 1× Perm/Wash Buffer \(1 mL each\) and finally resuspend in staining buffer for acquisition\.

**Acquisition \& Analysis**

13. Set the PMT voltages and compensation using the surface staining controls, and determine positive thresholds and quadrants with isotype control/unstained cells\.

14. Within the CD3⁺CD8⁺ gate, report the proportions of **IFN\-γ⁺** and **Granzyme B⁺** cells and compare the PBS, empty\-vector and vaccine groups\.

**Notes**

1. The fixation/permeabilisation solution contains **4\.2% formaldehyde**, a suspected carcinogen/mutagen: work under ventilation, wear gloves and eye protection, and collect waste as hazardous chemical waste \(see the Warnings section of the kit\)\.

2. Permeabilised cells clump very easily, so a gentle vortex to disperse them before adding the fixation/permeabilisation solution is recommended; **ordinary staining buffer must not be substituted for Perm/Wash** when washing or diluting antibodies, otherwise the saponin is washed out, the cell membrane reseals, and intracellular antibody cannot enter, giving a false negative\.

3. The literature indicates that PMA/ionomycin stimulation causes a transient downregulation of surface CD4/CD8 on mouse T cells, so CD8 surface staining should be completed before stimulation or taken into account during gating\.

## Outlook

### O1\. Antigen specificity in a humanised model

The epitopes are HLA\-A\*02:01–restricted while the efficacy study used wild\-type BALB/c mice, so the present in vivo result stands as platform proof of concept rather than as evidence of antigen\-specific killing\. The next step is to repeat the efficacy study in an HLA\-A\*02:01 transgenic model \(HHD or equivalent\), keeping the D0/7/14/21/28 schedule so the two datasets are directly comparable, and to add the readouts that report specificity directly: HLA\-A\*02:01 tetramer staining of peripheral blood and spleen, peptide\-restimulated IFN\-γ ELISpot, and killing of antigen\-positive against antigen\-negative targets\. An irrelevant\-epitope circRNA\-LNP arm alongside the empty vector would separate the effect of the epitope sequence from the act of expressing a peptide\. A human immune system–reconstituted model would be closer to the clinic but costs more and is bounded by the GvHD window; the transgenic route is the practical minimum\.

### O2\. **In vivo validation of the remaining antigens**

**Background**｜The Combined vaccine carries 8 selected epitopes from four antigens — TROP2, B7\-H4, Nectin\-4 and LIV\-1 — in 8 tandem fragments \(9 epitopes in total, one fragment spanning an overlapping Nectin\-4 pair\) — but the current in vivo model overexpresses only **TROP2**, so the epitopes of the other three antigens have no corresponding target in that model and their in vivo potency has not been validated\. This project adopts a **representative\-antigen strategy**: TROP2, the most immunogenic antigen in the primary screen, serves as the representative for completing platform\-level proof of concept, and antigen\-by\-antigen in vivo validation is listed as future work\.

**Proposed Design**｜Construct 4T1 cell lines stably overexpressing B7\-H4, Nectin\-4 and LIV\-1 respectively \(via the same commercial lentiviral transduction route as in 6\.1\), establish the corresponding tumour\-bearing models and repeat the efficacy and mechanism evaluation of 7\.2–7\.5\. Antigen\-by\-antigen validation would significantly increase animal use, so a **multi\-antigen co\-expressing** target cell line is preferred: it validates all the Combined vaccine epitopes in a single model and reduces the number of animals required\.

### O3\. In vivo safety and toxicology

Section 5 was done entirely in cell culture, so it bounds the in vitro working dose without supporting any statement about tolerability in an animal\. Three gaps follow directly: persistence measured in buffer says nothing about biodistribution or clearance, a four\-line normal\-cell panel has no stroma, vasculature or repeat dosing, and ng per 10⁴ cells does not convert to mg/kg\. The study that would close them is a repeat\-dose toxicity study in BALB/c of both sexes — vehicle, empty\-vector circRNA\-LNP, and Combined at 1× and 3–5× the efficacy dose, on the D0/7/14/21/28 schedule with a 14\-day recovery cohort — reading body weight, clinical pathology, organ weights and blinded histopathology of liver, kidney, spleen, lung, heart, injection site and draining lymph node, together with serum IL\-6, TNF\-α, IFN\-γ and IL\-1β after the first and last doses and circRNA copy number by RT\-qPCR in the major organs at 6 h, 24 h, 72 h and 7 d\. Running it in the HLA\-A\*02:01 transgenic animals of O1 would supply the specificity and safety endpoints from one cohort, although those animals express mouse target antigens, so a negative finding in normal tissue bounds the on\-target risk rather than excluding it\. A separate ethics application is required\.

## References

1. New England Biolabs \(NEB\)\. *Guidelines for PCR Optimization with Taq DNA Polymerase*\. https://www\.neb\.com/en/tools\-and\-resources/usage\-guidelines/guidelines\-for\-pcr\-optimization\-with\-taq\-dna\-polymerase

2. New England Biolabs \(NEB\)\. *Double Digests* \(restriction enzyme usage guidelines\)\. https://www\.neb\.com/en/tools\-and\-resources/usage\-guidelines/double\-digests

3. New England Biolabs \(NEB\)\. *Ligation Protocol with T4 DNA Ligase \(NEB \#M0202\)*\. https://www\.neb\.com/en/protocols/dna\-ligation\-with\-t4\-dna\-ligase\-m0202

4. New England Biolabs \(NEB\)\. *High Efficiency Transformation Protocol \(NEB \#C2987H/\#C2987I\)*\. https://www\.neb\.com/en/protocols/0001/01/01/high\-efficiency\-transformation\-protocol\-c2987

5. New England Biolabs \(NEB\)\. *Star Activity* \(usage guidelines\)\. https://www\.neb\.com/en/tools\-and\-resources/usage\-guidelines/star\-activity

6. New England Biolabs \(NEB\)\. *Standard RNA Synthesis with HiScribe® T7 Quick High Yield RNA Synthesis Kit \(NEB \#E2050\)*\. https://www\.neb\.com/en/protocols/standard\-rna\-synthesis\-with\-hiscribe\-t7\-quick\-high\-yield\-rna\-synthesis\-kit\-neb\-e2050

7. Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. *Nat Commun\.* 2018;9:2629\. PMID: 29980667\. https://pubmed\.ncbi\.nlm\.nih\.gov/29980667/

8. Cytiva\. *Ficoll\-Paque PLUS — Cell Preparation, Instructions for Use* \(71716700\)\. https://cdn\.cytivalifesciences\.com/api/public/content/digi\-12637\-pdf

9. Miltenyi Biotec\. *CD14 MicroBeads, human* data sheet \(\#130\-050\-201\)\. https://www\.miltenyibiotec\.com/upload/assets/IM0001260\.PDF

10. Sallusto F, Lanzavecchia A\. Efficient presentation of soluble antigen by cultured human dendritic cells is maintained by granulocyte/macrophage colony\-stimulating factor plus interleukin 4 and downregulated by tumor necrosis factor alpha\. *J Exp Med\.* 1994;179:1109\-1118\. PMID: 8145033\. https://pubmed\.ncbi\.nlm\.nih\.gov/8145033/

11. Lonza\. *Human Dendritic Cell Nucleofector® Kit* \(VPA\-1004\) — product page and Optimized Protocol \(programme U\-002\)\. https://bioscience\.lonza\.com/lonza\_bs/US/en/Transfection/p/000000000000191773/Human\-Dendritic\-Cell\-Nucleofector\-Kit

12. Miltenyi Biotec\. *CD3 MicroBeads, human* data sheet \(\#130\-050\-101\)\. https://www\.miltenyibiotec\.com/upload/assets/IM0001261\.PDF

13. Miltenyi Biotec\. *Pre\-Separation Filters* data sheet \(30 µm, \#130\-041\-407\)\. https://www\.miltenyibiotec\.com/upload/assets/IM0010173\.PDF

14. Schuler\-Thurner B, Schultz ES, Berger TG, et al\. Rapid induction of tumor\-specific type 1 T helper cells in metastatic melanoma patients by vaccination with mature, cryopreserved, peptide\-loaded monocyte\-derived dendritic cells\. *J Exp Med\.* 2002;195:1279\-1288\. PMID: 12021308\. https://pubmed\.ncbi\.nlm\.nih\.gov/12021308/

15. Czerkinsky CC, Nilsson LÅ, Nygren H, Ouchterlony Ö, Tarkowski A\. A solid\-phase enzyme\-linked immunospot \(ELISPOT\) assay for enumeration of specific antibody\-secreting cells\. *J Immunol Methods\.* 1983;65:109\-121\. PMID: 6361139\. https://pubmed\.ncbi\.nlm\.nih\.gov/6361139/

16. Dakewe Biotech\. *Human IFN\-γ Precoated ELISPOT Kit \(strips\)* instruction manual, Cat\. 2110005\. https://files\.dakewe\.cn/crm/instruction/dy/2110005\.pdf

17. Lichtenfels R, Biddison WE, Schulz H, Vogt AB, Martin R\. CARE\-LASS \(calcein\-release\-assay\), an improved fluorescence\-based test system to measure cytotoxic T lymphocyte activity\. *J Immunol Methods\.* 1994;172:227\-239\. PMID: 7518485\. https://pubmed\.ncbi\.nlm\.nih\.gov/7518485/

18. Neri S, Mariani E, Meneghetti A, Cattini L, Facchini A\. Calcein\-acetyoxymethyl cytotoxicity assay: standardization of a method allowing additional analyses on recovered effector cells and supernatants\. *Clin Diagn Lab Immunol\.* 2001;8:1131\-1135\. PMID: 11687452\. https://pubmed\.ncbi\.nlm\.nih\.gov/11687452/

19. Cibrián D, Sánchez\-Madrid F\. CD69: from activation marker to metabolic gatekeeper\. *Eur J Immunol\.* 2017;47:946\-953\. PMID: 28475283\. https://pubmed\.ncbi\.nlm\.nih\.gov/28475283/

20. BioLegend\. *Cell Surface Flow Cytometry Staining Protocol*\. https://www\.biolegend\.com/en\-us/protocols/cell\-surface\-flow\-cytometry\-staining\-protocol

21. New England Biolabs \(NEB\)\. *NEBuilder® HiFi DNA Assembly Reaction Protocol* \(NEB \#E2621, \#E5520, \#E2623\)\. https://www\.neb\.com/en/protocols/2014/11/26/nebuilder\-hifi\-dna\-assembly\-reaction\-protocol

22. LGC Biosearch Technologies \(Epicentre/Lucigen\)\. *Ribonuclease R \(RNase R\) Manual* \(NRR07250\)\. https://biosearchtech\.a\.bigcontent\.io/v1/static/manual\_RNR07250\_RNase\-R

23. Banchereau J, Steinman RM\. Dendritic cells and the control of immunity\. *Nature\.* 1998;392:245\-252\. PMID: 9521319\. https://pubmed\.ncbi\.nlm\.nih\.gov/9521319/

24. Towbin H, Staehelin T, Gordon J\. Electrophoretic transfer of proteins from polyacrylamide gels to nitrocellulose sheets: procedure and some applications\. *Proc Natl Acad Sci USA\.* 1979;76:4350\-4354\. PMID: 388439\. https://pubmed\.ncbi\.nlm\.nih\.gov/388439/

25. Thermo Fisher Scientific\. *RIPA Lysis and Extraction Buffer* product information sheet \(Cat\. 89900/89901\)\. https://documents\.thermofisher\.com/TFS\-Assets/LSG/manuals/MAN0011565\_RIPA\_Buff\_UG\_ND\.pdf

26. Bio\-Rad\. *Protein Blotting Guide: A Guide to Transfer and Detection* \(Bulletin 2895\)\. https://www\.bio\-rad\.com/webroot/web/pdf/lsr/literature/Bulletin\_2895\.pdf

27. Sallusto F, Lenig D, Förster R, Lipp M, Lanzavecchia A\. Two subsets of memory T lymphocytes with distinct homing potentials and effector functions\. *Nature\.* 1999;401:708\-712\. PMID: 10537110\. https://pubmed\.ncbi\.nlm\.nih\.gov/10537110/

28. Lenschow DJ, Walunas TL, Bluestone JA\. CD28/B7 system of T cell costimulation\. *Annu Rev Immunol\.* 1996;14:233\-258\. PMID: 8717514\. https://pubmed\.ncbi\.nlm\.nih\.gov/8717514/

29. BioLegend\. *PE anti\-human CD197 \(CCR7\) Antibody, clone G043H7* — product data sheet \(staining recommended at 37 ℃\)\. https://www\.biolegend\.com/en\-us/products/pe\-anti\-human\-cd197\-ccr7\-antibody\-7498

30. BD Biosciences\. *Multicolor Flow Cytometry Panel Design* \(marker selection, fluorochrome assignment, controls and gating\)\. https://www\.bdbiosciences\.com/en\-us/resources/panel\-design

31. Thermo Fisher Scientific\. *Enzymatic and Non\-Enzymatic Cell Dissociation Protocols* \(Gibco Cell Culture Basics\)\. https://www\.thermofisher\.com/us/en/home/references/gibco\-cell\-culture\-basics/cell\-culture\-protocols/cell\-dissociation\-protocol\.html

32. Dojindo\. *Cell Counting Kit\-8 \(CCK\-8\) Technical Manual*, Cat\. CK04\. https://www\.dojindo\.com/manual/CK04/

33. Naldini L, Blömer U, Gallay P, et al\. In vivo gene delivery and stable transduction of nondividing cells by a lentiviral vector\. *Science\.* 1996;272:263\-267\. PMID: 8602510\. https://pubmed\.ncbi\.nlm\.nih\.gov/8602510/

34. Zufferey R, Nagy D, Mandel RJ, Naldini L, Trono D\. Multiply attenuated lentiviral vector achieves efficient gene delivery in vivo\. *Nat Biotechnol\.* 1997;15:871\-875\. PMID: 9306402\. https://pubmed\.ncbi\.nlm\.nih\.gov/9306402/

35. BD Biosciences\. *Protocols* — flow cytometry sample preparation, staining and sorting\. https://www\.bdbiosciences\.com/en\-us/resources/protocols

36. Thermo Fisher Scientific\. *Selection Antibiotics* — puromycin kill curve and stable cell line selection\. https://www\.thermofisher\.com/us/en/home/life\-science/cell\-culture/transfection/transfection\-reagents/selection\-antibiotics\.html

37. Chomczynski P, Sacchi N\. Single\-step method of RNA isolation by acid guanidinium thiocyanate\-phenol\-chloroform extraction\. *Anal Biochem\.* 1987;162:156\-159\. PMID: 2440339\. https://pubmed\.ncbi\.nlm\.nih\.gov/2440339/

38. BD Biosciences\. *Purified Rat Anti\-Mouse CD16/CD32 \(Mouse BD Fc Block™\), clone 2\.4G2*, Cat\. 553142\. https://www\.bdbiosciences\.com/en\-us/products/reagents/flow\-cytometry\-reagents/research\-reagents/single\-color\-antibodies\-ruo/purified\-rat\-anti\-mouse\-cd16\-cd32\-mouse\-bd\-fc\-block\.553142

39. Pulaski BA, Ostrand\-Rosenberg S\. Mouse 4T1 breast tumor model\. *Curr Protoc Immunol\.* 2000;Chapter 20:Unit 20\.2\. PMID: 18432775\. https://pubmed\.ncbi\.nlm\.nih\.gov/18432775/

40. The ARRIVE guidelines 2\.0 — the Essential 10 \(NC3Rs\)\. https://arriveguidelines\.org/arrive\-guidelines

41. NC3Rs\. *Experimental Design Assistant \(EDA\)*\. https://eda\.nc3rs\.org\.uk/

42. Workman P, Aboagye EO, Balkwill F, et al\. Guidelines for the welfare and use of animals in cancer research \(UKCCCR/NCRI\)\. *Br J Cancer\.* 2010;102:1555\-1577\. https://www\.nature\.com/articles/6605642

43. Ullman\-Cullere MH, Foltz CJ\. Body condition scoring: a rapid and accurate method for assessing health status in mice\. *Lab Anim Sci\.* 1999;49:319\-323\. PMID: 10403450\. https://pubmed\.ncbi\.nlm\.nih\.gov/10403450/

44. Tomayko MM, Reynolds CP\. Determination of subcutaneous tumor size in athymic \(nude\) mice\. *Cancer Chemother Pharmacol\.* 1989;24:148\-154\. PMID: 2544306\. https://pubmed\.ncbi\.nlm\.nih\.gov/2544306/

45. Abcam\. *IHC with samples in paraffin \(IHC\-P\) protocol*\. https://www\.abcam\.com/en\-us/technical\-resources/protocols/ihc\-with\-samples\-in\-paraffin

46. Abcam\. *IHC antigen retrieval protocol* \(heat\-induced citrate retrieval\)\. https://www\.abcam\.com/en\-us/technical\-resources/protocols/ihc\-antigen\-retrieval

47. BD Biosciences\. *BD Cytofix/Cytoperm™ Plus Fixation/Permeabilization Solution Kit with BD GolgiPlug™*, Cat\. 555028 — kit manual\. https://www\.bdbiosciences\.com/en\-us/products/reagents/flow\-cytometry\-reagents/research\-reagents/buffers\-and\-supporting\-reagents\-ruo/fixation\-permeabilization\-solution\-kit\-with\-bd\-golgiplug\.555028

48. Xiao MS, Wilusz JE\. An improved method for circular RNA purification using RNase R that efficiently removes linear RNAs containing G\-quadruplexes or structured 3′ ends\. *Nucleic Acids Res\.* 2019;47:8755\-8769\. PMID: 31269210\. https://academic\.oup\.com/nar/article/47/16/8755/5527976

