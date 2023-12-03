<template>
  <main-layout>
    <!-- reserved trips section -->
    <section class="reserved-hotel mx-auto max-w-1030 mt-20">
      <h4 class="text-32 font-semibold tracking-wide">My trips</h4>
      <div class="room shadow-md mt-30 bg-white rounded-md flex">
        <!-- trip image -->
        <div class="trip-image m-25">
          <img
            src="../hotel-avaliability/assets/images/hotel-images/room2.png"
            alt="trip image"
          />
        </div>
        <div class="hotel-info mx-10 py-3 self-center">
          <h4 class="my-10 text-lg font-medium tracking-wide">
            Lakeside Motel Warefront
          </h4>
          <div class="rating flex gap-2 items-center">
            <!-- rating  -->
            <div class="rating flex gap-2">
              <reserved-rating> </reserved-rating>

              <p class="text-grayColor-300">4.5 (1200) Reviews</p>
            </div>
          </div>
          <!-- trip details -->
          <div class="specifications mt-30 text-grayColor-300">
            <p class="mb-2 text-redColor-100">Non refundable</p>
            <p class="mb-2">Check in: Check in: Sunday, March 18, 2022</p>
            <p class="mb-2">Check out: Check out: Tuesday, March 20, 2022</p>
            <p class="mb-2">2 night stands</p>
          </div>
        </div>
      </div>
      <div class="room shadow-md mt-40 bg-white rounded-md flex mb-150">
        <!-- trip image -->
        <div class="trip-image m-25">
          <img
            src="../hotel-avaliability/assets/images/hotel-images/room2.png"
            alt="trip image"
          />
        </div>
        <div class="hotel-info mx-10 py-3 self-center">
          <h4 class="my-10 text-lg font-medium tracking-wide">
            Lakeside Motel Warefront
          </h4>
          <div class="rating flex gap-2 items-center">
            <!-- rating  -->
            <div class="rating flex gap-2">
              <reserved-rating> </reserved-rating>

              <p class="text-grayColor-300">4.5 (1200) Reviews</p>
            </div>
          </div>
          <!-- trip details -->
          <div class="specifications mt-30 text-grayColor-300">
            <p class="mb-2 text-redColor-100">Non refundable</p>
            <p class="mb-2">Check in: Check in: Sunday, March 18, 2022</p>
            <p class="mb-2">Check out: Check out: Tuesday, March 20, 2022</p>
            <p class="mb-2">2 night stands</p>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script setup>
import reservedRating from "../hotel-reservation/reserved-hotel/reserved-rating.vue";
</script>
