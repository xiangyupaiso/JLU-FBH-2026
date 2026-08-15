# 📋 Sustainability 页面优化与视觉增强计划书（v2 修订版）

> **文档定位**：基于最新正文 `Sustainability.md` 与已落地代码，对 `/sustainability` 页面进行「对齐 + 扩展」的剩余工作蓝图。
> **适用项目**：CirCure iGEM 2026 Wiki — Engagement 板块 → Sustainability 页面（路由 `/sustainability`）。
> **正文来源**：`文案集/Human Practice/sustainability/Sustainability.md`（当前最新版）。
> **代码现状**：`src/contents/sustainability.tsx` + `src/data/sustainabilityData.ts` + `src/data/sustainabilityPage.ts` + `src/components/wiki/sustainability/*` + `src/styles/sustainability-page.css`。
> **计划性质**：本文为结构化改造蓝图；实现另开一轮，**本轮不改代码**。
> **更新日期**：2026-08-15（v2：在 v1 基础上补对比结论、资产错位修正、chord 组件替换与 SDG9/12/GROW 扩展规划）。

---

## 一、当前实现状态 vs 最新正文（对比结论）

### 1.1 已经实现（保持不动，仅按需喂数据）

| 正文内容 | 现有实现 | 状态 |
|---|---|---|
| Hero + Maurice Strong 引言 | `WikiPage` hero + `epigraph` block | ✅ 已实现 |
| Overview：三项核心 SDG（3/9/12） | `SDGInteractiveCard` 翻转卡片 | ✅ 已实现 |
| Overview：SDG 影响范围 | `SdgImpactRadar`（SET/DEVELOP/GROW 分层 tile） | ✅ 已实现 |
| Overview：三框架导读（SST-QN → SDG Impact Framework → SCALE） | `FrameworkIntroGrid` | ✅ 已实现（配图需修正，见 §2） |
| SST-QN 章节：四类分类 + 评分模型 + 间接传播 + 实施路径 + 可复用性 | `SSTQNClassificationMatrix` + `SdgBoundaryMatrix` + `SSTQNScoreProcess` + `SdgInteractionHeatmap` + callout | ✅ 已实现 |
| SST-QN PDF 附件「SDG 模型构建」 | `SustainabilityPdfPreview` + `PdfViewerModal` | ✅ 已实现 |
| SET–Develop–Grow 三层框架 | `ImpactFrameworkDiagram` + `sust-tier-stairs` | ✅ 已实现 |
| SET 总述（WHO 数据 + 统计） | `CountUpStat` + callout | ✅ 已实现 |
| SDG3 — S（李成丽 + TNBC 患者 + 5 位专家 + 3 个问题） | `StakeholderProfileCard` + `PatientChatDialog` + `ExpertFeedbackGrid` + `ProblemCardGroup` | ✅ 已实现 |
| SDG3 — C（社会/经济/环境三维度） | `ConsequencesDimensionCard` | ✅ 已实现 |
| SCALE 五步链（SDG3） | `SCALEProgressChain` | ✅ 已实现（需泛化，见 §3） |

### 1.2 尚未实现 / 与现状不一致（本轮规划对象）

| # | 正文内容 | 现状 | 处理 |
|---|---|---|---|
| 1 | **SDG3 的 A / L / E**（Alignment / Legacy / Evidence，正文已齐全） | 被标 `reserved` 占位 | 用真实正文填充 |
| 2 | **SDG9 整章**（管青天、闫东梅、张宇宁、陈京涛、姜春来 5 位专家 + 上海临港实地调研 + 杨巍/张海红/胡老师补充 + 患者/公众 + S/C/A/L/E） | 未实现 | 新增 section，复用现有组件 |
| 3 | **SDG12 整章**（EHS、王俊才 CMC、农产品碳排放企业、上汽集团、跨境数据、Dorm Planting + S/C/A/L/E） | 未实现 | 新增 section，复用现有组件 |
| 4 | **GROW / SDG4 整章**（教师/科学传播/游戏设计 + 学生公众活动 + S/C/A/L/E；其中 E 为空、L 为待整理清单） | 未实现 | 新增 section（summary + 交叉链接 Education） |
| 5 | SCALE Framework 作为**跨 SDG 的 S/C/A/L/E 方法论**完整展开 | 仅 SDG3 有链 | 泛化 SCALE 链，SDG9/12/4 各挂一条 |
| 6 | Overview 三框架导读配图 | 仅 SCALE 有图，且图配错 | 修正映射（见 §2） |
| 7 | `filename 1.png`（SDG 关联图） | 被误当作 SCALE 图渲染 | 用 chord 组件替换（见 §2） |

---

## 二、关键修正

### 2.1 资产映射错位（对比发现的 bug，一并修）

正文 Overview 三张图实际对应：

| 正文位置 | 实际源文件 | 语义 |
|---|---|---|
| SST-QN 导读后 | `image 3.png` | SST-QN 预览图 |
| SDG Impact Framework 导读后 | `filename 1.png` | SDG 关联图（"拓展 CirCure 与 17 项 SDG 关联"）→ **被 chord 组件替换** |
| SCALE 导读后 | `filename 2.png` | SCALE 流程图 |

当前 `src/data/sustainabilityAssets.ts` 存在错位，需按语义修正：

| 语义 key | 现状 source | 修正后 source | 用途 |
|---|---|---|---|
| `overviewSstQnPreview01`（新增） | — | `image 3.png` | SST-QN 导读配图 |
| `overviewSdgImpactFramework02`（新增） | — | ~~`filename 1.png`~~ → chord 组件 | SDG 关联图位置 |
| `overviewScaleFramework03` | `filename 1.png` ❌ | `filename 2.png` | SCALE 导读配图 |
| `frameworkSetDevelopGrow06` | `image.png` ❌ | `image 4.png` | 三层框架图 |
| `setStakeholderOverview07` | `image 2.png` ❌（文件不存在） | `image 5.png` | SET 利益相关者总览 |

> ⚠️ `src/assets/wiki/` 已 bundle 的 3 张 PNG 的实际内容需人工肉眼复核一次（`sustainability-overview-scale-framework-03.png`、`sustainability-framework-set-develop-grow-06.png`、`sustainability-set-stakeholder-overview-07.png`），再按上表重命名/重导，避免张冠李戴。

### 2.2 chord 组件替换 `filename 1.png`（本轮核心新增）

- 待替换对象：`D:/Download/Qwen_html_20260815_x7bv4g4hn.html`，标题 **"SDG-NEXUS 17 Chord"**。
- 结构：左半弧 = 17 项 SDG，右半弧 = Social / Economic / Ecological 三维度；ribbon 表示 SDGi → 维度 的聚合，synergy 实心、trade-off 斜纹；数据为 99 条有向边。
- **不直接引用该 HTML**：它从 `d3js.org` 加载 d3，违反 iGEM「禁外部 CDN」规则。**改为本地化 d3（不重写 chord 布局算法）**：把 `d3.v7.min.js` 下载进仓库（`public/vendor/d3.min.js`），在 `index.html` 用 `%BASE_URL%vendor/d3.min.js` 相对路径引用，运行时从 wiki 部署站自身静态目录加载，零外部 CDN。（备选：经 iGEM uploads 上传至 `static.igem.wiki` 后用绝对 URL 引用，与现有 favicon 同机制。）
- **保留 D3 布局代码，只做「脚本 → React 组件」薄封装**：原 HTML 的 `<script>` 逻辑（`EDGES` 数据 + 聚合 + 角度布局 + `d3.arc/ribbon` 渲染 + 交互）原样保留，仅把全屏 `overflow:hidden` 样式改为随容器尺寸、把 `d3.select("#chart")` 改为选择组件容器。
- 99 条边与现有 `SdgInteractionHeatmap.tsx` 内 `M` 矩阵一致 → 抽取共享数据模块 `src/data/sustainabilitySdgNetwork.ts`（99 条边 + 17 SDG 名称/官方 UN 色 + 三维度归属 `DIM_OF`），后续热力图/边界矩阵可择机去重复用（低风险可选项，非强制）。
- 新组件 `src/components/wiki/sustainability/SdgDimensionChord.tsx`：
  - 在 `useEffect` 中用 `window.d3`（经典脚本已随 `index.html` 同步加载）执行原 chord 渲染逻辑；
  - 随容器尺寸重绘（`ResizeObserver` 或重新计算 `viewBox`）；
  - hover 高亮 ribbon / SDG 弧 / 维度弧 + tooltip（`SDGi → 维度 · synergy/trade-off · Σ|score|`）；
  - `prefers-reduced-motion` 关闭高亮动画；
  - 复用 UN SDG 官方色（数据，非 CDN 资产）。
- 挂载位置：
  1. `overviewFrameworkIntros` 中 `sdg-impact-framework` 的配图槽（即 filename 1.png 原位置）；
  2. `sdg-impact-framework` section 内作为全宽 feature 展示完整版（与 Overview「简化/完整」分层一致）。

---

## 三、剩余改造方案

### 3.1 数据层（`src/data/sustainabilityData.ts` + `sustainabilityPage.ts`）

- **填充 SDG3 A/L/E**：新增 `sdg3Alignment`（SST-QN 关系陈述：SDG3↔9/4/10/12/13/17/5）、`sdg3Legacy`（4 项工具）、`sdg3Evidence`（30 利益相关者 / 4 患者优先项 / 4 工具 / 8 改进 + 患者家属引言）；从 `reservedScaleSections` 移除 SDG3 三项。
- **新增 `sdg9Section` / `sdg12Section` / `growSdg4Section`**：结构与 `sdg3Section` 对齐（每章 `intro / S / C / A / L / E` + `stakeholderProfiles` + `expertFeedbacks` + `consequencesDimensions`）。
- **新增利益相关者/专家数据**：
  - SDG9：管青天、闫东梅、张宇宁、陈京涛、姜春来 + 上海临港实地调研 + 杨巍/张海红/胡老师补充 + 患者/公众；
  - SDG12：EHS、王俊才 CMC、农产品碳排放企业、上汽集团、跨境数据、Dorm Planting；
  - GROW：教师、科学传播工作者、游戏设计 + 学生/公众活动清单。
- **扩展 `StakeholderProfile` 类型**：增加可配置字段 schema（`fields: {label, value}[]`），以承载 SDG9 实地调研 / SDG12 Dorm Planting / SDG4 的不同字段名（"Activity Type / Partner / Key Insights…"）。默认保持现有 6 字段，向后兼容。
- **新增锚点**：`sdg9-*`、`sdg12-*`、`grow`/`sdg4-*` 加入 `sustainabilityAnchors`，同步更新侧边栏。
- **数字口径（已确认，见 §七）**：暂不统一，`sustainabilityStats` / `facts` 与正文各自保留原口径（页级 43/6、SET 段 94/7、SDG3 E 30/5 各自照录），待最终数据一次到位再统一改动。

### 3.2 资产与 PDF 层（`sustainabilityAssets.ts` / `sustainabilityImages.ts` / `public/assets/docs`）

- 按 §2.1 修正图片映射，并补 `image 3.png`、`filename 2.png`、`image 4.png`、`image 5.png`。
- 注册新增 PDF（均已在 `图片和附件/`）：
  - SDG3 L：Stakeholder Interview Guide / Stakeholder–SDG Mapping Guide / Feedback-to-Action Record / SDG Impact Documentation Template（各 CN+EN = 8）
  - SDG9 L：Core Question Anchor / Stakeholder Feedback Decision Protocol / Anchor & Decide Toolkit / Scenario-Based Batch Failure Projection Model Report（各 CN+EN = 8）
  - SDG12 L：Resource Responsibility Map / Sustainability Claim Boundary Protocol（各 CN+EN = 4）
- 复用 `SustainabilityPdfPreview` + `PdfViewerModal`（已懒加载）；PDF 经 iGEM uploads 工具上传后回填 `uploadUrl`。

### 3.3 组件复用映射（保持一致）与新增组件

**复用（不改视觉，仅喂数据 / 微调参数）**

| 正文内容（相同功能） | 现有组件 | 处理 |
|---|---|---|
| 利益相关者档案（各 SDG stakeholder / 实地调研 / 活动） | `StakeholderProfileCard` | 复用；字段 schema 数据化以支持不同字段集 |
| 专家反馈卡片 | `ExpertFeedbackGrid` | 复用（已支持 `items` 参数） |
| 三维度影响（各 SDG 的 C） | `ConsequencesDimensionCard` | 复用；每 SDG 传各维度文案 |
| 数字统计（SET 总览 / 各 SDG E） | `CountUpStat` | 复用；更新数据 |
| SCALE 五步链（每个 SDG 的 S/C/A/L/E） | `SCALEProgressChain` | 复用；`SCALE_ANCHOR_IDS` 改为可传 `anchorIds`（默认仍 sdg3-*） |
| 分类矩阵 / 评分流程 / 热力图 / 雷达 / 三层框架图 | 现有 SST-QN / radar / framework 组件 | 保持现状 |
| PDF 预览 | `SustainabilityPdfPreview` + `PdfViewerModal` | 复用；注册新 PDF |
| 正文 / 引言 / callout / figure / subheading | `WikiPage` block 类型 | 复用（不改共享渲染器） |

**新增（1 必需 + 2 可选）**

1. `SdgDimensionChord`（**必需**，替换 filename 1.png；本地化 d3 + 保留 D3 布局、不重写算法，见 §2.2）。
2. `SstqnRelationChips`（可选）——A—Alignment 中 Core / Conditional / Exploratory / Excluded 关系标签，复用 `sstqnCategories` 色板；不用则退化为 prose + callout。
3. SCALE 段数据化组合器（可选）——`buildScaleSection(id, data)` 帮助函数，避免 SDG3/9/12/4 四套 S/C/A/L/E 手写重复；不引入新视觉组件。

### 3.4 页面结构（`sustainabilityPage.ts` 的 `sections`）

保持现有 01–04 与锚点不变，**追加**：

```
01 Overview            （现状，仅修配图）
02 SST-QN              （现状）
03 SDG Impact Framework（现状 + chord 全宽展示）
04 SET — Addressing Core Challenges（现状：WHO + 统计 + SDG3 头部）
    └─ SDG3 S/C（现状）+ A/L/E（填充）
05 SDG 9 — Industry, Innovation and Infrastructure（新增，含 SCALE 链 S/C/A/L/E）
06 SDG 12 — Responsible Consumption and Production（新增，含 SCALE 链）
07 GROW — Quality Education (SDG 4)（新增，summary + S/C/A + 交叉链接 Education；E/L 草稿作 reserved）
```

> SDG3 不挪出 section 04，仅在原位把 reserved 占位替换为 A/L/E 正文；SDG9/12/GROW 作为并列新 section 追加，避免移动现有锚点导致侧边栏/滚动联动失效。

### 3.5 SCALE 四段式复用

- SCALE = 每个 SDG 章内的 S/C/A/L/E 五步（`SCALEProgressChain` 已表达）。
- SDG9/12/4 各复用一条链，锚点前缀 `sdg9-/sdg12-/sdg4-`。
- `sustainability.tsx` 的 `SCALE_ANCHOR_IDS` 改为按 section 派生（每章一个 `ScaleChainWithSpy` 实例），`useWikiPageScroll` 滚动联动保持。

---

## 四、不破坏现状的约束

- 新增内容全部走 `WikiPage` 既有 `blocks`/`features` 机制；**不改 `WikiPage.tsx` / `wikiPageTypes.ts` / 共享 CSS 结构**，新样式只追加 `.sust-*` 类。
- `StakeholderProfileCard` 字段 schema 与 `SCALEProgressChain` 参数化均为**向后兼容扩展**（默认行为与现在完全一致）。
- 现有 section id、锚点 id、URL、`next`/`links` 不变。
- 图/PDF/JS 全部本地或 iGEM 服务器，**零外部 CDN**（d3 本地化，见 §2.2）。

---

## 五、边界情况与失败模式

- **缺图**：正文引用的 `image 1.png`、`image 2.png`、`filename.png` 在 `图片和附件/` 不存在。处理：`image 2.png`（评分热力图）已被 `SdgInteractionHeatmap` 覆盖；`image 1.png`（有向网络）以 `SdgBoundaryMatrix`/chord 替代；`filename.png`（SDG3 交流照片）标注「待补图」，不阻断。
- **chord 数据与热力图一致性**：二者现已一致（同 99 边）；抽取共享数据模块后以单源为准，避免两处漂移。
- **移动端**：chord 用 `viewBox` 缩放；SCALE 链 / 卡片网格沿用现有断点折叠。
- **reduced-motion / 无障碍**：chord hover 降级；SCALE 链与卡片保持 focus-visible 与 aria 标签。
- **GROW/SDG4 与 Education 页重叠**：Sustainability 页作「框架内 summary + 交叉链接」，不整段复制 Education 内容。
- **数字口径冲突**：分区呈现（页级总览 vs 各 SDG 范围口径），在文案口径未最终确认前不混用。

---

## 六、测试与验收

1. `yarn lint` / `yarn build` 通过（`tsc` + vite）。
2. 现有 01–04 视觉/交互逐项回归：SST-QN 四图、SDG3 卡片、SCALE 链、雷达、框架图、PDF 弹窗不变。
3. 新章节完整性：SDG9/12/4 的 S/C/A/L/E 全部正文、每张「Click more」可展开、每章 SCALE 链随滚动高亮、锚点可跳转。
4. chord 图：17 SDG × 3 维度 ribbon 正确、hover tooltip 正确、无 CDN 请求（Network 面板确认）。
5. 移动端（<760px）折叠与 `prefers-reduced-motion` 降级。
6. 资源合规：所有图/PDF/JS 来自本地或 iGEM 服务器，零外部 CDN。

---

## 七、决策记录与待确认项

### 已确认决策（v2.1）
1. **利益相关者总数**：暂不统一，各自内容保留原口径（页级 43/6、SET 段 94/7、SDG3 E 30/5 各自照录），待最终数据一次到位再统一改动。
2. **GROW/SDG4**：采用 summary + 交叉链接 Education（默认方案）。
3. **14 vs 17 SDG 口径**：不加注释说明。
4. **d3 来源**：下载 `d3.v7.min.js` 到仓库，用 `%BASE_URL%` 相对路径本地引用（经 iGEM 静态资源机制），保留 D3 布局、不重写算法。
5. **资产映射错位**：确认修复（按 §2.1）。

### 仍待确认（不阻塞结构开发）
- **`filename.png`（SDG3 交流照片）** 补图还是省略（文件当前缺失，默认作「待补图」占位处理）。

---

## 附：v1 原计划中仍有效、已被实现的组件规格（参考）

> 以下为 v1 `Sustainability-优化计划书.md` 已落地部分，保留作实现参考，不再重复展开：
> - `SDG-Interactive-Card`（翻转卡片）→ `SDGInteractiveCard`
> - `StakeholderProfileCard` → 已实现（本轮泛化字段 schema）
> - `ExpertFeedbackGrid` → 已实现（已支持 items 参数）
> - `ProblemCardGroup` → 已实现
> - `ConsequencesDimensionCard` → 已实现
> - `CountUpStat` → 已实现
> - `SCALE-ProgressChain` → `SCALEProgressChain`（本轮泛化 anchorIds）
> - `SSTQN-ClassificationMatrix` / `SSTQN-ScoreProcess` → 已实现
> - `ImpactFrameworkDiagram` → 已实现
> - 图表：SDG 影响范围（雷达 → `SdgImpactRadar` tile 版）、SST-QN 热力图（`SdgInteractionHeatmap`）、边界矩阵（`SdgBoundaryMatrix`）→ 已实现
> - 语义化重命名清单（v1 序号 1–9）→ 本轮按 §2.1 修正源文件映射
