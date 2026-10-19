import type { ComponentProps } from "react";

/** Keep the image's layout and event handlers without issuing a render-time request. */
export function QueuedImage({ src, srcSet, ...props }: ComponentProps<"img">) {
  const source = src ?? srcSet?.trim().split(/\s+/)[0].replace(/,$/, "");
  return <img {...props} data-page-src={source} data-page-srcset={srcSet} />;
}

/** SVG images share the same queue; xlinkHref must not bypass deferred href. */
export function QueuedSvgImage({
  href,
  xlinkHref,
  ...props
}: ComponentProps<"image">) {
  return <image {...props} data-page-src={href ?? xlinkHref} />;
}
