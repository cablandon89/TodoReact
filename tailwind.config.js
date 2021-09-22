module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      white: "#fff",
      black: "#000",
      primary: "#1E40AF",
      success: "#38A169",
      warning: "#F59E0B",
      danger: "#DC2626",
      blue400: "#60A5FA",
      red600: "#E53E3E",
      blue700: "#2B6CB0",
      green500: "#48BB78",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
