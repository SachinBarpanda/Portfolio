/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : '#101B3C',
        "secondary" : '#FB6542',
        "tertiary" : '#FFBB00',
      }
    },screens:{
      lg :{max: "1023px"},
      sm :{max : "639px"},
    },
  },
  plugins: [],
}

