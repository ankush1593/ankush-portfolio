import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0E",
        paper: "#F7F6F3",
        mist: "#ECECEA",
        slate: "#6B7280",
        accent: "#2563EB",
        "accent-light": "#EFF6FF",
        subtle: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.2rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.4rem, 2.5vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
