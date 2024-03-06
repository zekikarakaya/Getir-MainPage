/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors:{
        "header-color":"#4C3398",
        "hover-color":"#5D3EBC",
        "getir-sarı":"#FFD300",
        "category":"#DBDBFF",
        "btn-color":"#63A480",
        "btn-hover":"#2E8555",
      },
      spacing: {
        "128":"32rem",
        "125":"31.25rem",
      }
    }
  
  },
  plugins: [],
}

