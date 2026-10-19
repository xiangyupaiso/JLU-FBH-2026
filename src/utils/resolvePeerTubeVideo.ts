import type { PeerTubeVideoConfig } from "../data/wikiVideo";

interface VideoMetadata {
  privacy?: { id?: number };
  state?: { id?: number };
  blacklisted?: boolean;
  requiresPassword?: boolean;
  files?: Array<{ fileUrl?: string }>;
  streamingPlaylists?: Array<{ playlistUrl?: string }>;
}

/** The embed shell returns 200 even for videos that are still under review. */
export async function resolvePeerTubeVideo(
  video: PeerTubeVideoConfig,
  signal: AbortSignal,
) {
  signal.throwIfAborted();
  const request = new AbortController();
  const abort = () => request.abort(signal.reason);
  signal.addEventListener("abort", abort, { once: true });
  const timeout = setTimeout(() => request.abort(), 5000);

  try {
    const embed = new URL(video.primary.embedUrl);
    const id = embed.pathname.match(/^\/videos\/embed\/([\w-]+)\/?$/)?.[1];
    if (!id) return video.fallback;

    const response = await fetch(
      new URL(`/api/v1/videos/${encodeURIComponent(id)}`, embed.origin),
      {
        signal: request.signal,
        credentials: "omit",
        mode: "cors",
        cache: "no-store",
        headers: { Accept: "application/json" },
      },
    );
    if (!response.ok) return video.fallback;

    const metadata: VideoMetadata | null = await response.json();
    const hasMedia =
      (Array.isArray(metadata?.files) &&
        metadata.files.some((file) => Boolean(file?.fileUrl))) ||
      (Array.isArray(metadata?.streamingPlaylists) &&
        metadata.streamingPlaylists.some((list) => Boolean(list?.playlistUrl)));

    return metadata?.state?.id === 1 &&
      (metadata.privacy?.id === 1 || metadata.privacy?.id === 2) &&
      !metadata.blacklisted &&
      !metadata.requiresPassword &&
      hasMedia
      ? video.primary
      : video.fallback;
  } catch {
    signal.throwIfAborted();
    return video.fallback;
  } finally {
    clearTimeout(timeout);
    signal.removeEventListener("abort", abort);
  }
}
