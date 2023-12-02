<template>
  <!-- search by budget -->
  <section
    class="budget-filter-card rounded-md border border-solid border-grayColor-400 my-15"
  >
    <!-- budget ranges -->
    <div class="budget-range text-grayColor-600">
      <h4 class="filter-title font-medium">Your budget per day</h4>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2 w-5"
          id="budget1"
          name="budget"
          @click="setBudget(0, 200)"
        />
        <label for="budget1" class="">$0 - $200</label>
      </div>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2 w-5"
          id="budget2"
          name="budget"
          @click="setBudget(200, 500)"
        />
        <label for="budget2">$200 - $500</label>
      </div>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2 w-5"
          id="budget3"
          name="budget"
          @click="setBudget(500, 1000)"
        />
        <label for="budget3">$500 - $1000</label>
      </div>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2 w-5"
          id="budget4"
          name="budget"
          @click="setBudget(1000, 2000)"
        />
        <label for="budget4">$1000 - $2000</label>
        <span>{{ getHotelCount(1000, 2000) }}</span>
      </div>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2 w-5"
          id="budget4"
          name="budget"
          @click="setBudget(2000, 5000)"
        />
        <label for="budget4">$2000 - $5000</label>
        <span>{{ getHotelCount(2000, 5000) }}</span>
      </div>
    </div>

    <!-- custom budget -->
    <div class="custom-budget flex items-center gap-4 mb-4 px-4 mt-18">
      <p class="text-grayColor-300">Set your own budget</p>
      <label class="switch">
        <input
          type="checkbox"
          class="rounde w-5d"
          @change="showCustomBudgetInput"
        />
        <span class="slider round"></span>
      </label>
    </div>

    <!-- custom budget input -->
    <div
      class="border border-dashed border-grayColor-500 p-2 m-4 rounded-md text-xs text-grayColor-600"
    >
      <input
        class="outline-none mb-2 border border-grayColor-100 mx-3 p-3 rounded-md w-103"
        v-model="minBudget"
        type="number"
        placeholder="Min budget"
        :disabled="!showCustomBudget"
      />
      <input
        class="outline-none mb-2 border border-grayColor-100 rounded-md p-3 w-103"
        v-model="maxBudget"
        type="number"
        placeholder="Max budget"
        @keyup.enter="setCustomBudget"
        :disabled="!showCustomBudget"
      />
      <p>Press Enter to filter</p>
    </div>
  </section>
</template>

<script setup>
import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import { ref, watchEffect } from "vue";

const searchResultStore = useSearchResultStore();

const minBudget = ref(null);
const maxBudget = ref(null);
const selectedBudgetRange = ref({ min: null, max: null });
const setBudget = ref(searchResultStore.setBudgetRange);
const showCustomBudget = ref(false);

// watching for changes in the store
watchEffect(() => {
  selectedBudgetRange.value = searchResultStore.form.selectedBudgetRange;
  minBudget.value = searchResultStore.form.minBudget;
  maxBudget.value = searchResultStore.form.maxBudget;
});

const showCustomBudgetInput = () => {
  showCustomBudget.value = !showCustomBudget.value;
};

//setting budget in store
const setCustomBudget = () => {
  searchResultStore.setBudgetRange(minBudget.value, maxBudget.value);
};

const getHotelCount = (min, max) => {
  return searchResultStore.getHotelCountInBudget(min, max);
};
</script>
