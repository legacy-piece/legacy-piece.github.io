"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NativeAdSlot } from "./native-ad-slot";
import { ResponsiveBanner } from "./responsive-banner";

export function FixedTemplateAdContent({ html, page }: { html: string; page: "home" | "inner" }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [hosts, setHosts] = useState<{ banner: HTMLDivElement; native: HTMLDivElement } | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const hero = root?.querySelector(page === "home" ? ".hero" : ".inner-hero");
    if (!root || !hero) return;

    const banner = document.createElement("div");
    banner.className = "fixed-ad-host";
    hero.insertAdjacentElement("afterend", banner);

    const firstContent = page === "home"
      ? root.querySelector("main > .section")
      : root.querySelector("main .guide-section .guide-intro")
        ?? root.querySelector("main .guide-section > p")
        ?? root.querySelector("main .guide-section");
    const native = document.createElement("div");
    native.className = "fixed-ad-host";
    (firstContent ?? banner).insertAdjacentElement("afterend", native);
    setHosts({ banner, native });

    return () => {
      banner.remove();
      native.remove();
    };
  }, [html, page]);

  return (
    <>
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />
      {hosts ? createPortal(<ResponsiveBanner />, hosts.banner) : null}
      {hosts ? createPortal(<NativeAdSlot />, hosts.native) : null}
    </>
  );
}
