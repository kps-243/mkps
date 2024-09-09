// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  ssr: false,
  compatibilityDate: '2024-09-09'
});