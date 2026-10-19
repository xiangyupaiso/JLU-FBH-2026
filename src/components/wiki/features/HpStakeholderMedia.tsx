import { UserRound } from "lucide-react";

export function HpPortrait({ src, name }: { src?: string; name: string }) {
  return src
    ? <img src={src} alt="" loading="eager" />
    : <UserRound role="img" aria-label={`${name} portrait unavailable`} size={30} strokeWidth={1.5} />;
}

export function HpInterviewPhoto({ src, name }: { src: string; name: string }) {
  return <figure className="hp-interview-photo">
    <img src={src} alt={`${name} interview photograph`} loading="eager" />
    <figcaption>{name}</figcaption>
  </figure>;
}
