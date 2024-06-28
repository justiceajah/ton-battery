import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "640px",
      md: "700px",
      ml: "1366px",
      lg: "1280px",
      xl: "1920px",
    },
  },

  plugins: [
    nextui({
      defaultTheme: "dark",
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultExtendTheme: "light",
      themes: {
        light: {
          // layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          // layout: {}, // dark theme layout tokens
          colors: {
            background: "#10161F",
            primary: {
              "50": "#094065",
              "100": "#1381CB",
              "200": "#005EEB",
              "300": "#29EAC7",
            },
            secondary: {},
            content3: "#CFCCCC",
            content4: "#BDBABA",
          }, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
