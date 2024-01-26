/** @type {import('tailwindcss').Config} */

/*eslint-env node*/

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'handlee': ['Handlee']
      },
      colors: {
        'black': {
          100: 'rgba(0, 0, 0, 1)',
          200: 'rgba(12, 12, 12, 1)',
          300: 'rgba(15, 15, 15, 1)'
        },
        'pink': {
          100: 'rgba(255, 201, 240, 1)',
          200: 'rgba(240, 114, 205, 1)',
          300: 'rgba(243, 132, 212, 1)',
          400: 'rgba(252, 117, 255, 1)',
          500: 'rgba(219, 74, 144, 1)',
        },
        'yellow': {
          100: 'rgba(255, 230, 140, 1)',
          200: 'rgba(229, 193, 65, 1)',
          300: 'rgba(238, 205, 86, 1)',
          400: 'rgba(187, 156, 42, 1)',
          500: 'rgba(248, 208, 68, 1)',
        },
        'blue': {
          100: 'rgba(157, 218, 219, 1)',
          200: 'rgba(157, 220, 255, 1)',
          300: 'rgba(90, 181, 232, 1)',
          400: 'rgba(68, 226, 248, 1)',
          500: 'rgba(28, 106, 177, 1)',
        },
        'black-opacity': 'rgba(0, 0, 0, 0.06)',
        'white': 'rgba(255, 255, 255, 1)',
        'light-grey': 'rgba(179, 179, 179, 1)',
        'grey': 'rgba(112, 111, 111, 1)',
        'lihgt-green': 'rgba(124, 240, 114, 1)',
        'green': 'rgba(78, 213, 67, 1)',
        'orange': 'rgba(255, 87, 87, 1)'
      },
      backgroundImage: {
        'bg': 'url("./src/assets/bg-dot.svg")'
      },
      textShadow: {
        DEFAULT: "0px 0px 0.5px var(--tw-shadow-color)",
        lg: "1px 1px 0.5px var(--tw-shadow-color)"
      },
    },
    screens: {
      '2xl': '1440px',
    }
  },
  plugins: [

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ]
}

