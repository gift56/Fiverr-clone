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
      backgroundImage: {
        heroBg: "url('/src/assets/images/hero1.png')",
      },
      animation: {
        bganimate: "bganimate 20s linear infinite",
      },
      keyframes: {
        bganimate: {
          "0%": {
            backgroundImage: "url('/src/assets/images/hero1.png')",
          },
          "15%": {
            backgroundImage: "url('/src/assets/images/hero2.png')",
          },
          "25%": {
            backgroundImage: "url('/src/assets/images/hero3.png')",
          },
          "50%": {
            backgroundImage: "url('/src/assets/images/hero4.png')",
          },
          "75%": {
            backgroundImage: "url('/src/assets/images/hero5.png')",
          },
          "100%": {
            backgroundImage: "url('/src/assets/images/hero6.png')",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
