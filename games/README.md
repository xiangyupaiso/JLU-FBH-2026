# 可复用游戏源码

简体中文 | [English](README.en.md)

Wiki 中两个独立游戏的可构建源码保存在这里：

| 游戏             | 源码               | Wiki 使用的运行文件            |
| ---------------- | ------------------ | ------------------------------ |
| Breast Guardian  | `breast-guardian/` | `public/game-assets/`          |
| circRNA Bomb Cat | `bomb-cat/`        | `public/game-assets/bomb-cat/` |

两个游戏分别是独立 npm 项目。根目录 Wiki 构建发布已经提交的游戏运行文件，游戏源码需要在子项目内构建。Bio Memory 的 HTML 位于 `public/game-assets/bio-memory/`。虚拟实验室完整源码在 `virtual-lab/`，主站接入容器位于 `src/components/VirtualLaboratory/`。

## 安装与构建

使用 Node.js 20.19+ 或 22.12+。原有构建记录使用 Node 24.16.0 和 npm 12.2.0。

```sh
cd games/breast-guardian # or games/bomb-cat
npm ci
npm run build
npm run preview
```

每个子项目保留锁文件、TypeScript 与 Vite 配置。产物使用相对 URL，可在 Wiki 的 `/jlu-fbh/` 路径下托管。发布新版本时，另行更新 Wiki 中对应的运行文件。

## 素材与许可

GitHub 仓库保留本地素材来源。Breast Guardian 通过 `src/data/assetUrls.ts` 解析图片；Bomb Cat 使用官方 CDN 封面、四款 Wiki 字体以及 CSS、内联 SVG 与 emoji。实际上传地址保存在 [ASSET_REGISTRY.md](ASSET_REGISTRY.md)，这是团队资产登记表中 206 行的游戏相关记录。

第三方依赖保留自身许可证，项目源码遵循本目录的 [CC BY 4.0](LICENSE)。

Breast Guardian 的素材核对与映射再生成命令：

```sh
npm run check:assets   # Python 3.9+
npm run check:runtime
npm run assets:regen   # regenerate after recording verified upload URLs
```

## 来源与发布版本记录

源码于 2026-10-21 从 Official-wiki 归档，原游戏源码提交为 `f76d5f220c29a48820cdae57c260c3e724a0ef53`。两个原始快照均通过干净锁文件安装和生产构建。规范化 Windows 换行后，Breast Guardian 的六个产物与当时已发布文件一致；Bomb Cat 主脚本和 PeerJS 分块与当时运行版本一致，重建 CSS 只增加了未使用的 `.static{position:static}` 规则。封面地址变更可能影响 Vite 文件名，来源及哈希见 [SOURCE_PROVENANCE.json](SOURCE_PROVENANCE.json)。

归档随后补充了类型注解、辅助模块拆分、声明作用域和可移植的素材检查路径，以满足仓库 lint 要求，游戏规则、故事、状态转换与素材保持原有内容。2026-10-22 的 GitHub 集成曾从整合后的源码重建两个有效入口，并保留 Bomb Cat 联机和锁定的 PeerJS 依赖。上面的归档哈希属于历史记录，集成后的产物哈希在 `SOURCE_PROVENANCE.json` 的 `github_integration` 中。

具体开发说明见 [Breast Guardian](breast-guardian/README.md) 和 [Bomb Cat](bomb-cat/README.md)。
