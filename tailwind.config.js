/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        
      },
      animation: {
        slideIn: 'slideIn 2s ease-out',
      },
    },
    fontFamily: {
      // 'serif': ['Playfair Display', 'serif', ],
      'serif': ['IBM Plex Serif', 'serif', ],
      
    },

  },
  plugins: [],
}
