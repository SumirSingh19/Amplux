/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'HDR': "url(./assets/images/picture-3.png)",
        '3080': "url(./assets/images/refresh.jpg)",
        'safe': "url(./assets/images/computer-glasses.jpg)"
      }
    },
  },
  plugins: [],
}