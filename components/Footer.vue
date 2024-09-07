<template>
<footer class="bg-purple-500 py-12 lg:py-20">
    <div class="container mx-auto flex flex-col justify-center items-center text-center lg:text-left gap-12 lg:gap-0 lg:flex-row lg:justify-between">
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
          <div class="flex lg:justify-start justify-center gap-3">
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
</template>