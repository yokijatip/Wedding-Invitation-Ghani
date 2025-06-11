<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Content -->
    <section
      class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div
        class="text-center max-w-2xl mx-auto bg-black/50 backdrop-blur-sm py-6"
      >
        <!-- Thank You Title -->
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-wider"
        >
          THANK YOU
        </h1>

        <!-- Couple Photo -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <NuxtImg
              src="/img/hero2.webp"
              alt="Sofy & Singgih"
              class="w-64 h-80 md:w-72 md:h-96 object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Thank You Message -->
        <div class="space-y-4">
          <p
            class="text-sm md:text-base text-white/90 leading-relaxed font-light tracking-wide text-justify px-4 max-w-lg mx-auto font-serif"
          >
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih
            dan sayang
          </p>

          <!-- Couple Names -->
          <p
            class="text-lg md:text-xl text-white font-serif tracking-wider uppercase"
          >
            Surah ar-rum: 21
          </p>
        </div>
      </div>

      <!-- Footer Brand -->
      <div class="my-12 items-center justify-center flex flex-col">
        <h2 class="text-xl md:text-3xl font-serif text-white">
          Yoki J Perkasa
        </h2>
        <p class="text-xs text-white/60">Gity Headquarters © 2025</p>

        <!-- Social Media Icons -->
        <div class="flex justify-center space-x-6 mt-2">
          <!-- Instagram with Nuxt Icon -->
          <a
            href="https://instagram.com/yokijp_"
            target="_blank"
            class="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Icon name="mdi:instagram" class="w-6 h-6" />
          </a>

          <!-- LinkedIn Icon with Nuxt Icon incr -->
          <a
            href="https://www.linkedin.com/in/yokijp"
            target="_blank"
            class="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Icon name="mdi:linkedin" class="w-6 h-6" />
          </a>

          <!-- Whatsapp Icon with Nuxt Icon -->
          <a
            href="https://wa.me/62895385744763"
            target="_blank"
            class="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Icon name="mdi:whatsapp" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* Additional custom styles if needed */
.tracking-widest {
  letter-spacing: 0.3em;
}

/* Smooth animations */
.transition-all {
  transition: all 0.3s ease;
}

/* Custom backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>
