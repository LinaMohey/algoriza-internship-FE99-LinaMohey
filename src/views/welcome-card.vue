<template>
  <section class="flex-register-login">
    <div class="bg-white p-8 rounded shadow-md max-w-md">
      <div class="welcome-card">
        <div class="welcome-image">
          <img src="@/assets/welcome-section/welcome.png" alt="welcome-image" />
        </div>

        <h4 class="text-center m-10">Welcome to My Dream Place</h4>
        <p class="mb-50 text-center">
          You can now enjoy your travel experience with easy access to resources
          and more
        </p>

        <router-link :to="{ name: 'home-page' }" class="input-button"
          >Get Started</router-link
        >
      </div>
    </div>
  </section>
</template>
