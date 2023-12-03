<template>
  <!-- making a container for backdrop effect -->
  <div class="modal-backdrop">
    <div class="modal-container">
      <!-- the modal container -->
      <div class="booking-modal">
        <div class="booking-image">
          <img src="./assets/images/booking.png" alt="booking-image" />
        </div>

        <h4 class="modal-title">Booking Successful</h4>
        <p class="modal-tex">
          Congratulations your reservation has been made. You will be notified 2
          days prior the date.
        </p>
        <!-- emitting custom event to close the modal -->
        <button @click="$emit('closeModal')" class="modal-button">
          View trips
        </button>
      </div>
    </div>
  </div>
</template>
