<!-- components/SearchForm.vue -->
<template>
  <div class="search" v-if="!loading">
    <form @submit.prevent="search" class="bg-white my-auto rounded-md p-2">
      <label for="destination">Destination:</label>
      <select v-model="selectedDestination" id="destination">
        <option
          v-for="destination in filteredDestination"
          :key="destination.dest_id"
          :value="destination.dest_id"
        >
          {{ destination.city_name }}
        </option>
      </select>

      <input
        class="input"
        v-model="checkIn"
        type="date"
        placeholder="Check-in Date"
      />
      <input
        class="input"
        v-model="checkOut"
        type="date"
        placeholder="Check-out Date"
      />
      <input
        class="input"
        v-model="rooms"
        type="number"
        placeholder="Number of rooms"
      />
      <input
        class="input"
        v-model="guests"
        type="number"
        placeholder="Number of guests"
      />
      <button
        class="bg-blueColor-100 px-35 py-2 text-white rounded-md"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
  <div v-else>Loading.....</div>
</template>

<script setup>
import { computed, ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useSearchResultStore } from "@/store/modules/searchResults";

const router = useRouter();
const searchResultStore = useSearchResultStore();
const selectedDestination = ref(null);
const checkIn = ref("");
const checkOut = ref("");
const rooms = ref(1);
const guests = ref(1);
const destinations = computed(() => searchResultStore.destinations);

const loading = ref(true);

// Fetch destinations
onMounted(() => {
  try {
    searchResultStore.fetchDestinations();
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
});

const filteredDestination = computed(() => {
  return destinations.value.filter(destination => destination.city_name !== "");
});

//searching for destination
const search = () => {
  // Ensure a destination is selected
  if (!selectedDestination.value) {
    console.log("please enter a destintion");
    return;
  }

  // Update the store with selected destination
  searchResultStore.selectedDestination = destinations.value.find(
    destination => destination.dest_id === selectedDestination.value
  ).city_name;

  // Trigger the search in the store
  searchResultStore.searchHotels(
    selectedDestination.value,
    checkIn.value,
    checkOut.value,
    rooms.value,
    guests.value
  );

  //set selected values in store
  searchResultStore.setFormData({
    selectedDestination: selectedDestination.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    rooms: rooms.value,
    guests: guests.value,
  });
  // Navigate to the search results page
  router.push("/hotel-result");
};
</script>
