<template>
  <div
    class="important-info bg-yellow-100 p-18 flex items-center rounded-tr-md rounded-tl-md gap-4 font-medium"
  >
    <p>Important information about your booking</p>
  </div>

  <div class="mt-4 p-20 font-normal">
    <p class="mb-1 px-2">
      1. This rate is non-refundable. If you change or cancel your booking you
      will not get a refund or credit to use for a future stay.
    </p>
    <p class="mb-1 px-2">2. Stay extensions will require a new reservation.</p>
    <p class="mb-1 px-2">3. Front desk staff will greet guests on arrival</p>
    <p class="mb-1 px-2">
      4. No refunds will be issued for late check-in or early check-out.
    </p>

    <div class="booking mt-30 px-1">
      <p class="mb-30">
        By clicking the button below, I acknowledge that I have reviewed the
        <span class="text-blueColor-100">Privacy Statement </span> and have
        reviewd and accept the
        <span class="text-blueColor-100"> Rules and Restrictions </span>and
        <span class="text-blueColor-100">Terms of Use.</span>
      </p>
      <router-link
        :to="{ name: 'reserved-trips' }"
        class="py-15 px-18 bg-blueColor-100 text-white my-20 rounded-md"
      >
        Complete booking
      </router-link>

      <div class="mt-30 flex gap-2">
        <div>
          <img src="./assets/images/payment/lock.png" alt="lock-icon" />
        </div>
        <p class="mb-15">
          We use secure transmission and encrypted storage to protect your
          personal information
        </p>
      </div>
    </div>
  </div>
</template>
