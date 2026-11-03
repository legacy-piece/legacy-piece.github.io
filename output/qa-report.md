> 2026-11-03 最新更新：用户已要求直接补齐剩余三页，五页现已全部生成。此报告中的 HOLD/两篇新页等结论属于历史状态；当前以 [五页最新验收](five-page-completion.md) 为准。

> 2026-11-03 更新：导航已按用户最新要求恢复旧 19 入口两行展示，新增页使用独立 More Guides。以下六分类导航描述及其 UI 数据为历史记录，当前导航以 [最新验收](navigation-update.md) 为准；正文与事实 HOLD 状态不变。

# Legacy Piece 实施与验收报告

日期：2026-11-02（Asia/Shanghai）

**发布决策：BLOCKED_UNVERIFIED；未提交、未推送、未触发生产部署。**

基线：`main` / `f391de0a870b88c467ff8900b9bdf25d44e132e5`。开始时工作区干净。目标分支仍为 main；没有创建目标 commit。

## 改动边界

| 文件 | 影响 URL | 冻结区及授权依据 |
|---|---|---|
| content/data/pages.json | 两个新页；/dio/、/undead-fishman/ | 追加新对象；各在 requirements 的 links 末尾追加一条，不改原字段 |
| lib/fixed-template/render.ts | 全站 Header | 用六个一级入口和三个下拉分组替代两行链接；永久 SSR href |
| lib/fixed-template/spec-html.ts | 全站 Header | 只追加 .head/.template-nav 导航作用域样式；1199px 以下折叠 |
| components/templates/fixed-template-header.tsx | 全站 Header | 事件代理、互斥分组、Esc 焦点恢复、外部点击及触摸关闭 |
| components/templates/fixed-template-home.tsx | 首页卡片集合 | 从动态 entries 排除本轮五个 slug，防止追加数据意外改变冻结首页正文 |

Footer 和 sitemap 复用原自动集合，无需改源码。原 Header 模板、正文 CSS、Hero、Footer 网格、GA4 和 Adsterra 集成文件保留。Next 构建自动改写的 next-env.d.ts 已还原，不纳入交付。output/ 仅为本地交付，不在 public/ 或 out/，不可提交公开站点。

## 页面与事实闸门

| URL | 主词 / 独立意图 | 状态 | 可见英文词 | Title / Description 字符 |
|---|---|---|---:|---|
| /dreadtide-revenant/ | legacy piece dreadtide revenant / 敌人位置、材料与种族用途 | READY（社区来源） | 637 | 50 / 148 |
| /blood-stained-stand-arrow/ | legacy piece blood stained stand arrow / 材料获取、制作和下一步 | READY（社区来源） | 756 | 49 / 151 |
| /conquerors-haki/ | legacy piece conqueror haki / Haoshoku 解锁 | HOLD | — | — |
| /star-platinum/ | how to get star platinum in legacy piece / Jotaro 全流程 | HOLD | — | — |
| /joestar-clan/ | how to get joestar clan in legacy piece / 获取途径 | HOLD | — | — |

READY 表示正文有可用的二手证据，并非已实机验证或已上线。三个 HOLD 页没有添加占位对象、路由、导航或 sitemap；没有替换其关键词。

### 来源与限制

- Dreadtide：实际读取 [Roblox Den 的带图攻略](https://robloxden.com/game-codes/legacy-piece/guides/how-to-get-undyne-in-legacy-piece) 和 [Roonby 的种族流程](https://roonby.com/2026/08/25/legacy-piece-undyne-guide-how-to-get-undyne-spec-and-undead-fishman/amp/)。前者支持 Grave Island 与 Revenant 来源；二者交叉支持材料数量和用途。未发布掉率、坐标、刷新周期、Boss 身份或保证掉落。
- 血染箭：实际读取 [Roblox Den Dio 图文攻略](https://robloxden.com/game-codes/legacy-piece/guides/how-to-get-dio-the-world-and-over-heaven-in-legacy-piece) 与 [AllThingsHow 制作流程](https://allthings.how/how-to-unlock-the-world-dio-spec-in-legacy-piece/)。配方 30 碎片 / 15 血、Joestar 开启条件和 Shadow Dio 顺序可交叉支持；SS 与最终 25m 取自后者。召唤成本和碎片产出明确归属 Roblox Den，并提示以游戏面板为准。没有声称官方认证。
- Roblox 官方 place URL 无法通过网页工具访问；Trello 棋盘仅返回需 JavaScript 的壳，不能从中验证官方来源身份和卡片。终端访问 Trello DNS 失败。没有声称已读官方卡片或玩过游戏。
- AwesWikis 血染箭详情重复返回 Cache miss；虽然搜索缓存显示字段，未作为已读取详情的证据，相关背包上限和不可交易断言已从正文移除。

### HOLD 的最短补证

| 页 | 缺失或冲突 | 最短可用证据 |
|---|---|---|
| Conqueror | [任务库](https://aweswikis.com/legacy-piece/wiki/quests/) 既有 20 玩家/300 闪避/5 世界 Boss 条目，又列出 50 玩家/200 闪避/50 世界 Boss；[首任务](https://aweswikis.com/legacy-piece/wiki/quests/conqueror-trial-1/) 说明 Potential Man、200 Boss，但地点未指定。未能确定当前链和后续实际要求。 | 当前游戏 NPC 起点与四阶段任务 UI，或已确认属于本游戏的开发者卡片 |
| Star Platinum | [详情](https://aweswikis.com/legacy-piece/wiki/styles/star-platinum/) 的 Earlier published details 在 Stardust 3 中途截断。最终材料有列出，后半顺序、Frozen Time Core 来源和交付流程缺乏足够核实；本仓库旧文不能当独立外部证据。 | Jotaro 后半任务 UI、Core 来源和最终领取界面，或完整当前官方卡 |
| Joestar | [第三方获取文章](https://legacy-piece-wiki.wiki/en/clans/legacy-piece-clan-drop-rate/) 同时涉及 gacha、任务 token、boss 掉落等说法，[同站 reroll 文](https://legacy-piece-wiki.wiki/en/guides/legacy-piece-how-to-reroll/) 又混用概率；缺少可信确定的实际获取路径。 | Clan Reroll 使用界面和 Joestar 所在池，及该道具来源；不需要编造抽取概率 |

## 导航覆盖

共 21 个真实页面锚点＝旧 19＋READY 2；HOLD 3 按真实性闸门不放空链接。六个一级入口为 Codes、Tier List、Wiki、Builds & Progression、Quests & Bosses、Resources。

| 分组 | 页面 |
|---|---|
| 快捷入口 | Codes、Tier List、Wiki |
| Builds & Progression | Traits、Races、Clans、Fruits、Undead Fishman、Haki |
| Quests & Bosses | Dio、Araya、Over Heaven、Lost Afterimage、Wild Hunt、Defy Fate、Realm Beyond、Broken Pedestal、Dreadtide Revenant、Blood-Stained Stand Arrow |
| Resources | Resources、Trello |

构建 HTML 中逐页校验所有锚点唯一、集合完整、href 可定位静态文件。新页 active 由一级分组和 aria-current 双重标示，默认折叠内容仍在 SSR HTML 内。Footer 亦包含两新页。

## Freeze Diff

编程遍历原 19 页：移除以下两条新增链接后，全部 JSON 精确深比较一致。home.json、site.json 字节一致。原 Title、Description、H、正文段落、表格、FAQ、链接、relatedSlugs 全部保留。

- /dio/ → /blood-stained-stand-arrow/；section=requirements；锚文本：Prepare the Blood-Stained Stand Arrow materials。
- /undead-fishman/ → /dreadtide-revenant/；section=requirements；锚文本：Find Dreadtide Revenants and farm Fangs and Hearts。

广告/统计相关源码未修改；保留现有 ID、脚本和时机。首页 gallery 特意过滤新 slug，防止动态集合扩展造成首页 H3/卡片正文变化。

## 逐页 SEO

统计口径：最终静态 HTML 的 #main-content，剔除 script/style，包含可见 Hero、表格、FAQ 和 Related Guides；不含全局导航、Footer、广告脚本。英文词使用字母单词并允许内部连字符/撇号。精确短语大小写不敏感，保留词序与连字符；另报连字符归一化变体，不能混称 token 密度。

### /dreadtide-revenant/

- Title（50）：Legacy Piece Dreadtide Revenant – Location & Drops
- Description（148）：Find Dreadtide Revenants on Grave Island in Legacy Piece, learn where Fangs and Hearts fit into Undead Fishman, and prepare a focused material farm.
- 可见英文词：637；主词精确次数：1；每 100 词完整短语：0.157；连字符归一化变体次数：1。
- Canonical：https://legacy-piece.github.io/dreadtide-revenant/；robots：index, follow；sitemap 已纳入；单 H1；FAQ 4 条。
- Schema：WebPage, BreadcrumbList, FAQPage，未添加 Rating/Review/HowTo。
- 文章为较短的材料任务解答，事实能支持的部分直接给出；不以 1,000–1,600 词长流程目标凑内容。
- H 结构：
  - H1: Legacy Piece Dreadtide Revenant: Location and Drops
  - H2: Where to Find Dreadtide Revenants
  - H2: Dreadtide Fang and Heart: What You Need
  - H2: How to Farm Dreadtide Materials
  - H2: Where This Farm Fits in the Undyne Route
  - H2: Guide References
  - H2: Frequently Asked Questions
  - H3: Where are Dreadtide Revenants?
  - H3: What are Dreadtide Fangs used for?
  - H3: Are Fangs and Hearts the same item?
  - H3: How long will the farm take?
  - H2: Related Guides
- 站内链接：/, /races/, /undead-fishman/
- 长尾：Grave Island、Dreadtide Fang、Dreadtide Heart、farm、Undead Fishman。

### /blood-stained-stand-arrow/

- Title（49）：Legacy Piece Blood-Stained Stand Arrow – Crafting
- Description（151）：Craft the Blood-Stained Stand Arrow in Legacy Piece with Dio’s quest, 30 fragments, 15 Vampire Blood, Rank SS and the required Money before Shadow Dio.
- 可见英文词：756；主词精确次数：0；每 100 词完整短语：0.0；连字符归一化变体次数：0。
- Canonical：https://legacy-piece.github.io/blood-stained-stand-arrow/；robots：index, follow；sitemap 已纳入；单 H1；FAQ 4 条。
- Schema：WebPage, BreadcrumbList, FAQPage，未添加 Rating/Review/HowTo。
- 文章为较短的材料任务解答，事实能支持的部分直接给出；不以 1,000–1,600 词长流程目标凑内容。
- H 结构：
  - H1: How to Get the Blood-Stained Stand Arrow in Legacy Piece
  - H2: Start Dio’s Quest Before Crafting
  - H2: Blood-Stained Stand Arrow Materials and Requirements
  - H3: Broken Stand Arrow Fragments
  - H3: Vampire Blood
  - H2: When to Forge the Arrow
  - H2: What to Do After Crafting
  - H2: Why Crafting May Be Blocked
  - H2: Guide References
  - H2: Frequently Asked Questions
  - H3: Is the arrow the same as The World?
  - H3: Where do Broken Stand Arrow Fragments come from?
  - H3: Does the opening payment cover crafting?
  - H3: Does crafting finish the entire Dio route?
  - H2: Related Guides
- 站内链接：/, /dio/, /the-world-over-heaven/
- 长尾：Broken Stand Arrow Fragments、Vampire Blood、Dio、forge、Shadow Dio、The World。

## QA 与部署

| 闸门 | 结果 | 实测范围 |
|---|---|---|
| BUILD | PASS | npm ci、typecheck、lint、build:site |
| UI_QA | PASS（已实现范围） | 原版 64、修改后 80 组页面/视口；49 次导航/触摸路线；以下菜单操作与样式比对 |
| SEO_QA | PASS（READY 2 页） | SSR、canonical、sitemap、robots、FAQ schema、站内 href；详细数值见 audit.json |
| FREEZE_QA | PASS | 19 页全部字段及首页配置深比较；8 旧 URL 的 metadata/H 与正文样本比对 |
| FACT_QA | UNVERIFIED（全批次） | 两页有实际读取的社区资料；三页 HOLD；没有当前游戏实机/官方卡验证 |
| POST_DEPLOY | UNVERIFIED | 未提交、未推送、未部署 |

实际浏览器为 Chrome。320 / 375 / 390 / 768 / 820 / 1023 / 1024 / 1440 CSS px 均覆盖。375 / 390 / 768 / 1024 以及 820/1023 使用折叠菜单；1440 为桌面六入口。Home、Traits、Haki、Dio、Broken Pedestal、Wiki、Clans、Undead Fishman 和两个新页在八种视口全部 HTTP 200、单 Header、无横向溢出、CSS sheet 已加载。原版也无横向溢出或 CSS 失败。

各视口从首页、旧 Haki 页、新 Dreadtide 页，通过顶部菜单实际进入两新页；24 组场景逐个操作三个分组的 Enter / Space / Tab / Escape、焦点恢复、外部点击关闭和单组展开，并滚动到最后链接。额外使用 hasTouch 的移动浏览器环境 tap 展开和跳转，确认跳转后菜单关闭。49 条路线全部通过。补充 24 组布局核验：品牌和导航无重叠、Footer 在正文之后、可见菜单链接与按钮的热区均至少 44×44 CSS px；21 个导航目标和实际 CSS 请求全部返回 HTTP 200。详见 [补充浏览器审计](extra-ui-audit.json)。

旧页 H1/H2/H3、Title/Description/canonical 精确一致；所有样本 Header、H1、正文容器的字色、背景、字体和容器宽与基线相同（导航自身属于授权变化）；未加内链的页面 main 文本精确一致。两处加链页由 JSON 全字段冻结审计约束。共 64 张截图，before/after 首页和四个旧子页四种主视口、两新页四视口和菜单截图可查；首页另有首屏截图。广告/统计只检查代码保留，未将第三方广告投放状态当作已验证。

补丁：[legacy-expansion.patch](legacy-expansion.patch)，已用 git apply --check --cached 对当前基线 index 校验可应用。源代码变动为五个文件，不包含 output/ 内的报告或截图。

可复查数据：[静态 SEO/Freeze 审计](audit.json)、[浏览器审计](ui-audit.json)。截图位于 [playwright](playwright/)，关键文件为 after-home-first-375.png、after-home-first-1440.png、menu-home-375.png、menu-home-1440.png。

依赖安装 npm ci、typecheck、lint、build:site 均真实运行通过。静态全部 HTML 的站内 href、CSS 文件、导航集合、新页 metadata/canonical/schema、sitemap/robots 已检查。所有内部链接目标存在。外部参考链接采用实际读到的内容；没有承诺外部页面永久可用。

没有推送：本轮关键内容存在 HOLD，按提示词 G4.7 禁止发布；没有尝试远端写入，因此不能把它说成 GitHub 写权限不足。交付本地源文件、patch 和报告。POST_DEPLOY=UNVERIFIED（未部署，不将既有线上站点当作新版验收）。

## GSC 后续跟踪

1. 获准发布后，核对两新页的 sitemap 发现与索引状态。
2. 按页面过滤曝光、点击与对应搜索词，观察是否出现意图偏移或旧页蚕食。
3. 对 HOLD 页面先补齐事实证据，避免为了扩页数量发布不可靠流程。
