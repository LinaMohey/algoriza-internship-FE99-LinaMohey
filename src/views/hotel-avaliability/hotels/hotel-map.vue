<template>
  <div>
    <iframe
      :src="`https://maps.google.com/maps?q=${hotelDetails.latitude},${hotelDetails.longitude}&z=15&output=embed`"
    ></iframe>
  </div>
</template>
<script setup>
const { prop } = defineProps(["hotelDetails"]);
</script>
