<template>
  <!-- making a container for backdrop effect -->
  <div class="modal-backdrop">
    <div class="modal-container">
      <!-- the modal container -->
      <div class="booking-modal">
        <div class="booking-image">
          <img
            src="./assets/images/booking.png"
            alt="booking-image"
            class="mx-auto"
          />
        </div>

        <h4 class="my-30 text-center m-10 font-bold text-xl tracking-wide">
          Booking Successful
        </h4>
        <p class="modal-text">
          Congratulations your reservation has been made. You will be notified 2
          days prior the date.
        </p>
        <!-- emitting custom event to close the modal -->
        <router-link
          :to="{ path: '/my-trips' }"
          class="modal-button text-center"
        >
          View Trips
        </router-link>
      </div>
    </div>
  </div>
</template>
