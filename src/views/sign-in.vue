<template>
  <logo> </logo>
  <div class="form">
    <h4>Sign in</h4>
    <label for="email"></label>
    <input v-model="email" type="email" id="email" />
    <label for="password"></label>
    <input v-model="password" type="password" id="password" />
    <button @click="submitForm">Sign in</button>
    <div>
      <p>Don't have an account?</p>
      <router-link :to="{ name: 'Register' }"> Register</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();

const submitForm = async () => {
  const isUser = await authStore.signIn(email.value, password.value);
  if (isUser) {
    // if the register is successful
    router.push({ path: "/welcome" });
  } else {
    console.log("You are not a user.");
  }
};
</script>
