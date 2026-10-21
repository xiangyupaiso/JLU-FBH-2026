export function isHpInterviewHeading(text: string) {
  const label = text.replace(/^[\s#*]+|[\s*]+$/g, "");
  return /^(Context|Issue|Reframing|Cycle|First (?:Interview|Survey)|Follow[‐‑–-]?up(?: Re[‐‑–-]?interview| Interview)?)$/i.test(label);
}
