import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-header)'],
        main: ['var(--font-main)']
      },
      colors: {
        "red": "#E50914",        
        "orange": "#E56C09",
        "yellow": "#E19527",
        "lightYellow": "#E7AB54",
        "lightRed": "#d4b5b5",
        "black": "#191717"
      }, 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
export default config;
