<template>
  <div class="welcome-card">
    <div class="welcome-image">
      <img src="@/assets/welcome-section/welcome.png" alt="welcome-image" />
    </div>
    <h4>Welcome to My Dream Place</h4>
    <p>
      You can now enjoy your travel experience with easy access to resources and
      more
    </p>
    <router-link :to="{ name: 'search-results' }"> Get Started</router-link>
  </div>
</template>
