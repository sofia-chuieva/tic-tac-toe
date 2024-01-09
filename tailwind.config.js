/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#415A77", light: "#A9BCD0", dark: "#0D1B2A" },
      },
    },
  },
  plugins: [],
};
