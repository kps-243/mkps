<template>
  <header class="container mx-auto py-5 lg:py-8 px-10 z-20 font-mons bg-purple-500 sticky top-0 lg:top-4 lg:rounded-full shadow-2xl">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="px-1 logo">
        <img src="/img/logo.png" alt="Logo" class="w-20">
      </a>

      <!-- Burger Menu Icon for Mobile -->
      <button @click="toggleMenu" class="block md:hidden focus:outline-none burger-menu">
        <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-5 text-base nav-links">
        <a href="/" class="mr-4 text-center hover:text-pink-400">Home</a>
        <a href="#a-propos" class="mr-4 text-center hover:text-pink-400">About</a>
        <a href="#project" class="mr-4 text-center hover:text-pink-400">Projects</a>
        <a href="#contact" class="mr-4 text-center hover:text-pink-400">Contact</a>
      </nav>

      <!-- Contact (visible on all screens) -->
      <div class="hidden md:block contact-info">Call me. (+33) 06 66 84 23 88</div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMenuOpen" class="md:hidden flex flex-col justify-center items-center mt-4 bg-purple-500 text-white rounded-lg p-4 h-screen burger-menu-content">
      <nav class="flex flex-col gap-8 text-xl -mt-10">
        <a href="/" @click="toggleMenu" class="text-center hover:text-pink-400">Home</a>
        <a href="#a-propos" @click="toggleMenu" class="text-center hover:text-pink-400">About</a>
        <a href="#project" @click="toggleMenu" class="text-center hover:text-pink-400">Projects</a>
        <a href="#contact" @click="toggleMenu" class="text-center hover:text-pink-400">Contact</a>
      </nav>
      <div class="mt-8 text-center">Call me. (+33) 06 66 84 23 88</div>
    </div>
  </header>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    animateHeader() {
      gsap.from('.logo', {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.logo',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from('.nav-links', {
        duration: 1,
        x: -30,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.nav-links',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from('.contact-info', {
        duration: 1,
        x: 30,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from('.burger-menu', {
        duration: 1,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.burger-menu',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from('.burger-menu-content', {
        duration: 1,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.burger-menu-content',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  },
  mounted() {
    this.animateHeader();
  }
};
</script>

<style scoped>
/* Add any additional styles for animations here if needed */
</style>
