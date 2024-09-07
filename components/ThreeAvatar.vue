<template>
    <div ref="threeContainer" class="three-canvas"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  
  export default {
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        // Créer la scène, la caméra et le renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);  // Ajuster le rapport d'aspect à 1 pour un canvas carré
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(500, 500);  // Adapter la taille du renderer au canvas fixe
        this.$refs.threeContainer.appendChild(renderer.domElement);
  
        // Lumières
        const light = new THREE.AmbientLight(0xFFFFFF, 1);
        scene.add(light);
  
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        directionalLight.position.set(1, 1, 0).normalize();
        scene.add(directionalLight);
  
        // Contrôles de la caméra
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
  
        // Charger le modèle GLTF avec animation
        const loader = new GLTFLoader();
        let mixer;
  
        loader.load('/models/avatar.glb', (gltf) => {
          const model = gltf.scene;
  
          // Ajuster l'échelle du modèle pour qu'il rentre dans le canvas
          model.scale.set(1.2, 1.2, 1.2);  // Réduire l'échelle du modèle
  
          scene.add(model);
  
          // Si le modèle contient des animations
          if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }
  
          // Positionner la caméra plus loin pour un dézoom
          camera.position.set(0, 2, 5);  // Éloigner davantage la caméra
          camera.lookAt(model.position);
  
        }, undefined, (error) => {
          console.error("Erreur lors du chargement du modèle GLTF :", error);
        });
  
        // Animation de la scène
        const clock = new THREE.Clock();
        const animate = () => {
          requestAnimationFrame(animate);
  
          if (mixer) {
            const delta = clock.getDelta();
            mixer.update(delta);
          }
  
          controls.update();
          renderer.render(scene, camera);
        };
  
        animate();
      }
    }
  }
  </script>
  
  <style scoped>
  .three-canvas {
    width: 500px;
    height: 300px;
    margin-top: 20px;
    margin: 0 auto;
    /* border: 1px solid #ccc; */
  }
  </style>
  