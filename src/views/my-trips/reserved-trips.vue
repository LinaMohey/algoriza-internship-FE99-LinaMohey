<template>
  <!-- Trips -->
  <main-layout>
    <h4 class="text-32 font-semibold tracking-wide my-20">My trips</h4>
    <!-- reserved trips section -->
    <section
      v-for="trip in filteredTrips"
      :key="trip.id"
      class="reserved-hotel mx-auto mt-20"
    >
      <div class="room shadow-md mt-30 bg-white rounded-md flex relative">
        <!-- trip image -->
        <div class="trip-image m-25">
          <img :src="trip.hotelImage" alt="trip image" />
        </div>
        <!-- trip info -->
        <div class="hotel-info mx-10 py-3 self-center">
          <h4 class="my-10 text-lg font-medium tracking-wide">
            {{ trip.name }}
          </h4>
          <div class="rating flex gap-2 items-center">
            <!-- rating  -->
            <div class="rating flex gap-2">
              <reserved-rating> </reserved-rating>
              <p class="text-grayColor-300">4.5 (1200) Reviews</p>
            </div>
          </div>
          <!-- trip details and price breakdown -->
          <div class="flex py-1 items-center gap-4 m-20">
            <div class="specifications mt-30 text-grayColor-300">
              <p class="mb-2 text-redColor-100">Non refundable</p>
              <p class="mb-2">Check in: {{ trip.checkIn }}</p>
              <p class="mb-2">Check out:{{ trip.checkOut }}</p>
              <p class="mb-2">2 night stands</p>
            </div>

            <div class="price-breakdown gap-2 absolute right-15 px-3r">
              <div class="flex items-center justify-center gap-2 mb-1">
                <p class="line-through text-sm text-red-500 font-medium">
                  $150
                </p>
                <p class="text-grayColor-600 text-xl font-medium">$130</p>
              </div>

              <p class="font-light mb-2">Includes taxes and fees</p>
              <button class="bg-blueColor-100 py-8 px-18 text-white rounded md">
                View trip details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script setup>
import reservedRating from "../hotel-reservation/reserved-hotel/reserved-rating.vue";
import { useTripStore } from "./store/trips";
import { computed } from "vue";

const tripStore = useTripStore();
const trips = tripStore.trips;

const filteredTrips = computed(() => {
  return trips.filter(trip => Object.keys(trip).length > 0);
});
</script>
