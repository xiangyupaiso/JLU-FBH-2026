# Virtual Laboratory · 虚拟分子生物学仿真实验室

本项目为 JLU-FBH iGEM 2026 团队官方 Wiki 的重要组成部分，位于 `Dry Lab → Games` 聚合门户的第 4 站点，提供涵盖分子克隆全流程的 **9 大高仿真交互式实验实训系统**。

---

## GitLab 代码体积

实验 4、9 使用不同版本的 iSpring 播放器。为保留原有点击和动画，生成的 HTML、JS、CSS 保存在 `vendor/ispring-code.br`；`npm run dev` 和 `npm run build` 会先运行 `scripts/virtual-lab-vendor.mjs restore`，还原到 `public/virtual-lab/`。这些还原文件被 Git 忽略。需要修改课件时，先改本地还原文件，再运行 `node scripts/virtual-lab-vendor.mjs pack` 更新压缩包。

实验 9 的 `data.local-only` 是未参与构建的备用幻灯片，保留本地副本即可。实验 6 从代码中拆出的 15 张图片位于 `public/virtual-lab/images/experiment6-inline/`，正式提交 Wiki 前仍需上传到 iGEM 静态资源平台并替换路径。

---

## 一、 系统架构与工程设计 (System Architecture)

### 1. 双入口独立多页应用 (Vite Multi-Page Architecture)
* **独立入口**：实验室拥有独立的 HTML 容器入口文件（`virtual-lab/index.html`），由根目录 `vite.config.ts` 通过 Rollup `build.rollupOptions.input` 联合管理，并由 `optimizeDeps.entries` 纳管依赖预构建；
* **单服务同时启动**：根项目运行 `npm run dev` 或 `npm run build` 即可同时构建 Wiki 主站与虚拟实验室，无需启动额外服务进程；
* **离线交付合规**：所有实验多媒体、切片贴图与交互课件均存放在 `public/virtual-lab/` 目录下，构建后直接输出至 `dist/virtual-lab/`，严格遵循 iGEM 官方离线无外链评审标准。

### 2. 沙箱物理隔离与样式解耦 (Sandbox Style Isolation)
* **样式解耦**：Wiki 主站采用 Bootstrap 5.3 栅格与全局 Design Tokens，而虚拟实验室基于精密视口（`w-screen h-screen`）与 Tailwind CSS 3.4 原子类；
* **Iframe 隔离容器**：主站通过专用组件 `src/components/VirtualLaboratory/index.tsx` 在全屏模态窗口中挂载 `<iframe>`，彻底杜绝 Tailwind Preflight / Reset 样式污染 Wiki 评审排版；
* **受控通信协议**：实验子应用与主站通过 `window.postMessage` 机制交互。用户按下 `Escape` 键或点击退出时，触发 `{ type: 'virtual-lab-close' }` 消息，主站安全关闭模态层并将焦点平滑复位至入口卡片。

### 3. 全链路按需懒加载 (On-Demand Code-Splitting)
* 实验室所有 9 个实验页面全部采用 `React.lazy` 与动态 `import()` 包装；
* 启动实验室目录页（`CatalogPage`）时仅加载基础框架与目录动效，首屏体积轻盈；
* 选中具体实验时，浏览器毫秒级异步拉取对应实验 chunk（如 `ExperimentPage1-[hash].js`），避免首屏一次性加载数百 KB 实验逻辑。

---

## 二、 9 大实验矩阵与分阶体系 (Experiment Matrix)

实验按照生物科学实训认知规律，划分为 **初级 (Beginner)**、**中级 (Intermediate)**、**高级 (Advanced)** 三大难度梯度：

| 实验编号 | 实验名称 (中/英) | 难度梯度 | 核心技术与实验目标 | 交互操作特色 |
| :--- | :--- | :--- | :--- | :--- |
| **Exp 1** | **大肠杆菌复苏与活化培养**<br>*Resuscitation and Activation of E. coli DH5α* | Beginner (初级) | -80°C 甘油菌种冰上复苏、酒精灯旁无菌划线操作、LB 琼脂平板倒置培养 | 冰箱取样、冰盒保冷、接种环灼烧灭菌、四区划线法模拟 |
| **Exp 2** | **革兰氏染色与显微镜观察**<br>*Gram Staining and Morphological Observation* | Beginner (初级) | 涂片初染、碘液媒染、酒精脱色、沙黄复染四步法与油镜物镜调焦 | 试剂滴加时序控制、显微物镜倍率切换、视野细菌形态观测 |
| **Exp 3** | **pET-28a 质粒提取与琼脂糖凝胶电泳**<br>*Plasmid Extraction & Agarose Gel Electrophoresis* | Beginner (初级) | 碱裂解法分离提取质粒 DNA、离心柱洗脱与水平电泳质检 | 离心机配平离心、微量移液枪取样、水平电泳槽加样与紫外观察 |
| **Exp 4** | **胶回收与 GFP 目的片段纯化**<br>*Gel Recovery and Purification of GFP Fragment* | Intermediate (中级) | 紫外透射切胶、溶胶液解胶、吸附柱漂洗纯化与产物回收 | 凝胶切胶割带、恒温溶胶孵育、微量洗脱与分光光度计测定 |
| **Exp 5** | **目的基因 PCR 扩增与产物验证**<br>*PCR Amplification of Target Gene* | Intermediate (中级) | 引物与 Master Mix 体系配置、PCR 仪热循环编排与产物电泳 | PCR 薄壁管点样配液、变性/退火/延伸温度时间设定、DNA 跑胶条带分析 |
| **Exp 6** | **载体与片段双酶切消化**<br>*Double Digestion of Plasmid and GFP* | Intermediate (中级) | 限制性核酸内切酶体系配制、恒温水浴孵育与酶切效率分析 | 双酶（BamHI / HindIII 等）缓冲液配制、37°C 恒温水浴与产物纯化 |
| **Exp 7** | **T4 DNA 连接酶重组构建**<br>*Ligation of Vector and GFP Fragment* | Intermediate (中级) | 载体与插入片段摩尔比计算、T4 连接酶体系配制与低温连接反应 | 反应体系微量配制、16°C 低温孵育、重组重质粒质控 |
| **Exp 8** | **感受态细胞制备与质粒转化**<br>*Competent Cell Preparation and Transformation* | Advanced (高级) | CaCl₂ 感受态制备、42°C 热激冲击、复苏培养与抗性平板涂布 | 冰浴吸附、42°C 精确 90s 热激冲击、SOC 培养基复苏与玻璃珠涂布 |
| **Exp 9** | **菌落 PCR 鉴定、GFP 荧光与 SDS-PAGE**<br>*Positive Clone Verification & Protein Expression* | Advanced (高级) | 菌落快速 PCR、IPTG 诱导表达、荧光激发镜检与 SDS-PAGE 蛋白检测 | 挑菌点样、荧光显微激发对比、SDS 变性煮样、垂直电泳与考马斯亮蓝染色 |

---

## 三、 目录结构与模块说明 (Directory Layout)

```text
virtual-lab/
├── index.html                               # 虚拟实验室独立 HTML 挂载入口
├── tailwind.config.cjs                      # Tailwind CSS 局部作用域配置文件
├── README.md                                # 实验室系统架构与开发指南（本文档）
└── src/
    ├── App.tsx                              # 顶层分发容器（按需懒加载调度与 CatalogPage 切换）
    ├── main.tsx                             # 虚拟实验室独立挂载起点
    ├── index.css                            # 专属 Tailwind 指令与实验台视口样式
    ├── types/                               # 核心 TypeScript 接口定义
    │   └── index.ts                         # 实验器材 (LabItem)、实验步骤 (ExperimentStep) 等类型
    ├── components/                          # 实验通用组件库
    │   ├── ExperimentControls.tsx           # 重新开始与完成通关控制按钮
    │   ├── StepIndicator.tsx                # 左侧多步骤流程轨道组件
    │   ├── ExperimentInfoSidebar.tsx        # 实验学术原理与器材试剂通用侧边栏
    │   ├── Experiment[1-9]InfoPanel.tsx     # 针对各实验定制的知识库面板组件
    │   └── ...                              # 实验专用器材、弹窗与反馈组件
    ├── data/                                # 静态数据真理源
    │   ├── experiments.ts                   # 9 大实验元数据、器材坐标与操作步骤定义
    │   ├── experiment[1-9]Sidebar.ts        # 各实验专有原理、仪器与试剂知识文案
    │   └── experiment9Published.json        # 实验 9 诱导表达与蛋白检测帧数据
    └── pages/                               # 页面路由分包
        ├── CatalogPage.tsx                  # 3D 轮播目录页（GSAP 动态过场与难度过滤）
        └── ExperimentPage[1-9].tsx          # 9 大实验独立视图分包（按需懒加载）
```

---

## 四、 资产路径与部署规范 (Asset & Path Conventions)

1. **绝对与相对路径约定**：
   * 所有在 `virtual-lab/src/` 中引用的静态多媒体（如图片、视频、课件），**必须使用相对路径 `./`**（例如 `./images/freezer.png`、`./experiment4_lab/assets/ppt/...`、`./experiment9-assets/...`）；
   * 因为在多页面构建后，虚拟实验室 HTML 位于 `dist/virtual-lab/index.html`，静态资源位于 `dist/virtual-lab/` 同级目录下。使用相对路径可确保在任何二级子路径（如 iGEM 官方 `/jlu-fbh/virtual-lab/`）下都能正确加载，不会产生 404 错误。
2. **新增静态资源存放位置**：
   * 所有实验专属静态文件请统一保存在 `public/virtual-lab/` 的对应子目录中；
   * Vite 构建时会将 `public/` 下的文件原封不动同步复制至 `dist/`。

---

## 五、 本地开发与质量检测 (Development & Testing)

```bash
# 1. 启动全站开发服务（同时包含 Wiki 与虚拟实验室）
npm run dev
# 访问虚拟实验室独立页面：http://localhost:5173/jlu-fbh/virtual-lab/index.html

# 2. 全量类型安全检查（涵盖 virtual-lab/src 零报错）
npx tsc --noEmit

# 3. 双入口全量生产构建打包
npm run build

# 4. 本地静态预览产物
npm run preview
```
