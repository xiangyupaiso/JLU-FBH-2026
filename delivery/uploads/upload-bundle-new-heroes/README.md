# 新版 Visual Design 与 Human Practices 画布高清抗锯齿导出包

包含 2 张高分辨率 WebP 与 PNG 图（通过欧几里得距离场 EDT 与矢量轮廓重构消除阶梯硬锯齿，边缘圆润光滑，单张体积远低于 1.5MB 限制）。

| 页面对应 | PSD 来源文件 | 字体更新 | 导出文件名 | 分辨率 | WebP 体积 | 特点/算法处理 |
| --- | --- | --- | --- | --- | --- | --- |
| **Visual Design** | `313.psd` | `Visual Design`（首字母均大写） | `project-visual-design-hero.webp` / `.png` | 2560 × 1440 | 107.6 KB | 分离浅黄文字内芯与深绿描边，SDF 亚像素平滑消除阶梯锯齿 |
| **Human Practices** | `未命名画布(2).psd` | `Human Practices`（首字母均大写） | `engagement-human-practices-hero.webp` / `.png` | 2560 × 1440 | 144.7 KB | 基于 PSD 矢量文本核心执行欧氏距离场平滑抗锯齿外扩描边，边缘达到矢量级丝滑 |

## 保存位置

本批次于 2026-10-22 移入 `delivery/uploads/upload-bundle-new-heroes/`，不再依赖作者电脑上的 Windows 绝对路径。

上传副本位于本目录的 `按照iGEM后台上传层级_upload-by-folder/files/pages/hero/`。根目录中的对应文件及原有映射保留，后台目标仍为 `files/pages/hero/`。

上面的导出参数和 PSD 名称为原有记录；本轮没有重新导出或上传素材，实际 CDN 状态需另行核实。
