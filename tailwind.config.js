/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#161925",
      },
    },
  },
  plugins: [],
};
