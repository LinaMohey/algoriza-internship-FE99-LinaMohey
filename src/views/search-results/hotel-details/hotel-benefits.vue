<template>
  <p
    v-if="hasBenefitBadges(hotel)"
    class="absolute top-4 right-0 text-white py-1 px-2 rounded-md mx-10"
    :class="{
      'bg-red-500': isLimitedTimeDeal(hotel),
      'bg-orange-500': !isLimitedTimeDeal(hotel),
    }"
  >
    {{ getBenefitBadges(hotel) }}
  </p>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);

//check if the hotel has benefits
const hasBenefitBadges = hotel =>
  hotel.property.priceBreakdown.benefitBadges?.length > 0;

//check limited deals for making it diff color.
const isLimitedTimeDeal = hotel => {
  const benefitBadges = hotel.property.priceBreakdown.benefitBadges;
  return benefitBadges.some(
    badge => badge.text.toLowerCase() === "limited-time deal"
  );
};

//getting the benefits
const getBenefitBadges = hotel =>
  hotel.property.priceBreakdown.benefitBadges
    .map(badge => badge.text)
    .join(", ");
</script>
