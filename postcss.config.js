module.exports = {
  modules: true,
  plugins: [
    require("tailwindcss"),
    require("postcss-nested"),
    ...(process.env.NODE_ENV === "production"
      ? [require("@fullhuman/postcss-purgecss")]
      : [])
  ]
};
