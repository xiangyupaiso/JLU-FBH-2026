import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import clinicalImage from "../../../assets/wiki/hp-clinical-review-v2.png";
import communityImage from "../../../assets/wiki/hp-community-workshop-v2.png";
import labImage from "../../../assets/wiki/hp-lab-review-v2.png";
import advocatePortrait from "../../../assets/wiki/hp-portrait-advocate.png";
import clinicalPortrait from "../../../assets/wiki/hp-portrait-clinical.png";
import ethicsPortrait from "../../../assets/wiki/hp-portrait-ethics.png";
import labPortrait from "../../../assets/wiki/hp-portrait-lab.png";
import regulatoryPortrait from "../../../assets/wiki/hp-portrait-regulatory.png";
import regulatoryImage from "../../../assets/wiki/hp-regulatory-review-v2.png";
import whiteboardImage from "../../../assets/wiki/hp-whiteboard-review-v2.png";
import "../../../styles/hp-panels.css";

/**
 * Visual panels of the pre-revamp Human Practices record, ported verbatim.
 *
 * The Engagement reader now owns the hero, sidebar, section rhythm and closing
 * prompt (shared reader-route template), while the old page's own visual
 * vocabulary — stakeholder impact wall, semi-circle evidence timeline, quick
 * view, integration ledger, decision-proof ledger, method standard and the
 * evidence dossier — is rendered as the section "features" of that template.
 *
 * The old stylesheet is namespaced rather than rewritten: every rule is either
 * bare `.hp-*` or scoped under `.hp-local-page`, and `HpPanelScope` supplies
 * that class, so the ported CSS can only ever match inside these panels.
 * Panel copy, markup and class names are unchanged from the pre-revamp file.
 */

import { clamp } from "../../../utils";

type TimelineCardStyle = CSSProperties & {
  "--angle"?: string;
};

const impactRecords = [
  {
    image: clinicalImage,
    position: "center 42%",
    avatar: "HP",
    stakeholder: "Project framing",
    lens: "TNBC need and target strategy",
    badge: "major pivot",
    stat: "1→5",
    title: "A single-target story became a multi-epitope system.",
    quote: "TNBC heterogeneity makes one elegant target a fragile promise.",
    changeLabel: "After the interview",
    change:
      "Reframed CirCure around ranked epitope sets and traceable decision gates.",
    evidence: "Ideation memo + target matrix",
    target: "record-a01",
  },
  {
    image: clinicalPortrait,
    position: "center 18%",
    avatar: "CL",
    stakeholder: "Clinical specialist",
    lens: "Safety criteria",
    badge: "safety",
    stat: "12",
    title: "Risk notes became hard design boundaries.",
    quote: "Do not show promise without showing where the approach must stop.",
    changeLabel: "Project change",
    change:
      "Safety table now gates modeling outputs and experiment prioritization.",
    evidence: "Interview A01",
    target: "record-a01",
  },
  {
    image: labImage,
    position: "center 42%",
    avatar: "PI",
    stakeholder: "Mechanism expert",
    lens: "Mechanism feasibility",
    badge: "rejected",
    stat: "1",
    title: "A favorite mechanism was cut after feasibility review.",
    quote:
      "A clever mechanism is not responsible if the risk cannot be bounded.",
    changeLabel: "Project change",
    change:
      "Stopped developing that mechanism instead of hiding it as future work.",
    evidence: "Pivot memo P02",
    target: "record-p02",
  },
  {
    image: labPortrait,
    position: "center 18%",
    avatar: "DV",
    stakeholder: "Delivery specialist",
    lens: "Payload and immunity",
    badge: "delivery",
    stat: "3",
    title: "Delivery stopped being a footnote.",
    quote:
      "Payload, expression time, and immune response are one design problem.",
    changeLabel: "Project change",
    change:
      "Compared platform assumptions before finalizing construct size and dosage logic.",
    evidence: "Call notes D03",
    target: "record-d03",
  },
  {
    image: communityImage,
    position: "center 48%",
    avatar: "PT",
    stakeholder: "Community partner",
    lens: "Communication clarity",
    badge: "language",
    stat: "64%",
    title: "The public explanation got shorter and more honest.",
    quote: "People should understand both the promise and the uncertainty.",
    changeLabel: "Project change",
    change: "Rewrote project language around benefit, uncertainty, and limits.",
    evidence: "Readability pass C04",
    target: "record-o08",
  },
  {
    image: ethicsPortrait,
    position: "center 18%",
    avatar: "ET",
    stakeholder: "Ethics reviewer",
    lens: "Consent and privacy",
    badge: "ethics",
    stat: "8",
    title: "Interview stories were anonymized by default.",
    quote: "A story can be powerful without making a person identifiable.",
    changeLabel: "Project change",
    change:
      "Separated public quotes from private evidence and consent records.",
    evidence: "Consent log E05",
    target: "record-e05",
  },
  {
    image: whiteboardImage,
    position: "center 42%",
    avatar: "LB",
    stakeholder: "Wet lab mentor",
    lens: "Validation path",
    badge: "assay",
    stat: "2×",
    title: "Generic readouts were replaced by disease-relevant tests.",
    quote: "A positive assay is only useful if it answers the right question.",
    changeLabel: "Project change",
    change: "Mapped each experiment to a specific HP-driven design question.",
    evidence: "Experiment map V06",
    target: "record-v06",
  },
  {
    image: regulatoryPortrait,
    position: "center 18%",
    avatar: "HC",
    stakeholder: "Healthcare worker",
    lens: "Workflow constraints",
    badge: "workflow",
    stat: "5",
    title: "Implementation moved from ideal user to real workflow.",
    quote: "If it adds work to an overloaded clinic, it will not be used.",
    changeLabel: "Project change",
    change:
      "Added workflow assumptions and access barriers to the implementation chapter.",
    evidence: "Workflow map I07",
    target: "record-i07",
  },
  {
    image: advocatePortrait,
    position: "center 18%",
    avatar: "CM",
    stakeholder: "Community workshop",
    lens: "Public dialogue",
    badge: "dialogue",
    stat: "420+",
    title: "Outreach became a feedback channel, not decoration.",
    quote: "The public questions told us which risks we had not explained.",
    changeLabel: "Project change",
    change:
      "Turned repeated questions into FAQ, risk framing, and next stakeholder targets.",
    evidence: "Theme map O08",
    target: "record-o08",
  },
  {
    image: regulatoryImage,
    position: "center 45%",
    avatar: "RV",
    stakeholder: "Stakeholder review",
    lens: "Final validation loop",
    badge: "verified",
    stat: "9/9",
    title: "The revised design was checked against the original concerns.",
    quote:
      "Closing the loop means returning to people with the changed design.",
    changeLabel: "Project change",
    change:
      "Reviewed final assumptions against earlier safety, access, and clarity notes.",
    evidence: "Closeout R09",
    target: "record-r09",
  },
];

const timelineRecords = [
  {
    id: "record-a01",
    date: "28 Jan 2026",
    role: "Clinical specialist",
    type: "ideation",
    portrait: clinicalPortrait,
    image: clinicalImage,
    position: "center 42%",
    title: "Initial proposal challenged by safety assumptions.",
    summary:
      "Clinical feedback showed that the first version had too many unbounded risk claims.",
    stakeholder:
      "Clinical specialist; focused on safety boundary, contraindication language, and what should not be claimed.",
    why: "We needed a clinical boundary before deciding which claims, safety gates, and validation priorities CirCure could responsibly carry.",
    heard:
      "The original proposal mixed early feasibility with clinical readiness. The stakeholder asked the team to state no-go conditions before presenting benefits.",
    change:
      "The first concept was formally replaced. We added a safety gate before construct selection and removed claims that implied near-term therapeutic use.",
    evidence:
      "Interview transcript A01, design-log pivot entry, and revised safety matrix.",
    followup:
      "Returned with a revised risk table and asked whether the no-go criteria were explicit enough for a public HP page.",
  },
  {
    id: "record-p02",
    date: "04 Feb 2026",
    role: "Mechanism advisor",
    type: "expert friction",
    portrait: labPortrait,
    image: labImage,
    position: "center 42%",
    title: "Mechanism review forced a narrower design.",
    summary:
      "A pathway advisor pushed the team away from an elegant but hard-to-bound mechanism.",
    stakeholder:
      "Mechanism advisor; focused on causal pathway strength, off-target uncertainty, and validation burden.",
    why: "We needed an external mechanism expert to challenge whether our preferred route was controllable, testable, and proportionate to an undergraduate project.",
    heard:
      "A clever mechanism is not enough if the team cannot bound the biological risk or explain why the pathway is controllable.",
    change:
      "The old mechanism was archived instead of hidden as future work. The project narrowed to a response-control strategy with clearer validation criteria.",
    evidence:
      "Pivot memo P02, mechanism comparison table, and updated model assumptions.",
    followup:
      "Asked a second advisor to review the narrower mechanism before it became the page's core design narrative.",
  },
  {
    id: "record-d03",
    date: "19 Feb 2026",
    role: "Delivery specialist",
    type: "delivery",
    portrait: regulatoryPortrait,
    image: regulatoryImage,
    position: "center 45%",
    title: "Delivery stopped being a future-work paragraph.",
    summary:
      "Payload size, expression time, and immune response became design constraints.",
    stakeholder:
      "Delivery specialist; focused on payload limit, expression window, immune response, and realistic deployment route.",
    why: "Delivery determines construct size, dosing logic, immune risk, and real-world feasibility, so it could not remain a future-work assumption.",
    heard:
      "Delivery is not a downstream packaging problem. It changes what construct size, dosage logic, and risk discussion are credible.",
    change:
      "We moved delivery assumptions into the core design. Construct-size comparison and dosage logic were added before the final experimental plan.",
    evidence:
      "Call notes D03, construct-size table, and implementation constraint map.",
    followup:
      "Linked the delivery constraints to the model section so readers can see how HP changed technical assumptions.",
  },
  {
    id: "record-e05",
    date: "03 Mar 2026",
    role: "Ethics reviewer",
    type: "ethics",
    portrait: ethicsPortrait,
    image: clinicalImage,
    position: "center 42%",
    title: "Consent language changed the public story.",
    summary:
      "Ethics review separated public-facing quotes from private evidence records.",
    stakeholder:
      "Ethics reviewer; focused on consent, identifiability, uncertainty, and how much detail can be shown publicly.",
    why: "We needed a consent and privacy framework that could show stakeholder influence without turning personal context into public evidence.",
    heard:
      "A story can be powerful without making a person identifiable. Public HP evidence should not expose private context.",
    change:
      "We separated public quotes from private evidence and rewrote interview summaries around consent level, not dramatic detail.",
    evidence:
      "Consent log E05, anonymization rules, and revised public quote guidelines.",
    followup:
      "Built a rule that each timeline entry must show influence while keeping raw notes out of the public page.",
  },
  {
    id: "record-o08",
    date: "21 Mar 2026",
    role: "Community workshop",
    type: "community",
    portrait: advocatePortrait,
    image: communityImage,
    position: "center 48%",
    title: "Workshop questions became communication requirements.",
    summary:
      "Public questions clustered around access, uncertainty, and possible misuse.",
    stakeholder:
      "Community participants; focused on understandable benefit, uncertainty, cost, access, and possible misuse.",
    why: "We wanted to test whether non-specialists could understand both the promise and the uncertainty, and identify concerns our expert framing had missed.",
    heard:
      "People understood the promise faster than the uncertainty. Repeated questions revealed which risks the page had not explained.",
    change:
      "Outreach became feedback. We converted repeated questions into FAQ items, risk framing updates, and new interview targets.",
    evidence:
      "Workshop theme map O08, question cluster board, and rewritten public explanation.",
    followup:
      "Used the question clusters to decide which experts and users should be interviewed next.",
  },
  {
    id: "record-v06",
    date: "08 Apr 2026",
    role: "Wet lab mentor",
    type: "validation",
    portrait: labPortrait,
    image: labImage,
    position: "center 42%",
    title: "Assay planning was tied back to stakeholder concerns.",
    summary:
      "Generic positive readouts were replaced with question-driven validation.",
    stakeholder:
      "Wet lab mentor; focused on whether planned assays actually answer HP-driven design questions.",
    why: "We needed to verify that each planned experiment answered a stakeholder-linked design question rather than merely producing a positive readout.",
    heard:
      "A positive assay is only useful if it answers the right question. Feasibility, safety, and user relevance should not be collapsed.",
    change:
      "The experiment map was rebuilt around stakeholder-linked questions. Each assay now explains what design concern it addresses.",
    evidence:
      "Experiment map V06, assay rationale table, and mentor review notes.",
    followup:
      "Added a traceability row from each experiment back to the HP signal that motivated it.",
  },
  {
    id: "record-i07",
    date: "26 Apr 2026",
    role: "Healthcare workflow review",
    type: "implementation",
    portrait: clinicalPortrait,
    image: clinicalImage,
    position: "center 42%",
    title: "Workflow constraints changed the implementation chapter.",
    summary:
      "Healthcare workers flagged burden, storage, training, and adoption barriers.",
    stakeholder:
      "Healthcare workers; focused on labor burden, storage, training, adoption barrier, and fit inside existing workflows.",
    why: "We needed to understand whether CirCure's proposed workflow could fit inside an already constrained clinical setting.",
    heard:
      "If the solution adds work to an overloaded setting, it will not be used even if the biology works.",
    change:
      "Implementation moved from an ideal user story to a workflow map. We added access barriers, training needs, and unresolved deployment assumptions.",
    evidence:
      "Workflow map I07, barrier table, and revised implementation chapter.",
    followup:
      "Checked the final implementation section against the earlier safety and access concerns.",
  },
  {
    id: "record-r09",
    date: "10 May 2026",
    role: "Stakeholder return loop",
    type: "return loop",
    portrait: ethicsPortrait,
    image: regulatoryImage,
    position: "center 45%",
    title: "The revised design was brought back for review.",
    summary:
      "The closeout conversation checked whether the new design answered earlier concerns.",
    stakeholder:
      "Earlier stakeholders; focused on whether the revised design genuinely answered the concerns they raised.",
    why: "A feedback loop is incomplete until the revised design is brought back to the people whose concerns prompted the change.",
    heard:
      "Closing the loop means returning with the changed design, not just citing the first conversation.",
    change:
      "The final HP page now shows before/after decisions and explicitly marks what remains outside the current project scope.",
    evidence:
      "Closeout R09, before-after table, and final assumption checklist.",
    followup:
      "Used remaining concerns to define future work instead of pretending the project solved every implementation issue.",
  },
];

const decisionRows = [
  [
    "Purpose",
    "A single-target vaccine concept.",
    "Clinical need — TNBC heterogeneity makes one target a fragile promise.",
    "Reframed the project around ranked multi-epitope coverage and explicit selection gates.",
    "A01 + target matrix",
    "record-a01",
  ],
  [
    "Design",
    "A preferred mechanism remained central.",
    "Technical critique — its risk and causal pathway could not be bounded convincingly.",
    "Archived the mechanism and narrowed the design instead of disguising it as future work.",
    "P02 + comparison",
    "record-p02",
  ],
  [
    "Execution",
    "Assays prioritized convenient positive readouts.",
    "Validation challenge — a result matters only if it answers the design question.",
    "Mapped every planned assay to a stakeholder-linked feasibility, safety, or relevance question.",
    "V06 + assay map",
    "record-v06",
  ],
  [
    "Governance",
    "One evidence format for every interview.",
    "Ethics review — public storytelling and private records require different consent.",
    "Separated consent-cleared quotes, anonymized summaries, and restricted raw notes.",
    "E05 + consent rules",
    "record-e05",
  ],
  [
    "Implementation",
    "An idealized route from construct to clinic.",
    "Workflow reality — burden, storage, training, and access can block adoption.",
    "Added workflow constraints and returned with the revised design for a final challenge.",
    "I07 + R09",
    "record-r09",
  ],
] as const;

const dossierRecords = [
  {
    id: "dossier-clinical",
    kicker: "01 / Clinical need",
    nav: "Clinical Need",
    note: "problem boundary",
    title: "Start with the professional boundary.",
    intro:
      "TNBC heterogeneity sits inside complex clinical workflows. Clinical input helped us separate an early research platform from a therapeutic claim, define no-go conditions, and identify the evidence required before any discussion of translation.",
    blocks: [
      [
        "Who we contacted",
        "Oncologists, TNBC researchers, and clinical workflow specialists who could challenge both biological and implementation assumptions.",
      ],
      [
        "Why we contacted them",
        "We needed a clinical boundary before choosing what the project should promise, test, or explicitly leave outside scope.",
      ],
      [
        "What we learned",
        "The first framing mixed early feasibility with clinical readiness, making the safety story too confident.",
      ],
      [
        "How it changed CirCure",
        "Clinical feedback became no-go criteria and changed the model, safety page, and implementation assumptions.",
      ],
    ],
    folds: [
      [
        "What should be documented?",
        "Interview date, stakeholder role, clinical concern, design boundary created, and what the team decided not to claim.",
      ],
      [
        "How this changes the project",
        "Clinical concerns become no-go criteria for modeling, safety discussion, and implementation language.",
      ],
    ],
    tags: ["risk criteria", "no-go boundary", "clinical workflow"],
    image: clinicalImage,
    position: "center 42%",
    caption:
      "Clinical design review / defining claims, no-go conditions, and validation priorities",
  },
  {
    id: "dossier-technical",
    kicker: "02 / Technical feasibility",
    nav: "Technical Feasibility",
    note: "design rebuilt",
    title: "Show the design that changed after critique.",
    intro:
      "CirCure links target ranking, circularization, delivery, and immune readouts. External technical review tested which assumptions were controllable, which experiments answered meaningful questions, and which elegant mechanisms needed to be abandoned.",
    blocks: [
      [
        "Who we contacted",
        "Molecular immunologists, circRNA researchers, delivery specialists, and wet-lab mentors with complementary technical perspectives.",
      ],
      [
        "Why we contacted them",
        "Mechanism and delivery experts tested whether the project was technically responsible, not merely interesting.",
      ],
      [
        "What we learned",
        "A favored pathway was too hard to bound, and delivery constraints affected construct size, dosage logic, and validation.",
      ],
      [
        "How it changed CirCure",
        "The old route was archived, the design was narrowed, and each assay was mapped to a stakeholder-linked question.",
      ],
    ],
    folds: [
      [
        "Rejected path",
        "Describe the mechanism that was discarded, why the stakeholder critique mattered, and what replaced it.",
      ],
      [
        "Evidence to link",
        "Pivot memo, model assumption change, wet lab assay map, and delivery constraint notes.",
      ],
    ],
    tags: ["mechanism rejected", "delivery limits", "assay map"],
    image: labImage,
    position: "center 42%",
    caption:
      "Wet-lab review / connecting stakeholder questions to construct and assay choices",
  },
  {
    id: "dossier-ethics",
    kicker: "03 / Ethics and consent",
    nav: "Ethics & Consent",
    note: "trust conditions",
    title: "Make trust visible before the project asks for belief.",
    intro:
      "Cancer-related communication can easily overstate readiness or expose personal context. Consent, privacy, anonymization, and uncertainty therefore became explicit design requirements for our evidence records and public-facing claims.",
    blocks: [
      [
        "Who we contacted",
        "Bioethics researchers, patient advocates, and reviewers familiar with consent, privacy, and responsible health communication.",
      ],
      [
        "Why we contacted them",
        "We needed to show interview influence without exposing private context or overstating stakeholder endorsement.",
      ],
      [
        "What we learned",
        "Public storytelling and evidence storage require different consent levels, especially when quotes can identify a person.",
      ],
      [
        "How it changed CirCure",
        "The HP page separates public quotes, private notes, anonymized summaries, and uncertainty statements.",
      ],
    ],
    folds: [
      [
        "Consent-safe storytelling",
        "Use public quotes only when permission is explicit; otherwise summarize the influence without identifying the person.",
      ],
      [
        "Unknowns and uncertainty",
        "State what remains untested, where the design is speculative, and what would be needed before implementation.",
      ],
    ],
    tags: ["anonymization", "consent record", "uncertainty"],
    image: ethicsPortrait,
    position: "center 18%",
    caption:
      "Ethics perspective / consent, identifiability, uncertainty, and responsible evidence",
  },
  {
    id: "dossier-community",
    kicker: "04 / Public communication",
    nav: "Communication",
    note: "public feedback",
    title: "Let outreach become a feedback engine.",
    intro:
      "Two-way workshops tested whether non-specialists could understand both the benefit and uncertainty of CirCure. Repeated concerns became data: they shaped risk language, access questions, future interview targets, and how we explained the model.",
    blocks: [
      [
        "Who we contacted",
        "Patient advocates, community workshop participants, students, and science communicators with different levels of technical knowledge.",
      ],
      [
        "Why we contacted them",
        "Public-facing work tested whether our explanation was understandable and whether perceived risks matched our assumptions.",
      ],
      [
        "What we learned",
        "Participants understood the promise faster than the uncertainty, exposing missing access and misuse framing.",
      ],
      [
        "How it changed CirCure",
        "Question clusters became FAQ edits, risk-language revisions, and targets for expert follow-up interviews.",
      ],
    ],
    folds: [
      [
        "Theme mapping",
        "Cluster public questions into access, safety, misuse, cost, and scientific uncertainty.",
      ],
      [
        "Resulting content changes",
        "Show before-and-after language for one explanation block so the communication improvement is visible.",
      ],
    ],
    tags: ["workshop themes", "readability pass", "FAQ update"],
    image: communityImage,
    position: "center 48%",
    caption:
      "Community co-design / testing clarity, uncertainty, access, and perceived risk",
  },
  {
    id: "dossier-implementation",
    kicker: "05 / Return loop and unknowns",
    nav: "Return & Unknowns",
    note: "limits stated plainly",
    title: "Return with the changed design, then name the gaps.",
    intro:
      "The strongest IHP close is a return visit, followed by an honest account of what remains unresolved. Clinical validation, equitable access, long-term immune safety, and delivery feasibility remain questions rather than claims.",
    blocks: [
      [
        "Who we contacted",
        "Earlier stakeholders, healthcare workers, and translational or regulatory experts who could assess the revised project as a whole.",
      ],
      [
        "Why we contacted them",
        "Return interviews checked whether the revised project actually answered earlier concerns instead of only citing them.",
      ],
      [
        "What remains unknown",
        "Workflow burden, access, delivery feasibility, and long-term immune safety remain unresolved implementation barriers.",
      ],
      [
        "How it changed CirCure",
        "The final HP text shows before-and-after decisions, remaining limits, and future work tied to stakeholder feedback.",
      ],
    ],
    folds: [
      [
        "Return-loop proof",
        "Include the revised design shown to stakeholders and the questions used to evaluate whether changes addressed prior concerns.",
      ],
      [
        "Unresolved evidence gaps",
        "Clinical validation, long-term immune response, scalable delivery, cost, and equitable access are future questions, not project outcomes.",
      ],
    ],
    tags: ["workflow map", "stakeholder review", "future limits"],
    image: regulatoryImage,
    position: "center 45%",
    caption:
      "Return-loop review / testing the revised design and recording unresolved barriers",
  },
];


export function HumanPracticesImpactWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateGeometry = useCallback(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !viewport || !track) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || innerWidth <= 700) {
      section.style.removeProperty("--hp-impact-height");
      section.style.setProperty("--hp-impact-x", "0px");
      return;
    }

    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    const availableHeight = innerHeight - headerHeight;
    const cardHeight = clamp(availableHeight - 112, 460, 590);
    section.style.setProperty("--hp-impact-card-height", `${cardHeight}px`);
    section.style.setProperty(
      "--hp-impact-card-width",
      `${clamp(cardHeight * 0.72, 330, 410)}px`,
    );

    const horizontalDistance = Math.max(
      0,
      track.scrollWidth - viewport.clientWidth + 24,
    );
    const hold = Math.round(availableHeight * 0.08);
    section.style.setProperty(
      "--hp-impact-height",
      `${horizontalDistance * 0.8 + innerHeight + hold}px`,
    );
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !track) return;

      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || innerWidth <= 700) return;

      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(
        1,
        section.offsetHeight - innerHeight + headerHeight,
      );
      const progress = clamp((headerHeight - rect.top) / scrollable);
      const maxX = Math.max(0, track.scrollWidth - viewport.clientWidth + 24);
      section.style.setProperty("--hp-impact-x", `${-maxX * progress}px`);
      section.style.setProperty("--hp-impact-progress", progress.toFixed(4));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = () => {
      updateGeometry();
      request();
    };

    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", resize, { passive: true });
    const loadFrame = requestAnimationFrame(() => {
      updateGeometry();
      update();
    });
    return () => {
      cancelAnimationFrame(loadFrame);
      if (frame) cancelAnimationFrame(frame);
      removeEventListener("scroll", request);
      removeEventListener("resize", resize);
    };
  }, [updateGeometry]);

  return (
    <section
      className="hp-impact-scroll"
      id="hp-impact"
      ref={sectionRef}
      data-wiki-section
      aria-label="Human Practices impact timeline"
    >
      <div className="hp-impact-sticky" ref={stickyRef}>
        <header className="hp-impact-caption">
          <p className="hp-kicker">02 / Stakeholder impact</p>
          <h2>People changed the project.</h2>
          <span>Scroll to follow all ten records</span>
        </header>

        <div className="hp-impact-viewport" ref={viewportRef}>
          <div className="hp-impact-track" ref={trackRef}>
            {impactRecords.map((record, index) => (
              <article
                className={`hp-impact-card ${index === 0 ? "hp-impact-card--feature" : ""}`}
                key={`${record.stakeholder}-${record.title}`}
              >
                <img
                  className="hp-impact-card__image"
                  src={record.image}
                  alt={`${record.stakeholder}: ${record.lens}`}
                  loading="eager"
                  decoding="async"
                  style={{ objectPosition: record.position }}
                />
                <div className="hp-impact-card__top">
                  <div className="hp-stakeholder">
                    <span className="hp-avatar">{record.avatar}</span>
                    <div>
                      <strong>{record.stakeholder}</strong>
                      <span>{record.lens}</span>
                    </div>
                  </div>
                  <span className="hp-impact-badge">{record.badge}</span>
                </div>
                <div className="hp-impact-copy">
                  <p className="hp-impact-stat">{record.stat}</p>
                  <h3>{record.title}</h3>
                  <p className="hp-impact-quote">“{record.quote}”</p>
                  <div className="hp-impact-change">
                    <span>{record.changeLabel}</span>
                    <p>{record.change}</p>
                  </div>
                  <div className="hp-impact-footer">
                    <a href={`#${record.target}`}>{record.evidence}</a>
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HumanPracticesTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || innerWidth <= 900) return;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(
        1,
        section.offsetHeight - innerHeight + headerHeight,
      );
      const progress = clamp((headerHeight - rect.top) / scrollable);
      // ponytail: update CSS var directly instead of setState to avoid re-render on every scroll frame
      dialRef.current?.style.setProperty(
        "--hp-dial-rotation",
        `${180 - progress * 360}deg`,
      );
      setActiveIndex(
        Math.min(timelineRecords.length - 1, Math.round(progress * 8)),
      );
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", request, { passive: true });
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      removeEventListener("scroll", request);
      removeEventListener("resize", request);
    };
  }, []);

  const jumpToRecord = (index: number) => {
    setActiveIndex(index);
    const section = sectionRef.current;
    if (!section || innerWidth <= 900) {
      document.getElementById(timelineRecords[index].id)?.scrollIntoView({
        behavior: "instant",
        block: "center",
      });
      return;
    }
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    const scrollable = Math.max(
      1,
      section.offsetHeight - innerHeight + headerHeight,
    );
    const progress =
      index === timelineRecords.length - 1 ? 1 : index / timelineRecords.length;
    scrollTo({
      top: section.offsetTop - headerHeight + scrollable * progress,
      behavior: "instant",
    });
  };

  const dialogRecord = timelineRecords[dialogIndex];
  const previous =
    (activeIndex - 1 + timelineRecords.length) % timelineRecords.length;
  const next = (activeIndex + 1) % timelineRecords.length;

  return (
    <section
      className="hp-story-timeline"
      id="hp-evidence-timeline"
      ref={sectionRef}
      data-wiki-section
      aria-label="Detailed Human Practices timeline"
    >
      <header className="hp-section-head hp-story-timeline__head">
        <div>
          <p className="hp-kicker">03 / Evidence timeline</p>
          <h2>Every conversation must move the work.</h2>
        </div>
        <p>
          The timeline records why each stakeholder was selected, what we
          learned, what changed in CirCure, where the evidence lives, and what
          we asked next.
        </p>
      </header>

      <div className="hp-semicircle-timeline">
        <ol className="hp-guide-axis" aria-label="Human Practices records">
          {timelineRecords.map((record, index) => (
            <li
              className={index === activeIndex ? "is-active" : ""}
              key={record.id}
            >
              <button type="button" onClick={() => jumpToRecord(index)}>
                <span className="hp-guide-node">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hp-guide-text">
                  <span>{record.date}</span>
                  <strong>{record.role}</strong>
                  <em>{record.type}</em>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="hp-dial-stage">
          <div
            className="hp-dial"
            ref={dialRef}
            style={{ "--hp-dial-rotation": `180deg` } as CSSProperties}
          >
            <div className="hp-dial-ring" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="hp-ring-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#7a2636" />
                    <stop offset="50%" stopColor="#d86f4a" />
                    <stop offset="100%" stopColor="#2f6f68" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#hp-ring-gradient)"
                  strokeWidth="12"
                />
              </svg>
            </div>

            {timelineRecords.map((record, index) => (
              <article
                className={`hp-dial-card ${index === activeIndex ? "is-active" : ""} ${index === previous ? "is-prev" : ""} ${index === next ? "is-next" : ""}`}
                id={record.id}
                key={record.id}
                style={{ "--angle": `${index * 45}deg` } as TimelineCardStyle}
              >
                <div className="hp-timeline-card__front">
                  <div className="hp-timeline-card__top">
                    <div className="hp-timeline-person">
                      <img
                        className="hp-timeline-avatar"
                        src={record.portrait}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: "center 20%" }}
                      />
                      <span>
                        <strong>{record.date}</strong>
                        <em>{record.role}</em>
                      </span>
                    </div>
                    <span className="hp-timeline-type">{record.type}</span>
                  </div>
                  <h3>{record.title}</h3>
                  <p>{record.summary}</p>
                  <button
                    className="hp-timeline-open"
                    type="button"
                    onClick={() => {
                      setDialogIndex(index);
                      requestAnimationFrame(() =>
                        dialogRef.current?.showModal(),
                      );
                    }}
                  >
                    View evidence <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <dialog
        className="hp-timeline-dialog"
        ref={dialogRef}
        aria-labelledby="hp-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="hp-timeline-dialog__inner">
          <header>
            <div>
              <p className="hp-kicker">
                {dialogRecord.date} / {dialogRecord.role}
              </p>
              <h3 id="hp-dialog-title">{dialogRecord.title}</h3>
            </div>
            <button
              type="button"
              aria-label="Close evidence record"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
          </header>
          <div className="hp-timeline-dialog__body">
            <figure className="hp-timeline-dialog__media">
              <img
                src={dialogRecord.image}
                alt={`Representative ${dialogRecord.role} review`}
                decoding="async"
                style={{ objectPosition: dialogRecord.position }}
              />
            </figure>
            <dl>
              {[
                ["Stakeholder", dialogRecord.stakeholder],
                ["Why we contacted them", dialogRecord.why],
                ["What we heard", dialogRecord.heard],
                ["Project change", dialogRecord.change],
                ["Evidence", dialogRecord.evidence],
                ["Follow-up", dialogRecord.followup],
              ].map(([label, copy]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export function HumanPracticesDossier() {
  return (
    <section
      className="hp-dossier"
      id="hp-dossier"
      data-wiki-section
      aria-label="Human Practices dossier"
    >
      <header className="hp-dossier-head">
        <p className="hp-kicker">07 / Evidence dossier</p>
        <h2>Context, decisions, and limits.</h2>
        <p>
          Clinical, technical, ethical, communication, and implementation
          records remain connected to the decisions they changed.
        </p>
      </header>
      <div className="hp-dossier-layout">
        <div className="hp-dossier-content">
          {dossierRecords.map((record) => (
            <article
              className="hp-dossier-section"
              id={record.id}
              key={record.id}
              data-wiki-outline-anchor
              data-wiki-outline-parent="hp-dossier"
            >
              <div className="hp-dossier-section__copy">
                <div>
                  <p className="hp-kicker">{record.kicker}</p>
                  <h3>{record.title}</h3>
                  <p className="hp-dossier-intro">{record.intro}</p>
                  <div className="hp-dossier-text-grid">
                    {record.blocks.map(([heading, copy]) => (
                      <div key={heading}>
                        <h4>{heading}</h4>
                        <p>{copy}</p>
                      </div>
                    ))}
                  </div>
                  <div className="hp-analysis-folds">
                    {record.folds.map(([heading, copy], index) => (
                      <details
                        key={heading}
                        open={index === 0 && record.id === "dossier-technical"}
                      >
                        <summary>{heading}</summary>
                        <p>{copy}</p>
                      </details>
                    ))}
                  </div>
                </div>
                <div className="hp-dossier-tags">
                  {record.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <figure className="hp-dossier-image">
                <img
                  src={record.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: record.position }}
                />
                <figcaption>{record.caption}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HumanPracticesQuickView() {
  return (
    <section className="hp-judge-view" aria-labelledby="hp-judge-title">
      <header className="hp-section-head">
        <div>
          <p className="hp-kicker">Judge quick view</p>
          <h2 id="hp-judge-title">What changed, at a glance.</h2>
        </div>
        <p>
          Five perspectives produced two project-level pivots, eight traceable
          decisions, and one return loop.
        </p>
      </header>
      <div className="hp-proof-grid" aria-label="HP evidence summary">
        {[
          ["5", "stakeholder lenses"],
          ["2", "project-level pivots"],
          ["8", "linked decisions"],
          ["1", "closed return loop"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


/** 04 / Integration ledger (old `hp-local-content` section LoopBoard). */
export function HumanPracticesLoopBoard() {
  return (
          <section
            className="hp-loop-board"
            id="hp-integration"
            data-wiki-section
            aria-labelledby="hp-loop-title"
          >
            <header className="hp-section-head">
              <div>
                <p className="hp-kicker">04 / Integration ledger</p>
                <h2 id="hp-loop-title">From outside input to inside change.</h2>
              </div>
              <p>
                A strong IHP claim can be audited in four moves: the original
                assumption, the outside signal, the project response, and the
                evidence that verifies it.
              </p>
            </header>
            <div className="hp-loop-grid">
              {[
                [
                  "Before",
                  "Original assumption",
                  "A promising biological idea is framed before the team knows enough about safety, workflow, or social context.",
                ],
                [
                  "Listen",
                  "Stakeholder signal",
                  "Experts and affected groups reveal delivery limits, consent risk, unclear access, and explanation gaps.",
                ],
                [
                  "Change",
                  "Design response",
                  "The team changes scope, rejects weak mechanisms, rewrites communication, and adds measurable safety gates.",
                ],
                [
                  "Verify",
                  "Evidence trail",
                  "Each card links to a note, memo, assay map, or return interview so the HP claim can be checked quickly.",
                ],
              ].map(([label, title, copy], index) => (
                <article className={index === 0 ? "is-dark" : ""} key={label}>
                  <span>{label}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </section>
  );
}

/** 05 / Decision proof (old `hp-local-content` section EvidenceMap). */
export function HumanPracticesEvidenceMap() {
  return (
          <section
            className="hp-evidence-map"
            id="hp-decision-proof"
            data-wiki-section
            aria-labelledby="hp-proof-title"
          >
            <header className="hp-section-head">
              <div>
                <p className="hp-kicker">05 / Decision proof</p>
                <h2 id="hp-proof-title">
                  Judge the changes, not the meeting count.
                </h2>
              </div>
              <p>
                The full audit trail: what we assumed, whose perspective
                challenged it, what CirCure changed, and which primary record
                supports the decision.
              </p>
            </header>
            <div className="hp-evidence-thesis">
              <span>Core claim</span>
              <p>
                Stakeholder input changed CirCure&apos;s purpose, technical
                design, validation plan, governance, and implementation
                boundary.
              </p>
              <a href="#hp-evidence-timeline">Return to the timeline ↑</a>
            </div>
            <div
              className="hp-decision-ledger"
              role="table"
              aria-label="Human Practices decision evidence map"
            >
              <div className="hp-decision-row is-head" role="row">
                {[
                  "Project layer",
                  "Before",
                  "Stakeholder signal",
                  "Decision taken",
                  "Primary proof",
                ].map((label) => (
                  <div key={label} role="columnheader">
                    {label}
                  </div>
                ))}
              </div>
              {decisionRows.map((row) => (
                <div className="hp-decision-row" role="row" key={row[0]}>
                  <div role="cell">
                    <strong>{row[0]}</strong>
                  </div>
                  <div role="cell">{row[1]}</div>
                  <div role="cell">
                    <em>{row[2]}</em>
                  </div>
                  <div role="cell">{row[3]}</div>
                  <div role="cell">
                    <a href={`#${row[5]}`}>{row[4]}</a>
                  </div>
                </div>
              ))}
            </div>
            <p className="hp-evidence-gate">
              <strong>Publication gate</strong>
              Every number, quotation, stakeholder title, and evidence code must
              resolve to a consent-cleared primary record before the wiki
              freeze. Interest is not endorsement; expert opinion is not
              experimental proof.
            </p>
          </section>
  );
}

/** 06 / Method, ethics, and limits (old `hp-local-content` section MethodStandard). */
export function HumanPracticesMethodStandard() {
  return (
          <section
            className="hp-method-standard"
            id="hp-method"
            data-wiki-section
            aria-labelledby="hp-method-title"
          >
            <header className="hp-section-head">
              <div>
                <p className="hp-kicker">06 / Method, ethics, and limits</p>
                <h2 id="hp-method-title">
                  A credible loop explains how input was handled.
                </h2>
              </div>
              <p>
                Interviews are not evidence by default. We make selection,
                consent, analysis, decisions, disagreement, and the return step
                visible so others can inspect and reuse the process.
              </p>
            </header>
            <div className="hp-method-grid">
              {[
                [
                  "01 / Select",
                  "Map power and missing voices.",
                  "Choose stakeholders by how CirCure may affect them and how they can affect the project. Record who is absent and what that absence limits.",
                ],
                [
                  "02 / Engage",
                  "Ask for challenge, not approval.",
                  "Use a role-specific guide, informed consent, and a clear privacy tier. Separate lived experience from technical or clinical claims.",
                ],
                [
                  "03 / Decide",
                  "Show the decision rule.",
                  "Classify each signal by purpose, design, execution, governance, or implementation. Record accepted, rejected, and unresolved advice.",
                ],
                [
                  "04 / Return",
                  "Close with disagreement intact.",
                  "Bring the revised design back. Document what stakeholders accepted, still questioned, and what the team will not claim this season.",
                ],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="hp-method-audit">
              <div>
                <h3>Reusable, but never context-free.</h3>
                <p>
                  The field kit turns our process into a stakeholder map,
                  interview protocol, decision ledger, consent checkpoint, and
                  return-loop checklist. Teams should adapt it to local
                  oversight rules and participant vulnerability.
                </p>
              </div>
              <div>
                <a href={`${import.meta.env.BASE_URL}HP_FIELD_KIT.md`}>
                  Open the HP field kit ↗
                </a>
                <a href="#hp-dossier">Review limits ↓</a>
              </div>
            </div>
          </section>
  );
}
