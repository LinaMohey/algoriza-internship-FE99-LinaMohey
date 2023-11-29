<template>
  <!-- Search form -->
  <div class="search">
    <form>
      <label for="destination">Destination:</label>
      <select>
        <option>
          {{ selectedDestination }}
        </option>
      </select>

      <input :value="checkIn" type="date" />
      <input :value="checkOut" type="date" />
      <input :value="rooms" type="number" />
      <input :value="guests" type="number" />
      <button type="submit">Search</button>
    </form>
  </div>

  <!-- Search by property -->
  <div class="search-by-property">
    <div class="input-search">
      <img src="@/assets/search.png" alt="" />
    </div>
    <input type="text" v-model="propertyName" />
  </div>

  <!-- Search by rating -->
  <div class="search-by-ratings">
    <div class="rating-search" v-for="rating in [1, 2, 3, 4, 5]" :key="rating">
      <img src="@/assets/stars.png" alt="" />
      <button @click="updateRating(rating)">{{ rating }}</button>
    </div>
  </div>

  <!-- Sort by -->
  <filter-by-sort> </filter-by-sort>

  <!-- Filter by Budget -->
  <filter-by-budget> </filter-by-budget>

  <!-- Hotel results -->
  <div class="search-results">
    <h2>Search Results</h2>
    <p>Destination: {{ selectedDestination }}</p>
    <p>Total Results: {{ filteredHotels.length }}</p>

    <div v-for="hotel in filteredHotels" :key="hotel.property.id">
      <h3>{{ hotel.property.name }}</h3>
      <p>Rating: {{ hotel.property.reviewScore }}</p>
      <p>Reviews: {{ hotel.property.reviewCount }}</p>
      <p>Price: {{ formatPrice(hotel) }}</p>
      <p v-if="hasStrikethroughPrice(hotel)">
        Before Sale: {{ getStrikethroughPrice(hotel) }}
      </p>
      <p v-if="hasBenefitBadges(hotel)">
        Benefit Badges: {{ getBenefitBadges(hotel) }}
      </p>
      <p v-if="hasTaxExceptions(hotel)">Price Includes Taxes and Fees</p>
      <img :src="hotel.property.photoUrls" alt="" />

      <router-link
        :to="{
          name: 'hotel-availability',
          params: {
            hotelId: hotel.property.id,
          },
        }"
      >
        See Availability
      </router-link>
    </div>
  </div>
</template>

<script setup>
import FilterByBudget from "./filtering/budget.vue";
import filterBySort from "./filtering/sorting.vue";
import { useSearchResultStore } from "@/store/modules/searchResults";
import { computed, onMounted, ref } from "vue";

const searchResultStore = useSearchResultStore();

//fetching the options once the component is mounted
onMounted(async () => {
  await searchResultStore.fetchSortOptions();
});

//getting the store data and make it reactive also locally.
const hotels = ref(searchResultStore.hotels);
const selectedDestination = ref(searchResultStore.selectedDestination);
const checkIn = ref(searchResultStore.form.checkIn);
const checkOut = ref(searchResultStore.form.checkOut);
const rooms = ref(searchResultStore.form.rooms);
const guests = ref(searchResultStore.form.guests);
const propertyName = ref("");
const selectedRating = ref(0);

// Formating the price of each hotel.
const formatPrice = hotel =>
  `$${hotel.property.priceBreakdown.grossPrice.value.toFixed(2)}`;

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

const getBenefitBadges = hotel =>
  hotel.property.priceBreakdown.benefitBadges
    .map(badge => badge.text)
    .join(", ");

const hasTaxExceptions = hotel =>
  hotel.property.priceBreakdown.taxExceptions?.length > 0;
</script>
