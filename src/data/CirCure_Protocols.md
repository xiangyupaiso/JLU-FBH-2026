# CirCure\_Protocols

This page collects the standard operating procedures \(SOPs\) actually used at the bench in the CirCure project\. Its division of labour with the Experiments page is simple: **the Experiments page answers "why did we design it this way, and in what order did we do it"; the Protocol page answers "how exactly is this step performed"\.** A single SOP is often called by several experiments, so it is written once here and referenced by number from the Experiments page\.

All work is divided into three laboratories according to physical location and biosafety level:

|Laboratory|Scope|Biosafety level|
|---|---|---|
|**Molecular Lab**|Molecular cloning, *E\. coli* culture and plasmid preparation, in vitro RNA synthesis and nucleic acid analysis|BSL\-1|
|**Cell Lab**|Human primary cell and cell line culture, immunological functional assays, lentiviral transduction|BSL\-1; BSL\-2 for all lentiviral work|
|**Animal Lab**|SPF mouse husbandry, tumour inoculation, dosing, sample collection and histology|SPF barrier facility; ethics approval JDYY20261369|

Numbering: **M1–M16** for the Molecular Lab, **C1–C17** for the Cell Lab and **A1–A10** for the Animal Lab, so that other pages can cross\-reference them\.

---

## Molecular Lab

This section covers every nucleic acid operation from amplification of the epitope fragment to release of the finished circRNA: molecular cloning, *E\. coli* transformation and plasmid preparation, in vitro transcription and circularisation, and electrophoretic and quantitative analysis of nucleic acids\. All RNA work uses nuclease\-free consumables throughout, and the bench and pipettes are wiped with an RNase\-removal reagent before use\.

### M1\. PCR Amplification

**Introduction**｜Amplification of a target fragment from a template with Taq polymerase — the starting point of molecular cloning\. This protocol follows NEB, *Guidelines for PCR Optimization with Taq DNA Polymerase*: https://www\.neb\.com/en/tools\-and\-resources/usage\-guidelines/guidelines\-for\-pcr\-optimization\-with\-taq\-dna\-polymerase

**Equipment**

- Thermal cycler

- Micropipettes and nuclease\-free tips

- Benchtop microcentrifuge

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|Template DNA|2 µL|
|2× Taq PCR StartMix|10 µL|
|Forward primer \(10 µM\)|0\.4 µL|
|Reverse primer \(10 µM\)|0\.4 µL|
|ddH₂O|7\.2 µL|
|**Total volume**|**20 µL**|

**Procedure**

1. Assemble the 20 µL reaction on ice as above, flick to mix and spin down briefly\.

2. Run on the thermal cycler: initial denaturation at 94 ℃ for 2 min\.

3. 25–30 cycles: 94 ℃ 30 s → 55–65 ℃ 30 s → 72 ℃ 60 s/kb\.

4. Final extension at 72 ℃ for 5–10 min, then hold at 4 ℃\.

5. Run the product on an agarose gel \(**M2**\) to confirm the band size\.

**Notes**

1. Set the annealing temperature from the primer Tm; a gradient PCR is recommended when a primer pair is used for the first time\.

2. Extension time scales with fragment length \(Taq extends at roughly 1 kb/min\); too short an extension gives incomplete products\.

### M2\. Agarose Gel Electrophoresis

**Introduction**｜Separation of nucleic acid fragments by size, used to confirm the size and integrity of PCR products, digestion products and RNA\. Use a 1%–1\.5% gel for DNA and a 1% gel for qualitative RNA comparison\.

**Equipment**

- Casting tray, well combs, gel box and power supply

- Microwave and conical flask

- Gel imager / UV or long\-wave light source

- Balance

**Reagents**

|Component|Amount / Spec|
|---|---|
|Agarose|1% \(nucleic acid, qualitative\) or 1\.5% \(resolving small fragments\)|
|1× TAE running buffer|Diluted from 50× TAE \(see **M16**\)|
|Nucleic acid stain|Per product instructions|
|DNA / RNA marker|First lane of every gel|
|Loading buffer|Per product instructions|

**Procedure**

1. Weigh out the agarose, add 1× TAE in a conical flask and microwave until the agarose is completely dissolved and the solution is clear\.

2. Cool to approximately 50 ℃, add the nucleic acid stain and swirl gently, avoiding bubbles\.

3. Pour slowly into the casting tray, insert the comb and let stand at room temperature for 30–45 min until fully solidified\.

4. Place the gel in the gel box, fill with 1× TAE until the gel is covered and remove the comb\.

5. Add loading buffer to the samples and load; load a marker in the first lane\.

6. DNA: run at 100–135 V until the dye front has migrated about 3/4 of the gel length\. Qualitative RNA: run at 100 V\.

7. Switch off the power, remove the gel and image it\.

**Notes**

1. Circular RNA migrates anomalously in a non\-denaturing gel, usually more slowly than linear RNA of the same length, so **band position alone cannot establish circularisation**\.

2. Check the wells before loading; pulling the comb before the gel has fully set damages the well walls and causes smearing\.

### M3\. Gel Extraction \& Column Purification

**Introduction**｜Recovery of a target fragment from a gel, or removal of primers, dNTPs and salts from an enzymatic reaction, to provide a clean template for downstream ligation or transcription\.

**Equipment**

- Long\-wave UV or blue\-light gel cutter

- Benchtop centrifuge

- Dry bath

- Clean blade

**Reagents**

|Component|Amount / Spec|
|---|---|
|Gel extraction kit|Per kit instructions|
|PCR purification column|Per kit instructions|
|Nuclease\-free water / elution buffer|Elute in 20–30 µL|

**Procedure**

1. Excise the target band with a clean blade under long\-wave UV or blue light, trimming away excess gel, and weigh the slice\.

2. Add solubilisation buffer per the kit instructions and incubate at 50 ℃ until the gel is completely dissolved\.

3. Load onto the column, wash, and spin to remove residual wash buffer\.

4. Elute with pre\-warmed nuclease\-free water or elution buffer; let stand 1 min before the final spin\.

5. Measure concentration and A260/280 and store at −20 ℃\.

**Notes**

1. Long\-wave UV damages DNA far less than short\-wave; keep exposure as brief as possible\.

2. Templates for in vitro transcription must be completely free of salts and residual primers, which otherwise markedly reduce transcription yield\.

### M4\. Restriction Digestion

**Introduction**｜BamHI and PmeI generate complementary ends on the vector and insert for directional cloning, and are also used to linearise plasmid as an in vitro transcription template\. Follows NEB, *Star Activity Usage Guidelines*: https://www\.neb\.com/en/tools\-and\-resources/usage\-guidelines/star\-activity

**Equipment**

- Dry bath or water bath

- Benchtop microcentrifuge

- Ice box

**Reagents**

*Vector digestion \(20 µL reaction\)*

|Component|Amount / Spec|
|---|---|
|Backbone plasmid|1 µg|
|10× rCutSmart Buffer|2 µL|
|100× BSA|0\.2 µL|
|BamHI|2 µL|
|PmeI|2 µL|
|ddH₂O|up to 20 µL|

*Insert digestion*: 25 µL PCR product \+ 3 µL 10× Buffer \+ 2 µL of each enzyme\.
*Plasmid linearisation \(50 µL reaction\)*: 1 µg plasmid \+ 10 µL 5× Buffer \+ 2 µL of each enzyme, 37 ℃ for 3 h\.

**Procedure**

1. Assemble the appropriate reaction on ice, dispensing enzyme against the tube wall and avoiding repeated pipetting\.

2. Digestion for cloning: incubate at 37 ℃ for 30 min\.

3. Plasmid linearisation for a transcription template: incubate at 37 ℃ for 3 h to ensure complete linearisation\.

4. Check an aliquot by electrophoresis \(**M2**\); linearised plasmid must show no residual supercoiled band\.

5. Recover the target fragment by **M3**, or purify by phenol–chloroform extraction \(**M9**\)\.

**Notes**

1. If the two enzymes' buffers are incompatible, digest sequentially or use a universal buffer\. rCutSmart Buffer already contains BSA, so separate addition of 100× BSA can be omitted when it is used\.

2. Glycerol above 5% final concentration promotes star activity; enzyme volume should not exceed 1/10 of the total reaction volume\.

### M5\. Ligation with T4 DNA Ligase

**Introduction**｜T4 DNA ligase joins vector and insert with complementary ends directionally into a recombinant plasmid\.

**Equipment**

- Dry bath \(22 ℃\)

- Benchtop microcentrifuge

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|Digested vector \+ insert|Vector : insert molar ratio 1 : \(3–5\); 7\.5 µL mix|
|10× T4 DNA Ligase Buffer|1 µL|
|T4 DNA Ligase|1 µL|
|PEG\-4000 \(optional ligation enhancer\)|As required|
|**Total volume**|**approximately 10 µL**|

**Procedure**

1. Combine vector and insert at the chosen molar ratio on ice, in a total volume of 7\.5 µL\.

2. Add 1 µL 10× T4 Buffer and 1 µL T4 ligase, flick to mix and spin down\.

3. Ligate at 22 ℃ for 10–20 min\.

4. Take 3 µL directly into transformation \(**M6**\); store the remainder at −20 ℃\.

**Notes**

1. 10× T4 Buffer contains ATP and loses activity on repeated freeze–thaw; aliquot it in small volumes\.

2. Include a self\-ligation control \(vector ligated and transformed without insert\) to assess the background\.

### M6\. Bacterial Transformation

**Introduction**｜Heat\-shock introduction of the ligation product into chemically competent *E\. coli* for amplification of the recombinant plasmid\. Follows NEB, *High Efficiency Transformation Protocol \(C2987\)*: https://www\.neb\.com/en/protocols/1/01/01/high\-efficiency\-transformation\-protocol\-c2987

**Equipment**

- Dry bath or water bath \(42 ℃\)

- Shaking incubator \(37 ℃\)

- Incubator \(37 ℃\)

- Biosafety cabinet, spreader or glass beads

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|Chemically competent *E\. coli* \(e\.g\. DH5α\)|25 µL|
|Ligation product|3 µL|
|SOC medium|200 µL|
|Ampicillin LB plates|Amp final 100 µg/mL \(see **M16**\)|

**Procedure**

1. Thaw competent cells slowly on ice, add 3 µL ligation product and mix by gently flicking with a tip — **do not pipette up and down**\.

2. Hold on ice for 15 min\.

3. Heat\-shock at 42 ℃ for exactly 45 s, then return to ice for 5 min\.

4. Add 200 µL SOC medium and recover at 37 ℃ with shaking for 1 h\.

5. Spread an appropriate volume on Amp\-LB plates and incubate inverted at 37 ℃ overnight\.

6. The next day pick single colonies for colony PCR \(**M7**\) or inoculate directly for sequencing\.

**Notes**

1. Heat\-shock time and temperature must be tightly controlled; over\-long shock sharply reduces transformation efficiency\.

2. Keep competent cells cold throughout, use them promptly after thawing and never refreeze\.

### M7\. Colony PCR

**Introduction**｜PCR performed directly on a colony to screen rapidly for positive clones carrying the insert, avoiding plasmid preparation from every clone\.

**Equipment**

- Thermal cycler

- Biosafety cabinet

- Sterile toothpicks or tips

- Shaking incubator

**Reagents**

|Component|Amount / Spec|
|---|---|
|2× Taq PCR StartMix|Reaction as in **M1**|
|Screening primers \(vector or insert primers\)|0\.4 µL each \(10 µM\)|
|Amp\-LB broth|For parallel backup culture|

**Procedure**

1. In the biosafety cabinet, pick a single colony with a sterile toothpick, first dip it into a numbered tube of Amp\-LB broth as a backup culture, then stir it into the PCR tube\.

2. Assemble the reaction as in **M1**, extending the initial denaturation to 94 ℃ for 5 min to lyse the bacteria\.

3. Amplify with the cycling parameters of **M1** and read the products by electrophoresis \(**M2**\)\.

4. Grow the backup cultures corresponding to positive lanes at 37 ℃ and send for Sanger sequencing\.

**Notes**

1. Do not pick too much biomass; excess bacteria inhibit the PCR\.

2. Colony PCR is a first\-pass screen only; confirmation must be by double digestion and full\-length Sanger sequencing\.

### M8\. Endotoxin\-free Plasmid Miniprep

**Introduction**｜Extraction of recombinant plasmid from an overnight culture\. Plasmid used for cell transfection or as an in vitro transcription template must be endotoxin\-free, since residual endotoxin interferes with downstream immunological readouts\.

**Equipment**

- Shaking incubator \(37 ℃\)

- Benchtop centrifuge

- Micro\-volume spectrophotometer \(NanoDrop\)

**Reagents**

|Component|Amount / Spec|
|---|---|
|Endotoxin\-free plasmid miniprep kit|TIANGEN \#DP123|
|Amp\-LB broth|2 mL per tube, Amp final 100 µg/mL|
|Nuclease\-free water / elution buffer|Elute in 30–50 µL|

**Procedure**

1. Inoculate a sequence\-verified clone into 2 mL Amp\-LB and shake at 37 ℃, 200–220 rpm, for 12–16 h\.

2. Harvest, lyse, neutralise, load onto the column and wash per the kit instructions\.

3. Elute the plasmid with nuclease\-free water or elution buffer\.

4. Measure concentration and A260/280 \(acceptable range 1\.8–2\.0\) and store at −20 ℃\.

**Notes**

1. Do not culture beyond 16 h; overgrowth increases genomic DNA and endotoxin contamination\.

2. Plasmid for in vitro transcription should have A260/280 of 1\.8–2\.0 and a concentration of ≥500 ng/µL\.

### M9\. Phenol–Chloroform Extraction \& Ethanol Precipitation

**Introduction**｜Removal of protein \(enzymes\) from a nucleic acid solution and concentration of the nucleic acid, commonly used for the final purification of an in vitro transcription template\.

**Equipment**

- Fume hood

- Refrigerated centrifuge \(4 ℃\)

- Dry bath

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|Phenol:chloroform \(1:1\)|Equal volume|
|Chloroform|Equal volume|
|3 M NaOAc \(pH 5\.2\)|1/10 volume|
|Absolute ethanol|2 volumes|
|70% ethanol|Pre\-chilled, for washing|
|Nuclease\-free water|Dissolve to 0\.5–1 µg/µL|

**Procedure**

1. Add an equal volume of phenol:chloroform \(1:1\), vortex thoroughly, centrifuge and take the upper aqueous phase; repeat once\.

2. Extract once with an equal volume of chloroform to remove residual phenol\.

3. Add 1/10 volume 3 M NaOAc and 2 volumes absolute ethanol to the aqueous phase, mix and precipitate at −20 ℃ for 30 min\.

4. Centrifuge for 15 min at 4 ℃ and discard the supernatant\.

5. Wash the pellet with pre\-chilled 70% ethanol and air\-dry\.

6. Dissolve in nuclease\-free water to 0\.5–1 µg/µL, measure the concentration and store at −20 ℃\.

**Notes**

1. ⚠️ Phenol is corrosive and toxic: work in a fume hood, wear gloves and eye protection, and collect waste as hazardous chemical waste\.

2. When taking the aqueous phase, do not touch the protein interphase; it is better to take less than to carry over interface material\.

### M10\. In Vitro Transcription \(IVT\)

**Introduction**｜Synthesis of precursor RNA by T7 RNA polymerase from a linearised plasmid or a T7\-containing PCR product\. Performed per the NEB HiScribe® T7 Quick High Yield RNA Synthesis Kit \(\#E2050S\) manual: https://www\.neb\.com/en/protocols/2014/05/22/hiscribe\-t7\-quick\-high\-yield\-rna\-synthesis\-kit\-standard\-rna\-synthesis\-protocol\-e2050

**Equipment**

- Dry bath \(37 ℃\)

- Benchtop microcentrifuge

- Biosafety cabinet; nuclease\-free consumables throughout

**Reagents**

|Component|Amount / Spec|
|---|---|
|HiScribe® T7 Quick High Yield RNA Synthesis Kit|NEB \#E2050S, 20 µL reaction|
|Linearised template DNA|Per the kit's recommended input|
|Nuclease\-free water|To volume|

**Procedure**

1. Thaw reagents completely on ice, mix and spin down; assemble the 20 µL reaction **at room temperature** to prevent spermidine from precipitating the template in the cold\.

2. Flick to mix, spin down and incubate at 37 ℃ for 2 h to synthesise the precursor RNA\.

3. Proceed immediately to template removal and purification \(**M11**\), or hold on ice\.

**Notes**

1. Assembling the reaction at room temperature is essential — this is the most common cause of low IVT yield\.

2. Template purity directly determines yield; the template should be free of residual salt and protein\.

### M11\. DNase I Treatment \& LiCl Precipitation

**Introduction**｜Digestion of the DNA template after transcription and selective precipitation of RNA with lithium chloride, which removes unincorporated nucleotides and short fragments\.

**Equipment**

- Dry bath \(37 ℃\)

- High\-speed refrigerated centrifuge \(≥16,000 × g, 4 ℃\)

- Micro\-volume spectrophotometer

**Reagents**

|Component|Amount / Spec|
|---|---|
|DNase I \(RNase\-free\)|2 µL|
|Nuclease\-free water|30 µL|
|7\.5 M LiCl \(with 10 mM EDTA\)|25 µL|
|70% ethanol \(pre\-chilled\)|500 µL|
|0\.1 mM EDTA|50 µL for resuspension|

**Procedure**

1. Add 30 µL nuclease\-free water and 2 µL DNase I to the 20 µL transcription product and incubate at 37 ℃ for 15–20 min to remove the DNA template\.

2. Bring the reaction to 50 µL, add 25 µL 7\.5 M LiCl and mix thoroughly\.

3. Hold at −20 ℃ for 30 min\.

4. Centrifuge at ≥16,000 × g, 4 ℃, for 15 min and discard the supernatant\.

5. Wash the pellet with 500 µL pre\-chilled 70% ethanol, spin, discard the supernatant and air\-dry for 5 min\.

6. Resuspend in 50 µL 0\.1 mM EDTA and measure concentration and A260/280\.

**Notes**

1. LiCl precipitation is unsuitable for RNA shorter than about 300 nt; use column purification for such products\.

2. Do not over\-dry the pellet — completely dried RNA is difficult to resuspend\.

### M12\. circRNA Circularisation \(PIE Self\-splicing\)

**Introduction**｜A permuted intron–exon \(PIE\) system drives self\-splicing of the precursor RNA into a covalently closed circle in the presence of GTP and Mg²⁺\. Strategy per Wesselhoeft et al\., *Nature Communications* 2018 \(PMID: 29980681\): https://pubmed\.ncbi\.nlm\.nih\.gov/29980681/

**Equipment**

- Dry bath or water bath \(55 ℃\)

- Benchtop microcentrifuge

- Ice box; nuclease\-free consumables throughout

**Reagents**

|Component|Amount / Spec|
|---|---|
|Purified precursor RNA|From **M11**|
|GTP|2 mM final|
|MgCl₂|10 mM final|
|Tris\-HCl \(pH 7\.5\)|50 mM final|
|Nuclease\-free water|To volume|

**Procedure**

1. Assemble the circularisation reaction on ice as above, flick to mix and spin down\.

2. Incubate at 55 ℃ for 10–15 min to allow the precursor RNA to self\-splice into a circle\.

3. Place immediately on ice to stop the reaction\.

4. Proceed to RNase R digestion \(**M13**\) to enrich the circular fraction and to RT\-qPCR \(**M15**\) for quantification\.

**Notes**

1. Circularisation is sensitive to Mg²⁺ concentration and temperature: excess Mg²⁺ promotes non\-specific folding and gel smearing, while too low a temperature leaves self\-splicing incomplete\. Re\-optimise when the sequence changes\.

2. Aliquot finished circRNA at −80 ℃ and avoid repeated freeze–thaw\.

### M13\. RNase R Digestion

**Introduction**｜RNase R is a 3′→5′ exonuclease that degrades linear RNA while sparing covalently closed circular RNA, and is used to enrich the circular fraction and to help assess circularisation\. Performed per the Lucigen *RNase R User Manual*: https://www\.lucigen\.com/docs/manuals/MA076E\-RNase\-R\.pdf

**Equipment**

- Dry bath \(37 ℃\)

- Benchtop microcentrifuge

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|RNA sample|2\.0 µg|
|10× RNase R Buffer|2 µL|
|RNase R|2 U|
|Nuclease\-free water|Up to 20 µL|

**Procedure**

1. Assemble the 20 µL digestion on ice; in parallel set up an RNase R\(−\) control tube without enzyme\.

2. Incubate at 37 ℃ for 15–30 min\.

3. Stop on ice and proceed directly to reverse transcription \(**M14**\), or purify by **M9** and store\.

**Notes**

1. Excess RNase R or over\-long digestion can partly degrade loosely structured circular RNA; optimise enzyme amount and time as a gradient for a new sample\.

2. Tightly structured linear RNA can also partly resist RNase R, so **"RNase R resistance" is not equivalent to "circularisation"** — circularisation must be confirmed directly by Sanger sequencing across the BSJ\.

### M14\. Reverse Transcription

**Introduction**｜Conversion of RNA to cDNA for downstream PCR or qPCR\. Circular RNA is detected with divergent primers spanning the back\-splice junction \(BSJ\); linear RNA is detected with convergent primers\.

**Equipment**

- Thermal cycler

- Benchtop microcentrifuge

- Ice box; nuclease\-free consumables throughout

**Reagents**

|Component|Amount / Spec|
|---|---|
|Total or purified RNA|1 µg|
|Primers \(oligo\(dT\), random or gene\-specific\)|Per kit|
|Reverse transcription kit \(with RNase inhibitor\)|20 µL reaction|
|DNase I, EDTA|Genomic removal: 37 ℃ 30 min; inactivate at 65 ℃ 10 min|

**Procedure**

1. For total RNA extracted from cells, first treat with DNase I at 37 ℃ for 30 min to remove genomic DNA, then inactivate with EDTA at 65 ℃ for 10 min\.

2. Mix 1 µg RNA with primers, denature at 65 ℃ for 5 min and chill on ice for 2 min\.

3. Complete the 20 µL reverse transcription reaction on ice\.

4. Run 25 ℃ 5–10 min → 42 ℃ 30–60 min → 85 ℃ 5 min to inactivate\.

5. Store cDNA at −20 ℃\.

**Notes**

1. Samples involving exogenous plasmid must include a **−RT control** \(no reverse transcriptase\); without it, false positives from residual DNA cannot be excluded\.

2. Detection of circular RNA depends on divergent primers; convergent primers amplify both circular and linear template and cannot distinguish them\.

### M15\. RT\-qPCR

**Introduction**｜Quantification of the circular and linear fractions with divergent and convergent primers respectively, to calculate the RNase R–resistant \(circular\) fraction\.

**Equipment**

- Real\-time PCR instrument

- 96\-well qPCR plates and sealing film

- Refrigerated centrifuge with a plate rotor

**Reagents**

|Component|Amount / Spec|
|---|---|
|RT\-qPCR kit \(SYBR or probe\-based\)|Per kit|
|BSJ\-spanning divergent primers|Quantify circular fraction|
|Convergent primers|Quantify linear fraction|
|Reference gene primers \(e\.g\. GAPDH\)|For cellular samples|
|cDNA template|Loading gradient of 2 / 4 / 6 µL|

**Procedure**

1. Assemble the reaction per the kit, with ≥3 technical replicate wells per sample and 2 / 4 / 6 µL loading volumes set up separately to check linearity\.

2. Seal the plate and spin briefly, making sure no bubbles remain in the wells\.

3. Run 95 ℃ 3 min; 40 cycles of \(95 ℃ 10 s → 60 ℃ 30 s\)\.

4. Inspect the melt curve afterwards to confirm a single peak with no primer dimer\.

5. Calculate the relative abundance as **Ratio = 2^\(−ΔCq\)**, where **ΔCq = Cq\(divergent primers\) − Cq\(convergent primers\)**\.

**Notes**

1. Report the value as the "RNase R–resistant fraction" rather than "circularisation efficiency" \(see **M13** Note 2\)\.

2. Include a no\-template control \(NTC\) on every plate; results with Cq close to the NTC are not usable\.

### M16\. Media, Buffers \& Stock Solutions

**Introduction**｜Recipes commonly used in the Molecular Lab\. Aliquot after preparation and label with the preparation date and the person who prepared it\.

**Equipment**

- Balance, measuring cylinder, beaker, magnetic stirrer

- Autoclave

- 0\.22 µm filter \(for heat\-labile reagents\)

- pH meter

**Reagents**

*LB medium \(1 L\)* 【standard recipe — please verify against what was actually used】

|Component|Amount|
|---|---|
|Tryptone|10 g|
|Yeast extract|5 g|
|NaCl|10 g|
|Deionised water|up to 1 L|
|Agar \(solid plates only\)|15 g|

*50× TAE \(1 L\)* 【standard recipe — please verify against what was actually used】

|Component|Amount|
|---|---|
|Tris base|242 g|
|Glacial acetic acid|57\.1 mL|
|0\.5 M EDTA \(pH 8\.0\)|100 mL|
|Deionised water|up to 1 L|

*Ampicillin stock \(1000×\)*

|Component|Amount|
|---|---|
|Ampicillin sodium|100 mg/mL in deionised water|
|Working concentration|100 µg/mL final|

**Procedure**

1. **LB medium**: weigh, dissolve, adjust to pH 7\.0 ± 0\.2 with NaOH and autoclave at 121 ℃ for 20 min\. For plates, cool to about 50 ℃ after autoclaving before adding the Amp stock, then mix and pour\.

2. **50× TAE**: dissolve the Tris base in about 700 mL water, add the glacial acetic acid and 0\.5 M EDTA, make up to 1 L and store at room temperature\. Dilute to 1× with deionised water before use\.

3. **Amp stock**: dissolve, filter\-sterilise through a 0\.22 µm filter, aliquot in small volumes and store at −20 ℃ protected from light\.

**Notes**

1. Antibiotics are heat\-labile and **must never be autoclaved with the medium**; add them only after the medium has cooled to about 50 ℃\.

2. 50× TAE may crystallise on long storage; confirm it is fully dissolved before use, and discard and remake if it becomes cloudy or mouldy\.

---

## Cell Lab

This section covers culture of human primary immune cells \(PBMC\-derived DCs and T cells\) and of cell lines, immunological functional assays, lentiviral transduction and establishment of stable lines\. All cell work is performed in a Class II biosafety cabinet; all lentiviral work follows **BSL\-2** practice \(see **C12**\)\. All human primary cells were commercially sourced, pre\-typed and quality\-controlled material; the team did not collect blood from volunteers\.

### C1\. General Cell Culture: Thawing, Passaging, Counting and Cryopreservation

**Introduction**｜Routine maintenance of cell lines and primary cells\. Adherent cells in this project include 4T1, MDA\-MB\-231, MCF10A, BEAS\-2B, LX\-2 and HLEC; suspension cells include K562 and PBMC\-derived DCs and T cells\.

**Equipment**

- Class II biosafety cabinet

- CO₂ incubator \(37 ℃, 5% CO₂\)

- Inverted microscope

- Benchtop centrifuge

- Haemocytometer or automated cell counter

- 37 ℃ water bath, liquid nitrogen tank, controlled\-rate freezing container

**Reagents**

|Component|Amount / Spec|
|---|---|
|Complete medium|See **C17**|
|0\.25% or 0\.05% trypsin\-EDTA|Detachment of adherent cells|
|Sterile PBS \(Ca²⁺/Mg²⁺\-free\)|Washing|
|Trypan blue \(0\.4%\)|Mixed 1:1 with cell suspension|
|Freezing medium|90% FBS \+ 10% DMSO|

**Procedure**

*Thawing*

1. Remove the cryovial from liquid nitrogen and swirl it rapidly in a 37 ℃ water bath until only a small ice crystal remains \(about 1–2 min\)\.

2. In the biosafety cabinet, add the cell suspension slowly to 9 volumes of pre\-warmed complete medium and centrifuge to remove DMSO\.

3. Resuspend in complete medium, seed, and change the medium the next day to remove dead cells\.

*Passaging adherent cells*

4. At 80%–90% confluence, discard the medium and wash 1–2 times with PBS to remove residual serum\.

5. Add trypsin\-EDTA and incubate at 37 ℃ until the cells round up and gaps appear under the microscope \(typically 2–3 min\)\.

6. Immediately stop the digestion with serum\-containing complete medium and pipette gently into a single\-cell suspension\.

7. Centrifuge at 1000 rpm for 5 min, discard the supernatant, resuspend in complete medium and seed at a 1:2–1:4 split ratio\.

*Counting*

8. Mix 10 µL cell suspension with 10 µL 0\.4% trypan blue and let stand 1–2 min\.

9. Load the haemocytometer and count live \(unstained\) and dead \(blue\) cells to obtain density and viability\.

*Cryopreservation*

10. Harvest log\-phase cells, centrifuge and resuspend in pre\-chilled freezing medium at 1×10⁶–5×10⁶/mL\.

11. Aliquot into cryovials, place in a controlled\-rate freezing container at −80 ℃ overnight and transfer to liquid nitrogen the next day\.

**Notes**

1. Over\-long digestion damages membrane proteins; target cells for flow cytometry or killing assays should be detached with **0\.05% trypsin for a short time \(\< 3 min\)** or with a gentle dissociation buffer\.

2. Confirm viability before any downstream functional assay; critical steps such as electroporation require viability **\> 90%**\.

### C2\. PBMC Isolation by Density Gradient

**Introduction**｜Isolation of PBMC from commercially sourced human peripheral blood mononuclear cell material by density gradient centrifugation, providing a common source of DCs and T cells\. Follows the Cytiva Ficoll\-Paque PLUS Manual and the Miltenyi PBMC Isolation Protocol: https://www\.miltenyibiotec\.com/

**Equipment**

- Centrifuge with adjustable acceleration/deceleration \(brake off\)

- Class II biosafety cabinet

- Pasteur pipettes

- 50 mL centrifuge tubes

**Reagents**

|Component|Amount / Spec|
|---|---|
|Commercial HLA\-A\*02:01 PBMC|Typed and quality\-controlled|
|Human lymphocyte separation medium|TBD LTS1077, density 1\.077 g/mL|
|1× PBS|pH 7\.2–7\.4|

**Procedure**

1. Dilute the PBMC \(or whole blood\) with 1× PBS \(pH 7\.2–7\.4\)\.

2. Layer the diluted sample **slowly** down the tube wall onto the surface of the separation medium, keeping the interface sharp and intact\.

3. Centrifuge at room temperature, 2000 rpm, for 15 min with **slow acceleration and no brake**, so that mononuclear cells form a buffy layer at the interface\.

4. Carefully aspirate the buffy layer with a Pasteur pipette into a fresh 50 mL tube\.

5. Add 5–10 volumes of PBS, centrifuge at 2200 rpm for 5 min and discard the supernatant; wash twice in total\.

6. Resuspend in the appropriate buffer, count, and proceed to magnetic sorting \(**C3**\)\.

**Notes**

1. If the two phases mix during layering, no clear buffy layer will form and the tube should be discarded and the step repeated\.

2. Slow acceleration with the brake off is mandatory; otherwise the interface is disrupted and purity falls\.

3. Record the rotor model or convert rpm to × g so that other laboratories can reproduce the step\.

### C3\. MACS Magnetic Cell Sorting

**Introduction**｜Positive selection of target cells labelled with antibody\-conjugated magnetic beads in a high\-gradient magnetic field\. In this project CD14⁺ monocytes are selected first \(for DC induction\) and CD3⁺ T cells are then selected from the flow\-through, so that DCs and T cells are autologous and from the same batch\. Follows the official Miltenyi MACS® CD14 / CD3 MicroBeads workflows and the MACS Column Guidelines: https://www\.miltenyibiotec\.com/

**Equipment**

- MACS separator with high\-gradient magnet

- Separation columns

- 30 µm pre\-separation filter

- Refrigerated centrifuge

**Reagents**

|Component|Amount / Spec|
|---|---|
|MACS buffer|39 mL 0\.9% NaCl \+ 0\.8 mL albumin \+ 160 µL 0\.5 M EDTA, degassed and pre\-chilled|
|CD14⁺ MicroBeads|80 µL buffer \+ 5 µL beads per 10⁷ cells|
|CD3⁺ MicroBeads|80 µL buffer \+ 20 µL beads per 10⁷ cells|

**Procedure**

1. Resuspend the cells in pre\-chilled MACS buffer and count\.

2. Add beads at the appropriate ratio and mix: CD14⁺ at 4 ℃ in the dark for 15 min; CD3⁺ at 2–8 ℃ for 15 min\.

3. **Wet and pass the suspension through a 30 µm pre\-separation filter before loading the column** to prevent clumps from clogging it\.

4. Load the suspension onto the column in the magnetic field and collect the flow\-through \(the CD14 flow\-through contains T cells and must be retained for the subsequent CD3 sort\)\.

5. Wash the column three times with 3 mL pre\-chilled buffer each to remove unbound cells\.

6. Remove the column from the magnet, add 5 mL buffer and flush rapidly with the plunger to collect the bound target cells\.

7. Centrifuge at 1500 rpm for 5 min and resuspend in the appropriate medium\.

**Notes**

1. The buffer must be degassed and kept cold throughout: bubbles block flow through the column, and higher temperatures increase non\-specific binding\.

2. CD3⁺ T cells should be sorted from the CD14\-depleted flow\-through to avoid monocyte contamination; a brief adherence step can remove residual monocytes if necessary\.

### C4\. moDC Induction

**Introduction**｜CD14⁺ monocytes differentiate into immature monocyte\-derived dendritic cells \(moDC\) under GM\-CSF and IL\-4\. The classical scheme derives from Sallusto \& Lanzavecchia, *J\. Exp\. Med\.* 1994\.

**Equipment**

- CO₂ incubator

- Class II biosafety cabinet

- Inverted microscope

- 6\-well plates or culture flasks

**Reagents**

|Component|Amount / Spec|
|---|---|
|RPMI\-1640 \+ 10% FBS \+ 1% P/S|Complete medium \(see **C17**\)|
|Recombinant human GM\-CSF|100 ng/mL|
|Recombinant human IL\-4|50 ng/mL|
|CD14⁺ monocytes|From **C3**|

**Procedure**

1. Resuspend the CD14⁺ monocytes in RPMI\-1640 with 10% FBS and seed\.

2. Add GM\-CSF to 100 ng/mL and IL\-4 to 50 ng/mL final concentration\.

3. Culture at 37 ℃, 5% CO₂ for 7 days to induce immature DCs\.

4. Perform a half\-volume medium change every 3 days, replenishing both cytokines according to the volume replaced\.

5. On day 7 confirm the typical dendritic morphology microscopically, count and confirm viability \> 90% before proceeding to electroporation \(**C5**\)\.

**Notes**

1. When performing a half\-volume change, aspirate gently from the supernatant to avoid removing loosely adherent DCs\.

2. Staged cytokine adjustment helps stabilise the phenotype: IL\-4 is usually reduced or removed during antigen loading and maturation, and neither cytokine is replenished during DC–T co\-culture\.

### C5\. Nucleofection

**Introduction**｜Delivery of RNA directly into the DC cytoplasm with the Nucleofector II system\. Compared with lipid transfection, electroporation avoids toxicity and immunological interference from the carrier itself\. Performed per the Lonza Amaxa® Human Dendritic Cell Nucleofector® Kit manual: https://www\.lonza\.com/

**Equipment**

- Amaxa Nucleofector II system

- Dedicated cuvettes and transfer pipettes

- CO₂ incubator

- Class II biosafety cabinet

**Reagents**

|Component|Amount / Spec|
|---|---|
|Human DC Nucleofector solution|100 µL per reaction|
|RNA to be delivered|5 µg per 1×10⁶ cells|
|Immature DCs|1×10⁶ per reaction, viability \> 90%|
|Pre\-warmed complete medium|To stop the reaction|

**Procedure**

1. Harvest the immature DCs, count and confirm viability \> 90%, then centrifuge and remove all residual medium\.

2. Resuspend 1×10⁶ DCs in 100 µL Nucleofector solution, add 5 µg RNA \(mock control receives an equal volume of solution\) and mix gently\.

3. Transfer to the cuvette and let stand at room temperature for 5 min, **avoiding bubbles**\.

4. Run the human DC program **U\-002**\.

5. Immediately after the pulse, add pre\-warmed complete medium with the supplied transfer pipette to stop the reaction, and transfer to a culture plate\.

6. Recover at 37 ℃, 5% CO₂ for 24 h before downstream assays\.

**Notes**

1. Bubbles cause arcing and massive cell death; handle loading and transfer with particular care\.

2. Keep the time cells spend in Nucleofector solution as short as possible — ideally under 15 min from resuspension to the pulse\.

3. Electroporation itself stresses DCs and slightly upregulates maturation markers, so downstream analysis must use the **mock\-electroporated** control, not untreated cells, as the baseline\.

### C6\. DC–T Cell Co\-culture

**Introduction**｜Co\-culture of antigen\-loaded DCs with autologous CD3⁺ T cells reproduces "antigen presentation → T cell priming" in vitro and supplies effector cells for ELISpot, flow cytometry and killing assays\. The co\-culture system follows Schuler\-Thurner et al\. \(2002\) *J\. Immunol\.* \(PMID: 12471128\): https://pubmed\.ncbi\.nlm\.nih\.gov/12471128/

**Equipment**

- CO₂ incubator

- Class II biosafety cabinet

- Culture plates

**Reagents**

|Component|Amount / Spec|
|---|---|
|Antigen\-loaded DCs|24 h after electroporation|
|Autologous CD3⁺ T cells|From **C3**|
|T cell medium|RPMI\-1640 \+ 10% FBS \(see **C17**\)|
|Recombinant human IL\-2|20–50 IU/mL, long\-term priming only|

**Procedure**

1. Harvest the DCs cultured for 24 h after electroporation and count them\.

2. Mix with autologous CD3⁺ T cells at **DC : T = 1 : 20**, adjust the density with T cell medium and seed\.

3. Co\-culture at 37 ℃, 5% CO₂\.

4. Choose the duration according to the downstream readout:

    - **Short\-term \(24 h\)** — for ELISpot and CD69 early\-activation flow cytometry; **no** exogenous IL\-2, to avoid raising the background;

    - **Long\-term priming \(7–10 days\)** — supplement low\-dose IL\-2 \(20–50 IU/mL\) every 3 days\.

**Notes**

1. Primary antigen sensitisation usually requires 7–10 days and can be repeated to expand antigen\-specific T cells; a single 24 h co\-culture is short and may underestimate the response frequency\.

2. Inspect the culture regularly during long\-term priming; visible clusters indicate that T cells have proliferated and become activated\.

### C7\. IFN\-γ ELISpot

**Introduction**｜Detection of IFN\-γ–secreting T cells at single\-cell resolution\. Secreted IFN\-γ is captured by the plate\-bound antibody and developed into an insoluble spot through biotin–streptavidin–HRP–AEC; the spot count \(SFC\) reflects the frequency of secreting cells\. The technique derives from Czerkinsky et al\. \(1983\) *J\. Immunol\. Methods* \(PMID: 6358372\): https://pubmed\.ncbi\.nlm\.nih\.gov/6358372/ ; this project follows the Dakewe Human IFN\-γ Precoated ELISpot Kit \(\#2110005\) manual\.

**Equipment**

- ELISpot reader / analysis system

- CO₂ incubator

- Class II biosafety cabinet

- Multichannel pipette

**Reagents**

|Component|Amount / Spec|
|---|---|
|Human IFN\-γ precoated ELISpot plate|Dakewe \#2110005|
|RPMI\-1640|Plate activation, 200 µL/well|
|Pre\-chilled deionised water|Lysis, 200 µL/well|
|Wash buffer \(0\.05% Tween\-20 in PBS\)|Diluted from 50× concentrate; 260 µL/well|
|Biotinylated detection antibody|100 µL/well|
|Streptavidin\-HRP|100 µL/well|
|AEC substrate|100 µL/well, prepared fresh|
|PHA|Positive control, concentration per kit manual|

**Procedure**

1. Add 200 µL RPMI\-1640 per well, activate at room temperature for 10 min and discard\.

2. Seed cells at **1×10⁵ per 100 µL per well**; include positive control wells \(PHA\), negative control wells \(no antigen\) and duplicates\.

3. Incubate at 37 ℃, 5% CO₂ in the dark for **20 h**\. **Do not move or shake the plate during incubation**, or spot morphology will be distorted\.

4. Discard the cells and add 200 µL pre\-chilled deionised water per well to lyse at 4 ℃ for 10 min\.

5. Wash **6 times with 260 µL per well** and blot dry on absorbent paper after the final wash\. **Never let the PVDF membrane dry out between washes\.**

6. Add 100 µL biotinylated detection antibody per well, incubate at 37 ℃ for 1 h and wash 5 times\.

7. Add 100 µL streptavidin\-HRP per well, incubate at 37 ℃ for 1 h, wash and blot dry\.

8. Add 100 µL AEC substrate per well and develop at room temperature in the dark for 5–15 min \(**never beyond 20 min**\); as soon as spots are crisp, stop by rinsing 3–5 times with deionised water, then unclip the plate bottom and rinse the back of the membrane\.

9. After the plate is completely dry, count round spots with a halo on the reader\.

**Notes**

1. High background usually results from insufficient washing or blocking; never touch the coated area of the plate bottom\.

2. AEC must be prepared fresh, kept dark and strictly timed; over\-development causes spots to merge and become uncountable\.

3. Conditions can only be compared if the cell input per well is identical; report results uniformly as SFC per 1×10⁵ cells\.

### C8\. Calcein\-AM Release Cytotoxicity Assay

**Introduction**｜Calcein\-AM is a lipophilic, non\-fluorescent dye; once inside a live cell it is hydrolysed by esterases into charged, intracellularly retained fluorescent calcein\. When the target cell is lysed, calcein is released into the supernatant, and supernatant fluorescence correlates with the degree of lysis\. Follows Lichtenfels et al\. \(1994\) *J\. Immunol\. Methods* \(PMID: 7897241\): https://pubmed\.ncbi\.nlm\.nih\.gov/7897241/ and Neri et al\. \(2001\) *Clin\. Diagn\. Lab\. Immunol\.* \(PMID: 11687452\): https://pubmed\.ncbi\.nlm\.nih\.gov/11687452/

**Equipment**

- CO₂ incubator

- Fluorescence microplate reader \(Ex 485 nm / Em 528–530 nm\)

- Centrifuge able to spin 96\-well plates

- Inverted microscope

**Reagents**

|Component|Amount / Spec|
|---|---|
|Calcein\-AM|1 µM final|
|Target cells|1×10⁶/mL for labelling; 5×10⁴/mL for plating|
|Effector cells|Adjusted to the effector\-to\-target ratio \(4×10⁶/mL for 80:1\)|
|Medium with 5% FBS|Dilution and plating|
|4\.2% Triton X\-100|Maximum\-release wells, 10 µL/well|
|Black light\-protected 96\-well plate|For reading|

**Procedure**

1. **Target labelling**: harvest the target cells, wash with PBS and adjust to 1×10⁶/mL, add Calcein\-AM to 1 µM final and incubate at 37 ℃ in the dark for 20–30 min\. Adherent targets must be detached with 0\.05% trypsin for a short time \(\< 3 min\) or with a gentle dissociation buffer, and washed twice with PBS after labelling\.

2. Wash away free dye and adjust to 5×10⁴/mL in medium with 5% FBS\.

3. **Effector preparation**: harvest effector T cells and adjust the concentration for the intended effector\-to\-target ratio\.

4. **Plating** \(200 µL total per well, 3–4 replicate wells per condition\):

    - Spontaneous\-release wells: 100 µL targets \+ 100 µL medium

    - Maximum\-release wells: 100 µL targets \+ 90 µL medium \+ 10 µL 4\.2% Triton X\-100

    - Experimental wells: 100 µL targets \+ 100 µL effectors

    - Blank wells: 200 µL medium

5. Co\-incubate at 37 ℃, 5% CO₂ in the dark for 4–6 h\.

6. **Centrifuge the plate at 200 × g for 5 min at room temperature**, then carefully transfer 100 µL supernatant per well to a black 96\-well plate\.

7. Read on the fluorescence plate reader \(Ex 485 / Em 528–530 nm\) and calculate:

Killing \(%\) = \(F experimental − F spontaneous\) / \(F maximum − F spontaneous\) × 100%

**Notes**

1. The centrifugation step cannot be skipped: taking supernatant without spinning carries over intact cells and badly distorts the reading\.

2. Poor\-condition target or effector cells and over\-long incubation both raise spontaneous release and depress the signal\-to\-noise ratio; spontaneous release should ideally stay within 20% of maximum release\.

3. This method suits short \(4–6 h\) killing assays; for longer time courses or higher sensitivity, consider LDH release or a luciferase reporter target cell\.

### C9\. Surface Staining for Flow Cytometry

**Introduction**｜Detection of cell surface markers with fluorochrome\-conjugated antibodies — the basic workflow of immunophenotyping\.

**Equipment**

- Flow cytometer

- Refrigerated centrifuge with slow acceleration/deceleration

- Vortex mixer

- 5 mL light\-protected flow tubes, 200 µm nylon mesh

**Reagents**

|Component|Amount / Spec|
|---|---|
|Flow staining buffer|PBS \+ 2% FBS \+ 0\.1% sodium azide \(see **C17**\)|
|Fc receptor block|Human: Human TruStain FcX, 5 µL/tube; mouse: anti\-mouse CD16/32 \(2\.4G2\), 1 µg per 10⁶ cells|
|Fixable viability dye|e\.g\. Fixable Viability Dye eFluor 780, 1 µL/tube; or 7\-AAD / Zombie Aqua|
|Fluorochrome\-conjugated antibodies|Titrated amounts, e\.g\. CD8\-PE 0\.2 µg, CD69\-PerCP 0\.3 µg per 10⁶ cells|
|Isotype controls, single\-stain compensation beads|Gating and compensation|
|Pre\-chilled PBS|Washing, 2 mL/tube|

**Procedure**

1. Harvest the cells, filter through 200 µm mesh, count and adjust to 1×10⁶/mL\.

2. Add staining buffer and Fc block and incubate at room temperature in the dark for 10 min \(mouse samples: 4 ℃ for 10–15 min\)\.

3. Add the fixable viability dye, incubate at 4 ℃ in the dark for 15–30 min and wash once\.

4. Add the antibody panel and incubate at 4 ℃ in the dark for 15–30 min, **flicking the tube every 5 min** to distribute the antibody evenly\.

    - **Exception: CCR7 \(CD197\) must be stained at 37 ℃**, since staining efficiency is markedly lower at 4 ℃; immediately after staining, wash with pre\-chilled buffer and acquire as soon as possible to limit receptor internalisation\.

5. Add 2 mL pre\-chilled PBS, centrifuge at 1500 rpm, 4 ℃, for 5 min and discard the supernatant\.

6. Disperse the pellet into a single\-cell suspension with vortex pulses \(2000 rpm, 1–2 s × 3–5\)\.

7. Before acquisition, calibrate the compensation matrix with single\-stain beads \(CV \< 5%\), set FSC/SSC thresholds to exclude debris and acquire **≥2×10⁴** events per tube\.

**Notes**

1. The compensation matrix must be built from single\-stain controls; **never** auto\-compensate from a fully stained sample\.

2. When a rare population is of interest, set an upstream gate first \(for example gate CD11c⁺ DCs in splenocytes\), otherwise the signal is diluted by large numbers of irrelevant cells\.

3. CD62L is sensitive to temperature and enzymatic digestion and sheds readily; use pre\-chilled buffers throughout and avoid leaving samples at room temperature\.

### C10\. Intracellular Cytokine Staining \(ICS\)

**Introduction**｜Detection of intracellular effector molecules through the workflow "restimulation \+ protein transport inhibitor to block secretion → formaldehyde fixation → saponin permeabilisation → intracellular antibody staining"\. This project uses the BD Cytofix/Cytoperm™ Plus Fixation/Permeabilization Kit with BD GolgiPlug™ \(Cat\. No\. 555028\); the active ingredient of GolgiPlug is brefeldin A: https://www\.bdbiosciences\.com/

**Equipment**

- CO₂ incubator

- Multicolour flow cytometer

- Refrigerated centrifuge

- Vortex mixer, light\-protected flow tubes

**Reagents**

|Component|Amount / Spec|
|---|---|
|BD Cytofix/Cytoperm™ Plus Kit|BD Cat\. No\. 555028|
|├ Fixation/Permeabilization Solution \(4\.2% formaldehyde\)|250 µL/tube|
|├ BD Perm/Wash™ Buffer \(10×\)|Diluted 1:10 in distilled water before use|
|└ BD GolgiPlug™ \(brefeldin A\)|1 µL per 1 mL of culture|
|PMA|50 ng/mL final|
|Ionomycin|1 µg/mL final|
|Staining buffer|DPBS \+ 1% heat\-inactivated FCS \+ 0\.09% NaN₃, pH 7\.4–7\.6, 0\.2 µm filtered|
|Surface / intracellular antibodies, isotype controls|Titrated amounts|

**Procedure**

1. **Restimulation and transport block**: take the single\-cell suspension \(about 1–2×10⁶/mL\) into culture and add PMA \(50 ng/mL\) and ionomycin \(1 µg/mL\); at the same time add the transport inhibitor at **1 µL GolgiPlug per 1 mL of culture** and mix thoroughly\. Incubate at 37 ℃, 5% CO₂ for **4–6 h** \(total GolgiPlug exposure must not exceed 12 h\)\.

2. **Harvest and block**: centrifuge, discard the GolgiPlug\-containing medium, resuspend in staining buffer and count; take about 1×10⁶ cells per tube and block with Fc block in 100 µL buffer at 4 ℃ in the dark for 10–15 min\.

3. **Surface staining**: add the surface antibodies in 50 µL staining buffer and incubate at 4 ℃ in the dark for 30 min; wash twice with 1 mL staining buffer each, centrifuging at 250 × g\.

4. **Fixation and permeabilisation**: resuspend the pellet fully \(a gentle vortex first prevents clumping\) and add **250 µL Fixation/Permeabilization Solution** per tube; incubate at 4 ℃ in the dark for **20 min**\.

5. Wash twice with 1 mL **1× Perm/Wash Buffer** each\. **From this point on, all washes and antibody dilutions must use Perm/Wash Buffer\.**

6. **Intracellular staining**: resuspend in 50 µL Perm/Wash Buffer containing titration\-optimised intracellular antibodies \(with a parallel isotype control tube\) and incubate at 4 ℃ in the dark for 30 min\.

7. Wash twice with 1× Perm/Wash Buffer and finally resuspend in staining buffer for acquisition\.

8. Set PMT voltages and compensation from the surface\-stain controls, and define positive thresholds and quadrants with isotype and unstained controls\.

**Notes**

1. ⚠️ The fixation/permeabilisation solution contains **4\.2% formaldehyde**, a suspected carcinogen/mutagen: work under ventilation, wear gloves and eye protection, and collect waste as hazardous chemical waste\.

2. **Ordinary staining buffer must not be substituted for Perm/Wash** when washing or diluting antibodies; the saponin would be washed out, the membrane would reseal, and intracellular antibody could not enter, giving a false negative\.

3. PMA/ionomycin transiently downregulates surface CD4/CD8 on T cells, so CD8 surface staining should be completed before stimulation or taken into account during gating\.

4. Molecules stored constitutively in intracellular granules \(such as Granzyme B\) can be stained without restimulation; secreted cytokines \(such as IFN\-γ\) must be detected after restimulation\.

### C11\. Fluorescence\-Activated Cell Sorting \(FACS\)

**Introduction**｜Aseptic sorting of target cells from a mixed population on the basis of fluorescence, used to enrich transduction\-positive cells and establish a homogeneous line\. Follows the BD Biosciences Flow Cytometric Cell Sorting Protocol: https://www\.bdbiosciences\.com/

**Equipment**

- Cell sorter

- Class II biosafety cabinet

- Refrigerated centrifuge

- Fluorescence microscope

**Reagents**

|Component|Amount / Spec|
|---|---|
|Cells to be sorted|1×10⁶–5×10⁶/mL in pre\-chilled PBS|
|Untransduced / unstained negative control cells|Threshold setting|
|Standard fluorescent beads|Instrument calibration|
|Collection tubes|Pre\-filled with 100% FBS or medium containing 50% FBS|

**Procedure**

1. Prepare a single\-cell suspension \(adherent cells per **C1**\) and adjust to 1×10⁶–5×10⁶/mL in pre\-chilled PBS; keep on ice\.

2. Calibrate the instrument with standard beads; use the negative control to set FSC/SSC voltages and the fluorescence threshold \(the negative population sits at 10¹–10²\)\.

3. **Three\-step gating**: FSC\-A/SSC\-A to remove debris → FSC\-A/FSC\-H to remove doublets → target fluorescence gate \(e\.g\. GFP⁺, threshold about 10³\)\.

4. Sort positive cells aseptically into collection tubes pre\-filled with high\-serum medium\.

5. Centrifuge and seed as soon as possible after sorting; change the medium the next day\.

6. Re\-run an aliquot to measure the positive rate and check homogeneity under the fluorescence microscope\.

**Notes**

1. Sorted cells are fragile; pre\-filling collection tubes with high\-serum medium markedly improves survival, and cells should be seeded promptly\.

2. If a single sort does not give sufficient purity, expand and sort again\.

3. Over long passage an overexpressing line may silence the transgene; re\-check fluorescence and target protein periodically\.

### C12\. Lentiviral Transduction \(BSL\-2\)

**Introduction**｜Integration of a gene of interest into the host genome by lentivirus to establish a stably expressing cell line\. This project **purchases ready\-made lentiviral preparations and does no in\-house packaging**\. The virus is produced by the supplier by co\-transfecting HEK293T with a **second\-generation three\-plasmid system** \(transfer vector \+ psPAX2, which provides both Gag/Pol and Rev, \+ pMD2\.G, the VSV\-G envelope\); the second\-generation system derives from Naldini et al\., *Science* 1996 and Zufferey et al\., *Nat\. Biotechnol\.* 1997\. Transduction follows Chapter 6, "Lentiviral packaging", of the plasmid manual shipped with the product \(Miaoling Bio\)\.

**Equipment**

- Class II biosafety cabinet \(BSC\)

- CO₂ incubator

- Fluorescence microscope

- Centrifuge with sealed rotor

- −80 ℃ freezer

**Reagents**

|Component|Amount / Spec|
|---|---|
|Ready\-made lentiviral preparation|Titre stated by supplier \(TU/mL, typically 10⁶–10⁸\), aliquoted at −80 ℃|
|Target cells|2×10⁵ per well \(6\-well plate\)|
|Polybrene|4–8 µg/mL final|
|Complete medium|Medium change and culture|
|Chlorine disinfectant|Available chlorine ≥5000 ppm, ≥30 min contact|

**Procedure**

1. **Receipt and storage**: on arrival, check titre, volume, batch number and cold\-chain record and retain the supplier's QC report; aliquot into single\-use volumes in the BSC and store at −80 ℃\. Thaw slowly on ice before use\.

2. **Seeding**: seed log\-phase cells at 2×10⁵ per well in a 6\-well plate and culture overnight at 37 ℃ to 50%–70% confluence\.

3. **Pilot**: convert the stated titre into MOI and run a pilot MOI gradient \(e\.g\. 10/20/50; the supplier's manual recommends exploring MOI 1–50\) to determine the optimal multiplicity of infection\. Include a no\-virus blank control\.

4. **Transduction**: in the BSC, discard the medium and replace it with fresh complete medium; add virus at the optimal MOI and Polybrene to 4–8 µg/mL final, rock gently and return to the incubator\.

5. **Medium change**: after 12–24 h, aspirate the virus\-containing medium in the BSC and **discharge it directly into chlorine disinfectant** \(available chlorine ≥5000 ppm, ≥30 min\); wash the cells gently 1–2 times with PBS and add fresh complete medium\.

6. **Expression and reading**: culture a further 48–72 h to allow full expression of the gene of interest and the reporter; observe under an inverted fluorescence microscope in bright field and the fluorescence channel and capture merged images\. If the signal is weak, read again at 72–96 h\.

7. Proceed to sorting \(**C11**\) and drug selection \(**C13**\)\.

**Notes**

1. ⚠️ **Biosafety \(BSL\-2\)**: the lentivirus is VSV\-G pseudotyped with broad tropism and, although replication\-defective, can still infect human cells and integrate into the genome\. All open\-vessel handling must be done in a Class II biosafety cabinet with double gloves, and centrifugation must use sealed rotors; tips, tubes and media that have contacted virus must be soaked in chlorine disinfectant for ≥30 min before autoclaving\. For a spill, cover with absorbent paper, pour disinfectant from the outside inwards, leave 30 min, then clean up and report\. **Immunocompromised and pregnant personnel must not perform this work\.**

2. What lentivirus does to the target cell is **transduction** \(integration into the genome\), not transfection; the terms are not interchangeable\.

3. Thawed virus should not be refrozen: each freeze–thaw cycle costs 20%–50% of the titre, the most common cause of an unexpectedly low transduction rate\.

### C13\. Puromycin Kill Curve \& Stable Line Selection

**Introduction**｜Continuous selection pressure with a resistance drug removes cells that have not integrated the transgene, establishing a stable line\. The selection concentration must first be determined empirically on **wild\-type** cells\. Follows Thermo Fisher Puromycin Selection Guidelines: https://www\.thermofisher\.com/

**Equipment**

- CO₂ incubator

- Inverted microscope

- Multiwell plates

**Reagents**

|Component|Amount / Spec|
|---|---|
|Puromycin|Kill\-curve gradient 0\.5–5 µg/mL; working concentration in this project 2 µg/mL|
|Wild\-type cells|For the kill curve|
|Complete medium|Drug\-containing medium prepared fresh|

**Procedure**

1. **Kill curve**: seed wild\-type cells at the same density in a multiwell plate; the next day change to complete medium containing 0 \(control\), 0\.5, 1, 2, 3 and 5 µg/mL puromycin\.

2. Replace the drug\-containing medium every 2–3 days and observe for 3–7 days, recording cell death at each concentration\.

3. Take the lowest concentration that kills all wild\-type cells within 3–5 days as the working selection concentration \(**2 µg/mL** in this project\)\.

4. **Selection**: seed the sorted cells in complete medium containing the working concentration of puromycin and select for 3–5 days\.

5. Expand the surviving cells, then withdraw the drug or passage under a maintenance concentration, and re\-check purity per **C11**\.

**Notes**

1. Sensitivity to puromycin varies widely between cell lines; **copying a concentration from the literature is a common mistake** and it must be measured\.

2. Prepare drug\-containing medium fresh; puromycin degrades gradually under culture conditions, so change the medium on schedule\.

### C14\. CCK\-8 Cell Viability Assay

**Introduction**｜CCK\-8 \(WST\-8\) is reduced by dehydrogenases in living cells to a water\-soluble orange formazan whose absorbance at 450 nm correlates with the number of viable cells, allowing measurement of viability and dose–toxicity relationships\. Performed per the standard kit workflow\.

**Equipment**

- CO₂ incubator

- Microplate reader \(450 nm, optional 600–650 nm reference\)

- Class II biosafety cabinet

- Multichannel pipette

**Reagents**

|Component|Amount / Spec|
|---|---|
|CCK\-8 reagent \(WST\-8\)|10 µL/well|
|Complete medium|100 µL/well|
|Test cells|1×10⁴/well \(96\-well flat\-bottom plate\)|
|96\-well flat\-bottom plate|≥3 replicate wells per condition|

**Procedure**

1. Seed cells at 1×10⁴ per well in 100 µL complete medium in a 96\-well flat\-bottom plate; include a **cell\-free blank well** \(medium \+ CCK\-8 only\)\.

2. Incubate overnight at 37 ℃, 5% CO₂ to let the cells attach and stabilise\.

3. Add the test article per the experimental design, with ≥3 replicate wells per condition, mix by gentle rocking and continue culture for 24 h\.

4. Add 10 µL CCK\-8 reagent per well, **avoiding bubbles**, and mix by gentle rocking\.

5. Incubate at 37 ℃ in the dark for 1–4 h \(aiming for an OD of 1\.0–1\.5 in the control group\)\.

6. Read absorbance at 450 nm \(600–650 nm may be used as a reference wavelength\) and calculate:

Relative viability \(%\) = \(OD sample − OD blank\) / \(OD control − OD blank\) × 100%

**Notes**

1. The development time must be determined for each cell type in a pilot run; over\-incubation saturates the OD and compresses between\-group differences\.

2. Pop any bubbles after adding reagent with a sterile needle — bubbles badly disturb the reading\.

3. Edge wells evaporate and read high; filling the outer ring with PBS instead of cells is recommended\.

### C15\. Total RNA Extraction with TRIzol

**Introduction**｜Single\-step guanidinium–phenol–chloroform extraction of total RNA from cells\. Follows Chomczynski \& Sacchi, *Anal\. Biochem\.* 1987\.

**Equipment**

- Fume hood

- Refrigerated centrifuge \(4 ℃\)

- Dry bath

- Micro\-volume spectrophotometer; nuclease\-free consumables throughout

**Reagents**

|Component|Amount / Spec|
|---|---|
|TRIzol reagent|1 mL per 1×10⁶ cells|
|Chloroform|200 µL per 1 mL TRIzol|
|Isopropanol|Equal volume \(of aqueous phase\)|
|75% ethanol \(in DEPC water\)|Washing|
|DEPC water|Dissolution|

**Procedure**

1. Discard the medium, wash the cells twice with pre\-chilled PBS, lyse directly in TRIzol and let stand at room temperature for 5 min\.

2. Add 200 µL chloroform per 1 mL TRIzol, shake vigorously for 15 s and let stand at room temperature for 2–3 min\.

3. Centrifuge at 12,000 × g, 4 ℃, for 15 min and carefully transfer the upper colourless aqueous phase to a fresh tube \(**do not touch the interphase**\)\.

4. Add an equal volume of isopropanol, mix and let stand at room temperature for 10 min to precipitate the RNA\.

5. Centrifuge at 4 ℃, discard the supernatant and wash the pellet twice with 75% ethanol\.

6. Air\-dry and dissolve in an appropriate volume of DEPC water; measure concentration and A260/280\.

7. If genomic DNA removal is required, treat with DNase I as in **M14** step 1\.

**Notes**

1. ⚠️ TRIzol contains phenol and guanidinium isothiocyanate and is corrosive and toxic: work in a fume hood with appropriate protection and dispose of waste as hazardous chemical waste\.

2. When taking the aqueous phase, take less rather than more; carrying over the interphase causes DNA and protein contamination and a low A260/280\.

### C16\. Western Blot

**Introduction**｜Separation of proteins by SDS\-PAGE, transfer to a PVDF membrane and detection of the target protein with specific antibodies\. Electrophoretic transfer follows Towbin et al\., *PNAS* 1979; transfer parameters follow the Bio\-Rad Western Blotting Transfer Protocol: https://www\.bio\-rad\.com/ ; lysis follows the Thermo Fisher RIPA Lysis Buffer Protocol: https://www\.thermofisher\.com/

**Equipment**

- Protein electrophoresis unit and transfer apparatus

- Chemiluminescence gel imager

- Shaker, ice box

- Refrigerated centrifuge

**Reagents**

|Component|Amount / Spec|
|---|---|
|RIPA lysis buffer|With protease inhibitors|
|PMSF|1 mM final, added fresh before use|
|Protease inhibitor cocktail|1×|
|SDS\-PAGE gel kit, running/transfer buffer|Per kit|
|PVDF membrane, methanol|Transfer|
|5% skimmed milk in TBST|Blocking|
|Primary antibody / HRP\-conjugated secondary|Diluted per datasheet|
|TBST|Membrane washing|
|ECL substrate \(A/B\)|Mixed in equal volumes|

**Procedure**

1. **Lysis**: wash the cells twice with PBS, add 1 mM PMSF and 1× protease inhibitor freshly, keep **everything on ice**, add RIPA and lyse on ice for 30 min \(mixing every 10 min\)\.

2. Centrifuge at 14,000 × g, 4 ℃, for 15 min, take the supernatant and quantify protein; add loading buffer, denature in boiling water for 10 min and chill on ice\.

3. **Electrophoresis**: load equal amounts of protein with a marker; run the stacking gel at 80 V until the dye front reaches the resolving gel, then 120 V until bromophenol blue reaches the bottom\.

4. **Transfer**: activate the PVDF membrane in methanol for **15–30 s**, then equilibrate in transfer buffer for **2–5 min**; assemble filter paper–gel–membrane–filter paper and expel all bubbles; wet\-transfer at constant current 250–300 mA or constant voltage 100 V for 60–90 min\.

5. **Blocking and incubation**: block in 5% skimmed milk at room temperature for 1 h; add primary antibody and incubate overnight at 4 ℃ on a shaker\.

6. Wash 3 times with TBST \(10 min each\); incubate with HRP secondary antibody at room temperature for 1 h; wash 3 more times\.

7. **Detection**: mix ECL A and B in equal volumes, apply, react in the dark for 1 min and expose on the imager\.

**Notes**

1. Neither methanol activation nor buffer equilibration can be omitted: an unactivated membrane binds protein poorly, and an unequilibrated one transfers unevenly\.

2. If the target band is weak, load more protein, extend the exposure or use a more sensitive ECL; diffuse bands usually mean overloading or over\-transfer\.

3. The loading control \(e\.g\. β\-actin\) and the target protein should be detected on the same membrane or from the same sample batch to remain comparable\.

### C17\. Media \& Buffers

**Introduction**｜Recipes commonly used in the Cell Lab\. All are prepared in a Class II biosafety cabinet, labelled with the preparation date and preparer, and stored at 4 ℃\.

**Equipment**

- Class II biosafety cabinet

- 0\.22 µm filter

- Balance, measuring cylinder, pH meter

**Reagents \& Recipes**

|Name|Recipe|Used for|
|---|---|---|
|RPMI\-1640 complete medium|RPMI\-1640 \+ 10% FBS \+ 1% penicillin\-streptomycin \(P/S\)|DCs, T cells, K562, 4T1 and others|
|T cell medium|RPMI\-1640 \+ 10% FBS \(± IL\-2 20–50 IU/mL\)|DC–T co\-culture; IL\-2 only for long\-term priming|
|DC induction medium|RPMI\-1640 complete medium \+ GM\-CSF 100 ng/mL \+ IL\-4 50 ng/mL|moDC induction \(**C4**\)|
|MACS buffer|39 mL 0\.9% NaCl \+ 0\.8 mL albumin \+ 160 µL 0\.5 M EDTA, degassed and pre\-chilled|Magnetic sorting \(**C3**\)|
|Flow staining buffer \(human\)|PBS \+ 2% FBS \+ 0\.1% sodium azide|Surface staining \(**C9**\)|
|Flow staining buffer \(mouse / ICS\)|DPBS \+ 1% heat\-inactivated FCS \+ 0\.09% NaN₃, pH 7\.4–7\.6, 0\.2 µm filtered|ICS \(**C10**\)|
|Freezing medium|90% FBS \+ 10% DMSO|Cryopreservation \(**C1**\)|
|ELISpot wash buffer|0\.05% Tween\-20 in PBS \(from 50× concentrate\)|ELISpot \(**C7**\)|

**Procedure**

1. Combine the components in the biosafety cabinet and mix thoroughly\.

2. Store serum\-containing media at 4 ℃ and use within about 2 weeks; aliquot cytokines in single\-use volumes at −80 ℃ and avoid repeated freeze–thaw\.

3. Serum\-free buffers such as MACS buffer must be **degassed** and pre\-chilled to 4 ℃ before use\.

4. Filter\-sterilise home\-made buffers through a 0\.22 µm filter before use\.

**Notes**

1. ⚠️ Sodium azide \(NaN₃\) is toxic and can form explosive metal azides in lead or copper plumbing; flush waste with copious water and collect it as required\. **Azide\-containing buffers must never be used on live cells that will be returned to culture\.**

2. FBS lot\-to\-lot variation affects DC induction and T cell proliferation; critical experiments should use a single lot and the lot number should be recorded\.

---

## Animal Lab

This section covers receipt and husbandry of SPF mice, establishment of the tumour\-bearing model, dosing, tumour measurement, humane endpoints and sample collection\. All animal work is performed under **approval JDYY20261369** from the Animal Ethics Committee of the First Hospital of Jilin University \(approved 27 July 2026\), animal use licence **SYXK \(Ji\) 2023\-0011**, in the SPF barrier facility on the 7th floor of the Institute of Translational Medicine\. All operators must hold a valid training certificate; the 3Rs and humane endpoints are followed throughout\.

> **Animal welfare statement**: the in vivo design of this project was modelled with the NC3Rs Experimental Design Assistant \(EDA\) and an Experimental Design Report generated before the study began; reporting and execution follow the ARRIVE Essential 10: https://eda\.nc3rs\.org\.uk/

### A1\. Animal Receipt \& Acclimatisation

**Introduction**｜Checking, health observation and acclimatisation of animals on arrival — the prerequisite for reliable downstream data\.

**Equipment**

- SPF barrier animal facility \(IVC cages\)

- Balance

- Ear\-tag applicator and tags

- Laminar\-flow pass\-through hatch

**Reagents**

|Component|Amount / Spec|
|---|---|
|SPF female BALB/cAnNCrl mice|6–8 weeks old, 18–22 g on arrival|
|Supplier|Beijing Vital River Laboratory Animal Technology Co\., Ltd\.|
|SPF diet and sterilised drinking water|Ad libitum|
|Sterilised bedding and cages|Per barrier facility procedures|

**Procedure**

1. On arrival, disinfect the outer packaging at the pass\-through hatch and transfer into the barrier area\.

2. Check strain, sex, age, number and the supplier's health certificate; **verify against the supplier's certificate that the arrival weight falls within the 18–22 g supply specification**\.

3. Inspect each animal for activity, feeding and drinking, coat condition, diarrhoea and injury\.

4. Distribute into cages and label with the project name, ethics approval number, responsible investigator and arrival date\.

5. Acclimatise for **7 days** with daily observation\. Any animal showing a health abnormality during acclimatisation is excluded\.

6. After acclimatisation, ear\-tag each healthy animal individually and enter it into the study\.

**Notes**

1. In this project body weight is used **only as an inclusion criterion on arrival**; it is not a longitudinal outcome measure and no body\-weight curve is recorded during the study\.

2. Keep temperature, humidity and the light–dark cycle constant in the barrier facility; animals in one experiment should be housed in a single room\.

### A2\. Preparation of Tumour Cell Suspension for Inoculation

**Introduction**｜Preparation of a high\-viability single\-cell suspension free of residual serum and antibiotics for subcutaneous inoculation\. Residual serum and antibiotics affect the take rate and may cause local reactions\.

**Equipment**

- Class II biosafety cabinet

- Benchtop centrifuge

- Haemocytometer

- Ice box

**Reagents**

|Component|Amount / Spec|
|---|---|
|Log\-phase tumour cells|Viability ≥95%|
|0\.25% trypsin\-EDTA|Detachment|
|Sterile pyrogen\-free PBS \(pH 7\.4\)|Washing and resuspension|
|Trypan blue|Viability check|
|Final concentration|1×10⁶ cells per 100 µL|

**Procedure**

1. Take log\-phase tumour cells and detach and harvest them per **C1**\.

2. Wash 2–3 times with sterile pyrogen\-free PBS to **remove all residual serum and antibiotics**\.

3. Count with trypan blue and confirm viability ≥95%; suspensions below this must not be used\.

4. Adjust to 1×10⁶ cells per 100 µL in sterile PBS\.

5. Keep on ice and complete all inoculations **within 30 min**\.

**Notes**

1. Viability falls appreciably if the suspension stands on ice too long; prepare in batches and use immediately\.

2. Invert gently to mix before each injection so that settling does not make the delivered dose vary between animals\.

### A3\. Subcutaneous Tumour Inoculation

**Introduction**｜Inoculation of the tumour cell suspension subcutaneously in the right axilla to establish a syngeneic tumour\-bearing model\. The model follows Pulaski \& Ostrand\-Rosenberg, *Current Protocols in Immunology* 2000 \("Mouse 4T1 Breast Tumor Model"\)\.

**Equipment**

- Electric clipper

- 1 mL syringe with a 4\-gauge needle \(**a fresh needle for every mouse**\)

- Mouse restrainer

- Dry cotton balls

**Reagents**

|Component|Amount / Spec|
|---|---|
|Tumour cell suspension|1×10⁶ per 100 µL \(from **A2**\)|
|75% ethanol|Skin disinfection|
|Povidone\-iodine|Puncture\-site disinfection|
|Isoflurane|Anaesthesia as required|

**Procedure**

1. Restrain the mouse and shave an area of about 2 cm diameter **near the right axilla**\.

2. Disinfect the shaved area with 75% ethanol in a circular motion from the centre outwards\.

3. Lift a 5–7 mm skin fold between thumb and forefinger\.

4. With the bevel up, insert the needle 5–6 mm subcutaneously at an angle of about **15°** to the skin\.

5. Inject 100 µL of cell suspension slowly \(over about 5 s\); a small subcutaneous dome should be visible\.

6. Withdraw the needle, press the puncture site with a dry cotton ball for 10 s and disinfect with povidone\-iodine\.

7. Record the inoculation time; **exclude any animal with visible leakage, bleeding or misinjection and replace it from the reserve cohort**\.

**Notes**

1. Too deep an insertion delivers the cells into muscle and too shallow an insertion into the dermis; the acceptance criterion is a visible subcutaneous bleb during injection with no leakage on withdrawal\.

2. Use a fresh needle for every mouse, both to avoid cross\-contamination and to keep the tip sharp and minimise pain\.

3. All animals should be inoculated **on the same day, by the same operator, from the same cell preparation**, to eliminate batch variation\.

### A4\. Subcutaneous Immunisation at the Tail Base

**Introduction**｜Subcutaneous injection of the test article at the base of the tail\. Subcutaneous tissue is rich in dendritic cells and antigen is readily presented via the draining lymph node, which is why this route is commonly used for tumour vaccines; separating the injection site from the tumour site prevents local injection\-site irritation from interfering with tumour measurement and with interpretation of the intratumoural microenvironment\.

**Equipment**

- Mouse restrainer

- 1 mL syringe with a fine needle

- Dry cotton balls

**Reagents**

|Component|Amount / Spec|
|---|---|
|Test / control article|0\.1 mL subcutaneously per dose|
|75% ethanol, povidone\-iodine|Disinfection|

**Procedure**

1. On each dosing day, take out the corresponding preparation, thaw on ice and mix gently — **avoid vigorous shaking**\.

2. Restrain the mouse, expose the tail base and disinfect with 75% ethanol\.

3. Lift a skin fold at the tail base and insert the needle subcutaneously at a shallow angle\.

4. Inject 0\.1 mL slowly; **injection volume, needle angle and injection speed must be identical across all groups**\.

5. Withdraw the needle, press for a few seconds and disinfect; record the dosing time and operator\.

6. Observe more closely on the day of dosing, checking the injection site for redness, swelling or ulceration\.

**Notes**

1. Take out the preparation immediately before use and avoid repeated freeze–thaw\.

2. Keep dosing and tumour measurement separate: in this project the person administering treatment is aware of the group allocation \(the preparations look different and cannot be blinded\), while tumour measurement is performed blind by a single independent operator\.

### A5\. Tumour Measurement with a Vernier Caliper

**Introduction**｜Measurement of the long and short diameters of the subcutaneous tumour with a vernier caliper and conversion to volume — the primary outcome measure of the efficacy experiment\. Follows NIH Animal Tumor Measurement Guidelines\.

**Equipment**

- Vernier caliper \(0\.02 mm precision\)

- Mouse restrainer

- Record sheet / electronic record

**Reagents**

|Component|Amount / Spec|
|---|---|
|75% ethanol|Caliper disinfection|

**Procedure**

1. Restrain the mouse and expose the tumour without compressing it\.

2. Measure the **long diameter L** and the **short diameter W** with the caliper \(in mm\)\.

3. Calculate the volume as:

V = 0\.5 × L × W²

where L is the long diameter and W the short diameter \(mm\); volume is expressed in mm³\.

4. At every scheduled time point, measurement is performed **blind by the same single independent operator**; animals are individually coded and the **measurement order is randomised at each time point from a random\-number table**, so that operator drift cannot become confounded with treatment group\.

5. Tumours excised at the endpoint are measured blind three times consecutively and the mean is taken\.

6. Wipe the caliper with 75% ethanol after each measurement\.

**Notes**

1. Excessive pressure flattens the tumour and gives a reading that is too small; the caliper jaws should just touch the skin\.

2. The same person should perform all measurements in one experiment; changing operator mid\-study introduces systematic bias\.

3. Note any ulceration or irregular shape in the record and assess against the humane endpoints in **A6**\.

### A6\. Humane Endpoints \& Euthanasia

**Introduction**｜Humane endpoints are applied independently of the scheduled study endpoint; once any is reached, euthanasia is performed immediately\. This is a mandatory animal welfare requirement\.

**Equipment**

- Vernier caliper

- CO₂ euthanasia apparatus or cervical dislocation station

- Record sheet

**Reagents**

|Component|Amount / Spec|
|---|---|
|CO₂ supply|Per institutional procedures|
|Isoflurane|Deep anaesthesia as required|

**Procedure \(criteria — any one triggers euthanasia\)**

1. Maximum tumour diameter reaching **1\.5 cm \(approximately 1500 mm³\)** — the UKCCCR/NCRI upper limit for therapeutic studies\.

2. Tumour ulceration or necrosis, or a tumour interfering with locomotion, feeding or drinking\.

3. A body condition score of **1** \(emaciated\) on the 5\-point murine scale \(Ullman\-Cullere \& Foltz, 1999\), or a score of **2** combined with any clinical sign\.

4. Signs of severe distress: persistent hunching, immobility, laboured respiration, or failure to eat or drink over 24–48 h\.

**Procedure \(execution\)**

5. A body condition score of 2 alone does **not** trigger euthanasia but triggers escalation to twice\-daily observation and reporting to the project supervisor and veterinary staff\.

6. For animals meeting any endpoint, perform euthanasia per institutional procedures and record the time, reason and last measurement\.

7. Tissue from animals euthanised before the scheduled endpoint is retained where possible, but these animals are **excluded from the scheduled\-endpoint analysis**, and this is stated openly in reporting\.

**Notes**

1. Daily inspection cannot be omitted, particularly for fast\-growing, highly metastatic models such as 4T1\.

2. Body condition scores and clinical observations are **welfare triggers, not outcome measures**, and are not included in the efficacy analysis\.

### A7\. Tumour Excision, Fixation \& Paraffin Embedding

**Introduction**｜Intact excision of the tumour at the study endpoint for weighing, measurement and histological analysis\.

**Equipment**

- Surgical scissors, ophthalmic scissors, non\-toothed forceps

- Dissection board

- Balance

- Filter paper

- Embedding station and microtome \(histology facility\)

**Reagents**

|Component|Amount / Spec|
|---|---|
|Physiological saline|Rinsing the wound|
|Pre\-chilled PBS|Washing the excised tumour|
|4% paraformaldehyde / neutral buffered formalin|Fixation|
|Graded ethanol, xylene, paraffin|Dehydration, clearing, embedding|

**Procedure**

1. After euthanasia per institutional procedures, fix the mouse on the dissection board and disinfect the operative field with 75% ethanol\.

2. Make a small incision at the tumour base and dissect the tumour out intact by **blunt dissection** with non\-toothed forceps and ophthalmic scissors, avoiding rupture of the capsule\.

3. Rinse the wound with saline; wash the excised tumour in pre\-chilled PBS and blot the surface dry on filter paper\.

4. Measure blind three times consecutively per **A5** and take the mean\.

5. Place the tumour in ample fixative \(volume ratio ≥10:1\) and fix at room temperature overnight\.

6. Dehydrate through graded ethanol, clear in xylene and embed in paraffin; section as needed for the immunofluorescence in **A9**\.

**Notes**

1. Insufficient fixative volume or fixation time leaves the centre of the tissue poorly fixed with poor antigen preservation\.

2. Large tumours should be cut open or trimmed into blocks ≤5 mm thick before fixation so that fixative can penetrate\.

3. Collection and embedding should be done for all three groups in one batch in a randomised order, so that batch effects are not confounded with treatment group\.

### A8\. Spleen Harvest \& Splenocyte Preparation

**Introduction**｜The spleen is the most important secondary lymphoid organ and its immune cell composition reflects the systemic immune response\. This protocol prepares a fresh splenocyte single\-cell suspension for flow cytometry\.

**Equipment**

- Surgical instruments, dissection board

- 70 µm cell strainer

- Syringe plunger \(for grinding\)

- Refrigerated centrifuge

- Haemocytometer

**Reagents**

|Component|Amount / Spec|
|---|---|
|Pre\-chilled flow staining buffer|See **C17**|
|Red blood cell lysis buffer \(ACK / RBC Lysis Buffer\)|3–5 min at room temperature|
|Pre\-chilled PBS|Stopping lysis and washing|
|Trypan blue|Counting|

**Procedure**

1. After euthanasia, remove the spleen aseptically into pre\-chilled flow staining buffer and trim away surrounding connective tissue and fat\.

2. Place the spleen on a 70 µm strainer and **grind gently** with a syringe plunger, rinsing the strainer with buffer while grinding to collect the cell suspension\.

3. Centrifuge, discard the supernatant and add red blood cell lysis buffer; lyse at room temperature for **3–5 min**\.

4. **Immediately** stop the lysis with pre\-chilled PBS and wash once\.

5. Resuspend in flow staining buffer, count with trypan blue, adjust to 1×10⁷/mL and keep on ice\.

6. Proceed to surface staining \(**C9**\) or intracellular staining \(**C10**\)\.

**Notes**

1. Keep the interval from harvest to staining as short as possible and everything **cold throughout**\.

2. Do not lyse red cells for more than 5 min; over\-lysis damages lymphocytes and raises the dead\-cell fraction\.

3. Grinding too hard fragments cells; grind only until the splenic contents are essentially released and the white capsule remains\.

### A9\. Tissue Immunofluorescence on Paraffin Sections

**Introduction**｜Simultaneous detection of two antigens on paraffin sections with assessment of their co\-localisation, used to analyse immune cell infiltration and functional state in tissue\. Follows the Abcam Immunohistochemistry \(IHC/IF\) Protocol Guide: https://www\.abcam\.com/ and the Thermo Fisher Tissue Immunofluorescence Manual: https://www\.thermofisher\.com/

**Equipment**

- Fluorescence microscope with image acquisition system

- Water bath or microwave

- Slide dryer

- Humidified chamber

- Slides and coverslips

**Reagents**

|Component|Amount / Spec|
|---|---|
|Xylene, graded ethanol|Dewaxing to water|
|Citrate antigen retrieval solution|1×, pH 6\.0|
|Triton X\-100|Permeabilisation at room temperature|
|BSA blocking solution|Blocking at room temperature|
|Two fluorescent primary antibodies|Diluted per datasheet|
|Matching fluorescent secondary antibodies|Diluted per datasheet|
|DAPI|Nuclear counterstain|
|Anti\-fade mounting medium|Mounting|

**Procedure**

1. **Dewaxing and rehydration**: dewax the sections through xylene and graded ethanol to water and wash in PBS\.

2. **Antigen retrieval**: immerse in 1× citrate retrieval solution \(pH 6\.0\) and heat at 95–100 ℃ in a water bath or microwave for 15–20 min; **cool naturally at room temperature for 30 min**\.

3. Permeabilise with Triton X\-100 at room temperature\.

4. **Blocking**: block with BSA solution at room temperature\.

5. **Primary antibodies**: apply both primary antibodies and incubate overnight at 4 ℃ in a humidified chamber\.

6. **Secondary antibodies**: wash thoroughly with PBS, apply the matching fluorescent secondary antibodies at room temperature in the dark, then counterstain nuclei with DAPI\.

7. **Mounting and acquisition**: mount with anti\-fade medium and acquire images from all groups under **identical exposure time, magnification and field\-selection criteria**\.

8. Include a **negative control section** \(no primary antibody, secondary or isotype only\) to subtract tissue autofluorescence\.

9. Take **five random fields per animal** and use the mean as that animal's data point \(the statistical unit is the animal, not the field\)\.

**Notes**

1. Over\-retrieval destroys tissue morphology while insufficient retrieval gives a weak signal; heating and cooling times must follow the protocol exactly\.

2. Necrotic regions autofluoresce strongly and are easily misread as positive signal — the **negative control section cannot be omitted**\.

3. Keep everything dark from the secondary antibody step onward and acquire images promptly after mounting to prevent quenching\.

### A10\. Biosafety \& Waste Disposal in the Animal Lab

**Introduction**｜Personal protection, work zoning and waste handling for animal experiments, protecting operators, other animals and the environment\.

**Equipment**

- Changing and buffer rooms of the SPF barrier facility

- Biosafety cabinet \(when cell or viral material is involved\)

- Sharps container

- Carcass freezer

**Reagents**

|Component|Amount / Spec|
|---|---|
|75% ethanol, povidone\-iodine|Skin and instrument disinfection|
|0\.5% peracetic acid|Surface and environmental disinfection|
|Chlorine disinfectant|Available chlorine ≥5000 ppm, ≥30 min contact \(when viral material is involved\)|
|Disposable protective equipment|Gown, mask, cap, shoe covers, gloves|

**Procedure**

1. **Entry**: change per barrier facility procedures into cap, mask, shoe covers and gloves and enter the animal area through the buffer room; personal belongings must not be brought in\.

2. **Work**: operations involving tumour cell suspensions or virus\-transduced cells are performed in a biosafety cabinet; used needles are **never recapped** and go directly into the sharps container\.

3. **Spills**: cover a cell\-suspension spill with absorbent paper, pour disinfectant from the outside inwards, leave 30 min, then clean up and report\.

4. **Waste**:

    - Sharps → sharps container → autoclave

    - Bedding, cages, disposable protective equipment → medical waste bag → autoclave

    - Carcasses and residual tissue → double\-bagged and sealed, labelled with project and date → carcass freezer → institutional harmless disposal

    - Liquid waste involving viral material → soak in chlorine disinfectant ≥30 min, then autoclave

5. **Exit**: remove protective equipment in order, wash and disinfect hands and leave\.

**Notes**

1. **Immunocompromised and pregnant personnel must not take part in lentiviral work** \(see **C12**\)\.

2. Carcasses must never be mixed with ordinary medical waste and must go through the institutional harmless disposal route\.

3. All operators must have completed laboratory animal training and hold a valid certificate; the training numbers of the operators in this project are recorded in the ethics approval\.

---

