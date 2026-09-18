# Dry Lab 子页面迁移交付说明：`/games`（Games）

> 旧版工程（只读）：`C:\Users\香芋派\.trae-cn\Official-wiki`
> 交付工程：`D:\TRAE SOLO CN\project\Official-wiki`
> 前置：Dry Lab（Model / Software / Hardware）已在当前工程完成改版，本页按同一范式接入。

---

## 1. 排查结论

| 比对项 | 旧版 | 新版（迁移前） | 结论 |
|---|---|---|---|
| Dry Lab 目录条目 | Model / Software / Hardware / **Games** | 同前 3 项 | **缺 `/games`（title: Games）** |
| 现有引用 | — | `src/data/hardwareMarkdown.ts` 的 `next` 已指向 `/games` | 迁移前是死链，现已落地 |

页面定位：**Dry Lab 04 of 04**（与 Model `01 of 04` 编号对齐）。

---

## 2. 新增文件

| 路径 | 说明 |
|---|---|
| `src/contents/games.tsx` | 页面组件：`WikiRoutePage` + Dry Lab 三色板 + `hideOutline` 变体 |
| `src/data/gamesPage.ts` | 页面内容：4 个 section（站点地图 + 3 个可玩游戏），文案照搬旧版 |
| `src/components/wiki/features/GamesShowcase.tsx` | 交互层：`GamesProvider`（共享开窗状态）、`GamesStationMap`、`GameLaunchCard`、全屏游戏面 |
| `src/styles/games-page.css` | 该页全部样式，作用域限定 `.wiki-page--games` |
| `src/components/BreastGuardianGame/**`（4 个文件） | 游戏包装组件，**旧版原样拷贝** |
| `src/components/BombCatGame/**`（4 个文件） | 同上 |
| `src/components/BioMemoryGame/**`（2 个文件） | 同上 |
| `public/game-assets/**`（230 个文件，169.7 MB） | 三款游戏的预构建静态包，**旧版原样拷贝** |
| `src/assets/wiki/dry-lab-games-hero-v2.png`（2.22 MB） | 该页 hero 水彩图 + 展示卡底图，旧版原样拷贝 |
| `src/assets/wiki/breast-guardian-showcase.png`（5.45 MB） | Breast Guardian 展示卡插画，旧版原样拷贝 |

> 三款游戏通过 `iframe` 加载 `game-assets/index.html`、`game-assets/bomb-cat/index.html`、`game-assets/bio-memory/index.html`，引用前缀是 `import.meta.env.BASE_URL`，因此在 `/jlu-fbh/` 部署路径下不会断链。

## 3. 改动文件（全部为加法）

| 路径 | 改动 |
|---|---|
| `src/pages.ts` | Dry Lab 目录末尾追加 `Games` 条目 |
| `src/contents/index.tsx` | 追加 `export { Games } from "./games.tsx";` |
| `src/components/Navbar.tsx` | `NAV_DISPLAY["Dry Lab"].cards` 追加 Games 卡片（`04 / INTERACT`、`Play · Explore · Experiment`） |
| `src/containers/App/App.tsx` | `DRY_LAB_ROUTES` 追加 `"/games"` → 走 reader-route 外壳 + `route` 页脚变体 |
| `src/components/wiki/dryLabHeroAssets.ts` | 新增 `games` hero 变体映射 |
| `src/components/wiki/WikiRoutePage.tsx` | 新增可选 prop `hideOutline`（默认 false）；章节标题支持 `hideSectionNumber` |
| `src/components/wiki/wikiPageTypes.ts` | `WikiSection` 新增可选字段 `hideSectionNumber`（仅 reader-route 模板响应；湿实验模板不读取，也无人设置） |

> 两个新开关默认关闭，只有 `/games` 使用；其余 20 条路由输出不变（第 7 节已全站冒烟验证）。

---

## 4. 页面结构（按新版范式）

| section | 编号 | kicker | 标题 | 内容 |
|---|---|---|---|---|
| `games-project-map` | **不编号** | `Project map / 04 stations` | `Follow the interactive route` | 4 站点路线图 |
| `game-breast-guardian` | 1 | `Playable project / 01` | `Breast Guardian RPG` | 展示卡 → 全屏游戏 |
| `game-bomb-cat` | 2 | `Playable project / 02` | `Bomb Cat · 炸弹猫` | 展示卡 → 全屏游戏 |
| `game-bio-memory` | 3 | `Playable project / 03` | `生物翻翻乐` | 展示卡 → 全屏游戏 |

- 站点地图是**路线图**而不是编号章节，所以用新增的 `hideSectionNumber` 去掉编号，标题与站点列左对齐（实测两者都在 x=95）；编号章节从下面第一张可玩游戏开始 1 / 2 / 3。
- 旧版地图与展示卡各自带的 `h2`（`games-project-map__heading` / `games-showcase__heading`）改为范式的 section header（kicker / 标题 / 摘要），**文字一字未改**。
- 第 4 个站点「虚拟实验室」（`04 / In development`、`Coming later`）按你的要求保持原样，未接入内容。

## 5. 布局变体

与 Protocol Library 同一套实现：`<WikiRoutePage hideOutline />`

```css
.wiki-page.wiki-page--route.wiki-page--games .wiki-record--full {
  grid-template-columns: minmax(0, 1fr);   /* 不挂目录卡，正文占满 */
}
@media (max-width: 991px) {
  .wiki-page.wiki-page--route.wiki-page--games .wiki-record--full {
    grid-template-rows: minmax(0, 1fr);     /* ≤980px 行模板修正，避免掉进 36dvh 目录行 */
  }
}
```

实测（1440×900）：`/games` 正文框 **1396px**，对照 `/model`、`/software`、`/hardware` 均为 **1124px** —— 释放的目录列宽度全部并入正文。

## 6. 交互与入口

- **站点地图跳转**：点击 1 / 2 / 3 号站点，滚动到对应游戏展示区（实测三次跳转的 `scrollTop` 分别为 750 / 1821 / 2891，目标区块均进入视野）。
- **进入游戏**：点击展示卡任意位置 → 全屏游戏面（`role="dialog"`），`game-assets` 的 iframe 实际加载（实测 `bio-memory` 已渲染出开局界面）。
- **退出游戏**：Esc / 点击遮罩 / `Close game` 均可关闭，关闭后焦点回到刚才点击的展示卡。
- **入口**：顶部导航 `Dry Lab` 下拉第 4 张卡（桌面）+ 移动端菜单；`Hardware` 页的 “Next page” 卡片原本就指向 `/games`，现在从死链变为可用入口。

---

## 7. 验收结果

| 验收项 | 结果 |
|---|---|
| `tsc` / `eslint --max-warnings 0` | 0 错误 0 警告 |
| `vite build` | 成功（游戏包装组件单独 chunk，`public/game-assets` 全量进 `dist`） |
| 全站 21 条路由 | 全部可打开，无 404 / 空页 / 控制台报错 |
| `/games` 不挂目录卡 | `hasOutline=false`，`wiki-record--full` |
| 正文满宽 | 1396px vs 兄弟页 1124px |
| `/model` `/software` `/hardware` 目录卡 | 均正常（未受变体影响） |
| 站点地图跳转 3/3 | 生效 |
| 游戏 iframe 实际加载 | 生效（bio-memory 开局界面已渲染） |
| 关闭游戏 + 焦点回归 | 生效 |
| 窄屏 900px / 480px | 站点图纵向排列，无横向溢出 |
| 文案逐字段与旧版比对 | 完全一致（站点 4 条、展示卡 3 张的标签/标题/描述/章节名/按钮文案） |

复现命令（需先 `yarn install`；脚本会自行 build 并起本地静态服务）：

```
python _verify/games_check.py     # 新旧对比截图 + 游戏实测 + 全站冒烟
python _verify/games_numbering.py # 编号与站点跳转核对
```

> `_verify/` 是本次验收的临时目录（脚本 + 截图 + JSON 报告），可整体删除。

---

## 8. 与旧版 / 范式不完全对齐之处

1. **容器**：旧版 `/games` 是居中 `min(1180px, 100% - 48px)` 的文档流页面，顶部有 `SubNav` 子页导航条；新版在新版 Dry Lab 的 reader 框架内（hero → mat → 纸框 → section → 收尾卡 → 页脚），无 `SubNav`（该组件在当前工程已是遗留代码），正文满宽。
2. **配色**：旧版用自己那套 `--dry-calm-*` 令牌，站点丝带是粉色 `#c96e8b`（不在 Dry Lab 三色板内）。新版全部改读 `route-palette-drylab.css` 的三色板派生令牌（`--route-ink/-muted/-line/-paper/-accent`），丝带用 `--route-accent` / `--route-main` 派生，未引入新色相。
3. **区块编号**：旧版地图与展示卡都只有一行 kicker 文本、没有编号；新版按范式加了编号，其中地图段按你的要求不编号，展示段为 1 / 2 / 3。
4. **游戏本体**：三款游戏（Breast Guardian RPG / Bomb Cat / Bio Memory Match）与其 169.7 MB 资源为**旧版原样拷贝**，未做任何改动；iGEM 规则若要求资源托管到 `static.igem.wiki`，需整体上传并调整 `BASE_URL` 引用（与旧版做法一致）。
5. **第 4 个站点「虚拟实验室」**仍是占位（`In development` / `Coming later`），未接入内容。

---

## 9. 遗留与待办

1. 「虚拟实验室」内容待补。
2. `public/game-assets`（169.7 MB）会随仓库一起提交，注意 Git 体积与 iGEM 上传规则。
3. 若日后要把游戏资源迁到 `static.igem.wiki`，只需改三个游戏组件的 `import.meta.env.BASE_URL` 前缀与 `game-assets` 内资源引用。
