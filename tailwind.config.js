/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'victori-cyan': '#06B6D4',
        'victori-blue': '#0891B2',
        'victori-bg': '#F9FAFB',
        'victori-card': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeInRight': 'fadeInRight 0.8s ease-out forwards',
        'subtleFloat': 'subtleFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
