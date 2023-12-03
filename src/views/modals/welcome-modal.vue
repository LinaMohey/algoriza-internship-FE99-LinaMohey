<template>
  <!-- making a container for backdrop effect -->
  <div class="modal-backdrop">
    <!-- the modal container -->
    <div class="modal-container">
      <div class="welcome-modal">
        <div class="welcome-image">
          <img src="./assets/images/welcome.png" alt="welcome-image" />
        </div>
        <!-- modal title -->
        <h4 class="modal-title">Welcome to My Dream Place</h4>
        <!-- modal text -->
        <p class="modal-text">
          You can now enjoy your travel experience with easy access to resources
          and more
        </p>
        <!-- emitting custom event to close the modal -->
        <button @click="$emit('closeModal')" class="modal-button">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
