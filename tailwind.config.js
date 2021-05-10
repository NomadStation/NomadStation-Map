module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],

    options: {
      safelist: [
        'search_select',
        'search_select__control',
        'search_select__input',
        'search_select__menu',
        'search_select__menu-notice',
        'search_select__dropdown-indicator',
        'search_select__indicator-separator',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
