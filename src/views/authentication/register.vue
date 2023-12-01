<template>
  <logo class="p-10 mx-50"> </logo>
  <div class="flex-register-login">
    <div class="form">
      <h4 class="title-login-register">Register</h4>
      <label for="email"></label>
      <input
        class="input-login-register"
        v-model="email"
        type="email"
        id="email"
      />
      <label for="password"></label>
      <input
        class="input-login-register"
        v-model="password"
        type="password"
        id="password"
      />
      <label for="confirm-password"></label>
      <input
        class="input-login-register"
        v-model="confirmPassword"
        type="password"
        id="confirm-password"
      />
      <button @click="submitForm" class="input-button">Submit</button>
      <div class="mt-4 flex items-center">
        <p class="mx-1">Already have an account?</p>
        <router-link :to="{ name: 'sign-in' }" class="text-blueColor-100">
          Sign-in</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/views/authentication/store/auth";
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
    router.push("/welcome");
    console.log("Successful registration");
  } else {
    console.log("Registration failed.");
  }
};
</script>
@/views/authentication/store/auth
