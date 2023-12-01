<template>
  <div class="user-info shadow-md max-w-810 mt-35 mb-100">
    <div
      class="important-info bg-yellow-100 p-4 flex items-center rounded-tr-md rounded-tl-md gap-4"
    >
      <p>Important information about your booking</p>
    </div>

    <div class="mt-4 p-20">
      <p class="mb-2">
        1. This rate is non-refundable. If you change or cancel your booking you
        will not get a refund or credit to use for a future stay.
      </p>
      <p class="mb-2">2. Stay extensions will require a new reservation.</p>
      <p class="mb-2">3. Front desk staff will greet guests on arrival</p>
      <p class="mb-2">
        4. No refunds will be issued for late check-in or early check-out.
      </p>

      <div class="booking mt-50">
        <p>
          By clicking the button below, I acknowledge that I have reviewed the
          <span class="text-blueColor-100">Privacy Statement </span> and have
          reviewd and accept the
          <span class="text-blueColor-100"> Rules and </span> Restrictions and
          <span class="text-blueColor-100">Terms of Use.</span>
        </p>
        <!-- <router-link :to="{ name: 'booking-card',
             }"
          class="py-10 px-18 bg-blueColor-100 text-white mt-20 rounded-md"
        >
          Complete booking
        </router-link> -->

        <div class="mt-20 flex gap-2">
          <img src="@/assets/lock.png" alt="lock-icon" />
          <p>
            We use secure transmission and encrypted storage to protect your
            personal information
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
