<!-- Search by budget -->
<template>
  <div class="budget-filter">
    <label>Budget Range:</label>
    <div>
      <input
        type="radio"
        id="budget1"
        name="budget"
        @click="setBudget(0, 200)"
      />
      <label for="budget1">$0 - $200</label>
    </div>
    <div>
      <input
        type="radio"
        id="budget1"
        name="budget"
        @click="setBudget(200, 500)"
      />
      <label for="budget1">$200 - $500</label>
    </div>
    <div>
      <input
        type="radio"
        id="budget1"
        name="budget"
        @click="setBudget(500, 1000)"
      />
      <label for="budget1">$500 - $1000</label>
    </div>
    <div>
      <input
        type="radio"
        id="budget1"
        name="budget"
        @click="setBudget(1000, 2000)"
      />
      <label for="budget1">$1000 - $2000</label>
      <span>{{ getHotelCount(1000, 2000) }} </span>
    </div>

    <!-- Use v-model for custom budget input -->
    <input
      type="radio"
      id="customBudget"
      name="budget"
      @click="showCustomBudgetInput"
    />
    <label for="customBudget">Set Your Own Budget</label>

    <input
      v-if="showCustomBudget"
      v-model="minBudget"
      type="number"
      placeholder="Min Budget"
    />
    <input
      v-if="showCustomBudget"
      v-model="maxBudget"
      type="number"
      placeholder="Max Budget"
      @keyup.enter="setCustomBudget"
    />
  </div>
</template>

<script setup>
import { useSearchResultStore } from "@/store/modules/searchResults";
import { ref, watchEffect } from "vue";

const searchResultStore = useSearchResultStore();

const minBudget = ref(null);
const maxBudget = ref(null);
const selectedBudgetRange = ref({ min: null, max: null });
const setBudget = ref(searchResultStore.setBudgetRange);
const showCustomBudget = ref(false);

watchEffect(() => {
  selectedBudgetRange.value = searchResultStore.form.selectedBudgetRange;
  minBudget.value = searchResultStore.form.minBudget;
  maxBudget.value = searchResultStore.form.maxBudget;
});

const showCustomBudgetInput = () => {
  showCustomBudget.value = true;
};

const setCustomBudget = () => {
  searchResultStore.setBudgetRange(minBudget.value, maxBudget.value);
};

const getHotelCount = (min, max) => {
  return searchResultStore.getHotelCountInBudget(min, max);
};
</script>
