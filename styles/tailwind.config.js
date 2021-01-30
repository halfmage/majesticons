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
      gray: colors.warmGray,
      primary: colors.coolGray,
      secondary: colors.yellow,
      white: white,
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
};
