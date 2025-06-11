<template>
  <div class="min-h-screen">
    <!-- Parent Container -->
    <section class="min-h-screen flex items-center justify-center">
      <!-- Content -->
      <div class="flex flex-col items-start justify-center gap-4 p-4">
        <h1 class="text-3xl font-serif text-primary-white">THE GALLERY</h1>
        <div class="space-y-2">
          <p class="text-xs font-sans text-primary-white">
            Capturing beautiful moments and precious memories
          </p>
          <p class="text-xs font-sans text-primary-white">
            Photo by Ghani & Wiwit
          </p>
        </div>

        <!-- Scrollable Gallery Container -->
        <div
          class="overflow-y-auto max-w-full w-full h-[500px] md:h-[600px] lg:h-[700px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        >
          <!-- Grid for Images -->
          <div class="grid grid-cols-3 grid-rows-8 gap-2 text-primary-white">
            <!-- Image 1 - Col span 2 -->
            <div
              class="col-span-2 relative group overflow-hidden cursor-pointer"
              @click="openLightbox(0)"
            >
              <NuxtImg
                :src="images[0].src"
                :alt="images[0].caption"
                class="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
              />
            </div>

            <!-- Image 2 -->
            <div
              class="col-start-2 row-start-2 relative group overflow-hidden cursor-pointer"
              @click="openLightbox(1)"
            >
              <NuxtImg
                :src="images[1].src"
                :alt="images[1].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 3 -->
            <div
              class="col-start-3 row-start-1 relative group overflow-hidden cursor-pointer"
              @click="openLightbox(2)"
            >
              <NuxtImg
                :src="images[2].src"
                :alt="images[2].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 4 -->
            <div
              class="col-start-1 row-start-2 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(3)"
            >
              <NuxtImg
                :src="images[3].src"
                :alt="images[3].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 5 - Col span 2 -->
            <div
              class="col-span-2 col-start-2 row-start-3 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(4)"
            >
              <NuxtImg
                :src="images[4].src"
                :alt="images[4].caption"
                class="w-full h-48 object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
              />
            </div>

            <!-- Image 6 -->
            <div
              class="col-start-3 row-start-2 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(5)"
            >
              <NuxtImg
                :src="images[5].src"
                :alt="images[5].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 7 -->
            <div
              class="col-start-1 row-start-3 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(6)"
            >
              <NuxtImg
                :src="images[6].src"
                :alt="images[6].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 8 - Col span 3 -->
            <div
              class="col-span-3 row-start-4 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(7)"
            >
              <NuxtImg
                :src="images[7].src"
                :alt="images[7].caption"
                class="w-full h-48 object-cover object-[center_70%] transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:75vw lg:600px"
                loading="lazy"
              />
            </div>

            <!-- Image 9 -->
            <div
              class="row-start-5 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(8)"
            >
              <NuxtImg
                :src="images[8].src"
                :alt="images[8].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 10 -->
            <div
              class="row-start-5 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(9)"
            >
              <NuxtImg
                :src="images[9].src"
                :alt="images[9].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 11 -->
            <div
              class="row-start-5 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(10)"
            >
              <NuxtImg
                :src="images[10].src"
                :alt="images[10].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 12 -->
            <div
              class="relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(11)"
            >
              <NuxtImg
                :src="images[11].src"
                :alt="images[11].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 13 - Col span 2 -->
            <div
              class="col-span-2 row-start-6 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(12)"
            >
              <NuxtImg
                :src="images[12].src"
                :alt="images[12].caption"
                class="w-full h-48 object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
              />
            </div>

            <!-- Image 14 -->
            <div
              class="col-start-3 row-start-7 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(13)"
            >
              <NuxtImg
                :src="images[13].src"
                :alt="images[13].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 15 - Col span 2 -->
            <div
              class="col-span-2 col-start-1 row-start-7 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(14)"
            >
              <NuxtImg
                :src="images[14].src"
                :alt="images[14].caption"
                class="w-full h-48 object-cover transition-transform object-top duration-300 group-hover:scale-105"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
              />
            </div>

            <!-- Image 16 -->
            <div
              class="row-start-8 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(15)"
            >
              <NuxtImg
                :src="images[15].src"
                :alt="images[15].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 17 -->
            <div
              class="row-start-8 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(16)"
            >
              <NuxtImg
                :src="images[16].src"
                :alt="images[16].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>

            <!-- Image 18 -->
            <div
              class="row-start-8 relative group overflow-hidden text-primary-white cursor-pointer"
              @click="openLightbox(17)"
            >
              <NuxtImg
                :src="images[17].src"
                :alt="images[17].caption"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="sm:100vw md:25vw lg:200px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full">
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          ×
        </button>

        <!-- Image -->
        <NuxtImg
          :src="currentImage.src"
          :alt="currentImage.caption"
          class="max-w-full max-h-full object-contain"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Urutan gambar yang sudah diacak secara manual (tidak berubah)
const images = [
  { src: "/img/hero2.jpg", caption: "Hero Shot 2" },
  { src: "/img/gallery5.jpg", caption: "Golden Hours" },
  { src: "/img/ourstory1.jpg", caption: "Our Story Begins" },
  { src: "/img/gallery1.jpg", caption: "Beautiful Moments" },
  { src: "/img/hero4.jpg", caption: "Hero Shot 4" },
  { src: "/img/gallery8.jpg", caption: "Special Occasions" },
  { src: "/img/wiwit.jpg", caption: "Wiwit's Portrait" },
  { src: "/img/hero1.jpg", caption: "Perfect Moments" },
  { src: "/img/gallery3.jpg", caption: "Precious Times" },
  { src: "/img/ourstory3.jpg", caption: "Our Adventure" },
  { src: "/img/gallery7.jpg", caption: "Cherished Memories" },
  { src: "/img/ghani.jpg", caption: "Hero Shot 3" },
  { src: "/img/hero3.jpg", caption: "Ghani's Portrait" },
  { src: "/img/gallery2.jpg", caption: "Sweet Memories" },
  { src: "/img/gallery11.jpg", caption: "Captured Love" },
  { src: "/img/gallery4.jpg", caption: "Happy Days" },
  { src: "/img/gallery6.jpg", caption: "Magical Moments" },
  { src: "/img/ourstory2.jpg", caption: "Our Journey" },
  { src: "/img/gallery9.jpg", caption: "Joyful Times" },
];

// Lightbox state
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Current image computed property
const currentImage = computed(() => {
  return images[currentImageIndex.value] || images[0];
});

// Lightbox functions
const openLightbox = (index) => {
  currentImageIndex.value = index;
  isLightboxOpen.value = true;
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = "auto";
};

// Close lightbox with Escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape" && isLightboxOpen.value) {
      closeLightbox();
    }
  };
  document.addEventListener("keydown", handleEscape);

  // Cleanup
  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "auto";
  });
});
</script>

<style scoped>
/* Scrollbar Styling */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background-color: #f3f3f3;
}

/* Smooth transitions */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
