/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      black: '#232E35',
      white: '#FFFFFF',
      gray: { 1: '#F0F3F4', 2: '#d9d9d9', 3: '#656d72', 4: '#D4FAFC', 5: '#6B6562', 6: '#6496A3', 7: '#8CA394' },
      blue: { 1: '#237BFF', 2: '#1D4ED8', 3: '#F8FAFC', 4: '#DBEAFE', 5: '#93C5FD' },
      yellow: '#FB923C',
      purple: { 1: '#EAE6FE', 2: '#17172E', 3: '#201F38', 4: '#302f4d' },
      red: { 1: '#ffeaea', 2: '#b59a98', 3: '#f44336', 4: '#533643' },
      green: { 1: '#4caf50' },
      opacity: {
        dark: '#17172Ee6',
        light: '#ffffffe6',
      },
      modal: {
        dark: '#17172ed2',
        light: '#18294345',
      },
    },
    extend: {
      screens: {
        xs: '30rem',
      },
    },
  },
  plugins: [],
}
