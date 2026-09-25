# JLU-FBH iGEM 2026 Official Wiki (CirCure)

本项目为 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（iGEM）的官方 Wiki 网站前端工程。项目以 **CirCure**（基于工程化环状 RNA 的三阴性乳腺癌多靶向治疗策略）为核心主题，采用现代前端工程化方案构建。

全站基于严格的关注点分离与组件化规范，整合了**学术长文沉浸式阅读器**、**3D 生物大分子交互查看器**、**科研数据可视化看板**、**互动科普小游戏套件**以及深度定制的**品牌视觉与动态交互系统**。

---

## 一、 技术栈概览 (Tech Stack)

| 领域 | 选型 | 版本 | 说明 |
| :----------------------- | :------------------------------------------------------------------------ | :--------- | :------------------------------------------------- |
| **构建工具** | [Vite](https://vitejs.dev/) | 7.x | 极速冷启动与 HMR 热重载，原生 ES 模块支持 |
| **前端框架** | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | 19.x + 5.9 | 现代组件化架构与严格类型系统保障 |
| **路由管理** | [React Router](https://reactrouter.com/) | 7.x | 扁平化路由分流与多级导航映射，支持重定向与锚点复位 |
| **分子结构可视化** | [Mol* (Molstar)](https://molstar.org/) | 5.x | 高性能 WebGL/WebGPU 3D 生物大分子与复合物可视化 |
| **数据可视化** | [Apache ECharts](https://echarts.apache.org/) | 6.x | 实验拟合曲线、动态数据图表与统计分析看板 |
| **样式与设计系统** | 原生 CSS Variables (Design Tokens) + Bootstrap | 5.3 | 语义化设计 Token，兼顾通用栅格与沉浸式阅读器排版 |

---

## 二、 架构设计规范与核心原则 (Architecture Principles)

本项目严格贯彻 [WIKI_ARCHITECTURE_SPEC.md](./WIKI_ARCHITECTURE_SPEC.md) 架构规范，杜绝巨石文件与代码散落，核心执行以下设计铁律：

### 1. 关注点彻底分离（四件套标准模型）

* **数据层 (`src/data/[module]/[page]Page.ts`)**：纯 TypeScript 强类型对象（遵循 `WikiPageContent` 规范），负责文字、段落、章节层级与事实指标，**严禁混入任何 React JSX**。
* **资产层 (`src/data/[module]/[page]Assets.ts`)**：集中收纳单页图片、图表与矢量文件，防止在正文数据层混杂密集资源 import。
* **组件层 (`src/components/wiki/features/[module]/`)**：封装专属可视化、交互图表与微应用，通过集中映射函数对外输出。
* **路由装配层 (`src/contents/[page].tsx`)**：超薄装配入口，**代码严格控制在 20 行以内**，仅负责将阅读器模板 `WikiRoutePage`、纯数据源与组件插槽拼装在一起。

### 2. 单一真理来源（Single Source of Truth）

* **改文案**：直达 `src/data/[module]/[page]Page.ts`，单点修改；
* **改交互/图表**：直达 `src/components/wiki/features/`；
* **改宏观骨架尺寸**：唯一修改位置为 `src/styles/wiki-route-skin.css`，禁止在组件或页面 CSS 中擅自篡改外层布局基准。

---

## 三、 全站模块与页面体系 (Site Map)

全站共包含 6 大主导航板块、22 个正文内容页面：

```text
CirCure Wiki
├── Home (/)                                 # 官方门户主页
│
├── 2 Team                                   # 团队父节点（下拉菜单导航，/team 自动重定向至 /roster）
│   ├── 2.1 Roster (/roster)                 # 队员、指导老师与顾问风采
│   ├── 2.2 Attribution (/attributions)      # 官方标准工作归属与任务分工表（支持 /attribution 别名重定向）
│   └── 2.3 Activities (/activities)         # 团队建设、破冰研讨与赛季里程碑
│
├── 3 Project                                # 项目专区
│   ├── Description (/description)           # 项目立项背景、临床痛点与解决范式
│   ├── Engineering (/engineering)           # 设计-构建-测试-学习 (DBTL) 工程循环
│   ├── Results (/results)                   # 实验阶段性成果验证与数据记录
│   └── Contribution (/contribution)         # 针对后续 iGEMer 的经验与元件沉淀
│
├── 4 Wet Lab                                # 湿实验生物科学
│   ├── Experiments (/experiments)           # 实验方案设计、流程图与操作细节
│   ├── Notebook (/notebook)                 # 实验日常流水与全赛季科研记录
│   ├── Measurement (/measurement)           # 标准测量手段与多批次定性定量表征
│   ├── Alternative Platform (/alternative-platform) # 非模式底盘细胞测试验证
│   ├── Safety and Security (/safety-and-security)   # 生物安全合规、风险防范与防护规范
│   └── Protocol (/protocol)                 # 15 套标准实验操作手册 (SOP) PDF 检索预览
│
├── 5 Dry Lab                                # 干实验数据科技
│   ├── Model (/model)                       # 分子动力学模拟、结合常数计算与数学建模
│   ├── Software (/software)                 # 自主研发辅助设计工具与算法管线
│   ├── Hardware (/hardware)                 # 实验硬件装置原理、电路设计与技术规格
│   └── Games (/games)                       # 三款生命科学交互科普游戏聚合门户
│
└── 6 Engagement                             # 社会人文与公众参与
    ├── Entrepreneurship (/entrepreneurship) # 商业化落地构想、市场分析与转化蓝图
    ├── Human Practices (/human-practices)   # 深入一线 Stakeholder 走访与伦理思辨闭环
    ├── Education (/education)               # 生物科技通识教育、中小学科普与教材编写
    ├── Inclusivity (/inclusivity)           # 多元、包容性科学传播与无障碍行动
    └── Sustainability (/sustainability)     # 联合国可持续发展目标（SDG 9 / 12）量化评估
```

---

## 四、 仓库目录组织 (Directory Structure)

```text
Official-wiki/
├── public/                                  # 静态资源根目录（图标、不经构建的资源）
├── src/
│   ├── assets/                              # 本地静态资产（字体、Protocol PDF、图标矢量）
│   │   ├── protocols/                       # 15 套实验手册 PDF 原件
│   │   ├── story-nav/                       # 导航下拉菜单 WebP 精灵图
│   │   └── wiki/                            # 页面题图与配图
│   ├── components/                          # 通用组件库
│   │   ├── wiki/                            # 沉浸式阅读器核心系统
│   │   │   ├── WikiRoutePage.tsx            # 全局文章统一骨架
│   │   │   ├── WikiLineSidebar.tsx          # 侧边栏动态大纲与拖拽丝带
│   │   │   ├── WikiNextRecord.tsx           # 底部下一页卡片串联
│   │   │   └── features/                    # 各学科特性交互组件与插槽
│   │   │       ├── team/                    # Team 模块专属组件（参考队伍列表等）
│   │   │       ├── wet-lab/                 # 湿实验交互卡片（平台轨道等）
│   │   │       ├── project/                 # 项目专区交互看板
│   │   │       ├── engagement/sustainability/ # 可持续发展 19 个指标组件
│   │   │       └── Trop2ComplexViewer.tsx   # 基于 Mol* 的 3D 分子结构查看器
│   │   ├── BioMemoryGame/                   # 科普游戏 1：分子记忆翻牌
│   │   ├── BombCatGame/                     # 科普游戏 2：趣味策略猫咪
│   │   ├── BreastGuardianGame/              # 科普游戏 3：乳腺卫士微游戏
│   │   ├── Navbar.tsx                       # 响应式双态 Mega Menu 顶栏
│   │   ├── Footer.tsx                       # CC-BY-4.0 合规双模页脚
│   │   ├── BackToTop.tsx                    # 磁吸平滑回顶控件
│   │   └── PageSearch.tsx                   # 页面内 DOM 级实时关键词高亮搜索
│   ├── containers/
│   │   └── App/                             # 顶层应用入口（双模分流与全局监听）
│   ├── contents/                            # 22 个路由页面的极简装配层（< 20 行）
│   ├── data/                                # 强类型数据真理源
│   │   ├── team/                            # Roster, Attribution, Activities 数据
│   │   ├── project/                         # Description, Engineering, Results, Contribution
│   │   ├── wet-lab/                         # Experiments, Notebook, Measurement, Platform, Safety
│   │   ├── drylab/                          # Hardware 等干实验静态数据
│   │   └── engagement/                      # HP, Education, Inclusivity, Sustainability
│   ├── hooks/                               # 自定义 React Hooks（滚动监控、页面动画）
│   ├── styles/                              # 样式系统
│   │   ├── circure-tokens.css               # 全局 Design Tokens
│   │   ├── circure-cursor.css               # 原生 CSS 三态吉祥物光标
│   │   ├── circure-nav.css                  # 导航菜单与模块光晕体系
│   │   ├── wiki-route-skin.css              # 宏观尺寸真理规范
│   │   └── route-palette-[module].css       # 5 大模块独立三色主题色板
│   ├── utils/                               # 纯函数工具箱（路径映射、Slug 转换等）
│   ├── main.tsx                             # 应用挂载起点
│   └── pages.ts                             # 全局页面路由字典与层级映射源
├── .env                                     # 队伍元数据环境变量（Team ID、Team Name、Year）
├── .gitlab-ci.yml                           # iGEM 官方 GitLab CI/CD 自动化部署管道
├── eslint.config.js                         # ESLint 9 平面配置
├── package.json                             # 依赖清单与 NPM 脚本
├── tsconfig.json                            # TypeScript 编译配置
└── vite.config.ts                           # Vite 配置文件（自动基于 TEAM_NAME 注入 Base 路径）
```

---

## 五、 核心交互与工程特色 (Engineering Highlights)

1. **双模渲染分流体系 (Dual-Layout Architecture)**：
   * **沉浸式阅读器模式**：所有长文科研板块（21 个页面）统一走 `WikiRoutePage`，配备专属题图、自适应 TOC 丝带导轨大纲与页面末尾下一章流畅衔接；
   * **标准栅格模式**：门户首页走标准 Bootstrap 容器与网格体系，兼顾展示自由度。
2. **多级巨型下拉菜单系统 (Mega Menu with Team Support)**：
   * 导航栏将 Team、Project、Wet Lab、Dry Lab、Engagement 统一封装为带序号与独立光晕的折叠菜单；
   * 悬停即展示团队寄语与子板块图文卡片，移动端自动优雅降级为手风琴折叠交互。
3. **闭环式阅读体验 (Next Page Continuity)**：
   * 所有正文底部统一集成 `WikiNextRecord`，从 `Roster` 逐步引导至 `Attributions`、`Activities`，再丝滑串联至 `Description`，为评委提供连贯的学术评审链路。
4. **原生三态光标系统 (Zero-JS Cursor)**：
   * 纯 CSS 原生驱动，基于 `@media (hover: hover) and (pointer: fine)` 区分触控与精准指针；
   * 具有 Default（默认）、Active（可交互元素悬停）和 Pressing（点击按压）三种视觉反馈状态，且在移动端自动无损退回原生触控。
5. **iGEM 官方无外链交付标准 (Strict Offline Deliverable Compliance)**：
   * 所有 WebP 插图、SVG 矢量、WOFF2 字体与 15 份 Protocol PDF 均通过相对路径编译打包于本地，**零外部 CDN 请求**，确保静态归档永久有效、无网络阻断隐患。

---

## 六、 本地开发与操作指南 (Getting Started)

### 1. 依赖安装

推荐使用 **Node.js >= 20.19.0 (LTS)** 环境：

```bash
npm install
# 或使用 yarn
yarn install
```

### 2. 启动本地开发服务

```bash
npm run dev
# 或
yarn run dev
```

启动后终端将输出本地访问地址：`http://localhost:5173/jlu-fbh/`（端口可能随占用自动顺延）。

### 3. 类型安全检查与生产构建

```bash
npm run build
# 或
yarn run build
```

执行过程包含：

1. `tsc`：TypeScript 严格无报错全量编译检查；
2. `vite build`：Rollup 自动化分包、CSS 深度压缩与资产 Hash 重命名，打包产物输出至 `dist/` 目录。

### 4. 代码规范化检测

```bash
npm run lint      # 执行 ESLint 严格语法检查
npm run format    # 执行 Prettier 统一代码美化与对齐
npm run preview   # 在本地启动生产包静态服务，验证打包产物完整性
```

---

## 七、 授权与知识产权 (License)

本项目遵循 [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)（知识共享署名 4.0 国际许可协议）开源授权。
参赛队伍所有设计资料与开源代码均可在保持署名的前提下自由分发、修改与二次创作。
