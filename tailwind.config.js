/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(#0e1117, #161b22)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'dark': '#204829',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'primary': '#5cdb95',
      'secondary': '#00ff2b',
      'tertiary': '#edf5e1',
    },
  },
  plugins: [],
}

