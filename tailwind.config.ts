import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        docshield: {
          primary: "#000B33",
          "primary-hover": "#4C6DA6",
          "primary-light": "#BFD7FF",
          "primary-light-hover": "#D2E3FF",
          ambient: "#6D88B4",
          accent: "#3B5E9B",
          cyan: "#1C718A",
          "sky-mid": "#94AEDA",
          "slate-deep": "#2F4E82",
          ink: "#000B33",
          "ink-secondary": "#282624",
          "ink-muted": "#6F7C86",
          "ink-steel": "#A9B1B7",
          canvas: "#FFFFFF",
          lavender: "#F2F7FF",
          subtle: "#F8F8F8",
          border: "#EFEFEF",
          "border-card": "#D2D2D2",
          peach: "#FDF3EC",
        },
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        "card-soft": "0 20px 40px -15px rgba(0, 11, 51, 0.07)",
        "card-hover": "0 30px 60px -20px rgba(0, 11, 51, 0.12)",
        "pill-glow": "0 8px 24px -4px rgba(76, 109, 166, 0.25)",
        "nav-float": "0 10px 30px -10px rgba(0, 11, 51, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Merriweather", "Georgia", "serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "docshield-hero": "linear-gradient(180deg, #FFFFFF 12.69%, #94AEDA 40.35%, #2F4E82 77.67%)",
        "docshield-card-blue": "linear-gradient(135deg, #1A3660 0%, #000B33 100%)",
        "docshield-lavender": "linear-gradient(180deg, #FFFFFF 0%, #F2F7FF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
