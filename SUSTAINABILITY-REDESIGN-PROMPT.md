# Sustainability 页面可视化重构 — 完整 Prompt Kit（给 qwen3.8）

> 目标：把 sustainability 正文里「占版面大、颜色混杂、信息密度低」的图表模块，精简为**锚定在文字两侧的紧凑可视化**。正文保持编辑文档的连贯感，图表不再喧宾夺主、不再让页面割裂。

---

## 第 0 步：阅读定位（动手前先定调）

这是一份 **编辑文档型** 科学页面：衬线正文（Iowan）、纸色（`--paper`）、manuscript 排版、左侧章节导航。它不是数据大屏，也不是营销落地页。

图表的角色 = **正文的注释**（证据/示意），不是独立展品。任何不传递「正文里没有的信息」的图形元素都该删。

参考 iGEM 强队 sustainability 页的共同做法：
- **用表格代替大图**——边列表（edge list）用表格呈现，比节点连线图诚实且紧凑；
- **图表只锚在相关段落旁边**，从不整行横幅式打断正文；
- **全页最多 2 个语义色**，层级用同一色相的不同明度表达，绝不堆多色相；
- **每个「层」/「类」只有一句话定义**时，用紧凑列表，不用坐标轴。

---

## 第 1 步：设计原则（全程遵守）

1. **信息大于装饰**：箭头 marker、曲线 pathLength 动画、光晕、纯装饰圆点，全部让位给信息本身。
2. **一个语义轴，一个颜色**：全页图表只保留两个语义色——
   - Synergy / 正向 / 核心层 = 品牌 navy `#173f78`
   - Trade-off / 负向 / 警示 = coral `#df705b`
   - 层级（tier / SET / DEVELOP / GROW）用 **navy 的透明度阶梯**（100% / 60% / 25%）表达，**禁用** pink `#d784b3`、map `#e5d9d2`、gold `#c39a55` 做层级色。
   - 容器一律 `--paper-bright` 底 + 1px `--line` 描边 + `--radius-panel` 圆角。
3. **足迹克制**：图表默认宽度 **240–420px**，锚定在对应正文右侧；只有真正的空间数据才允许半宽/全宽细条。内边距、字号整体收小。
4. **交互保留但降噪**：hover 高亮 / tooltip 是紧凑图表里的好工具，保留；「为了炫技」的箭头 marker 与描画动画删掉。
5. **诚实红线**：所有评分为「方法演示示意示例」，**不新增、不编造任何数据点**；数值、文字全部沿用 `src/data/sustainabilityData.ts` 现值；「示意节选」「示意示例」等标注语必须保留。
6. **动效**：尊重 `prefers-reduced-motion`；本页已是 calm-motion（组件进场即现、hover 才动），不要再引入新的进场编排。

---

## 第 2 步：现状诊断（qwen 对照截图/代码自行确认）

| # | 模块 | 文件 | 现状问题 |
|---|---|---|---|
| 1 | SST-QN 分类矩阵 | `SSTQNClassificationMatrix.tsx` | 720×560 全宽 SVG，4 大色块 4 种色相，每块=标题+一句话，信息量≈caption 重复 |
| 2 | SDG 雷达图 | `SdgImpactRadar.tsx` | 640×448，17 轴雷达+3 层半透明多边形（3 色相）+17 个密布标签，值硬编码 0.06/0.72，无法阅读 |
| 3 | SST-QN 评分流程 | `SSTQNScoreProcess.tsx` | 830×460 全宽流程图（4 输入→校准→输出），有信息但全宽+箭头+tooltip 过重 |
| 4 | SST-QN 网络图 | `SSTQNDirectedNetwork.tsx` | 860×620（最大），17 节点+12 曲边+箭头+评分标签+悬停灰化；示意数据却占最大版面 |
| 5 | 三层框架图 | `ImpactFrameworkDiagram.tsx` | 830×430 三梯形带全宽，概念图硬用 SVG 几何 |
| 6 | 布局根因 | `src/styles/wiki-rebuild.css` 的 `.wiki-feature` | `margin: 48px 0 0 70px` 全宽，每个图表都变成打断正文的横幅 |

---

## 第 3 步：目标方案（逐模块）

### A. 布局机制（最高优先级，先做这个）

给 blocks 内容模型加一个「左右分栏」包装器，让文字与紧凑图表成对出现：

1. `src/components/wiki/wikiPageTypes.ts` 新增 block 类型，例如：
   ```ts
   { type: "split"; id: string; prose: WikiContentBlock[]; aside: WikiContentBlock }
   ```
   `WikiPage.tsx` 对应渲染为左右两栏（左文字、右图表）。
2. CSS（`wiki-rebuild.css`，跟随 `.wiki-blocks` 体系，注意 `max-width: none` 保留）：
   ```css
   .wiki-blocks--split {
     display: grid;
     grid-template-columns: minmax(0, 1fr) minmax(0, 400px);
     gap: clamp(28px, 4vw, 48px);
     align-items: center;
     margin-top: 48px;
   }
   @media (max-width: 880px) {
     .wiki-blocks--split { grid-template-columns: 1fr; }
     .wiki-blocks--split .wiki-blocks--split__aside { order: -1; } /* 或图表在文字之后，视觉自定 */
   }
   ```
3. `src/data/sustainabilityPage.ts` 中，把「prose 紧邻 feature」的连续块对，包进 `split` 块。全文只保留 ≤1 个全宽元素（见 5）。

### B. 各图表新形态

1. **分类矩阵 → 紧凑分类键（inset，~280px）**
   不再画坐标象限。4 行列表：`色点(navy 透明度阶梯) + 代码 chip(C / E / ± / 0) + 一句话定义`。轴向说明（清晰度/证据强度）压成一行小字放 caption。

2. **SDG 雷达图 → SDG 分层图块网格（inset，~360px）**
   17 个小方块、每行 5 个，方块内放 SDG 编号。底色表达层级：
   - SET（SDG 3/9/12）= navy 实底（最深）
   - DEVELOP = navy 60% 透明底
   - INDIRECT（14/15）= 仅描边、无实底
   - 其余（GROW 覆盖）= paper 底
   图例 3 行小字。信息完整保留（哪个 SDG 属于哪层），高度从 448 降到 ~280。**不画雷达。**

3. **评分流程 → 横向管线（inset 或半宽 ~480px）**
   一条横排：4 个小胶囊（输入）→ navy 胶囊（Evidence Calibration）→ gold 胶囊（Score [−1,1]）。每胶囊只放标题，描述文字移到 caption。删除箭头 marker 与 tooltip（可保留 hover 高亮）。

4. **网络图 → 交互关系表（主）+ 迷你 SDG3 星图（窄装饰）**
   - **主件 = 表格**（编辑文档里边列表的正确形态）：12 行，列 = 方向（SDG 9 → SDG 3）、正负（navy 左标 / coral 左标）、评分（+0.6 等）、一句话注释。紧凑、诚实、一眼可读。表头用一行小字。标注「示意节选」保留。
   - **装饰件 = 迷你星图**：只画 SDG 3 为中心 + 其直接邻居（约 7 节点），无箭头、无评分标签，纯表达「围绕 SDG 3 有连接」这一概念。放表格旁，宽度 ≤200px。
5. **三层框架图 → 三层阶梯条（半宽或全宽细条）**
   三行窄条呈阶梯排列：SET（navy 实底、白字）→ DEVELOP（navy 60%）→ GROW（navy 25%）。每行 = 层名 + 标题 + 一句话。不用梯形 SVG。

### C. 全局色板收敛（做完 A、B 后自查）

- 整页图表只应看到：**navy + coral + 中性灰/纸色** 三系。
- 任何地方出现 pink `#d784b3`、map `#e5d9d2` 作为层级色 → 换成 navy 透明度阶梯。
- 每一屏最多出现 **1 个**图表；正文段落保持连续，不被图表隔断。

---

## 第 4 步：明确的「不要动」

- ❌ 不动 `src/data/sustainabilityData.ts` 的任何文案、数值、颜色定义——只改呈现。
- ❌ 不删诚实标注（「示意节选」「示意示例」「方法演示用示意」）。
- ❌ 不动 13 个组件的交互事件逻辑（hover/focus/tooltip 的 JS 逻辑可留，只改视觉/结构）。
- ❌ 不动返回顶部按钮流光、全局 `[data-wiki-reveal]` 节奏、wet-lab 章节编排（这些已回滚为原版，勿再碰）。
- ❌ 不动 `.wiki-blocks .wiki-prose` 的 `max-width: none`（右侧留白修复，用户已确认保留）。
- ❌ 不引入外部 CDN、不引新依赖；图表仍用现组件/SVG/CSS 实现。
- ❌ 不把图片改为静态图——保持组件渲染，保留键盘可达性（`tabIndex` + `aria-label`）。

---

## 第 5 步：验证清单（改完逐项打勾）

- [ ] `npx tsc --noEmit` 通过
- [ ] `npx vite build` 通过
- [ ] `/sustainability` 在 1440px 宽：正文单列连续流畅；图表锚在文字右侧，不再出现整行横幅图表
- [ ] 880px 以下降为单列，无横向溢出
- [ ] 整页图表只用 navy + coral + 中性色
- [ ] 每屏 ≤1 个图表
- [ ] 键盘 Tab 能到达每个图表交互元素，`aria-label` 完整
- [ ] `prefers-reduced-motion` 下无动画
- [ ] 截图自查：页面不「割裂」——文字→图表→文字过渡自然，图表是注释而非展品

---

## 附：代码位置索引（qwen 有仓库访问权时用）

- 布局根因：`src/styles/wiki-rebuild.css` — `.wiki-feature`（约 line 453）、`.wiki-blocks` 覆盖（约 line 2796）
- blocks 类型：`src/components/wiki/wikiPageTypes.ts` — `WikiContentBlock`
- 块渲染：`src/components/wiki/WikiPage.tsx` — `WikiSectionBlock`
- 页面块编排：`src/data/sustainabilityPage.ts`
- 图表组件：`src/components/wiki/sustainability/{SSTQNClassificationMatrix,SdgImpactRadar,SSTQNScoreProcess,SSTQNDirectedNetwork,ImpactFrameworkDiagram}.tsx`
- 数据与颜色：`src/data/sustainabilityData.ts`（`sstqnCategories` / `frameworkLayers` / 各 `hex`）
- 组件样式：`src/styles/sustainability-page.css`（`.sust-chart-*` 系列，约 line 786 起）
- 现有 calm-motion 层：`src/styles/sustainability-page.css` 末尾「动效精简（calm motion layer）」——保留，别改
