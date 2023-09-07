/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-one': '#fff',
        'primary-two': '#000',
        'page-background': '#F1F1F1',

        'correct': '#02F29E',
        'light-correct': 'rgba(2, 242, 158, 0.2)',
        'incorrect': '#F24D27',
        'light-incorrect': 'rgba(242, 76, 39, 0.2)',
        'warning': '#F2B827',

        'secondary': '#B8B2B2',
        'light-gray': '#E0E0E0',
        'light-white': '#F6F6F6',

        'sky-color': '#0FC5F2',
        'blue-color': '#1B56F2',
      }
    },
  },
  plugins: [],
}

