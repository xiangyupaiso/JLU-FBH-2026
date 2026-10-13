/** User-provided iGEM upload directory and the names of the converted slide PDFs. */
const educationFiles = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/education/figures/";

const convertedSlides: Record<string, string> = {
  "little-scientist-bacteria-id.pptx": "little scientists.pdf",
  "life-science-adventure.pptx": "adventure.pdf",
  "air-into-bread-with-gemy-english.pptx": "Air_into_Bread_with_Gemy_English.pdf",
  "synbio-classroom-lesson-1-english.pptx": "01_SynBio_Classroom_Lesson_1_Opening_and_Lab_Safety_EN.pdf",
  "synbio-classroom-lesson-2-english.pptx": "02_SynBio_Classroom_Lesson_2_PCR_and_Gel_Electrophoresis_EN.pdf",
  "synbio-classroom-lesson-3-english.pptx": "03_SynBio_Classroom_Lesson_3_Crude_DNA_Extraction_EN.pdf",
  "synbio-classroom-lesson-4-english.pptx": "04_SynBio_Classroom_Lesson_4_Life_Science_Monopoly_EN.pdf",
  "synbio-classroom-lesson-5-english.pptx": "05_SynBio_Classroom_Lesson_5_Plasmid_Game_EN.pdf",
  "igem-fbh-jlu-hp.pptx": "Winter Outreach-Hailun, Heilongjiang.pdf",
  "winter-outreach-chongqing-english.pptx": "Winter Outreach-Chongqing.pdf",
  "igem-pptx.pptx": "Winter Outreach-Yanji, Jilin.pdf",
  "shi-zhiyuan-igem-back-to-school-propaganda-english.pptx": "Winter Outreach-Jining-Shandong.pdf",
  "winter-outreach-igem-introduction.pptx": "Winter Outreach-Turin, Italy.pdf",
};

export function educationAssetUrl(value: string): string {
  const relative = value.replace(/^__BASE__assets\/education\//, "");
  const filename = relative.split("/").at(-1) ?? relative;
  const slidePdf = convertedSlides[filename];
  if (slidePdf) return educationFiles + encodeURIComponent(slidePdf);
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
