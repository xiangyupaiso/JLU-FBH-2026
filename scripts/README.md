# 脚本索引

简体中文 | [English](README.en.md)

除独立子项目自己的工具外，以下命令均从仓库根目录运行。主站 Node 依赖按根目录锁文件安装；Python 工具所需的 Pillow、PDF 渲染器、HTML/Markdown 解析器或 Playwright 等请以脚本 import 和说明为准，避免为了执行一次导入而修改项目依赖。

现有脚本多数通过自身位置、当前工作目录或固定相对路径定位输入。日常入口保留原路径，本索引用职责分类；手动 Windows 检查已归入 `manual/`。

## 构建与日常检查

| 入口                                                               | 作用与输出                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| [postbuild-slug.mjs](postbuild-slug.mjs)                           | 构建调用；在 `dist/` 写入发布路径规则与上传排除配置    |
| [verify-page-image-loading.mjs](verify-page-image-loading.mjs)     | `yarn test:page-loading` 使用的共享图片加载回归测试    |
| [verify-home-artwork-loading.mjs](verify-home-artwork-loading.mjs) | 首页图层加载与解码行为测试                             |
| [verify-page-image-queue.mjs](verify-page-image-queue.mjs)         | 图片队列测试；可能受计时器影响，单独运行并设置外层超时 |
| [verify-peertube-video.mjs](verify-peertube-video.mjs)             | PeerTube 视频集成行为测试                              |

日常必需检查：

```sh
yarn lint
yarn test:page-loading
yarn build
```

其他 Node 测试按需运行，如 `node --test scripts/verify-home-artwork-loading.mjs`。测试通过不代表已验证真实浏览器、触屏或线上服务器。

## 专项核对

这些工具可能在 `.tmp-verify/` 或临时模块中生成检查文件。它们以当前页面与原稿为输入，不能替代内容负责人确认科研结论。

| 入口                                                                             | 核对范围                                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [verify-citations.mjs](verify-citations.mjs)                                     | 文献注册表、正文引用与回链                                                     |
| [verify-design-construct.mjs](verify-design-construct.mjs)                       | 构建体查看器的几何与交互结构                                                   |
| [verify-design-render.mjs](verify-design-render.mjs)                             | Design 页渲染与 feature 接线                                                   |
| [verify-experiments-render.mjs](verify-experiments-render.mjs)                   | Experiments 原稿对应与渲染                                                     |
| [verify-hardware-faithfulness.mjs](verify-hardware-faithfulness.mjs)             | Hardware 原稿与页面内容对应                                                    |
| [verify-measurement-render.mjs](verify-measurement-render.mjs)                   | Measurement 顺序、表格、公式与引用                                             |
| [verify-results-faithfulness.mjs](verify-results-faithfulness.mjs)               | Results 原稿与页面内容对应                                                     |
| [verify-sustainability-faithfulness.mjs](verify-sustainability-faithfulness.mjs) | Sustainability 文案、章节与资源链接                                            |
| [verify-prose-heading-semantics.mjs](verify-prose-heading-semantics.mjs)         | 正文标题语义                                                                   |
| [verify-wiki-numbering.mjs](verify-wiki-numbering.mjs)                           | 共享章节编号与侧栏结构                                                         |
| [verify-rpg-runtime.py](verify-rpg-runtime.py)                                   | RPG iframe 与对话播放；需要本地服务器及 Python Playwright/Chromium             |
| [verify-publish-assets.mjs](verify-publish-assets.mjs)                           | 纯源码发布目标的二进制与内嵌媒体检查；不适用于保留原稿和素材的整个 GitHub 仓库 |

普通专项检查示例：`node scripts/verify-citations.mjs`。RPG 的服务器参数见脚本头部；带浏览器或网络依赖的检查需要另行准备运行条件。

## 资产登记、探测与分析

| 入口                                               | 副作用与条件                                                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [igem-asset-manager.mjs](igem-asset-manager.mjs)   | `scan-all` / `analyze` 会更新资产目录；`update-urls` 回填映射；`export-markdown` 重写登记表；先明确子命令 |
| [check-cdn-links.mjs](check-cdn-links.mjs)         | 网络探测并写入根目录 `cdn-dead-links.json`；`full` 扩展到源码中的 CDN URL                                 |
| [image-size.mjs](image-size.mjs)                   | 读取指定本地文件或 URL 并输出图片尺寸                                                                     |
| [measure-page-weight.mjs](measure-page-weight.mjs) | 生成临时渲染探针，统计页面 DOM 结构重量                                                                   |

资产工具未指定子命令时默认执行 `scan-all`，会写文件。不要为了查看用法直接无参数运行。实际上传与后台目标见[素材维护](../docs/assets.md)。

## 文案导入与生成

以下工具会写入页面数据或生成交互内容，适用输入可能是某个历史批次。先读脚本中的来源和输出，再决定是否运行。

| 入口                                                                     | 输入或用途                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [import-education.py](import-education.py)                               | Education 来源 Markdown → 页面章节                      |
| [import-experiments.py](import-experiments.py)                           | Experiments 原稿 → 页面；`--check` 用于比较现有输出     |
| [import-human-practices.py](import-human-practices.py)                   | 早期 Human Practices 稿件导入                           |
| [import-human-practices-current.py](import-human-practices-current.py)   | 指定 Human Practices 英文稿导入；`current` 是历史脚本名 |
| [build-human-practices-tree-copy.py](build-human-practices-tree-copy.py) | 指定访谈原稿 → 树形展示文案                             |
| [generate_software_page.py](generate_software_page.py)                   | Software 定稿目录 → 页面和相关附件处理                  |
| [extract-design-construct.py](extract-design-construct.py)               | 提取已交付 HTML 中的构建体数据                          |
| [embed-education-interactives.py](embed-education-interactives.py)       | 将 Education 外部交付交互整理到页面数据目录             |

## 素材处理与历史批次工具

这些脚本可能转换、裁剪、复制素材或改写索引。部分输入位于作者本机下载目录或仓库外的交付目录，干净克隆未必具备这些输入。

| 入口                                                                             | 输入、输出或限制                                                |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [prep-missing-uploads.mjs](prep-missing-uploads.mjs)                             | 历史缺失资源的上传准备；写入 `upload-ready/`                    |
| [prepare-alternative-platform-assets.py](prepare-alternative-platform-assets.py) | Alternative Platform 原图转换                                   |
| [prepare-design-assets.py](prepare-design-assets.py)                             | Design 原图与 EDA 报告处理                                      |
| [prepare-hardware-assets.py](prepare-hardware-assets.py)                         | Hardware 原图转换                                               |
| [prepare-results-assets.py](prepare-results-assets.py)                           | 历史 Results 转换；脚本注明原始批次已被作者移除，不能假定可重跑 |
| [prepare-education-galleries.py](prepare-education-galleries.py)                 | 仓库外 Education 照片包 → 画廊素材与索引                        |
| [prepare-education-pdf-previews.py](prepare-education-pdf-previews.py)           | Education PDF 首图预览                                          |
| [prepare-education-upload-batch.py](prepare-education-upload-batch.py)           | 将素材复制到仓库外固定的 Education 日期批次                     |
| [record-education-upload-pattern.py](record-education-upload-pattern.py)         | 按既定上传路径模式写入资产目录及登记表；推断地址需要实测        |
| [prepare-home-supplements.py](prepare-home-supplements.py)                       | 本机 Downloads 图层 → 首页素材与清单                            |
| [prepare-map-detail-crops.py](prepare-map-detail-crops.py)                       | 已指定来源和哈希的地图局部裁剪                                  |

运行前核对脚本内的输入目录、适用批次与输出位置；具体维护时按所需功能选择工具。

## 手动环境检查

[manual/test-loader-timeout.mjs](manual/test-loader-timeout.mjs) 保留了原 Windows Chrome/CDP 检查：启动开发服务器，挂起 CDN 请求，观察加载器超时行为。

从根目录执行 `node scripts/manual/test-loader-timeout.mjs`。脚本包含 Windows Chrome 路径、`yarn.cmd`、`LOCALAPPDATA` 和固定调试端口，不能直接视为跨平台自动化测试。运行会启动 Vite、Chrome 并创建临时浏览器配置，退出后需核对这些进程。
