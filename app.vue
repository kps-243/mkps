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
          altText: "Verbateam Logo",
          technology: "WordPress",
          link: "https://verbateam-services.fr/",
          description: "Verbateam is a corporate health prevention website designed to help companies promote well-being in the workplace. The site was developed using WordPress, with an emphasis on dynamic text content that adapts to user interactions. The project was completed in a month and a half, with additional customization to ensure a smooth user experience."
        },
        {
          title: "Lyomat",
          image: "/img/lyomat.jpeg",
          altText: "Lyomat Logo",
          technology: "WordPress",
          link: "https://lyomat.fr/",
          description: "Lyomat is an e-commerce website dedicated to the sale of construction equipment. The platform is connected with JBC, a leading provider of construction machinery. Over the course of one year, I maintained the project by regularly updating WordPress, adding new features, and ensuring seamless functionality. The site caters to professionals in the construction industry, offering an intuitive and efficient shopping experience."
        },
        {
          title: "ETPA",
          image: "/img/etpa.jpeg",
          altText: "ETPA Logo",
          technology: "Laravel",
          link: "https://www.etpa.com/",
          description: "ETPA is the official website for the ETPA photography school, showcasing their programs, events, and student portfolios. Built using Laravel, this platform was maintained for a full year, during which various updates and optimizations were implemented to improve site performance and user engagement. It serves as an informative hub for prospective students and partners of the school."
        },
        {
          title: "Elixir",
          image: "/img/elixir.jpeg",
          altText: "Elixir Logo",
          technology: "Prestashop",
          link: "https://elixir-lingerie.com",
          description: "Elixir is a sophisticated e-commerce site selling high-end lingerie, developed using Prestashop. The project was completed within three months, followed by ongoing maintenance, including updates to the Prestashop platform and bug fixes. The website’s elegant design and smooth navigation provide a premium shopping experience, aligning with the brand's luxurious image."
        },
        {
          title: "Alors",
          image: "/img/alors.jpeg",
          altText: "Alors Logo",
          technology: "Prestashop",
          link: "https://velos.alors.store/",
          description: "Alors is a streamlined e-commerce platform specializing in the sale of electric bicycles. The website was developed using native CSS and integrated with Prestashop. The project was completed in just one month, ensuring fast deployment without compromising on quality. The site offers a clean and intuitive interface, making it easy for customers to browse and purchase the latest electric bikes."
        },
        {
          title: "Clos & Hameaux",
          image: "/img/closethameaux.jpeg",
          altText: "Clos et Hameaux Logo",
          technology: "NuxtJs",
          link: "https://closethameau.fr/",
          description: "Clos & Hameaux is a promotional website for a senior living community, offering a serene and active environment for the elderly. The site was developed using Nuxt.js for the front-end and Strapi for the back-end, completed within two months. The platform serves as a vibrant showcase of the village, highlighting its amenities, services, and community activities, making it appealing to potential residents and their families."
        }
      ]
    };
  },
  mounted() {
    this.animateText();
    this.animateAvatar();
    this.animateAbout();
    this.animateProjects(); // Appeler l'animation après le montage
    this.animateContactSection();
  },
  methods: {
    animateProjects() {
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
          delay: index * 0.1, // Un léger décalage pour chaque carte
        });
      });
      gsap.from('.title-project', {
        duration: 1.5,
        y: -50,  // Moves the title up from 50px above its original position
        opacity: 0,  // Fades the title in from transparent
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.title',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });
    },
    animateText() {
      // Animate each letter of the name
      gsap.from(".name span", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      // Animate each line of the quote
      gsap.from(".quote span", {
        duration: 1.5,
        opacity: 0,
        rotationX: 90,  // Adds a vertical flip rotation effect
        transformOrigin: "top center",  // Defines the point from which the rotation happens
        stagger: 0.15,  // Less time between each line's appearance
        ease: "expo.out",  // Creates a smoother, more dramatic easing
        delay: 1  // Delay to start after the name animation
      });
    },
    animateAvatar() {
      // Animate the avatar to appear after the text
      gsap.from(this.$refs.avatar.$el, {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        delay: 1.5
      });
    },
    animateAbout() {
      gsap.from('.image', {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
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
          scrub: true
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
          scrub: true
        }
      });
    },
    animateContactSection() {
      gsap.from('.contact-title', {
        duration: 1.5,
        y: -50,  // Moves the title up from 50px above its original position
        opacity: 0,  // Fades the title in from transparent
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.from('.contact-content', {
        duration: 1.5,
        y: 50,  // Moves the content up from 50px below its original position
        opacity: 0,  // Fades the content in from transparent
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
};
</script>
<template>
  <div class="bg-gradient-to-b from-purple-500 to-pink-300 text-white text-base">
    <Header />
    <main>
      <section class="lg:py-16 py-8 container mx-auto font-mons text-center flex flex-col gap-12">
        <div>
          <h1 class="font-right text-3xl lg:text-6xl name">
            <span>M</span><span>o</span><span>r</span><span>g</span><span>a</span><span>n</span>
            <span> K</span><span>P</span><span>A</span><span>S</span><span>S</span><span>I</span>
          </h1>            
          <p class="mt-5 text-base px-6 italic quote">
            <span>I'm a passionate web developer,</span>&nbsp;
            <span>ready to take on any challenge</span>&nbsp;
            <span>with the precision and strength</span>&nbsp;
            <span>of a boxer.</span><br>
            <span>Creative in code,</span>&nbsp;
            <span>technical in approach.</span>
          </p>        
        </div>
        <!-- Insertion de l'avatar 3D -->
      <ThreeAvatar ref="avatar" />
      </section>

      <section id="a-propos" class="-mt-20 lg:my-8 container mx-auto font-mons">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <h2 class="lg:hidden block text-xl uppercase font-right w-fit title">About Me</h2>
          <div class="w-full lg:w-1/2 flex justify-center">
            <div class="w-56 lg:w-80 h-fit">
              <img
                src="/img/morgan-plage.jpg"
                alt=""
                class="object-contain rounded-xl shadow-2xl image"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="flex flex-col gap-5">
              <h2 class="hidden lg:block text-4xl uppercase font-right w-fit title">About Me</h2>
              <div class="flex flex-col gap-3 px-6 lg:px-0">
                <p class="me">
                  My name is Morgan Kpassi, I am 21 years old, and I hold a DUT in Multimedia and Internet Careers as well as a Bachelor's degree in Web Engineering from ESGI.
                </p>
                <p class="me">
                  I am passionate about combat sports, basketball, and running. I have skills in Nuxt.js, Laravel, WordPress, Strapi, and Prestashop.
                </p>
                <p class="me">
                  I have two years of professional experience at Sharewood, a digital marketing agency based in Lyon, specializing in web development. I have had the opportunity to collaborate with community managers, graphic designers, and developers within a dynamic team.
                </p>
                <p class="me">
                  I am proficient in Git and am currently seeking a two-year internship to complete a Master's degree in Web Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project" class="my-28 container mx-auto font-mons flex flex-col gap-12 lg:gap-20">
        <h2 class="lg:text-4xl text-xl uppercase font-right text-center title">projects</h2>
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
            <p>Want to know more about Morgan&nbsp;KPASSI?</p>
            <p class="font-semibold text-2xl">Download my CV &#128521;</p>
          </div>
          <div class="flex justify-end items-center gap-5 lg:w-1/2 w-fit">
            <a href="pdf/CV_Morgan_Kpassi.pdf" target="_blank" class="w-full lg:w-fit bg-purple-500 text-white px-12 py-2 rounded-xl hover:bg-pink-300 hover:text-white transition">
              Download
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>
