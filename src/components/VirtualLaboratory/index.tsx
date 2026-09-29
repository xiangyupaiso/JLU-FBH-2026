import { useEffect, useRef } from "react";

/** A separate document keeps the lab's Tailwind styles and viewport intact. */
export default function VirtualLaboratory({
  onRequestClose,
}: {
  onRequestClose: () => void;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.source === frameRef.current?.contentWindow &&
        event.data?.type === "virtual-lab-close"
      )
        onRequestClose();
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [onRequestClose]);

  return (
    <iframe
      ref={frameRef}
      className="games-experience__lab"
      title="Virtual Laboratory — nine interactive molecular biology experiments"
      src={`${import.meta.env.BASE_URL}virtual-lab/index.html`}
      allow="autoplay; fullscreen"
    />
  );
}
