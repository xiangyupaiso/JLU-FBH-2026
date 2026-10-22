# 仓库地图

本仓库同时保存可运行的网站、独立子项目、内容来源与交付记录。按职责导航，保留被代码或脚本依赖的路径。

## 主站源码

| 路径 | 职责 |
| --- | --- |
| `src/main.tsx`、`src/containers/` | 应用挂载、全局宿主与页面容器 |
| `src/pages.ts`、`src/contents/` | 路由定义和页面装配 |
| `src/data/` | 正文、章节、引用、资产映射和页面数据 |
| `src/components/wiki/` | 共享阅读器及 `features/` 中的页面交互 |
| `src/components/home/` | 首页场景、叙事和交互组件 |
| `src/components/` 其他目录 | 导航、页脚、小游戏和实验室的主站接入组件 |
| `src/styles/` | 共享主题、页面样式及 `features/` 样式 |
| `src/hooks/`、`src/utils/` | 共享 Hook、资源准备和其他工具 |
| `src/assets/` | 经 Vite 导入或收集的本地素材 |
| `public/` | 按原路径复制到发布目录的静态文件 |

当前 `src/data/` 保留根级文件与模块子目录并存的结构。查找时从路由装配文件追踪 import；新增页面遵循[页面规范](../WIKI_ARCHITECTURE_SPEC.md)，维护旧页面时逐步收拢。

`public/` 的目录结构影响实际访问 URL；`src/assets/` 可能被动态 glob、图板 HTML 或放大链接引用。仅搜索静态 import 无法证明某个素材未使用。

## 独立应用与网页运行文件

- `games/breast-guardian/` 和 `games/bomb-cat/`：各自可构建的游戏源码、依赖和来源记录。
- `public/game-assets/`：主站当前发布的游戏运行文件；重建游戏源码不会自动替换这里。
- `src/components/BreastGuardianGame/`、`BombCatGame/`、`BioMemoryGame/`：主站接入组件。
- `virtual-lab/`：虚拟实验室完整源码和课程播放器。主站通过 `src/components/VirtualLaboratory/` 嵌入官方独立部署。

开发前阅读 [games/README.md](../games/README.md) 或 [virtual-lab/README.md](../virtual-lab/README.md)。

## 内容来源、交付与文档

| 路径 | 职责 |
| --- | --- |
| `文案集/` | 原稿、原始附件、设计资料；部分导入与验证脚本直接依赖这里 |
| `src/data/assets/` | 资产目录及相关数据 |
| `IGEM_ASSET_REGISTRY.md` | 人工可读的资产登记表 |
| `delivery/uploads/` | 按批次保存的上传副本、清单与历史核验 |
| `delivery/igem-2026-jlu-fbh-games-source.zip` | 历史游戏源码交付包；当前可维护源码在 `games/` |
| `docs/` | 开发说明、内容参考和历史评审 |
| `scripts/` | 现有工具入口，按[脚本索引](../scripts/README.md)查用途 |
| `scripts/manual/` | 手动或限定环境的验证工具 |

## 根目录中保留的文件

- 四个 HTML 构建入口：`index.html`、`visual-design-study.html`、`archive-navigation-study.html`、`archive-recognition-study.html`。
- 构建与检查配置：`vite.config.ts`、`tsconfig*.json`、`eslint.config.js`。
- 依赖与安装记录：`package.json`、`yarn.lock`、`package-lock.json`。
- 部署配置：`.gitlab-ci.yml`、`wrangler.json`、`.dockerignore`。
- 团队与工具约定：`LICENSE`、`CLAUDE.md`、`.claude/`、`.gitattributes`、`.gitignore`。
- 页面规范与资产登记：`WIKI_ARCHITECTURE_SPEC.md`、`IGEM_ASSET_REGISTRY.md`。现有文档、源码注释和工具引用这些入口。
- 已跟踪的 `.env` 是现有构建输入；不要往其中写入密钥。本机专用配置遵循 `*.local` 忽略规则。
- 已跟踪的 `tsconfig.tsbuildinfo` 是历史生成文件，本轮保留；新增编译缓存已由忽略规则排除。忽略规则不会移除已跟踪文件。

## 2026-10-22 路径调整

| 原路径 | 当前路径 |
| --- | --- |
| `ARCHITECTURE_ANALYSIS_REPORT.md` | [docs/reviews/architecture-analysis.md](reviews/architecture-analysis.md) |
| `CircuForge and TorusFold - Software (JLU-FBH iGEM 2026).md` | [docs/content/software-source.md](content/software-source.md) |
| `test-loader-timeout.mjs` | [scripts/manual/test-loader-timeout.mjs](../scripts/manual/test-loader-timeout.mjs) |
| `upload-bundle-experiments-20261020/` | [delivery/uploads/upload-bundle-experiments-20261020/](../delivery/uploads/upload-bundle-experiments-20261020/README.md) |
| `upload-bundle-new-heroes/` | [delivery/uploads/upload-bundle-new-heroes/](../delivery/uploads/upload-bundle-new-heroes/README.md) |
| `upload-bundle-visual-design-20261020/` | [delivery/uploads/upload-bundle-visual-design-20261020/](../delivery/uploads/upload-bundle-visual-design-20261020/README.md) |

移动保留上传批次内部层级、文件名、后台目标路径及清单。源码、网页素材、原始文案、锁文件与构建入口保持原路径。
