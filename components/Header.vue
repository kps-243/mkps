<template>
    <header class="container mx-auto py-4 px-2 font-mons">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="px-1">
          <img src="/img/logo.png" alt="Logo" class="w-20">
        </div>
  
        <!-- Burger Menu Icon for Mobile -->
        <button @click="toggleMenu" class="block md:hidden focus:outline-none">
          <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-5 text-base">
          <a href="/" class="mr-4 text-center">Accueil</a>
          <a href="#a-propos" class="mr-4 text-center">À propos</a>
          <a href="#project" class="mr-4 text-center">Projets</a>
          <a href="#contact" class="mr-4 text-center">Contact</a>
        </nav>
  
        <!-- Contact (visible on all screens) -->
        <div class="hidden md:block">Call me. (+33) 06 66 84 23 88</div>
      </div>
  
      <!-- Mobile Navigation Menu -->
      <div v-if="isMenuOpen" class="md:hidden flex flex-col justify-center items-center mt-4 bg-purple-500 text-white rounded-lg p-4 h-screen w-screen">
        <nav class="flex flex-col gap-8 text-xl">
          <a href="/" @click="toggleMenu" class="text-center">Accueil</a>
          <a href="#a-propos" @click="toggleMenu" class="text-center">À propos</a>
          <a href="#project" @click="toggleMenu" class="text-center">Projets</a>
          <a href="#contact" @click="toggleMenu" class="text-center">Contact</a>
        </nav>
        <div class="mt-8 text-center">Call me. (+33) 06 66 84 23 88</div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false, // Track whether the mobile menu is open
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Toggle the state of the menu
      },
    },
  };
  </script>
  
  <style scoped>
  /* Burger Menu Animation */
  .burger-enter-active, .burger-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .burger-enter, .burger-leave-to /* .burger-leave-active in <2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
  </style>
  