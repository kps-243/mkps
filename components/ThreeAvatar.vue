<template>
    <div ref="threeContainer" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  // Optionnel pour contrôler la caméra
  
  export default {
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        // Créer la scène, la caméra et le renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000); // Champ de vision réduit pour zoomer davantage
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeContainer.appendChild(renderer.domElement);
  
        // Lumières
        const light = new THREE.AmbientLight(0xFFFFFF, 1); // Lumière ambiante blanche
        scene.add(light);
  
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5); // Lumière directionnelle
        directionalLight.position.set(1, 1, 0).normalize();
        scene.add(directionalLight);
  
        // Contrôles de la caméra
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
  
        // Charger le modèle GLTF avec animation
        const loader = new GLTFLoader();
        let mixer; // Utilisé pour l'animation
  
        loader.load('/models/avatar.glb', (gltf) => {
          const model = gltf.scene;
          scene.add(model);
  
          // Si le modèle contient des animations
          if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);  // Créer un mixer pour les animations
            const action = mixer.clipAction(gltf.animations[0]);  // Première animation
            action.play();  // Lancer l'animation
          }
  
          // Positionner la caméra légèrement plus loin pour un dézoom
          camera.position.set(0, 2, 5);  // Éloigner légèrement la caméra
          camera.lookAt(model.position);
  
        }, undefined, (error) => {
          console.error("Erreur lors du chargement du modèle GLTF :", error);
        });
  
        // Animation de la scène
        const clock = new THREE.Clock();  // Utilisé pour le mixer d'animation
        const animate = () => {
          requestAnimationFrame(animate);
  
          // Mettre à jour le mixer si l'animation est active
          if (mixer) {
            const delta = clock.getDelta();
            mixer.update(delta);
          }
  
          controls.update();  // Pour un mouvement fluide de la caméra
          renderer.render(scene, camera);
        };
  
        animate();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Style pour le composant si nécessaire */
  </style>
  