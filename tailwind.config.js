/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': 'Ubuntu'
      },
      colors: {
        'bg-color': "#EEF5FF",
        'content-color': "#01295A",
        'content-color-2': "#493EFF",
        'hover-color': "#18498B",
        'blue-theme': "#483EFF",
        'pink-theme': "#F9818D",
        'skin-theme': "#FFAF7E"
      },
      keyframes: {
        'getar': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(-5px)' },
        }
      },
      animation: {
        'bergetar': 'getar 0.5s linear',
        'spin-slow': 'spin 0.25s linear infinite'
      }
    },
  },
  plugins: [],
}