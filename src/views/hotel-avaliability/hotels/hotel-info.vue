<template>
  <!-- hotel info section -->
  <section v-if="hotelDetails" class="hotel-info my-40 mx-3">
    <h4 class="py-2">{{ hotelDetails.hotel_name }}</h4>
    <p class="py-2">4.5 ( {{ hotelDetails.reviews_nr }})</p>
    <div class="address flex gap-2">
      <div class="location-image">
        <img src="@/assets/location.png" alt="" />
      </div>
      <h4>{{ hotelDetails.address }}</h4>
    </div>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails"]);
</script>
