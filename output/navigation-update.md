> 2026-11-03 最新更新：用户已要求直接补齐剩余三页，五页现已全部生成。此报告中的 HOLD/两篇新页等结论属于历史状态；当前以 [五页最新验收](five-page-completion.md) 为准。

# 2026-11-03 导航调整验收

已按用户最新授权恢复旧 19 个入口的两行导航。旧入口顺序、分行算法、每行成员与原始 HEAD 完全一致。只将本轮新增攻略放进独立的 More Guides；目前仅显示两篇 READY 攻略。三篇 HOLD 页面仍不生成空入口。

桌面将 More Guides 放在旧两行导航右侧，旧入口全部直接展示；移动端保留原 Menu 的两列/三列入口网格，并在末尾追加 More Guides。折叠临界恢复原来的 1023px，1024px 展示两行入口。菜单支持 Enter、Space、Tab、Escape、焦点恢复、外部点击关闭、内部滚动及跳转后关闭。

本次源码仅进一步调整 lib/fixed-template/render.ts 和 lib/fixed-template/spec-html.ts；此前两篇正文和两条旧页内链保持不变。复用已有事件代理，无新依赖。

验证结果：

- typecheck / lint / build:site：PASS。
- 320、375、390、768、820、1023、1024、1440 CSS px × 首页、Haki、两新页，共 32 组真实 Chrome 检查：PASS。
- 1024/1440 的旧入口实际几何位置严格为两行，全部可见；各宽度无溢出、品牌无重叠、CSS 正常。
- 每组实测新增菜单 Enter/Space/Tab/Escape、焦点恢复、外部关闭和路由跳转；另以触屏环境 tap 进入 Dreadtide：PASS。
- 全部导出页面的 19 个入口顺序/每行成员精确比对原版：PASS。
- 旧 19 页字段冻结、新页 canonical/sitemap/SSR、全站站内 href 静态审计：PASS。

数据：[本次浏览器审计](restored-navigation-audit.json)。截图：[桌面](playwright/restored-home-1440.png)、[1024px](playwright/restored-home-1024.png)、[手机菜单](playwright/restored-menu-375.png)。

本次未提交或推送。原批次内容的三个 HOLD 原因仍成立，发布决策仍为 BLOCKED_UNVERIFIED。

本地预览：http://localhost:8876/ 。已更新 legacy-expansion.patch，包含截至本次的完整源代码差异。
