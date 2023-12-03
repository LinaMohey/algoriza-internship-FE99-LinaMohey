<template>
  <!-- hotel info section -->
  <section class="hotel-info my-40 mx-3">
    <!-- dynamic content from api if exist -->
    <div v-if="hotelDetails">
      <h4 class="py-2 text-32 font-bold">{{ hotelDetails.hotel_name }}</h4>
      <div class="rating flex gap-2 mx-2">
        <div class="flex items-center">
          <img src="../assets/images/hotel-info/4-rating.png" alt="" />
        </div>
        <p class="py-2 text-grayColor-300">
          4.5 ( {{ hotelDetails.review_nr }} Reviews)
        </p>
      </div>
      <div class="address flex gap-2 mx-2">
        <div class="location-image">
          <img src="../assets/images/hotel-info/location.png" alt="" />
        </div>
        <h4 class="text-grayColor-600">{{ hotelDetails.address }}</h4>
      </div>
    </div>

    <!--  if theres no room avaliable will render static data -->
    <div v-else>
      <h4 class="py-2 text-32 font-bold">Lakeside Motel Warefront</h4>
      <div class="rating flex gap-2 mx-2">
        <div class="flex items-center">
          <img src="../assets/images/hotel-info/4-rating.png" alt="" />
        </div>
        <p class="py-2 text-grayColor-300">4.5 ( 1200 Reviews)</p>
      </div>
      <div class="address flex gap-2 mx-2">
        <div class="location-image">
          <img src="../assets/images/hotel-info/location.png" alt="" />
        </div>
        <h4 class="text-grayColor-600">
          Lorem ipsum road, Tantruim-2322, Melbourne, Australia
        </h4>
      </div>
    </div>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails"]);
</script>
