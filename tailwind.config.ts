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
      }
    },
  },
  plugins: [containerQueries],
} satisfies Config;
