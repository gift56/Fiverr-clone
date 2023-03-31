/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1dbf73",
        active: "#1e1692",
        darkColor: "#404145",
        navbg: "#013914",
        darkblue: "#0d084d",
        clientBg: "#fafafa",
      },
      backgroundPosition: {
        "top-4": "right top -4rem",
      },
      boxShadow: {
        box: "0 0.14px 2.29266px rgb(0 0 0 / 3%), 0 0.37px 4.42626px rgb(0 0 0 / 5%), 0 3px 7px rgb(0 0 0 / 9%)",
      },
      screens: {
        laptop: "1136px",
        tab: "900px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
