<template>
  <logo> </logo>
  <div class="form">
    <h4>Sign in</h4>
    <label for="email"></label>
    <input type="email" id="email" />
    <label for="password"></label>
    <input type="password" id="password" />
    <button c>Sign in</button>
    <div>
      <p>Don't have an account?</p>
      <router-link :to="{ name: 'Register' }"> Register</router-link>
    </div>
  </div>
</template>
