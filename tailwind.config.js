/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        QSoftorange: 'hsl(35, 77%, 62%)',
        QSoftred: 'hsl(5, 85%, 63%)',
        QOffwhite: 'hsl(36, 100%, 99%)',
        QGrayishblue: 'hsl(233, 8%, 79%)',
        QDarkgrayishblue: 'hsl(236, 13%, 42%)',
        QVerydarkblue: 'hsl(240, 100%, 5%)',
      },
    },
  },
  plugins: [],
}
