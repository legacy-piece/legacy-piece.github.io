import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import type { SeoPageDefinition } from "@/config/types";
import { getRelatedPages, visibleCorePages } from "@/content/registry";
import { esc, renderFixedDocument } from "@/lib/fixed-template/render";
import { pageSchemas } from "@/lib/schema";
import { routePath } from "@/lib/urls";
import { renderPageSection } from "./fixed-template-section";

function articleInner(page: SeoPageDefinition): string {
  const sections = page.sections.map(renderPageSection).join("");
  const faq = page.faq?.length
    ? `<section class="guide-section" id="faq"><h2>Frequently Asked Questions</h2>${page.faq.map((item) => `<div class="guide-faq"><h3>${esc(item.question)}</h3><p>${esc(item.answer)}</p></div>`).join("")}</section>`
    : "";
  const related = getRelatedPages(page);
  const relatedHtml = related.length
    ? `<section class="guide-section" id="related"><h2>Related Guides</h2><ul class="guide-links">${related.map((item) => `<li><a href="${esc(routePath(item.slug))}"><strong>${esc(item.navLabel)}</strong><span>${esc(item.description)}</span></a></li>`).join("")}</ul></section>`
    : "";
  return `${sections}${faq}${relatedHtml}`;
}

export function FixedTemplateInner({ page }: { page: SeoPageDefinition }) {
  const skin = siteSkin();
  const nav = visibleCorePages
    .filter((item) => item.slug.replace(/^\/+|\/+$/g, ""))
    .map((item) => ({ slug: item.slug.replace(/^\/+|\/+$/g, ""), label: item.navLabel, href: routePath(item.slug) }));
  const rendered = renderFixedDocument({
    skin,
    page: "inner",
    accentColorId: siteConfig.theme.accentColorId,
    gameName: siteConfig.game.name || siteConfig.shortName,
    nav,
    currentSlug: page.slug,
    homeHref: "/",
    logoUrl: null,
    heading: page.hero.heading,
    lead: page.hero.lead,
    eyebrow: page.hero.eyebrow || "Legacy Piece Guide",
    articleHtml: articleInner(page),
  });
  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <div dangerouslySetInnerHTML={{ __html: rendered.rest }} />
      <div className="site-container"><NativeAdSlot /></div>
    </>
  );
}
