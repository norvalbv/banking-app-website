import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'marquee-left': 'marquee-left 60s linear infinite',
        'marquee-right': 'marquee-right 60s linear infinite',
        gradient: 'gradient 12s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'blob-float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          to: {
            'background-position': '200% center',
          },
        },
        'marquee-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-70%)',
          },
        },
        'marquee-right': {
          '0%': {
            transform: 'translateX(-70%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5%, 5%)' },
          '50%': { transform: 'translate(-5%, 10%)' },
          '75%': { transform: 'translate(-10%, -5%)' },
        },
      },
      backgroundImage: {
        'line-mask': 'linear-gradient(to bottom, transparent, black 75%, black)',
      },
      transitionProperty: {
        transform: 'transform',
      },
    },
  },
  plugins: [require('tailwindcss-animate')], // Ensure this plugin supports custom keyframes and animations as expected.
};

export default config;
