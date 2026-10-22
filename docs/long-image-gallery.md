# 长图画廊

简体中文 | [English](long-image-gallery.en.md)

`LongImageGallery` 是用于手动浏览图片集合的共享 React / TypeScript 组件，保留图片比例和完整内容。内嵌阅读区域默认高 440px，可纵向滚动；放大视图支持 50–200% 缩放、适应宽度、打开原图和 Escape 关闭。每个实例独立维护选中项与弹窗状态。

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

每张图片只有 `src` 必填。未命名的项目显示为 “Image 1”“Image 2”等；向数组添加项目即可更新数量与缩略图。`caption` 是单张图片的可选说明，与正文图注分开；`thumbnailSrc` 可使用独立的小尺寸预览，主阅读区域始终读取 `src`。

通过 `readerHeight={520}` 调整高度，或在容器上设置局部 CSS 变量 `--long-gallery-reader-height`。默认值位于 `src/styles/features/long-image-gallery.css`，组件样式限制在画廊及其弹窗范围内。

原稿日期、图号、主标题和图注继续放在组件外。正式资源使用实际的 iGEM 托管 URL。组件会声明配置图片的预加载；若画廊按条件挂载，还需将其素材加入页面的 `preloadImages`。

Notebook 的 URL 与可选图片信息维护在 `src/data/project/notebookAssets.ts`。图块通过 `gallery: { kind: "long-image" }` 或 `gallery: { kind: "photos" }` 启用画廊，原有 `assets` 列表决定集合内容。普通照片使用 photo 变体的 300px 高度，未设置 `gallery` 的图块沿用原有展示。

空集合显示提示，单图集合禁用前后切换。主图加载失败时显示重试按钮，缩略图失败时保留标题与选中按钮。放大弹窗限制焦点在弹窗内、锁定背景滚动，关闭时恢复焦点并保留 Notebook 的滚动位置。
