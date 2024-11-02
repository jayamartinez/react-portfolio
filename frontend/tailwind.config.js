/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        darkBg: "#18181c",
        lightBg: "#f7f7f7",

        darkText: "#f7f7f7",
        lightText: "#18181c",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

