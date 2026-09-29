import type { ThemeConfig, ThemePresetName } from "./types";

export const themes: Partial<Record<ThemePresetName, ThemeConfig>> = {
  "obsidian-red": {
    name: "obsidian-red" as ThemePresetName,
    label: "Site Theme",
    description: "Selected site theme",
    tokens: {
  "background": "0 0% 3%",
  "foreground": "0 0% 99%",
  "card": "0 0% 7%",
  "card-foreground": "0 0% 99%",
  "primary": "217 91% 60%",
  "primary-foreground": "0 0% 0%",
  "secondary": "0 0% 14%",
  "muted": "0 0% 11%",
  "muted-foreground": "0 0% 99%",
  "border": "0 0% 19%",
  "radius": "0px",
  "card-shadow": "none",
  "hero-gradient": "radial-gradient(circle at 50% 0%, hsl(217 91% 60% / .28), transparent 52%)",
  "background-pattern": "none",
  "font-sans": "\"Inter\", ui-sans-serif, system-ui, sans-serif",
  "font-heading": "\"Cormorant Garamond\", Georgia, Cambria, serif",
  "heading-weight": "600",
  "heading-letter-spacing": "-0.02em"
},
  },
};
