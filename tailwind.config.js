/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      darkTheme: {
        backGround: {
          backgroundColor: ' hsl(236, 9%, 61%)',
        },
      },

      lightTheme: {
        backGround: {
          backgroundColor: 'hsl(236, 33%, 92%)',
        },
      },
    },
  },
  plugins: [],
};
