<template>
  <div class="min-h-screen relative">
    <!-- Content Section -->
    <section class="flex items-center justify-center min-h-screen p-5">
      <!-- Glass Effect Overlay -->
      <div
        class="relative flex flex-col items-center justify-center gap-6 bg-black/50"
      >
        <!-- Akad -->
        <div
          class="px-5 pt-10 flex flex-col gap-2 rounded-lg shadow-lg text-start"
        >
          <h1 class="font-serif text-3xl uppercase text-white">akad</h1>
          <h2 class="font-serif uppercase font-semibold text-primary-white">
            minggu, 8 juni 2025
          </h2>
          <h3 class="text-xs font-sans tracking-wider text-primary-white">
            08.00 - 09.00 WIB
          </h3>
          <h2 class="font-serif uppercase text-white">Gedung</h2>
          <p
            class="text-xs font-sans tracking-wider font-thin text-primary-white"
          >
            Gedung SLB Negeri bandung barat Kp. Baru Rt 02 Rw 18 Desa Ciptaharja
          </p>
          <!-- Tombol Lihat Lokasi -->
          <button
            class="mt-4 uppercase text-xs font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300 w-fit py-2 px-4 flex items-center space-x-2"
            @click="openMap('akad')"
          >
            <span>Lihat Lokasi</span>
          </button>
        </div>

        <!-- Resepsi -->
        <div
          class="rounded-lg shadow-lg text-start px-5 pb-10 flex flex-col gap-2"
        >
          <h1 class="font-serif text-3xl uppercase text-white">Resepsi</h1>
          <h2 class="font-serif uppercase font-semibold text-primary-white">
            minggu, 8 juni 2025
          </h2>
          <h3 class="text-xs font-sans tracking-wider text-primary-white">
            11.00 - 15.00 WIB
          </h3>
          <h2 class="font-serif uppercase text-white">Gedung</h2>
          <p
            class="text-xs font-sans tracking-wider font-thin text-primary-white"
          >
            Gedung SLB Negeri bandung barat Kp. Baru Rt 02 Rw 18 Desa Ciptaharja
          </p>
          <!-- Tombol Lihat Lokasi -->
          <button
            class="mt-4 uppercase text-xs font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300 w-fit py-2 px-4 flex items-center space-x-2"
            @click="openMap('resepsi')"
          >
            <span>Lihat Lokasi</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const openMap = () => {
  const address = encodeURIComponent(
    "Gedung SLB Negeri bandung barat Kp. Baru Rt 02 Rw 18 Desa Ciptaharja"
  );
  const mapsUrl = `https://maps.google.com/maps?q=${address}`;
  window.open(mapsUrl, "_blank");
};
</script>

<style scoped>
/* Border Line */
.br {
  border: 1px solid red;
}

.bb {
  border: 1px solid blue;
}

.bgr {
  border: 1px solid green;
}

.bw {
  border: 1px solid white;
}

.by {
  border: 1px solid yellow;
}
</style>
