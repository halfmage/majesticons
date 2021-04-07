const { white, coolGray, black, trueGray } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      white: white,
      black: black,
      gray: trueGray,
      primary: colors.emerald,
      secondary: colors.green,
    },
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.primary.300"),
              '[class~="lead"]': { color: theme("colors.primary.400") },
              a: { color: theme("colors.primary.100") },
              strong: { color: theme("colors.primary.100") },
              "ul > li::before": {
                backgroundColor: theme("colors.primary.700"),
              },
              hr: { borderColor: theme("colors.primary.800") },
              blockquote: {
                color: theme("colors.primary.100"),
                borderLeftColor: theme("colors.primary.800"),
              },
              h1: { color: theme("colors.primary.100") },
              h2: { color: theme("colors.primary.100") },
              h3: { color: theme("colors.primary.100") },
              h4: { color: theme("colors.primary.100") },
              code: { color: theme("colors.primary.100") },
              "a code": { color: theme("colors.primary.100") },
              pre: {
                color: theme("colors.primary.200"),
                backgroundColor: theme("colors.primary.800"),
              },
              thead: {
                color: theme("colors.primary.100"),
                borderBottomColor: theme("colors.primary.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.primary.800") },
            },
          },
        };
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
