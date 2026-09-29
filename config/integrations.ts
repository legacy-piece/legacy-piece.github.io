import type { IntegrationConfig } from "./types";

const adScriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SCRIPT_URL?.trim();
const adContainerId = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID?.trim();
export const integrations: IntegrationConfig = {
  analytics: { provider: "google-analytics", measurementId: "G-134D8TXS3Q" },
  ads:
    adScriptUrl && adContainerId
      ? {
          provider: "adsterra-native",
          scriptUrl: adScriptUrl,
          containerId: adContainerId,
        }
      : { provider: "none" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || null,
    bing: process.env.BING_SITE_VERIFICATION?.trim() || null,
  },
};
