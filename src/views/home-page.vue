<template>
  <home-layout>
    <main-section> </main-section>
    <warning-section> </warning-section>
    <dream-vacation> </dream-vacation>
    <inspiration-trips> </inspiration-trips>
    <popular-hotels> </popular-hotels>
    <img src="../assets/download-app/download-app.png" alt="" />
  </home-layout>
</template>

<script setup>
import HomeLayout from "@/layouts/home-layout.vue";
import MainSection from "@/components/sections/main-section.vue";
import DreamVacation from "@/components/sections/dream-vacation.vue";
import InspirationTrips from "@/components/sections/inspiration-trips.vue";
import PopularHotels from "@/components/sections/popular-hotels.vue";
import WarningSection from "@/components/sections/warning-section.vue";
</script>
