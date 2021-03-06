/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#004643',
      text: '#fffffe',
      paragraph: '#abd1c6',
      button: '#f9bc60',
      stroke: '#001e1d',
      highlight: '#f9bc60',
      secondary: '#abd1c6',
      tertiary: '#e16162',
      card: {
        background: '#e8e4e6',
        headline: '#001e1d',
        paragraph: '#0f3433',
      },
    },
    fontSize: {
      ssm: ['8px', '14px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
  plugins: [],
}
