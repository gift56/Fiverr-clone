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
      animation: {
        bganimate: "bganimate 50s linear infinite",
      },
      keyframes: {
        bganimate: {
          "0%": {
            backgroundImage: "url('/src/assets/images/hero1.png')",
          },
          "16.66%": {
            backgroundImage: "url('/src/assets/images/hero2.png')",
          },
          "33.33%": {
            backgroundImage: "url('/src/assets/images/hero3.png')",
          },
          "50%": {
            backgroundImage: "url('/src/assets/images/hero4.png')",
          },
          "66.66%": {
            backgroundImage: "url('/src/assets/images/hero5.png')",
          },
          "83.33%": {
            backgroundImage: "url('/src/assets/images/hero6.png')",
          },
          "100%": {
            backgroundImage: "url('/src/assets/images/hero1.png')",
          },
        },
      },
      boxShadow: {
        box: "0 0.14px 2.29266px rgb(0 0 0 / 3%), 0 0.37px 4.42626px rgb(0 0 0 / 5%), 0 3px 7px rgb(0 0 0 / 9%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
