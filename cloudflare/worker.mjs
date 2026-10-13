import manifest from "../.tmp-build/cloudflare/asset-manifest.mjs";
import { createAssetWorker } from "./serve-large-assets.mjs";

export default createAssetWorker(manifest);
