/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
    colors: {
      white: {
        white: "#FFFFFF",
        nav: "#E4E9EC",
        bg: "#F3F5F6",
      },
      blue: {
        300: "#299BEE",
        500: "#000088",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      red: {
        300: "#E36969",
        500: "#CE2626",
      },
      orange: "#ff7849",
      green: {
        bt: "#649000",
        ye: "#AEBE14",
        500: "#203A10",
      },
      yellow: {
        300: "#FEFE91",
        500: "#ffff63",
      },
      black: "#000000",
      gray: {
        ftr: "#E6E8E9",
        300: "#C7C9CA",
        500: "#343A40",
      },
    },
    variants: {
      extend: {},
      responsive: ['responsive'],
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
