# JLU-FBH iGEM 2026 Official Wiki (CirCure)

本项目为 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki 网站前端工程。

项目以 **CirCure** —— *基于工程化环状 RNA（circRNA）的多靶向三阴性乳腺癌（TNBC）疫苗平台* 为核心主题，采用现代前端工程化方案打造，兼备学术严谨性、交互探索感与艺术审美质感。

---

## 一、 技术栈与核心依赖 (Tech Stack)

| 领域 | 选型 | 版本 | 说明 |
| :----------------------- | :------------------------------------------------------------------------ | :--------- | :------------------------------------------------- |
| **构建工具** | [Vite](https://vitejs.dev/) | 7.x | 极速冷启动与 HMR 热重载，原生 ES 模块支持 |
| **前端框架** | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | 19.x + 5.9 | 现代组件化架构与严格类型系统保障 |
| **路由管理** | [React Router](https://reactrouter.com/) | 7.x | 扁平化路由分流与多级导航映射，支持重定向与锚点复位 |
| **复杂动画编排** | [GSAP](https://gsap.com/) + [@gsap/react](https://www.npmjs.com/package/@gsap/react) | 3.15.x | 工业级补间动画、时间轴编排、SVG 笔触路径与粒子物理流 |
| **分子结构可视化** | [Mol* (Molstar)](https://molstar.org/) | 5.x | 高性能 WebGL 3D 生物大分子与蛋白复合物交互查看器 |
| **数据科学可视化** | [Apache ECharts](https://echarts.apache.org/) | 6.x | 实验拟合曲线、动态数据图表与多维统计看板 |
| **UI 与设计系统** | 原生 CSS Variables (Design Tokens) + Bootstrap | 5.3 | 语义化设计 Token，兼顾通用栅格与沉浸式阅读器排版 |

---

## 二、 架构设计规范与核心原则 (Architecture Principles)

本项目遵循严格的关注点分离与组件化规范（详见 [WIKI_ARCHITECTURE_SPEC.md](./WIKI_ARCHITECTURE_SPEC.md)），杜绝巨石文件与代码散落，执行以下核心工程准则：

### 1. 关注点彻底分离（四件套标准模型）

* **数据层 (`src/data/[module]/[page]Page.ts`)**：纯 TypeScript 强类型对象（实现 `WikiPageContent` 接口规范），承载正文段落、学术章节层级与关键指标，**严禁混入任何 React JSX 标签**。
* **资产层 (`src/data/[module]/[page]Assets.ts`)**：集中收纳单页图片、图表与矢量文件，防止在正文数据层混杂密集资源 import。
* **组件层 (`src/components/wiki/features/[module]/`)**：封装专属可视化、交互图表与微应用，通过集中映射函数对外输出。
* **路由装配层 (`src/contents/[page].tsx`)**：超薄装配入口，**代码严格控制在 20 行以内**，仅负责将阅读器模板 `WikiRoutePage`、纯数据源与组件插槽拼装在一起。

### 2. 单一真理来源（Single Source of Truth）

* **改文案**：直达 `src/data/[module]/[page]Page.ts`，单点修改；
* **改交互/图表**：直达 `src/components/wiki/features/` 或对应游戏/可视化子目录；
* **改宏观骨架尺寸**：唯一修改位置为 `src/styles/wiki-route-skin.css`；
* **改模块色彩主题**：唯一修改位置为对应模块的 `src/styles/route-palette-[module].css`（只需设定主色、辅色、底色三基准色）。

---

## 三、 全站模块与页面体系 (Site Map)

全站共包含 6 大主导航板块、22 个正文内容页面与 3 款交互科普小游戏：

```text
CirCure Wiki
├── Home (/)                                 # 官方门户主页（序章签字光效 + 沉浸式叙事画卷）
│
├── 01 Team                                  # 团队专区（下拉菜单导航，/team 自动重定向至 /roster）
│   ├── 01.1 Roster (/roster)                # 队员、指导老师与顾问风采展示
│   ├── 01.2 Attribution (/attributions)     # 官方标准工作归属与任务分工表（支持 /attribution 别名重定向）
│   └── 01.3 Activities (/activities)        # 团队建设、破冰研讨与赛季里程碑记录
│
├── 02 Project                               # 项目专区
│   ├── 02.1 Description (/description)      # 项目立项背景、临床痛点与解决范式
│   ├── 02.2 Engineering (/engineering)      # 设计-构建-测试-学习 (DBTL) 工程循环
│   ├── 02.3 Results (/results)              # 实验阶段性成果验证与数据记录
│   └── 02.4 Contribution (/contribution)    # 针对后续 iGEM 团队的经验与元件沉淀
│
├── 03 Wet Lab                               # 湿实验生物科学
│   ├── 03.1 Experiments (/experiments)      # 实验方案设计、流程图与操作细节
│   ├── 03.2 Notebook (/notebook)            # 实验日常流水与全赛季科研记录
│   ├── 03.3 Measurement (/measurement)      # 标准测量手段与多批次定性定量表征
│   ├── 03.4 Alternative Platform (/alternative-platform) # 非模式底盘细胞测试验证
│   └── 03.5 Safety and Security (/safety-and-security)   # 生物安全合规、风险防范与防护规范
│
├── 04 Dry Lab                               # 干实验数据科技
│   ├── 04.1 Model (/model)                  # 分子动力学模拟、结合常数计算与数学建模
│   ├── 04.2 Software (/software)            # 自主研发辅助设计工具与算法管线
│   ├── 04.3 Hardware (/hardware)            # 实验硬件装置原理、电路设计与技术规格
│   └── 04.4 Games (/games)                  # 三款生命科学交互科普游戏聚合门户
│
└── 05 Engagement                            # 社会人文与公众参与
    ├── 05.1 Entrepreneurship (/entrepreneurship) # 商业化落地构想、市场分析与转化蓝图
    ├── 05.2 Human Practices (/human-practices)   # 深入一线 Stakeholder 走访与伦理思辨闭环
    ├── 05.3 Education (/education)               # 生物科技通识教育、中小学科普与教材编写
    ├── 05.4 Inclusivity (/inclusivity)           # 多元、包容性科学传播与无障碍行动
    └── 05.5 Sustainability (/sustainability)     # 联合国可持续发展目标（SDG 9 / 12）量化评估
```

---

## 四、 核心交互与工程特色 (Engineering Highlights)

### 1. 沉浸式开场序章与叙事画卷 (Home Intro & Scroll Story)
* **光影签名开场**：采用 HTML5 Canvas 结合物理粒子引擎与 GSAP 时间轴，模拟烟花笔刷在全屏暗场中书写 "CirCure" 动态徽标，伴随星火微粒迸发与聚光闪烁，最终自然收束进顶栏导航。
* **叙事滚动长卷 (Scroll-Driven Narrative)**：突破传统静态主页模式，构建 TNBC 全景探索交互地图（TNBC Map）、抗原受体切换器（Antigen Switch）与 circRNA 空间闭环拓扑动画，引导评审在滚动浏览中探索完整科学故事。

### 2. 手绘艺术题图与智能排版 (Artistic Hero & Layout Engine)
* **纯净艺术 Hero 体系**：核心干湿实验页面采用定制的 16:9 手绘插画大图，将学科主题以清新拟人化的生物视觉呈现。
* **智能视觉隐匿 (`hideHeroCopy`)**：当插画本身已内嵌艺术字标题时，自动屏蔽首屏浮层文本叠加，呈现纯粹饱满的插画；同时在 DOM 底层保留隐藏的语义化 `h1`（`.wiki-hero__sr-only`），完美兼顾视觉美感与 a11y 无障碍/SEO 评审规范。

### 3. 学术长文沉浸式阅读器 (Manuscript Reader System)
* **动态丝带 TOC 侧边栏 (`WikiLineSidebar`)**：实时监听当前视口激活的章节与小节，动态高亮显示，提供平滑点击跳转与丝带指示器。
* **闭环下一章衔接 (`WikiNextRecord`)**：正文结尾统一配备沉浸式递进卡片，指引评委顺畅阅读下一个关联章节。
* **独立三色主题体系**：Team（暖茶金）、Project（青翠竹绿）、Wet Lab（晴天水蓝）、Dry Lab（数理薄荷绿）、Engagement（柔粉珊瑚），仅需定义 3 个颜色 Token 即可自动推导全套衍生色。

### 4. 交互式科普小游戏套件 (Sci-Comm Games)
* 在 `/games` 聚合门户中内置 3 款原生前端游戏：
  * **Breast Guardian**（乳腺卫士防御微游戏）
  * **Bomb Cat**（趣味策略解谜）
  * **Bio Memory**（生物大分子结构翻牌记忆）

### 5. 分子三维交互观测站 (Mol* 3D Viewer)
* 在 Model 页面中无缝集成 Mol*（Molstar）WebGL 引擎，支持实时旋转、缩放、测量与高亮展示 Trop2 复合体空间构象。

### 6. iGEM 官方无外链交付标准 (Strict Offline Deliverable Compliance)
* 所有 WebP 插图、SVG 矢量与 WOFF2 字体均打包存储于本地，**零外部 CDN 请求**，确保归档静态包在全球各地评审网络环境下均可离线瞬时加载。
* 原生纯 CSS 三态光标系统（Default / Active / Pressing），触控设备自动无缝降级。

---

## 五、 仓库目录组织 (Directory Structure)

```text
Official-wiki/
├── public/                                  # 静态资源根目录（图标、不受构建影响的文件）
├── src/
│   ├── assets/                              # 静态图片资产（分模块管理，包含 WebP、JPG、PNG）
│   │   ├── home/                            # 首页专属动画与图解资产
│   │   ├── story-nav/                       # 导航下拉菜单 WebP 纹理与精灵图
│   │   └── wiki/                            # 学术页面插画与图表
│   │       ├── dry-lab-heroes/              # Dry Lab 模块高分辨率 Hero 题图
│   │       ├── wet-lab-heroes/              # Wet Lab 模块高分辨率 Hero 题图
│   │       ├── project-heroes/              # Project 模块渐变艺术题图
│   │       └── engagement-heroes/           # Engagement 模块水彩艺术题图
│   ├── components/                          # 通用及业务组件
│   │   ├── home/                            # 首页专属叙事与开场组件（HomeIntro 等）
│   │   ├── wiki/                            # 学术阅读器核心骨架
│   │   │   ├── WikiRoutePage.tsx            # 全局文章骨架装配器
│   │   │   ├── WikiLineSidebar.tsx          # 侧边栏动态大纲与拖拽丝带
│   │   │   ├── WikiNextRecord.tsx           # 底部下一页卡片
│   │   │   ├── dryLabHeroAssets.ts          # Dry Lab 题图资产路由映射器
│   │   │   ├── wetLabHeroAssets.ts          # Wet Lab 题图资产路由映射器
│   │   │   └── features/                    # 各学科交互卡片与插槽组件
│   │   ├── BioMemoryGame/                   # 科普游戏 1：分子记忆翻牌
│   │   ├── BombCatGame/                     # 科普游戏 2：趣味策略猫咪
│   │   ├── BreastGuardianGame/              # 科普游戏 3：乳腺卫士微游戏
│   │   ├── Navbar.tsx                       # 响应式双态 Mega Menu 顶栏
│   │   ├── Footer.tsx                       # CC-BY-4.0 合规双模页脚
│   │   ├── BackToTop.tsx                    # 磁吸平滑回顶控件
│   │   └── PageSearch.tsx                   # 页面内关键词高亮检索组件
│   ├── containers/
│   │   └── App/                             # 顶层应用入口（双模分流与全局监听）
│   ├── contents/                            # 22 个路由页面的极简装配层（< 20 行）
│   ├── data/                                # 强类型数据真理源（文字、引用、章节定义）
│   │   ├── team/                            # Roster, Attribution, Activities 数据
│   │   ├── project/                         # Description, Engineering, Results, Contribution 数据
│   │   ├── wet-lab/                         # Experiments, Notebook, Measurement, Platform, Safety 数据
│   │   ├── drylab/                          # Model, Software, Hardware 数据
│   │   └── engagement/                      # HP, Education, Inclusivity, Sustainability 数据
│   ├── hooks/                               # 自定义 React Hooks（滚动监控、GSAP 动画编排）
│   ├── styles/                              # 样式系统（Token、阅读器微观样式、模块主题色板）
│   ├── utils/                               # 纯函数工具箱（路径映射、Slug 转换等）
│   ├── main.tsx                             # 应用挂载起点
│   └── pages.ts                             # 全局页面路由字典与层级映射源
├── .env                                     # 队伍元数据环境变量（Team ID、Team Name、Year）
├── .gitlab-ci.yml                           # iGEM 官方 GitLab CI/CD 自动化构建发布管道
├── eslint.config.js                         # ESLint 9 平面语法配置
├── package.json                             # 依赖清单与脚本定义
├── tsconfig.json                            # TypeScript 编译配置
└── vite.config.ts                           # Vite 配置文件（自动基于 TEAM_NAME 注入 Base 路径）
```

---

## 六、 本地开发与操作指南 (Getting Started)

### 1. 环境准备与依赖安装

推荐使用 **Node.js >= 20.19.0 (LTS)** 环境：

```bash
# 使用 npm 安装依赖
npm install

# 或使用 yarn 安装依赖
yarn install
```

### 2. 启动本地开发服务器

```bash
npm run dev
# 或
yarn dev
```

启动后终端将输出本地访问地址：`http://localhost:5173/jlu-fbh/`（端口可能随占用自动顺延）。

### 3. 类型安全检查与生产构建

```bash
npm run build
# 或
yarn build
```

执行过程包含：
1. `tsc`：TypeScript 全量严格类型与语法推导检查；
2. `vite build`：Rollup 自动化分包、CSS 深度压缩与资产 Hash 重命名，产物输出至 `dist/` 目录。

### 4. 代码规范化检测与预览

```bash
npm run lint      # 执行 ESLint 严格语法检查
npm run format    # 执行 Prettier 统一代码美化与对齐
npm run preview   # 在本地启动生产包静态服务，验证打包产物完整性
```

---

## 七、 持续集成与部署 (CI/CD)

项目配置了完整的 `.gitlab-ci.yml` 自动化流水线，深度兼容 iGEM 官方 GitLab 部署规范：

```yaml
stages:
  - build
  - deploy
```

每次向 `main` 分支推送代码时，GitLab Runner 将自动执行 `yarn install` 与 `yarn build`，并将打包输出的静态产物部署至官方 Wiki 托管服务器（GitLab Pages）。

---

## 八、 授权与知识产权 (License)

本项目遵循 [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)（知识共享署名 4.0 国际许可协议）开源授权。

参赛队伍所有设计资料与开源代码均可在保持署名的前提下自由分发、修改与二次创作。
