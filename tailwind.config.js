/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#FF4880",
          secondary: "#393D72",
          accent: "#8FC424",
          neutral: "#0FCFEC",

        }
      }
    ]
  },
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

