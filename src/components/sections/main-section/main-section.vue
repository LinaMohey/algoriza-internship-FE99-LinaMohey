<template>
  <main>
    <div class="main-layout relative">
      <div>
        <img src="./assets/main.png" class="w-full" alt="main-section-image" />
      </div>

      <div
        class="main-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
      >
        <h2>Enjoy Your Dream Vacation</h2>
        <p>
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <search-form class="absolute -bottom-4 left-50 shadow-lg"> </search-form>
    </div>
  </main>
</template>

<script setup>
import SearchForm from "@/components/search/search-form.vue";
</script>
