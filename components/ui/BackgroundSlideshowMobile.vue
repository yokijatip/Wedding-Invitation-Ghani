<template>
  <!-- Background slideshow only visible on mobile -->
  <div
    class="blockmd: fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center transition-all duration-5000 shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.5)]"
    :style="`background-image: url(${currentImage})`"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = [
  "/img/hero1.webp",
  "/img/hero3.webp",
  "/img/gallery1.webp",
  "/img/gallery2.webp",
  "/img/gallery3.webp",
  "/img/gallery4.webp",
  "/img/gallery5.webp",
  "/img/gallery6.webp",
  "/img/gallery7.webp",
  "/img/gallery8.webp",
  "/img/gallery9.webp",
  "/img/ourstory1.webp",
  "/img/ourstory2.webp",
  "/img/ourstory3.webp",
];

const currentImage = ref(images[0]);
let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % images.length;
    currentImage.value = images[index];
  }, 10000);
});
</script>

<style scoped>
/* Hide scroll bar */
::-webkit-scrollbar {
  display: none;
}
</style>
