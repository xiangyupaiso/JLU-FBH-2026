/** SDG 17 — finalized manuscript, in source order. Pure data, no JSX. */
import type { SdgChapter } from "./sdgChapterContract";
import { sdg17PhotoSets } from "./sustainabilitySdg17Assets";

export const sdg17Chapter: SdgChapter = {
  id: "sdg17",
  headingId: "sdg17-partnerships",
  index: "5.2",
  title: "SDG17: Partnerships for the Goals",
  intro: [
    "No single team has all the knowledge and resources needed to address interconnected challenges in health, education, and sustainable development. We chose SDG 17 to **connect complementary expertise across teams and sectors through shared learning and joint work**. Our aim is to turn individual contributions into **resources others can use and build upon**, so that one team’s experience becomes another’s starting point and the value of collaboration extends beyond the competition.",
  ],
  stakeholders: {
    heading: "Stakeholder & Partnership Mapping",
    lead: [
      "Through our work on SDG 3, SDG 4, SDG 9, and SDG 12, we connected with stakeholders across four core areas: **health needs**, **technological innovation**, **responsible development**, and **education and communication**. Patients and clinicians helped us understand real healthcare needs; researchers contributed to technical design and evaluation; industry practitioners provided perspectives on production, technology translation, and resource management; and teachers, science communicators, and the public helped us bring scientific knowledge into broader social settings.",
      "Under SDG 17, we examine **how these relationships connect**. What **knowledge, resources, and practical experience** can different stakeholders contribute? How can the **complementary strengths** developed through our work on different SDGs be brought together to support CirCure?",
      "Based on how stakeholders participated and how these relationships developed, we organized CirCure’s external network into four groups: **Other iGEM Teams**, **Research & Medical Partners**, **Industry & Professional Partners**, and **Public & Community Partners**. Together, these groups connect peer collaboration, research and medicine, industry practice, and public participation within CirCure’s broader partnership network.",
    ],
    profiles: [],
    groups: [
      {
        id: "sdg17-other-teams",
        index: "01",
        title: "Other iGEM Teams",
        intro: [
          "Other iGEM teams form CirCure’s most immediate network of peer partners. Through continued exchange, we aimed to develop these connections into shared discussions, joint activities, and outputs that could remain useful over time.",
          "We hosted the Northeast China iGEM Meetup, participated in iGEM exchange events across China, and initiated five inter-team Collaboration projects. Through this process, our relationships developed from learning about one another’s projects to completing shared tasks and producing resources for continued use. Differences in research interests, practical experience, audience connections, and expertise allowed teams to complement one another and helped CirCure extend its reach.",
        ],
        profiles: [
          {
            id: "sdg17-01-01",
            photos: sdg17PhotoSets["sdg17-01-01"],
            index: "A",
            name: "Northeast China iGEM Meetup",
            whatChanged:
              "The event established a regional peer network and made Safety a shared topic for discussion and judgment across teams. It also provided a foundation for subsequent collaboration.",
            sdgs: [17, 4],
            sdgsLabel: "SDGs",
            partnerLabel: "Partners / Reach",
            partner: "Regional iGEM Teams · [11 Teams]",
            challengeLabel: "What Connected Us",
            challenge:
              "Teams in the region needed a face-to-face platform to present their projects, exchange experience, and identify opportunities for collaboration.",
            whatWeDidLabel: "What We Did Together",
            whatWeDid:
              "JLU-FBH hosted the Northeast China iGEM Meetup and designed an immersive safety discussion, “DDL Crisis: The Qinghe Bacterial Release Incident.” Through risk assessment, analysis of responsibilities, and team discussion, participants explored the release of engineered bacteria and the boundaries of iGEM Safety.",
            whatChangedLabel: "Shared Outcome",
            article: {
              title: "Building Peer Connections through Face-to-Face Exchange",
              sections: [
                {
                  blocks: [
                    "Collaboration begins with opportunities for teams to sit together and understand the problems others are addressing, the difficulties they face, and the experience they can share.",
                    "JLU-FBH therefore hosted the Northeast China iGEM Meetup, inviting regional teams to present projects, share experience, and hold face-to-face discussions. We wanted teams to identify one another’s strengths, challenges, and potential areas of collaboration, making the regional meeting a starting point for continued exchange.",
                  ],
                },
                {
                  heading: "01 Why We Designed It This Way",
                  blocks: [
                    "Although iGEM teams participate in the same competition, information gaps remain across institutions, disciplines, and project areas. Many teams have valuable experimental experience, Human Practices methods, or educational resources to share, but limited opportunities to learn about one another.",
                    "We therefore sought to create an open setting where teams could discuss questions beyond their project presentations:",
                    "What problems are we facing? Have other teams encountered similar challenges? What could we accomplish together?",
                  ],
                },
                {
                  heading: "02 Discussing Safety Together",
                  blocks: [
                    "During the meetup, we independently designed and facilitated the immersive reasoning roundtable “DDL Crisis: The Qinghe Bacterial Release Incident.”",
                    "Using a simulated accidental release of engineered bacteria, we asked teams to examine clues, assess risks, identify responsible parties, and discuss engineered organism release, laboratory practices, and iGEM Safety boundaries.",
                    "This made Safety a practical question requiring collective analysis and judgment:",
                    "If a risk event occurs, how should we identify the problem, take responsibility, and make decisions?",
                  ],
                },
                {
                  heading: "03 What We Left Behind",
                  blocks: [
                    "The meetup established direct connections among regional teams and provided a foundation for more substantial inter-team collaboration.",
                  ],
                },
                {
                  heading: "04 What We Learned",
                  blocks: [
                    "Partnerships often begin with a thorough conversation. Understanding one another’s research interests, strengths, and needs helps teams develop collaboration into substantive joint work.",
                  ],
                },
              ],
            },
          },
          {
            id: "sdg17-01-02",
            photos: sdg17PhotoSets["sdg17-01-02"],
            index: "B",
            name: "China-wide iGEM Exchange",
            whatChanged:
              "We expanded our regional connections into a broader national peer network and identified opportunities for knowledge sharing and joint content development.",
            sdgs: [17],
            sdgsLabel: "SDGs",
            partnerLabel: "Partners / Reach",
            partner: "iGEM Teams across China",
            challenge:
              "Teams from different regions brought varied experience and resources in Wet Lab, Dry Lab, HP, Education, Wiki, and team management.",
            challengeLabel: "",
            whatWeDidLabel: "What We Did Together",
            whatWeDid:
              "We participated in **this year’s iGEM exchange events across China**, maintaining project presentations, experience sharing, and collaboration discussions with other teams.",
            whatChangedLabel: "Shared Outcome",
            article: {
              title:
                "Expanding Regional Connections into a Broader Peer Network",
              sections: [
                {
                  blocks: [
                    "The Northeast China iGEM Meetup established our initial regional connections. We then continued participating in iGEM exchange events across China, sharing project experience with teams from different universities and research areas and learning about their approaches to Wet Lab, Dry Lab, Human Practices, Education, Wiki, and team development.",
                  ],
                },
                {
                  heading: "01 Why We Continued Reaching Out",
                  blocks: [
                    "Teams in different regions work under different conditions.",
                    "Some have extensive experience in experimental design, others have established modeling approaches, and others have developed distinctive methods in education, Human Practices, visual design, or team management.",
                    "When these experiences remain within individual teams, similar problems may need to be solved repeatedly. Through continued participation in exchange events, we therefore explored:",
                    "Which experiences could be shared? Which resources could complement one another? Which problems could we address together?",
                  ],
                },
                {
                  heading:
                    "02 From Project Presentations to Collaboration Discussions",
                  blocks: [
                    "At these events, we introduced CirCure and learned about other teams’ research interests and practices.",
                    "Continued exchange helped us identify topics suitable for joint work, including public health education, vaccine technology reviews, clarification of scientific misconceptions, health promotion, and the transfer of experience to new teams.",
                    "These connections provided the foundation for our five subsequent inter-team Collaboration projects.",
                  ],
                },
                {
                  heading: "03 Turning Connections into Shared Tasks",
                  blocks: [
                    "The value of a wider network came from connecting different areas of expertise, regional perspectives, and practical resources and translating them into tasks that teams could complete together.",
                    "Our participation in exchange events across China therefore supported a progression:",
                    "Regional Network → National Network → Shared Actions",
                  ],
                },
                {
                  heading: "04 What We Learned",
                  blocks: [
                    "Partners do not always need to define a shared output at their first meeting. Continued communication helps teams understand one another and identify work they are well placed to undertake together.",
                  ],
                },
              ],
            },
          },
          {
            id: "sdg17-01-03",
            index: "C",
            name: "Together With iGEM",
            whatChanged:
              "Together, we corrected 43 scientific misconceptions and produced a collection covering multiple fields of synthetic biology application.",
            sdgs: [17, 4],
            sdgsLabel: "SDGs",
            partnerLabel: "Partners / Reach",
            partner: "[17 Teams] · [11 Villages]",
            challenge:
              "Different iGEM Villages encounter different scientific misconceptions, and each team has expertise closely connected to its own research area.",
            challengeLabel: "",
            whatWeDidLabel: "What We Did Together",
            whatWeDid:
              "Teams identified representative misconceptions within their own or another relevant Village and clarified them through source checking and scientific explanation.",
            whatChangedLabel: "Shared Outcome",
            article: {
              title:
                "Using Each Team’s Expertise to Address a Scientific Misconception",
              sections: [
                {
                  blocks: [
                    "Scientific misconceptions occur across agriculture, the environment, food, energy, biomanufacturing, diagnostics, and therapeutics.",
                    "Teams working in these iGEM Villages have relevant expertise that can help examine frequently repeated claims lacking adequate scientific support.",
                  ],
                },
                {
                  heading: "01 Why We Organized Contributions by Village",
                  blocks: [
                    "We invited teams to identify misconceptions within the Villages they worked in or followed, allowing them to draw on their own research experience.",
                    "The guiding question was:",
                    "What does the public most often misunderstand in our Village?",
                  ],
                },
                {
                  heading: "02 Tracing Claims Back to Evidence",
                  blocks: [
                    "Participating teams consulted reliable sources to determine whether a claim was entirely incorrect, partly correct, or valid only under specific conditions.",
                    "They then used these sources and scientific explanations to clarify the misconception.",
                    "JLU-FBH checked, edited, and integrated the contributions so that material from different fields could be presented consistently.",
                  ],
                },
                {
                  heading: "03 Shared Outcome",
                  blocks: [
                    "17 teams working across 11 iGEM Villages completed 43 explanations addressing scientific misconceptions.",
                    "These contributions were compiled into a resource covering several synthetic biology application areas for continued use in public communication and education.",
                  ],
                },
                {
                  heading: "04 What We Learned",
                  blocks: [
                    "The iGEM community offers a broad base of knowledge for science communication. Teams investigate different questions, allowing the community to collectively cover far more ground than an individual team.",
                  ],
                },
              ],
            },
          },
          {
            id: "sdg17-01-04",
            index: "D",
            name: "Collaborative Baduanjin Video",
            whatChanged:
              "We produced a complete joint Baduanjin health promotion video, connecting youth collaboration, health communication, and traditional culture.",
            sdgs: [17, 3, 4],
            sdgsLabel: "SDGs",
            partnerLabel: "Partners / Reach",
            partner: "[5 iGEM Teams]",
            challengeLabel: "What Connected Us",
            challenge:
              "We wanted inter-team collaboration to extend into health activities in which the public could participate directly.",
            whatWeDidLabel: "What We Did Together",
            whatWeDid:
              "Teams recorded assigned Baduanjin movements according to a shared standard and used their own communication styles to promote informed exercise and healthy living.",
            whatChangedLabel: "Shared Outcome",
            article: {
              title: "Creating a Shared Health Activity",
              sections: [
                {
                  blocks: [
                    "Our earlier Collaboration projects focused primarily on knowledge development and science communication.",
                    "We also wanted to explore whether teams could work together on a practical health activity that the public could join.",
                  ],
                },
                {
                  heading: "01 Why We Chose Baduanjin",
                  blocks: [
                    "Baduanjin has a relatively clear sequence of movements, a low entry barrier, and a strong connection to traditional culture. These features made it a suitable format for a health promotion project involving teams from different regions.",
                    "Demonstrating an activity also offered a concrete way to communicate healthy living.",
                  ],
                },
                {
                  heading: "02 How We Created the Video Together",
                  blocks: [
                    "Participating teams were assigned particular movements to record.",
                    "Each team followed the agreed movement requirements while incorporating its own identity and communication style.",
                    "JLU-FBH coordinated:",
                    "Task Allocation → Footage Collection → Content Coordination → Video Integration",
                    "We then connected footage from different teams and regions into a complete video.",
                  ],
                },
                {
                  heading: "03 Shared Outcome",
                  blocks: [
                    "The collaboration produced a joint Baduanjin health promotion video involving multiple iGEM teams.",
                    "Each team contributed one part, and the combined footage formed a complete activity. Collaboration was therefore visible in the structure of the work itself.",
                  ],
                },
                {
                  heading: "04 What We Learned",
                  blocks: [
                    "Joint creation can allow participants to contribute different parts of a shared task. In this project, the complete output depended on everyone’s contribution.",
                    "This extended our work on SDG 17 from knowledge sharing to a shared health activity.",
                  ],
                },
              ],
            },
          },
          {
            id: "sdg17-01-05",
            index: "E",
            name: "From Teams, For Teams",
            whatChanged:
              "We developed Handbook + Micro-videos + FAQ Resources to provide guidance that future iGEM teams can continue using and expanding.",
            sdgs: [17, 4],
            sdgsLabel: "SDGs",
            partnerLabel: "Partners / Reach",
            partner: "[5 iGEM Teams]",
            challengeLabel: "What Connected Us",
            challenge:
              "New teams often need to work out project design, experimental progress, Human Practices, Wiki development, and team management from the beginning, even though relevant experience already exists across the community.",
            whatWeDidLabel: "What We Did Together",
            whatWeDid:
              "Teams shared practical experience, methods, and common challenges from the aspects of iGEM participation they knew best.",
            whatChangedLabel: "Shared Outcome",
            article: {
              title:
                "Turning This Year’s Experience into Next Year’s Starting Point",
              sections: [
                {
                  blocks: [
                    "Teams entering iGEM for the first time face many questions without a single standard answer:",
                    "How should a team be formed? How should a project be selected? How can Wet Lab work move forward? Where should Human Practices begin? How should the Wiki be organized? How can responsibilities and collaboration be coordinated?",
                    "Many teams encounter similar challenges, but their experience often becomes dispersed among members and teams after the competition.",
                  ],
                },
                {
                  heading: "01 Why We Initiated This Project",
                  blocks: [
                    "We asked whether documenting these experiences could help future teams avoid repeating some of the same trial and error.",
                    "We therefore initiated From Teams, For Teams, inviting teams to share experience from the aspects of participation they understood best.",
                    "Our aim was to provide practical references grounded in participants’ experience.",
                  ],
                },
                {
                  heading: "02 How We Developed the Resources Together",
                  blocks: [
                    "Teams contributed according to their strengths:",
                    {
                      bullets: ["**Project Design**"],
                    },
                    "Moving from an identified problem to a project direction.",
                    {
                      bullets: ["**Wet Lab / Dry Lab**"],
                    },
                    "Practical experience in advancing experimental and modeling work.",
                    {
                      bullets: ["**Human Practices & Education**"],
                    },
                    "Connecting projects with societal needs.",
                    {
                      bullets: ["**Wiki & Communication**"],
                    },
                    "Organizing and presenting a complete project.",
                    {
                      bullets: ["**Team Management**"],
                    },
                    "Coordinating responsibilities, schedules, and collaboration.",
                    "These contributions were organized into a Handbook, short videos, and FAQ resources.",
                  ],
                },
                {
                  heading: "03 Shared Outcome",
                  blocks: [
                    "We produced a collection of resources to support new iGEM teams.",
                    "It documents challenges encountered by participating teams and provides methods and experience that future teams can consult. Further contributions can be added over time, allowing the resource to grow.",
                  ],
                },
                {
                  heading: "04 What We Learned",
                  blocks: [
                    "Sustainable collaboration does not always require a partnership to remain in the same form indefinitely. Passing experience to the next group of participants can also sustain its value.",
                    "What one team learned this year can become another team’s starting point next year.",
                    "In this sense, sharing experience is itself a form of sustainable partnership.",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        id: "sdg17-partner-group-2",
        layout: "prose",
        intro: [],
        profiles: [
          {
            id: "sdg17-02",
            index: "02",
            name: "Research & Medical Partners",
            whatChanged:
              "We connected patients, clinicians, public health experts, and researchers from different fields, creating a more continuous exchange of feedback across health needs, technical design, functional validation, and future application.",
            sdgs: [17, 3, 9],
            relevantStakeholder:
              "CirCure involves patient needs, antigen design, RNA technology, delivery, tumor immunology, and preclinical evaluation. These questions require expertise from multiple disciplines.",
            keyInsight:
              "Real healthcare needs should continue informing technical design, while research findings need to be assessed against clinical needs, scientific evidence, and the conditions required for future translation.",
            currentStatus: "Incorporated",
            article: {
              title: "",
              sections: [
                {
                  blocks: [
                    "CirCure’s challenges cannot be addressed by a single discipline. Treatment needs in TNBC arise from patients’ experiences and clinical practice. Translating these needs into a testable therapeutic strategy involves antigen design, RNA technology, delivery systems, tumor immunology, and preclinical evaluation.",
                    "Under SDG 3, patients, clinicians, and medical and public health experts helped us reconsider efficacy, recurrence, long-term survival, quality of life, costs, and accessibility in real healthcare settings. This broadened project evaluation from technical performance to potential patient benefit. Under SDG 9, we connected with researchers in computational immunology, RNA, nanodelivery, preclinical evaluation, and technology translation, bringing health needs into discussions of technical design, functional validation, and future development.",
                    "Under SDG 17, we bring these participants together to examine how their different perspectives contributed to CirCure. Patients and clinicians helped identify the problems the project should address. Medical and public health experts contributed perspectives on disease management and accessibility. Researchers provided advice on antigen design, RNA technology, delivery systems, and preclinical evaluation. These exchanges helped us consider clinical needs, scientific evidence, and future conditions of use together when discussing technical approaches.",
                    "Not every expert we interviewed became a long-term partner. Nevertheless, these interactions established connections between research and medicine, allowing healthcare needs to inform research design and ensuring that technical development continued to be examined against clinical needs, scientific evidence, and future translation requirements.",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        id: "sdg17-partner-group-3",
        layout: "prose",
        intro: [],
        profiles: [
          {
            id: "sdg17-03",
            index: "03",
            name: "Industry & Professional Partners",
            whatChanged:
              "These partners broadened CirCure’s evaluation to include future production, resource responsibility, lifecycle considerations, and ongoing data management. Their input also supported the development of tools such as the Resource Responsibility Map.",
            sdgs: [17, 9, 12, 13],
            relevantStakeholder:
              "Researchers can assess technical feasibility, while production and practical application also require expertise in manufacturing, CMC, lifecycle management, supply chains, and data governance.",
            keyInsight:
              "Beyond the laboratory, manufacturability, batch consistency, quality control, resource inputs, production costs, storage, transport, and data tracking all influence a technology’s long-term sustainability.",
            currentStatus: "Incorporated",
            article: {
              title: "",
              sections: [
                {
                  blocks: [
                    "As we considered CirCure’s development beyond technical validation, we recognized that research expertise alone could not answer every question about future production and use. We therefore connected with practitioners and companies working in CMC and manufacturing, sustainability, lifecycle management, supply chains, and data governance.",
                    "These participants initially informed our analyses under SDG 9 and SDG 12. For technology translation, they drew our attention to manufacturability, batch consistency, quality control, and production costs. For resource responsibility, they expanded our focus from current reagents, consumables, and experimental repetition to raw materials, production, storage, transport, waste, and ongoing data collection.",
                    "For example, discussions with CMC and manufacturing professionals prompted us to consider failed batches and repeated production within resource responsibility and supported the development of the Resource Responsibility Map. Industry practices also highlighted the importance of traceable production, storage, transport, and waste data when evaluating long-term sustainability.",
                    "Under SDG 17, we focus on how these areas of expertise complement one another. Manufacturing experience, sustainability management, lifecycle perspectives, and data governance helped us understand the production, management, and resource challenges that may arise as a technology moves toward practical application. These connections do not mean that every company has entered a formal, long-term partnership with us. They constitute an industry and professional network that CirCure can continue engaging as it develops.",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        id: "sdg17-partner-group-4",
        layout: "prose",
        intro: [],
        profiles: [
          {
            id: "sdg17-04",
            index: "04",
            name: "Public & Community Partners",
            whatChanged:
              "We translated health knowledge from SDG 3, synthetic biology innovation from SDG 9, and resource responsibility from SDG 12 into lessons, virtual experiments, games, online communication, and community activities.",
            sdgs: [17, 3, 4, 9, 12],
            relevantStakeholder:
              "For a technology to generate broader social value beyond laboratory research, people need opportunities to understand and engage with it.",
            keyInsight:
              "Different audiences need different explanations and forms of participation. Teachers, communicators, students, and the public help bring specialist knowledge into educational and community settings.",
            currentStatus: "Incorporated",
            article: {
              title: "",
              sections: [
                {
                  blocks: [
                    "CirCure’s partnership network extends beyond research, medicine, and industry. Education and communication are also needed to connect technology with society. We therefore included the education and communication network developed under SDG 4, along with students and community members who participated in related activities, in our partnership mapping.",
                    "Teachers, communicators, students, and the public helped us translate specialist content into lessons, experimental experiences, virtual laboratories, games, and community activities, giving different audiences accessible ways to learn about and engage with CirCure.",
                    "This network also connected other SDGs with broader social settings. Health knowledge from SDG 3 became public health education; synthetic biology and technological innovation from SDG 9 informed educational activities; and resource responsibility from SDG 12 entered community practice through activities such as planting.",
                    "Education, communication, and community participation brought scientific knowledge into classrooms, online platforms, and community activities.",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  consequences: {
    lead: [],
    shortTerm: {
      heading: "Short-Term Impacts",
      paragraphs: [
        "Through partnerships under SDG 17, CirCure connects knowledge and resources across healthcare, research, industry, education, and the iGEM community, turning collaboration into tangible outcomes. We established connections with **26 iGEM teams**, developed **7 collaboration proposals**, and expanded our peer network through the Northeast China regional meetup and other iGEM exchange events across China.",
        "The involvement of partners from diverse fields brought perspectives on clinical needs, technical feasibility, production and commercialization, responsible resource use, and public communication into our project, further supporting progress toward SDG 3, SDG 4, SDG 9, and SDG 12.",
      ],
    },
    longTerm: {
      heading: "Long-Term Impacts",
      intro: "",
    },
    dimensions: [
      {
        id: "social",
        title: "Social Impacts",
        paragraphs: [
          "Cross-sector partnerships can support continued participation by patients, clinicians, researchers, educators, and the public, helping technology development account for patient needs, public understanding, and accessibility. Inter-team networks can also support the sharing of educational resources, practical methods, and project experience.",
          "However, differences in expertise, resources, and influence may affect equitable participation. Future collaboration will therefore need to consider whether different groups have meaningful opportunities to participate and express their needs.",
        ],
      },
      {
        id: "economic",
        title: "Economic Impacts",
        paragraphs: [
          "Collaboration among research, clinical, and industry participants can help identify manufacturing, quality control, production cost, supply chain, and translation challenges earlier. Resource sharing among teams may also reduce duplicated development and improve the use of existing outputs.",
          "However, CirCure has not entered production at scale. Future RNA manufacturing, delivery, quality control, storage, and transport may still involve substantial costs.",
        ],
      },
      {
        id: "environmental",
        title: "Environmental Impacts",
        paragraphs: [
          "Industry and professional partners brought questions about raw materials, failed batches, energy use, storage, transport, and waste into project discussions at an earlier stage. Their participation may also help extend the resource responsibility approaches developed under SDG 12 across a broader network.",
          "At the same time, future production at scale could increase demand for consumables and energy and generate additional waste. Long-term environmental impacts will therefore depend on production methods, supply chain design, and lifecycle data.",
        ],
      },
    ],
  },
  alignment: {
    lead: [
      "For CirCure, the significance of SDG 17 depends on whether partnerships influence project design and practice. SST-QN’s initial screening identified potential relationships between partnerships and health, technological innovation, education, and responsible development.",
      "In Alignment, we therefore examined completed collaborations, the integration of feedback, and project adjustments to assess whether these relationships were supported by evidence within CirCure and how far that evidence could support our conclusions.",
    ],
    findings: [
      "**We classify the relationship between SDG 17 and SDG 9 as a Core Synergy.** Research, clinical, and industry stakeholders contributed to discussions of antigen selection, RNA technology, delivery systems, preclinical evaluation, and future translation. Their input influenced specific technical designs, evaluation criteria, and development priorities. Collaboration has therefore become a substantive source of support for CirCure’s technological innovation.",
      "**We classify the relationship between SDG 17 and SDG 12 as a Core Synergy.** Participants with expertise in CMC, EHS, carbon emissions, green manufacturing, and data governance brought batch failure, resource use, storage, transport, and waste into project evaluation. Their contributions supported the Resource Responsibility Map and Sustainability Claim Boundary Protocol, directly changing how CirCure identifies and evaluates resource responsibility.",
      "**We classify the relationship between SDG 17 and SDG 4 as a Core Synergy.** Teachers, science communicators, and interactive design professionals contributed perspectives on learning, information presentation, and user experience. Their feedback informed changes to course content, communication approaches, and activity formats. Inter-team collaboration also supported the sharing of educational resources and practical experience.",
      "**We classify the relationship between SDG 17 and SDG 3 as an Exploratory Synergy.** Patients, clinicians, and other professional participants improved our understanding of efficacy, safety, accessibility, and health needs and informed changes to project evaluation. However, current evidence primarily supports improvements in project decisions. It does not yet demonstrate that these partnerships directly produce distinct, consistent health outcomes.",
      "The clearest current effects of SDG 17 are therefore evident in technological innovation, resource responsibility, and educational practice. Further evidence is needed to establish whether these effects translate into long-term health outcomes.",
    ],
    table: {
      headers: [
        "Relationship",
        "CirCure-specific Assessment",
        "Direction",
        "Mechanism",
      ],
      rows: [
        [
          "SDG 17 → SDG 9",
          "Core (C)",
          "Synergy",
          "Input from researchers, clinicians, and industry partners directly influenced technical design, evaluation criteria, and considerations for future translation.",
        ],
        [
          "SDG 17 → SDG 12",
          "Core (C)",
          "Synergy",
          "Feedback from EHS, CMC, and industry helped identify resource-related issues, define evaluation boundaries, and guide long-term data recording.",
        ],
        [
          "SDG 17 → SDG 4",
          "Core (C)",
          "Synergy",
          "Input from teachers, communication specialists, and interaction designers reshaped educational content, delivery formats, and resource design.",
        ],
        [
          "SDG 17 → SDG 3",
          "Exploratory (E)",
          "Synergy",
          "Multi-stakeholder participation improved the assessment of health needs and project decision-making, but has not yet been shown to produce independent health outcomes.",
        ],
      ],
    },
  },
  legacy: {
    intro: [
      "We hope our collaborations leave behind more than a series of exchanges—**co-created outcomes that sustain connections between teams and remain useful over time**. This year, JLU-FBH began by hosting the **Northeast China iGEM Meetup**, providing a platform for teams in the region to present their projects, share experiences, and engage in in-depth discussions. This event laid the foundation for our initial cross-team connections. We then continued to participate in **iGEM meetups across different regions of China this year**, exchanging project experiences with more teams and learning about their research interests and practical strengths as we gradually expanded our collaboration network.",
      "Building on these exchanges and connections, we initiated and hosted **3 cross-team Collaboration projects**, bringing teams together to co-create around public health outreach, vaccine technologies, debunking scientific misconceptions, health practices, and passing on iGEM experience. These efforts transformed the knowledge, experience, and creativity of different teams into shareable resources, including white papers, collections of science outreach materials, joint videos, and growth guides. In this way, individual exchanges developed into a **Collaboration Legacy that can continue to be shared, used, and expanded upon**.",
    ],
    tools: [
      {
        title: "Northeast China iGEM Meetup & Immersive Safety Roundtable",
        why: "Teams need opportunities to **understand one another’s projects, share experience, and identify collaboration needs**. Safety discussions also benefit from scenarios that connect rules with practical decisions and team responsibilities.",
        whatItHelpsWith:
          "Combine **project presentations, experience sharing, and face-to-face discussions** with an immersive roundtable on a simulated engineered-bacteria leak. Guide participants through **clue analysis, risk assessment, responsibility, and discussion of iGEM Safety boundaries**, while building connections for future collaboration.",
        bestFor:
          "**Regional team exchanges, finding collaborators, safety education**, and facilitated discussions about **engineered-organism release and research responsibility**.",
        whatItDoes: "",
        // Awaiting the team's roundtable PDFs; supplied files use the shared document viewer.
        pdfs: [],
      },
      {
        title:
          "Together With iGEM: Collaborative Science Myth Clarification Collection",
        why: "Scientific misconceptions span **multiple research areas and synthetic biology applications**. Addressing them requires expertise beyond the scope of any single team and explanations that the public can follow.",
        whatItHelpsWith:
          "Collect representative misconceptions identified by teams across **different iGEM Villages**. Pair each misconception with **source verification and a scientific explanation**, bringing the contributions together in an edited collection that can support continued public communication and educational use.",
        bestFor:
          "**Public science outreach, classroom discussions, educational content development**, and collaborative activities addressing **misconceptions across different scientific fields**.",
        whatItDoes: "",
        pdfs: [
          {
            label: "English",
            fileName: "together-with-igem-english.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sdg17/together-with-igem-english.pdf",
          },
          {
            label: "Chinese",
            fileName: "together-with-igem-chinese.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sdg17/together-with-igem-chinese.pdf",
          },
        ],
      },
      {
        title: "Collaborative Baduanjin Video",
        why: "Cross-team collaboration can extend beyond written resources to **health activities that the public can participate in directly**. A shared activity also creates opportunities to connect youth collaboration, health communication, and traditional culture.",
        whatItHelpsWith:
          "Bring together recordings of assigned **Baduanjin movements** contributed by different iGEM teams into one complete video. Provide a shared activity resource through which teams can communicate **scientific fitness and healthy living concepts**, while contributing their own identities to a collective production.",
        bestFor:
          "**Participatory outreach, campus and community activities, team events**, and educational activities connecting **physical activity with traditional culture**.",
        whatItDoes: "",
        pdfs: [],
      },
      {
        title: "From Teams, For Teams: iGEM New Team Growth Guide",
        why: "First-time iGEM teams often need to learn **team formation, project design, experimental planning, Human Practices, Wiki development, and team management** from the beginning. Scattered experience can lead to repeated trial and error.",
        whatItHelpsWith:
          "Organize participating teams’ **practical experience and working methods** into a shared **handbook, short videos, and frequently asked questions**. Give future teams a reference they can consult throughout their projects and a resource that can continue to grow through new contributions.",
        bestFor:
          "**New team onboarding, project kick-offs, task planning, team handovers**, and peer mentoring throughout the **iGEM project cycle**.",
        whatItDoes: "",
        pdfs: [
          {
            label: "Handbook",
            fileName: "igem-handbook.pdf",
            url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sdg17/igem-handbook.pdf",
          },
        ],
      },
    ],
    closing: [
      "By hosting regional exchanges, building connections across different regions, and completing joint projects, we developed individual conversations into more sustained relationships and shared outputs. These white papers, educational resources, joint videos, and guides document this year’s Collaboration and provide material for continued public communication, team exchange, and use by future iGEM participants.",
    ],
  },
  evidence: {
    intro: [
      "Through sustained partnership building, CirCure has developed an external network spanning **four partner categories** and established direct collaborations with **26 iGEM teams**. We hosted **one Northeast China iGEM exchange event**, participated in **all seven regional iGEM exchange events held across China this year**, and initiated or contributed to **seven cross-team collaborations**.",
      "These collaborations have produced **five joint white papers, one educational website, one health-promotion video co-created by multiple teams, and one resource collection supporting new iGEM teams**. Among these efforts, **Together With iGEM** spans **11 iGEM Villages** and addresses **43 common misconceptions**.",
      "Partners across research, healthcare, industry, education, and the wider public continue to inform CirCure’s assessment of needs, technical evaluation, discussions about responsible development, and science communication. Together, these partnerships bring stakeholder perspectives into project decisions and turn collective experience into practical resources—leaving a shared foundation that others can use, refine, and carry forward beyond a single team or competition season.",
    ],
    stats: [],
    measurable: [],
    significant: [],
  },
};
