/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
import twTypography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif'],
    },
    extend: {
      spacing: {
        sidebar: '250px',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [daisyui, twTypography],
};
