// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat"],
        Roboto_Slab: ["Roboto Slab"],
      },
      backgroundImage: {
        "hero-dark": "url('/bg-hero-section-dark.png')",
        "hero-light": "url('/bg-hero-section-light.png')",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
