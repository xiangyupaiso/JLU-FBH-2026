# JLU-FBH iGEM 2026 Official Wiki (CirCure)

本项目为 **JLU-FBH** 战队参加 2026 年国际基因工程机器大赛（International Genetically Engineered Machine Competition, iGEM）的官方 Wiki 网站前端工程。

项目以 **CirCure** —— *基于工程化环状 RNA（circRNA）的多靶向三阴性乳腺癌（TNBC）疫苗平台* 为核心主题，采用现代前端工程化方案打造，兼备学术严谨性、交互探索感与艺术审美质感。

---

## 一、 技术栈与核心依赖 (Tech Stack)

| 领域 | 选型 | 版本 | 说明 |
| :----------------------- | :------------------------------------------------------------------------ | :--------- | :------------------------------------------------- |
| **构建工具** | [Vite](https://vitejs.dev/) | 7.x | 极速冷启动与 HMR 热重载，原生 ES 模块支持 |
| **独立构建架构** | Vite + 官方 iGEM Pages iframe | 7.x | 根目录只构建 Wiki；虚拟实验室独立构建和部署，保留完整可重建源码 |
| **前端框架** | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | 19.x + 5.9 | 现代组件化架构与严格类型系统保障（覆盖主站与实验子系统） |
| **路由与状态管理** | [React Router](https://reactrouter.com/) | 7.x | 扁平化路由分流与多级导航映射，支持重定向与锚点复位 |
| **复杂动画编排** | [GSAP](https://gsap.com/) + [@gsap/react](https://www.npmjs.com/package/@gsap/react) | 3.15.x | 工业级补间动画、时间轴编排、SVG 笔触路径与粒子物理流 |
| **分子结构可视化** | [Mol* (Molstar)](https://molstar.org/) | 5.x | 按需加载分子渲染运行时，独立编译；页面保留现有查看器控制 |
| **数据科学可视化** | [Apache ECharts](https://echarts.apache.org/) | 6.x | 按需注册图表和组件，保留区间高亮、标记、图例与提示框 |
| **主站 UI 与设计系统** | 原生 CSS Variables (Design Tokens) + Bootstrap | 5.3 | 语义化设计 Token，兼顾通用栅格与沉浸式阅读器排版 |
| **实验仿真 UI 系统** | Tailwind CSS (沙箱作用域隔离) + Lucide Icons | 3.4 + 1.x | 虚拟实验室专属原子化排版系统，完全隔离不污染主站 |
| **无障碍交互原语** | [Radix UI](https://www.radix-ui.com/primitives) | 1.x | Headless Dialog / Tabs / ScrollArea 组件，保障键盘导航与 a11y 合规 |

---

## 二、 架构设计规范与核心原则 (Architecture Principles)

本项目遵循严格的关注点分离与组件化规范（详见 [WIKI_ARCHITECTURE_SPEC.md](./WIKI_ARCHITECTURE_SPEC.md)），杜绝巨石文件与代码散落，执行以下核心工程准则：

### 1. 关注点彻底分离（四件套标准模型）

* **数据层 (`src/data/[module]/[page]Page.ts`)**：纯 TypeScript 强类型对象（实现 `WikiPageContent` 接口规范），承载正文段落、学术章节层级与关键指标，**严禁混入任何 React JSX 标签**。
* **资产层 (`src/data/[module]/[page]Assets.ts`)**：集中收纳单页图片、图表与矢量文件，防止在正文数据层混杂密集资源 import。
* **组件层 (`src/components/wiki/features/[module]/`)**：封装专属可视化、交互图表与微应用，通过集中映射函数对外输出。
* **路由装配层 (`src/contents/[page].tsx`)**：超薄装配入口，**代码严格控制在 20 行以内**，仅负责将阅读器模板 `WikiRoutePage`、纯数据源与组件插槽拼装在一起。

### 2. 双工程物理沙箱与独立样式隔离 (Dual Sandbox Architecture)

* **主站与实验子应用隔离**：主 Wiki 面向学术评审，基于 Bootstrap 栅格与 CSS 语义 Token；虚拟分子生物学实验室面向高自由度交互操作，基于精密视口单位与 Tailwind CSS。
* **Iframe 容器与受控通信**：主站通过 `<iframe loading="lazy">` 嵌入虚拟实验室，利用浏览器级上下文完全屏蔽样式重置冲突（Reset Style Conflicts）。通过结构化 `window.postMessage` 协议实现全屏调出、退出返回与按键焦点复位。
* **全量按需代码分包 (Code-Splitting)**：虚拟实验室 9 大独立实验全部采用 `React.lazy` 与动态 `import()` 包装，首屏仅加载目录导航卡片，进入具体实验时毫秒级异步拉取对应实验 chunk，彻底消除大包体性能瓶颈。

### 3. 单一真理来源（Single Source of Truth）

* **改文案**：直达 `src/data/[module]/[page]Page.ts`，单点修改；
* **改交互/图表**：直达 `src/components/wiki/features/` 或对应游戏/可视化子目录；
* **改宏观骨架尺寸**：唯一修改位置为 `src/styles/wiki-route-skin.css`；
* **改模块色彩主题**：唯一修改位置为对应模块的 `src/styles/route-palette-[module].css`（只需设定主色、辅色、底色三基准色）。
* **图片加载策略**：统一使用 `WikiRoutePage` 的自动图片收集与共享加载器；交互后才出现的普通图片通过 `preloadImages` 或 `PageImagePreloads` 声明，详见 [架构规范 §4.7.1](./WIKI_ARCHITECTURE_SPEC.md#471-共享模板的图片准备契约新页面自动继承)。

---

## 三、 全站模块与页面体系 (Site Map)

全站共包含 6 大主导航板块、22 个正文内容页面、3 款交互科普小游戏与 1 套全功能虚拟分子生物学实验室：

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
│   └── 04.4 Games (/games)                  # 生命科学交互科普游戏与虚拟仿真实训门户
│       ├── Station 1: Breast Guardian RPG   # 乳腺健康防护叙事微游戏
│       ├── Station 2: Bomb Cat Card Game    # 流行病学策略卡牌对战
│       ├── Station 3: Bio Memory Match      # 生物大分子图鉴翻牌记忆
│       └── Station 4: Virtual Laboratory    # 9 大交互分子生物学实验实训平台
│
└── 05 Engagement                            # 社会人文与公众参与
    ├── 05.1 Entrepreneurship (/entrepreneurship) # 商业化落地构想、市场分析与转化蓝图
    ├── 05.2 Human Practices (/human-practices)   # 深入一线 Stakeholder 走访与伦理思辨闭环
    ├── 05.3 Education (/education)               # 生物科技通识教育、中小学科普与教材编写
    └── 05.4 Sustainability (/sustainability)     # 联合国可持续发展目标（SDG 9 / 12）量化评估
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
* **马克笔 TOC 侧边栏 (`WikiLineSidebar`)**：实时监听当前视口激活的章节与小节，当前项以正文同款马克笔底纹标记；三级标题仅在正在阅读的二级标题下展开，标题完整换行显示。
* **闭环下一章衔接 (`WikiNextRecord`)**：正文结尾统一配备沉浸式递进卡片，指引评委顺畅阅读下一个关联章节。
* **独立三色主题体系**：Team（暖茶金）、Project（青翠竹绿）、Wet Lab（晴天水蓝）、Dry Lab（数理薄荷绿）、Engagement（柔粉珊瑚），仅需定义 3 个颜色 Token 即可自动推导全套衍生色。

### 4. 虚拟分子生物学仿真实验室 (Virtual Laboratory · 9 大全流程交互实训平台)
* **工程架构**：`virtual-lab/` 保留完整源码、课程播放器和独立依赖锁文件，主站不再打包实验室。Games 通过带有 `loading="lazy"` 的 iframe 嵌入官方 iGEM Pages 部署 `https://virtual-lab-208fd4.igem.wiki/`，实验室样式与主站隔离。源码仓库位于 `https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab`；关闭消息同时验证来源域名和 iframe 窗口。
* **三大梯度能力成长曲线 (3 Tiers Progression)**：
  * **01 初级入门 (Beginner · 基础无菌操作与细胞形态观察)**：
    * **实验 1：大肠杆菌 DH5α 复苏与活化培养**（-80°C 冻存管冰上复苏、酒精灯旁无菌划线与恒温倒置培养）；
    * **实验 2：革兰氏染色与显微镜形态观察**（涂片固定、结晶紫/碘液/脱色/沙黄四步染色、油镜高倍聚焦）；
    * **实验 3：pET-28a 质粒提取与琼脂糖凝胶电泳**（碱裂解法离心取上清、离心柱纯化与水平琼脂糖电泳检测）。
  * **02 中级进阶 (Intermediate · 核心分子克隆技术管线)**：
    * **实验 4：胶回收与 GFP 目的基因片段纯化**（紫外切胶割带、溶胶溶膜、吸附柱漂洗纯化与浓度测定）；
    * **实验 5：目的基因 PCR 扩增与产物验证**（Master Mix 配制、热循环参数设定与产物琼脂糖电泳）；
    * **实验 6：质粒载体与目的片段双酶切消化**（限制性核酸内切酶体系配制、恒温水浴孵育与酶切质检）；
    * **实验 7：T4 DNA 连接酶重组质粒构建**（载体与插入片段摩尔比计算、连接反应与低温长时孵育）。
  * **03 高级验证 (Advanced · 基因表达与蛋白功能确证)**：
    * **实验 8：大肠杆菌感受态细胞制备与热激转化**（CaCl₂ 感受态制备、42°C 热激冲击与抗性平板涂布）；
    * **实验 9：菌落 PCR 阳性克隆鉴定、GFP 荧光表达与 SDS-PAGE 蛋白检测**（菌落快速 PCR 筛选、IPTG 诱导表达、荧光显微激发观察与十二烷基硫酸钠聚丙烯酰胺凝胶电泳分析）。
* **全要素仿真台套与知识面板**：配备微量移液器、恒温摇床、离心机、PCR 仪、高压电泳槽、紫外透射仪等数十种数字化器材；实时步骤指示器（StepIndicator）与高亮引导提示（Hint Card）；每个实验均配备独立的学术原理、仪器清单与试剂配方侧边栏（InfoPanel）。
* **横屏交互保护遮罩 (Landscape Guard)**：针对移动端与平板触摸交互，内置自动横屏感应与自适应视口适配层，确保复杂实验操作台的触摸精度与视觉比例完整。

### 5. 交互式科普小游戏套件 (Sci-Comm Games)
* 在 `/games` 聚合门户中内置 3 款原生前端游戏：
  * **Breast Guardian**（乳腺健康防御微游戏：涵盖青年期、成熟期与老年期的生命健康科普叙事）
  * **Bomb Cat**（趣味策略解谜：基于流行病学与阻断机制的科学策略卡牌）
  * **Bio Memory**（生物大分子结构翻牌记忆：精选抗原、核酸与蛋白三维构象图鉴）

### 6. 分子三维交互观测站 (Mol* 3D Viewer)
* 在 Model 页面中无缝集成 Mol*（Molstar）WebGL 引擎，支持实时旋转、缩放、测量与高亮展示 Trop2 复合体空间构象。

### 7. iGEM 官方无外链交付标准 (Strict Offline Deliverable Compliance)
* 所有 WebP 插图、SVG 矢量与 WOFF2 字体均打包存储于本地，**零外部 CDN 请求**，确保归档静态包在全球各地评审网络环境下均可离线瞬时加载。
* 原生纯 CSS 三态光标系统（Default / Active / Pressing），触控设备自动无缝降级。

---

## 五、 仓库目录组织 (Directory Structure)

```text
Official-wiki/
├── public/                                  # 静态资源根目录（图标、字体与不受构建影响的文件）
│   ├── assets/                              # 开发预览所需的本地资源
│   ├── game-assets/                         # 其他游戏资源
│   └── vendor/                              # D3 本地运行库
├── src/                                     # 主站源代码
│   ├── assets/                              # 静态图片资产（分模块管理，包含 WebP、JPG、PNG）
│   │   ├── home/                            # 首页专属动画与图解资产
│   │   ├── story-nav/                       # 导航下拉菜单 WebP 纹理与精灵图
│   │   └── wiki/                            # 学术页面插画与图表
│   ├── components/                          # 通用及业务组件
│   │   ├── home/                            # 首页专属叙事与开场组件（HomeIntro 等）
│   │   ├── wiki/                            # 学术阅读器核心骨架与特征组件
│   │   ├── VirtualLaboratory/               # 虚拟实验室主站 Iframe 沙箱集成容器
│   │   ├── BioMemoryGame/                   # 科普游戏 1：分子记忆翻牌
│   │   ├── BombCatGame/                     # 科普游戏 2：趣味策略猫咪
│   │   ├── BreastGuardianGame/              # 科普游戏 3：乳腺卫士微游戏
│   │   ├── Navbar.tsx                       # 响应式双态 Mega Menu 顶栏
│   │   ├── Footer.tsx                       # CC-BY-4.0 合规双模页脚
│   │   ├── BackToTop.tsx                    # 磁吸平滑回顶控件
│   │   └── PageSearch.tsx                   # 页面内关键词高亮检索组件
│   ├── containers/App/                      # 顶层应用入口（双模分流与全局监听）
│   ├── contents/                            # 22 个学术路由页面的极简装配层（< 20 行）
│   ├── data/                                # 强类型数据真理源（文字、引用、章节定义）
│   ├── hooks/                               # 自定义 React Hooks（滚动监控、GSAP 动画编排）
│   ├── styles/                              # 样式系统（Token、阅读器微观样式、模块主题色板）
│   ├── utils/                               # 纯函数工具箱（路径映射、Slug 转换等）
│   ├── main.tsx                             # 主站应用挂载起点
│   └── pages.ts                             # 全局页面路由字典与层级映射源
├── virtual-lab/                             # 虚拟分子生物学仿真实验室独立子工程
│   ├── index.html                           # 虚拟实验室独立 HTML 挂载入口
│   ├── public/                              # 课程播放器代码；不复制进主站 public/
│   ├── package.json / package-lock.json      # 独立依赖与固定版本
│   ├── vite.config.ts / tsconfig.json        # 独立构建和类型检查
│   ├── tailwind.config.cjs                  # 实验室专属 Tailwind 作用域配置
│   ├── README.md                            # 虚拟实验室工程与架构专用说明
│   └── src/                                 # 实验应用源码
│       ├── components/                      # 实验台器材、步骤导航、控制按钮与信息面板
│       ├── data/                            # 9 大实验步骤定义、器材坐标与学术知识库
│       ├── pages/                           # 目录页 (CatalogPage) 与 9 大实验独立路由分包
│       ├── types/                           # 实验器材、步骤与状态接口定义
│       ├── App.tsx                          # 实验室顶层分发与按需懒加载 (Code-Splitting) 容器
│       ├── main.tsx                         # 实验室挂载起点
│       └── index.css                        # 实验室专用 Tailwind 样式入口
├── scripts/                                 # 工程、资产与内容校验脚本
│   ├── postbuild-slug.mjs                   # 构建后生成路径映射及上传排除清单（详见 §八.2）
│   ├── igem-asset-manager.mjs               # 官方资产上云登记与索引库维护工具
│   ├── verify-*.mjs / check-cdn-links.mjs   # 页面忠实性、引用与外链合规校验
│   └── prepare-*.py                         # 各模块插画资产批量预处理（格式/尺寸/压缩）
├── .env                                     # 队伍元数据环境变量（Team ID、Team Name、Year）
├── .gitlab-ci.yml                           # iGEM 官方 GitLab CI/CD 自动化构建发布管道
├── eslint.config.js                         # ESLint 9 平面语法配置
├── package.json                             # 依赖清单与脚本定义
├── tsconfig.json                            # 主站 TypeScript 编译配置（实验室单独检查）
└── vite.config.ts                           # Wiki 单入口、分子运行时独立编译与 Base 路径注入
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

启动后终端将输出本地访问地址：
* **Wiki 主站**：`http://localhost:5173/jlu-fbh/`
* **虚拟分子生物学实验室（官方部署）**：`https://virtual-lab-208fd4.igem.wiki/`

> [!NOTE]
> 在主站 `/games` 中点击 **Virtual Laboratory**，会打开官方实验室部署。开发实验室本身时，请另开终端执行 `cd virtual-lab`、`npm ci`、`npm run dev`，使用终端给出的独立地址。根目录开发服务器只负责 Wiki。

### 3. 类型安全检查与生产构建

```bash
npm run build
# 或
yarn build
```

执行过程包含：
1. `tsc`：严格检查主站 `src/`；
2. `vite build`：只构建 Wiki，按需加载图表和分子渲染运行时；
3. `postbuild-slug.mjs`：保留 Cloudflare 预览所需路径映射。

实验室在 `virtual-lab/` 内单独执行 `npm ci && npm run build`，产物写入其自身忽略的 `dist/`。不要将该产物或旧的 `public/virtual-lab/`、`public/vendor/molstar/` 复制回主站；实验室 HTML、课程代码和完整源码已保留在独立子目录中。

### 4. 代码规范化检测与预览

```bash
npm run lint      # 执行 ESLint 严格语法检查
npm run format    # 执行 Prettier 统一代码美化与对齐
npm run preview   # 在本地启动 Wiki 生产包静态服务
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

## 八、 多环境构建与部署适配记录 (Deployment & Compatibility Notes)

为保障本项目在 **iGEM 官方 GitLab**、**云端边缘分发 (Cloudflare Workers/Pages)** 及 **本地/VPS 容器化环境** 下的一致稳定运行，工程层面维护了以下适配规范：

### 1. 包管理器严格锁定 Yarn v1.x (Classic)
- **配置位置**：`package.json` 中的 `"packageManager": "yarn@1.22.22"`，与根目录 `yarn.lock` 严格绑定。
- **背景与原因**：
  iGEM 官方流水线（`.gitlab-ci.yml`）严格使用 `yarn install --frozen-lockfile`；现代云端平台（如 Cloudflare）在检测到 `yarn.lock` 时会默认尝试调用 Yarn 4.x 并报错（`YN0028 lockfile migration forbidden`）。
- **统一方案**：通过 `packageManager` 字段强制锁定为 Yarn `1.22.22`，使 Cloudflare 与 iGEM GitLab 官方环境保持 100% 同构，推送回 iGEM GitLab 时**零冲突、无需任何回滚**。

### 2. 单份构建产物与路径映射 (`scripts/postbuild-slug.mjs`)
- **配置位置**：`package.json` 的 `build` 脚本及 `scripts/postbuild-slug.mjs`。
- **构建目录**：`dist/` 只保留一份产物，不再复制到 `dist/jlu-fbh/`。正常重新构建会清理旧的重复目录。
- **路径对齐**：脚本读取 Vite 实际解析的 `base`，生成 Cloudflare 的 `_redirects`。核心规则如下，最后一行是内部映射，不改变浏览器地址；此外自动生成 HTML 和目录入口的规范地址规则，防止平台自动跳转时丢失队伍前缀：
  ```text
  / /jlu-fbh/ 302
  /jlu-fbh /jlu-fbh/ 301
  /jlu-fbh/* /:splat 200
  ```
  - 本地 `npm run preview` 与 iGEM GitLab Pages 原生将单份产物挂载到 `/jlu-fbh/`；
  - Cloudflare Workers/Pages 通过上述规则访问相同文件，保留 `wrangler.json` 中的 SPA 回退；
  - GitHub Pages 不读取 `_redirects`，部署时须确保站点挂载路径与 Vite 的 `base` 一致，并单独配置深层页面回退。
- **大文件排除**：仍生成 Cloudflare 的 `.assetsignore`，只在上传时跳过超过 25 MiB 的文件。它不会缩小本地 `dist/` 或 GitLab 构建产物，不能替代静态资源迁移。

### 3. TypeScript 资产索引类型保护
- **涉及文件**：
  - `src/data/project/contributionAssets.ts`
  - `src/data/project/resultsAssets.ts`
  - `src/data/wet-lab/designAssets.ts`
- **修复说明**：修复了在严苛 TypeScript 编译模式下，宽泛联合键（Union Key）索引未分配导致的 `TS2339 (Property does not exist on type 'never')` 编译报错，保证任何 CI/CD 机器在执行全量 `tsc` 检查时 0 错误平稳通过。

### 4. 辅助配置文件说明（推送官方无需删除）
- **`wrangler.json`**：仅供 Cloudflare 识别静态资源根目录（`./dist`），推送到 iGEM GitLab 时完全被 `.gitlab-ci.yml` 忽略，不产生任何副作用。
- **`.dockerignore`**：排除 `.git`、`node_modules` 等无关文件，用于本地/服务器 Docker 镜像编译时加速上下文传输。

---

## 九、 授权与知识产权 (License)

本项目遵循 [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)（知识共享署名 4.0 国际许可协议）开源授权。

参赛队伍所有设计资料与开源代码均可在保持署名的前提下自由分发、修改与二次创作。

## Shared page image loading

New pages inherit Hero and figure preloading through `WikiRoutePage`. Images in dialogs or inactive tabs use `preloadImages` or `PageImagePreloads`. See [the shared loading contract](./WIKI_ARCHITECTURE_SPEC.md) and run `yarn test:page-loading`.
