<template>
  <!-- prive of each hot -->
  <section
    class="price-breakdown flex items-center gap-2 absolute bottom-4 right-0 px-3"
  >
    <p
      v-if="hasStrikethroughPrice(hotel)"
      :class="{
        'line-through text-sm': hasStrikethroughPrice(hotel),
        'text-red-500 font-medium': hasStrikethroughPrice(hotel),
      }"
    >
      {{ getStrikethroughPrice(hotel) }}
    </p>
    <p class="text-grayColor-600 text-xl font-medium">
      {{ formatPrice(hotel) }}
    </p>

    <p v-if="hasTaxExceptions(hotel)">Price Includes Taxes and Fees</p>
  </section>
</template>

<script setup>
const { prop } = defineProps(["hotel"]);

//check if the hotel has sale.
const hasStrikethroughPrice = hotel =>
  !!hotel.property.priceBreakdown.strikethroughPrice;

//getting the sale if exist
const getStrikethroughPrice = hotel => {
  const price = hotel.property.priceBreakdown.strikethroughPrice?.value || 0;
  return `$${price.toFixed(2)}`;
};

//formating the price.
const formatPrice = hotel =>
  `$${hotel.property.priceBreakdown.grossPrice.value.toFixed(2)}`;

//check if taxes avaliable or not
const hasTaxExceptions = hotel =>
  hotel.property.priceBreakdown.taxExceptions?.length > 0;
</script>
