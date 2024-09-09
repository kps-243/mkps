<template>
    <div class="flex flex-col gap-4 px-6 lg:px-0 pb-4 lg:pb-0">
      <a :href="link" class="w-full h-auto min-h-48 lg:min-h-64 project-card -mt-9 lg:mt-0">
        <!-- Affiche l'image du projet -->
        <img :src="image" :alt="altText" class="w-full h-auto max-h-[60vh] md:max-h-none object-cover rounded-xl shadow-2xl project-image -z-20">
      </a>

      <div class="flex flex-col gap-2 text-center items-center">
        <!-- Affiche le nom du projet -->
        <h3 class="text-2xl">{{ title }}</h3>
        <!-- Affiche la technologie utilisée -->
        <p>{{ technology }}</p>
  
        <!-- Bouton pour afficher la popup -->
        <button @click="showPopup = true" class="w-1/2 mt-1 lg:mt-4 bg-white text-purple-500 px-4 py-2 rounded-xl hover:bg-purple-500 hover:text-white transition">
          View Details
        </button>
      </div>
  
      <!-- Popup (affiché si showPopup est vrai) -->
      <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
        <div class="bg-white p-6 rounded-lg shadow-lg relative w-96">
          <!-- Bouton pour fermer la popup -->
          <button @click="showPopup = false" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
  
          <!-- Image et description -->
          <img :src="image" :alt="altText" class="object-cover rounded-lg mb-4">
          <h3 class="text-2xl mb-2">{{ title }}</h3>
          <p class="text-gray-700" v-html=description></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    data() {
      return {
        showPopup: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      altText: {
        type: String,
        default: 'Project Image'
      },
      technology: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    display: block;
    transition: transform 0.3s ease;
  }
  
  .project-image {
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  /* Au hover, agrandir légèrement l'image et appliquer un effet de brillance */
  .project-card:hover .project-image {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  @media (max-width: 768px) {
    .project-card:hover .project-image {
      transform: none;
      filter: none;
    }
  }
  </style>
  