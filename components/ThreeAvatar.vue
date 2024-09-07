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
      window.addEventListener('resize', this.onWindowResize);
    },
    methods: {
      initThree() {
        // Créer la scène, la caméra et le renderer
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
  
        // Initialiser la taille du renderer avec la taille actuelle de la fenêtre
        this.updateRendererSize();
        this.$refs.threeContainer.appendChild(this.renderer.domElement);
  
        // Lumières
        const light = new THREE.AmbientLight(0xFFFFFF, 1);
        this.scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        directionalLight.position.set(1, 1, 0).normalize();
        this.scene.add(directionalLight);
  
        // Contrôles de la caméra
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
  
        // Charger le modèle GLTF avec animation
        const loader = new GLTFLoader();
        let mixer;
        loader.load('/models/avatar.glb', (gltf) => {
          const model = gltf.scene;
          model.scale.set(1.2, 1.2, 1.2); // Réduire l'échelle du modèle
          this.scene.add(model);
  
          if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }
  
          this.camera.position.set(0, 2, 5);
          this.camera.lookAt(model.position);
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
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
        };
        animate();
      },
      updateRendererSize() {
        const width = window.innerWidth <= 640 ? 250 : 500;
        const height = window.innerWidth <= 640 ? 250 : 500;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      },
      onWindowResize() {
        this.updateRendererSize();
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize);
    }
  };
  </script>
  
  <style scoped>
  .three-canvas {
    width: 500px;
    height: 300px;
    margin: 0 auto;
  }
  
  @media (max-width: 640px) {
    .three-canvas {
      width: 250px;
      height: 250px;
    }
  }
  </style>
  