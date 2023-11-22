<template>
  <logo> </logo>
  <div class="form">
    <h4>Register</h4>
    <label for="email"></label>
    <input type="email" id="email" />
    <label for="password"></label>
    <input type="password" id="password" />
    <label for="confirm-password"></label>
    <input type="confirm-password" id="confirm-password" />
    <button>Submit</button>
    <div>
      <p>Already have an account?</p>
      <router-link :to="{ name: 'Sign-in' }"> Sign-in</router-link>
    </div>
  </div>
</template>
