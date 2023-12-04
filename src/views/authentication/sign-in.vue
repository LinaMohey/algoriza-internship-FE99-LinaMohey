<template>
  <!-- sign in form -->
  <section class="sign-in">
    <logo class="p-10 mx-50"> </logo>
    <loading-spinner v-if="loading"></loading-spinner>

    <div class="flex-register-login">
      <div class="form" v-if="!loading">
        <h4 class="title-login-register">Sign in</h4>
        <label for="email" class="text-sm">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="input-login-register"
        />
        <label for="password" class="text-sm">Password</label>
        <div class="relative">
          <input
            v-model="password"
            :type="inputType"
            id="password"
            class="input-login-register pr-10"
          />
          <img
            src="./assets/images/eye.png"
            @click="togglePasswordVisibility"
            class="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 -mt-5 mx-1"
          />
        </div>

        <button @click="submitForm" class="input-button">Sign in</button>
        <div class="mt-4 flex items-center">
          <p class="text-sm mx-1">Don't have an account?</p>
          <router-link :to="{ name: 'Register' }" class="text-blueColor-100"
            >Register</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/views/authentication/store/auth";

const loading = ref(false);
const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();
const showPassword = ref(true);
const inputType = ref("password");

// function to toggle the password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  inputType.value = showPassword.value ? "text" : "password";
};

// submit the data of form and re-direct
const submitForm = async () => {
  loading.value = true; // Show loading spinner when the form is being submitted

  try {
    const isUser = await authStore.signIn(email.value, password.value);

    if (isUser) {
      authStore.showModal = true;
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push({ path: "/" });
    } else {
      console.log("You are not a user.");
    }
  } catch (error) {
    console.error("An error occurred during sign-in:", error);
  } finally {
    loading.value = false;
  }
};
</script>
