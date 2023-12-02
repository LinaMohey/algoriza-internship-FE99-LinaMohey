<template>
  <section class="ratings flex">
    <img
      v-for="index in Math.floor(formatRate(hotel))"
      src="@/assets/star-fill.png"
      :key="index"
      alt="filled-star"
    />

    <img
      class="ml-1"
      v-if="hotel.property.reviewScore % 1 !== 0"
      src="@/assets/star-half.png"
      alt="half-filled "
    />

    <p>
      {{ formatRate(hotel) }} ({{ hotel.property.reviewCount }}
      Reviews)
    </p>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);

//format ratings
const formatRate = hotel => `${hotel.property.reviewScore.toFixed() / 2}`;
</script>
