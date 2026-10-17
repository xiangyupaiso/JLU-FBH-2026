import Figure01IntegrationOverviewImg from "../../assets/wiki/software/figure-01-integration-overview.png";
import Figure02CandidateWorkflowImg from "../../assets/wiki/software/figure-02-candidate-workflow.png";
import Figure03PrepareDataImg from "../../assets/wiki/software/figure-03-prepare-data.png";
import Figure04AComparisonDesignImg from "../../assets/wiki/software/figure-04a-comparison-design.png";
import Figure04BEvidenceCardImg from "../../assets/wiki/software/figure-04b-evidence-card.png";
import Figure05AEpitopePredictionImg from "../../assets/wiki/software/figure-05a-epitope-prediction.png";
import Figure05BCandidateEpitopesImg from "../../assets/wiki/software/figure-05b-candidate-epitopes.png";
import Figure06AAssemblyImg from "../../assets/wiki/software/figure-06a-assembly.png";
import Figure06BJunctionReviewImg from "../../assets/wiki/software/figure-06b-junction-review.png";
import Figure07BoundaryConfirmationImg from "../../assets/wiki/software/figure-07-boundary-confirmation.png";
import Figure08DownloadsImg from "../../assets/wiki/software/figure-08-downloads.png";
import Figure09ViewerOverviewImg from "../../assets/wiki/software/figure-09-viewer-overview.png";
import Figure10OneClickSetupImg from "../../assets/wiki/software/figure-10-one-click-setup.png";
import Figure11RunConsoleImg from "../../assets/wiki/software/figure-11-run-console.png";
import Figure12StatusPanelImg from "../../assets/wiki/software/figure-12-status-panel.png";
import Figure13CircuforgeModulesImg from "../../assets/wiki/software/figure-13-circuforge-modules.png";
import Figure14TorusfoldStagesImg from "../../assets/wiki/software/figure-14-torusfold-stages.png";
import Figure15WorkflowEvolutionImg from "../../assets/wiki/software/figure-15-workflow-evolution.png";
import Figure16SoftwareExchangeImg from "../../assets/wiki/software/figure-16-software-exchange.png";
import Figure17ConsultationImg from "../../assets/wiki/software/figure-17-consultation.jpg";
import Figure18TeamDiscussionImg from "../../assets/wiki/software/figure-18-team-discussion.png";
import Figure19CircuforgeUserTestingImg from "../../assets/wiki/software/figure-19-circuforge-user-testing.png";
import Figure20TorusfoldUserTestingImg from "../../assets/wiki/software/figure-20-torusfold-user-testing.png";

export interface SoftwareAssetEntry {
  fileName: string;
  localSourcePath: string;
  localSrc?: string;
  uploadUrl: string;
  /** Intrinsic size of the rendered source (localSrc until the CDN upload exists). */
  width?: number;
  height?: number;
  alt: string;
  caption: string;
  section: string;
}

const assetDir = "src/assets/wiki/software";

export const softwareFigures = {
  "figure-01-integration-overview": {
    fileName: "figure-01-integration-overview.png",
    localSourcePath: `${assetDir}/figure-01-integration-overview.png`,
    localSrc: Figure01IntegrationOverviewImg,
    uploadUrl: "",
    width: 6000,
    height: 4200,
    alt: "Re-layout this figure as an ultra-wide scientific workflow. The previous revisio.png",
    caption: "Figure 1. CircuForge generates a reviewed mature RNA sequence, which TorusFold uses for circular structure modeling.",
    section: "Software",
  },
  "figure-02-candidate-workflow": {
    fileName: "figure-02-candidate-workflow.png",
    localSourcePath: `${assetDir}/figure-02-candidate-workflow.png`,
    localSrc: Figure02CandidateWorkflowImg,
    uploadUrl: "",
    width: 6000,
    height: 3378,
    alt: "aeb77f30a9abd548e019fce954f19b6c.png",
    caption: "Figure 2. Candidates progress from data analysis and researcher review to assembly and export.",
    section: "Software",
  },
  "figure-03-prepare-data": {
    fileName: "figure-03-prepare-data.png",
    localSourcePath: `${assetDir}/figure-03-prepare-data.png`,
    localSrc: Figure03PrepareDataImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 145128(2).png",
    caption: "Figure 3. Prepare data provides data-upload controls, a sample-information template, Load demo data, and Process data.",
    section: "Software",
  },
  "figure-04a-comparison-design": {
    fileName: "figure-04a-comparison-design.png",
    localSourcePath: `${assetDir}/figure-04a-comparison-design.png`,
    localSrc: Figure04AComparisonDesignImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 145240(1).png",
    caption: "Figure 4A. Comparison design and screening criteria are set separately. Run the differential analysis before applying screening criteria to the results.",
    section: "Software",
  },
  "figure-04b-evidence-card": {
    fileName: "figure-04b-evidence-card.png",
    localSourcePath: `${assetDir}/figure-04b-evidence-card.png`,
    localSrc: Figure04BEvidenceCardImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 145603(1).png",
    caption: "Figure 4B. Selecting P16401 displays its information in the Evidence Card. Add Selected Targets to Cart saves the selected target in the Design list.",
    section: "Software",
  },
  "figure-05a-epitope-prediction": {
    fileName: "figure-05a-epitope-prediction.png",
    localSourcePath: `${assetDir}/figure-05a-epitope-prediction.png`,
    localSrc: Figure05AEpitopePredictionImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 145804(2).png",
    caption: "Figure 5A. After loading a target from the Design list, set the peptide length and HLA allele, then start epitope prediction.",
    section: "Software",
  },
  "figure-05b-candidate-epitopes": {
    fileName: "figure-05b-candidate-epitopes.png",
    localSourcePath: `${assetDir}/figure-05b-candidate-epitopes.png`,
    localSrc: Figure05BCandidateEpitopesImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 150145(1).png",
    caption: "Figure 5B. Two candidate epitopes are checked in this example. They enter the Design list when the user clicks Add to design list.",
    section: "Software",
  },
  "figure-06a-assembly": {
    fileName: "figure-06a-assembly.png",
    localSourcePath: `${assetDir}/figure-06a-assembly.png`,
    localSrc: Figure06AAssemblyImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 150319(1).png",
    caption: "Figure 6A. The two saved epitopes appear on the assembly page. The user checks the input, ORF name, and linkers before generating the ORF.",
    section: "Software",
  },
  "figure-06b-junction-review": {
    fileName: "figure-06b-junction-review.png",
    localSourcePath: `${assetDir}/figure-06b-junction-review.png`,
    localSrc: Figure06BJunctionReviewImg,
    uploadUrl: "",
    width: 2555,
    height: 1439,
    alt: "Screenshot 2026-10-05 150357(1).png",
    caption: "Figure 6B. Junction review provides HLA settings, consent for external submission, and a list of peptide windows to scan. The scan has not started in this screenshot.",
    section: "Software",
  },
  "figure-07-boundary-confirmation": {
    fileName: "figure-07-boundary-confirmation.png",
    localSourcePath: `${assetDir}/figure-07-boundary-confirmation.png`,
    localSrc: Figure07BoundaryConfirmationImg,
    uploadUrl: "",
    width: 2557,
    height: 1439,
    alt: "Screenshot 2026-10-05 150750(1).png",
    caption: "Figure 7. Users check the candidate mature circRNA boundary and retain the backbone version and confirmation record for sequence export.",
    section: "Software",
  },
  "figure-08-downloads": {
    fileName: "figure-08-downloads.png",
    localSourcePath: `${assetDir}/figure-08-downloads.png`,
    localSrc: Figure08DownloadsImg,
    uploadUrl: "",
    width: 2559,
    height: 1439,
    alt: "Screenshot 2026-10-05 151114(1).png",
    caption: "Figure 8. Download files brings together downloads for construct sequences, annotations, result tables, and the validation package.",
    section: "Software",
  },
  "figure-09-viewer-overview": {
    fileName: "figure-09-viewer-overview.png",
    localSourcePath: `${assetDir}/figure-09-viewer-overview.png`,
    localSrc: Figure09ViewerOverviewImg,
    uploadUrl: "",
    width: 1863,
    height: 941,
    alt: "总览图.png",
    caption: "Figure 9. The TorusFold example viewer with the 2,013 nt model loaded. Drag to rotate, change the display style and colouring, and use the BSJ control to mark the circular junction.",
    section: "Software",
  },
  "figure-10-one-click-setup": {
    fileName: "figure-10-one-click-setup.png",
    localSourcePath: `${assetDir}/figure-10-one-click-setup.png`,
    localSrc: Figure10OneClickSetupImg,
    uploadUrl: "",
    width: 1080,
    height: 561,
    alt: "一键安装.png",
    caption: "Figure 10. One-click environment setup. The panel reports what it can install by itself and what has to be placed by hand, so an unavailable predictor is never reported as a failure.",
    section: "Software",
  },
  "figure-11-run-console": {
    fileName: "figure-11-run-console.png",
    localSourcePath: `${assetDir}/figure-11-run-console.png`,
    localSrc: Figure11RunConsoleImg,
    uploadUrl: "",
    width: 235,
    height: 271,
    alt: "console.png",
    caption: "Figure 11. Starting a run. The console names the job and streams the stages as the calculation proceeds, so progress is visible without watching the output directory.",
    section: "Software",
  },
  "figure-12-status-panel": {
    fileName: "figure-12-status-panel.png",
    localSourcePath: `${assetDir}/figure-12-status-panel.png`,
    localSrc: Figure12StatusPanelImg,
    uploadUrl: "",
    width: 235,
    height: 316,
    alt: "监控面板.png",
    caption: "Figure 12. Monitoring a run. The status panel reports the current stage and its own progress. If a run is interrupted, the saved state is what the resume path reads.",
    section: "Software",
  },
  "figure-13-circuforge-modules": {
    fileName: "figure-13-circuforge-modules.png",
    localSourcePath: `${assetDir}/figure-13-circuforge-modules.png`,
    localSrc: Figure13CircuforgeModulesImg,
    uploadUrl: "",
    width: 7200,
    height: 4050,
    alt: "software workflow (3).png",
    caption: "Figure 13. CircuForge's modules follow research tasks. The Design Cart transfers confirmed candidates at the relevant stages.",
    section: "Software",
  },
  "figure-14-torusfold-stages": {
    fileName: "figure-14-torusfold-stages.png",
    localSourcePath: `${assetDir}/figure-14-torusfold-stages.png`,
    localSrc: Figure14TorusfoldStagesImg,
    uploadUrl: "",
    width: 6000,
    height: 2724,
    alt: "TorusFold pipeline from a circular RNA sequence and pairing constraints through fragment modeling, reconstruction, refinement, and output evaluation.",
    caption: "Figure 14. TorusFold passes pairing information and fragment structures into reconstruction and refinement, saving the results of each stage.",
    section: "Software",
  },
  "figure-15-workflow-evolution": {
    fileName: "figure-15-workflow-evolution.png",
    localSourcePath: `${assetDir}/figure-15-workflow-evolution.png`,
    localSrc: Figure15WorkflowEvolutionImg,
    uploadUrl: "",
    width: 5852,
    height: 1938,
    alt: "Diagram of CircuForge workflow evolution from V1.0 to V2.0, including the software exchange, review gate, Design Cart, and software iHP changes.",
    caption: "Figure 15. CircuForge's candidate-review and running workflow changed through a software exchange and two consultations.",
    section: "Software",
  },
  "figure-16-software-exchange": {
    fileName: "figure-16-software-exchange.png",
    localSourcePath: `${assetDir}/figure-16-software-exchange.png`,
    localSrc: Figure16SoftwareExchangeImg,
    uploadUrl: "",
    width: 1280,
    height: 857,
    alt: "image.png",
    caption: "Figure 16. The team presented V1.0 at an iGEM software exchange and discussed how users could review candidate results.",
    section: "Software",
  },
  "figure-17-consultation": {
    fileName: "figure-17-consultation.jpg",
    localSourcePath: `${assetDir}/figure-17-consultation.jpg`,
    localSrc: Figure17ConsultationImg,
    uploadUrl: "",
    width: 1706,
    height: 1279,
    alt: "12f04acfd9502237f80d97aff7af5e0e.jpg",
    caption: "Figure 17. The team presented software and discussed with AssoProf.Qingtian Guan.",
    section: "Software",
  },
  "figure-18-team-discussion": {
    fileName: "figure-18-team-discussion.png",
    localSourcePath: `${assetDir}/figure-18-team-discussion.png`,
    localSrc: Figure18TeamDiscussionImg,
    uploadUrl: "",
    width: 1280,
    height: 852,
    alt: "image.png",
    caption: "Figure 18. An in-person software engineering discussion led to changes in module responsibilities and task management.",
    section: "Software",
  },
  "figure-19-circuforge-user-testing": {
    fileName: "figure-19-circuforge-user-testing.png",
    localSourcePath: `${assetDir}/figure-19-circuforge-user-testing.png`,
    localSrc: Figure19CircuforgeUserTestingImg,
    uploadUrl: "",
    width: 5712,
    height: 4284,
    alt: "Participants gathered around a display showing CircuForge's Build construct page during a user-testing session.",
    caption: "Figure 19. Participants review CircuForge's construct workflow on a shared display.",
    section: "Software",
  },
  "figure-20-torusfold-user-testing": {
    fileName: "figure-20-torusfold-user-testing.png",
    localSourcePath: `${assetDir}/figure-20-torusfold-user-testing.png`,
    localSrc: Figure20TorusfoldUserTestingImg,
    uploadUrl: "",
    width: 2275,
    height: 1279,
    alt: "Two participants inspect a multicolored RNA structure in the TorusFold viewer.",
    caption: "Figure 20. Participants examine a modeled RNA structure in the TorusFold viewer.",
    section: "Software",
  },
} as const satisfies Record<string, SoftwareAssetEntry>;

export type SoftwareFigureKey = keyof typeof softwareFigures;

export const getSoftwareImage = (key: SoftwareFigureKey): string =>
  softwareFigures[key].uploadUrl || softwareFigures[key].localSrc || "";

export const softwareGuides = {
  circuforge: {
    fileName: "CircuForge-Usage-Guide.pdf",
    caption: "CircuForge User Guide",
    description: "Read the illustrated guide for installation, target and epitope review, construct design, exports, and troubleshooting.",
    fallback: "If the preview is unavailable, use the links above.",
  },
  torusfold: {
    fileName: "TorusFold-Usage-Guide.pdf",
    caption: "TorusFold User Guide",
    description: "Read the illustrated guide for environment setup, prediction, checkpoint recovery, model inspection, exports, and troubleshooting.",
    fallback: "If the preview is unavailable, use the links above.",
  },
} as const;
