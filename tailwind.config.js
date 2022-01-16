module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '28rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
