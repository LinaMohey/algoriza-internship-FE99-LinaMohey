<template>
  <section class="hotel-image">
    <img
      :src="hotel.property.photoUrls"
      alt="hotel image"
      class="rounded-md w-285 h-200"
    />
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);
</script>
