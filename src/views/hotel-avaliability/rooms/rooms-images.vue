<template>
  <!-- show the avaliable rooms if exist , show room number 4 as it has array of rooms we can show different images from above(images on the first page.) -->
  <img
    v-if="hotelDetails.rooms[room_id]?.photos[4]"
    class="rounded min-w-350 max-w-400 min-h-200 max-h-218"
    :src="hotelDetails.rooms[room_id].photos[4].url_original"
    alt=""
  />
  <!-- check if photo at index 4 exists, if not render static image -->
  <img v-else src="../assets/images/suites/suite1.png" alt="Default Image" />
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
