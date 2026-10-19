/**
 * Sustainability — SDG 9: Industry, Innovation and Infrastructure (SCALE chapter 4.2).
 *
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * The source supplied iGEM-hosted interview photographs; no local photo files are required.
 * Pure data, zero JSX.
 */

import { pdfPair, type SdgChapter, type StakeholderProfile } from "./sdgChapterContract";
import { sdg9PhotoSets } from "./sustainabilityPhotos";

const sdg9Profiles: ReadonlyArray<StakeholderProfile> = [
  {
    id: "sdg9-01",
    index: "01",
    name: "Professor Yishu Wang",
    role: "Pathology & Molecular Pathology",
    relevantStakeholder: "Professor Wang can assess whether candidate antigens are genuinely relevant to the intended patient population from the perspectives of tissue pathology, protein expression, and patient heterogeneity. Her input also helped us translate our clinical focus into more specific criteria for antigen selection.",
    challenge: "**Are our current antigen selection criteria sufficient to show that these candidates are suitable for patients with TNBC after surgery?**",
    keyInsight: "High RNA expression is only a starting point for candidate antigen screening. Before an antigen is included in vaccine design, its **protein expression, tissue localization, tumor specificity, and variation among patients** also need to be considered.",
    whatChanged: "Using the population of patients with TNBC after surgery identified under SDG 3 as our clinical foundation, **we expanded antigen evaluation beyond RNA expression to include protein expression, tissue localization, tumor specificity, and patient heterogeneity**. This helped **align candidate selection more closely with the needs of the intended population**.",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-01"],
    sdgs: [
      9,
      3
    ],
    article: {
      title: "Once We Had Defined the Target Patients, Had We Chosen the Right Antigens?",
      sections: [
        {
          blocks: [
            "As our target population became clearer, we needed to make antigen selection more specific: which candidate antigens were genuinely relevant to patients with TNBC after surgery, and what evidence would support that judgment? We consulted Professor Wang about how to evaluate candidate TNBC antigens in terms of protein expression, tissue localization, and patient heterogeneity."
          ]
        },
        {
          heading: "01 RNA Expression Is Only the Starting Point for Screening",
          blocks: [
            "Early in the project, we primarily used TNBC-related transcriptomic data to identify highly expressed candidate antigens. Professor Wang pointed out that high RNA expression does not necessarily mean that the corresponding protein is also highly expressed. For therapeutic cancer vaccines, transcript-level information alone is not enough to establish that a candidate antigen is suitable for further development as a target. RNA expression can help narrow the candidate pool, but it cannot serve as the sole basis for a final decision."
          ]
        },
        {
          heading: "02 Candidate Antigens Need Support at the Tissue and Protein Levels",
          blocks: [
            "In addition to expression levels, Professor Wang encouraged us to examine how candidate antigens appear in actual tumor tissues. Even when an antigen shows high expression in aggregated TNBC data, we still need to determine:",
            {
              bullets: [
                "Whether the corresponding protein is consistently expressed;",
                "Whether it is present in the tumor tissue of the intended patients;",
                "Whether it is also expressed in normal tissues;",
                "Whether its expression varies across different tumor regions."
              ]
            },
            "These details help determine whether a candidate can progress from “a highly expressed gene in a dataset” to a vaccine antigen with practical relevance."
          ]
        },
        {
          heading: "03 TNBC Heterogeneity Also Needs to Inform Antigen Evaluation",
          blocks: [
            "TNBC is highly heterogeneous. Even if an antigen performs well across an overall dataset, it may not cover every patient. We therefore also need to examine differences in candidate antigen expression among patients and tumor samples, avoiding overly broad conclusions based only on average expression. This means that “addressing TNBC heterogeneity” is not simply a matter of adding more antigens. First, we need sufficiently reliable patient-level and tissue-level evidence for each candidate."
          ]
        },
        {
          heading: "04｜What Changed: Bringing the Clinical Focus into Antigen Selection",
          blocks: [
            "Professor Wang’s recommendations did not change CirCure’s defined target population. They helped us apply that clinical focus more directly to our technical design. **Building on our RNA expression analysis, we added protein expression, tissue localization, tumor specificity, and patient heterogeneity to our candidate antigen evaluation.** As a result, antigen screening now asks more than “Which molecules are highly expressed in TNBC?” It also asks **whether these antigens are genuinely relevant to the patients with TNBC after surgery whom we aim to serve**, and whether they merit inclusion in subsequent vaccine design."
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-02",
    index: "02",
    name: "Mr. Qingtian Guan",
    role: "Computational Immunology & Antigen Design",
    relevantStakeholder: "Mr. Guan can assess whether our multi-epitope design is well founded from the perspectives of immunogenicity, HLA binding, and population coverage, and help us determine whether candidate epitopes form a complementary combination.",
    challenge: "**Does adding more epitopes necessarily improve coverage?**",
    keyInsight: "The value of a multi-epitope design does not depend on the number of epitopes alone. What matters is whether each epitope has suitable **immunogenicity and HLA-binding capacity**, whether the epitopes complement one another, and whether their combination can broaden potential population coverage.",
    whatChanged: "We retained the multi-antigen, multi-epitope design strategy, but **no longer use “more epitopes” as a basis for claiming broader coverage**. We now consider **immunogenicity, HLA binding, and potential population coverage** when evaluating candidate epitopes and their combinations.",
    currentStatus: "Partially Incorporated",
    photos: sdg9PhotoSets["sdg9-02"],
    sdgs: [
      9,
      3
    ],
    article: {
      title: "More Epitopes Do Not Necessarily Make a Better Vaccine",
      sections: [
        {
          blocks: [
            "After improving our criteria for evaluating candidate antigens, we needed to address a more specific question: which epitopes should we select, and how should they be combined? Because TNBC is highly heterogeneous, we hoped a multi-epitope design could broaden the vaccine’s potential coverage. Early in the project, we naturally wondered whether adding more candidate epitopes would cover more tumor features and immune backgrounds. We consulted Mr. Qingtian Guan about epitope selection, multi-epitope combinations, and HLA prediction."
          ]
        },
        {
          heading: "01 The Number of Epitopes Does Not Equal the Breadth of Coverage",
          blocks: [
            "Mr. Guan explained that multi-epitope design is not simply a matter of combining as many candidate epitopes as possible. Epitopes differ in immunogenicity, HLA-binding capacity, and potential population coverage. Adding an epitope therefore does not guarantee a corresponding increase in coverage. The key questions are **what immunological value each epitope contributes and whether it complements the others**."
          ]
        },
        {
          heading: "02 HLA Binding Makes “Coverage” More Specific",
          blocks: [
            "For T-cell epitopes, their ability to bind different HLA molecules can affect the populations in which they may be applicable. We therefore incorporated **HLA-binding prediction** into our evaluation of candidate epitopes. We considered the HLA types that different epitopes might cover and compared whether those epitopes could complement one another. This gave us a more specific understanding of broader coverage: which immune backgrounds might be covered by each epitope."
          ]
        },
        {
          heading: "03 Multi-Epitope Combinations Need Clear Selection Criteria",
          blocks: [
            "Mr. Guan’s recommendation did not reject the multi-epitope strategy. Instead, it clarified the questions that combination design needs to answer. Rather than simply adding more candidate epitopes, we now pay closer attention to each epitope’s **immunogenicity, HLA-binding capacity, and potential population coverage**, as well as **whether the final combination remains complementary and merits further validation**. The focus of multi-epitope design thus shifted from “How many more epitopes can we add?” to **“Which epitopes genuinely deserve to be included in the final combination?”**"
          ]
        },
        {
          heading: "04 What Changed | From “More Epitopes” to “A Better-Selected Combination”",
          blocks: [
            "We partially incorporated Mr. Guan’s recommendations and adjusted how we evaluate multi-epitope design. **We no longer assume that “more epitopes mean broader coverage.” Instead, we consider immunogenicity, HLA binding, and potential population coverage when deciding whether to retain candidate epitopes and whether the final combination is reasonably complementary.** For CirCure, the key question is no longer whether we have enough epitopes. It is **why we selected these epitopes and whether, together, they can provide a reasonable and complementary range of immune coverage**."
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-03",
    index: "03",
    name: "Professor Jifan Hu",
    role: "RNA & Nucleic Acid Vaccines",
    relevantStakeholder: "Professor Hu can assess whether the technical characteristics of circRNA translate into the intended vaccine effects from the perspectives of RNA vaccine mechanisms, antigen expression, and immune function.",
    challenge: "Does longer expression necessarily mean a more effective vaccine?",
    keyInsight: "The stability and sustained expression of circRNA provide a technical foundation. For a therapeutic cancer vaccine, what matters more is whether the expressed antigen can be recognized effectively by the immune system and can induce an antitumor response with functional significance.",
    whatChanged: "**We no longer evaluate circRNA’s technical advantages solely in terms of stability and sustained expression. We also examine whether antigen expression induces the expected immune response and ultimately produces functional antitumor effects.**",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-03"],
    sdgs: [
      9,
      3
    ],
    article: {
      title: "Does Longer Expression Always Mean Greater Efficacy?",
      sections: [
        {
          blocks: [
            "After completing the multi-epitope design, we needed to address another central question: can the sustained expression associated with circRNA actually translate into vaccine function?"
          ]
        },
        {
          heading: "01 Sustained Expression Is a Foundation, Not the Final Outcome",
          blocks: [
            "Professor Jifan Hu first pointed out that **“longer expression” cannot be equated directly with “a more effective vaccine.”** The stability of circRNA can provide a basis for antigen expression, but the vaccine’s effects also depend on whether the expressed antigen can be recognized and whether it subsequently initiates the intended immune response. **Sustained expression may indicate a technical advantage of the carrier, but it cannot by itself establish vaccine efficacy.**"
          ]
        },
        {
          heading: "02 Antigen Expression Needs to Lead to Immune Function",
          blocks: [
            "For CirCure, the most important questions are not simply how much antigen is expressed or for how long, but what happens after expression. If the expressed antigen cannot be presented and recognized effectively, longer expressions alone cannot produce the intended therapeutic value. We therefore extended our evaluation to the immune effects following antigen expression. These include **DC maturation, T-cell responses, and subsequent functional validation**. This helps us determine whether the expression properties of circRNA translate into immune function."
          ]
        },
        {
          heading: "03 Technical Advantages Need Support from Functional Results",
          blocks: [
            "This recommendation also changed how we evaluate circRNA’s technical advantages. We continue to examine circRNA stability and expression, but **we no longer infer improved antitumor effects directly from more stable or sustained expression**. Instead, these technical characteristics need to be assessed alongside subsequent immune experiments. For CirCure, the significance of circRNA lies not only in providing a stable RNA expression format, but also in whether it can support the expected immune functions that follow."
          ]
        },
        {
          heading: "04 What Changed | Looking Beyond Expression to Functional Value",
          blocks: [
            "We incorporated Professor Jifan Hu’s recommendation. While continuing to assess circRNA stability and expression, **we strengthened our evaluation of immune activation and functional antitumor effects**. We now ask not only “Can circRNA support stable expression?” but also **“Can this expression produce an immune response with functional significance?”** This shifts CirCure’s assessment of circRNA beyond the technical properties of the carrier and toward the function the vaccine is intended to achieve."
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-04",
    index: "04",
    name: "Professor Tiesuo Zhao",
    role: "RNA Immune Recognition & Self-adjuvant Effect",
    relevantStakeholder: "Professor Zhao can explain how circRNA may participate in immune regulation through innate immune recognition and a self-adjuvant effect, and how these effects may interact with antigen expression.",
    challenge: "Apart from the antigen it encodes, could circRNA itself contribute to the immune activation we observe?",
    keyInsight: "RNA is not a completely neutral expression carrier. It may itself be recognized by the innate immune system and produce a self-adjuvant effect. This effect is not necessarily beneficial in every case: excessive innate immune stimulation may also affect RNA translation and antigen expression.",
    whatChanged: "**We no longer attribute all observed immune activation to the encoded antigen.** In interpreting our results, we also account for the possibility that the RNA platform itself contributes innate immune effects and treat this as an important question for **future mechanistic validation**.",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-04"],
    sdgs: [
      9,
      3
    ],
    leadIn: [
      "Professor Jifan Hu's recommendation led us to ask whether circRNA expression could truly translate into immune function. During discussions at a regional meeting in Northeast China, a further question arose: if we observed strong immune activation, was it entirely due to antigen expression, or could circRNA itself also contribute? This discussion drew our attention to RNA immune recognition and prompted us to ask Professor Tiesuo Zhao about the potential self-adjuvant effect of circRNA."
    ],
    article: {
      title: "Could circRNA Itself Be Participating in the Immune Response?",
      sections: [
        {
          blocks: [
            "As we examined the immune functions that follow circRNA expression, we identified a question we had not fully considered: apart from encoding the antigen, might the RNA molecule itself participate in the immune response?"
          ]
        },
        {
          heading: "01 RNA Is Not a Completely Passive Expression Carrier",
          blocks: [
            "Professor Zhao pointed out that RNA not only carries genetic information and supports antigen expression; it may also be recognized by the innate immune system. This recognition means that the RNA platform does not simply “express the antigen.” The RNA molecule itself may participate in the immune response induced by the vaccine. We therefore began to treat **the immunogenicity of the RNA itself as a factor that needs to be considered separately** when evaluating circRNA vaccines."
          ]
        },
        {
          heading: "02 A Self-Adjuvant Effect Offers Another Mechanistic Explanation",
          blocks: [
            "Immune recognition triggered by RNA itself may produce a self-adjuvant effect. In other words, circRNA may contribute to immune priming through its own recognition, in addition to supporting antigen expression. We therefore cannot explain subsequent immune responses only by asking whether expression is more stable or whether more antigen is produced. We also need to consider whether the RNA molecule itself changes the immune environment. This expanded our understanding of the circRNA platform beyond that of a simple expression carrier to include its potential immunological effects."
          ]
        },
        {
          heading: "03 Platform Effects May Also Introduce New Constraints",
          blocks: [
            "Professor Zhao also cautioned us against treating this immune recognition as an unqualified advantage. **Excessive innate immune stimulation could affect RNA translation and antigen expression, and might increase unnecessary inflammatory responses.** Whether the self-adjuvant effect is beneficial must therefore be assessed alongside expression and immune results; **stronger immune activation alone is not sufficient to support that conclusion**. The immunological effects of the circRNA platform may help initiate an immune response, but they may also become a variable that affects its performance."
          ]
        },
        {
          heading: "04 What Changed | Including RNA Self-Recognition in Our Evaluation",
          blocks: [
            "Professor Zhao’s recommendation directly affected our subsequent control design and interpretation of results. When comparing the immune effects of circRNA vaccines, we no longer look only at the overall strength of the final immune response. **By including controls with different RNA conditions, we further distinguish antigen-specific immune effects from potential innate immune effects caused by the RNA platform itself.** We also no longer present the potential self-adjuvant effect of RNA as an established technical advantage. Instead, **we leave room for further validation using innate immune markers and mechanistic experiments**. After discussing antigen selection, multi-epitope design, circRNA expression, and RNA immune recognition, we turned to experimental validation, interpretation of results, and future research priorities. At this stage, the central question was no longer only whether we could design the vaccine and obtain the expected experimental results. We also needed to determine how appropriate experimental systems, clear controls, and reproducible validation could help establish whether these results were reliable and support a better understanding of CirCure’s technical value. Stakeholders provided feedback on research priorities, experimental design, reproducibility, functional evaluation, and translational decision-making."
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-05",
    index: "05",
    name: "Professor Junqi Niu",
    role: "Evidence Integration & Safety Validation",
    relevantStakeholder: "Professor Niu can help us assess whether the controls in our CTL killing experiments are appropriate and whether the available results genuinely support conclusions about safety, drawing on his experience in tumor immunology experimental design and data interpretation.",
    challenge: "**If normal cells are not killed, does that necessarily mean the CTLs are safe?**",
    keyInsight: "**The absence of killing in normal cells does not by itself establish CTL safety.** For HLA-A*02:01-restricted CTLs, if the normal cells are not HLA-A*02:01-positive, the CTLs may not be able to recognize them at all. The finding of “no killing” is meaningful only after HLA compatibility has been confirmed.",
    whatChanged: "We **expanded the normal-cell controls from one cell line to four**, representing vascular endothelium, liver, lung, and breast, and **confirmed that all four were HLA-A*02:01-positive**. MCF12A and MDA-MB-231 are both breast-derived, making MCF12A our most important normal-cell control. We also tested **two effector-to-target ratios, 80:1 and 100:1**, and used a **specificity ratio** to represent the difference between CTL-mediated killing of tumor and normal cells.",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-05"],
    sdgs: [
      9,
      3
    ],
    article: {
      title: "Can the Absence of Killing in Normal Cells Establish Safety?",
      sections: [
        {
          blocks: [
            "When evaluating CTL-mediated tumor killing, we also needed to determine whether the CTLs might attack normal tissues. Initially, we planned to select one normal cell line and test it alongside MDA-MB-231. If the CTLs killed the tumor cells but not the normal cells, we thought this might provide preliminary evidence of tumor specificity. Our discussion with Professor Junqi Niu revealed a critical flaw in this design."
          ]
        },
        {
          heading: "01 “Not Killed” May Simply Mean the CTLs Cannot Recognize the Cells",
          blocks: [
            "Our CTLs are HLA-A*02:01-restricted. This means that target cells must present the corresponding antigen peptide through HLA-A*02:01 in order to be recognized by the CTLs. If the selected normal cells do not express HLA-A*02:01, the absence of observed killing cannot establish that they are safe. Another possibility is that the CTLs simply cannot recognize those cells. We therefore need to confirm a normal cell line’s HLA type before interpreting a negative killing result. **The control is valid only if the normal cells are HLA-A*02:01-positive.** Following this recommendation, we checked the HLA background of the normal cell lines used and **confirmed that all four were HLA-A*02:01-positive**. Only then could “not killed” be interpreted as meaning that these normal cells showed no marked killing despite having the conditions required for CTL recognition."
          ]
        },
        {
          heading: "02 One Normal Cell Line Cannot Represent All Normal Tissues",
          blocks: [
            "Antigen expression varies between tissues. Even if one normal cell line shows no killing, it is difficult to use that result to assess risks in other tissues. Professor Niu recommended broadening the range of normal cells to cover different tissues. We ultimately selected four normal cell lines:",
            {
              bullets: [
                "**HCAEC:** human coronary artery endothelial cells;",
                "**LX-2:** hepatic stellate cells;",
                "**BEAS-2B:** bronchial epithelial cells;",
                "**MCF12A:** normal mammary epithelial cells."
              ]
            },
            "These cell lines represent vascular, liver, lung, and breast tissues, so the experiment no longer relies on a single normal-cell result."
          ]
        },
        {
          heading: "03 MCF12A Is the Most Important Control",
          blocks: [
            "Among the four normal cell lines, MCF12A was particularly important to us. MDA-MB-231 is a breast cancer cell line, while MCF12A is a normal mammary epithelial cell line. Because they come from the same tissue, MCF12A is more likely to retain an expression background similar to that of the tumor cells and may express the relevant antigen at a low level. If the CTLs attack normal breast cells, MCF12A would be more likely than normal cells from other tissues to reveal this issue. It is therefore the most stringent and informative of the four normal-cell controls."
          ]
        },
        {
          heading: "04 Can Normal Cells Remain Safe at Higher Effector-to-Target Ratios?",
          blocks: [
            "Increasing the effector-to-target ratio often strengthens CTL-mediated killing, but a higher dose of effector cells could also increase effects on normal cells. To examine this, we tested two effector-to-target ratios: 80:1 and 100:1. In addition to comparing tumor-cell killing, we examined whether the killing rate in normal cells increased at the higher ratio. This allowed us to assess whether the antitumor effect associated with a higher CTL dose might be accompanied by reduced safety."
          ]
        },
        {
          heading: "05 How Can We Describe CTL Selectivity?",
          blocks: [
            "In addition to comparing killing rates in tumor and normal cells separately, we used a **specificity ratio** to represent the difference in CTL-mediated killing between the two cell types. The specificity ratios obtained in our experiments ranged from **21–76×**. Compared with reporting several killing rates separately, this measure more directly illustrates CTL selectivity for tumor cells."
          ]
        },
        {
          heading: "06 What Changed｜Making Negative Results Interpretable",
          blocks: [
            "The main change from this discussion was not simply the number of normal cell lines. More importantly, we re-examined the conditions required for the controls to be valid. **We expanded the normal-cell panel from one cell line to four representing multiple tissues, confirmed that all were HLA-A*02:01-positive, included MCF12A from the same tissue as the tumor cells, and compared killing of tumor and normal cells at two effector-to-target ratios.** These adjustments helped us rule out an important alternative explanation: **the normal cells were not spared simply because the CTLs could not recognize them.** This also changed how we understand “evidence integration.” Experiments do not simply form a sequence of validation steps; it is also important to clarify the conditions under which each result is valid. **Only when controls are appropriate and recognition conditions are confirmed can experimental results meaningfully support conclusions about CirCure’s efficacy and safety.**"
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-06",
    index: "06",
    name: "Professor Yuning Zhang",
    role: "Nanomedicine Delivery & Formulation",
    keyInsight: "LNP batch variability observed in the laboratory may be related to operator experience and the lack of standardized processes. It does not directly show that the same problems would persist in a mature manufacturing system. At CirCure’s current stage, the priority is to establish whether the vaccine itself can produce the intended biological effects.",
    whatChanged: "**We no longer extrapolate the LNP variability observed in our current work directly to a future industrialization barrier.** Nor did we expand our work to develop a new delivery carrier. Instead, **we continued using a mature, commercially available LNP platform and focused experimental resources on antigen expression, immune responses, and functional antitumor validation.**",
    photos: sdg9PhotoSets["sdg9-06"],
    sdgs: [
      9,
      3
    ],
  },
  {
    id: "sdg9-07",
    index: "07",
    name: "Professor Di Wu",
    role: "Tumor Immunology",
    keyInsight: "The transition from a “cold” tumor to a “hot” tumor does not hinge on an increase in any single immune marker. It depends on whether a complete immune response can be established, from **antigen presentation and T-cell recruitment and activation to effective tumor killing**.",
    whatChanged: "We reorganized the evidence logic for how CirCure might promote a “cold-to-hot” transition in TNBC. We first examine whether **antigen presentation and DC maturation initiate an immune response**, then assess **T-cell activation**, and finally use cell co-culture experiments to validate **functional killing**. **We no longer use one immune marker to claim that a tumor has become “hot.”** Instead, we treat these results as connected evidence that indicates the potential to improve the tumor immune state in our current system.",
    photos: sdg9PhotoSets["sdg9-07"],
    sdgs: [
      3,
      9
    ],
  },
  {
    id: "sdg9-08",
    index: "08",
    name: "Shanghai Lingang Research Center for Medical Equipment",
    relevantStakeholder: "The company’s medical products, which have completed development and entered practical use, provide an industry perspective on how medical technologies move from laboratory results through product development and into real-world use.",
    challenge: "**How far are laboratory results from becoming a medical product that can be used in practice?**",
    keyInsight: "Laboratory validation primarily asks whether a technology produces the intended effects. Product development must also determine whether those effects can be reproduced consistently, whether the product can be manufactured reliably and controlled for quality, and whether it can meet the conditions of real-world use. Technical feasibility is only the starting point; moving from experimental results to practical application requires further engineering, quality, and safety validation.",
    whatChanged: "The visit **did not directly change CirCure’s current experimental approach**, nor can it replace the process and clinical validation required for a therapeutic vaccine. It prompted us to **distinguish “effective in the laboratory” from “usable as a product”** and to include **stability, batch consistency, quality control, scale-up, cost, and real-world conditions of use** in our future development and Entrepreneurship analyses.",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-08"],
    sdgs: [
      9,
      3,
      17
    ],
    leadIn: [
      "These discussions clarified what CirCure needs to examine during the laboratory stage: whether candidate antigens can be expressed and presented, whether they can induce the intended immune response, and whether that response can produce selective tumor killing.",
      "Experimental results can show whether CirCure merits further research, but **they do not mean that it is ready to become a product**. As we began to consider future applications, we divided the questions into two areas. First, can the technology be manufactured consistently and meet the conditions of real-world use? Second, can it become a product with development and commercial value?",
      "To explore these questions, we conducted a field visit to a medical-device innovation company in Shanghai’s Lingang New Area and held further discussions with Hualan Biologics."
    ],
    article: {
      title: "From Experimental Results to Real-World Use",
      sections: [
        {
          blocks: [
            "In June, we visited a medical-device innovation company in Shanghai’s Lingang New Area, toured its research and production environment, and learned about the process medical products go through as they move from technical development into practical use. Until then, we had mainly evaluated CirCure from an experimental perspective: whether the vaccine could be constructed, express antigens, activate immune cells, and produce selective tumor killing. These results can help us assess whether the technology merits further research, but they cannot directly answer whether it can become a usable product. At Lingang, we encountered medical products that had moved beyond the laboratory into production and use. This led us to consider questions beyond experimental results: can a technology be manufactured consistently, maintain consistent quality, meet the requirements of real-world use, and ultimately address the clinical need that motivated its development? Medical devices and therapeutic vaccines differ in their technologies, manufacturing processes, and regulatory pathways. The visit therefore **cannot demonstrate that CirCure is ready for industrialization** or replace specialized process assessment in vaccine development. Its main contribution was to help us examine the project from a product development perspective."
          ]
        },
        {
          heading: "01 Laboratory Efficacy Does Not Mean a Product Is Ready",
          blocks: [
            "In the laboratory, we can control experimental conditions and observe whether CirCure produces the intended antigen expression, immune activation, and tumor killing. A medical product, however, cannot rely on working only in a single experiment or under a single set of ideal conditions. It needs to be manufactured consistently and maintain reliability across batches, over time, and under actual conditions of use. The visit helped us recognize that laboratory results demonstrate preliminary technical feasibility, while product development asks whether those results can be achieved consistently over time. **The two cannot be treated as equivalent.**"
          ]
        },
        {
          heading: "02 Product Development Requires a Different Set of Evaluation Criteria",
          blocks: [
            "During the visit, we saw that companies consider not only whether a product can perform its intended function, but also whether the production process is stable, quality can be controlled, and the product can meet storage, transport, and use requirements. These questions prompted us to reconsider what CirCure may need to assess in later development:",
            {
              bullets: [
                "Whether circRNA vaccines can be manufactured consistently;",
                "Whether different production batches can maintain consistency;",
                "Which indicators can be used for quality control;",
                "Whether the safety evidence is sufficient to support further development;",
                "Whether production and use costs are acceptable;",
                "Whether the product can meet the requirements of real-world healthcare settings."
              ]
            },
            "Current experiments cannot yet answer these questions, but they helped us identify what further work may be needed as the project moves from research validation toward product development."
          ]
        },
        {
          heading: "03 Clinical Value Must Be Demonstrated Through Real-World Use",
          blocks: [
            "A technology’s value cannot remain at the level of experimental results. Even if it performs well in the laboratory, it must undergo further development and validation before it can enter healthcare settings and address patient needs. CirCure has identified patients with TNBC who remain at high risk of recurrence and metastasis after surgery as its primary population of interest. The Lingang visit did not redefine this focus. It prompted us to ask whether a future product could be used consistently and safely in practice and genuinely serve this patient population. We therefore began treating **clinical need as a criterion that should inform the entire research and development process**, rather than an issue raised only at the beginning and revisited after experiments are complete."
          ]
        },
        {
          heading: "04 Considering Commercial Feasibility Alongside Product Development",
          blocks: [
            "Once we began to consider consistent manufacturing, quality control, and practical use, cost, resources, and collaboration also became part of the discussion. CirCure is still at an early stage, so we cannot yet present a mature commercialization plan. We can, however, identify factors that may influence future development, including **production costs, scale-up, quality management, intellectual property, industry partnerships, and market access**. This does not mean that CirCure has already moved from a research project to a commercial product. It means our Entrepreneurship analysis is beginning to address practical development questions rather than describing the project’s value solely in terms of technical novelty."
          ]
        },
        {
          heading: "05｜What Changed: Adopting a Product Development Perspective",
          blocks: [
            "The Lingang visit **did not directly change CirCure’s vaccine design**, nor can it replace the specialized process and clinical evaluation required for therapeutic vaccines. Its main contribution was to help us **distinguish laboratory validation from product development**. At the laboratory stage, we need to determine whether CirCure can express antigens, activate immunity, and produce selective tumor killing. At the product development stage, we would also need to validate **manufacturing stability, batch consistency, quality control, scale-up capacity, and conditions of use**. The visit therefore helped us clarify what evidence is still needed between technical feasibility and product usability. **It does not mean CirCure is already ready for industrialization.** The Lingang visit showed us that a technology must address consistent manufacturing, quality control, and practical use before it can leave the laboratory. For an early-stage vaccine project like CirCure, even a product that can be made would still need to demonstrate commercial feasibility. We therefore needed to clarify the target population, how the product differs from existing approaches, which key evidence should be prioritized, and how cost, market conditions, partnerships, and risks could affect further development. We discussed these questions with Hualan Biologics."
          ]
        }
      ]
    },
  },
  {
    id: "sdg9-09",
    index: "09",
    name: "Hualan Bio",
    role: "Biopharmaceutical Commercialization",
    relevantStakeholder: "Hualan Bio can assess CirCure’s product positioning, development value, and commercialization conditions from the perspective of a vaccine company.",
    challenge: "**How can an early-stage vaccine project progress from a research outcome to a product with development potential?**",
    keyInsight: "Technical novelty and experimental success are not sufficient to support commercialization. A project also needs to consider **clinical needs, product differentiation, evidence quality, cost, market conditions, and development risks**.",
    whatChanged: "We **incorporated product positioning, research and development priorities, market analysis, costs, industry partnerships, intellectual property, and risk management into our Entrepreneurship analysis**.",
    currentStatus: "Incorporated",
    photos: sdg9PhotoSets["sdg9-09"],
    sdgs: [
      9,
      8,
      12,
      17
    ],
    article: {
      title: "Developing Research Outcomes into Product Opportunities",
      sections: [
        {
          blocks: [
            "The Lingang visit helped us understand the product development process that medical technologies go through on their way from the laboratory to real-world use. Building on this, we wanted to consider the development pathway for CirCure as an early-stage vaccine project: how the technology could support a clear product position, how research evidence could inform subsequent decisions, and how market, cost, and partnership conditions might affect progress. We introduced Hualan Biologics to CirCure’s clinical focus on patients with TNBC who remain at high risk of recurrence after surgery, our circRNA multi-epitope vaccine design, and our research progress. We then discussed future development priorities from the perspective of a vaccine company."
          ]
        },
        {
          heading: "01 Identifying Product Value in Research Outcomes",
          blocks: [
            "CirCure has established a research foundation in candidate antigens, multi-epitope combinations, circRNA construction, and immune function. Hualan Bio’ industry perspective helped us consider what product value these technical findings might support. For an early-stage research outcome to enter product development, clinical needs, technical features, and research evidence need to align. For CirCure, this means explaining what problem the multi-antigen, multi-epitope, and circRNA design could address for the target population, and identifying which experimental results could support these technical features. We therefore began shifting our focus from **“obtaining more results” to “building key evidence that can inform development decisions,”** bringing subsequent research closer to the needs of product development."
          ]
        },
        {
          heading: "02 Using Product Positioning to Set Research Priorities",
          blocks: [
            "Product positioning connects clinical needs, technical approaches, and the market environment. The target population, existing treatment pathways, potential use scenarios, and development of comparable technologies can all affect which questions a project should prioritize. Given CirCure’s clinical focus, we considered the role it might play in the treatment pathway for TNBC after surgery and compared its potential differences from existing treatments and other cancer vaccine strategies. This perspective also informed our research planning. The team began identifying which evidence would best demonstrate CirCure’s product characteristics and using that assessment to guide subsequent validation priorities. Market analysis thus became a tool for focusing research, rather than preparation for promotion after the project is complete."
          ]
        },
        {
          heading: "03 Planning Development Through Partnerships and Risk Management",
          blocks: [
            "Therapeutic vaccine development spans research, process development, manufacturing, quality, registration, and market access. It requires contributions from people with expertise in different areas. Following Hualan Biologics’ recommendations, we began identifying the core technologies and data that the team should retain, as well as areas that might be advanced through a CDMO, joint development, or other industry partnerships. We also included **intellectual property and information protection** in our partnership planning to support technical development and future collaboration. We identified project risks related to technical validation, development timelines, funding needs, production costs, and partnership conditions. This helped the team preserve room to adapt at different stages and allocate limited research resources more thoughtfully."
          ]
        },
        {
          heading: "04 What Changed｜Bringing an Industry Perspective into Entrepreneurship",
          blocks: [
            "Our discussion with Hualan Bio led us to add product and commercial considerations to our existing analysis of the technology and clinical focus. In the Entrepreneurship section, we analyze CirCure’s development pathway in terms of **product positioning, research and development priorities, market and competition, cost structure, industry partnerships, intellectual property, and risk management**. We also connect these factors with subsequent research tasks. This has helped our commercialization thinking progress from a broad future possibility to an analytical framework that can be further developed. **At present, this analysis primarily informs early-stage research and product planning.** Scale-up costs, product pricing, market adoption, and actual returns still need to be evaluated using real data during future development."
          ]
        }
      ]
    },
  }
];

export const sdg9Chapter: SdgChapter = {
  id: "sdg9",
  headingId: "sdg9-industry",
  index: "4.3",
  title: "SDG9: Industry, Innovation and Infrastructure",
  intro: [
    "Meeting patients’ needs requires a credible path from a promising idea to a reliable technology. We chose SDG 9 to address **key uncertainties in CirCure’s antigen selection, functional validation, and future manufacturing**, with the aim of building a research foundation that can be **rigorously tested, continually improved, and developed further**.",
  ],
  stakeholders: {
    lead: [
      "Our work on SDG 3 clarified whom CirCure aims to serve: **patients with TNBC who remain at risk of recurrence and metastasis after surgery**. Reducing those risks and achieving long-term therapeutic benefits are our primary criteria for evaluating its future value. SDG 9 builds on these needs by asking: **what key technical challenges must we address to make this therapeutic concept viable?** Through the design, expression, delivery, and functional evaluation of our circRNA-based multi-epitope vaccine, we examine what is needed to move **from innovative design to reliable validation and, ultimately, translational potential**.",
      "At the outset, we identified three core technical questions: **How can the vaccine better address TNBC heterogeneity?** TNBC exhibits substantial tumor heterogeneity, so a single antigen or epitope may offer insufficient coverage. Our multi-epitope antigen design aims to accommodate a broader range of tumor characteristics and patients’ immune backgrounds.",
      "**How can we achieve more stable and sustained antigen expression?** Effective antigen expression is fundamental to nucleic acid vaccine activity. We selected circRNA as our expression platform, aiming to use its circular structure to improve RNA stability and sustain antigen expression as a basis for subsequent immune responses.",
      "**How can we demonstrate functionally meaningful antitumor immunity?** Multi-epitope design and circRNA expression do not, by themselves, establish vaccine efficacy. We also need to determine whether the expressed antigens are recognized by the immune system, induce the intended response, and ultimately generate functionally meaningful antitumor effects.",
      "As the project developed, we recognized that these three areas alone were insufficient to assess CirCure’s development potential. We invited stakeholders from different fields to help us review the design rationale, delivery limitations, scope of experimental validation, and priorities for further research and development. We adopted, partially adopted, or reserved their suggestions for future consideration according to the project’s circumstances. These exchanges broadened our technical assessment beyond the initial three questions to encompass more comprehensive validation and future development.",
    ],
    profiles: sdg9Profiles,
  },
  consequences: {
    lead: [
      "CirCure remains at the research stage, so we do not present laboratory improvements as established clinical products or demonstrated achievements in industrial innovation. We distinguish between two types of consequences: **short-term changes in research and development and project decisions** already driven by stakeholder feedback, and **potential long-term social, economic, and environmental impacts** that may arise if CirCure completes further preclinical validation, product development, and translation into practice.",
    ],
    shortTerm: {
      heading: "Short-Term Impacts",
      paragraphs: [
        "At this stage, CirCure’s clearest contribution to SDG 9 is how stakeholder feedback has improved its **technical design, experimental evaluation, and development priorities**.",
        "We broadened antigen selection beyond RNA expression to consider protein expression, tissue localization, tumor specificity, and patient heterogeneity. Multi-epitope design also incorporated immunogenicity, HLA binding, and potential population coverage. For the circRNA platform, we evaluated functional effects alongside stability and expression, recognizing that immune activation may reflect both antigen-specific responses and RNA-triggered innate immunity.",
        "We retained commercial LNPs to focus resources on validating the vaccine strategy. Controls, replication, and complementary assays supported an evidence chain linking **antigen expression, immune responses, and functional antitumor activity**, while keeping these findings distinct from clinical benefit. Detailed results appear in the Evidence section.",
        "Academic and industry feedback also brought manufacturing, batch consistency, quality control, costs, market needs, partnerships, intellectual property, and risk into our development planning and Entrepreneurship analysis. These changes support SDG 9 through **stronger research capabilities and more informed development decisions**, with cross-disciplinary collaboration also supporting SDG 17. Scalable manufacturing, clinical benefits, and wider economic or social outcomes remain to be demonstrated.",
      ],
    },
    longTerm: {
      heading: "Long-Term Impacts",
      intro: "If CirCure completes more comprehensive functional validation, preclinical studies, clinical trials, and product development, its technological impact could extend to social, economic, and environmental outcomes. The following analysis is conditional on meeting these requirements and distinguishes changes already made within the project from potential outcomes that still require future data.",
    },
    dimensions: [
      {
        id: "social",
        title: "Social Impacts",
        benefit: "If CirCure demonstrates long-term efficacy and safety and becomes a consistent, usable product, its multi-antigen, multi-epitope design could offer an additional adjuvant therapy option for patients with TNBC who remain at risk of recurrence and metastasis after surgery. It could also provide a further approach to addressing tumor heterogeneity. This would extend CirCure’s contribution to **SDG 3** from early research toward tangible health benefits, subject to successful clinical validation and translation into a product.",
        risk: "Technical complexity does not automatically lead to equitable health benefits. Treatment prices, administration requirements, storage and transport conditions, regional healthcare resources, healthcare professionals’ capabilities, and public acceptance of novel RNA vaccines could all affect who can access the technology. If the product can be used only in well-resourced regions or healthcare institutions, its potential health benefits may not be equitably distributed. It could therefore fail to advance **SDG 10** and potentially widen disparities in treatment opportunities.",
        boundary: "There is currently no clinical evidence that CirCure reduces the risk of recurrence and metastasis, nor are there real-world data demonstrating consistent manufacturing, clinical deployment, or patient acceptance. These social impacts therefore remain potential long-term outcomes, dependent on evidence supporting efficacy, safety, product development, and equitable implementation. They cannot be inferred directly from the current in vitro experiments.",
      },
      {
        id: "economic",
        title: "Economic Impacts",
        intro: "For an early-stage nucleic acid vaccine project, long-term economic impacts involve **balancing potential technological and product value against high research and development costs and uncertainty**. Feedback from industry stakeholders, including Hualan Biological, also showed us that market and commercial considerations should inform research priorities and resource allocation throughout development.",
        benefit: "CircRNA, multi-epitope design, and the associated functional evaluation methods could contribute to a pipeline of technologies and product candidates in nucleic acid therapeutics and cancer immunotherapy, while generating demand for process development, quality control, and industry collaboration. Addressing evidence quality, product positioning, costs, the scope of partnerships, and key risks early in development could also reduce repeated investment caused by misdirected development or insufficient evidence at later stages. These potential effects could support industrial innovation under **SDG 9** and provide a foundation for innovation-driven economic activity under **SDG 8**.",
        risk: "CircRNA and LNP manufacturing, complex quality control, prolonged clinical development, cold-chain storage and transport, and regulatory registration requirements could entail substantial costs. Market competition, insufficient product differentiation, intellectual property boundaries, and uncertainty in partnerships could also affect whether further investment is justified. If development costs translate into a high product price, industrial innovation may struggle to deliver broad social benefits. It could also limit patient affordability, creating a conflict with the equity objectives of **SDG 10**.",
        boundary: "Our current Entrepreneurship work consists of **early commercialization analysis informed by stakeholder feedback**. We **do not yet have data** on manufacturing costs at scale, clinical development expenditure, product pricing, market adoption, or revenue. Detailed analyses of product positioning, the market, the business model, and risks are presented in the Entrepreneurship section.",
      },
      {
        id: "environmental",
        title: "Environmental Impacts",
        intro: "CirCure’s current direct environmental impacts mainly arise from laboratory reagents, single-use consumables, biomedical waste, and equipment operation. If the project progresses to product development and manufacturing at scale, these impacts will extend to raw materials, manufacturing, packaging, storage and transport, quality control, and waste treatment.",
        benefit: "Clearer experimental design, appropriate controls and replication, and more consistent manufacturing processes could reduce the need to repeat experiments or production because of design errors, operational variability, or batch failures. This could reduce unnecessary consumption of raw materials and single-use consumables, equipment operating time, and energy use, helping the project address **SDG 12’s emphasis on resource efficiency and responsible production** in the future.",
        risk: "Manufacturing circRNA and LNPs at scale, single-use production consumables, quality testing, low-temperature storage, and cold-chain transport could also create additional material and energy demands. **Improving batch consistency at one stage does not necessarily reduce the overall environmental impact.** If additional resource consumption and carbon emissions outweigh local efficiency gains, the project may fail to advance SDG 12 and could create **new trade-offs with SDG 13**.",
        boundary: "CirCure **has not yet entered standardized manufacturing or production at scale**. We currently lack actual data on batch failure rates, raw material inputs, energy consumption, transport, or lifecycle impacts. We therefore **do not present potential reductions in repeated work as resource savings already achieved**, or interpret efficiency gains at individual stages as overall environmental benefits. A more comprehensive analysis of resource responsibility and the environmental impacts of production is presented under SDG 12.",
      },
    ],
  },
  alignment: {
    lead: [
      "Building on the potential relationships identified through SST-QN, we examined CirCure’s **technical design, stakeholder engagement, experimental validation, and commercialization analysis** to assess whether these relationships have emerged within the project and how far the current evidence supports them.",
    ],
    table: {
      headers: ["Relationship", "Status", "Interaction", "Why"],
      rows: [
        [
          "SDG 3 ↔ SDG 9",
          "Core (C)",
          "Positive",
          "The need to control recurrence and metastasis in patients with TNBC after surgery defined the technical challenges CirCure needed to address. It also prompted us to expand candidate antigen evaluation beyond RNA expression to include protein expression, tissue localization, tumor specificity, and patient heterogeneity. Meanwhile, the project progressively built functional evidence through antigen expression, DC maturation, T-cell responses, and cell co-culture experiments. Reliable technical validation, in turn, determines whether there is a foundation for achieving this health objective.",
        ],
        [
          "SDG 17 → SDG 9",
          "Core (C)",
          "Positive",
          "Stakeholders in pathology, computational immunology, RNA vaccines, nanodelivery, cancer immunology, preclinical evaluation, and industrial translation directly contributed to project iterations. Their input changed antigen and epitope evaluation, the interpretation of RNA-induced immune effects, LNP development priorities, experimental controls, evidence boundaries, and commercialization analysis. Collaboration across disciplines has become a practical driver of CirCure’s technological innovation.",
        ],
        [
          "SDG 9 → SDG 4",
          "Core (C)",
          "Positive",
          "CirCure translated technical content on circRNA, cancer vaccines, and synthetic biology into courses, teaching slides, illustrated science books, virtual laboratories, educational games, and public engagement activities. We delivered these educational activities to audiences of different ages and knowledge backgrounds. Technological innovation has therefore generated concrete educational resources and activities. Their implementation and outcomes are discussed under SDG 4.",
        ],
        [
          "SDG 9 → SDG 8",
          "Exploratory (E)",
          "Positive",
          "Discussions with Hualan Biological prompted further analysis of product positioning, markets and competition, costs, industry collaboration, intellectual property, and risk management in our Entrepreneurship work. This provides a commercialization perspective for future product development. However, CirCure has not yet generated production at scale, employment opportunities, or actual economic returns from industrial activity, so this relationship does not yet qualify as Core.",
        ],
        [
          "SDG 9 ↔ SDG 10",
          "Conditional (±)",
          "Context-dependent",
          "Multi-antigen, multi-epitope design, together with HLA binding and potential population coverage assessments, may broaden the range of tumor characteristics and immune backgrounds the vaccine could address. However, circRNA/LNP manufacturing, quality control, low-temperature storage and transport, treatment prices, ability to pay, and disparities in healthcare resources could mean that the technology initially reaches better-resourced populations. The final direction depends on coverage, costs, payment arrangements, and healthcare accessibility.",
        ],
        [
          "SDG 9 ↔ SDG 12",
          "Conditional (±)",
          "Context-dependent",
          "Appropriate controls and experimental replication, established commercial LNPs, process standardization, and improved batch consistency may reduce failed experiments, repeated production, and unnecessary resource use. However, RNA preparation, LNP production, single-use consumables, quality testing, and cold-chain transport could also increase material and energy demands. The final relationship depends on actual process efficiency and resource management across the full production and delivery process.",
        ],
        [
          "SDG 9 → SDG 5",
          "Excluded (0)",
          "None",
          "CirCure focuses on TNBC and could improve women’s health through SDG 3. However, vaccine innovation itself does not directly address structural gender disparities in resource allocation, decision-making opportunities, employment, or social participation. We therefore do not currently establish a direct interaction from SDG 9 to SDG 5.",
        ],
      ],
    },
    findings: [
      "**SDG 3 ↔ SDG 9, SDG 17 → SDG 9, and SDG 9 → SDG 4 are supported as Positive Core Interactions.** Clinical needs have shaped antigen selection, multi-epitope design, and functional validation. Cross-disciplinary feedback has refined experimental interpretation, delivery priorities, and development planning, while technical knowledge has informed educational resources used with different audiences. These links are supported by project decisions and activities, rather than demonstrated patient health benefits.",
      "**SDG 9 → SDG 8 remains Exploratory.** Feedback from Hualan Biological informed our analysis of product positioning, markets, costs, partnerships, and risks. This supports future development planning, but CirCure has not yet demonstrated production at scale, job creation, or economic returns.",
      "**SDG 9 ↔ SDG 10 and SDG 9 ↔ SDG 12 remain Conditional.** Multi-epitope design and HLA coverage may broaden potential patient coverage, while manufacturing complexity, pricing, cold-chain requirements, and unequal healthcare resources could restrict access. Fewer failed experiments and improved batch consistency could reduce waste, but RNA/LNP production and storage may increase material and energy demands. Whether these relationships yield benefits or trade-offs depends on future design and implementation, and requires access and lifecycle data.",
      "**SDG 9 → SDG 5 remains Excluded.** Potential benefits to women’s health are primarily mediated through SDG 3. Targeting a disease that mainly affects women does not itself establish a direct contribution to structural gender equality.",
    ],
  },
  legacy: {
    intro: [
      "To help other teams build on our SDG 9 work, we distilled CirCure’s decision-making process into **three reusable toolkits** for synthetic biology and research-driven projects. They help teams define core questions, assess stakeholder feedback, document decisions, and update project actions while maintaining research priorities. Each decision record captures **the rationale, relevance to the project’s current stage, action taken, and need for reassessment**. Together, these tools offer a practical, traceable way to turn stakeholder input into project decisions that others can review and adapt.",
    ],
    tools: [
      {
        title: "Core Question Anchor",
        why: "Projects can gradually drift from the problem they set out to solve as new ideas, experiments, and stakeholder suggestions are added.",
        whatItHelpsWith:
          "Clarify the **core problem, success criteria, priorities, and scope** for the current phase, and check whether proposed additions truly support the project’s main direction.",
        bestFor:
          "**Project kick-offs, changes in research direction, phase reviews**, and times when the team needs to reset its priorities.",
        whatItDoes:
          "Help the team clarify the key problem to solve, the criteria for success, and the project’s scope when it launches or moves into a new phase. This helps keep new ideas and external suggestions from expanding the work and pulling R&D off course.",
        pdfs: pdfPair("core-question-anchor"),
      },
      {
        title: "Stakeholder Feedback Decision Protocol",
        why: "Stakeholders may have different priorities, and their suggestions may face practical constraints or conflict with one another. The team can’t accept every suggestion, but simply recording feedback without explaining how it was handled isn’t enough.",
        whatItHelpsWith:
          "Assess feedback based on its **relevance to the problem, supporting evidence, feasibility, and fit with the project’s current stage**. Classify each suggestion as **Incorporated**, **Partially Incorporated**, **Future Consideration**, or **Not Incorporated**, and document the **rationale and follow-up actions**. Assess feedback based on the same criteria when a suggestion needs to be reviewed again.",
        bestFor:
          "Organizing feedback after **expert interviews, patient and public engagement, or industry discussions**, and supporting team discussions about project changes.",
        whatItDoes:
          "Provides structured questions to help the team assess feedback from researchers, clinicians, and industry partners; identify how recommendations align with project goals, constraints, and current scope; and decide whether, how, and when to act.",
        pdfs: pdfPair("stakeholder-feedback-decision-protocol"),
      },
      {
        title: "Anchor & Decide Toolkit",
        why: "When the core problem, stakeholder feedback, team decisions, and project actions are recorded separately, the project’s evolution can become fragmented. External audiences may also find it difficult to see **how feedback actually shaped the research work**.",
        whatItHelpsWith:
          "Bring the **core problem, feedback, team discussions, and follow-up actions** together so the team can see how each suggestion affects the project and adjust its next steps accordingly.",
        bestFor:
          "Managing the **full cycle**, documenting **Integrated Human Practices and SDG 9** work, and supporting **team handovers, phase reviews, and external presentations**.",
        whatItDoes:
          "Combines the Core Question Anchor and the Stakeholder Feedback Decision Protocol to help the team identify priorities, avoid scope creep, and coordinate technical choices with project objectives.",
        pdfs: pdfPair("anchor-decide-toolkit"),
      },
    ],
  },
  evidence: {
    intro: [
      "At present, CirCure addresses SDG 9 primarily through its research and development work. We track whether external feedback leads to meaningful changes in our technical design, experimental evaluation, and R&D decisions.",
    ],
    stats: [],
    measurable: [
      { text: "**Documented 7 traceable expert feedback records**, each linking the feedback to its adoption status, decision rationale, and follow-up actions.", figure: "sdg9TraceableExpertFeedback", figureCaption: "Traceable expert feedback records" },
      { text: "**Constructed vaccine plasmids and compared immune responses**: an empty-vector control containing the adjuvant module, 13 single-epitope plasmids, a TROP2 dual-epitope plasmid, and pCirCure-circMEV. Round-2 ELISpot readings were 32 for the empty-vector control, 198/227 for the two corresponding single-epitope constructs, 298 for the dual-epitope construct, and 367 for the combined vaccine, in SFC/10⁵ cells.", figure: "sdg9Evidence2", figureCaption: "Vaccine constructs and comparative immune responses" },
      { text: "**Obtained evidence of circularization and antigen translation**: an approximately 50 kDa FLAG-tagged antigen band was detected in DCs electroporated with circRNA.", figure: "sdg9Evidence3", figureCaption: "Circularization and antigen translation evidence" },
      { text: "**Strengthened CTL selectivity assessment**: expanded normal-cell controls from 1 to 4 cell lines across 4 tissue sources and confirmed their HLA-A*02:01 status. Specificity ratios ranged from 21–76× at effector-to-target ratios of 80:1 and 100:1.", figure: "sdg9Evidence4", figureCaption: "CTL selectivity assessment" },
      { text: "**Developed a three-module vaccine design system** covering Data Import & QC, Target Selection, and Epitope Prediction.", figure: "sdg9Evidence5", figureCaption: "Three-module vaccine design system" },
      { text: "**Created 3 reusable decision-making resources**—2 standalone tools and 1 integrated toolkit—for other teams to use and adapt.", toolTable: true },
    ],
    significant: [
      "CirCure’s contribution to SDG 9 is meaningful because stakeholder feedback has changed **how we draw technical conclusions, interpret experimental results, and allocate research resources**.",
      "First, **honoring patients’ hopes requires evidence that can withstand scrutiny**. In CTL safety assessment, normal cells may escape killing simply because they lack the matching HLA required for recognition. Including four HLA-A*02:01-positive normal cell lines provided a necessary basis for interpreting these results. Antigen assessment using multiple sources of evidence, HLA coverage analysis, and functional validation also reduced uncertainty in key decisions, giving further research a more reliable foundation.",
      "Second, **helping promising research progress requires capabilities that can grow over time**. We integrated target selection, epitope prediction, and population coverage assessment into CircRNA Vaccine Design System V1.0, completed the relevant constructs, and established an evidence framework linking antigen expression, immune responses, and functional effects. Retaining commercial LNPs allowed us to focus limited resources on validating the vaccine’s core biological activity.",
      "Finally, **we want our experience to become a starting point for others**. Seven expert feedback records link recommendations to adoption decisions and project actions. Two standalone tools and one integrated toolkit preserve this process, enabling other teams to understand our reasoning, adapt our methods, and improve upon them.",
      "Together, these contributions address SDG 9 through research reliability, technical capability, and reusable methods. Our current impact lies in strengthening early-stage R&D, providing a foundation others can test and build upon as CirCure moves toward process development, further preclinical validation, and potential industrial application.",
    ],
  },
};
