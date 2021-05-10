module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vll-pink': '#EA5198',
        'vll-yellow': '#FDC300',
        'vll-blue': '#1D99D6',
        'vll-green': '#54B259',
        'vll-turquoise': '#B2F5EA',
        'vll-gray': '#CBD5E0',
      },
      screens: {
        '3xl': '2560px',
        '4xl': '3840px',
      },
    },
    textColor: (theme) => ({
      ...theme('colors'),
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      default: 'var(--color-text-default)',
      table: 'var(--color-table-text-default)'
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      default: 'var(--color-bg-default)',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: 'var(--color-border-default)',
      table: 'var(--color-table-border-default)'
    }),
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
