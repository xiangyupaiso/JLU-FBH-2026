import type { ComponentProps } from "react";

/** Keep every animation node and its measured bounds mounted without starting
 * the distant chapter's network requests during the first screen. */
export function HomeImage({ src, ...props }: ComponentProps<"img">) {
  return <img {...props} data-home-src={src} fetchPriority="low" />;
}

export function HomeSvgImage({ href, ...props }: ComponentProps<"image">) {
  return <image {...props} data-home-src={href} />;
}
