/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#13121C',
        surface: '#13121C',
        'surface-bright': '#393842',
        'surface-container-lowest': '#0E0D16',
        'surface-container-low': '#1B1B24',
        'surface-container': '#1F1F28',
        'surface-container-high': '#2A2933',
        'surface-container-highest': '#35343E',
        'on-surface': '#E4E0EE',
        'on-surface-variant': '#CEC6AD',
        primary: '#FEE341',
        'primary-container': '#E0C722',
        'on-primary': '#383000',
        secondary: '#C7BFFF',
        'secondary-container': '#453C85',
        outline: '#979179',
        'outline-variant': '#4B4733',
        error: '#FFB4AB',
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
};
