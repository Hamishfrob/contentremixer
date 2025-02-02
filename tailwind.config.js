/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '960px',
        'content': '593px',
      },
      spacing: {
        // Golden ratio based spacing
        '4': '1rem',     // base
        '6': '1.618rem', // base × 1.618
        '8': '2.618rem', // base × 1.618²
      },
    },
  },
  plugins: [],
} 