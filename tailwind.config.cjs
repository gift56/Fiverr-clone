/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1dbf73",
        active: "#1e1692",
        darkColor: "#62646a",
        navbg: "#013914",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
