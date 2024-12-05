import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],

  // Mode SPA
  ssr: false, // Désactive le rendu côté serveur

  // Configuration pour la génération statique
  generate: {
    routes: [], // Tu peux ajouter des routes dynamiques ici si nécessaire
  },

  compatibilityDate: '2024-09-09',
});
