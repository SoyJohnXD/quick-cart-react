/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        haken: ["'Hanken Grotesk'", "sans-serif"],
      },
      colors: {
        primary: "#FFA347", // Naranja principal
        white: "#FFFFFF", // Blanco
        "fresh-green": "#71C585", // Verde fresco
      },
    },
  },
  plugins: [],
};
