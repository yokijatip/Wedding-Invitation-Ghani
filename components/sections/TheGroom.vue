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
          <a
            href="https://www.instagram.com/ghani.riyantama/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-sans text-primary-700 hover:text-primary-500 transition-colors duration-300 font-semibold text-xs"
            @click="handleInstagramClick"
          >
            ghani.riyantama
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Function to handle Instagram click with multiple fallbacks
const handleInstagramClick = (event) => {
  event.preventDefault();

  const username = "ghani.riyantama";

  // Method 1: Try Instagram app deep link first (mobile)
  if (
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    const appUrl = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}/`;

    // Try to open Instagram app
    window.location.href = appUrl;

    // Fallback to web after 1 second if app doesn't open
    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 1000);
  } else {
    // Method 2: For desktop, try multiple approaches
    const urls = [
      `https://www.instagram.com/${username}/`,
      `https://instagram.com/${username}/`,
      `https://m.instagram.com/${username}/`,
    ];

    let opened = false;

    urls.forEach((url, index) => {
      if (!opened) {
        try {
          const newWindow = window.open(url, "_blank", "noopener,noreferrer");
          if (newWindow) {
            opened = true;
          }
        } catch (error) {
          if (index === urls.length - 1) {
            // Last attempt failed, show alert
            alert(
              `Silakan kunjungi Instagram: @${username}\n\nAtau copy link: https://www.instagram.com/${username}/`
            );
          }
        }
      }
    });
  }
};
</script>

<style></style>
