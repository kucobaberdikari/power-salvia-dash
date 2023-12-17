/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'purple-hover': '#4C52F8',
        'purple-hover-stroke': '#8286FF',
        'purple-progress': '#3B41E3',
        'blue-dark': '#363032',
        'white-broke': '#f5f5f5',
        'blue-button-1': '#4540de',
        'blue-button-dark': '#121660 ',
        'blue-button-light': '#0171DF',
        'green-button-light': '#3CAE8B',
        'yellow-button-light': '#FFD140'
      },
    },
  },
  plugins: [],
}

