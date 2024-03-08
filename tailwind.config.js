/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  presets: [keepPreset],
}

