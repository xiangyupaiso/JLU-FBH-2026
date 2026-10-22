# circRNA Bomb Cat

简体中文 | [English](README.en.md)

基于 React 19、TypeScript 和 Vite 5 的科普卡牌游戏，支持 2–6 位本地或在线玩家。源码来源、发布版本对比和[许可证](../LICENSE)见[游戏源码索引](../README.md)。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

需要 Node.js 20+，原有验证使用 Node 24.16.0 / npm 12.2.0。默认 Vite base 为 `./`，支持独立托管与 Wiki 子路径。需要其他完整部署前缀时才设置 `GAME_BASE_PATH`。

构建生成 `dist/`，发布时另行更新 `public/game-assets/bomb-cat/`。

## 美术与网络

菜单封面从 `src/CircRnaGame.tsx` 中的官方 iGEM CDN URL 加载，旧的未使用 `src/assets/cover.webp` 已移除。四款 Wiki 字体也使用官方 CDN；卡牌、图标和纸张纹理由 CSS、SVG 与 emoji 呈现，详见[归档资产登记表](../ASSET_REGISTRY.md)。

素材加载与 Online Play 的 PeerJS 信令需要网络。本地游戏和规则查看不需要信令服务器。

## 源码与已知问题

`src/engine/gameEngine.ts` 实现规则，`botAiTree.ts` 实现机器人决策，`useGameEngine.ts` 管理状态与计时器，`usePeerNetwork.ts` 处理联机消息。`WikiBridge` 向同源父窗口发送 ready、close 和 completion 事件，独立运行时不发送。

当前未附独立单元或端到端测试套件。联机依赖信令服务可用性，玩家在一轮中途离开仍是已记录的游戏限制。开发时使用锁文件、TypeScript 构建与仓库 lint，并针对规则、状态或网络改动补充对应的交互验证。
