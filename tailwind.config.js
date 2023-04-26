/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        move:'move 10s ease-in infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        move: {
          '0%': { translate: '0 0', filter: 'opacity(0%)'},
          '10%': { translate: '0 0', filter: 'opacity(100%)'},
          '20%': { translate: '0 0', filter: 'opacity(0%)' },
          '30%': { translate: '0 0', filter: 'opacity(100%)' },
          '40%': { translate: '0 0', filter: 'opacity(0%)' },
          '50%': { translate: '0 0', filter: 'opacity(100%)' },
          '60%': { translate: '0 0', filter: 'opacity(0%)' },
          '70%': { translate: '0 0', filter: 'opacity(100%)' },
          '80%': { translate: '0 0', filter: 'opacity(0%)' },
          '90%': { translate: '0 0', filter: 'opacity(100%)' },
          '100%': { translate: '0 0', filter: 'opacity(0%)'},
        }
      }   
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  plugins: [require("daisyui")]
}

