<template>
  <!-- header section -->
  <header>
    <!-- navigation bar -->
    <navbar
      class="bg-gradient-to-r from-blueColor-200 via-blueColor-200 to-blueColor-300 h-200 text-white shadow-none"
    ></navbar>

    <!-- search form -->
    <div class="min-w-1030 mx-1/2 flex justify-center -translate-y-35">
      <form class="bg-white my-auto rounded-md p-2 shadow-md">
        <!-- destination dropdown -->

        <label for="destination">Where are you going?:</label>
        <select class="input-main">
          <option>{{ selectedDestination }}</option>
        </select>

        <!-- date inputs, rooms, guests, and search button -->
        <input class="input-main" :value="checkIn" type="date" />
        <input class="input-main" :value="checkOut" type="date" />
        <input class="input-main max-w-147" :value="rooms" type="number" />
        <input class="input-main max-w-147" :value="guests" type="number" />
        <button
          disabled
          class="bg-blueColor-100 px-35 text-white rounded-md py-10"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </header>

  <!-- spinner when fetching data -->
  <loading-spinner v-if="loading"> </loading-spinner>

  <!-- main section -->
  <section
    class="main-container max-w-1350 mx-auto mt-12 flex gap-20 justify-center"
  >
    <!-- filter sidebar -->
    <div class="main-filter w-295">
      <!-- search by property -->
      <search-by-property
        @updateByPropertyName="handlePropertyName"
      ></search-by-property>

      <!-- filters -->
      <div class="filtering">
        <h4 class="m-4 font-semi-bold text-lg">Filter by</h4>

        <!-- filter by budget -->
        <filter-by-budget></filter-by-budget>

        <!-- filter by rating -->
        <filter-by-rating @updateRating="handleUpdateRating"></filter-by-rating>
      </div>
    </div>

    <!-- hotel results -->
    <div v-if="!loading" class="search-results m-10">
      <!-- destination information and sorting -->
      <div class="desination-info flex justify-between gap-10 my-6">
        <div v-for="meta in propertyMeta" :key="meta">
          <p class="text-2xl font-semibold tracking-wide">
            {{ selectedDestination }} : {{ meta.title }} search results found
          </p>
        </div>

        <!-- sort by filter -->
        <filter-by-sort></filter-by-sort>
      </div>

      <!-- hotel listings -->
      <div
        v-for="hotel in filteredHotels"
        :key="hotel.property.id"
        class="flex items-center gap-20 border border-grayColor-400 p-20 mb-4 relative rounded-md"
      >
        <!-- hotel image -->
        <hotel-image :hotel="hotel"></hotel-image>

        <!-- hotel info -->
        <div class="hotel-info">
          <!-- property name -->
          <hotel-name :hotel="hotel"></hotel-name>

          <!-- hotel ratings -->
          <hotel-ratings :hotel="hotel"></hotel-ratings>

          <!-- hotel description -->
          <hotel-description></hotel-description>

          <!-- availability button -->
          <router-link
            class="bg-blueColor-100 text-white border border-grayColor-400 py-10 px-18 rounded-md my-20"
            :to="{
              name: 'hotel-availability',
              params: {
                hotelId: hotel.property.id,
              },
            }"
          >
            See availability
          </router-link>
        </div>

        <!-- hotel price -->
        <div class="hotel-price">
          <!-- hotel benefits -->
          <hotel-benefits :hotel="hotel"></hotel-benefits>

          <!-- gross price -->
          <hotel-price :hotel="hotel"></hotel-price>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import filterByBudget from "./api-filtering/budget.vue";
import filterBySort from "./api-filtering/sorting.vue";
import filterByRating from "./client-filtering/filter-by-rating.vue";
import searchByProperty from "./client-filtering/search-by-property.vue";
import hotelName from "./hotel-details/hotel-name.vue";
import hotelImage from "./hotel-details/hotel-image.vue";
import hotelRatings from "./hotel-details/hotel-ratings.vue";
import hotelDescription from "./hotel-details/hotel-description.vue";
import hotelBenefits from "./hotel-details/hotel-benefits.vue";
import hotelPrice from "./hotel-details/hotel-price.vue";

import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import { computed, onMounted, ref } from "vue";
import navbar from "@/components/shared/navbar.vue";

const searchResultStore = useSearchResultStore();

const loading = ref(true);
const hotels = searchResultStore.hotels;
const selectedDestination = searchResultStore.selectedDestination;
const checkIn = searchResultStore.form.checkIn;
const checkOut = searchResultStore.form.checkOut;
const rooms = searchResultStore.form.rooms;
const guests = searchResultStore.form.guests;
const propertyName = ref("");
const selectedRating = ref(0);
const propertyMeta = searchResultStore.meta;

// update the property name by emitting custom event
const handlePropertyName = value => {
  propertyName.value = value;
};

// update the rating through custom events
const handleUpdateRating = value => {
  selectedRating.value = value;
};

// filtering hotels depend on rating/ property name
const filteredHotels = computed(() => {
  return searchResultStore.hotels.filter(hotel => {
    const { name, reviewScore } = hotel.property;
    const nameMatch = name
      .toLowerCase()
      .includes(propertyName.value.toLowerCase());
    const ratingMatch =
      selectedRating.value === 0 || reviewScore >= selectedRating.value;

    return nameMatch && ratingMatch;
  });
});

// fetching the options once the component is mounted
onMounted(async () => {
  try {
    // Wait for fetchSortOptions to complete before setting loading to false
    await searchResultStore.fetchSortOptions();
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false; // Ensure loading is set to false even in case of an error
  }
});
</script>

<style scoped>
.rating-search:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.rating-search:last-of-type {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
