<template>
  <div class="">
    <!-- Opening Section -->
    <div
      v-if="!isInvitationOpened"
      class="fixed inset-0 z-50 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      :style="{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-6 max-w-md mx-auto">
        <!-- Wedding Title -->
        <div class="mb-12">
          <p class="text-sm font-light tracking-wider mb-2 opacity-90">
            THE WEDDING OF
          </p>
          <h1 class="text-3xl md:text-4xl font-playfair mb-2">
            Ghani <span class="font-light">&</span> Wiwit
          </h1>
          <p class="text-sm font-light tracking-wider opacity-90">
            MINGGU, 8 JUNI 2025
          </p>
        </div>

        <!-- Open Invitation Button -->
        <button
          @click="openInvitation"
          class="bg-transparent border-1 border-primary-white text-primary-white px-8 py-3 rounded-full font-medium tracking-wider hover:bg-primary-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto gap-2"
        >
          BUKA UNDANGAN
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Main Content (Hidden until invitation is opened) -->
    <div v-show="isInvitationOpened" class="transition-all duration-1000">
      <Hero />
      <TheBride />
      <TheGroom />
      <OurStory />
      <Countdown />
      <Event />
      <Gallery />
      <Gift />
      <ThankYou />
    </div>

    <!-- Floating Music Control (Only show when invitation is opened) -->
    <div
      v-show="isInvitationOpened"
      class="fixed bottom-6 right-6 z-20 flex flex-col gap-3"
    >
      <!-- Volume Control -->
      <div
        v-show="showVolumeControl"
        class="bg-white/20 backdrop-blur-sm rounded-lg p-3 transition-all duration-300"
      >
        <div class="flex items-center gap-2">
          <svg
            class="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            v-model="volume"
            @input="updateVolume"
            class="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
          />
          <span class="text-white text-xs"
            >{{ Math.round(volume * 100) }}%</span
          >
        </div>
      </div>

      <!-- Music Play/Pause Button -->
      <button
        @click="toggleMusic"
        @mouseenter="showVolumeControl = true"
        @mouseleave="hideVolumeControlDelayed"
        class="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
      >
        <svg
          v-if="isMusicPlaying"
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
        <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>

    <!-- Audio Element -->
    <audio ref="audioPlayer" loop>
      <source src="/audio/sparks.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
import Hero from "~/components/sections/Hero.vue";
import TheBride from "~/components/sections/TheBride.vue";
import TheGroom from "~/components/sections/TheGroom.vue";
import OurStory from "~/components/sections/OurStory.vue";
import Countdown from "~/components/sections/Countdown.vue";
import Event from "~/components/sections/Event.vue";
import Gallery from "~/components/sections/Gallery.vue";
import Gift from "~/components/sections/Gift.vue";
import ThankYou from "~/components/sections/ThankYou.vue";

// Reactive states
const isInvitationOpened = ref(false);
const isMusicPlaying = ref(false);
const volume = ref(0.5); // Default volume 50%
const showVolumeControl = ref(false);
const audioPlayer = ref(null);
let volumeTimeout = null;

// Open invitation function
const openInvitation = () => {
  isInvitationOpened.value = true;
  // Auto play music when invitation is opened
  playMusic();
};

// Music functions
const playMusic = () => {
  if (audioPlayer.value) {
    try {
      audioPlayer.value.volume = volume.value;
      audioPlayer.value.play();
      isMusicPlaying.value = true;
    } catch (error) {
      console.log("Auto-play blocked by browser:", error);
      // If auto-play fails, user can manually start music
    }
  }
};

const toggleMusic = () => {
  if (audioPlayer.value) {
    if (isMusicPlaying.value) {
      audioPlayer.value.pause();
      isMusicPlaying.value = false;
    } else {
      audioPlayer.value.play();
      isMusicPlaying.value = true;
    }
  }
};

// Volume control functions
const updateVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
  }
};

const hideVolumeControlDelayed = () => {
  volumeTimeout = setTimeout(() => {
    showVolumeControl.value = false;
  }, 2000); // Hide after 2 seconds
};

// Clear timeout if mouse enters volume control
const clearVolumeTimeout = () => {
  if (volumeTimeout) {
    clearTimeout(volumeTimeout);
    volumeTimeout = null;
  }
};

// Handle audio events
onMounted(() => {
  if (audioPlayer.value) {
    // Set initial volume
    audioPlayer.value.volume = volume.value;

    audioPlayer.value.addEventListener("play", () => {
      isMusicPlaying.value = true;
    });

    audioPlayer.value.addEventListener("pause", () => {
      isMusicPlaying.value = false;
    });
  }
});
</script>

<style>
.br {
  border: 1px solid red;
}

.bb {
  border: 1px solid blue;
}

.by {
  border: 1px solid yellow;
}

.bw {
  border: 1px solid white;
}

/* Hide scroll bar */
::-webkit-scrollbar {
  display: none;
}

/* Prevent scrolling when opening is displayed */
body.no-scroll {
  overflow: hidden;
}

/* Custom slider styling */
.slider {
  background: rgba(255, 255, 255, 0.3);
  outline: none;
  border-radius: 15px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
