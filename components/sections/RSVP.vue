<template>
  <div class="min-h-screen relative">
    <!-- Content Section -->
    <section class="flex items-center justify-center min-h-screen p-5">
      <!-- Glass Effect Overlay -->
      <div
        class="relative flex flex-col items-center justify-center gap-6 bg-black/50"
      >
        <!-- Header -->
        <div
          class="px-5 pt-10 flex flex-col gap-2 rounded-lg shadow-lg text-start"
        >
          <h1 class="font-serif text-3xl uppercase text-white">rsvp</h1>

          <p
            class="text-xs font-sans tracking-wider font-thin text-primary-white"
          >
            Kami dengan hormat mengundang Anda untuk hadir dalam acara istimewa
            kami. Mohon kesediaannya untuk mengisi formulir konfirmasi
            kehadiran.
          </p>
        </div>

        <!-- RSVP Form -->
        <div class="w-full max-w-md px-5">
          <form @submit.prevent="submitRSVP" class="space-y-4">
            <!-- Name Input -->
            <div>
              <label class="block text-white text-sm font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :disabled="loading"
                class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/70 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all duration-300 disabled:opacity-50"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <!-- Attendance Radio Buttons -->
            <div>
              <label class="block text-white text-sm font-medium mb-2">
                Konfirmasi Kehadiran
              </label>
              <div class="space-y-2">
                <label class="flex items-center text-white cursor-pointer">
                  <input
                    v-model="form.attendance"
                    type="radio"
                    value="hadir"
                    :disabled="loading"
                    class="mr-2 text-white"
                    required
                  />
                  <span class="text-sm">Hadir</span>
                </label>
                <label class="flex items-center text-white cursor-pointer">
                  <input
                    v-model="form.attendance"
                    type="radio"
                    value="tidak_hadir"
                    :disabled="loading"
                    class="mr-2"
                    required
                  />
                  <span class="text-sm">Tidak Hadir</span>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full mt-4 uppercase text-xs font-semibold text-white border border-white hover:bg-white/10 transition-all duration-300 py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? "Menyimpan..." : "Konfirmasi" }}
            </button>
          </form>

          <!-- Error Message -->
          <div v-if="error" class="mt-2 text-red-400 text-xs text-center">
            {{ error }}
          </div>

          <!-- Success Message -->
          <div v-if="success" class="mt-2 text-green-400 text-xs text-center">
            {{ success }}
          </div>
        </div>

        <!-- RSVP List -->
        <div class="w-full max-w-md px-5 pb-5">
          <div class="space-y-4">
            <!-- Loading State -->
            <div
              v-if="loadingList"
              class="text-white/70 text-xs text-center py-4"
            >
              Memuat data kehadiran...
            </div>

            <!-- Hadir List -->
            <div v-else-if="attendees.hadir.length > 0">
              <h3 class="text-white font-medium text-sm mb-2 flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Yang Hadir ({{ attendees.hadir.length }})
              </h3>
              <div class="bg-white/10 rounded-lg p-3 max-h-32 overflow-y-auto">
                <ul class="space-y-1">
                  <li
                    v-for="person in attendees.hadir"
                    :key="person.id"
                    class="text-white text-xs flex items-center justify-between"
                  >
                    <div class="flex items-center">
                      <span
                        class="w-1 h-1 bg-green-400 rounded-full mr-2"
                      ></span>
                      {{ person.name }}
                    </div>
                    <span class="text-white/50 text-xs">
                      {{ formatDate(person.createdAt) }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tidak Hadir List -->
            <div v-if="!loadingList && attendees.tidak_hadir.length > 0">
              <h3 class="text-white font-medium text-sm mb-2 flex items-center">
                <span class="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                Yang Tidak Hadir ({{ attendees.tidak_hadir.length }})
              </h3>
              <div class="bg-white/10 rounded-lg p-3 max-h-32 overflow-y-auto">
                <ul class="space-y-1">
                  <li
                    v-for="person in attendees.tidak_hadir"
                    :key="person.id"
                    class="text-white text-xs flex items-center justify-between"
                  >
                    <div class="flex items-center">
                      <span class="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                      {{ person.name }}
                    </div>
                    <span class="text-white/50 text-xs">
                      {{ formatDate(person.createdAt) }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Empty State -->
            <div
              v-if="
                !loadingList &&
                attendees.hadir.length === 0 &&
                attendees.tidak_hadir.length === 0
              "
            >
              <p class="text-white/70 text-xs text-center py-4">
                Belum ada konfirmasi kehadiran
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

// Nuxt composables
const { $db } = useNuxtApp();

// Form data
const form = reactive({
  name: "",
  attendance: "",
});

// State
const loading = ref(false);
const loadingList = ref(true);
const error = ref("");
const success = ref("");

// Attendees list
const attendees = reactive({
  hadir: [],
  tidak_hadir: [],
});

// Check if name already exists
const checkExistingName = async (name) => {
  try {
    const q = query(
      collection($db, "rsvp"),
      where("name", "==", name.toLowerCase().trim())
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (err) {
    console.error("Error checking existing name:", err);
    return false;
  }
};

// Submit RSVP
const submitRSVP = async () => {
  loading.value = true;
  error.value = "";
  success.value = "";

  try {
    const trimmedName = form.name.trim();

    // Check if name already exists
    const nameExists = await checkExistingName(trimmedName);
    if (nameExists) {
      error.value = "Nama sudah terdaftar sebelumnya!";
      loading.value = false;
      return;
    }

    // Add to Firestore
    await addDoc(collection($db, "rsvp"), {
      name: trimmedName,
      nameLowerCase: trimmedName.toLowerCase(), // For case-insensitive search
      attendance: form.attendance,
      createdAt: serverTimestamp(),
    });

    // Reset form
    form.name = "";
    form.attendance = "";

    success.value = "Konfirmasi kehadiran berhasil dikirim!";

    // Clear success message after 3 seconds
    setTimeout(() => {
      success.value = "";
    }, 3000);
  } catch (err) {
    console.error("Error adding document:", err);
    error.value = "Gagal mengirim konfirmasi. Silakan coba lagi.";
  }

  loading.value = false;
};

// Format date
const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Load RSVP data with real-time updates
const loadRSVP = () => {
  try {
    const q = query(collection($db, "rsvp"), orderBy("createdAt", "desc"));

    // Listen for real-time updates
    onSnapshot(
      q,
      (querySnapshot) => {
        attendees.hadir = [];
        attendees.tidak_hadir = [];

        querySnapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };

          if (data.attendance === "hadir") {
            attendees.hadir.push(data);
          } else if (data.attendance === "tidak_hadir") {
            attendees.tidak_hadir.push(data);
          }
        });

        loadingList.value = false;
      },
      (err) => {
        console.error("Error loading RSVP data:", err);
        loadingList.value = false;
        error.value = "Gagal memuat data kehadiran";
      }
    );
  } catch (err) {
    console.error("Error setting up listener:", err);
    loadingList.value = false;
    error.value = "Gagal memuat data kehadiran";
  }
};

// Load data on component mount
onMounted(() => {
  loadRSVP();
});
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

/* Custom radio button styling */
input[type="radio"] {
  accent-color: white;
}

/* Scrollbar styling */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
