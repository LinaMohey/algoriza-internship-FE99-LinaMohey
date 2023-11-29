<!-- Search by budget -->
<template>
  <section
    class="budget-filter-card rounded-md border border-solid border-grayColor-400 my-15"
  >
    <!-- ranges -->
    <div class="budget-range">
      <h4 class="filter-title">Your budget per day</h4>

      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2"
          id="budget1"
          name="budget"
          @click="setBudget(0, 200)"
        />
        <label for="budget1">$0 - $200</label>
      </div>
      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2"
          id="budget2"
          name="budget"
          @click="setBudget(200, 500)"
        />
        <label for="budget2">$200 - $500</label>
      </div>
      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2"
          id="budget3"
          name="budget"
          @click="setBudget(500, 1000)"
        />
        <label for="budget3">$500 - $1000</label>
      </div>
      <div class="mb-2 px-2">
        <input
          type="checkbox"
          class="mx-2"
          id="budget4"
          name="budget"
          @click="setBudget(1000, 2000)"
        />
        <label for="budget4">$1000 - $2000</label>
        <span>{{ getHotelCount(1000, 2000) }}</span>
      </div>
    </div>

    <!-- Custom budget -->
    <div class="custom-budget flex items-center gap-4 mb-4 px-4 mt-8">
      <p>Set your own budget</p>
      <label class="switch">
        <input
          type="checkbox"
          class="rounded"
          @change="showCustomBudgetInput"
        />
        <span class="slider round"></span>
      </label>
    </div>

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
  showCustomBudget.value = !showCustomBudget.value;
};

const setCustomBudget = () => {
  searchResultStore.setBudgetRange(minBudget.value, maxBudget.value);
};

const getHotelCount = (min, max) => {
  return searchResultStore.getHotelCountInBudget(min, max);
};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: -1px;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
