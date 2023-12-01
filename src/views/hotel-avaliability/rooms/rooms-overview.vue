<template>
  <!-- overview of each room -->
  <section class="overview-content px-4">
    <h4 class="text-lg font-semibold m-15">Overview</h4>

    <!-- render dynamic room desc if exist -->
    <p v-if="block">
      {{ hotelDetails.rooms[room_id]?.description }}
    </p>

    <!-- render static room desc if not exist -->
    <p v-else>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi
      fuga dicta laudantium odio corrupti quisquam distinctio! Doloremque
      expedita quidem, a temporibus aliquam incidunt, aliquid veritatis
      corporis, harum nihil nulla molestiae inventore. Incidunt ipsam quis
      dolore quod libero neque. Neque eligendi quia ullam consectetur, nobis
      veniam accusantium ratione voluptates? Vel!
    </p>
    <hr class="border-t border-gray-300 my-4" />
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
