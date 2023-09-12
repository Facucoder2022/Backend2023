/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        myLightBlue: '#ADD8E6',
        myBlue: '#4169E1',
        myDarkBlue: '#007BA7',
        myElectricBLue: '#00FFFF'
      }
    },
  },
  plugins: [require("daisyui")],
}
