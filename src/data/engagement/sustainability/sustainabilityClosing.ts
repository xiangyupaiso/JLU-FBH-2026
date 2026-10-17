/** GROW, contribution assessment and conclusion. Source text preserved. */
import type { WikiSection } from "../../../components/wiki/wikiPageTypes";

export const sustainabilityGrowSection: WikiSection = {
  id: "grow-sustainable-futures",
  index: "06",
  kicker: "06 / GROW: Shaping Sustainable Futures",
  navLabel: "GROW: Shaping Sustainable Futures",
  title: "GROW: Shaping Sustainable Futures",
  summary: "",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "For CirCure, sustainability includes examining the longer-term implications of today’s project choices. During SET and DEVELOP, we identified the sustainability issues relevant to our current work and progressively translated stakeholder feedback into project design and practice. GROW asks further questions:",
        "**What evidence leads us here? What long-term impacts and positive or negative interactions may emerge? What still needs to be proven?**",
        "Drawing on stakeholder interviews, project activities, and available impact evidence, together with SST-QN’s analysis of relationships across SDGs, we identified five goals with potential long-term relevance: SDG 1, SDG 5, SDG 8, SDG 10, and SDG 13.",
        "These goals represent potential development pathways indicated by current evidence. They are not outcomes CirCure has already achieved. The table below summarizes the evidence behind each relationship, the synergies and trade-offs that may emerge, and the questions that still require validation.",
      ],
    },
    {
      type: "table",
      headers: [
        "SDG",
        "Why It Matters to CirCure",
        "Potential Synergy",
        "Potential Trade-off",
        "What Still Needs to Be Proven",
      ],
      rows: [
        [
          "SDG 1 No Poverty",
          "Disease and treatment may increase household medical expenses, income losses from time away from work, and caregiving burdens.",
          "Better disease control may reduce long-term financial pressure.",
          "High treatment costs may increase patients’ financial burden.",
          "Long-term medical expenses, income losses from time away from work, and family caregiving costs.",
        ],
        [
          "SDG 5 Gender Equality",
          "Women may have unequal opportunities to access health information and participate in health decisions.",
          "Health education may strengthen women’s health awareness and participation in decision-making.",
          "Resources may remain concentrated among groups with easier access to services.",
          "Coverage, access to information, and participation in decision-making across different groups of women.",
        ],
        [
          "SDG 8 Decent Work and Economic Growth",
          "Technology translation may generate industrial, manufacturing, and economic value.",
          "Consistent manufacturing and collaboration across disciplines may improve industrial efficiency.",
          "High investment and industrial expansion do not necessarily lead to sustainable growth or decent work.",
          "Scale-up capacity, economic output, employment opportunities, and job quality.",
        ],
        [
          "SDG 10 Reduced Inequalities",
          "Costs, payment coverage, and healthcare resources determine whether patients can access treatment.",
          "Controlling costs and broadening coverage may promote health equity.",
          "High prices and concentrated resources may widen gaps in access to treatment.",
          "Affordability, payment mechanisms, population coverage, and actual access to treatment.",
        ],
        [
          "SDG 13 Climate Action",
          "Large-scale production, storage and transport, and waste treatment may generate carbon emissions.",
          "Reducing failed batches may lower resource and energy inputs per unit of product.",
          "Additional production and cold-chain requirements may increase the overall environmental burden.",
          "Energy use, transport, waste, carbon footprint, and life-cycle assessment.",
        ],
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "The table presents preliminary long-term assessments based on current evidence. The following sections explain the basis of each relationship, its potential positive and negative effects, and the limits of the evidence available.",
      ],
    },
    {
      type: "subheading",
      id: "grow-sdg1",
      index: "6.1",
      title: "SDG 1 — No Poverty",
    },
    {
      type: "prose",
      paragraphs: [
        "SDG 1, No Poverty, aims to end poverty in all its forms. For biomedical innovation, disease can affect household finances through treatment expenses, long-term care, and lost work, as well as affecting patients’ health. A technology’s long-term value therefore also depends on whether it can improve health without increasing the financial burden on patients and their families.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Evidence Leads Us Here?",
    },
    {
      type: "prose",
      paragraphs: [
        "Feedback from patients with TNBC and their family members showed us that the burden of cancer extends beyond treatment expenses. Interruptions to work, lost income, and family caregiving can affect the entire household. Discussions about basic medical insurance and commercial insurance further highlighted the role of reimbursement policies, coverage, and patients’ out-of-pocket share.",
        "These findings prompted us to ask whether CirCure’s potential health value could eventually help reduce the long-term financial pressure that cancer places on families.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "Potential Impact & Interactions",
    },
    {
      type: "prose",
      paragraphs: [
        "If CirCure can reduce recurrence risk or extend disease control, patients may face less financial pressure from repeated treatment, interruptions to work, and long-term care. This could create a potential synergy between the health value associated with SDG 3 and SDG 1.",
        "However, circRNA vaccine development, production, quality control, storage, and transport may involve substantial costs. Without appropriate pricing and payment coverage, the technology could increase household financial burdens and create trade-offs with the equitable access addressed by SDG 10.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Still Needs to Be Proven?",
    },
    {
      type: "prose",
      paragraphs: [
        "CirCure currently has no clinical or pharmacoeconomic evidence demonstrating that it can reduce patients’ long-term medical expenses or household financial burdens.",
        "Future evaluation will need to consider recurrence and disease control, treatment expenditure, income lost through interruptions to work, family caregiving costs, and patients’ actual financial burden. Until these data are available, SDG 1 represents a potential long-term impact pathway.",
      ],
    },
    {
      type: "subheading",
      id: "grow-sdg5",
      index: "6.2",
      title: "SDG 5 — Gender Equality",
    },
    {
      type: "prose",
      paragraphs: [
        "SDG 5, Gender Equality, aims to achieve gender equality and empower all women and girls. For CirCure, which focuses on breast cancer and women’s health, improving health alone does not establish progress toward gender equality. We also need to consider whether women have equitable access to health information and healthcare resources, along with opportunities to express their needs and participate in decisions about their own health.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Evidence Leads Us Here?",
    },
    {
      type: "prose",
      paragraphs: [
        "Feedback from Deputy Dean Yawen Liu on women’s health and disease prevention prompted us to incorporate breast health, screening, and early detection into public education. We subsequently organized the Pink Care public education activity and developed the Breast Guardian story-based game, aiming to improve access to reliable health information and encourage proactive attention to health.",
        "These activities led us to consider whether women’s health education could, over time, support women in expressing their health needs and participating in health decisions.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "Potential Impact & Interactions",
    },
    {
      type: "prose",
      paragraphs: [
        "If these educational activities reach women from different backgrounds and strengthen their access to health information and participation in health decisions, our work under SDG 3 and SDG 4 could contribute to synergies with SDG 5.",
        "However, if activities primarily reach people who already have ready access to information and healthcare, their impact may be limited and could involve trade-offs with SDG 10. Improvements in women’s health also do not, by themselves, demonstrate changes in structural gender inequality.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Still Needs to Be Proven?",
    },
    {
      type: "prose",
      paragraphs: [
        "Current evidence shows that CirCure has delivered women’s health education and public science communication. It does not yet demonstrate that these activities have reduced inequalities in women’s access to health resources or participation in health decisions.",
        "Future evaluation will need to examine reach across different groups of women, changes in knowledge, willingness to undergo screening, and participation in health decisions. These findings will help determine whether the activities improve equity in access to information, resources, and opportunities to participate.",
      ],
    },
    {
      type: "subheading",
      id: "grow-sdg8",
      index: "6.3",
      title: "SDG 8 — Decent Work and Economic Growth",
    },
    {
      type: "prose",
      paragraphs: [
        "SDG 8, Decent Work and Economic Growth, aims to promote sustained, inclusive, and sustainable economic growth and full and productive employment. For biomedical innovation, translating a technology from the laboratory into practical use may create industrial and economic value. This value depends on production efficiency, costs, employment opportunities, and the long-term sustainability of industrial development, as well as the feasibility of translation at scale.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Evidence Leads Us Here?",
    },
    {
      type: "prose",
      paragraphs: [
        "Our visit to a medical device innovation company in Shanghai’s Lingang New Area prompted us to distinguish technical feasibility from readiness for practical use. We incorporated stable production, quality control, scale-up, and conditions of use into our considerations for future development.",
        "Discussions with Hualan Biological further encouraged us to examine product positioning, development priorities, markets, costs, intellectual property, industry collaboration, and development risks in our Entrepreneurship analysis. These activities informed CirCure’s early product and business planning, but have not generated economic returns.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "Potential Impact & Interactions",
    },
    {
      type: "prose",
      paragraphs: [
        "If CirCure completes product development and achieves stable production, its technology could provide a basis for new products and generate demand for process development, quality control, and industry collaboration. Innovation under SDG 9 could thereby support economic activity under SDG 8.",
        "However, clinical development, production at scale, quality control, and cold-chain storage and transport require sustained investment. High costs could affect market adoption and patient accessibility, with potential trade-offs involving SDG 10, SDG 12, and SDG 13.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Still Needs to Be Proven?",
    },
    {
      type: "prose",
      paragraphs: [
        "CirCure has not entered production at scale and has no data on market adoption, economic returns, or employment. We therefore cannot claim that the project has already supported economic growth or created decent work.",
        "Even if it eventually generates demand for research, production, quality management, or industry collaboration, job numbers alone would not establish a contribution to decent work. Employment opportunities, working conditions, occupational safety, and opportunities for professional development would also need to be evaluated.",
        "Future data on production costs, market adoption, industry collaboration, economic returns, and employment quality will be needed to determine whether technological innovation translates into sustainable industrial and economic value.",
      ],
    },
    {
      type: "subheading",
      id: "grow-sdg10",
      index: "6.4",
      title: "SDG 10 — Reduced Inequalities",
    },
    {
      type: "prose",
      paragraphs: [
        "SDG 10, Reduced Inequalities, aims to reduce inequality within and among countries. For innovative medical technologies, the availability of a treatment does not mean that all patients can benefit equally. Its value also depends on whether treatment costs, payment coverage, healthcare resources, and practical accessibility allow patients from different backgrounds to benefit.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Evidence Leads Us Here?",
    },
    {
      type: "prose",
      paragraphs: [
        "Feedback from patients and family members helped us recognize that even an effective treatment may not benefit all patients equally. Jianguo Wang’s feedback on health insurance payment and reimbursement mechanisms further showed that patients’ actual financial burden depends not only on treatment prices, but also on insurance coverage, reimbursement conditions, and the proportion they must pay out of pocket.",
        "Jing Wen, a commercial health insurance professional, explained that commercial insurance can provide supplementary coverage for some eligible patients, but cannot cover everyone. Lei Wang broadened our focus from whether patients could afford treatment to whether they could actually access it: regional healthcare resources, service capacity, and opportunities to receive care also shape treatment accessibility.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "Potential Impact & Interactions",
    },
    {
      type: "prose",
      paragraphs: [
        "If CirCure can demonstrate efficacy and safety while controlling costs and fitting within feasible payment and healthcare delivery arrangements, the health value associated with SDG 3 and the technological innovation associated with SDG 9 could translate into more equitable treatment opportunities.",
        "However, complex circRNA and LNP production, quality control, and cold-chain storage and transport could also increase treatment costs and implementation requirements. The technology might therefore initially reach patients with greater financial means or better access to healthcare resources. We classify both SDG 3 ↔ SDG 10 and SDG 9 ↔ SDG 10 as Conditional relationships: whether they ultimately produce synergies or trade-offs depends on prices, payment coverage, regional resources, and actual implementation conditions.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Still Needs to Be Proven?",
    },
    {
      type: "prose",
      paragraphs: [
        "CirCure currently has no data on product pricing, health insurance coverage, patients’ out-of-pocket costs, or actual treatment coverage. We therefore cannot claim that the project has already improved health equity.",
        "Future evaluation will need to examine treatment costs and pricing, basic medical insurance and commercial insurance coverage, the actual financial burden on different patient groups, regional healthcare resources, and whether patients can obtain treatment in practice. These data will help determine whether CirCure ultimately narrows or widens health disparities.",
      ],
    },
    {
      type: "subheading",
      id: "grow-sdg13",
      index: "6.5",
      title: "SDG 13 — Climate Action",
    },
    {
      type: "prose",
      paragraphs: [
        "SDG 13, Climate Action, calls for urgent action to combat climate change and its impacts. For biomedical innovation, future production at scale may create additional material, energy, and transport demands. Environmental responsibility therefore requires attention to both resource efficiency and the carbon emissions and climate impacts that may arise throughout the product lifecycle, including production, storage, transport, and waste treatment.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Evidence Leads Us Here?",
    },
    {
      type: "prose",
      paragraphs: [
        "Discussions with companies involved in carbon emissions management helped us recognize that the environmental impact of a medical technology cannot be assessed solely through laboratory reagents and consumables. Raw materials, production at scale, packaging, storage, transport, and waste treatment also need to be considered.",
        "SAIC Motor’s green manufacturing practices further encouraged us to examine CirCure from a lifecycle perspective. Discussions with Shanghai Lingang New Area Cross-Border Data Technology Co., Ltd. also highlighted that future environmental improvements would need to be verified using continuous, comparable production and supply chain data. We therefore expanded our assessment from current laboratory resource use to the full lifecycle of a potential future product.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "Potential Impact & Interactions",
    },
    {
      type: "prose",
      paragraphs: [
        "If CirCure can improve process stability and reduce failed batches and repeated production, the resource efficiency addressed by SDG 12 could support synergies with SDG 13 by reducing the material and energy inputs required per unit of usable product.",
        "However, circRNA and LNP production at scale, equipment operation, low-temperature storage, and cold-chain transport could also increase energy demand and carbon emissions. Improvements in individual production steps do not necessarily reduce the overall environmental burden. The direction of the relationship between SDG 12 and SDG 13 therefore depends on process efficiency, energy sources, storage and transport methods, and additional resource demands across the full lifecycle.",
      ],
    },
    {
      type: "heading",
      level: 4,
      title: "What Still Needs to Be Proven?",
    },
    {
      type: "prose",
      paragraphs: [
        "CirCure has not entered production at scale, and we currently lack actual data on production and transport energy use, carbon emissions, and lifecycle impacts. We therefore cannot claim that the project has already reduced carbon emissions.",
        "Future work will need to record energy use per unit of product, raw material inputs, batch failure rates, storage and cold-chain requirements, transport methods, and waste treatment. Once sufficient data are available, carbon footprint or lifecycle assessments will be needed to determine whether improvements in individual processes translate into overall climate benefits.",
        "CirCure combined the **SDG Impact Framework** and **SST-QN analysis** to develop a **Set–Develop–Grow framework spanning 10 SDGs**, assessing long-term social, economic, and environmental impacts. Feedback from **94 stakeholders across seven fields** guided project design and evaluation. This work yielded **34 reusable methods, tools, and educational resources**, with documented feedback-driven improvements and **14 educational activities** providing traceable evidence of our contributions.",
      ],
    },
  ],
};

export const sustainabilityContributionSection: WikiSection = {
  id: "sdg-contributions",
  index: "07",
  kicker: "07 / CirCure’s SDG Contributions",
  navLabel: "CirCure’s SDG Contributions",
  title: "CirCure’s SDG Contributions",
  summary: "",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Across our research, education, partnerships, and resource-responsibility actions, we sought to turn people’s needs into decisions we could act on and document. Using this evidence alongside SST-QN analysis, we quantified CirCure’s contributions to our chosen SDGs. The bubble plot brings these results together, showing direct, first-order indirect, and higher-order indirect contributions and their combined scores. Larger bubbles indicate greater contribution magnitudes within the model, while the separate components distinguish documented current contributions from potential extensions under the stated development conditions.",
      ],
    },
    {
      type: "feature",
      key: "sdg-contribution-bubbles",
    },
    {
      type: "prose",
      paragraphs: [
        "For our three core goals, CirCure’s total contribution scores for **SDG 3, SDG 9, and SDG 12 are 3.227, 3.435, and 2.358**, respectively. Their direct components are grounded in responding to health needs, strengthening technological research, and bringing resource responsibility into project decisions; their indirect components capture possible connections across these areas. Behind the numbers are patients and families who want to keep working, care for loved ones, and plan their lives with greater confidence. We brought those priorities into vaccine research, allowing them to shape technical choices and experimental evaluation. Health needs give our work direction; innovation provides a research pathway that can be tested and developed; resource responsibility keeps the material, energy, and environmental costs of that pathway in view.",
        "**SDG 4 has the highest total score, at 3.819**, combining our direct educational work with positive indirect connections from other areas of the project. We translated research into lessons, experiments, stories, and interactive games, delivering **14 educational activities** and creating opportunities for learners from different backgrounds to ask questions, explore, and participate. Their feedback continued to shape our educational design. We hope each learning experience can spark a new interest and give learners the confidence to keep asking questions about science and the world around them.",
        "For **SDG 17, with a total contribution score of 1.875**, our work represents the first steps of a new team reaching out to a wider world. In our first year, we established initial connections with **UNICEF** through the **Global Youth Development Programme Exchange Week and China–Africa youth exchange activities**. These exchanges gave us opportunities to learn from people with different experiences and explore how our work could contribute to shared global challenges. Alongside collaborations with other iGEM teams, we are working to turn these connections into shared learning, joint outputs, and resources others can build upon. We are still at the beginning, but we hope to grow into a team that contributes beyond its own project—bringing what we can, learning from others, and taking responsibility for the world we share.",
        "The smaller indirect bubbles for **SDGs 1, 5, 8, 10, and 13** show where CirCure’s contributions could extend through future development. Through GROW, we hope our work could help ease illness-related financial pressures on families, support women’s access to health information and participation in decisions, create industrial and employment opportunities, widen equitable access to treatment, and support climate action through responsible research and production. These goals currently receive no direct contribution score; their contributions arise through conditional first-order and higher-order pathways. They give us questions to carry forward as we consider whom CirCure could reach, what it might cost, and what responsible development would require.",
        "The small negative bubbles for **SDGs 14 and 15** keep potential ecological trade-offs visible within the assessment. Future scale-up could increase material use, energy demand, emissions, and waste, while high pricing could limit the equitable access considered under SDG 10. These possibilities remain part of our contribution assessment because the value of innovation also depends on how it is developed and who can benefit from it. We want patients to have access to treatment without having to sacrifice their family’s livelihood. As we work towards that hope, we also want to care for the world we all share.",
      ],
    },
  ],
};

export const sustainabilityConclusionSection: WikiSection = {
  id: "sustainability-conclusion",
  index: "08",
  kicker: "08 / Conclusion",
  navLabel: "Conclusion",
  title: "Conclusion",
  summary: "",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "For CirCure, sustainability has been a commitment throughout the project: allowing real-world perspectives to shape the technology, taking responsibility for the future implications of today’s decisions, and leaving what we have learned for others to build upon.",
      ],
    },
    {
      type: "subheading",
      id: "sustainability-conclusion-1",
      index: "8.1",
      title: "From Stakeholder Voices to Project Decisions",
    },
    {
      type: "prose",
      paragraphs: [
        "Through the SCALE Model, we continuously incorporated feedback from **94 stakeholders across seven fields** into CirCure. Their input helped clarify our therapeutic focus, refine technical design and delivery strategies, strengthen experimental evaluation, and bring patients’ quality of life, treatment accessibility, and resource responsibility into project decisions. These voices continue to shape our work, reminding us that behind every research decision are patients and families hoping for a better life.",
      ],
    },
    {
      type: "subheading",
      id: "sustainability-conclusion-2",
      index: "8.2",
      title: "From Immediate Actions to Long-term Responsibility",
    },
    {
      type: "prose",
      paragraphs: [
        "Across social, economic, and environmental dimensions, we incorporated long-term health benefits, health equity, affordability, costs of production at scale, and lifecycle environmental impacts into our evaluation. Throughout this process, we distinguished current results from potential future contributions. We hope technological progress can lead to options that patients can access and families can afford, with due care for the environment we share. This responsibility begins with the research decisions we make today.",
      ],
    },
    {
      type: "subheading",
      id: "sustainability-conclusion-3",
      index: "8.3",
      title: "From Individual SDGs to a System of Synergies and Trade-offs",
    },
    {
      type: "prose",
      paragraphs: [
        "Using **SST-QN**, we analyzed synergies and trade-offs across all **17 SDGs**. With the **Set–Develop–Grow Impact Framework covering 10 SDGs**, we quantified the project’s direct and indirect contributions within the model. Our aim is to present CirCure with honesty and responsibility: understanding where its impacts begin, under which conditions they may occur, and how far the evidence allows our conclusions to extend.",
      ],
    },
    {
      type: "subheading",
      id: "sustainability-conclusion-4",
      index: "8.4",
      title: "From One Team’s Practice to a Shared Starting Point",
    },
    {
      type: "prose",
      paragraphs: [
        "We documented our practice in **34 reusable methods, tools, and educational resources**, and established direct collaborations with **26 iGEM teams** to exchange experience, develop joint outputs, and share resources. These outputs give future teams a foundation for understanding our decisions, applying our methods, and further developing the resources. The season will end, but we hope others will continue to use, improve, and build on what we leave behind.",
      ],
    },
    {
      type: "subheading",
      id: "sustainability-conclusion-5",
      index: "8.5",
      title: "From Measurable Results to Enduring Impact",
    },
    {
      type: "prose",
      paragraphs: [
        "Our **14 educational activities recorded a cumulative attendance of 4047**. Across **480 valid questionnaire responses**, the mean self-reported scores for gains in understanding and willingness to continue learning were **8.2 and 8.3 out of 10**, respectively. These responses reflect participants’ perceived learning gains and interest in further exploration, while providing a basis for continued improvement. Together with feedback-driven project adjustments and shared outputs, they document changes we can currently substantiate. We hope the curiosity sparked during an activity can continue long after it ends.",
        "CirCure’s long-term value still requires further validation. We have given this year’s efforts—and our hopes for what may follow—the shape of a city. Here, laboratories, classrooms, and community spaces live side by side, connected by streets and bridges. The foreground holds the work we have done; the distance leaves room for what may still grow. We hope these efforts can one day help lay the foundation for more reliable, accessible treatment options, so that people facing disease can care for their families, make plans for their lives, and look toward tomorrow with hope.",
        "Click on a scene to revisit the records behind it: the discussions that shaped an idea, the conversations that changed our perspective, and the people who shared their insights and worked alongside us. Stay a little longer. Follow the paths that catch your eye, and discover the people and stories that gave this city its warmth.",
      ],
    },
  ],
};
