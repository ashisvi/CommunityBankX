/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['Inter_Regular', 'sans-serif'],
        'inter-semibold': ['Inter_SemiBold', 'sans-serif'],
        'inter-bold': ['Inter_Bold', 'sans-serif'],
        'montserrat-regular': ['Montserrat_Regular', 'sans-serif'],
        'montserrat-semibold': ['Montserrat_SemiBold', 'sans-serif'],
        'montserrat-bold': ['Montserrat_Bold', 'sans-serif'],
        'montserrat-extrabold': ['Montserrat_ExtraBold', 'sans-serif'],
      },
      colors: {
        primary: '#0f1d41', // Deep blue (headings, icons)
        secondary: '#99b89e', // Soft green (positive states)
        neutral: '#919397', // Muted gray (text, borders)
        background: '#f9fafa', // Light background
        surface: '#fffefc', // Cards, containers
      },
    },
  },
  plugins: [],
};
