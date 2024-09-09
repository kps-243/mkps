<template>
  <footer class="bg-purple-500 py-12 lg:py-20">
    <div class="container mx-auto flex flex-col justify-center items-center text-center lg:text-left gap-12 lg:gap-0 lg:flex-row lg:justify-between">
      <div class="flex flex-col gap-2 part1">
        <h3 class="text-4xl font-right">Morgan KPASSI</h3>
        <p>Lyon, France</p>
      </div>
      <div class="flex flex-col gap-2 lg:gap-4 part2">
        <div class="font-medium text-lg lg:text-2xl">Menu</div>
        <div class="flex flex-col gap-1">
          <a href="/" class="hover:text-white">Home</a>
          <a href="#a-propos" class="hover:text-white">About</a>
          <a href="#project" class="hover:text-white">Projects</a>
          <a href="#contact" class="hover:text-white">Contact</a>
        </div>
      </div>
      <div class="flex flex-col gap-2 lg:gap-4 part3">
        <div class="font-medium text-lg lg:text-2xl">Contact</div>
        <div class="flex flex-col gap-2">
          <a href="mailto:morgan.kpassi@gmail.com" class="hover:text-white">morgan.kpassi@gmail.com</a>
          <div>(+33) 6 66 84 23 88</div>
          <div class="flex lg:justify-start justify-center gap-3">
            <a href="https://codepen.io/kps-243" target="_blank" rel="noopener noreferrer" aria-label="codepen">
              <img src="/img/codepen.svg" alt="Icon CodePen" class="h-6">
            </a>
            <a href="https://www.linkedin.com/in/morgan-kpassi-855509211/" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
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
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animateFooter();
  },
  methods: {
    animateFooter() {
      // Utiliser matchMedia pour appliquer des animations seulement sur les grands écrans
      ScrollTrigger.matchMedia({
        // Pour les écrans mobiles (max-width: 768px)
        "(max-width: 768px)": () => {
          // Ne rien faire ici pour désactiver les animations sur mobile
        },

        // Pour les écrans de taille moyenne et plus grands
        "(min-width: 769px)": () => {
          gsap.from('.part1', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.part2',
              start: 'top 75%',
              end: 'bottom bottom',
              scrub: 1,
            }
          });

          gsap.from('.part2', {
            duration: 1,
            x: -30,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.part2',
              start: 'top 75%',
              end: 'bottom bottom',
              scrub: 1,
            }
          });

          gsap.from('.part3', {
            duration: 1,
            x: 30,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.part3',
              start: 'top 75%',
              end: 'bottom bottom',
              scrub: 1,
            }
          });
        }
      });
    }
  }
};
</script>
