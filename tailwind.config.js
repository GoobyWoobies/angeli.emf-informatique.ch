/** @type {import('tailwindcss').Config} */

const tailwindcssAnimated = require('tailwindcss-animated');
const tailwindcssIntersect = require('tailwindcss-intersect');

module.exports = {
  purge: ['./**/*.{html,js}'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimated,
    tailwindcssIntersect,
  ],
}