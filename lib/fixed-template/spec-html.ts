/** The approved dark editorial layout, with neutral content slots. */
const sharedCss = `
:root{--accent:#3B82F6;--ink:#F1EEE7;--muted:#B8B3AC;--line:#2C3340}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Georgia,"Times New Roman",serif;background:radial-gradient(circle at 80% 5%,#14244044,transparent 28%),linear-gradient(180deg,#070707,#0C0E12 45%,#080808);color:var(--ink)}
a{color:inherit;text-decoration:none}
.wrap{width:min(1160px,calc(100% - 32px));margin:auto}
header{border-bottom:1px solid var(--line)}
.head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;min-height:78px;gap:14px 24px;padding:14px 0}
.brand{display:inline-flex;align-items:center;flex:0 0 auto;gap:10px;font-size:22px;font-weight:700;line-height:1;letter-spacing:.02em;white-space:nowrap}
.brand-mark{display:block;width:34px;height:34px;flex:0 0 34px;object-fit:cover}
.brand-name{display:inline-block;white-space:nowrap}
.brand i{color:var(--accent);font-style:normal}
.nav{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:100%;margin-left:auto;border:1px solid var(--line)}
.nav-link{font-family:Arial,sans-serif;font-size:11px;letter-spacing:.08em;font-weight:800;padding:11px 12px;border-right:1px solid var(--line);color:#C8CDD6;white-space:nowrap}
.nav-link:last-child{border-right:0}
.nav-link:hover,.nav-link:focus-visible{background:#16243C;color:#fff}
.nav-link.active{background:var(--accent);color:#08101D}
.nav-link:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.nav-toggle{display:none}
.site-breadcrumb{font-family:Arial,sans-serif;font-size:12px;color:#A8B2C0;padding-top:16px}
.site-breadcrumb a{color:var(--accent);font-weight:800}
.hero{min-height:430px;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);align-items:center;gap:clamp(28px,4vw,54px);padding:48px 0}
.hero-copy{min-width:0}
.hero-media{min-width:0;width:100%;margin:0}
.hero-media img{display:block;width:100%;height:auto;aspect-ratio:1528/844;object-fit:cover;border:1px solid var(--line)}
.kicker,.section-index,.guide-eyebrow{font-family:Arial,sans-serif;font-size:11px;color:color-mix(in srgb,var(--accent) 80%,white);letter-spacing:.17em;font-weight:900;text-transform:uppercase}
h1{font-size:clamp(46px,6vw,68px);line-height:1.02;margin:14px 0 18px;letter-spacing:-.045em;font-weight:400}
.hero p,.inner-hero p{max-width:650px;color:#C1C4C8;line-height:1.75;font-size:17px}
.hero .support{font-size:15px;color:#ABB2BD}
.hero-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.hero-actions a{display:inline-flex;align-items:center;min-height:42px;padding:10px 16px;border:1px solid var(--accent);font:700 12px/1.3 Arial,sans-serif;letter-spacing:.03em;color:#EAF2FF}
.hero-actions a:first-child{background:var(--accent);color:#07101F}
.hero-actions a:hover{background:#1B3D76;color:#fff}
.section{padding:32px 0;border-top:1px solid var(--line)}
.section-head{display:grid;grid-template-columns:150px 1fr;gap:20px;margin-bottom:18px}
.section h2,.guide-section h2{font-size:clamp(27px,3vw,34px);font-weight:400;line-height:1.2;margin:0}
.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.card{min-width:0;background:linear-gradient(160deg,#151A23,#0D0E11);border:1px solid var(--line);padding:18px 20px}
.card a{display:block;height:100%}
.card:hover{border-color:var(--accent)}
.card .tag{font-family:Arial,sans-serif;font-size:10px;letter-spacing:.16em;color:#83B4FF;font-weight:900}
.card h3{font-size:22px;font-weight:400;line-height:1.15;margin:16px 0 6px}
.card p{color:#B7BDC6;font-size:14px;line-height:1.5;margin:0}
.inner-wrap{width:min(920px,calc(100% - 36px));margin:auto}
.inner-hero{min-height:285px;display:flex;flex-direction:column;justify-content:flex-end;padding:42px 0 32px;border-bottom:1px solid var(--line)}
.inner-hero h1{font-size:clamp(42px,5.5vw,58px);line-height:1.05;font-weight:400;margin:12px 0}
.inner-hero p{margin:0;max-width:760px}
.article{padding:12px 0 55px}
.guide-section{padding:35px 0;border-bottom:1px solid var(--line);scroll-margin-top:24px}
.guide-section h2{margin:0 0 16px}
.guide-section h3{font-size:23px;font-weight:400;line-height:1.25;margin:24px 0 8px}
.guide-section p,.guide-section li{font-size:16px;color:#C1C4C8;line-height:1.8}
.guide-section p{margin:10px 0}
.guide-section .guide-intro{font-size:17px;color:#E0E3E8}
.guide-section .guide-eyebrow{margin:0 0 8px}
.guide-subsection{margin-top:25px}
.guide-bullets,.guide-steps{padding-left:24px}
.guide-bullets li,.guide-steps li{padding-left:3px;margin:8px 0}
.guide-steps h3{margin:0 0 3px}
.guide-steps p{margin:0}
.guide-table-scroll{max-width:100%;overflow-x:auto;margin:22px 0;border:1px solid var(--line);outline-offset:2px}
.guide-table-scroll table{width:100%;min-width:560px;border-collapse:collapse;text-align:left;font:14px/1.5 Arial,sans-serif}
.guide-table-scroll caption{caption-side:top;text-align:left;padding:12px 14px;color:#E0E3E8;font-weight:700}
.guide-table-scroll th,.guide-table-scroll td{padding:11px 14px;border-top:1px solid var(--line);vertical-align:top;overflow-wrap:anywhere}
.guide-table-scroll th{color:#EAF2FF;background:#172236;white-space:nowrap}
.guide-table-scroll td{color:#C1C4C8}
.guide-table-scroll tr:nth-child(even){background:#10151D}
.guide-links{list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:0;margin:22px 0 0}
.guide-links li{margin:0;padding:0;min-width:0}
.guide-links a{display:block;height:100%;padding:15px 17px;border:1px solid var(--line);background:#111720}
.guide-links a:hover{border-color:var(--accent);background:#16243C}
.guide-links strong{display:block;color:#EAF2FF;font-size:15px;line-height:1.4}
.guide-links span{display:block;margin-top:5px;color:#AEB9C8;font-size:13px;line-height:1.5}
.guide-faq{margin-top:22px}
.guide-faq h3{margin:0 0 5px}
.guide-faq p{margin:0}
@media(min-width:821px){
  .nav-link{font-size:10px}
}
@media(max-width:820px){
  .head{align-items:center;min-height:0;gap:12px}
  .nav-toggle{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:42px;margin-left:auto;padding:9px 12px;border:1px solid var(--line);background:#111720;color:#EAF2FF;font:800 11px/1 Arial,sans-serif;letter-spacing:.08em;cursor:pointer}
  .nav-toggle:hover{border-color:var(--accent);background:#16243C}
  .nav-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
  .nav-toggle-bars{display:grid;gap:4px;width:16px}
  .nav-toggle-bars span{display:block;width:16px;height:2px;background:currentColor;transition:transform .15s ease,opacity .15s ease}
  .head[data-menu-open="true"] .nav-toggle-bars span:first-child{transform:translateY(6px) rotate(45deg)}
  .head[data-menu-open="true"] .nav-toggle-bars span:nth-child(2){opacity:0}
  .head[data-menu-open="true"] .nav-toggle-bars span:last-child{transform:translateY(-6px) rotate(-45deg)}
  .nav{display:none;order:3;width:100%;margin-left:0;grid-template-columns:repeat(3,minmax(0,1fr));border:0;gap:4px}
  .head[data-menu-open="true"] .nav{display:grid}
  .nav-link,.nav-link:last-child{min-width:0;border:1px solid var(--line);padding:11px 10px;text-align:center}
  .hero{grid-template-columns:1fr;min-height:auto;gap:28px;padding:40px 0}
  .hero-media{max-width:680px}
  .section-head{grid-template-columns:1fr;gap:8px}
  .cards{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:560px){
  .brand{font-size:20px}
  .brand-mark{width:30px;height:30px;flex-basis:30px}
  .nav{grid-template-columns:repeat(2,minmax(0,1fr))}
  .cards,.guide-links{grid-template-columns:1fr}
  .card{padding:16px 18px}
  .card h3{margin-top:12px}
  .inner-hero{min-height:0;padding-top:35px}
}
`;

const header = `<header><div class="wrap head" data-menu-open="false"><a class="brand" href="home.html" aria-label="Back to homepage">Game Guide</a><button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-controls="primary-navigation" aria-expanded="false"><span class="nav-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span><span>Menu</span></button><nav class="nav"></nav></div></header>`;

const home = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${sharedCss}</style></head><body data-template="horror-dark-v1">${header}<div class="wrap"><div class="site-breadcrumb"><a href="home.html">Home</a></div></div><main class="wrap"><section class="hero"><div class="hero-copy"><div class="kicker">Game Guide</div><h1>Game Guide</h1><p class="lead"></p><p class="support"></p><div class="hero-actions"></div></div><figure class="hero-media"></figure></section><section class="section"><div class="section-head"><div class="section-index">Guide library</div><h2>Explore the guides</h2></div><div class="cards"></div></section></main></body></html>`;

const inner = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${sharedCss}</style></head><body data-template="horror-dark-v1">${header}<section class="inner-wrap inner-hero"><div class="site-breadcrumb"><a href="home.html">Home</a> › Guide</div><div class="kicker">Game Guide</div><h1>Game Guide</h1><p class="lead"></p></section><main class="inner-wrap"><article class="article"></article></main></body></html>`;

export const SPEC_HTML: Record<string, { home: string; inner: string }> = {
  "07-horror-dark-v1": { home, inner },
};
