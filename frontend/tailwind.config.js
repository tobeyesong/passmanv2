/** @format */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      animation: ["hover"],
    },
    zIndex: {
      "-10": "-10",
    },
    zIndex: ["hover"],
  },
  plugins: [],
};
