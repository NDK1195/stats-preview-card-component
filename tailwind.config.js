/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'slightly-transparent-white-p': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-transparent-white-h': 'hsla(0, 0%, 100%, 0.6)',
      },
    },
  },
  plugins: [],
};
