<template>
  <div class="min-h-screen">
    <div
      class="flex flex-col items-center justify-center min-h-screen text-primary-white"
    >
      <!-- Title -->
      <h1 class="text-3xl font-serif mb-2">SAVE THE DATE</h1>
      <p class="text-3xl font-cursive mb-2">Countdown</p>

      <!-- Countdown Timer -->
      <div class="flex space-x-4 mb-2 font-serif">
        <div class="flex flex-col items-center">
          <span class="text-xl font-bold">{{ days }}</span>
          <span class="text-lg font-medium">Hari</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-xl font-bold">{{ hours }}</span>
          <span class="text-lg font-medium">Jam</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-xl font-bold">{{ minutes }}</span>
          <span class="text-lg font-medium">Menit</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-xl font-bold">{{ seconds }}</span>
          <span class="text-lg font-medium">Detik</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date("July 6, 2025 08:00:00").getTime(), // Target date and time
      intervalId: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCountdown() {
      this.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance <= 0) {
          clearInterval(this.intervalId);
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          return;
        }

        // Calculate time components
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },
    handleButtonClick() {
      alert("Tanggal telah disimpan! 😊");
    },
  },
};
</script>

<style scoped>
/* Custom Font for Save the Date */
@font-face {
  font-family: "SerifFont";
  src: url("~assets/fonts/your-serif-font.ttf") format("truetype");
}

/* Apply custom font to title */
.text-serif {
  font-family: "SerifFont", Georgia, Times, "Times New Roman", serif;
}
</style>
