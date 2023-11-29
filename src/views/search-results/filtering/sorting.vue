<template>
  <!-- Sort by -->
  <div class="sort-by">
    <label for="sortSelect">Sort by:</label>
    <select v-model="selectedSort">
      <option
        v-for="sortOption in sortOptions"
        :key="sortOption.id"
        :value="sortOption.id"
      >
        {{ sortOption.title }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { useSearchResultStore } from "@/store/modules/searchResults";
import { ref, watchEffect } from "vue";

const searchResultStore = useSearchResultStore();

const sortOptions = ref(searchResultStore.sortOptions);
const selectedSort = ref("");

watchEffect(() => {
  searchResultStore.setSelectedSortOption(selectedSort.value);
});
</script>
