/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playwrite: ['Playwrite PL', 'sans-serif', 'system-ui'],
        roboto: ['Roboto', 'sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}