<template>
  <section class="sign-in">
    <logo class="p-10 mx-50"> </logo>
    <div class="flex-register-login">
      <div class="form">
        <h4 class="title-login-register">Sign in</h4>
        <label for="email" class="text-sm">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="input-login-register"
        />
        <label for="password" class="text-sm">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="input-login-register"
        />
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
