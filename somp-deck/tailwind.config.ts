import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E91E8C',
          secondary: '#9B59B6',
          accent: '#003B5C',
          dark: '#1A1A2E',
          darker: '#0F1419',
          text: '#FFFFFF',
          'text-muted': '#E0E0E0',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
