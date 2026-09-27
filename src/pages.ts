import { lazy } from "react";

// Route-level code splitting: each page loads in its own chunk so the initial
// bundle only contains the shell (Navbar + Header + Footer + Home).
const Home = lazy(() => import("./contents/home-scene-01").then((m) => ({ default: m.Home })));
const Members = lazy(() => import("./contents/members").then((m) => ({ default: m.Members })));
const Description = lazy(() => import("./contents/description").then((m) => ({ default: m.Description })));
const Engineering = lazy(() => import("./contents/engineering").then((m) => ({ default: m.Engineering })));
const Results = lazy(() => import("./contents/results").then((m) => ({ default: m.Results })));
const Contribution = lazy(() => import("./contents/contribution").then((m) => ({ default: m.Contribution })));
const Experiments = lazy(() => import("./contents/experiments").then((m) => ({ default: m.Experiments })));
const Notebook = lazy(() => import("./contents/notebook").then((m) => ({ default: m.Notebook })));
const Measurement = lazy(() => import("./contents/measurement").then((m) => ({ default: m.Measurement })));
const AlternativePlatform = lazy(() => import("./contents/alternative-platform").then((m) => ({ default: m.AlternativePlatform })));
const SafetyAndSecurity = lazy(() => import("./contents/safety-and-security").then((m) => ({ default: m.SafetyAndSecurity })));
const Protocol = lazy(() => import("./contents/protocol").then((m) => ({ default: m.Protocol })));
const Model = lazy(() => import("./contents/model").then((m) => ({ default: m.Model })));
const Software = lazy(() => import("./contents/software").then((m) => ({ default: m.Software })));
const Hardware = lazy(() => import("./contents/hardware").then((m) => ({ default: m.Hardware })));
const Games = lazy(() => import("./contents/games").then((m) => ({ default: m.Games })));
const Entrepreneurship = lazy(() => import("./contents/entrepreneurship").then((m) => ({ default: m.Entrepreneurship })));
const HumanPractices = lazy(() => import("./contents/human-practices").then((m) => ({ default: m.HumanPractices })));
const Education = lazy(() => import("./contents/education").then((m) => ({ default: m.Education })));
const Inclusivity = lazy(() => import("./contents/inclusivity").then((m) => ({ default: m.Inclusivity })));
const Sustainability = lazy(() => import("./contents/sustainability").then((m) => ({ default: m.Sustainability })));

export type PageLayout = "standard" | "immersive";

export interface PageNavMeta {
  small: string;
  em: string;
  spriteRow: string;
}

export interface FolderNavMeta {
  key: string;
  intro: string;
  enterLabel: string;
  sprite: "project-wetlab" | "drylab-engagement";
}

export interface Folder {
  type: "folder";
  name: string | undefined;
  folder: Page[];
  layout?: PageLayout;
  nav?: FolderNavMeta;
}

export interface Page {
  type: "page";
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  layout?: PageLayout;
  nav?: PageNavMeta;
}

export type PageNode = Folder | Page;

const Pages: PageNode[] = [
  {
    type: "page",
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Your iGEM Journey Begins Here! We wish you a successful and rewarding season!",
  },
  {
    type: "page",
    name: "Team",
    title: "Meet Our Team",
    path: "/team",
    component: Members,
    lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
  },
  {
    type: "folder",
    name: "Project",
    layout: "immersive",
    nav: {
      key: "project",
      intro:
        "Why TNBC needs a traceable route from evidence to vaccine candidates.",
      enterLabel: "Project overview",
      sprite: "project-wetlab",
    },
    folder: [
      {
        type: "page",
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
        nav: {
          small: "01 / CONTEXT",
          em: "Problem · Gap · Response",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle.",
        nav: {
          small: "02 / ITERATE",
          em: "Design · Build · Test · Learn",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
        nav: {
          small: "03 / EVIDENCE",
          em: "Figures · Statistics · Failures",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams and document it on this page.",
        nav: {
          small: "04 / RESPONSIBILITY",
          em: "Gates · Limits · Reuse",
          spriteRow: "0%",
        },
      },
    ],
  },
  {
    type: "folder",
    name: "Wet Lab",
    layout: "immersive",
    nav: {
      key: "wet-lab",
      intro:
        "From construct design to measurements that can support—or reject—a claim.",
      enterLabel: "Enter Wet Lab",
      sprite: "project-wetlab",
    },
    folder: [
      {
        type: "page",
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your project. It is designed to provide sufficient information for other teams to replicate our work.",
        nav: {
          small: "01 / METHODS",
          em: "Protocols · Controls · Materials",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        lead: "This serves as a chronological record of your team's progress throughout the season. It documents your daily activities, experiments, discussions, and decisions.",
        nav: {
          small: "02 / TRACE",
          em: "Timeline · Records · Reproduce",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
        nav: {
          small: "03 / QUANTIFY",
          em: "Parts · Characterization · Range",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Alternative Platform",
        title: "Alternative Platform",
        path: "/alternative-platform",
        component: AlternativePlatform,
        lead: "This award is designed to celebrate exemplary work done in alternative platforms, and covers anything that is not E. coli, S. cerevisiae, and B. subtilis.",
        nav: {
          small: "04 / HOST",
          em: "Chassis · Range · Limits",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Safety and Security",
        title: "Safety and Security",
        path: "/safety-and-security",
        component: SafetyAndSecurity,
        lead: "Detail the safety and security considerations of your project, adressing potential risks and outlining the measures taken to mitigate them.",
        nav: {
          small: "05 / GUARD",
          em: "Risks · Mitigation · Stewardship",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Protocol",
        title: "Protocol Library",
        path: "/protocol",
        component: Protocol,
        lead: "Browse, preview, and download the team's Wet Lab protocol manuals.",
        nav: {
          small: "06 / MANUAL",
          em: "Protocols · Library · Viewer",
          spriteRow: "100%",
        },
      },
    ],
  },
  {
    type: "folder",
    name: "Dry Lab",
    layout: "immersive",
    nav: {
      key: "dry-lab",
      intro:
        "Models, software, and hardware that make the wet claims inspectable.",
      enterLabel: "Enter Dry Lab",
      sprite: "drylab-engagement",
    },
    folder: [
      {
        type: "page",
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
        nav: {
          small: "01 / REASON",
          em: "Assumptions · Validation · Limits",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
        nav: {
          small: "02 / REUSE",
          em: "Run · Inspect · Extend",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
        nav: {
          small: "03 / INSTRUMENT",
          em: "Build · Calibrate · Share",
          spriteRow: "0%",
        },
      },
      {
        type: "page",
        name: "Games",
        title: "Games",
        path: "/games",
        component: Games,
        lead: "Interactive virtual projects for learning, exploration, and experimentation.",
        nav: {
          small: "04 / INTERACT",
          em: "Play · Explore · Experiment",
          spriteRow: "0%",
        },
      },
    ],
  },
  {
    type: "folder",
    name: "Engagement",
    layout: "immersive",
    nav: {
      key: "engagement",
      intro:
        "Stakeholder input becomes design evidence only when its consequence stays visible.",
      enterLabel: "Follow the decisions",
      sprite: "drylab-engagement",
    },
    folder: [
      {
        type: "page",
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship award recognizes exceptional effort to build a business case and commercialize an iGEM project.",
        nav: {
          small: "01 / TRANSLATE",
          em: "Users · Risks · Next steps",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
        nav: {
          small: "02 / LISTEN",
          em: "Input · Change · Consequence",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
        nav: {
          small: "03 / EXPLAIN",
          em: "Audience · Access · Reflection",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
        nav: {
          small: "04 / INCLUDE",
          em: "Reach · Access · Equity",
          spriteRow: "100%",
        },
      },
      {
        type: "page",
        name: "Sustainability",
        title: "Sustainability",
        path: "/sustainability",
        component: Sustainability,
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
        nav: {
          small: "05 / SUSTAIN",
          em: "SDGs · Impact · Tradeoffs",
          spriteRow: "100%",
        },
      },
    ],
  },
];

export default Pages;
