<script>
import ThreeAvatar from '~/components/ThreeAvatar.vue';
import ProjectCard from './components/ProjectCard.vue';
import Header from './components/Header.vue';
export default {
  components: {
    ThreeAvatar,
    ProjectCard,
    Header
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
          description: "Site de vente de vélos électriques intégrés en CSS natif.</br> Projet réalisé en 1 mois."
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
    <!-- <header class="container mx-auto text-xs font-mons py-7">
      <div class="flex justify-between">
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
      </div>
    </header> -->
    <Header />
    <main>
      <section class="lg:py-16 py-8 container mx-auto font-mons text-center flex flex-col gap-12">
        <div>
            <h1 class="font-right text-3xl lg:text-6xl">Morgan KPASSI</h1>
            <p class="mt-2 text-base px-6">Je suis un développeur web passionné avec une expertise en...</p>
        </div>
        <!-- Insertion de l'avatar 3D -->
      <ThreeAvatar />
      </section>

      

      <section id="a-propos" class="-mt-20 lg:my-8 container mx-auto font-mons">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <h2 class="lg:hidden block text-xl uppercase font-right w-fit">Mon histoire</h2>
          <div class="w-full lg:w-1/2 flex justify-center">
            <div class="w-56 lg:w-80 h-fit">
              <img src="/img/morgan-plage.jpg" alt="" class="object-contain rounded-xl shadow-2xl">
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="flex flex-col gap-5">
              <h2 class="hidden lg:block text-4xl uppercase font-right w-fit">Mon histoire</h2>
              <div class="flex flex-col gap-3 px-6 lg:px-0">
                <p>Je m'appelle Morgan Kpassi, j'ai 21 ans, et je suis titulaire d'un DUT en métiers du multimédia et de l'internet ainsi que d'une licence en ingénierie du web de l'ESGI.</p>
                
                  <p>Je suis passionné par les sports de combat, le basket et la course à pied. J'ai des compétences en Nuxt.js, Laravel, WordPress, Strapi et Prestashop.</p>
                
                  <p>J'ai deux ans d'expérience professionnelle au sein de Sharewood, une agence de marketing digital située à Lyon, spécialisée dans le développement web. J'ai eu l'occasion de collaborer avec des community managers, des graphistes et des développeurs au sein d'une équipe dynamique.</p>
                
                  <p>Je maîtrise Git et je suis actuellement à la recherche d'une alternance de deux ans pour réaliser un master en développement web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project" class="my-28 container mx-auto font-mons flex flex-col gap-12 lg:gap-20">
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
      <section id="contact" class="my-28 container mx-auto font-mons flex flex-col gap-12 px-6 lg:px-0">
        <h2 class="text-4xl uppercase font-right text-center">Contact</h2>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-5 bg-white text-purple-500 lg:rounded-full rounded-3xl py-4 px-12 lg:px-24 shadow-2xl">
          <div class="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4">
            <p class="">Vous voulez en savoir plus sur Morgan&nbsp;KPASSI ?</p>
            <p class=" font-semibold text-2xl">Téléchargez mon CV &#128521;</p>
          </div>
          <div class="flex justify-end items-center gap-5 w-1/2">
            <button class="w-full lg:w-fit bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-pink-300 hover:text-white transition">
              Télécharger
            </button>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-purple-500 py-12 lg:py-20">
      <div class="container mx-auto flex flex-col justify-center items-center text-center gap-12 lg:gap-0 lg:flex-row lg:justify-between">
        <div class="flex flex-col gap-2">
          <h3 class="text-4xl font-right">Morgan KPASSI</h3>
          <p>Lyon, France</p>
        </div>
        <div class="flex flex-col gap-2 lg:gap-4">
          <div class="font-medium text-lg lg:text-2xl">Menu</div>
          <div class="flex flex-col gap-1">
            <a href="/" class="hover:text-white">Accueil</a>
            <a href="#a-propos" class="hover:text-white">À propos</a>
            <a href="#project" class="hover:text-white">Projets</a>
            <a href="#contact" class="hover:text-white">Contact</a>
          </div>
        </div>
        <div class="flex flex-col gap-2 lg:gap-4">
          <div class="font-medium text-lg lg:text-2xl">Contact</div>
          <div class="flex flex-col gap-2">
            <a href="mailto:morgan.kpassi@gmail.com" class="hover:text-white">morgan.kpassi@gmail.com</a>
            <div>(+33) 6 66 84 23 88</div>
            <div class="flex justify-center gap-3">
                <a href="https://codepen.io/kps-243" target="_blank" rel="noopener noreferrer" aria-label="codepen">
                  <img src="/img/codepen.svg" alt="Icon CodePen" class="h-6">
                </a>
                <a href="https://www.linkedin.com/in/morgan-kpassi-855509211/" target="_blank" rel="noopener noreferrer"
                  aria-label="linkedin">
                  <img src="/img/linkedin.svg" alt="Icon Linkedin" class="h-6">                
                </a>
                <a href="https://github.com/kps-243" target="_blank" rel="noopener noreferrer" aria-label="github">
                  <img src="/img/github.svg" alt="Icon Github" class="h-6">                
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
