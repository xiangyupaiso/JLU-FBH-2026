/** Queue artwork for UI that mounts later, without issuing browser preloads. */
export function PageImagePreloads({
  sources,
}: {
  sources: readonly (string | undefined)[];
}) {
  return (
    <span
      hidden
      aria-hidden="true"
      data-page-image-hints={JSON.stringify([...new Set(sources.filter(Boolean))])}
    />
  );
}
