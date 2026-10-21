/** Keep note indexing and the reader's displayed paragraphs in the same order. */
export function splitNoteContent(body: string): string[] {
  if (!body) return [];
  if (body.includes("\n")) {
    return body.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  }
  if (/1\.\s+.*2\.\s+/.test(body)) {
    return body.split(/(?=\b\d+\.\s+)/).map((line) => line.trim()).filter(Boolean);
  }
  return [body.trim()];
}
