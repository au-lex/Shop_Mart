/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   keyframes: {
    //     wave: {
    //       '0%, 100%': { transform: 'scale(0.8)', opacity: 0.7 },
    //       '50%': { transform: 'scale(1.2)', opacity: 1 },
    //     },
    //   },
    //   animation: {
    //     wave1: 'wave 2s infinite',
    //     wave2: 'wave 2.5s infinite',
    //     wave3: 'wave 3s infinite',
    //     wave4: 'wave 3.5s infinite',
    //     wave5: 'wave 4s infinite',
    //   },
    // },


    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '50%': { transform: 'scale(1.2)', opacity: 0.5 },
          '100%': { transform: 'scale(1.4)', opacity: 0 },
        },
      },
      animation: {
        wave1: 'wave 2s infinite',
        wave2: 'wave 2.5s infinite',
        wave3: 'wave 3s infinite',
        wave4: 'wave 3.5s infinite',
        wave5: 'wave 4s infinite',
      },
    },
  },
  plugins: [],
}



