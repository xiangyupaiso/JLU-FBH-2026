# CircuForge and TorusFold \- Software \(JLU\-FBH iGEM 2026\)

# CircuForge and TorusFold

## Judging Criteria

#### How well is the software compatible with, and does it leverage, existing synthetic biology standards? \(e\.g\. SBOL, other RFCs, data formats, etc\.\)

CircuForge supports **SBOL3, GenBank, FASTA, and JSON** for saving and transferring reviewed construct designs\. SBOL3 records components, sequences, and their relationships; GenBank carries sequence features for downstream design tools; FASTA provides sequence input for further analysis; and JSON retains the application's design record\. For formats that support annotations, CircuForge can also include researcher\-confirmed iGEM Registry Part IDs \(**iGEM Foundation, n\.d\.**\)\. Format\-specific readback checks compare the exported sequences and supported annotations with the source design before users continue their work\.

TorusFold accepts mature RNA sequences and outputs **PDB models and JSON diagnostics**\. Molecular viewers and analysis scripts can read these files, allowing researchers to inspect the structures, compare modeling stages, and continue analysis in their preferred tools\.

See Verifiable design exports and Integration and API\.

#### How well was the software validated \(e\.g\., through experimental work, test data, or benchmarking\)?

CircuForge was evaluated against the experimentally tested combined design from our TNBC project\. Project screening narrowed 17 reviewed candidates to 15 retained epitopes\. Wet Lab merged two overlapping pairs into continuous sequences, producing 13 coding designs that covered all 15 epitopes\. IFN\-γ ELISpot results guided the selection of two coding segments from each antigen source for Combined\. CircuForge turned the eight experimentally selected coding segments into **a sequence\-checked Combined construct design**\. It assembled the segments in the researcher\-confirmed order with GSGGS linkers, generated the corresponding DNA, and replaced the epitope\-coding region within the supplied backbone while preserving the surrounding backbone sequence\. It then verified the encoded peptide sequence and checked the exported files against the generated design\. This demonstrated CircuForge's ability to carry experimentally informed selections through sequence assembly, backbone integration, and verified export\.

We evaluated TorusFold using the project's 2,013 nt mature circRNA\. We checked that ten overlapping fragments covered the complete sequence and retained their original positions\. For a 200 nt test fragment, we compared the initial structure, an intermediate repair stage, and the final refined structure\. Unusually close contacts between backbone phosphorus atoms decreased from 8 to 4 to 3, indicating fewer crowded backbone positions\. We separately retained a full\-length computational model to inspect the circular junction and fragment joins\. We checked TorusFold's refinement settings against the L1 ribozyme structure determined by X\-ray crystallography, PDB 2OIU \(**Robertson and Scott, 2007**\)\. After **refinement starting from the crystal coordinates**, the model had a phosphorus\-atom RMSD of 1\.83 Å relative to the experimental structure\. This indicates that the refined model remained close to the experimental structure, demonstrating **good preservation of the known RNA backbone during refinement**\.

See Validation for the experimental selection, reference reconstruction, and structure checks\.

#### Can the software be useful to other projects?

Other teams can use **their own expression data, antigens, HLA settings, and backbones** in CircuForge\. They can begin with expression\-based target screening, a known protein, or reviewed peptides, then retain candidate sources and confirmed choices through assembly and export\. For their own peptide combinations, they can inspect junction\-spanning windows and request binding predictions through the configured IEDB \(**IEDB, n\.d\.**\)service\.

TorusFold can take mature circRNA sequences from other design workflows and use overlapping fragment predictions to reconstruct circular models\. Teams can use either tool independently or connect them by transferring the mature RNA sequence file\. This lets them adopt the parts of the workflow that fit their research question and available inputs\.

See usage and user guidance and community reuse\.

#### How well can the software be integrated with external tools/software applications? \(APIs, packages, etc\.\)

CircuForge connects **UniProt** \(**The UniProt Consortium, 2025**\), IEDB, and the iGEM Registry to review candidates and constructs\. UniProt supplies protein sequences and source records; IEDB supplies epitope predictions \(**Vita et al\., 2019**\); and Registry review compares construct DNA with Part records and writes researcher\-confirmed IDs into construct annotations\. These connections carry source information into the design rather than leaving it in separate search results\.

TorusFold uses ViennaRNA \(**ViennaRNA, n\.d\.**\) pairing information to guide later modeling stages \(**Lorenz et al\., 2011**\)\. It can call configured **RhoFold\+, trRosettaRNA2, and RNAbpFlow** predictors to generate structures for overlapping fragments \(**Shen et al\., 2024**; **Wang et al\., 2026**; **Tarafder \& Bhattacharya, 2026**\)\. TorusFold then aligns shared regions, reconstructs the full\-length circular model, and applies physical relaxation and refinement to address fragment joins and steric clashes\.

Users can export mature RNA from CircuForge and provide that sequence as TorusFold input\. Local APIs also expose construct compilation, junction\-window enumeration, prediction submission, and job status, while standard files connect both tools to downstream applications\.

See Architecture and design choices, External tools and models, and Integration and API\.

#### Is the software user\-friendly?

CircuForge provides a built\-in example and **a six\-step browser workflow** from data preparation to downloads\. Researchers can review candidates, confirm their Design Cart, assemble a payload, and generate and export a construct without writing analysis scripts\. The workflow keeps source records, user confirmations, and task status visible throughout\. Saved project files let users save their selections and return to the design later\. Users can also switch between light and dark modes and between English and Chinese\.

TorusFold's example viewer lets users rotate a saved model, change its display, and mark the circular junction without installing the prediction environment\. For a new calculation, the usage guide explains how to prepare the sequence, configure settings, and control the run\. Logs, stage outputs, and checkpoint information help users follow the calculation and inspect its progress\.

See Usage and User guidance and community reuse\.

#### How well is the software written and documented for future groups to extend and improve? \(Code documentation, comments in the code, performance evaluation, architecture diagrams, installation and execution scripts, etc\.\)

CircuForge separates the browser interface, analysis functions, external\-resource adapters, construct compiler, and exporters\. Architecture diagrams and module descriptions help future teams locate the code they need to change\. TorusFold documents **external\-tool configuration, run entry points, checkpoints, and intermediate outputs**, allowing developers to inspect individual modeling stages and adapt their interfaces\.

Both projects provide source code under the Apache License 2\.0, with repository examples, dependency records, running instructions, and test materials\. The Wiki adds an illustrated walkthrough, API request and response examples, and downloadable reference\-case files\. Teams can begin with a documented example, identify the relevant module, and use the corresponding checks to assess their changes\.

See Architecture and design choices, Installation and Reuse, and Open source and reuse\.

## 1\. Overview

Our TNBC circRNA vaccine project required us to turn candidate targets and epitopes into constructs ready for laboratory testing\. That process exposed two recurring gaps in current bioinformatics workflows\.

The first is fragmented database navigation and construct preparation\. Researchers often move candidates among disconnected web resources: using UniProt to verify protein identifiers, gene symbols, and functional annotations; checking baseline RNA expression across normal tissues in GTEx \(**GTEx Consortium, 2020**\) to inform candidate review; and submitting sequences to IEDB to predict peptide\-MHC binding affinities\. Manually transferring sequences, coordinates, and thresholds between these interfaces is tedious and error\-prone\. It also makes it difficult to retain selection rationales and track sequence provenance \(**Trygoniaris et al\., 2025**; **McLaughlin et al\., 2020**\)\. After selecting epitopes, researchers still need to arrange linkers, insert the assembled coding sequence into an experimental plasmid backbone, and check the translation reading frame while confirming that unedited backbone regions remain unchanged\. These checks can help prevent costly cloning failures\.

The second gap is the computational cost of modeling full\-length circRNA structures\. RNA structure can influence internal ribosome entry site \(IRES\)\-mediated translation \(**Chen et al\., 2021**\), but large\-scale 3D circRNA modeling is computationally demanding\. Specialized methods include the template\-based 3dRNA \(**Zhang et al\., 2022**\) and the simulation\-based IsRNAcirc \(**Jiang et al\., 2024**\)\. IsRNAcirc’s extensive conformational sampling required approximately 1,593 CPU hours for a single 249 nt circRNA\. Within the tested range, runtime scaled roughly linearly with sequence length\. A proportional extrapolation to our 2,013 nt sequence exceeds 10,000 CPU hours\. This estimate extends beyond the study’s tested range, but it indicates the potential computational cost of iterative vaccine design\. Reconstructing a full molecule from fragment predictions also requires attention to backbone entanglement, atomic clashes, and circular closure\.

We developed an integrated, two\-stage suite to address these workflow and modeling challenges\. CircuForge is the design engine\. It combines three data and prediction resources, including UniProt, in a browser\-based workflow for candidate review, epitope selection, junction peptide inspection, and plasmid construct design\. Its Design Cart records researcher decisions, while the tool verifies translation reading frames and checks that the unedited backbone sequence remains unchanged\. Researchers can then export the mature circRNA sequence as input to TorusFold, the structural reconstruction engine\. TorusFold combines overlapping fragment predictions with spatial alignment, handles circular closure explicitly, and applies targeted geometric refinement to support full\-length reconstruction and reduce geometric clashes\.

In our TNBC project, CircuForge reconstructed the experimentally tested combined design from eight selected coding segments and seven GSGGS linkers, preserving its 112 aa payload sequence within the supplied backbone\. TorusFold provided a full\-length computational model of the 2,013 nt mature circular RNA\. Both tools are open\-sourced under the Apache License 2\.0\. Source code: [CircuForge](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge) · [TorusFold](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid)\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZDAwZjc4NjkwYjhiMmNjODQzZjk5NmM0MjM1N2EzNjhfMDY4YTRiODNmNjc5MWI1NWJjNDRjMDYzMzYwZjE0NjdfSUQ6NzY5ODcxOTQ0ODM5NTYxNTUxNF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 1 CircuForge supports reviewed sequence design; TorusFold supports circular structure modeling\. The sequence passes between the programs as a user\-transferred file\.*



## 2\. Usage

### 2\.1 Workflow Overview

CircuForge supports entry from expression data, a target protein, or candidate peptides, connecting candidate review with peptide assembly and construct export through the Design Cart\. Researchers can then transfer the mature circRNA sequence to TorusFold for fragment\-based modeling and inspection of the resulting structures\.

### 2\.2 CircuForge User Guide

*Video \(interactive, view on the source page\): JLU\-FBH: CircuForge Usage Guide \(2026\) \[English\] — https://video\.igem\.org/videos/embed/dpwGrMSSQS3dK8xeZXsYkT?subtitle=en*

*Embedded document \(interactive, view on the source page\): CircuForge User Guide*

This walkthrough uses the built\-in **hepatocellular carcinoma proteomics demo**, a small processed subset of the public proteomics dataset \(**Ng et al\., 2022**\) prepared for a lightweight demonstration\. The sidebar has six steps: Prepare data, Screen targets, Select epitopes, Assemble peptides, Build construct, and Download files\. Selected targets and epitopes are saved in the **Design list** for use in later steps\.

If you already have a target protein or candidate peptides, choose the **Target protein or Candidate peptides** entry point on Overview\. The walkthrough below starts from expression data and completes a design workflow\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OWY3YTFjZjZlMTBlNGQzNGNiYzQ1ZTI0NjZkYjczZWRfZTJmNGRiZjgzNzQyZTRhMWE3MGIwNDQzNWRiNTYyNGNfSUQ6NzY5ODcyNTUwMDQyMDA4Mjk2Nl8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 2 CircuForge connects target screening, epitope selection, and construct design through the Design Cart\.*

#### Step 1\. Prepare data

Open **Prepare data** and click **Load demo data**, or upload your own **Expression matrix**\. The software accepts CSV and XLSX files\. To provide sample information, download the template and fill in **SampleID** and **Group**\. Paired analysis also requires **Subject** information\.

Check **Assay type** and the input settings, then click **Process data**\. Inspect the processing results and sample groups before continuing to Screen targets\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MmRhNDhmNTIwZjhjMTQwMTQ3OGQ5NGM4ZGU0MWRiNDlfYjNjN2Q0ZWI5MmQwZjczMTFiMzhiY2I4NmQ5Y2NmMmZfSUQ6NzY5ODcyNTcxNTk1NzA1ODU3M18xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 3 Prepare data provides data\-upload controls, a sample\-information template, Load demo data, and Process data\.*

#### Step 2\. Screen and save targets

On **Screen targets**, check the comparison design\. This example uses **Unpaired**, with eight tumor samples and eight normal samples\. Click **Run Differential Analysis** first\. Once the analysis is complete, set the screening criteria\. In this example, select **Higher in tumor**, set the minimum `|log2FC|` threshold to **1** and the FDR threshold to **0\.05**, then click **Apply screening criteria**\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MzAwNjEwNDEwZDNhNzU3MjdmNWY3OTBhNmM0Y2U1ZWVfMDEzYjk5OGY5NTM4NjM0Y2RjNjYxZmQzZDIzZjJiMWZfSUQ6NzY5ODcyODI1MTc2NjA5OTIxNl8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 4 Comparison design and screening criteria are set separately\. Run the differential analysis before applying screening criteria to the results\.*

Inspect the candidate table and the **Evidence Card** below it\. Check differential expression, GTEx annotations \(**GTEx Consortium, 2020**\), UniProt status, and sequence information\. This example selects **P16401**\. Click **Add Selected Targets to Cart** to save it in the Design list\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZTI4ODEyZGYyM2MzNTE0YjM1YWRhYzkzZTEzZTI4YWRfNGZkNzMwODBhMjRmNWFhMjQ4NDhiZGUzYzYxN2MyNmJfSUQ6NzY5ODcyODQxNzQyODU0MDYyMF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **5** Selecting P16401 displays its information in the Evidence Card\. Add Selected Targets to Cart saves the selected target in the Design list\.*

#### Step 3\. Predict and review epitopes

Open **Select epitopes**, choose a saved target under **Load from design list**, and click **Load target**\. This example loads H1\-5 / P16401\. Check the **Protein sequence**\. You can also enter a UniProt accession or gene name and click **Get protein sequence**\.

Under **Prediction settings**, set the MHC class, **Peptide Length**, and **HLA Alleles**\. This example uses **MHC\-I, 9 aa, and HLA\-A\*02:01**\. Check the input that will be submitted to IEDB, then click **Predict epitopes**\.

When the prediction finishes, inspect fields such as Peptide, HLA allele, and **median binding percentile**\. Use the column filters to narrow the candidate list\. This example selects **SLVSKGTLV and ALAAGGYDV**\. Click **Add to design list** to save the selected epitopes for further review and ORF assembly\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NGQ3MjA2NTlmOWVjN2RmMjExNDAwM2QwZGE0MDFlNjBfOTZiOTQ0YjEzZDZlMTgxNDgyZjc1Njg2YTIwMmExODhfSUQ6NzY5ODcyODUxNTU5MTc2OTA4MV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **6** After loading a target from the Design list, set the peptide length and HLA allele, then start epitope prediction\.*

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=Njk2NjhhNWVlN2Q1Yzg3NDJlZjhiOTVhZDFjNTA0NjVfYmVhNzVhYmFkMjc0YjA0MDk1NmVmZWRiMGM0MmM0MDFfSUQ6NzY5ODcyODU4OTI2OTEyNjE1OF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **7** Two candidate epitopes are checked in this example\. They enter the Design list when the user clicks Add to design list\.*

Before assembly, you can click **Review human similarity** to review the selected peptides against human proteins\. Select **NCBI online human BLAST**, **confirm consent to submit the selected peptides to NCBI**, and click **Start review**\. Inspect the returned results and request records, then save the alignment evidence\. To check results later, use the saved job ID\.

#### Step 4\. Assemble peptides and check junctions

Open **Assemble peptides**, check the epitopes and their order in the current input list, enter an **ORF Name**, and choose the linkers\. This example keeps the **GSGGS** setting\. Click **Generate and check ORF** to generate and inspect the assembled sequence\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZWU3MGYwYTg4M2FhNmJjMmQ4MDJhNThkNzZkZDI5NzRfZGQ3NDUwMDNkYzAwZDVhMWUwMzJmYjc4ZGYzZjQ1YTZfSUQ6NzY5ODcyODY3MjE5ODcyNDYzMl8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **9** The two saved epitopes appear on the assembly page\. The user checks the input, ORF name, and linkers before generating the ORF\.*

Under **Review junction peptides**, select the HLA\-I alleles, **confirm consent to submit the assembled ORF amino\-acid sequence to IEDB**, and click **Run Junction MHC\-I Scan**\. The screenshot shows the settings and peptide windows before the scan\. If the status is `not run`, start the scan, then inspect the returned results and review any flagged junction peptides\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=N2FhN2M2ZjA4ZjE2YTNjMWM2MDY2OTVmOTBlMDc2NTBfOGYwMGZkYzBlNDliMjJmMzBiYTdhYjQ0Y2FmYzM4YTdfSUQ6NzY5ODcyODcyODQ4MjE3MjEzOV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **10** Junction review provides HLA settings, consent for external submission, and a list of peptide windows to scan\. The scan has not started in this screenshot\.*

#### Step 5\. Generate and review the construct

Open Build construct and import your team’s backbone under Upload and Read Backbone\. CircuForge accepts SnapGene `.dna`, GenBank, and backbone JSON files\. Inspect the DNA construct map and choose an insertion or replacement method under Feature Map and Editing Method\. Check the target feature or coordinates, strand orientation, and reading frame\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NTMwZmY2Y2Q1OGQ0MjJhOWFjZGQ0NWE4MGQzZTU3MTFfZWVjNWVkYzI4MTg4MmEwYzBhNmU0ZDA1NWQ5YmFjNzFfSUQ6NzY5ODcyODc2ODA5MjgzNDgxNl8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **11** Users import a backbone, inspect its feature map, and select the editing method and target region\.*

Click **Apply ORF and Generate New DNA Construct**, then inspect the results under Construct and checks\. Review and confirm the mature circRNA region against your team’s backbone records, and retain the backbone version and confirmation record\.

For Registry annotations, open Registry review to query candidate Parts and compare their DNA sequences with the construct\. Review the matches, confirm the selected Part IDs, and click **Write Selected IDs to Construct** to add the annotations before export\.

*FIG\. **12** Users review Registry DNA matches and confirm the Part IDs to write into construct annotations\.*

#### Step 6\. Download and save files

Open **Download files**\. After reviewing the construct checks, choose the files needed for your next task\.

*Table 1\. Available download options and their downstream uses\.*

|Download control|Use|
|---|---|
|Results workbook|Save result tables for further review|
|FASTA|Continue sequence analysis|
|GenBank, SBOL3|Transfer sequences and annotations to downstream design tools|
|JSON, Validation ZIP|Save construct records and verification materials|

For a native SnapGene DNA file, check the backbone's **Native write\-back** status first\. After completing Registry annotations, you can also download the corresponding Annotated files\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NDc4ZWMxNTYwYWNkOGMxZWI4NDA2MGY0MWFiZDI0OGJfYmUwZWQxZjJkMmJhYzJjZDdiNDkwN2U4NGI3Y2NjMWRfSUQ6NzY5ODcyOTM4NjMyNDg4ODgxNF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **13** Download files brings together downloads for construct sequences, annotations, result tables, and the validation package\.*

To save your current work, open **Design list** and click **Save project**\. To resume an existing project, choose the project file and click **Check and load**\. **Activity** shows result status for the current session\. **Service status** shows the status of computing services and external resources\.

### 2\.3 TorusFold User Guide

For structural modeling, researchers can transfer the mature circRNA sequence exported from CircuForge to TorusFold, retaining the construct ID and sequence hash\. The saved example below provides a starting point for model inspection before configuring a new run\.

*Video \(interactive, view on the source page\): JLU\-FBH: TorusFold\-Hybrid Introduction \(2026\) \[English\] — https://video\.igem\.org/videos/embed/fGFi6rAF2bQkpYTjDoxc7X?subtitle=en*

*Embedded document \(interactive, view on the source page\): TorusFold User Guide*

For a first look, open the **example viewer**\. Drag to rotate the saved model, change its colors and display style, and use the BSJ marking control to inspect the circular junction\. Clear the marker to return to the whole\-model view\.

*FIG\. **14** Interactive 3D TorusFold RNA model \(viewer captured as an image\): users rotate the saved model, adjust its display, and mark the circular junction\.*

A full prediction starts with sequence preparation\. Follow these six steps\.

#### Step 1\. Prepare the mature circRNA sequence

Prepare your own mature circRNA sequence or use the project's 2,013 nt example sequence\. Save it in the input file required by the runner\. If you export a sequence from CircuForge, keep the **construct ID and sequence hash** with it\.

#### Step 2\. Configure the prediction environment

Follow the installation guide to configure TorusFold, ViennaRNA, and the required external predictors\. Check **predictor paths and model\-weight settings** before starting the full calculation\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MGNjYTAwODc3NGFlZGIyOTE2NmUzMTFhODUwZmRmODhfZWU3MjIyNDVmNzlhMTEzOWM3NDcxNjdiNTkxZTM5ZDlfSUQ6NzY5ODczMDY4MzY2MDg2NDc3NF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 1**5** Users review installation options and external\-tool requirements before starting a prediction\.*

#### Step 3\. Start the prediction

Start the local service and submit the mature RNA, or use the sequence\-running script described in the documentation\. Check the **job ID or run log** to confirm that the calculation has started\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YjIwZjkwZjc2Yjc3ZjFjNDc1ZTI5Njk4ZjZhOGQ5YmNfZmNhMWI3OTExZTY1OGU1YzY2YjVjZWIwYWRlNDQwY2VfSUQ6NzY5ODczMDcxOTI0OTUwMTQ3NF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 1**6** Users follow stage messages and execution details in the run console\.*

#### Step 4\. Monitor progress

Check progress through the local interface or status endpoint\. If a run is interrupted, follow the reproduction guide to **inspect the saved state and resume the calculation**\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YzJjNWM5YTc3ODJlYjYyMmU3NzA4MGI2NzYwZjcyZGNfNDAyMzg0YTMxMmUwNGRhMGM1YzgyMDkzNWIyNjI3OTRfSUQ6NzY5ODczMDc2Nzk4NzczOTkwMF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 1**7** Users inspect the saved stage, configuration, and checkpoint files\.*

#### Step 5\. Inspect the model

When the run finishes, open the **final PDB** in a molecular viewer\. Inspect the circular junction and the regions identified in the diagnostic files\. Use the pairing diagnostics and stage structures in the output directory to compare the reconstructed and refined models\.

#### Step 6\. Save and share the results

Save the **input sequence, software version, run parameters, PDB model, and diagnostic files**\. Include the construct ID and sequence hash when sharing the model so the recipient can find the original design\.



## 3\. Validation

To assess the workflow illustrated above, we evaluated CircuForge against the experimentally tested combined design and checked TorusFold through a crystal\-started refinement comparison and verification of its delivered model\. Together, these checks connect **experimentally informed selection, sequence\-checked assembly, and inspectable computational outputs**\.

### 3\.1 From Candidate Epitopes to the Combined Design

Clinical and multi\-omics evidence supported four antigen sources: TROP2, B7\-H4, Nectin\-4, and LIV\-1\. The project screened their candidate epitopes for HLA\-A\*02:01 using predicted BA IC50 below 500 nM and an IEDB immunogenicity score above zero \(**Calis et al\., 2013**\)\. Researchers then reviewed peptide coordinates against UniProt signal\-peptide and transmembrane annotations\. A separate AlphaFold 3 structural assessment completed the shortlist for first\-round coding \(**Abramson et al\., 2024**\)\.

*Table 2\. Epitope screening and construct selection across four target antigens, from candidate windows to coding segments selected for the Combined construct\.*

|Stage|TROP2|B7\-H4|Nectin\-4|LIV\-1|Total and unit|
|---|---|---|---|---|---|
|All overlapping nine\-amino\-acid windows|315|274|502|747|1,838 candidate windows|
|Predicted BA IC50 below 500 nM|17|13|15|38|83 candidate windows|
|IEDB immunogenicity score above zero|9|10|10|22|51 candidate windows|
|Manual source\-protein review|4|2|6|5|17 candidate epitopes|
|Separate structural review|4|2|4|5|15 retained epitopes|
|Overlapping pairs encoded as continuous segments|3|2|3|5|13 first\-round constructs|
|Modules selected for Combined|2|2|2|2|8 coding segments, covering 9 predicted epitopes|

Structural review excluded `HILHVSFLA` and `FLAEASVRG` from first\-round coding\.

These structure\-derived measurements document the project’s candidate\-review decisions\. Researchers performed the AlphaFold 3 analysis separately; the experimentally selected coding segments then provide the inputs for CircuForge’s assembly evaluation below\.

*FIG\. 18A Interactive epitope validation charts \(captured as an image\): 21A per\-position side\-chain burial across 17 candidates; FIG\. 18B 21B per\-position side\-chain burial vs terminal\-anchor review\.*

Wet Lab then encoded two overlapping epitope pairs as continuous segments, **preserving all 15 retained epitopes in 13 constructs**\.

*Table 3\. Overlapping predicted epitopes encoded as continuous coding segments, with shared residues, encoded sequences, and lengths\.*

|Coding segment|Original predicted epitopes|Shared residues|Encoded sequence|Length|
|---|---|---|---|---|
|TROP2 CTL3|`TLIYYLDEI` and `YLDEIPPKF`|`YLDEI`|`TLIYYLDEIPPKF`|13 aa|
|Nectin4 CTL1|`FQARLRLRV` and `RLRVLVPPL`|`RLRV`|`FQARLRLRVLVPPL`|14 aa|

Within each antigen group, first\-round IFN\-γ ELISpot counts provided a within\-run ranking for selecting two coding segments for Combined\. The resulting eight\-segment design includes the merged Nectin4 CTL1 sequence and therefore covers nine original predicted epitopes\. Sequencing, protein expression, and subsequent functional assays provided biological evidence for the Wet Lab Combined construct\. CircuForge carried the selected coding design through the assembly, backbone\-integration, and export checks described below\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NGM0OGM5YmRhNmZmMTk5MDFlZTc3Zjg5NGMwNzFjNTVfNDZhZDlkMDBjYThmZmI4YzM3YTA2YzdiODUzYWZiMDFfSUQ6NzY5ODczMTc0NTg3MjY0NTEyNV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **19** First\-round IFN\-γ ELISpot counts guided selection of two coding segments per antigen for Combined\.*

The candidate\-to\-coding index records source coordinates, peptide identities, sequence hashes, and the documented construct assignments\. The Combined reference fragments identify the eight selected segments and their order in the supplied reference\. Scientific selection and experimental procedures are described on our [Model](https://2026.igem.wiki/jlu-fbh/model), [Engineering](https://2026.igem.wiki/jlu-fbh/engineering), [Experiments](https://2026.igem.wiki/jlu-fbh/experiments), and [Results](https://2026.igem.wiki/jlu-fbh/results) pages\.

### 3\.2 Sequence\-Checked Assembly and Export of Combined

Using the eight coding segments selected through the experimental review above, CircuForge reconstructed the combined coding design in the supplied backbone and checked its translation and exports\. Using the 5,267 bp combined reference plasmid, the compiler joined the segments in their recorded order with seven GSGGS linkers, generated the coding DNA, and replaced the 336 bp antigen\-cassette interval at bases 1606–1941 \(one\-based, inclusive\)\. The checks confirmed the payload translation, linker arrangement, surrounding backbone, and exported design files\.

*Table 4\. Recorded checks of construct integrity, export readback, and evidence archive consistency, with the scope of each result\.*

|Check|Recorded result|What this establishes|
|---|---|---|
|Segment identity and order|All eight segment translations and their order match|The selected coding design is retained at protein level|
|Payload and linkers|336 nt; 112 aa, including seven GSGGS linkers|Coding length and linker arrangement match the reference|
|Surrounding backbone|4,931 bp outside the edited interval unchanged|The edit is confined to the designated cassette|
|Full fusion translation|Matches the reference; no internal stop reported|The recorded fusion coding frame is retained|
|DNA generation|54 synonymous codon changes; 67 nucleotide differences|Recoding preserves the encoded protein|
|JSON, FASTA, GenBank, and SBOL3 readback|Eight recorded DNA\-export checks passed|The tested sequence and identity fields survive export and readback|
|Native SnapGene file readback|DNA and 15 generated segment/linker features passed|The generated sequence and feature locations are retained in the file|
|Evidence archive|Eleven packaged files match their SHA\-256 inventory|The evidence files retain their recorded identities|

The DNA reference\-case records identify compiler `CIRCURE-CONSTRUCT-2.3.0`, exporter `CIRCURE-EXPORT-2.2.0`, and R 4\.5\.3\. The local compiler call took 1\.61 s\. The resulting design preserves the selected protein sequence while generating a synonymous DNA realization; Further codon\-optimization options are discussed in Future improvements\.

The reference\-case evidence contains reference and generated sequences, comparison tables, and a standalone archived\-file verifier\. These materials let other teams inspect the edit and check the recorded sequence relationships directly\.

### 3\.3 Biological Evidence for the Reference Design

The molecular and functional results below characterize the **Wet Lab Combined reference** that CircuForge reconstructed from the selected coding design\. BSJ sequencing identifies the circular RNA junction, and anti\-FLAG immunoblotting detects protein expression\. These assays establish the biological context of reference design; the sequence comparison and export checks above measure the software’s reconstruction of that design\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NjM2MjI2YzExMzAzNDRiMzk3ZWM1NTI3OGY5YTI5ZmVfOTZjOGQyMGM4MGE4YTE0YzQyYTdlNWVhZTkzZTRiYmJfSUQ6NzY5ODczMjYzNjgxODE2NDk2M18xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 2**0**A BSJ sequencing identifies the ligation junction in the experimentally tested *combined* RNA\.*

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MGUzNmZiODNkMzNkN2NjMzE2N2M5MzgzNmJkYTFmZGNfOTQ2ZTc2YmE2ZDIzNGVhMmYwNWUzMzUyY2IyMTljMmNfSUQ6NzY5ODczMjY1NjI5NzAyMDY2NV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 2**0**B Anti\-FLAG immunoblotting detects expression from the Wet Lab construct, with β\-actin as the loading control\.*

Second\-round IFN\-γ ELISpot and MDA\-MB\-231 killing assays connect the selected multi\-segment reference design to immune and target\-cell responses\. The figures retain the Blank, single\-segment, dual\-segment, and Combined comparisons used to evaluate that experimental design\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NTg1MjA4NjJkOTUyNTVmMDJkNTQwOGJjYzcyNTQxZmJfMTU1NjIwMTgwNjVmMTgxYjdhNjVjNjU3YTkzZDgyM2ZfSUQ6NzY5ODczMjcwMTg4ODc5Mzg2OF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 2**1**A Second\-round IFN\-γ ELISpot compares **the Combined design with the Blank, single\-segment, and dual\-segment designs\.*

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=M2QxNWJjNDdhMzRjMzliMGYyNTU4Yzc5ZWVlNzJhOTBfOGYxMDU5ZjM4MmU1ODlkYWFhYTE1YTRjZWE4MDZjZThfSUQ6NzY5ODczMjcxNzM4NjYxNjA0OV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. 2**1**B Vaccine\-primed T\-cell killing of MDA\-MB\-231 cells was measured across three effector\-to\-target ratios\.*

### 3\.4 Linking the Reference Construct to the RNA\-Model Input

To connect the reference design with the saved RNA model, we compared reference plasmid bases 723–2735 with TorusFold’s saved 2,013 nt input\. After removing whitespace, uppercasing, and converting T to U, the two sequences **matched exactly**, with zero position differences and no rotation or reversal\. Both have the normalized RNA SHA\-256:

c7836a9fbef98d66e97d72286b6b788055679e06fe6c23bbd18c51f94ab73753

The comparison record and reference\-region FASTA establish the sequence correspondence between the supplied reference plasmid region and the saved model input\. This check identifies the RNA sequence represented by that model\. Any recoded design must be linked to its own RNA sequence and model run\.

### 3\.5 TorusFold Refinement and Delivered\-Model Verification

With the model input linked to the reference sequence, we next examined refinement behavior and the consistency of the delivered structural files\.

**Crystal\-started refinement check\.** We checked TorusFold’s refinement settings against the L1 ribozyme structure determined by X\-ray crystallography, PDB 2OIU\. After refinement starting from the crystal coordinates, the repository reports an RMSD of **1\.83 Å** relative to the experimental structure\. This refinement preservation check provides a reference for calibrating the settings against a known starting structure\.

**Inspectable model delivery\.** The repository supplies the 2,013 nt input sequence, PDB coordinates, an interactive viewer, and provenance records for the saved PPR\-repaired stage\. Researchers can inspect the model, locate the circular junction, and relate the coordinates to the recorded sequence and computational stage\.

We verified the delivered artifacts with NumPy 2\.3\.5\. Both the original\-LF and Windows\-CRLF sequence representations reproduced 20/20 checks with zero failures\.

*Table 5\. Verification results for sequence files with LF and Windows\-converted CRLF line endings\.*

|Sequence\-file representation|Checks reproduced|Failed assertions|Exit status|
|---|---|---|---|
|Original LF bytes|20/20|0|0|
|Windows\-converted CRLF bytes|20/20|0|0|

The CRLF raw byte hash differs only by line endings; after normalization, the sequence hash is identical\. All twelve `joint_J` checks pass\. The corrected residuals are about 3–4% for the main runs and about 15% for the table arms\.

### 3\.6 Software Checks and Measured Execution

Software checks and recorded resource measurements help other teams assess what was tested and what computing setup may be needed for reuse\.

The recorded evaluation yielded **32/32 passing CircuForge API tests** and **17/17 passing archived\-file consistency checks**\. The API suite exercised local API behavior in an isolated Python 3\.13\.7 environment using offline fixtures and test doubles\. The archived\-file check independently examined the supplied sequences, coding relationships, archive integrity, and reference\-to\-model input match\. These are separate evaluations with their own recorded scopes\.

*Table 6\. Recorded results for CircuForge API checks, archived reference\-file consistency, and TorusFold artifact verification\.*

|Evaluation|Recorded result|
|---|---|
|CircuForge API behavior|32 passed; 0 failed|
|Archived reference\-file consistency|17 passed; 0 failed|
|TorusFold delivered\-artifact verification|20 passed; 0 failed|

*Table 7\. Recorded runtime and memory measurements for CircuForge and TorusFold, with their environments and measurement scopes\.*

|Task|Recorded measurement|Measurement scope|
|---|---|---|
|CircuForge reference\-case compilation|1\.61 s; R 4\.5\.3 on the recorded Windows environment|One local compiler call; import, external prediction, Registry access, export, and browser interaction are outside this timing|
|TorusFold recorded CPU run|Approximately 7 h; approximately 30 GB peak RAM on AMD Ryzen AI MAX 395|Repository\-reported saved run with its recorded low\-configuration settings|
|TorusFold recorded GPU path|Approximately 30 GB peak unified memory on the reference APU|Repository\-reported hardware\-specific resource measurement|

Run versions, environments, and check results are retained in the verification summary and reference\-case provenance\. Current\-version end\-to\-end benchmarking is included in the improvement plan below\.



## 4\. Development

The following sections explain the design choices, engineering changes, and user feedback behind the workflows and checks described above\.

### 4\.1 Architecture and Design Choices

#### CircuForge

CircuForge organizes statistical analysis, external\-data retrieval, candidate review, and sequence design around research tasks\. The **Design Cart stores confirmed targets and epitopes**, connecting analysis results to later assembly\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MTkzYTQyMWFjMGZkNTE5ZGRmMTMyNjc5YTQ5MjhjMTlfMDhlNDg5N2Y4ZjlkOGM2YmU2YzlhZThiYWM1YzRiNjNfSUQ6NzY5ODczMzMzNDc1MDU0Njk0NV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **22** CircuForge’s task\-based modules transfer confirmed candidates through the Design Cart\.*

##### Choice 1\. A guided browser workflow

We chose Shiny to put analysis tables, plots, and design controls in a browser that researchers can use directly \(**Posit Software, PBC, n\.d\.**\)\. limma, edgeR, and the sequence\-handling and visualization packages support analysis, data processing, and result review \(**Ritchie et al\., 2015**; **Chen et al\., 2025**\)\.

The guided workflow **reduces the need to write scripts**\. We prioritized a defined sequence of research tasks so users can review results, confirm selections, and carry a design through assembly and export in one interface\.

##### Choice 2\. Separating interactive analysis from longer tasks

Longer prediction jobs need status tracking, while interactive result review needs to remain responsive\. Shiny handles interactive analysis, and a local FastAPI service manages tasks that benefit from separate tracking\. Docker Compose starts both services together\. This makes jobs easier to track, while requiring developers to maintain two runtime environments\.

##### Choice 3\. Transferring confirmed candidates through the Design Cart

Candidates need to retain their peptide sequences, HLA alleles, sources, and review records as they move to the next stage\. The Design Cart uses **stable IDs, deduplication, and preserved order** to transfer confirmed candidates\. Project Bundles support saving and restoring work across sessions\.

We keep user confirmation as a separate step so software recommendations and researchers’ design decisions are recorded separately\. KEEP, REVIEW, and REJECT display QC recommendations\. Researchers confirm which candidates to use before proceeding to assembly\.

##### Choice 4\. Retaining sources and retrieval records

Candidate review draws on biological resources that return information in different formats\. Source adapters organize the required fields and retain available source identifiers, request states, and raw records\. Saved responses support later review, while retrieval times and refresh controls help users decide when to update the information\.

##### Choice 5\. Verifiable design exports

Other software must be able to read the sequence and features correctly after export\. CircuForge **reads core export formats back** and checks the information each format preserves against the source design\. Format\-specific verification checks sequences and supported annotations, giving researchers checked files to pass to downstream tools and collaborators\.

#### TorusFold

TorusFold organizes its modules around pairing information, fragment prediction, full\-length reconstruction, and refinement\. This lets long\-RNA modeling run and be checked one stage at a time\. Our reconstruction module uses fragment positions and shared residues to place local coordinates on the same circular RNA molecule\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NDhkNjI0ZjE4ODY4ZDE4ZDE4ODE1NzBjNmNlMDExODZfZjNjYmI3NjdjNDU4NjI3NGVlODk1MDRjZGU0MTMzMmNfSUQ6NzY5ODczMzQxMjQxMjQ5MzAwNF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **23** TorusFold connects pairing information, fragment prediction, reconstruction, and refinement, saving outputs at each stage\.*

##### Choice 1\. Retaining full\-sequence pairing information during fragment modeling

TorusFold retains **pairing information for the whole sequence** when dividing it into fragments, so later stages can use it to model the full molecule\. We integrate ViennaRNA and configurable DivideFold\+ information, passing candidate base pairs and their supporting information into modeling \(**Omnes et al\., 2026**\)\. We retain the sources of the proposed pairs and records of which pairs were used\. Researchers can compare suggestions from different sources and inspect the modeling settings\.

##### Choice 2\. Using overlapping fragments as alignment references

To let 3D prediction tools process a long input, we divide the sequence into **overlapping fragments** and use their overlaps as alignment references\. The documented example runner uses a 200 nt segment setting with 30 nt overlaps\. Configured predictors generate candidate structures for these fragments\.

The overlaps give neighboring fragments shared residues that the program uses to recover their relative positions\. This alignment information comes at the cost of some repeated prediction work in the overlapping regions\.

##### Choice 3\. Repairing joins and refining the reconstructed structure

Joining fragment models requires handling fragment boundaries, circular closure, and steric clashes\. TorusFold aligns shared residues and reconstructs full\-length coordinates\. It then uses structural constraints and physical refinement to repair joins and reduce steric clashes\.

We save the reconstructed coordinates and their check results so researchers can locate joins and compare structures before and after repair\.

##### Choice 4\. Saving stage results and checkpoints

Long\-RNA modeling has several time\-consuming stages\. Researchers need to monitor progress and reuse completed results after an interruption\. TorusFold saves **intermediate structures, diagnostic files, and checkpoints** to support stage comparisons and recovery from saved checkpoints\. We allocate additional storage and file management for these records so future teams can inspect or modify individual stages\.

#### Continuing from construct design to structural modeling

Researchers pass the mature RNA file exported by CircuForge to TorusFold to model the corresponding RNA sequence\. Saving the construct ID and sequence hash with the sequence links the model and its run records to the original design\.



### 4\.2 Engineering Iterations

#### CircuForge: carrying project decisions into construct design

CircuForge V1\.0 brought data import, target screening, and epitope prediction into one application\. As our project moved from candidate analysis to construct design, we needed selected records, supporting evidence, and researcher decisions to remain connected through assembly and export\. The following iterations became the V2\.0 workflow\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NmIzOGE5ZGQ5ZTBkMjE2M2ZhZmZiYTY5ZTMwZjFkMWJfNTg2N2VjYzljY2M0Y2U2YTQ4YjE1M2Y1OGViNTlhNzdfSUQ6NzY5ODczMzQ5OTA2MjM0MDg3MV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **24** CircuForge evolved from analysis modules into a connected candidate\-review and construct\-design workflow\.*

##### Iteration 1\. Making candidate identity and researcher decisions explicit

We presented V1\.0 at an online exchange involving five iGEM teams\. The exchange prompted us to reflect on how to distinguish software recommendations from researchers’ final selections\. We added **stage\-specific IDs and Evidence Cards** to connect candidate identities with their supporting information\. KEEP, REVIEW, and REJECT present software QC recommendations, while a separate confirmation step records which candidates the researcher selects for continued design\.

##### Implementation 1 · Linking candidate identity, evidence, and researcher confirmation

A stage\-specific epitope ID combines sequence, prediction mode, HLA, and target identity\. The selection handler records the QC recommendation separately from the researcher’s decision and saves the candidate evidence with the selected entry\.

\# ID helper: combine the peptide, prediction mode, HLA allele, and target identity\.\# Normalize case and surrounding whitespace in each identifying field\.design\_cart\_epitope\_id \<\- function\(peptide, mode, allele, target\_symbol, target\_accession\) \{  paste\(    "EPITOPE", toupper\(trimws\(peptide\)\), toupper\(trimws\(mode\)\),    toupper\(trimws\(allele\)\), toupper\(trimws\(target\_accession\)\),    toupper\(trimws\(target\_symbol\)\), sep = ":"  \)\}\# Selection\-handler excerpt: chosen contains the selected candidate rows\.\# Save the QC recommendation, the user's selection, and its confirmation time\.chosen$QCRecommendation \<\- chosen$FinalDecision %\|\|% chosen$DisplayDecisionchosen$UserDecision \<\- "SELECTED\_FOR\_ORF\_REVIEW"chosen$ConfirmedAt \<\- format\(Sys\.time\(\), "%Y\-%m\-%d %H:%M:%S"\)\# Serialize each selected row, including its evidence and recorded decisions\.chosen$EvidenceJSON \<\- vapply\(seq\_len\(nrow\(chosen\)\), function\(i\) \{  as\.character\(jsonlite::toJSON\(    as\.list\(chosen\[i, , drop = FALSE\]\),    auto\_unbox = TRUE, null = "null", na = "null"  \)\)\}, character\(1\)\)\# Record the prediction source and save the selected entries in the Design Cart\.chosen$Source \<\- paste0\("IEDB ", toupper\(input$pred\_mode\)\)design\_cart$add\_epitopes\(chosen\)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=Y2I4OGU2N2FkMGU4ZDE5MGI3ODgwMDcwMjU5NDBjNDFfMDE4NGMyYjc1ZmU1OWExMjVhMmQ5NTQ5MzcxNTg3ODJfSUQ6NzY5ODczMzU1MjUwNjI5MzU0M18xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **25** Participants share software\-development experience at an online exchange involving five iGEM teams\.*

##### Iteration 2\. Preserving confirmed selections in the Design Cart

Associate Professor Qingtian Guan suggested saving selected records before taking further action\. We implemented the **Design Cart** to retain confirmed targets and epitopes, compare entries, remove duplicates, and preserve their assembly order\. Project Bundles save these records across sessions, allowing researchers to continue a design with its sources and confirmed selections intact\.

##### Implementation 2 · Retaining selected records across design stages and sessions

The Cart merges entries by ID while retaining the incoming row order\. Project Bundle serialization saves target selections, epitope selections, and the review state for later restoration\.

\# Cart merge helper: keep the existing records when no new rows are supplied\.merge\_rows \<\- function\(old, incoming\) \{  if \(\!nrow\(incoming\)\) return\(old\)  \# Replace matching CartIDs and append incoming rows in their supplied order\.  combined \<\- rbind\(    old\[\!old$CartID %in% incoming$CartID, , drop = FALSE\], incoming  \)  rownames\(combined\) \<\- NULL  combined\}\# Project Bundle export excerpt: record and bundle\_dir are supplied by the caller\.\# Save target and epitope selections as CSV files, and the review state as JSON\.project\_bundle\_write\_csv\(record$targets, file\.path\(bundle\_dir, "targets\.csv"\)\)project\_bundle\_write\_csv\(record$epitopes, file\.path\(bundle\_dir, "epitopes\.csv"\)\)project\_bundle\_write\_json\(  record$epitope\_review %\|\|% list\(\),  file\.path\(bundle\_dir, "epitope\_review\.json"\)\)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YzkyY2MxYzAyYjIxYzdhYWVmN2JmYWEwYmY4NTgyOTBfMmNlYmUzZmVlZWFkNGRkYWJmYmQ2ZjUyNjVhMzEyODVfSUQ6NzY5ODczMzU5MjA2MjkwNTM3Ml8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **26** The team discusses the software workflow with Associate Professor Qingtian Guan\.*

##### Iteration 3\. Connecting task management, deployment, and checked exports

Professor Xiangyu Meng’s software\-engineering feedback informed separating module responsibilities, adding visible status tracking for longer jobs, and improving runtime documentation\. We separated interactive analysis from task services, provided Docker Compose startup, and added export readback checks\. Task records show request progress, while format\-specific checks verify the sequences and supported annotations sent to downstream tools\.

##### Implementation 3 · Testing sequence\-preserving exports

The SBOL3 round\-trip test writes a design, reads it back, and compares both its component identity and DNA sequence with the source manifest\.

testthat::test\_that\("SBOL3 RDF/XML round\-trip preserves component and DNA sequence", \{  \# Build the source manifest using helpers from the existing test suite\.  manifest \<\- build\_construct\_manifest\(    make\_export\_construct\(\), make\_export\_registry\_hits\(\)  \)  \# Choose an RDF/XML output path and register cleanup after the test\.  path \<\- tempfile\(fileext = "\.rdf"\)  on\.exit\(unlink\(path\), add = TRUE\)  \# Export the manifest and read the same file back into a structured record\.  write\_construct\_sbol3\(manifest, path\)  restored \<\- read\_construct\_sbol3\(path\)  \# Check the component identity and DNA sequence against the source manifest\.  testthat::expect\_equal\(restored$component\_id, manifest$construct\_id\)  testthat::expect\_equal\(restored$sequence, manifest$dna\_template$sequence\)\}\)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YmQ4MGQ1NThlNTk1MjZjN2VlYjQ4ZTNjYTI1OGEwYmZfOTVkYTgwZjEzODUwNzI1NWZiM2U0MTc0ZmFkNmJiOWFfSUQ6NzY5ODczMzY3NTQ0OTcxNTk2MF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **27** The team discusses module responsibilities, task management, and software deployment\.*

V2\.0 combines these changes into a guided workflow from candidate review to construct export\. The reference\-case evaluation demonstrates how confirmed coding segments become an assembled, sequence\-checked design within a supplied backbone\.

#### TorusFold: connecting fragment prediction, reconstruction, and refinement

##### Iteration 1\. Preparing the project sequence for fragment prediction

Our 2,013 nt mature circRNA required a modeling route that could use the predictors and computing resources available to us\. We implemented **overlapping segmentation with recorded sequence positions**, allowing local predictions to retain their relationship to the complete RNA\. Shared residues between neighboring fragments supply the alignment references for reconstruction\.

##### Iteration 2\. Establishing consistent reconstruction coordinates

Full\-length reconstruction requires local predictions to share a consistent coordinate system\. We corrected reconstruction anchors, rebuilt local coordinate frames, and passed pairing information through the reconstruction steps\. These changes connected fragment positions, alignment references, and structural constraints in the assembled model\. Saved stage structures allow researchers to inspect fragment joins and compare coordinates across reconstruction and repair\.

##### Implementation 4 · Aligning reconstruction anchors

Four target anchors connect the template to the phosphate trace; Kabsch alignment places the template atoms in the reconstructed coordinates\.

\# Reconstruction excerpt: p\_coords\[i\] is the current phosphate position\.\# The surrounding code supplies local directions b and r and next phosphate nxt\.\# Position the C1' and C4' sugar anchors using the template offsets\.c1\_dst = p\_coords\[i\] \+ b \* \_C1\_ALONG \+ r \* \_C1\_PERPc4\_dst = p\_coords\[i\] \+ b \* \_C4\_ALONG \+ r \* \_C4\_PERP\# Position O3' relative to the next phosphate, then collect the four anchors\.o3\_dst = nxt \- b \* 1\.6dst\_anchors = np\.stack\(\[p\_coords\[i\], c1\_dst, c4\_dst, o3\_dst\]\)\# Fit the source anchors to the target anchors and transform the template atoms\.aligned = \_kabsch\_align\(src\_anchors, dst\_anchors, tcoords\)

##### Implementation 5 · Orienting atoms in a local coordinate frame

The subsequent frame revision uses backbone, perpendicular, and normal directions to position the sugar anchors in three dimensions\.

\# Reconstruction excerpt: the surrounding code supplies local directions b and r\.\# With r already normalized and perpendicular to b, form the third direction\.n\_axis = np\.cross\(b, r\)\# Apply the stored C1' and C4' offsets along all three local directions\.\_o1, \_o4 = \_ANCHOR\_OFFSETS\["C1'"\], \_ANCHOR\_OFFSETS\["C4'"\]c1\_dst = p\_coords\[i\] \+ b \* \_o1\[0\] \+ r \* \_o1\[1\] \+ n\_axis \* \_o1\[2\]c4\_dst = p\_coords\[i\] \+ b \* \_o4\[0\] \+ r \* \_o4\[1\] \+ n\_axis \* \_o4\[2\]\# Position O3' relative to the next phosphate and collect the four anchors\.o3\_dst = nxt \- b \* 1\.6dst\_anchors = np\.stack\(\[p\_coords\[i\], c1\_dst, c4\_dst, o3\_dst\]\)\# Align the template anchors and transform its atom coordinates into this frame\.aligned = \_kabsch\_align\(src\_anchors, dst\_anchors, tcoords\)

##### Implementation 6 · Carrying base pairs into reconstruction and refinement

The same pair list enters all\-atom reconstruction and Amber refinement, connecting pairing guidance across the two stages\.

\# Reconstruct all atoms from the coarse coordinates, sequence, and base\-pair list\.\_structure\_5 = reconstruct\_all\_atom\(best\_coords, sequence, pairs=pairs\)\# Pass the reconstructed structure and the same pair list to Amber refinement\.\# Run on the CPU with a maximum of 3000 minimization iterations\.\_refined\_coords\_5, \_e0\_5, \_e1\_5, \_info\_5 = \_amber\_refine\_full\(    \_structure\_5, pairs,    platform\_name="CPU",    max\_iterations=3000,\)

##### Iteration 3\. Evaluating refinement through structural measurements

We revised the base\-pair guidance parameter `K_BPP` from 600 to 13\.4\. A separate 200 nt fragment test recorded **a reduction in non\-adjacent phosphorus\-atom close\-contact pairs from eight to three** across reconstruction, PPR, and Amber refinement\. The 2OIU comparison checked refinement starting from crystal coordinates against the known experimental structure\.

##### Implementation 7 · Calibrating the base\-pair guidance strength

The calibration script derives a force\-scale criterion from observed base\-pair distance variation; the corresponding revision sets the guidance coefficient to 13\.4\.

\# Calibration\-script excerpt: nn contains the observed base\-pair N\-N distances\.\# Compute their standard deviation and the corresponding force\-scale criterion\.nn = np\.array\(nn\)sigma = float\(nn\.std\(\)\)crit = 0\.6 \* B\.KBT / sigma\# Report the sample counts, distance statistics, and calculated criterion\.print\(f"\{len\(structs\)\} structures, \{len\(nn\)\} pairs"\)print\(f"observed N\-N distance: mean \{nn\.mean\(\):\.3f\} nm, sd \{sigma:\.3f\}"\)print\(f"criterion: K\_BPP = 0\.6 \* kBT / sigma = 0\.6 \* \{B\.KBT\} / \{sigma:\.3f\} = \{crit:\.1f\}"\)\# Separate simulation\-configuration excerpt: set the calibrated BPP coefficient\.\# This assignment records the selected value; the script above reports crit\.K\_BPP = 13\.4

04

### 4\.3 User Testing and Feedback

We conducted **internal task\-based user testing** of CircuForge and TorusFold\. Participants were mainly team members with limited bioinformatics experience, including students from our Wet Lab and Human Practices \(HP\) groups\. They worked through representative design and model\-inspection tasks, allowing us to identify where task states, result organization, and guidance needed to be clearer\. Their feedback informed the following improvements\.

#### CircuForge user testing

The CircuForge sessions followed the design workflow: importing data, reviewing a target, selecting epitopes, checking assembly order and junction peptides, generating a construct, and locating the exported files\. Participants used the browser interface and Design list to carry their selections between stages\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OTUyMTRlMzQyNGFkN2VlYTk2YzAwYmVhNWM4MWY5YWNfM2YwMWY3NTU4NjlhMDM4NzU2NzgyZDM4YjAwMDczYjBfSUQ6NzY5ODczMzc0NDgzNjI5OTc5NV8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **28** Team members test CircuForge’s candidate\-review and construct\-design workflow\.*

Participants needed clearer answers to two questions: whether a submitted request had finished, and which files they should save after generating a construct\. We revised **task\-status messages and export guidance** to distinguish submission, processing, and result review, and to connect the generated design with its downloadable files\. The implementation provides job IDs, status retrieval, and constructs export packages with readback checks\.

##### Implementation 8 · Returning a trackable task

Submission returns a job ID, its state, and a status endpoint while the prediction runs in a background task\.

\# API\-route excerpt: request, payload, and background\_tasks come from the route\.\# Retrieve the configured service and enqueue the submitted prediction payload\.service = request\.app\.state\.epitope\_servicejob = service\.enqueue\(payload\)\# Register the job for execution as a background task\.background\_tasks\.add\_task\(service\.run, job\["job\_id"\]\)\# Return the job identifier, current state, and endpoint for checking its status\.return \{    "job\_id": job\["job\_id"\],    "status": job\["status"\],    "status\_url": f"/v1/jobs/\{job\['job\_id'\]\}",\}

##### Implementation 9 · Packaging the design with its verification record

The export writer generates four formats from one manifest, checks their readback, and saves the check table with the export files\.

\# Export the same construct manifest in JSON, FASTA, GenBank, and SBOL3 formats\.write\_construct\_json\(manifest, json\_path\)write\_construct\_fasta\(manifest, fasta\_path\)write\_construct\_genbank\(manifest, gbk\_path\)write\_construct\_sbol3\(manifest, sbol\_path\)\# Read back the exports and check them against the source manifest\.checks \<\- verify\_construct\_roundtrip\(  manifest, json\_path, fasta\_path, gbk\_path, sbol\_path\)\# Include the verification table in the bundle alongside the exported files\.write\.csv\(checks, file\.path\(bundle\_dir, "roundtrip\_checks\.csv"\), row\.names = FALSE\)

Follow\-up sessions revisited these tasks, focusing on continuing through the workflow, identifying the returned results, and locating the corresponding exports\. The V2\.0 workflow keeps confirmed selections in the Design Cart and brings sequence files and validation materials together at the download step\.

#### TorusFold user testing

TorusFold testing followed the user journey from sequence preparation and task monitoring to model inspection and output retrieval\. Participants worked with the project example, located model and diagnostic files, rotated the RNA structure, changed its display, and inspected the back\-splice junction\. Stage structures provided material for comparing reconstruction and refinement\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=N2MwYjg3MWYwNWY2NGE4YTEwZDE3MDMzOGJmOGU3OWNfMzhjMmNlZTE4NTIwZDJmMDc2YmIwY2RhYjljOGNiMWJfSUQ6NzY5ODczMzk4ODE3MjkwOTU5OF8xNzkyNTAzNDUyOjE3OTI1ODk4NTJfVjM)

*FIG\. **29** Team members inspect the RNA model and review TorusFold’s result\-viewing workflow\.*

Participants needed a clearer connection between the on\-screen model, its computational stage, and the files used for further inspection\. We improved **stage\-aware model viewing and progress information**: the interface displays saved stage structures and identifies the stage being viewed, while progress and checkpoint controls help users follow the calculation\. The changes include improvements to the stage\-model display and viewer, progress, and checkpoints\. A dedicated demo\-view control also gives first\-time users a direct entry to the project model\.

##### Implementation 10 · Keeping the viewer label tied to its stage

The viewer keys updates by stage file and modification time, keeping the displayed level and description tied to the selected computational stage\.

// Viewer\-update excerpt: stage and the label elements come from the handler\.// Identify the stage file by its name and modification time; skip a repeated key\.var key = stage\.name \+ '\|' \+ stage\.mtime;if \(key === shownStructure\) return;shownStructure = key;// Show the selected stage's level and description, using its name if needed\.if \(labelEl\) \{  labelEl\.hidden = false;  if \(levelEl\) levelEl\.textContent = 'Level ' \+ stage\.level;  if \(descEl\) descEl\.textContent = stage\.desc \|\| stage\.name;\}

##### Implementation 11 · Updating progress from the running job

Each server heartbeat refreshes the run state and maps the active level to its progress entry, keeping the interface aligned with the calculation\.

// Receive a server heartbeat and refresh the displayed run state\.EventBus\.on\('sse:heartbeat', function \(data\) \{  applyRunState\(data\);  // Mark the reported level as running when the heartbeat includes its index\.  if \(data\.current\_level \!= null\) updateProgress\(levelNameAt\(data\.current\_level\), 'running'\);\}\);

Follow\-up testing focused on finding the final model, identifying the structures used for reconstruction–refinement comparison, and locating the circular junction\. We aligned the result guidance with these tasks so users could move from model viewing to stage comparisons and diagnostic files\.

### 4\.4 Future Improvements

Our next steps focus on helping researchers turn reviewed vaccine designs into experimental constructs and explore RNA structure with clearer guidance\. Building on our project experience and internal user feedback, we plan to develop the following features\.

**Optimize codons for the intended expression host\.** We plan to let researchers choose their expression host and optimize the DNA encoding their selected peptide combination while keeping the amino acid sequence unchanged\. CircuForge would consider user\-specified codon preferences, GC content, and restriction sites\. Researchers could compare the original and optimized sequences before choosing the DNA for their experiments\.

**Review epitopes in their biological context\.** We plan to show each peptide’s position on its source protein alongside signal\-peptide and transmembrane regions\. Researchers can inspect these regions when choosing epitopes and record the reason for each selection or exclusion\. Saved screening conditions would also make it easier to repeat a defined selection procedure with another antigen or HLA background\.

**Improve NCBI searches for human\-protein similarity review\.** We plan to improve how CircuForge submits NCBI BLASTP searches and retrieves their results, reducing repeated requests and making long waits easier to follow\. Users would see whether a search has been submitted, is still running, or has finished, and could reopen saved matches without resubmitting the same search\. Clearer handling of interruptions and timeouts would help researchers continue reviewing peptide similarities to human proteins without restarting every step\.

**Make RNA structures easier to assess\.** We plan to provide clearer explanations of fragment joins, close contacts between atoms, proposed base pairs, and refinement changes\. Measurements in the viewer and downloadable reports would use consistent definitions and be checked against the saved structures\. We also plan to test predictions on RNAs with experimentally determined structures, allowing researchers to assess how closely the predicted models match those structures\. This would extend the current check of how refinement preserves a known starting structure\.

**Help more teams run and use the tools\.** We plan to provide simpler installation options, more small examples, and a complete demonstration from input preparation to result interpretation\. For TorusFold, measurements across RNA lengths and computers would help teams estimate the time and memory needed for their own sequences\. Further testing with researchers who have limited bioinformatics experience will cover installation, construct design, viewing saved models, and running new predictions\. Their feedback will help us improve the steps that most affect practical use\.



## 5\. Installation and Reuse

### 5\.1 Installation

Teams can choose the setup that matches their task: using CircuForge, inspecting the saved TorusFold model, checking its delivered files, or computing a model for a new sequence\.

#### Choose the task first

*Table 8\. Requirements and starting points for using CircuForge, viewing and verifying TorusFold artifacts, and computing new models\.*

|Task|What is needed|Starting point|
|---|---|---|
|Use CircuForge locally|Docker and Docker Compose, or the documented R/Python environments|Browser interface at port 3838; local API at port 8000|
|Inspect the existing TorusFold model|A modern browser|Download and open the[self\-contained viewer](http://wiki.dayquay.com/jlu-fbh/assets/docs/software/torusfold-example-viewer.html)|
|Verify TorusFold artifacts|Python and NumPy|`python scripts/verify_headline.py`|
|Compute a new TorusFold model|Python 3\.11\+, ViennaRNA, OpenMM, configured predictors and weights; path\-specific compute resources|Local server or sequence runner|

#### CircuForge

Clone the [official repository](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge)\. In its directory, start the services\.

Windows PowerShell:

git clone https://gitlab\.igem\.org/2026/software/jlu\-fbh/circuforge\.gitSet\-Location circuforgeCopy\-Item \.env\.example \.envdocker compose up \-\-build

macOS or Linux:

git clone https://gitlab\.igem\.org/2026/software/jlu\-fbh/circuforge\.gitcd circuforgecp \.env\.example \.envdocker compose up \-\-build

Open CircuForge, the API documentation, or the OpenAPI specification\. Load the demo and follow the illustrated steps to check the interface\. Service startup, remote prediction, and construct approval are separate states\. Docker startup was not independently exercised during this document revision\.

CircuForge commits `renv.lock` and `api/requirements.lock`\. Restore the matching environment for a source installation rather than mixing package versions from another run\. The API lock pins its listed packages; it does not by itself freeze all transitive packages or container images\.

#### TorusFold

The saved viewer needs no prediction installation\. For a new run, follow the repository’s [deployment guide](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/b6c4171ee2a4d68ff69954eee90144542e5f0569/docs/DEPLOY_EXTERNAL.md) in a dedicated Python 3\.11\+ environment\.

For the core package and secondary\-structure extra, the following command applies the committed constraints to the packages it installs:

git clone https://gitlab\.igem\.org/2026/software/jlu\-fbh/torusfold\-hybrid\.gitcd torusfold\-hybridpython \-m pip install \-c requirements\.lock \-e "\.\[ss\]"python \-m pip check

This prepares only that dependency layer; it does not install every predictor, optional stage, or model weight\. The lock records NumPy 2\.4\.3, SciPy 1\.17\.1, OpenMM 8\.5\.2, and ViennaRNA 2\.7\.2\. TorusFold is developed using PyTorch and is compatible with most GPUs, including NVIDIA and AMD GPUs, as well as Huawei Ascend AI accelerators\. `pyproject.toml` still leaves NumPy and SciPy unversioned, so `pip install -e .` alone does not reproduce the locked environment\. 

We also added a “One\-Click Environment Setup” option to the graphical interface\. It offers two download modes—Mainland China and Other Regions—and automatically connects to nodes to download the required base model weights and dependencies\.

Configure the external paths and weights, then start the local interface:

python serve\.py

Open the local interface, inspect tool availability and parameter settings, and then submit a sequence\. For the committed sequence\-running example:

python run\_2013nt\.py

The runner uses a local `sequence.txt` when supplied; otherwise, it uses the committed `artifacts/2013nt/sequence.txt`\. Full\-run configuration and resource costs differ from simply starting the web server\. Successful submission or creation of an output file is not proof that all predictors or refinement stages completed\. Very short debugging sequences can produce noncircular outputs; They are not reliable circular\-model test cases\.

### 5\.2 Integration and API

For teams connecting these tasks to their own analysis scripts, the local interfaces below support construct compilation, sequence submission, and status retrieval\.

*Table 9\. API endpoints and their purposes in CircuForge and TorusFold\.*

|Tool|Endpoint|Purpose|
|---|---|---|
|CircuForge|`POST /v1/constructs/compile`|Compile a peptide cassette, or a construct when the required backbone is supplied|
|CircuForge|`POST /v1/constructs/junction-windows`|Enumerate cross\-boundary windows; this endpoint does not perform a remote binding prediction|
|CircuForge|`GET /openapi.json`|Retrieve request and response schemas|
|TorusFold|`GET /api/schema`|Inspect supported parameters and defaults|
|TorusFold|`POST /api/predict`|Submit a sequence to the configured prediction environment|
|TorusFold|`GET /api/status`|Inspect current progress and result/error state|

#### CircuForge: successful cassette request

This request uses two demonstration peptides; it is unrelated to the TNBC experimental shortlist\. The endpoint chooses the linker for the adjacent MHC classes, as described in its schema\.

curl \-X POST http://localhost:8000/v1/constructs/compile \\  \-H "Content\-Type: application/json" \\  \-d '\{"project\_id":"demo\-project","construct\_name":"TROP2\_demo","epitopes":\[\{"id":"EPI\-001","sequence\_aa":"SLYNTVATL","mhc\_class":"I"\},\{"id":"EPI\-002","sequence\_aa":"KLTQDLFL","mhc\_class":"II"\}\],"linkers":\{"mhci":"AAY","mhcii":"GPGPG"\}\}'

The no\-backbone example returns HTTP 200 and `release_status: "CASSETTE_ONLY_BACKBONE_NOT_PROVIDED"`\. Its `orf_aa` is `SLYNTVATLGPGPGKLTQDLFL`\. This is a cassette response, not an approved complete plasmid\. Supply the backbone fields described in OpenAPI to request construct compilation\.

#### CircuForge: rejected input

curl \-X POST http://localhost:8000/v1/constructs/compile \\  \-H "Content\-Type: application/json" \\  \-d '\{"project\_id":"demo\-project","construct\_name":"invalid\-demo","epitopes":\[\{"id":"bad","sequence\_aa":"SLYNTVAX","mhc\_class":"I"\}\]\}'

The invalid amino\-acid letter causes HTTP 422 with `error.code: "REQUEST_VALIDATION_FAILED"`\. Save the full response rather than interpreting an absent construct as a completed design\. The API example files retain requests and observed response summaries for this revision\.

#### TorusFold: inspect and submit

Inspect `/api/schema` before building a request\. A configured `/api/predict` request takes a plain mature RNA string in `sequence` and returns a job ID with `status: "started"` when accepted\. Poll `/api/status`; acceptance is not completion\. An empty request returns HTTP 400 with `{"error":"No sequence provided"}`\. This error path can be inspected without launching an expensive prediction\.

The [server source](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/b6c4171ee2a4d68ff69954eee90144542e5f0569/serve.py) defines the exact behavior\. In this revision, schema retrieval and idle\-status retrieval returned HTTP 200, and the empty request returned HTTP 400 as described; the check record identifies the scope\. No new prediction was submitted, and a short arbitrary sequence is not presented as a successfully validated circRNA model\.

### 5\.3 Network Modes

CircuForge’s `CIRCURE_NETWORK_MODE` accepts `auto`, `online`, or `offline`; the default is `auto`\. Offline mode disables new IEDB and NCBI requests\. Saved data and local compilation have different prerequisites from fresh remote results\. Check Service status and retain the run’s request, model settings, and returned output\. A timeout, missing prediction, or queued job is not a negative biological result\.

07

### 5\.4 Open Source and Reuse

CircuForge and TorusFold are released under **Apache License 2\.0**, making their source code available for other teams to use, modify, and extend under the license terms\. The official iGEM GitLab repositories provide the code, README, installation instructions, examples, and test materials needed to begin\. Teams can use either tool independently or connect construct design with RNA modeling through the mature RNA sequence file\.

*Table 10\. Source repositories, documentation, and licenses for CircuForge and TorusFold\.*

|Tool|Source and documentation|License|
|---|---|---|
|CircuForge|[Repository and README](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge)·Setup and use|[Apache\-2\.0](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge/-/blob/main/LICENSE)|
|TorusFold|[Repository and README](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid)·Setup and use|[Apache\-2\.0](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/LICENSE)|

**Adapt the workflow to another biological project\.** Researchers can begin CircuForge with the built\-in example, then work with their own candidate proteins, reviewed peptides, and construct backbones\. Teams extending the code can add another biological resource, change candidate\-selection rules, or introduce another export format\. The separate candidate\-review, assembly, and export modules provide clear places to make those changes\.

**Build on the RNA\-modeling workflow\.** TorusFold connects fragment predictions, full\-length reconstruction, refinement, and result inspection through separate stages\. Teams can configure supported predictors, examine intermediate structures, and modify the stages relevant to their research question\. The saved\-model viewer offers an immediate starting point for structure inspection; the installation guide describes the tools and computing setup for running new sequences\.

#### Getting started as another team

The official iGEM GitLab repositories provide source code, installation instructions, example inputs, and test materials for [CircuForge](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge) and [TorusFold](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid)\. Usage illustrates the browser workflows, and Installation and Reuse provide execution paths and programmatic interfaces\.

Teams can begin CircuForge with compatible expression data, a known protein, or reviewed peptides, then supply their own backbone for construct design\. TorusFold’s saved\-model viewer provides an immediate starting point for structure inspection; teams can then configure the prediction environment for their own mature RNA sequences\.

You can use both tools independently or connect them through a mature RNA file\. Keeping the construct ID, software version, parameters, and sequence hash with the outputs preserves the link between the reviewed design and the subsequent analysis\. Standard\-format exports, diagnostic files, and reference\-case materials support continued inspection, transfer, and adaptation by other researchers\.



### 5\.5 External Tools and Attribution

Our software connects established biological resources and prediction tools with the candidate\-review and reconstruction methods developed by our team\. The resources below support data retrieval, configurable RNA prediction, refinement, and visualization\.

*Table 11\. External resources and software used in the workflow, with their contributions and reuse information\.*

|Resource|Contribution to the workflow|Source and reuse information|
|---|---|---|
|**IEDB, UniProt and iGEM Registry**|Epitope predictions, source\-protein annotations, and Part records|Follow each resource’s data and service terms; retain available source identifiers and search settings|
|ViennaRNA|Proposes RNA base\-pairing information|Reference environment: 2\.7\.2; distributed under its upstream terms|
|OpenMM|Relaxes structures using physical restraints \(**Eastman et al\., 2024**\)|Reference environment: 8\.5\.2; keep the computing platform and settings with each run|
|RhoFold\+|Predicts structures for RNA fragments|Code and pretrained model files are obtained from the upstream project|
|trRosettaRNA2|Predicts structures for RNA fragments|Uses the corresponding upstream code, model files, and terms|
|RNAbpFlow|Generates RNA structures using supplied conditions|Pretrained model files and their terms are provided by the upstream project|
|PyRosetta \(**PyRosetta, n\.d\.**\) and other optional stages|Additional structural refinement|Optional installation under the applicable upstream license|
|3Dmol\.js \(**3Dmol\.js, n\.d\.**\)|Displays saved RNA structures and decompresses viewer data|The viewer is accompanied by the 3Dmol notices|

Third\-party software, datasets, and pretrained model files retain their own licenses\. TorusFold integrates upstream predictors with our reconstruction and refinement stages; we attribute predictor authorship and training\-data sources to the corresponding upstream projects\. The resource notes provide the available source information for the delivered example\. We plan to extend future run records with the exact predictor versions and pretrained model files used for each result\.

We thank the iGEM Foundation and the iGEM Registry team for providing and maintaining the Registry and its public API\. CircuForge’s Registry client acknowledges the request\-cooldown approach used by the **iGEM Munich 2025 Registry client** \(**iGEM Munich, 2025**\)\. The **upstream license and copyright notice** accompany this acknowledgment\.

We welcome other teams to test the examples, adapt the tools to their own projects, and share improvements through the repositories\. Begin with the Usage, keep the input sequence and software version with the results, and use the repository issue trackers to report problems or suggest features\. The official project page is [2026\.igem\.wiki/jlu\-fbh/software](https://2026.igem.wiki/jlu-fbh/software)\.



## References

1. iGEM Foundation\.iGEM Registry of Standard Biological Parts\.n\.d\. Accessed 19 October 2026\. [Official website](https://registry.igem.org/)

2. Robertson MP, Scott WG\.The structural basis of ribozyme\-catalyzed RNA assembly\.*Science\.*2007;315\(5818\):1549–1553\. [doi:10\.1126/science\.1136231](https://doi.org/10.1126/science.1136231)

3. IEDB\. Immune Epitope Database\. [Official website](https://www.iedb.org/)

4. The UniProt Consortium\.UniProt: the Universal Protein Knowledgebase in 2025\.*Nucleic Acids Research\.*2025;53\(D1\):D609–D617\. [doi:10\.1093/nar/gkae1010](https://doi.org/10.1093/nar/gkae1010)

5. Vita R, Mahajan S, Overton JA, et al\.The Immune Epitope Database \(IEDB\): 2018 update\.*Nucleic Acids Research\.*2019;47\(D1\):D339–D343\. [doi:10\.1093/nar/gky1006](https://doi.org/10.1093/nar/gky1006)

6. ViennaRNA\. [Official website](https://www.tbi.univie.ac.at/RNA/)

7. Lorenz R, Bernhart SH, Höner zu Siederdissen C, et al\.ViennaRNA Package 2\.0\.*Algorithms for Molecular Biology\.*2011;6:26\. [doi:10\.1186/1748\-7188\-6\-26](https://doi.org/10.1186/1748-7188-6-26)

8. Shen T, Hu Z, Sun S, et al\.Accurate RNA 3D structure prediction using a language model\-based deep learning approach\.*Nature Methods\.*2024;21:2287–2298\. [doi:10\.1038/s41592\-024\-02487\-0](https://doi.org/10.1038/s41592-024-02487-0)

9. Wang W, Peng Z, Yang J\.Predicting RNA 3D structure and conformers using a pre\-trained secondary structure model and structure\-aware attention\.*Nature Machine Intelligence\.*2026;8:722–734\. [doi:10\.1038/s42256\-026\-01223\-x](https://doi.org/10.1038/s42256-026-01223-x)

10. Tarafder S, Bhattacharya D\.RNAbpFlow: base pair\-augmented SE\(3\) flow matching for conditional RNA 3D structure generation\.*Nature Methods\.*2026;23\(7\):1349–1358\. [doi:10\.1038/s41592\-026\-03128\-4](https://doi.org/10.1038/s41592-026-03128-4)

11. GTEx Consortium\.The GTEx Consortium atlas of genetic regulatory effects across human tissues\.*Science\.*2020;369\(6509\):1318–1330\. [doi:10\.1126/science\.aaz1776](https://doi.org/10.1126/science.aaz1776)

12. Trygoniaris D, Korda A, Paraskeva A, et al\.VaccineDesigner: A Web\-Based Tool for Streamlined Multi\-Epitope Vaccine Design\.*Biology\.*2025;14\(8\):1019\. [doi:10\.3390/biology14081019](https://doi.org/10.3390/biology14081019)

13. McLaughlin JA, Beal J, Mısırlı G, et al\.The Synthetic Biology Open Language \(SBOL\) Version 3: Simplified Data Exchange for Bioengineering\.*Frontiers in Bioengineering and Biotechnology\.*2020;8:1009\. [doi:10\.3389/fbioe\.2020\.01009](https://doi.org/10.3389/fbioe.2020.01009)

14. Chen CK, Cheng R, Demeter J, et al\.Structured elements drive extensive circular RNA translation\.*Molecular Cell\.*2021;81\(20\):4300–4318\.e13\. [doi:10\.1016/j\.molcel\.2021\.07\.042](https://doi.org/10.1016/j.molcel.2021.07.042)

15. Zhang Y, Wang J, Xiao Y\.3dRNA: 3D structure prediction from linear to circular RNAs\.*Journal of Molecular Biology\.*2022;434\(11\):167452\. [doi:10\.1016/j\.jmb\.2022\.167452](https://doi.org/10.1016/j.jmb.2022.167452)

16. Jiang H, Xu Y, Tong Y, Zhang D, Zhou R\.IsRNAcirc: 3D structure prediction of circular RNAs based on coarse\-grained molecular dynamics simulation\.*PLoS Computational Biology\.*2024;20\(10\):e1012293\. [doi:10\.1371/journal\.pcbi\.1012293](https://doi.org/10.1371/journal.pcbi.1012293)

17. Ng CKY, Dazert E, Boldanova T, et al\.Integrative proteogenomic characterization of hepatocellular carcinoma across etiologies and stages\.*Nature Communications\.*2022;13:2436\. [doi:10\.1038/s41467\-022\-29960\-8](https://doi.org/10.1038/s41467-022-29960-8)

18. Calis JJA, Maybeno M, Greenbaum JA, et al\.Properties of MHC Class I Presented Peptides That Enhance Immunogenicity\.*PLoS Computational Biology\.*2013;9\(10\):e1003266\. [doi:10\.1371/journal\.pcbi\.1003266](https://doi.org/10.1371/journal.pcbi.1003266)

19. Abramson J, Adler J, Dunger J, et al\.Accurate structure prediction of biomolecular interactions with AlphaFold 3\.*Nature\.*2024;630:493–500\. [doi:10\.1038/s41586\-024\-07487\-w](https://doi.org/10.1038/s41586-024-07487-w)

20. Posit Software, PBC\.Welcome to Shiny\.*Shiny for R documentation\.*Accessed 19 October 2026\. [Official documentation](https://shiny.posit.co/r/getstarted/shiny-basics/lesson1/)

21. Ritchie ME, Phipson B, Wu D, et al\.limma powers differential expression analyses for RNA\-sequencing and microarray studies\.*Nucleic Acids Research\.*2015;43\(7\):e47\. [doi:10\.1093/nar/gkv007](https://doi.org/10.1093/nar/gkv007)

22. Chen Y, Chen L, Lun ATL, Baldoni PL, Smyth GK\.edgeR v4: powerful differential analysis of sequencing data with expanded functionality and improved support for small counts and larger datasets\.*Nucleic Acids Research\.*2025;53\(2\):gkaf018\. [doi:10\.1093/nar/gkaf018](https://doi.org/10.1093/nar/gkaf018)

23. Omnes L, Angel E, Tahi F\.DivideFold\+: an AI\-based tool for RNA secondary structure prediction with subdomains identification and visualization and data augmentation\.*Journal of Molecular Biology\.*2026;438\(18\):169865\. [doi:10\.1016/j\.jmb\.2026\.169865](https://doi.org/10.1016/j.jmb.2026.169865)

24. Eastman P, Galvelis R, Peláez RP, et al\.OpenMM 8: Molecular Dynamics Simulation with Machine Learning Potentials\.*The Journal of Physical Chemistry B\.*2024;128\(1\):109–116\. [doi:10\.1021/acs\.jpcb\.3c06662](https://doi.org/10.1021/acs.jpcb.3c06662)

25. PyRosetta\. [Official website](https://www.pyrosetta.org/)

26. 3Dmol\.js\. [Official website](https://3dmol.org/)

27. iGEM Munich\.igem\_registry\_api: A high\-level Python interface for the new iGEM Registry REST API \(2025 Beta\)\.*GitHub repository\.*2025\. Accessed 19 October 2026\. [Source code](https://github.com/igem-munich/igem_registry_api)

