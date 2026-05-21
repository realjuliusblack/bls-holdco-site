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
        // BLS brand: rich black + warm gold
        obsidian: {
          950: "#0a0908",
          900: "#100f0e",
          800: "#1a1917",
          700: "#262422",
        },
        gold: {
          300: "#e8c97a",
          400: "#d4a843",
          500: "#c49a2e",
          600: "#a07a1a",
        },
        stone: {
          50: "#faf9f7",
          100: "#f2efe9",
          200: "#e0dbd3",
          400: "#9e9890",
          600: "#6b6560",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "8xl": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "7xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "4xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.008em" }],
      },
      maxWidth: {
        prose: "68ch",
        reading: "60ch",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "36": "9rem",
      },
    },
  },
  plugins: [],
};
export default config;
