<template>
  <div class="facilities m-15 py-15">
    <h6 class="text-lg font-semibold mb-2">Top facilities</h6>

    <!-- render dynamic facilities if exist -->
    <div
      v-if="block"
      class="room-info grid"
      style="grid-template-columns: repeat(2, minmax(0, 250px))"
    >
      <!-- show only 6 facilities -->
      <div
        class="py-1"
        v-for="(highlight, index) in hotelDetails.rooms[
          room_id
        ]?.highlights.slice(0, 6)"
        :key="index"
      >
        {{ highlight.translated_name }}
      </div>
    </div>

    <!-- render static facilities if not exist -->
    <p v-else>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi
      fuga dicta laudantium odio corrupti quisquam accusantium ratione
      voluptates? Vel!
    </p>
  </div>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
