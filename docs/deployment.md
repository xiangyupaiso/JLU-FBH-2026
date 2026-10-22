# 部署说明

简体中文 | [English](deployment.en.md)

本项目使用 GitHub 进行团队协作，使用官方 GitLab 交付源码并发布 Wiki，使用 Cloudflare 提供构建预览。虚拟实验室作为独立应用部署在 iGEM 基础设施上。

## 团队协作与发布入口

| 平台                                                | 职责                                       |
| --------------------------------------------------- | ------------------------------------------ |
| GitHub                                              | 日常开发、Pull Request、代码评审与版本协作 |
| [官方 GitLab](https://gitlab.igem.org/2026/jlu-fbh) | iGEM Wiki 源码交付、流水线构建与发布       |
| [在线 Wiki](https://2026.igem.wiki/jlu-fbh/)        | 面向评审和公众的正式网站                   |
| Cloudflare                                          | 主站构建与预览环境                         |

各协作者在自己的工作分支或功能分支开发，通过 Pull Request 评审后合入 `main`。分支名按协作者或小组的现有约定使用，`main` 作为共享集成分支。

准备发布时，由发布负责人将审核通过的版本同步到官方 GitLab 的默认分支，随后由 GitLab Pages 流水线构建并发布。

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
