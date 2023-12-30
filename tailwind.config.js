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
        'blue-button-dark': '#121660 ', 
        'blue-button-light': '#0171DF', 
        'green-button-light': '#3CAE8B', 
        'yellow-button-light': '#FFD140', 
        // 'venice-blue': '#2D6980',
        // 'pizazz':'#E5783C',
        // 'laser-lemon':'#CFFD5E',
        // 'classic-rose':'#F8D9EF'
      },
    },
  },
  plugins: [],
}

