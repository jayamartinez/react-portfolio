/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        darkBg: "#121212",
        lightBg: "#f7f7f7",

        darkText: "#f7f7f7",
        lightText: "#121212",
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 2s linear infinite",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

