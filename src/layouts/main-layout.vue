<template>
  <navbar> </navbar>
  <div class="max-w-1350 mx-auto">
    <slot></slot>
  </div>
  <the-footer> </the-footer>
</template>

<script setup>
import Navbar from "@/components/shared/navbar.vue";
import TheFooter from "@/components/shared/the-footer.vue";
</script>
