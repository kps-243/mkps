<script>
import ThreeAvatar from '~/components/ThreeAvatar.vue';
import ProjectCard from './components/ProjectCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Plugin pour animations au scroll
// import { SplitText } from "gsap/SplitText";

// Enregistre le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    ThreeAvatar,
    ProjectCard,
    Header,
    Footer
  },
  data() {
    return {
      projects: [
        {
          title: "Verbateam",
          image: "/img/verbateam.jpeg",
          altText: "Logo de Verbateam",
          technology: "WordPress",
          link: "https://verbateam-services.fr/",
          description: "Verbateam est un site dédié à la prévention en santé en entreprise, conçu pour aider les sociétés à promouvoir le bien-être au travail. Développé avec WordPress, le site met l'accent sur un contenu textuel dynamique qui s'adapte aux interactions des utilisateurs. Le projet a été réalisé en un mois et demi, avec des personnalisations supplémentaires pour garantir une expérience utilisateur fluide."
        },
        {
          title: "Lyomat",
          image: "/img/lyomat.jpeg",
          altText: "Logo de Lyomat",
          technology: "WordPress",
          link: "https://lyomat.fr/",
          description: "Lyomat est un site e-commerce dédié à la vente d'équipements de construction. La plateforme est connectée à JBC, un fournisseur majeur de machines de chantier. Pendant un an, j'ai assuré la maintenance du projet, incluant des mises à jour régulières de WordPress, l'ajout de nouvelles fonctionnalités et la garantie d'un fonctionnement optimal. Le site offre une expérience d'achat intuitive et efficace pour les professionnels du secteur."
        },
        {
          title: "ETPA",
          image: "/img/etpa.jpeg",
          altText: "Logo de l'ETPA",
          technology: "Laravel",
          link: "https://www.etpa.com/",
          description: "ETPA est le site officiel de l'école de photographie ETPA, mettant en avant ses programmes, événements et portfolios d'étudiants. Construit avec Laravel, ce site a été maintenu pendant un an, période durant laquelle diverses mises à jour et optimisations ont été réalisées pour améliorer les performances et l'engagement des utilisateurs. Il s'agit d'un hub informatif pour les futurs étudiants et partenaires de l'école."
        },
        {
          title: "Elixir",
          image: "/img/elixir.jpeg",
          altText: "Logo d'Elixir",
          technology: "Prestashop",
          link: "https://elixir-lingerie.com",
          description: "Elixir est un site e-commerce sophistiqué dédié à la vente de lingerie haut de gamme, développé avec Prestashop. Le projet a été réalisé en trois mois, suivi d'une maintenance continue incluant des mises à jour de la plateforme et des corrections de bugs. Le design élégant et la navigation fluide du site offrent une expérience d'achat premium, en adéquation avec l'image luxueuse de la marque."
        },
        {
          title: "Alors",
          image: "/img/alors.jpeg",
          altText: "Logo d'Alors",
          technology: "Prestashop",
          link: "https://velos.alors.store/",
          description: "Alors est une plateforme e-commerce dédiée à la vente de vélos électriques. Le site a été développé en CSS natif et intégré avec Prestashop. Réalisé en seulement un mois, le projet a été déployé rapidement sans compromettre la qualité. Le site propose une interface claire et intuitive, facilitant la navigation et l'achat des derniers modèles de vélos électriques."
        },
        {
          title: "Clos & Hameaux",
          image: "/img/closethameaux.jpeg",
          altText: "Logo de Clos et Hameaux",
          technology: "NuxtJs",
          link: "https://closethameau.fr/",
          description: "Clos & Hameaux est un site promotionnel pour une résidence senior, offrant un environnement serein et actif aux personnes âgées. Le site a été développé avec Nuxt.js pour le front-end et Strapi pour le back-end, en deux mois. La plateforme met en valeur les équipements, services et activités communautaires du village, le rendant attrayant pour les futurs résidents et leurs familles."
        }
      ]

    };
  },
  mounted() {
  this.setupAnimations();
  this.handleAnchorClick(); // Ajoutez cette ligne pour gérer les clics sur les ancres
},

methods: {
  setupAnimations() {
    ScrollTrigger.matchMedia({
      // Désactiver les animations pour mobile
      "(max-width: 768px)": () => {
        this.animateText(false);
        this.animateAvatar(false);
        this.animateAbout(false);
        this.animateProjects(false, true);
        this.animateContactSection(false);
      },
      
      // Activer les animations pour les grands écrans
      "(min-width: 769px)": () => {
        this.animateText(true);
        this.animateAvatar(true);
        this.animateAbout(true);
        this.animateProjects(true, false);
        this.animateContactSection(true);
      }
    });
  },

  handleAnchorClick() {
    // Gérer les clics sur les ancres pour assurer un défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Assurez-vous que ScrollTrigger est rafraîchi après le défilement
          setTimeout(() => {
            ScrollTrigger.refresh(); 
          }, 500); // Attendez un moment pour que le défilement soit terminé
        }
      });
    });
  },

  animateProjects(scrubEnabled, disableOnMobile) {
    if (disableOnMobile) {
      // Si l'on est sur mobile, ne pas exécuter les animations des project-cards
      return;
    }

    if (!scrubEnabled) {
      // Animation basique pour mobile sans ScrollTrigger
      gsap.from('.title-project', {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
      });
    } else {
      // Animation avec ScrollTrigger pour desktop
      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true,
            toggleActions: 'play none none reset'
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.1,
        });
      });

      gsap.from('.title-project', {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.title-project',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  },

  animateText(scrubEnabled) {
    // Animation simple du texte qui marche pour les deux
    gsap.from(".name span", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    gsap.from(".quote span", {
      duration: 1.5,
      opacity: 0,
      rotationX: 90,
      transformOrigin: "top center",
      stagger: 0.15,
      ease: "expo.out",
      delay: 1
    });
  },

  animateAvatar(scrubEnabled) {
    // Animation de l'avatar, basique sans ScrollTrigger pour mobile
    gsap.from(this.$refs.avatar, {
      duration: 1.5,
      opacity: 0,
      y: 100,
      ease: "power3.out",
      delay: 1.5
    });
  },

  animateAbout(scrubEnabled) {
    if (!scrubEnabled) {
      // Animation basique pour mobile sans ScrollTrigger
      gsap.from('.image', {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('.title', {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.me', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });
    } else {
      // Animations avec ScrollTrigger pour desktop
      gsap.from('.image', {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.from('.title', {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.title',
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.from('.me', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.me',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  },

  animateContactSection(scrubEnabled) {
    if (!scrubEnabled) {
      // Animation basique pour mobile sans ScrollTrigger
      gsap.from('.contact-title', {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('.contact-content', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      });
    } else {
      // Animation avec ScrollTrigger pour desktop
      gsap.from('.contact-title', {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.from('.contact-content', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  },
}
};
</script>
<template>
  <div class="bg-gradient-to-b from-purple-500 to-pink-300 text-white text-base">
    <span id="home"></span>
    <Header />
    <main>
      <section class="lg:py-16 py-8 container mx-auto font-mons text-center flex flex-col gap-12">
        <div>
          <h1 class="font-right text-3xl lg:text-6xl name">
            <span>M</span><span>o</span><span>r</span><span>g</span><span>a</span><span>n</span>
            <span> K</span><span>P</span><span>A</span><span>S</span><span>S</span><span>I</span>
          </h1>            
          <p class="mt-5 text-base px-6 italic quote">
            <span>Développeur web passionné,</span>&nbsp;
            <span>je conçois des solutions robustes et créatives</span>&nbsp;
            <span>avec rigueur, curiosité et sens du détail.</span><br>
            <span>Chaque ligne de code est pour moi un moyen</span>&nbsp;
            <span>d’allier performance et élégance technique.</span>
          </p>
        </div>
        <!-- Insertion de l'avatar 3D -->
      <ThreeAvatar ref="avatar" />
      </section>

      <section id="a-propos" class="-mt-20 lg:my-8 container mx-auto font-mons">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <h2 class="lg:hidden block text-xl uppercase font-right w-fit title">À propos de moi</h2>
          <div class="w-full lg:w-1/2 flex justify-center">
            <div class="w-56 lg:w-80 h-fit">
              <img
                src="/img/morgan.jpeg"
                alt=""
                class="object-contain rounded-xl shadow-2xl image"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="flex flex-col gap-5">
              <h2 class="hidden lg:block text-4xl uppercase font-right w-fit title">À propos de moi</h2>
              <div class="flex flex-col gap-3 px-6 lg:px-0">
                <p class="me">
                  Je suis Morgan Kpassi, développeur web passionné, actuellement à la recherche d'une alternance à partir de <strong>septembre 2025</strong> dans le cadre d’un master en développement web.
                </p>
                <p class="me">
                  Fort de plusieurs expériences en agence et en freelance, j’ai eu l’opportunité de concevoir des projets variés en utilisant des technologies comme <strong>Nuxt.js, Laravel, WordPress</strong> ou encore <strong>Prestashop</strong>. J'accorde une attention particulière à la performance, à l'accessibilité et à l’ergonomie des interfaces.
                </p>
                <p class="me">
                  J’ai également développé de solides compétences en <strong>gestion de projet</strong>, en <strong>travail en équipe pluridisciplinaire</strong> et en <strong>versioning avec Git</strong>, me permettant de m’adapter facilement à différents environnements techniques.
                </p>
                <p class="me">
                  Mon objectif : intégrer une entreprise dynamique dans laquelle je pourrais apporter mes compétences tout en continuant à me former sur des projets concrets et ambitieux.
                </p>
                <p class="me">
                  👉 <strong>N'hésitez pas à me contacter</strong> pour en savoir plus ou échanger autour d’une opportunité d’alternance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project" class="my-28 container mx-auto font-mons flex flex-col gap-12 lg:gap-20">
        <h2 class="lg:text-4xl text-xl uppercase font-right text-center title">projets</h2>
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
        <h2 class="lg:text-4xl text-xl uppercase font-right text-center contact-title">Contact</h2>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-5 bg-white text-purple-500 lg:rounded-full rounded-3xl py-4 px-12 lg:px-24 shadow-2xl contact-content">
          <div class="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4">
            <p>Vous voulez en savoir plus sur Morgan&nbsp;KPASSI ?</p>
            <p class="font-semibold text-2xl">Télécharger mon CV &#128521;</p>
          </div>
          <div class="flex justify-end items-center gap-5 lg:w-1/2 w-fit">
            <a href="pdf/cv_morgan_kpassi.pdf" target="_blank" class="w-full lg:w-fit bg-purple-500 text-white px-12 py-2 rounded-xl hover:bg-pink-300 hover:text-white transition">
              Télécharger
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>
