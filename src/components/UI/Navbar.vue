<template>
  <nav>
    <div class="container flex justify-around gap-48 p-4">
      <logo> </logo>
      <div class="links flex gap-48">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Activities</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <router-link
        :to="{ name: 'sign-in' }"
        class="bg-blueColor text-white rounded-md px-3 py-1"
        >Login</router-link
      >
    </div>
  </nav>
</template>
