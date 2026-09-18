# Hardware 页旧→新迁移交付说明：全量组件对照清点 + 逐项修复

> 旧版工程（只读基准）：`C:\Users\香芋派\.trae-cn\Official-wiki`
> 交付工程：`D:\TRAE SOLO CN\project\Official-wiki`
> 本次范围：**`/hardware` 页面所有可视化组件与交互的完整迁移**，配色沿用当前页既有新色系。

---

## 0. 结论速览

| 指标 | 结果 |
|---|---|
| `src/data/hardwareMarkdown.ts` 解析器输出（DOM 块计数） | 旧 = 新，**逐块相同**（9 章节 / 4 呼出卡 / 7 表格块 / 6 图框 / 14 行内跳转 / 4 左右分栏） |
| 表格数据逐格核对（含 ✓ / ✗ / △） | **完全一致**（7 张表、表头、每一行每一格、表注） |
| 呼出卡文案与编号 | **完全一致**（4 张卡、eyebrow、标题、每条编号与条目） |
| 图框占位文件名 / 说明 / 图注 | **完全一致**（6 个占位、说明文字、`Figure n | …` 图注） |
| 正文文字（327 个文本节点逐节点 diff） | **零丢失**，差异仅来自新范式的 TOC 序号写法（旧 `01` → 新 `1`） |
| 行内跳转 | 14/14 可点击且落点准确（导航栏高度 58px，落点 133–145px，未被遮挡） |
| 其余 15 条路由回归 | 无变化；全站无横向溢出 |
| `tsc` / `eslint` | 通过（exit 0） |

**根因**：迁移时只搬了 `hardwareMarkdown.ts` 数据与 `WikiRoutePage` 渲染骨架，而渲染这些组件**所需的组件级 CSS 从未进入新样式范式**——`wiki-route-skin.css` 只画到容器外壳（`.wiki-table-wrap`、`.wiki-mini-visual` 各一行面板底色），行内元素没有任何规则，`.wiki-chapter-link--inline` 更是全站零命中。旧版这些视觉全部由 `hardware-page.css` 第 1393–1710 行提供，该文件未随之迁移。

---

## 1. 《迁移状态清单》（逐组件）

定位意图列：**右浮 aside** = `.wiki-blocks--split` 右列 / **全宽** = 占满正文列 / **流内** = 随正文顺序 / **行内** = 与句子同一行。

| # | 组件类型 / 名称 | 章节 | 旧版形态与定位意图 | 新版迁移前现状 | 处理决策与结果 |
|---|---|---|---|---|---|
| 1 | 呼出信息卡 `mini-visual` — SYSTEM AT A GLANCE / One chamber, three controls | 1.2 | 独立卡片，右浮 aside（`.wiki-blocks--split__aside`，旧宽 360px，sticky）；卡内 **4 层各自成行**：mono 金色 eyebrow → Newsreader 大标题 → 顶部细线 → 32px+1fr 编号行 | **损坏**：卡内 5 个元素全部退化为行内 `inline`；eyebrow 与大标题挤成一行；`<ol>` 为 `list-style: decimal` 且左内边距 32px，渲染成 `01sealed reaction space`；`<li>` 无网格、无内边距、无行分隔线 | **已修复**（范式 2）。容器外观沿用范式 9 面板规则（`--route-panel` + 6px 圆角 + inset 细线），内部层级按旧版结构重建，颜色落到 `--route-accent` / `--route-ink` / `--route-muted` / `--route-line`。卡高 302px vs 旧 304px |
| 2 | 呼出信息卡 — ENGINEERING BOTTLENECK / Three pressures on one workflow | 2.1 | 同上，右浮 aside，3 条 | **损坏**（同上） | **已修复** |
| 3 | 呼出信息卡 — GEN 1 → GEN 2 / Four limitations drive the revision | 6.1 | 同上，右浮 aside，4 条 | **损坏**（同上） | **已修复** |
| 4 | 呼出信息卡 — EVIDENCE BOUNDARY / What remains unverified | 8.1 | 同上，右浮 aside，4 条 | **损坏**（同上） | **已修复** |
| 5 | 左右分栏容器 `.wiki-blocks--split` | 1.2 / 2.1 / 6.1 / 8.1 | 两列 grid，右列 sticky | 正常（骨架内置），右列宽 400px vs 旧 360px；桌面 sticky，≤880px 转 static | **保持不动**（属新范式既有结构） |
| 6 | 表格 Table 1 — Capability matrix（6 列 × 10 行，✓/✗/△） | 2.3 | **全宽**表格，等宽大写字头、14px/12px 单元格内边距、行分隔线、首列加粗、上下细线 | **损坏**：`.wiki-table` 无任何规则 → 字号继承 16px、单元格 `padding: 1px`、`vertical-align: middle`、无行线、表头非等宽非大写；容器宽 948px 但表格仅 778px（未占满）；容器无上/下边线 | **已修复**（范式 2）。表头恢复 IBM Plex Mono 10px / 大写 / 0.06em / 700；单元格 14px 12px + 行线；首列 `--route-ink` 加粗；容器全宽 + 上边线 + 横向滚动。表高 536px vs 旧 538px |
| 7 | 表格 Table 2 — 设计决策与备选方案（4 列 × 6 行） | 4.2 | 同上，全宽 | **损坏**（同上） | **已修复** |
| 8 | 表格 Table 3 — 两代对照（4 列 × 7 行） | 6.6 | 同上，全宽 | **损坏**（同上） | **已修复** |
| 9 | 表注 `Table 1 | Capability matrix.` 及 △ 脚注 | 2.3 | **流内**，表下随正文 | 正常（纯文本段落），未随表格一起被挤压 | **核对无误，未动** |
| 10 | 表注 `Table 2 | …` | 4.2 | 流内 | 正常 | **核对无误，未动** |
| 11 | 表注 `Table 3 | …` | 6.6 | 流内 | 正常 | **核对无误，未动** |
| 12 | 单格块（parser 把 `\|**bold**\|` 与单格引用块都渲染为 1×1 table）— 编辑备注 ×2、6.5「The nature of this iteration」、8.1「Admittedly…」 | 5.1 / 6.5 / 7 / 8.1 | 旧版同样渲染为 1×1 表格块（**已实测确认**），但被 `hardware-page.css` 的表头规则描成 muted 大写灰色 | **降级**：同样 1×1，但表头规则为 `--route-ink` 加粗，整段呈粗体，比旧版抢眼 | **已按新范式重着色**（继承表头规则）。文字零改动 |
| 13 | 图框 + 图注 — `gen1-overview.png` | 1.1 | **流内**虚线边框占位 + 斜纹底 + 居中「IMAGE PLACEHOLDER」/ 文件名 / 说明，其下跟随 `FIG. 01 Figure 1 | …` 图注 | **缺失**：占位块退化为 878×48px 的无边框纯文本堆叠（display block、padding 0、无虚线、无斜纹、无圆角、无居中） | **已恢复**（范式 2）。占位块 878×460px vs 旧 934×460px |
| 14 | 图框 + 图注 — `process-chain.png` | 2.2 | 同上 | **缺失**（同上） | **已恢复** |
| 15 | 图框 + 图注 — `gen1-exploded.png` | 3.1 | 同上 | **缺失**（同上） | **已恢复** |
| 16 | 图框 + 图注 — `uv-interlock-state.png` | 3.6 | 同上 | **缺失**（同上） | **已恢复** |
| 17 | 图框 + 图注 — `gen2-optical-electrical-block.png` | 6.2 | 同上 | **缺失**（同上） | **已恢复** |
| 18 | 图框 + 图注 — `gen2-process-timing.png` | 6.3 | 同上 | **缺失**（同上） | **已恢复** |
| 19 | 图注前缀 `FIG. nn` 自动编号（CSS counter） | 全文 6 处 | 图注前自动追加 `FIG. 01`–`FIG. 06` | 正常（`wiki-rebuild.css` counter 规则随新范式保留） | **核对无误，未动** |
| 20 | 行内交叉引用 `(click to see Chapter n)` — 14 处 | 1.2 / 2.3 / 3.7 / 4.1 / 6.1×3 / 6.3 / 6.5×3 / 8.1 / 8.2 | **行内**链接：粉色 `--care` #d784b3、600 字重、下划线（`text-underline-offset: 3px`）、hover 转深藏青 | **降级**：`<a>` 元素存在但**样式全站零命中** → 渲染成正文同色同字重，肉眼等同纯文本「失去跳转能力」 | **已恢复**（范式 2，用 `--route-accent`）。14/14 实测可点、落点准确 |
| 21 | 跳转锚点 `hardware-patent`（第 5 章） | 5.1 起 | 旧版 6.5「(click to see Chapter 5)」的 `href="#hardware-patent"` | **缺失（本次新发现的既有缺陷）**：`sectionId()` 只匹配 `"the patent"`，而第三章、第五章标题带序号（`## 5\. The patent`）→ 实际 id 为 `hardware-section-5`，锚点在全站任何版本都不存在，**点击无反应** | **已修复**：`sectionId()` 先去 Markdown 转义与章节序号，再按词干匹配（`first-generation` / `patent` 用 `includes`，避免标题后接 `—` 分隔副标题的写法漏配）。第三章 id 同步由 `hardware-section-3` → `hardware-gen1`，第五章 → `hardware-patent`，与 `chapterTarget()` 表对齐 |
| 22 | 参考文献列表（References 章） | 9 | 旧版**刻意不发布**：解析器显式清空 `hardware-references` 的 blocks（草稿未完成，仅保留章节锚点） | 与旧版一致（空章节 + 锚点） | **保持不动**（内容以旧版为准，不得自行补写） |
| 23 | 侧边栏 TOC（`On this page` / 9 chapters + 子项 + Related records） | 全局 | 220px 左栏，`01`–`09` 两位序号 | 正常（新范式：250px，单个数字 `1`–`9`，宽高比旧版略大） | **已迁移部分，未动** |
| 24 | 子标题 `### n.n`（28 个 `wiki-subheading`） | 全文 | Newsreader 40.32px 衬线，左侧 2px 竖线（`::before`） | 正常（新范式：28px、500 字重、竖线保留） | **已迁移部分，未动** |
| 25 | Hero 区（大标题 + 全出血背景图 + 副标题） | 顶部 | 旧版 `wiki-hero`（heroMinimal，无 eyebrow/boundary/facts 块） | 正常（新范式：新 hero 版式 + `dry-lab-hardware-hero-v2.webp`） | **已迁移部分，未动** |
| 26 | 子导航 SubNav（Model / Software / Hardware / Games 四卡） | Hero 下方 | 四卡横向导航，当前页高亮 | 正常（新范式样式） | **已迁移部分，未动** |
| 27 | 页脚 Next-page 引导卡（→ Games） | 页尾 | `WikiNextRecord` + 卡片 | 正常（新范式：New page 卡 + ↗ 圆钮） | **已迁移部分，未动** |
| 28 | 全局页脚（License / GitLab 链接 / 联系信息） | 页尾 | — | 正常（未纳入本次范围，红线要求不可改） | **未动** |
| 29 | 装饰性文字 | 全文 | 旧版 hero 无装饰文案；正文无纯装饰文字 | — | **无需删除任何装饰性文字**（本次零删除） |
| 30 | 交互行为清点 | 全文 | ① 行内跳转 14 处（平滑滚动）；② 侧边栏 TOC 点击跳章 + 滚动联动高亮；③ 子导航跳转；④ Next-page 卡片跳转；⑤ Back-to-top | ① **损坏**（见 #20/#21）→ 已修复；②③④⑤ 正常 | ① 已修复，②③④⑤ 复核正常 |

### 补充：旧版存在但**从未渲染**的组件（经实测确认，决定不迁移）

旧版 `src/components/wiki/features/HardwareEvidenceFeatures.tsx`（837 行，含 `HardwareRequirementMatrix` / `AnnotatedSystemDiagram` / `HardwareAssemblyAndBom` / `BuildIterationTimeline` / `HardwareCalibrationAndPerformance` / `HardwareSafetyRiskMatrix` / `OpenHardwareReleaseChecklist`）与 `hardware-page.css` 中约 120 条 `.hardware-*` 规则确实存在于旧版源码，但旧版 `src/contents/hardware.tsx` 的 `WikiPage` **未传入 `features`**，因此这些面板在旧版页面上**从未渲染到 DOM**（已用旧版构建产物实测：`.hardware-requirement-matrix` 等选择器命中数均为 0）。

依据「以旧版渲染结果为基准、不得增删内容」的红线，本次**不引入**这些未发布面板——它们属于旧版遗留的未接线代码，不是旧版页面的可视化组件。如产品侧希望把这些「评审用证据面板」正式上线，需要单独立项（内容、图表与数据均需团队补齐）。

---

## 2. 改动文件清单

共 **2 个文件**，均为加法式修改，未删除任何既有规则。

### 2.1 `src/styles/wiki-route-skin.css`（新增 § 9a–9d + 一处响应式块）

| 位置 | 新增内容 | 作用 |
|---|---|---|
| 第 732–788 行 | **§ 9a** `.wiki-mini-visual` / `> span` / `> strong` / `ol` / `li` / `li b` | 呼出卡内部层级：grid 14px 间距、24px 内边距、mono 9px eyebrow、衬线 `clamp(26px,2.5vw,38px)` 标题、顶部细线、`32px + 1fr` 编号行、行分隔线 |
| 第 790–843 行 | **§ 9b** `.wiki-table-wrap` / `.wiki-table` / `caption` / `th,td` / `thead th` / `tbody th` | 能力矩阵：全宽、`min-width: 720px`、`border-collapse`、13px 正文、14px 12px 单元格、行线、mono 10px 大写表头、首列加粗、容器横向滚动 |
| 第 845–897 行 | **§ 9c** `.wiki-image-placeholder` / `> span` / `> strong` / `> p` | 空图框边界：虚线框、45° 浅斜纹底、`min-height: clamp(220px,32vw,460px)`、居中三段式内容、620px 说明宽度 |
| 第 899–924 行 | **§ 9d** `.wiki-chapter-link--inline` + `:is(:hover,:focus-visible)` + `:focus-visible` | 行内跳转：`display:inline`、继承字号、600 字重、下划线、hover 转 `--route-ink`、键盘焦点描边 |
| 第 1237–1252 行（`@media (max-width:640px)` 内） | `.wiki-image-placeholder` / `.wiki-table` | 窄屏：占位框 `min-height:230px`、内边距 22px；表格 `min-width:680px`、12px，由容器承担横向滚动，不破版 |

颜色一律取自既有路由色槽（`--route-accent` / `--route-ink` / `--route-muted` / `--route-line` / `--route-line-strong` / `--route-paper` / `--route-panel`），**未新增任何色值**，未触碰 `route-palette-drylab.css` 与页面主题。

### 2.2 `src/data/hardwareMarkdown.ts`（`sectionId()` 修复）

- 修复前：只匹配 `"first-generation"` / `"the patent"` 等**无序号**词干 → 带序号的第 3 章、第 5 章落到兜底 id。
- 修复后：先 `unescapeMarkdown()` 去掉 `\.` 转义与 `**`，再剥离 `^\d+(\.\d+)?\.?\s*` 序号，然后按词干匹配；`first-generation`、`patent` 改用 `includes` 以兼容 `## First-generation design — five functional modules`、`## 5\. The patent` 两种写法。
- 影响：`hardware-section-3` → `hardware-gen1`，`hardware-section-5` → `hardware-patent`。其余 7 个 id 不变；子标题 id 随章节前缀同步变化（侧边栏与 TOC 同步，无死链残留）。

---

## 3. 保留 / 删除的装饰性文字说明

- **删除：0 条。** 本次未删除、未改写、未润色任何正文文字。
- 旧版 hero 本就没有装饰性 eyebrow / boundary / facts 文案（`heroMinimal: true`），因此也没有「无用文字」需要清理。
- 以下文字**全部保留**，并在此标注其性质，供人工复核：
  - `IMAGE PLACEHOLDER`（占位框状态标签）——装饰性但承载「此图尚未提供」的信息，保留。
  - 6 条占位说明（如 `*Use patent Fig. 1 at full resolution. …`、`*Flow diagram, drawn by the team. …`）——**必须保留**，是团队对图件的交付要求。
  - 2 条 `EDITORIAL NOTE — delete before publishing`（含内部待办）——旧版即发布在页面上，本次**照旧保留**，未删除；建议团队后续自行清理。
  - `Table 1 | Capability matrix.`、`△ marks a capability present on some models or only partially.` 等表注/脚注——承载数据解释，保留。
  - 侧边栏 `Related records`（Experimental need / Measurement / Open release）——导航文字，保留。

---

## 4. 验收证据

### 4.1 新旧逐格核对（自动化）

| 检查项 | 方法 | 结果 |
|---|---|---|
| 组件计数 | 新旧页面 DOM 查询同一组选择器 | 旧/新均：9 章节 / 4 呼出卡 / 7 表格块 / 6 图框占位 / 14 行内跳转 / 4 分栏 |
| 表格逐格 | 新旧 `thead th` + 每个 `tbody tr` 的每个单元格（tag/scope/text）序列化后逐字节比较 | 7/7 表**完全一致**（唯一差异是第 5 章 section id，即本次修复项） |
| 呼出卡逐条 | 新旧 eyebrow / 标题 / 每条 `<b>` 序号 + 文本 | 4/4 卡**完全一致** |
| 图框 | 新旧占位文件名 / 说明 / 图注 | 6/6**完全一致** |
| 正文文字 | 新旧 `.wiki-article` 内 327 个文本节点逐个计数比对 | 无丢失、无新增（差异仅为 TOC 序号 `01`→`1`，属新范式） |

### 4.2 行内跳转逐个点击（自动化）

在新版页面上依次点击 14 处 `(click to see Chapter n)`，等待滚动结束后测量目标章节标题相对视口的位置（固定导航栏高 58px）：

```
PASS (click to see Chapter 6)  -> #hardware-gen2         headingTop=141 (header 58)
PASS (click to see Chapter 2)  -> #hardware-motivation   headingTop=141 (header 58)
PASS (click to see Chapter 2)  -> #hardware-motivation   headingTop=141 (header 58)
PASS (click to see Chapter 1)  -> #hardware-overview     headingTop=133 (header 58)
PASS (click to see Chapter 6)  -> #hardware-gen2         headingTop=141 (header 58)
PASS (click to see Chapter 6)  -> #hardware-gen2         headingTop=141 (header 58)
PASS (click to see Chapter 6)  -> #hardware-gen2         headingTop=141 (header 58)
PASS (click to see Chapter 2)  -> #hardware-motivation   headingTop=141 (header 58)
PASS (click to see Chapter 5)  -> #hardware-patent       headingTop=141 (header 58)
PASS (click to see Chapter 2)  -> #hardware-motivation   headingTop=141 (header 58)
PASS (click to see Chapter 2)  -> #hardware-motivation   headingTop=141 (header 58)
PASS (click to see Chapter 6)  -> #hardware-gen2         headingTop=141 (header 58)
PASS (click to see Chapter 7)  -> #hardware-release      headingTop=141 (header 58)

TOTAL 14  PASS 14  FAIL 0
```

落点公式沿用页面既有实现 `scrollReaderToTarget()`（`trackTop + innerTop - 32`），因此与新建模/软件页行为一致。

### 4.3 全站回归（自动化）

16 条路由逐一加载，检查受影响选择器的命中数与文档横向溢出：

| route | sections | features | miniVisual | table | tableWrap | placeholder | inlineLink | split | 横向溢出 |
|---|---|---|---|---|---|---|---|---|---|
| /hardware | 9 | 0 | **4** | **7** | **7** | **6** | **14** | 4 | 无 |
| /model | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 无 |
| /software | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 无 |
| /games | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 无 |
| /sustainability | 7 | 31 | 0 | 0 | 0 | 0 | 0 | 4 | 无 |
| 其余 11 条路由 | — | — | 0 | 0 | 0 | 0 | 0 | 0 | 无 |

**结论**：新增的 4 组规则只可能作用在 `.wiki-table` / `.wiki-mini-visual` / `.wiki-image-placeholder` / `.wiki-chapter-link--inline` 上，而全站**只有 `/hardware` 渲染这四类元素**（`/sustainability` 的 4 处分栏 aside 渲染的是 `feature` / `callout`，不含 `mini-visual`），因此 Wet Lab / Project / Dry Lab / Engagement / 其余 Dry Lab 子页面外观与行为**零变化**。

### 4.4 窄屏

390×844：呼出卡单列满宽、内部层级完整；能力矩阵在容器内横向滚动，文档无横向溢出，不破版。

### 4.5 编译与检查

- `tsc`：exit 0
- `eslint src/data/hardwareMarkdown.ts src/contents/hardware.tsx src/components/wiki/WikiRoutePage.tsx`：exit 0
- 未引入任何 CDN、外部依赖或新图片；图片仍为相对路径引用。

---

## 5. 复现与回归脚本

以下脚本已留在工程内（只读 DOM 检查 + CDP 截图，无第三方依赖），便于复核：

| 文件 | 用途 |
|---|---|
| `.qa6/hwstyle.mjs` | 新旧页面同名选择器的计算样式逐属性对比（定位样式缺失） |
| `.qa6/hwstruct.mjs` | 新旧表格 / 呼出卡 / 图框的**结构与逐格文本**对比 |
| `.qa6/hwtext.mjs` | 新旧正文 327 个文本节点逐节点 diff |
| `.qa6/hwlinks.mjs` | 逐个点击 14 处行内跳转并断言落点不被导航栏遮挡 |
| `.qa6/hwregress.mjs` | 16 条路由的全站回归扫描 |
| `.qa6/hwshot.mjs` | 按元素定位滚动并截图（含分栏页面的文档时间轴换算） |
| `.qa6/old-dist-server.py` | 只读伺服旧版构建产物（`dist/`），作为对照基准 |

运行前提：新版 `vite` dev（`http://localhost:5173/jlu-fbh/`）+ 旧版 dist 伺服（`http://127.0.0.1:8098/jlu-fbh/`）+ 一个开启 CDP 的 Chrome（`--remote-debugging-port=9226`）。

---

## 6. 遗留与建议

1. **旧版未接线面板**：`HardwareEvidenceFeatures.tsx` 的 7 个证据面板在旧版从未渲染。如需上线，需产品决策 + 团队补齐数据，不在本次「迁移」范围内（见第 1 节补充说明）。
2. **`EDITORIAL NOTE — delete before publishing`**：2 条内部待办仍随页面发布（旧版即如此）。素材到位后建议移除，本次未擅自删除。
3. **`click to see Chapter 6` 的括号**：正文第 6.1 章有 3 处原文为 `；click to see Chapter 6`（无括号），解析器统一渲染为 `(click to see Chapter 6)`。这是 `hardwareMarkdown.ts` 既有行为、新旧一致，本次未改动。
4. **表格窄屏策略**：能力矩阵 6 列在手机上必须横向滚动（旧版一致）。若后续希望改为卡片折叠，属新需求。
