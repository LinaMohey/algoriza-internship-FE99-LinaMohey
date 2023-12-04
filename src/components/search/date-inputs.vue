<template>
  <!-- date selection input for check in and check out -->
  <input
    class="input-main"
    v-model="checkIn"
    type="date"
    placeholder="Check-in Date"
    @change="updateselectedCheckIn"
  />
  <input
    class="input-main"
    v-model="checkOut"
    type="date"
    placeholder="Check-out Date"
    @change="updateselectedCheckOut"
  />
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits();
const checkIn = ref("");
const checkOut = ref("");

const updateselectedCheckIn = () => {
  emit("updateCheckIn", checkIn.value);
  console.log(("child", checkIn.value));
};
const updateselectedCheckOut = () => {
  emit("updateCheckOut", checkOut.value);
  console.log(("child", checkOut.value));
};
</script>
