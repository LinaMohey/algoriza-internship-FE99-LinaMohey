<template>
  <h5>
    {{ hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types[0].name }},
    {{ hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types.length }}
    {{
      hotelDetails.rooms[room_id]?.bed_configurations[0]?.bed_types.length > 1
        ? "beds"
        : "bed"
    }}
  </h5>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
