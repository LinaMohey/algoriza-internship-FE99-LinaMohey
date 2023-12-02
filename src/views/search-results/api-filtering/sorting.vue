<template>
  <!-- sorting hotels by -->
  <section class="sort-by">
    <select v-model="selectedSort">
      <option value="">
        Sort by <br />
        <span class="text-grayColor-400">Recommended</span>
      </option>
      <option
        v-for="sortOption in sortOptions"
        :key="sortOption.id"
        :value="sortOption.id"
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
