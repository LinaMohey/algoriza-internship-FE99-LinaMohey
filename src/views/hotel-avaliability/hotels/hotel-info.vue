<template>
  <!-- hotel info section -->
  <section v-if="hotelDetails" class="hotel-info my-40 mx-3">
    <h4 class="py-2 text-32 font-bold">{{ hotelDetails.hotel_name }}</h4>
    <div class="rating flex gap-2 mx-2">
      <div class="flex items-center">
        <img src="@/assets/4-rating.png" alt="" />
      </div>
      <p class="py-2 text-grayColor-300">
        4.5 ( {{ hotelDetails.review_nr }} Reviews)
      </p>
    </div>
    <div class="address flex gap-2 mx-2">
      <div class="location-image">
        <img src="@/assets/location.png" alt="" />
      </div>
      <h4 class="text-grayColor-600">{{ hotelDetails.address }}</h4>
    </div>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails"]);
</script>
