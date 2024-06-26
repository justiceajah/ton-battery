import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";








const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "700px",
      ml: "1366px",
      lg: "1280px",
      xl: "1920px",
    },
  },


  plugins: [nextui({
    defaultTheme: "dark",
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    defaultExtendTheme: "light",
    themes: {
      light: {

        layout: {}, // light theme layout tokens
        colors: {

        } // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {

          primary: {

          },
          secondary: {


          }


        } // dark theme colors
      },

    }
  }),

  ],
};
export default config;
