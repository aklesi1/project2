/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' ],
  theme: {
    // screens:{
    //   sm:'375px',
    //   lg:'1440px'
    // },
    extend: {
      colors:{
        primaryRed: 'hsl(0, 78%, 62%)',
primaryCyan: 'hsl(180, 62%, 55%)',
primaryOrange: 'hsl(34, 97%, 64%)',
primaryBlue: 'hsl(212, 86%, 64%)',


 veryDarkBlue: 'hsl(234, 12%, 34%)',
grayishBlue: 'hsl(229, 6%, 66%)',
veryLightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
