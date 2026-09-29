import type { ExperimentInfoSidebarData } from '../components/ExperimentInfoSidebar';

const experiment3Image = './images/experiment3';
const experiment5Image = './images/experiment5';
const experiment7Image = './images/experiment7';
const sharedPptImage = './experiment4_lab/assets/ppt';

export const experiment5SidebarData = {
  experimentLabel: 'Experiment 05',
  title: "Experiment Information",
  safety: [
    "Store Taq and similar reagents at -20°C and keep them on ice during use.",
    "Avoid repeated freezing and thawing of PCR products and template DNA to prevent degradation.",
    "Wear heat-resistant gloves when microwaving agarose to prevent burns from splashes.",
    "UV light can damage eyes and skin. Close the imager door before viewing.",
    "Wash your hands after handling GelRed, even though it has low toxicity.",
  ],
  principle:
    "PCR (polymerase chain reaction) exponentially amplifies a target DNA fragment in vitro through repeated denaturation, annealing and extension. At 94°C, double-stranded DNA separates into single strands. Primers bind specifically to the template during annealing, and Taq polymerase synthesizes new strands during extension. After 30 cycles, the target can be amplified millions of times. Agarose gel electrophoresis separates the products: DNA migrates from the negative to the positive electrode, with smaller fragments migrating faster. GelRed bound to DNA fluoresces under UV light to reveal bands. The target GFP fragment is approximately 720 bp.",
  questions: [
    {
      id: 1,
      question: "What is the role of Taq in PCR?",
      options: ["Synthesize new DNA strands", "Cut double-stranded DNA"],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "In which direction does DNA migrate in agarose gel electrophoresis?",
      options: ["From the negative to the positive electrode", "From the positive to the negative electrode"],
      correctIndex: 0,
    },
  ],
  instruments: [
    { id: 'pipette', name: "Micropipette", englishName: 'Micropipette', image: `${experiment3Image}/Pipette.png` },
    { id: 'tip-box', name: "Tip Box", englishName: 'Pipette Tip Box', image: `${experiment5Image}/tip-box.png` },
    { id: 'mini-centrifuge', name: "Benchtop Centrifuge", englishName: 'Mini Centrifuge', image: `${experiment5Image}/mini-centrifuge.png` },
    { id: 'pcr-machine', name: "Thermal Cycler", englishName: 'PCR Thermal Cycler', image: `${experiment5Image}/pcr-machine.png` },
    { id: 'balance', name: "Electronic Balance", englishName: 'Electronic Balance', image: `${sharedPptImage}/balance.png` },
    { id: 'microwave', name: "Microwave", englishName: 'Microwave Oven', image: `${experiment3Image}/MicrowaveOvenClosed.png` },
    { id: 'gel-comb', name: "Gel Comb", englishName: 'Gel Comb', image: `${sharedPptImage}/comb.png` },
    { id: 'gel-tray', name: "Gel Casting Tray", englishName: 'Gel Tray', image: `${sharedPptImage}/gel-tray.png` },
    { id: 'chamber', name: "Electrophoresis Tank", englishName: 'Electrophoresis Chamber', image: `${experiment3Image}/ElectrophoresisChamber.png` },
    { id: 'power-supply', name: "Electrophoresis Power Supply", englishName: 'Electrophoresis Power Supply', image: `${experiment3Image}/ElectrophoresisPowerSupply.png` },
    { id: 'gel-imager', name: "UV Gel Imager", englishName: 'UV Gel Imaging System', image: `${experiment3Image}/UVGelImagingSystem.png` },
    { id: 'tweezers', name: "Forceps", englishName: 'Tweezers', image: `${sharedPptImage}/tweezers.png` },
  ],
  instrumentTrayOrder: [
    'tip-box',
    'gel-imager',
    'mini-centrifuge',
    'power-supply',
    'pipette',
    'chamber',
    'microwave',
    'balance',
    'gel-comb',
    'gel-tray',
    'pcr-machine',
    'tweezers',
  ],
  reagents: [
    { id: 'pcr-buffer', name: '10× PCR Buffer', englishName: '10× PCR Reaction Buffer', image: `${experiment7Image}/image15.png` },
    { id: 'dntp', name: "dNTP mix", englishName: 'dNTP Mixture', image: `${experiment7Image}/image14.png` },
    { id: 'primer-f', name: "Forward primer", englishName: 'Forward Primer', image: `${experiment7Image}/image14.png` },
    { id: 'primer-r', name: "Reverse primer", englishName: 'Reverse Primer', image: `${experiment7Image}/image14.png` },
    { id: 'template-dna', name: "Template DNA", englishName: 'Template DNA', image: `${experiment7Image}/image19.png` },
    { id: 'taq-polymerase', name: "Taq DNA polymerase", englishName: 'Taq DNA Polymerase', image: `${experiment7Image}/image14.png` },
    { id: 'ddh2o', name: "Sterile deionized water", englishName: 'Sterile Deionized Water (ddH₂O)', image: `${experiment7Image}/image13.png` },
    { id: 'agarose', name: "Agarose powder", englishName: 'Agarose Powder', image: `${experiment3Image}/ErlenmeyerFlaskPowder.png` },
    { id: 'tae-buffer', name: "1× TAE electrophoresis buffer", englishName: '1×TAE Electrophoresis Buffer', image: `${experiment3Image}/ReagentCarboyBlue.png` },
    { id: 'gelred', name: "Nucleic acid gel stain", englishName: 'GelRed', image: `${experiment3Image}/PCRTubeRed.png` },
    { id: 'loading-buffer', name: "6× DNA loading buffer", englishName: '6×DNA Loading Buffer', image: `${experiment3Image}/EPTubeGreen.png` },
    { id: 'dna-marker', name: "DNA ladder", englishName: 'DNA Molecular Weight Marker', image: `${experiment3Image}/EPTubeSmallBlue2.png` },
  ],
} satisfies ExperimentInfoSidebarData;
