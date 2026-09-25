# Hardware

CirCore — an integrated reaction device for the circularisation step of circRNA vaccine manufacture\.

## Overview

### 1\.1  What CirCore is

CirCore is an integrated reaction device designed for one specific step of circRNA vaccine manufacture: the covalent circularisation of a linear RNA precursor, together with the RNase R enrichment that follows it\. It is designed to hold that sequence inside a single sealed, temperature\-controlled, actively mixed chamber, so that the reaction does not have to be passed between instruments while it is running\.

|**\[ Insert image here — file name: gen1\-overview\.png \]**<br>*Use patent Fig\. 1 at full resolution\. The caption must state that this is a patent figure of a design\-stage device\.*|
|---|

Figure 1 \| First\-generation device, overall structure\. 

### 1\.2  How the two generations came about

The CirCure platform depends on obtaining covalently closed RNA at a reproducible yield\. In our pipeline this is achieved by permuted intron–exon \(PIE\) self\-splicing — a reaction that must be held at a defined temperature in the presence of GTP and Mg²⁺, and whose product is subsequently enriched by RNase R digestion\. Reviewing the equipment ordinarily used for this \(dry baths, thermal cyclers, thermomixers\), we found that each covers part of the requirement and none covers all of it, so in practice the reaction is run as a relay across several instruments\.

The first generation came out of that survey\. It was our answer to the gap we had found: hold temperature, mixing and evaporation control together in one sealed chamber, so the reaction stops being passed from instrument to instrument\. We completed its mechanical design in 2026 and filed a utility model patent application on it, which is currently under examination\.

But designing a device and living with a process are different things\. As we went on working with the circularisation workflow ourselves — loading tubes, waiting out incubations, carrying samples across the bench for the enrichment step that follows — a second set of shortcomings came into view, and this time they were shortcomings of our own design rather than of the equipment we had set out to replace\. One tube at a time is not enough for screening or for replicates\. A device that can only heat cannot follow the reaction into the steps that come after it\. And a device that runs to a timer cannot tell you whether the reaction has actually finished\. The first generation is what the problem asked for; the second is what using the process taught us to ask for\.

The second generation is our answer to those three, and to what followed from them\. It replaces the single V\-groove clamp with a removable multi\-position carrier and interchangeable bushings; it replaces the heating plate with a thermoelectric stack that cools as well as heats; it adds a removable fluorescence assembly and, with it, closed\-loop control that stops on the endpoint rather than on the clock; and because cooling is now available, the chamber holds the RNase R digestion and the enzyme inactivation as well as the circularisation, which brings the number of times the chamber is opened during a run down to one\. The same removable assembly also gives the machine two configurations, one for development and one for production\. The full comparison — seven dimensions, each with the reason for the change — is set out in the design iteration chapter \(click to see Chapter 6\)\.

## Motivation — the engineering bottleneck in circularisation

### 2\.1  Known engineering challenges in PIE\-mediated circularisation

Sensitivity to reaction conditions\. PIE self\-splicing is a GTP\- and Mg²⁺\-dependent ribozyme reaction, and the efficiency with which the precursor closes is governed by the temperature and ionic conditions under which it is held \(Wesselhoeft et al\., 2018\)\. A departure from the intended temperature, or drift in Mg²⁺ concentration, acts on the completeness of splicing rather than merely on its rate — which makes thermal uniformity a determinant of yield, not a convenience\.

The product requires post\-hoc enrichment\. In vitro circularisation yields a mixture of circular product and residual linear precursor, and RNase R digestion is routinely used to enrich the circular fraction\. Every enrichment step lengthens the process chain and costs material\. Improving the consistency of the circularisation reaction itself therefore reduces how heavily the process must lean on downstream clean\-up — this is the reasoning behind the "single\-step circularisation" goal stated in our own protocol, and it is the reasoning behind this device\.

Physical interference at microvolume scale\. Reactions of a few tens of microlitres, held for tens of minutes at elevated temperature, are exposed to evaporative loss and to condensation on the tube wall above the liquid\. Both alter the effective concentration of the reaction — including the concentration of the Mg²⁺ to which the reaction is sensitive\. Non\-uniform heating along the liquid column has the same character of effect\. This is why thermal cyclers carry heated lids, and it is why we treat evaporation control as a first\-order requirement rather than a refinement\.

### 2\.2  Where these fall in our own process chain

Our circularisation chain runs: linearised plasmid → T7 in vitro transcription \(37 °C\) → DNase I template removal → LiCl precipitation → circularisation \(55 °C, GTP/Mg²⁺\) → RNase R enrichment → RT\-qPCR with divergent and convergent primers, with back\-splice junction sequencing as direct confirmation\.

Three of these steps — transcription, circularisation, digestion — are incubations at three different temperatures, and the enrichment follows immediately from the reaction it is meant to clean up\. On a conventional bench each is a separate instrument, and each transition means opening a tube, transferring the sample, and interrupting the thermal condition\. The number of open\-tube operations is the number of opportunities for RNase contamination of a material that is being handled carefully precisely because it is nuclease\-sensitive\.

|**\[ Insert image here — file name: process\-chain\.png \]**<br>*Flow diagram, drawn by the team\. Mark on it: which step each of the three challenges in 2\.1 acts on; every instrument change; every open\-tube operation\.*|
|---|

Figure 2 \| The circularisation process chain, with instrument changes and open\-tube operations marked\.

### 2\.3  Why existing equipment is not sufficient

The table below compares the capabilities of the instruments ordinarily available to us against the requirement set of the circularisation step\. Entries are drawn from published specifications of these instrument classes\.

|**Requirement**|**Dry bath**|**Thermal cycler**|**Thermomixer**|**CirCore Gen 1**|**CirCore Gen 2**|
|---|---|---|---|---|---|
|Precise temperature control|✓|✓|✓|✓|✓|
|Active cooling|✗|✓|△|✗|✓|
|Active mixing during incubation|✗|✗|✓|✓|✓|
|Evaporation suppression|✗|✓|△|✓|✓|
|Sealed addition and withdrawal|✗|✗|✗|✓|✓|
|Pressure equalisation with filtration|✗|✗|✗|✓|✓|
|In\-situ decontamination|✗|✗|✗|✓|✓|
|Multi\-diameter tube compatibility|△|✗|△|✓|✓|
|Batch throughput|✓|✓|✓|✗|✓|
|In\-process monitoring|✗|△|✗|✗|✓|

Table 1 \| Capability matrix\. 

△ marks a capability present on some models or only partially\. 

To be fair, no individual row here is beyond existing equipment\. The difficulty is that no single instrument covers the set, so the reaction is run as a relay — and it is the relay, rather than any one instrument's shortcoming, that introduces the transfers, the thermal interruptions and the exposure events described alongside it \(click to see Chapter 2\)\.

### 2\.4  What already exists, and where it stops

Before committing to a design we surveyed what was already available, across three categories: the general\-purpose instruments on our own bench, commercial instruments that already integrate more than one of the functions we needed, and the patent literature\.

General\-purpose instruments were the starting point, and the capability matrix above summarises where each stops\. A dry bath holds temperature and nothing else\. A thermal cycler holds temperature well, cools actively and carries a heated lid, but it is built around a closed block that cannot be agitated and cannot be opened to the sample mid\-run\. An orbital shaker mixes but does not control temperature closely\.

The closest existing answer is the thermomixer — the class of instrument that already combines a temperature\-controlled block with orbital agitation, and in better models with a heated lid and Peltier cooling as well\. To be fair to it, we should be clear: on the two requirements we started from, temperature and mixing, a thermomixer is a good instrument, and we are not claiming to improve on it\. Where it stops is elsewhere\. Its block is open to the room, so every addition and every withdrawal means opening a tube; it has no filtered pressure path because it does not need one; it offers no in\-situ decontamination; and it has no way of observing the reaction it is running\. Those are the requirements that arise once you decide the sample should not leave the chamber, and they are what CirCore is actually about\.

In the patent literature we found one document with a similar title\. CN212942949U discloses a "circularisation reaction device" comprising a vapour\-phase evaporation tank, a vapour collection unit, an internal flow\-guiding assembly and a heat exchanger with a circulating liquid loop\. Despite the shared term, it is directed at the scaled production of glycolide and lactide; its architecture is a circulating bulk reactor optimised for material recovery, and it does not address microvolume nucleic\-acid reactions\. We record it here because it is the nearest prior document by name, and because the distinction matters for the scope of our own claims\.

Taken together, the survey left us with three deficiencies to design against: clamping arrangements that do not accommodate tubes of differing diameter and can loosen under agitation; low functional integration, which forces the chamber to be opened repeatedly during a run; and weak provision for in\-situ decontamination and operator safety in an enclosed, heated space\.

## First\-generation design — five functional modules

### 3\.1  System overview

The device is organised around a reaction chamber \(1\) mounted on a chamber base \(2\), closed by a lid \(18\) secured with quick\-release fasteners \(22\)\. Inside, a support carriage \(4\) slides on the base and carries the reaction tube \(12\); the carriage is driven in oscillation by one motor and the tube clamp by a second\. Five functional groups follow\.

|**\[ Insert image here — file name: gen1\-exploded\.png \]**<br>*Use patent Fig\. 2 or Fig\. 3\. Place the component\-number key table immediately after it\.*|
|---|

Figure 3 \| Exploded view of the first\-generation device

### 3\.2  Module A — self\-adaptive clamping

A push–pull assembly \(5\) — a rotating frame \(501\) driven by a motor, with connecting rods \(502\) at both ends — drives a clamp seat \(6\) carrying clamp blocks \(7\)\. Each block is cut with a V\-groove, and two guide blocks \(8\) run in matching slots on the support carriage to keep the motion square\. The V\-groove is the design decision here: a single geometry seats tubes of different diameter on two contact lines rather than one face, so one clamp covers the common tube sizes without interchangeable jaws, and the seating tightens rather than slackens as the clamp closes\.

### 3\.3  Module B — linear oscillation mixing

An eccentric wheel \(303\), driven by its own motor \(17\), acts through a connecting rod \(302\) and a link bar \(301\) to reciprocate the support carriage \(4\) along guide strips \(9\) in the chamber base\. The result is a linear reciprocating motion of the tube during incubation\. We chose linear reciprocation over magnetic stirring because a microvolume reaction should not have a stir bar introduced into it — the bar is an added surface, an added cleaning burden and an added contamination route — and over orbital shaking because the reciprocating mechanism shares a base with the clamping mechanism, which keeps the moving assembly compact\.

### 3\.4  Module C — thermal core

Heating is applied from two directions\. An electric heating and heat\-conducting plate \(10\) at the centre of the support carriage heats the tube from below, regulated by a thermoelectric temperature\-control element \(11\)\. On the inner face of the lid, a heating element \(19\) warms an elastic pressing hot lid \(20\), which bears on the top of the tube\. The lower element holds the reaction at its setpoint; the upper element keeps the headspace above the liquid warmer than the liquid, which suppresses condensation on the tube wall and therefore the concentration drift described in §2\.1\. The principle is the same as the heated lid of a thermal cycler\.

### 3\.5  Module D — sealed fluid path

The reaction tube \(12\) carries a sterile injection port \(13\) at the top and a drain port \(14\) at the bottom, so reagent can be added and product withdrawn without opening the chamber\. Because a sealed chamber whose contents are being heated will otherwise build or lose pressure, the chamber wall carries a vent channel \(15\) closed by a hydrophobic microporous filter membrane \(16\): the membrane passes gas to equalise pressure while blocking droplets and aerosol\. This pairing is what allows the chamber to be both sealed and thermally cycled\.

### 3\.6  Module E — decontamination and safety interlock

A UV source \(23\) on the chamber allows the empty chamber to be irradiated before a run\. A lid\-closure detection switch on the inner wall of the lid \(18\) is wired in series with the UV supply circuit, so opening the lid removes power from the source\. This is a hardware interlock rather than a software one, which is deliberate: the protection should not depend on the controller behaving correctly\. Heat generated during a run is carried away through a cooling duct \(21\) with a fan\.

|**\[ Insert image here — file name: uv\-interlock\-state\.png \]**<br>*State or block diagram, drawn by the team\. No engineering drawing required\.*|
|---|

Figure 4 \| UV interlock logic\. The lid\-closure switch is wired in series with the UV supply circuit\.

### 3\.7  Operating sequence

Standby → UV decontamination of the empty chamber → tube loaded and clamped → lid closed and fastened → ramp to setpoint → hold at temperature with oscillation → sampling through the sealed ports → cool down → drain\. The first generation covers the circularisation incubation; it does not cover the RNase R digestion that follows, which is one of the four limitations that motivated the second generation \(click to see Chapter 6\)\.

## How the design was derived

### 4\.1  **From requirement to architecture**

We did not begin from a device concept\. We began from the requirement set laid out earlier \(click to see Chapter 2\) and asked what would have to be true of an instrument that met it\. Reaction consistency depends on temperature, on mixing and on evaporation control — so a device needs all three\. But if the three are provided by three instruments, the sample must be moved between them, and moving the sample interrupts exactly the conditions the three are maintaining; the benefit is spent on the transfers\. The three therefore have to be held in one chamber\.

Enclosing them raised requirements that had not existed before enclosure\. A sealed chamber under thermal load needs a pressure path, and a pressure path through an unfiltered opening is a contamination path — hence the vent channel with a hydrophobic membrane\. A chamber that is not opened between steps needs a way to add reagent and remove product — hence the septum port and the drain port\. A chamber that is now a small enclosed volume handling nuclease\-sensitive material invites in\-situ decontamination — hence the UV source, and, because a UV source inside an openable chamber is an exposure hazard, the lid interlock\. Modules D and E are consequences of the decision to integrate, not independent features\.

### 4\.2  Design decisions and alternatives considered

|**Decision**|**Alternatives considered**|**Chosen**|**Reason**|
|---|---|---|---|
|Mixing method|Magnetic stirring / orbital shaking / linear reciprocation|Linear reciprocation|No stir bar is introduced into a microvolume reaction; the mechanism shares a base with the clamping mechanism, keeping the moving assembly compact\.|
|Tube adaptation \(Gen 1\)|Interchangeable jaws / spring clamp / V\-groove|V\-groove|One geometry seats several diameters on two contact lines, and the seating tightens rather than slackens as the clamp closes\.|
|Heating direction|Bottom only / bottom plus heated lid|Bottom plus heated lid|Holding the headspace above the liquid temperature suppresses wall condensation and the concentration drift that follows from it\.|
|Pressure handling|Fully rigid sealed chamber / open vent / filtered vent|Filtered vent|A sealed chamber under thermal load needs a pressure path, and an unfiltered path is a contamination path\.|
|UV safety|Software lockout / hardware interlock|Hardware interlock|Operator protection should not depend on the controller behaving correctly\.|
|Endpoint control \(Gen 2\)|Fixed timer / in\-process monitoring|In\-process monitoring|Stopping on the endpoint rather than on the clock avoids holding a finished reaction at temperature\.|

Table 2 \| Design decisions and the alternatives considered\.

## 5\. The patent

### 5\.1  Filing

We filed a utility model patent application on the first\-generation device and it is currently under examination\. A utility model protects the structural configuration of a device rather than a method or a chemical composition, which is the right instrument for what we had: a mechanical arrangement of chamber, carriage, clamp, thermal path and vent, defined by how the parts connect rather than by what is run inside them\.

|**EDITORIAL NOTE — delete before publishing**<br>*\[Insert here: application number, filing date, and current status\. Write the status as filed / under examination — never as granted or patented until the grant notice actually arrives, and come back and update this line if it does\. The second generation is not being filed at all; describe it only as a design specification\.\]*|
|---|



### 5\.2  Drafting the claims was a design review

Curiously, the most useful review this design received was not one we planned\. A claim has to state, for every component, what it connects to and how — sliding, rotating, fixed, in series, in thermal contact\. Writing that out forced us to define interfaces we had left implicit in the concept drawings, and several of them turned out to be undefined rather than merely unstated\. The requirement of structural unity disciplined the scope in the same way: a feature that did not belong to one coherent structure had to be either justified as part of it or dropped\.

We mention this because it is transferable\. Any team with a hardware design, whether or not they intend to file, can get the same effect by writing their design as if it were a claim set — component by component, connection by connection\. It is a slow way to read your own drawing, and that is exactly why it finds things\.

### 5\.3  Why a patented design is also released openly

A reasonable question is why we did both\. Our position is that the filing and the open release serve the same end\. Securing the right prevents a third party from claiming the structure later and using that claim to restrict academic use of it\. Publishing the design files under an open licence ensures that academic and non\-commercial users can build and modify the device without asking us\. We are not seeking to restrict use of this design; we are seeking to keep it usable\. This release is made after the filing date, so it does not affect the pending application; the second\-generation design is published deliberately and freely, since we do not intend to file on it\.

## 

## Design iteration — the second generation

### 6\.1  Four limitations of the first generation

Chapter 1 gave the short version \(click to see Chapter 1\)\. Here are the four limitations in full, each set against the change in the second generation that answers it\. Three of them we ran into while working the process; the fourth follows from the second\.

Throughput\. The V\-groove clamp holds one tube\. A design that can only run one reaction at a time cannot support condition screening, replicates, or batch preparation\. The second generation replaces it with a removable tube\-carrier module \(30\) presenting a 4\-, 8\- or 16\-position array\. Diameter adaptation moves from the clamp geometry to a removable bushing \(32\) seated in a stepped bore \(31a\) and located by a flange \(321\); the bushing is split along its axis \(322\) so it grips elastically, and carries an O\-ring groove \(323\) on its outer face\. Tube compatibility is now a consumable choice rather than a mechanism\.

Unidirectional temperature control\. The first generation heats; it cannot actively cool\. That confines it to a single incubation, because any subsequent step at a lower temperature requires the sample to leave the chamber\. The second generation replaces the heating plate with a thermoelectric stack: a heat\-conducting block \(51\) in thermal contact with the carrier module, a thermoelectric element \(52\), and a heat sink with fins \(531\) and fan \(532\)\. The three are clamped together by through\-bolts \(54\) with spring washers \(55\), which hold contact pressure across the interfaces as the stack expands and contracts\. Active cooling to 4 °C is the precondition for everything the second generation does with the process chain \(click to see Chapter 6\)\.

The process is not observable\. The first generation runs to a preset time\. Whether the reaction has reached its endpoint at that moment is not known to the device, so the operator either stops early and loses yield, or holds longer than necessary and exposes the product to prolonged heat\. The second generation adds a removable fluorescence detection assembly \(180\); click to see Chapter 6\.

The process chain is not closed\. The first generation covers circularisation only; the RNase R enrichment that follows still requires the sample to be moved to another instrument, which reintroduces exactly the transfer and exposure events the device was meant to remove\. The second generation extends the temperature programme to cover digestion and enzyme inactivation as well; click to see Chapter 6\.

### 6\.2  In\-process monitoring and closed\-loop endpoint control

The second generation carries a removable fluorescence detection assembly \(180\), attached to the base by a quick\-release fitting \(188\) and connected to the controller \(90\) through a plug \(189\)\. Its optical path runs from an excitation source \(181\) through a filter assembly \(182\) to the tube position, with a photodetector \(183\) collecting the emitted signal; a shroud or labyrinth baffle \(187\) encloses the detection region to suppress ambient light\.

The point of the assembly is not the measurement but what the controller does with it\. The controller is designed to fit the accumulating signal over the course of the reaction and to trigger the cooling step once the fitted curve plateaus, rather than when a preset time expires\. The device stops on the endpoint instead of on the clock\. For a product whose degradation is itself temperature\- and time\-dependent, that is the difference between holding a finished reaction at 55 °C for no reason and cooling it as soon as it is finished\.

|**\[ Insert image here — file name: gen2\-optical\-electrical\-block\.png \]**<br>*Block diagram only; no optical drawing required\. Writing note: the plateau criterion is a design setpoint, not a measured threshold — phrase it as "the controller is designed to trigger cooling once the fitted curve plateaus", never as an observed result\.*|
|---|

Figure 5 \| Optical path and electrical connections of the second generation, with the controller \(90\) as the central node\.

### 6\.3  The full sequence inside one chamber

With active cooling and a septum port already present, the chamber can hold the enrichment step as well as the reaction\. The intended sequence is: UV decontamination of the empty chamber → tubes loaded into the carrier module, lid closed and tightened circumferentially so the annular seal \(24\) is compressed → circularisation held at 55 °C, with fluorescence monitoring optionally enabled → cooling to 4 °C → RNase R injected by needle through the self\-resealing elastic septum \(611\), without breaking the chamber seal → digestion at 37 °C with oscillation → enzyme inactivation at 65–70 °C → return to 4 °C → product withdrawn through the bottom drain valve \(632\)\.

The chamber is not opened at any point between loading and withdrawal\. Read against the process chain \(click to see Chapter 2\), this is the stretch the device now covers as a single operation rather than as a relay, and the number of exposure events across it falls to the loading step alone\. Temperatures and durations here are taken from the standard conditions for the reactions concerned and are design setpoints; we have not run them on a device\.

|**\[ Insert image here — file name: gen2\-process\-timing\.png \]**<br>*Timing diagram, drawn by the team\. Mark the segment covered by the first generation, the segment covered by the second, and the number of chamber openings across each\.*|
|---|

Figure 6 \| Second\-generation temperature programme and process coverage, to be read against Figure 2\.

### 6\.4  Two configurations from one platform

Because the fluorescence assembly attaches through a quick\-release fitting, it defines two configurations of the same machine\. In the development configuration the assembly is fitted, and the device records signal during the run for condition screening and process characterisation\. In the production configuration it is omitted; the base retains the mounting provision, and the device operates as a sealed, temperature\-controlled, mixed reactor\. The two respond to genuinely different priorities — a development run wants observability, a production run wants a fixed, maintainable, reproducible configuration with fewer parts to qualify — and they are met by fitting or omitting one module rather than by building two machines\.

### 6\.5  The nature of this iteration

|What drove this iteration was the experience of running the process and the discipline of reviewing our own design against it\. What did not drive it was testing a device, because there is no device to test\. The second\-generation design exists as a written specification; it has not been filed as a patent, and no physical build of either generation has been made\.|
|---|



Concretely, four things stood in for testing: handling the workflow ourselves often enough to feel where it costs time and where it exposes material; writing out the first\-generation claims, which exposed undefined interfaces \(click to see Chapter 5\); checking the design against the requirement set item by item \(click to see Chapter 2\); and walking the process chain through the device on paper \(click to see Chapter 2\), which is where the throughput and process\-closure limitations became visible\. We call this a design iteration, and deliberately not a design–build–test–learn cycle: there is no build and no test here, and using that term would invite the reader to look for evidence that does not exist\.

### 6\.6  Generation comparison

|**Dimension**|**Gen 1 — patent filed**|**Gen 2 — specification, not filed**|**Reason for the change**|
|---|---|---|---|
|Tube holding|V\-groove clamp, single tube|Removable carrier module, 4\-, 8\- or 16\-position array with split elastic bushings|Single\-tube operation cannot support condition screening, replicates or batch preparation\.|
|Temperature control|Electric heating plate; heating only|Preloaded thermoelectric stack; active cooling to 4 °C|Without cooling, any lower\-temperature step requires the sample to leave the chamber\.|
|Process monitoring|None|Removable fluorescence assembly with shrouded optical path|The device could not tell whether the reaction had reached its endpoint\.|
|Control logic|Open\-loop, preset duration|Closed\-loop; cooling triggered on curve plateau \(design setpoint\)|Stopping on the endpoint instead of the clock limits the thermal exposure of the product\.|
|Process coverage|Circularisation only|Circularisation → cooling → RNase R digestion → inactivation → withdrawal|Enrichment outside the chamber reintroduces the transfers the device exists to remove\.|
|Configurations|Single|Development \(fluorescence fitted\) / production \(omitted\)|Development and production runs have genuinely different priorities\.|
|Chamber openings per run|Loading, plus transfer to the next instrument|Loading only|Each opening is an opportunity for RNase contamination\.|

Table 3 \| First generation against second generation, and the reason for each change\.



## Design files and open release

Everything we have is published\. The first generation is documented by its patent drawings and claims; the second generation is documented by a written specification\. Neither is a build manual, and we say so — but between them they contain the geometry, the component list and the connection relationships that a team with fabrication access would need in order to draw and build the device\.

First\-generation package: the five patent figures at full resolution, the component\-number key, an indicative materials list \(standard parts commercially available; custom parts suitable for 3D printing or machining\), and the licence statement\.

Second\-generation package: a "Gen\-2 Design Specification" document assembling the claims, the component\-number key and the drawing specification\. The drawing specification is unusually complete — it states, figure by figure, what each view must show and which component numbers must be labelled on it — which makes it a working brief for a draftsperson rather than a description\. We have not drawn the figures ourselves; we are releasing the brief that would let someone else do so\.

Documentation is released under CC BY 4\.0\. We would rather someone build this than that we hold it\.

|**EDITORIAL NOTE — delete before publishing**<br>*\[Insert here: repository link, and the download list — patent figures, component key, Gen\-2 Design Specification PDF, licence\.\]*|
|---|



## Limitations and future work

### 8\.1  Limitations

Neither generation has been built\. The first generation is a design whose application is under examination; the second is a specification we are not filing\. Nothing on this page has been measured on hardware\.

Specifically unverified: thermal uniformity along the tube and across the carrier array; the actual mixing efficiency of the oscillation mechanism at microvolume; the sealing reliability of the chamber and of the septum across repeated punctures and thermal cycles; the sensitivity and dynamic range of the fluorescence assembly, and therefore whether a plateau can be resolved reliably enough to drive the control decision the second generation rests on \(click to see Chapter 6\); cost, which has not been established by supplier quotation; and the thermal and UV compatibility of candidate materials over a service life\.

|Admittedly, the fluorescence assembly deserves particular caution\. It carries the most weight in the second\-generation argument and rests on the least evidence\. Whether a plateau in an in\-tube fluorescence trace is a reliable proxy for reaction completion, at this scale and in this geometry, is an empirical question we have not answered\.|
|---|



### 8\.2  Next steps

If the project has the opportunity to continue, the order we would follow is: complete the second\-generation drawings and file; build a single\-module functional prototype of the carrier and oscillation mechanism, which is the cheapest way to test the assumptions behind the feasibility estimates \(click to see Chapter 7\); then the thermoelectric stack; then the fluorescence assembly, tested against RNase R–digested and undigested controls before it is trusted to drive anything; then integration; then a run against a real circularisation reaction with off\-line RT\-qPCR as the reference\.

### 8\.3  A downstream interface, not a bigger machine

A circRNA vaccine does not end at purified RNA; it ends at a formulated particle\. The obvious next unit operation is lipid nanoparticle encapsulation, and the obvious question is whether it should be integrated into this chamber\.

Tempting as that is, our view is that it should not\. LNP formation depends on rapid microfluidic mixing — an ethanolic lipid phase and an aqueous RNA phase brought together in a channel on a millisecond timescale, where particle size distribution is set by the flow ratio and the mixing geometry\. That is a continuous\-flow operation at a characteristic scale several orders of magnitude below a macroscopic batch chamber under oscillation\. The two do not share a working volume, and putting them in one housing would not make them one device; it would make them two devices in one housing\.

The bottom drain valve of the second generation is therefore intended as a standard downstream interface rather than as an end point\. A microfluidic LNP module could be coupled to it to form a continuous circularisation\-to\-formulation workflow, with each unit operation kept at the scale it actually works at\. We would rather define the interface well than integrate badly\.

### 8\.4  Handover

Both design packages are open\. If a team with machining or 3D\-printing capacity wants to take this further, the files are there and we would be glad to hear about it\. The device is not specific to our epitopes or our vaccine — anything requiring a sealed, temperature\-controlled, mixed microvolume reaction with in\-line addition and withdrawal has the same requirement set\.

## References

1. Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. Nature Communications, 2018; 9: 2629\. PMID 29980681\.

2. CN212942949U — A circularisation reaction device \(utility model, People's Republic of China\)\.

|**EDITORIAL NOTE — delete before publishing**<br>*Entries 3–10 to be completed by the team\. Needed: one or two circRNA vaccine reviews; two or three studies on circularisation efficiency and condition optimisation; one on RNase R enrichment of circular RNA; one on evaporation or heated\-lid principles in microvolume reactions; one on open\-source laboratory hardware\. Do not cite a paper we have not read — §2\.1 rests entirely on this list, so each of the three claims there must be traceable to a specific source\.*|
|---|



CirCure · iGEM 2026 · hardware page draft — built against framework rev\. D







CirCore —— 面向 circRNA 疫苗制备中成环步骤的集成式反应装置。

## 概览与定位声明

### 1\.1  CirCore 是什么

CirCore 是一台面向 circRNA 疫苗制备中某一特定步骤的集成式反应装置：线性 RNA 前体的共价环化，以及紧随其后的 RNase R 富集。它的设计目标是把这一段流程收进单个密闭、控温、主动混匀的舱体内，使反应在进行过程中不必在多台仪器之间传递。

|**［此处插入图片 —— 文件名：gen1\-overview\.png］**<br>*使用专利图 1 的高清版。图注必须写明这是一台设计阶段装置的专利附图。*|
|---|

图 1 ｜ 第一代装置整体结构。实用新型专利申请附图—— 第一代设计。

### 1\.2  **两代设计是怎么来的**



CirCure 平台的前提是以可重复的产率获得共价闭合的 RNA。在我们的工艺中，这一步通过置换型内含子—外显子（PIE）自剪接实现——该反应须在 GTP 与 Mg²⁺ 存在下维持于特定温度，其产物随后由 RNase R 消化富集。审视通常用于该步骤的设备（恒温金属浴、PCR 仪、恒温混匀仪）后我们发现，每一台都只覆盖需求的一部分，没有一台覆盖全部，因此实际操作中这一反应是在多台仪器之间接力完成的。

第一代正是这次审视的产物。它是我们针对所发现的空缺给出的回答：把温度、混匀与蒸发控制收进同一个密闭舱体，使反应不再被从一台仪器传递到另一台仪器。我们于 2026 年完成了它的机械设计，并就其提交了实用新型专利申请，目前该申请处于审查阶段。

但设计一台装置，与真正与一套工艺朝夕相处，是两回事。随着我们自己持续在成环工艺上动手——装管、等待温育、为了紧随其后的富集步骤把样品在实验台上来回搬运——第二批不足逐渐显现出来；而这一次，它们是我们自己设计的不足，而不是我们原本想要取代的那些设备的不足。一次只能处理一支反应管，不足以支持筛选与重复实验；一台只能加热的装置，无法跟随反应进入其后的步骤；而一台按计时器运行的装置，无法告诉你反应究竟有没有完成。第一代是问题本身所要求的；第二代则是使用这套工艺教会我们去要求的。

第二代就是我们对这三点、以及由它们衍生出的问题的回答。它以可拆卸的多孔承载模块与可换衬套取代了单一的 V 型夹块；以可制冷亦可加热的热电堆栈取代了加热板；增设可拆卸荧光组件，并借此实现按终点而非按时钟停止的闭环控制；而由于具备了制冷能力，舱体除环化之外还能容纳 RNase R 消化与酶失活，使单次运行中开启舱体的次数降至一次。同一套可拆卸组件还让这台机器有了研发与生产两种构型。完整的对照——七个维度，每一项都附有改动理由——列在迭代章节中（点击查看第 6 章）。

## 动机 —— 成环反应的工程瓶颈

### 2\.1  PIE 自剪接成环的已知工程难点

① 对反应条件敏感。PIE 自剪接是一个依赖 GTP 与 Mg²⁺ 的核酶反应，前体能否闭合以及闭合的效率，取决于其所处的温度与离子条件（Wesselhoeft et al\., 2018）。温度偏离设定值或 Mg²⁺ 浓度漂移，影响的是自剪接的完成度而不只是速率——这使得温度均一性成为决定产率的因素，而非锦上添花的便利。

② 产物需要后处理富集。体外环化的产物是环状产物与残余线性前体的混合物，通常需要 RNase R 消化来富集环状组分。每增加一步富集，工艺链就更长、物料损失也更多。因此，提升环化反应本身的一致性，可以降低整个工艺对下游纯化的依赖程度——这正是我们自己的实验方案中写下的「一步成环」目标背后的逻辑，也是本装置的立项理由。

③ 微量体系的物理干扰。数十微升量级的反应在较高温度下维持数十分钟，会受到蒸发损失与液面以上管壁冷凝的影响。两者都会改变反应的有效浓度——包括该反应本身所敏感的 Mg²⁺ 浓度。沿液柱方向的受热不均具有同样性质的影响。这正是 PCR 仪配备热盖的原因，也是我们把抗蒸发作为一级需求而非细节优化来对待的原因。

### 2\.2  这些难点落在我们工艺链的哪里

我们的成环工艺链为：线性化质粒 → T7 体外转录（37 ℃）→ DNase I 去除模板 → LiCl 沉淀纯化 → 环化（55 ℃，GTP/Mg²⁺）→ RNase R 富集 → 发散与收敛引物 RT\-qPCR，并以反向剪接接口（BSJ）测序作为直接确证。

其中三步——转录、环化、消化——是三个不同温度下的温育，而富集步骤紧接在它所要纯化的反应之后。在常规实验台上，每一步都是一台独立设备，每一次转换都意味着开盖、转移样品、并中断热学条件。开盖操作的次数，就等于对一份正因核酸酶敏感而被小心处理的材料造成 RNase 污染的机会次数。

|**［此处插入图片 —— 文件名：process\-chain\.png］**<br>*流程图，由队伍自行绘制。图上标出：2\.1 三类难点各自作用于哪一步；每一次设备切换；每一次开盖操作。*|
|---|

图 2 ｜ 成环工艺链，图中标出设备切换与开盖操作。

### 2\.3  现有设备为什么不够用

下表将我们通常可用的仪器的能力，与成环步骤的需求集合逐项比较。表中条目依据各类仪器的公开技术参数**。**

|**需求维度**|**恒温金属浴**|**PCR 仪**|**恒温混匀仪**|**CirCore 第一代**|**CirCore 第二代**|
|---|---|---|---|---|---|
|精确控温|✓|✓|✓|✓|✓|
|主动制冷|✗|✓|△|✗|✓|
|温育中主动混匀|✗|✗|✓|✓|✓|
|抗蒸发|✗|✓|△|✓|✓|
|密闭加样与导出|✗|✗|✗|✓|✓|
|过滤式气压平衡|✗|✗|✗|✓|✓|
|原位灭菌|✗|✗|✗|✓|✓|
|多管径适配|△|✗|△|✓|✓|
|批量通量|✓|✓|✓|✗|✓|
|在线过程监测|✗|△|✗|✗|✓|

表 1 ｜ 能力矩阵 —— 各类仪器与成环步骤需求集合的对照。

△ 表示仅部分型号具备或仅部分满足。

平心而论，表中没有任何单独一行是现有设备做不到的。困难在于没有任何一台设备能覆盖整个集合，因而反应只能以接力方式进行——真正引入 前文所述的转移、热学中断与暴露事件（点击查看第 2 章）的，是这种接力本身，而不是某一台设备的缺陷。

### 2\.4  **现有方案调研：已有什么，止于何处**

在确定设计方案之前，我们对已有方案做了调研，覆盖三类：我们自己实验台上的通用仪器、已经集成了我们所需多项功能的商用仪器，以及专利文献。

通用仪器是调研的起点，上文的能力矩阵概括了每一类止于何处。恒温金属浴只维持温度，别无其他。PCR 仪能很好地维持温度、可主动制冷、并配有热盖，但它围绕一个封闭的模块构建，既无法振荡，运行中也无法向样品开放。轨道振荡器能混匀，却不能精确控温。

现有方案中最接近的是恒温混匀仪——这一类仪器已经把控温模块与轨道振荡结合在一起，较好的型号还配有热盖与 Peltier 制冷。平心而论，这一点应当说清楚：就我们最初提出的两项需求——温度与混匀——而言，恒温混匀仪是一台好仪器，我们并不宣称在这两点上有所超越。它止步的地方在别处：它的模块向外界敞开，因而每一次加样与每一次取出都意味着开盖；它没有过滤式压力通路，因为它并不需要；它不提供原位消毒；它也无从观测自己正在运行的反应。这些需求，只有在你决定「样品不应离开舱体」之后才会出现——而这正是 CirCore 真正要处理的事情。

专利文献方面，我们检索到一份名称与之相似的文件。公开号 CN212942949U 公开了一种「成环反应装置」，由气相蒸发罐、气相收集单元、罐内导流组件以及带料液循环单元的换热器构成。尽管名称中同样含有「成环」，该装置面向的是乙交酯与丙交酯的扩大化生产；其架构是一个为物料回收而优化的循环式大体积反应器，并不针对核酸微量反应。我们在此记录它，是因为它是名称上最接近的在先文献，也因为这一区分对我们自身权利要求的范围界定有实际意义。

综合这次调研，我们得到三项需要针对性解决的不足：夹持结构难以适配不同直径的反应管，且在振荡过程中可能松脱；功能集成度低，迫使舱体在运行过程中被反复开启；以及在一个封闭且受热的空间内，原位消毒与操作人员防护方面的设计薄弱。

## 一代设计 —— 五个功能模块

### 3\.1  系统总览

装置以反应舱体（1）为核心，舱体安装于舱座（2）之上，由舱盖（18）闭合并以便捷紧固件（22）锁紧。舱内，支撑座（4）在舱座上滑动并承载反应管（12）；支撑座由一台电机驱动振荡，管夹则由另一台电机驱动。以下为五个功能组。

|**［此处插入图片 —— 文件名：gen1\-exploded\.png］**<br>*使用专利图 2 或图 3。紧随其后放置零件编号对照表。*|
|---|

图 3 ｜ 第一代装置爆炸视图。实用新型专利申请附图 —— 第一代设计。

### 3\.2  模块 A · 自适应夹持

推拉组件（5）——由电机驱动的转动架（501）及其两端的连杆二（502）——驱动夹座（6），夹座上装有夹块（7）。每个夹块开有 V 型凹槽，夹座底部两组滑块（8）在支撑座表面的滑槽内运动以保证方向。此处的设计决策是 V 型槽：单一几何形状使不同直径的反应管以两条接触线而非一个平面就位，因此一套夹具即可覆盖常用管径而无需更换钳口，且夹紧过程中定位是收紧而非松弛的。

### 3\.3  模块 B · 线性振荡混匀

偏心轮（303）由独立的驱动电机（17）带动，经连杆一（302）与连接杆（301）驱使支撑座（4）沿舱座上的滑条（9）往复运动，从而在温育过程中为反应管提供线性往复混匀。我们选择线性往复而非磁力搅拌，是因为微量反应体系不宜引入搅拌子——搅拌子意味着额外的表面、额外的清洁负担与额外的污染途径；选择线性往复而非轨道振荡，则是因为往复机构可与夹持机构共用底座，使运动部件更为紧凑。

### 3\.4  模块 C · 热核心

加热从上下两个方向施加。支撑座中心处的电加热导热板（10）自下方加热反应管，由热电温控元件（11）调节；舱盖内侧的加热件（19）加热弹性压紧热盖（20），后者压在反应管顶部。下方元件将反应维持在设定温度，上方元件使液面以上的顶空温度高于液体，从而抑制管壁冷凝，进而抑制 §2\.1 所述的浓度漂移。其原理与 PCR 仪热盖相同。

### 3\.5  模块 D · 密闭流体通路

反应管（12）顶部设无菌加样接口（13），底部设导流口（14），使试剂的加入与产物的导出无需开启舱体。由于密闭舱体在内容物受热时会产生或损失压力，舱壁上设有通气通道（15），其内以疏水微孔过滤膜（16）封闭：该膜允许气体通过以平衡压力，同时阻隔液滴与气溶胶。正是这一组合使舱体既能保持密闭，又能进行变温。

### 3\.6  模块 E · 灭菌与安全联锁

舱体上的紫外光源（23）用于运行前对空舱照射灭菌。舱盖（18）内壁的盖合状态检测开关串联于紫外光源的供电回路中，因此开盖即切断光源电源。这是硬件互锁而非软件互锁，属于有意的选择：这项防护不应依赖于控制器行为是否正确。运行中产生的热量经带风扇的散热通道（21）排出。

|**［此处插入图片 —— 文件名：uv\-interlock\-state\.png］**<br>*状态图或框图，由队伍自行绘制。不需要工程制图。*|
|---|

图 4 ｜ 紫外互锁逻辑。盖合状态检测开关串联于紫外光源供电回路中。

### 3\.7  运行流程

待机 → 对空舱进行紫外灭菌 → 装入并夹持反应管 → 合盖并紧固 → 升温至设定值 → 恒温并振荡 → 经密闭接口取样 → 降温 → 排空。第一代覆盖的是环化温育这一段；它不覆盖其后的 RNase R 消化，而这正是促成第二代设计的四项局限之一（点击查看第 6 章）。

## 设计推导

### 4\.1  **从需求到架构**

我们并非从一个装置构想出发，而是从前文列出的需求集合出发（点击查看第 2 章），追问一台满足该集合的仪器必须具备什么。反应一致性取决于温度、混匀与蒸发控制，因此装置必须同时具备这三者。但若这三者由三台设备分别提供，样品就必须在它们之间转移，而转移恰恰中断了这三者所维持的条件——收益被转移过程消耗掉了。因此这三者必须收进同一个舱体。

而集成本身又带来了集成之前并不存在的新需求。承受热负荷的密闭舱体需要压力通路，而未经过滤的压力通路就是污染通路——于是有了带疏水膜的通气通道。步骤之间不开启的舱体需要加样与取出产物的途径——于是有了穿刺加样接口与底部导流口。一个处理核酸酶敏感材料的小型密闭空间自然要求原位消毒——于是有了紫外光源；而可开启舱体内的紫外光源构成暴露风险——于是有了舱盖互锁。模块 D 与模块 E 是集成这一决策的后果，而不是彼此独立的功能点。

### 4\.2  设计决策与备选方案

|**决策项**|**所考虑的备选方案**|**最终选择**|**理由**|
|---|---|---|---|
|混匀方式|磁力搅拌 / 轨道振荡 / 线性往复|线性往复|微量体系不引入搅拌子；该机构可与夹持机构共用底座，使运动部件更为紧凑。|
|管径适配（第一代）|可换钳口 / 弹簧夹 / V 型槽|V 型槽|单一几何以两条接触线适配多种管径，且夹紧过程中定位是收紧而非松弛。|
|加热方向|仅底部加热 / 底部加热加热盖|底部加热加热盖|使顶空温度高于液体温度，可抑制管壁冷凝以及由此引起的浓度漂移。|
|气压处理|完全刚性密闭 / 直接通气 / 过滤通气|过滤通气|承受热负荷的密闭舱体需要压力通路，而未经过滤的通路即是污染通路。|
|紫外安全|软件锁定 / 硬件互锁|硬件互锁|人员防护不应依赖于控制器行为是否正确。|
|终点控制（第二代）|固定计时 / 在线监测|在线监测|按终点而非按时钟停止，可避免已完成的反应继续处于高温。|

表 2 ｜ 设计决策与所考虑的备选方案。

## 专利

### 5\.1  申请情况

我们就第一代装置提交了实用新型专利申请，该申请目前处于审查阶段。实用新型保护的是装置的结构构造，而非方法或化学组成——这恰好对应我们所拥有的东西：一套由舱体、支撑座、夹持、热通路与通气孔构成的机械配置，其界定依据是各零件如何相连，而不是舱内运行的是什么反应。

|**撰写说明 —— 发布前删除**<br>*［此处填入：第一代实用新型专利的申请号、申请日期与当前状态。第二代尚未提交申请——本页任何位置都不得将其描述为已获专利。］*|
|---|



### 5\.2  撰写权利要求本身就是一次设计评审

本设计所接受的最有用的一次评审，并不是我们计划中的评审。权利要求必须逐个零件说明它与什么相连、以何种方式相连——滑动、转动、固定、串联、热接触。把这些逐条写出来，迫使我们定义那些在概念图中被隐含带过的接口，而其中若干处最终被发现是「未定义」，而不只是「未写明」。结构单一性的要求以同样的方式约束了范围：不属于同一个连贯结构的特征，要么被论证为其组成部分，要么被舍弃。

我们特意写下这一点，是因为它可以迁移。任何拥有硬件设计的队伍——无论是否打算申请专利——都可以通过「把自己的设计当作权利要求来写」获得同样的效果：逐个零件、逐条连接地写下去。这是一种阅读自己图纸的缓慢方式，而这恰恰是它能发现问题的原因。

### 5\.3  为什么申请了专利的设计同时开放发布

一个合理的问题是：我们为什么两件事都做。我们的立场是，确权与开放发布服务于同一个目的。取得权利，可以避免第三方日后主张该结构，并以此限制它的学术使用；以开放许可发布设计文件，则确保学术与非营利用户无需征得我们同意即可制造与修改本装置。我们并不寻求限制这一设计的使用，而是寻求让它保持可用。此处的公开发生在申请日之后，因而不影响审查中的申请；第二代设计则是有意且完全自由地公开的，因为我们并不打算就其提出申请。



## 迭代展望 —— 第二代设计

### 6\.1  第一代的四项局限

第 1 章给出的是简短版本（点击查看第 1 章）。以下是四项局限的完整表述，每一项都与第二代中回应它的那处改动并列。其中三项是我们在实际操作工艺的过程中撞上的，第四项则由第二项推导而来。

① 通量受限。V 型夹块一次只能固定一支反应管。一台每次只能跑一个反应的装置，无法支持条件筛选、重复实验或批量制备。第二代以可拆卸反应管承载模块（30）取代之，提供 4 孔、8 孔或 16 孔阵列。管径适配则从夹块几何转移到可拆卸衬套（32）：衬套装入台阶孔（31a）中，由衬套法兰（321）定位，沿轴向设开口缝（322）以实现弹性夹持，外周设 O 形圈槽（323）。管型兼容性由此从一套机构变成了一个耗材选项。

② 温控单向。第一代只能加热，不能主动制冷，这使它被限定于单一温育步骤——任何后续的较低温度步骤都要求样品离开舱体。第二代以热电堆栈取代加热板：与承载模块热接触的导热件（51）、热电温控元件（52），以及带散热鳍片（531）与风扇（532）的散热组件（53）。三者由对穿螺钉（54）配弹性垫片（55）压紧，使堆栈在热胀冷缩过程中始终维持界面接触压力。可主动降温至 4 ℃，是第二代得以覆盖整条工艺链的前提（点击查看第 6 章）。

③ 过程不可观测。第一代按预设时间运行。反应在该时刻是否已达终点，装置本身并不知晓，因此操作者要么提前终止而损失产率，要么维持超过必要的时长而使产物长时间处于高温。第二代增设可拆卸荧光检测组件（180），点击查看第 6 章。

④ 工艺链未闭合。第一代仅覆盖环化一步；其后的 RNase R 富集仍需把样品转移到另一台设备，这恰恰重新引入了本装置意在消除的转移与暴露事件。第二代将变温程序扩展至同时覆盖消化与酶失活，点击查看第 6 章。

### 6\.2  在线成环监测与闭环控制

第二代配备可拆卸荧光检测组件（180），通过快拆固定件（188）安装于机座上，经电连接插头（189）与控制器（90）连接。其光路自激发光源（181）经滤光组件（182）射向反应管位置，由光电传感器（183）采集发射信号；遮光罩或迷宫式光阑（187）包围检测区域以抑制环境光干扰。

该组件的意义不在于测量本身，而在于控制器如何使用测量结果。控制器的设计是：在反应过程中对累积信号进行拟合，并在拟合曲线出现平台期时触发降温，而非在预设时间到期时触发。装置按终点停止，而不是按时钟停止。对于一种降解本身即依赖温度与时间的产物而言，这就是「让一个已经完成的反应无谓地继续停留在 55 ℃」与「一旦完成即刻降温」之间的差别。

|**［此处插入图片 —— 文件名：gen2\-optical\-electrical\-block\.png］**<br>*用框图即可，不需要光学制图。撰写提示：平台期判据是设计设定值，不是实测阈值——措辞须为「控制器的设计是在拟合曲线出现平台期时触发降温」，绝不可写成已观察到的结果。*|
|---|

图 5 ｜ 第二代的光路与电气连接，以控制器（90）为中心节点。

### 6\.3  一舱完成的完整工艺链

由于已具备主动制冷与穿刺加样接口，舱体得以同时容纳富集步骤与反应步骤本身。设计流程为：对空舱进行紫外灭菌 → 反应管装入承载模块，合盖并周向紧固使环形密封圈（24）受压变形 → 于 55 ℃ 进行环化，可选择开启荧光监测 → 降温至 4 ℃ → 以针头穿刺自复位弹性密封隔垫（611）注入 RNase R，全程不破坏舱体密闭 → 于 37 ℃ 振荡消化 → 于 65–70 ℃ 进行酶失活 → 回到 4 ℃ → 经底部导流阀（632）导出产物。

从装管到导出，舱体全程不开启。对照前文的工艺链（点击查看第 2 章），这是本装置现在以单次操作而非接力方式覆盖的一段，该段内的暴露次数降至只剩装管一步。此处的温度与时长取自相关反应的通行条件，属于设计设定值；我们并未在任何装置上运行过它们。

|**［此处插入图片 —— 文件名：gen2\-process\-timing\.png］**<br>*时序图，由队伍自行绘制。标出第一代覆盖的区段、第二代覆盖的区段，以及各自区段内的开舱次数。*|
|---|

图 6 ｜ 第二代的变温程序与工艺覆盖范围，应与图 2 对照阅读。

### 6\.4  研发型与生产型双构型

由于荧光组件通过快拆结构安装，它实际上定义了同一台机器的两种构型。研发构型装配该组件，装置在运行中记录信号，用于条件筛选与工艺表征；生产构型则不装配，机座保留安装预留位，装置作为密闭、控温、混匀的反应器运行。二者回应的是确实不同的诉求——研发运行需要可观测性，生产运行需要固定、可维护、可重复且待验证部件更少的构型——而这一差异是通过装配或省略一个模块来满足的，而不是通过制造两台机器。

### 6\.5  ** 这次迭代由什么驱动，又不由什么驱动**

|驱动这次迭代的，是实际运行这套工艺的经验，以及把自己的设计拿去与之逐项对照的自律。不驱动它的是对装置的测试——因为并不存在可供测试的装置。第二代设计目前仅以书面规格存在，尚未提交专利申请；两代均未制造实物。|
|---|

具体而言，有四件事替代了测试：我们自己足够频繁地操作这套流程，从而切身感到它在哪里耗费时间、在哪里让材料暴露；撰写第一代权利要求，由此暴露出未定义的接口（点击查看第 5 章）；将设计与需求集合逐项核对（点击查看第 2 章）；以及在纸面上把工艺链走查一遍（点击查看第 2 章）——通量与工艺闭合这两项局限正是在走查中显现的。我们将其称为设计迭代，并刻意不称之为 DBTL 循环：此处既没有 Build 也没有 Test，使用那个术语只会引导读者去寻找并不存在的证据。

### 6\.6  两代对照

|**维度**|**第一代 —— 已申请专利**|**第二代 —— 设计稿，未申请**|**改动理由**|
|---|---|---|---|
|装管方式|V 型夹块，单管|可拆卸承载模块，4 孔、8 孔或 16 孔阵列，配开口弹性衬套|单管操作无法支持条件筛选、重复实验与批量制备。|
|温控能力|电加热导热板；仅能加热|预紧式热电堆栈；可主动降温至 4 ℃|没有制冷能力，任何较低温度的步骤都要求样品离开舱体。|
|过程监测|无|可拆卸荧光检测组件，带遮光光路|装置无从判断反应是否已达终点。|
|控制逻辑|开环，预设时长|闭环；拟合曲线出现平台期时触发降温（设计设定值）|按终点而非按时钟停止，可限制产物的热暴露。|
|工艺覆盖|仅成环|成环 → 降温 → RNase R 消化 → 灭活 → 导出|在舱外进行富集，会重新引入本装置意在消除的转移。|
|产品形态|单一|研发型（装配荧光组件）/ 生产型（不装配）|研发运行与生产运行的诉求确实不同。|
|单次运行开舱次数|装管，外加转移至下一台设备|仅装管|每一次开启都是一次 RNase 污染机会。|

表 3 ｜ 第一代与第二代的对照，以及每一处改动的理由。



## 设计文件与开源

我们拥有的全部资料均已公开。第一代由其专利附图与权利要求记录，第二代由书面规格记录。两者都不是装配手册，我们如实说明这一点——但两者合起来包含了一支具备加工条件的队伍在绘图与制造时所需的几何、零件清单与连接关系。

第一代文件包：五张专利附图的高清版、零件编号对照表、示意性物料清单（标准件可市售采购，自制件适于 3D 打印或机加工），以及许可声明。

第二代文件包：一份「Gen\-2 设计规格书」，汇集权利要求、零件编号对照表与附图说明。其中附图说明部分异常完整——它逐图规定了每张视图必须表达什么、必须标注哪些零件编号——因此它是一份可供制图人员直接使用的任务书，而不只是一段描述。我们自己没有绘制这些图纸；我们公开的是能让他人绘制的任务书。

文档以 CC BY 4\.0 许可发布。比起我们自己持有它，我们更希望有人把它造出来。

|**撰写说明 —— 发布前删除**<br>*［此处填入：仓库链接，以及下载清单——专利附图、零件编号对照表、Gen\-2 设计规格书 PDF、许可声明。］*|
|---|



## 局限与未来工作

### 8\.1  局限

两代均未制造。第一代是一件审查中的申请所对应的设计，第二代是一份我们不予申请的规格。本页没有任何内容是在硬件上测得的。

具体未经验证的项目包括：沿反应管方向及承载阵列各孔位之间的温度均一性；振荡机构在微量体系下的实际混匀效率；舱体与穿刺隔垫在反复穿刺与变温循环下的密封可靠性；荧光组件的灵敏度与动态范围，以及由此决定的——平台期是否能被足够可靠地分辨，以支撑 第二代所依赖的控制决策（点击查看第 6 章）；成本，尚未经供应商询价确定；以及候选材料在使用寿命内的耐热与耐紫外相容性。

|荧光组件尤其需要审慎对待：它在第二代的论证中承担的分量最重，而依据的证据最少。在这一尺度与这一几何构型下，管内荧光曲线的平台期是否可以作为反应完成的可靠替代指标，是一个我们尚未回答的实证问题。|
|---|



### 8\.2  下一步

若本项目有条件延续，我们建议的顺序是：制作承载模块与振荡机构的单模块功能样机——这是检验可行性估算所依赖的各项假设的最低成本途径；随后是热电温控堆栈；随后是荧光检测组件，在被信任用于驱动任何决策之前，须先针对 RNase R 消化组与未消化组对照进行测试；随后是整机集成；最后以离线 RT\-qPCR 为参照，对真实成环反应进行联测。

### 8\.3  下游接口，而不是更大的机器

circRNA 疫苗并不终止于纯化的 RNA，而是终止于成型的制剂颗粒。下一个显而易见的单元操作是脂质纳米颗粒（LNP）封装，而显而易见的问题是：它是否应当被集成进本舱体。

我们认为不应当。LNP 的形成依赖微流控快速混合——乙醇相脂质与水相 RNA 在通道中于毫秒量级完成混合，颗粒粒径分布由流量比与混合几何决定。这是一个连续流操作，其特征尺度比宏观批式振荡舱体低数个数量级。二者不共享工作体积，把它们装进同一个外壳并不会使它们成为一台装置，只会使它们成为装在同一外壳里的两台装置。

因此，第二代的底部导流阀被设计为一个标准的下游接口，而不是一个终点。微流控 LNP 模块可以对接于此，形成从成环到制剂的连续工艺链，同时让每个单元操作保持在它真正适用的尺度上。与其勉强集成，我们宁愿把接口定义清楚。

### 8\.4  移交

两代设计文件均已开放。若有具备机加工或 3D 打印能力的队伍愿意继续推进，文件就在那里，我们也很乐意听到后续进展。本装置并不局限于我们的表位或我们的疫苗——任何需要「密闭、控温、混匀的微量反应，并支持在线加样与导出」的工作，都面对同一组需求。

## 参考文献

1. Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. Nature Communications, 2018; 9: 2629\. PMID 29980681\.

2. CN212942949U —— 一种成环反应装置（中华人民共和国实用新型专利）。

|**撰写说明 —— 发布前删除**<br>*第 3–10 条待队伍补齐。需要：circRNA 疫苗综述 1–2 篇；成环效率与条件优化研究 2–3 篇；环状 RNA 的 RNase R 富集方法 1 篇；微量反应蒸发或热盖原理 1 篇；开源实验硬件 1 篇。不要引用我们没有读过的文献——§2\.1 的论证完全依赖这份清单，那里的三条论点每一条都必须可追溯到具体来源。*|
|---|



CirCure · iGEM 2026 · 硬件页正文草稿 —— 依据框架 rev\. D 撰写

