<template>
  <nav>
    <Navbar />
  </nav>
  <slot></slot>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Navbar from "@/components/UI/Navbar.vue";
import Footer from "@/components/UI/Footer.vue";
</script>
