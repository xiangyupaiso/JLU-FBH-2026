import type { PeerTubeVideoConfig, PeerTubeVideoSource } from "../data/wikiVideo";

/** PeerTube playback must not connect to viewers or third-party P2P services. */
export function officialPeerTubeSource(source: PeerTubeVideoSource): PeerTubeVideoSource | null {
  try {
    const url = new URL(source.embedUrl);
    if (
      url.protocol !== "https:" || url.username || url.password || url.port ||
      !["igem.org", "igem.wiki"].some((domain) =>
        url.hostname === domain || url.hostname.endsWith(`.${domain}`),
      ) || !/^\/videos\/embed\/[\w-]+\/?$/.test(url.pathname)
    ) return null;
    url.searchParams.set("p2p", "0");
    return { ...source, embedUrl: url.href };
  } catch {
    return null;
  }
}

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
  const primary = officialPeerTubeSource(video.primary);
  const fallback = officialPeerTubeSource(video.fallback);

  try {
    if (!primary) return fallback;
    const embed = new URL(primary.embedUrl);
    const id = embed.pathname.match(/^\/videos\/embed\/([\w-]+)\/?$/)?.[1];
    if (!id) return fallback;

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
    if (!response.ok) return fallback;

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
      ? primary
      : fallback;
  } catch {
    signal.throwIfAborted();
    return fallback;
  } finally {
    clearTimeout(timeout);
    signal.removeEventListener("abort", abort);
  }
}
