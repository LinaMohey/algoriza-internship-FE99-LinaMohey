<template>
  <!-- search by rating  -->
  <section class="search-by-ratings border border-grayColor-400 rounded-md">
    <h4 class="filter-title font-medium">Rating</h4>
    <p class="mb-2 px-4 text-grayColor-300">Show only ratings more than</p>
    <div class="rating-search-container flex px-4">
      <!-- dynamic rendering of images -->
      <div
        class="rating-search flex gap-2 items-center border p-2 mb-6"
        v-for="rating in [1, 2, 3, 4, 5]"
        :key="rating"
      >
        <button class="rating-button" @click="updateSelectedRating(rating)">
          {{ rating }}
        </button>
        <div><img src="@/assets/stars.png" alt="" /></div>
      </div>
    </div>
  </section>
</template>

<script setup>
//sending the rating value
const emit = defineEmits();
const updateSelectedRating = value => {
  emit("updateRating", value);
};
</script>
