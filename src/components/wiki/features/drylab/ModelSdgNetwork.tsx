import { useEffect, useRef } from "react";
import { modelSdgNetworkEmbed } from "../../../../data/drylab/modelAssets";

export function ModelSdgNetwork() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resize = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== frameRef.current?.contentWindow ||
        event.data?.type !== "model-sdg-network-size"
      ) return;

      const height = event.data.height;
      if (typeof height === "number" && Number.isFinite(height) && height >= 400 && height <= 3000) {
        frameRef.current?.style.setProperty("--model-network-height", `${Math.ceil(height) + 2}px`);
      }
    };

    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);

  return (
    <iframe
      ref={frameRef}
      id="model-sdg-network"
      className="model-sdg-network"
      src={modelSdgNetworkEmbed}
      title="SST-QN: CirCure directed relationships"
      loading="lazy"
    />
  );
}
