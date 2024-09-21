import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f4f2",
        primary: "#002938",
        primaryText: "#181e24",
      },
      letterSpacing: {
        title: "0.035em",
      },
      fontFamily: {
        aeroport: "var(--font-aeroport)",
      },
    },
  },
  plugins: [],
};
export default config;
