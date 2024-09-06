/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ['Monserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        right: ['Righteous', 'monospace'],
      },
    },
  },
  plugins: [],
}
