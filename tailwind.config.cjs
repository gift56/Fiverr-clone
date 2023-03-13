/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1dbf73",
        darkColor: "#1e1692",
      },
    },
  },
  plugins: [],
};
