/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        FadeIn: 'cFadeIn 0.5s linear',
        FadeInRev: 'cFadeInRev 0.5s linear',
        slideUp: 'cSlideUp 0.5s linear',
      },
      keyframes: {
        cFadeIn: {
          '0%, 25%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        cFadeInRev: {
          '0%, 25%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        cSlideUp: {
          '0%, 25%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
