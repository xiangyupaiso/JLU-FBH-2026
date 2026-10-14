/** User-provided iGEM upload directory and the names of the converted slide PDFs. */
const educationFiles = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/education/figures/";

const convertedSlides: Record<string, string> = {
  "little-scientist-bacteria-id.pptx": "little-scientists.pdf",
  "life-science-adventure.pptx": "adventure.pdf",
  "air-into-bread-with-gemy-english.pptx": "air-into-bread-with-gemy-english.pdf",
  "synbio-classroom-lesson-1-english.pptx": "01-synbio-classroom-lesson-1-opening-and-lab-safety-en.pdf",
  "synbio-classroom-lesson-2-english.pptx": "02-synbio-classroom-lesson-2-pcr-and-gel-electrophoresis-en.pdf",
  "synbio-classroom-lesson-3-english.pptx": "03-synbio-classroom-lesson-3-crude-dna-extraction-en.pdf",
  "synbio-classroom-lesson-4-english.pptx": "04-synbio-classroom-lesson-4-life-science-monopoly-en.pdf",
  "synbio-classroom-lesson-5-english.pptx": "05-synbio-classroom-lesson-5-plasmid-game-en.pdf",
  "igem-fbh-jlu-hp.pptx": "winter-outreach-hailun-heilongjiang.pdf",
  "winter-outreach-chongqing-english.pptx": "winter-outreach-chongqing.pdf",
  "igem-pptx.pptx": "winter-outreach-yanji-jilin.pdf",
  "shi-zhiyuan-igem-back-to-school-propaganda-english.pptx": "winter-outreach-jining-shandong.pdf",
  "winter-outreach-igem-introduction.pptx": "winter-outreach-turin-italy.pdf",
};

const renamedDocuments: Record<string, string> = {
  "letters-to-my-body-final.pdf": "letters-to-my-body.pdf",
  "letters-to-my-body-final.webp": "letters-to-my-body.webp",
  "a-seed-planted-in-the-heart-final.pdf": "a-seed-planted-in-the-heart.pdf",
  "a-seed-planted-in-the-heart-final.webp": "a-seed-planted-in-the-heart.webp",
};

export function educationAssetUrl(value: string): string {
  const relative = value.replace(/^__BASE__assets\/education\//, "");
  const filename = relative.split("/").at(-1) ?? relative;
  const slidePdf = convertedSlides[filename];
  if (slidePdf) return educationFiles + slidePdf;
  if (renamedDocuments[filename]) return educationFiles + renamedDocuments[filename];
  if (/\.webp$/i.test(filename)) return educationFiles + filename;
  if (/\.(?:png|jpe?g|webp)$/i.test(filename)) {
    return educationFiles + filename.replace(/\.(?:png|jpe?g|webp)$/i, ".avif");
  }
  return educationFiles + filename;
}

export function replaceEducationAssetLinks(text: string): string {
  return text
    .replace(/__BASE__assets\/education\/[A-Za-z0-9._/-]+/g, educationAssetUrl)
    .replace(/\.pptx\]/g, ".pdf]");
}
