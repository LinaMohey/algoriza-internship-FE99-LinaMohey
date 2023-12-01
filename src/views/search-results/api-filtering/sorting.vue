<template>
  <!-- Sort by -->
  <div class="sort-by">
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
  </div>
</template>
<script setup>
import { useSearchResultStore } from "@/store/modules/searchResults";
import { ref, computed, watchEffect } from "vue";

const searchResultStore = useSearchResultStore();

const sortOptions = computed(() => searchResultStore.sortOptions);
const selectedSort = ref("");

watchEffect(() => {
  searchResultStore.setSelectedSortOption(selectedSort.value);
});
</script>
