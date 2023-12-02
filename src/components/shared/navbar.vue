<template>
  <nav>
    <div class="flex justify-between items-center p-25">
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
          class="dropdown-menu absolute right-0 bg-white border rounded-md shadow-md z-50"
        >
          <ul class="">
            <li class="flex items-center px-4 cursor-pointer">
              <div>
                <img
                  src="@/assets/drop-down/user.png"
                  alt=""
                  class="mr-2 h-6 w-6"
                />
              </div>
              <div class="">Manage account</div>
            </li>

            <li class="flex items-center px-4 cursor-pointer">
              <div><img src="@/assets/drop-down/plane.png" alt="" /></div>
              <div>My trips</div>
            </li>

            <li class="flex items-center px-4 cursor-pointer">
              <div><img src="@/assets/drop-down/wallet.png" alt="" /></div>
              <div>Reward and wallet</div>
            </li>

            <li class="flex items-center px-4 cursor-pointer">
              <button @click="signOut">
                <div><img src="@/assets/drop-down/logout.png" alt="" /></div>
                <div>Sign out</div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Login Button -->
      <router-link
        v-else
        :to="{ name: 'sign-in' }"
        class="bg-blueColor-100 text-white rounded-md px-15 py-5"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useAuthStore } from "@/views/authentication/store/auth";

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
