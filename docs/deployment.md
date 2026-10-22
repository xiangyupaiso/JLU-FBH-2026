# 部署说明

简体中文 | [English](deployment.en.md)

本项目使用 GitHub 进行团队协作，使用官方 GitLab 交付源码并发布 Wiki，使用 Cloudflare 提供构建预览。虚拟实验室作为独立应用部署在 iGEM 基础设施上。

## 团队协作与发布入口

| 平台                                                | 职责                                       |
| --------------------------------------------------- | ------------------------------------------ |
| GitHub                                              | 日常开发、Pull Request、代码评审与版本协作 |
| [官方 GitLab](https://gitlab.igem.org/2026/jlu-fbh) | iGEM Wiki 源码交付、流水线构建与发布       |
| [在线 Wiki](https://2026.igem.wiki/jlu-fbh/)        | 面向评审和公众的正式网站                   |
| [开发预览版](https://wiki.dayquay.com/jlu-fbh/)       | Cloudflare 构建预览，包含尚未同步到官方 GitLab 的开发内容 |

各协作者在自己的工作分支或功能分支开发，通过 Pull Request 评审后合入 `main`。分支名按协作者或小组的现有约定使用，`main` 作为共享集成分支。

准备发布时，由发布负责人将审核通过的版本同步到官方 GitLab 的默认分支，随后由 GitLab Pages 流水线构建并发布。

## 预览版与官方 GitLab 的内容差异

核对日期：2026-10-22（北京时间）。官方 GitLab `main` 为 [`080a3f54`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/080a3f5484b61482d9e0f26d7b25ff17db13a991)；比较基于本次恢复后的 GitHub 源码。下表记录源码差异，dayquay 的实际部署可能滞后于 GitHub，不能仅凭域名认定某次提交已经上线。

| 范围 | GitHub 开发版的补充 | 维护入口 |
| --- | --- | --- |
| Visual Design | 11 张初始草稿、0 / 8 / 16 / 32 px 圆角对比、Next page 留白全幅截图、丝带展示和历史设计资产 | [正文](../src/data/project/visualDesignNarrative.ts)、[展示组件](../src/components/wiki/features/project/VisualDesignNarrativePanels.tsx)、[留白图示](../src/components/wiki/features/project/DesignExplanationFigures.tsx) |
| Bomb Cat | 创建/加入房间、大厅、连接状态与 PeerJS 联机逻辑；当前入口使用重建后的游戏产物 | [游戏界面](../games/bomb-cat/src/CircRnaGame.tsx)、[网络逻辑](../games/bomb-cat/src/hooks/usePeerNetwork.ts)、[源码与产物来源](../games/SOURCE_PROVENANCE.json) |
| Sustainability Tracker | 恢复项目人数、来源档案与反馈条目的不同口径，群体人数和来源元数据，以及 SET / DEVELOP / GROW 和长期路径说明；保留现有键盘与对话框修复 | [实际嵌入的团队记录](../src/assets/wiki/sustainability/tracker/team_example.html)、[接入映射](../src/data/engagement/sustainability/sustainabilityTrackerAssets.ts) |
| 素材与工程资料 | 本地素材、稿件、来源记录、双语文档，以及独立应用的完整可构建源码；文件存在不表示页面会额外加载它们 | [素材说明](assets.md)、[游戏源码](../games/README.md)、[实验室源码](../virtual-lab/README.md) |
| 发布配置 | GitHub 保留 Cloudflare 预览与本地资料，不启用 GitLab 纯源码发布中的全站 CSP 注入和本地媒体排除检查 | [.gitlab-ci.yml](../.gitlab-ci.yml)、[wrangler.json](../wrangler.json)、[发布资产检查](../scripts/verify-publish-assets.mjs) |

同日实测 dayquay 和正式站的 Visual Design 页面：预览版提供四种圆角比较入口、11 张初始草稿入口，以及 “A screen for the next step, then the logos” 留白展示；正式站没有这些补充。上表其他项目按源码核对，不代表所有线上功能均已逐一验收。

### Sustainability 回退与恢复来源

2026-10-21 **22:49:56** 的 [`cfc022df`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/cfc022dff8ad12f53a339bcff72ebe6257988cd4) 将整棵文件树恢复至 **21:56:14** 的 [`2999c1ac`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/2999c1acd3f217c818d13f2afb4df7d9c4784714)，覆盖了后来合并的内容。Tracker 新版本包含在 **22:25:13** 的 [`0ce850e2`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/0ce850e23c063b7644b878ecdfc40e8084849951) 中，并保留在回退前 [`050b25bd`](https://gitlab.igem.org/2026/jlu-fbh/-/commit/050b25bd797cfce4831a900ca81edb716430b64b) 的文件中。

这次从回退前的 `team_example.html` 恢复内容与统计展示，接回 Sustainability 实际使用的文件。仓库中的 `circure-tracker-records.html` 虽已保存同一批新内容，页面此前仍引用回退后的 `team_example.html`，因此仅保留那个副本无法恢复页面。

恢复后的记录沿用原版的 **66 位项目参与者（含 32 位全球发展青年）、38 份来源档案、78 条反馈、10 项框架 SDG**。群体档案和跨 SDG 汇总不作为新增个人；SET 对应 3 / 9 / 12，DEVELOP 对应 4 / 17，GROW 对应 1 / 5 / 8 / 10 / 13。GROW 为待验证的长期路径；SDG 1 没有单独标记的反馈条目。这里恢复已有记录和展示口径，没有重新开展人数审计或证明长期影响。

本次保留当前版本的键盘操作、焦点约束与返回、表单标签及图片尺寸，也不恢复那次提交中的全站字体调整。GitLab 与正式站维持原发布版本，是否再次同步由发布负责人决定。

## 官方 Wiki：GitLab Pages

配置在 [.gitlab-ci.yml](../.gitlab-ci.yml)：

1. 使用 `node:22` 和 `yarn.lock` 缓存。
2. 执行 `yarn install --frozen-lockfile`。
3. 依次运行 `yarn lint`、`yarn test:page-loading`、`yarn build`。
4. 将 `dist/.` 复制到 CI 工作目录的 `public/`，生成 SPA 回退规则并发布该目录。

规则只在 GitLab 默认分支运行。GitLab 的复制发生在 CI 工作目录，不应把该目录混入本机源码提交。

发布版本应包含所需源码和来源记录，图片、字体、视频等资源按官方托管方式接入。开发缓存、临时报告和本地交付目录按发布清单处理；素材维护流程见[素材说明](assets.md)。

## Cloudflare

[wrangler.json](../wrangler.json) 指向 `./dist`，启用单页应用回退。`package.json` 固定 Yarn Classic 版本，避免平台改用不兼容的包管理器。

`scripts/postbuild-slug.mjs` 根据 Vite 实际 base 生成 `_redirects`，将 `/jlu-fbh/` 映射到单份构建产物。正常情况下保留一份 `dist/`，无需手动复制出 `dist/jlu-fbh/`。

脚本还生成 `.assetsignore`，在 Cloudflare 上传时排除超过平台单文件限制的资源。被排除的资源应通过对应的官方 CDN 地址提供，预览时检查页面引用与加载结果。

Cloudflare 项目的构建命令、触发分支和访问设置由维护者在平台中管理；仓库中的 `wrangler.json` 和构建脚本负责产物目录与路径适配。

## 四个 HTML 入口

当前 Vite 配置同时构建：

- `index.html`
- `visual-design-study.html`
- `archive-navigation-study.html`
- `archive-recognition-study.html`

后三者服务于设计展示或历史交互研究，仍在当前构建图中。调整名称与目录时同步更新构建入口、引用和页面集成。

## 子项目与其他托管

- 游戏源码的构建不会自动覆盖主站已提交的游戏运行文件。
- 虚拟实验室在官方独立软件仓库部署，当前 Wiki 保存其源码并通过 iframe 接入。详见 [实验室 README](../virtual-lab/README.md)。
- GitHub Pages 不读取 Cloudflare 的 `_redirects`；若另行部署，需核对挂载路径与 SPA 回退。

发布前执行[开发指南](development.md)中的工程检查，发布后检查首页、主要正文页、深层路由、静态资源和 iframe 入口。
