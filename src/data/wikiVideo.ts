export interface PeerTubeVideoSource {
  title: string;
  embedUrl: string;
  hostedBy: string;
}

export interface PeerTubeVideoConfig {
  primary: PeerTubeVideoSource;
  fallback: PeerTubeVideoSource;
  credit: string;
}
