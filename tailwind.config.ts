import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "oakes-grotesk": ['var(--font-oakes-grotesk)', 'sans-serif'],
      },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideIn: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.6s ease-in',
          slideIn: 'slideIn 0.6s ease-out',
        },
    },
  },
  plugins: [containerQueries],
} satisfies Config;
