"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from "react";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import type { InternalLink } from "@/config/types";
import { homePage } from "@/content/home";
import { isFixedTemplate } from "@/lib/fixed-template/mode";
import { renderFixedDocument } from "@/lib/fixed-template/render";
import { assetPath, routePath } from "@/lib/urls";

function setMenuOpen(root: HTMLDivElement | null, open: boolean) {
  const head = root?.querySelector<HTMLElement>(".head");
  const toggle = root?.querySelector<HTMLButtonElement>(".nav-toggle");
  if (!head || !toggle) return;
  head.dataset.menuOpen = String(open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  if (!open) closeGroups(root);
}

function closeGroups(root: HTMLDivElement | null) {
  root?.querySelectorAll(".template-nav-trigger").forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
}

export function FixedTemplateHeader({ links }: { links: InternalLink[] }) {
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMenuOpen(headerRef.current, false), [pathname]);
  useEffect(() => {
    function outside(event: globalThis.MouseEvent | TouchEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(headerRef.current, false);
    }
    function resize() { setMenuOpen(headerRef.current, false); }
    document.addEventListener("click", outside);
    document.addEventListener("touchstart", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("click", outside);
      document.removeEventListener("touchstart", outside);
      window.removeEventListener("resize", resize);
    };
  }, []);
  if (!isFixedTemplate()) return null;
  const skin = siteSkin();
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = path === "/" ? "home" : "inner";
  const currentSlug = page === "inner" ? path.split("/").filter(Boolean).at(-1) ?? "" : "";
  const nav = links
    .filter((link) => link.slug.replace(/^\/+|\/+$/g, ""))
    .map((link) => ({
      slug: link.slug.replace(/^\/+|\/+$/g, ""),
      label: link.label,
      href: routePath(link.slug),
    }));
  const rendered = renderFixedDocument({
    skin,
    page,
    accentColorId: siteConfig.theme.accentColorId,
    gameName: siteConfig.game.name || siteConfig.shortName,
    nav,
    currentSlug,
    homeHref: "/",
    logoUrl: assetPath(siteConfig.assets.logo),
    bannerUrl: page === "home" ? assetPath(siteConfig.assets.cover) : null,
    heading: page === "home" ? homePage.hero.heading : null,
    lead: page === "home" ? homePage.hero.lead : null,
  });
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;
    const trigger = event.target.closest(".template-nav-trigger");
    if (trigger) {
      const open = trigger.getAttribute("aria-expanded") !== "true";
      closeGroups(headerRef.current);
      trigger.setAttribute("aria-expanded", String(open));
    } else if (event.target.closest(".nav-toggle")) {
      const open = headerRef.current?.querySelector(".nav-toggle")?.getAttribute("aria-expanded") !== "true";
      setMenuOpen(headerRef.current, open);
    } else if (event.target.closest(".nav-link")) {
      setMenuOpen(headerRef.current, false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Tab" && event.target instanceof Element) {
      // Let normal Tab order work; close the dropdown only after focus leaves it.
      const group = event.target.closest(".template-nav-group");
      if (group) requestAnimationFrame(() => {
        if (!group.contains(document.activeElement)) group.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
    }
    if (event.key !== "Escape") return;
    const expanded = headerRef.current?.querySelector<HTMLButtonElement>('.template-nav-trigger[aria-expanded="true"]');
    if (expanded) {
      event.preventDefault();
      closeGroups(headerRef.current);
      expanded.focus();
      return;
    }
    const toggle = headerRef.current?.querySelector<HTMLButtonElement>(".nav-toggle");
    if (toggle?.getAttribute("aria-expanded") !== "true") return;
    setMenuOpen(headerRef.current, false);
    toggle.focus();
  }

  return <div ref={headerRef} onClick={handleClick} onKeyDown={handleKeyDown} dangerouslySetInnerHTML={{ __html: rendered.chrome }} />;
}
