# Wet Lab 共享模板迁移

## 改写前排查（2026-09-18）

基准取自本次任务开始时的工作区，而非 Git HEAD；保留工作区已有修改。

- 完整内容清单：`.qa6/wetlab-template/baseline/CONTENT-BASELINE.md`。
- 原始内容字段、初始图表 HTML、15 份手册信息：同目录 `content.json`。
- 原源码快照及文件校验值：同目录 `source/`、`source-sha256.json`。
- 6 个路由，16 个章节，56 个折叠条目；14 种 Wet Lab 图表组件加 1 个 Library 组件。

## 范围与模板

`src/pages.ts` 中 Wet Lab 是导航分组，没有单独 `/wet-lab` 页面。6 个页面均使用旧 `WikiPage`，没有已接入 `WikiRoutePage` 的 Wet Lab 页面。

| 路由 | 入口 | 当前模板 | 内容来源 |
| --- | --- | --- | --- |
| /experiments | Experiments | WikiPage | wetLabPages.ts / experimentsPage |
| /notebook | Notebook | WikiPage | wetLabPages.ts / notebookPage |
| /measurement | Measurement | WikiPage | wetLabPages.ts / measurementPage |
| /alternative-platform | Alternative Platform | WikiPage | wetLabPages.ts / alternativePlatformPage |
| /safety-and-security | Safety and Security | WikiPage | wetLabPages.ts / safetyPage |
| /protocol | Protocol Library | WikiPage + hideOutline | protocolPages.ts / protocolPage |

共享模板基准为 Project、Model、Software 使用的 `WikiRoutePage.tsx`，不是旧 `WikiPage.tsx`。其结构为 hero → wiki-reader-track / wiki-record → WikiNextRecord；正文框为 route-frame / route-frame__scroll。公共目录为 WikiLineSidebar，公共回顶为 BackToTop，Navbar / Footer 由 App 挂载。

模板从 `wiki-route-skin.css` 获取结构、排版、间距、装饰、响应式和主题衍生色。模块色板注入 `--route-main`、`--route-soft`、`--route-base` 和相对路径的 `--route-frame-image`。滚动使用 `useRouteReaderScroll`，其底层仍调用 `useWetLabScrollRoute`。

## 独立实现与共享模板差异、处理方案

| 差异 | 旧 Wet Lab | 共享模板与处理 |
| --- | --- | --- |
| 页面壳 | WikiPage，带 category 分支 | 6 个入口接入 WikiRoutePage |
| 样式 | wetlab-pastel.css 自有结构与响应式 | 使用 wiki-route-skin.css |
| 正文框 | wet-frame / wet-frame__scroll | 使用 route-frame / route-frame__scroll |
| Hero | --wet-hero-image 自动解析 | 原 hero 资源通过 heroImage 注入，图片不变 |
| 色板 | --wet-blue / --wet-mint / --wet-yellow | 原值映射为 main #b4dff0 / soft #e0f5ee / base #fdf5d1；边框仍为 wet.png |
| 导航栏 | is-wet-lab-page 独立配色 | 接入 is-route-page 与 Wet Lab 三色板 |
| 页脚 | footer--wet-lab | 使用 footer--route，文案不变 |
| 章节 kicker | 默认隐藏，Library showKicker 显示 | 按用户确认，完全跟随共享模板显示规则 |
| 折叠项 label/status | 隐藏 | 按用户确认，完全跟随共享模板显示规则 |
| section.note.label | 隐藏 | 按用户确认，完全跟随共享模板显示规则；CSS 隐藏与否也照模板 |
| 正文、图表与交互 | wetLabPages + WetLabFeatures | 保留数据与组件，使用既有 features 插槽；不新增组件类型 |
| Next-page | WikiNextRecord | 同一个组件和相同数据 |
| Library 无目录 | hideOutline | 模板已有此参数，直接复用 |
| Library 满宽 | protocol-bookcase.css 单独补齐列/行 | 已向用户确认；共享 `wiki-route-skin.css` 增加仅对 `hideOutline` 生效的通用满宽变体，Library 继续保留卡片自身网格规则 |

## 已确认内容规则

用户确认：“其他页面如果有 wet lab就有 其他页面不可见的话就也不可见”。因此不新增特殊文案显示开关，不修改数据。旧实现未渲染但数据中已有的字段，按共享模板规则渲染。这是显示规则差异，应与真正的内容增删分开核对。

## 清理边界

- 已清理：旧 WikiPage.tsx、wetlab-pastel.css。清理前已对源码和工作区引用做全文检索，未发现页面引用。
- WetLabHeroVisual.tsx 目前搜索不到调用点；验收后可作为候选死组件清理，保留实际使用的 wetLabHeroAssets.ts 与图片。
- **必须保留** useWetLabScrollRoute.ts：共享 useRouteReaderScroll 仍依赖它。
- **必须保留** wetlab-editorial.css、wiki-rebuild.css：共享模板仍导入；不能按文件名整体删除。
- **必须保留** WetLabFeatures、ProtocolBookcase、PdfViewerModal、手册与 hero 图片：均承载实际内容或交互。
- protocol-bookcase.css 是 Library 的内容组件样式；其布局变体与主题变量接入方式需依确认方案处理。

## 当前状态

已完成源码排查、基准保存、模板迁移和死实现清理。TypeScript 检查、目标文件 ESLint 检查和 Vite 构建均通过；构建仅保留原有若干 hero 相对路径提示。按任务要求不再进行逐页内容比对或浏览器视觉回归。
