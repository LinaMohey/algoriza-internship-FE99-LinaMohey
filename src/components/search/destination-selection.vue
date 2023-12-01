heres the destinaiton:
<!-- destination-selection.vue -->
<template>
  <label for="destination">Destination:</label>
  <select
    v-model="selectedDestination"
    id="destination"
    @change="updateSelectedDestination"
  >
    <option
      v-for="destination in destinations"
      :key="destination.dest_id"
      :value="destination.dest_id"
    >
      {{ destination.city_name }}
    </option>
  </select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
const { props } = defineProps(["destinations"]);
const emit = defineEmits();

const selectedDestination = ref("");
const updateSelectedDestination = () => {
  emit("updateDestination", selectedDestination.value);
  console.log("child", selectedDestination.value);
};
</script>
