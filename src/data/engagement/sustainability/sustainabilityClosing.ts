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
      type: "feature",
      key: "sdg-explorer",
    },
    {
      type: "prose",
      paragraphs: [
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
      ],
    },
    {
      type: "feature",
      key: "sustainability-interactive-city",
    },
    {
      type: "prose",
      paragraphs: [
        "CirCure’s long-term value still requires further validation. We have given this year’s efforts—and our hopes for what may follow—the shape of a city. Here, laboratories, classrooms, and community spaces live side by side, connected by streets and bridges. The foreground holds the work we have done; the distance leaves room for what may still grow. We hope these efforts can one day help lay the foundation for more reliable, accessible treatment options, so that people facing disease can care for their families, make plans for their lives, and look toward tomorrow with hope.",
        "Click on a scene to revisit the records behind it: the discussions that shaped an idea, the conversations that changed our perspective, and the people who shared their insights and worked alongside us. Stay a little longer. Follow the paths that catch your eye, and discover the people and stories that gave this city its warmth.",
      ],
    },
  ],
};
