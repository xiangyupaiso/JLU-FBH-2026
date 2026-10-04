/**
 * Renders the data layer's `**bold**` markers inside Sustainability panels —
 * the same convention the shared reader applies to prose blocks, so copy reads
 * identically inside and outside feature slots.
 */
export function RichText({ text }: { text: string }) {
  if (!text.includes("**")) return <>{text}</>;
  return (
    <>
      {text.split(/(\*\*[^*]+?\*\*)/g).map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
