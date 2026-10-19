import { useState } from "react";
import { UserRound } from "lucide-react";

export function HpPortrait({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return src && !failed
    ? <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
    : <UserRound role="img" aria-label={`${name} portrait unavailable`} size={30} strokeWidth={1.5} />;
}

export function HpInterviewPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <figure className="hp-interview-photo">
    <img src={src} alt={`${name} interview photograph`} loading="lazy" onError={() => setFailed(true)} />
    <figcaption>{name}</figcaption>
  </figure>;
}
