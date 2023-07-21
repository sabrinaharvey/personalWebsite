/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#86003C',
        'callColor' : '#F582A7',
        'secondary': '#865DFF',
        'basic': '#CCCCCC'
      }
    },
  },
  plugins: [],
}

