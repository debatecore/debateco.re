import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              'font-style': 'normal',
            },
            'blockquote p::before': {
              content: 'none'
            },
            'blockquote p::after': {
              content: 'none'
            },
            ':is(h1, h2, h3, h4, h5, h6)::before': {
              content: '""',
              display: 'block',
              'padding-top':'4em',
              'margin-top':'-4em'
            },
            'a[href^="#user-content-fn-"]': {
              'padding-top':'100px',
              'margin-top':'-100px'
            },
            'li[id^=user-content-fn]': {
              'padding-top':'100px',
              'margin-top':'-100px',
              'margin-bottom': '0px'
            }
          }
        }
      },
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
  plugins: [require("@tailwindcss/typography")],
};
