/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {  
      center: true,
    },
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace']
      },
    },
  },
  plugins: [],
}
