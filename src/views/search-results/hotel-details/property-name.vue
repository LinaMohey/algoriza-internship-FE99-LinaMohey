<template>
  <h3 class="my-15">{{ hotel.property.name }}</h3>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);
</script>
