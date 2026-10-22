# Breast Guardian

简体中文 | [English](README.en.md)

基于 React 19、TypeScript 和 Vite 7 的乳腺健康科普 RPG。源码来源、发布版本对比和[许可证](../LICENSE)见[游戏源码索引](../README.md)。

使用 Node.js 20.19+ 或 22.12+。原有构建记录使用 Node 24.16.0、npm 12.2.0。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Vite base 为 `./`，`dist/` 产物支持 Wiki 子路径托管。重建后，在发布步骤更新主站 `public/game-assets/` 中的运行文件。

## 素材

GitHub 仓库保留本地美术来源。`src/data/assetUrls.ts` 将历史路径映射到已记录的官方 CDN URL。[ASSET_MAPPING.md](ASSET_MAPPING.md) 记录各映射，[归档资产登记表](../ASSET_REGISTRY.md) 随源码保留，素材工具可直接从当前检出目录运行：

```sh
npm run check:assets   # Python 3.9+
npm run check:runtime
npm run assets:regen   # regenerate after recording verified upload URLs
```

运行时需要访问 `static.igem.wiki`。运行检查覆盖实际场景、不同视角的肖像、Boss 状态和预加载列表；未使用的登记项与全部远端图片可按需另行检查。

## 源码与已知问题

`App.tsx` 分发游戏阶段，`src/sections/` 保存故事与战斗界面，`src/data/` 保留中英文故事数据，`src/hooks/gameState.tsx` 管理游戏状态。`WikiBridge` 向同源 Wiki 父窗口发送 ready、close 和 completion 消息；独立运行时不发送这些事件。

这是单人游戏，没有在线多人模式，当前未附独立单元或端到端测试套件。

已有的肖像状态诊断记录包含 18 个未解析的故事状态组合，诊断退出码为 1。具体条目与后续核对方式见 [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)。补齐素材时需确认相应角色、状态与视角的原图。
