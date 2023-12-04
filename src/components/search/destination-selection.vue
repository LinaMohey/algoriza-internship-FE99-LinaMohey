<template>
  <!-- form for destination selection -->
  <label for="destination" class="input-main px-5"
    >Where are you going?
    <select
      class="input-main"
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
  </label>
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
