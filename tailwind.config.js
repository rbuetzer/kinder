const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.yellow,
        "menu-700": "#bdb4a4",
        "menu-900": "#f7f6f4"
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "first", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
