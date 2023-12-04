<template>
  <main-layout>
    <!-- show moda; if the use is authenticated -->
    <welcome-modal
      v-if="authStore.showModal"
      @closeModal="authStore.showModal = false"
    >
    </welcome-modal>

    <!-- dynamic rendering through slot -->
    <main-section> </main-section>
    <warning-section> </warning-section>
    <div class="mx-auto">
      <dream-vacation> </dream-vacation>
      <inspiration-trips> </inspiration-trips>
      <popular-hotels> </popular-hotels>
    </div>

    <div class="mt-60 mb-50 mx-auto">
      <img
        src="@/assets/download-app/download-app.png"
        alt="download-app-image"
        class="min-w-1350 mx-auto"
      />
    </div>
    <explore> </explore>
  </main-layout>
</template>

<script setup>
import { useAuthStore } from "./authentication/store/auth";
import MainSection from "@/components/sections/main-section/main-section.vue";
import DreamVacation from "@/components/sections/dream-vacation/dream-vacation.vue";
import InspirationTrips from "@/components/sections/inspiration-trips/inspiration-trips.vue";
import PopularHotels from "@/components/sections/popular-section/popular-hotels.vue";
import explore from "@/components/sections/explore-section/explore.vue";
import welcomeModal from "../views/modals/welcome-modal.vue";
const authStore = useAuthStore();
</script>
