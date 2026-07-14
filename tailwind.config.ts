import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#1E2F4D",
          hover: "#3A517C",
        },
        "warm-gray": "#5A544A",
        "champagne": {
          'start': '#FFFFFF',
          '45': '#FDFBF6',
          '80': '#F9F4E8',
          'end': '#F2E9D6',
          'flat': '#FDFBF6',
        }
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "Archivo", "sans-serif"],
        "source-sans-3": ["var(--font-source-sans-3)", "Source Sans 3", "sans-serif"],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        'heading': '-0.5px',
      }
    },
  },
  plugins: [],
} satisfies Config;
