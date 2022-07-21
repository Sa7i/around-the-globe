/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'happy-monkey': ['Happy Monkey', 'cursive']
      },
    },
  },
  plugins: [],
}
