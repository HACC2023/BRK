import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hpuTheme: {
          "primary": "#007398",
          "secondary": "#71B2c9",
          "accent": "#4c75ba",
          "neutral": "#132a4f",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#d1dc42",
          "warning": "#fed402",
          "error": "#F7941d",
        },
      },
    ],
    darkTheme: "hpuTheme",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },

} satisfies Config;
