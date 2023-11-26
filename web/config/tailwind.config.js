/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        hm: ['2rem', { fontWeight: 700, lineHeight: '150%' }],
        hs: ['1rem', { fontWeight: 700, lineHeight: '150%' }],
        bm: ['1rem', { lineHeight: '150%' }],
        bs: ['0.75rem', { lineHeight: '150%' }],
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        purple: '#633CFF',
        red: '#FF3939',
        borders: '#D9D9D9',
        grey: '#737373',
        'dark-grey': '#333333',
        'light-grey': '#FAFAFA',
        'light-purple': '#EFEBFF',
        'purple-hover': '#BEADFF',
      },
      boxShadow: {
        app: '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
        card: '0px 0px 32px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
