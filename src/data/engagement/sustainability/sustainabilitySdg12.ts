/**
 * Sustainability — SDG 12: Responsible Consumption and Production.
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Copy and hosted asset URLs follow the manuscript in source order.
 * Pure data, zero JSX.
 */

import type { SdgChapter, StakeholderProfile } from "./sdgChapterContract";
import { sdg12PhotoSets } from "./sustainabilitySdg12Assets";

const sdg12Profiles: ReadonlyArray<StakeholderProfile> = [
  {
    id: "sdg12-01",
    index: "01",
    name: "Yang Liu",
    role: "EHS-Laboratory Management",
    relevantStakeholder:
      "Laboratory management and EHS personnel who can assess CirCure’s current resource inputs from the perspectives of **laboratory resource use, experimental workflows, and waste management**, and help identify issues we can directly address at this stage.",
    challenge:
      "**What sustainability responsibilities already exist before scale-up?**",
    keyInsight:
      "Responsibilities for resource use begin during research and development. Reagents, single-use consumables, equipment operation, unnecessary repetition of experiments, and laboratory waste already contribute to CirCure’s resource use. Reducing avoidable repetition through better experimental design is one of the most direct and actionable opportunities for improvement at this stage.",
    whatChanged:
      "We expanded our understanding of SDG 12 to include **resource use in our current experiments**. We used pilot experiments to select conditions, refined experimental design, planned appropriate replication, and followed laboratory waste management procedures to reduce avoidable resource use.",
    currentStatus: "Incorporated",
    sdgs: [12, 9],
    article: {
      title: "Responsible Production Begins Before Scale-Up",
      sections: [
        {
          blocks: [
            "CirCure remains at the research and development stage and has not yet entered standardized manufacturing or production at scale. Before discussing how much resource use future industrial production might save, we wanted to answer a more immediate question: **are there responsibilities for resource use that we can already identify and act on during our current research and development work?**",
            "We discussed this question with laboratory management and EHS personnel and reviewed the resource inputs involved in circRNA preparation, cell culture, and functional validation.",
          ],
        },
        {
          heading: "01 Research and Development Already Consume Resources",
          blocks: [
            "Even before manufacturing begins, CirCure’s experiments require RNA preparation reagents, culture media, and single-use consumables such as centrifuge tubes, pipette tips, and culture dishes. They also involve cell culture, equipment operation, and laboratory waste treatment. Although these activities take place at laboratory scale, they represent resource use that is already occurring. Our current responsibilities should therefore begin with **experimental activities we are already carrying out**.",
          ],
        },
        {
          heading:
            "02 An Unnecessary Repeat Uses More Than Another Batch of Reagents",
          blocks: [
            "Laboratory management personnel drew our attention to **avoidable repetition of experiments**. Starting larger experiments before clarifying their objectives, key variables, or conditions can mean repeating an entire set if the conditions prove unsuitable. The additional inputs extend beyond individual reagents to single-use consumables, culture materials, cell culture time, and equipment operation. Reducing experiments that provide little useful information, or repeats caused by design problems, is therefore a practical way to address resource use during research and development.",
          ],
        },
        {
          heading:
            "03 Better Resource Use Starts with Better Experimental Design",
          blocks: [
            "We incorporated this advice into our experimental workflows. Before full experiments, we placed greater emphasis on **small-scale pilot experiments** to select key conditions and clarify the objectives and main variables. We planned experimental groups and replication appropriately to reduce the likelihood of repeating entire sets because of design problems. We also segregated biological waste, contaminated consumables, and other laboratory waste for treatment in accordance with laboratory procedures. These measures address resource use that is already occurring and represent practical actions CirCure can take at its current stage.",
          ],
        },
        {
          heading:
            "04 What Changed | Responsibilities for Resource Use Begin Before Manufacturing",
          blocks: [
            "This discussion established our first guiding principle for CirCure’s work under SDG 12: **Responsible production begins before scale-up.**",
            "Even during research and development, reagents, consumables, equipment operation, repeated experiments, and waste create responsibilities for resource use. We therefore began putting responsible production into practice through **laboratory resource use that we can currently control and improve**.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg12-02",
    index: "02",
    name: "Junhua Qiao",
    role: "Chief Technology Officer (CTO), GeneScience Pharmaceuticals",
    relevantStakeholder:
      "As Chief Technology Officer at GeneScience Pharmaceuticals, Qiao Junhua has extensive experience in biopharmaceutical CMC, process development, technology transfer, and industrialization. He can help us understand the manufacturability, process control, batch consistency, and quality management requirements CirCure would need to address after completing early-stage research validation.",
    challenge:
      "When a laboratory vaccine moves into product development, the evaluation criteria shift from “Can it be achieved?” to “Can it be manufactured consistently, controlled effectively, and applied at scale?” Early-stage work should focus on research validation while documenting later requirements for process development, quality control, and scale-up, so that the project does not lose sight of its current priorities.",
    keyInsight:
      "Manufacturing processes, critical raw materials, batch consistency, quality standards, and cost constraints are not requirements to be added only at the end. They are important factors in determining whether a technology can progress toward clinical translation and practical application.",
    whatChanged:
      "We divided CirCure’s development into two stages: first, validating the scientific feasibility of the vaccine strategy; then, if supported by further evidence, systematically evaluating process scale-up, raw material supply, batch consistency, quality control, and cost constraints. We documented these requirements as criteria for consideration if the project enters product development.",
    currentStatus: "Future Consideration",
    sdgs: [12],
    photos: sdg12PhotoSets["sdg12-02"],
    article: {
      title:
        "From a Successful Experiment to a Reproducible, Controllable Product",
      sections: [
        {
          blocks: [
            "Following our earlier work on experimental design and discussions with experts, we had developed a clearer account of how CirCure aims to achieve antigen expression, induce an immune response, and further evaluate functional effects. However, we had not yet established a clear framework for assessing the technology’s next stage if these early results were supported.",
            "In our discussion with Qia Junhua, Chief Technology Officer at GeneScience Pharmaceuticals, we therefore did not ask broadly whether CirCure “could be industrialized.” Instead, we introduced the project’s current technical approach, development stage, and validation strategy. We explained that we currently use a mature, commercially available LNP platform and focus on evaluating antigen expression, immune activation, and functional effects at the cellular level. We then asked three specific questions:",
            {
              bullets: [
                "During early-stage research, which product development requirements should we understand in advance, and which should be evaluated systematically only after preliminary efficacy has been demonstrated?",
                "If a laboratory vaccine design proceeds to further development, what new requirements would manufacturing processes, raw materials, and quality control place on the technology?",
                "Beyond experimental results, what factors might determine whether a technology is worth scaling up and advancing into product development?",
              ],
            },
          ],
        },
        {
          heading: "01｜Evaluation Criteria Change as Development Progresses",
          blocks: [
            "Mr. Qiao explained that research validation and product development address different questions.",
            "At the laboratory stage, the first questions are whether the technology can be implemented and whether it can produce the intended biological effects. Once a project enters product development, the focus shifts from whether an experiment succeeds once to whether the same result can be reproduced consistently and controlled effectively.",
            "This means that process stability, continued access to critical raw materials, consistency between batches, and the identification and measurement of key product quality attributes all become relevant criteria. Experimental results can provide a starting point for further development, but they cannot by themselves establish a product’s development value, much less demonstrate that the technology is ready for large-scale manufacturing.",
          ],
        },
        {
          heading: "02｜Manufacturability Must Be Tested, Not Assumed",
          blocks: [
            "This discussion helped us recognize that a design that can be implemented in the laboratory is not automatically manufacturable.",
            "As production scale increases, changes in raw material sources, process parameters, equipment, and operating procedures may affect product quality. If consistency between batches is difficult to maintain, or if there are no tests for the product’s key quality attributes, promising early experimental results may still be insufficient to support a stable, controllable product.",
            "Manufacturability therefore means more than being able to make a product. It also requires a production process that can be defined, monitored, and controlled, and that can continue to produce material meeting quality requirements as the scale increases.",
          ],
        },
        {
          heading:
            "03｜Process, Quality, and Cost Together Shape Development Value",
          blocks: [
            "His feedback helped us recognize that cost is not a business issue entirely separate from technical evaluation.",
            "The price and reliability of critical raw materials, process complexity, product yield, batch success rate, and quality control requirements can all affect whether a technology can be developed further. If a process is overly complex, product yield is low, or batches vary substantially, the technology may be difficult to develop into a practical manufacturing pathway even if it works in small-scale experiments.",
            "If CirCure proceeds to a later development stage, we will therefore need to consider raw material supply, process stability, product yield, batch consistency, quality risks, and cost constraints, alongside biological effects. Together, these factors will inform whether the technology has a basis for further scale-up and translation.",
          ],
        },
        {
          heading:
            "04｜Understanding Future Requirements Does Not Mean Starting Industrialization Now",
          blocks: [
            "His recommendations did not lead us to immediately add production scale-up, process development, or cost accounting to our work.",
            "CirCure remains at an early research stage. Our central task is still to test whether the vaccine can achieve the intended expression and produce immune effects with functional significance. Before this foundation is sufficiently established, moving directly into large-scale process development and product development would not fit the project’s current stage. It could also divert attention from current research priorities and lead to unnecessary resource use.",
            "We therefore did not change the current construct in response to possible future industrial needs, nor did we describe production assessments that have not yet been conducted as resolved issues. Instead, we treat these requirements as stage-specific criteria: only if the early research evidence supports continued development would it be appropriate to invest further in process development, manufacturability, and quality evaluation.",
          ],
        },
        {
          heading:
            "05｜What Changed: Establishing Product Development Criteria for the Next Stage",
          blocks: [
            "The main change from this discussion was not the addition of immediate industrialization experiments. It was a clearer understanding of the questions CirCure would need to address when moving from research validation into product development.",
            "At present, we assess whether the vaccine strategy merits further study by examining antigen expression, immune responses, and functional effects. If these early findings receive further support, subsequent development would require a new assessment focused on manufacturing processes, critical raw materials, process scale-up, batch consistency, quality control, and cost constraints.",
            "This adjustment helped us describe CirCure’s current stage more accurately: our task is to establish whether the technology works, not to claim prematurely that it can become a product. At the same time, laboratory innovation can progress toward application only if later development establishes a production approach that is stable, controllable, and supported by a reasonable balance between inputs and outputs.",
            "From the perspective of SDG 12, Responsible Consumption and Production, this discussion also prompted us to consider resource responsibility in research decisions. For CirCure, responsible production does not mean conducting full-scale industrial work prematurely during early-stage research. It means using evidence to decide whether to proceed to the next stage and avoiding unnecessary production-related resource use before the technical basis is sufficiently established. If the project meets the conditions for further development, product yield, batch success rate, raw material use, process losses, and long-term supply capacity should then inform technical decisions.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg12-03",
    index: "03",
    name: "State Grid Jiangsu Electric Power Company",
    role: "Carbon Accounting & Environmental Impact Assessment",
    relevantStakeholder:
      "State Grid Jiangsu Electric Power Company has practical experience in industrial carbon accounting and environmental management. Its experience can help us understand the relationship between data scope, accounting boundaries, and the strength of environmental conclusions, and assess what claims about local resource changes can reasonably be supported.",
    challenge:
      "If resource consumption decreases at one stage, does that mean the environmental impact of the entire product has decreased? When data cover only part of a system, where should a sustainability claim stop?",
    keyInsight:
      "A decrease in resource use at one stage indicates a change in that specific stage; it does not directly demonstrate a reduction in the product’s overall carbon emissions or environmental impact. Environmental assessments must define the subject, data scope, accounting boundary, and basis for comparison. Conclusions should not extend beyond the scope covered by the evidence.",
    whatChanged:
      "We began to distinguish rigorously between verified local improvements, scenario-based projections made under explicit assumptions, and assessments of overall environmental impact. We also developed the **Sustainability Claim Boundary Protocol** to prevent local changes supported by current evidence from being presented as unverified, overall environmental achievements.",
    currentStatus: "Incorporated",
    sdgs: [12, 13],
    leadIn: [
      "After identifying these resource responsibilities, we wanted to understand how environmental management in industry evaluates changes in resource use, and how far the available data can support environmental claims.",
    ],
    photos: sdg12PhotoSets["sdg12-03"],
    article: {
      title:
        "Reduced Resource Use Does Not Automatically Mean Lower Overall Environmental Impact",
      sections: [
        {
          blocks: [
            "After identifying the resource responsibilities that CirCure may involve at different stages of research and development, we faced a further question: if resource use decreases at one stage, how broad a sustainability claim can the available evidence support?",
            "To explore this question, we drew on approaches used in industrial carbon accounting and environmental management, focusing on how environmental assessments define the subject, data scope, and analytical boundary.",
          ],
        },
        {
          heading:
            "01｜A Change at One Stage Does Not Represent the Entire System",
          blocks: [
            "The discussion helped us recognize that a product’s environmental impact rarely comes from a single stage. Raw material acquisition, energy use, manufacturing, storage and transport, and waste disposal can all involve different forms of resource use and environmental burden.",
            "Therefore, even if resource use decreases at one stage, this only demonstrates a change at that specific stage. It does not automatically show that the product’s overall carbon emissions or environmental impact have fallen. Broader conclusions require us to examine whether burdens have shifted to other stages and to use data that cover the relevant system boundary.",
          ],
        },
        {
          heading: "02｜Environmental Claims Must Match the Scope of the Data",
          blocks: [
            "This understanding led us to reconsider the sustainability claims CirCure can make at its current stage.",
            "If a better experimental design avoids a repeat experiment, we can report the corresponding avoided use of reagents, consumables, and equipment time. If a scenario analysis suggests that reducing batch failure rates could reduce repeated production, we can discuss the potential resource implications while stating the assumptions explicitly.",
            "However, without real production, energy-use, storage, transport, and life-cycle data, these findings cannot be presented as evidence that “CirCure has reduced overall carbon emissions” or “CirCure has achieved a lower overall environmental impact.”",
            "How far a conclusion can extend depends on how far the available evidence reaches.",
          ],
        },
        {
          heading:
            "03｜Distinguishing Different Levels of Sustainability Claims",
          blocks: [
            "Based on this reasoning, we grouped CirCure’s resource and environmental claims into three levels:",
            {
              bullets: [
                "**Verified Local Improvement:** a local resource improvement directly supported by current actions and data;",
                "**Scenario-Based Projection:** a projection of future resource changes made with clearly stated assumptions, scope, and uncertainty;",
                "**Overall Environmental Impact:** an overall environmental outcome that can be assessed only with real production data and more complete life-cycle information.",
              ],
            },
            "This distinction allows us to discuss observed improvements and potential future changes while avoiding presenting something that “may happen” as something that “has already happened.”",
          ],
        },
        {
          heading:
            "04｜What Changed: Keeping Sustainability Claims Within the Bounds of the Evidence",
          blocks: [
            "This discussion clarified one principle for us:",
            "**Local resource efficiency does not necessarily demonstrate a reduction in overall environmental impact.**",
            "We therefore developed the **Sustainability Claim Boundary Protocol** to review the data behind each sustainability claim, the stages covered, the assumptions used, and the scope of the conclusion those elements can support.",
            "For CirCure, we can currently identify the resource use that has occurred during research and development, as well as some local issues that can be identified and addressed. We can make scenario-based projections about resource changes in future production if we state the assumptions and analytical boundaries clearly. Assessing the product’s overall carbon emissions and life-cycle environmental impact, however, requires real data covering raw materials, production, energy, transport, and disposal.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg12-04",
    index: "04",
    name: "SAIC Motor",
    role: "Green Manufacturing & Life-Cycle Thinking",
    relevantStakeholder:
      "As an automotive company with a complex manufacturing system and an integrated industrial chain, SAIC Motor’s green manufacturing practices can help us understand the scope of responsible production across energy use, manufacturing processes, supply chains, logistics, and end-of-life recycling. Although the automotive and biopharmaceutical industries differ, this life-cycle perspective across multiple stages can inform CirCure’s resource responsibility framework.",
    challenge:
      "Is optimizing a single process enough for responsible production?",
    keyInsight:
      "Resource optimization at a single stage is insufficient to demonstrate responsible production as a whole. Raw material acquisition, manufacturing, energy use, storage and transport, product use, and end-of-life disposal can all create new resource demands or environmental burdens. When evaluating an improvement at one stage, we must also consider whether the burden has shifted elsewhere.",
    whatChanged:
      "We expanded CirCure’s resource analysis from laboratory consumption and potential future production losses to include raw materials, manufacturing, storage and transport, use, and end-of-life disposal. This framework does not mean that we have completed a life-cycle assessment. It defines the scope for data collection and evaluation as the project develops.",
    currentStatus: "Incorporated",
    sdgs: [12, 13],
    photos: sdg12PhotoSets["sdg12-04"],
    article: {
      title:
        "Responsible Production Cannot Be Judged by One Manufacturing Step",
      sections: [
        {
          blocks: [
            "Earlier discussions helped us understand that a decrease in resource use at one stage does not demonstrate a reduction in a product’s overall environmental impact. This led us to consider a further question: if a single stage cannot represent the whole, how broad should the scope of responsible production be?",
            "In learning about SAIC Motor’s green manufacturing practices, we saw that environmental management in a mature manufacturing system is not limited to one factory process. It can extend across production energy, raw materials, supply chain coordination, logistics, product use, and end-of-life recycling.",
            "Automotive and biopharmaceutical products differ substantially in their characteristics, manufacturing methods, and environmental impacts. We therefore did not directly apply specific measures from the automotive industry to CirCure. Instead, we drew on its life-cycle perspective across multiple stages to reconsider the resource responsibilities that CirCure may face in the future.",
          ],
        },
        {
          heading:
            "01｜Production Responsibility Extends Beyond the Production Line",
          blocks: [
            "SAIC Motor’s publicly reported green development practices cover production energy, manufacturing processes, low-carbon materials, industrial-chain collaboration, and material recycling. This demonstrates that, for products with complex supply chains and manufacturing systems, environmental responsibility cannot be judged by changes in resource use at only one manufacturing step.",
            "Even if a process uses less energy or fewer materials, other stages may create new resource demands or environmental burdens. For example, a process improvement might reduce energy use during manufacturing while increasing requirements for specialized raw materials, transport conditions, or end-of-life treatment.",
            "Whether a local optimization contributes to broader environmental improvement therefore needs to be assessed within a more complete production and use system.",
          ],
        },
        {
          heading:
            "02｜CirCure’s Resource Responsibilities Also Extend Beyond Production Batches",
          blocks: [
            "This perspective prompted us to expand the scope of CirCure’s resource analysis.",
            "In addition to reagents, single-use consumables, and equipment energy used during current research, and potential resource losses caused by future batch failures, a circRNA vaccine moving toward practical use could also involve:",
            {
              bullets: [
                "Production and supply of RNA, lipids, and other critical raw materials;",
                "Material and energy inputs during preparation, purification, and quality testing;",
                "Resource demands associated with storage conditions and temperature-controlled transport;",
                "Single-use medical supplies during administration;",
                "Disposal of production waste, packaging, and materials associated with product use.",
              ],
            },
            "These stages do not yet all have real data, but they are potential resource responsibilities that may need to be identified and assessed in the future.",
          ],
        },
        {
          heading:
            "03｜Moving from Single-Stage Optimization to Life-Cycle Thinking",
          blocks: [
            "Based on this understanding, we no longer treat resource optimization in a single experiment or production stage as a complete account of responsible production for CirCure. Instead, we established an analytical framework covering raw materials, manufacturing, storage and transport, use, and end-of-life disposal.",
            "At present, this framework represents life-cycle thinking, not a complete life-cycle assessment. Its purpose is to help identify potential impact stages, avoid overlooking environmental burdens, and guide data collection if the project enters later development.",
            "A quantitative life-cycle environmental assessment would require more complete data on raw materials, manufacturing, energy, transport, and disposal.",
          ],
        },
        {
          heading:
            "04｜What Changed: Understanding Resource Responsibility Across the Life Cycle",
          blocks: [
            "SAIC Motor’s green manufacturing practices helped us establish a broader principle:",
            "**Responsible production requires life-cycle thinking.**",
            "We therefore consider not only laboratory consumables or individual production batches, but also the raw materials, manufacturing, storage and transport, use, and end-of-life disposal that CirCure may involve in the future.",
            "This change does not mean that we are claiming CirCure has achieved life-cycle environmental improvement. It clarifies which stages future assessments need to cover, what data need to be collected, and how to check whether local optimization has shifted an environmental burden to another stage.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg12-05",
    index: "05",
    name: "International Data Port",
    role: "Data-Governance & Supply-chain Digitalization",
    relevantStakeholder:
      "The company can help us understand how future resource improvements could be continuously monitored and verified through production data management, supply-chain information tracking, and process records.",
    challenge:
      "**Without continuous data, how can sustainability improvement be verified?**",
    keyInsight:
      "Whether resource efficiency has truly improved cannot be determined from isolated or scattered data alone. Only by continuously recording key production and supply-chain data can changes be compared, tracked, and further verified.",
    whatChanged:
      "We clarified the key data that would need to be recorded continuously in the future, including raw material inputs, batch successes and failures, storage and transport conditions, and waste generation. These records would provide a data foundation for later resource efficiency assessments and life-cycle analysis.",
    currentStatus: "Future Consideration",
    sdgs: [12, 9],
    photos: sdg12PhotoSets["sdg12-05"],
    article: {
      title: "Resource Improvements Need Verifiable Data",
      sections: [
        {
          blocks: [
            "Our earlier analysis clarified that CirCure’s future resource responsibilities may extend beyond production itself to raw materials, storage and transport, use, and end-of-life disposal. This raised a further question: even if we know which stages to monitor, how can we determine whether improvements have actually occurred without continuous, traceable data?",
            "During our visit to Shanghai Lingang New Area Cross-Border Data Technology Co., Ltd., we learned more about data governance, secure data flows, and trusted traceability in industry. The company does not directly assess CirCure’s environmental impact, but its experience in data governance helped us recognize that any verifiable resource improvement depends on a data foundation with clear structure, known sources, and continuous traceability.",
          ],
        },
        {
          heading:
            "01｜Knowing What to Monitor Does Not Prove That Improvement Has Occurred",
          blocks: [
            "To compare performance across time, batches, and stages, companies need to preserve data consistently and link related records. If recording standards change, data sources cannot be confirmed, or different batches use different statistical definitions, accumulating a large volume of data may still fail to support reliable comparisons.",
            "This helped us recognize that setting goals to “reduce resource waste” or “improve resource efficiency” is not enough for CirCure. Without continuous data from before and after a change, together with contextual information explaining how the data were generated, it would be difficult to determine how resource use changed or whether the change was sustained.",
          ],
        },
        {
          heading:
            "02｜It Is Necessary to Define Both What to Record and How to Record It",
          blocks: [
            "Based on the resource responsibilities identified earlier, we clarified the information that may need to be retained continuously in the future:",
            {
              bullets: [
                "Types, sources, quantities, and units of raw materials;",
                "Identifiers and scale of production batches, and whether each batch succeeds or fails;",
                "Key process parameters and related quality results;",
                "Energy and other resource inputs;",
                "Storage duration, temperature, and transport conditions;",
                "Types, quantities, and treatment methods for waste.",
              ],
            },
            "However, listing indicators is not enough. For each data point, the time, source, collection method, relevant stage, and assessment boundary should also be defined wherever possible. Consistent definitions and units are needed to make comparisons across batches meaningful.",
          ],
        },
        {
          heading: "03｜Data Governance Helps Build an Evidence Trail",
          blocks: [
            "Resource efficiency assessments need more than data that exist. They also need records showing where the data came from, which batch they relate to, how they were generated, and whether they were amended or supplemented.",
            "Future records should therefore link resource data to the corresponding raw materials, production batches, quality results, storage and transport conditions, and waste treatment processes. When a resource indicator changes, these links can help determine whether the change resulted from a process adjustment, production scale, raw material differences, or a change in the recording method.",
            "If CirCure involves multi-institutional collaboration or cross-regional data transfer in the future, access permissions, secure data sharing, and compliant data flows will also need consideration. These are requirements for later development, not capabilities that the project has already established.",
          ],
        },
        {
          heading:
            "04｜The Current Lack of Data Makes Future Data Requirements More Important",
          blocks: [
            "CirCure has not yet entered large-scale production, so many of the data described above do not currently exist.",
            "For issues that cannot yet be assessed, we do not make claims about resource improvement or environmental benefits in advance. Instead, we first specify what data will be needed, which definitions and units should be used, which stages should be monitored continuously, and what scope of conclusions those data could support.",
            "This approach cannot replace future environmental assessments, but it can reduce the difficulties caused by missing records, inconsistent definitions, or data that cannot be traced.",
          ],
        },
        {
          heading:
            "05｜What Changed: Turning Resource Improvement into a Verifiable Change",
          blocks: [
            "This visit led us to a clear principle: **Sustainability improvements must be supported by consistent and traceable data.**",
            "We therefore identified systematic records of raw materials, production batches, quality results, resource inputs, storage and transport conditions, and waste as part of the data foundation that CirCure will need if it enters later development.",
            "At present, we can specify the data foundation and recording rules that will be needed in the future. Whether production resource efficiency actually improves and life-cycle environmental impacts decrease can only be assessed once continuous, comparable, and traceable real-world data become available.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg12-06",
    index: "06",
    name: "Dorm Planting Education",
    activityType: "Education through sustainable living and resource reuse.",
    partner: "Jilin University Student Environmental Protection Association.",
    challenge:
      "How can “responsible consumption and resource use” become a practical everyday action in which students can participate, rather than remaining an abstract concept?",
    keyInsight:
      "Embedding the reuse of discarded items in a concrete everyday activity can allow participants to experience resource reuse directly, compared with simply telling them to “reduce waste.”",
    whatWeDid:
      "We encouraged participants to bring unused containers, such as plastic bottles, and provided on-site guidance on planting and caring for plants such as tomatoes and strawberries. We distributed 194 planting kits in total.",
    whatChanged:
      "We extended CirCure’s response to SDG 12 beyond its own resource responsibilities to include responsible consumption at the individual level. By reusing idle containers for planting, participants completed a practical resource reuse activity themselves.",
    sdgs: [12, 4, 17],
    whatChangedLabel: "What Changed / Impact",
    leadIn: [
      "Our earlier analysis focused mainly on how CirCure itself could use resources more responsibly. SDG 12 also concerns responsible consumption at the individual level. We therefore partnered with the Jilin University Student Environmental Protection Association to combine the reuse of discarded containers with plant growing, extending resource responsibility from project analysis to a practical activity in which students could participate.",
    ],
    photos: sdg12PhotoSets["sdg12-06"],
    article: {
      title: "Making Responsible Consumption a Practice People Can Try",
      sections: [
        {
          blocks: [
            "Our earlier analysis focused mainly on how CirCure could use resources more responsibly in research and future production. However, the Responsible Consumption and Production addressed by SDG 12 does not apply only to laboratories and manufacturing systems. The ways people use and dispose of everyday items also relate to resource responsibility.",
            "We therefore partnered with the Jilin University Student Environmental Protection Association to hold a dorm planting education activity. We wanted to address a question closer to everyday life: how can “reducing waste” and “reusing resources” become actions students can take themselves rather than abstract ideas?",
          ],
        },
        {
          heading: "01｜More Than Telling Participants to “Reduce Waste”",
          blocks: [
            "We did not purchase new flowerpots for the activity. Instead, we encouraged participants to bring unused containers, such as plastic bottles, to use for planting.",
            "This made resource reuse part of the activity itself rather than simply an environmental message. Containers that might otherwise have been discarded were given a new use, and participants could carry out a concrete reuse activity themselves.",
          ],
        },
        {
          heading: "02｜Bringing Resource Reuse into Everyday Settings",
          blocks: [
            "At the activity, we introduced basic planting and care for plants such as tomatoes and strawberries, and helped participants plant them in the containers they had brought.",
            "We distributed 194 planting kits in total. Participants could take their plants back to their dormitories for continued care, allowing the activity to extend from the event space into everyday life.",
          ],
        },
        {
          heading:
            "03｜Extending Resource Responsibility from the Project to Individual Consumption",
          blocks: [
            "This activity broadened our response to SDG 12. It now includes not only how a project can use resources more responsibly, but also how individuals can practice responsible consumption in their daily lives.",
            "In everyday settings, this can involve reusing items that are already available, avoiding unnecessary demand for new resources, and extending the useful life of objects. These practices take place at a different scale from CirCure’s research and production responsibilities, but both involve examining how resources are used and whether they could be used more thoughtfully.",
          ],
        },
        {
          heading:
            "04 What Changed｜Bringing SDG 12 from Resource Analysis into Everyday Practice",
          blocks: [
            "This activity helped us form a clear understanding:",
            "**Responsible consumption becomes meaningful when people can practice it themselves.**",
            "Through the reuse of discarded containers and plant growing, we extended SDG 12 from an analysis of resource responsibility within the project to a practical activity that participants could carry out themselves.",
          ],
        },
      ],
    },
  },
];

export const sdg12Chapter: SdgChapter = {
  id: "sdg12",
  headingId: "sdg12-responsible-consumption",
  index: "4.4",
  title: "SDG12: Responsible Consumption and Production",
  intro: [
    "A technology designed to improve health also consumes materials and energy and generates waste throughout research and potential future production. We chose SDG 12 to bring **resource efficiency and environmental responsibility into decisions while our approach is still taking shape**, ensuring that the pursuit of patient benefit includes careful consideration of the **burdens it may place on people and the environment**.",
  ],
  stakeholders: {
    lead: [
      "CirCure remains at the research and development stage and has not yet entered standardized manufacturing or production at scale. We therefore began with a practical question about the present: **what responsibilities for resource use do we already have at this stage of the project?** This provided a starting point before considering potential resource savings from future industrial production.",
      "Starting with actual resource use in our laboratory, we extended our analysis to future manufacturing, environmental assessment, lifecycle management, and data validation. Feedback from stakeholders across different fields helped us clarify **which responsibilities already exist, which may emerge as the project develops, and how these changes should be assessed and verified in the future**.",
    ],
    profiles: sdg12Profiles,
  },
  consequences: {
    lead: [
      "CirCure remains at the research stage, so we do not present changes to experimental workflows, resource responsibility analysis, or public education activities as demonstrated resource savings or overall environmental improvements.",
      "We distinguish between **two types of consequences**: **short-term changes** in research and development, decision-making, and engagement practices already driven by stakeholder feedback and practical activities; and **potential long-term social, economic, and environmental impacts** that may arise if we establish ongoing data collection, complete process development, and sustain these activities.",
    ],
    shortTerm: {
      heading: "Short-Term Impacts",
      paragraphs: [
        "At this stage, CirCure’s clearest contribution to SDG 12 is **the integration of resource responsibility into R&D decisions following stakeholder feedback**.",
        "We began reviewing reagent use, single-use consumables, equipment operation, experimental repetition, and waste disposal. Small-scale pilot studies, improved experimental design, appropriate replication, and proper waste management were introduced to avoid unnecessary resource use while preserving research reliability. Without a complete baseline and continuous records, however, we cannot quantify resource savings.",
        "Feedback from biopharmaceutical, environmental management, green manufacturing, and data governance stakeholders expanded our assessment to include process variability, batch failures, raw materials, energy, storage, transport, and disposal. We developed the **Resource Responsibility Map** and **Sustainability Claim Boundary Protocol** to define what should be assessed and which conclusions the available evidence can support. Their current contribution is to project assessment and decision-making; product-level environmental benefits remain unverified.",
        "We also worked with the Jilin University Student Environmental Protection Association to run a dormitory planting activity that encouraged participants to reuse unused containers. This created an opportunity to put resource reuse into practice, linking SDG 12 with education under SDG 4 and collaboration under SDG 17. Whether participants continue these practices requires follow-up.",
      ],
    },
    longTerm: {
      heading: "Long-Term Impacts",
      intro:
        "CirCure’s potential long-term impacts depend on further process development, consistent resource and production records, and continued support and evaluation of public activities. The following assessment distinguishes **potential benefits, possible trade-offs, and the evidence needed to evaluate them**.",
    },
    dimensions: [
      {
        id: "social",
        title: "Social Impacts",
        benefit:
          "Continued use of our tools could help teams make better-informed resource decisions and communicate sustainability claims more accurately. Public activities could help participants apply reuse principles in everyday life, supporting SDG 12 through education and partnerships linked to SDG 4 and SDG 17.",
        risk: "Tools and one-time activities may have little lasting influence without continued use and support. Dormitory space, growing conditions, time constraints, and limited guidance may also prevent participants from maintaining the planting and reuse practices.",
        boundary:
          "Resource considerations now inform project analysis, and the public activity has taken place. **Lasting changes in decision-making or everyday behavior have not yet been established** and require follow-up with tool users and participants.",
      },
      {
        id: "economic",
        title: "Economic Impacts",
        benefit:
          "Greater batch consistency could reduce repeated production and wasted inputs. Comparable production and supply-chain records could help identify sources of material loss and inform process improvements, supporting technical capability under SDG 9.",
        risk: "Process development, quality control, and data management require investment. Reducing necessary experiments or replication to save resources could weaken research reliability and product quality, creating greater costs later.",
        boundary:
          "CirCure has no manufacturing-scale data on costs, yields, or batch failure rates. **Neither cost savings nor economic returns have been demonstrated.** Future assessment would need to consider both avoided losses and the additional costs of achieving them.",
      },
      {
        id: "environmental",
        title: "Environmental Impacts",
        benefit:
          "Better experimental design and more consistent manufacturing could reduce avoidable repetition and failed batches, lowering some material and energy inputs. Reusing existing containers could also extend their useful life. These potential benefits align with SDG 12’s focus on resource efficiency, waste reduction, and responsible consumption.",
        risk: "Raw material supply, circRNA-LNP production, purification, quality testing, temperature-controlled transport, and waste treatment may introduce additional environmental burdens. **An efficiency gain at one stage may shift burdens to another**, potentially creating trade-offs with SDG 13.",
        boundary:
          "CirCure lacks continuous data across raw materials, production, storage, transport, and disposal, and has not completed a carbon footprint or life-cycle assessment. Current evidence supports discussion of resource-use decisions and conditional scenarios, **not a claim of lower overall environmental impact**.",
      },
    ],
  },
  alignment: {
    leadHeading: "SDG Interaction Analysis",
    lead: [
      "Using SST-QN as an initial screening framework, we assessed potential interactions against stakeholder feedback, current experimental practices, and future production scenarios. For each relationship, we considered the mechanism, supporting evidence, and conditions that could produce a synergy or trade-off. **Evidence of a change in project decisions was distinguished from evidence of an environmental or societal outcome.**",
    ],
    findings: [
      "**SDG 17 → SDG 12 is the positive interaction most clearly supported by current evidence.** Cross-disciplinary feedback changed how we identify resource concerns, define assessment boundaries, and plan future data collection. This relationship is supported at the level of project decisions and assessment practices.",
      "**The relationships between SDG 12 and SDGs 9, 3, and 13 remain conditional.** Technical improvements under SDG 9 may reduce wasted inputs, but manufacturing and quality control also require resources. Resource-saving measures must preserve the research reliability and safety needed to pursue health benefits under SDG 3. Likewise, lower material or energy use at one stage supports SDG 13 only if emissions are not increased elsewhere. These relationships therefore require evaluation across the full life cycle.",
      "**The relationship with SDG 8 remains Exploratory, while a direct relationship with SDG 10 is currently Excluded from our analysis.** More efficient production could support future economic performance, but CirCure has no cost or return data to demonstrate this. Even verified manufacturing savings would not, by themselves, establish improved patient access; pricing, payment arrangements, and healthcare availability would also matter.",
      "Our strongest current evidence shows that collaboration has brought resource responsibility into project decisions. **Whether these decisions ultimately deliver health, economic, or environmental benefits remains a question for further measurement**, rather than an outcome we assume.",
    ],
  },
  legacy: {
    intro: [
      "We developed **three reusable tools and guides** to help other teams identify resource inputs and potential waste, assess the evidence behind sustainability claims, and run public activities on resource reuse. Drawing on CirCure’s resource analysis and dormitory planting activity, they distinguish **documented actions, projected impacts, and outcomes requiring validation**. Together, these resources provide practical methods that other teams can adopt, adapt, and build upon.",
    ],
    tools: [
      {
        title: "Resource Responsibility Map",
        why: "Research and development projects involve **resource use and potential waste at different stages**. If the team focuses only on current experiments or improvements in one part of the process, it may overlook resource issues arising during **manufacturing, storage, transportation, and eventual disposal**. It may also become difficult to distinguish **known problems from impacts that still require assessment**.",
        whatItHelpsWith:
          "Map **resource inputs and potential waste** across the stages of **R&D, manufacturing, storage, transportation, and eventual disposal**. Distinguish between **problems that have already occurred, potential future risks, and issues that cannot yet be assessed**, helping the team identify which areas require priority attention or further information.",
        bestFor:
          "**Project kick-offs, comparing R&D plans, phase reviews**, and discussions about **resource responsibility in future manufacturing, storage, transportation, and disposal**.",
        whatItDoes: "",
        pdfs: [
          {
            label: "Chinese",
            fileName: "sustainability-resource-responsibility-map-cn.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-resource-responsibility-map-cn.pdf",
          },
          {
            label: "English",
            fileName: "sustainability-resource-responsibility-map-en.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-resource-responsibility-map-en.pdf",
          },
        ],
      },
      {
        title: "Sustainability Claim Boundary Protocol",
        why: "An improvement in one part of a project does not necessarily mean that its **overall environmental impact** has improved. Without clearly defining the **evidence and scope**, teams may present scenario projections or potential benefits that still require validation as **achieved sustainability outcomes**.",
        whatItHelpsWith:
          "Review the **evidence base and scope** of sustainability claims. Distinguish between **results supported by existing data, scenario projections based on specific assumptions, and impacts that still require future validation**. This helps ensure that each claim matches the available evidence and prevents **overstating sustainability benefits**.",
        bestFor:
          "**Phase summaries, SDG 12 documentation, project presentations**, and situations where the team needs to draft or review claims about **resource savings, waste reduction, or other sustainability outcomes**.",
        whatItDoes: "",
        pdfs: [
          {
            label: "Chinese",
            fileName:
              "sustainability-stakeholder-feedback-decision-protocol-cn.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-stakeholder-feedback-decision-protocol-cn.pdf",
          },
          {
            label: "English",
            fileName:
              "sustainability-stakeholder-feedback-decision-protocol-en.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-stakeholder-feedback-decision-protocol-en.pdf",
          },
        ],
      },
      {
        title: "Sustainable Planting Education Guide",
        why: "Resource reuse and responsible consumption are easier to understand when introduced through **concrete, hands-on activities**. However, a record of a single event is often insufficient for other teams to organize a similar activity. Practical details about **materials preparation, teaching arrangements, and event organization** also need to be documented.",
        whatItHelpsWith:
          "Bring together practical guidance for **plant selection, reusing discarded containers, materials preparation, hands-on planting instruction, and event organization** in dormitory planting activities. This helps teams design and run **participatory activities** that allow participants to understand **resource reuse and responsible consumption through direct experience**.",
        bestFor:
          "**Campus or dormitory planting activities, public education on resource reuse**, and other iGEM teams preparing similar **SDG 12 participatory activities**.",
        whatItDoes: "",
        pdfs: [
          {
            label: "Chinese",
            fileName:
              "sustainability-sustainable-planting-education-guide-cn.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-sustainable-planting-education-guide-cn.pdf",
          },
          {
            label: "English",
            fileName:
              "sustainability-sustainable-planting-education-guide-en.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-sustainable-planting-education-guide-en.pdf",
          },
        ],
      },
    ],
  },
  evidence: {
    intro: [
      "CirCure’s response to SDG 12 has focused mainly on identifying resource responsibilities, evaluating the project, and engaging the public in practical activities. We do not treat the number of stakeholders engaged or the quantity of materials distributed as direct evidence of environmental improvement. Instead, we document whether these activities changed project decisions and clarify what conclusions the available evidence can support.",
    ],
    stats: [],
    measurableIntro: [
      "Project changes that can currently be quantified and tracked include:",
    ],
    measurable: [
      {
        text: "Feedback from **five categories of stakeholders and industry practitioners**, with corresponding project changes:",
        figure: "sdg12Evidence1",
        figureCaption:
          "Stakeholder feedback and resulting changes to CirCure’s resource responsibility framework.",
      },
      {
        text: "A dorm planting activity held in collaboration with the Jilin University Student Environmental Protection Association. The activity distributed **194 sets of planting materials** and encouraged participants to plant using containers they already had.",
        figure: "sdg12Evidence2",
        figureCaption:
          "Dorm planting activity promoting container reuse, with 194 planting kits distributed.",
      },
      {
        text: "**Three reusable resources** documenting the project’s evaluation methods and public engagement experience, made available for future teams to download and use.",
      },
    ],
    significant: [
      "CirCure’s response to SDG 12 is meaningful because stakeholder feedback changed more than how we describe the project. It changed **how the team identifies resource responsibilities, evaluates sustainability claims, and plans future data collection**.",
      "First, resource responsibility became part of current research decisions. The team no longer discusses only future large-scale production. We also consider reagents, consumables, equipment operation, repeat experiments, and waste in current laboratory work. Preliminary experiments, improved experimental design, and standardized waste management can help reduce unnecessary resource use.",
      "Second, the project established a broader scope for evaluation. Resource analysis now extends from the laboratory to process scale-up, batch failures, raw materials, energy, storage and transport, and end-of-life disposal. At the same time, the **Sustainability Claim Boundary Protocol** limits the scope of our conclusions: local resource improvements cannot be presented directly as reductions in overall carbon emissions or life-cycle environmental impact.",
      "Finally, our work on SDG 12 extended from project analysis to public engagement. The 194 sets of planting materials gave participants an opportunity to reuse containers in a practical activity, while the three reusable resources preserve the evaluation methods and practical experience developed through the project.",
      "CirCure has therefore made traceable contributions to SDG 12 in **research decisions, evaluation boundaries, and public engagement**. Current evidence shows that project decisions and participation practices have changed, but it does not yet demonstrate reductions in resource consumption, waste, or overall environmental impact. Those outcomes require continuous resource records, production data, life-cycle assessment, and follow-up on participant practices.",
    ],
  },
};
