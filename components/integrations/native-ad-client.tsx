"use client";

import { useEffect, useRef } from "react";
import { integrations } from "@/config/integrations";

export function NativeAdClient() {
  const hostRef = useRef<HTMLDivElement>(null);
  const ads = integrations.ads;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || ads.provider !== "adsterra-native" || document.getElementById(ads.containerId)) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = ads.scriptUrl;

    const container = document.createElement("div");
    container.id = ads.containerId;
    host.append(script, container);

    return () => {
      host.replaceChildren();
    };
  }, [ads]);

  return <div ref={hostRef} className="ad-native-content" data-native-ad-slot />;
}
