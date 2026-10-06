import { lazy } from "react";

// Keep page metadata synchronous, but load only the selected route's code,
// styles and asset dictionary. App's Suspense boundary owns the loading cover.
export const Home = lazy(() =>
  import("./home-scene-01").then((m) => ({ default: m.Home })),
);
// Team
export const Roster = lazy(() =>
  import("./roster").then((m) => ({ default: m.Roster })),
);
export const Attribution = lazy(() =>
  import("./attribution").then((m) => ({ default: m.Attribution })),
);
export const Activities = lazy(() =>
  import("./activities").then((m) => ({ default: m.Activities })),
);
export { Roster as Members };
// Project
export const Description = lazy(() =>
  import("./description").then((m) => ({ default: m.Description })),
);
export const Engineering = lazy(() =>
  import("./engineering").then((m) => ({ default: m.Engineering })),
);
export const Results = lazy(() =>
  import("./results").then((m) => ({ default: m.Results })),
);
export const Contribution = lazy(() =>
  import("./contribution").then((m) => ({ default: m.Contribution })),
);
export const VisualDesign = lazy(() =>
  import("./visual-design").then((m) => ({ default: m.VisualDesign })),
);
export const Notebook = lazy(() =>
  import("./notebook").then((m) => ({ default: m.Notebook })),
);
export const SafetyAndSecurity = lazy(() =>
  import("./safety-and-security").then((m) => ({
    default: m.SafetyAndSecurity,
  })),
);
// Wet Lab
export const Design = lazy(() =>
  import("./design").then((m) => ({ default: m.Design })),
);
export const Experiments = lazy(() =>
  import("./experiments").then((m) => ({ default: m.Experiments })),
);
export const Measurement = lazy(() =>
  import("./measurement").then((m) => ({ default: m.Measurement })),
);
export const AlternativePlatform = lazy(() =>
  import("./alternative-platform").then((m) => ({
    default: m.AlternativePlatform,
  })),
);
// Dry Lab
export const Model = lazy(() =>
  import("./model").then((m) => ({ default: m.Model })),
);
export const Software = lazy(() =>
  import("./software").then((m) => ({ default: m.Software })),
);
export const Hardware = lazy(() =>
  import("./hardware").then((m) => ({ default: m.Hardware })),
);
export const Games = lazy(() =>
  import("./games").then((m) => ({ default: m.Games })),
);
// Engagement
export const Entrepreneurship = lazy(() =>
  import("./entrepreneurship").then((m) => ({ default: m.Entrepreneurship })),
);
export const HumanPractices = lazy(() =>
  import("./human-practices").then((m) => ({ default: m.HumanPractices })),
);
export const Education = lazy(() =>
  import("./education").then((m) => ({ default: m.Education })),
);
export const Inclusivity = lazy(() =>
  import("./inclusivity").then((m) => ({ default: m.Inclusivity })),
);
export const Sustainability = lazy(() =>
  import("./sustainability").then((m) => ({ default: m.Sustainability })),
);
