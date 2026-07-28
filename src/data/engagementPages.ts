import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

export const entrepreneurshipPage: WikiPageContent = {
  route: "/entrepreneurship",
  category: "engagement",
  chapter: "Engagement / 01 of 05",
  eyebrow: "Entrepreneurship · Validate the path",
  title: "Entrepreneurship",
  lede: "Test the path from need to adoption.",
  boundary:
    "No incorporated venture, priced product, regulatory decision, or validated market dataset was supplied. The page is a structured business-case working draft.",
  visual: "venture-path",
  visualLabel: "Need-to-implementation assumption path",
  visualSteps: ["need", "user", "minimum proof", "adoption"],
  facts: [
    {
      label: "Problem",
      value: "A costly unmet need is defined by affected users.",
    },
    {
      label: "Alternative",
      value: "Current workflows and competing approaches are explicit.",
    },
    {
      label: "MVP",
      value: "The smallest testable value proposition is named.",
    },
    {
      label: "Risk",
      value: "Science, regulation, access, and adoption remain coupled.",
    },
  ],
  sections: [
    {
      id: "venture-discovery",
      index: "01",
      kicker: "Problem discovery",
      title: "Do not confuse a disease burden with a customer need.",
      summary:
        "The business case should identify who experiences the problem, who decides, who pays, who operates the workflow, and who bears risk.",
      layout: "matrix",
      items: [
        {
          label: "Affected",
          title: "Patients and caregivers",
          body: "Explore outcomes, burden, uncertainty, access, privacy, and what a future intervention must never promise prematurely.",
          status: "planned",
        },
        {
          label: "Operational",
          title: "Clinical and laboratory users",
          body: "Map labor, training, turnaround, storage, equipment, reliability, and fit with existing care or research pathways.",
          status: "planned",
        },
        {
          label: "System",
          title: "Payers, regulators, manufacturers",
          body: "Test reimbursement, evidence thresholds, quality, scale, logistics, procurement, and institutional adoption.",
          status: "open",
        },
      ],
    },
    {
      id: "venture-hypotheses",
      index: "02",
      kicker: "Assumption ledger",
      title: "Test the riskiest assumption first.",
      summary:
        "Each hypothesis needs a method, evidence threshold, result, decision, and next test.",
      layout: "ledger",
      items: [
        {
          label: "V–01",
          title: "The selected use case matters",
          body: "Compare the proposed benefit with current alternatives and confirm the burden with relevant stakeholders.",
          status: "planned",
        },
        {
          label: "V–02",
          title: "The workflow can absorb the solution",
          body: "Test training, labor, timing, infrastructure, storage, quality, and failure recovery assumptions.",
          status: "planned",
        },
        {
          label: "V–03",
          title: "A minimum viable product can be defined",
          body: "Name the smallest artifact that tests value without implying therapeutic readiness.",
          status: "open",
        },
        {
          label: "V–04",
          title: "Access is compatible with the model",
          body: "Estimate cost drivers, distribution, underserved users, and tradeoffs before optimizing a revenue story.",
          status: "open",
        },
      ],
    },
    {
      id: "venture-roadmap",
      index: "03",
      kicker: "Responsible roadmap",
      title: "Separate the next year from the final vision.",
      summary:
        "The roadmap should show scientific, regulatory, manufacturing, market, and governance dependencies with explicit go/no-go gates.",
      layout: "timeline",
      items: [
        {
          label: "Now · student project",
          title: "Validate the evidence framework.",
          body: "Deliver transparent candidate, construct, model, experimental, safety, and stakeholder records.",
          status: "recorded",
        },
        {
          label: "Next · research translation",
          title: "Validate feasibility and user requirements.",
          body: "Repeat key evidence, engage relevant experts, refine workflow, and establish quality and regulatory assumptions.",
          status: "planned",
        },
        {
          label: "Later · conditional pathway",
          title: "Advance only after independent evidence.",
          body: "Preclinical, manufacturing, safety, access, and clinical pathways remain outside the present project claim.",
          status: "boundary",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "Stakeholder decisions" },
    { path: "/sustainability", label: "Access and impact" },
    { path: "/safety-and-security", label: "Responsible limits" },
  ],
  next: {
    path: "/human-practices",
    label: "Human Practices",
    title: "Who changed the project—and how?",
  },
};

export const humanPracticesPage: WikiPageContent = {
  route: "/human-practices",
  category: "engagement",
  chapter: "Engagement / 02 of 05",
  eyebrow: "Integrated Human Practices · Decision trace",
  title: "Human Practices",
  lede: "Outside voices return as visible design decisions.",
  boundary:
    "Dates, stakeholder identities, quotations, images, and evidence codes in the original prototype are placeholders. Only consent-cleared, auditable records may replace them.",
  visual: "human-thread",
  visualLabel: "Stakeholder signal to design decision thread",
  visualSteps: ["ask", "listen", "change", "return"],
  facts: [
    {
      label: "Purpose",
      value: "Test whether the project is responsible and worthwhile.",
    },
    {
      label: "Input",
      value: "Relevant, affected, dissenting, and missing perspectives.",
    },
    {
      label: "Change",
      value: "A visible construct, assay, model, claim, or workflow revision.",
    },
    { label: "Return", value: "The changed artifact goes back for critique." },
  ],
  sections: [
    {
      id: "hp-changes",
      index: "01",
      kicker: "Judge the changes",
      title: "Count decisions, not meetings.",
      summary:
        "The strongest record shows an original assumption, stakeholder signal, team decision, changed artifact, primary evidence, and return step.",
      layout: "steps",
      items: [
        {
          label: "Purpose",
          title: "A single-target story became a portfolio question.",
          body: "Clinical and biological critique should resolve to a versioned change in project framing and candidate strategy.",
          status: "planned",
        },
        {
          label: "Design",
          title: "Risk notes became hard boundaries.",
          body: "Delivery, safety, off-target, and feasibility concerns should create acceptance rules and explicit no-go conditions.",
          status: "planned",
        },
        {
          label: "Execution",
          title: "Generic readouts became disease-relevant tests.",
          body: "Mentor and stakeholder questions should map to assay purpose, controls, interpretation, and evidence dependencies.",
          status: "planned",
        },
        {
          label: "Implementation",
          title: "An ideal user became a real workflow.",
          body: "Labor, training, storage, access, governance, and adoption constraints should change the implementation chapter.",
          status: "open",
        },
      ],
    },
    {
      id: "hp-timeline",
      index: "02",
      kicker: "Evidence timeline",
      title: "Every conversation must move the work—or explain why it did not.",
      summary:
        "The final timeline should include accepted, rejected, deferred, conflicting, and unresolved input without turning stakeholder stories into decoration.",
      layout: "timeline",
      items: [
        {
          label: "HP–01 · replace date",
          title: "Clinical boundary review",
          body: "Record the original claim, the reviewer’s consent-safe concern, the decision, the changed public language or validation gate, and return feedback.",
          status: "planned",
        },
        {
          label: "HP–02 · replace date",
          title: "Mechanism and delivery review",
          body: "Record which attractive route was narrowed or archived, the evidence behind the decision, and the technical artifact changed.",
          status: "planned",
        },
        {
          label: "HP–03 · replace date",
          title: "Community explanation and questions",
          body: "Turn repeated public questions into communication requirements, new interview targets, and revisions to uncertainty or risk framing.",
          status: "planned",
        },
        {
          label: "HP–04 · replace date",
          title: "Return loop",
          body: "Bring the revised design back to earlier contributors and record agreement, disagreement, new concerns, and remaining gaps separately.",
          status: "open",
        },
      ],
    },
    {
      id: "hp-method",
      index: "03",
      kicker: "Method, ethics, and limits",
      title: "A credible loop explains how input was handled.",
      summary:
        "Selection, consent, analysis, conflict, bias, publication, and missing voices are part of the method, not an appendix added after the story.",
      layout: "matrix",
      items: [
        {
          label: "Select",
          title: "Map power and missing voices.",
          body: "Choose for relevance, affectedness, disagreement, and perspective diversity—not prestige—and state who remains absent.",
          status: "recorded",
        },
        {
          label: "Engage",
          title: "Ask for challenge, not approval.",
          body: "State the decision under review, select a consent tier, invite no-go conditions, and separate lived experience from technical authority.",
          status: "recorded",
        },
        {
          label: "Decide and return",
          title: "Keep conflict visible.",
          body: "Document accepted and rejected advice, the decision rule, minority views, changed artifact, return review, and current limitation.",
          status: "recorded",
        },
      ],
      note: {
        label: "Publication gate",
        body: "Every public quotation, image, role, date, number, and evidence code must be accurate, consent-cleared, and traceable. Restricted records remain restricted.",
      },
    },
  ],
  links: [
    { path: "/description", label: "Project change" },
    { path: "/engineering", label: "Design iterations" },
    { path: "/education", label: "Public dialogue" },
  ],
  next: {
    path: "/education",
    label: "Education",
    title: "How did dialogue change what everyone learned?",
  },
};

export const educationPage: WikiPageContent = {
  route: "/education",
  category: "engagement",
  chapter: "Engagement / 03 of 05",
  eyebrow: "Education · Two-way learning",
  title: "Education",
  lede: "Explain, listen, and let dialogue change the work.",
  boundary:
    "No completed activity dataset or participant evaluation was supplied. Example activity structures must be replaced with real audiences, dates, materials, consent, feedback, and outcomes.",
  visual: "education-dialogue",
  visualLabel: "Two-way educational dialogue",
  visualSteps: [
    "What is the promise?",
    "Where is the uncertainty?",
    "Who carries risk?",
    "What should change?",
  ],
  facts: [
    {
      label: "Audience",
      value: "Needs and prior knowledge shape the activity.",
    },
    {
      label: "Objective",
      value: "Learning goals are observable and proportionate.",
    },
    {
      label: "Dialogue",
      value: "Participants question and reshape the material.",
    },
    {
      label: "Evaluate",
      value: "Evidence changes the next educational iteration.",
    },
  ],
  sections: [
    {
      id: "education-design",
      index: "01",
      kicker: "Activity design",
      title: "Start from the audience, not the slide deck.",
      summary:
        "The final record should explain who the activity serves, what barriers exist, and why the selected format supports two-way learning.",
      layout: "steps",
      items: [
        {
          label: "Discover",
          title: "Understand the audience.",
          body: "Record age or role, prior knowledge, language, access needs, motivation, concerns, setting, and safeguarding requirements.",
          status: "planned",
        },
        {
          label: "Co-design",
          title: "Build with relevant partners.",
          body: "Review objectives, examples, language, format, timing, and accessibility with educators or community collaborators.",
          status: "planned",
        },
        {
          label: "Facilitate",
          title: "Invite questions and disagreement.",
          body: "Use prompts, scenarios, hands-on materials, and pauses that let participants surface values and uncertainty.",
          status: "planned",
        },
        {
          label: "Revise",
          title: "Let feedback change the material.",
          body: "Document misconceptions, recurring questions, accessibility issues, and the next version of the activity.",
          status: "open",
        },
      ],
    },
    {
      id: "education-activities",
      index: "02",
      kicker: "Working activity set",
      title: "Different audiences need different learning forms.",
      summary:
        "Activities should share a scientific core while changing language, pace, interaction, and evidence for the people in the room.",
      layout: "matrix",
      items: [
        {
          label: "Workshop",
          title: "Recognition and uncertainty",
          body: "A participatory map of biomarkers, TNBC heterogeneity, candidate evidence, and the difference between a hypothesis and a proven therapy.",
          status: "planned",
        },
        {
          label: "Classroom",
          title: "Build the evidence chain",
          body: "A card or physical model activity where learners connect construct, controls, readouts, limitations, and next decisions.",
          status: "planned",
        },
        {
          label: "Public resource",
          title: "Ask better questions",
          body: "An accessible guide to interpreting claims, sources, risk, uncertainty, and responsible synthetic biology communication.",
          status: "open",
        },
      ],
    },
    {
      id: "education-evaluation",
      index: "03",
      kicker: "Evaluation",
      title: "Measure learning without turning people into metrics.",
      summary:
        "Use proportionate quantitative and qualitative evidence, preserve dissent, and state what the activity cannot demonstrate.",
      layout: "ledger",
      items: [
        {
          label: "Before",
          title: "Needs and baseline",
          body: "Questions, concept map, confidence, expectations, or short interviews establish what the audience already knows and values.",
          status: "planned",
        },
        {
          label: "During",
          title: "Dialogue evidence",
          body: "Anonymous questions, observations, recurring themes, and participant-created artifacts reveal engagement and friction.",
          status: "planned",
        },
        {
          label: "After",
          title: "Learning and team reflection",
          body: "Assess changed explanations or reasoning, remaining confusion, participant feedback, team learning, and the next iteration.",
          status: "open",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "How feedback changed CirCure" },
    { path: "/inclusivity", label: "Accessible participation" },
    { path: "/contribution", label: "Reusable materials" },
  ],
  next: {
    path: "/inclusivity",
    label: "Inclusivity",
    title: "Who can participate—and who is still missing?",
  },
};

export const inclusivityPage: WikiPageContent = {
  route: "/inclusivity",
  category: "engagement",
  chapter: "Engagement / 04 of 05",
  eyebrow: "Inclusivity · Access and representation",
  title: "Inclusivity",
  lede: "Access, voice, and representation belong inside the design.",
  boundary:
    "The page defines an inclusion audit. It must not claim representation of a community from a small number of participants or describe accessibility measures that were only planned.",
  visual: "inclusion-network",
  visualLabel: "Access, voice, and representation network",
  visualSteps: ["language", "format", "voice", "privacy"],
  facts: [
    {
      label: "Access",
      value: "Language, format, place, cost, time, and technology.",
    },
    {
      label: "Voice",
      value: "Affected people can influence a relevant decision.",
    },
    {
      label: "Safety",
      value: "Consent and privacy match vulnerability and use.",
    },
    {
      label: "Limit",
      value: "Missing voices restrict what the team can conclude.",
    },
  ],
  sections: [
    {
      id: "inclusion-barriers",
      index: "01",
      kicker: "Barrier map",
      title: "Name the default that excludes people.",
      summary:
        "The audit begins with a concrete activity, tool, meeting, publication, or decision and asks who cannot participate on equal terms.",
      layout: "matrix",
      items: [
        {
          label: "Communication",
          title: "Language and scientific literacy",
          body: "Translation, jargon, reading level, visual explanation, captioning, alt text, and non-text alternatives.",
          status: "planned",
        },
        {
          label: "Participation",
          title: "Place, time, cost, technology",
          body: "Travel, schedule, connectivity, device, caregiving, compensation, venue, sensory, and mobility constraints.",
          status: "planned",
        },
        {
          label: "Representation",
          title: "Power and privacy",
          body: "Who sets the agenda, who is asked to disclose, who can disagree safely, and whose perspective one participant cannot represent.",
          status: "open",
        },
      ],
    },
    {
      id: "inclusion-actions",
      index: "02",
      kicker: "Action record",
      title: "Match each measure to a documented barrier.",
      summary:
        "Accessibility is an iterative design requirement, not a list of universal accommodations copied into every activity.",
      layout: "steps",
      items: [
        {
          label: "Find",
          title: "Ask before choosing the format.",
          body: "Use partner review, participant preference, accessibility checks, and missing-voice analysis to identify barriers.",
          status: "planned",
        },
        {
          label: "Change",
          title: "Modify the artifact or process.",
          body: "Adapt language, timing, venue, interface, media, consent, facilitation, data collection, or decision authority.",
          status: "planned",
        },
        {
          label: "Check",
          title: "Evaluate actual access.",
          body: "Record who participated, what still failed, qualitative feedback, unintended burden, and whether the measure changed engagement.",
          status: "open",
        },
        {
          label: "Share",
          title: "Publish reusable accessibility notes.",
          body: "Release editable materials, alt-text and caption practices, translation notes, and context-specific limitations.",
          status: "planned",
        },
      ],
    },
    {
      id: "inclusion-consent",
      index: "03",
      kicker: "Consent and evidence tiers",
      title: "Visibility is not always inclusion.",
      summary:
        "People can influence the project without having their identity, image, health context, or raw notes published.",
      layout: "ledger",
      items: [
        {
          label: "Public",
          title: "Approved attribution",
          body: "Name, role, quotation, image, and intended use are explicitly approved.",
          status: "recorded",
        },
        {
          label: "Role",
          title: "Limited attribution",
          body: "Approved role and summary or quotation are public; identity and full notes remain internal.",
          status: "recorded",
        },
        {
          label: "Anonymized",
          title: "Influence without identity",
          body: "Only a non-identifying influence summary is public; identifiable raw notes remain restricted.",
          status: "recorded",
        },
        {
          label: "Restricted",
          title: "No public content",
          body: "The record supports internal learning only and is protected according to the agreed access rule.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "Consent and stakeholder method" },
    { path: "/education", label: "Accessible education" },
    { path: "/sustainability", label: "Equitable impact" },
  ],
  next: {
    path: "/sustainability",
    label: "Sustainability",
    title: "Which impacts persist beyond the project year?",
  },
};

export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 05 of 05",
  eyebrow: "Sustainability · Trace the tradeoffs",
  title: "Sustainability",
  lede: "Impact remains visible in every design decision.",
  boundary:
    "No lifecycle assessment, quantified impact dataset, or formal SDG stakeholder collaboration was supplied. The page therefore states a measurement and decision framework rather than a completed impact claim.",
  visual: "sustainability-radar",
  visualLabel: "Environmental, social, economic, and governance tradeoffs",
  visualSteps: ["environment", "access", "economy", "governance"],
  facts: [
    {
      label: "Target",
      value: "A specific SDG target, not only a goal number.",
    },
    {
      label: "Boundary",
      value: "Research, production, deployment, and end of life.",
    },
    {
      label: "Tradeoff",
      value: "Positive and negative effects remain visible.",
    },
    {
      label: "Measure",
      value: "Indicators change a design or implementation decision.",
    },
  ],
  sections: [
    {
      id: "sustainability-scope",
      index: "01",
      kicker: "Impact boundary",
      title: "Decide what system is being evaluated.",
      summary:
        "A meaningful assessment identifies stages, affected groups, resources, geography, time horizon, alternatives, and uncertainty.",
      layout: "steps",
      items: [
        {
          label: "Research",
          title: "Materials and laboratory practice",
          body: "Energy, water, plastics, reagents, cold chain, waste, repeat experiments, computing, and safer substitutions.",
          status: "planned",
        },
        {
          label: "Production",
          title: "Manufacturing and quality",
          body: "Inputs, yield, purification, quality control, scale, transport, storage, and likely failure or waste points.",
          status: "open",
        },
        {
          label: "Use",
          title: "Access and implementation",
          body: "Infrastructure, training, affordability, labor, distribution, privacy, unequal benefit, and exclusion.",
          status: "open",
        },
        {
          label: "After",
          title: "Long-term governance",
          body: "Monitoring, maintenance, data stewardship, unintended use, disposal, responsibility, and who can revise decisions.",
          status: "open",
        },
      ],
    },
    {
      id: "sustainability-sdgs",
      index: "02",
      kicker: "SDG trace",
      title: "Connect each goal to a decision and indicator.",
      summary:
        "The final page should cite the exact target, engage relevant stakeholders, and show how evaluation changed the project.",
      layout: "matrix",
      items: [
        {
          label: "SDG 3",
          title: "Health and well-being",
          body: "Potential relevance must be balanced with evidence quality, safety, appropriate communication, access, and health-system burden.",
          status: "planned",
        },
        {
          label: "SDG 9",
          title: "Responsible innovation infrastructure",
          body: "Open methods, reproducibility, local capacity, interoperable records, and realistic manufacturing or deployment needs.",
          status: "planned",
        },
        {
          label: "SDG 10 / 12",
          title: "Equity and responsible consumption",
          body: "Affordability, representation, material use, waste, procurement, alternatives, and burden shifting across communities.",
          status: "open",
        },
      ],
    },
    {
      id: "sustainability-indicators",
      index: "03",
      kicker: "Decision indicators",
      title: "Measure enough to change course.",
      summary:
        "Indicators should be proportionate to the project stage and used to compare options, not to decorate a final report.",
      layout: "ledger",
      items: [
        {
          label: "Material",
          title: "Resource and waste intensity",
          body: "Track high-impact materials, repetitions, disposal, substitutions, and uncertainty per relevant experimental output.",
          status: "planned",
        },
        {
          label: "Access",
          title: "Workflow and affordability barriers",
          body: "Track infrastructure, time, training, storage, digital access, and cost assumptions with affected stakeholders.",
          status: "planned",
        },
        {
          label: "Governance",
          title: "Responsibility and review",
          body: "Track consent, data access, monitoring, incident response, missing voices, and the owner of future decisions.",
          status: "open",
        },
      ],
      note: {
        label: "Tradeoff rule",
        body: "A positive health intention does not cancel environmental burden, unequal access, safety uncertainty, or governance risk. Competing impacts stay visible.",
      },
    },
  ],
  links: [
    { path: "/entrepreneurship", label: "Implementation model" },
    { path: "/inclusivity", label: "Equity and access" },
    { path: "/safety-and-security", label: "Risk governance" },
  ],
  next: {
    path: "/description",
    label: "Project Description",
    title: "Return to the ring with its constraints visible.",
  },
};
