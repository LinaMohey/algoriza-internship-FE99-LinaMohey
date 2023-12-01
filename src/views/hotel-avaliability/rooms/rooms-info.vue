<template>
  <!-- specification of each room -->
  <section class="room-spec">
    <div class="flex gap-2 items-center">
      <img src="@/assets/bag.png" alt="" />
      <p>300 sq ft</p>
    </div>
    <div class="flex gap-2 items-center">
      <img src="@/assets/bag.png" alt="" />
      <p>Sleeps 3</p>
    </div>
    <div class="flex gap-2 items-center">
      <img src="@/assets/life.png" alt="" />
      <p>1 double bed and 1 twin bed</p>
    </div>
  </section>

  <!-- reserve button to direct to booking -->
  <router-link
    :to="{ name: 'reservation' }"
    class="px-12 py-18 bg-blueColor-100 text-white w-full mx-auto rounded-md"
  >
    Reserve suite
  </router-link>
</template>
