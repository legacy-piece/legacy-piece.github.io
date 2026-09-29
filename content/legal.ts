import { integrations } from "@/config/integrations";
import { siteConfig } from "@/config/site";
import type { SeoPageDefinition } from "@/config/types";

const privacyIntegrationParagraphs: string[] = [];

if (integrations.analytics.provider === "google-analytics") {
  privacyIntegrationParagraphs.push(
    "Google Analytics 4 is enabled to understand aggregate page usage. Google may process technical visit information under its own privacy terms.",
  );
}

if (integrations.ads.provider === "adsterra-native") {
  privacyIntegrationParagraphs.push(
    "Adsterra Native advertising is enabled. Adsterra may process technical request information and applies its own privacy policy.",
  );
}

export const legalPages: SeoPageDefinition[] = [
  {
    enabled: true,
    slug: "about",
    pageType: "legal",
    navLabel: "About",
    title: "About",
    description: `Learn how ${siteConfig.siteName} organizes and reviews guides for the current Legacy Piece Roblox game.`,
    navVisible: false,
    hero: { heading: `About ${siteConfig.siteName}`, lead: "How this independent editorial resource is maintained." },
    sections: [
      { id: "mission", heading: "Our Editorial Mission", paragraphs: ["We organize practical information for the 2026 Legacy Piece experience by Gwynn's Shrine on Roblox. The guides focus on player tasks such as redeeming codes, comparing build systems and finding the right official resources."] },
      { id: "standards", heading: "Research and Updates", paragraphs: ["We review changing details against the current game and date each guide. Rankings describe editorial choices for different playstyles; they are not game developer rankings. Game updates can change mechanics and availability, so check the page review date when following a route."] },
      { id: "independence", heading: "Independent Status", paragraphs: ["Legacy Piece Guide is an independent fan-made website. It is not affiliated with or endorsed by Gwynn's Shrine or Roblox. Game names and associated marks belong to their respective owners."] },
    ],
    relatedSlugs: ["copyright", "privacy"],
    lastReviewed: "2026-09-29",
  },
  {
    enabled: false,
    slug: "contact",
    pageType: "legal",
    navLabel: "Contact",
    title: "Contact",
    description: `Contact ${siteConfig.siteName} to report factual corrections, attribution concerns, copyright questions or technical site issues.`,
    navVisible: false,
    hero: { heading: "Contact", lead: "Use the configured public contact method for corrections and site questions." },
    sections: [
      {
        id: "contact-method",
        heading: "How to Reach Us",
        paragraphs: ["Include the page URL, the issue and a supporting source when contacting the site through a published contact channel."],
      },
      { id: "useful-report", heading: "What to Include", paragraphs: ["Share the affected page, the incorrect detail, the current game version and any reliable supporting evidence."] },
    ],
    relatedSlugs: ["about", "copyright"],
    lastReviewed: "2026-09-29",
  },
  {
    enabled: true,
    slug: "privacy",
    pageType: "legal",
    navLabel: "Privacy",
    title: "Privacy Policy",
    description: `Read the privacy policy for ${siteConfig.siteName}, including enabled measurement or advertising services.`,
    navVisible: false,
    hero: { heading: "Privacy Policy", lead: "A plain-language summary of the data this static site and its enabled services may process." },
    sections: [
      { id: "site-data", heading: "Data This Site Collects", paragraphs: ["The static site does not provide accounts, comments or a database for storing visitor submissions."] },
      {
        id: "integrations",
        heading: "Optional Third-Party Services",
        paragraphs: privacyIntegrationParagraphs.length
          ? privacyIntegrationParagraphs
          : ["No audience measurement or advertising integration is currently enabled."],
      },
      { id: "external-links", heading: "External Links", paragraphs: ["A link to another website is governed by that website's own terms and privacy practices."] },
      { id: "changes", heading: "Policy Changes", paragraphs: ["This policy may change if site features or third-party services change. The review date shows when its current wording was last checked."] },
    ],
    relatedSlugs: ["terms", "about"],
    lastReviewed: "2026-09-29",
  },
  {
    enabled: true,
    slug: "terms",
    pageType: "legal",
    navLabel: "Terms",
    title: "Terms of Use",
    description: `Read the terms for using the guides and reference information on ${siteConfig.siteName}.`,
    navVisible: false,
    hero: { heading: "Terms of Use", lead: "Conditions for using this independent guide and reference website." },
    sections: [
      { id: "informational", heading: "Informational Use", paragraphs: ["Content is provided for general game information and may change when the game is updated."] },
      { id: "accuracy", heading: "Accuracy and Availability", paragraphs: ["Reasonable care should be taken when publishing, but uninterrupted availability or complete accuracy cannot be guaranteed."] },
      { id: "acceptable-use", heading: "Acceptable Use", paragraphs: ["Do not misuse the site, interfere with access or reproduce substantial original content without permission."] },
    ],
    relatedSlugs: ["privacy", "copyright"],
    lastReviewed: "2026-09-29",
  },
  {
    enabled: true,
    slug: "copyright",
    pageType: "legal",
    navLabel: "Copyright",
    title: "Copyright and Attribution",
    description: `Review copyright, trademark, media ownership and attribution information for the independent ${siteConfig.siteName} resource.`,
    navVisible: false,
    hero: { heading: "Copyright and Attribution", lead: "Ownership and reporting guidance for editorial content, game names and media." },
    sections: [
      { id: "editorial", heading: "Original Editorial Content", paragraphs: ["Original explanations, page organization and site design remain protected unless a separate license says otherwise."] },
      { id: "game-rights", heading: "Game and Platform Rights", paragraphs: ["Game names, trademarks, screenshots and related assets belong to their respective owners. Their use does not imply endorsement."] },
      { id: "rights", heading: "Rights and References", paragraphs: ["The site's guide text and organization are intended to help players understand the game. External links lead to their respective publishers, whose terms apply on those sites."] },
    ],
    relatedSlugs: ["about", "terms"],
    lastReviewed: "2026-09-29",
  },
];
