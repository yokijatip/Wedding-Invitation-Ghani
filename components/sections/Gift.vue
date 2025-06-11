<template>
  <div class="min-h-screen">
    <section class="min-h-screen flex items-center justify-center">
      <!-- Content -->
      <div class="flex flex-col items-start justify-center gap-4 p-4">
        <h1 class="text-3xl font-serif text-primary-white">WEDDING GIFT</h1>
        <div class="space-y-2">
          <p class="text-xs font-sans text-primary-white text-justify">
            Tanpa mengurangi rasa hormat kami bagi tamu yang ingin mengirimklan
            hadiah kepada mempelai dapat mengirimkannya melalui
          </p>

          <!-- Item Transfer Section -->
          <div class="space-y-4">
            <!-- Cashless -->
            <div class="flex flex-col gap-2 bw p-4">
              <h1 class="uppercase text-xl text-primary-white font-serif">
                Cashless
              </h1>

              <!-- Bank Cards -->
              <div class="space-y-3 mt-4">
                <!-- BNI -->
                <div
                  class="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-8 bg-orange-500 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">BNI</span>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">1362218282</p>
                      <p class="text-gray-300 text-xs">Ghani</p>
                    </div>
                  </div>
                  <button
                    @click="copyToClipboard('1362218282', 'BNI')"
                    class="bg-white/20 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    SALIN
                  </button>
                </div>

                <!-- Mandiri -->
                <div
                  class="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-8 bg-yellow-500 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">MDR</span>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">
                        1320026999509
                      </p>
                      <p class="text-gray-300 text-xs">Wiwit</p>
                    </div>
                  </div>
                  <button
                    @click="copyToClipboard('1320026999509', 'Mandiri')"
                    class="bg-white/20 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    SALIN
                  </button>
                </div>

                <!-- BCA -->
                <div
                  class="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-8 bg-blue-600 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">BCA</span>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">2780971960</p>
                      <p class="text-gray-300 text-xs">Ghani Riyantama</p>
                    </div>
                  </div>
                  <button
                    @click="copyToClipboard('2780971960', 'BCA')"
                    class="bg-white/20 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    SALIN
                  </button>
                </div>
              </div>

              <!-- Button Konfirmasi WhatsApp -->
              <button
                @click="openWhatsApp"
                class="mt-4 uppercase text-xs font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300 w-fit py-2 px-4 flex items-center space-x-2"
              >
                <span>Konfirmasi</span>
              </button>
            </div>

            <!-- Kirim Kado -->
            <div class="flex flex-col gap-2 bw p-4">
              <h1 class="uppercase text-xl text-primary-white font-serif">
                Kirim kado
              </h1>
              <p class="text-xs font-sans text-primary-white text-justify">
                Anda dapat mengirim kado melalui
              </p>
              <p class="text-xs font-sans text-primary-white font-semibold">
                Gedung SLB Negeri bandung barat Kp. Baru Rt 02 Rw 18 Desa
                Ciptaharja
              </p>

              <!-- Button Google Maps -->
              <button
                @click="openGoogleMaps"
                class="mt-4 uppercase text-xs font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300 w-fit py-2 px-4 flex items-center space-x-2"
              >
                <span>Lihat Lokasi</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast Notification -->
    <div
      v-if="showToast"
      class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
// Toast notification state
const showToast = ref(false);
const toastMessage = ref("");

// Function to copy bank account number to clipboard
const copyToClipboard = async (accountNumber, bankName) => {
  try {
    await navigator.clipboard.writeText(accountNumber);
    toastMessage.value = `Nomor rekening ${bankName} berhasil disalin!`;
    showToast.value = true;

    // Hide toast after 3 seconds
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  } catch (err) {
    console.error("Failed to copy: ", err);
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = accountNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    toastMessage.value = `Nomor rekening ${bankName} berhasil disalin!`;
    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }
};

// Function to open WhatsApp with preset message
const openWhatsApp = () => {
  const phoneNumber = "6288222095113"; // Ganti dengan nomor WhatsApp yang benar
  const message = encodeURIComponent(
    "Haii Selamat yaa, btw cek rekening deh aku udah kirim kado, semoga berkahh💕"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};

// Function to open Google Maps
const openGoogleMaps = () => {
  const address = encodeURIComponent(
    "Gedung SLB Negeri bandung barat Kp. Baru Rt 02 Rw 18 Desa Ciptaharja"
  );
  const mapsUrl = `https://maps.google.com/maps?q=${address}`;
  window.open(mapsUrl, "_blank");
};
</script>

<style scoped>
.bw {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}
</style>
