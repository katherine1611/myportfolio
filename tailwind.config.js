/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor : {
        'primary' : '#10FFCB',
        'secondary' : '#212529', 
        'gray' : '#343A40',
        'white' : '#F1FAEE',
        'white-opac-30' : 'rgba(255, 255, 255, 0.3)',
        'white-opac-16' : '',
        'gray-opac-29' : '#',
      },
      colors : {
        'primary' : '#10FFCB',
        'secondary' : '#212529', 
        'gray' : '#343A40',
        'white' : '#F1FAEE',
        'white-opac-30' : 'rgba(255, 255, 255, 0.3)',
        'white-opac-16' : '',
        'gray-opac-29' : '#',
      },
      content : {
        'syntax' : 'url("../assets/objects/_/_.pdf")', 
        'w8' : 'url("../assets/objects/W8-light-sm.svg")',
        'landing-image' : 'url("../assets/objects/me.pdf")'
      },
      backgroundImage : {
        'vector' : 'url("../assets/objects/vector.pdf")'
      },
      fontFamily : {
        'secondary' : 'Orbitron, sans-serif'
      }
    },
  },
  plugins: [],
}

