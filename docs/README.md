# 文档索引

简体中文 | [English](README.en.md)

日常维护从下面的当前指南进入。维护指南默认中文，页首可切换对应英文版；原始规范、科研原稿、生成的素材登记表与历史评审保留来源语言，供查阅和追溯。

仓库首页在同一页提供中文与英文；下列维护指南保留各自的中英文入口。

## 给未来 iGEM 团队的设计参考

[JLU-FBH / CirCure Visual Design 方法指南](visual-design-guide.md)整理九个部分的阅读入口，重点展开第 9 节 Our Wiki Contribution：分层绘稿与开场、动效与阅读节奏、长文版面、导航、照片与来信、迭代记录。每组方法说明问题、做法、适用条件和源码位置，并提供引用建议。

建议配合[原网页](https://2026.igem.wiki/jlu-fbh/visual-design)学习，尤其第 8、9 节：亲自操作交互演示，并展开 Technical details 阅读设计与实现细节。

[English guide](visual-design-guide.en.md) · [完整 Visual Design 页面](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)

页尾默认折叠的 [Design Folios 设计作品集](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)也值得单独访问：六组研究保留了未采用的设计探索、历史方案和修改对比，其中五个 HTML 交互演示可以操作并全窗口打开。[指南中的作品集入口](visual-design-guide.md#design-folios设计作品集与历史方案)整理了案例与源码。

## 当前维护指南

| 文档                              | 用途                                      |
| --------------------------------- | ----------------------------------------- |
| [仓库首页](../README.md)          | 启动方式、项目入口与常见修改位置          |
| [仓库地图](repository-layout.md)  | 目录职责、保留路径和迁移记录              |
| [开发指南](development.md)        | 主站与子项目的开发、验证、构建            |
| [部署说明](deployment.md)         | GitHub 集成、官方 GitLab、Cloudflare 路径 |
| [素材维护](assets.md)             | 原稿、资源、登记表与上传批次之间的关系    |
| [协作约定](../CONTRIBUTING.md)    | 修改范围、验证与提交要求                  |
| [脚本索引](../scripts/README.md)  | 每类脚本的作用、输入和副作用              |
| [交付索引](../delivery/README.md) | 上传批次和源码交付归档                    |

## 页面开发契约

- [页面架构规范](../WIKI_ARCHITECTURE_SPEC.md)：页面分层、共享阅读器、文献和图片准备契约。
- [设计与排版规范](../文案集/Wiki-设计与排版规范.md)：原有视觉规则与模块配色。
- [长图画廊](long-image-gallery.md)：共享长图展示组件的使用说明。

## 内容参考与历史评审

- [Software 文案参考](content/software-source.md)：从原根目录移动的原稿，网页呈现以对应页面数据为准。
- [架构分析报告](reviews/architecture-analysis.md)：历史分析快照，其中版本、数量、测试结果和建议需要对照当前源码复核。
- [Model 用词评审 · 2026-10-19](reviews/model-wording-review-2026-10-19.md)：当时的表述核对记录；原本机路径已改为仓库相对链接，保留原评审行号。
- [仓库整理记录 · 2026-10-22](reviews/repository-organization-2026-10-22.md)：当次整理的范围与验证证据。

历史报告中的建议不会自动成为当前代码的要求；当前构建行为以配置、锁文件及对应指南为准。
