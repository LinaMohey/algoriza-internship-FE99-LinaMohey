<template>
  <main>
    <div class="main-layout">
      <div>
        <img src="./assets/main.png" class="w-full" alt="main-section-image" />
      </div>

      <div
        class="main-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
      >
        <h2 class="mb-15 text-32 font-bold">Enjoy Your Dream Vacation</h2>
        <p class="tracking-wide text-xl">
          Plan and book our perfect trip with expert advice, travel tips,
          destination <br />
          information and inspiration from us
        </p>
      </div>
      <search-form> </search-form>
    </div>
  </main>
</template>

<script setup>
import SearchForm from "@/components/search/search-form.vue";
</script>
