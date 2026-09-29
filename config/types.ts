export type ThemePresetName =
  | "obsidian-red"
  | "inferno-orange"
  | "carbon-crimson"
  | "bronze-ember"
  | "gunmetal-blue"
  | "cobalt-night"
  | "electric-cyan"
  | "steel-teal"
  | "void-violet"
  | "neon-indigo"
  | "toxic-lime"
  | "military-green"
  | "graphite"
  | "navy-gold"
  | "midnight-red"
  | "midnight-purple"
  | "ocean-blue"
  | "ice-cyan"
  | "cyber-lime"
  | "ember-orange"
  | "arcade-pink"
  | "royal-violet"
  | "forest-green"
  | "steel-blue"
  | "parchment-gold"
  | "slate-amber"
  | "crimson-black"
  | "royal-navy"
  | "sand-gold"
  | "soft-mint"
  | "sky-blue"
  | "plum-gold";

export type ThemeSkin = "portal" | "wiki" | "resource" | "editorial" | "glass" | "pixel" | "horror";
export type AppearanceColorMode = "scheme" | "custom";
export type ThemeHeaderStyle = "solid" | "glass" | "border";
export type ThemeComponentStyle = "rounded" | "sharp" | "pill";

export type PageType =
  | "home"
  | "database"
  | "guide"
  | "codes"
  | "updates"
  | "article"
  | "list"
  | "legal";

export interface ThemeConfig {
  name: ThemePresetName;
  label: string;
  description: string;
  tokens: Record<string, string>;
}

export interface SiteConfig {
  siteName: string;
  shortName: string;
  description: string;
  language: string;
  locale: string;
  theme: {
    preset: ThemePresetName;
    overrides?: Record<string, string>;
    skin?: ThemeSkin;
    headerStyle?: ThemeHeaderStyle;
    componentStyle?: ThemeComponentStyle;
    appearanceVersion?: 2;
    appearanceMode?: "legacy-v18" | "fixed-template";
    templateVersion?: 1;
    accentColorId?: string;
    colorMode?: AppearanceColorMode;
    colorSchemeId?: string;
    background?: string;
    accent?: string;
    fontId?: string;
  };
  hosting: {
    siteUrl: string;
    basePath: string;
    customDomain: string | null;
  };
  contact: {
    email: string | null;
    url: string | null;
  };
  assets: {
    logo: string;
    cover: string;
    openGraph: string;
    favicon: string;
  };
  game: {
    name: string;
    platform: string;
    developer: string;
    genre: string;
    officialUrl: string | null;
  };
  seo: {
    titleTemplate: string;
  };
}

export interface IntegrationConfig {
  analytics:
    | { provider: "none" }
    | { provider: "google-analytics"; measurementId: string };
  ads:
    | { provider: "none" }
    | {
        provider: "adsterra-native";
        scriptUrl: string;
        containerId: string;
      };
  verification: {
    google: string | null;
    bing: string | null;
  };
}

export interface InternalLink {
  label: string;
  slug: string;
  description?: string;
}

export interface DataTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface Subsection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: DataTable;
}

export interface PageSection {
  id: string;
  heading: string;
  eyebrow?: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: Subsection[];
  links?: InternalLink[];
  steps?: Array<{ heading: string; description: string }>;
  table?: DataTable;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ScreenshotItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface SeoPageDefinition {
  enabled: boolean;
  slug: string;
  pageType: Exclude<PageType, "home">;
  navLabel: string;
  title: string;
  description: string;
  navVisible: boolean;
  parentSlug?: string | null;
  hero: {
    eyebrow?: string;
    heading: string;
    lead: string;
  };
  sections: PageSection[];
  faq?: FaqItem[];
  screenshots?: ScreenshotItem[];
  relatedSlugs?: string[];
  lastReviewed: string;
}

export interface HomePageDefinition {
  enabled: true;
  slug: "";
  pageType: "home";
  title: string;
  description: string;
  navVisible: true;
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    supportingText: string;
    primaryLink?: InternalLink;
    secondaryLink?: { label: string; url: string };
  };
  sections: PageSection[];
  faq: FaqItem[];
  screenshots: ScreenshotItem[];
  lastReviewed: string;
}
