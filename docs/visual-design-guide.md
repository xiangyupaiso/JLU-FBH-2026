# JLU-FBH / CirCure：给未来 iGEM 团队的 Visual Design 方法指南

简体中文 | [English](visual-design-guide.en.md) · [仓库首页](../README.md) · [文档索引](README.md)

JLU-FBH（也写作 JLUFBH）是吉林大学白求恩第一医院（First Bethune Hospital of Jilin University）的 iGEM 2026 团队。CirCure 项目围绕面向三阴性乳腺癌（TNBC）的环状 RNA（circRNA）疫苗研究展开。本指南整理其 Wiki 的视觉设计、科学传播和交互叙事方法，重点对应 **Visual Design 第 8 节：Humanistic Care & Narrative Design** 与 **第 9 节：Our Wiki Contribution**。

> **建议先打开原网页，边操作边阅读，尤其是第 8、9 节。**
>
> **[打开 Visual Design 完整交互页面 ↗](https://2026.igem.wiki/jlu-fbh/visual-design)**
>
> 原网页保留了可操作的交互组件、动态对比和默认折叠的技术细节。建议亲自点击、拖动或播放演示，并展开相关的 **Technical details**，把画面变化、设计理由和实现说明对照起来阅读。
>
> **[第 8 节：Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)** 介绍叙事思路与读者参与；**[第 9 节：Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)** 展开具体做法、迭代比较和实现细节。
>
> **不要漏掉页尾默认折叠的 [Design Folios 设计作品集 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)。** 展开 **Open the design folios · Six studies and revisions**，可以查看未采用的设计探索、历史方案和修改比较，并操作五个保留为 HTML 页面的交互演示。每个演示的 **Open in full window** 可打开独立页面；[下文列出了案例与源码](#design-folios设计作品集与历史方案)。

源码与发布记录：[GitHub 源码仓库](https://github.com/xiangyupaiso/Official-wiki) · [iGEM 官方 GitLab](https://gitlab.igem.org/2026/jlu-fbh)。

这份 Markdown 将交互页面中的方法写成可独立阅读的文本，让调研者和 AI 调研工具能够沿着“问题 → 做法 → 案例 → 源码”找到资料。它依据仓库当前页面数据整理；原始绘稿、动态比较与设计参考文献请结合 Wiki 阅读。这里的设计意图和实现案例没有建立阅读理解或学习效果的量化结论。

## 如何开始调研

- 如果你正在规划 Wiki：先读第 8 节的叙事意图，再读第 9 节的实施过程。
- 如果你负责插画与前端交接：从下面的 9.1 开始，重点看共同画布、裁切坐标和图层归属。
- 如果页面能运行但读起来费力：从 9.2、9.3 和 9.4 检查解释是否完整、停顿是否充足、路径是否清楚。
- 如果你要复用代码：先用文末源码地图找对应职责，再阅读[架构规范](../WIKI_ARCHITECTURE_SPEC.md)和[开发指南](development.md)。

## Visual Design 的九个部分

前七部分的页面数据位于 [visualDesignPage.ts](../src/data/project/visualDesignPage.ts)，第 8、9 节及其技术说明、设计参考文献位于 [visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts)。

| 部分                                                                        | 页面标题                                | 对未来团队的参考价值                                               |
| --------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| [1](https://2026.igem.wiki/jlu-fbh/visual-design#brand-identity)            | Brand Identity                          | 将研究主题、团队背景与关怀对象转化为项目标识、队徽、队旗和吉祥物。 |
| [2](https://2026.igem.wiki/jlu-fbh/visual-design#color-system)              | Cross-Module Palette Architecture       | 在共享阅读结构内区分五个模块，分开管理标题强调色与正文阅读底色。   |
| [3](https://2026.igem.wiki/jlu-fbh/visual-design#interactive-experience)    | Interactive Aesthetics & Motion         | 观察光标、水彩组件、Mol* 分子查看器和 GSAP 动画如何加入视觉体系。  |
| [4](https://2026.igem.wiki/jlu-fbh/visual-design#engineering-rigor)         | Decoupled Web Engineering Architecture  | 分离正文、资产、交互和路由装配，统一文献引用与媒体准备。           |
| [5](https://2026.igem.wiki/jlu-fbh/visual-design#core-interfaces)           | Core Interfaces & Narrative Experience  | 将加载状态、标题开场与首页故事连接起来。                           |
| [6](https://2026.igem.wiki/jlu-fbh/visual-design#subpage-illustrations)     | Wiki Subpage Illustration System        | 用共同的绘画语言组织不同主题的页面题图。                           |
| [7](https://2026.igem.wiki/jlu-fbh/visual-design#educational-games)         | Educational Games & Hands-On Experience | 查看科普游戏、虚拟实验室与主站的连接方式。                         |
| [8](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) | Humanistic Care & Narrative Design      | 从人的问题引入研究，连接不同尺度的解释，并给读者选择与参与的空间。 |
| [9](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)         | Our Wiki Contribution                   | 记录绘稿、动效、阅读、导航、收尾与迭代的具体做法和修改原因。       |

## 第 8 节提供的叙事起点

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)**

在原网页操作抗原切换、阅读控制等示例，并结合图解查看叙事如何连接到科学解释。

CirCure 从插画人物的问题 “What if it comes back?” 引入研究动机。页面将患者、临床问题、分子解释与日常生活连接起来。这句话属于为插画创作的叙事台词，引用时应说明其创作性质。

在尺度变化中，泪滴的水彩过渡到地图上的云，延续情绪与主题；RNA 环在疫苗候选、circRNA 解释和平台设计中保持可辨认的形状，帮助读者跟随同一个对象。抗原切换交互让读者比较共同骨架与可替换片段的关系。抗原 A、B、C 是概念示例，界面演示不建立靶点有效性、免疫杀伤或临床疗效的证据。

后续团队可以先写清“读者带着什么问题进入、需要理解哪几个关系、最后到哪里查看证据”，再决定场景和动效。

## 第 9 节：Our Wiki Contribution

### 9.1 绘稿与开场：Prepare the Artwork and Opening

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#artwork-and-opening)**

在原网页查看分层画稿与开场演示，并展开技术细节，了解画布选择、图层坐标和资源准备。

**问题。** 一张完整插画进入动画后，人物、背景、标注可能需要独立运动；裁切后的图层如果丢失原坐标，重组时就会错位。开场还要等待样式、字体和首场景资源准备。

**CirCure 的做法。** 按独立运动、遮挡和复用关系拆分图层；保留完整构图参考、共同画布、透明度和堆叠顺序。裁去透明边缘后，清单（manifest）继续保存图层的位置、尺寸和来源信息。对于画布 `W × H` 及裁切边界 `(x0, y0, x1, y1)`，还原位置为：

```text
left   = 100 × x0 / W %
top    = 100 × y0 / H %
width  = 100 × (x1 - x0) / W %
height = 100 × (y1 - y0) / H %
```

布局层负责还原构图，动画层控制运动，避免同一个 transform 被多个控制器同时改写。新的桌面绘稿采用 16:10 作为准备参考，并为人物、文字和重点对象留裁切余量；既有原图保留原有比例与完整版本。

加载器在应用脚本前通过 HTML/CSS 呈现准备、等待和失败状态。标题字幕全部出现后才开始阅读停顿，随后字标移到测量得到的导航位置。开场提供跳过和减少动态效果（reduced motion）的路径。

**迁移时怎么检查。** 先把静止构图与原稿对齐，再加运动；检查原先被遮挡的区域露出后是否完整。按自己项目的视口、题材和文字量选择画布比例。

### 9.2 动效与阅读节奏：Give Motion a Reading Rhythm

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#keyframes-and-reading-holds)**

在原网页操作转场、播放与选章示例，并展开技术细节，对照观察对象连续性、阅读停顿和滚动交接。

**问题。** 对象移动、说明替换与场景切换同时发生时，读者可能来不及建立关系。动画时间线有进展，也可能始终缺少一帧能读完的完整解释。

**CirCure 的做法。** 先定义可读状态（readable states）：对象可见、文字完整、构图暂时停住。再安排先后次序（staging）、速度变化（easing）与阅读停顿（reading holds）。滚动区间和属性插值的基本关系为：

```text
p = clamp((s - s0) / (s1 - s0), 0, 1)
u = E(p)
x(p) = (1 - u) × x0 + u × x1
```

`s` 是滚动位置，`s0`、`s1` 是区间边界，`p` 为归一化进度，`E` 是缓动函数，`x0`、`x1` 是属性的起止值。阅读停顿让进度继续变化而构图保持不动。滚动时间线的 duration 分配相对滚动距离；自动播放另外分配移动时间与阅读时间。两者需要分别检查。

**具体案例。** RNA 环进入平台时保留轮廓，维持对象恒常性（object constancy）；泪滴到云的水彩粒子用于关联场景。病房背景曾通过 JavaScript 反向位移抵消滚动，浏览器滚动和脚本更新的时差会造成跳动；改由原生 `position: sticky` 固定背景。另一次交接的副本残留 `1.005` 缩放，与原场景差了 0.5%，需要对齐位置、缩放、裁切和透明度。

性能处理包括复用已准备的绘画变化、集中测量、用 `requestAnimationFrame` 合并更新。读者可以暂停、选章和改变速度；手动滚动可以接管播放。

**迁移时怎么检查。** 对同一段落向下、向上、快速反转、直接选章，再改变窗口尺寸。观察完整解释能否停住、交接前后是否对齐，以及暂停后是否仍能操作。性能优化和动效时序需要各自定位原因。

### 9.3 长文版面：Make Room for Sustained Reading

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#reading-surfaces)**

在原网页查看配色与字体层级对比，并展开技术细节，结合实际版面理解阅读底色和图像边缘的处理。

**问题。** 首页的视觉密度延续到科研长文时，背景、标题、图片与正文会争夺注意力。

**CirCure 的做法。** 在进入正文时让背景色逐步退到平静的阅读底色；为标题、正文、标签和技术说明分配不同的字体角色。字体研究展示 Fraunces 与 Lexend 的搭配及大小、字重层级；本页普通图片重复使用 16 px 圆角，让照片、插画与界面研究保持相近的边缘处理。

**迁移时怎么检查。** 用实际最长的标题、图注和正文检查层级、行长与留白。第 9 节包含早期配色研究，其色彩不一定等于现行模块主题；当前主题应结合第 2 节及实际样式读取。16 px 是本页设计取值，其他图幅需要自行比较。

### 9.4 阅读路径：Keep the Route Clear

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#navigation-with-a-landmark)**

在原网页操作导航、目的地提示与丝带演示，并展开技术细节，观察展开、收起、反向操作和键盘焦点的关系。

**问题。** 导航折叠会改变控件位置，装饰性图像也可能让目的地难以辨认；查过文献后，读者还需要返回原来的论述。

**CirCure 的做法。** 首页队徽作为稳定地标，导航在完整栏与圆形入口间连续变化。中段通过滚动方向与阈值控制展开，开头和结尾配合场景位置交接。标签在背景已有空间后进入，折叠前先退出；反向操作从当前可见状态继续。当前页标记与临时悬停、焦点反馈分开表达。

正文配套目录、页内搜索和文献回链。首页目的地与 Next page 先显示明确名称，再用插画和近旁提示补充；提示预留位置，避免出现时挤动版面。篇末用留白区分下一页与机构标识，Lumi 沿绘制的丝带路径移动，小屏采用静态构图，文本链接持续可用。

**迁移时怎么检查。** 用 Tab、Enter、Escape 和触摸操作完成同一任务；检查折叠时的焦点去向、当前页识别、长页面名称、快速反转和窄屏。图标、颜色与动画之外，目的地还要有清楚的文字。

### 9.5 照片与来信：Meet the Team, Open the Letter

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#photo-reveal-craft)**

在原网页体验照片揭示和来信的打开、关闭，并展开技术细节，对照理解滚动位置、动画反转与焦点返回。

**问题。** 团队照片和长篇寄语需要在文章结束后自然出现；弹层关闭时如果丢失焦点或滚动位置，会打断阅读。

**CirCure 的做法。** 黏性场景与裁切窗口逐步揭示照片，照片缩放跟随滚动进度，反向滚动回到对应状态。信件通过按需打开的原生模态对话框（modal dialog）承载，开关动画与入口按钮保持空间联系。信纸独立滚动，关闭后焦点返回按钮，保留照片与页面位置；减少动态效果时使用简短淡入淡出。

页面说明记录了对 Wolverine Worldwide 网站的参考。沿用这段方法时，应连同[原页面的设计来源](https://2026.igem.wiki/jlu-fbh/visual-design#design-references)一起查阅和署名。

**迁移时怎么检查。** 在打开途中按 Escape，反复打开关闭，并改变窗口高度。检查键盘焦点、长信件的内部滚动、背景位置和小屏照片取景。

### 9.6 迭代记录：Refine the Details, Keep the Record

**[打开原网页：操作演示并展开细节 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-record)**

在原网页查看草图、历史版本与前后比较，并展开实现说明，沿着修改理由回看设计过程。

**问题。** 成品截图留下了结果，修改动机、失败尝试和适用条件容易丢失，后续团队就难以判断该借鉴哪一部分。

**CirCure 的做法。** 保存草图、图层、界面研究、前后比较与技术说明。复查围绕三个具体问题展开：对象能否保持可辨认、下一步是否清楚、读者能否返回。Lumi 在加载、光标、目的地和收尾中维持角色连续性，每个组件分别负责自己的状态与操作。

**迁移时怎么记录。** 每次保留“哪里难读或难用 → 原因 → 修改 → 对比 → 验证条件”。将桌面、小屏、反向滚动、快速反转、窗口变化、键盘和 reduced motion 分别记录。截图、构建成功和浏览器检查各自只能支持对应范围内的结论。

## Design Folios：设计作品集与历史方案

**[打开页尾 Design Folios，展开六组设计研究 ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-history-archive)**

这块默认折叠，入口文字是 **Open the design folios · Six studies and revisions**。六组作品按时间保存了圆环与空间开场、并行视觉方向、Human Practices 时间线、患者构图、RNA 环转场及最后的交互细节。部分想法没有进入最终 Wiki，但它们保留了值得借鉴的设计问题：导航如何介绍目的地、同一条丝带如何连接叙事与进度、时间线如何组织不同人的意见。前后对比也让读者看到方案为什么继续修改。

其中五个演示确实以 **HTML 页面**保存，包含样式、脚本或配套资源。展开作品集后可直接操作，也可用 **Open in full window** 独立体验：

| 案例与作品集入口                                                                                    | 可以观察什么                                                             | 仓库中的 HTML 入口                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [图像导航](https://2026.igem.wiki/jlu-fbh/visual-design#live-image-led-navigation)                  | 分类展开、图文目的地，以及滚动时导航的收放。                             | [archive-navigation-study.html](../archive-navigation-study.html)                                                                                                       |
| [粉色丝带与展开的标志](https://2026.igem.wiki/jlu-fbh/visual-design#live-pink-thread)               | 人物轮廓如何过渡到标志，丝带如何兼任可拖动的阅读进度标记。               | [archive-recognition-study.html](../archive-recognition-study.html)                                                                                                     |
| [三种 Human Practices 时间线](https://2026.igem.wiki/jlu-fbh/visual-design#archive-reading-studies) | 中轴交错卡片、旋转式聚焦、横向影响卡片如何分别安排日期、人物与项目变化。 | [center.html](../public/archive-hp-study/center.html)、[dial.html](../public/archive-hp-study/dial.html)、[horizontal.html](../public/archive-hp-study/horizontal.html) |

作品集的文字、图像与演示装配记录见 [history.html](../src/data/project/visual-design/history.html)。导航与丝带演示的样式、脚本位于 [archive-navigation/](../src/components/wiki/features/project/visual-design-studies/archive-navigation/) 和 [archive-recognition/](../src/components/wiki/features/project/visual-design-studies/archive-recognition/)。复用时连同入口引用的样式、脚本和资源一起追踪；历史演示的布局、配色及示例内容可能与最终页面不同。

## 源码地图

| 要研究的问题                                 | 入口                                                                                                                                                                                                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 第 1–7 节正文与第 8–9 节叙事、技术说明、文献 | [visualDesignPage.ts](../src/data/project/visualDesignPage.ts)、[visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts)                                                                                                                     |
| 页面装配与交互演示                           | [visual-design.tsx](../src/contents/visual-design.tsx)、[VisualDesignNarrativePanels.tsx](../src/components/wiki/features/project/VisualDesignNarrativePanels.tsx)、[visual-design-studies/](../src/components/wiki/features/project/visual-design-studies/) |
| 分层画稿与构图                               | [story manifest](../src/assets/home/story/manifest.json)、[supplements manifest](../src/assets/home/supplements/manifest.json)、[CircRnaArtwork.tsx](../src/components/home/CircRnaArtwork.tsx)、[图层准备脚本](../scripts/prepare-home-supplements.py)      |
| 首页装配、滚动与阅读停顿                     | [home-story.tsx](../src/contents/home-story.tsx)、[useHomeStoryAnimation.ts](../src/hooks/useHomeStoryAnimation.ts)、[homeMotion.ts](../src/hooks/homeMotion.ts)、[useHomePlayback.ts](../src/hooks/useHomePlayback.ts)                                      |
| RNA 环连续转场                               | [animateCircRnaSequence.ts](../src/hooks/animateCircRnaSequence.ts)、[createRnaRingMorph.ts](../src/hooks/createRnaRingMorph.ts)                                                                                                                             |
| 标题开场与可跳过的流程                       | [HomeIntro.tsx](../src/components/home/HomeIntro.tsx)                                                                                                                                                                                                        |
| 折叠导航与页内搜索                           | [Navbar.tsx](../src/components/Navbar.tsx)、[PageSearch.tsx](../src/components/PageSearch.tsx)                                                                                                                                                               |
| 长文阅读、目录与引用                         | [WikiRoutePage.tsx](../src/components/wiki/WikiRoutePage.tsx)、[citations/](../src/components/wiki/citations/)、[页面架构规范](../WIKI_ARCHITECTURE_SPEC.md)                                                                                                 |
| 目的地提示与丝带路径                         | [HomeExploreLinks.tsx](../src/components/home/HomeExploreLinks.tsx)、[WikiNextRecord.tsx](../src/components/wiki/WikiNextRecord.tsx)、[useWikiNextCompanion.ts](../src/hooks/useWikiNextCompanion.ts)                                                        |
| 照片揭示与来信                               | [FooterPhotoScene.tsx](../src/components/FooterPhotoScene.tsx)、[useFooterPhotoReveal.ts](../src/hooks/useFooterPhotoReveal.ts)                                                                                                                              |
| 草图、研究与历史图像                         | [visual-design 资产目录](../src/assets/visual-design/)、[页面演示与资料](../src/data/project/visual-design/)                                                                                                                                                 |

这些入口包含共享组件和相互依赖的资源。复用前先追踪 import、样式、资产清单和加载契约。图层准备脚本会生成文件，阅读代码不需要运行它。

## 复用与引用

引用设计案例时，写明 **JLU-FBH、CirCure、iGEM 2026、Visual Design 及具体小节**。引用代码时，再附仓库地址、文件路径和实际使用的提交版本（commit SHA）；引用在线页面时记录访问日期。可以采用以下格式，并补上自己的访问日期或版本：

> JLU-FBH. CirCure — Visual Design, Section 9: Our Wiki Contribution. iGEM 2026. https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft. Source repository: https://github.com/xiangyupaiso/Official-wiki.

主仓库采用 [CC BY 4.0](../LICENSE)。复用时保留署名、许可链接，并标明修改；第三方素材、文献和独立子项目继续遵守各自许可与来源要求。具体工作归属见 [Attributions](https://2026.igem.wiki/jlu-fbh/attributions)。

设计文献集中在[第 9 节 Design References](https://2026.igem.wiki/jlu-fbh/visual-design#design-references)，仓库中的条目与使用位置见 [visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts) 和 [visualDesignCitations.ts](../src/data/citations/visualDesignCitations.ts)。若要引用认知、动画或无障碍研究的结论，应阅读并引用对应原始资料，区分文献结论、CirCure 的设计意图和项目实际验证结果。

维护本指南时同步中英文版本、README 摘要与文档索引，并对照页面数据检查章节和链接。历史演示与早期研究可能采用不同布局或配色；当前行为以实际组件和样式为准。
