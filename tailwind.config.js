/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './html/**/*.{html,js}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "sm": "100%",
        "md": "100%",
        "lg": "1216px",
        "xl": "1216px"
      },
      padding: {
        "DEFAULT": "16px",
        "sm": "16px",
        "md": "24px",
        "lg": "0",
        "xl": "0"
      }
    },
    extend: {
      colors: {
        "primary": "#EE1922",
        "secondary": "#151617"
      },
      fontFamily: {
        "sans": ["GmarketSans", "sans-serif"],
        "pretendard": ["pretendard", "serif"],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
