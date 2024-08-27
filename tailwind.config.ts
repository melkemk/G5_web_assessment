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
        primary: "#264FAD",
        secondary: "#9CA3AF", // Add your secondary color here
      },
      fontFamily: {
        'im-fell-french-canon': ['"IM FELL French Canon"', 'serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'monofett': ['"Monofett"', 'cursive'], 

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;