/** Figure metadata is kept outside the manuscript so copy updates retain captions. */
export interface EducationFigureCaption {
  caption: string;
  figureLabel?: string;
  className?: string;
}

export const educationFigureCaptions: Record<string, EducationFigureCaption> = {
  "education-overview-map.png": {
    "caption": "Education as a Living Process: From Diverse Contexts to Learning Outcomes",
    "figureLabel": "FIG. 01"
  },
  "recursive-care-spiral.png": {
    "caption": "Recursive Care: Expansion Without Erasure",
    "figureLabel": "FIG. 02"
  },
  "virtual-laboratory-nine-experiments.png": {
    "caption": "Nine Experiments, One Connected Course: From Preparation to GFP Verification",
    "figureLabel": "FIG. 03"
  },
  "virtual-laboratory-interface.png": {
    "caption": "From Watching to Operating: A Guided Interactive Learning Cycle",
    "figureLabel": "FIG. 04"
  },
  "pilu-town-iteration.png": {
    "caption": "Pilu Town: From Classroom Observation to Design Change",
    "figureLabel": "FIG. 05"
  },
  "synbio-classroom.png": {
    "caption": "Synbio Classroom: How Student Questions Reshaped the Learning Route",
    "figureLabel": "FIG. 06"
  },
  "xinghua-festival.png": {
    "caption": "Xinghua Festival: From Individual Care to Community Support",
    "figureLabel": "FIG. 07"
  },
  "health-run.png": {
    "caption": "Health Run: Knowledge in Motion Across Learning Contexts",
    "figureLabel": "FIG. 08"
  },
  "molecular-rhythm.png": {
    "caption": "Molecular Rhythm: Turning Experimental Procedures into Embodied Learning",
    "figureLabel": "FIG. 09"
  },
  "breast-guardian.png": {
    "caption": "Breast Guardian: Learning Through Life Stages, Memory, and Choice",
    "figureLabel": "FIG. 10"
  },
  "ethics-debate.png": {
    "caption": "Ethics Debate: From Scientific Evidence to Reflective Judgment",
    "figureLabel": "FIG. 11",
    "className": "wiki-figure--ethics-poster"
  },
  "participation-dialogue-without-a-standard-position-photo-61.png": {
    "caption": "Ethics Debate: Event Poster",
    "className": "wiki-figure--ethics-participation-poster wiki-figure--education-material"
  },
  "design-photo-65.png": {
    "caption": "Bio Memory Match: Gameplay Guide and Scientific Field Guide",
    "className": "wiki-figure--education-material"
  },
  "evidence-when-dialogue-changed-the-route-photo-26.png": {
    "caption": "Synbio Classroom: Learning Activities and Teaching Materials"
  },
  "evidence-when-dialogue-changed-the-route-photo-27.png": {
    "caption": "Synbio Classroom: Classroom Activity Design"
  },
  "battle-heroes.png": {
    "caption": "Bio-Heroes: Game Overview and Core Mechanics"
  },
  "battle-heroes-2.png": {
    "caption": "Bio-Heroes: Strategic Cards and Gameplay Rules"
  },
  "continuation-knowledge-moved-again-photo-33.png": {
    "caption": "Beat the Cancer Cells: Interactive Beanbag Challenge"
  },
  "continuation-knowledge-moved-again-photo-34.png": {
    "caption": "Breast Health Quiz Cards"
  },
  "continuation-knowledge-moved-again-photo-35.png": {
    "caption": "Care Wall: Messages of Hope and Support"
  },
  "continuation-knowledge-moved-again-photo-36.png": {
    "caption": "Breast Health Trifold — Front"
  },
  "continuation-knowledge-moved-again-photo-37.png": {
    "caption": "Breast Health Trifold — Reverse"
  },
  "continuation-migration-means-redesign-photo-41.png": {
    "caption": "Health Run: Reusing the Breast Health Trifold — Front"
  },
  "continuation-migration-means-redesign-photo-42.png": {
    "caption": "Health Run: Reusing the Breast Health Trifold — Reverse"
  },
  "continuation-a-mechanism-that-travelled-photo-47.png": {
    "caption": "Molecular Rhythm: Experimental Rhythm Score"
  },
  "continuation-a-mechanism-that-travelled-photo-46.png": {
    "caption": "Molecular Rhythm: Gameplay Instructions"
  },
  "continuation-a-mechanism-that-travelled-photo-48.png": {
    "caption": "Gene Jukebox: Music and Personal Expression Cards"
  },
  "continuation-a-mechanism-that-travelled-photo-49.png": {
    "caption": "Transcript Plan: Creative Bookmark Designs"
  },
  "continuation-a-mechanism-that-travelled-photo-50.png": {
    "caption": "Music Festival: Completed Participant Creations"
  }
};

export function getEducationFigureCaption(src: string): EducationFigureCaption | undefined {
  const fileName = src.split(/[?#]/)[0].split("/").pop() ?? "";
  return educationFigureCaptions[fileName];
}
