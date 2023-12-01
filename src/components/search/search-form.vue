<template>
  <div class="search">
    <form @submit.prevent="search" class="bg-white my-auto rounded-md p-2">
      <!-- refactoring the form -->

      <!-- destination component -->
      <destination-selection
        :destinations="filteredDestination"
        @updateDestination="handleUpdateDestination"
      ></destination-selection>

      <!-- date component -->
      <date-inputs
        @updateCheckIn="handleUpdateCheckIn"
        @updateCheckOut="handleUpdateCheckOut"
      ></date-inputs>

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
</template>

<script setup>
import { computed, ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import destinationSelection from "./destination-selection.vue";
import dateInputs from "./date-inputs.vue";

const router = useRouter();
const searchResultStore = useSearchResultStore();
const selectedDestination = ref("");
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

//binding distantion from child to parent
const handleUpdateDestination = value => {
  selectedDestination.value = value;
  console.log("selected", selectedDestination.value);
};

//binding date from child to parent
const handleUpdateCheckIn = value => {
  checkIn.value = value;
};

const handleUpdateCheckOut = value => {
  checkOut.value = value;
};
// ensure a destination feilds are selected before sending it
const validateForm = () => {
  if (!selectedDestination.value || !checkIn.value || !checkOut.value) {
    console.log("Please enter all fields");
    return false;
  }
  return true;
};

//searching hotels for specific (selected destination)
const search = async () => {
  // check validations
  if (!validateForm()) return;

  try {
    // update the store with selected destination
    const selectedDestinationObject = destinations.value.find(
      destination => destination.dest_id === selectedDestination.value
    );

    //check if the id has city name/destination related to it.
    if (!selectedDestinationObject) {
      console.log("destination not found for this id");
      return;
    }

    //setting the selected destination in the store to use later
    searchResultStore.selectedDestination = selectedDestinationObject.city_name;

    // calling the search method in the store with selected values
    await searchResultStore.searchHotels(
      selectedDestination.value,
      console.log(selectedDestination.value),
      checkIn.value,
      console.log(checkIn),

      checkOut.value,
      rooms.value,
      guests.value
    );

    // setting selected values in store to use later
    searchResultStore.setFormData({
      selectedDestination: selectedDestination.value,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      rooms: rooms.value,
      guests: guests.value,
    });

    // navigate to the search results page
    router.push("/hotel-result");
  } catch (error) {
    console.error(error);
  }
};
</script>
@/views/search-results/store/searchResults
