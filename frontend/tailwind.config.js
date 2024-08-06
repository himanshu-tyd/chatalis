/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#110F10",
        bgPrimary:"#EFF6FC",
        title:"rgba(0, 0, 0, 0.62)",
        desc:"rgba(137, 137, 137, 0.62)",
        gray:"#E7E7E7",
        green:"#CEF196"
      }
    },
  },
  plugins: [],
}