/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      default :'1rem',
      sm :'2rem',
      lg :'3rem',
      xl :'4rem',
    },
    extend: {
      backgroundColor: {
        'colorDark': "#1e2b48",
        'colorLight': "#f5f7ff",
      },
      colors:{
        light: {
          BlueLight: "#697c9b",
          veruLight: "#f5f7ff",
        },
        dark: {
            darkBlue: "#4b699b",
            darkBlueDark: "#1e2b48",
            veryDarkBlue: "#2a3341",
            veryDarkBlueDark: "#141d2e",
        },
        primary: {
          Blue: "#0077ff",
          white: "#ffffff",
        }
      }
    },
  },
  plugins: [],
}

