<template>
  <div class="hotel-info mx-25 py-3">
    <h4 class="my-10 text-lg font-medium">{{ hotelName }}</h4>
    <div class="rating flex gap-2 items-center">
      <!-- rating component -->

      <div class="rating flex gap-2">
        <reserved-rating> </reserved-rating>

        <p class="text-grayColor-300">4.5 ({{ reviews }}) Reviews</p>
      </div>
    </div>
    <div class="specifications mt-30 text-grayColor-300">
      <p class="mb-2 text-redColor-100">Non refundable</p>
      <p class="mb-2">Check in: {{ checkIn }}</p>
      <p class="mb-2">Check out: {{ checkOut }}</p>
      <p class="mb-2">2 night stands</p>
    </div>
  </div>
</template>

<script setup>
import { useAvaliableHotels } from "@/views/hotel-avaliability/store/avaliable-hotels";
import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import reservedRating from "@/views/hotel-reservation/reserved-hotel/reserved-rating.vue";

// these data are dynamic u can use them above to retrieve data from api
const avaliableHotels = useAvaliableHotels();
const searchResultStore = useSearchResultStore();

const hotelName = avaliableHotels.hotelDetails.hotel_name;
const reviews = avaliableHotels.hotelDetails.review_nr;

const checkIn = searchResultStore.form.checkIn;
const checkOut = searchResultStore.form.checkOut;
</script>
