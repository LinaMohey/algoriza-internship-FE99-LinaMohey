<template>
  <!-- show the avaliable rooms if exist , show room number 5 as it has array of rooms we can show different images from above(images on the first page.) -->
  <div
    class="img"
    v-for="(photo, index) in hotelDetails.rooms[room_id]?.photos.slice(5, 6)"
    :key="index"
  >
    <!-- check if photo at index 5 exists, if not render static image -->
    <img
      v-if="hotelDetails.rooms[room_id]?.photos[5]"
      class="rounded min-w-350 max-w-400 min-h-200 max-h-218"
      :src="hotelDetails.rooms[room_id].photos[5].url_original"
      alt=""
    />
    <img v-else src="@/assets/suite1.png" alt="Default Image" />
  </div>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
