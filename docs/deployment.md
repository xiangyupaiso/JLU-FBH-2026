# 部署说明

GitHub 集成、官方 GitLab Wiki、Cloudflare 预览与实验室部署各自独立。下面描述仓库中可见的配置；某次线上是否成功，需要查对应平台的实际结果。

## GitHub：LJY-PART → main

GitHub 保存团队协作源码。将工作推送到 `LJY-PART`，通过 Pull Request 合入 `main`，核对 head commit、差异和适用的状态检查。

当前仓库没有随源码提交的 GitHub Actions 工作流。第三方平台可能对提交附加部署检查，是否启用以平台实际配置为准。

GitHub 合并不会自动证明官方 GitLab 已同步，也不能证明某个在线环境已更新。

## 官方 Wiki：GitLab Pages

配置在 [.gitlab-ci.yml](../.gitlab-ci.yml)：

1. 使用 `node:22` 和 `yarn.lock` 缓存。
2. 执行 `yarn install --frozen-lockfile`。
3. 依次运行 `yarn lint`、`yarn test:page-loading`、`yarn build`。
4. 将 `dist/.` 复制到 CI 工作目录的 `public/`，生成 SPA 回退规则并发布该目录。

规则只在 GitLab 默认分支运行。GitLab 的复制发生在 CI 工作目录，不应把该目录混入本机源码提交。

官方 GitLab 的同步属于独立发布操作，可能有单独的素材与来源要求。不要直接把整个 GitHub 工作目录、原稿或交付归档当作 GitLab 发布包；先核对目标提交、发布范围和素材验证结果。

## Cloudflare

[wrangler.json](../wrangler.json) 指向 `./dist`，启用单页应用回退。`package.json` 固定 Yarn Classic 版本，避免平台改用不兼容的包管理器。

`scripts/postbuild-slug.mjs` 根据 Vite 实际 base 生成 `_redirects`，将 `/jlu-fbh/` 映射到单份构建产物。正常情况下保留一份 `dist/`，无需手动复制出 `dist/jlu-fbh/`。

脚本还生成 `.assetsignore`，在 Cloudflare 上传时排除超过平台单文件限制的资源。排除上传不代表页面资源仍然完整，正式发布前仍需核对实际使用的文件与 CDN URL。

Cloudflare 的线上项目、触发分支和访问保护配置不在本说明中假定为已验证状态。

## 四个 HTML 入口

当前 Vite 配置同时构建：

- `index.html`
- `visual-design-study.html`
- `archive-navigation-study.html`
- `archive-recognition-study.html`

后三者服务于设计展示或历史交互研究，仍在当前构建图中。整理名称与目录时必须更新构建入口、引用和页面集成；本轮保留这些路径。

## 子项目与其他托管

- 游戏源码的构建不会自动覆盖主站已提交的游戏运行文件。
- 虚拟实验室在官方独立软件仓库部署，当前 Wiki 保存其源码并通过 iframe 接入。详见 [实验室 README](../virtual-lab/README.md)。
- GitHub Pages 不读取 Cloudflare 的 `_redirects`；若另行部署，需核对挂载路径与 SPA 回退。

发布前执行[开发指南](development.md)中的工程检查，并核对页面访问、深层路由、静态资源和适用的 iframe 集成。发布成功与科研结论成立需要分别判断。
