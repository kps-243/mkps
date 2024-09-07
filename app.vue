<script>
import ThreeAvatar from '~/components/ThreeAvatar.vue';
import ProjectCard from './components/ProjectCard.vue'
export default {
  components: {
    ThreeAvatar,
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          title: "Verbateam",
          image: "/img/verbateam.png",
          altText: "Verbateam Logo",
          technology: "WordPress",
          link: "https://verbateam-services.fr/",
          description: "Site de prevention santé en entreprise.</br> Projet réalisé 1 mois et demi avec le texte dynamique."
        },
        {
          title: "Lyomat",
          image: "/img/lyomat.png",
          altText: "Lyomat Logo",
          technology: "WordPress",
          link: "https://lyomat.fr/",
          description: "Site de vente de matériel de travaux en lien avec JBC.</br> 1 an de maintenance du projet (Mise à jour wordpress, ajout de fonctionnalités)."
        },
        {
          title: "ETPA",
          image: "/img/etpa.png",
          altText: "ETPA Logo",
          technology: "Laravel",
          link: "https://www.etpa.com/",
          description: "Site de l'école de photographie ETPA.</br> Projet maintenu pendant 1 an."
        },
        {
          title: "Elixir",
          image: "/img/elixir.png",
          altText: "Elixir Logo",
          technology: "Prestashop",
          link: "https://elixir-lingerie.com",
          description: "Site de vente de lingerie. </br>Projet réalisé en 3 mois + Maintenance (Mise à jour Prestashop, Fix bug,...)."
        },
        {
          title: "Alors",
          image: "/img/alors.png",
          altText: "Alors Logo",
          technology: "Prestashop",
          link: "https://velos.alors.store/",
          description: "Site de vente de vélos.</br> Projet réalisé en 1 mois."
        },
        {
          title: "Clos & Hameaux",
          image: "/img/closethameaux.png",
          altText: "Clos et Hameaux Logo",
          technology: "NuxtJs",
          link: "https://closethameau.fr/",
          description: "Site vitrine d'un village senior.</br> Lieux de détente et animé pour les personnes âgés.</br> Projet réalisé en 2 mois avec le back en Strapi."
        }
      ]
    };
  }
};
</script>
<template>
  <div class="bg-gradient-to-b from-purple-500 to-pink-300 text-white text-base">
    <header class="container mx-auto text-xs font-mons flex justify-between py-7">
      <div class="px-1">
        <img src="/img/logo-white.png" alt="Logo" class="w-20">
      </div>
      <nav class="flex gap-5 text-base ">
        <a href="/" class="mr-4 text-center">Accueil</a>
        <a href="#a-propos" class="mr-4 text-center">À propos</a>
        <a href="#project" class="mr-4 text-center">Projets</a>
        <a href="#contact" class="mr-4 text-center">Contact</a>
      </nav>
      <div>Call me. (+33) 06 66 84 23 88</div>
    </header>
    <main>
      <section class="my-8 container mx-auto font-mons text-center">
        <h1 class="font-right text-6xl">Morgan KPASSI</h1>
        <p class="mt-2 text-base">Je suis un développeur web passionné avec une expertise en...</p>
      </section>

      <!-- Insertion de l'avatar 3D -->
      <ThreeAvatar />

      <section id="a-propos" class="my-8 container mx-auto font-mons">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="w-1/2 flex justify-center">
            <div class=" w-80 h-fit">
              <img src="/img/morgan-plage.jpg" alt="" class="object-contain rounded-xl shadow-2xl">
            </div>
          </div>
          <div class="w-1/2">
            <div class="flex flex-col gap-5">
              <h2 class="text-4xl uppercase font-right border-b w-fit">My Story</h2>
              <div class="flex flex-col gap-3">
                <p>My name is Morgan Kpassi, I'm 21 years old, and I hold a DUT in Multimedia and Internet Professions, as well as a Bachelor's degree in Web Engineering from ESGI.</p>
                
                  <p>I am passionate about combat sports, basketball, and running. I have developed skills in Nuxt.js, Laravel, WordPress, Strapi, and Prestashop, which I have applied in real-world projects.</p>
                
                  <p>I have two years of professional experience working at Sharewood, a digital marketing agency based in Lyon that specializes in web development. During this time, I had the opportunity to collaborate with community managers, graphic designers, and developers as part of a dynamic team.</p>
                
                  <p>I have a strong command of Git, and I am currently looking for a two-year work-study program to pursue a Master's in web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project" class="my-28 container mx-auto font-mons flex flex-col gap-20">
        <h2 class="text-4xl uppercase font-right text-center">projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :image="project.image"
            :altText="project.altText"
            :technology="project.technology"
            :link="project.link"
            :description="project.description"
          />
        </div>
      </section>
      <section id="contact" class="my-28 container mx-auto font-mons flex flex-col gap-12">
        <h2 class="text-4xl uppercase font-right text-center">Contact</h2>
        <div class="flex justify-center items-center gap-5 bg-white text-purple-500 rounded-full py-4 px-24 shadow-2xl">
          <div class="w-1/2">
            <p class="">Vous voulez en savoir plus sur Morgan KPASSI ?</p>
            <p class=" font-semibold text-2xl">Téléchargez mon CV &#128521;</p>
          </div>
          <div class="flex justify-center items-center gap-5 w-1/2">
            <button class="w-1/3 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-pink-300 hover:text-white transition">
              Télécharger
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
