/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import colors from 'tailwindcss/colors';
// import formTailwind from '@tailwindcss/forms';

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: colors.red[500],
        gray: colors.gray,
        // gray: {
        //   900: '#202225',
        //   800: '#2f3136',
        //   700: '#36393f',
        //   600: '#4f545c',
        //   400: '#d4d7dc',
        //   300: '#e3e5e8',
        //   200: '#ebedef',
        //   100: '#f2f3f5',
        // }
      }
    },
  },
  plugins: [
    flowbite,
  ],
}

