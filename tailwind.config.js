const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.yellow
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "first", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
