<template>
  <logo> </logo>
  <div class="form">
    <h4>Register</h4>
    <label for="email"></label>
    <input v-model="email" type="email" id="email" />
    <label for="password"></label>
    <input v-model="password" type="password" id="password" />
    <label for="confirm-password"></label>
    <input v-model="confirmPassword" type="password" id="confirm-password" />
    <button @click="submitForm">Submit</button>
    <div>
      <p>Already have an account?</p>
      <router-link :to="{ name: 'sign-in' }"> Sign-in</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/modules/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();
const authStore = useAuthStore();

const submitForm = async () => {
  const isRegister = await authStore.register(
    email.value,
    password.value,
    confirmPassword.value
  );

  if (isRegister) {
    // if the register is successful
    router.push({ name: "welcome-card" });
  } else {
    console.log("Registration failed.");
  }
};
</script>
