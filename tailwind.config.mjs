import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        compsci: `url("/compsci-bg.svg")`,
      },
      animation: {
        pan: "pan_keyframes 20s linear infinite",
        slidein: "slidein_keyframes .5s ease-in-out",
      },
      keyframes: {
        pan_keyframes: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "0 256px" },
        },
        slidein_keyframes: {
          "0%": {
            opacity: "0%",
            translate: "0% 25%",
          },
        },
      },
    },
  },
  plugins: [],
};
