/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1321", // Dark Navy Base
        primary: "#E5A33C", // Alamo Amber
        secondary: "#2DE1C2", // Cyber Turquoise
        slateDark: "#1D2D44",
        slateSoft: "#3E5C76",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(229, 163, 60, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};