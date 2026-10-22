# 交付与上传归档

这里保存人工交付材料；主站构建不直接读取上传批次。

## 素材上传批次

| 批次 | 内容 | 后台目标 |
| --- | --- | --- |
| [Experiments · 2026-10-20](uploads/upload-bundle-experiments-20261020/README.md) | 实验流程及材料图、来源与哈希清单 | `files/pages/wet-lab/` |
| [新版 Hero](uploads/upload-bundle-new-heroes/README.md) | Visual Design / Human Practices 的 PNG 与 WebP 导出 | `files/pages/hero/` |
| [Visual Design · 2026-10-20](uploads/upload-bundle-visual-design-20261020/README.md) | 重传副本、URL 映射、用途审计及历史补传材料 | `files/pages/project/art/`；补传材料见批次内说明 |

批次说明与审计记录的是当时状态。本轮只移动本地目录，不执行上传，不将旧的“待传”或“已生效”视为当前探测结果。内部文件名、清单、CDN 目标和子目录层级保留。

新增上传批次放到 `uploads/<批次名>/` 并更新本索引；原稿继续保存在来源目录，网页调用继续通过对应资产映射维护。流程见[素材维护](../docs/assets.md)。

## 游戏源码交付包

[igem-2026-jlu-fbh-games-source.zip](igem-2026-jlu-fbh-games-source.zip) 是已有的源码交付快照。当前可维护、可独立构建的游戏源码位于 [games/](../games/README.md)，来源与版本比较见其中的 `SOURCE_PROVENANCE.json`。

修改当前游戏源码不会自动更新这个 ZIP；需要重新交付时单独生成、核验并说明版本。

## 原路径查询

本目录中的三个上传包原先位于仓库根目录。完整移动对照见[仓库地图](../docs/repository-layout.md)。
