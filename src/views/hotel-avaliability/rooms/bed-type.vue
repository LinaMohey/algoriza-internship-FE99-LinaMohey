<template>
  <!-- dynamic bed types if exist in api -->
  <div v-if="room_id">
    <h5 class="px-20 pt-20 font-medium text-lg tracking-wide">
      {{
        hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types[0].name
      }},
      {{ hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types.length }}
      {{
        hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types.length > 1
          ? "beds"
          : "bed"
      }}
    </h5>
  </div>

  <!-- static bed types if not exist -->
  <div v-else>
    <h5>Standard twin ben, Multiple beds</h5>
  </div>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
