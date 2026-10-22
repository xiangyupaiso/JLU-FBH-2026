# 协作约定

先读 [README](README.md)、[仓库地图](docs/repository-layout.md) 和 [页面架构规范](WIKI_ARCHITECTURE_SPEC.md)。

## 修改前

1. 用 `git status --short` 确认已有修改的归属。多人共用检出目录时，使用独立工作树（worktree）进行整理或大范围维护。
2. 明确要改的是页面正文、交互、样式、原稿、素材还是构建配置，再进入对应目录。
3. 查看目标文件的调用者。文件名包含 `archive`、`study`、`old` 或日期，均不能单独作为删除依据。

## 页面与素材

- 正文优先维护 `src/data/`；路由装配放在 `src/contents/`；交互放在对应 feature 组件。按[页面规范](WIKI_ARCHITECTURE_SPEC.md)处理新页面。
- 科研原稿、实验参数、公式、评价指标和结果不能因代码整理而改写。发现疑点时保留证据，交由内容负责人确认。
- `文案集/` 保存来源，`src/data/` 保存网页呈现，资产目录保存文件与 CDN 的对应关系。修改其中一层时核对其他层，避免双份内容各自演化。
- 新上传包统一进入 `delivery/uploads/<批次名>/`，附来源、用途、后台目标路径和清单。只有核实上传结果后才回填实际 CDN URL。
- 子项目的许可证和素材来源记录随源码保留。根目录许可证及共享页脚中的官方 GitLab 链接保持完整。
- AI 辅助维护还需阅读 [.claude/RESPONSIBLE_AI_USE.md](.claude/RESPONSIBLE_AI_USE.md)。

## 脚本与依赖

- 从仓库根目录运行主站脚本，先查 [scripts/README.md](scripts/README.md)。导入器、生成器和素材工具可能覆写文件，不要把它们当作普通检查批量运行。
- 沿用当前脚本入口；需要移动时同步检查 npm scripts、CI、相对路径、临时输出和文档示例。
- 主站使用 Yarn Classic 1.22.22；独立子项目按各自 README 和锁文件安装。依赖升级单独说明原因，不混入目录整理。
- `yarn format` 会批量改写文件。日常改动只格式化本次涉及的文件，避免无关差异。

## 提交前验证

主站改动运行：

```sh
yarn lint
yarn test:page-loading
yarn build
```

按修改范围补充[专项检查](scripts/README.md)。交互改动还需验证完整结束状态、反向操作、键盘操作、窄屏和减少动态效果（reduced motion）。

纯目录或文档整理应检查移动前后的文件内容、文档链接和构建产物。构建通过只说明工程可构建；科研结论、真实设备表现和线上部署状态需要分别验证。

## 分支与发布

当前团队使用 `LJY-PART` 集成工作，通过 Pull Request 合入 `main`。提交前查看实际差异，排除其他人的未提交工作、本地缓存和验证输出。

推送后核对 PR 的 head commit 与实际验证版本一致；合并后确认远端 `main` 包含该提交，并检查适用的 CI 状态。官方 GitLab 的同步与部署按[部署说明](docs/deployment.md)独立进行。
