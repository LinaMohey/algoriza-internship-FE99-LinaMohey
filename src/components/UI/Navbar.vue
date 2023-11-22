<template>
  <nav>
    <div class="container">
      <logo> </logo>
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
