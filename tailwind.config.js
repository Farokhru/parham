/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '800px',
        xl: '700px',
        '2xl': '800px',
      },
    },
    extend: {
      colors: {
        'primary': '#967',
        'light': {
          50: '#111',
          100: '#999'
        }
      }
    }
  },
  plugins: [],
}

