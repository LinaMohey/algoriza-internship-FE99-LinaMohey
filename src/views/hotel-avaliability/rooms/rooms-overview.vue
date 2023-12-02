<template>
  <!-- overview of each room -->
  <section class="overview-content px-4 m-15">
    <h4 class="text-lg font-semibold mb-20 py-10">Overview</h4>

    <!-- render dynamic room desc if exist -->
    <p v-if="block" class="text-grayColor-300">
      {{ hotelDetails.rooms[room_id]?.description }}
    </p>

    <!-- render static room desc if not exist -->
    <p v-else class="text-grayColor-300">
      Featuring free WiFi throughout the property, Lakeside Motel Waterfront
      offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free
      private parking is available on site.<br />
      <br />
      Each room at this motel is air conditioned and comes with a flat-screen
      TV. You will find a kettle, toaster and a microwave in the room. Each room
      is fitted with a private bathroom. Guests have access to barbecue
      facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside
      Motel Waterfront, while Paynesville is 14 mi from the property.<br />
      <br />
      Couples in particular like the location – they rated it 9.2 for a
      two-person trip.
      <br />
      <br />
    </p>
  </section>
  <hr class="border-t border-gray-300 my-4" />
</template>

<script setup>
const { prop } = defineProps(["hotelDetails", "block", "room_id"]);
</script>
