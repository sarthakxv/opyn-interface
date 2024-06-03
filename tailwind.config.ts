import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#212329",
        "secondary-gray": "#26282D",
        "primary-text": "#FFFFFF",
        "secondary-text": "#D9D9D9",
        "tertiary-text": "#CACCCE",
      },
      backgroundImage: {
        "claim-btn":
          "linear-gradient(360deg, #FA9B33 0%, #FF9E18 36.14%, #F6C042 108.33%)",
        "lootbox-btn":
          "linear-gradient(360deg, #FA9B33 0%, #FF9E18 36.14%, #F6C042 108.33%)",
        "lootbox-text":
          "linear-gradient(90.01deg, #BFB171 27.52%, #8BD67B 56.59%, #4EB2C9 69.12%, #C663C5 99.99%)",
      },
    },
  },
  plugins: [],
};
export default config;
