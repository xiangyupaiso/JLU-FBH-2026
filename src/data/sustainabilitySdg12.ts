import type {
  LegacyTool,
  SdgScaleContent,
  StakeholderProfile,
} from "./sustainabilityData";

/* ----------------------------------------------------------------------------
 * SDG 12 — Responsible Consumption and Production
 * -------------------------------------------------------------------------- */

const intro: ReadonlyArray<string> = [
  "SDG 12，负责任消费和生产，旨在确保可持续的消费和生产模式。对于生物医药创新而言，技术价值不仅取决于“能否实现”，也取决于研发、生产与未来应用过程中资源如何被使用，以及由此可能产生怎样的环境负担。",
  "我们将SDG12纳入SET层，是因为iGEM所创造的不只是实验室中的结果，更可能成为未来真实世界中的技术。越是在研发早期，技术路线、材料选择和生产方式就越具有调整空间，也越有机会把可持续性真正写进创新本身。因此，我们希望从项目起点就开始思考并持续回答：一项技术应该如何被负责任地研发、生产和使用？让可持续性从一开始就成为项目设计的重要原则，而不是技术成熟后的补充要求。",
];

const stakeholderIntro: ReadonlyArray<string> = [
  "对于CirCure而言，项目目前仍处于研发阶段，尚未进入标准化和规模化生产，因此我们不将未来可能产生的资源节约视为已经实现的可持续成果。我们从当前研发过程中实际发生的资源投入与消耗出发，进一步关注未来生产过程中可能出现的批次失败、重复生产及额外资源投入，并逐步将分析延伸至原材料、储运和废弃物等环节。通过相关利益者反馈、情景预测与跨行业实践，我们希望识别CirCure在不同研发与生产阶段可能产生的资源责任，并明确当前能够改善、能够预测以及仍需未来验证的影响。",
  "在识别出不同研发与生产阶段可能出现的资源责任后，我们进一步希望了解：真实产业中，这些资源消耗是如何被识别、减少并持续管理的。因此，我们将视角从生物医药拓展到其他行业，通过项目发展周中的企业交流与实地参访，学习不同产业在碳排放核算、生产过程优化和数据化管理方面的实践，并思考其中哪些经验能够为CirCure未来的负责任生产提供参考。",
];

const stakeholders: ReadonlyArray<StakeholderProfile> = [
  {
    id: "ehs-staff",
    name: "实验室管理 / EHS人员",
    role: "实验室资源管理与EHS",
    variant: "field",
    relevantStakeholder: "实验室资源管理与EHS相关人员。",
    whyEngaged: "了解当前研发阶段真实存在的资源使用与环境责任。",
    feedback: "试剂、一次性耗材、重复实验和实验废弃物都会带来额外资源消耗。",
    incorporated:
      "我们开始区分当前可以改善的资源使用问题与未来才能判断的环境影响。",
    improvement: "明确当前研发阶段能够直接改善的资源责任。",
    sdgAddressed: "SDG 12 — 从研发阶段开始识别并减少不必要的资源投入和潜在浪费。",
    detailedInterview: [
      "CirCure目前仍处于研发阶段，所以我们首先希望回答一个更现实的问题：在尚未进入规模化生产之前，我们现在的研发过程本身是否已经存在可以被识别和改进的资源责任？",
      "在与实验室管理及EHS相关人员交流时，我们重新梳理了circRNA制备、细胞实验和后续功能验证过程中涉及的资源投入。除RNA制备相关试剂外，大量离心管、枪头、培养皿等一次性耗材，以及细胞培养、设备运行和实验废弃物处理都会形成持续的资源消耗。尤其当实验条件尚未确定时，条件设置不合理或重复开展低信息量实验，会同时增加试剂、耗材和设备使用。",
      "因此，相关人员建议我们将减少不必要的重复实验作为当前阶段最现实的资源责任之一：在正式实验前尽可能明确实验目的和关键变量，通过小规模预实验筛选条件；合理安排实验组别和重复数量；同时按照实验室规范对生物废弃物、污染耗材及其他实验废物进行分类处理。",
      "这些建议让我们首先明确了一个边界：当前阶段真正能够改善的，是已经实际发生的实验资源使用，而不是尚未发生的工业生产。",
    ],
  },
  {
    id: "wang-juncai",
    name: "王俊才",
    role: "CMC / 生产相关人员",
    variant: "interview",
    relevantStakeholder: "生物医药CMC与生产相关人员。",
    whyEngaged: "了解CirCure未来生产阶段可能出现的资源责任。",
    feedback: "工艺波动、批次失败和重复生产都可能带来额外的原材料与生产资源消耗。",
    incorporated: "我们将资源责任从当前研发阶段进一步扩展至未来生产及后续环节。",
    improvement: "推动形成 Resource Responsibility Map，系统梳理不同发展阶段的资源责任。",
    sdgAddressed: "SDG 12 — 从项目发展全过程识别潜在资源浪费与责任边界。",
    detailedInterview: [
      "在明确当前研发阶段的资源责任后，我们进一步向王俊才请教：如果CirCure未来进入生产阶段，哪些新的资源问题会逐渐出现？",
      "他指出，对于RNA类产品而言，资源浪费并不只是“用了多少原材料”这么简单。真正进入生产阶段后，如果关键工艺参数不稳定，或者不同批次之间差异较大，就可能出现产品无法达到质量要求、批次报废甚至重新生产的情况。此时，已经投入的RNA原料、脂质材料、一次性耗材以及设备运行时间都可能被浪费。",
      "这一建议让我们意识到，资源责任并不是固定不变的，而会随着项目发展阶段不断变化。当前研发阶段主要面对试剂、耗材、重复实验和实验废弃物；进入未来生产后，工艺稳定性、批次失败和重复生产会成为新的问题；进一步走向应用后，原材料、储运和末端处置又可能带来新的资源投入。",
      "基于EHS人员和王俊才提供的两个不同阶段的视角，我们进一步形成了 Resource Responsibility Map，用于梳理不同项目阶段中可能出现的资源责任，并区分哪些问题已经发生、哪些将在未来出现，以及哪些目前还缺少足够的数据进行判断。",
    ],
  },
  {
    id: "agri-carbon-company",
    name: "农产品碳排放相关企业",
    role: "碳排放核算与管理",
    variant: "field",
    relevantStakeholder: "农产品碳排放核算与管理相关企业。",
    whyEngaged: "了解真实产业如何识别和评价生产过程中的环境影响。",
    feedback:
      "局部资源消耗下降并不等于产品整体环境影响降低，评价结果需要明确数据范围和分析边界。",
    incorporated: "我们开始区分局部资源改善与整体环境影响，避免对预测结果作过度解释。",
    improvement: "推动形成 Sustainability Claim Boundary Protocol，明确可持续性结论的证据边界。",
    sdgAddressed: "SDG 12 — 提高资源与环境影响评价的准确性和责任性。",
    detailedInterview: [
      "在识别出CirCure不同阶段可能存在的资源责任后，我们进一步希望了解：当企业开始讨论“资源减少”或“环境改善”时，这些结论究竟是如何被判断和证明的。因此，在项目发展周期间，我们采访了一家从事农产品碳排放相关工作的企业。",
      "企业相关人员提醒我们，环境影响评价需要首先明确评价对象、分析边界和数据范围。对于农产品而言，生产过程往往涉及原料投入、能源使用、加工、储存和运输等多个环节。如果只观察其中一个环节的变化，就很难直接代表整个产品的环境表现。同样，一个局部指标有所改善，也不能自动推导出整体碳排放或环境负担已经下降。",
      "这一点让我们重新审视CirCure中的可持续性表述。即使未来某一环节能够减少资源消耗，我们也需要先判断现有数据究竟覆盖了什么、没有覆盖什么，而不能直接将一个局部变化扩大为整体环境改善。",
      "基于这一认识，我们进一步形成了 Sustainability Claim Boundary Protocol，用于检查每一项可持续性结论背后的证据范围，并避免将“可能改善”表述成“已经改善”。",
    ],
  },
  {
    id: "saic-group",
    name: "上汽集团",
    role: "新能源汽车与绿色制造",
    variant: "field",
    relevantStakeholder: "大型制造业与新能源汽车绿色生产实践企业。",
    whyEngaged: "了解成熟制造企业如何在实际生产中系统降低资源与环境负担。",
    feedback:
      "可持续生产不能只依赖单一工艺优化，还需要同时考虑能源、制造、供应链、物流及产品后续环节。",
    incorporated:
      "我们开始从更加完整的生命周期视角审视CirCure未来可能产生的资源与环境影响。",
    improvement: "将分析从单一生产损耗进一步扩展至原材料、生产、储运和末端处置等不同环节。",
    sdgAddressed: "SDG 12 — 从更完整的生命周期视角识别潜在资源与环境负担。",
    detailedInterview: [
      "在农产品碳排放相关企业的交流中，我们已经意识到，可持续性评价不能只看一个局部指标。那么进一步的问题就是：如果不能只看一个环节，真实制造企业会把可持续生产管理到什么范围？",
      "在参访上汽集团新能源汽车相关产业实践时，我们进一步观察了大型制造企业如何将资源与环境责任放到更完整的生产体系中考虑。相比单纯强调新能源汽车产品本身的低碳属性，上汽的相关实践还涉及生产能源、制造过程、供应链、物流以及产品生命周期等多个环节。",
      "这一点对CirCure很有启发。此前，我们更多关注研发耗材和未来生产损耗；但如果将视角继续向外扩展，circRNA疫苗未来还可能涉及RNA与脂质原料投入、生产设备运行、储存条件、冷链运输以及使用后的废弃物处理。",
      "因此，我们开始不再把“减少某一环节的资源消耗”作为最终判断，而是分别审视不同阶段可能产生的新增投入和环境负担。对于目前尚未发生的环节，我们不提前给出环境结论，而是将其保留为未来进入相应阶段后需要继续评价的问题。",
    ],
  },
  {
    id: "lingang-data-company",
    name: "上海临港新片区跨境数据科技有限公司",
    role: "数据治理与供应链数字化",
    variant: "field",
    relevantStakeholder: "数据治理与供应链数字化相关企业。",
    whyEngaged: "了解企业如何利用数据记录和过程追踪支持长期生产管理。",
    feedback: "只有持续记录关键生产数据，资源消耗和生产改善才有可能被比较和验证。",
    incorporated:
      "我们进一步明确未来应关注原材料、批次、储运和废弃物等数据的持续记录。",
    improvement: "为未来开展真实的资源效率评价和环境影响分析保留数据基础。",
    sdgAddressed: "SDG 12 — 通过持续、可追溯的数据支持更加可靠的负责任生产评价。",
    detailedInterview: [
      "在前面的企业交流中，我们已经逐渐将关注范围从单一生产环节扩展到原材料、制造、储运和末端处理等不同阶段。但这也带来了一个更加现实的问题：即使知道应该关注什么，如果没有连续的数据，又如何判断未来是否真的发生了改善？",
      "在参访上海临港新片区跨境数据科技有限公司时，我们接触到了数据治理、供应链信息管理和数据追踪等实践。这让我们意识到，企业能够持续优化生产过程，一个重要基础就是保留不同环节产生的数据，使生产变化能够被比较、追踪和重新评价。",
      "对于CirCure而言，这意味着未来如果进入进一步开发，仅仅提出“减少资源浪费”的目标是不够的，还需要保留能够支撑这一判断的数据。例如原材料投入、批次成功与失败情况、关键质量信息、储存与运输条件以及废弃物产生情况，都可能成为后续评价的重要依据。",
      "只有当这些数据能够被持续记录、比较和追踪时，我们才可能在未来真正判断生产过程是否实现了资源效率改善，并进一步开展碳足迹或生命周期相关评价。",
    ],
  },
  {
    id: "dorm-planting",
    name: "Dorm Planting Education",
    role: "寝室植物种植教育活动",
    variant: "field",
    fieldRows: [
      {
        label: "对象",
        paragraphs: [
          "可持续生活与植物种植实践教育。",
          "吉林大学大学生环境保护协会。",
        ],
      },
      {
        label: "原因",
        paragraphs: [
          "通过植物种植和废旧容器再利用，让参与者在日常生活中理解资源利用、减少浪费与负责任消费。",
        ],
      },
      {
        label: "反馈",
        paragraphs: [
          "我们现场讲解并指导番茄、草莓等植物的种植与养护。参与者只需自带塑料瓶等可重复利用的容器即可参与，活动共发放 194 份种植材料。",
        ],
      },
      {
        label: "改变",
        paragraphs: [
          "将植物种植、废旧容器再利用与可持续生活教育结合，使参与者能够亲自实践资源循环利用，并将 SDG 12 从理念转化为日常行动。",
        ],
      },
    ],
    sdgAddressed:
      "SDG 12 — 促进资源再利用，并通过实践教育提升参与者对负责任消费和资源使用的认识。",
    detailedInterview: [
      "除了从 CirCure 的研发和未来生产过程讨论资源责任，我们也希望把 SDG 12 带到学生能够直接参与的日常生活中。因此，我们与吉林大学大学生环境保护协会共同开展了寝室植物种植教育活动，以番茄、草莓等适合日常养护的植物为载体，让参与者通过亲手种植理解资源使用、物品再利用和负责任消费。",
      "活动开始前，我们没有为参与者统一购买新的花盆，而是鼓励大家自带塑料瓶等闲置容器作为种植容器。这样的设计本身就是活动的一部分：原本可能被直接丢弃的塑料容器，可以通过简单再利用获得新的用途。",
      "在现场，我们不仅发放种植材料，还向参与者讲解番茄、草莓等植物的基本种植和养护方法，并指导大家现场完成种植。整个活动共发放 194 份种植材料，也意味着这项活动并没有停留在一次性的知识讲解，而是让实际的种植实践继续延伸到活动结束之后。",
      "通过与吉林大学大学生环境保护协会合作，我们将植物种植、废旧容器再利用和可持续生活教育结合起来，使 SDG 12 从抽象理念转化为参与者能够亲自完成并继续实践的日常行动。",
    ],
  },
];

const stakeholderOutro: ReadonlyArray<string> = [
  "在通过实验室、CMC及产业相关利益相关者的交流逐步完善 CirCure 自身的资源责任分析后，我们也开始思考：SDG 12 是否只能停留在项目研发和未来生产中？负责任消费与生产同样与每个人的日常选择有关。因此，我们进一步将这一理念带出实验室，与吉林大学大学生环境保护协会合作，通过更容易参与的生活实践，让更多学生亲自接触资源再利用和可持续生活。",
];

const consequencesLead: ReadonlyArray<string> = [
  "短期影响：在当前研发阶段，CirCure 对 SDG 12 的影响主要体现在资源责任意识与研发决策方式的改变，而非已实现的规模化资源节约。通过实验室管理与 EHS 反馈，我们开始系统识别试剂、一次性耗材、重复实验、设备运行及废弃物等资源投入，并通过预实验优化、实验设计调整与规范化废弃物管理减少不必要的重复消耗。同时，CMC 与生产端的建议将视角延伸至未来生产环节，使我们意识到工艺波动、批次失败与重复生产同样可能构成重要资源浪费，据此形成 Resource Responsibility Map，用于区分已发生、潜在与暂不可评估的资源责任。",
  "跨行业交流进一步推动我们建立 Sustainability Claim Boundary Protocol，明确区分当前证据能够支持的结果、潜在影响和仍需未来验证的结论。同时，我们与吉林大学大学生环境保护协会开展寝室植物种植教育活动，共发放 194 份种植材料。因此，SDG 12 在当前阶段不仅进入了 CirCure 的研发决策，也通过资源再利用和实践教育延伸到了学生能够直接参与的日常生活中。",
];

const consequences: SdgScaleContent["consequences"] = [
  {
    id: "social",
    title: "社会影响",
    icon: "community",
    color: { token: "--care", hex: "#d784b3", paletteName: "pinkThread" },
    description:
      "长期来看，SDG 12 对社会层面的影响同时体现在研发责任和公众实践两个方面：项目内部以资源责任划分、持续数据记录和可持续性声明边界约束资源评价；公众层面通过寝室植物种植活动提供一种更容易参与的可持续生活实践。",
  },
  {
    id: "economic",
    title: "经济影响",
    icon: "economy",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
    description:
      "从长期生产角度看，工艺稳定性提升可能减少批次失败、重复生产以及由此产生的原材料、耗材、设备运行和人员投入，从而提高资源利用效率并降低潜在的生产损失。但由于 CirCure 尚未进入规模化生产，目前这些经济效应仍属于潜在长期影响。",
  },
  {
    id: "environmental",
    title: "环境影响",
    icon: "leaf",
    color: { token: "--semantic-success", hex: "#2f6f68", paletteName: "wet-teal" },
    description:
      "CirCure 的环境影响将不再局限于实验室中的试剂和耗材，而可能扩展至 RNA 与脂质原材料投入、生产能源、一次性生产材料、批次失败、储存、冷链运输以及使用后的废弃物处理等多个环节。",
  },
];

const consequencesExtra: ReadonlyArray<string> = [
  "我们不会依据单一环节的资源变化直接判断整体环境影响，而是随着真实生产数据逐步积累，对不同阶段的资源投入进行持续比较，并在条件允许时进一步开展碳足迹或生命周期相关评价。与此同时，我们也通过寝室植物种植活动将资源再利用落实到日常生活场景中。对 CirCure 而言，SDG 12 的长期环境意义正在于：既持续关注技术发展可能带来的资源与环境负担，也坚持用与现有证据相匹配的方式评价已经发生和未来可能发生的影响。",
];

const alignment: ReadonlyArray<string> = [
  "在推动 SDG 12 的过程中，资源利用和负责任生产同样不会孤立地产生影响。CirCure 从当前实验室中的试剂、一次性耗材和重复实验出发，进一步将视角延伸至未来可能出现的批次失败、原材料投入、生产能源、储运和废弃物处理，并通过 Resource Responsibility Map 与 Sustainability Claim Boundary Protocol 区分已经发生、可以预测以及仍需未来验证的资源与环境影响。",
  "我们根据 SST-QN，进一步分析 SDG 12 与其他可持续发展目标之间的协同与权衡关系，重点判断：当项目试图减少资源浪费、提高生产效率时，这些改变会进一步促进哪些目标，又可能在哪些条件下产生新的代价。",
  "SDG 17 与 SDG 12 被判定为 Core Synergy。EHS、CMC以及碳排放、绿色制造和数据治理等不同领域利益相关者直接参与了 CirCure 对资源责任的判断，并进一步推动形成 Resource Responsibility Map 和 Sustainability Claim Boundary Protocol。这些合作已经实际改变了项目识别资源问题、界定评价边界和规划未来数据记录的方式，因此具有直接且明确的项目证据支持。",
  "SDG 9 与 SDG 12 被判定为 Conditional。更稳定的工艺和更高的批次一致性未来可能减少失败批次、重复生产和无效资源投入，但 circRNA 制备、LNP生产、一次性耗材以及低温储运本身也会增加材料和能源需求。因此，技术创新究竟改善还是增加资源负担，仍取决于未来真实的生产效率、生产规模和储运条件。",
  "SDG 3 与 SDG 12 被判定为 Conditional。减少设计不合理造成的重复实验和未来可能出现的失败批次，有助于降低不必要的资源消耗；但必要的实验重复、质量控制、无菌操作和一次性耗材又是保证实验可靠性、产品质量与安全的重要条件。因此，SDG 12所强调的并不是单纯“少用资源”，而是在健康与安全要求下减少没有必要产生的浪费。",
  "SDG 12 与 SDG 13 被判定为 Conditional。减少重复生产、失败批次以及不必要的材料和能源投入，未来可能降低相应碳排放，但规模化 RNA 制备、LNP生产、储存和冷链运输也可能带来新的能源需求。目前 CirCure 缺少真实生产能耗和碳排放数据，因此局部资源改善还不足以证明整体气候影响已经下降。",
  "SDG 12 与 SDG 8 被判定为 Exploratory Synergy。提高资源利用效率和减少失败批次未来可能降低原材料、设备运行和人员等无效投入，持续记录生产与供应链数据也可能帮助识别高消耗环节。但 CirCure 尚未进入规模化生产，目前缺少真实成本和生产数据，因此只能确认其具有潜在经济意义。",
  "SDG 12 与 SDG 10 被判定为 Excluded。资源效率提升未来可能降低部分生产损失，但这并不意味着患者支付成本和医疗可及性会直接改善，其中还受到定价、医保和医疗资源配置等因素影响。目前缺少足够证据支持 SDG 12 对 SDG 10 的直接作用。",
  "总体来看，SST-QN 分析表明，SDG 12 的影响并不只是“减少资源使用”。不同目标之间既可能产生协同，也可能因技术复杂度、质量要求、能源需求和现实实施条件产生权衡。因此，我们只对当前证据能够支持的关系作出明确判断，并将仍依赖未来生产数据的影响保留为 Conditional 或 Exploratory。",
];

const legacyIntro: ReadonlyArray<string> = [
  "我们把 SDG 12 相关的实践经验整理成三部分：Resource Responsibility Map、Sustainability Claim Boundary Protocol，以及 Sustainable Planting Education Guide。前两者主要帮助我们在项目中更清楚地看资源流向和可持续性表述的边界，第三个则是基于寝室植物种植活动整理出来的一些可操作做法。",
];

const legacyTools: ReadonlyArray<LegacyTool> = [
  {
    title: "Resource Responsibility Map",
    description:
      "帮助团队从研发、生产、储运到后续处置等不同阶段识别资源投入与潜在浪费，并区分哪些问题已经发生、哪些可能在未来出现、哪些目前还无法评价。",
    pdfs: [
      { label: "中文", fileName: "sustainability-resource-responsibility-map-cn.pdf" },
      { label: "English", fileName: "sustainability-resource-responsibility-map-en.pdf" },
    ],
  },
  {
    title: "Sustainability Claim Boundary Protocol",
    description:
      "帮助团队检查可持续性结论的证据边界，区分已经得到数据支持的结果、情景预测和仍需未来验证的影响，避免将局部改善过度表述为整体环境成果。",
    pdfs: [
      { label: "中文", fileName: "sustainability-claim-boundary-protocol-cn.pdf" },
      { label: "English", fileName: "sustainability-claim-boundary-protocol-en.pdf" },
    ],
  },
  {
    title: "Sustainable Planting Education Guide",
    description:
      "为寝室植物种植活动设计的活动指南，将植物选择、废旧容器再利用、现场种植教学、材料准备和活动组织等环节整合其中，供其他 iGEM 团队复制类似的 SDG 12 公众教育活动参考。",
    pdfs: [],
  },
];

const evidenceIntro: ReadonlyArray<string> = [
  "围绕 SDG 12，我们从项目内部和公众实践两个层面记录实际成果。在项目层面，我们吸收了实验室管理/EHS、CMC，以及碳排放核算、绿色制造和数据治理等 5 类利益相关者与产业实践主体的反馈，并据此调整了对实验资源消耗、未来批次失败、生命周期责任、评价边界和数据追踪等问题的考虑。",
];

const evidenceStats: SdgScaleContent["evidenceStats"] = [
  { id: "sdg12-groups", value: 5, labelZh: "利益相关者与产业主体", labelEn: "Stakeholder & industry groups" },
  { id: "sdg12-tools", value: 3, labelZh: "可复用成果", labelEn: "Reusable tools" },
  { id: "sdg12-kits", value: 194, labelZh: "种植材料", labelEn: "Planting kits distributed" },
];

const evidenceExtra: ReadonlyArray<string> = [
  "相关实践进一步沉淀为 3 项可复用成果：Resource Responsibility Map、Sustainability Claim Boundary Protocol 和 Sustainable Planting Education Guide。",
  "在公众实践层面，我们开展寝室植物种植教育活动，共发放 194 份种植材料，并鼓励参与者利用塑料瓶等闲置容器完成种植。通过现场讲解和种植指导，我们将资源再利用、减少浪费和负责任消费转化为参与者能够亲自完成的日常实践，使 SDG 12 的公众影响不仅体现在理念传播，也具有明确的参与规模和行动记录。",
];

export const sdg12Section: SdgScaleContent = {
  sectionId: "sdg12-health",
  index: "06",
  kicker: "06 / SDG 12",
  navLabel: "SDG 12 — Responsible",
  title: "SDG 12 — Responsible Consumption and Production",
  summary:
    "从研发阶段的资源投入出发，识别批次失败、重复生产与生命周期各环节的资源责任，并以 Resource Responsibility Map 与 Sustainability Claim Boundary Protocol 界定可持续性声明的证据边界。",
  intro,
  stakeholderIntro,
  stakeholders,
  stakeholderOutro,
  consequencesLead,
  consequences,
  consequencesExtra,
  alignment,
  legacyIntro,
  legacyTools,
  evidenceIntro,
  evidenceStats,
  evidenceExtra,
};
