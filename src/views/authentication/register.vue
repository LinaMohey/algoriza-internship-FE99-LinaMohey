<template>
  <logo class="p-10 mx-50"></logo>

  <loading-spinner v-if="loading"> </loading-spinner>
  <div class="flex-register-login">
    <div class="form" v-if="!loading">
      <h4 class="title-login-register">Register</h4>

      <!-- Email input -->
      <label for="email" class="text-sm">Email address</label>
      <input
        class="input-login-register"
        v-model="email"
        type="email"
        id="email"
      />

      <!-- Password input -->
      <label for="password" class="text-sm">Password</label>
      <div class="relative">
        <input
          v-model="password"
          :type="passwordInputType"
          id="password"
          class="input-login-register pr-10"
        />
        <!-- Toggle password visibility -->
        <img
          src="./assets/images/eye.png"
          @click="togglePasswordVisibility('passwordInputType')"
          class="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 -mt-5 mr-1"
        />
      </div>

      <!-- Confirm Password input -->
      <label for="confirm-password" class="text-sm">Confirm Password</label>
      <div class="relative">
        <input
          v-model="confirmPassword"
          :type="confirmPasswordInputType"
          id="confirm-password"
          class="input-login-register pr-10"
        />
        <!-- Toggle confirm password visibility -->
        <img
          src="./assets/images/eye.png"
          @click="togglePasswordVisibility('confirmPasswordInputType')"
          class="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 -mt-5 mr-1"
        />
      </div>

      <!-- Submit button -->
      <button @click="submitForm" class="input-button">Submit</button>

      <!-- Already have an account link -->
      <div class="mt-4 flex items-center">
        <p class="mx-1">Already have an account?</p>
        <router-link :to="{ name: 'sign-in' }" class="text-blueColor-100">
          Sign-in
        </router-link>
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
const passwordInputType = ref("password");
const confirmPasswordInputType = ref("password");
const loading = ref(false);

// function to toggle password visibility
const togglePasswordVisibility = field => {
  if (field === "passwordInputType") {
    passwordInputType.value =
      passwordInputType.value === "password" ? "text" : "password";
  } else if (field === "confirmPasswordInputType") {
    confirmPasswordInputType.value =
      confirmPasswordInputType.value === "password" ? "text" : "password";
  }
};

// function to handle form submission
const submitForm = async () => {
  loading.value = true;

  const isRegister = await authStore.register(
    email.value,
    password.value,
    confirmPassword.value
  );

  loading.value = false;

  if (isRegister) {
    await new Promise(resolve => setTimeout(resolve, 500));
    router.push({ path: "/welcome" });
  } else {
    console.log("registration failed.");
  }
};
</script>
