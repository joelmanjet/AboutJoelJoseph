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
          'start': '#FFFEFB',
          '45': '#F7F2E7',
          '80': '#EFE7D3',
          'end': '#E6DAC0',
          'flat': '#FBF8F1',
        }
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        "source-sans-3": ["Source Sans 3", "sans-serif"],
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
