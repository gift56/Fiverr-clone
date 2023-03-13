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
      backgroundSize: {
        "100%": "100%",
      },
      animation: {
        bganimate: "bganimate 30s linear infinite",
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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
