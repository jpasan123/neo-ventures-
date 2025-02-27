/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81', // Dark blue from logo
          light: '#3A7CA5',
          dark: '#083057',
        },
        secondary: {
          DEFAULT: '#F2A900', // Gold/yellow from logo
          light: '#FFD166',
          dark: '#E09600',
        },
        accent: {
          DEFAULT: '#16A085', // Teal accent
          light: '#2DCEB1',
          dark: '#0E7A63',
        },
        dark: '#1A202C',
        light: '#F7FAFC',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}