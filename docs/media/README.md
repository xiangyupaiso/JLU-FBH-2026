# README 展示素材

简体中文 | [English](README.en.md)

这些素材用于仓库 README 的项目展示，网站运行代码继续使用原有素材与构建入口。

`readme-lumi.png` 用于README 中英文段落 项目概览后的吉祥物介绍，来自 Visual Design 页面现用的 [Lumi 圆形徽章](https://static.igem.wiki/teams/6056/wiki/files/pages/project/art/lumi-circle.avif)（2026-10-22 获取）。将 AVIF 解码后无损转存为 PNG，保留 1853 × 1853 尺寸、颜色和白色底板；README 以 140 × 140 显示，点击可阅读 Lumi 的设计说明。

| 文件                                                | 来源与用途                                                                                                                                            |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `readme-language-zh.svg` / `readme-language-en.svg` | 同页语言定位按钮，沿用原紫色圆角与箭头；README 中以 112px 宽度并排呈现。                                                                              |
| `readme-visit-wiki-zh.svg` / `readme-visit-wiki-en.svg` | README 中英文段落的官方 Wiki 主入口按钮，沿用语言入口的品牌紫色；静态 SVG，由外层链接负责跳转，无脚本或外部资源。 |
| `readme-badge-*.svg`                                | 项目元信息：iGEM 2026、React 19.2、TypeScript 5.9、Vite 7.3、CC BY 4.0。版本系列来自锁文件，许可证来自 `LICENSE`；不表示构建或科研验证状态。          |
| `readme-team-marks.svg`                             | JLU-FBH 队徽与 iGEM 标识，原图来自 `src/assets/jlu-fbh-crest.png` 与 `src/assets/partners/sponsor-igem.png`。                                         |
| `readme-institutions.svg`                           | 复用官网页脚的吉林大学校徽与双语字标、白求恩第一医院印章与第一临床医学院字标；两列统一徽章尺寸与字标中心线；来源为 `src/assets/partners/` 和 `src/assets/footer/`。                           |
| `readme-acknowledgements.svg`                       | 复用 `src/data/footer.ts` 中对应科研平台和工具的现有本地标识；来源为 `src/assets/partners/`。                                                         |
| `circure-cover.svg`                                 | 历史 README 横幅，保留作设计参考；当前入口使用独立 CirCure 字标。                                                                                     |
| `circure-wordmark.svg`                              | 复用 `src/data/homeIntroWordmark.ts` 中的七个 CirCure 字形轮廓与 viewBox；仅为文档设置静态品牌色。原轮廓基于 Kalam Regular（SIL OFL）。               |
| `wiki-circrna.jpg`                                  | 2026-10-22 从[官方 Wiki](https://2026.igem.wiki/jlu-fbh/)的 “Why circular RNA?” 场景截取，尺寸为 1265 × 712；保留浏览器截图原始像素。画面是概念图解。 |

实验动物中心标识来自[官网页脚现用素材](https://static.igem.wiki/teams/6056/wiki/files/pages/shared/laboratory-animal-center-logo.avif)（2026-10-22 核对），由 AVIF 无损转存为 PNG 后嵌入 `readme-acknowledgements.svg`，与公共技术平台、转化医学研究院并列于首行。

中英文 README 共用同一组图片。更新画面时使用真实页面或已有项目素材，并同步图像说明和来源记录。

标识面板仅使用 SVG 编排与白色底板：已有原图以原始字节嵌入，实验动物中心标识采用上述 PNG 转存；保留颜色、轮廓和比例，保证浅色与深色主题下均可阅读。面板内的标识名称在 README 正文中同时提供。
