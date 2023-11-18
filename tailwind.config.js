/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#fefeff',
        secondary: '#162a3b',
      },
    },
  },
  plugins: [],
};
