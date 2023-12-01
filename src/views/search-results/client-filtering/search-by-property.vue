<template>
  <!-- search by property name -->
  <section
    class="search-by-property rounded-md bg-grayColor-100 p-4 items-center"
  >
    <h4 class="font-semibold mb-4">Search by property name</h4>
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
        @input="searchByPropertyName"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const propertyName = ref("");
const emit = defineEmits();

//sending property name
const searchByPropertyName = () => {
  emit("updateByPropertyName", propertyName.value);
};
</script>
