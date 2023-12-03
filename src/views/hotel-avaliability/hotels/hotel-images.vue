<template>
  <!-- hotel images -->
  <section class="hotel-images m-auto">
    <!-- show dynamic photos if exist -->
    <div
      v-if="block"
      class="grid grid-cols-2 grid-rows-2 gap-x-10 justify-center place-content-start"
    >
      <img
        class="rounded self-center"
        :class="{
          'row-span-2 self-center min-w-670 max-w-820 min-h-400 max-h-452':
            index === 0,
          'min-w-350 max-w-400 min-h-200 max-h-218 ': index == 1,
          'row-span-2 min-w-350 max-w-400 min-h-200 max-h-218': index === 2,
        }"
        :src="photo.url_original"
        alt=""
        v-for="(photo, index) in hotelDetails.rooms[room_id]?.photos.slice(
          0,
          3
        )"
        :key="index"
      />
    </div>

    <!-- show static photos if the rooms not exist -->
    <div v-else class="grid grid-cols-2 grid-rows-2 gap-10">
      <img
        src="../assets/images/hotel-images/room-1.png"
        class="row-span-2 self-center h-full"
        alt=""
      />
      <img src="../assets/images/hotel-images/room2.png" alt="" />
      <img
        src="../assets/images/hotel-images/room-3.png"
        alt=""
        class="row-span-2"
      />
    </div>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
