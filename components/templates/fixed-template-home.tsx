import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import type { HomePageDefinition, InternalLink } from "@/config/types";
import { visibleCorePages } from "@/content/registry";
import { renderFixedDocument } from "@/lib/fixed-template/render";
import { homeSchemas } from "@/lib/schema";
import { assetPath, routePath } from "@/lib/urls";
import { renderPageSection } from "./fixed-template-section";

function supplement(home: HomePageDefinition): string {
  return home.sections.map(renderPageSection).join("");
}

export function FixedTemplateHome({ home }: { home: HomePageDefinition }) {
  const skin = siteSkin();
  const links: InternalLink[] = visibleCorePages
    .filter((page) => page.slug.replace(/^\/+|\/+$/g, ""))
    .map((page) => ({ slug: page.slug, label: page.navLabel }));
  const entries = visibleCorePages.map((page) => ({
    href: routePath(page.slug),
    title: page.navLabel,
    text: page.description,
  }));
  const rendered = renderFixedDocument({
    skin,
    page: "home",
    accentColorId: siteConfig.theme.accentColorId,
    gameName: siteConfig.game.name || siteConfig.shortName,
    nav: links.map((link) => ({ slug: link.slug, label: link.label, href: routePath(link.slug) })),
    homeHref: "/",
    logoUrl: assetPath(siteConfig.assets.logo),
    bannerUrl: assetPath(siteConfig.assets.cover),
    heading: home.hero.heading,
    lead: home.hero.lead,
    eyebrow: home.hero.eyebrow,
    supportingText: home.hero.supportingText,
    heroLinks: [
      ...(home.hero.primaryLink ? [{ label: home.hero.primaryLink.label, href: routePath(home.hero.primaryLink.slug) }] : []),
      ...(home.hero.secondaryLink ? [{ label: home.hero.secondaryLink.label, href: home.hero.secondaryLink.url, external: true }] : []),
    ],
    entries,
    supplementHtml: supplement(home),
  });
  return (
    <>
      <JsonLd data={homeSchemas(home)} />
      <div dangerouslySetInnerHTML={{ __html: rendered.rest }} />
      <div className="site-container"><NativeAdSlot /></div>
      {home.faq.length ? (
        <div className="site-container"><Faq items={home.faq} /></div>
      ) : null}
    </>
  );
}
