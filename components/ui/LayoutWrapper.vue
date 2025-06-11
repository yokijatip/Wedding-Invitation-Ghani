<template>
  <div class="h-screen w-screen overflow-hidden">
    <!-- Fixed Image for Desktop Only -->
    <div
      class="hidden md:block w-[70%] h-full fixed top-0 left-0 bg-cover bg-bottom"
      style="background-image: url('/img/hero3.webp')"
    ></div>

    <!-- Background Slideshow for Mobile Only -->
    <BackgroundSlideshowMobile />

    <!-- Scrollable Content on Right -->
    <div
      class="w-full md:w-[30%] md:ml-auto h-screen overflow-y-scroll scroll-smooth md:bg-[#0d0e10]"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import BackgroundSlideshowMobile from "~/components/ui/BackgroundSlideshowMobile.vue";
</script>

<style scoped>
/* Hide scroll bar */
::-webkit-scrollbar {
  display: none;
}
</style>
