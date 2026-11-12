import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS — BR2049 LITE
 * ---------------------------------------------------------------
 * Every colour, font, spacing and animation used on the site
 * lives here. Change a value once and it updates everywhere.
 *
 * This file is loaded from src/app/globals.css via `@config`.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // ABSOLUTE BAN ON ROUNDED CORNERS — every radius is 0px.
    borderRadius: {
      none: "0px",
      xs: "0px",
      sm: "0px",
      DEFAULT: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      "4xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        void: "#050505",
        vegas: {
          flare: "#E86315", // hot orange highlight
          dust: "#8F3A05", // fog colour
          deep: "#1A0A02", // darkest burnt brown
        },
        wallace: {
          gold: "#D4A359",
          amber: "#9E712B",
        },
        // Outcome colours for the matrix tiles
        //   ok/mixed/fail       = bright edge + label colour
        //   *-fill              = solid tile background
        signal: {
          ok: "#7BE0A0",
          "ok-fill": "#1E6B3E", // green
          mixed: "#FFC266",
          "mixed-fill": "#8A5A0B", // amber
          fail: "#FF9A8F",
          "fail-fill": "#9B2A20", // red
        },
      },
      fontFamily: {
        // Wide display headers  ->  class: font-monolith
        monolith: ["var(--font-space-grotesk)", "ui-sans-serif", "sans-serif"],
        // Tabular data          ->  class: font-mono
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        monolithic: "0.35em", // class: tracking-monolithic
        hud: "0.2em", // class: tracking-hud
      },
      keyframes: {
        // Terminal cursor: hard on/off blink
        "cursor-pulse": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        // Page load: slow rise out of the fog
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "cursor-pulse": "cursor-pulse 1.4s steps(1, end) infinite", // class: animate-cursor-pulse
        "fade-in": "fade-in 2.4s cubic-bezier(0.16, 1, 0.3, 1) both", // class: animate-fade-in
      },
    },
  },
};

export default config;
