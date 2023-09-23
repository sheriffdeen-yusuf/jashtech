import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Nunito', 'sans-serif'
        ]
      }, 
      colors: {
        primary: "#FD2F2F"
      }, 
      height : {
        screen: '100dvh',
      }

    },
  },
  plugins: [],
  // plugins: [require("tailwindcss-animate")],
}
export default config
