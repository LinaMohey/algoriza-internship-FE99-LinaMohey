<template>
  <!-- the navbar -->
  <nav>
    <div class="flex justify-between items-center p-25">
      <!-- logo component -->
      <logo></logo>

      <!-- navigation links -->
      <div class="links flex gap-48">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Activities</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <!-- if the user authenticated then show the drop down -->
      <div v-if="isLoggedIn" class="user-dropdown relative">
        <!-- notification image and user -->
        <div class="flex gap-4 justify-center items-center">
          <div>
            <img src="@/assets/notification.png" alt="notifications" />
          </div>
          <div>
            <!-- when the user toggle at the menu it will show the drop menu -->
            <img
              @click="toggleDropdown"
              src="@/assets/user.png"
              alt="User Image"
              class="cursor-pointer"
            />
          </div>
        </div>
        <!-- the drop down will be shown with some options -->
        <div
          v-if="showDropdown"
          class="dropdown-menu absolute right-0 bg-white border rounded-xl shadow-md z-50 min-w-200"
        >
          <ul class="drop-down-options">
            <li class="dropdown-list">
              <div>
                <img src="@/assets/drop-down/user.png" alt="drop-down-images" />
              </div>
              <div>Manage account</div>
            </li>
            <hr />

            <li class="dropdown-list">
              <div>
                <img
                  src="@/assets/drop-down/plane.png"
                  alt="drop-down-images"
                />
              </div>
              <router-link :to="{ path: '/my-trips' }">My trips</router-link>
            </li>
            <hr />

            <li class="dropdown-list">
              <div>
                <img
                  src="@/assets/drop-down/wallet.png"
                  alt="drop-down-images"
                />
              </div>
              <div>Reward and wallet</div>
            </li>
            <hr />

            <li class="dropdown-list">
              <div>
                <img
                  src="@/assets/drop-down/logout.png"
                  alt="drop-down-images"
                />
              </div>
              <div @click="signOut">Sign out</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- if the user not authenicated then show the login button instead -->
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

// getting from store the authentication state
const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.isAuthenticated);
const showDropdown = ref(false);

// toggling the dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// the sign out function
const signOut = () => {
  authStore.signOut();
  showDropdown.value = false;
};
</script>
