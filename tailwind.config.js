/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        'home-top' : '5.7rem',
      },
      boxShadow: {
        custom: '6px 4px 20px rgba(0, 0, 0, 0.4)', 
        neon: '0 0 20px rgba(200,227,225, 0.8), 0 0 40px rgba(161,210,201, 0.8)', 
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-in-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};

