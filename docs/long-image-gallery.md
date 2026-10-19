# Long image gallery

`LongImageGallery` is a shared React/TypeScript component for manually browsing an image collection. It preserves each image's aspect ratio and complete content. The inline reader scrolls vertically at 440px by default; its enlarged reader supports 50–200% zoom, fit to width, original-image links, and Escape to close. Each instance owns its selection and dialog state.

```tsx
import { LongImageGallery } from "../src/components/wiki/gallery/LongImageGallery";
import type { LongImageGalleryImage } from "../src/components/wiki/gallery/longImageGalleryTypes";

// Resolve image URLs through the page's asset dictionary.
const images: LongImageGalleryImage[] = yourAssets.map((asset) => ({
  src: asset.uploadUrl,
  title: asset.title,
  alt: asset.alt,
  caption: asset.caption,
  thumbnailSrc: asset.thumbnailUrl,
  width: asset.width,
  height: asset.height,
}));

<LongImageGallery title="Image gallery" images={images} />;
```

Only `src` is required per image. Untitled items display as “Image 1”, “Image 2”, and so on. Add items to the array to update the count and thumbnails. `caption` is an optional image-specific note, separate from the manuscript figure caption. `thumbnailSrc` can point to a smaller, independent preview; the main reader always uses `src`.

Pass `readerHeight={520}` to configure a different height, or set the scoped `--long-gallery-reader-height` CSS variable on a containing element. The default lives in `src/styles/features/long-image-gallery.css`. No component styles target elements outside the gallery or its portaled dialog.

Keep manuscript dates, figure numbers, titles, and captions outside the component. Production assets must resolve to real iGEM-hosted URLs. The component declares image preloads for its configured items; when the gallery itself is conditionally mounted, include its assets in the page's `preloadImages` list too.

For Notebook, keep URLs and optional per-image metadata in `src/data/project/notebookAssets.ts`. A figure opts in with `gallery: { kind: "long-image" }` or `gallery: { kind: "photos" }`; its existing `assets` list determines the collection. Notebook uses the photo variant's 300px CSS height for ordinary photographs. Figures without `gallery` retain their existing presentation.

Empty collections display a message. Single-item collections disable both navigation buttons. Failed main images expose a Retry button; failed thumbnail previews retain their title and selection button. The enlarged dialog traps focus, locks background scrolling, and restores focus without scrolling the Notebook on close.
