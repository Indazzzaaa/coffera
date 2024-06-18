/** @type {import('tailwindcss').Config} */





export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner' : "url(https://images.unsplash.com/photo-1518288319310-99bc48891084?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      },

      fontFamily:{
        playwrite: ['Playwrite PL', 'sans-serif', 'system-ui'],
        roboto: ['Roboto', 'sans-serif', 'system-ui']
      },
      colors :{
        background: "var(--background)",
      },
    },
  },
  plugins: [],
}