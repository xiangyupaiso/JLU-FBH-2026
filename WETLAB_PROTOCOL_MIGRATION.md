# Wet Lab 子页面迁移交付说明：`/protocol`（Protocol Library）

> 旧版工程（只读）：`C:\Users\香芋派\.trae-cn\Official-wiki`
> 交付工程：`D:\TRAE SOLO CN\project\Official-wiki`
> 本次范围：**只迁移 Wet Lab 缺失子页面 `/protocol`**（Games 留到 Dry Lab 改版时处理，见第 8 节）。

---

## 1. 缺失子页面清单（排查结论，非猜测）

| 比对项 | 旧版 | 新版 | 结论 |
|---|---|---|---|
| `pages.ts` 路由总数 | 21 | 19 | 少 2 条 |
| Wet Lab 目录条目 | Experiments / Notebook / Measurement / Alternative Platform / Safety and Security / **Protocol** | 同前 5 项 | **缺 `/protocol`（title: Protocol Library）** |
| Dry Lab 目录条目 | Model / Software / Hardware / **Games** | 同前 3 项 | 缺 `/games`（Dry Lab，本次不迁） |
| `src/data/wetLabPages.ts` | 907 行 | 907 行 | **逐行相同**，不存在其它内容缺失 |

补充证据：新版 `wetLabPages.ts` 中 Safety and Security 页的 `next` 已指向 `/protocol`（`path: "/protocol"`, label `Protocol Library`），此前是死链；`/protocol` 也是新版全站唯一「被引用但无路由」的地址。

**结论：Wet Lab 缺失子页面有且只有 `/protocol` 一页。**

---

## 2. 新增文件

| 路径 | 说明 |
|---|---|
| `src/data/protocolPages.ts` | 15 条手册数据（id/标题/分类/描述/文件名/页数，逐字段照搬旧版 `data/protocolPages.ts`）+ `/protocol` 页面内容 `protocolPage` |
| `src/components/wiki/features/ProtocolBookcase.tsx` | 书架主体：4 个分类筛选标签、`{n} manuals indexed` 读数、刻线板卡片网格、尾部 DNA 贴纸 |
| `src/components/wiki/features/PdfViewerModal.tsx` | 自建 PDF 阅览弹窗（零外部依赖，详见第 6 节第 2 条） |
| `src/styles/protocol-bookcase.css` | 该页全部样式，作用域限定在 `.wiki-page--protocol` |
| `src/contents/protocol.tsx` | 页面组件，走 `WikiPage` + `hideOutline` 变体 |
| `src/assets/protocols/*.pdf` | 15 个 PDF，旧版原样拷贝（字节未改） |
| `src/assets/wiki/protocol-hero-bg.png` | Hero 背景图，旧版原样拷贝 |

## 3. 改动文件（全部为加法，未改动任何既有页面的样式或定稿文案）

| 路径 | 改动 |
|---|---|
| `src/pages.ts` | Wet Lab 目录末尾追加 `Protocol` 条目（name/title/path/component/lead） |
| `src/contents/index.tsx` | 追加 `export { Protocol } from "./protocol.tsx";` |
| `src/components/Navbar.tsx` | `NAV_DISPLAY["Wet Lab"].cards` 追加 Protocol 卡片（`06 / MANUAL`、`Protocols · Library · Viewer`，取自旧版 `pages.ts` 的 nav 元数据） |
| `src/containers/App/App.tsx` | `WET_LAB_ROUTES` 追加 `"/protocol"` → 该页不套 `Header`+Bootstrap 容器，页脚用 `wet-lab` 变体 |
| `src/components/wiki/wetLabHeroAssets.ts` | 新增 `protocol` hero 变体映射 |
| `src/components/wiki/wikiPageTypes.ts` | `WikiSection` 新增可选字段 `showKicker` |
| `src/components/wiki/WikiPage.tsx` | 新增可选 prop `hideOutline`（默认 `false`）；章节 kicker 渲染条件由 `!manuscript` 改为 `!manuscript \|\| section.showKicker` |

> 两个新开关默认关闭，且只有 `/protocol` 使用，因此对其余 19 个路由的输出零影响（已在第 7 节用全站冒烟验证）。

---

## 4. 路由与入口的组织方式

**路由**：`src/pages.ts` 是唯一真源 → `getPathMapping()` 展开成 `<Route>`；`App.tsx` 的 `WET_LAB_ROUTES` 决定页面外壳与页脚变体。新增一页只需动这两处 + Navbar 卡片元数据（新版 Navbar 的卡片元数据是硬编码在 `NAV_DISPLAY` 里的，只加 `pages.ts` 条目不会出现在下拉菜单中）。

**入口（只做加法，已验证可进可退）**：

1. 顶部导航 `Wet Lab` 下拉第 6 张卡片（桌面）+ 移动端菜单同名条目（同源）→ 点击进入 `/protocol`；
2. 上一页 `Safety and Security` 的 “Next page” 卡片本来就指向 `/protocol`（旧版同样如此），现在从死链变为可用入口；
3. Library 页自己的 “Next page” 卡片 → `/model`（与旧版一致）；
4. 浏览器返回键可回到 `/protocol`；深链 `/protocol` 直接可开。

**为什么没有在正文里再加子页链接**：新版 Wet Lab 已不再渲染旧版的 `SubNav` 子页导航条（`SubNav.tsx` 在新版是未使用的遗留文件），而 Wet Lab 页侧栏的 “Related records” 区块被 CSS 隐藏（`wetlab-pastel.css`）。为避免改动既有 Wet Lab 页的定稿内容（`links` 数据），入口只放在导航与既有 Next 卡片上。

---

## 5. Library 布局变体的实现方式

**开关**：`<WikiPage hideOutline … />`（新增可选 prop，默认 `false`，只 `/protocol` 使用）。

该开关做两件事：

1. 不挂载 `WikiLineSidebar`（就是 Wet Lab 范式里的侧边目录卡 / 目录栏组件）；
2. 给 `.wiki-record` 加 `wiki-record--full`。

**CSS**（`protocol-bookcase.css`，作用域仅 `.wiki-page--protocol`）：

```css
/* 桌面：去掉目录列，正文框占满 */
.wiki-page.wiki-page--wet-lab.wiki-page--protocol .wiki-record--full {
  grid-template-columns: minmax(0, 1fr);
}

/* ≤980px：Wet Lab 默认是「36dvh 目录行 + 1fr 正文行」，
   不挂目录后正文框会掉进那条矮行、下方留空，故变体改为单行满高 */
@media (max-width: 991px) {
  .wiki-page.wiki-page--wet-lab.wiki-page--protocol .wiki-record--full {
    grid-template-rows: minmax(0, 1fr);
  }
}
```

**实测宽度**（1440×900）：`/protocol` 正文框 1396px，对照 `/experiments` 1124px —— 被释放的目录列 + 间距（272px）全部并入正文。900px 两列、480px 一列，均无横向溢出。

**其余全部沿用 Wet Lab 范式**：同一个 100dvh 水彩 hero、同一块米黄 mat、同一个 `.wet-frame`（`wet.png` 纸纹框）、同一套 `.wiki-section` 标题层级与间距、同一个 `WikiNextRecord` 收尾卡、同一个 `footer--wet-lab` 页脚变体。

---

## 6. 与旧版内容 / Wet Lab 范式不完全对齐之处（逐条）

1. **章节序号 06 → 6**：新版范式对 manuscript 章节用 `Number.parseInt(section.index, 10)` 渲染序号（Wet Lab 其它页显示 1 / 2 / 3），所以旧版的 “06” 渲染为 “6”。**文案本身未改**（数据里仍是 `index: "06"`）。
2. **PDF 阅读器渲染方式**（唯一较大的偏差）：旧版弹窗壳、遮罩、进出场动画、Esc、焦点陷阱、全屏、下载都是团队自建，但 **PDF 页面渲染引擎是 `react-pdf` + `pdfjs-dist`（两个外部依赖）**。按「不引入新的外部依赖」约束，这两个包没有安装，弹窗改为用浏览器内置 PDF 阅读器（`<iframe>`）渲染：
   - 保留：自建弹窗壳与工具栏、遮罩点击关闭、Esc、焦点陷阱、全屏、下载、进出场动画、深蓝阅览底 + 纸面面板；
   - 去掉：旧版自建的「上一页 / 下一页 / 页码」与「缩放 ± / 百分比」控件（改由浏览器阅读器提供）；
   - 新增：`Open in new tab`（内嵌在 iframe 里需要一个跳出入口）；
   - 工具栏读数由 `Page 1 / 6` 改为 `6 pages / dna-extraction.pdf`（无分页控制时显示伪页码会误导）。
   - 已实测：Chrome 忽略 `#toolbar=0`，无法隐藏浏览器自带工具条。
   - 若后续允许安装 `react-pdf` + `pdfjs-dist`，只需替换 `PdfViewerModal.tsx`，页面其余部分不用动。
3. **分类强调色**：旧版用 `--wet-teal`(#2f6f68) 与 `--gold`(#c39a55) 区分 Cell / Animal，这两个色相不在 Wet Lab 三色板内。按「不得换色」要求，改为用三色板本身做卡片封面底纹（DNA = `--wet-blue`、Cell = `--wet-mint`、Animal = `--wet-yellow`），文字 / 描边 / 焦点环统一用 `--wet-accent`。版式与层级不变。
4. **卡片网格宽度**：旧版是固定 `var(--wet-page)`(1120px) 居中容器 + 6 列（卡片跨 2 列 = 每行 3 张）；新版去掉 1120px 上限，网格铺满正文宽度（1440px 屏下 1250px），列数、每行张数、1px 刻线、尾部贴纸居中逻辑与旧版完全一致。
5. **15 份 PDF 是占位演示文档**：页内写着 “Interactive bookshelf demonstration document”“Replace this content with principles, scope, and critical controls”，并非定稿 SOP。按你的选择**原样迁移、未改一个字节**。真实文件到位后，替换 `src/assets/protocols/` 下同名文件即可，代码无需改动。
6. **Hero 承载方式**：旧版 Library 页 hero 是「左侧文字 + 右侧图」两栏结构；新版 Wet Lab 范式的 hero 是 100dvh 背景水彩 + 居中标题，因此把同一张旧图（`protocol-hero-bg.png`）作为 `--wet-hero-image` 接入。图未改，只是承载方式改成范式的方式。
7. **`links` 为空**：旧版 Library 页本身就没有目录 / 相关链接区块，且该页不挂目录卡，故 `links: []`，未凭空补内容。

---

## 7. 验收方式与结果

**静态校验**：`tsc` 0 错误；`vite build` 成功（15 个 PDF 进 bundle，`PdfViewerModal` 单独 chunk）；`eslint . --max-warnings 0` 0 警告。

**无头 Chromium 实测**（脚本与截图都在 `_verify/`）：

| 验收项 | 结果 |
|---|---|
| 20 条路由全部可打开，无 404 / 空页 / 控制台报错 | 20/20 clean |
| 5 个既有 Wet Lab 页 + 4 个 Project 页目录卡照常显示 | 全部 `outline=true` |
| `/protocol` 不挂目录卡 | `hasOutline=false` |
| 正文满宽 | 1396px vs `/experiments` 1124px |
| 15 张卡片、4 个筛选标签、`15 manuals indexed` | 一致 |
| DNA 筛选：5 卡 + 2 贴纸，尾部铺满 6 列（与旧版布局数据逐项相同） | 一致 |
| 弹窗：打开 / 标题 / 工具栏 / iframe 指向打包后 PDF / Esc 关闭 | 通过 |
| 窄屏：900px 两列、480px 一列，无横向溢出 | 通过 |
| 入口：导航下拉第 6 卡、移动端菜单、Safety 页 Next 卡、深链、浏览器返回 | 全部进入 `/protocol` |
| `/protocol` Next 卡 → `/model` | 通过 |
| 文案逐字段与旧版比对（h1 / lede / kicker / 标题 / 摘要 / 4 个标签 / 读数 / 卡片字段 / 文件名 / Open ↗） | 完全一致，仅章节序号 06→6 |

**复现命令**（会自行 build 并起本地静态服务，需先 `yarn install`）：

```
python _verify/verify.py    # 新旧并排截图 + 文案/尺寸比对
python _verify/entries.py   # 入口点击链路
python _verify/smoke.py     # 全站 20 条路由冒烟
```

> 注：这三条命令在本机需要能启动 Chromium（本会话中已获授权执行）。`_verify/` 是本次验收的临时目录（脚本 + 截图 + JSON 报告），可整体删除。

---

## 8. 遗留与待办

1. **`/games`（Dry Lab）未迁移**：按你的指示留到 Dry Lab 改版时再做（届时需一并迁 `DryLabWikiPage`、`dry-lab-calm.css` / `dry-lab-reading.css`、三款游戏组件与 `public/game-assets` 约 170 MB 资源）。
2. **15 份 PDF 是占位件**，待真实 SOP 替换。
3. 旧版 `SubNav.tsx`、`.wet-lab-route__track` 等子页导航条代码在新版已是死代码；本次未清理（不在任务范围，清理前建议单独确认）。
4. 若日后要把 PDF 放到 `static.igem.wiki`，只需改 `src/data/protocolPages.ts` 里 15 个 `pdfUrl`，其余不用动。
