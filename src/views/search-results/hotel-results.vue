<template>
  <header class="relative">
    <navbar
      class="bg-gradient-to-r from-blueColor-200 via-blueColor-200 to-blueColor-300 h-50 text-white"
    ></navbar>
    <div class="search absolute -bottom-4 left-80 shadow-md">
      <form class="bg-white my-auto rounded-md p-2">
        <label for="destination">Destination:</label>
        <select>
          <option>
            {{ selectedDestination }}
          </option>
        </select>

        <input class="input" :value="checkIn" type="date" />
        <input class="input" :value="checkOut" type="date" />
        <input class="input" :value="rooms" type="number" />
        <input class="input" :value="guests" type="number" />
        <button class="input" type="submit">Search</button>
      </form>
    </div>
  </header>

  <section
    class="main-container max-w-screen-xl mx-auto mt-12 flex justify-evenly gap-48"
  >
    <!-- Search by property -->
    <div class="search-by-property rounded-md bg-grayColor-100 p-4 h-full">
      <p class="font-semibold mb-4">Search by property name</p>
      <div
        class="search-input flex items-center border-1 border-grayColor-400 rounded-md p-2 bg-white py-3"
      >
        <div class="input-search">
          <img src="@/assets/search.png" alt="Search Icon" />
        </div>
        <input
          class="flex-1 ml-2 outline-none bg-transparent text-grayColor-300"
          type="text"
          v-model="propertyName"
          placeholder="e.g., Beach westpalm"
        />
      </div>
    </div>

    <!--  Filtering -->
    <div class="filtering">
      <h4 class="m-4">Filter by</h4>

      <!-- Filter by Budget -->
      <filter-by-budget> </filter-by-budget>

      <!-- Search by rating -->
      <div class="search-by-ratings border border-grayColor-400 rounded-md">
        <h4 class="filter-title">Rating</h4>
        <p class="mb-2 px-4">Show only ratings more than</p>
        <div class="rating-search-container flex px-4">
          <div
            class="rating-search flex gap-2 items-center border p-2 mb-6"
            v-for="rating in [1, 2, 3, 4, 5]"
            :key="rating"
          >
            <div><img src="@/assets/stars.png" alt="" /></div>
            <button class="rating-button" @click="updateRating(rating)">
              {{ rating }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Hotel results -->
    <div class="search-results m-10">
      <div class="desination-info flex justify-between m-6">
        <p>
          {{ selectedDestination }} : {{ filteredHotels.length }}
          search results found
        </p>
        <!-- Sort by -->
        <filter-by-sort> </filter-by-sort>
      </div>

      <div
        v-for="hotel in filteredHotels"
        :key="hotel.property.id"
        class="flex gap-20 border border-grayColor-400 p-3 mb-4 relative"
      >
        <div class="hotel-image">
          <img
            :src="hotel.property.photoUrls"
            alt="hotel image"
            class="rounded-md w-285 h-50"
          />
        </div>
        <div class="hotel-info">
          <h3 class="my-15">{{ hotel.property.name }}</h3>
          <div class="ratings">
            <p>
              {{ rating(hotel) }} ({{ hotel.property.reviewCount }}
              Reviews)
            </p>
          </div>
          <div class="description py-10 my-10">
            <h4>Live a little and celbrate with champagne</h4>
            <p>
              Reats include a glass of French champagne, parking and a late
              <br />checkout. Gym included. Flexible cancellation applies
            </p>
          </div>
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
        <div class="hotel-price">
          <!-- Badge -->
          <p
            v-if="hasBenefitBadges(hotel)"
            class="absolute top-4 right-0 text-white py-1 px-2 rounded-md mx-10"
            :class="{
              'bg-red-500': isLimitedTimeDeal(hotel),
              'bg-orange-500': !isLimitedTimeDeal(hotel),
            }"
          >
            {{ getBenefitBadges(hotel) }}
          </p>

          <!-- Price -->
          <div
            class="price-breakdown flex items-center gap-2 absolute bottom-4 right-0 px-3"
          >
            <p
              v-if="hasStrikethroughPrice(hotel)"
              :class="{
                'line-through text-xs': hasStrikethroughPrice(hotel),
                'text-red-500 ': hasStrikethroughPrice(hotel),
              }"
            >
              {{ getStrikethroughPrice(hotel) }}
            </p>
            <p>{{ formatPrice(hotel) }}</p>

            <p v-if="hasTaxExceptions(hotel)">Price Includes Taxes and Fees</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FilterByBudget from "./filtering/budget.vue";
import filterBySort from "./filtering/sorting.vue";
import { useSearchResultStore } from "@/store/modules/searchResults";
import { computed, onMounted, ref } from "vue";
import navbar from "@/components/UI/navbar.vue";

const searchResultStore = useSearchResultStore();

//fetching the options once the component is mounted
onMounted(async () => {
  await searchResultStore.fetchSortOptions();
});

//getting the store data and make it reactive also locally.
const hotels = searchResultStore.hotels;
const selectedDestination = searchResultStore.selectedDestination;
const checkIn = searchResultStore.form.checkIn;
const checkOut = searchResultStore.form.checkOut;
const rooms = searchResultStore.form.rooms;
const guests = searchResultStore.form.guests;
const propertyName = ref("");
const selectedRating = ref(0);

// Formating the price of each hotel.
const formatPrice = hotel =>
  `$${hotel.property.priceBreakdown.grossPrice.value.toFixed(2)}`;

//formating ratings
const rating = hotel => `${hotel.property.reviewScore.toFixed() / 2}`;

//filtering hotels depend on rating/ property name
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

//update the rating
const updateRating = newRating => {
  selectedRating.value = newRating;
};

//prices
const hasStrikethroughPrice = hotel =>
  !!hotel.property.priceBreakdown.strikethroughPrice;

const getStrikethroughPrice = hotel => {
  const price = hotel.property.priceBreakdown.strikethroughPrice?.value || 0;
  return `$${price.toFixed(2)}`;
};

//benefit  badges
const hasBenefitBadges = hotel =>
  hotel.property.priceBreakdown.benefitBadges?.length > 0;

const isLimitedTimeDeal = hotel => {
  const benefitBadges = hotel.property.priceBreakdown.benefitBadges;
  return benefitBadges.some(
    badge => badge.text.toLowerCase() === "limited-time deal"
  );
};
const getBenefitBadges = hotel =>
  hotel.property.priceBreakdown.benefitBadges
    .map(badge => badge.text)
    .join(", ");

//taxes avaliable or not
const hasTaxExceptions = hotel =>
  hotel.property.priceBreakdown.taxExceptions?.length > 0;
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
