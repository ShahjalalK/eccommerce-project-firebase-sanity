/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.jsx",
    "./pages/checkout.jsx",
    "./pages/recoil.jsx",
    "./components/header.jsx",
    "./components/banner.jsx",
    "./components/productfeed.jsx",
    "./components/product.jsx",
    "./components/checkoutporduct.jsx",
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

