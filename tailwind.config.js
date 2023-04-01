/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.jsx",
    "./components/header.jsx",
    "./components/banner.jsx",
    "./components/productfeed.jsx",
    "./components/product.jsx",
  ],
  darkMode : false,
  theme: {
    extend: {
      colors : {
        amazon_blue : {
          light : "#232f3e",
          default : "#131921"
        }
      }
    },
    
  },

  variants : {
    extends : {},
  },
  
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

