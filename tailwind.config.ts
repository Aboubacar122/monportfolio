import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Blue Team corporate (différente de Luc)
        background: "#0a1929",      // bleu marine très sombre
        surface: "#0f1f37",         // bleu marine plus clair
        primary: "#4f9eff",         // bleu lumineux
        accent: "#00d4aa",          // vert turquoise SOC
        violet: "#a78bfa",          // violet doux
        warning: "#fb923c",
        danger: "#f43f5e",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
        display: ["'Rajdhani'", "sans-serif"],   // différent d'Orbitron
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        glow: {
          from: { boxShadow: "0 0 10px #4f9eff, 0 0 20px rgba(79, 158, 255, 0.4)" },
          to: { boxShadow: "0 0 25px #4f9eff, 0 0 45px rgba(79, 158, 255, 0.8)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
