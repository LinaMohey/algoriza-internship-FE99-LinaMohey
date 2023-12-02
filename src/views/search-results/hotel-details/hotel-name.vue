<template>
  <h3 class="my-15 2xl font-medium tracking-wide">{{ hotel.property.name }}</h3>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);
</script>
