import { keepTheme } from "keep-react/keepTheme";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", 'serif'],
      },
    },
  },
  plugins: [
   daisyui
  ],
}

export default keepTheme(config);