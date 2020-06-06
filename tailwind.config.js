module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: {
        default: "#ffffff",
      },
      grey: {
        default: "#f1f0ee",
        dark: "#a3a3a3",
      },
      blue: {
        default: "#7acfd6",
      },
      red: {
        dark: "#b11a21",
        lighter: "#e0474c",
      },
    },
    fontFamily: {
      sans: ["Inter var", "system-ui", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
}
