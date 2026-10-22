# JLU-FBH iGEM 2026 · CirCure Wiki

JLU-FBH 2026 官方 Wiki 的前端源码、页面内容与素材来源。主站使用 React、TypeScript 和 Vite；主题为基于环状 RNA（circRNA）的三阴性乳腺癌（TNBC）疫苗平台。

## 从这里开始

- 开发、检查与构建：[开发指南](docs/development.md)
- 改页面时去哪里找文件：[仓库地图](docs/repository-layout.md)
- GitHub、官方 GitLab 与预览环境：[部署说明](docs/deployment.md)
- 图片、原稿、CDN 映射与上传包：[素材维护](docs/assets.md)
- 所有文档：[文档索引](docs/README.md)
- 提交改动前：[协作约定](CONTRIBUTING.md)

## 快速启动

主站建议使用 Node.js 22.12+ 的 22.x 环境和 Yarn Classic 1.22.22，保持与官方 CI 的 Node 22 主版本一致。包管理器以 `package.json` 的 `packageManager` 为准。

```sh
yarn install --frozen-lockfile
yarn dev
```

打开终端输出的地址，默认路径为 `http://localhost:5173/jlu-fbh/`。

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

根目录同时保留 npm 锁文件；需要使用 npm 时执行 `npm ci`，对应脚本通过 `npm run <名称>` 运行。不要混用两种安装方式或顺带更新依赖。

## 目录入口

```text
.
├── src/                       # 主站：路由、页面数据、交互、样式和打包素材
├── public/                    # 按原路径发布的静态文件、游戏运行文件
├── games/                     # 两个可独立构建的游戏源码项目
├── virtual-lab/               # 可独立构建的虚拟实验室源码项目
├── 文案集/                     # 原稿、原始附件和设计资料
├── scripts/                   # 构建、验证、导入和素材处理脚本
├── docs/                      # 开发说明、内容参考与历史评审
├── delivery/                  # 交付归档及素材上传批次
├── WIKI_ARCHITECTURE_SPEC.md   # 页面开发规范与共享加载契约
└── IGEM_ASSET_REGISTRY.md      # 素材登记表；配合资产目录维护
```

根目录的 `index.html`、`visual-design-study.html`、`archive-navigation-study.html` 和 `archive-recognition-study.html` 都是当前构建入口。带有 `archive` 的文件仍可能参与正式页面，移动前必须核对引用。

## 三类应用的构建边界

| 应用 | 开发入口 | 根目录构建的行为 |
| --- | --- | --- |
| Wiki 主站 | `src/`，`yarn dev` | 类型检查、四个 HTML 入口打包、生成路径映射 |
| Breast Guardian / Bomb Cat | [games/README.md](games/README.md) | 发布 `public/game-assets/` 中已提交的运行文件；不会自动重建游戏 |
| Virtual Laboratory | [virtual-lab/README.md](virtual-lab/README.md) | 主站嵌入官方实验室部署；不会自动构建或发布实验室 |

Bio Memory 的运行入口保留在 `public/game-assets/bio-memory/`。子项目有各自的依赖、锁文件和许可证，开发前先阅读对应 README。

## 常见修改位置

| 要修改的内容 | 入口 |
| --- | --- |
| 页面路由、导航目标 | `src/pages.ts`、`src/contents/` |
| 正文、章节、图表说明 | `src/data/` 中对应模块 |
| 页面专用交互、图表 | `src/components/wiki/features/` |
| 首页叙事、动画 | `src/components/home/`、`src/styles/home-*.css` 及相关样式 |
| 共享阅读器、加载与图片准备 | `src/components/wiki/`、`src/utils/`；遵循[页面规范](WIKI_ARCHITECTURE_SPEC.md) |
| 素材来源、上传记录 | [素材维护](docs/assets.md)、[交付索引](delivery/README.md) |

## 发布与许可

GitHub 的 `LJY-PART → main` 集成与官方 GitLab Pages 发布是独立操作。当前仓库中的官方流水线配置为 [.gitlab-ci.yml](.gitlab-ci.yml)，Cloudflare 配置为 [wrangler.json](wrangler.json)；具体边界见[部署说明](docs/deployment.md)。

主仓库采用 [CC BY 4.0](LICENSE)。第三方依赖及独立子项目保留各自的许可要求。维护时保留页面页脚中的许可证说明与官方 GitLab 仓库链接。
