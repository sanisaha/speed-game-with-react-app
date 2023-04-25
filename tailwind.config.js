/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        move:'move 5s ease-in infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        move: {
          '0%': { translate: '0 0', filter: 'brightness(50%)'},
          '25%': { translate: '800px 0px', filter: 'brightness(100%)' },
          '50%': { translate: '800px 0px', filter: 'brightness(150%)' },
          '100%': { translate: '0 0', filter: 'brightness(200%)'},
        }
      }   
    },
  },
  plugins: [require("daisyui")]
}

