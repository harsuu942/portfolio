/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        surface: "#f8fafc",
        ink: {
          DEFAULT: "#0f172a",
          2: "#334155",
          3: "#64748b",
        },
        accent: {
          blue: "#2563eb",
          cyan: "#06b6d4",
          coral: "#e84545",
          amber: "#f59e0b",
          purple: "#7c3aed",
          emerald: "#10b981",
        },
      },
    },
  },
  plugins: [],
};