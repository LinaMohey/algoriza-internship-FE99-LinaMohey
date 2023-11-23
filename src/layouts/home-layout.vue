<template>
  <navbar> </navbar>
  <slot></slot>
  <the-footer> </the-footer>
</template>

<script setup>
import Navbar from "@/components/UI/navbar.vue";
import TheFooter from "@/components/UI/the-footer.vue";
</script>
