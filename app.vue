<script>
import ThreeAvatar from '~/components/ThreeAvatar.vue';

export default {
  components: {
    ThreeAvatar
  }
};
</script>
<template>
  <div class="bg-gradient-to-b from-purple-500 to-pink-300 text-white text-base">
    <header class="container mx-auto text-xs font-mons flex justify-between py-7">
      <div class="px-1"></div>
      <nav class="flex gap-5 text-base ">
        <a href="/" class="mr-4 text-center">Accueil</a>
        <a href="#a-propos" class="mr-4 text-center">À propos</a>
        <a href="#projet" class="mr-4 text-center">Projets</a>
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
      <section class="mt-8 container mx-auto font-mons">
        <h2 class="text-3xl">Projets</h2>
        <p class="mt-2 text-base">Voici quelques-uns de mes projets récents :</p>
      </section>
    </main>
  </div>
</template>
