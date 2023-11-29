<template>
  <navbar> </navbar>
  <div class="max-w-screen-xl mx-auto">
    <slot></slot>
  </div>
  <the-footer> </the-footer>
</template>

<script setup>
import Navbar from "@/components/UI/navbar.vue";
import TheFooter from "@/components/UI/the-footer.vue";
</script>
