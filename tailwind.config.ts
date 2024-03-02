import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatioPlugin],
};
export default config;
