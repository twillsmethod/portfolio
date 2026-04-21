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
        linen: "#F5F0E8",
        sand: "#D9C4A8",
        brown: "#2E1F14",
        gold: "#8B6914",
        "gold-light": "#C4A882",
        taupe: "#7A6A5A",
        cream: "#EDE5D8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
