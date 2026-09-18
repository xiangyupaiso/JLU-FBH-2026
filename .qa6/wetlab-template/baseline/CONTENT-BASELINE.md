# Wet Lab 改写前内容基准

本清单由当前工作区内容生成，未使用 Git HEAD（工作区已有未提交改动）。完整字段、图表初始 HTML、全部手册信息见同目录 content.json；交互分支原文保存在 source 下。

隐藏字段仍完整保存在 JSON；下列正文按旧 WikiPage 的可见内容规则列出。折叠项包含展开后文字。

## Experiments — /experiments

Hero 标题：Experiments

Hero 导语：Five gates. One testable claim at each step.

目录：01 Five-gate route (#experiments-route) / 02 Protocol anatomy (#experiments-record) / 03 Control logic (#experiments-controls)

### 01 Five gates. No skipped claims.

锚点：experiments-route

A reporter signal cannot establish topology; topology cannot establish presentation; presentation cannot establish selective function.

The route is deliberately sequential. Every gate consumes named evidence from the previous gate and produces either an advance decision, a repeat condition, or a return to design. Ambiguous material should never be carried forward simply because a later assay produces an attractive signal.

图表/功能：FiveGateMap（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<figure class="wet-gate-map "><figcaption><span>Experimental evidence map</span><strong>Five gates. No skipped claims.</strong></figcaption><div class="wet-gate-map__route" role="list" style="--wet-gate-progress:0"><button type="button" class="is-active" aria-pressed="true"><span>01</span><i aria-hidden="true"></i><strong>Construct</strong></button><button type="button" class="" aria-pressed="false"><span>02</span><i aria-hidden="true"></i><strong>Circularize</strong></button><button type="button" class="" aria-pressed="false"><span>03</span><i aria-hidden="true"></i><strong>Express</strong></button><button type="button" class="" aria-pressed="false"><span>04</span><i aria-hidden="true"></i><strong>Present</strong></button><button type="button" class="" aria-pressed="false"><span>05</span><i aria-hidden="true"></i><strong>Recognize</strong></button></div><article class="wet-gate-map__detail" aria-live="polite"><div class="wet-gate-map__detail-head"><span>Gate 01</span><b>planned evidence · not yet claimed</b></div><h3>Confirm the material before testing its behavior.</h3><div class="wet-gate-map__brief"><p><span>Evidence bundle</span>Annotated sequence · clone identity · sample lineage</p><p><span>Decision boundary</span>Advance only after identity and critical junctions resolve.</p></div></article></figure>
```

#### 1.1 Construct identity

Confirm insert boundaries, epitope order, linker logic, reading frame, backbone version, and critical junctions before RNA production.

Evidence to include

- An annotated sequence and plasmid map that identify every functional boundary.
- Clone lineage, backbone version, expected products, and sample identifiers.
- Chromatograms or equivalent confirmation for critical junctions and reading frame.

Decision rule

Advance only when identity, orientation, and critical junctions resolve without an unexplained mixed signal.

#### 1.2 Circular topology

Combine matched linear RNA, RNase R response, junction-specific detection, sequence confirmation, and purity assessment.

Evidence to include

- Junction-specific detection supported by sequence or orthogonal identity evidence.
- Matched linear RNA and RNase R conditions processed in the same experimental batch.
- Recovery, integrity, purity, and unresolved products reported beside the preferred band.

Decision rule

Repeat, purify, or redesign whenever the evidence cannot distinguish circular product from resistant linear or concatemeric material.

#### 1.3 Expression window

Measure uptake/process control, intended output, matched linear RNA, time, dose, and viability from aligned samples.

Evidence to include

- Matched input, delivery condition, dose, time point, and sample lineage.
- A delivery or process control that separates failed access from failed translation.
- Encoded output displayed beside viability and cell-state measurements.

Decision rule

Do not advance a high-signal condition when the increase is inseparable from unacceptable stress, loss of viability, or batch imbalance.

#### 1.4 Presentation evidence

Distinguish general activation from sequence-specific display using an irrelevant epitope, matched delivery conditions, and an assay that resolves the presented target.

Evidence to include

- A presentation-specific readout aligned to expression and cell-state controls.
- Irrelevant epitope and antigen-negative conditions under matched delivery.
- General activation measured separately from sequence-specific display.

Decision rule

Presentation is supported only when the target-specific difference survives the irrelevant and process controls; expression alone is insufficient.

#### 1.5 Selective recognition

Compare antigen-positive and antigen-negative targets beside functional and stress baselines before making any claim about selective response.

Evidence to include

- Antigen-positive and antigen-negative targets tested in the same assay window.
- Functional response, non-specific stress, and baseline activity reported together.
- Replicate structure and predefined exclusions that preserve the target comparison.

Decision rule

Bound the conclusion to the tested target, assay, dose, and time window; reject a selectivity claim when general stress explains the response.

### 02 Make the method reusable, not merely visible.

锚点：experiments-record

Each protocol records materials, critical parameters, deviations, attachments, and the exact evidence it is designed to generate.

A protocol is treated as a versioned research object. The question, comparator, acceptance rule, and required record are fixed before execution; actual deviations remain attached to the dated Notebook entry rather than being silently folded into a cleaner method.

图表/功能：ProtocolStack（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-protocols"><header><strong>Methods stay readable before any record opens.</strong></header><details open=""><summary><strong>Construct assembly &amp; sequence verification</strong><i aria-hidden="true">+</i></summary><div><p>State the biological question and the competing explanation this method tests.</p><p>Materials, conditions, controls, deviations, sample lineage, analysis, and attachments.</p><p>Define the evidence threshold, failure state, and next decision before reading the result.</p></div></details><details><summary><strong>RNA production &amp; topology evidence</strong><i aria-hidden="true">+</i></summary><div><p>State the biological question and the competing explanation this method tests.</p><p>Materials, conditions, controls, deviations, sample lineage, analysis, and attachments.</p><p>Define the evidence threshold, failure state, and next decision before reading the result.</p></div></details><details><summary><strong>Delivery, expression &amp; viability</strong><i aria-hidden="true">+</i></summary><div><p>State the biological question and the competing explanation this method tests.</p><p>Materials, conditions, controls, deviations, sample lineage, analysis, and attachments.</p><p>Define the evidence threshold, failure state, and next decision before reading the result.</p></div></details><details><summary><strong>Presentation &amp; functional comparison</strong><i aria-hidden="true">+</i></summary><div><p>State the biological question and the competing explanation this method tests.</p><p>Materials, conditions, controls, deviations, sample lineage, analysis, and attachments.</p><p>Define the evidence threshold, failure state, and next decision before reading the result.</p></div></details></div>
```

#### 2.1 Construct assembly and verification

Backbone, insert boundaries, primers, expected sizes, assembly conditions, clone lineage, plasmid map, and chromatograms.

Evidence to include

- Versioned construct map, primer table, expected product sizes, and assembly conditions.
- Clone identifiers linked to screening results and full sequence attachments.
- Every deviation recorded in the dated Notebook execution rather than silently corrected.

Decision rule

Release the protocol only when another team can reconstruct which material was built, screened, accepted, and carried forward.

#### 2.2 RNA production and topology

Transcription input, circularization route, cleanup, recovery, integrity, RNase R conditions, primer orientation, and junction trace.

Evidence to include

- Input template, transcription and circularization parameters, cleanup route, and recovery.
- Primer orientation, expected junction product, enzyme conditions, and matched controls.
- Raw gel, trace, or sequence files connected to the exact RNA batch.

Decision rule

A reusable protocol must state the acceptance threshold and the corrective route for low recovery, degradation, contamination, or ambiguous topology.

#### 2.3 Delivery, expression, and viability

Cell source, passage, seeding density, dose, reagent, exposure time, viability method, normalization, and replicate structure.

Evidence to include

- Cell source and state, seeding density, formulation, dose, exposure, and harvest timing.
- Delivery and expression readouts normalized with the same documented reference.
- Viability, morphology, or stress measurements from aligned wells and samples.

Decision rule

The method is reusable only when it exposes the operating window and the conditions that must be repeated, retuned, or rejected.

#### 2.4 Presentation and selective recognition

Presentation assay, target identity, matched negative and irrelevant controls, response readout, stress baseline, and predefined interpretation boundary.

Evidence to include

- Target provenance and antigen status documented before comparison.
- Matched negative, irrelevant, process, and positive-control conditions.
- Response and toxicity measurements linked to a predefined analysis version.

Decision rule

The protocol must prevent a general activation signal from being reported as target-specific recognition.

A protocol describes what was done. The bounded conclusion and figure belong on Results; the dated execution record belongs in Notebook.

### 03 Design controls before seeing the signal.

锚点：experiments-controls

Controls define what a positive result can mean and prevent one attractive readout from carrying a stronger conclusion than the assay supports.

Controls are organized around alternative explanations, not around a generic checklist. Each experimental figure should make it possible to distinguish biological absence, process failure, background signal, non-specific activation, and the specific difference the experiment was designed to test.

图表/功能：ReadoutMatrix（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel feature-table wet-readout-matrix"><header><span>Claim</span><span>Readout</span><span>Must remain separate</span><span>Decision supported</span></header><div><span>Topology</span><span>Junction + stability</span><span>Purity</span><span>Advance / purify</span></div><div><span>Expression</span><span>Encoded signal</span><span>Delivery + viability</span><span>Advance / retune</span></div><div><span>Presentation</span><span>Sequence-specific display</span><span>General activation</span><span>Advance / redesign</span></div><div><span>Function</span><span>Selective response</span><span>Non-specific stress</span><span>Claim / reject</span></div></div>
```

#### 3.1 Define background

No-template, no-RNA, mock delivery, and antigen-negative conditions establish assay and biological baselines.

Evidence to include

- Technical blanks and no-template conditions for instrument or reagent background.
- Mock and no-RNA delivery conditions for process-associated response.
- Antigen-negative biology tested under the same acquisition and analysis settings.

Decision rule

A positive result must clear the relevant technical and biological baselines, not merely differ from an empty well.

#### 3.2 Locate failure

Delivery, extraction, amplification, staining, and instrument controls distinguish process failure from biology.

Evidence to include

- Process controls placed at the delivery, extraction, amplification, staining, and acquisition stages.
- Acceptance criteria reported for every stage capable of erasing a biological signal.
- Failed quality gates remain visible beside excluded or repeated samples.

Decision rule

Interpret a negative biological result only after the controls show that the relevant process stages remained informative.

#### 3.3 Test the claimed difference

Matched linear RNA, irrelevant epitope, and alternative construct conditions challenge the preferred mechanism.

Evidence to include

- A comparator that changes the proposed mechanism while preserving unrelated handling variables.
- Matched linear RNA, irrelevant epitope, or alternative construct conditions where appropriate.
- The same measurement range, exclusions, and replicate logic applied across the comparison.

Decision rule

The claimed mechanism is not supported when the preferred condition cannot be distinguished from a credible alternative explanation.

#### 3.4 Verify that the assay can respond

A validated material or stimulation condition defines the expected direction and reveals when an apparently negative experiment is technically uninformative.

Evidence to include

- A positive-control material or stimulation with a documented expected direction.
- Control performance shown for the same batch, acquisition window, and analysis pipeline.
- A predefined response range that distinguishes weak biology from assay failure.

Decision rule

When the reference condition fails, classify the experiment as technically uninformative rather than biologically negative.

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：

- Dated records: /notebook
- Measurement standard: /measurement
- Measured results: /results

Next 标题：Where did each sample and decision come from?

Next 文案：Continue to Notebook. / Next page / Notebook

Next 链接：/notebook

## Notebook — /notebook

Hero 标题：Notebook

Hero 导语：Dates, samples, deviations, and decisions—one traceable record.

目录：01 Record schema (#notebook-schema) / 02 Evidence timeline (#notebook-timeline) / 03 Cross-reference (#notebook-index)

### 01 Every entry should survive handoff.

锚点：notebook-schema

A future reader should understand what happened without relying on the memory of the person who performed it.

Each entry begins with a question and ends with an assigned next action. Sample identifiers, raw files, protocol versions, and deviations are mandatory links, while interpretation is kept visually separate from the observation that produced it.

图表/功能：NotebookRecordSchema（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-record-schema"><header><span>Entry anatomy</span><strong>One record should survive a handoff.</strong></header><div><article><span>01</span><strong>Context</strong><p>Question · owner · protocol version</p></article><article><span>02</span><strong>Execution</strong><p>Sample lineage · parameters · deviations</p></article><article><span>03</span><strong>Observation</strong><p>Raw files · visible outcome · uncertainty</p></article><article><span>04</span><strong>Decision</strong><p>Interpretation · next action · responsible person</p></article></div></div>
```

#### 1.1 Purpose and people

Date, owner, collaborators, research question, protocol version, and related design record.

#### 1.2 Samples and deviations

Sample IDs, lineage, reagents, lots, equipment, parameters, environmental conditions, and departures from protocol.

#### 1.3 Observation and next step

Raw files, observations, interpretation, uncertainty, decision, responsible person, and follow-up date.

### 02 Chronology with an evidence spine.

锚点：notebook-timeline

The final timeline should contain all project work, including unsuccessful builds, analysis changes, safety decisions, and meetings that affected experiments.

The timeline is not a highlight reel. Failed preparations, inconclusive assays, threshold changes, and pauses for safety or supervision remain part of the scientific record because they explain why the project changed direction.

图表/功能：NotebookTrace（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<figure class="signature-panel signature-panel--wet wet-notebook "><figcaption><span>Lab record</span><strong>Chronology with an evidence spine</strong></figcaption><div class="wet-notebook__margin" aria-hidden="true"></div><div class="wet-notebook__entries"><article><span>12 Mar</span><b>NB–01</b><div><strong>Construct acceptance</strong><small>design · sample trace attached</small></div><i data-state="recorded" aria-label="recorded"></i></article><article><span>18 Mar</span><b>NB–02</b><div><strong>Assembly + sequence review</strong><small>build · sample trace attached</small></div><i data-state="recorded" aria-label="recorded"></i></article><article><span>02 Apr</span><b>NB–03</b><div><strong>RNA production</strong><small>test · sample trace attached</small></div><i data-state="planned" aria-label="planned"></i></article><article><span>08 Apr</span><b>NB–04</b><div><strong>Decision returned</strong><small>learn · sample trace attached</small></div><i data-state="planned" aria-label="planned"></i></article></div><footer class="wet-notebook__footer"><span>Record → sample → raw file → decision</span><b>4 linked entries</b></footer></figure>
```

#### 2.1 Construct definition and acceptance criteria

Reserved for the team meeting that freezes the candidate sequence, expected products, primer plan, and no-go conditions.

#### 2.2 Assembly and sequence review

Reserved for build conditions, clone IDs, deviations, chromatograms, failed clones, and the decision to advance or rebuild.

#### 2.3 RNA production and topology evidence

Reserved for sample lineage, recovery, raw images, junction evidence, ambiguity, and the next purification or geometry change.

#### 2.4 Assay review and continuation decision

Reserved for aligned readouts, control performance, uncertainty, team interpretation, the accountable reviewer, and the decision to advance, repeat, revise, or stop.

### 03 One record, several destinations.

锚点：notebook-index

Notebook entries remain the provenance layer; other pages cite them rather than copying the daily log.

A single execution can support several downstream artifacts, but each artifact points back to the same source record. This prevents a figure, protocol, or design decision from becoming detached from the sample and analysis history that produced it.

图表/功能：NotebookTraceability（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel feature-table wet-traceability"><header><span>Record</span><span>Primary role</span><span>Must link to</span><span>Reader learns</span></header><div><span>NB–xx</span><span>Dated execution</span><span>Protocol + samples</span><span>What happened</span></div><div><span>EXP–xx</span><span>Controlled method</span><span>Notebook records</span><span>How to repeat</span></div><div><span>RES–xx</span><span>Bounded result</span><span>Raw files + analysis</span><span>What it supports</span></div><div><span>DR–xx</span><span>Project decision</span><span>Result + rationale</span><span>What changed</span></div></div>
```

#### 3.1 Protocol used

The exact protocol version and any deviations in this execution.

#### 3.2 Result generated

The result block and raw file that use this sample or analysis.

#### 3.3 Decision changed

The build, threshold, assay, or boundary that changed because of the record.

#### 3.4 Figure released

The plotted result, caption boundary, analysis version, and accessible source data created from the record.

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：

- Protocols: /experiments
- Engineering decisions: /engineering
- Result figures: /results

Next 标题：How will each readout remain comparable?

Next 文案：Continue to Measurement. / Next page / Measurement

Next 链接：/measurement

## Measurement — /measurement

Hero 标题：Measurement

Hero 导语：Calibration, controls, range, and uncertainty beside every result.

目录：01 Measure chain (#measurement-chain) / 02 Readout matrix (#measurement-readouts) / 03 Publication gate (#measurement-publication)

### 01 Connect material, instrument, number, and decision.

锚点：measurement-chain

Each measurement should show how a biological state becomes a recorded value and how that value supports a bounded decision.

The chain begins before the instrument is switched on. The team first names the biological quantity, the competing explanation, and the useful range; calibration, acquisition, normalization, and decision rules then preserve that meaning through analysis.

图表/功能：MeasurementWindow（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<figure class="signature-panel signature-panel--wet wet-measurement "><figcaption><span>Measurement window</span><strong>Material → instrument → number → decision</strong></figcaption><div class="wet-measurement__tabs" aria-label="Select a measurement claim"><button type="button" class="is-active">topology</button><button type="button" class="">expression</button><button type="button" class="">function</button></div><div class="wet-measurement__plot" aria-label="topology illustrative measurement structure"><i class="axis axis--x"></i><i class="axis axis--y"></i><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="14,38 32,54 50,63 68,72 86,77"></polyline></svg><span style="left:14%;bottom:62%"></span><span style="left:32%;bottom:46%"></span><span style="left:50%;bottom:37%"></span><span style="left:68%;bottom:28%"></span><span style="left:86%;bottom:23%"></span><small class="wet-measurement__axis-label wet-measurement__axis-label--y">normalized signal</small><small class="wet-measurement__axis-label wet-measurement__axis-label--x">matched condition</small></div><div class="wet-measurement__legend"><span><small>Readout</small><strong>Junction + stability</strong></span><span><small>Keep separate</small><strong>Matched linear RNA</strong></span><span><small>Decision</small><strong>Advance / purify</strong></span></div><p>Illustrative structure only · replace with calibrated team measurements</p></figure>
```

#### 1.1 Choose the biological quantity.

Specify whether the assay measures identity, abundance, uptake, translation, viability, presentation, or function.

#### 1.2 Establish a meaningful range.

Document standards, blanks, instrument settings, linear range, detection limits, and acceptance thresholds.

#### 1.3 Preserve the comparison.

State reference samples, loading or cell-count corrections, batch handling, and transformations.

#### 1.4 Predefine interpretation.

Connect the measurement and uncertainty to an advance, revise, reject, or repeat rule.

### 02 Keep neighboring claims separate.

锚点：measurement-readouts

Delivery, expression, cell state, presentation, and response should be measured beside one another without being collapsed into one success metric.

Related readouts are aligned by sample, dose, time, and batch so that apparent improvement in one dimension cannot hide deterioration in another. A condition with higher encoded signal but unacceptable loss of viability is recorded as a trade-off, not a success.

图表/功能：ReadoutMatrix（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel feature-table wet-readout-matrix"><header><span>Claim</span><span>Readout</span><span>Must remain separate</span><span>Decision supported</span></header><div><span>Topology</span><span>Junction + stability</span><span>Purity</span><span>Advance / purify</span></div><div><span>Expression</span><span>Encoded signal</span><span>Delivery + viability</span><span>Advance / retune</span></div><div><span>Presentation</span><span>Sequence-specific display</span><span>General activation</span><span>Advance / redesign</span></div><div><span>Function</span><span>Selective response</span><span>Non-specific stress</span><span>Claim / reject</span></div></div>
```

#### 2.1 Product identity and topology

Size, junction identity, RNase R comparison, purity, recovery, and uncertainty in topology interpretation.

#### 2.2 Delivery, expression, viability

Matched samples, dose and time window, uptake/process control, intended output, and cell-state readout.

#### 2.3 Presentation and function

Sequence-specific display, general activation, antigen-positive/negative targets, response, and non-specific toxicity.

#### 2.4 Process and batch quality

Instrument controls, extraction or staining recovery, plate position, reagent lot, batch reference, missingness, and predefined quality exclusions.

### 03 A figure must be auditable.

锚点：measurement-publication

The same checklist applies to positive, negative, and ambiguous results.

A figure is released only when the plotted value can be traced to its raw source and when another reader can reconstruct the units, exclusions, replicate structure, and analysis version. The caption states both the supported interpretation and the nearest unsupported claim.

图表/功能：MeasurementPublicationGate（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-publication-gate"><header><span>Figure release gate</span><strong>A visible result is not yet an auditable result.</strong></header><div><article><span>01</span><strong>Source</strong><p>Raw file and sample IDs resolve.</p><i aria-hidden="true"></i></article><article><span>02</span><strong>Scale</strong><p>Axes, units, transforms, and baselines are named.</p><i aria-hidden="true"></i></article><article><span>03</span><strong>Structure</strong><p>Replicates, error, exclusions, and analysis are explicit.</p><i aria-hidden="true"></i></article><article><span>04</span><strong>Boundary</strong><p>Caption states what the figure cannot establish.</p><i aria-hidden="true"></i></article></div></div>
```

#### 3.1 Raw file and sample trace

Link the instrument or image file to sample IDs and notebook records.

#### 3.2 Units and normalization

Name axes, units, transformations, baselines, and any excluded observations.

#### 3.3 Replicates and analysis

State biological n, technical n, error definition, statistical method, and analysis version.

#### 3.4 Accessible interpretation

Explain the result in text and state what the measurement cannot establish.

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：

- Experimental route: /experiments
- Result standard: /results
- Model validation: /model

Next 标题：Which experimental context carries the system?

Next 文案：Continue to Alternative Platform. / Next page / Alternative Platform

Next 链接：/alternative-platform

## Alternative Platform — /alternative-platform

Hero 标题：Alternative Platform

Hero 导语：The host changes expression, safety, cost, and comparability.

目录：01 Platform choice (#platform-rationale) / 02 Adaptation record (#platform-workflow) / 03 Evidence required (#platform-evidence)

### 01 Use the platform because the question requires it.

锚点：platform-rationale

The page should explain why a standard bacterial or yeast context cannot answer the selected biological question.

For CirCure, candidate expression, processing, presentation, or delivery may require mammalian or cell-free systems. The final page should identify the exact system and distinguish a project necessity from eligibility for a special prize.

If the selected work is not genuinely an alternative platform contribution, the route should state that limit honestly rather than expanding a generic award description.

The platform decision should therefore be reversible and evidence-led: use rapid, controllable systems to answer screening questions, and move into biologically richer contexts only when the next claim requires that context.

图表/功能：PlatformOrbit（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<figure class="signature-panel signature-panel--wet wet-platform "><figcaption><span>Host context</span><strong>The platform changes the meaning of a readout</strong></figcaption><div class="wet-platform__orbit" data-context="mammalian"><span class="wet-platform__payload">RNA</span><i class="wet-platform__path"></i><span class="wet-platform__host">mammalian</span></div><div class="wet-platform__switch"><button type="button" class="is-active">mammalian</button><button type="button" class="">cell-free</button></div><div class="wet-platform__comparison"><p><span>Why it fits</span>Relevant processing, presentation, delivery, and cell-state context.</p><p><span>What cannot transfer</span>Higher variability, slower iteration, and stricter handling requirements.</p></div></figure>
```

### 02 Document what the context changes.

锚点：platform-workflow

Construct design, handling, controls, measurement, and safety should be adapted together.

Changing the host changes more than a protocol. Source quality, processing assumptions, delivery route, stress response, baseline variability, and the meaning of a negative result are reviewed as one connected adaptation record.

图表/功能：PlatformWorkflow（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-platform-workflow"><header><span>Adaptation path</span><strong>The host changes every downstream method.</strong></header><div><article><span>01</span><strong>Source</strong><p>Provenance, batch, and quality gate</p><i aria-hidden="true">→</i></article><article><span>02</span><strong>Adapt</strong><p>Construct, delivery, and handling</p><i aria-hidden="true">→</i></article><article><span>03</span><strong>Compare</strong><p>Matched payload and process controls</p><i aria-hidden="true">→</i></article><article><span>04</span><strong>Release</strong><p>Troubleshooting and transfer limits</p></article></div></div>
```

#### 2.1 Define source and state.

Record cell or extract source, provenance, passage or batch, culture conditions, quality criteria, and relevant biological functions.

#### 2.2 Map compatibility constraints.

Explain translation entry, sequence context, payload size, formulation, delivery, and processing assumptions.

#### 2.3 Build a fair comparison.

Use matched payload, process, viability, and host controls that separate platform effects from construct effects.

#### 2.4 Release the adaptation path.

Provide protocols, troubleshooting, acceptance criteria, and platform-specific limitations for future teams.

### 03 Show utility, not novelty alone.

锚点：platform-evidence

A platform page becomes meaningful when it demonstrates an observable advantage, a tradeoff, and reproducible operation.

Novelty alone is not the endpoint. The platform must answer a defined project need, outperform or complement a credible alternative on that need, and expose the cost, variability, safety, and transfer limits introduced by the choice.

图表/功能：PlatformEvidenceMatrix（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel feature-table wet-platform-evidence"><header><span>Criterion</span><span>Mammalian</span><span>Cell-free</span><span>Decision rule</span></header><div><span>Question</span><span>Processing + presentation</span><span>Rapid expression screen</span><span>Choose by need</span></div><div><span>Control</span><span>Delivery + viability</span><span>Reaction input + blank</span><span>Keep process visible</span></div><div><span>Strength</span><span>Biological relevance</span><span>Speed + input control</span><span>Test the claimed advantage</span></div><div><span>Limit</span><span>Variability + handling</span><span>Transferability</span><span>Bound the conclusion</span></div></div>
```

#### 3.1 Relevant readout

Define the platform-dependent property being measured and its acceptance rule.

#### 3.2 Alternative context

Compare against a relevant standard, simpler system, or literature-supported baseline.

#### 3.3 Transferability

State what cannot be inferred outside the chosen host, batch, or assay context.

#### 3.4 Reproducible operating envelope

Release the source criteria, handling window, quality gates, failure modes, and troubleshooting evidence another team would need to reproduce the context.

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：

- Platform protocols: /experiments
- Platform readouts: /measurement
- Platform safety: /safety-and-security

Next 标题：Where must the project stop?

Next 文案：Continue to Safety and Security. / Next page / Safety and Security

Next 链接：/safety-and-security

## Safety and Security — /safety-and-security

Hero 标题：Safety and Security

Hero 导语：Risk controls begin before every experiment.

目录：01 Risk inventory (#safety-risks) / 02 Control hierarchy (#safety-controls) / 03 No-go gates (#safety-boundaries)

### 01 Name who or what could be harmed.

锚点：safety-risks

Risk descriptions should be specific enough to change a construct, protocol, access rule, claim, or implementation plan.

Each risk statement identifies a hazard, an exposure or misuse pathway, the affected people or environment, existing controls, residual uncertainty, and the owner of the next review. Generic statements that cannot change a decision are not treated as completed assessment.

图表/功能：SafetyBoundary（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<figure class="signature-panel signature-panel--wet wet-safety "><figcaption><span>Continuation gate</span><strong>A no-go condition is an engineering result</strong></figcaption><div class="wet-safety__map"><div class="wet-safety__boundary"><small>Continuation decision</small><strong>NO–GO</strong><span>stop · record · return</span></div><div class="wet-safety__risks"><article class="wet-safety__risk wet-safety__risk--1"><span>01</span><b>Material</b><p>unresolved identity</p></article><article class="wet-safety__risk wet-safety__risk--2"><span>02</span><b>Cell state</b><p>signal coupled to stress</p></article><article class="wet-safety__risk wet-safety__risk--3"><span>03</span><b>Claim</b><p>evidence exceeds scope</p></article><article class="wet-safety__risk wet-safety__risk--4"><span>04</span><b>Governance</b><p>consent or access unclear</p></article></div></div></figure>
```

#### 1.1 Material and host risk

Chassis, payload, expression product, off-target activity, environmental release, cell line handling, and waste.

#### 1.2 Chemical and physical risk

Reagents, sharps, heat, UV, centrifugation, electrical equipment, transport, storage, and disposal.

#### 1.3 Information and misuse risk

Access to materials, sequences, data, code, dual-use interpretation, medical misinformation, and unauthorized claims.

#### 1.4 Consent, access, and communication

Stakeholder records, identifiable material, restricted information, public-facing claims, review authority, and the route for correction or withdrawal.

### 02 Mitigation should be visible in the artifact.

锚点：safety-controls

Where possible, the project changes the design or removes the hazard instead of relying only on procedural reminders.

Mitigations are ordered by reliability. Elimination and design constraints are considered first, followed by physical or technical controls, documented responsibility, and finally task-specific PPE; every layer names how its effectiveness will be checked.

图表/功能：SafetyControlHierarchy（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-control-hierarchy"><header><span>Control hierarchy</span><strong>Prefer design changes over procedural reminders.</strong></header><div><article class="level-1"><span>01</span><strong>Eliminate</strong><p>Remove unnecessary hazards and claims.</p></article><article class="level-2"><span>02</span><strong>Engineer</strong><p>Build containment and failure visibility into the system.</p></article><article class="level-3"><span>03</span><strong>Administer</strong><p>Assign training, inventory, review, and escalation.</p></article><article class="level-4"><span>04</span><strong>Protect</strong><p>Use task-specific PPE as the final layer.</p></article></div></div>
```

#### 2.1 Avoid unnecessary hazard.

Choose non-pathogenic systems, safer materials, limited functionality, and the minimum data or material access required.

#### 2.2 Build constraints into the system.

Use design boundaries, containment, access control, fail-safe operation, and assays that reveal unacceptable cell stress.

#### 2.3 Define responsibility.

Training, supervision, inventories, labels, storage, transport, deviation reporting, and incident escalation must be documented.

#### 2.4 Use task-specific PPE.

PPE remains the final layer and is tied to the actual procedure rather than listed generically.

### 03 A no-go condition is an engineering output.

锚点：safety-boundaries

The team should predefine when a construct, dose, assay, publication, or implementation claim will not advance.

A no-go decision is logged with the triggering evidence, responsible reviewer, immediate containment action, and conditions required for reconsideration. Stopping is presented as a designed outcome rather than an unexplained absence of progress.

图表/功能：SafetyNoGoLedger（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="feature-panel wet-no-go-ledger"><header><span>Continuation ledger</span><strong>A stop decision remains a documented result.</strong></header><article><span>SAFE–01</span><strong>Identity or topology unresolved</strong><p>Stop interpretation · return to material</p><b>NO–GO</b></article><article><span>SAFE–02</span><strong>Signal tracks unacceptable stress</strong><p>Reject condition · revise dose or design</p><b>NO–GO</b></article><article><span>SAFE–03</span><strong>Evidence exceeds medical claim</strong><p>Restrict conclusion · publish the boundary</p><b>NO–GO</b></article><article><span>SAFE–04</span><strong>Consent or access is unclear</strong><p>Do not release · escalate review</p><b>NO–GO</b></article></div>
```

#### 3.1 Unexpected product or unresolved topology

Stop downstream interpretation and return to construct identity, purification, or geometry.

#### 3.2 Signal coupled to unacceptable cell stress

Reject the condition; do not optimize only for maximum expression or activation.

#### 3.3 Evidence cannot support medical readiness

Keep therapeutic efficacy, safety, dosing, and clinical claims outside the published conclusion.

#### 3.4 Consent or access is unclear

Do not publish identifiable stakeholder material or restricted records.

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：

- Experimental controls: /experiments
- Responsible design: /human-practices
- Consent and access: /inclusivity

Next 标题：Open the bench record at the point of work.

Next 文案：Continue to Protocol Library. / Next page / Protocol Library

Next 链接：/protocol

## Protocol Library — /protocol

Hero 标题：Protocol Library

Hero 导语：Fifteen bench-side records, indexed for quick preview and local download.

目录：无；hideOutline，正文满宽

### 06 Open the record at the point of work.

锚点：protocol-library

Bench reference / 15 indexed files

Filter the library by laboratory context, then preview the original six-page PDF without leaving the Wet Lab record.

图表/功能：ProtocolBookcase（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）

```html
<div class="protocol-bookcase" data-wiki-reveal="true"><div class="protocol-bookcase__bar"><div class="wet-measurement__tabs protocol-bookcase__tabs" aria-label="Filter protocol manuals"><button class="is-active" type="button" aria-pressed="true">All manuals</button><button type="button" aria-pressed="false">DNA</button><button type="button" aria-pressed="false">Cell</button><button type="button" aria-pressed="false">Animal &amp; Other</button></div><p aria-live="polite"><strong>15</strong><span> manuals indexed</span></p></div><div class="protocol-grid"><button class="protocol-card" type="button" data-category="dna" aria-haspopup="dialog" aria-label="Preview DNA Extraction &amp; Purification"><span class="protocol-card__cover" aria-hidden="true"><span>PR-01</span><i></i><b>DNA</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">DNA Extraction &amp; Purification</strong><span class="protocol-card__description">Six-page standard operating procedure for DNA extraction and purification.</span><span class="protocol-card__footer"><span>dna-extraction.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="dna" aria-haspopup="dialog" aria-label="Preview PCR Amplification Guide"><span class="protocol-card__cover" aria-hidden="true"><span>PR-02</span><i></i><b>DNA</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">PCR Amplification Guide</strong><span class="protocol-card__description">Six-page standard operating procedure for PCR amplification records.</span><span class="protocol-card__footer"><span>pcr-guide.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="dna" aria-haspopup="dialog" aria-label="Preview Plasmid Construction Record"><span class="protocol-card__cover" aria-hidden="true"><span>PR-03</span><i></i><b>DNA</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Plasmid Construction Record</strong><span class="protocol-card__description">Six-page standard operating procedure for plasmid construction records.</span><span class="protocol-card__footer"><span>plasmid-construction.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="dna" aria-haspopup="dialog" aria-label="Preview Agarose Gel Electrophoresis"><span class="protocol-card__cover" aria-hidden="true"><span>PR-04</span><i></i><b>DNA</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Agarose Gel Electrophoresis</strong><span class="protocol-card__description">Six-page standard operating procedure for agarose gel electrophoresis.</span><span class="protocol-card__footer"><span>gel-electrophoresis.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="dna" aria-haspopup="dialog" aria-label="Preview Nucleic Acid Quantification &amp; QC"><span class="protocol-card__cover" aria-hidden="true"><span>PR-05</span><i></i><b>DNA</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Nucleic Acid Quantification &amp; QC</strong><span class="protocol-card__description">Six-page standard operating procedure for nucleic acid quantification and QC.</span><span class="protocol-card__footer"><span>nucleic-acid-qc.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="cell" aria-haspopup="dialog" aria-label="Preview Cell Culture Fundamentals"><span class="protocol-card__cover" aria-hidden="true"><span>PR-06</span><i></i><b>Cell</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Cell Culture Fundamentals</strong><span class="protocol-card__description">Six-page standard operating procedure for cell culture fundamentals.</span><span class="protocol-card__footer"><span>cell-culture.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="cell" aria-haspopup="dialog" aria-label="Preview Cell Counting &amp; Viability"><span class="protocol-card__cover" aria-hidden="true"><span>PR-07</span><i></i><b>Cell</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Cell Counting &amp; Viability</strong><span class="protocol-card__description">Six-page standard operating procedure for cell counting and viability.</span><span class="protocol-card__footer"><span>cell-counting.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="cell" aria-haspopup="dialog" aria-label="Preview Cell Transfection Manual"><span class="protocol-card__cover" aria-hidden="true"><span>PR-08</span><i></i><b>Cell</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Cell Transfection Manual</strong><span class="protocol-card__description">Six-page standard operating procedure for cell transfection documentation.</span><span class="protocol-card__footer"><span>transfection.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="cell" aria-haspopup="dialog" aria-label="Preview Flow Cytometry Workflow"><span class="protocol-card__cover" aria-hidden="true"><span>PR-09</span><i></i><b>Cell</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Flow Cytometry Workflow</strong><span class="protocol-card__description">Six-page standard operating procedure for a flow cytometry workflow.</span><span class="protocol-card__footer"><span>flow-cytometry.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="cell" aria-haspopup="dialog" aria-label="Preview Immunofluorescence Staining"><span class="protocol-card__cover" aria-hidden="true"><span>PR-10</span><i></i><b>Cell</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Immunofluorescence Staining</strong><span class="protocol-card__description">Six-page standard operating procedure for immunofluorescence staining.</span><span class="protocol-card__footer"><span>immunofluorescence.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="animal" aria-haspopup="dialog" aria-label="Preview Animal Ethics &amp; Records"><span class="protocol-card__cover" aria-hidden="true"><span>PR-11</span><i></i><b>Animal &amp; Other</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Animal Ethics &amp; Records</strong><span class="protocol-card__description">Six-page standard operating procedure for animal ethics and records.</span><span class="protocol-card__footer"><span>animal-ethics.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="animal" aria-haspopup="dialog" aria-label="Preview Animal Model Establishment"><span class="protocol-card__cover" aria-hidden="true"><span>PR-12</span><i></i><b>Animal &amp; Other</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Animal Model Establishment</strong><span class="protocol-card__description">Six-page standard operating procedure for animal model establishment.</span><span class="protocol-card__footer"><span>animal-model.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="animal" aria-haspopup="dialog" aria-label="Preview Dosing &amp; Injection Guide"><span class="protocol-card__cover" aria-hidden="true"><span>PR-13</span><i></i><b>Animal &amp; Other</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Dosing &amp; Injection Guide</strong><span class="protocol-card__description">Six-page standard operating procedure for dosing and injection records.</span><span class="protocol-card__footer"><span>injection-guide.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="animal" aria-haspopup="dialog" aria-label="Preview Animal Tissue Collection"><span class="protocol-card__cover" aria-hidden="true"><span>PR-14</span><i></i><b>Animal &amp; Other</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Animal Tissue Collection</strong><span class="protocol-card__description">Six-page standard operating procedure for animal tissue collection.</span><span class="protocol-card__footer"><span>tissue-collection.pdf</span><b aria-hidden="true">Open ↗</b></span></button><button class="protocol-card" type="button" data-category="animal" aria-haspopup="dialog" aria-label="Preview Tumor Volume Measurement"><span class="protocol-card__cover" aria-hidden="true"><span>PR-15</span><i></i><b>Animal &amp; Other</b></span><span class="protocol-card__meta"><span>SOP</span><span>6 pages</span></span><strong class="protocol-card__title">Tumor Volume Measurement</strong><span class="protocol-card__description">Six-page standard operating procedure for tumor volume measurement.</span><span class="protocol-card__footer"><span>tumor-measurement.pdf</span><b aria-hidden="true">Open ↗</b></span></button></div></div>
```

关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：


Next 标题：Which designs deserve the first experiment?

Next 文案：Continue to Model. / Next page / Model

Next 链接：/model

## Library 手册完整数据

```json
[
  {
    "id": "PR-01",
    "title": "DNA Extraction & Purification",
    "category": "dna",
    "description": "Six-page standard operating procedure for DNA extraction and purification.",
    "pdfUrl": "../assets/protocols/dna-extraction.pdf?url",
    "assetName": "dna-extraction.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-02",
    "title": "PCR Amplification Guide",
    "category": "dna",
    "description": "Six-page standard operating procedure for PCR amplification records.",
    "pdfUrl": "../assets/protocols/pcr-guide.pdf?url",
    "assetName": "pcr-guide.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-03",
    "title": "Plasmid Construction Record",
    "category": "dna",
    "description": "Six-page standard operating procedure for plasmid construction records.",
    "pdfUrl": "../assets/protocols/plasmid-construction.pdf?url",
    "assetName": "plasmid-construction.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-04",
    "title": "Agarose Gel Electrophoresis",
    "category": "dna",
    "description": "Six-page standard operating procedure for agarose gel electrophoresis.",
    "pdfUrl": "../assets/protocols/gel-electrophoresis.pdf?url",
    "assetName": "gel-electrophoresis.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-05",
    "title": "Nucleic Acid Quantification & QC",
    "category": "dna",
    "description": "Six-page standard operating procedure for nucleic acid quantification and QC.",
    "pdfUrl": "../assets/protocols/nucleic-acid-qc.pdf?url",
    "assetName": "nucleic-acid-qc.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-06",
    "title": "Cell Culture Fundamentals",
    "category": "cell",
    "description": "Six-page standard operating procedure for cell culture fundamentals.",
    "pdfUrl": "../assets/protocols/cell-culture.pdf?url",
    "assetName": "cell-culture.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-07",
    "title": "Cell Counting & Viability",
    "category": "cell",
    "description": "Six-page standard operating procedure for cell counting and viability.",
    "pdfUrl": "../assets/protocols/cell-counting.pdf?url",
    "assetName": "cell-counting.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-08",
    "title": "Cell Transfection Manual",
    "category": "cell",
    "description": "Six-page standard operating procedure for cell transfection documentation.",
    "pdfUrl": "../assets/protocols/transfection.pdf?url",
    "assetName": "transfection.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-09",
    "title": "Flow Cytometry Workflow",
    "category": "cell",
    "description": "Six-page standard operating procedure for a flow cytometry workflow.",
    "pdfUrl": "../assets/protocols/flow-cytometry.pdf?url",
    "assetName": "flow-cytometry.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-10",
    "title": "Immunofluorescence Staining",
    "category": "cell",
    "description": "Six-page standard operating procedure for immunofluorescence staining.",
    "pdfUrl": "../assets/protocols/immunofluorescence.pdf?url",
    "assetName": "immunofluorescence.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-11",
    "title": "Animal Ethics & Records",
    "category": "animal",
    "description": "Six-page standard operating procedure for animal ethics and records.",
    "pdfUrl": "../assets/protocols/animal-ethics.pdf?url",
    "assetName": "animal-ethics.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-12",
    "title": "Animal Model Establishment",
    "category": "animal",
    "description": "Six-page standard operating procedure for animal model establishment.",
    "pdfUrl": "../assets/protocols/animal-model.pdf?url",
    "assetName": "animal-model.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-13",
    "title": "Dosing & Injection Guide",
    "category": "animal",
    "description": "Six-page standard operating procedure for dosing and injection records.",
    "pdfUrl": "../assets/protocols/injection-guide.pdf?url",
    "assetName": "injection-guide.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-14",
    "title": "Animal Tissue Collection",
    "category": "animal",
    "description": "Six-page standard operating procedure for animal tissue collection.",
    "pdfUrl": "../assets/protocols/tissue-collection.pdf?url",
    "assetName": "tissue-collection.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  },
  {
    "id": "PR-15",
    "title": "Tumor Volume Measurement",
    "category": "animal",
    "description": "Six-page standard operating procedure for tumor volume measurement.",
    "pdfUrl": "../assets/protocols/tumor-measurement.pdf?url",
    "assetName": "tumor-measurement.pdf",
    "documentType": "SOP",
    "addedAt": "2026-07-29",
    "pages": 6
  }
]
```

