<template>
  <!-- sorting hotels by -->
  <section class="sort-by">
    <select
      v-model="selectedSort"
      class="block appearance-none w-full bg-white border border-gray-300 p-2 rounded-md leading-tight focus:outline-none focus:border-blue-500"
    >
      <option value="" class="text-gray-500">
        Sort by <br />
        <span class="text-grayColor-400">Recommended</span>
      </option>
      <option
        v-for="sortOption in sortOptions"
        :key="sortOption.id"
        :value="sortOption.id"
        class="text-gray-800"
      >
        {{ sortOption.title }}
      </option>
    </select>
  </section>
</template>

<script setup>
import { useSearchResultStore } from "@/views/search-results/store/searchResults";
import { ref, computed, watchEffect } from "vue";

const searchResultStore = useSearchResultStore();
const sortOptions = computed(() => searchResultStore.sortOptions);
const selectedSort = ref("");

// watch for changes in selected sort option
watchEffect(() => {
  searchResultStore.setSelectedSortOption(selectedSort.value);
});
</script>
