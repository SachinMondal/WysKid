/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        background: '#F3EFD3',
        primary: '#2F544F',
        secondary: '#FD6602',
      }
    },
  },
  plugins: [],
}

