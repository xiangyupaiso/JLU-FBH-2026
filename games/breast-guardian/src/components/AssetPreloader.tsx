import { ALL_RUNTIME_ASSET_PATHS } from '@/data/generatedAssets';

export default function AssetPreloader() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px overflow-hidden opacity-0"
    >
      {ALL_RUNTIME_ASSET_PATHS.map((src) => (
        <img key={src} src={src} alt="" loading="eager" />
      ))}
    </div>
  );
}
