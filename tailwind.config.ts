import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f1e6",
        sand: "#efe4d2",
        clay: {
          DEFAULT: "#bc5a36",
          dark: "#9a4527",
          light: "#d98a64",
        },
        ink: "#2c241d",
        sage: "#7c8769",
        glaze: "#3f5d6b",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 40px -18px rgba(44, 36, 29, 0.35)",
        lift: "0 24px 60px -24px rgba(44, 36, 29, 0.45)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
export default config
