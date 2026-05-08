/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class", // Enables class-based dark mode toggling perfectly!
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#2563eb",
          orange: "#f97316",
        },
        brand: {
          lightBlue: "#eff6ff",
          darkBlue: "#1e3a8a",
          darkBg: "#0f172a",
          darkerBg: "#020617",
        }
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
