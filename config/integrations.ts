import type { IntegrationConfig } from "./types";

export const integrations: IntegrationConfig = {
  analytics: { provider: "google-analytics", measurementId: "G-134D8TXS3Q" },
  ads: {
    provider: "adsterra-native",
    scriptUrl: "https://pl31604679.profitableratecpmnetwork.com/3fbad8f95cd488eb207886b90830e79b/invoke.js",
    containerId: "container-3fbad8f95cd488eb207886b90830e79b",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || null,
    bing: process.env.BING_SITE_VERIFICATION?.trim() || null,
  },
};
