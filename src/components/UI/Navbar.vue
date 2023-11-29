<template>
  <nav>
    <div class="flex justify-between items-center p-4">
      <logo></logo>

      <!-- Navigation Links -->
      <div class="links flex gap-48">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Activities</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <!-- User Dropdown -->
      <div v-if="isLoggedIn" class="user-dropdown relative">
        <div class="flex gap-4 justify-center items-center">
          <div>
            <img src="@/assets/notification.png" alt="notifications" />
          </div>
          <div>
            <img
              @click="toggleDropdown"
              src="@/assets/user.png"
              alt="User Image"
              class="cursor-pointer"
            />
          </div>
        </div>

        <div
          v-if="showDropdown"
          class="dropdown-menu absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2 z-50"
        >
          <button @click="signOut" class="text-red-500">Sign Out</button>
        </div>
      </div>

      <!-- Login Button -->
      <router-link
        v-else
        :to="{ name: 'sign-in' }"
        class="bg-blueColor text-white rounded-md px-3 py-1"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useAuthStore } from "@/store/modules/auth";

const authStore = useAuthStore();

const isLoggedIn = computed(() => authStore.isAuthenticated);

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const signOut = () => {
  authStore.signOut();
  showDropdown.value = false; // Close the dropdown after signing out
  // You can add additional logic or emit events if needed
};
</script>
