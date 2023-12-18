/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./index.html"],
    files:["./src/**/*.{js,ts,jsx,tsx}"],
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]

}
