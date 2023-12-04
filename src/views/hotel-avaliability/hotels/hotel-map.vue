<template>
  <!-- Map for each hotel -->
  <div>
    <iframe
      :src="`https://maps.google.com/maps?q=${hotelDetails.latitude},${hotelDetails.longitude}&z=15&output=embed`"
      width="400px"
      height="240px"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>
<script setup>
const { prop } = defineProps(["hotelDetails"]);
</script>
