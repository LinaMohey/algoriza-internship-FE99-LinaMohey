<template>
  <home-layout>
    <main-section> </main-section>
    <warning-section> </warning-section>
    <dream-vacation> </dream-vacation>
    <inspiration-trips> </inspiration-trips>
    <popular-hotels> </popular-hotels>
    <div class="download-app-image my-20">
      <img
        src="@/assets/download-app/download-app.png"
        alt="download-app-image"
      />
    </div>
  </home-layout>
</template>

<script setup>
import HomeLayout from "@/layouts/home-layout.vue";
import MainSection from "@/components/sections/main-section.vue";
import DreamVacation from "@/components/sections/dream-vacation.vue";
import InspirationTrips from "@/components/sections/inspiration-trips.vue";
import PopularHotels from "@/components/sections/popular-hotels.vue";
</script>
