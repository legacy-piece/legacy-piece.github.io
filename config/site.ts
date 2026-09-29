import type { SiteConfig, ThemePresetName } from "./types";
import rawSiteConfig from "../content/data/site.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
const environmentTheme = process.env.NEXT_PUBLIC_THEME_PRESET as ThemePresetName | undefined;

const siteData = rawSiteConfig as SiteConfig;

export const siteConfig: SiteConfig = {
  ...siteData,
  theme: { ...siteData.theme, preset: environmentTheme || siteData.theme.preset },
  hosting: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteData.hosting.siteUrl,
    basePath,
    customDomain: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN?.trim() || siteData.hosting.customDomain,
  },
};
