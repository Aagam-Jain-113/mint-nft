module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primary" : "#1A1A1A",
        "secondary": "#252525",
        "primaryText":"#484848",
        "secondaryText": "#6D6D6D",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
