/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0c1b25",
        secondary: "#ffffff",
        tertiary: "#1c2c34c4",
        "black-100": "#0c1b25",
        "black-200": "#0c1b25",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: {'min': '350x', 'max': '600px'},
        xmd: {'min': '600px', 'max': '900px'},
        xml: {'min': '900px', 'max': '1145px'},
        xxml: {'min': '1145', 'max': '1600px'},
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
