<template>
  <!-- dynamic image if room exist -->
  <section class="room-image shadow-md">
    <img
      class="rounded-t-lg"
      v-if="showSpecificImage()"
      :src="showSpecificImage()"
      alt="room-image"
    />

    <!-- static image if not exist -->
    <img
      v-else
      src="../../hotel-avaliability/assets/images/hotel-images/room2.png"
      alt="default-room-image"
    />
  </section>
</template>

<script setup>
import { useAvaliableHotels } from "@/views/hotel-avaliability/store/avaliable-hotels";

//calling the store to retrieve hotel image.
const avaliableHotels = useAvaliableHotels();
const hotelDetails = avaliableHotels.hotelDetails;
const room_id = avaliableHotels.room_id;

// loop through image related to hotel
const showSpecificImage = () => {
  const hotelImage =
    hotelDetails.rooms[room_id]?.photos[0].url_original || null;
  return hotelImage;
};
</script>
