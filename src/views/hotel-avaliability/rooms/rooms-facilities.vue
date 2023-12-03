<template>
  <div class="facilities m-15 py-15">
    <h6 class="text-lg font-semibold mb-3">Top facilities</h6>

    <!-- render dynamic facilities if exist  -->
    <div
      v-if="!block"
      class="room-info grid"
      style="grid-template-columns: repeat(2, minmax(0, 250px))"
    >
      <!-- <show only 6 facilities -->
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
    <div v-else>
      <div
        class="room-info grid mb-3 mx-2"
        style="grid-template-columns: repeat(2, minmax(0, 250px))"
      >
        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/wifi.png" alt="" />
          </div>
          <div class="py-1">Free wifi</div>
        </div>
        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/lock.png" alt="" />
          </div>
          <div class="py-1">Business Services</div>
        </div>
        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/wind.png" alt="" />
          </div>
          <div class="py-1">Air Conditioning</div>
        </div>

        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/lifebuoy.png" alt="" />
          </div>
          <div class="py-1">Swimming pool</div>
        </div>
        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/game.png" alt="" />
          </div>
          <div class="py-1">Parking available</div>
        </div>
        <div class="flex gap-4 items-center">
          <div>
            <img src="../assets/images/room-facilities/like.png" alt="" />
          </div>
          <div class="py-1">Top rated in area</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
