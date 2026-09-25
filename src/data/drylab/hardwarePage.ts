import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const hardwarePage: WikiPageContent = {
  "route": "/hardware",
  "category": "dry-lab",
  "chapter": "Dry Lab / 03 of 04",
  "eyebrow": "Hardware · CirCore",
  "title": "Hardware",
  "lede": "CirCore — an integrated reaction device for the circularisation step of circRNA vaccine manufacture.",
  "boundary": "Neither generation has been built. This page describes design-stage hardware and does not claim measured performance.",
  "visual": "hardware-schematic",
  "visualLabel": "Design-stage hardware artwork pending",
  "visualSteps": [
    "Gen 1",
    "Process",
    "Gen 2"
  ],
  "facts": [],
  "sections": [
    {
      "id": "hardware-overview",
      "index": "01",
      "kicker": "01 / Overview",
      "navLabel": "Overview",
      "title": "Overview",
      "summary": "CirCore is an integrated reaction device designed for one specific step of circRNA vaccine manufacture: the covalent circularisation of a linear RNA precursor, together with the RNase R enrichment that follows it. It is designed to hold that sequence inside a single sealed, temperature-controlled, actively mixed chamber, so that the reaction does not have to be passed between instruments while it is running.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-overview-what-circore-is",
          "index": "1.1",
          "title": "What CirCore is"
        },
        {
          "type": "image-placeholder",
          "filename": "gen1-overview.png",
          "instruction": "*Use patent Fig. 1 at full resolution. The caption must state that this is a patent figure of a design-stage device.",
          "caption": "Figure 1 | First-generation device, overall structure."
        },
        {
          "type": "split",
          "id": "hardware-overview-summary-visual",
          "prose": [
            {
              "type": "subheading",
              "id": "hardware-overview-how-the-two-generations-came-about",
              "index": "1.2",
              "title": "How the two generations came about"
            },
            {
              "type": "prose",
              "paragraphs": [
                "The CirCure platform depends on obtaining covalently closed RNA at a reproducible yield. In our pipeline this is achieved by permuted intron–exon (PIE) self-splicing — a reaction that must be held at a defined temperature in the presence of GTP and Mg²⁺, and whose product is subsequently enriched by RNase R digestion. Reviewing the equipment ordinarily used for this (dry baths, thermal cyclers, thermomixers), we found that each covers part of the requirement and none covers all of it, so in practice the reaction is run as a relay across several instruments."
              ]
            }
          ],
          "aside": {
            "type": "mini-visual",
            "label": "SYSTEM AT A GLANCE",
            "title": "One chamber, three controls",
            "items": [
              "sealed reaction space",
              "temperature control",
              "active mixing"
            ],
            "tone": "navy"
          }
        },
        {
          "type": "prose",
          "paragraphs": [
            "The first generation came out of that survey. It was our answer to the gap we had found: hold temperature, mixing and evaporation control together in one sealed chamber, so the reaction stops being passed from instrument to instrument. We completed its mechanical design in 2026 and filed a utility model patent application on it, which is currently under examination."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "But designing a device and living with a process are different things. As we went on working with the circularisation workflow ourselves — loading tubes, waiting out incubations, carrying samples across the bench for the enrichment step that follows — a second set of shortcomings came into view, and this time they were shortcomings of our own design rather than of the equipment we had set out to replace. One tube at a time is not enough for screening or for replicates. A device that can only heat cannot follow the reaction into the steps that come after it. And a device that runs to a timer cannot tell you whether the reaction has actually finished. The first generation is what the problem asked for; the second is what using the process taught us to ask for."
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "The second generation is our answer to those three, and to what followed from them. It replaces the single V-groove clamp with a removable multi-position carrier and interchangeable bushings; it replaces the heating plate with a thermoelectric stack that cools as well as heats; it adds a removable fluorescence assembly and, with it, closed-loop control that stops on the endpoint rather than on the clock; and because cooling is now available, the chamber holds the RNase R digestion and the enzyme inactivation as well as the circularisation, which brings the number of times the chamber is opened during a run down to one. The same removable assembly also gives the machine two configurations, one for development and one for production. The full comparison — seven dimensions, each with the reason for the change — is set out in the design iteration chapter "
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            }
          ]
        }
      ]
    },
    {
      "id": "hardware-motivation",
      "index": "02",
      "kicker": "02 / Motivation",
      "navLabel": "Motivation",
      "title": "Motivation — the engineering bottleneck in circularisation",
      "summary": "Sensitivity to reaction conditions. PIE self-splicing is a GTP- and Mg²⁺-dependent ribozyme reaction, and the efficiency with which the precursor closes is governed by the temperature and ionic conditions under which it is held (Wesselhoeft et al., 2018). A departure from the intended temperature, or drift in Mg²⁺ concentration, acts on the completeness of splicing rather than merely on its rate — which makes thermal uniformity a determinant of yield, not a convenience.",
      "blocks": [
        {
          "type": "split",
          "id": "hardware-motivation-summary-visual",
          "prose": [
            {
              "type": "subheading",
              "id": "hardware-motivation-known-engineering-challenges-in-pie-mediated-circularisation",
              "index": "2.1",
              "title": "Known engineering challenges in PIE-mediated circularisation"
            },
            {
              "type": "prose",
              "paragraphs": [
                "The product requires post-hoc enrichment. In vitro circularisation yields a mixture of circular product and residual linear precursor, and RNase R digestion is routinely used to enrich the circular fraction. Every enrichment step lengthens the process chain and costs material. Improving the consistency of the circularisation reaction itself therefore reduces how heavily the process must lean on downstream clean-up — this is the reasoning behind the \"single-step circularisation\" goal stated in our own protocol, and it is the reasoning behind this device."
              ]
            }
          ],
          "aside": {
            "type": "mini-visual",
            "label": "ENGINEERING BOTTLENECK",
            "title": "Three pressures on one workflow",
            "items": [
              "reaction conditions",
              "post-hoc enrichment",
              "microvolume interference"
            ],
            "tone": "care"
          }
        },
        {
          "type": "prose",
          "paragraphs": [
            "Physical interference at microvolume scale. Reactions of a few tens of microlitres, held for tens of minutes at elevated temperature, are exposed to evaporative loss and to condensation on the tube wall above the liquid. Both alter the effective concentration of the reaction — including the concentration of the Mg²⁺ to which the reaction is sensitive. Non-uniform heating along the liquid column has the same character of effect. This is why thermal cyclers carry heated lids, and it is why we treat evaporation control as a first-order requirement rather than a refinement."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-motivation-where-these-fall-in-our-own-process-chain",
          "index": "2.2",
          "title": "Where these fall in our own process chain"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Our circularisation chain runs: linearised plasmid → T7 in vitro transcription (37 °C) → DNase I template removal → LiCl precipitation → circularisation (55 °C, GTP/Mg²⁺) → RNase R enrichment → RT-qPCR with divergent and convergent primers, with back-splice junction sequencing as direct confirmation."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Three of these steps — transcription, circularisation, digestion — are incubations at three different temperatures, and the enrichment follows immediately from the reaction it is meant to clean up. On a conventional bench each is a separate instrument, and each transition means opening a tube, transferring the sample, and interrupting the thermal condition. The number of open-tube operations is the number of opportunities for RNase contamination of a material that is being handled carefully precisely because it is nuclease-sensitive."
          ]
        },
        {
          "type": "image-placeholder",
          "filename": "process-chain.png",
          "instruction": "*Flow diagram, drawn by the team. Mark on it: which step each of the three challenges in 2.1 acts on; every instrument change; every open-tube operation.",
          "caption": "Figure 2 | The circularisation process chain, with instrument changes and open-tube operations marked."
        },
        {
          "type": "subheading",
          "id": "hardware-motivation-why-existing-equipment-is-not-sufficient",
          "index": "2.3",
          "title": "Why existing equipment is not sufficient"
        },
        {
          "type": "prose",
          "paragraphs": [
            "The table below compares the capabilities of the instruments ordinarily available to us against the requirement set of the circularisation step. Entries are drawn from published specifications of these instrument classes."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Requirement",
            "Dry bath",
            "Thermal cycler",
            "Thermomixer",
            "CirCore Gen 1",
            "CirCore Gen 2"
          ],
          "rows": [
            [
              "Precise temperature control",
              "✓",
              "✓",
              "✓",
              "✓",
              "✓"
            ],
            [
              "Active cooling",
              "✗",
              "✓",
              "△",
              "✗",
              "✓"
            ],
            [
              "Active mixing during incubation",
              "✗",
              "✗",
              "✓",
              "✓",
              "✓"
            ],
            [
              "Evaporation suppression",
              "✗",
              "✓",
              "△",
              "✓",
              "✓"
            ],
            [
              "Sealed addition and withdrawal",
              "✗",
              "✗",
              "✗",
              "✓",
              "✓"
            ],
            [
              "Pressure equalisation with filtration",
              "✗",
              "✗",
              "✗",
              "✓",
              "✓"
            ],
            [
              "In-situ decontamination",
              "✗",
              "✗",
              "✗",
              "✓",
              "✓"
            ],
            [
              "Multi-diameter tube compatibility",
              "△",
              "✗",
              "△",
              "✓",
              "✓"
            ],
            [
              "Batch throughput",
              "✓",
              "✓",
              "✓",
              "✗",
              "✓"
            ],
            [
              "In-process monitoring",
              "✗",
              "△",
              "✗",
              "✗",
              "✓"
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Table 1 | Capability matrix."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "△ marks a capability present on some models or only partially."
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "To be fair, no individual row here is beyond existing equipment. The difficulty is that no single instrument covers the set, so the reaction is run as a relay — and it is the relay, rather than any one instrument's shortcoming, that introduces the transfers, the thermal interruptions and the exposure events described alongside it "
            },
            {
              "text": "",
              "target": "hardware-motivation",
              "label": "(click to see Chapter 2)"
            }
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-motivation-what-already-exists-and-where-it-stops",
          "index": "2.4",
          "title": "What already exists, and where it stops"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Before committing to a design we surveyed what was already available, across three categories: the general-purpose instruments on our own bench, commercial instruments that already integrate more than one of the functions we needed, and the patent literature."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "General-purpose instruments were the starting point, and the capability matrix above summarises where each stops. A dry bath holds temperature and nothing else. A thermal cycler holds temperature well, cools actively and carries a heated lid, but it is built around a closed block that cannot be agitated and cannot be opened to the sample mid-run. An orbital shaker mixes but does not control temperature closely."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "The closest existing answer is the thermomixer — the class of instrument that already combines a temperature-controlled block with orbital agitation, and in better models with a heated lid and Peltier cooling as well. To be fair to it, we should be clear: on the two requirements we started from, temperature and mixing, a thermomixer is a good instrument, and we are not claiming to improve on it. Where it stops is elsewhere. Its block is open to the room, so every addition and every withdrawal means opening a tube; it has no filtered pressure path because it does not need one; it offers no in-situ decontamination; and it has no way of observing the reaction it is running. Those are the requirements that arise once you decide the sample should not leave the chamber, and they are what CirCore is actually about."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "In the patent literature we found one document with a similar title. CN212942949U discloses a \"circularisation reaction device\" comprising a vapour-phase evaporation tank, a vapour collection unit, an internal flow-guiding assembly and a heat exchanger with a circulating liquid loop. Despite the shared term, it is directed at the scaled production of glycolide and lactide; its architecture is a circulating bulk reactor optimised for material recovery, and it does not address microvolume nucleic-acid reactions. We record it here because it is the nearest prior document by name, and because the distinction matters for the scope of our own claims."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Taken together, the survey left us with three deficiencies to design against: clamping arrangements that do not accommodate tubes of differing diameter and can loosen under agitation; low functional integration, which forces the chamber to be opened repeatedly during a run; and weak provision for in-situ decontamination and operator safety in an enclosed, heated space."
          ]
        }
      ]
    },
    {
      "id": "hardware-gen1",
      "index": "03",
      "kicker": "03 / First-generation design",
      "navLabel": "First-generation design",
      "title": "First-generation design — five functional modules",
      "summary": "The device is organised around a reaction chamber (1) mounted on a chamber base (2), closed by a lid (18) secured with quick-release fasteners (22). Inside, a support carriage (4) slides on the base and carries the reaction tube (12); the carriage is driven in oscillation by one motor and the tube clamp by a second. Five functional groups follow.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-gen1-system-overview",
          "index": "3.1",
          "title": "System overview"
        },
        {
          "type": "image-placeholder",
          "filename": "gen1-exploded.png",
          "instruction": "*Use patent Fig. 2 or Fig. 3. Place the component-number key table immediately after it.",
          "caption": "Figure 3 | Exploded view of the first-generation device"
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-module-a-self-adaptive-clamping",
          "index": "3.2",
          "title": "Module A — self-adaptive clamping"
        },
        {
          "type": "prose",
          "paragraphs": [
            "A push–pull assembly (5) — a rotating frame (501) driven by a motor, with connecting rods (502) at both ends — drives a clamp seat (6) carrying clamp blocks (7). Each block is cut with a V-groove, and two guide blocks (8) run in matching slots on the support carriage to keep the motion square. The V-groove is the design decision here: a single geometry seats tubes of different diameter on two contact lines rather than one face, so one clamp covers the common tube sizes without interchangeable jaws, and the seating tightens rather than slackens as the clamp closes."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-module-b-linear-oscillation-mixing",
          "index": "3.3",
          "title": "Module B — linear oscillation mixing"
        },
        {
          "type": "prose",
          "paragraphs": [
            "An eccentric wheel (303), driven by its own motor (17), acts through a connecting rod (302) and a link bar (301) to reciprocate the support carriage (4) along guide strips (9) in the chamber base. The result is a linear reciprocating motion of the tube during incubation. We chose linear reciprocation over magnetic stirring because a microvolume reaction should not have a stir bar introduced into it — the bar is an added surface, an added cleaning burden and an added contamination route — and over orbital shaking because the reciprocating mechanism shares a base with the clamping mechanism, which keeps the moving assembly compact."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-module-c-thermal-core",
          "index": "3.4",
          "title": "Module C — thermal core"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Heating is applied from two directions. An electric heating and heat-conducting plate (10) at the centre of the support carriage heats the tube from below, regulated by a thermoelectric temperature-control element (11). On the inner face of the lid, a heating element (19) warms an elastic pressing hot lid (20), which bears on the top of the tube. The lower element holds the reaction at its setpoint; the upper element keeps the headspace above the liquid warmer than the liquid, which suppresses condensation on the tube wall and therefore the concentration drift described in §2.1. The principle is the same as the heated lid of a thermal cycler."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-module-d-sealed-fluid-path",
          "index": "3.5",
          "title": "Module D — sealed fluid path"
        },
        {
          "type": "prose",
          "paragraphs": [
            "The reaction tube (12) carries a sterile injection port (13) at the top and a drain port (14) at the bottom, so reagent can be added and product withdrawn without opening the chamber. Because a sealed chamber whose contents are being heated will otherwise build or lose pressure, the chamber wall carries a vent channel (15) closed by a hydrophobic microporous filter membrane (16): the membrane passes gas to equalise pressure while blocking droplets and aerosol. This pairing is what allows the chamber to be both sealed and thermally cycled."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-module-e-decontamination-and-safety-interlock",
          "index": "3.6",
          "title": "Module E — decontamination and safety interlock"
        },
        {
          "type": "prose",
          "paragraphs": [
            "A UV source (23) on the chamber allows the empty chamber to be irradiated before a run. A lid-closure detection switch on the inner wall of the lid (18) is wired in series with the UV supply circuit, so opening the lid removes power from the source. This is a hardware interlock rather than a software one, which is deliberate: the protection should not depend on the controller behaving correctly. Heat generated during a run is carried away through a cooling duct (21) with a fan."
          ]
        },
        {
          "type": "image-placeholder",
          "filename": "uv-interlock-state.png",
          "instruction": "*State or block diagram, drawn by the team. No engineering drawing required.",
          "caption": "Figure 4 | UV interlock logic. The lid-closure switch is wired in series with the UV supply circuit."
        },
        {
          "type": "subheading",
          "id": "hardware-gen1-operating-sequence",
          "index": "3.7",
          "title": "Operating sequence"
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "Standby → UV decontamination of the empty chamber → tube loaded and clamped → lid closed and fastened → ramp to setpoint → hold at temperature with oscillation → sampling through the sealed ports → cool down → drain. The first generation covers the circularisation incubation; it does not cover the RNase R digestion that follows, which is one of the four limitations that motivated the second generation "
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            }
          ]
        }
      ]
    },
    {
      "id": "hardware-derived",
      "index": "04",
      "kicker": "04 / Design derivation",
      "navLabel": "How the design was derived",
      "title": "How the design was derived",
      "summary": "Enclosing them raised requirements that had not existed before enclosure. A sealed chamber under thermal load needs a pressure path, and a pressure path through an unfiltered opening is a contamination path — hence the vent channel with a hydrophobic membrane. A chamber that is not opened between steps needs a way to add reagent and remove product — hence the septum port and the drain port. A chamber that is now a small enclosed volume handling nuclease-sensitive material invites in-situ decontamination — hence the UV source, and, because a UV source inside an openable chamber is an exposure hazard, the lid interlock. Modules D and E are consequences of the decision to integrate, not independent features.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-derived-from-requirement-to-architecture",
          "index": "4.1",
          "title": "From requirement to architecture"
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "We did not begin from a device concept. We began from the requirement set laid out earlier "
            },
            {
              "text": "",
              "target": "hardware-motivation",
              "label": "(click to see Chapter 2)"
            },
            {
              "text": " and asked what would have to be true of an instrument that met it. Reaction consistency depends on temperature, on mixing and on evaporation control — so a device needs all three. But if the three are provided by three instruments, the sample must be moved between them, and moving the sample interrupts exactly the conditions the three are maintaining; the benefit is spent on the transfers. The three therefore have to be held in one chamber."
            }
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-derived-design-decisions-and-alternatives-considered",
          "index": "4.2",
          "title": "Design decisions and alternatives considered"
        },
        {
          "type": "table",
          "headers": [
            "Decision",
            "Alternatives considered",
            "Chosen",
            "Reason"
          ],
          "rows": [
            [
              "Mixing method",
              "Magnetic stirring / orbital shaking / linear reciprocation",
              "Linear reciprocation",
              "No stir bar is introduced into a microvolume reaction; the mechanism shares a base with the clamping mechanism, keeping the moving assembly compact."
            ],
            [
              "Tube adaptation (Gen 1)",
              "Interchangeable jaws / spring clamp / V-groove",
              "V-groove",
              "One geometry seats several diameters on two contact lines, and the seating tightens rather than slackens as the clamp closes."
            ],
            [
              "Heating direction",
              "Bottom only / bottom plus heated lid",
              "Bottom plus heated lid",
              "Holding the headspace above the liquid temperature suppresses wall condensation and the concentration drift that follows from it."
            ],
            [
              "Pressure handling",
              "Fully rigid sealed chamber / open vent / filtered vent",
              "Filtered vent",
              "A sealed chamber under thermal load needs a pressure path, and an unfiltered path is a contamination path."
            ],
            [
              "UV safety",
              "Software lockout / hardware interlock",
              "Hardware interlock",
              "Operator protection should not depend on the controller behaving correctly."
            ],
            [
              "Endpoint control (Gen 2)",
              "Fixed timer / in-process monitoring",
              "In-process monitoring",
              "Stopping on the endpoint rather than on the clock avoids holding a finished reaction at temperature."
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Table 2 | Design decisions and the alternatives considered."
          ]
        }
      ]
    },
    {
      "id": "hardware-patent",
      "index": "05",
      "kicker": "05 / Patent",
      "navLabel": "The patent",
      "title": "The patent",
      "summary": "We filed a utility model patent application on the first-generation device and it is currently under examination. A utility model protects the structural configuration of a device rather than a method or a chemical composition, which is the right instrument for what we had: a mechanical arrangement of chamber, carriage, clamp, thermal path and vent, defined by how the parts connect rather than by what is run inside them.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-patent-filing",
          "index": "5.1",
          "title": "Filing"
        },
        {
          "type": "table",
          "headers": [
            "EDITORIAL NOTE — delete before publishing<br>[Insert here: application number, filing date, and current status. Write the status as filed / under examination — never as granted or patented until the grant notice actually arrives, and come back and update this line if it does. The second generation is not being filed at all; describe it only as a design specification.]"
          ],
          "rows": [
            [
              "---"
            ]
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-patent-drafting-the-claims-was-a-design-review",
          "index": "5.2",
          "title": "Drafting the claims was a design review"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Curiously, the most useful review this design received was not one we planned. A claim has to state, for every component, what it connects to and how — sliding, rotating, fixed, in series, in thermal contact. Writing that out forced us to define interfaces we had left implicit in the concept drawings, and several of them turned out to be undefined rather than merely unstated. The requirement of structural unity disciplined the scope in the same way: a feature that did not belong to one coherent structure had to be either justified as part of it or dropped."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "We mention this because it is transferable. Any team with a hardware design, whether or not they intend to file, can get the same effect by writing their design as if it were a claim set — component by component, connection by connection. It is a slow way to read your own drawing, and that is exactly why it finds things."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-patent-why-a-patented-design-is-also-released-openly",
          "index": "5.3",
          "title": "Why a patented design is also released openly"
        },
        {
          "type": "prose",
          "paragraphs": [
            "A reasonable question is why we did both. Our position is that the filing and the open release serve the same end. Securing the right prevents a third party from claiming the structure later and using that claim to restrict academic use of it. Publishing the design files under an open licence ensures that academic and non-commercial users can build and modify the device without asking us. We are not seeking to restrict use of this design; we are seeking to keep it usable. This release is made after the filing date, so it does not affect the pending application; the second-generation design is published deliberately and freely, since we do not intend to file on it."
          ]
        }
      ]
    },
    {
      "id": "hardware-gen2",
      "index": "06",
      "kicker": "06 / Design iteration",
      "navLabel": "Design iteration",
      "title": "Design iteration — the second generation",
      "summary": "Throughput. The V-groove clamp holds one tube. A design that can only run one reaction at a time cannot support condition screening, replicates, or batch preparation. The second generation replaces it with a removable tube-carrier module (30) presenting a 4-, 8- or 16-position array. Diameter adaptation moves from the clamp geometry to a removable bushing (32) seated in a stepped bore (31a) and located by a flange (321); the bushing is split along its axis (322) so it grips elastically, and carries an O-ring groove (323) on its outer face. Tube compatibility is now a consumable choice rather than a mechanism.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-gen2-four-limitations-of-the-first-generation",
          "index": "6.1",
          "title": "Four limitations of the first generation"
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "Chapter 1 gave the short version "
            },
            {
              "text": "",
              "target": "hardware-overview",
              "label": "(click to see Chapter 1)"
            },
            {
              "text": " Here are the four limitations in full, each set against the change in the second generation that answers it. Three of them we ran into while working the process; the fourth follows from the second."
            }
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "Unidirectional temperature control. The first generation heats; it cannot actively cool. That confines it to a single incubation, because any subsequent step at a lower temperature requires the sample to leave the chamber. The second generation replaces the heating plate with a thermoelectric stack: a heat-conducting block (51) in thermal contact with the carrier module, a thermoelectric element (52), and a heat sink with fins (531) and fan (532). The three are clamped together by through-bolts (54) with spring washers (55), which hold contact pressure across the interfaces as the stack expands and contracts. Active cooling to 4 °C is the precondition for everything the second generation does with the process chain "
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            }
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "The process is not observable. The first generation runs to a preset time. Whether the reaction has reached its endpoint at that moment is not known to the device, so the operator either stops early and loses yield, or holds longer than necessary and exposes the product to prolonged heat. The second generation adds a removable fluorescence detection assembly (180)"
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            }
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "The process chain is not closed. The first generation covers circularisation only; the RNase R enrichment that follows still requires the sample to be moved to another instrument, which reintroduces exactly the transfer and exposure events the device was meant to remove. The second generation extends the temperature programme to cover digestion and enzyme inactivation as well"
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            }
          ]
        },
        {
          "type": "split",
          "id": "hardware-gen2-summary-visual",
          "prose": [
            {
              "type": "subheading",
              "id": "hardware-gen2-in-process-monitoring-and-closed-loop-endpoint-control",
              "index": "6.2",
              "title": "In-process monitoring and closed-loop endpoint control"
            },
            {
              "type": "prose",
              "paragraphs": [
                "The second generation carries a removable fluorescence detection assembly (180), attached to the base by a quick-release fitting (188) and connected to the controller (90) through a plug (189). Its optical path runs from an excitation source (181) through a filter assembly (182) to the tube position, with a photodetector (183) collecting the emitted signal; a shroud or labyrinth baffle (187) encloses the detection region to suppress ambient light."
              ]
            }
          ],
          "aside": {
            "type": "mini-visual",
            "label": "GEN 1 → GEN 2",
            "title": "Four limitations drive the revision",
            "items": [
              "throughput",
              "cooling",
              "observability",
              "process closure"
            ],
            "tone": "navy"
          }
        },
        {
          "type": "prose",
          "paragraphs": [
            "The point of the assembly is not the measurement but what the controller does with it. The controller is designed to fit the accumulating signal over the course of the reaction and to trigger the cooling step once the fitted curve plateaus, rather than when a preset time expires. The device stops on the endpoint instead of on the clock. For a product whose degradation is itself temperature- and time-dependent, that is the difference between holding a finished reaction at 55 °C for no reason and cooling it as soon as it is finished."
          ]
        },
        {
          "type": "image-placeholder",
          "filename": "gen2-optical-electrical-block.png",
          "instruction": "*Block diagram only; no optical drawing required. Writing note: the plateau criterion is a design setpoint, not a measured threshold — phrase it as \"the controller is designed to trigger cooling once the fitted curve plateaus\", never as an observed result.",
          "caption": "Figure 5 | Optical path and electrical connections of the second generation, with the controller (90) as the central node."
        },
        {
          "type": "subheading",
          "id": "hardware-gen2-the-full-sequence-inside-one-chamber",
          "index": "6.3",
          "title": "The full sequence inside one chamber"
        },
        {
          "type": "prose",
          "paragraphs": [
            "With active cooling and a septum port already present, the chamber can hold the enrichment step as well as the reaction. The intended sequence is: UV decontamination of the empty chamber → tubes loaded into the carrier module, lid closed and tightened circumferentially so the annular seal (24) is compressed → circularisation held at 55 °C, with fluorescence monitoring optionally enabled → cooling to 4 °C → RNase R injected by needle through the self-resealing elastic septum (611), without breaking the chamber seal → digestion at 37 °C with oscillation → enzyme inactivation at 65–70 °C → return to 4 °C → product withdrawn through the bottom drain valve (632)."
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "The chamber is not opened at any point between loading and withdrawal. Read against the process chain "
            },
            {
              "text": "",
              "target": "hardware-motivation",
              "label": "(click to see Chapter 2)"
            },
            {
              "text": ", this is the stretch the device now covers as a single operation rather than as a relay, and the number of exposure events across it falls to the loading step alone. Temperatures and durations here are taken from the standard conditions for the reactions concerned and are design setpoints; we have not run them on a device."
            }
          ]
        },
        {
          "type": "image-placeholder",
          "filename": "gen2-process-timing.png",
          "instruction": "*Timing diagram, drawn by the team. Mark the segment covered by the first generation, the segment covered by the second, and the number of chamber openings across each.",
          "caption": "Figure 6 | Second-generation temperature programme and process coverage, to be read against Figure 2."
        },
        {
          "type": "subheading",
          "id": "hardware-gen2-two-configurations-from-one-platform",
          "index": "6.4",
          "title": "Two configurations from one platform"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Because the fluorescence assembly attaches through a quick-release fitting, it defines two configurations of the same machine. In the development configuration the assembly is fitted, and the device records signal during the run for condition screening and process characterisation. In the production configuration it is omitted; the base retains the mounting provision, and the device operates as a sealed, temperature-controlled, mixed reactor. The two respond to genuinely different priorities — a development run wants observability, a production run wants a fixed, maintainable, reproducible configuration with fewer parts to qualify — and they are met by fitting or omitting one module rather than by building two machines."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen2-the-nature-of-this-iteration",
          "index": "6.5",
          "title": "The nature of this iteration"
        },
        {
          "type": "table",
          "headers": [
            "What drove this iteration was the experience of running the process and the discipline of reviewing our own design against it. What did not drive it was testing a device, because there is no device to test. The second-generation design exists as a written specification; it has not been filed as a patent, and no physical build of either generation has been made."
          ],
          "rows": [
            [
              "---"
            ]
          ]
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "Concretely, four things stood in for testing: handling the workflow ourselves often enough to feel where it costs time and where it exposes material; writing out the first-generation claims, which exposed undefined interfaces "
            },
            {
              "text": "",
              "target": "hardware-patent",
              "label": "(click to see Chapter 5)"
            },
            {
              "text": "; checking the design against the requirement set item by item "
            },
            {
              "text": "",
              "target": "hardware-motivation",
              "label": "(click to see Chapter 2)"
            },
            {
              "text": "; and walking the process chain through the device on paper "
            },
            {
              "text": "",
              "target": "hardware-motivation",
              "label": "(click to see Chapter 2)"
            },
            {
              "text": ", which is where the throughput and process-closure limitations became visible. We call this a design iteration, and deliberately not a design–build–test–learn cycle: there is no build and no test here, and using that term would invite the reader to look for evidence that does not exist."
            }
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-gen2-generation-comparison",
          "index": "6.6",
          "title": "Generation comparison"
        },
        {
          "type": "table",
          "headers": [
            "Dimension",
            "Gen 1 — patent filed",
            "Gen 2 — specification, not filed",
            "Reason for the change"
          ],
          "rows": [
            [
              "Tube holding",
              "V-groove clamp, single tube",
              "Removable carrier module, 4-, 8- or 16-position array with split elastic bushings",
              "Single-tube operation cannot support condition screening, replicates or batch preparation."
            ],
            [
              "Temperature control",
              "Electric heating plate; heating only",
              "Preloaded thermoelectric stack; active cooling to 4 °C",
              "Without cooling, any lower-temperature step requires the sample to leave the chamber."
            ],
            [
              "Process monitoring",
              "None",
              "Removable fluorescence assembly with shrouded optical path",
              "The device could not tell whether the reaction had reached its endpoint."
            ],
            [
              "Control logic",
              "Open-loop, preset duration",
              "Closed-loop; cooling triggered on curve plateau (design setpoint)",
              "Stopping on the endpoint instead of the clock limits the thermal exposure of the product."
            ],
            [
              "Process coverage",
              "Circularisation only",
              "Circularisation → cooling → RNase R digestion → inactivation → withdrawal",
              "Enrichment outside the chamber reintroduces the transfers the device exists to remove."
            ],
            [
              "Configurations",
              "Single",
              "Development (fluorescence fitted) / production (omitted)",
              "Development and production runs have genuinely different priorities."
            ],
            [
              "Chamber openings per run",
              "Loading, plus transfer to the next instrument",
              "Loading only",
              "Each opening is an opportunity for RNase contamination."
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Table 3 | First generation against second generation, and the reason for each change."
          ]
        }
      ]
    },
    {
      "id": "hardware-release",
      "index": "07",
      "kicker": "07 / Design files & open release",
      "navLabel": "Design files and open release",
      "title": "Design files and open release",
      "summary": "Everything we have is published. The first generation is documented by its patent drawings and claims; the second generation is documented by a written specification. Neither is a build manual, and we say so — but between them they contain the geometry, the component list and the connection relationships that a team with fabrication access would need in order to draw and build the device.",
      "blocks": [
        {
          "type": "prose",
          "paragraphs": [
            "First-generation package: the five patent figures at full resolution, the component-number key, an indicative materials list (standard parts commercially available; custom parts suitable for 3D printing or machining), and the licence statement."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Second-generation package: a \"Gen-2 Design Specification\" document assembling the claims, the component-number key and the drawing specification. The drawing specification is unusually complete — it states, figure by figure, what each view must show and which component numbers must be labelled on it — which makes it a working brief for a draftsperson rather than a description. We have not drawn the figures ourselves; we are releasing the brief that would let someone else do so."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Documentation is released under CC BY 4.0. We would rather someone build this than that we hold it."
          ]
        },
        {
          "type": "table",
          "headers": [
            "EDITORIAL NOTE — delete before publishing<br>[Insert here: repository link, and the download list — patent figures, component key, Gen-2 Design Specification PDF, licence.]"
          ],
          "rows": [
            [
              "---"
            ]
          ]
        }
      ]
    },
    {
      "id": "hardware-limitations",
      "index": "08",
      "kicker": "08 / Limitations & future work",
      "navLabel": "Limitations and future work",
      "title": "Limitations and future work",
      "summary": "Neither generation has been built. The first generation is a design whose application is under examination; the second is a specification we are not filing. Nothing on this page has been measured on hardware.",
      "blocks": [
        {
          "type": "subheading",
          "id": "hardware-limitations-limitations",
          "index": "8.1",
          "title": "Limitations"
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "Specifically unverified: thermal uniformity along the tube and across the carrier array; the actual mixing efficiency of the oscillation mechanism at microvolume; the sealing reliability of the chamber and of the septum across repeated punctures and thermal cycles; the sensitivity and dynamic range of the fluorescence assembly, and therefore whether a plateau can be resolved reliably enough to drive the control decision the second generation rests on "
            },
            {
              "text": "",
              "target": "hardware-gen2",
              "label": "(click to see Chapter 6)"
            },
            {
              "text": "; cost, which has not been established by supplier quotation; and the thermal and UV compatibility of candidate materials over a service life."
            }
          ]
        },
        {
          "type": "table",
          "headers": [
            "Admittedly, the fluorescence assembly deserves particular caution. It carries the most weight in the second-generation argument and rests on the least evidence. Whether a plateau in an in-tube fluorescence trace is a reliable proxy for reaction completion, at this scale and in this geometry, is an empirical question we have not answered."
          ],
          "rows": [
            [
              "---"
            ]
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-limitations-next-steps",
          "index": "8.2",
          "title": "Next steps"
        },
        {
          "type": "prose-linked",
          "parts": [
            {
              "text": "If the project has the opportunity to continue, the order we would follow is: complete the second-generation drawings and file; build a single-module functional prototype of the carrier and oscillation mechanism, which is the cheapest way to test the assumptions behind the feasibility estimates "
            },
            {
              "text": "",
              "target": "hardware-release",
              "label": "(click to see Chapter 7)"
            },
            {
              "text": "; then the thermoelectric stack; then the fluorescence assembly, tested against RNase R–digested and undigested controls before it is trusted to drive anything; then integration; then a run against a real circularisation reaction with off-line RT-qPCR as the reference."
            }
          ]
        },
        {
          "type": "split",
          "id": "hardware-limitations-summary-visual",
          "prose": [
            {
              "type": "subheading",
              "id": "hardware-limitations-a-downstream-interface-not-a-bigger-machine",
              "index": "8.3",
              "title": "A downstream interface, not a bigger machine"
            },
            {
              "type": "prose",
              "paragraphs": [
                "A circRNA vaccine does not end at purified RNA; it ends at a formulated particle. The obvious next unit operation is lipid nanoparticle encapsulation, and the obvious question is whether it should be integrated into this chamber."
              ]
            }
          ],
          "aside": {
            "type": "mini-visual",
            "label": "EVIDENCE BOUNDARY",
            "title": "What remains unverified",
            "items": [
              "thermal uniformity",
              "mixing efficiency",
              "sealing",
              "fluorescence endpoint"
            ],
            "tone": "care"
          }
        },
        {
          "type": "prose",
          "paragraphs": [
            "Tempting as that is, our view is that it should not. LNP formation depends on rapid microfluidic mixing — an ethanolic lipid phase and an aqueous RNA phase brought together in a channel on a millisecond timescale, where particle size distribution is set by the flow ratio and the mixing geometry. That is a continuous-flow operation at a characteristic scale several orders of magnitude below a macroscopic batch chamber under oscillation. The two do not share a working volume, and putting them in one housing would not make them one device; it would make them two devices in one housing."
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "The bottom drain valve of the second generation is therefore intended as a standard downstream interface rather than as an end point. A microfluidic LNP module could be coupled to it to form a continuous circularisation-to-formulation workflow, with each unit operation kept at the scale it actually works at. We would rather define the interface well than integrate badly."
          ]
        },
        {
          "type": "subheading",
          "id": "hardware-limitations-handover",
          "index": "8.4",
          "title": "Handover"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Both design packages are open. If a team with machining or 3D-printing capacity wants to take this further, the files are there and we would be glad to hear about it. The device is not specific to our epitopes or our vaccine — anything requiring a sealed, temperature-controlled, mixed microvolume reaction with in-line addition and withdrawal has the same requirement set."
          ]
        }
      ]
    },
    {
      "id": "hardware-references",
      "index": "09",
      "kicker": "09 / References",
      "navLabel": "References",
      "title": "References",
      "summary": "",
      "blocks": []
    }
  ],
  "links": [
    {
      "path": "/experiments",
      "label": "Experimental need"
    },
    {
      "path": "/measurement",
      "label": "Measurement"
    },
    {
      "path": "/contribution",
      "label": "Open release"
    }
  ],
  "next": {
    "path": "/games",
    "label": "Games",
    "title": "How can interactive experiences make the work explorable?"
  },
  "heroMinimal": true
};
