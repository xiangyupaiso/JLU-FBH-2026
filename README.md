# JLU-FBH iGEM 2026 Official Wiki

本项目为 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（iGEM）的官方 Wiki 网站前端工程。项目基于现代前端工程化方案开发，集成了结构化文献阅读器、交互式科研数据看板、科普互动游戏以及深度定制的品牌视觉系统。

---

## 一、 技术栈概览 (Tech Stack)

| 领域 | 选型 | 说明 |
| :--- | :--- | :--- |
| **构建工具** | [Vite 7.x](https://vitejs.dev/) | 支持秒级冷启动与极速 HMR 热重载 |
| **前端框架** | [React 19.x](https://react.dev/) + [TypeScript 5.9](https://www.typescriptlang.org/) | 强类型保障与现代组件化开发 |
| **路由管理** | [React Router 7.x](https://reactrouter.com/) | 声明式前端路由与多级路径分流 |
| **样式与布局** | 原生 CSS Variables (Design Tokens) + [Bootstrap 5.3](https://getbootstrap.com/) | 语义化设计 Token，兼顾通用栅格与定制阅读器 |
| **数据可视化** | [Apache ECharts 6.1](https://echarts.apache.org/) | 模型计算拟合曲线与实验数据可视化图表 |

---

## 二、 仓库文件整体结构 (Directory Structure)

```text
Official-wiki/
├── .claude/                    # AI 辅助开发准则与行为规范
├── .qa6/                       # 质量保障与自动化检查脚本目录
├── public/                     # 原生静态公开资源（不参与 Vite 打包 Hash）
├── src/                        # 核心前端源代码
│   ├── assets/                 # 静态多媒体资源（字体、Protocol PDF、图标插画）
│   ├── components/             # 公共复用 UI 组件与特性功能卡片
│   ├── containers/             # 应用顶层根容器与全局路由骨架
│   ├── contents/               # 各路由页面装载组件（页面级入口）
│   ├── data/                   # 页面静态内容、Markdown 结构体与数据集
│   ├── hooks/                  # 滚动监听、页面动效等自定义 React Hooks
│   ├── styles/                 # 全局设计规范 Token、路由独立调色板与组件样式
│   ├── utils/                  # 路径计算、Slug 转换、数值限制等纯函数工具库
│   ├── main.tsx                # 应用启动入口（BrowserRouter 挂载）
│   ├── pages.ts                # 全站导航目录树与路由元数据定义
│   └── vite-env.d.ts           # 环境变量与 Vite 类型补充声明
├── dist/                       # 生产环境打包输出产物
├── .env                        # 队伍环境配置（Team ID、Team Name、Team Year）
├── .gitlab-ci.yml              # iGEM 官方 GitLab CI/CD 自动化部署流水线
├── eslint.config.js            # ESLint 平面配置文件
├── index.html                  # HTML5 单页挂载模板
├── package.json                # 工程依赖清单与 Scripts 脚本
├── tsconfig.json               # TypeScript 编译器配置
└── vite.config.ts              # Vite 打包配置（自动提取队伍 Slug 作为 base 路径）
```

---

## 三、 核心模块详细解析 (Core Modules)

### 1. 顶层应用骨架 (`src/containers/App/`)
* **[App.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/containers/App/App.tsx)**：
  - **双模渲染分流**：维护 `ROUTE_READER_ROUTES` 集合（包含 Wet Lab、Dry Lab、Engagement、Description、Results 等长文板块）。阅读板块走定制的深读模板 [WikiRoutePage.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/WikiRoutePage.tsx)；通用轻量页走原生 `Header` + Bootstrap `container` 栅格。
  - **全局鼠标事件监听**：监听 `mousedown`、`mouseup` 与 `blur` 事件，为 `<body>` 挂载 `is-pressing` 类，驱动三态吉祥物光标切换。
  - **路由平滑与滚动复位**：路由变更时重置窗口滚动条至顶部，保留锚点 Hash 跳转时序。

### 2. 公共组件体系 (`src/components/`)
* **导航与通用容器**：
  - **[Navbar.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/Navbar.tsx)**：多级巨型下拉菜单（Mega Menu），支持动态板块插图 Sprite 渲染与响应式折叠。
  - **[Footer.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/Footer.tsx)**：官方合规页脚（含 CC-BY-4.0 协议标识、队伍与官方仓库出链），支持阅读器沉浸模式自适应。
  - **[BackToTop.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/BackToTop.tsx)**：磁吸微动效悬浮回顶控件，根据屏幕滚动阈值平滑隐现。
  - **[PageSearch.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/PageSearch.tsx)**：全局高亮模糊搜索组件，支持正文关键词快速检索与定位。
* **互动小游戏套件 (Games)**：
  - **[BioMemoryGame/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/BioMemoryGame)**：分子生物学知识翻牌记忆卡牌游戏。
  - **[BombCatGame/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/BombCatGame)**：趣味互动策略益智小游戏。
  - **[BreastGuardianGame/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/BreastGuardianGame)**：以乳腺健康与靶向治疗为核心科普主题的守护者微游戏。
* **Wiki 沉浸式阅读器核心 (`src/components/wiki/`)**：
  - **[WikiRoutePage.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/WikiRoutePage.tsx)**：正文长文阅读器容器，负责组装文章头图、正文大纲、富文本块渲染与关联路由导航。
  - **[WikiLineSidebar.tsx](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/WikiLineSidebar.tsx)**：动态侧边导航大纲，集成可拖拽/可点击的证据丝带（`role="slider"`）实现文章段落快速跳转。
  - **[features/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/components/wiki/features)**：各学科深度定制功能插槽（如 `ModelEvidenceFeatures`、`SoftwareEvidenceFeatures`、`HumanPracticesPanels`、`PdfViewerModal` 实验手册预览等）。

### 3. 数据驱动层 (`src/data/`)
项目采用数据与视图分离架构，正文内容多以结构化 TypeScript 对象维护：
* **[drylab/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/drylab)**、**[wetLabPages.ts](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/wetLabPages.ts)**、**[projectPages.ts](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/projectPages.ts)**：以强类型结构定义文章段落、图表标注、引用文献与特色组件挂载点。
* **[hardwareMarkdown.ts](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/hardwareMarkdown.ts)**：硬件说明书的轻量解析与结构化提取。
* **[sustainabilityData.ts](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/data/sustainabilityData.ts)** 及相关 SDG 系列：联合国可持续发展目标（SDG 9 / SDG 12）量化评估模型数据。

### 4. 样式与主题系统 (`src/styles/`)
* **[circure-tokens.css](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/styles/circure-tokens.css)**：定义全站通用色盘、字体排印阶梯（Fraunces、IBM Plex Mono、Newsreader）、阴影与缓动曲线。
* **[circure-cursor.css](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/styles/circure-cursor.css)**：全局吉祥物自定义光标样式。在 `@media (hover: hover) and (pointer: fine)` 下启用：
  - 默认态（Default）：非交互文本与常规背景显示 `cursor-default.png`；
  - 交互态（Active）：链接、按钮、滑块、表单元素激活 `cursor-active.png`；
  - 按压态（Pressing）：鼠标按下时持续激活 `cursor-active.png`；
  - 移动设备优雅降级：触屏环境下自动退回系统原生触控。
* **板块独立调色板 (Route Palettes)**：
  - `route-palette-project.css`（项目专区色调）
  - `route-palette-wetlab.css`（湿实验生物科学绿色调）
  - `route-palette-drylab.css`（干实验数据科技蓝色调）
  - `route-palette-engagement.css`（社会实践与教育人文橙粉色调）
  - `route-palette-team.css`（团队专区色调）

### 5. 页面路由定义 (`src/pages.ts`)
* **[pages.ts](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/pages.ts)**：全站路由的“单一数据源”（Single Source of Truth）。包含路径映射、页面主副标题、导览描述及懒加载组件绑定。

---

## 四、 核心架构特性 (Key Highlights)

1. **双模路由架构 (Dual-Layout Architecture)**：
   长篇幅科学报告无缝使用定制的 `WikiRoutePage` 沉浸式阅读器（左侧大纲定位 + 右侧正文 + 顶层独立题图），简单功能页（如 Home 首页、NotFound 404 页）走标准 Bootstrap 容器。
2. **三态无障碍插图光标系统**：
   无需 JS Canvas 冗余计算或 rAF 循环，采用高精度纯 CSS 原生 `url(...) 13 12, auto !important`，并结合精准的交互标签与 WAI-ARIA 角色匹配，杜绝了正文外层滚动容器（`tabIndex={0}`）造成的光标误穿透问题。
3. **零外链合规设计 (iGEM Deliverable Compliance)**：
   所有多媒体资源（WebP 图集、SVG 矢量、WOFF2 字体、PDF 文档）均归置于本地 [src/assets/](file:///d:/TRAE%20SOLO%20CN/project/Official-wiki/src/assets) 并通过相对路径打包，杜绝任何外部 CDN 依赖，完全符合 iGEM 赛事官方服务器打包要求。

---

## 五、 本地开发与构建 (Workflow)

### 1. 安装依赖
```bash
# 推荐使用 Node.js >= 20.19.0 (LTS)
yarn install
```

### 2. 启动本地开发服务
```bash
yarn run dev
```
启动后访问控制台输出地址（通常为 `http://127.0.0.1:5173/jlu-fbh/` 或下一个空闲端口）。

### 3. 类型检查与打包编译
```bash
yarn run build
```
执行流程：
1. `tsc`：TypeScript 严格类型检查；
2. `vite build`：生产环境代码分包、CSS 压缩与资产静态 Hash 生成，产物输出至 `dist/`。

### 4. 代码格式化与 Lint 检查
```bash
yarn run lint      # 执行 ESLint 静态代码分析
yarn run format    # 执行 Prettier 全局格式化
```
