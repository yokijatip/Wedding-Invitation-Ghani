<template>
  <div>
    <section
      class="snap-section min-h-screen bg-[url(/img/ghani.webp)] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.5)] text-primary-white flex flex-col items-start justify-end"
    >
      <!-- Content -->
      <div class="flex flex-col items-start gap-2 p-8 mb-30">
        <h2 class="text-3xl font-cursive">The Groom</h2>
        <h1 class="text-4xl/8 font-serif font-medium">
          Moch. Ghani Riyantama, S.Pd
        </h1>
        <!-- Add Horzontal Small Line and thin -->
        <div class="h-[0.1px] w-1/4 bg-primary-white"></div>
        <p class="uppercase text-start text-md font-serif font-semibold">
          putra pertama dari
        </p>
        <div class="flex flex-row gap-3">
          <p
            class="text-start text-xs/3 font-sans md:w-1/2 font-medium tracking-widest"
          >
            Bpk. Yana Budiana <br />
            & Ibu Sri Damayanti
          </p>
        </div>

        <!-- Social Media -->
        <div class="flex items-center space-x-2 justify-center mt-4">
          <Icon name="mdi:instagram" class="w-6 h-6 text-primary-white" />
          <button
            @click="handleInstagramClick"
            class="font-sans text-primary-700 hover:text-primary-500 transition-colors duration-300 font-semibold text-xs cursor-pointer"
          >
            ghani.riyantama
          </button>
        </div>

        <!-- Instagram Modal -->
        <div
          v-if="showModal"
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          @click="closeModal"
        >
          <div class="bg-white rounded-lg p-6 max-w-sm mx-4" @click.stop>
            <div class="text-center">
              <Icon
                name="mdi:instagram"
                class="w-12 h-12 text-pink-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Kunjungi Instagram
              </h3>
              <p class="text-gray-600 mb-4">@ghani.riyantama</p>

              <div class="space-y-3">
                <button
                  @click="openInstagram"
                  class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Buka Instagram
                </button>

                <button
                  @click="copyLink"
                  class="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  {{ copied ? "Link Tersalin!" : "Copy Link" }}
                </button>

                <button
                  @click="closeModal"
                  class="w-full text-gray-500 py-2 px-4 hover:text-gray-700 transition-all duration-300"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const copied = ref(false);

// Function to handle Instagram click - show modal
const handleInstagramClick = () => {
  showModal.value = true;
};

// Function to close modal
const closeModal = () => {
  showModal.value = false;
  copied.value = false;
};

// Function to open Instagram
const openInstagram = () => {
  const username = "ghani.riyantama";
  const instagramUrl = `https://www.instagram.com/${username}/`;

  try {
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
    closeModal();
  } catch (error) {
    console.error("Error opening Instagram:", error);
  }
};

// Function to copy link
const copyLink = async () => {
  const username = "ghani.riyantama";
  const instagramUrl = `https://www.instagram.com/${username}/`;

  try {
    await navigator.clipboard.writeText(instagramUrl);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (error) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = instagramUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};
</script>

<style></style>
