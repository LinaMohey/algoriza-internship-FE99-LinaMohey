<template>
  <!-- main layout to use in all pages , nav , content and footer -->
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
