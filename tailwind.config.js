/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#EC4899',
        background: '#0F0F0F',
        surface: '#1A1A1A',
        border: '#2A2A2A',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};
