/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
        // => @media (min-width: 576px) { ... }
      },
      colors: {
        // 'Primary': '#EB455F',
        'Primary': '#4E31AA',
        'Light': '#FCFFE7',
        'Secondary': '#2B3467',
        'Primary-2': '#2B3467',
        'Dark': '#2E3840',
        'Success': '#008338',
        'Warning': "#ffa534",
        'Danger': '#FF2B2B',
        'DarkGray': "#6B6B6B",
      },
      fontFamily: {
        'Base': ['Rubik'],
        'Secondary': ['Montserrat'],


      },

    },
  },
  plugins: [],
}
