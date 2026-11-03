# 2026-11-03 五页补齐与 On-page SEO 验收

五个新增页面已全部生成并接入 More Guides、Footer 和 sitemap。原 19 个入口保留原顺序和两行分配。

用户本轮明确授权：不再以此前事实闸门阻挡三页制作，以完成页面与 On-page SEO 为重点。当前为 USER_APPROVED_EXCEPTION；不再有 HOLD 页面。内容使用已取得的社区资料，冲突的精确任务数量不作为确定值填入；不声称游戏实机或官方验证。用户授权不代表排名、流量或收入保证。

本次只进一步编辑 content/data/pages.json：新增三对象，并在 /haki/ conqueror、/broken-pedestal/ star-platinum、/clans/ roster 的 section.links 末尾各追加一条主题链接。之前两篇新增正文保持不变。所有旧页的其他字段、首页、广告及统计代码保持不变。

| 页面 | 可见英文词 | Title 字符 | Description 字符 | FAQ |
|---|---:|---:|---:|---:|
| /dreadtide-revenant/ | 637 | 50 | 148 | 4 |
| /blood-stained-stand-arrow/ | 756 | 49 | 151 | 4 |
| /conquerors-haki/ | 983 | 47 | 152 | 6 |
| /star-platinum/ | 1100 | 54 | 159 | 6 |
| /joestar-clan/ | 1165 | 49 | 155 | 6 |

词数来自最终静态 HTML 的可见主体（含 Hero、表格、FAQ 和 Related Guides；不含导航、Footer、script/style）。不把关键词密度作为排名承诺。完整标题、描述、标题结构、主词次数、内链、schema 与 canonical 见 [SEO 审计](five-page-seo-audit.json)。

## 验证结果

- 类型检查、Lint、build:site：PASS。
- 40 组真实 Chrome 页面/视口：PASS。宽度 320/375/390/768/820/1023/1024/1440，覆盖首页、旧 Haki 和新增三页。
- 每种宽度从 More Guides 逐一进入全部五页，共 40 次菜单跳转：PASS；另以触屏 tap 进入最后一项 Joestar：PASS。
- Enter/Space/Tab/Escape、焦点恢复、外部关闭、跳转关闭：PASS。
- 各视口无横向溢出；桌面旧入口实际为两行；品牌与导航无重叠；新页菜单项及父菜单 active 正确。
- 全部 24 个导航目标及 CSS 请求 HTTP 200。
- 导出 HTML 全站站内链接无缺失文件；五页 Footer/sitemap/canonical/robots/SSR 正文/FAQ schema 正常。所有新页单 H1，无新增 Rating/Review/HowTo。
- 原 19 页移除获准五条新增内链后，全部字段与原始基线深比较一致；首页和站点配置字节一致。旧入口每行成员及顺序逐页与原版一致。

浏览器数据：[five-page-ui-audit.json](five-page-ui-audit.json)。截图位于 playwright/five-*.png，覆盖三新页 375/390/768/1440 和菜单 375/390/768/1024/1440。

## 逐页正文与搜索意图

### /conquerors-haki/

Title：Legacy Piece Conqueror's Haki – Trials & Unlock

Description：Unlock Conqueror's Haki in Legacy Piece with Potential Man's trial route, the Money requirement, a four-stage checklist, and fixes for stalled progress.

正文标题：
- H1: How to Get Conqueror's Haki in Legacy Piece
- H2: Conqueror's Haki Requirements and Starting NPC
- H2: Conqueror Trial 1–4: Progression Checklist
- H3: Boss defeats and player-combat progress
- H3: Observation Haki dodge objective
- H3: World-boss objective and final handoff
- H2: Conqueror vs Armament V2 and Observation
- H2: Why Your Conqueror Trial Is Not Counting
- H2: Haki Progression References
- H2: Frequently Asked Questions
- H3: How do you get Conqueror's Haki in Legacy Piece?
- H3: Who gives Conqueror Trial 1?
- H3: Is Haoshoku the same as Conqueror's Haki?
- H3: Is Conqueror the same as Ryou?
- H3: Do normal dashes count as Observation Haki dodges?
- H3: Why do guides list different trial totals?
- H2: Related Guides

### /star-platinum/

Title：How to Get Star Platinum in Legacy Piece – Quest Guide

Description：Get Star Platinum in Legacy Piece through Jotaro's Stardust quests, with Joestar preparation, Broken Pedestal steps, material totals and Observation Haki tips.

正文标题：
- H1: How to Get Star Platinum in Legacy Piece
- H2: Jotaro Location and Star Platinum Requirements
- H2: Stardust Quest Stages: Pedestal to Final Materials
- H3: Stardust 1: Find the Broken Pedestal
- H3: Stardust 2: Defeat 40 Special Bosses
- H3: Stardust 3: Collect 50 Starlight Shards
- H3: Stardust 4: Complete the Observation Haki Dodges
- H3: Stardust 5: Collect Starlight Cores
- H2: Star Platinum Materials and Final Payment
- H2: Return to Jotaro and Claim Star Platinum
- H2: Missing Drops, Stalled Dodges and Other Quest Issues
- H2: Star Platinum Route References
- H2: Frequently Asked Questions
- H3: Where is Jotaro in Legacy Piece?
- H3: Do I need Joestar for Star Platinum?
- H3: Does the Broken Pedestal give Star Platinum?
- H3: Can I farm Starlight Shards before Stardust 3?
- H3: Why are my Stardust dodges not counting?
- H3: How much is the final Star Platinum payment?
- H2: Related Guides

### /joestar-clan/

Title：How to Get Joestar Clan in Legacy Piece – Rerolls

Description：Get the Joestar clan in Legacy Piece with a focused Clan Reroll plan, understand its Dio and Jotaro requirements, and avoid replacing it during key quests.

正文标题：
- H1: How to Get the Joestar Clan in Legacy Piece
- H2: How to Get Joestar: Clan Reroll Route
- H3: Collect the correct reroll item
- H3: Roll through the clan interface
- H3: Keep Joestar when it appears
- H2: How to Plan Your Clan Reroll Farm
- H2: What Joestar Unlocks: Dio and Star Platinum
- H2: Inherited Resolve and Defy Fate
- H2: Common Joestar Reroll Mistakes
- H2: Joestar and Clan Progression References
- H2: Frequently Asked Questions
- H3: How do you become a Joestar in Legacy Piece?
- H3: Is Joestar a race or a clan?
- H3: Is Joestar guaranteed after a fixed number of rerolls?
- H3: Do I need Joestar for Dio?
- H3: Does Joestar automatically unlock Star Platinum?
- H3: Should I reroll Joestar during a quest?
- H2: Related Guides

## 来源说明与部署

Conqueror 页使用 Potential Man 首任务、Haki 总览和任务目录等社区来源；后续任务数量有版本差异，页面保留活动类别并引导按当前 counter 完成。Star Platinum 页使用 Jotaro/Stardust 资料及相连材料和 Boss 路线；Joestar 页将 reroll 获取表述为社区路线，不写具体中奖概率或保底。引用入口可在页面参考区直接访问。资料抓取失败的详情 URL 没有被声称为已读取的官方资料。

本地预览：http://localhost:8876/ 。未提交、未推送，未触发生产部署。旧报告中的三页 HOLD、两项 More Guides 和六分类导航均为历史状态，当前以本报告为准。

最新累计源代码补丁：[legacy-expansion.patch](legacy-expansion.patch)，不包含 output/ 内的报告和截图。
