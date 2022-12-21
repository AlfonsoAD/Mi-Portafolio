/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: "#040916",
        "marine-600": "#082045",
        "marine-400": "#2b8bc0",
        blueBombom: "#4febff",
      },
    },
  },
  plugins: [],
};
