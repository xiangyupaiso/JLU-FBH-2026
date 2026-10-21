/**
 * Sustainability — SDG 4: Quality Education (DEVELOP tier, chapter 5.1).
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Copy and hosted asset URLs follow the manuscript in source order.
 * Pure data, zero JSX.
 */

import type {
  EducationActivityGroup,
  EducationResource,
  SdgChapter,
  StakeholderProfile,
} from "./sdgChapterContract";
import { sdg4DocUrl, sdg4PhotoSets } from "./sustainabilitySdg4Assets";

const pdf = (label: string, fileName: string) => ({
  label,
  fileName,
  url: sdg4DocUrl(fileName),
});

/* ----------------------------------------------------------------------------
 * Questionnaire data — five-bookmark microplate component (C — Short-Term)
 * Verbatim counts from the finalized manuscript component (480 responses).
 * -------------------------------------------------------------------------- */

export interface Sdg4FeedbackOption {
  label: string;
  count: number;
}

export interface Sdg4FeedbackQuestion {
  sourceId: string;
  title: string;
  question: string;
  options: ReadonlyArray<Sdg4FeedbackOption>;
}

export const sdg4FeedbackQuestions: ReadonlyArray<Sdg4FeedbackQuestion> = [
  {
    sourceId: "Q1",
    title: "Participant profile",
    question: "Which category best describes you?",
    options: [
      { label: "Primary school student", count: 161 },
      { label: "Secondary school student", count: 128 },
      { label: "Undergraduate or postgraduate student", count: 111 },
      { label: "Teacher / educator", count: 31 },
      { label: "Member of the public", count: 40 },
      { label: "Other", count: 9 },
    ],
  },
  {
    sourceId: "Q2",
    title: "First exposure",
    question: "Is this your first exposure to synthetic biology?",
    options: [
      { label: "Yes", count: 346 },
      { label: "No", count: 94 },
      { label: "Not sure", count: 40 },
    ],
  },
  {
    sourceId: "Q3",
    title: "Activity attendance",
    question: "How much of this activity did you attend?",
    options: [
      { label: "The whole activity", count: 329 },
      { label: "Most of the activity", count: 117 },
      { label: "Only part of the activity", count: 34 },
    ],
  },
  {
    sourceId: "Q8",
    title: "Main difficulty",
    question:
      "What was the main difficulty you encountered during this activity?",
    options: [
      { label: "No noticeable difficulty", count: 196 },
      { label: "Difficult content or terminology", count: 109 },
      { label: "The pace was too fast", count: 56 },
      { label: "Unclear steps or rules", count: 24 },
      {
        label: "Equipment, internet, or materials were hard to use",
        count: 36,
      },
      { label: "Difficulty asking questions or speaking up", count: 43 },
      { label: "Other", count: 16 },
    ],
  },
  {
    sourceId: "Q9",
    title: "Learning support",
    question: "If you continue learning, what support would you need most?",
    options: [
      { label: "Basic or step-by-step explanations", count: 81 },
      { label: "Text and visual resources to review", count: 104 },
      { label: "More experiments or games", count: 141 },
      { label: "Online learning resources", count: 68 },
      { label: "Opportunities for questions and discussion", count: 57 },
      { label: "No support needed for now", count: 18 },
      { label: "Other", count: 11 },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * S — Stakeholder Insights: three educators
 * -------------------------------------------------------------------------- */

const sdg4Educators: ReadonlyArray<StakeholderProfile> = [
  {
    id: "sdg4-01",
    index: "01",
    name: "Yue Zhang",
    role: "Teaching & Learning Design",
    photos: sdg4PhotoSets["sdg4-01"],
    relevantStakeholder:
      "As the direct designers and facilitators of learning activities, teachers and educators can draw on learners' ages, prior knowledge, and classroom participation to help us assess whether content suits different learning stages and whether activities support meaningful understanding and engagement.",
    challenge:
      "How can we help learners with different levels of prior knowledge actively participate in synthetic biology education, beyond receiving information?",
    keyInsight:
      "Providing the same educational content does not mean that everyone receives an appropriate learning opportunity. Explanatory depth, terminology, and activity formats need to match learners' existing knowledge. Questions, discussion, and practical activities should also be part of learning, allowing learners to express their understanding and helping the team adjust its teaching.",
    whatChanged:
      "We incorporated SDG 4 into the design of educational content and participation opportunities. We reorganized materials along a progressive learning pathway, added experimental experiences, interactive tasks, virtual laboratories, and game-based learning, and systematically documented activity structures and teaching resources to support future adoption and adaptation.",
    currentStatus: "Incorporated",
    sdgs: [4],
    article: {
      title: "Helping Learners with Different Starting Points Participate",
      sections: [
        {
          blocks: [
            "Through synthetic biology education, we wanted to give more learners opportunities to engage with science. Whether students of different ages and knowledge backgrounds could understand the content and begin exploring it actively depended on how the learning experience was designed.",
            "We discussed this with teachers and educators, reviewing the progression of our materials, classroom communication, and practical activities. These exchanges helped us consider how to put SDG 4's emphasis on quality education into practice.",
          ],
        },
        {
          heading:
            "01 Appropriate Learning Opportunities Start with What Learners Already Know",
          blocks: [
            "Teachers explained that the same scientific content needs to be presented differently according to learners' ages, prior knowledge, and levels of understanding. Too many unexplained terms, or complex mechanisms introduced before basic concepts are established, can make it difficult for students to stay engaged.",
            "Based on this feedback, we reorganized our materials along a progressive learning pathway, moving from intuitive explanations to scientific concepts and then to discussions of synthetic biology and its applications. By adjusting content depth, terminology, and pacing, we aimed to provide suitable starting points for students at different learning stages.",
          ],
        },
        {
          heading: "02 Questions and Responses Help Us Adjust Teaching",
          blocks: [
            "Teachers encouraged us to incorporate students' questions and responses into the learning process. Repeated questions, points of confusion during discussion, and interest in particular topics can reveal gaps in our explanations.",
            "We therefore placed greater emphasis on discussion, feedback, and interaction, using students' responses to guide adjustments. These exchanges gave learners space to express ideas and think through concepts while helping us identify where more background or clearer explanations were needed. Teaching could then respond to students' actual understanding.",
          ],
        },
        {
          heading:
            "03 Practical Activities and Documented Resources Support Participation and Reuse",
          blocks: [
            "These suggestions also shaped our activities. We incorporated experimental experiences, interactive tasks, virtual laboratories, and game-based learning so students could connect scientific concepts with practical actions by making choices, observing results, and discussing what happened. Learners without laboratory experience could begin exploring synthetic biology through investigation, discussion, and decision-making.",
            "Teachers also encouraged us to consider how others could reuse the activities. We began systematically documenting activity structures, teaching materials, interaction formats, and learning resources to support adoption and adaptation by other educators, students, and iGEM teams.",
          ],
        },
        {
          heading:
            "04 What Changed | Placing Understanding and Participation at the Center of Educational Design",
          blocks: [
            "These discussions established a guiding principle for CirCure's work under SDG 4: Meaningful learning begins with opportunities to participate.",
            "We began using learners' prior knowledge, responses, and practical experiences as key inputs to educational design. Content at different levels, two-way communication, and interactive activities supported participation, while documentation supported future reuse. Our educational goals consequently expanded to include developing resources that could remain useful and adapt to different learning needs.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg4-02",
    index: "02",
    name: "Professor Shuangcheng Yu",
    role: "Science Communication",
    photos: sdg4PhotoSets["sdg4-02"],
    relevantStakeholder:
      "Science communicators familiar with online public communication through platforms such as WeChat Official Accounts and Rednote. They can help us assess how readily audiences understand specialized content by considering reading habits, information organization, and scientific expression, and identify the scientific qualifications that must be retained when simplifying explanations.",
    challenge:
      "How can we make scientific content easier for people without specialist backgrounds to understand while preserving accuracy and evidence boundaries?",
    keyInsight:
      "After encountering scientific information, audiences need to be able to understand its central message. Online science communication should establish a clear focus, introduce knowledge in a suitable sequence, and limit terminology and information density. It should also explain the technology's research stage and the scope of available evidence so that simplified language does not imply more progress than has been achieved.",
    whatChanged:
      "We extended SDG 4's emphasis on learning opportunities to online public communication. We revised the information hierarchy, language, and visual presentation of content on WeChat Official Accounts and Xiaohongshu, making it easier to understand while retaining research-stage qualifications and evidence boundaries. We also used public comments and questions to inform subsequent revisions.",
    currentStatus: "Incorporated",
    sdgs: [4],
    article: {
      title:
        "Helping the Public Understand and Continue Participating in Scientific Discussions",
      sections: [
        {
          blocks: [
            "Platforms such as WeChat Official Accounts and Xiaohongshu offer opportunities to encounter synthetic biology beyond the classroom. Content needs to accommodate limited reading time and different knowledge backgrounds to create opportunities for further learning.",
            "We discussed these needs with science communicators, reviewing how we organized online content, explained concepts, and collected feedback. Our aim was to make scientific information easier to understand while maintaining accuracy.",
          ],
        },
        {
          heading: "01 Understanding Begins with How Information Is Organized",
          blocks: [
            "Science communicators explained that lengthy background sections, successive technical terms, and an unclear focus can cause readers to disengage before understanding the topic. Audiences without relevant background knowledge first need to know what an article is about before moving into more detailed explanations.",
            "We therefore began by identifying the central message we wanted readers to understand, then organizing the title, opening, images, and body around it. For more complex synthetic biology topics, we restructured the content to establish a basic understanding through intuitive language before introducing mechanisms and applications.",
          ],
        },
        {
          heading:
            "02 Accessible Explanations Must Preserve Scientific Qualifications",
          blocks: [
            "Science communicators emphasized that simplified explanations still need to retain information that affects interpretation. This includes the technology's research stage, the conclusions supported by existing evidence, and applications that require further validation.",
            "As we revised language and visuals, we also considered whether readers might misunderstand the project's progress. For technologies still under investigation, we retained research-stage qualifications and evidence boundaries, avoiding presenting research potential as a mature achievement. Clear explanations therefore remained grounded in accurate information.",
          ],
        },
        {
          heading: "03 Public Feedback Guides Subsequent Content",
          blocks: [
            "Comments and questions can reveal difficulties encountered during reading. Repeated questions, expressions that lead to misunderstanding, and topics that prompt further discussion provide concrete guidance for future content.",
            "We used this feedback to continually refine the structure and wording of our online communication, incorporating audience questions into subsequent posts. Each publication became part of an ongoing exchange, allowing the public to participate through questions and helping us identify what needed further explanation or clarification.",
          ],
        },
        {
          heading:
            "04 What Changed | Treating Understandable Content as Part of Public Learning Opportunities",
          blocks: [
            "These discussions established another principle for CirCure's work under SDG 4: Accessible science communication supports opportunities to learn. We treated online science communication as a way for the public to encounter and learn about synthetic biology. Clearer organization, accessible language, and explanations of research stages and evidence boundaries supported participation by people without specialist backgrounds. Public feedback also informed ongoing improvements, helping our communication respond to actual learning needs.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg4-03",
    index: "03",
    name: "Xiang Cao",
    role: "Game Development & Interactive Learning",
    leadIn: [
      "Building on these insights, we identified two areas for further development: making specialized scientific content easier for the public to understand, and ensuring that interactive educational tools work in real settings. We explored these questions with science communicators and professionals in game development and interactive design.",
    ],
    relevantStakeholder:
      "Xiang Cao is a teacher who helped us assess whether our virtual laboratory and educational games could be accessible and usable in real learning settings, considering intended users, equipment, operating steps, and activity organization. Her feedback also helped us consider whether other teachers, learners, and teams could use these resources independently.",
    challenge: "Does \"we built it\" mean \"others can actually use it\"?",
    keyInsight:
      "The usability of interactive educational tools depends on the full set of conditions required to use them. Intended audiences, settings, equipment and materials, rules, and facilitation can all affect participation. Incorporating these conditions into the design and providing complete instructions makes independent use and reuse more feasible for learners and educators.",
    whatChanged:
      "We incorporated SDG 4's emphasis on inclusive learning opportunities into the conditions for using interactive resources. Based on Xiang Cao's feedback, we refined equipment requirements, resource access, rules, operating steps, and facilitation for our virtual laboratory and games to lower barriers to access, participation, and running the activities again.",
    currentStatus: "Incorporated",
    photos: sdg4PhotoSets["sdg4-03"],
    sdgs: [4],
    article: {
      title: "Making Educational Tools Usable in Real Settings",
      sections: [
        {
          blocks: [
            "Virtual laboratories and game-based activities provide additional ways to engage with synthetic biology. Their use in different classrooms and learning settings depends on whether users can obtain the required equipment, understand the rules, and complete activities without the development team's on-site guidance.",
            "We discussed these conditions with Xiang Cao, a teacher, drawing on her perspective as an educator to review how our resources could address SDG 4 through access, operation, and reuse.",
          ],
        },
        {
          heading: "01 Intended Users and Settings Should Guide Design",
          blocks: [
            "Xiang Cao explained that a student exploring independently and a teacher facilitating a class have different requirements. Individual online use and group participation in person also need different rules and guidance. The setting directly affects controls, rule complexity, the amount of guidance, and activity duration.",
            "We therefore reviewed our virtual laboratory and game-based activities by asking who would use them, where they would be used, and who would organize them. Her feedback helped us align content and interaction design with the needs of learners and educators in different settings.",
          ],
        },
        {
          heading: "02 Equipment and Materials Directly Affect Participation",
          blocks: [
            "She drew our attention to resource constraints that could affect participation and classroom use. A virtual laboratory with demanding hardware, network, or software installation requirements can be difficult to use. An in-person game requiring specialized materials, extensive preparation, or continuous explanation by team members can also make adoption harder for other schools and teams.",
            "We therefore reviewed equipment requirements, material availability, preparation, and the ease of reproducing and distributing resources. Considering these conditions helped us identify barriers from users' perspectives and prioritize reducing them in subsequent improvements.",
          ],
        },
        {
          heading: "03 Complete Instructions Support Independent Use and Reuse",
          blocks: [
            "Xiang Cao emphasized that first-time participants need coherent guidance on task objectives, game rules, operating steps, and feedback. Users should understand what to do, why they are doing it, and what feedback to expect. Teachers and organizers also need clear activity plans and instructions to reduce preparation and facilitation demands.",
            "Based on her suggestions, we refined rules, operating steps, and facilitation guidance, and reviewed the required equipment and materials. By making the start, progression, and completion of each activity clearer, we aimed to support independent exploration and help other educators run the activities again.",
          ],
        },
        {
          heading:
            "04 What Changed | Including Practical Usability in Educational Resource Design",
          blocks: [
            "Our discussions with Xiang Cao established a third principle for CirCure's work under SDG 4: Educational tools support participation when people can access and use them.",
            "We made practical usability a design priority, continually considering barriers related to equipment, materials, operation, and facilitation. Subsequent improvements to the virtual laboratory and games therefore focused on access, participation, and reuse under different conditions, supporting more learners in encountering synthetic biology.",
          ],
        },
      ],
    },
  },
];

/* ----------------------------------------------------------------------------
 * Four reusable educational resources
 * -------------------------------------------------------------------------- */

const sdg4Resources: ReadonlyArray<EducationResource> = [
  {
    id: "virtual-laboratory",
    title: "01-Virtual Laboratory",
    figure: "sdg4VirtualLaboratory",
    gamesLink: true,
    paragraphs: [
      "The virtual laboratory allows learners to explore laboratory equipment, try procedures, and observe results in a digital environment. Following teachers' advice on learning progression, we organized the **9 experiments into three difficulty levels**. Feedback from interactive design professionals also helped us refine instructions and operational guidance.",
      "The content begins with **microbial culture, colony observation, and staining**, progresses to **plasmid extraction, electrophoresis, DNA recovery, PCR amplification, restriction digestion, and ligation**, and concludes with **plasmid transformation, clone identification, and expression validation**. This progression helps learners become familiar with the basic processes of biological experimentation.",
      "The resource has been used in volunteer teaching classes in Luzhou, Sichuan, providing experimental learning opportunities for students with limited access to real laboratories. Simulated experiences can reduce reliance on physical reagents and consumables, but they still require suitable digital devices and cannot replace hands-on laboratory practice. Clear instructions and reusable resources are intended to support continued use in teaching.",
      "Want to explore more? Visit the **Games page** for the complete virtual laboratory and all experiments.",
    ],
  },
  {
    id: "bio-memory-match",
    title: "02-Bio Memory Match",
    figure: "sdg4BioMemoryMatch",
    gamesLink: true,
    paragraphs: [
      "Bio Memory Match turns **18 life science and synthetic biology concepts**, including DNA, RNA, plasmids, and genetic circuits, into matching cards. Players turn over cards, remember their positions, and find identical images, then use a bilingual Chinese-English illustrated guide to explore the science behind them. The physical game supports 1-4 players, and its difficulty can be adjusted by reducing the number of card types.",
      "At the APiC meeting, attendees played the physical version of Bio Memory Match and **suggested an online version** for people who did not have the cards. We responded by **developing an online game**, accessible through the QR code included with the physical cards or the link below. The suggestion identified a practical barrier to participation, and the online version made the activity available beyond on-site sessions. This provides a concrete example of **participant feedback shaping the development of our educational resources**.",
      "For the physical version, we produced **3 cards of each type, making 54 cards in total**: two for matching and one spare. If one card of a type is lost, the game can still be used. This design increased the initial material input but was intended to reduce the likelihood of remaking or discarding an entire set because of a missing card. It connects SDG 4's emphasis on continued use of educational resources with resource responsibility under SDG 12.",
      "The physical cards support activities where digital devices are inconvenient to use, while the online version expands access. Bilingual rules and an illustrated concept guide help other teams organize, reuse, and adapt the activity.",
    ],
  },
  {
    id: "breast-guardian-rpg",
    title: "03-Breast Guardian RPG, an interactive story game",
    figure: "sdg4BreastGuardianRpg",
    gamesLink: true,
    paragraphs: [
      "We designed interactive stories for different age groups around everyday situations, including family companionship, workplace stress, body image concerns, and hesitation about seeking medical care. The stories introduce breast health and related biological knowledge.",
      "Players advance through character dialogue and branching choices, entering a microscopic world where cells and tissues appear as personified characters. Through exploration, they consider health information, personal needs, and family support. By connecting scientific content with experiences at different life stages, we aim to provide accessible and engaging learning opportunities for people from different backgrounds, supporting quality education under SDG 4.",
      "**Click here to visit the Games page, choose a story, and begin your interactive experience.**",
    ],
  },
  {
    id: "picture-book",
    title: "04-A seed planted in the heart, a Picture Book",
    paragraphs: [
      "*A seed planted in the heart* follows a girl and a lamb on a dream journey, comparing breast development to sprouting seeds and blooming flowers to introduce bodily changes during puberty. The story includes the girl's questions about differences in development, physical discomfort, and changes in appearance. Gentle dialogue and intuitive illustrations encourage her to understand growth, accept her body, and seek help when she has questions.",
      "We combined storytelling with scientific illustrations to make the book approachable for readers with limited prior knowledge, offering a starting point for puberty education and parent-child conversations. This is another way we address SDG 4: using language and formats suited to learners to make knowledge about bodies and health easier to understand and discuss.",
    ],
    pdfs: [
      pdf("Chinese", "a-seed-planted-in-the-heart-cn.pdf"),
      pdf("English", "a-seed-planted-in-the-heart-en.pdf"),
    ],
  },
];

/* ----------------------------------------------------------------------------
 * 18 educational activities across five audience groups
 * -------------------------------------------------------------------------- */

const sdg4Groups: ReadonlyArray<EducationActivityGroup> = [
  {
    id: "young-learners",
    title: "Young Learners",
    intro: [
      "Young learners often have not yet developed a systematic understanding of life science, while topics such as immunity and microorganisms are abstract and invisible to the naked eye. We therefore focus on building an initial understanding through **stories, characters, analogies, and interactive tasks**, rather than introducing complex terminology prematurely. We also acknowledge the limits of engaging explanations: simplification offers a starting point for learning science but does not replace the actual mechanisms.",
    ],
    activities: [
      {
        id: "sdg4-05",
        index: "05",
        name: "Body Guardians",
        photos: sdg4PhotoSets["sdg4-05"],
        date: "2026.5.15",
        location: "Jilin University Affiliated Primary School",
        participants: "44 Students",
        audience: "Fourth-grade primary school students",
        challenge:
          "How can stories and games help children understand immune recognition and memory without leading them to believe that vaccines provide universal protection?",
        whatWeDid:
          "Following teachers' advice on age-appropriate explanations and interactive learning, we introduced the body as a \"body city,\" used character cards to present immune cells, and designed two rounds of a \"Wanted Poster: Catch the Intruder\" game. Children compared searching with and without advance clues, then connected the experience with immune memory and the basic role of vaccines.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "Children participated in character identification, search tasks, and classroom discussions, gaining opportunities to encounter immunology through observation, comparison, and explanation. We also explained the analogy's limitations and reminded them that vaccines do not provide universal protection.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Teaching slides · Character cards · Game rules · Teacher instructions",
        resourcesHint:
          "For teachers and other teams to use and adapt according to learners' ages and prior knowledge.",
        resourcePdfs: [
          pdf("English", "05-body-guardians-en.pdf"),
          pdf("Chinese", "05-body-guardians-cn.pdf"),
        ],
        sdgs: [4, 3],
        article: {
          title:
            "Starting with a \"Body City\" to Explore Invisible Immune Processes",
          sections: [
            {
              blocks: [
                "If the body were a city, who would protect it? How would these \"guardians\" detect danger?",
                "We opened our fourth-grade science lesson with these questions. A familiar story setting, character identification, card games, and discussion helped children begin exploring immunity and vaccines.",
              ],
            },
            {
              heading: "01 Bringing Stakeholder Advice into Classroom Design",
              blocks: [
                "In earlier discussions, teachers encouraged us to build on learners' prior knowledge and make questions, responses, and practical activities part of learning. Science communicators emphasized retaining essential scientific qualifications when simplifying explanations.",
                "This advice shaped the lesson. We began with the \"body city\": skin as the city wall, blood as roads, cells as residents, and the immune system as its protection. Character cards and interactive tasks then introduced scientific concepts, giving children opportunities to make judgments and allowing us to adjust explanations in response.",
              ],
            },
            {
              heading:
                "02 Two Game Rounds Created a Shared Experience for Discussion",
              blocks: [
                "After meeting different immune-cell characters, children played two rounds of \"Wanted Poster: Catch the Intruder.\" In the first round, they received no advance clues about the target. In the second, they saw a \"wanted poster\" before searching for the same target.",
                "The two tasks provided a shared basis for discussion. We asked children to compare their searches: how did having clues beforehand change their decisions? Why was a familiar target easier to recognize again?",
                "We used this experience to introduce immune memory and the idea that vaccines help prepare the immune system in advance. We also explained that the \"wanted poster\" was a learning analogy: actual immune recognition and responses are more complex.",
              ],
            },
            {
              heading:
                "03 Recording Participation Separately from Conceptual Understanding",
              blocks: [
                "Children observed, searched, and compared during the lesson, while character images gave them concrete objects for discussing abstract concepts. However, playing the game, finding a target, or enjoying the activity does not alone demonstrate understanding of immune memory.",
                "Assessing learning therefore requires attention to what children actually say-for example, how they explain the value of prior recognition and whether they understand that vaccines do not provide universal protection.",
                "For future sessions, we plan to introduce brief questions before and after the lesson to document changes in understanding and inform revisions to the story, prompts, and explanations.",
              ],
            },
            {
              heading:
                "04 Supporting Continued Learning While Addressing Misconceptions from Analogies",
              blocks: [
                "This activity addresses SDG 4 through age-appropriate explanations and active participation, offering children without an immunology background a starting point for scientific learning. We hope the lesson can support their future ability to understand health information, express questions, and seek help. These long-term effects still require follow-up feedback.",
                "The activity also connects with SDG 3. Health topics bring science closer to everyday life, but oversimplification could lead children to believe that the immune system always recognizes danger correctly or that vaccination prevents all illness. We therefore explained the analogy's limits to help distinguish the story from actual science.",
                "Teaching slides, character cards, game rules, and teacher instructions support future delivery. Other teachers and teams can adapt the content to classroom time and students' prior knowledge, reducing repeated preparation and allowing the resources to remain useful beyond this activity.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "secondary-school-students",
    title: "Secondary School Students",
    intro: [
      "Secondary school students already have some knowledge of DNA, genetics, and basic life science, but there remains a substantial gap between **textbook knowledge and frontier science, engineering thinking, and participation in real research**. We therefore tailored conceptual analogies, real-world problems, research participation, multidisciplinary collaboration, cross-cultural exchange, and hands-on experimental experiences to different learning settings. We aimed to help students understand what synthetic biology is and **why research is conducted, how it is carried out, and how they can participate in scientific innovation**.",
      "During the winter holiday period from January to March 2026, we brought our educational activities to five schools in China and abroad. We tailored the educational focus at each school to the needs and interests of its students.",
    ],
    activities: [
      {
        id: "sdg4-06",
        index: "06",
        name: "Imagining the Future through Biology",
        photos: sdg4PhotoSets["sdg4-06"],
        date: "Jan. 24, 2026",
        location: "Heilongjiang Hailun No.1 High School",
        participants: "130 Students",
        audience: "High School Students",
        challenge:
          "How can we help students move from familiarity with DNA and RNA to understanding that biological systems can be designed and proposing ideas of their own?",
        whatWeDid:
          "Following advice on progressive explanations and active participation, we introduced biological parts and their combination through the analogy of \"LEGO bricks in biology.\" We then offered an open-ended \"Design Your Dream circRNA\" task, inviting students to start with real-world needs and consider what function they would want an RNA to perform.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity gave students an opportunity to connect basic biological knowledge with engineering design. The open-ended task encouraged them to articulate problems and propose ideas.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Science teaching slides · \"Dream circRNA\" task instructions · Activity facilitation guide",
        resourcesHint:
          "For teachers and other teams to use and adapt according to students' prior knowledge.",
        resourcePdfs: [
          pdf("English", "06-imagining-the-future-through-biology-en.pdf"),
          pdf("Chinese", "06-imagining-the-future-through-biology-cn.pdf"),
        ],
        sdgs: [4],
        article: {
          title: "From Recognizing Biological Molecules to Proposing a Design",
          sections: [
            {
              blocks: [
                "On January 24, 2026, we visited Heilongjiang Hailun No.1 High School for the first activity in our winter holiday science education series. For students encountering synthetic biology for the first time, we began with familiar concepts such as DNA and RNA, explored what synthetic biology seeks to design, and invited them to contribute ideas through an open-ended task.",
              ],
            },
            {
              heading:
                "01 Using Teaching Advice to Connect Existing and New Knowledge",
              blocks: [
                "Teachers had advised us to organize content around learners' prior knowledge and leave room for questions, discussion, and practice. This helped us establish the lesson's focus: building a basic framework for understanding synthetic biology before introducing the project and its applications.",
                "We compared biological parts to LEGO bricks to introduce their different functions and the idea of combining them in a design. We then introduced iGEM and circRNA research, connecting familiar biological knowledge with new research questions.",
              ],
            },
            {
              heading:
                "02 Inviting Students to Design through an Open-Ended Task",
              blocks: [
                "After the introduction, we offered a \"Design Your Dream circRNA\" task: if you could design an RNA, what real-world problem would you want it to help solve?",
                "The task focused on identifying needs and expressing ideas, encouraging students to connect the technology with issues such as disease and health. Starting from questions they cared about, students could describe desired functions and find a starting point for exploring the relevant principles and research methods.",
              ],
            },
            {
              heading:
                "03 Preserving Scientific Qualifications during Creative Exploration",
              blocks: [
                "The open-ended task offered room for imagination while requiring a distinction between design aspirations and validated technology. LEGO bricks provide an intuitive analogy for combining components, but biological parts depend on their context. Whether a combination performs its intended function requires experimental testing and refinement. Students' health-related ideas also provided an opportunity to discuss SDG 3: what need might a design address, and what else would we need to know to realize it? These questions encouraged students to connect creativity with scientific evidence and the conditions required for practical application.",
              ],
            },
            {
              heading:
                "04 Providing a Starting Point for Continued Exploration",
              blocks: [
                "This activity addresses SDG 4 by connecting existing knowledge with new concepts and encouraging active participation. Familiar analogies and an open-ended task gave students opportunities to encounter frontier science and express research interests. We hope students will continue asking how technologies work and how ideas can be tested step by step.",
                "Teaching slides, task instructions, and an activity facilitation guide support students in reviewing the content and help other teachers and teams run the activity again. By adapting explanatory depth and task requirements to learners' starting points, these resources can support further exploration in different classrooms and remain useful beyond a single introductory activity.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-07",
        index: "07",
        name: "Exploring Student Research Projects",
        photos: sdg4PhotoSets["sdg4-07"],
        date: "Feb. 8, 2026",
        location: "Yanbian No.1 High School, Jilin",
        participants: "96 Students",
        audience: "High School Students",
        challenge:
          "How can we make pathways into student research easier to understand?",
        whatWeDid:
          "Using iGEM as an example, we introduced its mission, participation divisions, preparation timeline, judging requirements, topic selection principles, and team responsibilities. We broke a student research project down into an understandable workflow to help students recognize different roles and ways to prepare.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity presented the full process from asking questions and organizing a team to conducting research and communicating results. It provided a reference for students to understand research collaboration, explore their interests, and plan further learning.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Presentation slides · Project workflow overview · Team responsibilities and topic selection guidance",
        resourcesHint:
          "For teachers and other teams to use as a reference. Competition rules for the relevant year should be checked before use.",
        resourcePdfs: [
          pdf("English", "07-exploring-student-research-projects-en.pdf"),
          pdf("Chinese", "07-exploring-student-research-projects-cn.pdf"),
        ],
        sdgs: [4],
        article: {
          title: "Giving Research Interests a Clearer Next Step",
          sections: [
            {
              blocks: [
                "On February 8, 2026, we visited Yanbian No.1 High School in Jilin to explain how a student research project can develop from an initial idea into a team achievement, using iGEM as an example. The session addressed information students may need when considering research: what work a project involves, how team members collaborate, and how they can begin preparing.",
              ],
            },
            {
              heading: "01 Starting with Learners' Participation Needs",
              blocks: [
                "Discussions with teachers helped us recognize that educational content should respond to learners' prior knowledge and practical needs. For high school students interested in research, project organization and pathways to participation are also valuable learning topics.",
                "We therefore focused on how to participate, presenting iGEM as a concrete project process. This helped students understand the stages of research and how they connect.",
              ],
            },
            {
              heading: "02 Breaking the Project Process into Concrete Tasks",
              blocks: [
                "The presentation covered iGEM's origins and mission, participation divisions, preparation timeline, judging requirements, team responsibilities, and topic selection principles. We explained how an idea becomes a research question, how teams allocate tasks, and how research processes and results are documented and presented.",
                "Together, these topics illustrated the sustained and collaborative nature of student research. Understanding the work involved in different roles also helped students consider which subjects they wanted to explore and which tasks they might like to try.",
              ],
            },
            {
              heading:
                "03 Lowering Information Barriers While Recognizing Practical Constraints",
              blocks: [
                "This activity addressed SDG 4 through access to research information and learning opportunities. Clear explanations of project workflows and preparation helped students identify concrete questions to explore after developing an interest in research.",
                "Access to information is only a starting point. Time, funding, laboratory conditions, and supervision still influence actual opportunities. We aimed to provide guidance that supported realistic expectations and avoided presenting any single competition as the only route into research.",
              ],
            },
            {
              heading: "04 Supporting Exploration Beyond a Single Presentation",
              blocks: [
                "We hoped the introduction would provide a starting point for continued exploration of research. Presentation slides, project workflows, and descriptions of team responsibilities support students in reviewing the content and help teachers and other teams deliver similar sessions.",
                "By retaining reusable materials and updating competition rules and preparation information before subsequent use, these resources can continue helping learners understand research, recognize the importance of collaboration, and explore suitable ways to participate.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-08",
        index: "08",
        name: "Engineering Biology for Real Problems",
        photos: sdg4PhotoSets["sdg4-08"],
        date: "Feb. 9, 2026",
        location: "Dazu Chengnan Middle School, Chongqing",
        participants: "63 Students",
        audience: "Secondary School Students",
        challenge:
          "How can we help students see the relationship between technology and real-world problems, beyond remembering examples of synthetic biology technologies?",
        whatWeDid:
          "We organized the lesson around **Design-Build-Test-Learn**, bringing real-world issues such as disease prevention and control, environmental management, and green energy into the classroom. Starting with why these problems exist, we helped students explore why scientists select, test, and continually revise a technology.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The lesson presented synthetic biology as **an engineering approach that starts with real-world problems and develops through evidence-based iteration**, making an unfamiliar discipline more concrete.",
        whatChangedLabel: "Impact",
        resourcePdfs: [
          pdf("English", "08-engineering-biology-for-real-problems-en.pdf"),
          pdf("Chinese", "08-engineering-biology-for-real-problems-cn.pdf"),
        ],
        sdgs: [4, 9],
        article: {
          title:
            "Understanding a Technology Also Means Understanding Why It Was Created",
          sections: [
            {
              blocks: [
                "On February 9, 2026, we visited **Dazu Chengnan Middle School in Chongqing**.",
                "At this stop, we wanted students to explore a practical question alongside examples of synthetic biology technologies: **why do people develop these technologies?**",
              ],
            },
            {
              heading: "01 Why We Designed It",
              blocks: [
                "When frontier science is introduced only through technical terms, students may recognize that a technology is new without understanding its relevance to the world. We therefore introduced synthetic biology through **real problems people face**.",
              ],
            },
            {
              heading: "02 How We Designed It",
              blocks: [
                "We introduced the **Design-Build-Test-Learn** approach to help students understand research as a process of improvement through design, testing, and adjustment. Examples involving **disease prevention and control, environmental management, and green energy** illustrated how synthetic biology can address different societal challenges.",
              ],
            },
            {
              heading: "03 What Learners Experienced",
              blocks: [
                "Students explored connections between problems and technologies:",
                "Why might scientists choose a particular approach to a real problem? How can they assess whether a design works? If results fall short, what should they change next? These questions presented synthetic biology as **an engineering approach to problem-solving**.",
              ],
            },
            {
              heading: "04 What We Learned",
              blocks: [
                "This activity reinforced that understanding why scientific research is pursued is as important for secondary school students as understanding what it involves. Real-world examples can reveal connections between research and society, while the engineering cycle illustrates how research progresses through continued improvement based on evidence.",
              ],
            },
            {
              heading: "05 Contribution to SDG 4",
              blocks: [
                "The activity addressed SDG 4 through **scientific literacy, awareness of problem-solving, and understanding of sustainable development**. We hoped students would recognize life science as a tool for responding to health, environmental, and energy challenges beyond the textbook.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-09",
        index: "09",
        name: "More Than Biology",
        photos: sdg4PhotoSets["sdg4-09"],
        date: "Mar. 4, 2026",
        location: "Jining Confucius Senior High School, Shandong",
        participants: "48 Students",
        audience: "High School Students",
        challenge:
          "How can we help students move beyond the assumption that only those who excel in biology or laboratory work can participate in research?",
        whatWeDid:
          "We introduced Wet Lab, Dry Lab, Human Practices, Art & Design, and Wiki work in iGEM, showing how experimentation, computation, design, communication, and writing support a project together. This helped students consider research participation through their own interests.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity presented a range of roles in research collaboration, helping students connect personal interests with concrete tasks and encouraging them to explore skills beyond their existing strengths.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Presentation slides · Team roles and responsibilities overview",
        resourcesHint:
          "For teachers and other teams to use and adapt according to students' interests and prior knowledge.",
        resourcePdfs: [
          pdf("English", "09-more-than-biology-en.pdf"),
          pdf("Chinese", "09-more-than-biology-cn.pdf"),
        ],
        sdgs: [4, 10],
        article: {
          title: "Finding a Place in Science through Personal Interests",
          sections: [
            {
              blocks: [
                "On March 4, 2026, we visited Jining Confucius Senior High School in Shandong to introduce teamwork in iGEM. The activity addressed an easily overlooked barrier: students who associate life science research primarily with laboratory work may struggle to see how their other interests relate to research.",
              ],
            },
            {
              heading: "01 Providing Starting Points for Different Interests",
              blocks: [
                "Earlier discussions with teachers reminded us that learners' prior knowledge and interests influence how they approach a new field. Alongside explaining synthetic biology research, we needed to help students understand how they could participate.",
                "We therefore focused on the actual work of different team roles, helping students interested in programming, mathematics, design, communication, or writing identify connections with scientific projects.",
              ],
            },
            {
              heading:
                "02 Understanding Research Collaboration through Concrete Work",
              blocks: [
                "Starting with an introduction to iGEM, we explained how different areas of work support a project:",
                {
                  bullets: [
                    "Wet Lab: Conducting biological experiments to test designs and hypotheses.",
                    "Dry Lab: Using mathematics, programming, and computational tools to analyze problems and support research.",
                    "Human Practices: Understanding societal needs, engaging stakeholders, and considering technological impacts.",
                    "Art & Design: Using visual communication to help different audiences understand science.",
                    "Wiki: Systematically documenting research processes and results for public presentation and future reference.",
                  ],
                },
                "These areas are connected by shared questions. Experiments need analysis, designs need to consider real-world needs, and results need clear documentation and communication. By showing these connections, we aimed to help students understand how different abilities contribute through collaboration.",
              ],
            },
            {
              heading: "03 Using Team Roles as Directions for Exploration",
              blocks: [
                "The roles gave students reference points for considering participation. Those interested in programming could explore modeling and data analysis; those interested in design could investigate scientific visualization; and those who enjoy communication and writing could learn about needs assessment, public engagement, and research communication.",
                "Roles should remain open to exploration. Students can start from existing interests and learn to undertake unfamiliar tasks. We hoped this introduction would broaden their sense of possibility and prevent a current lack of a particular skill from discouraging them from research.",
              ],
            },
            {
              heading:
                "04 Supporting Inclusive Participation and Further Learning",
              blocks: [
                "This activity addressed SDG 4 through the development of diverse abilities and inclusive learning opportunities, while connecting with SDG 10's concern for reducing inequalities. We sought to broaden perceptions of research participation so that more students could see their interests contributing to collective problem-solving.",
                "This broader understanding still requires guidance, time, and resources to become participation; it does not mean that practical barriers have been removed. Presentation slides and role descriptions support student review, follow-up classroom discussions, and adaptation by other teams, allowing one presentation to become a starting point for further exploration.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-10",
        index: "10",
        name: "SynBio Across Borders",
        photos: sdg4PhotoSets["sdg4-10"],
        date: "Mar. 4, 2026",
        location: "Technical Institute Avogadro, Turin, Italy",
        participants: "50 Students",
        audience:
          "High school students participating in cross-cultural exchange",
        challenge:
          "How can students with different languages and curricular backgrounds participate in discussions about synthetic biology?",
        whatWeDid:
          "We held a face-to-face exchange in English, beginning with the progression from understanding living systems to designing biological functions. We introduced synthetic biology and iGEM's emphasis on collaboration and knowledge sharing, then discussed examples from health research.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity created an opportunity for students from different cultural backgrounds to discuss synthetic biology together. It also prompted us to consider how language choices, background explanations, and communication formats affect participation in learning.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "English presentation slides · Research case summaries · Discussion topic outline",
        resourcesHint:
          "For teachers and other teams to use and adapt according to participants' language proficiency and curricular backgrounds.",
        resourcePdfs: [pdf("English", "10-synbio-across-borders-en.pdf")],
        sdgs: [4, 17],
        article: {
          title:
            "Opening Cross-Cultural Dialogue through Shared Scientific Questions",
          sections: [
            {
              blocks: [
                "On March 4, 2026, we met high school students at Technical Institute Avogadro in Turin, Italy, for a face-to-face exchange. We introduced synthetic biology and iGEM in English and discussed health research. This brought our educational activities into a different linguistic and curricular setting, making the accessibility of our explanations an important part of the exchange.",
              ],
            },
            {
              heading: "01 Establishing a Shared Starting Point",
              blocks: [
                "Teachers and science communicators had advised us to organize information around audiences' prior knowledge and communicate central messages clearly. In a cross-cultural setting, this also meant avoiding assumptions that participants shared the same curriculum, terminology, or project background.",
                "We began with the progression from understanding living systems to designing biological functions, establishing a shared starting point before introducing iGEM and related research. This allowed students to approach the technology through the questions it addresses.",
              ],
            },
            {
              heading:
                "02 Connecting Science with Real Needs through Research Examples",
              blocks: [
                "We used health research examples to explain how synthetic biology designs can develop from real-world problems and discussed these ideas directly with students.",
                "Health provided a familiar context for considering what research aims to address, which approaches it uses, and what further validation is needed. The discussion also created space to explore differences in learning experiences and interests.",
              ],
            },
            {
              heading:
                "03 Treating Language Adaptation as a Condition for Participation",
              blocks: [
                "English provided a shared language for the exchange, but a shared language does not make specialized content equally easy for everyone to understand. Terminology density, explanations, and opportunities to speak all affect continued participation.",
                "This experience clarified priorities for future cross-cultural education: explain essential background, avoid unexplained terminology, and leave space for clarification and questions. We aimed to support contributions from learners with different levels of language proficiency and avoid creating additional language barriers.",
              ],
            },
            {
              heading:
                "04 Supporting Continued Learning through Exchange and Sharing",
              blocks: [
                "The activity addressed SDG 4 through learning across languages and scientific exchange, while connecting with SDG 17's emphasis on collaboration and knowledge sharing. The face-to-face discussion provided a starting point for further educational cooperation, whose sustained value depends on continued use of the materials and further exchanges.",
                "English slides, research examples, and discussion outlines provide a reference for other teachers and teams. Adapting them to local curricula and language settings can help scientific content remain understandable, open to discussion, and reusable across educational contexts.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-11",
        index: "11",
        name: "Air to Bread",
        photos: sdg4PhotoSets["sdg4-11"],
        leadIn: [
          "Following our winter holiday series, we continued our educational outreach with activities marking World Book Day. This occasion offered another opportunity to engage students and encourage their curiosity through learning.",
        ],
        date: "World Book Day, 2026.4.23",
        location: "Jilin University Affiliated Middle School",
        participants: "203 Students",
        audience: "Middle School Students",
        challenge:
          "How can unfamiliar science become understandable through everyday experience?",
        whatWeDid:
          "Following earlier advice on connecting prior knowledge, intuitive explanations, and interactive learning, we began with the question, \"Could we make bread without growing wheat?\" Analogies such as \"cell-micro factory,\" \"DNA-instruction manual,\" and \"metabolic pathway-production line\" connected everyday food, basic biology, and synthetic biology.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity offered students a way to explore frontier science through an everyday question. Discussion connected food sources, material transformations, and the functions of biological systems, while World Book Day provided an opportunity to introduce scientific reading and attention to evidence.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Science teaching slides · Classroom discussion questions · Scientific reading and activity facilitation guide",
        resourcesHint:
          "For teachers and other teams to use, with explanatory depth adapted to students' prior knowledge.",
        resourcePdfs: [
          pdf("English", "air-to-bread-en.pdf"),
          pdf("Chinese", "air-to-bread-cn.pdf"),
        ],
        sdgs: [4, 9, 12],
        article: {
          title:
            "Starting with Bread to Explore the Possibilities of Living Systems",
          sections: [
            {
              blocks: [
                "On World Book Day 2026, we visited Jilin University Affiliated Middle School and opened a synthetic biology lesson with an everyday question: could people make bread without growing wheat?",
                "Bread connected familiar experience with scientific exploration. We used it to encourage students to consider where the materials in food come from and why scientists investigate new ways to produce useful substances through microorganisms.",
              ],
            },
            {
              heading: "01 Building on Existing Knowledge",
              blocks: [
                "Earlier discussions with teachers and science communicators emphasized finding a familiar starting point before introducing unfamiliar concepts and gradually increasing depth. We therefore began with bread and wheat, discussed what plants need to grow and how organic matter forms, and connected these ideas with students' knowledge of photosynthesis. This introduced carbon fixation and research into microbial transformations of matter, allowing new concepts to develop around a concrete question.",
              ],
            },
            {
              heading:
                "02 Connecting Abstract Processes with Everyday Analogies",
              blocks: [
                "We used three analogies to introduce activities within cells:",
                {
                  bullets: [
                    "Cell-Micro Factory: Helping students imagine the many biochemical reactions occurring inside a cell.",
                    "DNA-Instruction Manual: Introducing the relationship between genetic information and cellular functions.",
                    "Metabolic Pathway-Production Line: Explaining how substances are transformed through successive reactions.",
                  ],
                },
                "These analogies provided starting points for further understanding. We then introduced how synthetic biology investigates and regulates biological processes, while explaining that interactions in real cells are more complex than factories and production lines.",
              ],
            },
            {
              heading: "03 Extending Curiosity into Reading and Reflection",
              blocks: [
                "Questions such as \"How might air be connected with food?\" and \"What work can microorganisms perform?\" invited students to draw on prior knowledge, propose explanations, and discuss ideas.",
                "World Book Day also allowed us to connect these questions with scientific reading. When encountering an intriguing research headline, students can ask how the research was conducted, what evidence supports its conclusions, and which conditions still need to be met before practical application. We hoped to encourage attention to evidence alongside curiosity about frontier science.",
              ],
            },
            {
              heading: "04 Connecting Future Food with Sustainable Development",
              blocks: [
                "The activity introduced carbon fixation, biomanufacturing, and future food through explanations suited to middle school students, addressing SDG 4 through quality learning about sustainability-related science. It also provided starting points for discussing technological innovation under SDG 9 and resource use under SDG 12. However, \"air to bread\" was a question intended to prompt exploration; it should not be interpreted as direct conversion without other materials or energy. Whether new biomanufacturing approaches offer resource advantages also depends on production conditions and actual inputs. Retaining these qualifications helped students examine the conditions required to realize technological potential.",
                "Teaching slides, discussion questions, and scientific reading guidance support future use by teachers and other teams. Adjusting question difficulty and background explanations can help these resources continue supporting exploration of science through everyday experience.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-12",
        index: "12",
        name: "Synbio classroom",
        photos: sdg4PhotoSets["sdg4-12"],
        date: "Aug. 9, 2026",
        location: "Institute of Translational Medicine, Jilin University",
        participants: "16 Learners",
        audience: "Incoming Grade 11 Students",
        challenge:
          "How can we help high school students apply textbook biology to experimental procedures, result interpretation, and biological design?",
        whatWeDid:
          "Following advice on progressive learning and practical participation, we designed a **Know → Experiment → Analyze → Decide → Design** pathway. Safety training, PCR, crude DNA extraction, gel interpretation, a research decision-making game, and plasmid component design formed a one-day research experience.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The 16 learners participated in five progressive modules, moving from understanding concepts to open-ended design. They applied high school biology through experiments, result interpretation, and task-related choices, gaining concrete opportunities to explore laboratory skills and research thinking.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Course slides · Experimental and safety instructions · Result analysis tasks · Research game rules · Plasmid design materials",
        resourcesHint:
          "For teachers and other teams to use as a reference. Experimental modules require suitable facilities, safety arrangements, and professional supervision.",
        resourcePdfs: [
          pdf(
            "English resource 1",
            "12-01-synbio-classroom-opening-ceremony.pdf",
          ),
          pdf("English resource 2", "12-02-synbio-classroom-pcr-en.pdf"),
          pdf(
            "English resource 3",
            "12-03-synbio-classroom-dna-extraction-identification-en.pdf",
          ),
          pdf(
            "English resource 4",
            "12-04-synbio-classroom-life-science-monopoly-en.pdf",
          ),
          pdf(
            "English resource 5",
            "12-05-synbio-classroom-plasmids-and-biological-parts-en.pdf",
          ),
        ],
        sdgs: [4, 9],
        article: {
          title: "Turning Textbook Knowledge into a Tool for Exploration",
          sections: [
            {
              blocks: [
                "On August 9, 2026, we organized the \"SynBio Classroom-Decoding Life, Designing the Future\" summer camp for 16 incoming Grade 11 students. The course connected high school biology with experiments, evidence analysis, and design tasks, introducing different aspects of research within a one-day program.",
              ],
            },
            {
              heading:
                "01 Translating Teaching Advice into a Progressive Learning Pathway",
              blocks: [
                "Teachers had reminded us that practical activities should build on existing knowledge and provide space for understanding, experimentation, and reflection. For students already familiar with DNA, complementary base pairing, and genetic information, we could focus on how this knowledge is applied.",
                "We organized the day around **Know → Experiment → Analyze → Decide → Design**. Safety procedures and basic principles led into experiments, followed by result analysis, game-based decisions, and component design. Connected knowledge linked the stages and helped students understand the purpose of each step.",
              ],
            },
            {
              heading:
                "02 Moving from Hands-On Procedures to Result Interpretation",
              blocks: [
                "Students began the morning with laboratory safety training before undertaking experiments. During PCR, they connected complementary base pairing with amplification, practiced pipetting, and prepared reaction mixtures. During crude DNA extraction from onions, they used grinding, filtration, and alcohol precipitation to observe a crude DNA-containing extract, connecting an abstract concept with a visible phenomenon.",
                "In the afternoon, students examined PCR results using agarose gel electrophoresis and considered how observations support judgments. The course thus extended from experimental procedures to evidence analysis, connecting performing an experiment with interpreting its results.",
              ],
            },
            {
              heading:
                "03 Exploring Design through a Research Game and Component Combinations",
              blocks: [
                "In \"Life Science Monopoly,\" students encountered research choices and collaboration through questions and event cards, applying their knowledge to specific tasks.",
                "The course then introduced plasmids and biological component design. Students learned about promoters, RBSs, CDSs, and terminators and attempted to combine them under task constraints. This encouraged them to consider component functions, relationships between components, and intended outcomes, introducing engineering design in synthetic biology.",
                "These classroom combinations were design exercises whose actual functions would require experimental validation. Maintaining this distinction helped connect design, testing, and refinement, while linking the course with scientific research and innovation skills under SDG 9.",
              ],
            },
            {
              heading: "04 Supporting Skills Development and Continued Use",
              blocks: [
                "SynBio Classroom addressed SDG 4 through practical learning and skills development, giving students opportunities to apply biology beyond the classroom. We hoped they would carry forward habits of following procedures, interpreting observations, and using evidence to examine their ideas.",
                "Such activities also depend on facilities, equipment, consumables, and professional supervision. The accompanying experimental instructions, analysis tasks, game rules, and design materials support adaptation under different conditions. Teachers and teams can select suitable modules-for example, beginning with result discussions, research games, and component design when laboratory facilities are unavailable, then arranging practical experiments in an appropriate setting.",
                "Documenting the course structure and organizational requirements can reduce preparation demands and help the summer camp become an educational resource that others can continue adapting and using.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "university-students",
    title: "University Students",
    intro: [
      "University students have greater capacity for independent learning and judgment. Education at this stage can therefore provide further opportunities for **action, discussion, and value-based judgments**. Through everyday sustainability practices and bioethical discussion, we invited learners to consider how knowledge informs action and how to navigate the complex relationships between technological benefits, risks, and responsibilities.",
    ],
    activities: [
      {
        id: "sdg4-13",
        index: "13",
        name: "The Pen of Creation",
        photos: sdg4PhotoSets["sdg4-13"],
        date: "2026.4.12",
        location: "Jilin University",
        participants: "13 participants",
        audience: "University Students",
        challenge:
          "When biotechnology enables change, how should we decide which changes are responsible?",
        whatWeDid:
          "We organized a debate around \"Reshaping Nature or Working with Nature?\" Participants examined technological applications, ecological risks, uncertainty, and social responsibility, drawing on evidence from different positions, responding to challenges, and weighing values.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity provided space to discuss controversies in science and technology. Through argument and exchange, participants practiced understanding different positions, assessing evidence, recognizing uncertainty, and developing reasoned views.",
        whatChangedLabel: "Impact",
        sdgs: [4, 12],
        article: {
          title:
            "Examining the Reasons for Choices Beyond Technological Possibility",
          sections: [
            {
              blocks: [
                "Synthetic biology offers new research directions for health, environmental, and production challenges, while raising questions about responsibility and the limits of technological intervention. We organized a university student debate around \"The Pen of Creation: Reshaping Nature or Working with Nature?\" to connect science with ethical reflection, environmental responsibility, and societal choices.",
              ],
            },
            {
              heading:
                "01 Extending Two-Way Communication to Technological Controversies",
              blocks: [
                "Discussions with educators encouraged us to prioritize questions, responses, and active participation. For university students, we wanted to create further opportunities to examine complex issues, question technologies, and explain the basis of their judgments.",
                "The debate focused on benefits, risks, and responsibilities in technological application. Different views could be expressed, questioned, and compared around a shared topic, providing a concrete setting for critical thinking.",
              ],
            },
            {
              heading: "02 Weighing Values through Different Positions",
              blocks: [
                "The debate offered two perspectives. \"Reshaping nature\" emphasized biotechnology's potential to address disease, food needs, and environmental problems, asking whether active intervention could be a responsibility in improving living conditions. \"Working with nature\" emphasized ecological complexity, gene dispersal, ecological effects, and long-term uncertainty, drawing attention to conditions for use and limits on intervention.",
                "We did not assume either side represented the final answer. Participants were asked to support arguments, respond to opposing questions, and explain the conditions under which their judgments held. Differences between positions became a means of examining the issues.",
              ],
            },
            {
              heading: "03 Turning Debate into Practice in Judgment",
              blocks: [
                "Discussion addressed several connected questions:",
                {
                  bullets: [
                    "Who might benefit from a technology, and who might bear its risks?",
                    "What are the implications of acting or delaying action on health and environmental problems?",
                    "What evidence and safeguards are needed when long-term effects remain unclear?",
                    "Are there alternatives that should be compared with the proposed technology?",
                  ],
                },
                "These questions required participants to consider technological, environmental, and social factors while distinguishing existing evidence, reasonable inference, and value judgments. We hoped this practice would support clearer explanations of their positions and greater understanding of others' concerns in future scientific reading and public discussion.",
              ],
            },
            {
              heading:
                "04 Supporting Responsible Participation through Open Discussion",
              blocks: [
                "The activity addressed SDG 4 through sustainability education and critical thinking, connecting with SDG 12 through discussion of resource use, environmental costs, and the allocation of responsibilities. Its educational aim was to offer methods for examining complex scientific and technological issues, while allowing participants to reach different conclusions.",
                "Debate also has limitations. The contrast between \"reshaping\" and \"working with\" nature can generate discussion but may oversimplify real choices. Decisions usually require attention to specific applications, degrees of intervention, monitoring, and alternatives. Understanding the conditions behind arguments and the uncertainties involved therefore matters more than defending a fixed position.",
                "Background materials, debate rules, and discussion guidance support similar activities by other teachers and teams. Updated cases, additional perspectives, and adjusted question depth can help these resources continue supporting university students' engagement with science, technology, and sustainable development.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "general-public",
    title: "General Public",
    intro: [
      "Public audiences vary widely in age, knowledge, and motivation. Public education therefore requires **starting points at different levels and in different formats**. Through health consultations, digital experiences, games, music, and creative activities, we brought science into open public settings beyond classrooms and laboratories. Engaging formats can encourage interest, but they must remain grounded in accurate and reliable content.",
    ],
    activities: [
      {
        id: "sdg4-14",
        index: "14",
        name: "Apricot Blossoms and Pink Care",
        photos: sdg4PhotoSets["sdg4-14"],
        date: "2026.4.19",
        location: "Jilin University Apricot Blossom Festival · Nanling Campus",
        participants: "3000 Participants",
        audience: "Campus Community & General Public",
        challenge:
          "How can reliable health knowledge become accessible to people with different needs?",
        whatWeDid:
          "Following advice on audience needs, intuitive explanations, and interactive participation, we combined physician consultations, AR/MR medical experiences, knowledge quizzes, science leaflets, games, and creative activities. Participants could choose learning formats suited to their needs.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity distributed **more than 300 science leaflets**, and participants created **more than 200 handmade bookmarks**. Free physician consultations, digital medical experiences, and interactive questions brought breast health education into an open campus setting.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Science leaflets · Knowledge question cards · Interactive activity rules and organization instructions",
        resourcesHint:
          "For teachers, student associations, and other teams to use as a reference. Professional consultations and medical experiences require appropriate personnel and equipment.",
        resourcePdfs: [
          pdf("English", "14-apricot-blossoms-and-pink-care-en.pdf"),
          pdf("Chinese", "14-apricot-blossoms-and-pink-care-cn.pdf"),
        ],
        sdgs: [4, 3],
        article: {
          title: "Offering Different Ways to Approach Health Knowledge",
          sections: [
            {
              blocks: [
                "During the Jilin University Apricot Blossom Festival, we organized \"Apricot Blossoms and Pink Care,\" a public breast health education activity, in the \"Spring Warmth in Medicine, Innovating the Future\" exhibition area at Nanling Campus. Students, staff, and members of the public could participate through reading, games, medical experiences, and professional consultations, bringing health learning into an everyday public space.",
              ],
            },
            {
              heading:
                "01 Designing Different Starting Points around Public Needs",
              blocks: [
                "Discussions with teachers, science communicators, and interactive design professionals had encouraged us to pay closer attention to differences among learners. At an open event, some participants may want basic explanations, others may be interested in medical technology, and others may bring specific health questions.",
                "We therefore offered several areas that participants could choose between. They could begin with their interests and decide whether to read further, try an experience, or seek a consultation, adjusting the pace and depth of participation to their needs.",
              ],
            },
            {
              heading:
                "02 Supporting Understanding through Professional Exchange and Direct Experience",
              blocks: [
                "Dr. Xin Guan from breast surgery and Dr. Lin Jia from the oncology center provided free health consultations, preventive health guidance, and advice on seeking medical care. This gave the public opportunities to ask professionals questions directly.",
                "We also demonstrated a \"Three-Stage Progressive Virtual Simulation Training System,\" using AR/MR to present clinical scenarios such as history-taking, examinations, and simulated surgery. Breast health question cards and trifold science leaflets offered another route to learning: participants could engage on site or take materials away to read at their own pace.",
              ],
            },
            {
              heading:
                "03 Incorporating Interaction and Expression into Public Education",
              blocks: [
                "A \"Knock Down Cancer Cells\" beanbag game and bookmark-making activity provided approachable ways to participate. More than 300 science leaflets were distributed, and participants completed more than 200 bookmarks, allowing materials from the event to accompany them afterward.",
                "Two pink ribbon walls offered space for expression. Participants shared wishes for their families' health, encouragement for people with breast cancer, and support for medicine and public service. This connected health topics with personal concerns and social support, creating further opportunities for exchange.",
              ],
            },
            {
              heading:
                "04 Connecting Accessible Participation with Professional Explanations",
              blocks: [
                "The activity addressed SDG 4 through public health literacy and informal learning opportunities, while connecting with SDG 3 through reliable information and professional exchange. Different formats allowed people from varied backgrounds to choose suitable starting points, while free consultations and take-home materials reduced some barriers to information.",
                "Clear distinctions remained necessary. The beanbag game could not explain actual mechanisms of cancer treatment, and simulated clinical scenarios could not replace individual diagnosis. Activities needed to connect these experiences with professional explanations so participants would not mistake game rules or simulations for medical facts.",
                "Science leaflets, question cards, and organization instructions support future public education by other teams. Modules can be selected according to available personnel, equipment, and facilities, allowing health knowledge to remain available for reading, discussion, and sharing after the event.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-15",
        index: "15",
        name: "Love, Music & Us",
        photos: sdg4PhotoSets["sdg4-15"],
        date: "2026.5.16",
        location: "Jilin University Lawn Music Festival",
        participants: "278 participants",
        audience: "University students and members of the campus community",
        challenge:
          "How can music make a first encounter with synthetic biology more approachable while connecting interactive experiences with specific scientific content?",
        whatWeDid:
          "Following advice on intuitive explanations and interactive participation, we created three stations: a rhythm challenge, emotion-coloring bookmarks, and collaborative melody creation. Movement, visuals, and sound encouraged participation and provided starting points for introducing experimental procedures, biological information expression, and synthetic biology.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity offered different ways for people with varied interests and knowledge backgrounds to encounter life science. Participants joined simulated procedures, creative tasks, and questions and answers, contributing their own ideas and expressions.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Interactive station instructions · Rhythm challenge rules · Bookmark templates · Scientific explanations and question materials",
        resourcesHint:
          "For teachers, student associations, and other teams to use, with facilitation adapted to the activity setting.",
        sdgs: [4],
        article: {
          title: "Opening a Scientific Conversation with a Melody",
          sections: [
            {
              blocks: [
                "At the Jilin University Lawn Music Festival, we brought synthetic biology into a public campus event through music and creativity. Participants could begin with familiar songs, rhythms, or colors, then explore related scientific concepts through explanations and questions.",
              ],
            },
            {
              heading: "01 Starting with Familiar Forms of Expression",
              blocks: [
                "Discussions with science communicators and interactive design professionals reminded us that communication formats and participation requirements influence whether people engage with science. At an open event such as a music festival, brief, intuitive activities that people can choose to join provide suitable starting points.",
                "We therefore organized several music-themed stations that participants could select according to their interests. Each included a connection to scientific content so that rhythm and creativity could lead to questions and discussion.",
              ],
            },
            {
              heading:
                "02 Connecting Experience with Science through Three Stations",
              blocks: [
                "**Molecular Laboratory Rhythm Challenge**",
                "We adapted movements associated with laboratory tasks involving alcohol lamps, pipettes, and centrifuges into a rhythm challenge. Participants followed a beat through a simulated sequence, exploring order and coordination before discussing the importance of experimental procedures. The challenge was a simulation game; actual laboratory work still requires appropriate safety measures and specific protocols.",
                "**The Transcript Project: Emotion-Coloring Bookmarks**",
                "Participants chose a song that moved them and recorded their feelings through colors on a bookmark. The experience of presenting information in different forms provided a starting point for discussing transcription, translation, and gene expression.",
                "This connection opened a conversation; emotions and coloring do not correspond to molecular mechanisms. Explanations distinguished artistic expression from biological processes, clarifying the analogy's purpose and limits.",
                "**Gene Jukebox: Creating Melodies Together**",
                "Song guessing, guitar performances, and interactive questions brought synthetic biology into informal exchanges. Participants could also share favorite lyrics and personal responses to inspire the team's future music-making, giving the public a role in shaping the creative process.",
              ],
            },
            {
              heading:
                "03 Using Interest as a Starting Point for Further Learning",
              blocks: [
                "The three stations used movement, visuals, and sound, allowing people to begin with a familiar form of participation without prior specialist knowledge.",
                "Music and creativity encouraged people to stay and talk, while scientific explanations connected the experience with concepts. We hoped participants would progress from asking what the activity was to questions such as why experiments follow a sequence and what transcription and translation mean.",
                "Different formats should also allow flexible participation. Future organizers can offer a choice of stations and written explanations, reducing reliance on hearing music, distinguishing colors, or following movements.",
              ],
            },
            {
              heading:
                "04 Providing Diverse Learning Opportunities for the Campus Public",
              blocks: [
                "The activity addressed SDG 4 through informal learning and public engagement, bringing life science education into campus settings beyond the classroom. Music, games, and creative tasks offered different starting points, allowing participants to engage at their own pace and according to their interests.",
                "We treated interest as the beginning of an exchange, without equating participation in entertainment with scientific understanding. Clear conceptual explanations and explicit limits to analogies helped keep these formats connected to learning.",
                "Interactive rules, bookmark templates, and explanatory materials support reuse by other teams. Stations can be selected according to the venue, sound conditions, and participants' needs so that the educational format suits the audience.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "rural-learners",
    title: "Rural Learners",
    intro: [
      "Geography and educational resources should not determine whether a child can encounter life science. In rural and relatively resource-limited settings, we focused on **accessible, participatory learning opportunities directly connected with everyday life**. Stories and tasks encouraged curiosity, while health education and digital experiments connected knowledge with observation, judgment, and practical action.",
    ],
    activities: [
      {
        id: "sdg4-16",
        index: "16",
        name: "Life Science Adventure",
        photos: sdg4PhotoSets["sdg4-16"],
        date: "2026.7.15",
        location: "Luzhou, Sichuan",
        participants: "28 learners",
        audience: "Young learners in rural communities",
        challenge:
          "How can we provide rural children with understandable, participatory introductions to life science that turn curiosity into scientific exploration?",
        whatWeDid:
          "Following advice on age-appropriate explanations and active participation, we introduced a cartoon \"little bacterium\" as an adventure companion. Everyday examples, a DNA \"instruction manual\" analogy, interactive questions, and a \"Design a Bacterium's Superpower\" task brought life science into rural classrooms.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity increased opportunities for rural children to encounter life science and synthetic biology. Observation, discussion, and imaginative tasks encouraged them to ask questions and express ideas based on everyday experiences.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Story-based slides · Interactive questions · \"Bacterial Superpowers\" creative task instructions",
        resourcesHint:
          "For rural teachers, volunteer teaching teams, and other educators to use and adapt according to learners' ages and prior knowledge.",
        resourcePdfs: [
          pdf("English", "16-life-science-adventure-en.pdf"),
          pdf("Chinese", "16-life-science-adventure-cn.pdf"),
        ],
        sdgs: [4, 10],
        article: {
          title: "Bringing Life Science Exploration into Rural Classrooms",
          sections: [
            {
              blocks: [
                "In Luzhou, Sichuan, we introduced life science to rural children through the question, \"Are all bacteria bad?\" A cartoon bacterium accompanied them throughout the lesson, connecting familiar experiences with microorganisms, DNA, and synthetic biology.",
              ],
            },
            {
              heading: "01 Building on Children's Everyday Experiences",
              blocks: [
                "Teachers had emphasized connecting early science education with learners' experiences and leaving space for questions and expression. We began with children's everyday impressions of bacteria, invited them to share their ideas, and introduced different microbial roles through examples such as food fermentation.",
                "These examples helped children recognize that microorganisms cannot simply be labeled \"bad\" and connected classroom questions with familiar life.",
              ],
            },
            {
              heading:
                "02 Introducing Unfamiliar Concepts through Stories and Images",
              blocks: [
                "Images of different living organisms encouraged observation and comparison. We then used the \"instruction manual\" analogy to introduce the relationship between DNA and biological characteristics.",
                "Building on this, we explained how scientists investigate living systems and attempt to design or modify them for particular functions. The lesson progressed from nearby microorganisms to biological information and then to designing biological functions, allowing participation without requiring technical vocabulary first.",
              ],
            },
            {
              heading: "03 Encouraging Expression through Imaginative Tasks",
              blocks: [
                "At the end of the lesson, we asked:",
                "**If you could give a little bacterium a new \"superpower,\" what would you want it to help people do?**",
                "Protecting forests, cleaning water, helping doctors, or protecting animals could all inspire ideas. The task encouraged children to begin with concerns that mattered to them and describe a desired function.",
                "\"Superpowers\" invited imagination, but whether an idea could work would still require research and experimental testing. Cartoon characters also cannot indicate whether real microorganisms are safe. Retaining these distinctions helped the story support scientific understanding.",
              ],
            },
            {
              heading:
                "04 Leaving Reusable Resources for Rural Science Education",
              blocks: [
                "The activity addressed SDG 4 through age-appropriate explanations and active participation, bringing frontier life science into rural classrooms. It also connected with SDG 10 through geographically inclusive learning opportunities, giving local children more chances to encounter science, ask questions, and express ideas.",
                "No laboratory experience was required. Stories, images, and discussion organized the learning process. Slides and creative task instructions provide a reference for rural teachers and future volunteer teams and can be adapted into oral discussion or drawing activities.",
                "We hoped these resources would remain useful after the visit, sustaining curiosity about life and opportunities to keep asking why.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-17",
        index: "17",
        name: "Little Scientist",
        photos: sdg4PhotoSets["sdg4-17"],
        date: "2026.7.20",
        location: "Luzhou, Sichuan",
        participants: "36 learners",
        audience: "Young learners in rural communities",
        challenge:
          "How can rural children encounter scientific observation and experimental reasoning and begin understanding the relationship between conclusions and evidence?",
        whatWeDid:
          "We organized microbial observation around a \"Create an ID Card for a Bacterium\" task. Finding colonies, learning about equipment, simulating Gram staining, and examining microscopic observations guided children through gathering information and describing microbial characteristics.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity offered opportunities to encounter experimental tools, simulated procedures, and observational results. It connected microbial knowledge with observation, comparison, and judgment to introduce basic scientific thinking.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Task slides · Equipment introduction materials · Staining simulation and observation task instructions",
        resourcesHint:
          "For rural teachers, volunteer teaching teams, and other educators to use. Work with real samples and reagents requires appropriate safety conditions and professional supervision.",
        resourcePdfs: [
          pdf("English", "17-little-scientist-en.pdf"),
          pdf("Chinese", "17-little-scientist-cn.pdf"),
        ],
        sdgs: [4, 10],
        article: {
          title:
            "Exploring How Scientific Answers Are Developed in a Rural Classroom",
          sections: [
            {
              blocks: [
                "In Luzhou, Sichuan, our \"Little Scientist\" activity asked how scientists learn about a bacterium's characteristics. The \"Create an ID Card for a Bacterium\" task progressed from colony observation and equipment recognition to simulated staining and microscopic observations, introducing how scientific information is obtained.",
              ],
            },
            {
              heading:
                "01 Turning Scientific Observation into a Participatory Task",
              blocks: [
                "Teachers had encouraged practical activities that allow children to observe, respond, and think. We therefore connected the lesson through a concrete task, asking learners to gather the information needed to describe a microorganism.",
                "The \"ID card\" was a metaphor for organizing observations. It did not imply that one staining procedure could identify a bacterium. The central idea was that describing an object requires observations that support a judgment.",
              ],
            },
            {
              heading:
                "02 Moving from Visible Phenomena to Experimental Processes",
              blocks: [
                "Children first located colonies in culture dishes and learned the distinction between a visible colony and an individual microscopic bacterium. We then introduced tools such as inoculating loops, slides, and microscopes.",
                "In the Gram-staining simulation, four bottles of \"magic solutions\" introduced crystal violet, iodine solution, decolorizer, and safranin. Children followed the steps and observed changes before connecting the process with microscopic results.",
                "The playful names supported participation, while explanations retained the reagents' actual names and functions so that children understood that color changes arose from a specific experimental process.",
              ],
            },
            {
              heading:
                "03 Connecting Procedures and Observations with Judgment",
              blocks: [
                "The task followed three questions: why do we perform this step, what do we observe, and what can these observations tell us?",
                "By learning about equipment, considering the sequence of steps, and examining results, children developed descriptions of microbial characteristics. They also encountered the idea that a color or shape provides only part of the information and that further judgments may require other evidence.",
                "We hoped this questioning approach would extend to everyday learning, encouraging children to ask how an answer was reached.",
              ],
            },
            {
              heading:
                "04 Supporting Science Learning under Different Conditions",
              blocks: [
                "The activity addressed SDG 4 through practical learning and attention to evidence, bringing scientific observation and experimental reasoning into a rural classroom. It also connected with SDG 10 by providing additional opportunities to encounter scientific tools and research processes.",
                "Actual experiments require equipment, samples, and professional supervision. The accompanying resources include equipment introductions, staining simulations, and result discussion tasks. Classrooms without experimental facilities can use images, simulations, and discussion to practice observation.",
                "These adaptable materials support rural teachers and future volunteer teaching teams. We hoped the activity would leave resources that continue helping children learn about microorganisms and form judgments from observations.",
              ],
            },
          ],
        },
      },
      {
        id: "sdg4-18",
        index: "18",
        name: "Health Guardians",
        photos: sdg4PhotoSets["sdg4-18"],
        date: "2026.7.22",
        location: "Duji Town Central Primary School, Shangqiu, Henan",
        participants: "42 students",
        audience: "Primary school students in rural communities",
        challenge:
          "How can volunteer teaching provide rural children with understandable health education connected to everyday life?",
        whatWeDid:
          "We adapted the lesson to rural primary school students' ages and experiences, introducing communicable and noncommunicable diseases as \"diseases that travel\" and \"diseases that do not travel.\" School scenarios, classroom judgment tasks, and practice of the seven-step handwashing technique connected health knowledge with basic protection and seeking help.",
        whatWeDidLabel: "Our Response",
        whatChanged:
          "The activity brought age-appropriate health education into a rural classroom. Children had opportunities to assess everyday situations, practice hygiene skills, and learn where to seek help, connecting learning with school and family life.",
        whatChangedLabel: "Impact",
        resourcesNote:
          "Health education slides · Scenario discussion cards · Handwashing demonstration materials · Teaching organization instructions",
        resourcesHint:
          "For rural teachers, volunteer teaching teams, and other educators to use. Health information should be updated according to current public health guidance.",
        resourcePdfs: [
          pdf("English", "18-health-guardians-english.pdf"),
          pdf("Chinese", "18-health-guardians-cn.pdf"),
        ],
        sdgs: [4, 3, 10],
        article: {
          title: "Bringing Practical Health Knowledge into Rural Classrooms",
          sections: [
            {
              blocks: [
                "During volunteer teaching from July 15 to 31, we delivered health education at Duji Town Central Primary School in Shangqiu, Henan. Stories, scenario discussions, and movement-based practice introduced disease prevention and help-seeking through familiar school and family situations.",
              ],
            },
            {
              heading: "01 Starting with Rural Children's Daily Lives",
              blocks: [
                "Teachers had emphasized matching content to learners' ages, knowledge, and experiences. We therefore situated questions in peer interactions, everyday hygiene, and feeling unwell so children could draw on their own experiences.",
                "\"Diseases that travel\" and \"diseases that do not travel\" opened the discussion before we introduced the terms communicable and noncommunicable diseases. The analogy established an initial understanding, followed by explanations that transmission and prevention differ between diseases.",
              ],
            },
            {
              heading: "02 Applying Health Knowledge to Everyday Situations",
              blocks: [
                "Topics such as chickenpox, hand, foot and mouth disease, and mumps prompted questions: whom should children tell if they feel unwell? How can they help a classmate who appears unwell? Which situations require further assessment by teachers, parents, or healthcare professionals?",
                "In the noncommunicable disease section, cancer-related topics helped address misconceptions about everyday contact and ways to understand and support people with illness. The lesson combined self-protection with care for others, avoiding the use of disease knowledge to ridicule, blame, or exclude.",
              ],
            },
            {
              heading: "03 Connecting Classroom and Home through Practice",
              blocks: [
                "Demonstration and practice of the seven-step handwashing technique allowed children to learn through observation, imitation, and action. Everyday scenarios prompted discussion of hygiene, diet, exercise, daily routines, and appropriate protection.",
                "We hoped children would leave with knowledge they could continue using: actions they could take to care for themselves, how to express discomfort or questions, and whom to ask for help. Sustaining these actions requires supportive conditions at home and school and cannot depend on children alone.",
              ],
            },
            {
              heading:
                "04 Addressing Equitable Learning Opportunities through Rural Education",
              blocks: [
                "The activity addressed SDG 4 through age-appropriate health education and practical skills. Volunteer teaching brought opportunities to encounter, discuss, and practice health knowledge into a rural classroom, connecting with SDG 3 through its health focus.",
                "It also addressed SDG 10 through geographic access to learning: health education resources should respond to children's needs across locations. One teaching visit cannot eliminate inequalities in educational or healthcare resources, but it can leave materials for future use.",
                "Slides, scenario cards, and handwashing materials support rural teachers and subsequent volunteer teams. Adapting activities to local conditions, updating content, and incorporating it into routine teaching could make the session a starting point for continued health learning.",
              ],
            },
          ],
        },
      },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Chapter assembly
 * -------------------------------------------------------------------------- */

export const sdg4Chapter: SdgChapter = {
  id: "sdg4",
  headingId: "sdg4-quality-education",
  index: "5.1",
  title: "SDG 4: Quality Education",
  intro: [
    "Differences in prior knowledge and access to scientific resources can limit opportunities to understand and participate in science. We chose SDG 4 to **make scientific learning more accessible** and to help learners **examine how technology relates to sustainable development**. We adapted explanations and participation formats to different ages, prior knowledge, and learning conditions, while introducing discussions of **resource use, ecological risks, and social responsibility**.",
  ],
  stakeholders: {
    lead: [
      "Throughout our educational activities, we wanted to understand how much participants learned and whether our content, explanations, and activity formats supported the learning process. We therefore sought feedback from different education stakeholders to examine activity design and outcomes from multiple perspectives. As the people most directly responsible for designing and delivering teaching, teachers bring extensive practical experience. We began by talking with them about learners' needs, appropriate content depth, and opportunities for participation, establishing an overall approach for designing and delivering subsequent activities.",
    ],
    profiles: sdg4Educators,
    extras: {
      transition: [
        "Advice from teachers, science communicators, and interactive design professionals helped us focus on learners' actual experiences: whether content suited their prior knowledge, whether explanations were understandable, and whether activities could run successfully under different conditions. We adjusted content progression, presentation, and instructions, and offered different starting points through the virtual laboratory, picture book, and Bio Memory Match. We also systematically documented materials and activity procedures to support use, adaptation, and further development by other iGEM teams.",
      ],
      resources: sdg4Resources,
      activitiesLead: [
        "Through dialogue and ongoing improvements, we brought stakeholder recommendations and educational resources into classrooms and public activities. We conducted **14 educational activities involving 11 schools**, with a **cumulative attendance of 4047**. These activities included school sessions, rural teaching, and public events. The following sections describe their audiences, teaching approaches, and resources, with supporting records presented in the Evidence section.",
      ],
      groups: sdg4Groups,
      closing: {
        title: "Making Science Explorable and Resources Shareable",
        paragraphs: [
          "Alongside in-person activities, we continued communicating about **SDGs, synthetic biology, and health** through Xiaohongshu and WeChat Official Accounts. Following science communicators' advice on information hierarchy, intuitive explanations, and scientific qualifications, we developed illustrated content that the public could read and share. We published **21 posts, receiving 10074 views**. We also produced **3 types of brochures and 1 bilingual Chinese-English practical handbook**, distributed **1386 brochures** and **103 physical Bio Memory Match sets**. These materials support reading, interaction, and reuse beyond the activities. We also plan to bring physical Bio Memory Match cards to the **iGEM Grand Jamboree** to exchange ideas about gameplay and educational design with other teams and explore further reuse. Online content and physical resources connect public learning, on-site participation, and sharing between teams. These distribution and usage records provide evidence for our response to **SDG 4** through accessible learning opportunities and reusable educational resources.",
        ],
      },
    },
  },
  consequences: {
    lead: [],
    shortTerm: {
      heading: "Short-Term Impacts",
      paragraphs: [
        "At this stage, CirCure's contribution to SDG 4 centers on accessible learning opportunities, teaching adaptations, and participants' immediate learning experiences. We conducted **14 educational activities involving 11 schools**, with a **cumulative attendance of 4047**. Stories, experiments, virtual tools, and public discussions offered different ways to encounter science, while sustainability-focused activities invited learners to examine resource inputs, ecological risks, and responsibility. Stakeholder and participant feedback helped us identify priorities for clearer explanations and more interactive learning.",
        "We collected **480 valid questionnaire responses** covering participants' immediate learning experiences, participation, difficulties, and further support needs. The microplate figures below present the response counts and percentages for each questionnaire item. Mean ratings for **self-reported gains in understanding, content clarity, adequacy of participation opportunities, and willingness to continue learning** were **8.2, 9.5, 8.4, and 8.3 out of 10**, respectively. Averaging these four means and multiplying by ten gives an **overall activity experience score of 86.0/100**. These ratings describe participants' immediate self-reported experiences; long-term knowledge retention and sustained skills require further assessment.",
      ],
    },
    featureKey: "sdg4-feedback",
    longTerm: {
      heading: "Long-Term Impacts",
      intro: "",
    },
    dimensions: [
      {
        id: "social",
        title: "Social Impacts",
        benefit:
          "If resources remain in use and connect with subsequent teaching, courses at different levels, experimental experiences, and public discussions could support scientific understanding, evidence-based judgment, and independent exploration. Adapting resources to local languages, curricula, and equipment could also expand learning opportunities for groups with limited resources, further supporting SDG 4 and SDG 10.",
        risk: "Equipment, language, teacher support, and experimental facilities may still restrict participation and distribute new opportunities unevenly. Stories, analogies, and games without accurate explanations could also create misconceptions and undermine learning quality.",
        boundary:
          "Activity records and questionnaires document participation and immediate self-reported experiences. They do not establish long-term knowledge retention, improved abilities, or reduced educational disparities. These outcomes require continued follow-up.",
      },
      {
        id: "economic",
        title: "Economic Impacts",
        benefit:
          "Continued sharing and reuse of virtual experiments, educational games, picture books, slides, and activity guides could reduce repeated development and lesson preparation by educators and other teams. Printable materials, digital tools, and modular lessons also offer additional options for affordable learning under different resource conditions.",
        risk: "Resource development, printing, equipment, maintenance, and teaching still require investment. Use across regions also requires language and curriculum adaptation. Overlooking these conditions could overstate the cost advantages of sharing and leave less-resourced schools unable to use the materials.",
        boundary:
          "We currently lack systematic comparisons of development and maintenance costs, preparation time, and actual reuse. We therefore do not present tool development and resource sharing as demonstrated cost savings.",
      },
      {
        id: "environmental",
        title: "Environmental Impacts",
        benefit:
          "Repeated use of educational tools and materials could reduce repeated printing and production. Appropriate virtual experiments could also reduce some reliance on physical reagents and single-use consumables in introductory teaching. Sustainability education may help learners incorporate resource responsibility into everyday choices, allowing SDG 4 to support SDG 12.",
        risk: "Physical materials, printing, digital devices, and tool operation still require materials and energy. Environmental performance depends on useful life, reuse frequency, and updating requirements. Digitalization or reduced use of one type of consumable does not necessarily lower the overall environmental burden.",
        boundary:
          "We currently lack comparative data on resource lifespans, material use, and energy consumption, as well as long-term behavioral follow-up. We therefore discuss the potential value of reuse and environmental responsibility education without claiming environmental benefits already achieved.",
      },
    ],
  },
  alignment: {
    lead: [
      "Building on potential relationships identified through SST-QN, we examined CirCure's **educational design, stakeholder engagement, teaching activities, and resource development** to determine whether these relationships have emerged within the project and how far current evidence supports them. We distinguish learning and participation opportunities already created from knowledge, behavioral, and social impacts that require further evaluation.",
    ],
    findings: [
      "**Partnerships and technological development supported educational design and resource development.** We classify these relationships as **Positive Core Interactions** at the level of implemented project actions. Educators and science communicators informed content progression, explanations, and instructions, while APiC participants' requests prompted the online version of Bio Memory Match. CirCure's research content also provided material for courses, experiments, design tasks, and interactive tools. These records show how collaboration and technical work shaped the educational opportunities we delivered.",
      "**Educational activities supported access to health information and responded to specific barriers to science learning.** We classify these relationships with SDGs 3 and 10 as **Positive Core Interactions**, with current evidence limited to information access and learning opportunities. Health lessons, hygiene practice, and physician consultations provided opportunities to obtain reliable information. Rural teaching and the use of the virtual laboratory offered ways to encounter science where laboratory access was limited. These records document delivery and responses to identified needs; they do not establish improved health outcomes or reduced structural educational disparities.",
      "**Possible contributions to employment-related skills and gender equality remain Exploratory.** Experimental, design, and collaborative tasks introduced learners to relevant practices, while evidence of sustained capability gains, employment, or economic benefits remains to be established. The picture book and interactive stories address body acceptance, expressing needs, and family support, offering starting points for discussion of women's autonomy. Stronger conclusions require subsequent usage records and outcome evaluation.",
      "Overall, CirCure's currently supported contributions under SDG 4 center on educational design improvements, access to science and health information, responses to specific learning barriers, and teaching about resource use and responsibility. Long-term understanding, sustained behavior change, employment-related capabilities, and gender equality require further learning assessments, resource-use records, and continued follow-up.",
    ],
    table: {
      headers: ["Relationship", "Status", "Interaction", "Why"],
      rows: [
        [
          "SDG 17 → SDG 4",
          "Core (C)",
          "Positive",
          "Feedback from teachers, science communicators, and interactive design professionals changed content progression, scientific explanations, interaction formats, and resource instructions. Collaboration with the student environmental protection association supported planting education, while APiC participants' suggestions prompted the online version of Bio Memory Match. Collaboration has become a practical mechanism for improving design, delivering activities, and expanding access.",
        ],
        [
          "SDG 9 → SDG 4",
          "Core (C)",
          "Positive",
          "CirCure translated circRNA, vaccines, and synthetic biology into age-appropriate courses, experimental tasks, virtual laboratories, and interactive resources. \"Design Your Dream circRNA,\" the DBTL introduction, and SynBio Classroom turned technical content into opportunities to ask questions, perform experiments, analyze evidence, and practice design. Technological innovation has provided concrete educational content and practical opportunities.",
        ],
        [
          "SDG 4 → SDG 3",
          "Core (C)",
          "Positive",
          "Body Guardians, Health Guardians, and Pink Care brought immunity, disease prevention, hygiene skills, and breast health into classrooms and public events. Scenario discussions, handwashing practice, and physician consultations provided access to reliable information and professional guidance. The picture book and interactive stories also created resources for body awareness and health learning.",
        ],
        [
          "SDG 4 → SDG 10",
          "Core (C)",
          "Positive",
          "Rural activities in Luzhou, Sichuan, and Shangqiu, Henan, created additional science and health learning opportunities for local children. The virtual laboratory was used in Luzhou volunteer teaching, providing supplementary experiences where access to real laboratories was limited. Content at different levels, varied participation formats, and physical and online resources also addressed differences in prior knowledge and equipment.",
        ],
        [
          "SDG 4 → SDG 8",
          "Exploratory (E)",
          "Positive",
          "Experiments, result analysis, research decisions, and team-role introductions offered exposure to scientific skills and multidisciplinary collaboration. Teaching materials and instructions could also reduce repeated preparation by educators. However, sustained skills assessments, reuse cost data, and subsequent employment data are unavailable. Current evidence supports potential capability development and economic value, rather than demonstrated employment or income effects.",
        ],
        [
          "SDG 4 → SDG 5",
          "Exploratory (E)",
          "Positive",
          "Seeds in Our Hearts and interactive stories provide learning content on puberty, body image concerns, family support, and hesitation about seeking care. They offer starting points for understanding the body, expressing needs, and seeking help.",
        ],
        [
          "SDG 4 → SDG 13",
          "Excluded (0)",
          "None",
          "Some lessons address carbon fixation, green energy, and environmental responsibility, but encountering these topics does not establish climate action. Planting, container reuse, and digital educational resources also lack net emissions and sustained behavioral data. We therefore do not currently establish a direct interaction from SDG 4 to SDG 13.",
        ],
      ],
    },
  },
  legacy: {
    intro: [
      "Across **14 educational activities**, we developed **21 teaching and learning resources**, including teaching slide decks, science communication handbooks, a science picture book, a virtual laboratory containing nine experiments, and interactive educational games. Alongside the materials, we documented activity structures, discussion tasks, operating instructions, and delivery conditions to support adaptation by educators and other iGEM teams. The virtual laboratory was used in volunteer teaching in Luzhou, providing an example of classroom use. Together, these resources preserve lesson content and practical guidance beyond the original activities and provide a basis for continued use and adaptation.",
    ],
    tools: [],
    table: {
      headers: ["Resource", "What it does", "Use it"],
      rows: [
        [
          "Body Guardians - Teaching PPT",
          "Introduces immune recognition and memory to fourth-grade pupils through a \"body city,\" immune-cell characters, and two rounds of search games. Uses observation, comparison, and discussion to support introductory learning, while explaining the analogy's limits and vaccine protection.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/05-body-guardians-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/05-body-guardians-cn.pdf)",
        ],
        [
          "Imagining the Future through Biology - Teaching PPT",
          "Builds on familiar DNA and RNA knowledge. Uses a LEGO analogy and a \"Design Your Dream circRNA\" task to connect biological components, design ideas, and real needs, while distinguishing aspirations from validated technology.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/06-imagining-the-future-through-biology-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/06-imagining-the-future-through-biology-cn.pdf)",
        ],
        [
          "Exploring Student Research Projects - Teaching PPT",
          "Introduces student research through iGEM's mission, divisions, preparation timeline, topic selection, and team responsibilities. Provides an overview of collaboration, participation roles, and opportunities for further learning.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/07-exploring-student-research-projects-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/07-exploring-student-research-projects-cn.pdf)",
        ],
        [
          "More Than Biology - Teaching PPT",
          "Uses Wet Lab, Dry Lab, Human Practices, Art & Design, and Wiki roles to show how experiments, computation, design, communication, and writing contribute to research, connecting diverse interests with opportunities to participate.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/09-more-than-biology-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/09-more-than-biology-cn.pdf)",
        ],
        [
          "SynBio Across Borders - Teaching PPT",
          "Introduces synthetic biology and iGEM's principles of collaboration and knowledge sharing in English. Uses health research examples to support discussion across languages and curricula.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/10-synbio-across-borders-en.pdf)",
        ],
        [
          "Air to Bread - Teaching PPT",
          "Begins with the question of how bread could be made without growing wheat. Uses analogies for cells, DNA, and metabolic pathways to introduce carbon fixation, biomanufacturing, and future food, alongside the evidence and conditions needed for application.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/air-to-bread-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/air-to-bread-cn.pdf)",
        ],
        [
          "SynBio Classroom - Teaching PPT",
          "Organizes learning for incoming Grade 11 students through Know → Experiment → Analyze → Decide → Design, connecting biological concepts, experiments, analysis, research decisions, and plasmid component design.",
          "[English - Opening](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/12-01-synbio-classroom-opening-ceremony.pdf) / [PCR](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/12-02-synbio-classroom-pcr-en.pdf) / [DNA extraction](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/12-03-synbio-classroom-dna-extraction-identification-en.pdf) / [Life Science Monopoly](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/12-04-synbio-classroom-life-science-monopoly-en.pdf) / [Plasmids and parts](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/12-05-synbio-classroom-plasmids-and-biological-parts-en.pdf)",
        ],
        [
          "Life Science Adventure - Teaching PPT",
          "Uses a cartoon bacterium, everyday examples, a DNA instruction-manual analogy, and a bacterial-superpower task to introduce microorganisms and biological information to young rural learners and encourage creative ideas.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/16-life-science-adventure-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/16-life-science-adventure-cn.pdf)",
        ],
        [
          "Little Scientist - Teaching PPT",
          "Connects colony observation, equipment recognition, staining simulation, and microscopy through a bacterial ID-card task. Supports young rural learners in describing characteristics and using observations to inform conclusions.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/17-little-scientist-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/17-little-scientist-cn.pdf)",
        ],
        [
          "Health Guardians - Teaching PPT",
          "Introduces communicable and noncommunicable diseases through school and family scenarios, hygiene discussions, and handwashing practice. Connects scientific knowledge with personal protection, care for others, and help-seeking.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/18-health-guardians-english.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/18-health-guardians-cn.pdf)",
        ],
        [
          "Pink Care - Apricot Blossom Festival Science Handbook",
          "Compiles breast health information from Pink Care for continued reading and sharing after the event, as well as adaptation for similar public education activities.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/14-apricot-blossoms-and-pink-care-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/14-apricot-blossoms-and-pink-care-cn.pdf)",
        ],
        [
          "Love, Music & Us - Lawn Music Festival Science Handbook",
          "Explains the science connected with rhythm challenges, bookmark creation, and shared melodies. Supports further learning after music and creative activities and provides material that other teams can adapt.",
          "English / Chinese",
        ],
        [
          "Seeds in Our Hearts - Science Picture Book",
          "Combines a dream journey shared by a girl and a lamb with illustrations and scientific explanations to introduce puberty and body acceptance and support parent-child discussion.",
          "[English](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/a-seed-planted-in-the-heart-en.pdf) / [Chinese](https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/a-seed-planted-in-the-heart-cn.pdf)",
        ],
        [
          "Virtual Laboratory",
          "Translates the procedures of 9 experiments into interactive digital resources for equipment recognition, simulated operations, and observation. Has been used in volunteer teaching to supplement limited access to real laboratories.",
          "[Explore Virtual Laboratory](/games)",
        ],
        [
          "Bio Memory Match - Educational Game",
          "Offers online and physical card versions, combining matching activities with a bilingual concept guide to support interactive learning across different equipment and activity settings.",
          "[Play Online](/games)",
        ],
        [
          "Breast Guardian - Breast Health Story Game",
          "Uses stories and choices across childhood, young adulthood, middle adulthood, and older age to connect breast health knowledge with experiences at different life stages.",
          "[Play Online](/games)",
        ],
      ],
    },
  },
  evidence: {
    intro: [
      "We conducted **14 educational activities involving 11 schools**, with a **cumulative attendance of 4047**. The activities involved primary and secondary school students, university students, learners in rural communities, and the wider public. We also collected **480 valid questionnaire responses**, providing feedback on self-reported understanding, content clarity, participation opportunities, and willingness to continue learning. The responses helped us assess immediate activity experiences and identify priorities for further teaching support.",
    ],
    stats: [],
    measurableIntro: [
      "The educational outputs and immediate learning experience indicators we can currently quantify and track include:",
    ],
    measurable: [
      {
        title: "3 Stakeholder's feedback informing educational design",
        figure: "sdg4Evidence0",
      },
      {
        text: "We organised **14 major educational activities involving 11 schools**, with a total attendance of **4047**. These activities reached children, middle and high school students, university students, learners in rural and resource-limited communities, and the wider public. We collected **480 valid questionnaire responses**, assessing immediate learning experiences across four dimensions. These results provided a structured understanding of participants' learning experiences and informed improvements to content depth, activity pacing, and practical instructions.",
        document: {
          label: "Education Feedback Questionnaire - English",
          fileName: "education-feedback-questionnaire-english.pdf",
          url: "https://static.igem.wiki/teams/6056/wiki/files/docs/sus-sdg4/education-feedback-questionnaire-english.pdf",
        },
        figure: "sdg4Evidence1",
      },
      {
        text: "Among the difficulties reported, **difficult content or unfamiliar terminology** was the most frequently identified barrier. **More experiments or games** were the most requested form of follow-up learning support. These findings helped us identify priorities for clearer explanations and further interactive learning opportunities.",
      },
      {
        text: "We developed **21 reusable teaching and learning resources. **These resources provide teachers, learners, and other iGEM teams with lesson content, interactive tasks, and guidance they can continue using and adapting beyond the original activities.",
        table: {
          headers: ["Resource", "Types", "Number"],
          rows: [
            ["Teaching slide decks", "Teaching Slide Decks", "15"],
            [
              "Science communication booklets",
              "Science Communication Booklets",
              "2",
            ],
            [
              "Illustrated science storybook",
              "Illustrated Science Storybook",
              "1",
            ],
            [
              "Virtual laboratory containing 9 experiments",
              "Virtual Laboratory with 9 Experiments",
              "1",
            ],
            [
              "Interactive educational games",
              "Interactive Educational Games",
              "2",
            ],
          ],
        },
      },
      {
        text: "As of **13 October 2026**, our WeChat Official Account had published **23 items**, with **10074 displayed reads in total**. These publications provide further opportunities to access science content, learn about our educational activities, and share materials beyond in-person events.",
      },
      {
        text: "We produced **an SDG 4-shaped word cloud** highlighting **equity, inclusion, participation, resource sharing, and continued learning**. It provides visual evidence of CirCure's educational priorities, documenting the principles guiding our activity design and the development of reusable learning resources.",
        figure: "sdg4Evidence2",
      },
    ],
    measurableClosing: [
      "Together, these records document the scale and diversity of CirCure's contribution to SDG 4. Our activities create opportunities for learners of different ages and settings to engage with science. Questionnaire feedback informed continued improvements to educational design, while our reusable resources, WeChat content, and word cloud support learning, sharing, and communication of our educational priorities.",
    ],
    significant: [
      "We adapted educational content to learners' ages, prior knowledge, and learning conditions, using stories, discussions, experiments, and design tasks to provide different ways to participate. Teachers' advice shaped content progression and classroom interaction, science communication feedback informed clearer explanations, and APiC participants' requests directly prompted the online version of Bio Memory Match. These examples show how stakeholder and participant input changed the resources and activities we delivered.",
      "Our **14 educational activities involving 11 schools** recorded a **cumulative attendance of 4,047**. Within this work, \"Air to Bread\" and \"The Pen of Creation\" gave learners opportunities to consider resource inputs, ecological risks, uncertainty, and responsibility alongside scientific possibilities, supporting our connection to Target 4.7. The **480 valid questionnaire responses** documented participants' immediate experiences across four dimensions and helped identify priorities for clearer explanations and further interactive learning.",
      "We also made our **21 teaching and learning resources** available for continued use. These include teaching slide decks, interactive educational games, a science picture book, science communication handbooks, and a virtual laboratory containing nine experiments. Accompanying instructions and activity materials give educators and other iGEM teams a basis for reusing and adapting the content to their own settings.",
      "Together, these efforts document CirCure's contribution to SDG 4 through teaching adapted to learner needs, learning about sustainable development, feedback-informed resource development, and materials for continued use. Activity records and questionnaire results support conclusions about delivery and immediate experiences, while sustained learning, resource adoption, and improvements in educational equity require further evaluation.",
    ],
  },
};
