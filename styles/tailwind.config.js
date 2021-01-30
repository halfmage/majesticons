const { white } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      white: white,
      primary: colors.coolGray,
      secondary: colors.yellow,
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
};
