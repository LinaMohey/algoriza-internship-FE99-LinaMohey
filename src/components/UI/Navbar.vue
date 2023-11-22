<template>
  <nav>
    <div class="container">
      <div class="logo">
        <img src="../../assets/logo/logo.png" alt="logo-icon" />
        <span> my Dream Place</span>
      </div>
      <div class="links">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Activities</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <router-link :to="{ name: 'Register' }" class="register-button"
        >Register</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: space-around;
}
</style>
