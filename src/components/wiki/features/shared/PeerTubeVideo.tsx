import { useEffect, useState } from "react";
import type {
  PeerTubeVideoConfig,
  PeerTubeVideoSource,
} from "../../../../data/wikiVideo";
import { officialPeerTubeSource, resolvePeerTubeVideo } from "../../../../utils/resolvePeerTubeVideo";
import "../../../../styles/features/wiki-video.css";

export function PeerTubeVideo({ video, sourceLabel }: { video: PeerTubeVideoConfig; sourceLabel?: string }) {
  const [source, setSource] = useState<PeerTubeVideoSource | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setSource(null);
    void resolvePeerTubeVideo(video, controller.signal).then(
      (resolved) => {
        if (!controller.signal.aborted) setSource(resolved);
      },
      () => {
        if (!controller.signal.aborted) setSource(officialPeerTubeSource(video.fallback));
      },
    );
    return () => controller.abort();
  }, [video]);

  return (
    <figure className="wiki-video">
      <div className="wiki-video__frame" aria-busy={!source}>
        {source ? (
          <iframe
            key={source.embedUrl}
            title={source.title}
            src={source.embedUrl}
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            allowFullScreen
          />
        ) : (
          <p className="wiki-video__loading" role="status">
            Loading video…
          </p>
        )}
      </div>
      <figcaption className="wiki-video__caption">
        {video.credit}
        {source ? (
          <>
            {" "}
            <a href={source.embedUrl} target="_blank" rel="noopener noreferrer">
              {sourceLabel ?? `Video hosted by ${source.hostedBy}.`}
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
